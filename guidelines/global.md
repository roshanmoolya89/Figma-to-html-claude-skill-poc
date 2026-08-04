# Global guidelines
<!-- Applies to every agent. Authored by you — agents never infer or propose their own guidelines. -->

## QA loop
- Max rounds before escalation to orchestrator: 3

## Final review
- Method: visual diff + QA report review (default). Change to "visual diff only" or "QA report only" here if you want to override.

## Caching
- Guideline changes bump the hash in /guidelines/meta.json, which invalidates any cached coding/QA results that depended on that guideline.

## Output versioning
- /src is the single working copy — the source cache logic diffs against, and where coding-agent always edits in place.
- Only the orchestrator writes to /output/. A new /output/vN/ snapshot is created only when a page passes QA *and* final review — not on every build, not on intermediate QA-loop fix attempts.
- Each snapshot appends one line to /output/log.md: date, version, page(s), short description of what changed.
