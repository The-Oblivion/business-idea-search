# Round 4 / Lens: MHC and the home-health + home-care workforce

Generated 2026-10-26 for Asher (18, FL, 10-15 hrs/wk until June 2027). 8 ideas, ranked best first.
Grounding: about 25 web searches / fetches (sources at the bottom). Every number below is tagged with where it came from; anything I could not verify is flagged "UNVERIFIED".

## Bottom line (read this first)

1. Ideas 1-4 are not four separate companies. They are one stack: **find the hole (StatusGuard) -> fill it fast (Day-One Desk) -> keep a supply of people (Retained-Hire Network) -> cover the gap this week (Surge Bench)**. Launch with #1 as the wedge because it needs the least money and no clinical data (PHI-free), then let #2 become the revenue engine.
2. The two obvious ideas in this lens are **dead**: AI voice agents that fill open shifts (Zingage $12.5M seed, Phoebe $9.5M seed, EngineHire, Famulor, Comfort Keepers building its own) and a Creole/Spanish training + retention app (Nevvon took BVP Forge money and reports 650,000+ caregivers; Relias already ships Haitian Creole aide courses; CareAcademy ships Spanish). Do not build either.
3. What is genuinely open: the **work-authorization and credential-continuity layer** (no home-care-specific product found), **done-for-you onboarding** with a speed guarantee (nobody found selling it as a service), and **performance-priced bilingual recruiting**.
4. Honest ceilings: #1 alone is roughly a $50-150M TAM business (depends on counts I could not verify). It only gets to venture scale by feeding #2-#4 (transaction revenue per hire / per hour). #6 and #8 are small on their own.
5. MHC type is UNVERIFIED. Directory listings show "MHC Area 6 LLC" (Riverview) and "MHC Area 10 LLC" (Fort Lauderdale) as Medicare-certified home health agencies. "Area 10" implies at least ten area entities, which would make MHC a multi-agency operator. That is the single best fact for this lens: one customer with many sites and one shared hiring problem. Confirm on AHCA's facility search and CMS Care Compare before the first meeting.

## Ground truth I found (why now)

- **Supply shock.** Immigrants are 28% of the 5.4M US direct care workers and 46% in Florida (PHI, June 2026). The median wage is $17.36/hr. About 772,400 new direct care jobs are projected 2024-2034.
- **Haitian TPS.** The Supreme Court allowed termination on June 25, 2026. About 330,000 people face loss of work authorization nationally; about 158,000 Haitian TPS holders live in Florida and Florida has about 404,000 TPS holders in total (Al Jazeera, July 2026). Roughly 13,000 Haitian TPS holders work as nursing assistants (Boston Globe, via Al Jazeera). Dates conflict across outlets (July 10 vs. July 24-27 vs. "week of July 30") and some attorneys argue permits remain valid pending lower courts, so the status is genuinely contested. Any product must work under either reading.
- **Employers are terminating out of caution.** Jewish Community Services of South Florida let go of 18 aides when TPS lapsed (AP, Aug 2026). One Miami outlet reported two South Florida agencies closing after losing 80+ authorized workers each. That is single-source, so UNVERIFIED.
- **I-9 handling is manual.** Generic I-9 vendors (Equifax, Mitratech Tracker, Experian, Lookout) exist. Mitratech's own guide says the reverification date does not auto-calculate for TPS extensions. A vendor webinar claims most HR teams use spreadsheets (marketing, treat as soft). A vendor listing says most automatic EAD extensions ended for renewals filed on or after Oct 30, 2025 (UNVERIFIED).
- **Florida E-Verify.** SB 1718 (2023) requires E-Verify for private employers with 25+ employees (SHRM). A bill to extend it to all employers was re-filed for the 2026 session (outcome UNVERIFIED).
- **Churn economics.** Caregiver turnover is about 79.2% (Activated Insights) or about 75% (PHI), with older Home Care Pulse medians of 60-65%. The standard replacement cost is $2,600 per caregiver, but that rests on 2017 wage data, so it is probably $3,000+ today. Median cost per hire through Indeed is $561, referrals $837, word of mouth $167 (Home Care Pulse, older).
- **Pay.** Miami listings run about $16-24/hr (Synergy HHA $18-19.50). Florida's minimum wage should have reached $15.00 on Sept 30, 2026 under Amendment 2 (2020), from memory, so UNVERIFIED. That compresses the pay ladder.
- **Agency margins.** CMS finalized a -1.3% aggregate Medicare home health cut for 2026. MedPAC counts "over 12,000" Medicare HHAs and $16.0B of FFS Medicare home health spending. Miami alone shows 167 certified HHAs on a consumer directory (UNVERIFIED count method).
- **80/20 rule.** The Medicaid Access Rule's 80% direct-care pass-through still stands, with an effective date of July 9, 2030 per a LeadingAge summary of Oct 2026 guidance. There is repeal pressure and CMS has delayed other pieces. Too far out and too uncertain to build on today.
- **Wage-hour.** DOL stopped enforcing the 2013 home-care rule (FAB 2025-4, July 2025) and proposed rescinding it. As of April 2026 it was still a proposal. That kills "wage-hour audit" as a why-now.
- **Florida staffing law.** Health care services pools must register with AHCA (registration, about $616, Level 2 screening of administrator and financial officer, a designated pool representative). Nurse registries are outside the pool statute and I did not find their rules (UNVERIFIED).
- **Language access.** Section 1557 language-access duties remain in force despite the March 2025 English-official-language order (KFF). I could not confirm whether the qualified-bilingual-staff provisions changed.

## Ranked ideas

### 1. StatusGuard: the work-authorization and credential continuity desk for home-based care
**One-liner.** A PHI-free system that tracks every aide's work-authorization, license, screening, TB, CPR and in-service dates, maps each expiry onto the client schedule ("if these 11 aides lapse on Nov 3, 34 clients lose care and $X of weekly revenue is at risk"), runs counsel-approved reverification workflows, and keeps survey-ready personnel files.
- **Customer.** Owner, administrator or HR lead of a home health, home care or ALF operator in Florida, then multi-site operators nationally.
- **Who pays / budget.** The agency, from its HR and compliance budget (I-9 and HRIS tools already cost roughly $3-10 per employee per month) plus legal-risk avoidance. Pricing: $149/mo base + $3 per worker per month, plus a one-time "Survey-Ready Personnel File Audit" at $1,500-4,000. A 75-aide agency is about $4.5k a year plus the audit. At MHC the signers are the founder-grandfather and Mom's team.
- **Problem.** Authorization cliffs (TPS/parole/EAD) arrive agency-wide and in a single month. Owners either keep unauthorized workers (penalty risk) or fire authorized ones out of fear (discrimination risk plus lost revenue). Today they run it on spreadsheets, and nothing connects an expiring document to "which patients lose their aide".
- **Solution.** LLM/OCR intake of the documents the employee already presented (I-9 Section 2 documents, EADs, licenses, TB, CPR, screening receipts). The expiry engine follows Form I-9 reverification rules exactly. It flags only documents with an expiry date and never guesses status from name or origin. It adds an exposure-to-coverage map, a pre-drafted worker notice in English, Spanish and Creole, and an audit-gap report. Every logic rule is reviewed by an employment-immigration attorney before launch. Nothing is reported to any government body.
- **Why now.** See "Ground truth": the Haitian TPS cliff, 46% immigrant Florida workforce, extension rules in flux, E-Verify at 25+ employees.
- **Founder edge.** Ships documents-to-structured-data pipelines fast (his detector and research pipelines). The data is employment records, which HIPAA excludes from PHI when a covered entity holds them as employer, so no BAA is needed. He can shadow MHC HR for a week and build against real (consented) files. Mentor can pressure-test the managed-services upsell.
- **First 10 customers.** (1) MHC's Area entities as one deal (audit + monitoring pilot, priced low but real). (2)-(4) three peer owners introduced by the grandfather. (5)-(7) agencies met through Florida at Home / the HCAOA Florida chapter via a free "TPS exposure scan" (upload a roster of expiry dates, get a one-page report in 24 hours). (8)-(10) ALFs and nursing homes reached through the same associations; the Florida Health Care Association has already lobbied DHS about caregivers.
- **Cost to first revenue.** About $1,500 (attorney review $1,000, LLC, hosting, OCR/LLM).
- **Path to big.** Subscription is the base. The real upside is the flywheel: every flagged gap becomes a Day-One Desk or Bench transaction. Bottom-up: 12,000 Medicare HHAs x $4.5k is about $54M; add non-medical home care, ALFs and nursing homes (counts UNVERIFIED) and the pool is plausibly $130M+. $10M ARR needs about 2,200 agencies. Say so plainly: alone, share needed is high.
- **Who does it today.** Equifax I-9 Management, Mitratech Tracker I-9, Experian, Lookout i9 Intelligence, EmpTrust (generic I-9). Home care EMRs (AxisCare, WellSky, Axxess, AlayaCare) have caregiver credential modules (basic expiry tracking assumed, not verified). I found none that ties authorization to client coverage or generates survey-ready files.
- **Legal premises to respect.** Reverify only documents that carry an expiry date; never ask for specific or extra documents (INA 274B anti-discrimination); counsel signs off; store minimum data and encrypt; follow state breach law.

### 2. Day-One Desk: done-for-you trilingual onboarding with a speed guarantee
**One-liner.** An onboarding back office (AI plus a few bilingual coordinators) that takes an accepted offer to "shift-ready" in 5 business days: document chasing, I-9 Section 2 scheduling (with the employer's authorized rep), Level 2 screening, TB, CPR, training assignment, EVV and payroll setup, in English, Spanish and Creole by text and WhatsApp.
- **Customer.** Multi-site home health and home care operators (3+ sites), PE-backed roll-ups, growing independents. MHC first.
- **Who pays / budget.** Operations or HR budget that already pays recruiter time, admin salaries and sign-on bonuses. Price $350 per aide onboarded (or $1,200/mo + $200 per hire). Value assumption to validate with MHC: an aide bills roughly 25 hrs/wk, so each day saved is about $100-150 of revenue, and a 7-day cut is $700-1,000 per hire.
- **Problem.** Time-to-first-shift is long because HR staff chase documents, appointments and signatures by phone. Candidates ghost in the gap, and every ghost wastes the $561+ recruiting spend.
- **Solution.** Workflow engine + three-language messaging agent + a small exception desk. Output is a complete, audit-ready file (feeds StatusGuard). SLA: 5 business days or the fee is waived.
- **Why now.** Churn of 65-79% means roughly 65-80 hires a year per 100 aides, and the TPS cliff adds a forced replacement wave. Agencies are cutting admin cost under the -1.3% Medicare rate.
- **Founder edge.** The mentor built a roughly $1B company on managed services, so the recurring-service model is his home turf. MHC's multi-entity structure gives volume on day one. Asher can build the workflow software in weeks.
- **First 10 customers.** MHC (pilot at near cost for the first 30 hires, with their own metrics as the proof), then 3 owners from the grandfather's circle, then association members who attend a 20-minute "5-day onboarding" demo, then the mentor's channel contacts.
- **Cost to first revenue.** About $3,500 (part-time bilingual coordinators for month one, tools, attorney review of the I-9 workflow).
- **Path to big.** Average Medicare HHA hires about 45 a year, so $350 x 45 = about $15.7k per agency per year. $10M revenue = about 29k onboardings = about 640 agencies, or six to ten PE-backed groups. The data from every onboarding becomes the supply database used by #3 and #4. Expect 60-70% gross margin only after AI handles most exceptions.
- **Who does it today.** Software only: EngineHire (ATS + AI agents), Hireology, Apploi, Nevvon TrainOnce (portable training), Phoebe and Zingage (scheduling and call-outs). Generic BPO/virtual-assistant firms. I found no one selling a tri-lingual, SLA-priced onboarding service for home care.
- **Legal premises.** The employer stays liable for I-9 accuracy; DHS's 2023 remote-examination alternative requires E-Verify participation in good standing (verify current status); TCPA consent for texts; FCRA for screening; job seekers are never charged.

### 3. Retained-Hire Network: bilingual aide recruiting priced per 90-day retained hire
**One-liner.** Pay-on-retention recruiting: $300 at start, $600 at day 90 per aide, with a free replacement if the aide leaves early, sourced through Creole and Spanish community channels (WhatsApp, Facebook groups, churches, radio) and short-form video made by Gen Z creators.
- **Customer.** Home health and home care agencies in Miami-Dade, Broward and Palm Beach hiring aides, especially Creole- or Spanish-speaking.
- **Who pays / budget.** Recruiting budget (Indeed median $561 per hire, referral programs $837). With 60%-ish 90-day survival, cost per retained hire on Indeed is about $900, so $900 with a guarantee is at parity and shifts the risk to us.
- **Problem.** Postings go unanswered in the languages candidates actually use. Postings that demand "fluent English" shrink the pool, and early dropouts mean cheap sourcing is not cheap.
- **Solution.** Own the channel and the candidate list (consented), pre-screen for work authorization status at the document level (never by origin), and hand off to Day-One Desk.
- **Why now.** Authorized-worker supply just shrank, so agencies are bidding for the same smaller pool. Facebook and TikTok are the cheapest unsaturated channels.
- **Founder edge.** Gen Z content production at AI speed; family staff as the first referral network; father built a pre-screened, compliance-monitored marketplace (MyFinancialAdvice), which is the same architecture.
- **First 10 customers.** MHC's agencies (they already post Creole-speaking roles), then five peers via grandfather and association introductions, then agencies found through postings seeking Creole speakers (some Miami agencies already post this need).
- **Cost to first revenue.** About $2,500 of ads and creative; first $300 fees by day 30-45.
- **Path to big.** Florida hires of roughly 80k a year x $900 = about $72M; 10% share is $7M. The asset is the opted-in candidate base, which feeds Bench and Day-One. Honest weakness: aides skew older than Gen Z, so the Creole/Spanish community channels, not TikTok, will carry most volume.
- **Who does it today.** Indeed (strongest channel per Home Care Pulse), Facebook groups, EngineHire, Hireology, Apploi, myCNAjobs, local recruiters. None found pricing on 90-day retention with a bilingual community channel.
- **Legal premises.** Fee charged to employers only; ads must not ask about immigration status beyond the standard "authorized to work in the US"; check whether Florida regulates job-placement fees (UNVERIFIED).

### 4. Surge Bench: an AHCA-registered health care services pool for aides
**One-liner.** A registered pool of pre-cleared W-2 aides and CNAs that agencies, ALFs and nursing homes can call for 2-8 week gaps: TPS departures, hurricanes, mass call-outs, new-contract ramp-ups.
- **Customer.** Director of nursing or administrator at home health agencies, ALFs and nursing homes.
- **Who pays / budget.** The temporary-labor line. Bill about $27-32/hr against $18-19 wages (35-45% markup, assumption; check against local quotes). Medicaid-funded agencies also lose margin on every unfilled authorized hour.
- **Problem.** When a cohort of aides disappears, the agency either turns away patients or pays emergency premiums.
- **Solution.** Register the LLC as a health care services pool with AHCA, hire W-2 bench staff through StatusGuard-verified paperwork, and sell prepaid "surge blocks". Disaster-season blocks (CMS emergency-preparedness rule) are a recurring SKU in Florida.
- **Why now.** TPS cliff plus Florida hurricane season, with a visible Florida precedent for registered pools.
- **Founder edge.** MHC can be the anchor customer and a source of the first clinical oversight. The pre-screened-network model comes from his father's company.
- **First 10 customers.** MHC, three peers, two ALFs, and associations.
- **Cost to first revenue.** About $9,000: registration $616, Level 2 screens, workers' comp, general liability, payroll provider, and a one-month float. A funded family partner or invoice factoring may be needed; this idea is the most cash-hungry of the eight.
- **Path to big.** Revenue = hours x bill rate: 400k hours a year at $27 is about $10.8M, gross margin about 25-35%. Venture-scale only if it becomes an app-based marketplace.
- **Who does it today.** Gento (home health per diem, $5M Series A 2020), Nursa ($80M 2023), CareRev ($50M 2021), ConnectRN, FleetNurse, local staffing agencies. Diem Health (home health per diem) looks like a cautionary tale.
- **Legal.** AHCA registration is a registration, not a clinical license, but the designated representative must know the disciplines supplied (use a family or MHC clinician). Verify requirements directly with AHCA.

### 5. The Ladder: registered-apprenticeship sponsor for home-based care (aide -> CNA -> LPN -> RN)
**One-liner.** An intermediary that registers and runs a home-health-aide-to-nurse apprenticeship, handles OJT hour logs, related instruction and wage steps with AI, and pulls in state workforce dollars, including a track for internationally trained clinicians already in South Florida.
- **Customer.** Employers (home health agencies, ALFs) as sponsors; a Florida college or school district as the grant partner.
- **Who pays.** Employer admin fee ($1,200-2,000 per apprentice per year, assumption) plus training dollars from Florida's Pathways to Career Opportunities Grant (a $14.6M recent round, which has funded an EMT apprenticeship) and CareerSource programs.
- **Problem.** RN and LPN vacancies cost agencies five-figure recruiter fees, while 79% turnover wastes aide training.
- **Why now.** Apprenticeship money is bipartisan and growing. WES reports 165,000-263,000 underemployed immigrants with health degrees. Massachusetts shows the home health aide apprenticeship model working with an intermediary (12 of 12 apprentices still active).
- **Founder edge.** Documentation-heavy compliance is exactly what AI builds well; MHC as a sponsor with a shadowable training program.
- **First 10 customers.** MHC as the lead sponsor, a partner college (Miami Dade College or FIU, by introduction), peers from associations.
- **Cost to first revenue.** About $3,000. Honest timing: this is a longer fuse; first cash likely comes after 90 days.
- **Path to big.** A national apprenticeship operating system for care work. Caveat: DOL's July 2026 $162M awards covered non-healthcare sectors, and the only per-apprentice payment I found ($3,500) was for manufacturing, so a federal healthcare money path is UNVERIFIED.
- **Who does it today.** No Florida home health aide intermediary found. Massachusetts programs, PHI, Nevvon mentorship (funded by a $971,600 Massachusetts workforce grant), college LPN-to-RN bridges, WES Global Talent Bridge, Upwardly Global-type nonprofits.

### 6. Wage Radar: pay, bonus and turnover benchmarks for home care by ZIP
**One-liner.** Weekly pay and benefit benchmarks from licensed job-posting data plus anonymized contributions from member agencies, with a sign-on/referral-bonus optimizer.
- **Customer / payer.** Agency owners ($149-499/mo), PE firms and lenders ($10-50k a year data feeds), state Medicaid agencies and MCOs (rate studies $25-100k).
- **Why now.** Florida's $15 minimum wage compresses the pay ladder, Medicare rates fell, and the 80/20 rule (2030) will force wage documentation later.
- **Edge.** Data pipelines and scraping skills; MHC as the first contributor.
- **First 10.** MHC, five association members, two PE or lender contacts through family.
- **Cost.** About $800 (data licensing and hosting).
- **Path to big.** Small alone (probably $2-6M ceiling); valuable as a feature of the stack.
- **Who does it today.** Activated Insights benchmarking surveys, Lightcast, Indeed/Glassdoor salary pages, BLS OEWS (free but lagged and not by ZIP).
- **Legal.** Competitor wage-sharing is an antitrust risk: aggregate, anonymize, lag by months, minimum contributor counts, and no forward-looking data. Do not scrape sites whose terms forbid it; license the data.

### 7. Campus Corps: pre-health students as W-2 home health aides
**One-liner.** Recruit pre-nursing and pre-med undergrads (18+ only) at FIU, UM, FAU, Nova and Miami Dade College, train them to the 75-hour aide standard through the employer, and place them part-time with MHC and peers, with a clinical-hours reference letter as the perk.
- **Why it matters.** US-citizen and LPR students are immune to authorization shocks and sit inside Asher's college-applicant world.
- **Payer.** Agencies pay a $500-800 placement fee plus an ongoing managed-bench margin.
- **Weaknesses.** Part-time class schedules, semester churn, skilled-visit fit.
- **Who does it today.** CareYaya (25,000+ enrolled students, grant-funded, non-medical, families pay $15+/hr) and Papa (Medicare-Advantage-funded companionship, still expanding as of Aug 2026). Neither places students as W-2 aides for Medicare HHAs.
- **Cost.** About $1,500. **Path to big.** An early-career health workforce marketplace; ceiling unclear.

### 8. Voz: voice-first visit notes for aides in Creole, Spanish and English
**One-liner.** Aides speak a note; the system returns a structured English visit note, incident report and timesheet note for the agency's EMR.
- **Payer.** Agencies at $3-5 per aide per month from the QA budget, justified by fewer documentation denials and survey findings.
- **Risks.** PHI means a BAA is needed. Haitian Creole speech-recognition accuracy is untested. Buyer pain is weaker than in ideas 1-4.
- **Who does it today.** EMR and EVV mobile apps (Spanish interfaces), clinician AI scribes, Nevvon (multilingual training). I did not find an aide-voice documentation product in Creole.
- **Cost.** About $600. **Path to big.** An embedded layer for EMRs; low priority.

## Dead ends I ruled out (with reasons)

- AI shift-fill voice agent: Zingage ($12.5M seed, 400+ agencies), Phoebe ($9.5M seed, Right at Home Florida as a customer), EngineHire, Famulor, Comfort Keepers in beta.
- Creole/Spanish training and retention LMS: Nevvon (BVP Forge, 650k caregivers, HHAeXchange integration), Relias (Creole), CareAcademy.
- 80/20 compliance engine: effective 2030, repeal pressure.
- Wage-hour travel-time audits: DOL stopped enforcing the 2013 rule.
- Portable I-9 "passport": Section 2 is employer-specific.
- Paid referrals of patients: Anti-Kickback Statute.
- Immigration-attorney referral marketplace: bar referral-fee rules and political risk.
- Grant-writing for incumbent worker training: Florida's IWT cap is $100k per grant and eligibility for for-profit HHAs is unclear.

## Monday plan (idea 1, week 1)

1. Confirm MHC's entities and sites on AHCA and CMS Care Compare.
2. Ask Mom to arrange a half-day with the person who owns hiring paperwork; shadow, do not touch PHI; sign an NDA.
3. Get a de-identified roster of expiry dates only (no names) for an exposure estimate.
4. Book one hour with an employment-immigration attorney to review the reverification logic.
5. Build the roster-upload "TPS exposure scan" as the lead magnet.

## Sources

- PHI policy brief (June 2026): https://www.phinational.org/wp-content/uploads/2026/06/PHI-Policy-Brief-Support-Immigrants-June-24-2026.pdf
- Al Jazeera on Haitian TPS (July 2026): https://www.aljazeera.com/news/2026/7/2/will-the-end-of-tps-for-haitians-mean-a-caregiving-crisis-in-us
- AP via Jamaica Gleaner (Aug 2026): https://jamaica-gleaner.com/article/news/20260802/more-workers-immigration-crackdown-threatens-haitian-caregivers-and-seniors
- Mitratech TPS guide: https://success.mitratech.com/Tracker_I-9/Tracker_FAQs/Form_I-9/TPS_Auto-Extension_Guide
- Equifax I-9 / TPS: https://workforce.equifax.com/all-blogs/-/post/tps-extension-for-certain-form-i-9-documents
- Experian I-9 update: https://www.experian.com/blogs/employer-services/regulatory-update-tps-employer-updates-for-form-i-9-compliance/
- Home Care Pulse turnover cost: https://www.homecarepulse.com/articles/much-caregiver-turnover-really-costing-business/
- Home Care Pulse on Indeed: https://www.homecarepulse.com/articles/how-to-use-indeed-and-other-job-sites-to-drive-more-caregiver-applications
- Enginehire retention: https://enginehire.io/caregiver-retention-and-turnover-for-home-care-2026/
- Relias multilingual courses: https://www.relias.com/press-room/relias-launches-largest-set-of-multi-language-online-home-based-care-education-courses
- Nevvon / BVP Forge: https://www.homecaremag.com/news/nevvon-receives-investment-bvp-forge ; HHAeXchange partner page: https://hhaexchange.com/nevvon-partner/
- Zingage seed: https://www.healthcareittoday.com/2025/11/18/zingage-raises-12-5m-to-build-the-ai-care-delivery-platform-for-home-care/
- Phoebe: https://www.phoebe.work/
- Comfort Keepers AI: https://homehealthcarenews.com/2026/07/comfort-keepers-ai-toolkit-paradigm-shift-caregivers/
- Gento: https://homehealthcarenews.com/2020/02/tech-startup-gento-lands-5m-to-solve-home-based-care-industrys-staffing-problems/
- Nursa: https://www.staffingindustry.com/Editorial/Healthcare-Staffing-Report/Sept.-14-2023/Nursa-reports-80-million-funding-round-hires-execs
- AHCA health care services pool: https://ahca.myflorida.com/health-quality-assurance/bureau-of-health-facility-regulation/long-term-care-services-unit/health-care-services-pool.html
- Rule 59A-27.002: https://www.law.cornell.edu/regulations/florida/Fla-Admin-Code-Ann-R-59A-27-002
- CMS 2026 home health final rule: https://homehealthcarenews.com/2025/11/cms-finalizes-2026-home-health-medicare-payment-rule-with-1-3-aggregate-reduction/
- MedPAC HHA update (Dec 2025): https://www.medpac.gov/wp-content/uploads/2025/12/Tab-H-HHA-update-Dec-2025.pdf
- LeadingAge on 80/20: https://leadingage.org/serialpost/cms-significant-medicaid-rules-addressing-access-and-quality/
- DOL companionship rule status: https://www.parkerpoe.com/news/2026/04/sixth-circuit-upholds-labor-departments-narrow-interpretation-of
- Florida IWT: https://opengrants.io/grants/careersource-florida-incumbent-worker-training-iwt-grant-program/
- Massachusetts HCBS apprenticeship: https://www.mass.gov/doc/apprenticeship-for-the-hcbs-sector-pdf/download
- Florida PCOG awards: https://workhands.com/news/millions-awarded-for-apprenticeship-opportunities-in-florida
- DOL $162M awards: https://www.ishn.com/articles/115449-dol-awards-162m-to-expand-registered-apprenticeship-through-incentives-in-key-industry-sectors
- WES on internationally trained health workers: https://wes.org/breaking-barriers-for-internationally-trained-immigrants-and-refugees-in-regulated-professions
- CareYaya: https://en.wikipedia.org/wiki/CareYaya_Health_Technologies
- Papa (Aug 2026): https://hitconsultant.net/2026/08/18/papa-expands-multi-year-medicare-advantage-partnership-with-eternalhealth-across-massachusetts-and-arizona/
- KFF on Section 1557 and the English order: https://kff.org/racial-equity-and-health-policy/designating-english-as-the-official-language-of-the-united-states-could-impact-millions-with-limited-english-proficiency/
- Florida E-Verify (SHRM): https://www.shrm.org/in/topics-tools/employment-law-compliance/florida-enacts-new-mandatory-e-verify-law
- MHC Area listing (low reliability directory): https://feedam.org/resource/550802
