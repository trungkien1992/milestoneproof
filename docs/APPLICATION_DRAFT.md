# Application copy — factual draft, not submitted

## Name

MilestoneProof

## One sentence

MilestoneProof assembles agreement-version, milestone-acceptance, invoice and BCH payment-output records into a source-linked evidence packet for freelancers and bookkeepers.

## Problem

A freelancer or bookkeeper may need to explain which agreement version a milestone refers to, what acceptance record was supplied, and which payments belong to the invoice. Those records can live in separate documents, messages and exports. MilestoneProof tests whether a small, portable evidence workbench makes this handoff easier to assemble and review.

## Working product

The browser app lets an operator add exact source text, keep agreement versions separate, cite excerpts, associate acceptance records, enter invoice amounts/recipients and import BCH outputs. Integer satoshi reconciliation counts each transaction/output once, keeps unconfirmed amounts separate, rejects conflicting duplicates and prevents wrong-recipient manual credit. Manual decisions retain written reasons. HTML and JSON packets include the source appendix, hashes, quote locations, output input paths and a reproducible consistency verifier.

The runtime uses supplied claims and source locators. It does not authenticate document origins or identities, verify blockchain inclusion, hold funds, sign transactions or decide legal liability. A reviewer must compare original records and current blockchain data independently. This release has no CRE workflow or other sponsor integration.

## Intended users and impact

The initial reachable users are BCH freelancers and bookkeepers. We have not completed validation interviews or a real pilot. The proposed evaluation uses 20 independently authored cases and an end-to-end, counterbalanced manual-versus-product assembly comparison. Correct facts and references take priority over speed. Time savings and adoption are not yet measured.

## Observed technical validation

On 7 October 2026, 26/26 assistant-authored synthetic automated checks passed: 20 numbered cases and six regressions. Coverage includes partial and duplicate outputs, wrong recipients, ambiguous shared addresses, zero/unknown confirmations, excess, agreement-version mismatch, conflicting classifications, exact Unicode references and report modifications. These checks do not satisfy the independent-case target.

Browser checks exercised creating sources/milestones, acceptance, wrong-recipient handling, review exclusions, duplicate/conflicting imports, source navigation, prepared exports and workspace import. The browser-prepared JSON passed the verifier. Desktop/mobile layouts had no document overflow. Automated in-app download completion was not observed; prepared contents and copy fallback were verified.

Independent cases completed: **0/20**. Real pilots completed: **0**. Measured user time savings: **not available**.

## Reuse and new work

I reused my BCH Close `reconcile.ts` and `blockchair.ts` modules unchanged from commit `8835382b306328b34912a3ff91fe61ed4168879d`. The provider adapter is retained but not connected to a live fetch in this prototype. BCH Close merchant feedback and a real pilot remain pending.

New work on 7 October 2026 includes the agreement/version/citation schema, acceptance association, evidence report engine, authoring/review interface, HTML/JSON packets, consistency verifier, fictional fixtures and research/validation/submission materials. Development was assisted by ChatGPT/Codex; the public demo uses ChatGPT Sites. See `docs/REUSE.md` for exact provenance. Organizer permission for reuse/AI and the main-track BCH implementation is pending.

## Links

- Demo: https://milestoneproof.petervn.chatgpt.site/
- Public source: https://github.com/trungkien1992/milestoneproof
- Existing work: https://github.com/trungkien1992/bch-close
- Video: not recorded/uploaded yet; use `VIDEO_SCRIPT.md` after confirming the required format.

## Intended track

LegalTech & RegTech, subject to organizer confirmation. This is not a claim of Chainlink or RYO-CHAN bounty qualification.

## Before sending the application

Confirm solo/Vietnam eligibility, BCH/main-track requirements, exact cutoff timezone, permitted reuse/AI, source-license and artifact requirements. Complete or honestly report the independent cases and real-user validation. Record/upload the required video. Replace “pending” only with dated evidence. Verify the final live/repository URLs and paste copy into the actual form; no application has been submitted.
