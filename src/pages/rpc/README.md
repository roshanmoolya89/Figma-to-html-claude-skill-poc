RPC page

Open the page locally:
1. Open `src/pages/rpc/rpc.html` in a browser. It is an XHTML 1.0 Transitional document; most modern browsers will render it as HTML but will respect the doctype.
2. The page references shared assets located at `src/assets/` (photos and logo). Icon placeholders are referenced from `src/assets/icons/`.

Notes:
- This build references assets from `src/assets/` to avoid duplicating large binary files. If you require a fully self-contained `src/pages/rpc/assets/` directory, copy the desired files from `src/assets/` into it.
- The responsive breakpoint at 768px is an implementation assumption (Figma provided only a desktop frame). This should be confirmed with the designer before final sign-off.
