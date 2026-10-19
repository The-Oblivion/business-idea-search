# C03 refined: HCBS Operations Utility for managed-LTSS plans (pool P061, idea 5, after three critics)

Refined 2026-10-18. Tags: (S) read in a primary source this session, (S-sum) seen only in a search summary this session, (S-c) taken from a critic's cited source and not re-fetched, (A) my arithmetic or assumption, (U) unverified. "Net revenue" means what the company keeps (fees plus retained margin, no pass-through premium or provider payments), the same definition as the gate.

## 1. Verdict

**Alive, but a long shot: about 5-8% odds of the $100M case (judgment).** All three critics are right that the original pitch (neutral at-risk manager, savings-only pilot, 5% of $30k, plan co-investors) cannot reach $100M. I did not narrow it to a regional boutique. I changed what is sold, who funds it, how it is priced, and what comes first:

1. **Sell a mandated cost the plan already carries, not a savings share.** The product replaces the plan's own LTSS operations and care-coordination spend, at a fixed price, from budget lines that already exist.
2. **Neutrality is no longer the pitch.** Rivals already buy from CareBridge, and nobody has shown that they pay a premium for neutrality. Neutrality becomes free contract rights plus a pooled-scale argument that only a non-plan can make.
3. **Risk is last, not first.** Fee-based rungs need no downstream-risk licence and little capital. Shared savings and risk come only after a stepped-wedge rollout has produced evidence a benchmark can stand on.
4. **The $100M case needs the labor-bearing rung.** The tech-only rungs cap at roughly $55-60M. I say this up front because it is the main thing a reader should know.

## 2. What I checked this session (new facts that shaped the rewrite)

- (S) 42 CFR 438.8(e)(2)(v)(A): amounts paid to third-party vendors for network development, administrative fees, claims processing and utilization management are non-claims costs. The critic's admin-slice point is correct for those functions. [Cornell](https://www.law.cornell.edu/cfr/text/42/438.8)
- (S) 438.8(e)(3)(i) counts activities meeting 45 CFR 158.150(a)-(b) in the numerator, and 158.150(b)(2)(i)(A)(1) names "effective case management, care coordination, chronic disease management". So the **care-coordination portion can plausibly count as quality-improvement spend**, which the critic left unresolved. Utilization review (concurrent and retrospective) and cost-containment-primary activities are excluded. [Cornell](https://www.law.cornell.edu/cfr/text/45/158.150) Whether each plan and state books it that way is a per-plan check (U).
- (S) Care coordination is a mandated, ratio-bound cost. A Truven deck (pre-2018, ~15 MLTSS contracts) shows fewer than half of contracts set caseload maximums: HCBS 48-75 (6 contracts), self-directing 40, nursing home 100-175. Most contracts neither require nor prohibit delegation; full subcontracting of LTSS coordination is "rare", selected-task subcontracting "more common". [AdvancingStates](https://www.advancingstates.org/sites/default/files/Care%20Coordination%20in%20MLTSS.pdf) Virginia CCC Plus sets 1:75 for waiver members versus 1:400 for lower-need members. [VCU](https://healthpolicy.vcu.edu/media/school-of-population-health/hbp-2023/VCU_Report_CareCoordinators_ACC.pdf)
- (S) States fund care management as an explicit rate line built from caseload ratios and BLS wages: South Carolina's SFY 2027 rate certification does this for intensive case management (a $15M non-benefit load, SMI population, not LTSS). Admin is a % of benefits. It shows the mechanism, not an LTSS price. [SCDHHS](https://www.scdhhs.gov/sites/dhhs/files/SFY%202027%20Medicaid%20Managed%20Care%20Certification.pdf)
- **Consequence of the ratio rule (A):** where a contract caps caseload, coordinator headcount follows member count, not workload. Automation cannot cut headcount below the ratio. It can only (a) lower cost per coordinator through skill mix and geography, (b) move non-ratio work (exceptions, authorizations, provider ops, integrity) off the coordinators, and (c) supply flexible capacity. This is why the revenue-heavy rung is a thin-margin labor business and why the desk alone does not carry the plan.
- (S-sum) Centene: Medicaid HBR 93.9% in Q2 2026 and about $480M of 2026 SG&A savings. Georgetown CCF: Big Five Medicaid enrollment 36.2M to 34.0M (-6.5%) in the year to June 2026. Plans must cut admin while mandated ratios and KPIs do not shrink.
- (S-sum) New York has about 20 MLTC plans and a standing proposal to procure down to 2-5 per region; DOH mandated plans without an affiliated D-SNP to transfer members in 2024. NY is a real but unstable second-wave market.
- (S-sum) No public missed-visit rate exists. The only hard number is NY's claim-to-EVV match rate (56% of personal-care services matched). The exception rate and handling time in my cost model are therefore unmeasured (U) and are the first thing the test must measure.

## 3. The refined business

**One-liner.** Fixed-price, 24/7 operations for a Medicaid plan's highest-need home-care members: missed-shift response, hours-delivered reconciliation, back-office HCBS operations and licensed coordination capacity. It is paid from the plan's own administrative and care-coordination budgets, owned by no health plan, with shared savings and risk earned only after the data supports them.

**Wedge customer.** A Medicaid LTSS plan that is not Elevance- or UnitedHealth-owned, with 5,000-60,000 HCBS-using members in a state that has (a) at least three MLTSS plans, (b) subcontracting by notice rather than prior approval, and (c) a trigger: falling enrollment, a new contract or rebid with a readiness review (for example Arizona's ALTCS rebid, new contract Oct 2027, S-c), or a plan shrinking its LTSS team. Categories: regional and provider-sponsored plans, Blue-affiliated Medicaid plans, second-tier state plans of national parents (hypotheses, U). Centene's in-house 338K lives and Optum are not targets.

**Payer and signer.** The plan's LTSS line of business. R1-R2 are paid from administrative expense (they replace existing staff and vendor cost). R3 is paid from the care-coordination budget, which may be quality-improvement spend. Champion: VP or SVP of LTSS. Signer: Medicaid president or COO, with CFO and compliance (delegation oversight) sign-off. The state is notified or approves the subcontract.

**Product ladder (sequenced; each rung funds the next):**

| Rung | What it is | Price (A) | Risk / licence | Timing |
|---|---|---|---|---|
| R1 Exceptions and Assurance Desk | 24/7 response to missed or late visits and unfilled hours, backup-care activation, three-way match of EVV visits, authorizations and claims feeding pre-pay edits, KPI and caseload-ratio reporting. No clinical decisions, no authorization determinations. | $20-35 PMPM (about $300 per member-year) | None. Admin subcontract. | Paid pilot months 3-9 |
| R2 HCBS Operations Stack | R1 plus reauthorization and reassessment scheduling, provider reliability scoring, program-integrity workflows, new-state launch support. | $40-60 PMPM (about $600) | None. Admin subcontract. | Months 9-24 |
| R3 Coordination Capacity | Licensed coordinators and supervised navigators on a flex basis, with a caseload-ratio compliance guarantee and SLA credits. Includes R2. | $110-150 PMPM (about $1,300-1,800, inclusive) | Delegation approval in some states. | Months 12-30 |
| R4 Performance layer | Two-sided KPI pool for all plans. Shared savings only for parents holding both Medicare and Medicaid risk, on benchmarks pre-registered from the stepped-wedge data. Risk-bearing only after state-by-state counsel. | 5% of fees plus shared savings | Licensing check per state | Month 24+ |
| R5 Modules beyond the plan | Program-integrity feed, provider scorecards, benchmarking to plans, ACOs and one or two state programs. | Subscriptions, PMPM | None | Month 24+ |

**Pricing logic.** Price R1-R3 at no more than 95% of the plan's fully loaded in-house cost of the same work, with 10-15% of fees at risk on KPIs. A 90-day pilot is priced at cost plus 10% and converts to the rung price. No savings share before R4. This answers the MLR point directly: the fee replaces admin the plan already carries, so it is not a new slice taken from medical dollars.

**Why now (re-derived).** Plan margins are at a trough and SG&A is being cut, yet caseload ratios and KPIs are mandated and do not shrink with membership. Falling membership turns fixed in-house teams into the problem (variable-cost capacity is the benefit). Rebids and exits (Elevance in DC and Louisiana, Centene's Arkansas expansion exit, Arizona ALTCS) force plans to stand up or wind down LTSS operations on a deadline. EVV is universal, so exception data exists in every state. Enforcement attention to personal care (CMS Feb 2026, S-c) makes claims leakage a board topic. CareBridge's growth and D-SNP extension show plans buy the category and make a second source valuable.

**Moat (7 Powers), honest version.**
- **Scale economies (primary).** A 24/7 desk has a staffing floor. Illustration (A, with unmeasured inputs): about 10 FTE minimum is roughly $280 per member-year at 3,000 members, but roughly $100 at 30,000 members (assuming 1.5 exceptions per member-month and 8 minutes each). A sub-scale plan cannot staff nights, weekends and vacancies efficiently. A pool across competing plans can, and only a non-plan can organize that. This is the only place neutrality is worth money.
- **Switching costs (secondary).** Delegation embedded in plan workflows, state-notified subcontracts, audit trail, 3-year terms with wind-down fees.
- **Cornered resource (conditional, later).** Multi-plan, stepped-wedge data on what exception response does to outcomes. Nobody has this: the JAMA FIDE-SNP study and NBER 35055 found no acute benefit from integration or managed LTSS.
- Neutrality itself is **not** a power. Elevance can copy a clause in a quarter.

**Neutrality and capital structure.** No plan or plan affiliate holds equity, convertible debt, a ROFR or a board seat. Customers hold the rights: termination without penalty plus data return and transition support on a sale to any Medicaid MCO or affiliate, and an audited data firewall. This costs nothing if no plan sale is intended, and it removes the CareBridge pattern (investor in 2022, acquirer in 2024). Capital through year 5 is about $50-80M (A): seed/A $8-12M for 24 months of runway and two paid pilots, then $25-40M for R2-R3 build. Risk capital for R4 ($20-50M) comes later from reinsurers, surety or non-plan investors. Sources are healthcare-services growth equity (H.I.G.-into-GT Independence and Oak HC/FT-into-CareBridge are the analogs), not digital-health mega-rounds. Exit: HHAX, Maximus, Conduent, Gainwell, Evolent, PE. The shrunken exit set is the price of credible neutrality.

**Competitors and edge.**
- CareBridge/Carelon: scale, at-risk model, rival-owned, nearly 200k patients (S-c). We lose where a plan wants risk transfer or Elevance discounts hard. We win on fixed price, simpler procurement (no downstream risk) and being the second source that disciplines Carelon's price.
- HHAeXchange: 180+ MCOs, payer analytics, launched managed RCM for agencies in Apr 2026 (S-c). It is a software seat, not operations labor. It is both our data dependency and a possible channel or acquirer.
- CareCentrix (independent LTSS, guaranteed savings), Cityblock/Homeward (care delivery, 10k-life first contracts), Papa (MA companionship), ShiftMed (staffing) are adjacent.
- Plan in-house teams (Centene 338K LTSS lives) are the main competitor. Large plans insource; the bet is on sub-scale plans.
- Evolent shows the failure mode: revenue -26.6% in FY2025, top four customers 68.5% of revenue, explicit insourcing risk (S-c). Mitigation: no parent above 30% of revenue and no state above 35% by year 4, multi-year terms, per-plan minimums.

## 4. Bottom-up market and revenue

**Pool.**
- Managed-LTSS users, July 2024: 1,856,121 (S-c, CMS).
- Remove California (312,162, mostly institutional or limited services; IHSS sits outside plans) and New York (346,892, MLTC-only plans, unstable procurement): **1,197,067** remain (A).
- At ~55% HCBS-using (U): **~660k members** in the base states.
- Plan spend on HCBS coordination plus operations: coordination $1,300-2,100 (1:48-75 caseload × ~$100k loaded) plus operations $500-700 = $1,800-2,800 per member-year (A). That is about **$1.2-1.8B** a year (A).
- NY MLTC (347k, HCBS-heavy) is a second-wave add-on, not in the base.
- Reachable payers: about 6-10 non-Elevance parents with over 50k LTSS lives plus perhaps 15-25 regional, Blue and provider-sponsored plan entities (U, not counted).

**Upside case, year 8 (A).** Built to find the minimum assumptions that clear $100M, not to maximize.

| Layer | Volume | Price | Net revenue |
|---|---|---|---|
| R1 desk only | 20,000 | $300 | $6.0M |
| R2 ops stack | 25,000 | $600 | $15.0M |
| R3 coordination capacity (inclusive) | 40,000 | $1,500 | $60.0M |
| R4 KPI pool (5% of fees) plus shared savings on 20k aligned lives × $300 | | | $10.1M |
| R5 modules, integrity, benchmarking, one state | | | $10.0M |
| **Total** | **85,000 lives** | | **~$101M** |

Upside assumptions, named:
1. 85k lives is about 13% of the 660k base, or about 8% if NY MLTC is added. That is roughly CareBridge's reach (115k) without Elevance's captive volume, so top-decile.
2. Eight to ten plan contracts across 8-10 states, about 6 parents, none above 30% of revenue.
3. R3 sells at 95% of in-house cost with 10-15% margin. Blended gross margin is about 34% and EBITDA about 14%, so **$100M of revenue is roughly $14M of EBITDA**. This is a services-plus-software company valued like Evolent or CareCentrix, not SaaS.
4. Time: first paid pilot by month 9-18, R3 live by month 24-30, scale in years 5-8.
5. Sensitivity: each +10k R3 lives is about +$9M over R2 pricing (R3 replaces R2 revenue at $1,500 versus $600), and each +$100 on the R3 price is about +$4M. Without R3 (all R3 lives stay at R2), revenue is **~$55-60M**.

**Median case, year 7 (A).** Competent execution that reaches paid pilots: 3-4 contracts averaging ~5k lives.
R1 6k × $300 = $1.8M; R2 8k × $600 = $4.8M; R3 6.5k × $1,450 = $9.75M; R4 $0.9M; R5 $0.8M. Total **~$18M**, about 20k lives (3% of base).

**Odds (judgment, not computed).** Reaching the median conditional on a paid pilot is about 50%. Unconditionally, about a 25-30% chance of $15M or more, about a 55-60% chance of under $5M, and 5-8% for the $100M case.

## 5. Critique-by-critique

Verdicts: Right (concede, change made), Partly, Wrong.

**Critic 1 (competition, MLR, comps, occupied wedge, buyer health)**

| Objection | Verdict | What changed |
|---|---|---|
| Neutral vacuum contradicted: rivals standardized on CareBridge (Iowa, Wyoming, Arkansas); Elevance exiting Medicaid, so Carelon courts rivals; clause is copyable | Right | Neutrality removed from the pitch and the price. It is a customer-held contract right, a free tie-breaker. The reason to buy is fixed price, capacity and performance. We are the second source. If Carelon discounts to rivals, plans win and our price floor is our cost to serve. |
| MLR cap: vendor margin is admin; 5% net would eat ~70% of the admin slice; realistic fee $300-600 | Right on classification (verified); wrong that all of it is stuck there | Priced as substitution for existing admin, at 95% of in-house cost or less, not as a share of spend. The $300-600 band is R1-R2. The care-coordination portion may count as quality-improvement spend under 158.150, so R3 can sit at $1,300-1,800. This is a per-plan check. |
| Neutral comps are shrinking or acquired (Evolent, CareCentrix, Waymark, Cityblock); $100-200M needed; exit is to a plan | Right | No downstream risk until R4. Capital through year 5 is $50-80M. No plan equity or ROFR. Exit to non-plan buyers. Concentration caps. A built-to-be-acquired outcome remains the likely downside. |
| Wedge occupied (CareBridge D-SNP, HHAX, CareCentrix, Cityblock, Centene in-house); aligned pool thin; EVV data from two competitors | Partly | Dropped the FIDE/HIDE-only wedge. Entry is any MLTSS plan with sub-scale in-house ops in chosen states. Alignment is an R4 option. EVV-agnostic ingestion through the plan's own data rights, checked before any pilot. If a plan cannot direct feeds to a delegate, the idea is dead. |
| Budgets contracting; state sign-off per deal; losing a state strands lives; cold entrant has no anchor | Partly | Shrinkage is the trigger (variable-cost capacity). States are chosen by delegation rule. R1-R2 are administrative subcontracts. Per-plan minimums and wind-down fees. First pilot priced at cost plus 10% so the anchor is a low-risk pilot, not an investor. |

**Critic 2 (no demand evidence, wrong unit economics, unproven savings, tiny buyer set, shrinking buyers)**

| Objection | Verdict | What changed |
|---|---|---|
| No evidence anyone pays for neutral; investors are not purchasers; insourcing | Right | Same as above. The demand question is now the two-week test, framed as "will a plan pay a fixed fee", not "will it prefer a neutral vendor". |
| Wrong base: $16.5k not $30k; at 3.4% that is $561 and ~178k members | Right | Dropped % of spend. Revenue is per member for work replaced: $300 / $600 / $1,500. $100M needs ~85k lives with ~40k on R3. Stated openly that without R3 the ceiling is ~$55-60M. |
| Savings unproven (UPMC FIDE null, Mathematica mixed, no missed-shift to ED study) | Right | No acute-savings promise in R1-R3. Fees rest on ops KPIs, coordinator capacity and claims leakage (hard-dollar, no hospital effect needed). Stepped-wedge rollout with an academic partner generates the evidence before R4. |
| Buyer set tiny, each has a veto, Evolent concentration, 18-30 month cycles | Partly | Reachable set widened to regional and Blue plans (U). R1 has no risk transfer, so a faster path is possible, but I budget 24 months of runway and treat 12-18 months to first paid pilot as realistic. Concentration caps and multi-year terms. |
| Buyers cutting costs now; free HHAX tools; savings-only is the market rate | Partly | Cost-cutting plans buy substitution, not new spend, so pricing is substitution only. HHAX sells analytics seats, not operations labor, and we interoperate. Savings-only is accepted as market for R4 only. |

**Critic 3 (timing, regulation, capital, savings, pool and data)**

| Objection | Verdict | What changed |
|---|---|---|
| Buyer pool volatile; D-SNP footprints shrinking; UHC grows but is least likely to buy | Right | Diversify across states and parents. D-SNP is not the foundation. UHC and Elevance are excluded targets. |
| Downstream risk needs licensing and state sign-off; 9-18 months per pair; algorithmic-hours liability | Right for risk | R1-R3 carry no downstream risk, so insurance licensing (Maine, Maryland, Texas reserves) does not apply. R4 only after state-by-state counsel. No hours-setting product. The plan keeps authorization decisions. Capped indemnity plus E&O. Delegation approval drives which states launch first. |
| Co-investment contradicts neutrality; Rock Health pattern; ModivCare precedent | Right | No plan money. Capital-light, revenue-funded. Avoids ModivCare's traits: no aide employment, no debt-funded roll-up, no fixed-price delivery risk. |
| Savings leaky; alignment softer; network steering limited by free choice; aide supply binds | Right | Alignment is used for integrated coordination and an R4 option only. Network steering becomes reliability scoring and backup activation. We do not claim to create hours: the desk mitigates harm from the 71% fill rate, it does not fix supply. |
| Pool overstated (CA, NY); EVV feeds held by a competitor | Partly | Pool recomputed without CA and NY (1.197M, ~660k HCBS-using). NY MLTC is a second wave. Feeds come through the plan's rights, a gate in the test. |

## 6. Riskiest assumption and the two-week test

**Riskiest assumption.** A non-Elevance, non-UnitedHealth Medicaid LTSS plan will pay a **fixed, non-contingent fee** (about $40+ PMPM for operations, about $110+ PMPM for ratio-assured coordination) out of its administrative or care-coordination budget to an unaffiliated vendor, rather than insource, buy from CareBridge, or insist on savings-only. Behind it sits a second, weaker one: our cost to serve R3 is low enough to leave a 10-15% margin at 95% of the plan's in-house cost.

**Test (about $0-3k, 14 days).**
- **Days 1-3.** Write a one-page priced offer (R1 $300, R2 $600, R3 $1,500 per member-year; 90-day paid pilot at cost plus 10%). Build a list of 40 contacts at 10 or more non-Elevance, non-UHC plan entities (ex-plan operators for warm introductions, LinkedIn, ADvancing States and HMA networks). Optionally use 3-4 paid expert-network calls with former plan LTSS directors.
- **Days 2-12.** Hold 12 or more calls, at least 8 with director-level or higher budget-relevant people. Ask:
  1. Fully loaded cost per HCBS member-year for coordination and for HCBS operations.
  2. Exception volume and time to resolve.
  3. What they pay CareBridge or others, and how.
  4. Who signs and which budget line pays.
  5. Fixed fee versus savings-only.
  Request a de-identified data sample for a free retrospective.
- **Free desk checks in parallel.** Caseload and delegation language in six state contracts. State subcontractor lists (Iowa, Tennessee, Texas, Ohio, Arizona) to see whether non-Elevance plans still use CareBridge.
- **Pass.** At least 5 of 8 give a loaded cost within $900-2,500 for coordination plus operations and call a fixed fee at or below 95% of it worth a pilot conversation. At least 2 distinct parents name a budget owner above the VP of LTSS and agree to a retrospective on at least 2,000 members. No more than 3 of 8 say "savings-only or nothing". Measured exceptions of at least 0.5 per member-month or resolution times over 4 hours (otherwise R1 has no pain).
- **Kill or redesign.** At least 6 of 8 insist on savings-only, in-house or CareBridge. Or no one will name a budget owner or share a number. Then the idea reverts to the regional boutique the critics describe, and alive becomes false at the next gate.

## 7. Pre-mortem and kill gates

1. **Plans insource or buy from Carelon at low marginal price, so there is no sale.** Partly testable now (above); target sub-scale plans.
2. **R3 is a thin-margin labor business bound by caseload ratios, so we stick at R1-R2 (~$55-60M cap).** Provable only in a pilot. Skill mix, geography and tooling are the levers. Gate: if R3 gross margin is under 10% at 5k lives, drop the $100M claim.
3. **Cycles and approvals outrun runway.** Mitigated by a low-capital pilot structure and 24 months of runway. Gates: no paid pilot of $1M annualized or more by month 12, or under $5M ARR or a single parent by month 24, means stop.

## 8. Evidence limits

Not found: any plan asking for a vendor not owned by a competitor; plan-to-vendor fee benchmarks; HCBS use among FIDE/HIDE members; missed-visit rates; CareCentrix's Medicaid size; whether CareBridge still serves rivals after the close. The 438.8 and 158.150 readings are mine, not a compliance opinion. The in-house cost per coordinated member ($1,300-2,100) is an assumption built from caseload ratios and a ~$100k loaded wage, and the call sprint tests it directly.
