# F01 refined: MA Rate Truth (Medicare Advantage remit audit plus yield benchmark)

**Verdict: DEAD AS SCOPED (alive = false).** Both critics are right on the points that decide it, and one new fact I checked myself removes the insider edge the idea was built on. Narrowing it further would only produce the boutique the lessons file says to call dead.

## 1. The new fact: "MHC Healthcare" is almost certainly not a home-health company

Checked directly on MHC's own site (mhcorp.com/about and the home page), 2 Nov 2026:

- MHC HealthCare (legal name Maryland Healthcare Clinics) was founded in 1987 by Dr. Semyon Friedman. It runs 130+ locations in DE, FL, MD, NC, VA and DC: orthopedics, neurology, physiatry, physical therapy, radiology, with a personal-injury focus and an attorney records portal. It has a CEO, COO and CFO. Neither page mentions Medicare, Medicare Advantage or home health.
- The About page says Dr. Friedman and "his daughter Julia Peremel" launched a museum-tour partnership. Asher's father is Ron Peremel. Founder-grandfather plus a Peremel daughter inside the company fits "grandpa founded it, mom works there" exactly. My confidence is roughly 85-90 percent, not 100. One text to his mother settles it.
- The Florida "MHC Area N, LLC" agencies (Boca, Riverview, Fort Lauderdale, Ocala) are a different company with the same initials. A directory lists MHC Area 9 as doing business as Choice Health at Home. Home Health Care News shows Choice is a Tyler, Texas group founded by David Jackson and Trina Lanier and backed by Trive Capital and Coltala Holdings. Directory data is not official, but it fits the second critic's reading, and it is moot: it is not Asher's family.

Consequence: there is no home-health pilot, no MA remits at MHC to audit, no "peer agency owners" through the grandfather, and no family-verified proof artifact. The finalist's line "works even if MHC is a clinic" is false for this product, because the engine reprices MA home-health contract rates. A personal-injury clinic chain is paid by auto carriers, attorney liens and commercial plans.

## 2. Answers to the critiques

| # | Critique | Answer |
|---|---|---|
| A1 | EHR and RCM vendors hold both halves of the join and can ship a variance report | **Conceded.** I confirmed Axxess has let agencies enter an expected per-visit rate per payer since 9/14/2022. The field is "informational only", with no variance flag. The data is already there, so the feature is a small release inside an existing seat. Realistic window 12-18 months, and no moat inside it. |
| A2 | No evidence the pain is below-contract payment | **Conceded.** My own search for owners or billers reporting an MA plan paying a home-health agency below contract found nothing. The named pain is the rate itself (HHCN: low rates 56 percent). An audit cannot raise a correctly paid low rate. |
| A2b | The $1.2M CHW case is mis-dated and mis-framed | **Confirmed and worse than the dossier said.** The AAPC article is dated 28 Oct 2008. It was a 42 CFR 422.214 rate dispute, found by CHW's own finance team, and took about 15 months. It does not establish a contract-load error, and it shows no vendor market. |
| A3 | Freight engine reuse is no moat; the freight audit has never sold | **Conceded.** There is no proof point to transplant. LLM contract ingestion is a commodity. Horizontal vendors (Fuse, Lido, Rivet, Tenix, Anomaly) already sell remit-versus-contract. A 20-25 percent contingency is the low end of the market. |
| A4 | Benchmark has no buyer, no data source, no antitrust cover | **Conceded.** The only party with peer payment data is the EHR. A co-op needs 3+ non-family contributors per cell before showing one number, with counsel at $10-25k. The $12k price comes from a weak aggregator source. |
| A5 | Buyer pool is shrinking and the survivors can't pay | **Conceded.** The fee is $1.7-18k per agency per year, against legal, HIPAA risk analysis, cyber/E&O and security review. That is a services side business priced like SaaS. |
| A6 | Related-party pilot is weak proof | **Moot and worse.** There is no related-party pilot (section 1). |
| A7 | A copy with better distribution wins | **Conceded.** A 1.5 percent variance result is a signal to Axxess, HCHB, WellSky, Waystar, Claim Health and Tenix too. |
| B1 | Insider premise fails under both readings | **Confirmed.** The critic's conditional test ("a text to mom confirming Medicare-certified home health") is the one I could not satisfy. The evidence points the opposite way. Severity stays fatal. |
| B2 | Without the insider it's the cold sale his profile says fails | **Conceded.** An agency CFO would hand 12 months of remits (PHI) and confidential rate exhibits to an 18-year-old LLC with no sponsor. |
| B3 | HIPAA/liability asymmetry | **Conceded on economics.** A BAA, risk analysis and $1-3M cyber/E&O against a $1.7-18k fee is a bad trade for a self-funded student. The dossier's $6k cost-to-first-revenue under-prices it. I now put it near $9k. |
| B4 | PHI conflicts with his AI-speed edge | **Partly conceded.** Anthropic offers a BAA path, but beta features and some tools are excluded, so his build loop would run on synthetic data. That removes much of the speed advantage. |
| B5 | Pay model is awkward (percentage fees, unauthorized-practice risk) | **Conceded.** A percentage fee works only if the provider receives the money, so recovery depends on agency staff filing disputes inside plan windows. The per-resolved-dispute fallback needs health-lawyer sign-off and doesn't fix demand. |
| B6 | Confidentiality hits the audit leg too | **Conceded.** Sharing rate exhibits with a consultant can breach plan contract clauses. |
| B7 | Execution is harder than "point the freight engine at remits" | **Conceded.** Delegated networks, batched 835s, PDGM logic and per-contract quirks make onboarding manual consulting at 10-15 hours a week. |
| B8 | No demand signal; why-now expires | **Conceded.** The Dec 7 enrollment deadline passes before legal and BAA setup could finish. |

## 3. Why I did not shrink it

Every surviving fragment fails a criterion the idea was chosen for:

- Audit only, Florida only: $85-210k a year at 15 percent share (dossier math), with no warm customer. That is a side business.
- Benchmark only: needs the data and trust he lacks, plus antitrust counsel.
- Re-point at what MHC really is (personal-injury and PT clinic payers): that is a different idea, crowded by the same horizontal underpayment vendors and sitting in a fraud-litigation segment (GEICO's Aug 2026 suit against Miami PIP clinics). Florida PIP reimbursement (80 percent of 200 percent of Medicare Part B) is conditional on a policy-notice election and heavily litigated, so it is not a deterministic audit. It needs a fresh gate pass, not a rescue of F01.

## 4. What survives

- The real insider asset is access to a 130-clinic operator. Its workflows are the thing to learn, not a pre-chosen audit product to pilot there.
- Legitimate route: shadow ops as a workforce member (HIPAA training plus confidentiality terms, summer 2027) rather than as an outside vendor. That avoids the BAA and liability problem and finds the real leak.
- The freight-audit engine stays a freight experiment (finalist rule from the last round).

## 5. Next 30 days (kill-or-re-aim, no build, no legal spend)

- **Day 1:** text his mother: MHC legal entities; payer mix (PIP/auto, attorney liens, commercial, Medicare); whether Julia Peremel is her; whether any entity is Medicare-certified home health or SNF; intro to the billing/AR lead. Output: one-page fact sheet. If no home-health or SNF entity, mark F01 dead.
- **Days 2-14:** 6 fifteen-minute calls with post-acute finance or billing leads (channels below). One question: "In the last 12 months did a Medicare Advantage plan pay you less than your contract, and what was the dollar amount?" Pass only if 2 or more give a specific incident and would share 3 months of remits under a BAA.
- **Days 8-21:** 30-minute walkthrough with MHC's AR lead (no PHI taken): days in AR, short-pay and denial rates by payer, what happens at settlement, the worst 3 leaks. Output: ranked list of 5 leaks with MHC's own dollar estimates.
- **Days 22-30:** decision memo. Does any re-aimed candidate score 6/10 or better on the six criteria? If not, stop and go back to the finalist pool. Cap: 8 hours a week, under $100 spent.

## 6. Numbers

| Item | Value |
|---|---|
| Median case, annual revenue | about $50k |
| Upside case | about $10M, needs SNF second build plus a working benchmark; under 5 percent probability |
| Cost to first revenue if pursued anyway | about $9k |
| Time to first revenue if pursued anyway | about 24 weeks |

## 7. Quit conditions

1. MHC has no Medicare-certified home-health or SNF entity (expected): F01 is dead on day 1-3.
2. Fewer than 2 of the first 6 post-acute leads can cite a specific below-contract MA payment within 14 days.
3. Fewer than 4 calls booked from 40 cold messages by day 21 (confirms the cold-trust wall).
4. Axxess, HCHB, Claim Health, Enzo, Waystar or Tenix ships a home-health MA variance flag.
5. Lawyer plus insurance quotes exceed 25 percent of year-one expected revenue.

## Sources checked directly this round

mhcorp.com/about and mhcorp.com; Home Health Care News on Choice Health at Home (2022-08); AAPC CHW case study (2008-10-28); Axxess managed-care expected reimbursement rate page (2022-09-14). Everything else is carried forward from the dossier and the two critics' fetches and is labelled as such above.
