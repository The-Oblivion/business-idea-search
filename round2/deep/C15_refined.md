# C15 Refined: Root-Cause Contract (outcome-priced fixes for the costliest social homes)

Date: 2026-10-19. Pool P003 (England social landlords' repairs, Awaab's Law era). Inputs: idea P003 "Hot-Spot Contract", gate P003, dossier C15, three critiques.
Tags: [V] read on the page; [S] search summary only; [A] my assumption or arithmetic; [M] from memory. GBP/USD 1.30. $100M = about GBP77M.

## 1. Verdict

**Alive, narrowly.** Honest odds: about 30% of clearing the 8-week data gate [A]; about 10-15% of reaching the upside once past it [A]; so roughly 3-5% of ever reaching $100M a year. Median (conditional on clearing the gate and the first trial) about $17M; upside about $107M. The only reasons to keep it alive: the first kill decision costs under GBP25k and lands in 8 weeks, and the upside has a mechanism (a new contract category plus a financed book), not just more sales.

If the 8-week gate shows the top 5% of homes carry under 15% of spend in two of three ledgers, or the concentration is transient, the idea is dead and should be marked dead. Nothing below is a reason to skip that test.

## 2. What the critics killed (conceded, not defended)

1. **Pricing at 80% of trailing three-year cost.** Cost trend (+13-14% a year [V, RSH]), Awaab volume, recording changes and regression to the mean all corrupt a trailing baseline.
2. **A five-year uncapped repeat-repair guarantee as the product.** The tail is uncapped, uninsurable and sits on the FSMA line. Dropped.
3. **"Cornered cross-landlord job dataset" and "reinsurance relationships" as moats.** Mobysoft claims 7M jobs; Wates sees 500,000+ homes; no stop-loss product exists. Reinsurance is now a financing dependency, not a moat.
4. **Capitalisation helps the EBITDA-MRI covenant.** Wrong for EBITDA-MRI (dossier section 8). Dropped from the pitch.
5. **Cold-selling a carve-out to landlords as a newco.** No precedent found; turnover tests of 1.5-2x contract value and D&B scores exclude a newco; incumbents hold exclusivity.
6. **Provider-funded fixes from day one.** Breakeven cut is 43% when we fund them; the only measured number is 25% on repeat visits, analytics only, vendor case.
7. **Ranking homes by trailing cost alone.** Selecting the most expensive homes guarantees some "savings" from regression to the mean. The healthcare analog is the Camden Coalition "hotspotting" randomised trial, where the apparent drop in readmissions disappeared against a control group (180-day readmission 62.3% vs 61.7%) [M, NEJM 2020]. Any savings claim here must be against a concurrent control.
8. **Counter-positioning against all primes.** Price-per-property (PPP) primes are already paid to fix root causes. They are a channel, not a victim.

## 3. The business after the rewrite

| Element | Before | After | Driven by |
|---|---|---|---|
| First customer | Landlord with 25k+ homes, cold, for a 500-home carve-out | A 15-40k-home association or ALMO with a funded damp-and-mould / Awaab supplementary-works line, a visit-priced or expiring repairs contract (or a DLO), and a visible Ombudsman or disrepair-claims problem. Second entry door: a PE-backed PfH-framework prime without a Healthy Homes answer, as lead contractor of record | Critics 1, 2, 3 |
| Signer and budget | FD + Director of Assets, three budget owners | Early rungs: Director of Assets / Head of Asset Investment, paid from the existing damp-and-mould or Awaab supplementary-works line (Wigan about GBP2M, InCommunities about GBP3M a year [V/S, dossier]). FD co-signs only the capitated rung, after the trial. For prime-channel deals: the prime's contract director signs, the landlord consents to a variation | Critic 2 |
| First product | 500-home capitated carve-out | Free 48-hour ledger x-ray, then a 50-home sprint below the services threshold (GBP207,720 incl VAT [S, dossier]) or as a variation under the landlord's existing contract (s.74 below-threshold route, 10% for services [S]; counsel to confirm) | Critics 2, 3 |
| Selection | Rank by trailing cost | Select on repeat same-fault jobs plus a physical diagnosis (sensor log, assessor), then triage each home: fix, manage-to-dispose, or regenerate (30-year NPV with home-level cost-in-use) | Dossier section 2, critic 3 |
| Pricing | 80% of trailing cost | Fee = 85% of a **concurrent counterfactual**, gliding to 75% by year 5; corridor of plus or minus 10%; volume re-opener for new statutory clocks (section 5) | Critics 1, 2, 3 |
| Fix funding | Provider | Landlord capital line or grant first (Warm Homes Social Housing Fund match); third-party fund only after a measured effect of 40% or more | Critics 1, 3 |
| Guarantee | 5-year, uncapped, pays any repeat visit | 24-month re-performance warranty at our cost for the same cause, capped at that home's annual fee; claims and compensation sit outside the fee, with a separate gain-share on verified reductions; landlord keeps the s10A duty | Critics 1, 3 |
| Entry route at scale | Own tender | Pilot below threshold or by variation; scale through call-offs where a PfH-lot or similar prime is lead contractor of record and parent-guarantee provider; later our own fund | Critic 3 |
| Moat | Cornered job dataset, reinsurance, switching costs | A library of **causal** effects (archetype x cause x fix, measured against controls) and a verification protocol others can adopt (section 9) | Critics 1, 2 |

Nothing in the end state shrank: the target is still multi-year capitated cohorts at 12+ landlords plus a prime channel. What shrank is the first step and the liabilities.

## 4. The ladder (each rung is paid, and each unlocks the next)

1. **X-ray (free, 48 hours, hashed property IDs, no tenant data).** Input: job date, trade or fault code, cost, contractor, priority, claim flag if held. Output: top-5% share of three-year spend; persistence (does the year 1-2 top 5% still cost 60%+ of its prior level in year 3?); share of cohort spend that is same-fault repeats; cluster index (homes per estate or archetype, to solve the route-density problem by treating estates, not scattered doors); data-quality score; fix / dispose / regenerate split. It is both the sales hook and the kill test.
2. **Sprint, 50-55 homes, about GBP3,000 a home for diagnosis and fix (about GBP165k, below threshold) [A].** Landlord pays from its damp-and-mould line. Measures access success, diagnosis quality and 90-day leading indicators.
3. **Stepped-wedge trial, 400 homes across two landlords.** Half treated first, half on a randomised waitlist for 12 months, both on the incumbent's normal statutory service (a control home that reports a hazard is fixed at once and analysed as intention-to-treat). Power: to detect a 40% cut at 80% power and 5% significance, n per arm is about 98 x (sd/mean)^2; with sd equal to the mean that is about 100 homes per arm, 220 if sd is 1.5x the mean; adjusting for baseline cost cuts it by roughly a quarter [A]. A "100-home pilot" in the critics' wording is underpowered; 200 per arm is not. Final read after a full winter. Landlord capital pays for the works.
4. **Capitated contract on the cohort**, fee per section 5, five years plus extension, with the verification protocol written into the contract and an optional claims-cost gain-share.
5. **Financed book.** Once the measured effect is 40% or more, a third-party fund pays for fixes, recovered from the fee over 5 years. Stop-loss is bought on the book (first quote requested after the trial), not promised before it exists.

## 5. Pricing and unit economics

**Fee per cohort home per year = 0.85 x B x I**, where B is the cohort's 36-month cost per home rebased to contract start, and I is the cost-per-home index of the landlord's **rest of stock** since then (same ledger, same recording conventions). Year 3 onward the factor glides 0.85 to 0.75 by year 5. Claims, compensation and decant sit outside the fee. During the trial the same logic uses the waitlist control instead of the index.

Why this works: the rest-of-stock index moves with the 13-14% cost trend, Awaab volume and recording changes (Housemark's emergency-hazard medians jumped from 6.3 to 35.8 per 1,000 homes in a month [V, critic 2]), so baseline disputes shrink. It also means we are paid only for effect **above** what a landlord can buy for a few pounds a home from analytics (Mobysoft at GBP97-276k a year, Switchee from GBP99 a home [S]): if the landlord rolls that out across its stock, the index already contains it. Success does not cut our fee, because the fee tracks the counterfactual; the landlord's saving rises on the glide instead.

Per cohort home, counterfactual C = GBP2,800 [A, as in the dossier]; fee 85% = GBP2,380; overhead 12% of fee = GBP286; provider-funded fix GBP2,000 over 5 years = GBP400 plus GBP100 financing:

| Causal cut vs control | Margin, landlord funds fix | Margin, provider funds fix |
|---|---|---|
| 25% | -GBP6 (0%) | -GBP506 (-21%) |
| 40% | +GBP414 (17%) | -GBP86 (-4%) |
| 50% | +GBP694 (29%) | +GBP194 (8%) |
| 60% | +GBP974 (41%) | +GBP474 (20%) |

Breakeven cut: about 25% if the landlord funds the fix; about 43% if we do. So the staging is the risk control: we take no fix capital until a controlled trial shows 40% or more. At the year-5 glide (fee 75%) and a 50% cut, margin is about 21% with the fix fully amortised. All of these assume the cut is causal; if the trial shows 25%, capitation is off the table and we are a fix-only contractor.

Prime-channel fee: about GBP1,900 a home (prime keeps its spread). At a 50% cut margin is about 17%; at 40% it is about 3%. This channel is for volume, qualification and speed, and it is lower margin.

## 6. Answers to the critics

**Critic 1 (serious): incumbents already sell it.**
- Accepted: Wates Healthy Homes (April 2024; 500,000+ homes managed, six customers at launch [V]) and Mears total-asset deals are the right comparison; Mears pricing (GBP2,143 to GBP3,913 a home for everything) means a fee of GBP2,200 is a whole-home price, not a surcharge. A PPP landlord can tell its prime to fix root causes for no extra fee.
- A check this pass: I found no 2026 customer count, price or guarantee for Wates Healthy Homes; an October 2025 brochure frames it as an Awaab-ready 24-hour damp and mould service [S]. Absence of a stated outcome price is weak evidence, not proof.
- Change: PPP primes become the **channel**. Under PPP the prime carries hot-spot cost inside a 5-6% margin (Mears 5.7%); if the top 5% carry 25% of cost, a 40% cut is worth about 10% of contract cost, nearly twice the margin [A]. Root-cause fixes are often outside PPP scope (Exeter exclusions 30% to 36% of spend [S]) and need landlord capital, which is the gap we fill. Counter-positioning is claimed only against schedule-of-rates primes, component sellers and hourly-billed advisers.
- "Landlords can buy the easy 25% cheaply": yes, and our fee is indexed so we are not paid for it.
- Insurance-backed component guarantees are table stakes (ClwydAlyn 20-year, EnviroVent 10-year, Airtech 3-year [S/V]); we use them and sell the system-level outcome the components exclude.
- Not accepted: that subcontracting means prime margins forever. Early deals are subcontract-like; the book, the library and the fund are what change the economics.

**Critic 2 (fatal): no evidence anyone buys; sales cycles; margin; tail; erosion.**
- Accepted: no precedent for a cohort carve-out was found in about 10 targeted searches (dossier) and about 16 more (critic); buyers are bundling and insourcing (Livin, Thurrock, Winchester; Teign, Basildon, Ashford).
- Change: do not ask for a carve-out first. Sell a **12-week fix with a measured outcome** out of a line that already exists, below threshold. Capitation is sold only to landlords who have seen their own controlled result. Insourcing landlords (DLOs) lack root-cause specialists: they are fix-only customers.
- Single owner: the sponsor is the Director of Assets on the damp-and-mould or supplementary-works line; the FD joins at rung 4.
- Sales cycle: whole-stock awards took about 14 months (Thurrock [S]); a sprint is a director-level purchase in 2-4 months [A]; capitation stays 12-18 months and the revenue ramp starts in year 3 for that reason.
- Landlord's saving of about 20% is under 0.5% of turnover [A]: true, so the pitch to the FD is not just the discount. It is the Ombudsman-ready evidence file, fewer Awaab clocks, claims gain-share and, later, financed capex when interest cover is 59% [V].
- Pricing/margin: replaced (section 5). Tail: claims outside the fee, no indemnity (Critic 3).
- "The contract erodes its own revenue": fixed by pricing against the counterfactual; LTV is still bounded by Procurement Act re-competition, so I assume 60-70% renewal [A], not an annuity.
- Dossier-realistic $13M median / $58M upside is partly accepted: the upside needs two engines the dossier did not model (prime channel and fix-only works), and I mark them as assumptions (section 7).

**Critic 3 (fatal): procurement door, legal tail, capital, unproven premise, why-now.**
- Procurement: pilot below threshold or by variation; scale through call-offs with a framework winner as lead contractor and parent-guarantee provider; own balance sheet later. PA 2023 reaches subcontracts mostly through payment terms and exclusion checks [S], so the prime channel avoids a new landlord tender; counsel to confirm for each route. Winchester's D&B 51+ and 1.5x turnover tests are why a newco is never lead contractor in years 1-3.
- Legal tail: the landlord keeps "full responsibility" (guidance s8.5) and we do not argue otherwise. We carry only (a) a capped re-performance warranty and (b) the fee, with claims gain-share, not indemnity. Any claims-cost cover is offered only through a regulated carrier after it is priced; FCA perimeter advice first.
- Tenant behaviour: the guidance bans "lifestyle" blame, so the contract has no behaviour exclusion. Instead the control-indexed fee absorbs behaviour that affects treated and control homes equally; only documented non-access and sensor-verified tampering with installed ventilation are carved out, each with evidence.
- Capital: staged (section 11), about GBP1M before the trial result, none from us for fixes until the effect is proven.
- Data premise: the x-ray has a quality gate (property-ID match at least 90%, fault-code coverage, cost basis stated); landlords failing it are not contracted, which handles adverse selection.
- Why-now: accepted that the Decent Homes Standard Criterion E (2035) is no forcing function and that 2027-29 is mostly compliance and awarded contracts. The why-now is split in section 10.

## 7. Market and cases

Bottom-up. Money pool: the national 5% cohort is about 205-220k homes at GBP2,240-2,800 each, about GBP570-620M a year of money landlords already spend [A, dossier]. Reachable counterparties: about 45-55 landlords with 25k+ homes [A], about 100 more with 10-25k [A], and about 15 primes holding price-per-property or total-asset books (12 firms on all PfH lots plus Mears, Wates and others [V/A]). Per-contract cohorts: 500-600 homes at a 10-11k-home PPP book (Thurrock-sized) up to 2,000+ at a 40k-home landlord.

**Median (conditional on clearing the data gate and the first trial), year 7, about GBP13.0M = about $17M:**
- 3 capitated landlord programmes x 1,300 homes x GBP2,300 = GBP8.97M
- 1 prime-channel book x 800 homes x GBP1,900 = GBP1.52M
- Fix-only works (outcome rebate), 500 homes a year x GBP5,000 = GBP2.5M
- Assumes: concentration is real but moderate; causal cut of 30-40%; the category does not take off.

**Upside, year 7, about GBP82.4M = about $107M:**
- 12 capitated landlord programmes x 1,800 homes x GBP2,300 = GBP49.7M
- 4 prime-channel books x 2,000 homes x GBP1,900 = GBP15.2M
- Fix-only and grant-funded works, 3,000 homes a year x GBP5,500 = GBP16.5M
- Verification and analytics licences = about GBP1.0M
- Ramp (GBP M, annual revenue) [A]: Y1 1.5, Y2 4, Y3 10, Y4 22, Y5 38, Y6 58, Y7 82.

Named assumptions behind the upside (all must roughly hold):
1. Top 5-8% of homes (selected on same-fault recurrence) carry 25% or more of spend and are persistent. Unrun.
2. Causal cut of 45% or more against a concurrent control after a winter, clearly beating analytics-only.
3. The verification method is adopted by at least one of PfH, Housemark, a lender or a reinsurer, and "hot-spot lot with control-indexed pricing" appears in 2029-33 tenders. This is the category-creation step and the weakest link.
4. Third-party capital of GBP20-30M (fund and facility) is raised on the library; a stop-loss is priced.
5. Four primes subcontract or white-label cohorts rather than build in-house.
6. Renewal 60-70%; no major insourcing wave of the cohort.

Share checks, stated plainly. Upside = about 29,600 homes on recurring fees = about 14% of the national 5% cohort, about 20% of the fixable part if 30% of hot homes are negative-NPV or non-fixable [A]. By counterparties it is about 19 of 65-75 reachable, roughly 27%. **That is heroic by the lessons' own rule (over 20%).** It is only plausible if the standard makes this a category. Revenue is mostly pass-through works and labour; at $107M, blended EBITDA is probably 8-12% (about GBP7-10M) [A], so the equity story depends on the fund and protocol layer, not on contracting margin.

## 8. Competitors and edge

| Player | What they do | Why we are different |
|---|---|---|
| Wates Healthy Homes | Damp, mould, disrepair works with direct labour; 500,000+ homes managed [V] | No published price, outcome terms or guarantee found; we sell a measured outcome and offer them white-label |
| Mears, Cardo, Equans, United Living (PPP and total-asset) | Take whole-stock cost risk | They are the channel; we take the hot homes they cannot fix without landlord capital |
| Sureserve Property MOT | Damp survey inside the annual gas visit [V] | Detection, not a fix or an outcome price |
| Mobysoft, Switchee, Aico | Analytics and sensors; 25% fewer repeat visits at Gloucester (vendor) [V] | Cheaper to buy than to build; we buy their data layer and price above it |
| Airtech, EnviroVent, PCA members | Component and treatment guarantees [V/S] | Exclude gradual damage, behaviour, access; we cover the system outcome with a capped warranty |
| PfH GBP480M, Riverside GBP657M frameworks | Disrepair works lots | Entry through winners as lead contractor |
| Insourced DLOs (Hyde, Basildon, Teign from April 2027) | Control | A fix-only cell for DLOs |

## 9. Moat (7 Powers), with time to reach

- **Day one: none worth the name.** The plan must be financeable without one for 24-36 months.
- **Cornered resource, reachable in about 3 winters:** the causal-effects library (archetype x cause x fix, vs control). A competitor can rerun the experiments, so the lead is time plus **contractual data rights** to use anonymised outcomes across clients (an explicit negotiation item; tenant health data stays out, per the ICO necessity point).
- **Process power / standard, reachable in 3-5 years if adopted:** the control-indexed verification method, modelled on how IPMVP made energy-savings contracts bankable [M]. NEC4 target-contract pain/gain vocabulary [M] makes it legible to landlords' commercial teams.
- **Counter-positioning:** valid only against schedule-of-rates primes, component vendors and hourly advisers.
- **Switching costs:** low and bounded by re-competition; installed sensors, a live index and five years of data help at renewal.
- **Scale economies:** route density by treating estates; not claimed until the x-ray's cluster index confirms it.

## 10. Why now (split by rung)

- **Rungs 1-3 (now):** Awaab's Law phase 2 starts 30 Nov 2026; guidance requires works to prevent recurrence as far as possible; claimant costs uncapped to at least Oct 2028 [V]; only 4% of landlords call themselves very prepared [S]; sector cash interest cover 59% and repairs spend forecast +14% [V].
- **Rung 4 (2029-31):** the re-tender and insourcing wave (Riverside to about 2029, PfH to about 2030, Teign April 2027), by which time a controlled result and a protocol must already exist. If the evidence is not ready by 2028, the window closes for years.

## 11. Capital by stage [A]

- Gates 0-1: GBP15-25k (own time, counsel on FSMA and Procurement Act routes).
- Stages 1-2 (to the winter read, about 20 months): GBP0.8-1.2M seed for 5-7 people, sensors and analytics; trial works paid by landlords.
- Stage 3 (months 20-48): GBP6-10M equity plus an asset facility, only after a causal cut of 40% or more.
- Stage 4: GBP30-60M fund or infrastructure-style debt underwritten on the library, plus stop-loss on the book. Optional: buy a regional repairs contractor to own delivery and clear turnover tests.

## 12. Pre-mortem (2030, dead because)

1. **The concentration is transient or thin** (top 5% under 15%, or cost falls back without help). Not fixable; it is the test.
2. **Sprint buyers love it, capitation buyers never appear.** Partly fixable through the prime channel and fix-only works; the ceiling then falls to about the median case.
3. **Primes or landlords copy it** by adding a gain-share schedule. Defence: be the white-label and the standard first.
4. **Winter read under 25% causal cut.** Stop capitation.

## 13. Riskiest assumption and the 2-week test

**Assumption:** the same 5-8% of homes, selected on repeat same-fault jobs, carry at least 25% of repair-plus-disrepair spend and still cost at least 60% of their prior level the next year (persistent, therefore fixable, rather than regression-to-the-mean noise) **and** a landlord will hand over the ledger to find out.

**Test (14 days, cost near zero):**
- Days 1-2: build the x-ray (notebook or spreadsheet): top-5% share, persistence, same-fault share, cluster index, data-quality score.
- Day 1: FOI to 25 councils for anonymised per-property totals for the 100 costliest homes by year, 2023/24 to 2025/26 (answers land after day 14, in the 8-week gate).
- Days 2-4: 40 named targets: 15 Directors or Heads of Asset or Repairs at 25k+ associations and ALMOs; 10 council housing directors; 8 contract directors at non-top-3 PfH-lot primes; 7 at insourcing landlords. Offer: free x-ray in 48 hours, NDA, hashed IDs. Ask three things: does your repairs contract allow a cohort variation; which line pays for supplementary root-cause works; would you fund a 50-home sprint from it if the x-ray justifies it.
- Day 14 readout: at least 8 of 40 reply; at least 2 ledgers promised in writing and 1 received and analysed; at least 1 verbal "would fund a sprint".
- **Pass (8-week gate):** at least 3 ledgers covering 40k+ homes; top-5% share 25% or more in at least 2; persistence 60% or more. **Kill:** top-5% share under 15% in 2 of 3, or persistence under 40%, or fewer than 2 ledgers by day 28 (no one will even share data, which is itself the answer on demand).

## 14. Gates

| Gate | When | Pass | If not |
|---|---|---|---|
| 0 | Day 14 | 8 replies, 2 ledgers promised | Extend 14 days; kill if none received by day 28 |
| 1 | Week 8 | Concentration and persistence thresholds above | Kill, or keep only the fix-only line if share is 15-25% |
| 2 | About month 6 | Sprint: access 85%+, fixes done, early indicators | Redesign the fix |
| 3 | About month 20 | Trial: causal cut vs control at least 30% with lower bound above 15% | Under 25%: no capitation |
| 4 | Months 20-30 | Stop-loss quote, FCA opinion, one prime white-label MoU, landlord data-rights clause | Stay capital-light |

## 15. Not verified in this pass

- No top-5% cost split exists publicly; the kill test is still unrun.
- Procurement Act s.74 below-threshold route (10% services) and the treatment of private-prime subcontracts are from search summaries [S]; the exact Schedule 8 text and current thresholds were not read. Counsel needed.
- Wates Healthy Homes: no 2026 data found.
- Camden Coalition RCT figures, IPMVP and NEC4 Option C are from memory [M].
- Critics' [S] items (Thanet KPI, Exeter exclusions, ClwydAlyn guarantee, find-tender notices) remain unverified; I have not upgraded them.
- Whether landlords' counsel will accept a randomised waitlist control for homes with statutory hazards is untested.
- Revenue per fix-only home (GBP5,000 to GBP5,500), renewal rate, 30% fixable-share haircut and the sprint cost per home are my assumptions.
