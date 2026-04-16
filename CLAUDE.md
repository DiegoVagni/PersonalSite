# PersonalSite — Diego Vagni's Portfolio

Personal portfolio website at **https://www.diegovagni.com**, built from scratch with React (class components) and deployed on Firebase Hosting.

## Tech Stack

- **React 18** (CRA via `react-scripts 5`) — predominantly class components, a few functional components
- **react-router-dom 6** — client-side routing with `BrowserRouter`
- **SCSS Modules** — all styling via `.module.scss` files, CSS variables driven by JSON theme files
- **SASS** (`sass ^1.70`)
- **react-transition-group** — page transition animations in the TTC preview
- **Firebase Hosting** — project ID `site-3c894`, rewrites all paths to `index.html` (SPA)
- **No external UI library** — all UI components (navbar, modal, select, button, card, stamps) are custom-built

## Scripts

```bash
npm start     # dev server (CRA)
npm run build # production build → /build
npm test      # jest (CRA default)
```

Deploy: `firebase deploy` (serves the `/build` directory)

## Routing

Defined in `src/App.js` using `<Routes>`:

| Path         | Component   | Description                              |
|--------------|-------------|------------------------------------------|
| `/`          | `Home`      | Hero image with positioned link labels   |
| `/about`     | `About`     | Timeline cards of life/career milestones |
| `/projects`  | `Projects`  | Project showcase cards with previews     |
| `/skills`    | `CV`        | Skills bars, soft skills, CV download    |
| `/contacts`  | `Contacts`  | Email, LinkedIn, GitHub, Instagram       |

On the home page (`/`), the NavBar is hidden (transparent, settings-only). On all other pages it's a fixed top bar.

## App Lifecycle (src/App.js)

`App` is a **class component** wrapped with `withLocation()` HOC to inject `useLocation().pathname`.

1. **Mount**: loads default theme via `StyleSheet.loadDefaultstyle()`, then loads locale via `Locale.ChangeLocale()`
2. Shows `<Loading>` (animated cube) until both are ready (`state.ready`)
3. On first load, if animations are enabled, shows `<StartAnimation>` for 4.5 seconds, then switches to main content
4. Renders `<DVNavBar>` + `<Page>` wrapper + `<Routes>` + `<PrivacyPolicyWrapper>`

## Custom Systems (no libraries)

### Localization (`src/utils/Locale.js`)

A static class that fetches JSON locale files at runtime:
- **Locale files**: `public/Locals/en.json`, `public/Locals/it.json`
- **Invariant labels**: `src/resources/invariant_labels.json` — language-independent strings (tech names, external brand names)
- `Locale.ChangeLocale(code, callback)` — fetches the JSON, builds a `Map`, calls the refresh callback
- `Locale.GetMessages(key)` — returns invariant first, then localized text, or `"MissingLocal"` if not found
- `Locale.ParseMessage(msg)` — splits on `\n` and inserts `<br/>` via React Fragments
- User's choice persisted in `localStorage["locale"]`
- Supported: `en` (English), `it` (Italian)
- Locale keys also serve as lookup keys for CSS variable names (e.g., `"--Navbar_Color"` maps to its human-readable label in both languages)

### Theming (`src/utils/StyleSheet.js`)

A static class managing theme colors via CSS custom properties:
- **Theme files**: `public/Themes/Light.json`, `public/Themes/Dark.json` — flat JSON objects mapping CSS variable names to hex colors
- `StyleSheet.loadstyle(index, callback)` — fetches theme JSON, stores in a `Map`, applies each as a CSS custom property on `window.root`, persists to `localStorage["style"]`
- `StyleSheet.loadDefaultstyle(callback)` — loads from localStorage if available, otherwise loads theme index 0 (Light)
- `StyleSheet.changeStyle(key, value)` — updates a single CSS variable at runtime
- `StyleSheet.toggleAnimations()` — toggles animation flag, persisted in `localStorage["animations"]`
- User can pick a theme from dropdown OR customize every individual color via color pickers in the settings modal
- Export: user can copy the full style JSON to clipboard

**CSS variable list** (27 theme variables): `--Navbar_Color`, `--Navbar_Active_Button_Color`, `--Navbar_Hover_Button_Color`, `--Navbar_Button_Border_Color`, `--Navbar_Text_Color`, `--Navbar_ActiveText_Button_Color`, `--Navbar_Hover_Text_Button_Color`, `--Button_Text_Color`, `--Setting_Button_Border_Color`, `--Modal_Color`, `--Modal_Border`, `--Home_Links_Color`, `--Shadow`, `--Text_Color`, `--Page_Background`, `--Card_Background`, `--Button_Color`, `--Cool_Stamp`, `--New_Stamp`, `--Cool_Stamp_BorderColor`, `--New_Stamp_BorderColor`, `--WelcomeAnimColor1`–`4`, `--Select_BackgroundColor`

Additional static variables in `ThemeVariables.module.scss`: font families (`--Parag_Font`, `--Title_Font`, `--Link_Font`, `--NavBar_Font`), competence bar colors, stamp rotation, border sizes.

### Key Generator (`src/utils/KeyGenerator.js`)

Static auto-incrementing integer used as React `key` prop throughout the app. Wraps at `Number.MAX_SAFE_INTEGER`.

## Component Architecture

### General (reusable) — `src/components/general/`

| Component          | File(s)                        | Description                                                    |
|--------------------|--------------------------------|----------------------------------------------------------------|
| `NavBar`           | `navBar/NavBar.js`             | Responsive navbar: full buttons >500px, hamburger menu <500px. On `/` shows only settings gear. |
| `NavBarButton`     | `navBar/NavBarButton.js`       | React Router `<Link>` styled as nav button, active state based on current path |
| `NavBarSubMenu`    | `navBar/NavBarSubMenu.js`      | Dropdown container below navbar, optionally with trapezoid pointer |
| `MenuButton`       | `navBar/MenuButton.js`         | Icon button — `<Link>` if `to` prop given, `<img>` with `onClick` otherwise |
| `MiniButton`       | `navBar/MiniButton.js`         | Smaller variant of MenuButton for mobile hamburger |
| `Button`           | `Button/Button.js`             | Generic styled `<button>` with text |
| `Modal`            | `Modal/Modal.js`               | Portal-based modal (`ReactDOM.createPortal` into `#root`). Show/hide via prop, optional fixed height, close button + extra buttons |
| `Select` / `Option`| `Select/Select.js`, `Option.js`| Custom `<select>` wrapper, takes `values` array of `{name, value}` |

### Site-level — `src/components/siteComponents/`

| Component              | Description                                                              |
|------------------------|--------------------------------------------------------------------------|
| `DVNavBar`             | Configured NavBar instance with site-specific buttons: Home, Projects, About, Skills, Contacts, Settings |
| `Card`                 | Main content card with title, optional subtitle, optional preview, optional stamp ("new"/"cool"), responsive stamp visibility (>800px) |
| `CardStat`             | Icon + label + value row inside a card (e.g., "Team size: 2 devs") |
| `Preview`              | Generic preview container for card previews |
| `ImgPreview`           | Image-based card preview |
| `IFramePreview`        | IFrame-based card preview (used for site self-preview) |
| `DownloadPDFSection`   | Renders download links for PDF files (CV, thesis) |
| `PrivacyPolicyWrapper` | GDPR privacy banner — shows on first visit, stored in `localStorage["privacyAccepted"]`. Localized text from locale files |

### Settings — `src/components/siteComponents/settings/`

| Component             | Description                                                           |
|-----------------------|-----------------------------------------------------------------------|
| `SettingMenu`         | Settings dropdown: language selector, theme selector, color customizer, animation toggle, licenses |
| `SettingContainer`    | Row layout wrapper for each setting |
| `LanguageSelector`    | `<Select>` bound to `Locale.localeList` |
| `ThemeSheetSelector`  | `<Select>` bound to `StyleSheet.themes`, triggers `loadstyle()` |
| `ChangeColorButton`   | Opens modal with a `<ColorPicker>` for each CSS variable. Apply button saves changes, export button copies JSON to clipboard |
| `ColorPicker`         | `<input type="color">` with a localized label for each CSS variable |
| `AnimationState`      | Checkbox toggle for `StyleSheet.animation` |
| `LicensesButton`      | Opens modal with attribution: stamp CodePen, cube CodePen, start animation CodePen, SVGRepo icons, Carolina Sebastiano icons |
| `TrapezoidUp`         | CSS trapezoid pointing up, used as dropdown pointer arrow |

### Page-Specific — `src/components/pagesComponents/`

**Home** (`home/homeImage/`):
- `HomeImage` — Responsive hero: desktop (>1200px wide, >1000px tall) shows centered circular photo with 4 diagonal link arms (TopLeft→Contacts, BottomLeft→About, TopRight→Projects, BottomRight→Skills); narrow screens show vertical link list; short screens show horizontal link list
- `HomeLink` — Positioned link with decorative dash line, top or bottom border
- `DashLessHomeLink` — Simple text link for mobile layout

**About** (`aboutMe/`):
- `AboutMeCard` — Card rendering `{title}_Description` from locale. Used for life milestones: FirstSteps, H-Farm, SUPSIME (university), TAG, Vodafone, PartTime, G3CLABSME, OnlyMe (gap year), Passions

**Projects** (`projectPage/`):
- `ProjectCard` — Extends Card with: date range subtitle, stats row (time, team size, committer, GitHub link), technology icons, localized description, optional downloads section, optional stamp
- `ProjectTecnologies` — Row of tech icon + label pairs
- Projects showcased: This Site, Communication Framework, SmashWorld, Thesis, TTC, LudoGame, LastRun, TwitchStats

**TTC Preview** (`projectPage/TTC_Preview/`):
An embedded live demo of the TTC (form) project within the portfolio. Complete mini-app:
- `TTC.js` — Renders sky/ground/sun background with randomly placed CSS flowers, embeds `TTCForm`
- `TTCForm.js` — 3-page form wizard with animated transitions (`react-transition-group`). Pages: string/vowel/number inputs → date picker → checkboxes → submit summary. Validation via `FakePromises` (simulated async validation). Custom `Modal` for error messages
- Form components: `FormFirstPage`, `FormSecondPage`, `FormThirdPage`, `SubmitPage`, `SubmitEntry`
- Field components: `StringInputField`, `NumericInputField`, `DatePickerField`, `CheckInputField`, `GroupCheckInputField`, `InputField`
- Utils: `DateUtils`, `FakePromises`, `StringUtils`
- Own CSS files (not SCSS modules): `TTC.css`, `flowers.css`, `background.css`, `leaf.css`, `modal.css`

**CV/Skills** (`cv/`):
- `SkillsPageSection` — Section wrapper with title (Hard Skills, Soft Skills)
- `SkillContainer` — Sub-section with optional subtitle (Programming Languages, Frameworks, etc.)
- `CompetenceBarContainer` — Icon + CompetenceBar, wrapping CompetenceContainer
- `CompetenceContainer` — Row with icon and child content, animated slide-in
- `CompetenceBar` — Visual bar: 10 segments filled/empty based on `competenceLevel/maxCompetence`, color-coded (basic/medium/good/excellent), with text label
- `SoftSkill` — Icon + text, no bar (for soft skills like Empathy, Teamwork, etc.)

**Contacts** (`contacts/`):
- `ContactInfo` — Icon + social name + child content (link or text), with fade animation
- `SmallContactInfo` — Smaller variant used in licenses modal

**Util Pages** (`utilPages/`):
- `Loading` — Centered "LOADING" text + animated 3D cube (if screen >800px and animations enabled)

### Cool Animations — `src/components/coolAnims/`

- **Cube** (`cube/Cube.js`) — Pure CSS 3D animated cube grid (~100 nested cube divs). Used on loading screen. Inspired by [CodePen](https://codepen.io/t_afif/pen/PoJeqwN)
- **Stamp** (`stamp/Stamp.js`) — CSS stamp effect with folded corners. Types: "new" (red) and "cool" (blue). Rotation via CSS variable. Inspired by [CodePen](https://codepen.io/slimsmearlapp/pen/DqVqPy)
  - `NewStamp` / `CoolStamp` — Preconfigured stamp instances
- **StartAnimation** (`startAnimation/StartAnimation.js`) — 4.5-second intro animation with geometric shapes (circles, lines, rhombuses, double blocks). Plays once on first visit if animations enabled. Inspired by [CodePen](https://codepen.io/hisamikurita/pen/oNvEjMj)

## SCSS Architecture

Global styles in `src/scss/`:

| File                        | Purpose                                                      |
|-----------------------------|--------------------------------------------------------------|
| `ThemeVariables.module.scss`| `:root` CSS variable definitions (defaults for all theme vars, fonts, competence colors) |
| `App.module.scss`           | Page layout, body/html/root resets, `SkillSectionLayout`, `CVSection` |
| `Anim.module.scss`          | `FadeAnim2Sec` (opacity fade), `RightAnim2Sec` (slide-in from right), `fadeIn` (scale+opacity) |
| `Containers.module.scss`    | Layout containers: `CompetenceContainer`, `CVPageContainer`, `ContactContainer`, `CVSectionContainer`, `TechContainer`, `ButtonContainer` |
| `Flexes.module.scss`        | Flex utility classes: `FlexColumnCenter`, `FlexRowCenter`, `FlexColumnCenterTop`, `FlexRowEvenly`, `FlexRowStart`, `FlexRowEnd`, `FlexRowBetween`, `Wrap` |
| `Images.module.scss`        | Size classes: `SmallImage` (64px), `MediumImage` (128px), `LargeImage` (512px), `BigImage` (full width), `SmallerImage` (32px), `FixedHeightSmallImage` |
| `Texts.module.scss`         | Typography: `NormalText` (1.5rem), `ButtonText` (1rem), `TitleText` (2.5rem), `SubTitleText` (2rem), `BigText` (3rem), `BiggestText` (4rem), `SmallText` (0.5rem), `ParagText` (justified), `HiddenLink`, `NoWrap`, `Centered` |
| `Utils.module.scss`         | Spacing: `SmallMargin` (15px), `SmallMarginSide`, `Width` (100%), `RightMargin` |

Component-level `.module.scss` files are colocated with their components.

## Responsiveness

- **NavBar**: full buttons ≥500px width, hamburger dropdown <500px
- **HomeImage**: 3 layouts — diagonal links (≥1200px wide, ≥1000px tall), vertical list (narrow), horizontal list (short)
- **Card stamps**: hidden <800px width
- **Loading cube**: hidden <800px width or height
- **Privacy banner**: scaled down at <500px
- All managed via `window.addEventListener("resize")` in class component lifecycle

## Static Assets

- `public/Downloads/cv/` — `cveng.pdf`, `cvita.pdf` (CV in English and Italian)
- `public/Downloads/tesi/` — `tesi.pdf`, `poster_tesi.pdf` (thesis and poster)
- `src/resources/icons/` — ~40 SVG icons (tech logos, soft skill icons, UI icons, flags, social icons)
- `src/resources/images/` — project preview images (PNG/JPG)

## SEO & Privacy

- Meta tags: Open Graph, Twitter Card, description, keywords, canonical URL
- `robots.txt`: allows major search engines, blocks Baidu/Yandex
- `sitemap.xml`: lists 5 main pages (note: `/projexts` typo in sitemap)
- Content-Security-Policy header in `index.html`
- Usercentrics CMP (cookie consent) loaded in `index.html`
- Privacy policy popup (GDPR-compliant) with localStorage persistence

## localStorage Keys

| Key                | Purpose                                    |
|--------------------|--------------------------------------------|
| `locale`           | Selected language code (`en` / `it`)       |
| `style`            | Serialized theme Map (JSON array of entries)|
| `ThemeIndex`       | Index of selected theme preset (0 or 1)    |
| `animations`       | `"true"` / `"false"` animation toggle      |
| `privacyAccepted`  | `"true"` if privacy banner was dismissed   |

## Known Issues / Notes

- `sitemap.xml` has a typo: `/projexts` instead of `/projects`
- Twitter meta tag has placeholder `@yourTwitterHandle`
- The TTC preview uses global CSS (not SCSS modules) which could leak styles
- `KeyGenerator` uses a global static counter for React keys — works but unconventional
- Components are predominantly class components (React 18 supports them but functional components with hooks are the modern pattern)
- No test files exist beyond CRA defaults
- Font `"old london"` is referenced but not loaded via @font-face or Google Fonts — falls back to `sans-serif`
