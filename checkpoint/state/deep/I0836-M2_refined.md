# I0836-M2 Refined: Operating Authority Memos for Data Center Lenders

Prepared 2026-10-13 after three "serious" critiques. Evidence labels: [P] primary text I fetched this session; [C] reported by a critic who read the primary source (not re-fetched by me); [D] from the dossier; [A] my assumption, stated so it can be attacked.

## Verdict: alive = false (as a company). A gated micro-practice survives, and only if one test passes.

All three critics independently land on the same fault line, and I cannot argue around it:

1. The pitch's headline ("a campus curtailed for 200 hours is legally uncovered after 100") is wrong in the scenarios where curtailment actually bites. In a DOE-ordered emergency, FPA 202(c)(3) removes environmental liability for compliance, voluntary compliance included [P: the statute text on Cornell LII says compliance, "including any omission or action taken to voluntarily comply", is "not considered a violation" of environmental law]. In Texas, SB 2321 lets TCEQ waive emissions and hours-of-operation enforcement for on-site backup generation when ERCOT flags a need, effective 2025-09-01 [P: the bill analysis uses "discretion", although the statement of intent says "requires"; ERCOT notice M-B012326-01 shows it was used Jan 23-27, 2026 (C)]. Lender counsel can say this in one paragraph, for free.
2. What is left is market-triggered, non-emergency curtailment (PJM IRAS from 2027-06-01 for new 50 MW+ loads without their own capacity; whatever ERCOT finalizes for large loads). Neither is in force. FERC had no known order on IRAS as of the critics' searches [C], and Governor Abbott's Sept 21, 2026 TCEQ permit pause freezes new Texas permits until about December [C].
3. Nobody with budget has been shown to require, or even to have purchased, this. The Phase I analogy fails on all three legs that make Phase I work: no statutory safe harbor, no ASTM-style standard, no regulator, no loss history.
4. The honest market is a boutique. After the haircuts in section 4 it is $15-280k a year without a lender mandate and $1.5-6M with one. The product is also, at its core, a lawyer's interpretation, so the value accrues to whoever holds the license and the E&O cover, not to a software founder.

I looked for a rework that fixes this, and none does. Section 2 is the best surviving form. It is a legitimate small practice for someone who already has an air-permit attorney and a lender-side relationship. It is not a company to found on current evidence. If the 2-week test passes (section 7) the verdict flips to "alive, narrow, gated".

## 1. What the critics got right, and what I conceded

| Critique | Verdict | What changes |
|---|---|---|
| 202(c)(3) and SB 2321 make the cap soft in emergencies | Conceded, and verified [P] | The "100 hours" headline is withdrawn. The product becomes a trigger-by-trigger authority matrix, and only Tier C (below) is a hard constraint. |
| Incumbents (LTAs, lender counsel, Trinity) can absorb it as a checklist line | Mostly conceded | Stop competing for the lender relationship. Sell white-label to them. Price falls from $20-45k to $12-20k. "Independence" is dropped as the differentiator (Phase I is also borrower-paid). |
| Funded AI substitutes (Azraq, GridCARE, Emerald AI, Parametrix) | Conceded as feature risk | A model score is not an attorney-signed interpretation, which is the only thing we sell. Emerald-style load flexibility lets sponsors argue the runway is irrelevant for shed-able compute. |
| No mandate, broken Phase I analogy | Conceded, cannot be fixed by argument | Analogy removed. This becomes the single riskiest assumption and the 2-week test. |
| Market small and late | Conceded | Honest numbers in section 4. No revenue before H2 2027 at the earliest. |
| Thin margins, lopsided liability, UPL and Rule 5.4 | Partly answered by structure | A licensed air attorney is engaged by the LTA or lender counsel, not by us. We sell analyst work under a flat-fee services agreement, with no fee splitting. Ethics counsel must confirm (the critic's sources were old and state-specific). |
| Cross-sell kills independence | Conceded | No cost-to-cure section, no permit-modification cross-sell, written firewall. The "inbound leads" flywheel is gone. |
| Data is fragmented, so no moat and "same dataset serves every report" is false | Conceded | Dataset and subscription claims retracted. Every memo is bespoke permit work (Texas PBR 106.511 sitewide fuel limits, Virginia pooled hours). |
| Fallback is shrinking (behind-the-meter gas, Tier 4 mandates) | Conceded | The diesel-reliant campus is the weaker, less financeable one, which is adverse selection for any buyer. |
| Louder diligence items (community opposition, $130B delayed) crowd this out | Conceded | No mitigation. This is a module, not a headline. |

## 2. The strongest surviving version

**Product: the Operating Authority Memo (OAM).** 6-10 pages, 5 business days, signed by an independent licensed air attorney.
- Permit inventory: per-engine and pooled hour caps, tier, permitted uses, monitoring and reporting duties, remaining headroom.
- Trigger-by-trigger authority matrix (below), with the controlling authority cited for each tier.
- Tier C hours-exposure range taken only from published studies (for example the Aurora/ERCOT study: 50-241 curtailment hours a year on average at fully grid-exposed controllable-load sites, 35-550 across weather years [D]). No home-made forecast, since the critics are right that PJM's own board and market monitor disagree on frequency.
- Explicitly not included: cost-to-cure, permit-modification sales, subscriptions, or alerts.

**Trigger tiers (this table is the real product):**

| Tier | Trigger | Likely controlling authority | Is the permit cap a hard limit? |
|---|---|---|---|
| A | DOE 202(c) order covering backup generation (PJM orders in 2026) | FPA 202(c)(3) shield [P]; EPA Jan 2026 data center guidance as quoted in DOE's Feb 4, 2026 rehearing order [C]; but DOE Order 202-26-33A does not expressly waive hour caps and requires environmental compliance "to the maximum extent feasible" [C] | Probably not |
| B | ERCOT emergency with TCEQ notice | SB 2321 / H&S Code 382.086: discretionary ("may") [P] | Soft, but discretionary, so lenders will not underwrite on it |
| C | Market-triggered, non-emergency curtailment (IRAS at pre-emergency level; ERCOT large-load curtailment; utility interruptible tariffs) | 40 CFR 63.6640(f) and the state permit; no EPA or state guidance found on whether a directed shift to generators here is "emergency" [D] | Yes, if the rules take effect as drafted. This is the only tier where a runway number binds. |
| D | Baseline: testing, maintenance and readiness hours already consumed | Permit conditions | Yes |

**Wedge customer (changed):** lender-side technical advisors (Salute, TBH, Sargent & Lundy, Ankura type) and project-finance lender counsel on unrated, spec and neocloud financings of new 50 MW+ PJM or ERCOT campuses. They are white-label buyers, not end users. Hyperscaler-tenant deals are out of scope (lenders price the tenant). Campuses on behind-the-meter gas or batteries are out of scope.

**Payer (unchanged but clarified):** the borrower, through the lender's third-party report budget, engaged by the LTA or lender counsel.

**Pricing (changed):** $12-20k per OAM, quoted at $15k from the first conversation. No free reports. A free report measures appetite for free work, and the critics are right on that. Refresh at $4-6k is offered only if a lender writes surveillance into a covenant, and is modeled at zero until then. Portfolio subscriptions are dropped.

**Delivery structure:** attorney engaged by the buyer; our analyst work under a flat-fee services agreement; reliance letters and liability caps priced as a multiple of fee; E&O quote obtained before the first paid memo. Legal sign-off on this structure is a precondition, not a footnote.

## 3. Why now, honestly

The enabling change is real: PJM's IRAS (ER26-3515, filed 2026-08-13, start 2027-06-01 for new 50 MW+ loads that bring no capacity), PJM's Large Load Registry that will collect backup generation fuel type and permitting limitations [D], and Texas SB 6 disclosures for 75 MW+ loads. The test "would it have worked in 2019?" is a clear no, so the why-now is not fake. But the date is H2 2027 to 2028, not now. Against that: FERC had not ruled on IRAS [C], stakeholders reportedly rejected the curtailment piece in June [C, unverified], FERC suspended the companion backstop procurement to Feb 28, 2027 [C], and Texas permitting is paused pending the ERCOT audit [C]. The founder would carry 12-18 months of zero revenue waiting for a rule that may never take effect as drafted.

## 4. Bottom-up market (assumptions marked [A])

- Public GPU, neocloud and AI-campus financings tracked: 41 in 2025, 50 in 2026 through Oct 10 [D, vendor tracker]. Private and bilateral loans add perhaps 1-2x [D]. So roughly 120-180 a year.
- PJM plus ERCOT share 35-50% [A], where the lender carries power risk 40-60% [A]: 15-55 closings a year [D].
- Haircut 1: the campus is IRAS-exposed or relies on diesel as its curtailment fallback, as opposed to gas turbines or batteries, 30-50% [A]: about 5-28.
- Haircut 2: LTA or counsel buys rather than absorbs the check in-house, absent a mandate, 25-50% [A]: about 1-14 memos a year.
- At $12-20k: **about $15k to $280k a year without a mandate.**
- With a mandate and covenants (the dossier's case): $1.5-6M mature [D]. Nobody has shown the mandate exists.
- Realistic year-2 revenue is therefore a four-to-low-six-figure consulting practice. It is not a $10M company.

## 5. Unit economics

Per memo at steady state [A]: counsel 6-12 h at $400-500 = $2.4-6k; analyst or founder 10-20 h at $75-100 = $0.75-2k; E&O and overhead allocation $0.5-1.5k. Total about $3.7-9.5k against a $12-20k price: gross margin roughly 20-80%, central about 55%. The first five memos run 25-50 professional hours each [D], so early margin is near zero. The sales cycle for a new vendor to an LTA is plausibly 6-18 months [critic estimate]. CAC is founder time. Revenue per head is fine only if volume exists, and the volume analysis above says it may not.

## 6. Moat (7 Powers) and competitors

**Moat, honestly: none reachable in 18 months.** Candidates:
- Counter-positioning, conditionally: if LTAs' E&O carriers will not let them opine on permit-law interpretation [unverified; critic 1 flags this as the one fact that would make the structure a moat], then they must subcontract it. That is testable in one question.
- Cornered resource, weakly: an engaged air attorney with E&O willing to sign, plus a corpus of attorney-reviewed tier interpretations by state. This is process power only after about 30 memos.
- The licensed party captures this moat. A non-lawyer founder is a vendor to it.

**Competitors and edge:**
- Azraq (Abu Dhabi, pre-seed July 2026, QIA-backed A-typical): AI risk platform for data-centre lenders, covenant-breach probabilities, pitches replacing $1M consultant PDFs; no named customers; does not name curtailment [C]. Feature-add risk.
- Lender technical advisors: Salute LTA phase 2 includes a permits-and-licenses check [C]. TBH, Sargent & Lundy, Ankura have lender relationships. They are the buyer and the main threat.
- Trinity and air-permit consultancies: write data-center permit diligence content for developers [C]. One engagement from a lender version.
- GridCARE ($64M Series A), Emerald AI (load flexibility; reported $150M Series A, figures conflict), Parametrix (parametric SLA insurance): adjacent substitutes for the same budget line.
- Lender counsel (Davis Polk, Ropes & Gray): gatekeeper and substitute.
- Edge: a five-day, fixed-price, attorney-signed tier matrix for deals where the LTA has no air-law bench. That is a service edge, not a technology edge.

## 7. Riskiest assumption and the 2-week test

**Riskiest assumption:** a person who controls spend or conditions on at least one live or upcoming PJM or ERCOT financing treats generator-hour exposure under non-emergency curtailment as a felt, priced credit question, and will request a quote of at least $12k or write it into a checklist. If it is only a footnote settled by "202(c) will cover it", there is no business.

**Test window: 2026-10-14 to 2026-10-27. Cash cost under about $1,500.**
1. Days 1-2: one-page scope, a redacted sample tier matrix built from one public campus permit, a quote line of $15,000 and 5 business days. No free offer.
2. Days 2-12: contact 25 people to get 5-8 real conversations (cold response rates are low): about 8 LTA or independent-engineer staff, 8 project-finance lender counsel, 9 data center debt originators or private credit underwriters. Ask four things:
   - In the last 12 months, did generator-hour or permit-headroom analysis appear on any closing checklist or LTA scope? Who paid?
   - If FERC approves IRAS, would you want this as a line item, and from whose budget?
   - Would your E&O or firm policy allow you to give a permit-law interpretation, or would you subcontract it?
   - Can I send you an SOW at $15k for a live deal?
3. Days 3-10, in parallel: one paid hour (about $500-1,500) with an independent air attorney who has no stake: is generator use directed by IRAS or an ERCOT large-load rule non-emergency operation under 63.6640(f), and outside 202(c)(3) and EPA's Jan 2026 guidance?
4. Pre-registered result (set now so I cannot rationalize later):
   - **Revive (alive = true, narrow, gated):** at least one written request for an SOW, NDA or quote at or above $12k on a named live deal, or at least two independent confirmations that the item appeared on a real closing checklist in the past 12 months, AND the attorney says Tier C is real.
   - **Kill:** no written quote request, at most one prior-checklist instance, or the attorney says IRAS-directed use is likely emergency or 202(c)-covered.
   - "Interesting" and "send me a sample" are failures. Fewer than five conversations by day 12 is inconclusive, not a pass: widen to warm introductions for one more week and keep the same bar.

## 8. What else would revive it

From the critics, in order of weight: a named lender, arranger or rating analyst putting a power-runway item in writing as a condition or credit input; FERC accepting IRAS substantially as filed; an independent air-law opinion that Tier C is non-emergency; a signed white-label LOI at $15k or more from an LTA or counsel; evidence that LTA E&O carriers will not opine on permit law.

## 9. Storage note

Written to `/Users/asherperemel/projects/business-idea-search-work/biz/deep/I0836-M2_refined.md` (the scratchpad `biz` path is a symlink to this persistent directory, so a scratchpad cleanup does not delete it), with a second copy in `/Users/asherperemel/projects/business-idea-search/checkpoint/state/deep/`. Neither copy is committed or pushed. Scratch downloads from this run were not written to either location.
