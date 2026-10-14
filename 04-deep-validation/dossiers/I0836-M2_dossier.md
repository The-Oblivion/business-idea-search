# I0836-M2 Dossier: Lender-Required Curtailment Runway Reports for Data Centers

Prepared 2026-10-13. Evidence grades: [P] primary document read this session; [S] trade, law-firm or secondary page read; [V] vendor claim; [U] page blocked, relying on a search-engine summary only.

## Verdict

Conditional. The problem is real, the regulatory drivers are real, and I found no company selling this to lenders. But four things in the pitch do not hold up as written. (1) The "roughly 100 hours" premise is wrong as stated; the binding number is the state permit and it varies. (2) I found no evidence that any lender, rating agency or regulation requires or budgets for this report. (3) The bottom-up market is probably $1.5-6M a year, not $10M. (4) PJM's curtailment regime is not final. Proceed only to the 30-day demand test, with the kill criteria in section 8.

## 1. The legal premise is narrower than the pitch

- Federal text [P]: emergency engines have "no time limit" in emergency situations, 100 hours a year for maintenance and readiness testing, and up to 50 of those hours for non-emergency use. The 50 hours cannot be used for peak shaving or non-emergency demand response, except under a financial arrangement when a local balancing authority or distribution operator dispatches to avert local voltage collapse or overloads. [40 CFR 63.6640(f)](https://www.law.cornell.edu/cfr/text/40/63.6640). The pitch's "100 hours" is the testing and non-emergency cap, not a cap on running during a true outage.
- EPA's May 2025 interpretation (Duke Energy's mandatory program) loosened one corner of the 50-hour rule and said EPA is "evaluating more substantive changes" ([EPA](https://www.epa.gov/newsreleases/epa-issues-clarification-help-power-data-centers-ensure-us-ai-capital-world) [P]; [Kirkland](https://www.kirkland.com/publications/kirkland-alert/2025/05/new-epa-guidance-clarifies-when-data-centers-and-other-operators-may-utilize-emergency-backup) [S]). A compliance vendor says facilities inside an ISO/RTO cannot use the 50 hours for demand response and that most data center generator capacity cannot participate ([Facilities Dive](https://www.facilitiesdive.com/news/why-demand-response-participation-remains-fraught-with-risk-1/822506/) [V]). I could not independently verify that vendor, which is called BackupPower AI.
- The real constraint is the site's synthetic-minor permit. Virginia caps total engine hours at 500 a year including emergencies, and treats any use of the 50 federal non-emergency hours as non-emergency operation with stricter state controls ([Trinity](http://trinityconsultants.com/news/virginia-department-of-environmental-quality-releases-three-air-permitting-guidance-documents-for-data-centers) [S]). Virginia has permitted more than 9,000 diesel emergency generators at data centers, and the article's example of a 3,000-hour pooled limit for 50 engines notes it could be used up in one extended outage ([Williams Mullen](https://www.williamsmullen.com/insights/news/legal-news/frequently-asked-air-questions-faaqs-understanding-data-center-emergency) [S]). This supports the product: runway is permit-specific and nobody publishes it. It also means a lender's counsel will reject a headline "100 hours".
- Texas SB 6 [P]: 75 MW+ loads must disclose on-site backup generation (defined as non-exporting and able to serve at least 50% of on-site demand). ERCOT may direct them to deploy it or curtail, and the subsection does not authorize "a violation of any emissions limitation" ([bill text](https://capitol.texas.gov/tlodocs/89R/billtext/html/SB00006F.htm)).
- Counter-force. DOE used Federal Power Act 202(c) on May 18-20, 2026 to let PJM deploy data center backup generation as a last resort ([DOE](https://www.energy.gov/ceser/federal-power-act-section-202c-pjm-interconnection-llc-pjm-order-no-202-26-23) [P]). Gibson Dunn reports it required compliance with ancillary environmental requirements "to the maximum extent feasible", not a blanket waiver ([Gibson Dunn](https://www.gibsondunn.com/doe-emergency-order-signals-new-role-for-data-centers-backup-power/) [S]). A search summary says a different 202(c) order (OUC) did override permit limits [U]. In a federally declared emergency the permit cap may be set aside, which shrinks the loss scenario.
- Open question that is also the product: PJM's new curtailment tool (IRAS) fires at a potential Energy Emergency Alert level 1 with 10 minutes to comply [P, [PJM deck](https://www.pjm.com/-/media/DotCom/markets-ops/large-load/iras-training.pdf)]. EPA's emergency examples are interruptions of utility power. A directed shift to generators at EEA1 looks closer to non-emergency demand response. I found no EPA or state guidance on this. The report would therefore carry an attorney's interpretation, which is both the value and the liability.

## 2. Why now: real but unsettled

- PJM's 2028/29 auction cleared at the cap and was 6,831 MW short ([PJM release](https://www.pjm.com/-/media/DotCom/about-pjm/newsroom/2026-releases/20260714-pjm-capacity-auction-procures-138318-mw-of-generation-resources.pdf), from the parent file; not re-opened).
- IRAS was filed Aug 13, 2026 for a June 1, 2027 start; PJM's Sept 25 training deck still says "Pending FERC approval" [P]. On Sept 29 FERC accepted but suspended the companion backstop procurement to Feb 28, 2027 ([Public Power](https://www.publicpower.org/node/31356) [S]). I found no IRAS ruling.
- IRAS only reaches New Large Loads (50 MW+, in service after June 1, 2027) without their own new capacity. Total curtailment is capped at the lesser of the new load or the shortage, and ends if unneeded for three straight delivery years [P, same deck]. The PJM Board expects curtailment "infrequently, for limited durations", and says large loads may "move to their backup generators" ([June 1 letter](https://www.pjm.com/-/media/DotCom/about-pjm/who-we-are/public-disclosures/2026/20260602-board-response-to-njpbu-connect-and-manage-scope.pdf) [P]). Already-financed campuses are untouched.
- Useful for the pitch: PJM's Large Load Registry will collect "Backup generation (MW), including fuel type and relevant permitting limitations" [P, same deck]. PJM treats permit limits as material. But registry access is limited to commissions, utilities, the market monitor and FERC; the public sees aggregates only. Borrowers will assemble the file; no one gets a public dataset moat.
- ERCOT: an Aurora study for Google and V-Wire (Sept 2026) finds fully grid-exposed controllable loads curtailed 50-241 hours a year on average across three sites (2028-30, central weather year), and 35-550 hours across weather years ([Aurora/ERCOT](https://www.ercot.com/files/docs/2026/09/10/Curtailment-Mitigation-for-PCLRs-Modeling-the-Effects-of-Front-of-Meter-Netting_LLWG.pdf) [P]). That is the strongest evidence that exposure can exceed per-engine caps. The PUCT's September 2026 large-load rule, as reported, covers fees and energization milestones and not backup generation ([Utility Dive](https://utilitydive.com/news/texas-puc-adopts-data-center-interconnection-rules/830899) [S]); ERCOT's tracker shows the backup-generation trigger unfinished ([ERCOT](https://www.ercot.com/files/docs/2025/09/15/89th-Legislative-Session-PPTX-ERCOT-Status-September-2026.pdf) [S]).

Net: credible for new-build PJM and ERCOT campuses, but it becomes a credit term only after IRAS and ERCOT's trigger are final. Expect 2027 at earliest.

## 3. Demand and willingness to pay

Supported:
- Lenders do "significant" power diligence ([Davis Polk on 9fin](https://www.davispolk.com/news/elena-millerman-discusses-due-diligence-data-center-financings-9fin) [S]); S&P frames execution, cost and resilience power risks as credit risks ([S&P](https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/07/more-power-less-cushion-ai-and-the-changing-credit-risk-profile-of-data-centers) [U]); a land broker says lenders should treat curtailment as a diligence line ([Landgate](https://www.landgate.com/news/pjm-just-made-grid-power-conditional-for-data-centers) [S], low authority).
- Spend on curtailment modeling exists on the sponsor side (Google paid for Aurora).

Not found, and this is the central gap:
- Any RFP, lender policy, rating criterion, forum complaint or current spend that buys a backup-generator legal-runway analysis. A KBRA data center CMBS release reportedly says it reviewed third-party engineering, environmental and appraisal reports, with no power or curtailment report named [U: search summary; release not opened]. KBRA's data center ABS methodology exists but sits behind a login ([KBRA](https://www.kbra.com/publications/ywsVHsMw/abs-data-center-abs-global-rating-methodology) [U]). Data center ABS commentary discusses tenant credit and leases, not power ([datacentres.com](https://www.datacentres.com/news/data-centre-abs-issuance-hits-38b-as-wall-street-securitizes-the-ai-lease-boom-slot1-2026-09-01) [S]). Commentary on CoreWeave's loans stresses contract-tenor mismatch and collateral value ([Global Data Center Hub](https://www.globaldatacenterhub.com/p/coreweaves-85b-quarter-when-gpu-debt) [S]).
- The weakest link in the Phase I analogy: Phase I reports are bought because they establish a statutory CERCLA defense under "all appropriate inquiries", which EPA recognized for ASTM E1527-21 from Feb 13, 2023 ([Spencer Fane](https://www.spencerfane.com/insight/astms-2021-update-to-the-phase-i-standard-now-satisfies-all-appropriate-inquiry) [S]). A curtailment report has no safe harbor. It sells only if credit committees or rating agencies make it a condition. Most of the big dollars are hyperscaler-tenant deals where lenders price the tenant, so the real segment is smaller: spec, powered land and unrated neocloud loans.

## 4. Competitors and incumbents

Direct (lender-facing power-curtailment or permit-runway report): none found. Caveat: search-engine summaries, not exhaustive proof.

| Player | What it is | Funding / traction | Threat |
|---|---|---|---|
| GridCARE | AI mapping of hidden grid capacity for data center and grid operators | $64M Series A May 2026 (Sutter Hill), $77.5M total, $13.5M seed 2025; freed 80 MW at PGE ([DCD](https://www.datacenterdynamics.com/en/news/gridcare-raises-64m-in-series-a-funding-round/) [U]) | Medium. Has the data and the cash; customer is the developer, not the lender |
| Voltus | PJM demand response aggregator, "bring your own capacity" | $225M Series D Oct 8, 2026; Google up to 100 MW ([Voltus](https://www.voltus.co/press/voltus-google-bring-your-own-capacity-pjm), parent file); 20 GW goal by 2030 ([Latitude](https://www.latitudemedia.com/news/voltus-raises-225-million-to-scale-byoc-for-data-centers/) [S]) | Low as competitor; sells MW, conflicted. Possible referral partner |
| Aurora Energy Research, Modo Energy | Independent curtailment and PJM analytics | Aurora paid by Google; Modo claims a 500 MW site could run diesel "up to 417 hours" at $325/MW-day ([Modo](https://modoenergy.com/research/pjm-data-center-demand-growth-non-capacity-backed-load-reliability) [V]) | Medium. Could add the exposure-distribution layer |
| Enverus | Siting analytics; claims 250+ financial institution customers on its Canadian page ([Enverus](https://enverus.com/canada)) [V]; data center siting page: [Enverus](https://www.enverus.com/segments/data-center/) | Established analytics vendor | Medium-high. Existing lender relationships |
| Trinity, ALL4, Barr, Langan, Epsilon, Mostardi Platt | Air-permit consultancies selling to developers ([Trinity](https://trinityconsultants.com/resources/powering-the-next-generation-of-data-centers-navigating-due-diligence-and-air-permitting-for-data-center-development/) [S]) | Established, hourly | Medium. Conflicted for lender work, but could white-label |
| Sargent & Lundy, TBH Consultancy | Engineers; S&L advertises large-load interconnection studies for lenders, TBH says it has been hired repeatedly as data centre lenders' technical adviser ([S&L](https://www.sargentlundy.com/services/consultant-planning), [TBH](https://tbhconsultancy.com/sg/experience/australian-hyperscale-and-wholesale-data-centre-platform-provider/)) [V] | Established | High as scope creep; best channel |
| Lender counsel (Davis Polk, Ropes & Gray, Perkins Coie) | Run power diligence checklists in-house | n/a | Substitute and gatekeeper |
| LightBox EDR | Phase I data analog: founded 1990, bought by Silver Lake and Battery Ventures in 2018, price undisclosed ([PitchBook](https://pitchbook.com/profiles/company/54194-86) [U]) | | Possible acquirer or imitator; not verified as active here |

Incumbents who could add this: Enverus, S&P Global, LightBox, Trinity, Sargent & Lundy. None shown doing it.

## 5. Bottom-up market size (inference, assumptions stated)

- Tracked public GPU, neocloud and AI-campus financings: 41 in 2025 and 50 in 2026 through Oct 10, $231B total ([AmCompute](https://www.amcompute.com/gpu-financing-tracker) [V]). Private and bilateral loans are not counted; assume 1-2x more, so 120-180 a year globally, close to the founder's 150.
- PJM plus ERCOT share (assumed, not sourced) 35-50%: 40-90. Lender carries power risk (no investment-grade tenant) assumed 40-60%: 15-55 closing reports a year. At $30k: $0.5-1.7M.
- Refreshes: 70-250 financed campuses by 2029 (assumed 1.5 campuses per financing, three years of cohorts) at $8-12k: $0.6-3.0M.
- Subscriptions: 2-6 institutions at $250k: $0.5-1.5M. Four banks led 31 of 48 lender-named tracked deals since July 2025, so buyers are concentrated, but unlimited-report plans are a hard sell.
- Mature total: roughly $1.5-6M a year versus the founder's $10M, which assumes all 150 financings buy and 10 subscribers sign.

## 6. Unit economics

- Phase I benchmark: about $1,800-3,500 each ([pricing guide](https://www.thepricer.org/how-much-does-phase-1-environmental-site-assessment-cost/) [low quality]) and roughly 250,000 a year in 2003 ([EP Online](https://eponline.com/articles/2003/05/01/phase-i-poll.aspx) [S]). The market is huge in volume because every transaction needs one.
- Price is not the obstacle: $20-45k is under 0.01% of a $2B financing. The obstacle is whether it is required.
- Cost (my estimate): 25-50 professional hours (engineer plus air attorney) at $250-500 blended is $6-25k per first-time campus report, so gross margin on a $25k report ranges 0-75%. The "same permit dataset serves every report" claim only helps for repeat markets.

## 7. Regulatory and liability

- Rules are moving: Virginia HB 507 requires Tier 4-level limits for permit applications on or after July 1, 2026, and DEQ says limited operating hours as the basis for exemption "is no longer appropriate" ([Data Center Knowledge](https://datacenterknowledge.com/build-design/virginia-deq-revises-data-center-generator-rules-as-community-pushback-builds), [VPM](https://www.vpm.org/news/2025-12-17/virginia-data-centers-diesel-backup-generators-deq-loudoun-turner-dowd) [U]). Virginia dropped a 2023 variance that would have waived hour limits in grid alerts ([Data Center Frontier](https://datacenterfrontier.com/energy/article/33003418/virginia-ends-bid-to-shift-data-centers-to-generators-in-grid-alerts) [S]). Moving rules support surveillance revenue but make stale reports a risk.
- Liability (inference, not sourced): lenders rely on the report, so a wrong "pass" invites a claim. Expect professional liability cover, liability caps, reliance letters and attorney opinion issues. Borrower-pays creates an independence tension; engage through lender counsel.

## 8. Recommendation and kill tests

1. Reframe the headline from "100 hours" to "permitted operating authority under each curtailment trigger".
2. Sell first to independent engineers and lender counsel as a white-label analysis for new-build PJM and unrated ERCOT deals. Price $15-25k for the first reports.
3. Kill if: fewer than 3 of 15 interviewees would make it a closing condition or budget it; an air attorney concludes emergency rules or 202(c) cover IRAS generator use; or FERC rejects IRAS.
4. Ask one rating analyst whether power-runway disclosure is in a methodology. That is the real "Phase I" driver.

## 9. Gaps

- No lender RFP, credit policy or fee data for power diligence. No FERC ruling on IRAS. No data on the PJM/ERCOT share of financings. Several pages (S&P, KBRA, Ropes & Gray, DCD) blocked, so [U] items need confirmation. Competitor funding for CPower and ERock was not verified.

*Storage note: written to the persistent work directory (the scratchpad `biz` path is a symlink to `/Users/asherperemel/projects/business-idea-search-work/biz`), plus a local copy in `checkpoint/state/deep/` of the repo (not committed or pushed).*
