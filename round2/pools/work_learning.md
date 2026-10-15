# Round 2 pool map: Education, work and labor markets

Written mid-October 2026. About 45 searches and fetches. Search snippets were often secondary, so every number below carries its source and a confidence note. Where a size is derived rather than read off a primary source, the assumption is stated and flagged.

## Pools at a glance

| # | Pool | Annual $B | Hidden giant | Crowdedness |
|---|------|-----------|--------------|-------------|
| 1 | H-2A farm guest-worker wages and the FLC/recruiter/compliance layer | 6.9 | yes | contested |
| 2 | Private-school-choice money (state ESAs, vouchers, tax-credit scholarships, federal credit from 2027) | 10.6 | no | contested |
| 3 | Graduate-school borrowing displaced from Grad PLUS | 8 (gap); 14 (old Grad PLUS volume) | no | contested |
| 4 | International students' tuition and living spend at US colleges | 42.9 | no | crowded |
| 5 | K-12 special-ed related services, contract staffing and school Medicaid | ~12 (derived) | yes | contested |
| 6 | K-12 student transportation | ~30 (derived) | yes | contested |
| 7 | Trucking driver slots being re-sourced after the CDL crackdown | 11.4 (stock basis, soft) | yes | contested |
| 8 | Craft labor on US data-center construction | ~17.7 (derived) | no | contested |
| 9 | School food service (federal child-nutrition programs) | 28.2 | yes | contested |

Hidden giants (big, boring, rarely looked at by tech founders): pools 1, 5, 6, 7, 9.

## What I looked at and dropped

- **White-collar displacement.** I could not find a pool with a named payer, a mandate and at least $5B that was not an AI copilot. Outplacement is small. Corporate L&D is huge but crowded, and it is exactly Round 1's cliche territory. State unemployment insurance has a payer but no clear 2025-26 shock. Context from SIA (Sept 2026): US staffing is $183.1B in 2026 (+2.4%). Industrial staffing is the fastest segment (+7%), and office/clerical is falling (-5%, -3% in 2027). That is the clearest hard signal of white-collar softness I found. Source: https://www.staffingindustry.com/research/research-reports/americas/us-staffing-industry-forecast-september-2026-update
- **Immigrant labor outside agriculture** (meatpacking, construction, light-industrial staffing). The market is large, but I found no quantified, market-wide enforcement effect on staffing revenue. Evidence is anecdotal or comes from compliance vendors. I-9 and E-Verify fines are above $2,500 per violation (SIA-affiliated commentary). Not sizable from sources.
- **Workforce Pell and apprenticeships.** Federal money is small relative to the $5B bar, and I did not size it. Corporate trades-training pledges are covered under pool 8.
- **Gig work.** Portable-benefit laws exist, but I found no pool at the threshold and did not search it deeply.
- **Higher-ed closures, OPMs, NIH indirect costs.** Not searched. They are possible follow-ups.

---

## 1. US farm employers' H-2A wage bill and the labor-services layer around it (hidden giant)

- **Geography:** United States
- **Size:** $6.9B per year. The FY2025 H-2A wage bill was $6,935M, up from $6.5B in FY2024. About 398,000 positions were certified. Farm labor overall is about $53B a year (USDA ERS forecast, cited by Farm Bureau).
  - 44% of H-2A jobs go to farm labor contractors (FLCs). Seven of the top ten H-2A employers are FLCs.
  - Agents filed 56% of FY25 applications.
  - DOL had about 9,700 registered FLCs and FLC employees in March 2026, roughly 4,000 of them active businesses.
  - The service layer (FLC margins, agent fees, housing, transport) is additional and unsized in my sources.
  - Source: https://migration.ucdavis.edu/rmn/blog/post/?id=3113 (UC Davis Rural Migration News, built from DOL OFLC data). Farm labor total: https://www.fb.org/intel/markets/2025s-latest-hit-to-farm-labor-costs
- **Money flow:** Growers pay AEWR-floor wages, free housing, transport and visa costs. FLCs act as employer of record and bill growers for wages plus a markup. Agents recruit abroad and file the paperwork.
- **Shock:**
  - **The rule.** DOL's interim final rule of Oct 2, 2025 replaced the USDA-survey AEWR with a two-tier, OEWS-based AEWR. It added a $1-3/hr housing adjustment for H-2A workers only. The mode AEWR in FY26 Q1 applications fell to $14/hr from $17. DOL projected employer savings above $2B a year. EPI estimates $4.4-5.4B a year in lost farmworker wages.
  - **The ruling.** On Aug 26, 2026, the E.D. Cal. ruled the rule unlawful (UFW v. DOL). It declined to vacate, ordered DOL to produce a new methodology "promptly" with no deadline, and required DOL to tell employers they may owe backpay. Until then the current rule stays in force.
  - Source for the ruling: https://nationalaglawcenter.org/2025-aewr-ruled-unlawful/. The page's own header date conflicts with the ruling date, and a law-firm summary (Fisher Phillips) matches the substance. Verify against the order.
- **Incumbents:** About 4,000 active FLCs, agents, regional grower associations and ag-labor law firms. Nobody owns payroll, housing, recruiting and compliance end to end.
- **Fragility:**
  - Thousands of small FLCs and agents.
  - Paper-heavy compliance: ETA-790 job orders, housing inspections, wage records.
  - A wage rate in legal limbo with retroactive backpay exposure.
  - FLCs carry joint-employer liability on thin working capital.
- **Funded startups:**
  - Seso ($25M Series A 2022 led by Index; $26M Series B 2024 led by Bond's Mary Meeker with Index and NFX; H-2A compliance, payroll, HR). https://techcrunch.com/2024/04/02/seso-is-building-software-to-fix-farm-workforces-and-solve-agricultures-hr-woes
  - Croft (seed Feb 2024, about $2.7M per Caplight).
  - Yadag (Toronto, about $0.8M per CB Insights).
  - H2 Organizer (Austin, product launch Sep 2024).
  - I found no 2025-26 round in this niche, but I did one search.
- **Crowdedness:** Contested. Seso is real and well funded, but it is software. The FLC operating layer, housing and working capital are untouched by venture.
- **Wedge hints:**
  - Backpay-exposure modeling, escrow or insurance by job order, now that retroactive true-ups are possible.
  - Back office for FLCs: payroll, wage statements, worker banking.
  - Working capital for FLCs, who pay weekly while growers pay later.
  - Employer-provided housing at scale (modular or leaseback).
  - Monitoring foreign recruiters for banned worker-paid fees.
  - H-2B (non-ag) as an adjacent program, not sized here.
- **Insider roles:** FLC owners, grower-association H-2A managers, ag-labor attorneys, farm HR and payroll managers, labor recruiters in Mexico, former DOL Wage and Hour investigators, farmworker-housing inspectors.
- **Honest scale note:** $100M revenue needs roughly 15% of a $700M service-fee pool at a 10% fee, or a gross-billing model with a small share of the $53B farm labor bill. Heroic share on the first path.

## 2. Private-school-choice money: state ESAs, vouchers, tax-credit scholarships, and the federal credit from 2027

- **Geography:** United States (about 30 states)
- **Size:** $10.6B per year. EdChoice's 2026 rankings estimate private school choice programs allocated $10.6B in the latest year, up 29% from $8.2B.
  - Florida was $3.7B and Arizona $1.06B in the prior-year ranking.
  - Texas started a $1B ESA (TEFA) with up to about 90,000 accounts, run day to day by Odyssey. Payments of at least 25% began July 1, 2026.
  - The federal credit starts with 2027 donations: $1,700 per taxpayer, 100% credit. Education Reform Now (cited by Third Way) estimates $1.6B a year at 2% participation and $8B at 10%.
  - SGOs must spend at least 90% of income on scholarships.
  - Source: https://www.edchoice.org/2026-edchoice-spending-share-rankings/
- **Money flow:** States, and from 2027 donors via SGOs, fund family accounts or vouchers. Families pay private schools, homeschool vendors, tutors and therapists. A platform vendor handles applications, payments and audits for a fee.
- **Shock:** The federal tax-credit scholarship was enacted in the July 2025 reconciliation law. Treasury/IRS posted the opt-in notice Dec 12, 2025, and the program launches Jan 1, 2027. The IRS announced 27 states opted in as of June 8, 2026. Arizona's treasurer issued an RFI in June 2026 to replace or upgrade its ESA platform with stronger fraud detection. The auditor general found as few as 6.5% of purchases were audited.
  - Sources: https://www.k12dive.com/news/federal-private-school-choice-state-opt-in-IRS-Treasury-notice/807984/, https://ohiocpa.com/advocacy/advocacy-news/2026/06/12/irs-announces-broad-state-participation-in-federal-scholarship-tax-credit-program, https://azcapitoltimes.com/news/2026/06/05/state-treasurer-seeks-esa-vendor-to-track-misspending-fraud/
- **Incumbents:** ClassWallet (Arizona vendor, about $102.6M raised including a $95M growth round in March 2023), Odyssey (Texas), state agencies, nonprofit SGOs.
- **Fragility:** Vendors are being re-bid and audited. ECCA's SGO infrastructure does not exist at scale. Treasury has not finalized rules, including whether the 90% test applies to all income. The rules do not say how income eligibility (at or below 300% of area median) is verified, or by whom.
- **Funded startups:** ClassWallet, Odyssey ($10M Series A led by Tusk Venture Partners). I found no others.
- **Crowdedness:** Contested. Two vendors, both visible, with at least one state actively shopping.
- **Wedge hints:**
  - Risk-based audit and fraud analytics for state treasuries.
  - An SGO operating platform for ECCA: donor portals, income-eligibility checks, 90% accounting, state-list compliance.
  - Back office for microschools and small private schools that bill ESAs.
  - Provider onboarding for ESA-eligible therapists and tutors.
- **Insider roles:** State ESA program directors, treasury or comptroller staff, SGO executive directors, private-school business managers, microschool founders, state auditor staff.
- **Honest scale note:** Admin is a thin slice. At a 3-5% fee on $10.6B it is $300-500M for the entire sector, and a 10% cap on a $1.6-8B federal pool is $160-800M. A $100M-revenue vendor needs a large share.

## 3. Graduate-school borrowing displaced from Grad PLUS

- **Geography:** United States
- **Size:** $8B per year gap (loan volume, not revenue). Grad PLUS was about $14B a year across 440,000 students in AY2023-24.
  - NBER Working Paper 35683 (Sarah Turner, Aug 2026) estimates a financing gap of about $8B a year across about 370,000 borrowers.
  - Parent PLUS was $11B in 2022 and is now capped.
  - Sallie Mae's CEO says reform creates potential for $4.5-5B more annual originations for Sallie Mae (Q2 2026 call).
  - Revenue for a lender is the spread, not the volume, so the revenue pool is a small fraction of $8B.
  - Source: https://www.nber.org/papers/w35683. Grad PLUS volume: https://news.bloomberglaw.com/social-justice/grad-students-face-loss-of-major-loan-under-big-beautiful-bill
- **Money flow:** Federal Direct Unsubsidized loans now cap at $20,500 a year for graduate and $50,000 for professional programs. Students fill the rest with private loans, savings, employer aid or by not enrolling. Lenders earn spread and fees and sell loans or securitize. Schools get paid upfront.
- **Shock:** Grad PLUS closed to new borrowers on July 1, 2026 under the 2025 reconciliation law. Parent PLUS is now $20,000 a year and $65,000 lifetime. Current students are grandfathered for up to 3 years. Source for the rule change: https://ucop.edu/federal-governmental-relations/_files/summary-of-federal-financial-aid-changes-from-reconciliation-bill-july-25-2025.pdf
- **Incumbents:** Sallie Mae (Q2 2026 originations up 4.5%; net charge-offs rose to $113M from $94M), Navient/Earnest, SoFi, banks and credit unions. https://www.sec.gov/Archives/edgar/data/0001032033/000103203326000041/slm072326ex991.htm
- **Fragility:** The NBER paper says private lending collapsed after Grad PLUS expanded in 2006 and never recovered. It cites capital constraints and legal limits on using program-level outcomes data in underwriting. Fields with a flat earnings-to-borrowing relationship (social work, counseling psychology, PT) cannot support private loans. Incumbents are credit-conservative.
- **Funded startups:** GradBridge ($20M Series A, Acorn/Oaktree; second-look lending; sources conflict on Oct 2025 vs June 2026). Climb ($50M from Goldman Urban Investment Group, 2019). Prodigy Finance (international students, 2017). Juno, Mos, Stride and Edly returned nothing in my search, which does not prove they do not exist.
- **Crowdedness:** Contested. Large lenders plus a few startups, and the market is still forming.
- **Wedge hints:**
  - School-sponsored or risk-shared lending in law and MBA, where the earnings gradient supports it. The NBER paper notes institutions emerging as intermediaries.
  - Capital-markets plumbing for new originators (warehouse lines, ABS).
  - Programs that sit just outside the "professional" $50k cap.
  - Outcomes-based underwriting that survives fair-lending review.
- **Insider roles:** Grad-school financial aid directors, law and medical school CFOs and enrollment deans, consumer-lending credit-risk heads, ABS structurers, fair-lending counsel.

## 4. International students' tuition and living spend at US colleges

- **Geography:** United States (flows from India, China, Nigeria, Vietnam and elsewhere)
- **Size:** $42.9B per year. NAFSA/JB International put the 2024-25 contribution at $42.9B and 355,736 jobs, down from $43.8B in 2023-24. The measure includes tuition and living costs. I could not find a tuition-only split in the sources I opened.
  - Source: https://www.nafsa.org/economicvalue
- **Money flow:** Families, loans and sponsors pay tuition to US universities (net of aid) and living costs to local economies. Schools pay recruiter commissions and pathway-partner revenue shares. Lenders finance a slice.
- **Shock:**
  - **Fall 2025 data.** IIE's snapshot (828 institutions, 63% of international students) showed new international enrollment down 17%, the largest non-pandemic drop in about 11 years. Graduate enrollment fell 12%. 96% of institutions cited visa problems. 72% offered deferrals to spring 2026 and 56% to fall 2026.
  - **Forward estimates.** NAFSA put the fall 2025 loss at $1.1B and projected up to 111,000 fewer students in 2026-27 (-9.5%) and -$3.4B. Fitch warns that ending "duration of status" would weaken tuition-dependent colleges.
  - **Where the students went.** Germany, France, Korea and Japan are gaining share. Canada is capping.
  - Source: https://www.iie.org/?p=50451. Forward estimate: https://www.collegehelpguide.com/blog/international-student-enrollment-decline-nafsa-2026/ (secondary; verify against NAFSA).
- **Incumbents:** Universities' own international offices, agents, pathway providers (Shorelight, Navitas and others), ApplyBoard.
- **Fragility:** Tuition-dependent privates and regional publics with large one-year master's programs. Agent commissions and revenue-share contracts are misaligned when demand drops. Fitch notes domestic recruiting cannot replace the revenue quickly.
- **Funded startups:** ApplyBoard (earlier round at $1.4B valuation, undated in my source), Edvisor ($13M pre-Series A per Signalbase), Adventus (about $12M), Concourse Global ($2M seed), Leap Finance (India, $165M in 2025). Dates are from aggregators and are rough.
- **Crowdedness:** Crowded. Many intermediaries are chasing a shrinking US flow.
- **Wedge hints:**
  - Deferral and hybrid first-semester programs (a US school delivers year one via a partner abroad).
  - Visa-risk scoring for admissions.
  - Financing for students rerouted to other countries.
- **Insider roles:** International admissions directors, designated school officials (DSOs), immigration attorneys, recruiters in India and China, university CFOs and treasurers, higher-ed rating analysts.
- **Honest note:** The money is large but it is leaving. A US-based vendor is selling into a shrinking flow, and the business-model question is who still pays.

## 5. K-12 special-ed related services, contract staffing and school Medicaid (hidden giant)

- **Geography:** United States (about 13,000 districts)
- **Size:** About $12B per year, derived, with soft inputs.
  - 8.2M students ages 3-21 received IDEA services in 2024 (CEC). Bellwether found $13,127 spent per student in FY2020 across 24 states (41% of students), which implies about $105B nationally.
  - **Assumption (unverified):** related services (speech, OT, PT, psychology, nursing) are 10-15% of that, giving $10-16B. Check against the SEEP study or a current national source.
  - Federal IDEA Part B is $14.2B (FY2023 and FY2024). School-based Medicaid was nearly $4B in 2015 (CBPP) and is likely higher now, but I did not find a current national figure.
  - Sources: https://bellwether.org/publications/who-pays-for-special-education, https://exceptionalchildren.org/blog/federal-budget-signed-education-funding-confirmed-fiscal-year-2024, https://www.cbpp.org/research/health/medicaid-helps-schools-help-children
- **Money flow:** Districts pay salaries or contract rates to staffing firms, teletherapy providers and nonpublic agencies. Funding comes from local, state and IDEA dollars plus Medicaid reimbursement. Billing intermediaries historically took up to 25% contingency fees (CRS).
- **Shock:**
  - On Oct 10, 2025, 415 Education Department employees were laid off, 121 of them in OSERS. A court blocked the layoffs on Oct 15, 2025.
  - On June 16, 2026, the Education Department signed an agreement under which HHS supports OSERS. Statutory IDEA duties are unchanged, and Senate Democrats called the transfers illegal (June 30, 2026 letter).
  - ESSER-funded staff positions ran out of money. I found no direct reporting on contracted-therapist cuts tied to ESSER expiry.
  - **I found no 2025-26 reporting linking Medicaid changes to school billing**, so that shock is not documented here.
  - Sources: https://www.aota.org/advocacy/advocacy-news/2026/new-executive-action-to-move-idea-from-ed-to-hhs-is-a-concern-for-special-education, https://www.disabilityscoop.com/2025/10/16/ed-department-blocked-from-laying-off-special-education-staff/31684/
- **Incumbents:** AMN Healthcare ($3.045M with Cumberland County, NC for 2026-27), CompHealth, TherapyTravelers (Oakland USD vendor), PresenceLearning (1,000+ clinicians, $71.5M VC), Medicaid billing intermediaries. https://www.cityviewnc.com/stories/cumberland-schools-approves-7-3-million-for-special-education-services/
- **Fragility:** About 13,000 districts buying by bid. Contract therapists cost about $50/hr versus about $30 for staff (one district's figure). Medicaid billing varies by state. Federal oversight capacity is shrinking.
- **Funded startups:** Parallel Learning ($20M Series B Dec 2025 led by Valspring; $28.9M total since 2021), PresenceLearning, TeleTeachers, Expressable (direct to families). I found no school-Medicaid-billing startup raise in 2025-26.
- **Crowdedness:** Contested for tele-staffing. Open for the Medicaid-claiming side.
- **Wedge hints:**
  - A clinician network plus Medicaid claiming bundled in states that just expanded school billing. Illinois districts received an extra $23.4M in the second year of expanded billing. Oklahoma is filing a plan amendment. Washington targets summer 2027.
  - Cross-district sharing of scarce clinicians.
  - Interstate licensure compacts for remote clinicians (not verified here).
- **Insider roles:** District special-ed directors, school-based Medicaid coordinators, contract SLPs and OTs, state Medicaid school-health managers, school business officials.
- **Honest scale note:** The documented 2025-26 shock is mostly federal administrative change. The financing pressure is inferred. Treat the shock as moderate.

## 6. K-12 student transportation (hidden giant)

- **Geography:** United States
- **Size:** About $30B per year, derived. NCES Table 236.90 shows $24.3B in 2015-16 (the last row). Escalating for about 10 years of cost growth gives roughly $30B. A 2026 HopSkipDrive job listing also uses $30B, unsourced. Treat as plus or minus 15%.
  - Source: https://nces.ed.gov/programs/digest/d18/tables/dt18_236.90.asp
- **Money flow:** State aid and local dollars pay district-run fleets or contractors (per route or per day), plus ride-network vendors for special-ed, homeless and charter students.
- **Shock:**
  - School bus drivers fell from 223,000 (Aug 2019) to 202,000 (Aug 2025) per EPI.
  - 71% of districts reported an operational consequence from driver shortages in HopSkipDrive's 2026 report (vendor-sponsored). AP-NORC found 80% affected by driver shortages.
  - AASA's May 2026 survey found diesel 6-20% or more over budget (via search summary).
  - Some Texas districts' state allotment covers as little as 12% of costs. Ohio fines districts that do not transport private and charter students.
  - EverDriven's charter partnerships rose 31% from 2024 to 2025.
  - Sources: https://www.businesswire.com/news/home/20260806153272/en/, https://www.schoolbusfleet.com/articles/rising-costs-added-service-reshape-transportation-in-2026
- **Incumbents:** District fleets and big contractors (First Student, Student Transportation of America, National Express are known to me but I did not verify them here), routing software vendors, Zum, HopSkipDrive, EverDriven, Via, GoKid.
- **Fragility:** Fixed-price contracts against diesel and wage inflation. Routing is built for neighborhood schools, not choice. Many districts cannot serve private, charter and ESA students.
- **Funded startups:**
  - Zum: $140M Series E Jan 2024 (GIC); $26.58M and $32M EPA Clean School Bus grants in 2024; $100M TPG Rise Fund investment Apr 16, 2026 at $1.7B valuation; about $333M revenue (2025). Source: https://clay.com/dossier/zum-funding (aggregator; TPG press release not opened).
  - HopSkipDrive: $37M Series D (2022).
  - EverDriven: no 2025-26 equity found, though it reports a 94% surge in new business (Oct 2025 headline).
  - Via: NYC contract of $36M over five years (2019).
- **Crowdedness:** Contested. Zum is large, well funded and growing.
- **Wedge hints:**
  - Cross-district brokerage for charter, ESA and microschool students.
  - Non-bus alternatives where states now allow them (Virginia since June 2025 for rural districts under 4,500 students; nine other states have similar rules).
  - Driver pipeline: CDL P/S endorsement training and retention.
  - Electrification financing.
- **Insider roles:** District transportation directors, contractor general managers, state pupil-transportation directors, routing coordinators, fleet mechanics, special-ed transport coordinators.

## 7. Trucking driver slots being re-sourced after the CDL crackdown (hidden giant; sizing soft)

- **Geography:** United States
- **Size:** $11.4B per year on a stock basis, and I am not confident it is a clean annual flow.
  - FMCSA estimates about 194,000 of roughly 200,000 non-domiciled CDL holders lose eligibility as licenses expire over about five years. Source: https://www.overdriveonline.com/15767991
  - 194,000 slots times the $58,640 median driver wage (BLS OOH, May 2025) is $11.4B of annual payroll that carriers must re-source. BLS counts 2.22M heavy and tractor-trailer jobs and 214,500 annual openings. https://www.bls.gov/ooh/transportation-and-material-moving/heavy-and-tractor-trailer-truck-drivers.htm
  - Because the exits are phased, the flow is closer to $2.3B of wages a year.
  - The addressable vendor layer is smaller. Replacing a driver costs $8,234 to about $13,000 (UGPTI, PDA), so 194,000 times that is $1.6-2.5B one time. A Driver iQ survey claims $10.6B a year in truckload turnover cost, but its date is unknown.
  - **This pool is borderline against the $5B bar.** It is included because the shock is large and specific.
- **Money flow:** Carriers pay drivers, recruiting and onboarding. Students and carriers pay CDL schools (3-6 months). Entry-level training must come from a school listed on the federal registry.
- **Shock:**
  - FMCSA's final rule (reported Feb 2026) limits non-domiciled CDLs to H-2A, H-2B and E-2 categories.
  - More than 28,000 non-domiciled CDLs were already revoked by states.
  - English-proficiency out-of-service enforcement resumed June 25, 2025, with more than 28,000 drivers sidelined.
  - On Aug 31, 2026, DOT ordered 110 truck-driving schools shut, and about 160 more were flagged (counts vary).
  - A July 2026 DOL notice says CDL demand remains steady.
  - Sources: https://www.hklaw.com/en/insights/publications/2026/02/roadblocks-ahead-final-rule-tightens-nondomiciled-cdl-criteria, https://www.ccjdigital.com/regulations/safety-compliance/article/15833851/how-fmcsa-english-proficiency-impacts-trucking-capacity
- **Incumbents:** Carriers' in-house recruiters, Tenstreet (driver recruiting and management software; CB Insights shows it investing in or acquiring DriverReach on 3/31/2025), private and community-college CDL schools.
- **Fragility:** Fragmented schools, 50-94% turnover, and no standard way to verify English proficiency, license status and training-provider eligibility.
- **Funded startups:** YouCruit/Lanefinder ($11.5M, undated), DriverReach ($7.5M, Fulcrum), Drive My Way ($4.4M Series A Oct 2022), Spotter AI (Sentinel hiring and compliance launch Feb 2026), Call2Action.ai ($500K, July 2026). I found none focused on English-proficiency verification.
- **Crowdedness:** Contested. Many small recruiting tools and one dominant stack.
- **Wedge hints:**
  - Driver-qualification file automation covering English-proficiency evidence, CDL status and training-provider checks.
  - Carrier-sponsored CDL academies to replace closed schools.
  - Tuition financing.
- **Insider roles:** Carrier safety and compliance directors, driver recruiters, CDL school owners and instructors, state CDL examiners and third-party skills testers, drug and alcohol program managers.
- **Honest scale note:** Winners here are carriers. A vendor's addressable spend is a low-single-digit-billion layer.

## 8. Craft labor on US data-center construction

- **Geography:** United States (Texas, Virginia, Ohio, Indiana, Louisiana and others)
- **Size:** About $17.7B per year, derived.
  - Data-center construction was $50.7B annualized in April 2026, up about 28% year over year (Census data as reported by AGC/Electrical Marketing). A single later Census-derived figure of $84.95B for Aug 2026 appeared in one source and is unconfirmed.
  - **Assumption (unverified):** labor is about 35% of construction cost, giving $17.7B. A plausible range is $15-23B.
  - ABC puts the 2026 need at about 349,000 net new construction workers.
  - Source: https://www.electricalmarketing.com/economic-data/construction-industry/article/55383786/data-centers-still-sizzling-with-a-287-april-yoy-spending-increase-to-507-billion
- **Money flow:** Hyperscalers and developers pay general contractors, who pay electrical and mechanical subcontractors, who pay union or open-shop craft labor. Hyperscaler philanthropy funds training.
- **Shock:**
  - AI infrastructure capex. Electricians earn double wages on large projects. One Texas builder reported a two-month delay after data centers hired its electricians.
  - BlackRock pledged $100M (Mar 2026), Meta $115M for a workforce academy, and Google about $50M.
  - BLS projects about 81,000 electrician openings a year, and McKinsey says 130,000 more electricians are needed by 2030.
  - Sources: https://fortune.com/2026/03/02/ai-data-centers-electrician-shortage-gen-z-training-careers/, https://fortune.com/2026/03/11/blackrock-skilled-trade-worker-training-investment-100-million-dollars-electricans-plumbers-hvac-technicals-six-figure-salaries-stable-jobs-gen-z-larry-fink
- **Incumbents:** Electrical contractors and GCs, union JATCs (IBEW-NECA), trades staffing firms. I did not verify specific names.
- **Fragility:** Apprentice-to-journeyman ratios and licensing cap supply. Labor sourcing is local and relationship-driven. Travel and per-diem logistics are manual.
- **Funded startups:** Buildforce ($10M Series A, July 2026, led by Saepio; over 2M hours across 2,000+ commercial projects). I searched only once, so there are likely others.
- **Crowdedness:** Contested. One funded marketplace and large philanthropic training programs.
- **Wedge hints:**
  - Travel-crew logistics: housing, per diem, multi-state payroll and license reciprocity.
  - Prefab electrical assemblies, which move labor offsite.
  - Foreman and supervisor upskilling.
  - Labor-capacity forecasting for developers' site selection.
- **Insider roles:** IBEW business managers, NECA contractor project managers, GC labor superintendents, JATC training directors, electrical foremen, data-center developers' construction VPs.
- **Honest note:** A single-cycle boom. The why-now may fade if AI capex slows.

## 9. School food service (federal child-nutrition programs) (hidden giant)

- **Geography:** United States
- **Size:** $28.2B per year in federal cost across four programs (FY2024). NSLP alone was $17.7B, with 4.83B lunches ($16.15B cash plus $1.56B commodities). CRS puts federal child nutrition at about $32B. State, local and student payments are additional.
  - Source: https://www.ers.usda.gov/topics/food-nutrition-assistance/child-nutrition-programs/national-school-lunch-program
- **Money flow:** USDA reimburses per meal and supplies commodities. Student payments add to that. Districts self-operate or hire management companies, which buy from distributors and processors.
- **Shock:**
  - California's AB 1264 was signed Oct 8, 2025. Regulations are due June 1, 2028, district phase-out starts July 1, 2029, and vendors are barred from 2032 (sources conflict, some say 2035).
  - USDA's added-sugar limits began in SY2025-26, with a weekly limit in 2027-28. Sodium cuts were delayed to 2027-28.
  - Whole milk is allowed again in 2026.
  - USDA is writing a new meal-pattern rule to match the updated Dietary Guidelines.
  - **Timing caution:** the ban's operative dates are 2029 or later.
  - Sources: https://www.aalrr.com/newsroom-alerts-4177, https://www.foodsafetynews.com/2025/09/california-law-will-ban-ultra-processed-foods-in-school-meals/
- **Incumbents:** Sodexo, Compass (Chartwells) and Aramark dominate the contracted segment. Cenavera (Nautic investment, about Oct 2025 per URL; date unconfirmed) serves 350+ districts in 33 states. Most districts self-operate.
- **Fragility:** Fixed reimbursement cannot cover scratch-cooking labor. Kitchens are built to reheat. The definition of "ultraprocessed food of concern" does not exist yet.
- **Funded startups:** The Yay Company ($12M Series A Nov 2021; $15.5M total), Ordo (Series A Oct 2022), Revolution Foods (debt Oct 2023). I found no new venture rounds in 2023-2026, and aggregator data may be incomplete.
- **Crowdedness:** Contested, with thin recent venture activity. The barrier is entrenched contractors.
- **Wedge hints:**
  - Shared central kitchens or commissaries across small districts.
  - Ingredient and label compliance data against state definitions.
  - Co-ops for small districts.
  - Scratch-cooking labor models.
- **Insider roles:** District child-nutrition directors, food-service management company general managers, state child-nutrition agency reviewers, school dietitians, K-12 food distributors' reps, commodity processors.
- **Honest note:** The why-now is real but slow, and reimbursement is the binding constraint.

---

## Confidence flags

- Derived sizes (pools 5, 6, 8) rest on stated assumptions. Pool 7 is the weakest.
- Several search summaries came from aggregators or vendor-sponsored reports (HopSkipDrive survey, Clay's Zum page, Signalbase, CB Insights). Each is labeled where used.
- The H-2A ruling's date comes from a page whose own header date conflicts. Confirm against the court order.
- I did not search every named competitor. Absence of a startup in my results is not evidence it does not exist.
