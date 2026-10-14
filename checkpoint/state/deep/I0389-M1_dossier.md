# I0389-M1 Dossier: Scribe-Adjusted EBITDA (privileged diligence for physician deals)

Researched 2026-10-13 (about 40 searches and fetches). Tags: [P] primary or near-primary, [S] trade or secondary, [V] vendor marketing, [I] my inference or assumption. Where a page could not be fetched and I relied on a search snippet, I say so.

## Bottom line

The problem is real and buyers already pay outsiders for E/M coding review in physician-practice deals. But the idea as written is too small, too copyable, and its why-now is weaker than the finalist file claims.

1. Demand exists as a budget line, not as a new category. PYA, Aprio, VMG Health and HIA already sell coding review inside PE diligence. The new part is the scribe-specific causal framing.
2. My bottom-up count supports roughly 2 to 36 scribe-specific buy-side reports a year nationally (mid case about 10, roughly $0.3M). The plan assumes capacity of 50-100 reports a year.
3. Why-now is mixed. Payer downcoding is a patchwork of paused and live programs, and PE physician-practice deal counts have fallen by about half.
4. The staggered difference-in-differences (DiD) design is the one differentiated asset, and it is statistically fragile in groups of 20-150 providers [I].

Verdict: weak as a standalone venture (my score 4/10). Reasonable as a wedge inside a broader "E/M coding diligence for physician deals" practice, which is a different and more crowded business.

## 1. Is the why-now real?

**Evidence that scribes move coding.**
- Trilliant's six-system claims study (2018-2024) found high-intensity new-patient share up 12-20 points and established up 7-12 points. The authors say causes "are not clearly understood", the 2021 E/M rule changes may contribute, and the study is descriptive and does not isolate AI [P]. https://www.trillianthealth.com/market-research/studies/outpatient-coding-intensity-increases-as-hospitals-adopt-ai-enabled-scribing
- The best causal evidence is Holmgren et al. (JAMA Netw Open, January 2026): more than 1.2M encounters at one academic site, +5.8% weekly RVUs and +2.8% encounters per week, with no rise in denials. The authors cannot separate more services from better coding [P, via commentary]. https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2843526 A UCSF summary describes a staggered-rollout DiD with volunteer early adopters (search snippet; page returned 403). https://docit.ucsf.edu/news/ucsf-study-finds-ai-scribes-associated-increased-physician-productivity-and-revenue
- BCBSA found an outlier inpatient maternity system where fewer than 20% of postpartum-anemia cases met clinical criteria. This is inpatient, not outpatient E/M [S]. https://hlth.com/insights/articles/how-ambient-ai-scribes-are-changing-medical-coding-intensity

**Payer downcoding is real but uneven.**
- Cigna R49 was announced for 10/1/2025, then "temporarily paused" pending California DMHC review [S]. https://streamlinemd.com/cigna-temporarily-pauses-its-e-m-coding-and-accuracy-policy/ A November 2025 AASM tracker lists Aetna and Cigna as implemented with no pause noted. https://aasm.org/growing-trend-of-downcoding-among-commercial-payers/ These conflict, and I could not resolve Cigna's current status. The finalist file's "Cigna's nationwide policy" is not safe to repeat.
- Anthem's policy (planned 2/15/2026) was paused repeatedly through at least 9/1/2026; I found nothing after that [S]. https://www.cmadocs.org/newsroom/news/view/ArticleId/51218/Anthem-extends-pause-on-E-M-downcoding-policy-through-Sept-1
- Centene/Ambetter is live: Cotiviti-run E/M leveling effective 7/15/2026 across Medicaid, Marketplace and Medicare (notice dated 4/23/2026) [P]. https://www.ambetterhealth.com/en/sc/provider-resources/provider-news/cotiviti-em-leveling-effective-july-2026/

**Enforcement climate.** DOJ FY2025 FCA recoveries were over $6.8B, with $5.7B healthcare and a record 1,297 qui tams [S]. https://www.subjecttoinquiry.com/2026/06/ai-assisted-billing-could-create-fca-pitfalls-how-healthcare-companies-can-get-ahead-of-risk/ I found no E/M upcoding FCA settlement tied to scribes. The article names no AI or EHR cases and says nothing on M&A diligence. OIG's February 2026 Medicare Advantage guidance warns about AI prompts that add risk-adjusting diagnoses; the alert does not address E/M [S]. https://www.parkerpoe.com/news/2026/06/oig-guidance-warns-physician-practices-of-compliance-risks

**Headwind: deal flow.** PitchBook counts PE physician-practice-management deals falling from 851 (2021) to 105 in H1 2026, on pace for about half of 2025, with over a dozen states adding PE oversight laws [S, paywalled]. https://statnews.com/2026/08/17/private-equity-50-percent-drop-physician-practice-management-deals-2026 Fifteen states had transaction-notice laws by 1/30/2026 [S]. https://bassberry.com/news/how-dealmakers-should-prepare-amid-state-legislatures-targeting-healthcare-private-equity-investments/ Longer state review could lengthen deal timelines, which may help diligence but shrinks volume [I].

**Net:** the drift is documented, the payer response is partial, and the buyer pool is shrinking. The claim that "this diligence item did not exist in 2023" is true for scribes but misleading, since E/M coding diligence has existed for years.

## 2. Competitors and incumbents

| Player | What they sell | Traction / funding | Threat |
|---|---|---|---|
| VMG Health | Buy-side diligence for a PE-backed MSO buying a 30+ physician ophthalmology practice: CPT utilization by provider plus chart audit; buyer adjusted purchase agreements (no dollar figures). Also Compliance Risk Analyzer and AI-governance audits. https://vmghealth.com/case-studies/guiding-success-in-new-markets-buy-side-due-diligence-in-ophthalmology/ | Private; no funding data | High. Already in the buyer's seat; no scribe SKU found |
| PYA | Coding reviews for PE buyers; a principal said requests rose over "three to four years" (2019 quote). https://www.pyapc.com/insights/pya-principal-quoted-in-recent-article-on-private-equity-and-due-diligence-in-healthcare/ | Private | High |
| Aprio | Sept 2024 case: 150+ provider ENT/allergy network; Level V visits about 70% above national; office-visit revenue (about 75% of total) overstated about 25%; used to adjust price. No sample size or fee. https://aprio.com/case-study-unlocking-value-in-healthcare-private-equity-with-data-driven-transactional-due-diligence-ins-article-he | Private | High. Best proof buyers act on E/M findings |
| HIA | Due-diligence coding audit; 1-2 weeks plus 1-2 weeks to report; price on request. https://hiacode.com/due-diligence-audits | Private | Medium. Cheap generalist |
| Guidehouse/Navigant | Pre-acquisition E/M and modifier benchmarking against Medicare claims (2018 PDF). https://guidehouse.com/-/media/www/site/downloads/healthcare/2018/navigant-pre-acquisition-assessments.pdf?la=en | Large consultancy | Medium |
| MDaudit, Healthicity, Cotiviti | In-house compliance and payer-side software. MDaudit launched Auditor Assist 7/15/2026; no scribe-specific product found. https://mdaudit.com/news/mdaudit-advances-its-meaningful-ai-strategy-with-the-addition-of-auditor-assist-to-its-continuous-risk-monitoring-solutions-suite/ | Not found | Low-medium; could add a module |
| Scribe vendors | Abridge (about $5.3B at a June 2025 round; secondary estimates $5.7-7.0B) https://trueup.io/co/abridge; Ambience ($243M Series C, $1.25B, July 2025) https://fiercehealthcare.com/health-tech/ambience-banks-243m-series-c-investors-continue-bet-big-ambient-ai; DeepScribe (about $40M total) https://www.cbinsights.com/company/deepscribe/financials | Menlo: ambient documentation about $600M of $1.4B 2025 healthcare AI spend; 67% of outpatient scribe users expect to switch vendors within three years https://healthexec.com/topics/artificial-intelligence/healthcare-ai-spending-unitedhealth-ai-claims-processing | They self-attest. Vendor churn means mixed-vendor histories, so scribe-agnostic is a real feature |
| Free academic benchmarks | Johns Hopkins (Dai, Polsky) NIHCM grant through 12/2026 https://nihcm.org/grantees/ambient-ai-documentation-and-billing-intensity-evidence-from-commercial-claims; Trilliant; Holmgren | Public | Will commoditize the "typical uplift by vendor and specialty" benchmark moat |

I found no startup selling a scribe-specific diligence product, but two extended searches turned up mostly listicles, so coverage is imperfect. The finalist file's "nobody sells a coder-signed audit in diligence" is wrong for generic E/M diligence; it holds only for the scribe-cohort causal framing. VMG, PYA and Aprio could add that framing in a quarter [I].

## 3. Bottom-up market size

Anchors: the deal-count anchors are the PitchBook counts above, plus a Bass Berry tally of 367 PPM transactions through Q3 2025 (all buyers, from a snippet; page returned 403) https://beckersasc.com/asc-transactions-and-valuation-issues/private-equity-eyes-physician-practice-deals-in-2025.html. PE-acquired groups averaged 16.3 physicians in 2013-2016 (a mean, so the median is lower) https://www.healthcaredive.com/news/private-equity-medical-practice-takeovers-more-than-doubled-from-2013-to-20/572502/. I found no group-level scribe adoption rate; the closest figures are physician-level or health-system-level (for example, UCSF at 70%).

| Step | Low | Mid | High | Basis |
|---|---|---|---|---|
| PE physician-practice deals per year | 210 | 300 | 400 | H1 2026 PitchBook annualized; high = 2025-like rebound |
| Share with 20+ provider target | 15% | 22% | 30% | Assumption [I] |
| Scribe live 12+ months at signing | 25% | 37% | 50% | Assumption [I] |
| Buyer commissions a scribe-specific report | 25% | 42% | 60% | Assumption [I] |
| **Reports per year** | **~2** | **~10** | **~36** | |
| Revenue at $30k | $0.06M | $0.3M | $1.1M | |

Adding sell-side readiness (similar count at $8-15k), non-PE acquirers and PE exits might multiply this by about 2-3x, to roughly $0.15-3M per year [I]. The plan's capacity of 1-2 reports a week (50-100 a year, $1.5-3M) exceeds even the high case. Widening the product to generic E/M coding diligence on every PE physician deal, including add-ons at $8-12k, gives only about $1-2M per year nationally by the same method [I]. That means this is a boutique ($0.3-1M a year, two people) unless it moves into health-system acquirers or monitoring, and I have no evidence either buys at these prices.

## 4. Willingness to pay and unit economics

- **Demand evidence is indirect.** Aprio and VMG show buyers use E/M findings to adjust price. The TechTarget piece (3/17/2026) reports no health systems buying scribe audits and no specific payer enforcement [S]. https://www.techtarget.com/revcyclemanagement/feature/How-AI-scribes-are-shifting-coding-intensity-reimbursement No pricing page, RFP or testimonial for a scribe diligence product surfaced.
- **Price anchor.** Lower-middle-market buy-side quality-of-earnings reports run about $25-75k per advisor guides [V/S]. https://www.bdemerson.com/article/quality-of-earnings-report-cost A $20-45k add-on rivals the whole QoE. It is plausible only where the scribe number is large, and in that case buyers may fold it into the QoE provider's or existing coding reviewer's scope [I]. I found no fee data for coding diligence itself.
- **Direct cost.** A senior CPC auditor listing pays $35-45 per hour https://jobs.aapc.com/job/1137739/remote-profee-coding-auditor-cpc-expert/ (PayScale average about $26). At 10-15 minutes per encounter, 150-300 encounters cost roughly $1-3k in coder labor [I], so the file's $3-5k direct cost including senior review is plausible. Gross margin near 80% is credible; throughput of 1-2 reports a week for two people is not tested.
- **The value claim is overstated.** Holmgren's 5.8% is total RVUs, of which 2.8 points is visit volume. The coding-intensity part is therefore closer to 3% [I, my arithmetic]. The file's illustration (6% of E/M revenue = $0.72M, about $8M of value) would roughly halve to about $4M of enterprise value. That is still large against a $30k fee, but the "drift dollars" are not clearly overpayment, which is the point of the product.
- **Insurance interplay.** RWI usually excludes known risks and treats government reimbursement as hard to insure [S]: https://www.bassberry.com/?p=22319, and an Aon summary (snippet only) says billing and CMS risk is excluded or priced at very high retentions https://www.aon.com/getmedia/b92020bf-7a64-4845-8f36-d66375307ab6/Managing-Healthcare-MA-Transaction-Risks.aspx. Newer billing cover exists at lower limits with $50-100k underwriting costs (Foley, 2015) https://foley.com/?p=52831. So escrows and special indemnities do the work, which supports a quantified number. A finding may also create a known-issue exclusion [I].

## 5. Regulatory and liability landscape

- **Overpayment clock.** The CY2025 Physician Fee Schedule rule moved "identified" to the FCA "knowingly" standard (actual knowledge, reckless disregard, deliberate ignorance) and allows up to 180 days of suspension for good-faith investigation [S]. https://www.bassberry.com/news/a-new-year-a-new-overpayment-rule-cms-revises-the-60-day-rule/ A quantified report can start the clock, and in a stock deal the buyer inherits it [I]. Buyers may therefore avoid commissioning a precise number unless the remedy is structured first. The finalist file says the 60-day rule "starts once a problem is identified"; the current text is knowledge-based, not quantification-based.
- **Successor liability.** Stock deals carry history, and asset buyers who take over the provider number can still face overpayment claims [S]. https://www.healthcarelawinsights.com/2014/05/caveat-emptor-key-due-diligence-considerations-for-hospitals/ This supports the demand logic.
- **Privilege.** The Kovel doctrine protects a consultant retained by counsel to help counsel give legal advice [S]. https://www.pelawreport.com/3621191/attorneyconsultant-privilege-key-considerations-when-invoking-and-waiving-the-kovel-privilege-for-consultants-partone-ofthree.thtml Whether a report used mainly to reprice a deal, and shared with a lender or RWI underwriter, stays privileged is unsourced here and needs a healthcare transactions lawyer [I]. The report's main value (a number the investment committee uses) pulls against its privileged status.
- **Practitioner guidance** recommends a post-implementation baseline audit [S] (see the subjecttoinquiry link above). Policy proposals include automatic Medicare downward adjustments for E/M and MA payments tied to scribe-adopting organizations [P]. https://jamanetwork.com/journals/jama-health-forum/fullarticle/2843723 Payers may blunt the uplift, and Medicare Advantage risk-score drift may matter more than E/M levels [I].

## 6. Method risk: does the DiD work at this scale?

Staggered rollouts do create controls, and the academic literature uses this design (Holmgren, one academic system, 1.2M+ encounters). A 30-provider group with perhaps 10-20 adopters, volunteer early adopters and rollout timing correlated with provider productivity gives wide confidence intervals and selection bias [I]. Trilliant's systems were already trending upward from 2018, so a before/after break is confounded with the 2021 E/M rules and payer mix. A report whose range spans "no drift" to "double the uplift" would not support an escrow number [I]. Test this with a simulation on public CMS data before any sale. Whether scribe vendors release session metadata is unverified; Trilliant says time-stamped digital records could support audits [S]. https://www.trillianthealth.com/market-research/studies/outpatient-coding-intensity-increases-as-hospitals-adopt-ai-enabled-scribing

## 7. Corrections to the finalist file

1. Cigna: "nationwide policy from October 2025" is unreliable (paused, then conflicting reports). Anthem is paused. Only Centene via Cotiviti is confirmed live.
2. White space: VMG, PYA, Aprio and HIA already sell buy-side coding diligence with chart audits. Only the scribe-cohort causal design is open.
3. Value illustration: roughly half is volume, not coding (Holmgren).
4. 60-day rule: knowledge-based since 1/1/2025, with a 180-day investigation suspension.
5. "Two people can deliver 1-2 reports a week" exceeds the estimated demand.

## 8. Gaps and cheap tests

**Gaps (no reliable source found):** group-level scribe adoption by specialty; coding-diligence fees; counts of PE deals by target size; Cigna and Anthem status after September 2026; whether any acquirer has asked for a scribe analysis; whether scribe vendors share session metadata; Reddit or forum demand evidence (searches returned none).

**Cheap tests (about two weeks, under $1k):**
1. Ask 15 healthcare-transactions lawyers and PE associates whether a scribe came up in their last three physician deals, who did the coding review, and what it cost.
2. Run a power simulation of the staggered DiD for 30, 60 and 120 providers, using plausible adoption shares.
3. Ask PYA, Aprio and VMG alumni whether a scribe SKU exists or is planned.

**What would change my view:** two or more buyers who paid for a scribe-specific analysis in the last 12 months, or a confirmed live Cigna and Aetna downcoding program that is hitting trailing run-rates.
