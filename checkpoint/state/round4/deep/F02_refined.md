# F02 refined: Ground Truth Ledger (expert-graded accuracy tests for back-office AI)

**Verdict: DEAD as a company (alive = false).** Both critics are right on the points that decide it. The one new fact I verified this round, who MHC actually is, removes the home-health bench the idea depended on. What survives is a method (blind, expert-adjudicated testing) and a corrected map of the family's real asset. Neither is a business on its own.

## 1. What I verified this round (primary pages fetched or registry queried)

| Claim | Result | Source |
|---|---|---|
| Who is MHC? | The dossier filed Maryland Healthcare Clinics under "do not fit". That was wrong. mhcorp.com/about says MHC was founded in 1987 by Dr. Semyon Friedman as a physical therapy clinic, now has "more than 130" clinics in DE, FL, MD, NC, VA and DC, and names "his daughter Julia Peremel". It has a proprietary EMR, a patent notice and a HIPAA patient portal. It never mentions home health, nursing, OASIS or AI. | https://mhcorp.com/about |
| What does MHC sell? | Injury and accident care (auto, work injury, slip and fall): orthopedics, neurology, physiatry, PT, in-house imaging, plus an attorney portal for client records. | https://mhcorp.com/injury |
| Is "MHC Area N, LLC" the same company? | Probably not. The registry shows a series of Florida home-health NPIs (Areas 3, 5, 6, 7, 8, 9, 10), created 2019 to 2023. Six show the DBA Choice Health at Home with a Tyler, TX mailing address. Area 7 (Orlando) still shows the DBA Haven Home Health Care and a Michigan-based manager, never updated since 2019. A Baltimore PT network and a 2019 Michigan-linked Florida roll-up look like different organizations. This is my inference, not a confirmed fact. | https://npiregistry.cms.hhs.gov/api/?version=2.1&organization_name=MHC%20AREA*&state=FL&limit=50 |
| Has any agency paid a third party to test an AI OASIS tool? | I found no report of one. Vendor accuracy claims have no stated method. Competing consultancies (Home Care Answers, SimiTree) argue for human oversight and sell it. | search, Nov 2 2026 |
| Do paid evals exist at all? | Yes, at the top. Vals AI sells paid private evaluations (its framing: companies pay to be tested, like the SAT). Its customers are said to include labs, large financial institutions and hospital systems. Revenue and customer names are unaudited. | Sacra, Everydev, a16z round coverage |

Asher's link to MHC is an inference: the surname matches, and his memory notes say his grandfather founded MHC and his mother works there. He should confirm in one conversation.

## 2. The critiques, answered

### Critic 1 (market and competition): all seven points stand

1. **Lane not empty.** Conceded. Mercor, Vals, Centaur, Qualified Health and Onboard AI are 100 to 1,000 times larger and already doing the motion. Healthcare is one case study away for any of them. No technical or data moat exists for a 100-chart gold set.
2. **Free substitutes set the price at zero.** Conceded. HealthBench, APEX, QAPIplus's eight-area checklist and XYPN's "Battle of the Bots" are free. Partial rebuttal only: a checklist gives no number. But nobody has shown that anyone pays for the number.
3. **No payer.** Conceded, and my own search agrees. The existing budget line is human review at $40 to $70 a chart, owned by sellers who bundle AI checking. An agency buys a cleaner claim, not a vendor score. A bake-off is one-time spend with no repeat.
4. **Bundling.** Conceded. Axxess's scrubber, Brellium and Olli make QA a feature.
5. **Public-goods gap.** Conceded. If the gap is real, GAO, URAC, CHAI or Vals fills it free. A "first to a standard" story needs years the founder does not have.
6. **Demand-side commoditization.** Conceded. Buyers who can pay can build, and LLM judges plus 5 to 10% human calibration shrink expert hours per customer.
7. **Independence.** Conceded in part. The conflict is smaller than Critic 1 assumed, because the MHC Area agencies probably are not the family firm. A buyer-side design with no vendor money also removes most of it. But removing the conflict does not create a payer.

### Critic 2 (founder fit and execution): all seven points stand

1. **Insider premise wrong.** Verified (section 1). Under either branch there is no OASIS bench: a PT and injury network has no OASIS coders or home-health RNs, and an absorbed Choice agency is conflicted and not his. Only the advisor side is left, and MyFinancialAdvice's current state is unverified.
2. **Trust product, unknown seller.** Conceded. A numeric verdict that a vendor will contest needs credentialed adjudicators (the critic cites COS-C and similar). I did not re-verify that job posting. Human OASIS reliability is itself contested, so any gold set will be attacked.
3. **Test harder and costlier.** Conceded. A valid test input is a scripted encounter, not a written chart, and EHR-embedded tools may not be testable without a paid license or an agency partner. Realistic cost to first revenue is above the dossier's $4k to $8k.
4. **Payer unproven.** Conceded. Agency margin evidence conflicts across sources (MedPAC 21% fee-for-service versus reports of near-half negative margins). I did not resolve this, and it does not change the verdict.
5. **Legal exposure.** Conceded. Benchmark-publication clauses and false-advertising risk are real. A demand letter from a funded vendor costs more than the whole budget. The safe design (private, buyer-only, no badge) removes the one route to a standard, which is the only route to big.
6. **Scaling hits the Mercor walls.** Conceded. Contractor misclassification and HIPAA/SOC 2 obligations bind exactly where revenue passes about $1M a year.
7. **Time and execution pattern.** Conceded, and this is the sharpest point for the decision. The freight-audit service is built and unsold, and revenue is blocked on Asher's calls. A heavier, slower, trust-gated sale on top of that, during application season, spends the scarcest resource on the weakest idea.

## 3. Why I did not rewrite it into something smaller

Round 1 and 2 lessons say to call an idea dead rather than shrink it into a boutique. Every smaller version is the same: a $3,000 buyer-side bake-off sold to a handful of agencies. The dossier's own ceiling for the vertical is $1M to $3M a year, one-time spend, with a market leader that can add the vertical. That is not a $10M business and no honest rewrite makes it one.

## 4. Numbers (honest, not pitch-level)

- Cost to first revenue if someone insisted on building it: about $5,000 and 12 weeks. The dossier says $4k to $8k, and Critic 2's points push it up.
- Median case: about $50k a year (a few bake-offs). Upside: about $3M a year at the top of the dossier's range. Path to $10M or more: none that does not run through Mercor, Vals or an acquirer.
- Riskiest assumption: that any agency, advisor firm or vendor will pay for an independent accuracy score when free checklists, vendor self-reports and their own coders exist.

## 5. What to do instead (30 days)

The default is to put no build hours into F02. Two cheap things are worth doing regardless.

1. **Day 1 to 2: resolve MHC.** Ask Asher's mother four questions: Is MHC the Maryland Healthcare Clinics group? Does MHC or an affiliate own any home-health agency? Who runs billing, coding and records, and do they use any AI tool? Would the CFO give a 30-minute call? Output: one written paragraph. This matters for the whole insider-edge round, not only F02.
2. **Day 3 to 14 (optional kill test, selling only, zero build):** ten payer-existence calls. One question: "Who did you last pay to check whether an AI tool was accurate, how much, and who signed?" Success: 2 of 10 name a budget line and a signer, and 1 signs a $3,000 letter of intent. If fewer, F02 is formally killed.
3. **Day 15 to 30 if killed (expected):** spend the hours on 10 freight-audit calls a week, and open an MHC-first idea search (below).
4. **Day 15 to 30 if passed (unlikely):** sign the first prepaid bake-off, contract one credentialed and unconflicted clinical lead, and pay a lawyer under $1,000 for a benchmark-clause and publication memo before any score leaves the building.

Ten places to run the calls: MHC's CFO and accounts receivable and medical records leads (named on mhcorp.com/about); Ron Peremel's MyFinancialAdvice advisors; XYPN (author of the notetaker "Battle of the Bots"); Home Care Association of Florida member agencies; QAPIplus (author of the AI-vendor checklist); SimiTree (the "Audit Your AI" webinar of Sept 24, 2026); Olli (reported to use third-party validators); Enzo Health ($20M Series A, May 2026); Blee ($27M, Sept 2026, marketing-rule AI); Jump or Zocks (advisor notetakers, Series B).

## 6. What survives, and a lead for the next round

- **A method.** Asher's blind, pre-registered, adjudicated testing (the AI-text detector, the backtest lab) is a real edge. It is a skill to bolt onto a different business, not a product here.
- **A corrected insider map (hypothesis, not researched).** MHC looks like a 130-plus clinic injury and PT network with a proprietary EMR and an attorney portal. In personal-injury care, the AI money I saw goes to attorneys (EvenUp at a $1B-plus valuation, Novo at pre-seed), and general billing AI is funded (Charta Health, $22M Series A). My single search found nothing built specifically for the clinic side of letter-of-protection and lien workflows. That is a lead for a fresh five-lens screen with MHC as customer zero, not a verdict. Any idea there must clear the ethics guardrail, since this segment has a history of billing-inflation scrutiny, and must treat HIPAA minimum-necessary as a design constraint.

## 7. Verification status

- Verified by me this round: mhcorp.com/about and /injury; the NPI registry rows for MHC Area 3, 5, 6, 7, 8, 9, 10; absence of any reported paid third-party AI OASIS test; Vals' paid-evaluation model (search summaries, unaudited).
- Critic-cited, not re-verified: Mercor revenue and lawsuits, GAO July 2026, HHAeXchange 13.3%, the CMS 1.3% cut, the credential job posting, benchmark-clause examples, certifier-liability cases.
- Inference: Asher's family link to Maryland Healthcare Clinics; that the Area series is a separate organization.
