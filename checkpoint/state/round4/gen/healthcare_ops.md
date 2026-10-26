# Round 4 / Lens: owner-operated Florida healthcare services (home health, hospice, pharmacy, DME, clinics, staffing)

Written 2026-10-26. Ranked best first. All market facts below came from ~35 web searches this session; items marked (unverified) are search-snippet claims or my own recollection.

## Read this first: what the research changed

1. **The "AI chart auditor" wedge is taken.** Brellium (AI audit of 100% of notes pre-bill, with a clawback guarantee) raised $16.7M in 2025 and $23M on 2026-10-14. Named customers include Gentiva and Maxim. Do not build a generic documentation auditor.
2. **Other taken wedges.**
   - AI OASIS and coding: SimiTree SARA, Olli, MedLearn.
   - Ambient visit notes: WellSky Scribe, Nestmed (at VNS Health), Andy AI, Roger.
   - Scheduling and call-out filling: Zingage ($12.5M seed from Bessemer, 400+ agencies).
   - AI caregiver recruiting: Carefam ($14.5M), MochaCare, Abby Care ($82M Series C on 2026-10-19).
   - Prior-auth automation for home health and hospice: Claim Health.
3. **Unusual shock: a federal enrollment freeze.** CMS imposed a nationwide moratorium on new Medicare enrollment of home health agencies (and, per Mintz and JD Supra, hospices) on 2026-05-13, for six months and renewable. The first term ends around 2026-11-13. Existing agencies are untouched; new entrants are blocked; a majority ownership change inside the 36-month window needs re-enrollment and is therefore blocked. Cashflow and compliance for incumbents, and the value of certified agencies, now matter more.
4. **Margins are being squeezed.** The CY2027 proposed rule gives a 2.4% aggregate update but keeps a 3% temporary cut to recoup an alleged $4.9B overpayment (one expert says about 10 years). MedPAC wants another 7% cut. It also proposes expanded ownership disclosure and revocation with a 10-year re-enrollment bar that can hit the company's other provider numbers.
5. **Florida is the Medicare Advantage state.** About 60% of Florida Medicare beneficiaries are in MA (about 3.1M of 5.2M, per CoveredUSA). Florida has the most 2027 plan discontinuations in the country (offerings 611 to 560; about 81k South Florida members in plans that end or merge). Agencies face re-contracting with no market-rate information.
6. **MHC type matters.** Ideas 1, 2 and 7 survive almost any owner-operated healthcare company, because they rest on contracts, remits and receivables. Ideas 3, 4, 5, 6 and 8 assume MHC is a Medicare-certified home health or hospice operator (the "MHC Area N, LLC" listings suggest several home health agencies). My search could not confirm what MHC is. Confirming that is the very first task: ask his mother.

## Ranking logic

Ranked on (a) whether the family company can be a real first customer in 60 to 90 days, (b) whether the payer already has a budget line, (c) whether anyone already does it, and (d) whether it can credibly pass $10M a year without turning into a boutique.

---

## 1. MA Rate Truth: Medicare Advantage contract repricing plus a peer rate benchmark for post-acute providers

**One-liner:** Reprice every Medicare Advantage payment an agency receives against its contract (the same engine as his freight audit), then show owners where their MA rates rank against peers.

**Customer / who pays**
- Customer: the owner, CEO or MA-contracting lead of a Florida home health agency or hospice, then SNFs, therapy groups, DME suppliers and clinics.
- Payer and signer: the owner or CFO.
- Two budget lines. First, recovered underpayments (20 to 25% contingency, nothing upfront). Second, MA contract negotiation: a flat $2,500 diagnostic, then $12k to $24k a year for the benchmark.

**Problem**
- An 835 remit shows what a plan paid, not what the contract said it owed. Contract rate versions change, and each agency sees only its own contracts.
- MA pays well below fee-for-service per visit (a MedPAC official said so, 2019), and MA was reported to be 15% of the average agency's revenue (MedPAC, older). Florida is far above average.
- Florida plans are exiting or merging for 2027. Owners have to re-contract with no benchmark. No public dataset of negotiated MA home health rates exists. The NAHC/HHFMA MA survey results are not public.

**Solution**
1. **Monday:** ask MHC for 12 months of 835/ERA files and the MA rate exhibits for its top 3 plans, under a BAA, with minimum-necessary fields.
2. Use Claude to parse each contract into structured terms: percent of PDGM base, per-visit and LUPA rates, auth rules, timely filing, sequestration, add-ons.
3. Reprice every remit line deterministically (reuse the freight-audit rating engine), producing a variance list with the contract citation and a dispute-letter pack.
4. Then add an opt-in co-op that shows each member their percent-of-Medicare by payer against the peer median.

**Why now**
- Florida has the most 2027 MA plan discontinuations in the country.
- The 3% temporary Medicare cut and the proposed 7% MedPAC cut mean every agency is hunting for MA margin.
- Both CMS-0057-F decision-time rules and the January 2027 payer API deadline push payers to reorganize their provider operations.

**Founder edge**
- This is the freight-audit playbook (flat diagnostic plus contingency, repricing invoices against a contract tariff) transplanted onto remits and contracts. He has already built the service and has not yet sold it.
- His blind-test habit gives him a credibility artifact: "found $X in 90 days at MHC, verified by their billing lead."
- The family company supplies real contracts and remits. His mentor can teach contingency-audit selling.

**First 10 customers**
- Customer 1 is MHC (three or more LLCs means three or more MA contract sets).
- Customers 2 to 5: the grandfather's peer owners. Offer a free "MA contract X-ray" on one payer, in exchange for contributing anonymized rate percentages to the benchmark.
- Customers 6 to 10: healthcare CPAs and billing companies that serve Florida agencies. Offer them white-label audits in exchange for a rev share.
- Contingency means a yes costs the buyer nothing.

**Cost to first revenue:** about $4,000 (healthcare and antitrust counsel review of the data-sharing design about $2,500; BAA templates, HIPAA-eligible hosting, model API and cyber/E&O insurance about $1,500).

**Path to big and biggest risks**
- **Size.** Roughly 12,234 Medicare-certified agencies (MedPAC 2024) plus hospices and SNFs. At an average $15k to $25k a year (subscription plus recoveries), 500 customers is $7.5M to $12.5M. $100M needs about 4,000 customers or a second layer.
- **Second layer.** The data becomes the post-acute MA rate standard, sold to PE buyers (diligence), lenders, plans' network teams and other provider types (the Turquoise-style hospital model).
- **Risk 1.** MA provider contracts often carry confidentiality clauses. Design so owners enter percent-of-Medicare figures they control, not documents, and have counsel confirm. (I did not verify the clause language.)
- **Risk 2.** Antitrust: the 1996 DOJ/FTC health care safety zones were withdrawn in 2023, so the benchmark needs a counsel-approved design (third-party aggregation, aged data, minimum contributors).
- **Risk 3.** Per-agency recoveries may be modest; if recoveries stay under about $15k a year, the audit alone is a boutique.

**Who does it today**
- Remit-versus-contract underpayment tools exist for hospitals and physician practices (Lido, Rivet Health, RecoveAR; vendor pages).
- I found no post-acute-specific one. Axxess plus Texas Capital only matches payments. Healthware offers billing. REVA on Microsoft Marketplace is generic.
- Hospital rate-transparency firms (Turquoise Health, Serif; not searched) show the data model works but cover hospitals, not home health.
- Competing inside an agency: the agency's own biller, and RCM firms such as SimiTree.

---

## 2. StuckCash: the order-to-cash desk for home health and hospice

**One-liner:** Show an agency, in dollars, which claims are blocked and by whom (unsigned certifications, missing F2F, RCD holds, ADRs, MA auths), and run the chase automatically.

**Customer / who pays**
- Customer: administrator, CFO or billing manager of a Medicare-certified agency or hospice.
- Payer and signer: the owner.
- Budget lines: billing staff payroll (outsourced billing is commonly 3 to 6% of collections; unverified) and the cost of working capital. A flat $1.5k to $4k a month, with a first-60-days "cash release" guarantee.

**Problem**
- Final Medicare claims cannot be billed until the physician-signed certification and plan of care are in. One unsigned order can hold a period's payment (Enzo glossary). Billing without signatures creates overpayment liability.
- Florida is in the Review Choice Demonstration (extended 5 years from June 2024). Pre-claim review affirmations fell nationally from 96.2% to 85.5% (FY22 to FY23, LeadingAge). The 90% affirmation threshold decides whether an agency gets lighter review.
- Staff chase by fax. No one ranks blocked dollars by cause.

**Solution**
1. Start with read-only report exports from the agency's EHR (HCHB, Axxess, WellSky), with no integration.
2. A daily "stuck cash" worklist, ranked by dollars blocked, root cause and age.
3. Automated chase: e-sign links, fax and a voice agent to physician offices.
4. At referral, verify the certifying physician is enrolled (CMS ordering/referring file) and that the face-to-face is valid, so claims don't deny later.
5. Later, size a working-capital facility from the same data (partnering with lenders such as Alleon; note that Medicare receivables cannot be assigned, so the lender structure matters).

**Why now**
- A 3% temporary cut and a possible further 7% cut leave no margin to waste on slow cash.
- The moratorium removes new competitors, so cash discipline is the main lever left.
- The RCD affirmation requirement is live in Florida.

**Founder edge**
- Same instinct as the freight audit ("money stuck in paperwork"), and he writes browser and portal agents fast.
- MHC's mother can show a real aging report and the real chase process on day one.
- The family company is a natural pilot with real stakes.

**First 10 customers**
- Customer 1 is MHC (run in shadow mode for 30 days first).
- Customers 2 to 5: peer agencies via the grandfather. Offer a free 90-day "stuck cash X-ray" built from the aging report alone.
- Customers 6 to 10: the state trade association's members and conferences (the Florida Hospices and Palliative Care Association runs documentation webinars; names to confirm). Then EHR user groups.

**Cost to first revenue:** about $3,000 (BAA and counsel review, fax/e-sign/voice APIs, hosting, insurance).

**Path to big and biggest risks**
- **Size.** Roughly 12,234 agencies plus hospices. $30k a year times 350 customers is about $10.5M. $100M needs about 3,300 customers, or the financing layer.
- **Financing layer.** Receivables lending against agency cashflow, with the data as the underwriting edge. This is capital-intensive and must be built through partner lenders first.
- **Risk 1.** The EHR vendors (Axxess, HCHB/Trella, WellSky) will bolt on similar order management. If an EHR export is blocked, data access is a wall.
- **Risk 2.** A voice agent calling physicians raises HIPAA and TCPA questions.

**Who does it today**
- EHR order modules and staff (Axxess lets agencies mark orders as not needing a signature, which stops false chases).
- Parachute Health: e-ordering for home medical equipment.
- Claim Health: authorization automation for home health and hospice.
- Brellium: documentation compliance, not cash.
- Generic voice-AI vendors such as Simbo.
- No startup found that combines blocked-dollar ranking with an automated chase for home health.

---

## 3. Certified Agency Exchange: moratorium-era diligence and matching for Medicare-certified agencies

**One-liner:** With new agencies frozen out of Medicare, the only way in is to buy a certified one; sell buyers a data-driven "Medicare agency X-ray" first, and a marketplace later.

**Customer / who pays**
- Customers: buyers (regional operators, PE-backed platforms, clinician-owners locked out by the freeze) and the brokers and attorneys who serve them.
- Payer: the buyer or broker. $5k to $15k per diligence report; later a success fee if counsel clears the licensing question.
- Signer: the buyer's corp-dev lead or the owner.

**Problem**
- The freeze blocks new enrollment, including branches. A majority ownership change inside the 36-month window needs re-enrollment and is blocked.
- Buyers evaluating a Medicare-certified agency (BizQuest lists one in Tampa Bay "with 12 MA contracts") get broker marketing, not independent risk data.
- Valuations are high: Kinderhook-Enhabit implies about 10.7x on $103.1M EBITDA; broker guides say 6 to 12x.

**Solution**
- Build the agency X-ray from public data: CMS Care Compare, claims utilization, enrollment dates (to compute the 36-month clock), OIG exclusions, AHCA licensing and survey history (healthfinder.fl.gov), referral concentration.
- Then use AI to read the seller's data room: cost reports, remits, MA contracts and assignability, aging.
- Output: red flags, a valuation range, and a closing checklist.

**Why now**
- The freeze took effect 2026-05-13 and lapses around 2026-11-13 unless CMS renews it.
- The CY2027 proposed rule adds a 10-year revocation bar that makes inherited enrollment errors an acquirer's problem.

**Founder edge**
- The grandfather is an owner who knows the peer owners and brokers.
- His mentor rolled up an AV integrator and teaches entrepreneurship, which is real M&A credibility.
- Family investment connections reach the buyers.

**First 10 customers**
- Cold-email brokers listing certified agencies on BizQuest and BizBuySell with a free sample X-ray built from public data on their own listing.
- The mentor and family introduce 2 or 3 healthcare M&A attorneys who need cheap first-pass screening. Customers 6 to 10 are buyers they refer.

**Cost to first revenue:** about $2,500.

**Path to big and biggest risks**
- **Size.** Roughly 12,234 agencies. If 5% change hands a year at an average enterprise value of $5M and a 2% fee, that is about $30M a year of fee pool. $10M needs about a third of that, which is heroic.
- **Risk 1 (kill risk).** If CMS lets the freeze lapse in November, the scarcity premium fades and the why-now is used up. Check the Federal Register about 2026-11-13 before building.
- **Risk 2.** Success fees may trigger broker or securities rules; sell diligence reports only until counsel says otherwise.
- **Risk 3.** Credibility: M&A buyers do not hire an 18-year-old, so white-label through a CPA or attorney.

**Who does it today**
- Brokers and M&A advisers (adastraequity valuation guides; listing sites BizQuest, BizBuySell).
- Definitive Healthcare and Trella Health sell market data.
- No AI diligence product for home health or hospice found.

---

## 4. Storm Desk: continuity-of-care outreach for power-dependent and homebound patients

**One-liner:** Before landfall, text and call every homebound patient by acuity and zone, confirm shelter and evacuation plans, and after landfall tell the agency whom to visit first, with audit-ready proof.

**Customer / who pays**
- Customer: agency administrators and DONs, hospices, home oxygen and DME suppliers, assisted living facilities. Later: county emergency management, utilities and MA plans.
- Payer: the operating budget. The Medicare home health emergency preparedness requirements (42 CFR 484.102; my recollection, to verify) mandate a plan, patient-specific risk assessment and testing.
- Price: about $25 to $40 per patient on census per year, so $8k to $16k for a 400-patient agency.

**Problem**
- Florida counties must keep a special-needs registry (F.S. 252.355), but registration is voluntary and renews yearly.
- After Hurricane Irma, tens of thousands of elderly Floridians relied on power-dependent equipment. Hillsborough County's own registry (about 2,800) was far smaller than the federal emPOWER count.
- Agencies handle outreach by hand, one patient at a time.

**Solution**
- Pull the census and acuity from the EHR export.
- Run an AI voice and text cadence (72, 48 and 24 hours) with a short triage script, escalate to a human, and update the county registry.
- Produce a post-storm re-establishment-of-care queue and a surveyor-ready log.

**Why now**
- The 2024 hurricanes (Helene, Milton) made this real.
- Florida's current enforcement and policy attention is on providers.
- The off-season (December to May) is the time to sell and build. Hurricane season starts 2027-06-01.

**Founder edge**
- Voice and text agents are what he ships fastest.
- The family company is a real Florida pilot with a real census.
- He can finish before the season starts.

**First 10 customers**
- MHC's agencies; oxygen and DME suppliers they know; ALFs; sold in January to April 2027 as annual contracts before the season.

**Cost to first revenue:** about $4,500 (voice and SMS APIs, HIPAA hosting, counsel on consent and TCPA, insurance).

**Path to big and biggest risks**
- **Size.** Agency price points are low. A big outcome needs the second payer: utilities with medical-priority obligations, counties, and MA plans protecting at-risk members, across hurricane, wildfire and grid-outage states. That is unproven.
- **Risk 1.** Revenue is seasonal.
- **Risk 2.** Outbound calls to patients raise TCPA and HIPAA questions.
- **Risk 3.** One serious error in a real storm is an existential liability.

**Who does it today**
- Mass-notification vendors for hospitals and governments (Everbridge, Rave, Juvare; not searched).
- Federal emPOWER data for officials.
- County voluntary registries.
- The search found no agency-level outreach product.

---

## 5. Referral Radar: referral-source intelligence for agencies that can no longer be out-competed by new entrants

**One-liner:** Weekly ranked list of physicians and facilities worth a liaison visit, built from CMS public data and the agency's own referral-to-revenue history, with AI-written visit briefs.

**Customer / who pays**
- Customer: owner or VP of business development at an independent agency or small chain.
- Payer: the marketing and liaison budget (liaisons cost an estimated $60k to $100k each; unverified).
- Price: $500 to $1,500 a month.

**Problem**
- Growth equals share capture, because the freeze blocks entrants and the market is not growing outside California.
- Definitive Healthcare is priced for enterprises, and smaller agencies guess.
- MA plans shifting PPO to HMO in 2027 change who can refer to whom.

**Solution**
- Ingest CMS public files (physician utilization, home health provider data) plus the agency's referral and admission history by source and payer.
- Rank by expected admissions and margin (MA versus FFS).
- Auto-brief the liaison before each visit and track follow-up.

**Why now:** the freeze, the margin squeeze, and the 2027 MA network changes.

**Founder edge:** he builds data products fast, and MHC's referral data is a real test set.

**First 10 customers:** MHC; the grandfather's peer owners; a free "who refers to my competitor" report as the hook.

**Cost to first revenue:** about $1,500.

**Path to big and biggest risks**
- **Size.** About 12,234 agencies at $12k is about $147M ceiling, plus hospices and DME.
- **Risk 1.** Definitive Healthcare (public company) and Trella Health (Homecare Homebase's analytics arm, with the Excel Health referral data partnership) already sell this. The independent-chain price point is the only gap.
- **Risk 2.** It is the least AI-native and most replicable idea here.

**Who does it today:** Definitive Healthcare, Trella Health/Homecare Homebase with Excel Health, and EHR referral modules.

---

## 6. Enrollment Sentinel: continuous Medicare enrollment and ownership compliance monitor

**One-liner:** Keep a multi-entity operator out of a 10-year revocation bar by tracking every ownership, managing-employee and licence change deadline and screening every person monthly.

**Customer / who pays**
- Customer: owners of multi-entity agencies, hospices and DME suppliers (MHC has at least several LLCs).
- Payer: compliance budget and outside counsel, which bills hundreds of dollars an hour.
- Price: $3k to $6k a year per organization.

**Problem**
- The CY2027 proposed rule expands disclosure, makes enrollment errors easier to revoke, and bars re-enrollment for 10 years, with knock-on effects on the company's other provider numbers.
- The 36-month rule and the freeze make an error uncurable.
- Multi-LLC owners track this in spreadsheets.

**Solution**
- Build an ownership and managing-employee register across entities.
- Calendar the 30-day and 90-day change-reporting deadlines, revalidation dates, licence and accreditation expiry.
- Run monthly exclusion screening across OIG, SAM and Florida Medicaid.
- Compare the CMS 855 on file with the real org chart.

**Why now:** the final CY2027 rule is expected within weeks; the freeze; the 10-year bar.

**Founder edge:** the family company is a multi-entity operator, so it is a live test. Low build effort.

**First 10 customers:** MHC; peer multi-entity owners; healthcare attorneys who want to resell a monitor.

**Cost to first revenue:** about $2,500.

**Path to big and biggest risks**
- **Size.** About 12k agencies plus hospices and 10k+ DME suppliers at about $4k is a plausible $100M ceiling, but small budgets.
- **Risk 1.** Exclusion screening is a commodity (credentialing vendors such as Verisys and Streamline Verify; I did not search them).
- **Risk 2.** Honest rating: this one risks the "tiny boutique" failure mode. It only works if it becomes the compliance operating system for every Medicare-enrolled organization.

**Who does it today:** exclusion and credentialing vendors, healthcare attorneys and consultants, and EHR vendors' moratorium explainers (Axxess ebook).

---

## 7. PBM Contract Reader: underwater-claim alarm and audit shield for independent pharmacies

**One-liner:** Read the PBM provider manuals, network change notices and MAC lists with an AI, flag every claim that pays below acquisition cost, and generate the appeal.

**Customer / who pays**
- Customer: owner-pharmacist of an independent or small-chain pharmacy, including long-term-care, specialty and infusion pharmacies.
- Payer: the owner. $199 to $499 a month plus 20% of recovered appeals.

**Problem**
- Major PBMs have set specialty-network pricing below acquisition cost for many pharmacies (Frier Levitt alert). "Cost-plus" networks may become "cost-minus."
- Pharmacies close faster.
- Florida's AG opened a civil investigative demand against CVS Caremark in June 2026 and sued Express Scripts and Prime Therapeutics in August 2026. Federal PBM reform was signed 2026-02-03 but most of it takes effect in 2028.

**Solution**
- Per-claim underwater detection against the pharmacy's actual invoice cost.
- A contract and manual reader that quantifies the profit impact of each change notice and the audit risk.
- Appeal packets.
- Later, an opt-in claims data pool for litigation support, with counsel (de-identified, HIPAA reviewed).

**Why now:** the Florida AG actions, the 2026 federal law, and rising closures.

**Founder edge:** long-document reading and repricing are what he builds. Applies only if MHC owns or knows a pharmacy.

**First 10 customers:** through the family or MHC pharmacy contacts; state pharmacy association; PSAOs.

**Cost to first revenue:** about $3,000.

**Path to big and biggest risks**
- **Size.** About 19,000 independent pharmacies (my recollection, unverified) at $1.2k to $6k a year is $23M to $115M.
- **Risk 1.** Crowded: Pharmacy Marketplace sells underwater-claim recovery as a feature, PharmaPulse is $99 a month, Tideline RCM is a 2025 startup, and Frier Levitt sells legal services.
- **Risk 2.** Federal reform may fix some of the problem by 2028.
- **Risk 3.** Weak family fit unless MHC has a pharmacy.

**Who does it today:** Pharmacy Marketplace, PharmaPulse, Tideline RCM, PSAOs, and law firms such as Frier Levitt.

---

## 8. Care Bench: a Gen Z pre-health workforce channel for home health aides and hospice volunteers

**One-liner:** Recruit, screen and train college pre-health students into per-visit aide roles and hospice volunteers, and prove the hours.

**Customer / who pays**
- Customer: administrator or volunteer coordinator at a home health agency or hospice.
- Payer: recruiting and volunteer-coordinator budget.
- Price: $500 to $1,500 per placed aide, or $300 to $600 a month for a hospice volunteer program with hours tracking.

**Problem**
- Hospices must have volunteers provide at least 5% of patient-care hours, and over-counting hours is an audit risk.
- Pre-health students want clinical hours, and there are listings but no organized pipeline.
- Aide turnover and shortages block growth.

**Solution**
- A Gen Z-facing funnel (short video, campus partners).
- An AI screener, document and background-screen checks, and a placement or volunteer scheduler.
- Eligible-hour logging mapped to what CMS counts.

**Why now:** the freeze makes labor the main way incumbents grow, and workforce funding is flowing into the sector (Abby Care $82M).

**Founder edge:** this is where his Gen Z network actually helps, and the family company can host the first cohort.

**First 10 customers:** MHC; local hospices; a few Florida campuses.

**Cost to first revenue:** about $5,000.

**Path to big and biggest risks**
- **Size.** Weak by itself. It scales only if it becomes a national pre-health clinical experience marketplace.
- **Risk 1.** Crowded supply side (Carefam, MochaCare, Abby Care, Papa).
- **Risk 2.** Employment agency or staffing rules in Florida (to check); students under 18 are excluded; the guardrails apply.

**Who does it today:** Carefam, MochaCare, Abby Care, Papa (not searched), volunteer-management modules in hospice EHRs, and campus pre-health programs.

---

## Sources (key ones)

- Brellium $23M (Oct 2026): https://hlth.com/insights/news/brellium-raises-23-million-and-launches-cortexlm-to-strengthen-clinical-compliance-and-revenue-protection
- CMS nationwide HHA moratorium: https://www.gtlaw.com/ar/insights/2026/5/cms-announces-nationwide-moratoria-on-medicare-enrollment-of-home-health-agencies and https://www.mintz.com/insights-center/viewpoints/2146/2026-05-18-cms-imposes-nationwide-enrollment-freeze-home-health
- CY2027 proposed HH rule: https://homehealthcarenews.com/2026/07/cms-elicits-tempered-payment-optimism-stokes-fraud-fears-with-proposed-medicare-rule/
- Zingage: https://www.healthcareittoday.com/2025/11/18/zingage-raises-12-5m-to-build-the-ai-care-delivery-platform-for-home-care/
- Florida MA plan exits: https://insurancenewsnet.com/oarticle/florida-is-losing-more-medicare-advantage-plans-in-2027-than-any-other-state
- PBM reform and Florida AG: https://www.barclaydamon.com/alerts/national-pbm-reforms-enacted-in-2026-what-independent-pharmacies-need-to-know
- Hospice 5% volunteer rule: https://www.nhpco.org/wp-content/uploads/Volunteer_CoP_TipSheet.pdf
- RCD extension: https://www.cms.gov/Research-Statistics-Data-and-Systems/Monitoring-Programs/Medicare-FFS-Compliance-Programs/Review-Choice-Demonstration/Review-Choice-Demonstration-for-Home-Health-Services
