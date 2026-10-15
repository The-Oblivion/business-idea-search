# Round 2 money-pool map: Government, defense and public-sector spend

Written 2026-10-14. Slice: state/local procurement, courts and justice, corrections, benefits administration, federal workforce cuts and outsourcing, European and Asian defense surges, NATO commitments, municipal water and infrastructure, election administration.

Method: about 42 searches and fetches. Many pages (Federal Register, GAO, POGO, Healthcare Finance News) blocked or redirected fetches, so several facts rest on search summaries of secondary sources. Those are flagged "secondary". Numbers I derived myself are flagged "derived". Nothing here is a validated idea; it is a map of where money moves and where it is being disturbed.

## Summary table

| # | Pool | Annual size | Shock (date) | Crowdedness | Hidden giant |
|---|------|-------------|--------------|-------------|--------------|
| 1 | State Medicaid + SNAP eligibility and administration | ~$45B (derived) | H.R.1 work requirements, 6-month redeterminations, SNAP admin cost shift (IFR 2026-06; SNAP shift 2026-10-01) | contested | yes |
| 2 | Rural Health Transformation Program awards to states | $10B | First-year awards to all 50 states (2025-12-29) | contested (inferred) | no |
| 3 | US prison and jail health care | ~$11B+ (state prisons only) | YesCare bankruptcy (2026-05), Wellpath Ch.11 (2024-11, emerged 2025-05) | open | yes |
| 4 | FEMA disaster dollars to state/local governments and the recovery-admin layer | $26.4B DRF (PA+IA ~$7B/yr third-party) | FEMA Review Council final report (2026-05-07) | open (thin evidence) | yes |
| 5 | US drinking-water pipe replacement (incl. lead lines) | ~$21B/yr need | EPA cut lead-line count 9M to ~4M, new funds (2025-11); LCRI 2037 deadline stands | contested | yes |
| 6 | DoD depot maintenance and spares where OEMs hold the data | ~$40.6B depot O&M | Right-to-repair stripped from FY26 NDAA (2025-12), revived in FY27 NDAA (2026-06) | contested | yes |
| 7 | German military infrastructure and barracks | ~$6B (derived, rising) | G-CAP Inland EUR 4.6B signed (2026-08-27); procurement acceleration law (2026-01) | open | yes |
| 8 | European munitions and energetics (SAFE-financed) | ~$30B SAFE envelope/yr | SAFE loans flowing, EDIP energetics call (2026-06) | contested (interceptors crowded, energetics open) | no |
| 9 | Japan/Korea/Taiwan equipment acquisition | ~$30B (derived) | Japan interceptor-drone program (2026-07); Taiwan special budget stalled | crowded, closed to outsiders | no |

Hidden giants (big, boring, rarely looked at by tech founders): pools 1, 3, 4, 5, 6, 7.

---

## Pool 1. State Medicaid + SNAP eligibility and administration

- **Geography:** US. Medicaid work requirements hit the 43 expansion states plus DC. SNAP changes hit all 50 states.
- **Size:** about $45B a year (derived). KFF says Medicaid administration is about 4% of total Medicaid spending; applying 4% to roughly $0.9T of total spending (my assumption, verify against CMS-64) gives about $35B. For SNAP, the USDA impact analysis (cited by CSPI and FRAC) moves about $16.9B of administrative cost from the federal government to states over FY2027-2031 when the federal share falls from 50% to 25%; that implies total SNAP administration of roughly $13B a year (derived).
- **Sources:** https://www.kff.org/medicaid/issue-brief/medicaid-financing-the-basics/ ; https://frac.org/blog/why-the-snap-administrative-cost-shift-threatens-state-budgets-and-program-operations
- **Money flow:** federal match (generally 50% for administration, higher for some eligibility systems) plus state general funds go to state Medicaid and human-services agencies. They pay systems integrators (Deloitte, Conduent, Gainwell, Maximus, Accenture, GDIT, Optum, Acentra, RedMane, Curam/Merative), county eligibility workers, and call-center/mail vendors. Managed-care plans (Centene, Molina, Elevance) pay separately for member outreach (my inference).
- **Shock:**
  - H.R.1 (signed July 2025) requires 80 hours a month of work or similar activity for expansion adults from 2027-01-01, plus six-month renewals.
  - CMS issued the interim final rule on 2026-06-01 (91 FR 33348, published 2026-06-03). States had to send notices by 2026-08-31 and finish system changes by late 2026.
  - CMS projects about 2.3M fewer enrollees in FY2027 and 3.1-3.3M in later years.
  - SNAP: federal administrative share drops to 25% on 2026-10-01 (this month). From FY2028 states with payment error rates above 6% share benefit costs.
  - Source: https://www.federalregister.gov/documents/2026/06/03/2026-11094/medicaid-program-community-engagement-requirement-for-certain-individuals (document number from search; page itself blocked by a bot check, so details come from law-firm and trade summaries).
- **Incumbents and fragility:**
  - Ten vendors pledged about $600M in discounted or free services (Jan 2026), and CMS is offering $200M in "Government Efficiency Grants" plus a free federal toolkit called EMMY (APIs to verify eligibility). That is a free public substitute, which round 1 warned about.
  - Senators Wyden, Warren, Sanders and Warnock wrote to Conduent, Deloitte, GDIT and Gainwell about payment structures and error handling, so incumbents are politically exposed.
  - States estimated $3-10M each to build the work-requirement logic (secondary, Fierce Healthcare). Across 43 states that is only about $0.1-0.4B one-time (derived), so the one-time systems spend is small; the money is in recurring operations.
  - The binding constraint is time: lengthy state procurement against a January 2027 start.
- **Funded startups (2023-2026):** Fortuna Health (a16z, BoxGroup, YC; navigation/enrollment; Gainwell partner, per CB Insights snippet), Develop Health ($14.25M Series A, Aug 2025; benefits verification, adjacent), Argyle (consent-based income data; markets to Medicaid verification), Ocrolus (2018 $4M Series A for Medicaid eligibility, a precedent). Searched: "startup raises funding Medicaid work requirements verification". No 2026 round found for a pure work-requirement verification company. Nonprofit/civic-tech players exist (Nava, Code for America; background knowledge, not checked).
- **Crowdedness:** contested. Ten large integrators plus free federal tooling, few startups.
- **Wedge hints:**
  - Retention services paid per retained member by managed-care plans. Inference: if 2.3-3.3M people lose coverage and an expansion adult's capitation is roughly $7k a year (my assumption), $16-23B of plan revenue is at stake.
  - Data-matching/ex parte feeds (payroll, education, caregiver and medical-frailty exemptions) sold to states or sub-licensed to integrators.
  - Notice, mailing and call-center overflow for counties.
  - SNAP error-rate reduction: states face hard-dollar liability from FY2028.
  - Appeals and fair-hearing support.
- **Insider roles:** state Medicaid eligibility policy directors; county eligibility supervisors; SNAP quality-control reviewers; plan member-engagement/retention executives; integrator program managers (Deloitte, Conduent, Gainwell); benefits legal-aid attorneys; state procurement officers.
- **Path to $100M:** needs many states or a few plans; a per-retained-member model across several plans could get there; per-state systems work cannot.
- **Hidden giant:** yes.

## Pool 2. Rural Health Transformation Program (new federal money to states)

- **Geography:** US, all 50 states.
- **Size:** $10B a year. $50B over five years; first-year awards from $147M (New Jersey) to $281M (Texas), average about $200M. First-year money can be spent through 2027-09-30.
- **Source:** https://comagine.org/article/cms-announces-first-year-funding-rural-health-transformation-program (secondary; CMS announcement dated 2025-12-29 per several outlets).
- **Money flow:** CMS to state agencies (Medicaid agency or health department) to rural hospitals, FQHCs, EMS, universities, technology and telehealth vendors. States must pick from domains including technology and telehealth, health IT and cybersecurity, and behavioral health expansion.
- **Shock:** the program is brand-new money from the 2025 reconciliation law (my background knowledge). Awards 2025-12-29; state procurement windows open roughly Q3 2026 to Q1 2027 (vendor-authored estimate). Idaho, Oregon, South Carolina and Tennessee have posted RFPs or grants; Alaska's portal ran June 2026; New Jersey published a vendor directory 2026-08-05. Colorado and Montana were still waiting on CMS approvals.
- **Incumbents and fragility:** EHR vendors, telehealth companies and consultancies will chase it. State offices of rural health are small and must obligate money fast, so they lean on outsiders. Caveat: it is a five-year program, not a permanent budget line.
- **Funded startups:** none found tied to the program. Searched: "Rural Health Transformation Program vendors startups states contracts". Generic digital-health vendors will all pitch.
- **Crowdedness:** contested (inferred, not evidenced).
- **Wedge hints:** sub-award administration for hundreds of small rural grantees (applications, scoring, payment tracking, outcomes reporting); program-management and CMS reporting tools for tiny state RHT offices; rural EMS staffing and billing; transfer and tele-specialty coordination.
- **Insider roles:** state Offices of Rural Health directors; critical-access-hospital CFOs; state hospital-association executives; Medicaid agency procurement officers; rural EMS chiefs.
- **Hidden giant:** no.

## Pool 3. US prison and jail health care

- **Geography:** US (state prisons, county jails, some federal).
- **Size:** about $11B a year for state prisons alone (derived). Pew reported $8.1B in state prison health spending for FY2015, about a fifth of prison budgets; I grow that about 3% a year. Jails and the federal Bureau of Prisons would add more (not sourced; likely several billion). Maryland alone awarded $1.7B for five years of state-prison care, about $340M a year.
- **Sources:** https://www.pewtrusts.org/research-and-analysis/reports/2017/10/prison-health-care-costs-and-quality ; https://www.thebanner.com/politics-power/state-government/maryland-correctional-medical-centurion-XWLRUO3C4BCALMDHFFYCHK4QZA/
- **Money flow:** state corrections departments and counties pay contractors fixed or capitated prices per facility. Only 14 states still run prison health in-house; 36 outsource at least part (one analysis, unverified).
- **Shock:**
  - Wellpath, the largest private provider, filed Chapter 11 on 2024-11-12 and emerged 2025-05-12 owned by its lenders.
  - YesCare filed for bankruptcy 2026-05-08; Polk County, Florida terminated its contract the same day and brought in CFG Health Systems (sheriff's office notice).
  - Doña Ana County, New Mexico signed a roughly $4.5M emergency contract with Thrive Medical after YesCare missed payroll.
  - Maryland is dropping YesCare for Centurion ($1.7B state prisons, $723M pretrial, five years plus two-year option).
  - Shasta County is moving to Mediko ($25M, three years). Monterey County opened bids. Shelby County, Tennessee reportedly lost Wellpath (single source, unverified).
  - Medicaid reentry waivers (90 days pre-release) are starting; 12 states got CMS planning grants in Jan 2025, Nevada's $5M for an electronic record system that can bill Medicaid.
  - Source: https://infusion.polksheriff.org/news-investigations/2026/05/14/polk-county-sheriff's-office-terminates-health-care-services-agreement-with-jail-medical-services-provider-yescare
- **Incumbents and fragility:** Wellpath, Centurion (Centene-linked, ownership unverified), YesCare/Corizon, NaphCare, regional firms (Mediko, CFG, Thrive). Thin-margin fixed-price contracts, heavy lawsuit liability, debt. Counties repeatedly find themselves with no bidder. The buyers (sheriffs, county boards) are risk-averse and procurement is slow.
- **Funded startups:** none found. Searched "correctional healthcare startup raises funding jail telehealth reentry". Safety Net Connect (eConsult for specialty referrals) announced a correctional-health expansion in July 2025, no round named.
- **Crowdedness:** open (but liability and sales-cycle risk are real).
- **Wedge hints:** off-site specialty and hospital referral management (a major cost driver; unsourced here); Medicaid reentry enrollment and billing infrastructure; pharmacy and formulary management; staffing and in-house program support for counties that fire a vendor; electronic health records plus billing for jails.
- **Insider roles:** jail health administrators; state DOC health services directors; NCCHC accreditors; county risk managers; correctional nurses; civil-rights litigators who sue these contractors.
- **Path to $100M:** needs a share of a $11B+ pool. Medicaid reentry billing across many states is the most scalable angle I see.
- **Hidden giant:** yes.

## Pool 4. FEMA disaster dollars and the recovery-administration layer

- **Geography:** US.
- **Size:** the Disaster Relief Fund was appropriated $26.367B for FY2026. The portion paid to state and local governments as Public Assistance plus Individual Assistance has run about $7B a year for hazard events 2016 to Sept 2026 (third-party tally of OpenFEMA, unverified). The vendor-capturable administrative layer is far smaller (consultant share of grants is not sourced; probably a few percent).
- **Source:** https://www.appropriations.senate.gov/imo/media/doc/fy26_homeland_security_conference_bill_summary.pdf
- **Money flow:** Congress to FEMA DRF to states and localities (reimbursement of recovery projects) to consultants and engineers who prepare documentation and manage grants (ICF, Guidehouse, Tidal Basin, EY among those surfaced).
- **Shock:** FEMA Review Council final report (2026-05-07, nonbinding): raise the per-capita damage threshold from $1.94 to $2.99, require states to spend a minimum on disasters before federal aid, and send money to states within 30 days of declaration. Roughly half of the recommendations need Congress. EY (March 2026) says state and local governments are reporting steep cuts in federal grant capacity, pointing to a "state-centric" model. Source: https://www.nlc.org/article/2026/05/14/fema-review-council-final-report-signals-major-shift-in-federal-disaster-policy/
- **Incumbents and fragility:** consultants earn on documentation-heavy reimbursement work. A direct-funding model would reduce that work but raise the need for state audit and fraud controls. Vermont lost track of millions in FEMA funds under a consultant contract (Grist), so state oversight capacity is weak.
- **Funded startups:** none found with 2023-2026 funding. Veoci (PA paperwork product), Tidal Basin (consulting plus OneCase software). FEMA's own free Grants Portal is a substitute. Searched "disaster recovery grant management software startup funding".
- **Crowdedness:** open, but evidence is thin and the vendor pool may fail the $100M test.
- **Wedge hints:** state-level subrecipient monitoring and audit-readiness; deobligation-risk detection; recovery-fund fraud and oversight analytics sold to state auditors; mitigation grant administration for small counties.
- **Insider roles:** state emergency-management finance chiefs; county emergency managers; FEMA public assistance officers; recovery consultants; state auditors.
- **Hidden giant:** yes. **Caution:** policy change is uncertain and the capturable fee pool is probably under $1B a year.

## Pool 5. US drinking-water pipe replacement (including lead lines)

- **Geography:** US, about 50,000 community water systems.
- **Size:** about $21B a year of need. EPA's 7th Drinking Water Infrastructure Needs Survey puts national need at $625B over 20 years, of which $422.9B is transmission and distribution pipes ($21B a year). That is need, not actual spend.
- **Source:** https://epa.gov/dwsrf/epas-7th-drinking-water-infrastructure-needs-survey-and-assessment
- **Honesty note:** lead lines alone fail the $5B-a-year test. At about 4M lines and roughly $5-12k each, replacement is about $20-48B over a decade (derived), or $2-4B a year.
- **Money flow:** ratepayers, municipal bonds, state revolving funds and federal grants go to utilities, which pay engineers and contractors; pipe, valve and meter makers and distributors sell materials.
- **Shock:** EPA's lead and copper rule improvements require replacing all lead lines by 2037 (10% a year average), with updated inventories due 2027-11-01. On 2025-11-25 EPA cut the estimated lead-line count from about 9M to about 4M and announced $3B in new state revolving fund money plus $1.1B reallocated. NRDC disputes the new count. No 2026 sign of the deadline moving was found. Source: https://www.eenews.net/articles/trump-admin-unleashes-3b-for-lead-pipe-replacements/
- **Incumbents and fragility:** municipal utilities, big engineers (Jacobs, Black & Veatch, Tetra Tech), utility contractors, distributors. Fragmentation is the weakness: most systems are small, with unknown service-line materials and thin engineering staff.
- **Funded startups:** none confirmed in-session. Background knowledge (not verified here): BlueConduit (lead-line prediction), Fracta (pipe-failure AI), SewerAI. Check before relying on them.
- **Crowdedness:** contested for analytics and inventory, open for field execution.
- **Wedge hints:** verifying unknown service-line materials (non-destructive testing); replacement-program management for small systems; contractor capacity (crews, trenchless methods); customer-side line records for the "unknown" category.
- **Insider roles:** utility distribution superintendents; state drinking-water program engineers; utility contractors; asset-management consultants; state revolving fund managers.
- **Hidden giant:** yes.

## Pool 6. DoD depot maintenance and spare parts where OEMs hold the data

- **Geography:** US.
- **Size:** about $40.6B a year for depot maintenance (FY2025 request; FY2024 about $38.9B). Spare-part buying through the Defense Logistics Agency and services is extra and I could not source a total. GAO says operating and support costs are about 70% of a system's lifetime cost.
- **Source:** https://www.everycrsreport.com/reports/IF11466.html (CRS primer on depots).
- **Money flow:** operation and maintenance accounts fund government depots, original equipment manufacturers and DLA. Where DoD lacks technical-data rights it must buy from the OEM or its authorized sources. A 2023 DoD assessment reportedly found about half of 100 fielded systems lacked adequate data rights (secondary).
- **Shock (mixed):**
  - Right-to-repair language was stripped from the final FY2026 NDAA in Dec 2025 after contractor lobbying.
  - A revived version passed the House Armed Services markup on 2026-06-04 and the Senate Armed Services committee, but House floor action is stalled (July 2026).
  - Defense leadership including Secretary Hegseth supports moving data rights to the government.
  - The Marines show the stakes: an antenna mast that cost $10 to build in 10 hours versus up to $5,644 and seven months from the OEM; a $3,040 panel taking eight months through an exchange contract versus a four-hour repair.
  - In February 2026 the department funded a two-year, $1.8M reverse-engineering effort.
  - Source: https://rollcall.com/2026/07/07/contractor-curbs-on-repair-data-causing-marines-significant-issues/
- **Incumbents and fragility:** OEMs and parts specialists (TransDigm was found by the DoD Inspector General to earn at least $20.8M excess profit on 105 parts; it was sole source for 39 of 47 parts reviewed; those audits cover 2017-2019). Fragility is political, not structural: if the statute passes the moat weakens; if not, it persists.
- **Funded startups:** Hadrian ($1.37B Series D at $7.87B valuation, Aug 2026; automated factories for aerospace and defense, including submarine spare parts), Firestorm (reported $82M, aggregator-sourced, unverified), Radian Forge ($2.5M seed, large-format metal printing), Velo3D (public; $32.6M DIU award). Parts Life (small, last raised $970K in 2020). Searched startup raises for spare parts and reverse engineering.
- **Crowdedness:** crowded on manufacturing, open on data/qualification layers.
- **Wedge hints (not manufacturing):** auditing restrictive data-rights markings; rebuilding technical data packages and qualifying alternate sources; a source-approval and first-article qualification workflow for small shops; price-reasonableness analysis for sole-source commercial-item parts, sold to buyers and price analysts.
- **Insider roles:** depot industrial engineers; DLA item managers; DCMA price analysts; program-office product-support managers; DoD IG auditors; small machine-shop owners on DLA bids; contract attorneys who handle data-rights challenges.
- **Path to $100M:** a software or services layer selling across many programs would need hundreds of program-office or depot customers. Unclear.
- **Hidden giant:** yes.

## Pool 7. German military infrastructure and barracks (Bundeswehr)

- **Geography:** Germany, with extension to Poland and the Baltics.
- **Size:** about $6B a year (derived, rising). TÜV Consulting (citing internal estimates) puts the renovation need above EUR 50B through 2031; project and construction volume for 2025 was EUR 1.7B with 10-20% annual growth targeted (June 2025 infrastructure report, via Heidelberg24); more than EUR 20B of the special fund is earmarked for infrastructure; the new G-CAP Inland program is EUR 4.6B over a 48-month framework (about EUR 1.15B a year). I could not retrieve the Einzelplan 14 infrastructure line, so this is an estimate (+/- 40%).
- **Source:** https://consulting.tuv.com/aktuelles/verteidigung/wie-ist-der-zustand-der-bundeswehr-infrastruktur
- **Money flow:** federal defense budget (Germany plans over EUR 108B for security and defense in 2026 and 3.5% of GDP on core defense by 2029) goes to the Bundeswehr construction agency and state construction administrations (BLB NRW ran the G-CAP tender), then to regional general contractors and subcontractors.
- **Shock:**
  - NATO's June 2025 Hague pledge: 3.5% core plus 1.5% broader security spending by 2035.
  - The Bundeswehr planning and procurement acceleration act passed the Bundestag 2026-01-15; it runs to 2035, covers all Bundeswehr needs, and removes the stop-work period after award challenges.
  - G-CAP Inland Stage 1 signed 2026-08-27 at the Hardthöhe: about 300 buildings at about 130 sites, over 54,000 beds, seven contractors in regional lots, first call-offs in September 2026, first 14 buildings by mid-2027. A separate container program is about EUR 900M (Correctiv).
  - Source: https://www.bundeswehr.de/de/organisation/infrastruktur-umweltschutz-und-dienstleistungen/unterkunft/bauprogramm-g-cap-inland-stufe-1-startet-6147694
- **Incumbents and fragility:** understaffed public construction offices (average of eight years from planning to completion, per TÜV), then large contractors and modular builders (Wolff & Müller/OBG/Lechner consortium, Adapteo, Rheinmetall's EUR 250M modular camp in Lithuania). The bottleneck is capacity, not money: EUR 1.7B executed against a EUR 50B+ backlog.
- **Funded startups:** none venture-scale found. Quickblock (Scotland, about GBP 940k), KT-Shelter (acquired by W5 Solutions for EUR 22M, Mar 2026). Searched modular military base startups.
- **Crowdedness:** open for startups; heavy incumbents among contractors.
- **Wedge hints:** prefabricated components and subcontract capacity for the G-CAP lots; building-condition surveys for roughly 1,500 properties; digital project controls and handover for the seven contractors; cleared trades labor; replicating the model in Poland and the Baltics.
- **Barriers:** security clearances, German procurement law, language, local presence. Hard for a US-based teenager without a German partner.
- **Insider roles:** Bundeswehr construction project managers; base commanders; state construction administrators; procurement-law attorneys; site managers at serial-construction firms.
- **Hidden giant:** yes.

## Pool 8. European munitions and energetics (SAFE-financed)

- **Geography:** EU and UK.
- **Size:** about $30B a year as the annualized SAFE loan envelope (EUR 150B over about five years, all categories; ammunition, missiles and artillery are priority categories but the share is not sourced). A narrower derivation: the 2025 goal of 2M artillery shells times an assumed EUR 3-5k each is EUR 6-10B a year (derived).
- **Source:** https://www.consilium.europa.eu/en/policies/safe/
- **Money flow:** EU loans to member governments (Lithuania received EUR 956M, 15% pre-financing of a EUR 6.375B loan) go to joint purchases from European producers (Rheinmetall, Nammo, Eurenco, Explosia, Synthesia, MSM Walsrode, Nitro-Chem). Germany reportedly did not apply (third-party tracker).
- **Shock:** the EU's first energetic-components call under the defense industry programme closed 2026-06-16 with 83 proposals, over EUR 165M of EU money and up to EUR 470M total investment, results due September 2026. Source: https://defence-industry-space.ec.europa.eu/first-edip-call-closes-and-receives-high-number-proposals-2026-06-17_en
  - Bottlenecks are powder, TNT and nitrocellulose. Explosia called its propellant expansion a three-year project; Nitro-Chem's TNT doubling takes three to four years; one investigation estimated EU 155mm capacity near 580,000 shells a year against a 2M goal.
  - Rheinmetall is investing EUR 650M in propellant; Eurenco signed a EUR 300M loan in Feb 2026.
- **Incumbents and fragility:** capital-heavy, licensed, slow to expand. They cannot respond quickly, but a small team also cannot enter chemicals or explosives manufacturing.
- **Funded startups:** Cambridge Aerospace ($300M Series C at $3.4B, Aug 2026; $200M Series B, Apr 2026), Frankenburg Technologies (EUR 30M Series A, Feb 2026; plans solid rocket motors). Both are interceptors. No European energetics startup found. Searched "energetics propellant explosives startup raises".
- **Crowdedness:** crowded in interceptors and drones; open in energetics, but capital-intensive.
- **Wedge hints:** sub-tier parts (shell bodies, cartridge cases, fuzes); load-assemble-pack capacity; energetics process analytics and qualification testing; cellulose feedstock supply; plant permitting and engineering services.
- **Insider roles:** plant managers at propellant makers; ordnance engineers; NATO support agency stockpile planners; defense-ministry procurement officers; explosives-safety regulators.
- **Hidden giant:** no (the energetics sub-tier is semi-hidden).

## Pool 9. Japan, South Korea and Taiwan equipment acquisition

- **Geography:** Japan, South Korea, Taiwan (global pool, over $15B).
- **Size:** about $30B a year (derived). Japan's FY2026 defense budget is about 9.04T yen (about $58B, cabinet-approved draft). South Korea's 2026 defense budget is 66.3T won (about $46B) with acquisition near 30% (about $14B). Taiwan's special budget is NT$1.25T (about $40B) over 2026-2033, about $5B a year if passed. I assumed about $10B of Japanese equipment spending without a source.
- **Sources:** https://english.adnkronos.com/2025/12/26/japan-sets-record-fy-2026-defense-budget-eyeing-china-n-korea/ ; https://aa.com.tr/en/asia-pacific/south-koreas-president-unveils-record-budget-for-2026/3734367 ; https://www.globalsecurity.org/wmd/library/news/taiwan/2025/taiwan-251126-cna03.htm
- **Money flow:** defense ministries to domestic primes and, increasingly, drone startups. Japan's SHIELD coastal drone system has about 100.1B yen in FY2026.
- **Shock:** Japan's procurement agency received 38 bids for interceptor drones; Terra Drone was selected in July 2026 as a test system; Quantum Systems (Germany) is helping evaluate. Taiwan's legislature was deadlocked as of April 2026 (opposition proposed NT$380-400B). Source: https://thedefensepost.com/2026/07/20/japan-quantum-drone-killers/
- **Incumbents and fragility:** Mitsubishi Heavy and other national champions; local-content and security rules protect them.
- **Funded startups:** Terra Drone, Eams Robotics, Quantum Systems; no round sizes found.
- **Crowdedness:** crowded and closed to outside founders.
- **Wedge hints:** none practical for a US-based small team; suppliers to local primes at best.
- **Insider roles:** defense-ministry acquisition officers; prime-contractor program managers; local drone-startup founders.
- **Hidden giant:** no. Included for completeness.

---

## Considered and not selected

- **Election administration:** local election spending is around $2B a year by an MIT estimate, with a $1.5-5B range in testimony and $4-6B in a normal year including states (secondary, via EAC). That is at or below the $5B bar, fragmented across thousands of counties, and federal election-security support was cut in 2025. Not a pool.
- **State DOT construction engineering and inspection:** the IIJA's authorities expire 2026-09-30; a stopgap extension reportedly became law on 2026-09-02 but does not extend advance appropriations (NACo, unverified). FHWA reports $100.8B of state capital outlay in 2023, but I could not find the consultant share; one state's engineering line was only about 2% of construction, so the pool may be $2-10B. Size unverified, so dropped.
- **Federal workforce cuts driving outsourcing:** the evidence points the other way. Booz Allen's civil business fell as much as 20-28%, Treasury canceled all 31 of its Booz Allen contracts, and some agencies rehired staff (NPR, Oct 2025). The GSA OneGov program negotiates directly with software makers; resellers remain but discounts expire. No evidence of a wave of work moving to contractors. Not a pool.
- **Courts and public defense:** the payer (public defenders and court budgets) is budget-starved, which is round 1's wrong-payer failure. Not researched in depth.

## Caveats and things to verify

- The Federal Register rule, GAO, POGO and several trade pages were blocked, so rule details and some DoD figures come from search summaries.
- A "$20 billion annual technology figure" attributed to the CMS administrator appeared in one article; I could not verify it and did not use it.
- Wellpath's revenue ($2.7B per an advocacy blog) and the "$6B private market" figure are unverified and not used.
- Startup lists come from what search surfaced; Crunchbase was not queried directly. Absence of a named startup is weak evidence of an open field.
- The Pool 6 right-to-repair shock may not become law; the Pool 4 FEMA shock is a nonbinding recommendation.
