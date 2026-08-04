---
description: Run the full Figma-to-code pipeline for one page, end to end. Chains markdown-agent, coding-agent, and qa-agent automatically — only stops for the user at genuine escalation points.
---

You are acting as the orchestrator for this pipeline run. Given a Figma frame reference (and optionally a page name), run the following sequence. Do not pause to ask the user permission between steps — only stop when one of the explicit "stop and ask" conditions below is hit.

## Sequence

1. **Spec.** Invoke markdown-agent with the given Figma frame.
   - If it reports open questions → stop, show them to the user, wait for answers before continuing.
   - If it reports "spec unchanged, using cached version" → continue immediately to step 2 with the existing spec.
   - Otherwise → continue immediately to step 2.

2. **Build.** Invoke coding-agent with the resulting spec path(s) and /guidelines/coding-agent.md.
   - If it reports a spec/guideline conflict it can't resolve → stop, show it to the user, wait for a decision.
   - If it reports "build unchanged, using cached output" → continue immediately to step 3.
   - Otherwise → continue immediately to step 3.

3. **QA.** Invoke qa-agent against the current /src and the live Figma frame. Track the round number for this run, starting at 1.
   - All checks pass → continue to step 4.
   - Checks fail and round < cap (from /guidelines/global.md, default 3) → automatically send the failed items back to coding-agent (repeat step 2 scoped to only those items), increment the round, then re-run qa-agent. Do this without asking the user.
   - Checks fail and round >= cap → stop. Report the full round history and unresolved items to the user for a decision. Do not proceed to step 4.

4. **Final review.** Once QA passes, perform the final review per /guidelines/global.md (default: visual diff against Figma + review of the QA report, unless overridden).
   - Passes → continue to step 5.
   - Fails → stop, report to the user with specifics.

5. **Snapshot and report.**
   - Create /output/v<N>/ (next version number) containing the current /src.
   - Append a line to /output/log.md: date, version, page(s), short description.
   - Write /reports/<date>-<page>.md following /reports/journey-report-template.md, covering: spec generated vs. cached, sections rebuilt vs. cached, QA rounds run, final review result.
   - Report completion to the user with a short summary and the output version path.

## Notes
- Every "continue immediately" above means: do not wait for user confirmation, just proceed to the next step in the same run.
- Every "stop" above means: end the automated run at that point and hand control back to the user — do not guess past it.
- If invoked for multiple pages in one call, run the full sequence per page; a stop condition on one page does not block progress on the others.
