# Coding agent guidelines

<!-- Authored by you. The coding agent treats every line here as binding. -->

## Markup

- Use only <div> for structural elements — no <header>, <nav>, <footer>, <main>, <section>, <article>, <aside>, or any other HTML5 semantic tag. Use classes to indicate role instead (e.g. <div class="site-header">, <div class="main-nav">).
- Write XHTML-compliant syntax: all tags and attributes lowercase, all attribute values quoted, all void elements self-closed (<br />, <img />, <input />, <hr />), every tag properly closed and properly nested.
- Use the XHTML 1.0 Transitional doctype at the top of every page unless told otherwise.

## Measurements

- Use the exact width, height, padding, and margin values recorded in the spec for each element — these come directly from Figma via markdown-agent, never estimated or rounded to "close enough" values.
- If a measurement isn't present in the spec for an element you're building, do not guess or use a default — flag it to the orchestrator as missing, the same as any other open question.
- Do not substitute relative units (%, em, rem, auto) for a value the spec gives as a fixed px measurement, unless the guideline elsewhere or the spec's "Responsive behavior" section explicitly calls for it.

## Content and assets

- Copy all text content exactly as it appears in the Figma frame — emails, addresses, phone numbers, names, GSTIN/registration numbers. Never paraphrase, auto-correct, or "complete" a value that looks incomplete or unfamiliar.
- Do not add background colors or containers to logo/icon elements unless the spec explicitly defines one.

## CSS

- Class naming: kebab-case (not camelCase)
- Define --color-primary, --color-secondary, --color-accent (and any other tokens from spec-shared.md) in :root
- Reference variables in rules — never hardcode a hex value that has a token
- Prefer BEM-style naming for reusable components

## HTML

<!-- add project-specific conventions here -->

## JS

<!-- add project-specific conventions here -->
