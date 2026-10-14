# I0716 Dossier: Independent Referee for Survey Panel Data

Research date: 2026-10-13. Evidence quality is tagged: [P] primary or peer-reviewed or regulator, [V] vendor claim, [I] my inference or arithmetic.

## 1. Verdict

**Do not pursue as pitched. Pursue only as a narrow, services-led wedge, and only after a price test.** The problem is well documented. The "AI agents" part of the why-now is weaker than the pitch implies, and the white space is smaller than the earlier competitor pass concluded. Three findings drive this:

- A major analytics firm (SSRS) already productized the core mechanism, a parallel probability sample used as ground truth.
- A new independent audit firm launched a month ago.
- Every price anchor I found is far below $3-15k per study.

| Dimension | Score (1-5) | Why |
|---|---|---|
| Problem severity | 4 | Pew, the YouGov retraction and an industry benchmark all show it |
| Why-now | 3 | Narrative tailwind is real, but AI-agent prevalence in live traffic is unproven |
| White space | 2 | SSRS, Data Quality Co-op (DQC) and Signals & Standards overlap |
| Willingness to pay | 2 | No evidence of anyone paying for per-study audits, and no mandate |
| Market size | 2 | My estimate is $10-25M a year serviceable |
| Defensibility | 2 | The control sample is rentable, and trust is the real moat |

## 2. Is the problem real? Yes, and it is mostly human fraud

- Pew (Aug 2026, n=11,114 opt-in respondents) flagged 18% as bogus via trap questions. CloudResearch's Sentry would have excluded nearly half. Trap questions and Sentry performed about the same. [P] https://www.pewresearch.org/methods/2026/08/27/no-easy-fix-for-bogus-respondents-in-online-opt-in-polls/
  - Voter-file matching removed 64% of respondents and worsened bias. The primacy effect rose to +14 from +9 unscreened.
  - Self-reported turnout was 84% unscreened against a validated benchmark of about 77%. The screens moved it the wrong way, to 85-87%.
  - The presidential vote went from tied to a 3-7 point Harris lead depending on the screen. Pew says every method modestly raised overestimation of Democratic support.
  - This supports the idea's claim that "remove the flagged" is itself a bias source.
- YouGov and the Bible Society withdrew the "Quiet Revival" church-attendance report (April 2026) after YouGov found fraudulent respondents in the 2024 data. [P] https://www.research-live.com/article/news/yougov-church-attendance-report-withdrawn-due-to-fraudulent-responses/id/5148193
  - The Bible Society said it had "repeatedly sought and received assurances" from the vendor.
  - YouGov said its anti-fraud measures "were not administered effectively".
  - This is the idea's exact scenario: the seller scored itself and the buyer had no referee. The buyer's remedy was to ask the vendor again, not to hire an auditor.
- The Global Data Quality (GDQ) H1 2026 benchmark covers about 1.8M records from 46 companies. [P] https://www.research-live.com/article/news/survey-removal-rates-remain-high/id/5150456
  - Pre- and in-survey removal was 28.5% for agencies and 21.2% for suppliers, with a further 8.9-10.7% removed post-survey.
  - B2B post-survey removal was 59.6%.
  - Of 151 sample buyers, 43% of B2B buyers were dissatisfied.
- Op4G/SliceMR and SNWare were federally indicted (April 2025) over survey-data fraud. [P] https://www.insightsassociation.org/News/Industry-News/ArticleID/1651/Insights-Association-Issues-Statement-Regarding-Federal-Indictments-of-Op4G-SliceMR-and-SNWare-Research
  - The Insights Association (IA) noted its ISO 27001 audit would not have caught the alleged conduct. Existing certifications do not test whether data are real.
- Kantar claims post-field rejection rates rose about 300% in three years. [V] https://www.kantar.com/inspiration/ai/is-panel-fraud-the-new-ad-fraud

## 3. Why-now check: partly real, partly overstated

**Real:**

- Westwood's PNAS agent evaded detection 99.8% of the time. As few as 10-52 fake responses would have flipped seven 2024 national polls, at about five cents per fake response. [P] https://www.404media.co/a-researcher-made-an-ai-that-completely-breaks-the-online-surveys-scientists-rely-on/
- AAPOR released a Task Force report on AI on 5/8/2026 and proposed Code revisions. [P] https://aapor.org/announcements/task-force-on-responsible-ai-integration-in-survey-research-report/
- NORC's April 2026 review cites 15-30% industry fraud rates. [P] https://www.norc.org/content/dam/norc-org/pdf2026/cpss-research-brief-fraud-lit-review.pdf

**Overstated:**

- The agent was purpose-built by academics. A critique preprint says the PNAS papers claim field-level vulnerability without benchmarks or reproducible real-world impact. Its author note says PNAS rejected it on 22 May 2026. [P] https://sciety.org/articles/activity/10.31235/osf.io/ykxwj_v1
- Prolific's CEO reports agent detection "at or below 1%" on every platform except MTurk (about 5,200 participants, 10 platforms). [V] https://www.prolific.com/resources/ai-agent-debate-open-letter-by-ceo-phelim-bradley
- CloudResearch says click farms, not AI, are the dominant threat today. [V] https://www.cloudresearch.com/resources/blog/bot-olympics-50k-challenge-ai-agents-survey-fraud/
- I could not verify a secondhand claim that agents are under 0.1% of CloudResearch traffic.
- The Bot Olympics has published no results yet, and CloudResearch is a sponsor.

**Implication [I]:** the defensible pitch is "opt-in panels carry 10-30% bad data and vendors grade themselves." That is true today. "AI agents beat attention checks" is a forward-looking risk.

## 4. Competitive landscape

| Player | What it does | Funding / traction | Overlap |
|---|---|---|---|
| **SSRS** | Trains an isolation forest on a parallel probability-panel sample to flag bad opt-in responses, built into its Encipher hybrid blending. [P] https://ssrs.com/wp-content/uploads/How-Machine-Learning-and-a-Parallel-Probability-Sample-Can-Help-Detect-Bad-Data-in-Online-Opt-in-Samples.pdf | Established research firm. The brief reports about 9% of opt-in respondents failing 2+ checks against 1% or less in probability. | **Direct on mechanism.** Not neutral on sample, and it does not offer a per-study audit stamp. |
| **Signals & Standards Research Consulting** | Independent audit of insight firms' quality claims (processes and results), launched 9/11/2026 by a former Toluna, NPD and Circana chief research officer. [P] https://www.mrweb.com/drno/news40310.htm | Solo practice. No pricing or clients disclosed. | **Direct on neutrality and audit.** It has no control sample or calibration. |
| **Data Quality Co-op** | Clearinghouse with a 0-1000 Data Trust Score and vendor scorecards. Partnered with Advertiser Perceptions in 3/2026. [P] https://www.research-live.com/article/news/data-quality-coop-partners-with-advertising-intelligence-business/id/5148206 | $1.25M first round (Oct 2024). [P] https://www.utahbusiness.com/press-releases/2024/10/29/data-quality-coop-secures-125-million/ Pricing unpublished. | Direct on scorecards. |
| **Verasight** | Verified panel from $3.50 per complete. [V] https://verasight.io/self-serve-surveys It claims to beat Pew's opt-in samples on accuracy. | Funding undisclosed after several searches. | Owns the "known-real" asset but sells sample. |
| **Verisoul** | Entry-time bot and device detection. | $8.8M Series A (Dec 2025, High Alpha) plus $3.25M seed, 100+ customers, 6x revenue growth. [P] https://www.highalpha.com/news/verisoul-raises-8-8m-series-a-to-fight-fraud-fake-users-and-bots-in-the-ai-era SaaS at $99-350/month. [V] https://www.emporiaresearch.com/blog/a-buyers-guide-to-anti-fraud-tools-in-market-research-sampling | Adjacent. The earlier file's "$9M" is the rounded figure. |
| **Roundtable** | Behavioral "Proof of Human" API. | Y Combinator S23. [P] https://www.ycombinator.com/companies/roundtable Amount unverified. | Adjacent. |
| **CloudResearch, Prolific** | Detection plus their own sample. Prolific offers a "100% Human Guarantee" that refunds twice the response cost on a detected agent. [V] | Prolific's $32M raise (2023) is aggregator-sourced. | Adjacent. Both are conflicted, and both self-test. |
| **dtect, Obsurvant** | Entry detection (dtect) and quality profiling (Obsurvant). Both are vendor-claim only. | Undisclosed. | Adjacent. |
| **Pew, NORC** | Publish the method free. | Non-profit. | The method itself is free to copy. |
| **Simile, Aaru** | Synthetic respondents. Simile raised $200M at $2B (July 2026). [V] https://letsdatascience.com/news/simile-raises-200-million-for-consumer-ai-twins-43af6a77 | Heavily funded. | Substitute that could shrink panel spend. |

Prior art for independent supplier ranking: Lucid's Fulcrum Quality (2016) ranked about 20 suppliers quarterly. It was run by the sample platform, so it was not truly independent. [P] https://www.research-live.com/article/news/lucid-launches-sample-verification-programme/id/5011382

**Incumbents who could add this:**

- SSRS already has the mechanism.
- Ipsos KnowledgePanel and NORC AmeriSpeak hold the control asset.
- Cint (Q1 2026 net sales EUR 34.0m) sits on a quality-sensitive marketplace. [P] https://investors.cint.com/sites/cint/files/2026-04/Cint-Group-Q1-2026-presentation.pdf
- Qualtrics already gates its Expert Review fraud detection behind a license feature. https://www.qualtrics.com/support/survey-platform/survey-module/survey-checker/fraud-detection/

Only the neutrality part is hard for them. That is a reputation moat, not a technology moat.

## 5. Bottom-up market size

There is no clean sourced customer count. A single syndicated report puts online survey research at about $4.2B in 2025 [V, one source] https://trendxinsights.com/syndicated-market-research-reports/online-survey-research-market/. The estimates below use my assumptions.

| Segment | Assumption [I] | Annual revenue |
|---|---|---|
| Enterprise programs ($50-150k) | 150-300 insights organizations with $2M or more sample spend; 15-25% adopt; $100k average | $2-7M |
| High-stakes per-study audits ($10-30k) | 500-1,000 studies a year (litigation, pharma access and pricing, pollsters, publishers) at $15k average | $7-15M |
| Vendor scorecard subscriptions | DQC and Verisoul-style pricing of hundreds of dollars a month | Under $2M |
| **Total serviceable** | | **about $10-25M** |

This supports a 1-5 person boutique, not a venture-scale business. Dynata's 2024 Chapter 11 (debt cut from $1.3B to $780M) suggests sample economics are thin, so buyers' budgets are not generous. [P] https://hartfordbusiness.com/article/shelton-based-data-research-firm-emerges-from-bankruptcy-new-equity-owners-include-bain/

## 6. Willingness to pay: problem evidence is strong, payment evidence is thin

**Price anchors, all far below the proposed price:**

- Buyers balk at about $3 per complete, and some push for $2.75. A researcher says he would pay $5 instead of $2 but could not persuade clients. [V] https://www.greenbook.org/insights/research-methodologies/panel-quality-stinks-and-clients-are-to-blame
- A 1,000-complete study therefore costs about $3-5k in sample. A $3-15k audit would be 1-4 times the fieldwork bill. [I]
- Detection runs $99-350 a month (Verisoul). DQC's price is unpublished.
- A litigation consumer survey costs about $15-20k in total, and specialist audiences cost more. [P] https://calawyers.org/intellectual-property-law/event-recap-trademark-spotlight-trademark-surveys-litigation/

**Evidence in favor:**

- Emporia's buyer guide calls an extra independent check "an insurance policy" on critical studies. [V]
- Advertiser Perceptions partnered with DQC to add an "independent layer" of validation. The commercial terms are undisclosed.
- A credible veteran just opened an audit-only practice. That is a market signal, not revenue evidence.

**Missing:** I found no RFPs, no regulation mandating audits, and no public example of anyone paying $3-15k for a per-study audit. The earlier competitor pass found the same gap. Buyers' natural fix is switching suppliers. Prolific's own numbers are $8.26 per quality respondent from direct panels against $74.43 from marketplaces. [V]

## 7. Unit economics (my arithmetic, flagged assumptions)

**Renting the control is cheap:**

- n=500 at 10 minutes via Verasight costs about $1.75-2.5k at $3.50-5 per complete.
- Ipsos KnowledgePanel omnibus is $1,000 per question unit for units 1-5 and $750 after (2024 brochure). [P] https://www.ipsos.com/sites/default/files/KP_Omnibus_Brochure_2024.pdf Fifteen units (n=1,000) cost about $12.5k.

**Building your own address-based panel is expensive and slow:**

- NORC's initial household response is about 6% using four mailings plus $5 prepaid and $25-50 postpaid incentives. [P] https://amerispeak.norc.org/content/dam/amerispeak/about-amerispeak/pdf/amerispeak-technical-overview.pdf
- A mailed teacher-panel experiment cost $67 per recruit at 27.5% response, rising to $106 with larger promised incentives. [P] https://www.surveypractice.org/article/17882-the-effect-of-incentives-and-mode-of-contact-on-the-recruitment-of-teachers-into-survey-panels/attachment/46679.html
- At a 6% yield, I infer several hundred dollars per recruit. That implies low-to-mid six figures for 2,000 verified humans, plus maintenance. The "first 30 days" plan of recruiting 2,000 humans is not realistic.
- 2,000 respondents also supports few subgroup estimates.

**Gross margin on one study [I]:**

- At a $10k price: control $2-5k, plus 25 analyst hours at $150 (about $3.75k), plus detection signals under $0.5k. That leaves roughly 8-38% margin.
- At a $3k price the audit loses money.
- The business only works at $10k or more per study, or as retainers.

**Substitution:** since a verified-human sample rents at $3.50-5, "scarce known-real reference" is overstated. A buyer can buy the clean sample itself.

## 8. Regulatory and liability landscape

- No regulator mandates third-party survey audits. I found only voluntary regimes:
  - ISO 20252 certification through the IA's CIRQ.
  - IA's pledge.
  - GDQ metrics.
  - AAPOR's proposed Code revisions.
- Courts usually admit surveys and treat flaws as going to weight, unless flaws are "fatal". [P] https://calawyers.org/intellectual-property-law/event-recap-trademark-spotlight-trademark-surveys-litigation/
  - In NetAirus v. Apple (C.D. Cal. 2013), a survey of respondents "with no basis" to answer was excluded. https://patentlaw.jmbm.com/2013/11/netairus-v-apple-district-cour.html
  - I found no ruling excluding a survey for bots or fraudulent panelists across two attempts. The litigation wedge from the earlier pass is therefore speculative.
- Liability for the auditor [I, not sourced]:
  - An "audit stamp" invites professional-liability exposure if a stamped study is later retracted.
  - Publishing vendor scorecards invites trade-libel and false-advertising claims from vendors.
  - Getting response-level paradata and device data from vendors raises contract and privacy limits.
  - Budget for E&O insurance and counsel-reviewed methodology.
- Pharma and healthcare-professional (HCP) panels have documented fake-HCP problems, but I found no quantified prevalence. https://www.m3globalresearch.com/blog/fake-surveys-healthcare-professionals/

## 9. Risks and kill criteria

1. **Price cliff.** Routine studies will not carry a multiple of their sample cost.
2. **Credibility cold start.** An audit sells trust, and the closest competitor is a 25-year veteran on IA and GDQ committees.
3. **Mechanism is copyable.** SSRS published the method, and Pew published the design.
4. **Threat may stay hypothetical.** If agents stay under 1% of live traffic, urgency fades. If synthetic respondents win, panel audit demand shrinks.
5. **Self-fix.** Panels adopt probability blending or "100% Human" guarantees, which removes the pain.

**Kill if** fewer than 3 of 10 insights heads will commit more than $10k for a single-study audit, or if no litigation survey expert will name a project where the audit mattered.

## 10. Recommended next step

If the owner still wants this idea, test before building:

1. Run 10 buyer interviews and 3 survey-expert interviews with a $15k single-study proposal.
2. Spend about $5k buying a small sample from 4-6 suppliers plus a Verasight control, and publish a free "state of sample quality" benchmark. This is the cheapest credibility asset, and the earlier file's idea is sound here.
3. Target the wedge of pollsters, publishers and litigation or pharma access studies, at $10-50k per study.
4. Partner for the control sample instead of recruiting, and use existing detection signals.
5. Consider co-opting or partnering with Signals & Standards before competing.

## 11. Gaps

- Funding for Verasight, Roundtable, dtect and CloudResearch was not found.
- Bot Olympics results are not yet published.
- There is no sourced count of enterprise sample buyers or typical corporate sample spend.
- There is no published per-recruit ABS cost.
- There is no litigation precedent on bot contamination.
- DQC and Signals & Standards pricing is unknown.
- The Verasight "independent validation" and Prolific "100% accuracy" claims are vendor-run.
