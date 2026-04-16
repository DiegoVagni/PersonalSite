import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";

const PROJECT_ROOT = path.resolve(
  path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1")),
  ".."
);

// ── helpers ──────────────────────────────────────────────────────────

function run(cmd, cwd = PROJECT_ROOT) {
  try {
    return {
      success: true,
      output: execSync(cmd, { cwd, encoding: "utf-8", timeout: 120_000, stdio: ["pipe", "pipe", "pipe"] }),
    };
  } catch (err) {
    return {
      success: false,
      output: (err.stdout || "") + "\n" + (err.stderr || err.message),
    };
  }
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(path.resolve(PROJECT_ROOT, filePath), "utf-8"));
}

function collectFiles(dir, ext, list = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "node_modules" && entry.name !== ".git") {
      collectFiles(full, ext, list);
    } else if (entry.isFile() && full.endsWith(ext)) {
      list.push(full);
    }
  }
  return list;
}

// ── server ───────────────────────────────────────────────────────────

const server = new McpServer({
  name: "personalsite-test-server",
  version: "1.0.0",
});

// ── Tool: build ──────────────────────────────────────────────────────

server.tool(
  "build",
  "Run a production build (npm run build) and report success or errors",
  {},
  async () => {
    const result = run("npm run build");
    return {
      content: [
        {
          type: "text",
          text: result.success
            ? `Build succeeded.\n\n${result.output.slice(-500)}`
            : `Build FAILED.\n\n${result.output}`,
        },
      ],
    };
  }
);

// ── Tool: lint ───────────────────────────────────────────────────────

server.tool(
  "lint",
  "Run ESLint on the src/ directory and report warnings/errors",
  {},
  async () => {
    const result = run("npx eslint src/ --ext .js,.jsx --no-error-on-unmatched-pattern --format stylish 2>&1 || true");
    return {
      content: [
        {
          type: "text",
          text: result.output.trim() || "No lint issues found.",
        },
      ],
    };
  }
);

// ── Tool: validate_locale_keys ───────────────────────────────────────

server.tool(
  "validate_locale_keys",
  "Compare en.json and it.json locale files — report keys missing from either side",
  {},
  async () => {
    const en = readJson("public/Locals/en.json");
    const it = readJson("public/Locals/it.json");
    const enKeys = new Set(Object.keys(en));
    const itKeys = new Set(Object.keys(it));

    const missingInIt = [...enKeys].filter((k) => !itKeys.has(k));
    const missingInEn = [...itKeys].filter((k) => !enKeys.has(k));

    const lines = [];
    if (missingInIt.length) {
      lines.push(`Keys in en.json but MISSING in it.json (${missingInIt.length}):`);
      missingInIt.forEach((k) => lines.push(`  - ${k}`));
    }
    if (missingInEn.length) {
      lines.push(`Keys in it.json but MISSING in en.json (${missingInEn.length}):`);
      missingInEn.forEach((k) => lines.push(`  - ${k}`));
    }
    if (!lines.length) lines.push("All locale keys are in sync.");

    lines.push("", `Total keys — en: ${enKeys.size}, it: ${itKeys.size}`);

    return { content: [{ type: "text", text: lines.join("\n") }] };
  }
);

// ── Tool: validate_locale_usage ──────────────────────────────────────

server.tool(
  "validate_locale_usage",
  "Scan source files for Locale.GetMessages() calls and check that every key exists in en.json and invariant_labels.json",
  {},
  async () => {
    const en = readJson("public/Locals/en.json");
    const invariant = readJson("src/resources/invariant_labels.json");
    const allKeys = new Set([...Object.keys(en), ...Object.keys(invariant)]);

    const srcDir = path.join(PROJECT_ROOT, "src");
    const jsFiles = collectFiles(srcDir, ".js");

    const usedKeys = new Set();
    const dynamicCalls = [];
    const regex = /Locale\.GetMessages\(\s*["'`]([^"'`]+)["'`]\s*\)/g;
    const dynamicRegex = /Locale\.GetMessages\(\s*(?!["'`])(.+?)\s*\)/g;

    for (const file of jsFiles) {
      const content = fs.readFileSync(file, "utf-8");
      const relPath = path.relative(PROJECT_ROOT, file);
      let match;

      while ((match = regex.exec(content)) !== null) {
        usedKeys.add(match[1]);
      }

      while ((match = dynamicRegex.exec(content)) !== null) {
        dynamicCalls.push({ file: relPath, expression: match[1] });
      }
    }

    const missing = [...usedKeys].filter((k) => !allKeys.has(k)).sort();

    const lines = [];
    if (missing.length) {
      lines.push(`Static keys used in code but MISSING from locale/invariant files (${missing.length}):`);
      missing.forEach((k) => lines.push(`  - "${k}"`));
    } else {
      lines.push("All statically-used locale keys exist in en.json or invariant_labels.json.");
    }

    if (dynamicCalls.length) {
      lines.push("", `Dynamic GetMessages() calls that cannot be statically checked (${dynamicCalls.length}):`);
      dynamicCalls.forEach((c) => lines.push(`  - ${c.file}: GetMessages(${c.expression})`));
    }

    lines.push("", `Static keys found in code: ${usedKeys.size}`, `Total available keys: ${allKeys.size}`);

    return { content: [{ type: "text", text: lines.join("\n") }] };
  }
);

// ── Tool: validate_themes ────────────────────────────────────────────

server.tool(
  "validate_themes",
  "Compare Light.json and Dark.json theme files — report missing/extra CSS variable keys",
  {},
  async () => {
    const light = readJson("public/Themes/Light.json");
    const dark = readJson("public/Themes/Dark.json");
    const lightKeys = new Set(Object.keys(light));
    const darkKeys = new Set(Object.keys(dark));

    const missingInDark = [...lightKeys].filter((k) => !darkKeys.has(k));
    const missingInLight = [...darkKeys].filter((k) => !lightKeys.has(k));

    const lines = [];
    if (missingInDark.length) {
      lines.push(`Keys in Light.json but MISSING in Dark.json:`);
      missingInDark.forEach((k) => lines.push(`  - ${k}`));
    }
    if (missingInLight.length) {
      lines.push(`Keys in Dark.json but MISSING in Light.json:`);
      missingInLight.forEach((k) => lines.push(`  - ${k}`));
    }
    if (!lines.length) lines.push("Theme files have identical key sets.");

    // Validate hex format
    const badValues = [];
    const hexRegex = /^#[0-9A-Fa-f]{6}$/;
    for (const [k, v] of Object.entries({ ...light, ...dark })) {
      if (!hexRegex.test(v)) badValues.push(`${k}: "${v}"`);
    }
    if (badValues.length) {
      lines.push("", `Non-standard hex values:`);
      badValues.forEach((v) => lines.push(`  - ${v}`));
    }

    lines.push("", `Light keys: ${lightKeys.size}, Dark keys: ${darkKeys.size}`);

    return { content: [{ type: "text", text: lines.join("\n") }] };
  }
);

// ── Tool: validate_routes_sitemap ────────────────────────────────────

server.tool(
  "validate_routes_sitemap",
  "Extract routes defined in App.js and compare them against sitemap.xml entries",
  {},
  async () => {
    const appJs = fs.readFileSync(path.join(PROJECT_ROOT, "src/App.js"), "utf-8");
    const routeRegex = /path=["']([^"']+)["']/g;
    const routes = new Set();
    let m;
    while ((m = routeRegex.exec(appJs)) !== null) routes.add(m[1]);

    const sitemap = fs.readFileSync(path.join(PROJECT_ROOT, "public/sitemap.xml"), "utf-8");
    const locRegex = /<loc>https?:\/\/[^<]*?(\/.*)(?:<\/loc>)/g;
    const sitemapPaths = new Set();
    while ((m = locRegex.exec(sitemap)) !== null) {
      const p = m[1].replace(/\/$/, "") || "/";
      sitemapPaths.add(p);
    }

    const missingInSitemap = [...routes].filter((r) => !sitemapPaths.has(r));
    const extraInSitemap = [...sitemapPaths].filter((p) => !routes.has(p));

    const lines = [];
    lines.push(`Routes in App.js: ${[...routes].join(", ")}`);
    lines.push(`Paths in sitemap.xml: ${[...sitemapPaths].join(", ")}`);

    if (missingInSitemap.length) {
      lines.push("", "Routes MISSING from sitemap:");
      missingInSitemap.forEach((r) => lines.push(`  - ${r}`));
    }
    if (extraInSitemap.length) {
      lines.push("", "Sitemap paths NOT matching any route (possible typos):");
      extraInSitemap.forEach((r) => lines.push(`  - ${r}`));
    }
    if (!missingInSitemap.length && !extraInSitemap.length) {
      lines.push("", "Routes and sitemap are in sync.");
    }

    return { content: [{ type: "text", text: lines.join("\n") }] };
  }
);

// ── Tool: check_downloads ────────────────────────────────────────────

server.tool(
  "check_downloads",
  "Verify that all PDF download links referenced in the source code actually exist on disk",
  {},
  async () => {
    const srcDir = path.join(PROJECT_ROOT, "src");
    const jsFiles = collectFiles(srcDir, ".js");
    const hrefRegex = /(?:from|href)\s*:\s*["']([^"']+\.pdf)["']/g;

    const refs = [];
    for (const file of jsFiles) {
      const content = fs.readFileSync(file, "utf-8");
      let match;
      while ((match = hrefRegex.exec(content)) !== null) {
        refs.push({ file: path.relative(PROJECT_ROOT, file), href: match[1] });
      }
    }

    const lines = [];
    let allGood = true;
    for (const ref of refs) {
      const fullPath = path.join(PROJECT_ROOT, "public", ref.href);
      const exists = fs.existsSync(fullPath);
      const status = exists ? "OK" : "MISSING";
      if (!exists) allGood = false;
      lines.push(`[${status}] ${ref.href}  (referenced in ${ref.file})`);
    }

    if (!refs.length) lines.push("No PDF references found in source.");
    if (allGood && refs.length) lines.unshift("All referenced PDFs exist.\n");

    return { content: [{ type: "text", text: lines.join("\n") }] };
  }
);

// ── Tool: check_images ───────────────────────────────────────────────

server.tool(
  "check_images",
  "Verify that all image imports in src/ resolve to existing files",
  {},
  async () => {
    const srcDir = path.join(PROJECT_ROOT, "src");
    const jsFiles = collectFiles(srcDir, ".js");
    const importRegex = /import\s+\w+\s+from\s+["']([^"']+\.(?:png|jpg|jpeg|svg|gif|webp))["']/g;

    const results = [];
    for (const file of jsFiles) {
      const content = fs.readFileSync(file, "utf-8");
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        const importPath = match[1];
        const resolved = path.resolve(path.dirname(file), importPath);
        const exists = fs.existsSync(resolved);
        if (!exists) {
          results.push(`[MISSING] ${importPath}  (in ${path.relative(PROJECT_ROOT, file)})`);
        }
      }
    }

    return {
      content: [
        {
          type: "text",
          text: results.length
            ? `Missing image imports:\n${results.join("\n")}`
            : "All image imports resolve to existing files.",
        },
      ],
    };
  }
);

// ── Tool: run_all_checks ─────────────────────────────────────────────

server.tool(
  "run_all_checks",
  "Run all validation checks at once: locale keys, locale usage, themes, routes/sitemap, downloads, images",
  {},
  async () => {
    const tools = [
      "validate_locale_keys",
      "validate_locale_usage",
      "validate_themes",
      "validate_routes_sitemap",
      "check_downloads",
      "check_images",
    ];

    const sections = [];
    for (const toolName of tools) {
      const handler = toolHandlers.get(toolName);
      if (handler) {
        const result = await handler();
        sections.push(`═══ ${toolName} ${"═".repeat(Math.max(0, 50 - toolName.length))}\n${result.content[0].text}`);
      }
    }

    return { content: [{ type: "text", text: sections.join("\n\n") }] };
  }
);

// We need to capture tool handlers for run_all_checks to call them internally.
// Since McpServer doesn't expose handlers directly, we duplicate the logic via a map.
const toolHandlers = new Map();

// Re-register logic in the map for internal reuse
toolHandlers.set("validate_locale_keys", async () => {
  const en = readJson("public/Locals/en.json");
  const it = readJson("public/Locals/it.json");
  const enKeys = new Set(Object.keys(en));
  const itKeys = new Set(Object.keys(it));
  const missingInIt = [...enKeys].filter((k) => !itKeys.has(k));
  const missingInEn = [...itKeys].filter((k) => !enKeys.has(k));
  const lines = [];
  if (missingInIt.length) {
    lines.push(`Keys in en.json but MISSING in it.json (${missingInIt.length}):`);
    missingInIt.forEach((k) => lines.push(`  - ${k}`));
  }
  if (missingInEn.length) {
    lines.push(`Keys in it.json but MISSING in en.json (${missingInEn.length}):`);
    missingInEn.forEach((k) => lines.push(`  - ${k}`));
  }
  if (!lines.length) lines.push("All locale keys are in sync.");
  lines.push("", `Total keys — en: ${enKeys.size}, it: ${itKeys.size}`);
  return { content: [{ type: "text", text: lines.join("\n") }] };
});

toolHandlers.set("validate_locale_usage", async () => {
  const en = readJson("public/Locals/en.json");
  const invariant = readJson("src/resources/invariant_labels.json");
  const allKeys = new Set([...Object.keys(en), ...Object.keys(invariant)]);
  const srcDir = path.join(PROJECT_ROOT, "src");
  const jsFiles = collectFiles(srcDir, ".js");
  const usedKeys = new Set();
  const regex = /Locale\.GetMessages\(\s*["'`]([^"'`]+)["'`]\s*\)/g;
  for (const file of jsFiles) {
    const content = fs.readFileSync(file, "utf-8");
    let match;
    while ((match = regex.exec(content)) !== null) usedKeys.add(match[1]);
  }
  const missing = [...usedKeys].filter((k) => !allKeys.has(k)).sort();
  const lines = [];
  if (missing.length) {
    lines.push(`Keys used in code but MISSING (${missing.length}):`);
    missing.forEach((k) => lines.push(`  - "${k}"`));
  } else {
    lines.push("All statically-used locale keys exist.");
  }
  lines.push("", `Static keys in code: ${usedKeys.size}, Available: ${allKeys.size}`);
  return { content: [{ type: "text", text: lines.join("\n") }] };
});

toolHandlers.set("validate_themes", async () => {
  const light = readJson("public/Themes/Light.json");
  const dark = readJson("public/Themes/Dark.json");
  const lightKeys = new Set(Object.keys(light));
  const darkKeys = new Set(Object.keys(dark));
  const missingInDark = [...lightKeys].filter((k) => !darkKeys.has(k));
  const missingInLight = [...darkKeys].filter((k) => !lightKeys.has(k));
  const lines = [];
  if (missingInDark.length) { lines.push("Missing in Dark:"); missingInDark.forEach((k) => lines.push(`  - ${k}`)); }
  if (missingInLight.length) { lines.push("Missing in Light:"); missingInLight.forEach((k) => lines.push(`  - ${k}`)); }
  if (!lines.length) lines.push("Theme files have identical key sets.");
  return { content: [{ type: "text", text: lines.join("\n") }] };
});

toolHandlers.set("validate_routes_sitemap", async () => {
  const appJs = fs.readFileSync(path.join(PROJECT_ROOT, "src/App.js"), "utf-8");
  const routeRegex = /path=["']([^"']+)["']/g;
  const routes = new Set();
  let m;
  while ((m = routeRegex.exec(appJs)) !== null) routes.add(m[1]);
  const sitemap = fs.readFileSync(path.join(PROJECT_ROOT, "public/sitemap.xml"), "utf-8");
  const locRegex = /<loc>https?:\/\/[^<]*?(\/.*)(?:<\/loc>)/g;
  const sitemapPaths = new Set();
  while ((m = locRegex.exec(sitemap)) !== null) { const p = m[1].replace(/\/$/, "") || "/"; sitemapPaths.add(p); }
  const missingInSitemap = [...routes].filter((r) => !sitemapPaths.has(r));
  const extraInSitemap = [...sitemapPaths].filter((p) => !routes.has(p));
  const lines = [`Routes: ${[...routes].join(", ")}`, `Sitemap: ${[...sitemapPaths].join(", ")}`];
  if (missingInSitemap.length) { lines.push("Missing from sitemap:"); missingInSitemap.forEach((r) => lines.push(`  - ${r}`)); }
  if (extraInSitemap.length) { lines.push("Sitemap paths not matching routes:"); extraInSitemap.forEach((r) => lines.push(`  - ${r}`)); }
  if (!missingInSitemap.length && !extraInSitemap.length) lines.push("In sync.");
  return { content: [{ type: "text", text: lines.join("\n") }] };
});

toolHandlers.set("check_downloads", async () => {
  const srcDir = path.join(PROJECT_ROOT, "src");
  const jsFiles = collectFiles(srcDir, ".js");
  const hrefRegex = /(?:from|href)\s*:\s*["']([^"']+\.pdf)["']/g;
  const refs = [];
  for (const file of jsFiles) {
    const content = fs.readFileSync(file, "utf-8");
    let match;
    while ((match = hrefRegex.exec(content)) !== null) refs.push({ file: path.relative(PROJECT_ROOT, file), href: match[1] });
  }
  const lines = [];
  let allGood = true;
  for (const ref of refs) {
    const exists = fs.existsSync(path.join(PROJECT_ROOT, "public", ref.href));
    if (!exists) allGood = false;
    lines.push(`[${exists ? "OK" : "MISSING"}] ${ref.href}`);
  }
  if (allGood && refs.length) lines.unshift("All PDFs exist.\n");
  if (!refs.length) lines.push("No PDF references found.");
  return { content: [{ type: "text", text: lines.join("\n") }] };
});

toolHandlers.set("check_images", async () => {
  const srcDir = path.join(PROJECT_ROOT, "src");
  const jsFiles = collectFiles(srcDir, ".js");
  const importRegex = /import\s+\w+\s+from\s+["']([^"']+\.(?:png|jpg|jpeg|svg|gif|webp))["']/g;
  const results = [];
  for (const file of jsFiles) {
    const content = fs.readFileSync(file, "utf-8");
    let match;
    while ((match = importRegex.exec(content)) !== null) {
      const resolved = path.resolve(path.dirname(file), match[1]);
      if (!fs.existsSync(resolved)) results.push(`[MISSING] ${match[1]} (in ${path.relative(PROJECT_ROOT, file)})`);
    }
  }
  return { content: [{ type: "text", text: results.length ? results.join("\n") : "All image imports OK." }] };
});

// ── Puppeteer helpers ────────────────────────────────────────────────

async function withBrowser(fn) {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  try {
    return await fn(browser);
  } finally {
    await browser.close();
  }
}

async function instrumentPage(page) {
  const consoleMessages = [];
  const pageErrors = [];
  const failedRequests = [];

  page.on("console", (msg) => {
    consoleMessages.push({ type: msg.type(), text: msg.text() });
  });
  page.on("pageerror", (err) => {
    pageErrors.push(err.message);
  });
  page.on("requestfailed", (req) => {
    failedRequests.push({ url: req.url(), reason: req.failure()?.errorText || "unknown" });
  });
  page.on("response", (res) => {
    if (res.status() >= 400) {
      failedRequests.push({ url: res.url(), reason: `HTTP ${res.status()}` });
    }
  });

  return { consoleMessages, pageErrors, failedRequests };
}

// ── Tool: check_page ─────────────────────────────────────────────────

server.tool(
  "check_page",
  "Load a URL in headless Chrome and report console messages, page errors, and failed network requests",
  {
    url: z.string().describe("URL to load (e.g. http://localhost:3000/ or https://www.diegovagni.com/)"),
    waitMs: z.number().optional().describe("Extra milliseconds to wait after load (default 1500)"),
  },
  async ({ url, waitMs = 1500 }) => {
    try {
      return await withBrowser(async (browser) => {
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });
        const captured = await instrumentPage(page);

        const response = await page.goto(url, { waitUntil: "networkidle2", timeout: 30_000 });
        await new Promise((r) => setTimeout(r, waitMs));

        const title = await page.title();
        const bodyText = (await page.evaluate(() => document.body?.innerText || "")).slice(0, 400);

        const errors = captured.consoleMessages.filter((m) => m.type === "error");
        const warnings = captured.consoleMessages.filter((m) => m.type === "warning");

        const lines = [];
        lines.push(`URL: ${url}`);
        lines.push(`HTTP status: ${response?.status() ?? "n/a"}`);
        lines.push(`Title: ${title}`);
        lines.push(`Page errors: ${captured.pageErrors.length}`);
        captured.pageErrors.forEach((e) => lines.push(`  ! ${e}`));
        lines.push(`Console errors: ${errors.length}`);
        errors.forEach((e) => lines.push(`  ✖ ${e.text}`));
        lines.push(`Console warnings: ${warnings.length}`);
        warnings.slice(0, 10).forEach((w) => lines.push(`  ⚠ ${w.text}`));
        lines.push(`Failed requests: ${captured.failedRequests.length}`);
        captured.failedRequests.forEach((r) => lines.push(`  ✖ [${r.reason}] ${r.url}`));
        lines.push("", "Body text preview:", bodyText);

        return { content: [{ type: "text", text: lines.join("\n") }] };
      });
    } catch (err) {
      return { content: [{ type: "text", text: `check_page FAILED: ${err.message}` }] };
    }
  }
);

// ── Tool: screenshot ─────────────────────────────────────────────────

server.tool(
  "screenshot",
  "Load a URL in headless Chrome and save a PNG screenshot to disk. Returns the file path.",
  {
    url: z.string().describe("URL to load"),
    outPath: z.string().optional().describe("Output path relative to project root (default: mcp-test-server/screenshot.png)"),
    fullPage: z.boolean().optional().describe("Capture full scrollable page (default true)"),
    width: z.number().optional().describe("Viewport width (default 1280)"),
    height: z.number().optional().describe("Viewport height (default 800)"),
  },
  async ({ url, outPath = "mcp-test-server/screenshot.png", fullPage = true, width = 1280, height = 800 }) => {
    try {
      const absOut = path.resolve(PROJECT_ROOT, outPath);
      return await withBrowser(async (browser) => {
        const page = await browser.newPage();
        await page.setViewport({ width, height });
        await page.goto(url, { waitUntil: "networkidle2", timeout: 30_000 });
        await page.screenshot({ path: absOut, fullPage });
        return { content: [{ type: "text", text: `Screenshot saved to ${path.relative(PROJECT_ROOT, absOut)}` }] };
      });
    } catch (err) {
      return { content: [{ type: "text", text: `screenshot FAILED: ${err.message}` }] };
    }
  }
);

// ── Tool: check_all_routes ───────────────────────────────────────────

server.tool(
  "check_all_routes",
  "Load every route from App.js against a base URL and summarize console/page errors per route",
  {
    baseUrl: z.string().describe("Base URL, e.g. http://localhost:3000"),
  },
  async ({ baseUrl }) => {
    try {
      const appJs = fs.readFileSync(path.join(PROJECT_ROOT, "src/App.js"), "utf-8");
      const routes = new Set();
      const routeRegex = /path=["']([^"']+)["']/g;
      let m;
      while ((m = routeRegex.exec(appJs)) !== null) routes.add(m[1]);

      const base = baseUrl.replace(/\/$/, "");
      const lines = [];

      await withBrowser(async (browser) => {
        for (const route of routes) {
          const url = `${base}${route === "/" ? "/" : route}`;
          const page = await browser.newPage();
          const captured = await instrumentPage(page);
          let status = "n/a";
          try {
            const res = await page.goto(url, { waitUntil: "networkidle2", timeout: 30_000 });
            status = res?.status() ?? "n/a";
            await new Promise((r) => setTimeout(r, 1000));
          } catch (err) {
            captured.pageErrors.push(`navigation: ${err.message}`);
          }
          const errors = captured.consoleMessages.filter((c) => c.type === "error");
          lines.push(
            `[${status}] ${route} — page errors: ${captured.pageErrors.length}, console errors: ${errors.length}, failed requests: ${captured.failedRequests.length}`
          );
          captured.pageErrors.forEach((e) => lines.push(`    ! ${e}`));
          errors.forEach((e) => lines.push(`    ✖ ${e.text}`));
          await page.close();
        }
      });

      return { content: [{ type: "text", text: lines.join("\n") || "No routes found." }] };
    } catch (err) {
      return { content: [{ type: "text", text: `check_all_routes FAILED: ${err.message}` }] };
    }
  }
);

// ── start ────────────────────────────────────────────────────────────

const transport = new StdioServerTransport();
await server.connect(transport);
