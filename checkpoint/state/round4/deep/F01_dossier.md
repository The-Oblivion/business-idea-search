# F01 Dossier: MA Rate Truth / MA Yield (Medicare Advantage remit audit plus peer yield benchmark for post-acute operators)

Research date: late October 2026 (about 40 searches and fetches on top of the gate report in `gate/g01.md`). Items I could not source are in the Gaps section.

## 1. Bottom line

**Verdict: weak, about 3/10. Run the free two-week premise test, but do not commit to this as the company.**

- **The audit leg is real but small, and the market is now crowded from two directions.** Five funded horizontal vendors do remit-versus-contract repricing. Three funded *post-acute-first* vendors the gate missed (Claim Health, Enzo Health, Advanced RevCycle) already sit inside home-health billing workflows and can add underpayment detection.
- **The benchmark leg is the only venture-scale piece, and it has the worst legal and demand uncertainty.** "See how your MA rates rank against peers" is exactly the feature antitrust commentary warns about. No evidence that owners will pay for it.
- **The insider premise is unresolved, and it now has two competing readings** (section 2). If "MHC Healthcare" is not a home-health agency group, the pilot leg collapses.
- **It is cheap to test.** One conversation with his mother, one BAA, and 3 months of remits tell him whether the audit leg has any money in it.

## 2. The insider premise: what is "MHC Healthcare"?

Two public entities fit the name. Neither is verified as his grandfather's company.

1. **Florida home-health reading (the gate's).** NPPES lists seven Florida home-health entities named "MHC Area N, LLC". One record shows MHC Area 9, LLC (Boca Raton) doing business as Choice Health at Home and Haven Home Health Care, with Katrina Lanier as secretary and authorized official, in-network for Florida Blue and UnitedHealthcare marketplace plans ([NPI profile, third-party aggregator](https://npiprofile.com/npi/1245899020)). An authorized official is a filing role, not proof of ownership.
2. **Maryland injury-clinic reading (new).** MHC HealthCare, legal name Maryland Healthcare Clinics LLC, has operated since 1987, was founded by Dr. Semyon Friedman, and lists more than 130 clinics (physical therapy, orthopedics, neurology, physiatry, radiology) in Delaware, Florida, Maryland, North Carolina, Virginia and D.C., with a personal-injury focus and an attorney records portal ([MHC About](https://mhcorp.com/about), [MHC home](https://mhcorp.com)). Its pages do not mention Medicare or Medicare Advantage. A separate Arizona "MHC Healthcare" is a community health center network, not a match ([Marana Health redirect](https://maranahealth.org/?p=728)).

**Why it matters.** The MA remit thesis only works if the first customer is a Medicare-certified home-health or SNF operator. A personal-injury and PT clinic chain bills auto, attorney-letter and commercial payers. Repricing against fee schedules might still work there, but the "peer owners" would be injury clinics, a segment under active insurer fraud litigation in Florida in 2026 (for example [GEICO's August 2026 suit against Miami PIP clinics](https://www.insurancebusinessmag.com/us/news/risk-compliance-legal/geico-says-three-miami-clinics-billed-1-35-million-in-false-nofault-claims-586535.aspx); I found no allegation involving MHC). Data sharing and benchmarks would be a harder sell there.

**Action:** Ask his mother for the legal entity name, the NPIs, and what share of revenue is Medicare Advantage. Everything below assumes the home-health reading.

## 3. Is the problem real?

**Evidence for rate and payment leakage (mostly qualitative):**
- MA home-health payment is usually **per visit by discipline**, with some case rates and a few PDGM-like episodic deals. Contract terms vary on timely filing, clean-claim definitions and payment timelines, and underpayments "need auditing against contracted rates" ([Enzo Health glossary](https://www.enzo.health/glossary/medicare-advantage-home-health)). So repricing is deterministic and close to a freight tariff problem. Note it is per-visit math, not "percent of PDGM".
- Elara Caring's executive said a good MA partner has "good contract loads" and is willing to fix contract-load errors ([Home Health Care News, 2024](https://homehealthcarenews.com/2024/06/how-home-health-providers-get-what-they-want-out-of-ma-plans/)). That names the mechanism: plans load rates wrong.
- One hospital-based chain found negative margins on about 90% of its managed-care contracts, and settled with an MA plan for about $1.2M over three years using 42 CFR 422.214 ([AAPC case study](https://aapc.com/codes/coding-newsletters/my-homecare-week-alert/case-study-heres-how-one-hha-used-regs-to-recover-managed-care-payments-113604-article); undated, likely years old, and that case was a non-contract rate dispute, not a contract-load error).
- Agencies subsidize MA rates according to NAHC's 2014 and 2020 surveys; a 2024 NAHC/HHFMA MA survey ran, but I found no published results ([NAHC community post](https://community.allianceforcareathome.org/discussion/nahchhfma-medicare-advantage-survey-your-input-matters-3)).

**Evidence against (or missing):**
- I found **no published case of MA plans mis-paying home health against contract at scale**. Hospital underpayment is cited at 0.5-1% (R1) to 1-3% (HFMA, via vendor) of net patient revenue, and both are vendor-reported and not home-health specific ([MD Clarity comparison](https://www.mdclarity.com/comparison/best-healthcare-underpayment-recovery-services)).
- The documented MA pain in home health is rates below fee-for-service, authorizations and denials, not rate-load errors. Frontpoint's CEO: many large providers "assume a good rate is parity with Medicare, and that's not a reality" ([HHCN](https://homehealthcarenews.com/2024/06/how-home-health-providers-get-what-they-want-out-of-ma-plans/)). A benchmark helps *negotiation*; an audit only helps if there is leakage.
- A contracted provider generally cannot use the MA payment-dispute channel (that is for non-contracted providers), so recovery runs through the contract's own dispute clause, with windows the gate put at roughly 60-125 days ([UHC non-contracted dispute rights](https://preview-gateway.uhcprovider.com/content/dam/provider/docs/public/health-plans/medicare/MA-Non-Cont-Provider-Dispute-Appeal-Rights.pdf); gate for the window range, which I did not independently verify). A 12-month retro sweep is partly time-barred, so the durable product is continuous monitoring.
- MedPAC finds MA enrollees use home health slightly less than fee-for-service (8.3% vs 8.6%) ([MedPAC June 2025, Ch. 3](https://www.medpac.gov/wp-content/uploads/2025/06/Jun25_Ch3_MedPAC_Report_To_Congress_SEC.pdf)), and hospice is out of scope because it is paid by Original Medicare after the carve-in demonstration ended in 2024 ([CMS VBID](https://www.cms.gov/priorities/innovation/innovation-models/VBID)).

## 4. Who already does this

| Player | What | Post-acute? | Evidence |
|---|---|---|---|
| Tenix Health | $4.0M seed, announced Oct 20, 2026. Contingency-only; upload contracts plus billing data, no EMR work. Brooklyn, founded 2026, 3 employees, Epic/Insight Partners alumni | Health systems; not stated | [Signalbase](https://www.trysignalbase.com/news/funding/tenix-health-raises-4m-seed-round) |
| Fuse (YC) | LLM extraction of contract terms, remit reconciliation, auto-appeals | Not stated | [YC launch](https://ycombinator.com/launches/LeT-fuse-underpayment-detection-for-healthcare-providers) |
| Lido | 835/EOB ingestion, checks sequestration, MPPR, bundling; demo-led, no price | Not stated | [Lido](https://www.lido.app/fb-landing/underpayment-detection) |
| Rivet (now Zelis) | Payment-variance and payer-performance; says it takes no percentage and customers keep 100% of recoveries | Hospitals, practices, billers | [Rivet FAQ](https://www.rivethealth.com/faq) |
| Anomaly | $17M in May 2026 ($34M total), 20+ health systems, expanding into managed-care contract strategy | No | [Healthcare IT Today](https://www.healthcareittoday.com/2026/06/02/anomaly-secures-an-additional-17m-to-fundamentally-change-how-health-systems-engage-with-payers/) |
| Revecore, BESLER, MD Clarity, others | Contingency recovery, 20-35% of recovered dollars | Hospital-centered | [MD Clarity](https://www.mdclarity.com/comparison/best-healthcare-underpayment-recovery-services) |
| **Claim Health (YC)** | $4.4M seed Jan 2026; "AI-native" post-acute revenue infrastructure targeting denials and "revenue leakage"; customers Interim HealthCare and Ascend Health; reports 30x revenue growth | **Yes** | [HIT Consultant](https://hitconsultant.net/2026/01/23/claim-health-4-4m-seed-round-post-acute-rcm-ai/) |
| **Enzo Health** | $20M Series A (about $26M total); home-health AI covering documentation, reimbursement, compliance; funds earmarked for SNF and hospice | **Yes** | [Pulse 2.0 via Pulse.bot](https://www.pulse.bot/ai/deals/enzo-health-raises-20m-series-a-to-expand-ai-home-health-platform-ea0dca5e-fdeb-44fe-a7ed-11450e30f62b/) |
| **Advanced RevCycle** | Home health/hospice/palliative RCM services firm; bought Select RCM and Select Health AI | **Yes** | [Home Care Magazine](https://www.homecaremag.com/news/advanced-revcycle-acquires-select-rcm-services-select-health-ai) |
| Trella Health | Post-acute volume, referral and payer-mix analytics; no MA rate data seen | Yes | [Trella](https://www.trellahealth.com/resource-center/blog/six-months-in-what-the-cy2026-home-health-final-rule-is-telling-the-market-and-what-to-watch-for-in-2027/) |
| SHP (benchmarking) | Home-health financial and operating benchmarks, about $1,000/month per an AI-assisted pricing aggregator (weak source) | Yes | [PricingNow](https://pricingnow.com/question/shp-for-home-health-agencies-pricing/) |
| In-house biller, SimiTree, free CMS cost reports | Default alternatives. SimiTree's page I fetched listed contracting only as a nav link, with no MA detail or price | Yes | [SimiTree](https://simitreehc.com/?p=1612) |

**Read:** The gate's claim of "no post-acute-first MA remit tool" is true narrowly (I found no product that markets exactly this), but the gap is thin. Claim Health, Enzo and Advanced RevCycle already own the agency's billing seat and can ship a variance module faster than he can win trust. Tenix, with three people, is beatable on trust and vertical depth but not on funding. Rivet's no-percentage positioning also undercuts a contingency pitch.

## 5. What buyers pay (willingness to pay)

- **Contingency norm:** 20-35% of recovered dollars, no upfront fee ([MD Clarity](https://www.mdclarity.com/comparison/best-healthcare-underpayment-recovery-services)). His 20-25% sits at the low end, which signals price pressure.
- **Benchmarking norm:** about $12k a year for SHP's home-health product, but that figure comes from an AI-assisted aggregator and is unverified. It is the only data point that agencies pay four-to-five-figure sums for benchmarks. Free CMS cost-report data is the substitute ([Data.gov](https://catalog-beta.data.gov/dataset/home-health-agency-cost-report)).
- **MA rate benchmarks:** I found no existing product and no evidence of a price. Absence of product could mean a gap, or it could mean owners will not pay because plans refuse to negotiate in saturated markets, and plans are building captive home health (gate, citing LeadingAge).
- **No buyer-voice evidence.** My search for owner posts on MA mis-payment found none. Demand for the audit is inferred, not observed.

## 6. First customers and how to reach them

- **Customer 1: MHC**, if the Florida home-health reading holds. Multiple LLCs means multiple contract sets. Caveat: a related-party pilot proves the mechanics but gives weak third-party proof; peers will discount "verified by their billing lead".
- **Customers 2-5: multi-site Florida owners** the grandfather knows. The Florida pool is small: of 1,157 certified Florida agencies, 257 have 1,000+ episodes and hold 79% of volume, and 110 with 2,000+ hold 53% (gate's CMS Care Compare pull, not re-run by me).
- **Channels:** The Home Care Association of Florida's HomeCareCon draws about 600 attendees ([HCAF registration](https://homecareassociationoffloridainc.growthzoneapp.com/ap/Events/Register/12F2DeQFgCVCB)), and HCAF is itself running a member survey on MA plan problems ([HCAF survey call](https://hcaf-brooks.growthzoneapp.com/news/Details/help-drive-medicare-advantage-reform-share-your-experience-with-health-plans-280667)). That is a ready-made hook: offer to analyze the member data. I found no 2027 convention date. Healthcare CPAs and billers (white-label) are the other lane; the Florida Health Care Association (SNFs) holds its 2027 conference July 25-29 in Orlando ([listing](https://reliant-rehab.com/events/florida-health-care-association-annual-conference-trade-show/)).
- **Credibility wall:** an agency CFO sending remits to an 18-year-old needs family sponsorship plus agency-side de-identification. Cold outreach should be expected to fail.

## 7. Legal, age and platform issues

- **Age:** not a barrier to forming an LLC, signing a BAA, or taking payment. HIPAA business-associate duties apply regardless. The Security Rule overhaul is not final; final action is now projected for July 2027, so the current rule governs and risk-analysis failures are OCR's top enforcement target ([McDermott](https://www.mcdermottlaw.com/insights/final-action-on-hipaa-security-rule-modifications-now-projected-for-july-2027/)).
- **Percentage fees:** the OIG's 1998 third-party billing guidance flags percentage compensation as an upcoding risk, the Medicare reassignment rule bars agent pay tied to dollars billed or collected where the agent receives the payment, and commentary says Florida bars percentage fees for Medicaid ([AAPC/Foley summary](https://www.aapc.com/codes/coding-newsletters/my-medicare-compliance-reimbursement-alert/compliance-flat-fee-billing-contracts-could-reduce-risk-120670-article)). Pure variance analysis where the provider keeps receiving the payments is lower risk, but a health lawyer must sign off. **Fallback: flat diagnostic plus a fixed fee per resolved dispute**, which also differentiates from pure contingency.
- **Antitrust (benchmark leg):** DOJ withdrew its health-care information-exchange safety zones in February 2023 and the FTC in July 2023 ([Hogan Lovells](https://www.hoganlovells.com/en/publications/ftc-joins-doj-in-rescinding-health-care-antitrust-policies)). DOJ and FTC opened a public inquiry on replacement guidance on Feb 23, 2026 ([Arnold & Porter](https://arnoldporter.com/en/perspectives/publications/2026/04/antitrust-agency-insights-developments-at-the-us-antitrust-enforcement-agencies-first-quarter-2026)). After the May 2026 Agri Stats settlement, counsel-commentary lists risk reducers as a data lag of at least 45 days, three or more contributors per cell, a cap on any one contributor's share, and re-identification checks, and flags participant lists, rankings and contributor-count flags as disfavored ([Frier Levitt](https://www.frierlevitt.com/articles/agri-stats-settlement-healthcare-information-exchanges-antitrust/); that is a law firm's extrapolation to health care). **The pitch "see how you rank against peers" must become "your realized yield versus an anonymized band".**
- **MA contract confidentiality:** the design (owners enter percent-of-Medicare figures they control, never documents) is plausible but untested; counsel must confirm. Gate estimate: $10-25k.
- **Florida prompt-pay law** (12% simple interest on overdue claims, [s. 641.3155](https://m.flsenate.gov/Statutes/641.3155)) might give leverage, but whether it applies to MA plans, given federal preemption, is a question for counsel.
- **He must not code, bill or submit claims.** No license is needed for variance analysis.

## 8. Unit economics

Assumptions are mine unless sourced. The first-pass range comes from the gate: a 1,000-2,000-episode agency has $1.5-4M of MA revenue.

| Case | MA revenue | Leakage | Recoverable | Fee 22.5% |
|---|---|---|---|---|
| Low | $1.5M | 0.5% | $7.5k | $1.7k |
| Mid | $2.5M | 1.0% | $25k | $5.6k |
| High | $4.0M | 2.0% | $80k | $18k |

- **Audit-only Florida ceiling:** 100-250 reachable agencies at the mid case is $0.6-1.4M if he won all of them. At a realistic 15% share it is about $85-210k a year. That is a side business.
- **National:** 12,409 certified agencies, perhaps 1,500-3,000 large enough (gate). At a $12k blended price that is $18-36M at 100% share. Reaching $10M ARR needs about 700-800 customers: roughly 25% of the big-agency pool, which is the "heroic share" case the lessons file says to call dead.
- **Second vertical improves it but is unproven:** about 14,700 SNFs ([MedPAC via search](https://medpac.gov/wp-content/uploads/2025/03/Mar25_Ch6_MedPAC_Report_To_Congress_SEC.pdf)), where per-diem MA contracts are simpler to reprice and MA discharge share is high (47.6% of MA enrollee hospital discharges went to SNF in 2024 per [Becker's/Plante Moran](https://www.beckershospitalreview.com/post-acute/medicare-advantage-snf-utilization-grows-6-more-notes-plante-moran-report/)). At $15k, 670 SNFs is $10M (about 4.5% share). That requires a separate build and a different champion.
- **Cost to first revenue:** about $6k per the gate (lawyer review $1.5-3k, HIPAA risk analysis plus cyber/E&O $2-4k; the gate's estimates). Timeline reality: a flat diagnostic could pay in 8-11 weeks if MHC agrees; contingency cash lags because plans take weeks to respond, so first recovered dollars probably land in month 5-7.

## 9. Why now

- Florida loses more MA plans for 2027 than any state, 611 down to 560 ([Florida Trend](https://www.floridatrend.com/news/2026/10/20/florida-trend-health-care/)), driven by Humana and UnitedHealthcare exits; Dec. 7 is the enrollment deadline. Re-contracting pressure is real in Q4 2026-Q1 2027.
- CY2027 home-health proposed rule: +2.4% aggregate ($420M), but it keeps a -3.0% temporary adjustment ([Trella](https://www.trellahealth.com/resource-center/blog/six-months-in-what-the-cy2026-home-health-final-rule-is-telling-the-market-and-what-to-watch-for-in-2027/)). Margin pressure persists, so owners hunt for MA dollars.
- CMS froze new Medicare enrollment of home-health agencies and hospices nationwide for six months from May 13, 2026, ending around mid-November unless extended (my arithmetic) ([Venable](https://www.venable.com/insights/publications/2026/05/cms-announces-nationwide-six-month-medicare)). This protects incumbents and raises the value of existing agencies, but it also signals a fraud-scrutiny climate.
- The funding wave (Tenix, Anomaly, Claim Health, Enzo) validates the category and shrinks his window. **Why-now is also why-crowded.**

## 10. Scoring against the six criteria

| Criterion | Score | Reason |
|---|---|---|
| 1. First paying customer in 60-90 days, under $10k | 5/10 | Flat diagnostic possible by week 8-11 if MHC is a home-health group; contingency cash is later; related-party revenue |
| 2. Reachable buyers | 5/10 | HCAF, owners, CPAs are reachable; credibility and data-handover wall is real |
| 3. No license wall | 6/10 | No license; HIPAA, fee-structure and (later) antitrust counsel needed |
| 4. Uses his edges | 5/10 | Freight-audit engine reuse is real; contract ingestion is the hard part and is commoditized by LLMs; true edge is family access, not tech |
| 5. Path to $10M+ | 2/10 | Audit is boutique; benchmark is unproven and legally exposed; SNF is a second build |
| 6. Not crowded | 2/10 | Five horizontal and three post-acute-first funded players |

**Overall about 3/10** (gate median-case $1.5M and upside case $15M a year are consistent with this).

## 11. Recommendation and kill tests

1. **Day 1:** Resolve the MHC question with his mother (entity, NPIs, MA share). If it is the injury-clinic chain, drop this idea for that pilot and re-score.
2. **Weeks 1-2:** Get 3 months of de-identified 835s and the top three plan rate exhibits under a BAA. **Kill the contingency leg if variance is under 1% of MA paid**; take it seriously only at 1.5% or more.
3. **In parallel:** Offer HCAF a free analysis of their MA member survey, in exchange for introductions. **Kill the benchmark leg if fewer than three non-family owners agree to contribute data.**
4. **Do not spend legal money** (fee review, antitrust design) until step 2 shows real variance.
5. **Price first deals as flat diagnostic plus a fixed fee per resolved dispute**, not a bare percentage.

## Gaps

- No source for MA's share of agency revenue or episodes in Florida for 2025-2026; no published MA home-health underpayment-at-scale study; NAHC/HHFMA 2024 results not public.
- I could not fetch the HCAF "Medicare Advantage under the microscope" article (403) or Claim Health's press release (403), so their exact product scope (underpayment detection yes or no) is unconfirmed.
- Tenix's round rests on one trade-wire source; the $12k SHP price is from an AI-assisted aggregator.
- Dispute-window range (60-125 days), Florida concentration data, and the $2-4k compliance costs come from the gate and are not independently re-verified.
- The MHC identity is unconfirmed on both readings.
