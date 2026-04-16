# Known Bugs & Issues

## TTC Preview (intentionally left as-is)

- **TTC global CSS leakage**: The TTC preview (`TTC_Preview/`) uses plain `.css` files (`TTC.css`, `flowers.css`, `background.css`, `leaf.css`, `modal.css`) instead of CSS/SCSS modules. Class names like `.form`, `.button`, `.ground`, `.sky`, `.sun` are global and can collide with other styles.
- **Checkbox removal bug in TTC**: `TTCForm.js` `multipleCheckboxHandler` (line ~42) pushes `newCheckedBox` instead of `elem` when filtering, so unchecking a box produces incorrect state.
- **Loose equality in TTC**: `TTCForm.js` uses `==`/`!=` in several places (lines 40, 92, 104, 121, 186, 188, 194).
