---
description: Reset cache metadata so agents regenerate from scratch instead of reusing cached results. Does not touch /output/ history, /src/ code, or existing spec content.
---

You are resetting cache state, not deleting real work. Never touch /output/ or /src/ content, or existing /design/spec-*.md files — only the cache metadata files listed below.

## What counts as cache metadata
- /design/spec.meta.json (spec cache — per-frame Figma source hashes)
- /src/build.meta.json (build cache — per-section spec+guideline hashes)
- /qa/cache.json (QA cache — per-check result hashes)
- /guidelines/meta.json (guideline cache — per-file hashes)

## Process

1. If the user didn't specify a scope, ask which of the following they want, using these options: **all caches**, **spec cache only**, **build cache only**, **QA cache only**, **guideline cache only**.

2. For each selected file, reset its contents back to the empty skeleton structure (same shape as when the kit was first set up — empty objects/tables, no hashes, no "last generated"/"last built" values). Do not delete the file itself and do not touch its surrounding folder.

3. Report back exactly which files were reset and confirm that:
   - /output/ (version snapshots + log.md) is untouched
   - /src/ (current working code) is untouched
   - /design/spec-*.md content (the actual generated specs) is untouched — only the cache hashes that track whether they're "up to date" are cleared

## Effect
After this runs, the next `/build-page` (or manual agent invocation) will treat every relevant stage as stale and regenerate it in full, regardless of whether the underlying Figma frame, spec, or guidelines actually changed — this is the point of a manual reset.
