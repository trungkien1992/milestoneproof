# Reuse and new work

## Existing work

Source: [trungkien1992/bch-close](https://github.com/trungkien1992/bch-close), commit **8835382b306328b34912a3ff91fe61ed4168879d**, authored 7 October 2026 at 14:57:26 ICT. [Existing demo](https://bch-close.petervn.chatgpt.site/). Its merchant feedback and real pilot remain pending.

| Original file | Copy here | Change |
|---|---|---|
| `lib/reconcile.ts` | `src/reused/reconcile.ts` | Byte-identical first-party reuse. Satoshi arithmetic, BCH address normalization, output identity and reconciliation. |
| `lib/blockchair.ts` | `src/reused/blockchair.ts` | Byte-identical first-party reuse. Provider normalization retained for possible follow-up; no live chain fetch is wired into this release. |

[Machine-readable byte comparison](../evidence/reuse-check.json) includes file hashes. The original repository was not modified. Do not claim these modules were written for BLI, independently validated with merchants, or permitted for reuse by the hackathon until the organizer confirms it.

The retrieved original snapshot had no project LICENSE. It is the builder's existing repository, but public visibility alone does not grant others a license. This release does not add a blanket project license. If an open-source license is mandatory, the builder should choose one covering code they own and retain all third-party notices.

## New work on 7 October 2026

- `src/engine.ts`: source/version schema, exact excerpt references, hashes, acceptance association, full evidence report and consistency verifier.
- `public/`: authoring/review interface, fictional demonstration, responsive presentation and self-contained HTML report renderer.
- `scripts/`: build, local preview, verifier and fictional evidence generation.
- `tests/core.test.mjs`: 20 numbered synthetic correctness cases and six regressions, authored with assistant assistance.
- `docs/` and `evidence/`: rules research, interview/validation protocol, submission drafts and observed prototype evidence.

Work was AI-assisted with ChatGPT/Codex and uses ChatGPT Sites hosting. Acceptance classifications, amounts and source interpretation are entered by the user. The runtime does not ask an LLM to reach legal or accounting conclusions.

## Dependencies

`bchaddrjs` 0.5.2 handles BCH address formats; `esbuild` 0.25.11 bundles the static browser engine. Exact transitive versions are pinned in `package-lock.json`. Third-party packages retain their own licenses. Bundled legal comments and the [third-party notices](../THIRD_PARTY_NOTICES.md) are retained; no original competitor or organizer code is copied.
