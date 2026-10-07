# Validation protocol — frozen before collecting results

No interviews, independently authored cases, real pilots or user time measurements have been completed as of 7 October 2026. The 26 passing automated checks are assistant-authored synthetic engineering checks.

## Demand gate

Recruit five BCH freelancers/bookkeepers using [the short interview](INTERVIEW.md). Proceed to pilots if at least three demonstrate a recent recurring evidence handoff problem and at least two consent to supplying redacted cases and trying a real handoff. A positive hypothetical answer alone does not pass. If fewer than two will try it, stop or revise the product hypothesis.

## Twenty independent correctness cases

Ask at least two people who did not implement the engine to author 20 cases and expected answers before running them through the product. Have a second reviewer check the expected answers against originals. Keep the author, review date, case hash and pre-run expected results in `evidence/independent-cases/manifest.csv`. Test all cases; record errors before making a repair. A rerun is a new run, never a replacement for an initial failure.

The builder can give coverage requirements, but must not supply all the underlying records or answers and call them independent. External authored synthetic cases and consented real/redacted cases are separate categories. State which each one is.

Coverage should include full and partial payments; duplicate imports; separate outputs in one transaction; wrong recipient; unknown explicit invoice; shared recipient across invoices; manual assignment/exclusion; zero/unknown confirmations; excess on one invoice; missing acceptance; old-version acceptance; conflicting classifications; missing or ambiguous source text; Unicode; changed source/hash; and conflicting duplicate amounts. Use combinations to cover these within 20 cases.

Pre-run expected fields: selected agreement, valid quote locations, acceptance/version association, invoice and recipient, credited output identities, confirmed/pending/outstanding/excess satoshis, duplicate count, unassigned/excluded keys, and required review flags. Do not ask the program to generate its own oracle.

Acceptance criteria:

- **20/20** cases match their independent expected facts and arithmetic. No duplicate or wrong-recipient output receives an extra or incorrect credit.
- **100%** of citations marked valid resolve to the exact supplied text at the stated character offsets and lines. Missing/ambiguous references are flagged; no fabricated evidence.
- Pending/unknown confirmations never reduce outstanding. Excess cannot silently cover another invoice. Conflicting records do not silently alter a committed workspace.
- Acceptance under a different agreement version is flagged. Payment does not become evidence of acceptance.
- A reviewer who did not assemble each packet can reconstruct required facts from the included evidence and independently re-run the verifier. Record any author assistance as failure of unaided review.

All criteria are currently pending. A internally consistent file still requires external checks of document authenticity, interpretation, recipient and chain data.

## End-to-end assembly time

Target at least five users and ten paired cases in total, including at least two genuine consented handoffs. Use matched-complexity cases with equivalent source sets, outputs and expected answers. Counterbalance order: some users assemble manually first, others use MilestoneProof first. Avoid reusing the exact same case without reporting the learning effect. Preserve the same accuracy standard in both arms.

Start the timer when the user first collects the source set. Include locating/exporting records, transcribing text, entering amount/recipient, mapping versions, importing outputs, reviewing, correcting errors and preparing the shareable packet. Stop when the reviewer has a usable, equally complete packet. Do not compare only the export button with the full manual task. Record interruptions, source availability and any facilitator assistance.

Use `evidence/pilot/measurements.csv`, one paired row per participant/case pair. Keep raw durations and accuracy checks; never exclude failures simply because they hurt the result. Report sample size, median paired percentage saving `(manual_seconds - product_seconds) / manual_seconds * 100`, range, errors, transcription time and missing records. Recalled time is not a timed baseline.

Target: **median saving at least 30%** across ten complete pairs with no lower evidence accuracy and no incorrect payment credit. This is a proposed success threshold, not an observed result. With a small convenience sample, report it as pilot evidence, not a general market guarantee. If overall time does not improve, revise or stop even if export itself is fast.

## Useful work while replies are pending

Run interviews, collect consented redactions, have independent people author cases and manually inspect packets. Prepare the video from fictional data and preserve reuse disclosures. Do not submit unsupported eligibility, winner, user-count or time-savings claims. Add a sponsor integration only after users and rules justify its extra work.
