# Components Reference

## Utilities (`src/utils/`)

### Locale.js
Static class that powers the entire internationalization system. On language change, fetches the matching JSON file (`public/Locals/en.json` or `it.json`) via HTTP, parses it into a `Map`, and triggers an app refresh. `GetMessages(key)` looks up a key first in the invariant map (language-independent labels like "C#", "Java", "GitHub") then in the active locale map. Returns `"MissingLocal"` if not found. Also handles `\n` in locale strings by splitting them into React Fragments with `<br/>` tags. Persists the user's language choice to `localStorage["locale"]`.

### StyleSheet.js
Static class that manages the entire color theming system. Stores 27 CSS variable values in a `Map`. On startup, loads from `localStorage` if a saved theme exists, otherwise fetches the default theme JSON (`public/Themes/Light.json`). Applies colors by setting CSS custom properties on `window.root` (intended to be `document.documentElement`). Provides `changeStyle(key, value)` for individual color updates, `loadstyle(index)` to switch between Light/Dark presets, and `toggleAnimations()` to enable/disable site-wide animations. Persists theme data, theme index, and animation preference to `localStorage`.

### KeyGenerator.js
Static auto-incrementing counter that returns a unique integer each call. Used throughout the app as React `key` props. Wraps back to 0 at `Number.MAX_SAFE_INTEGER`.

---

## Page Layouts (`src/pagesLayouts/`)

### Page.js
Wrapper component applied to all pages except the startup animation. Sets the full-viewport page container with the `--Page_Background` color and applies a 2-second fade-in animation (if animations are enabled).

### Home.js
The landing page. Renders only the `HomeImage` component — a centered circular photo of Diego with diagonal navigation links to the four main sections.

### About.js
Chronological timeline of Diego's life and career. Renders 9 `AboutMeCard` components in order: FirstSteps (childhood), H-Farm (startup incubator), SUPSIME (university), TAG (innovation school), Vodafone (internship), PartTime (Swiss work), G3CLABSME (metaverse startup), OnlyMe (gap year), Passions.

### Projects.js
Portfolio showcase. Renders 8 `ProjectCard` components, each with a preview (image or iframe), technology icons, stats (duration, team size, commissioner), GitHub link, and localized description. Projects: This Site, Communication Framework, SmashWorld, Thesis, TTC, LudoGame, LastRun, TwitchStats. Some have downloadable PDFs (thesis) and live previews (TTC embedded form, site self-referencing iframe).

### CV.js
Skills and competencies page. Split into two sections: Hard Skills (programming languages, markup languages, frameworks, spoken languages, miscellaneous like software design and AI prompting) rendered as animated competence bars, and Soft Skills (empathy, self-awareness, teamwork, flexibility, fast learner) rendered as icon+label pairs. Ends with a download section for the CV in Italian and English PDF.

### Contacts.js
Contact information page. Renders 4 `ContactInfo` components in a row: Email, Instagram (coming soon), LinkedIn (linked), GitHub (linked).

---

## General Components (`src/components/general/`)

### NavBar (`navBar/NavBar.js`)
The main responsive navigation bar. Has three rendering modes:
- **Home page (`/`)**: transparent background, only the settings gear button visible (aligned right)
- **Desktop (>=500px)**: fixed top bar with home icon, 4 navigation buttons (Projects, About, Skills, Contacts), and settings gear. Active page is highlighted
- **Mobile (<500px)**: fixed top bar with home icon, a hamburger menu that drops down to show navigation buttons, and settings gear

Listens to `window.resize` to switch between desktop and mobile. Manages two independent toggles: the hamburger dropdown and the settings submenu (opening one closes the other).

### NavBarButton (`navBar/NavBarButton.js`)
A single navigation link rendered as a React Router `<Link>`. Styled as a full-height bar segment with left/right borders. Applies an active style when the current route matches its `to` prop, and a hover highlight style on mouseover.

### NavBarSubMenu (`navBar/NavBarSubMenu.js`)
A dropdown container that appears below the navbar. Positioned fixed, full-width. Optionally renders a `TrapezoidUp` pointer arrow. Used for both the mobile nav dropdown and the settings menu.

### MenuButton (`navBar/MenuButton.js`)
An icon button used in the navbar for the home link and the settings gear. If a `to` prop is provided, wraps the icon in a React Router `<Link>`. Otherwise renders an `<img>` with an `onClick` handler. 64x64px with hover highlight and shadow.

### MiniButton (`navBar/MiniButton.js`)
Smaller variant of MenuButton used for the mobile hamburger toggle. Same link-or-click logic, uses a fixed-height image style.

### Button (`Button/Button.js`)
Generic styled button with rounded corners and the theme's `--Button_Color` background. Renders a text label inside. Used in modals (Close, Apply, Export), the color picker open button, and TTC form navigation.

### Modal (`Modal/Modal.js`)
A portal-based modal dialog rendered into `#root` via `ReactDOM.createPortal`. Show/hide controlled by a `show` prop (`display:block` / `display:none`). Fixed position centered on screen (40% width, 10% from top). Has two height modes: fixed 80% of viewport (for the color picker), or fit-content (for licenses). Always renders a Close button at the bottom, plus any additional buttons passed via the `buttons` prop. Used by the color customizer, the licenses popup, and TTC error messages.

### Select (`Select/Select.js`)
A styled `<select>` dropdown wrapper. Takes a `values` array of `{name, value}` objects and renders `<Option>` children. Used for the language selector and theme selector in settings.

### Option (`Select/Option.js`)
A single `<option>` element inside a Select. Styled with the theme's font and `--Select_BackgroundColor`.

---

## Site Components (`src/components/siteComponents/`)

### DVNavBar (`navBar/DVNavBar.js`)
The site-specific configuration of the generic NavBar. Defines the exact buttons: home icon linking to `/`, four nav links (Projects, About, Skills, Contacts), and the settings gear icon. Passes down `languageChange` and `refreshApp` callbacks.

### Card (`card/Card.js`)
The main content container used across the site for projects and about-me entries. A bordered box with shadow, rounded corners, and the theme's `--Card_Background` color. Features:
- Title (localized via key)
- Optional subtitle (used for date ranges on project cards)
- Optional preview area (image, iframe, or embedded component)
- Optional stamp overlay ("new" or "cool") — only shown on screens wider than 800px
- Children slot for the card body content

### CardStat (`card/CardStat.js`)
A small inline stat display: icon + label + value, all in a row. Used inside project cards to show metrics like "Team size: 2 devs", "Needed time: 1 month", "Commissioned by: SUPSI".

### Preview (`card/previews/Preview.js`)
A container div for card preview content. Sets 80% width with rounded corners and margin. Wraps either an image, an iframe, or an embedded React component.

### ImgPreview (`card/previews/ImgPreview.js`)
An image-based card preview. Renders an `<img>` tag inside a `Preview` container, full-width with rounded corners. The `local` prop provides the alt-text lookup key. Used for project screenshots (SmashWorld, LastRun, LudoGame, etc.).

### IFramePreview (`card/previews/IFramePreview.js`)
An iframe-based card preview. Embeds a live page inside a `Preview` container with a minimum height of 400px. Used for the "This Site" project card, which embeds the site itself as a preview.

### DownloadPDFSection (`siteComponents/DownloadPDFSection.js`)
A download section that renders a localized title and a list of download links. Each link has a `download` filename, an `href` source path, and a localized label. Used in two places: the CV page (Italian and English CV PDFs) and the thesis project card (thesis PDF and poster PDF).

### PrivacyPolicyWrapper (`privacy/PrivacyPolicyWrapper.js`)
GDPR compliance component. On first visit (no `localStorage["privacyAccepted"]`), shows a fixed bottom banner with the full privacy policy text (localized in both English and Italian). The text explains Google Analytics usage, data rights under GDPR, and contact info. Clicking "OK" saves acceptance to localStorage and hides the banner permanently. Rendered at the bottom of every page via `App.js`.

---

## Settings Components (`src/components/siteComponents/settings/`)

### SettingMenu (`SettingMenu.js`)
The settings dropdown panel. Absolutely positioned below the navbar, right-aligned, with a colored background and border matching the navbar theme. Contains 5 rows:
1. "Change language" label + `LanguageSelector`
2. "Change theme" label + `ThemeSheetSelector`
3. "Personalize theme" label + `ChangeColorButton`
4. "Animations" label + `AnimationState` checkbox
5. `LicensesButton` (Licenses link)

### SettingContainer (`SettingContainer.js`)
A simple flex-row wrapper used to lay out each settings row (label on the left, control on the right).

### LanguageSelector (`LanguageSelector.js`)
A `Select` dropdown pre-populated with the two available languages (English, Italiano). Its current value reflects `Locale.defaultLocale`. On change, calls `languageChange` which propagates up to `App.ChangeLanguage`, fetches the new locale JSON, and refreshes the app.

### ThemeSheetSelector (`ThemeSheetSelector.js`)
A `Select` dropdown listing the available theme presets (Light, Dark). Reads the current theme index from `localStorage["ThemeIndex"]`. On change, calls `StyleSheet.loadstyle(index)` which fetches the theme JSON, applies all CSS variables, saves to localStorage, and refreshes the app.

### ChangeColorButton (`ChangeColorButton.js`)
The most complex settings component. A button that opens a full-height modal containing a color picker for each of the 27 theme CSS variables. Maintains a local `values` Map of pending color changes. Each color picker input fires `change()` which updates the pending map. The modal has three actions:
- **Close**: hides the modal, discards unapplied changes
- **Apply**: writes all pending colors to `StyleSheet`, saves to `localStorage`, and refreshes the app
- **Export style to JSON**: copies the full style map as JSON to the clipboard (with side-effect of also applying the pending changes to the internal map)

The localized label for each picker comes from the CSS variable name itself (e.g., `"--Navbar_Color"` maps to "Navbar color" in English or "Colore navbar" in Italian).

### ColorPicker (`ColorPicker.js`)
A single row inside the color customizer modal: a localized label on the left and an `<input type="color">` on the right. The CSS variable name is stored in a `target` attribute on the input element. On change, the parent's `change` handler reads the target attribute to know which variable was modified.

### AnimationState (`AnimationState.js`)
A checkbox that reflects and toggles `StyleSheet.animation`. When toggled, calls `StyleSheet.toggleAnimations()` (which updates the boolean and persists to `localStorage["animations"]`) and then refreshes the app. When animations are off, all fade-ins, slide-ins, the intro animation, and the loading cube are skipped.

### LicensesButton (`LicensesButton.js`)
A clickable text label ("Licenses") that opens a modal with attribution credits. Lists the CodePen inspirations for the stamp effect, the 3D cube, and the intro animation, plus SVGRepo as the icon source and Carolina Sebastiano as the creator of custom icons (with her Instagram linked). Has hover cursor logic via state, though the referenced CSS classes are missing.

### TrapezoidUp (`TrapezoidUp.js`)
A purely decorative CSS element: three `<span>` elements styled to form an upward-pointing trapezoid/arrow. Positioned at the top-right of the settings submenu to visually connect the dropdown to the settings gear button above it.

---

## Page-Specific Components (`src/components/pagesComponents/`)

### HomeImage (`home/homeImage/HomeImage.js`)
The hero section of the landing page. Renders Diego's circular profile photo centered on screen. Has three responsive layouts:
- **Full desktop (>=1200px wide, >=1000px tall)**: the photo sits in a 900x900px container. Four `HomeLink` components are absolutely positioned at the corners (TopLeft=Contacts, BottomLeft=About, TopRight=Projects, BottomRight=Skills), each with a decorative diagonal dash connecting it visually toward the photo
- **Narrow (<1200px)**: photo on top, four `DashLessHomeLink` text links stacked vertically below
- **Short (<1000px tall)**: photo on top, four `DashLessHomeLink` text links in a horizontal row below

### HomeLink (`home/homeImage/HomeLink.js`)
A positioned navigation link for the full-desktop home layout. Renders a React Router `<Link>` with a localized label and a styled border (top or bottom) to indicate direction. An `<hr>` element creates a diagonal decorative dash line, rotated 45 degrees to point toward the center photo. Position and rotation are set via CSS classes (TopLeft, BottomRight, etc.).

### DashLessHomeLink (`home/homeImage/DashLessHomeLink.js`)
A simplified navigation link for mobile/tablet home layouts. Just a centered React Router `<Link>` with a large text label in the theme's `--Home_Links_Color`. No decorative dashes or absolute positioning.

### AboutMeCard (`aboutMe/AboutMeCard.js`)
A Card component pre-configured for about-me timeline entries. Takes a `title` prop (e.g., `"H-Farm"`), renders the localized title as the card heading and `{title}_Description` as the card body text. The description texts are substantial paragraphs about each life/career milestone, with `\n` newlines rendered as `<br/>`.

### ProjectCard (`projectPage/ProjectCard.js`)
A Card component extended for project showcase entries. Takes a `title` prop and renders:
- Card title (localized project name)
- Subtitle: `{title}_Starting_Date` — `{title}_End_Date`
- Preview: an image, iframe, or embedded component
- Stats row: 4 `CardStat` items (time needed, team size, commissioned by, GitHub link)
- Technologies row: `ProjectTecnologies` showing tech icons
- Description: localized `{title}_Description` paragraph
- Optional downloads section (for thesis PDFs)
- Optional stamp overlay ("new" or "cool")

### ProjectTecnologies (`projectPage/ProjectTecnologies.js`)
A flex-row of technology badges. Each badge is an SVG icon with the technology name below it. Receives a `tech` array of `[iconSrc, label]` pairs. Used inside each ProjectCard to show what technologies the project uses (e.g., C#, Unity, React, CSS).

### ContactInfo (`contacts/ContactInfo.js`)
A contact card for the Contacts page. Renders a medium icon (128px), a title (social platform name), and children content (email text, link, or "coming soon"). Applies a 2-second fade-in animation if animations are enabled.

### SmallContactInfo (`contacts/SmallContactInfo.js`)
A compact version of ContactInfo used in the Licenses modal. Renders a small icon (32px), a label, and children content (Instagram link). No animation.

### Loading (`utilPages/Loading.js`)
The initial loading screen shown while the theme and locale are being fetched. Centered layout with "LOADING" text. If the viewport is larger than 800x800px and animations are enabled, also renders the animated 3D Cube component above the text.

---

## CV/Skills Components (`src/components/pagesComponents/cv/`)

### SkillsPageSection (`SkillsPageSection.js`)
A top-level section wrapper for the skills page. Renders a large title (e.g., "Hard Skills" or "Soft Skills") and wraps its children. Sets the section to 80% width.

### SkillContainer (`SkillContainer.js`)
A sub-section within a skills page section. Optionally renders a subtitle (e.g., "Programming Languages", "Frameworks"). Wraps its children in a flex-row with wrapping. Applies a 2-second fade animation if enabled.

### CompetenceBarContainer (`CompetenceBarContainer.js`)
A composition wrapper that combines `CompetenceContainer` (icon + layout) with `CompetenceBar` (visual bar). Passes through all props: icon source, skill name, max competence, current level, optional text label.

### CompetenceContainer (`CompetenceContainer.js`)
A row layout with a small icon on the left and child content on the right. Applies a slide-in-from-right animation if animations are enabled. Used for both hard skills (with a CompetenceBar child) and soft skills (with just a text label child).

### CompetenceBar (`competenceBar/CompetenceBar.js`)
The visual skill level indicator. Renders a row of 10 small rectangular segments. Filled segments are colored based on the skill ratio:
- <=30%: red (Basic)
- <=50%: yellow (Medium)
- <=80%: green (Good)
- >80%: dark green (Excellent)

Empty segments are transparent. Below the bar, shows either a custom text (e.g., "Native language" for Italian, "C1" for English) or the auto-calculated level label.

### SoftSkill (`SoftSkill.js`)
A simplified competence display for soft skills. Uses `CompetenceContainer` for the icon and animation, but instead of a bar just shows the skill name as text. Used for: Empathy, Self-awareness, Teamwork, Flexibility, Fast Learner.

---

## Cool Animations (`src/components/coolAnims/`)

### Cube (`cube/Cube.js`)
A pure-CSS animated 3D cube grid. Renders ~100 nested div structures, each representing a small cube with 6 face panels. The CSS (in `Cube.module.scss`) uses `transform-style: preserve-3d` and keyframe animations to create a rotating, cascading 3D cube effect. Shown on the loading screen when viewport is large enough. Inspired by a CodePen by Temani Afif.

### Stamp (`stamp/Stamp.js`)
A decorative CSS stamp effect overlaid on project cards. A 200x200px box with a background color, border, and two corner folds created via CSS pseudo-elements (`::before` and `::after`) using transparent borders. Supports two types:
- **"new"**: uses `--New_Stamp` color (red) with `--New_Stamp_BorderColor` border
- **"cool"**: uses `--Cool_Stamp` color (blue) with `--Cool_Stamp_BorderColor` border

Rotation is controlled via the `--base-stamp-rot` CSS variable. Sets CSS variables on `document.documentElement` for the parent card's background color (used by the corner fold effect). Inspired by a CodePen by slimsmearlapp.

### NewStamp (`stamp/prefabStamps/NewStamp.js`)
A pre-configured Stamp with type "new". Renders the localized "NEW" text (or "NUOVO" in Italian) inside the red stamp.

### CoolStamp (`stamp/prefabStamps/CoolStamp.js`)
A pre-configured Stamp with type "cool". Renders the localized "COOL" text inside the blue stamp.

### StartAnimation (`startAnimation/StartAnimation.js`)
A 4.5-second fullscreen intro animation that plays once on the very first page load (if animations are enabled). Composed of 8 sequential animation phases using pure CSS keyframes:
1. Radiating bars
2. Expanding shapes
3. Rotating circles with inner elements
4. Starburst lines in 8 directions
5. Colored blocks (green, navy, yellow, blue, red) with double wrappers
6. Nested rhombus shapes scaling outward
7. Hexagonal line pattern with center circle
8. Final radiating bars

After 4.5 seconds, calls the `end` callback (provided by App) which switches `state.first` to false and transitions to the main site content. Colors are driven by `--WelcomeAnimColor1` through `--WelcomeAnimColor4`. Inspired by a CodePen by Hisamikurita.

---

## TTC Preview (`src/components/pagesComponents/projectPage/TTC_Preview/`)

An entire embedded mini-application within the portfolio — a live demo of the TTC form project.

### TTC (`TTC.js`)
The root component of the TTC preview. Renders a scene with a sky gradient background, a sun circle, and a ground area with randomly generated CSS flowers (9-18 flowers, randomly positioned, in 4 color variants: red, pink, blue, white). Each flower has animated petals via CSS. The `TTCForm` sits on top of this scene.

### TTCForm (`Components/TTCForm.js`)
A 3-page form wizard with animated page transitions (using `react-transition-group`'s `SwitchTransition` + `CSSTransition`). Manages the full form state: string input, vowel input, number input, date input, grouped checkboxes, and a single required checkbox. Navigation: "next page" advances, "back" goes back, page 3's "final Submit" completes the form. Each page transition is validated via `FakePromises` — if validation fails, a modal shows an error hint. After submission, shows a summary page.

### FormFirstPage (`Components/FormPages/FormFirstPage.js`)
The first form page. Three input fields: a generic string input, a vowel-only input, and a numeric input (must be 42). Uses `StringInputField` and `NumericInputField`.

### FormSecondPage (`Components/FormPages/FormSecondPage.js`)
The second form page. A single date picker input that must be set to a future date. Uses `DatePickerField`.

### FormThirdPage (`Components/FormPages/FormThirdPage.js`)
The third form page. A required single checkbox ("Accept terms") and a group of optional checkboxes (multiple selection). Uses `CheckInputField` and `GroupCheckInputField`.

### SubmitPage (`Components/SubmitPage.js`)
The confirmation page shown after successful form submission. Displays all the collected values in a summary layout using `SubmitEntry` components.

### SubmitEntry (`Components/SubmitEntry.js`)
A single key-value display row on the submit summary page.

### Button (`Components/Button.js`)
A simple button component local to TTC (separate from the site's general Button). Renders a styled `<button>` with children as label and an `onClick` handler via the `clickhandler` prop.

### Modal (`Components/Modal.js`)
A simple modal component local to TTC (separate from the site's general Modal). Shows/hides based on a `show` prop, with a close button. Used to display validation error messages.

### InputField (`Components/Fields/InputField.js`)
Base input wrapper for TTC form fields. Renders a label and wraps child input elements. Has a decorative leaf CSS animation on the input container.

### StringInputField (`Components/Fields/StringInputField.js`)
A text input for generic strings. Extends InputField with an `<input type="text">` and calls `parentSetState` on change.

### NumericInputField (`Components/Fields/NumericInputField.js`)
A number input. Extends InputField with an `<input type="number">` and calls `parentSetState` on change.

### DatePickerField (`Components/Fields/DatePickerField.js`)
A date input. Extends InputField with an `<input type="date">`. Formats the value for display using `DateUtils`.

### CheckInputField (`Components/Fields/CheckInputField.js`)
A single checkbox input. Renders a labeled checkbox that toggles a boolean in the parent state.

### GroupCheckInputField (`Components/Fields/GroupCheckInputField.js`)
A group of checkboxes for multiple selection. Renders several labeled checkboxes, each firing the parent's `multipleCheckboxHandler`.

### FakePromises (`utils/FakePromises.js`)
Simulated async validation for the TTC form. Returns resolved or rejected promises based on form state: page 1 requires non-empty string, a vowel, and the number 42; page 2 requires a future date; page 3 requires the first checkbox to be checked.

### DateUtils (`utils/DateUtils.js`)
Date formatting helper for the TTC form. Converts date strings to display formats.

### StringUtils (`utils/StringUtils.js`)
String helper for the TTC form. Provides utility functions for string validation (e.g., checking if a character is a vowel).
