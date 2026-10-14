# I0996-M1 Dossier: ERCOT Large-Load Energization Files, Fixed Fee

Research date: 2026-10-13. Method: ERCOT primary documents (rule text, impact analyses, board decks, stakeholder comments) plus targeted web search. Pricing and competitor traction data were largely not findable; gaps are flagged.

## Verdict

**Conditional go, but re-aim.** The regulatory pull is real and larger than the pitch says, but it comes from a different rule than the one the pitch leads with. Three corrections matter:

1. **NOGRR282 does not create the acceptance gate.** It is a performance rule enforced after a trip event. The gate is **PGRR144**, which is recommended for approval but not confirmed approved by the PUCT.
2. **The "no direct competitor" finding is wrong.** At least four consultancies already market ERCOT large-load model services. None showed a hardware-validated, reusable library, but none disclosed pricing either.
3. **The OEM is the biggest threat.** ERCOT itself says converter validation is "generally performed in OEM's lab" and "usually performed once" per converter family. That supports the reuse thesis and also invites OEMs to cut out the middleman.

Near-term cash timing is also worse than assumed. The Texas governor's data center audit paused energization approvals for 75 MW and larger data centers on Aug 3, 2026.

## 1. What the rules actually require

**NOGRR282** (effective Aug 1, 2026; [ERCOT page](https://www.ercot.com/mktrules/issues/NOGRR282)):
- It sets voltage and frequency ride-through tables for Large Computational Loads (LCLs), defined as Large Loads of 75 MW or more where 50% or more of site demand is power-electronic computational load (definition quoted in search results from the [NPRR1308 PRS report](https://www.ercot.com/files/docs/2025/12/14/1308NPRR-06-PRS-Report-121025.docx); the ERCOT issue page does not restate it).
- The text has no model submission, test report or pre-energization evidence requirement. Enforcement is reactive: if ERCOT finds a failed ride-through, the customer has 90 days for a root-cause report, 90 days for a plan and 180 days to implement. ERCOT may order disconnection for imminent risk ([original text](https://www.ercot.com/files/docs/2025/11/14/282NOGRR-01-Large-Electronic-Load-Ride-Through-Requirements-111425.docx); [PUCT-approved redline](https://www.ercot.com/files/docs/2026/07/11/282NOGRR-45-PUCT-Report-070926.docx)).
- Grandfathering is broad: loads with approval to energize, or executed agreements and study completion, by mid-2026 are exempt ([PUCT redline](https://www.ercot.com/files/docs/2026/07/11/282NOGRR-45-PUCT-Report-070926.docx)).

**PGRR144** is the real forcing function ([ERCOT page](https://www.ercot.com/mktrules/issues/PGRR144)). ROS recommended it on 7/9/26, TAC on 8/26/26 with 3 opposed and 4 abstaining, and the Board on 9/15/26. I found no PUCT order. It takes effect the first of the month after PUCT approval ([TAC report](https://www.ercot.com/files/docs/2026/08/31/144PGRR-19-TAC-Report-082626.docx)). It would require:
- Dynamic models in PSS/E, PSCAD and TSAT.
- Model quality tests for all Large Loads (flat start and large voltage disturbance).
- For LCLs, a **converter model validation** report benchmarking the PSCAD model against hardware tests.
- As-built models plus an owner attestation before initial energization.
- Re-review through the interconnection study for any material LCL change.

([ERCOT 6/11/26 comments](https://www.ercot.com/files/docs/2026/06/11/144PGRR-11-ERCOT-Comments-061126.docx))

Details that shape the business:
- ERCOT's pre-energization review ends in "approved, or additional information required." ERCOT rejected a Data Center Coalition request to delete that approval language ([ERCOT responses](https://www.ercot.com/files/docs/2026/06/18/PGRR144-ERCOT-responses-to-DCC-comments_June2026.pdf)). A real acceptance event exists.
- ERCOT states that completing the tests "does not constitute an endorsement" of NOGRR282 compliance ([ERCOT/ESIG deck](https://www.esig.energy/attachment/serve/ercot-modeling-requirements-and-mqt_june2026_esig_workshop)). Acceptance and compliance are separate things.
- Hardware-in-the-loop (HIL) is an accepted validation method. It is usually done in the OEM's lab, once per converter family ([same deck](https://www.esig.energy/attachment/serve/ercot-modeling-requirements-and-mqt_june2026_esig_workshop)). The draft text says IBR inverter validation results "can be submitted for multiple uses of that model," and describes the LCL converter test the same way, as a hardware-type benchmark of converter components rather than a site test ([ERCOT comments](https://www.ercot.com/files/docs/2026/06/11/144PGRR-11-ERCOT-Comments-061126.docx)).
- Dynamics data is "Protected Information," so accepted submissions never become public precedent.

## 2. Is the why-now real?

**Yes on regulation, mixed on timing.**
- Dynamic models already gate queue position. Of Batch Zero loads, 47 were removed for submitting no dynamic model by July 10 ([ERCOT 8/19/26 deck](https://www.ercot.com/files/docs/2026/08/19/ERCOTPanel1DataCenters.pdf)). Some are conditionally included "subject to curing deficiencies in dynamic model data" ([Board deck 9/14-15](https://www.ercot.com/files/docs/2026/09/11/14-Batch-Zero-Update.pdf)).
- ERCOT's own PSCAD open-source data center model "has not been validated against actual hardware" ([ERCOT/TAMU manual](https://www.ercot.com/files/docs/2026/04/24/Dynamic-Modeling-of-AI-Data-Center-Load-in-PSCAD-Manual.pdf)). A Sandia briefing to ERCOT says ERCOT "still requires hardware-validated EMT models with real control loops" ([Sandia deck](https://www.ercot.com/files/docs/2026/09/04/4-Voltage-and-Frequency-Ride-through-for-large-computational-loads-State-of-the-Art.pdf)).
- NERC issued a Level 3 alert on May 4, 2026 and proposed registering "Computational Load Entities" at 20 MW and up. That widens the opportunity beyond ERCOT ([DWT summary](https://www.dwt.com/blogs/energy--environmental-law-blog/2026/05/nerc-level-3-alert-large-loads-data-centers)).

**Headwinds:**
- **Energization freeze.** On Aug 3, 2026 ERCOT paused approvals to energize data centers and crypto sites of 75 MW or more. The verification report is due Dec 10, 2026, and the impact on Batch Zero timing is "TBD" ([Board deck](https://www.ercot.com/files/docs/2026/09/11/14-Batch-Zero-Update.pdf); [market notice](https://www.ercot.com/services/comm/mkt_notices/M-A080326-01)). Expect cash slippage of roughly two quarters.
- **Closed on-ramp.** The legacy study process closed to new submissions July 10 ([Board deck](https://www.ercot.com/files/docs/2026/09/11/14-Batch-Zero-Update.pdf)). Ongoing batches await a future rule ([Mondaq](https://www.mondaq.com/unitedstates/oil-gas-electricity/1807826/puct-approves-batch-zero-framework-that-will-provide-a-pathway-for-large-load-to-connect-to-the-grid-and-receive-electricity)). The "first wave hitting the queue now" claim is stale. The buyer pool is mostly Batch Zero, not new entrants.
- **Size mismatch.** The 25-300 MW wedge overlaps the rules only at 75 MW and above. Sites of 25-75 MW get only a community-impact data request ([Board deck](https://www.ercot.com/files/docs/2026/09/11/14-Batch-Zero-Update.pdf)).

## 3. Bottom-up market size

- Batch Zero conditionally includes **362 projects, about 194 GW** (204 base, 66.4 GW; 158 studied, 127.9 GW), an average near 540 MW per project ([Board deck](https://www.ercot.com/files/docs/2026/09/11/14-Batch-Zero-Update.pdf)). Queue totals vary by source and date: 410, 438, 445.8 and 474 GW appear in different documents.
- No source gives a size split. **Assumption:** 20-30% are 75-300 MW sites owned by developers with no in-house power-electronics staff. That is about 70-110 projects.
- At $150k per package, the one-time pool is roughly **$10-16M**. Re-issue at $20-40k per year adds **$1.5-4M per year**.
- The pitch's 12 packages in year 1 would be 11-17% of that pool, which is aggressive for a new shop facing a freeze. **My estimate:** 4-8 packages, or $0.4-1.2M, in the first 12 months.
- The audit covers roughly 250-300 projects, about 200 GW (figure from a search summary of ERCOT/Pillsbury material, not confirmed in the fetched deck; [Pillsbury](https://www.pillsburylaw.com/en/news-and-insights/texas-data-center-interconnections-audit-gate-governor-abbott-directive-update.html)). Conditional classifications can be revoked if a project fails the audit or a quarterly stability assessment.

## 4. Evidence of demand and willingness to pay

**Strong (forcing functions and stakes):**
- Delay value. BloombergNEF prices a slip at about $175M per GW-month for conventional cloud and $1.76B per GW-month for AI compute ([MGRID summary](https://mgrid.org/?p=16192)). That is $0.18M to $1.76M per MW-month, so the pitch's $100/kW-month ($0.1M per MW) is conservative. It is deferred revenue, not loss.
- Adjacent state fees. The proposed rules under Texas SB6 include study fees of $100-300k and $50k per MW security ([Foley](https://www.foley.com/insights/publications/2026/03/public-utility-commission-of-texas-issues-proposed-rules-for-large-load-interconn/)). That is a proposal, not final.
- Sandia estimates one-time costs of **$1-15M** to reach ride-through compliance with a grid-interactive UPS and **$25-90M** for E-STATCOM or battery solutions, per 100 MW. A $150k model package is about 1% or less of that spend. The larger money is in design and mitigation.
- Developers accept the model requirement. Hut 8 told ERCOT it is "comfortable with a requirement to provide accurate models" but fears restudy risk ([Hut 8 comments](https://www.ercot.com/files/docs/2026/03/03/144PGRR-03-Hut-8-Comments-030326.docx)). It argued GPU fleets may eventually shed UPS, which could shrink the ride-through hardware base.

**Absent:** RFPs, quoted consultant prices, forum complaints about cost or backlog for large-load models. No transaction price was found for a PSCAD data center model or validation. The only rate signal is a UK EMT consultant posting at £650-800 per day ([job listing](https://www.mane.co.uk/job/power-system-engineer-)). Demand is regulatory, and **paid demand remains unproven**.

## 5. Competitive landscape

Industry metrics (Step 0): days from model kickoff to ERCOT sign-off, resubmittal loops, MW cleared, price per package and gross margin.

| Player | What they do | Evidence | Threat |
|---|---|---|---|
| Keentel Engineering | Markets PSS/E, PSCAD and TSAT model development, validation testing, ERCOT submission management, "as-built model certification" ([page](https://www.keentelengineering.com/pgrr-144-large-load-dynamic-modeling)) | Content-heavy marketing. No pricing, headcount or named clients | **High**: same offer |
| PSC Consulting | EMT and stability assessment for data centers across RTOs ([page](https://www.pscconsulting.com/data-center-load-modeling-and-assessment)) | No pricing or clients shown | Medium |
| ZEG | HIL validation of EMT/RMS models of "large loads" with an unnamed lab partner ([page](https://www.zeroemissiongrid.com/zeg-blog/hardware-in-the-loop-hil/)) | Also publishes ERCOT rule summaries | **High**: hardware-validation angle |
| Powertech Labs | PSCAD model quality tests and HIL services ([page](https://powertechlabs.com/engineering/modeling-simulation-services/)) | Generic offering, no data center page | Medium |
| Electranix | PSCAD and model validation talks, including validation without exposing OEM confidential data ([ESIG session](https://www.esig.energy/attachment/serve/session-6b-importance-of-in-the-loop-testing-for-model-validation-reza-pourramezan)) | Prior research found no data center page | Medium (could pivot) |
| Typhoon HIL, OPAL-RT, RTDS | Sell the HIL tools and publish data center content ([OPAL-RT](https://www.opal-rt.com/blog/grid-compliance-challenges-for-large-data-center-interconnections/), [RTDS](https://www.tdworld.com/sponsored/article/55373460/rtds-technologies-inc-hil-testing-for-data-centers-engineering-confidence-before-energization)) | OPAL-RT page mentions no service offering. Typhoon funding not found | Partner or channel |
| UPS OEMs (Schneider, Eaton, Vertiv) | ERCOT's manual cites Schneider and Eaton ride-through and reconnection logic. I found no published OEM validation reports | Not verified | **Highest** |
| Free models | NERC PERC1 user-defined model ([ERCOT deck](https://www.ercot.com/files/docs/2025/12/19/LEL-Modeling-Approach-and-Survey-Update_Dec-18-2025_R03.pdf)); ERCOT/TAMU open-source PSCAD; PNNL generic EMT library ([PNNL](https://www.pnnl.gov/publications/electromagnetic-transient-modeling-large-data-centers-grid-level-studies-beta-release)) | ERCOT accepts generic or user-defined models in the interim | Lowers build cost. Does not satisfy converter validation |
| Emerald AI | Workload flexibility. $150M Series A at $1.05B per its own site ([site](https://www.emeraldai.co/)), not independently verified here | Different problem | Adjacent |

**Moat assessment:**
- Network effects: weak.
- Switching costs: moderate, from as-built re-issue and OEM NDA relationships.
- Scale economies: moderate, from reusing a converter-family validation across sites.
- Intangibles: weak to moderate. ERCOT's Dynamics Working Group publishes the test procedures, and submissions are confidential, so tacit knowledge diffuses slowly but is not protected.

**Structural vulnerability:** OEMs hold the control details and can validate once for all their customers.

**Durable edge:** an independent lab-validated library covering multiple OEMs, plus speed with ERCOT reviewers.

## 6. Unit economics

- **Assumption:** a fully loaded engineer costs about $250 per hour, so a $150k package funds about 600 hours.
- If reused platform models cut site-specific work to 250-300 hours, **gross margin is roughly 50-60%** before HIL lab and NDA costs. Without reuse it is about the 30-40% consultancy norm.
- ERCOT's Dynamic Studies group estimates 1,700 hours per year for ride-through and model review ([impact analysis](https://www.ercot.com/files/docs/2026/04/14/282NOGRR-25-Revised-Impact-Analysis-041426.docx)). Review capacity looks thin, so resubmittal loops may be the real bottleneck. This is my inference.
- Pricing anchor check: $90-180k is plausible against the stakes above. No competitor price exists to benchmark.

## 7. Regulatory and liability landscape

- The attestation that as-built data matches field settings belongs to the developer. A bad model's consequences (restudy, disconnection) flow to the developer, who may look to the consultant. E&O insurance is needed (not researched).
- Texas requires engineering firms to register with TBPELS and name a supervising P.E. ([TBPELS fee schedule](https://pels.texas.gov/fees.htm)).
- The 25% success kicker needs care. NSPE's code bars contingent compensation "under circumstances in which their judgment may be compromised," though contingency is not per se unethical ([NSPE](https://www.nspe.org/career-growth/ethics/board-ethical-review-cases/expert-witness-services)). I did not find the Texas rule text, so get counsel to confirm. Structuring it as a milestone fee rather than a findings-contingent fee is safer.
- OEM NDAs are the binding constraint on the reusable-library plan. The rule text treats validation as reusable, but access to OEM hardware and control firmware is commercial.

## 8. Scenarios, kill criteria and next steps

| Scenario | Probability (my judgment) | Driver |
|---|---|---|
| Bull | 20% | PGRR144 approved as written. OEMs outsource validation to independents. Year-1 revenue above $1.5M. |
| Base | 45% | PGRR144 approved. A few developers buy gap analyses and packages. Revenue $0.4-1.2M, slower than planned because of the freeze. |
| Bear | 35% | OEMs self-serve or the PUCT waters down converter validation. Existing consultancies price low. Shop becomes a bespoke consultancy. |

**Kill triggers:**
- The PUCT rejects or materially weakens the converter-validation requirement in PGRR144.
- Two of three major UPS OEMs say they will supply validated PSCAD models and ERCOT-ready validation reports free to customers.
- Fewer than three developers agree to pay at least $60k in the first 30 days.

**Re-aimed first 30 days:**
1. Pull the PUCT docket for PGRR144 and confirm its status and effective date.
2. Call 3-5 Batch Zero developers at 75-300 MW. Ask who built their July 10 models, what it cost and which "cure deficiency" notices they received.
3. Ask two UPS OEMs and one power-shelf maker whether they will provide PSCAD models with validation reports, and whether they would license a third party to validate.
4. Price-check Keentel, PSC and ZEG by requesting a quote.

## Gaps and confidence

- High confidence: rule text and process facts (primary ERCOT documents).
- Not found: PUCT action on PGRR144, any consultant price, OEM model-validation plans, the size split of Batch Zero projects, Typhoon and OPAL-RT funding, and the Texas contingent-fee rule text.
- Note: the PUCT-approved NOGRR282 is a merged redline, so exact final thresholds should be re-read in the clean Operating Guide text.
- Sources conflict on queue size and terminology (LEL versus LCL).
