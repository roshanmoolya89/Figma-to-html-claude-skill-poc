# QA agent guidelines

<!-- Authored by you. Anything QA should specifically check beyond the default spec/Figma/guideline comparison goes here. -->

## Markup checks

- Flag any HTML5 semantic tag (header, nav, footer, main, section, article, aside) — these are always a fail under the div-only rule.
- Flag any unclosed tag, unquoted attribute, or non-self-closed void element — these break XHTML validity.
- Confirm the XHTML doctype is present.

## Measurement tolerance

- Width, height, padding, and margin must match the spec within ±1px. Treat anything beyond that as a fail — don't average it out as "close enough."
