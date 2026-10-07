# MilestoneProof

A local evidence workbench for BCH freelancers and bookkeepers. Connect the selected agreement version, milestone acceptance record, invoice and unique payment outputs, then produce a source-linked packet another person can review.

[Public demo](https://milestoneproof.petervn.chatgpt.site/) · [Rules and decision](docs/RESEARCH_AND_RULES.md) · [Validation plan](docs/VALIDATION.md) · [Submission copy](docs/APPLICATION_DRAFT.md)

## Try the narrow workflow

1. Open the fictional example. M-01 has a 0.06 BCH invoice and a reported confirmed 0.04 BCH output imported twice. Its balance remains 0.02 BCH. M-02 has a pending output and no acceptance record.
2. Click a citation to inspect the exact source text and SHA-256. Agreement versions have separate IDs. Acceptance classifications and version associations are supplied by the operator.
3. Start a workspace. Paste agreement, invoice and acceptance text; enter the expected BCH amount and recipient; choose exact excerpts. Keep the original files separately.
4. Import payment outputs from CSV or JSON. Review ambiguous assignments with a written reason. A different recipient cannot receive manual credit. Excluded outputs remain in the packet.
5. Save the workspace and prepare HTML or JSON exports. A visible Save file link and copyable file preview are provided for browsers that do not start downloads.

CSV fields: `txid,output_index,amount_bch,address,invoice_id,confirmations,observed_at`. Amounts are BCH coin units, up to eight decimals. An observation time, when supplied, must be an actual UTC ISO timestamp. Blank times and confirmation counts remain unknown. More formats and field aliases are described by the parser in `src/reused/reconcile.ts`.

## What the report establishes

It checks exact excerpt locations, version associations, unique output identities and integer arithmetic against supplied inputs. It includes full source text, hashes, character offsets, line references, payment input paths and review notes. Pending and unknown outputs do not reduce outstanding balances. An excess on one invoice does not satisfy another.

It does not authenticate originals, identities, signatures, acceptance authority, timestamps, blockchain inclusion or contractual liability. One reported confirmation is this prototype's accounting threshold, not a guarantee of finality. Payment counts are imported claims; explorer links let a reviewer check them independently. There is no wallet, escrow, smart contract, transaction signing, AI legal judgment or live provider fetch in this release.

Records stay in memory in the browser tab. The app has no application backend, analytics, account system, external API calls or automatic persistence. Closing or refreshing discards unsaved inputs. Exports contain all supplied source text; share redacted packets deliberately. Hosting still receives normal site requests.

## Reproduce

Requires Node.js 20+ with WebCrypto and npm.

```sh
npm ci
npm test
npm run dev
```

Open http://127.0.0.1:4173/. The build uses esbuild and produces `dist/`; the app itself is static. To verify a prepared report:

```sh
npm run verify -- evidence/browser-report.json
```

The verifier recomputes all fields from included inputs and rejects differences. Anyone can change inputs and regenerate a consistent packet, so this is an internal consistency check, not an authenticity seal. Compare originals and blockchain records separately.

## Observed evidence, 7 October 2026

- 26/26 automated checks passed: 20 numbered assistant-authored synthetic cases plus six regressions. These are **not** the requested 20 independently authored cases.
- Browser checks exercised source and milestone authoring, acceptance, wrong-recipient handling, exclusions, duplicate/conflicting imports, source navigation, prepared HTML/JSON/workspace content, workspace import and a read-only WebMCP tool.
- The actual browser-prepared JSON passed the command-line verifier. Layouts were inspected at 390 and 1280 CSS pixels with no document overflow.
- In-app automated download completion timed out. File preparation and the visible copy fallback were verified; completion of a browser download remains unverified.
- Independent cases: 0/20. Validation interviews: 0. Real pilots: 0. Measured user time savings: unavailable.

See [observed results](evidence/validation-results.json), [example packet](evidence/fictional-evidence.html), and [reuse provenance](docs/REUSE.md). Do not describe synthetic demonstrations as merchant or client results.

## Hackathon materials

- [Current rules, competition and conditional go/no-go](docs/RESEARCH_AND_RULES.md)
- [Short interview and recruitment text](docs/INTERVIEW.md)
- [Organizer questions to send yourself](docs/ORGANIZER_EMAIL.md)
- [Acceptance criteria and pilot measurement](docs/VALIDATION.md)
- [Two-minute video script](docs/VIDEO_SCRIPT.md)
- [Application draft and remaining submission work](docs/APPLICATION_DRAFT.md)

Eligibility, deadline timezone, reuse/AI permission and payout details need organizer confirmation. This repository is public source for review. No project-wide reuse license is granted yet; dependency licenses are preserved separately.
