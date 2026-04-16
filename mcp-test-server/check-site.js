import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

const BASE = process.argv[2] || "http://localhost:3000";
const ROUTES = ["/", "/about", "/projects", "/skills", "/contacts"];

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const report = [];

for (const route of ROUTES) {
  const url = BASE.replace(/\/$/, "") + route;
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  const consoleMsgs = [];
  const pageErrors = [];
  const failed = [];

  page.on("console", (m) => consoleMsgs.push({ type: m.type(), text: m.text() }));
  page.on("pageerror", (e) => pageErrors.push(e.message));
  page.on("requestfailed", (r) =>
    failed.push({ url: r.url(), reason: r.failure()?.errorText || "unknown" })
  );
  page.on("response", (r) => {
    if (r.status() >= 400) failed.push({ url: r.url(), reason: `HTTP ${r.status()}` });
  });

  let status = "n/a";
  let title = "";
  let bodyPreview = "";
  try {
    const res = await page.goto(url, { waitUntil: "networkidle2", timeout: 30_000 });
    status = res?.status() ?? "n/a";
    await new Promise((r) => setTimeout(r, 1500));
    title = await page.title();
    bodyPreview = (await page.evaluate(() => document.body?.innerText || "")).slice(0, 200);
  } catch (err) {
    pageErrors.push(`navigation: ${err.message}`);
  }

  const errs = consoleMsgs.filter((m) => m.type === "error");
  const warns = consoleMsgs.filter((m) => m.type === "warning");

  report.push(`\n=== ${route}  [HTTP ${status}]  title="${title}"`);
  report.push(`page errors: ${pageErrors.length}, console errors: ${errs.length}, console warns: ${warns.length}, failed requests: ${failed.length}`);
  pageErrors.forEach((e) => report.push(`  ! PAGE  ${e}`));
  errs.forEach((e) => report.push(`  x CONS  ${e.text}`));
  warns.slice(0, 5).forEach((w) => report.push(`  ~ WARN  ${w.text}`));
  failed.forEach((f) => report.push(`  x NET   [${f.reason}] ${f.url}`));
  if (bodyPreview) report.push(`  body: ${bodyPreview.replace(/\s+/g, " ")}`);

  const shotPath = path.resolve(`mcp-test-server/shot-${route.replace(/\//g, "_") || "_root"}.png`);
  try {
    await page.screenshot({ path: shotPath, fullPage: false });
    report.push(`  shot: ${shotPath}`);
  } catch {}

  await page.close();
}

await browser.close();
console.log(report.join("\n"));
