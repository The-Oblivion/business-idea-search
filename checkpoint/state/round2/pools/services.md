# Round 2 pool map: professional and business services

Written 2026-10-14. Slice: law, accounting and audit, consulting, staffing, BPO and outsourcing, HR and benefits administration, compliance, translation, customer support.

Method: about 40 searches and fetches. Primary sources used where reachable: MACPAC data book (downloaded and parsed), Concentrix 8-K, Butzel Long client alert, Census Services Annual Survey series on FRED, Nasscom, Nimdzi. Several pages returned 403 (Jenner, Summit7, SC World, CBPP), and Bloomberg Government is paywalled, so some numbers come from search-result summaries. Every number is tagged **[verified]** (seen in a primary or near-primary source), **[secondary]** (search summary or trade press) or **[my estimate]** (derived, assumptions stated).

## Read this first: what the scan found

1. **Most "AI is displacing professional labor" pools are not being drained yet.** BigLaw had a record year in 2025 (Am Law 100 gross revenue +13.0%, worked rates +7.3%). TCS grew 11.2% in rupees in Q2 FY27. The pools where incumbents are visibly cracking are customer-support BPO (Concentrix and TP both cut or missed in 2026) and federal consulting (government-imposed cut).
2. **The cleanest forced-spend shocks are government-made, not AI-made.** SNAP and Medicaid administration (cost shift on 2026-10-01, work requirements 2027-01-01) and federal consulting (GSA/DOGE) are the two pools where a statute or order is moving real money on a fixed date. Both are hidden giants.
3. **One tempting pool is dead: CMMC Phase 2.** The DoD (Department of War) suspended Phase 2 (third-party C3PAO assessments), scheduled for 2026-11-10, on 2026-07-13 and ordered a 60-day review. [verified: Butzel Long alert dated 2026-07-14, https://www.butzel.com/alert-department-of-defense-announces-immediate-suspension-of-phase-ii-of-the-departments-cmmc-program]. Level 1 and Level 2 self-assessments continue. Any "CMMC compliance services" idea built on Nov 2026 demand repeats round 1's "why-now already used up" failure. The outcome of the review (due about mid-September 2026) was not found.
4. **Employment screening fails the size bar.** US background-check services are $3.2B (IBISWorld 2026) to $5.1B (2025) and global estimates run $6.5B to $16B with no agreement [secondary]. Dropped.
5. **Interpreting alone is too small.** Global interpreting is $11.7B (2024) per Nimdzi, under the $15B global bar. It is kept only as a wedge inside the language-services pool.

Hidden giants (big, boring, rarely targeted by tech founders): Pool 1 (Medicaid and SNAP administration), Pool 2 (federal management and professional support), Pool 3 (employer benefits brokerage).

Overlap warning: Pool 1 touches the health slice (Medicaid), and Pool 8 touches the financial-services slice. Dedupe at merge.

---

## Pool 1. State Medicaid and SNAP administration (eligibility, enrollment, verification systems and operations)  [HIDDEN GIANT]

- **Geography:** US (50 states, plus counties in the 10 states where counties run SNAP)
- **Annual spend:** about $54B (Medicaid $41.3B + SNAP about $13B)
- **Size basis:**
  - Medicaid FY2024 administrative spending was $41.3B, federal and state combined [verified: MACPAC MACStats Exhibit 31, parsed from the PDF]. It breaks down as eligibility systems $9.9B (24.0%), MMIS $5.9B (14.3%), "other functions at 50% match" $23.0B (55.7%, includes eligibility workers and operations), and other items $2.5B. It excludes managed-care plan admin.
  - SNAP: USDA's regulatory analysis puts the federal-to-state shift at about $16.9B over FY2027-2031 [secondary: CSPI comment, FRAC says about $17B]. The shift is 25 percentage points of total admin cost, so total SNAP admin is roughly $3.4B / 0.25 = about $13B a year [my estimate].
  - Addressable core (eligibility systems plus eligibility operations) is probably $15-25B of the total [my estimate; the outsourced share is unknown].
- **Money flow:** Federal government and states split admin costs (50/50 baseline, 90% federal match for system design and build, 75% for operations). States and counties pay system integrators and operations vendors (Maximus, Conduent, Gainwell, Deloitte, GDIT) plus their own and county caseworkers.
- **Shock (2025-07, binding dates in 2026-2027):**
  - H.R. 1 (P.L. 119-21, the One Big Beautiful Bill Act, 2025-07-04) requires Medicaid work-requirement verification for expansion adults from 2027-01-01. CMS issued the interim final rule 2026-06-01, effective 2026-07-31, with states required to check data sources first and fall back to documentation [secondary: AMCP, Niskanen comment].
  - The federal SNAP admin share falls from 50% to 25% on 2026-10-01 (FY2027). Maryland alone adds $57.5M a year; counties in 10 states spend about $1.7B a year on SNAP admin [secondary].
  - Federal Medicaid implementation grants total only $200M for all states [secondary: CBPP via search], while one media estimate puts state costs "well over $1B" [weak: ThePricer].
  - States face a SNAP benefit cost-share starting FY2028 tied to payment error rates [secondary]. That is a second, larger incentive to buy verification and error-reduction.
- **Incumbents:**
  - Maximus (named by CMS as one of 10 existing E&E vendors that pledged support), Deloitte, Gainwell, Conduent and GDIT (the last four got Senate Finance letters).
  - CMS says its vendor deals (fixed fees for upgrades, discounted licenses, free fraud monitoring) save $600M through 2028 [secondary: Healthcare Dive].
  - They earn on large implementation contracts and long operations contracts.
- **Incumbent fragility:**
  - States run patchwork legacy eligibility systems that cannot pull cross-agency data, and Niskanen warns of the biggest multi-state IT failure since the pandemic [secondary].
  - Vendors are under congressional scrutiny and are being forced to discount.
  - States are budget-squeezed by the SNAP cost shift, so they have a reason to buy per-verification pricing rather than another custom build.
  - **Counterpoint:** the Jan 2027 go-live is so tight that "states will have little choice but to funnel more money to existing vendors" for the first wave. A newcomer's window is 2027-2029 re-procurements and the verification data layer.
- **Funded startups already here (2023-2026):**
  - Fortuna Health ($18M, July 2025, Medicaid enrollment and recertification) [secondary].
  - Nava PBC and Nava Labs ($1.2M philanthropic grant, working with APHSA and Maryland on open-source AI verification for SNAP and Medicaid). This is an open-source free substitute risk.
  - Code for America (nonprofit, human-centered H.R. 1 support).
  - Equifax's The Work Number (income verification incumbent).
  - USDA is offering up to $38M in FY2026 SNAP earnings-verification grants, and SNAP technology improvement grants of $20k-$2M [secondary]. Public money flows to this, and public tooling will exist.
  - Propel, Truv and Pinwheel: not verified in this session.
- **Crowdedness:** contested, but with few venture-scale players. The competition is incumbents plus open-source and nonprofit tooling.
- **Wedge hints:**
  1. Per-verification employment and income data-matching for state agencies, priced per check against the 6-month and quarterly verification cycles (34 states plan 6-month verification; Indiana and New Hampshire quarterly [secondary]).
  2. Exemption-evidence and document-capture tooling for county caseworkers in county-administered SNAP states.
  3. Managed-care plans have a capitation reason to keep members enrolled, so they may pay for re-verification help. **Check the legal premise first:** outreach, steering and marketing rules, and what plans can pay for.
  4. SNAP payment-error reduction for states before the FY2028 benefit cost-share.
- **Payer who signs:** state Medicaid director or SNAP director, procurement through state Medicaid Enterprise Systems or human-services IT. Slow, and sometimes cooperative purchasing is available.
- **Insider roles:** state Medicaid eligibility directors; county SNAP directors; state E&E and MMIS integration leads; MES procurement officers; managed-care plan enrollment and retention heads; Maximus and Conduent site and contract managers; legal-aid benefits attorneys; APHSA staff.
- **Sources:**
  - https://www.macpac.gov/wp-content/uploads/2026/01/EXHIBIT-31.-Total-Medicaid-Administrative-Spending-by-State-and-Category-FY-2024.pdf
  - https://www.cspi.org/resource/cspi-comment-usda-snap-administrative-cost-sharing
  - https://frac.org/blog/why-the-snap-administrative-cost-shift-threatens-state-budgets-and-program-operations
  - https://www.amcp.org/node/42202
  - https://www.healthcaredive.com/news/medicaid-vendors-trump-deals-cms-work-requirements/810839/
  - https://www.niskanencenter.org/wp-content/uploads/2026/09/Niskanen-Center-Comment-on-CMS-IFR-re-Medicaid-Work-Requirements.pdf
  - https://www.navapbc.com/news/nava-labs-grant-snap-medicaid

---

## Pool 2. Federal management advisory and professional support services  [HIDDEN GIANT]

- **Geography:** US federal government
- **Annual spend:** about $50B in management advisory services
- **Size basis:** Bloomberg Government reported (Jan 2026) that FY2025 management-advisory obligations fell 19% to a five-year low, with civilian agencies down one-third to $26B and DoD down 1% to $24B [secondary, paywalled; opening paragraphs only]. GAO's FY2025 snapshot shows total contract commitments of about $793B and professional support services of about $26B at DoD and about $18B civilian (a narrower category) [secondary].
- **Money flow:** Agencies pay labor-hour and time-and-materials fees to primes (Booz Allen, Deloitte Government and Public Services, Accenture Federal, SAIC, CACI, Leidos) and to small-business subs on GSA schedules and IDIQs.
- **Shock (2025-02):** A GSA memo in Feb 2025 told agencies to justify contracts with the 10 highest-paid consulting firms (set to receive more than $65B in 2025 and later). Bloomberg reported about 1,700 GSA consulting contract terminations claiming $4.5B in savings. A later phase pushed restructuring into outcome-based deals ($8.9B immediate savings claimed) [secondary]. Deloitte had at least 127 contracts cut or modified; Booz Allen about 61; Accenture at least 30 ($240M).
- **Incumbents:** The primes above, whose revenue depends on billable headcount (Booz Allen earns almost all of its roughly $11B from the public sector). Accenture said federal work was about 8% of global revenue in FY2024.
- **Incumbent fragility:** Their labor-hour model conflicts with outcome-based buying and with AI productivity. Civilian demand is down by a third and agencies must defend spend. **Counterpoint:** DoD spend is growing ($491.6B of contract spend in FY2025, versus $445B). The shock is concentrated on civilian agencies.
- **Funded startups already here:** I found no funded AI-native delivery firm selling services to federal civilian agencies. The funded companies are software for contractors: NationGraph ($18M Series A, Feb 2026), Vultron ($22M Series A, 2025), Ask Sage ($17M Series A, Dec 2024), Procurement Sciences AI ($10M Series A, 2024). The real competitors are mid-size GovCons with set-aside status and past performance. The big firms are repositioning to "agent delivery" [secondary: MarketScale 2026].
- **Crowdedness:** open on the venture side. The barriers are past performance, set-aside status, security clearances and slow procurement, not other startups.
- **Wedge hints:**
  1. Fixed-price, outcome-priced work replacing terminated time-and-materials contracts at civilian agencies: claims backlogs, grants management, FOIA, IT modernization.
  2. Subcontract slots for primes that must reprice.
  3. Small-business set-aside entry. **Check the legal premise**, because the status of SBA 8(a) and set-aside programs in 2026 was not verified here.
- **Payer who signs:** the contracting officer, with the agency CIO or program office as sponsor.
- **Insider roles:** GSA FAS contracting officers and CORs; agency CFO and CIO staff; capture and pricing leads at primes; small-business subcontractors; OIG and GAO auditors; former DOGE or GSA acquisition staff.
- **Sources:**
  - https://news.bgov.com/bloomberg-government-news/consultants-hurt-as-civilian-agencies-reel-in-annual-spending-1
  - https://www.gao.gov/blog/snapshot-government-wide-contracting-fy-2025-interactive-dashboard
  - https://www.nextgov.com/acquisition/2025/02/trump-administration-asks-agencies-cull-consultants/403345/
  - https://fedscoop.com/gsa-tells-agencies-to-terminate-contracts-with-top-10-consulting-firms/
  - https://www.consulting.us/news/11592/accenture-feels-the-pain-as-trump-administration-cuts-consulting-spend

---

## Pool 3. Employer group-health benefits brokerage and advisory fees  [HIDDEN GIANT]

- **Geography:** US
- **Annual spend:** about $40B (range $33-45B)
- **Size basis [my estimate, uncertain by 40% either way]:**
  - About 150M Americans have employer coverage [verified: stated in Insurance Business, Sept 2026].
  - KFF 2025: average single premium $9,325 and family $26,993 [verified via KFF search results]. At roughly $8.7k per covered person that implies $1.2-1.4T of employer health premiums and claims.
  - Form 5500 analysis (2022-2024) found a median 6.8% commission for the smallest employers (under $500k premium) and 2.3% for the largest [secondary: HCA Mag]. A blended 2.5-3.5% gives $33-45B. This counts broker and consultant compensation only, not TPA or carrier fees.
- **Money flow:** Carriers pay brokers commissions (percent of premium or $25-40 PEPM for small groups), or employers pay consulting fees. Self-funded employers also pay stop-loss placement and consulting fees.
- **Shock (weaker than the others, honest label):** ICHRA, rebranded "CHOICE Arrangements" by SBA and CMS (announced about 2026-09-09), grew 99% in employers 2025-2026 to over 500,000 covered lives. Two-thirds of small ICHRA adopters had never offered coverage before. Small-group premiums head into 2027 with a national median increase of 14% (KFF, via Insurance Business). Peterson-KFF (Jan 2026) found ICHRA administrators taking over agent-of-record at renewal, which moves commissions away from the original broker. 54% of brokers surveyed (by TASC, a vendor with a stake) have never sold an ICHRA. 500k lives against 150M is still small, so this pool is being eroded slowly, not drained.
- **Incumbents:** Marsh McLennan Agency, Gallagher, Aon (including NFP), WTW, USI, Alliant, Brown & Brown, HUB, plus thousands of small agencies. Many mid-size agencies are PE-backed roll-ups (my background knowledge, not verified in this session).
- **Incumbent fragility:** Percent-of-premium comp rises with cost inflation, so it conflicts with the buyer's goal. ICHRA breaks the carrier-commission flow because employees buy individual plans. Brokers resist selling it. Fragmentation means no one player can reprice.
- **Funded startups already here:** Corridor ($25M seed led by Bain Capital Ventures, AI plus licensed advisors for 1-500 employee firms; one report dates it 2026-09), Gyde ($60M launch led by Lightspeed, Jan 2026, AI-native brokerage platform), Harper ($46.8M Series A and seed, P&C brokerage, Emergence), Nayya ($55M Series C, $106M total, benefits navigation). Thatch, Take Command and Ease: no 2026 rounds found [secondary].
- **Crowdedness:** contested, and getting crowded in the small-business tier.
- **Wedge hints:**
  1. Flat-fee, comp-transparent advisory for 20-200 employee firms where the median commission is highest (6.8%).
  2. First-time-offer ICHRA/CHOICE enrollment service with broker-agnostic comp.
  3. Mid-market self-funded: stop-loss and pharmacy-benefit auditing, where fees are 2-3% of a much larger base.
  4. **Check the legal premise:** state broker licensing and ERISA compensation disclosure.
- **Payer who signs:** CFO or head of HR at the employer. Budget line exists, but it is paid indirectly by the carrier today.
- **Insider roles:** account managers and producers at mid-size agencies; carrier small-group underwriters; TPA operations leads; stop-loss MGUs; HR and finance leaders at 50-500 employee firms; ERISA litigators.
- **Sources:**
  - https://www.kff.org/health-costs/report/2025-employer-health-benefits-survey/
  - https://www.insurancebusinessmag.com/us/news/benefits/choice-arrangements-get-a-federal-push--and-a-compensation-question-589181.aspx
  - https://www.hcamag.com/us/specialization/benefits/the-hidden-fee-inside-every-health-premium/589483
  - https://pulse2.com/corridor-raises-25-million-led-by-bain-capital-ventures-for-ai-native-small-business-benefits-brokerage/
  - https://pulse2.com/gyde-60-million-funding/
  - https://techcrunch.com/2026/02/25/ai-insurance-brokerage-harper-raises-45m-series-a-and-seed/

---

## Pool 4. Outsourced customer-service BPO (Concentrix, TP and peers; Philippines, India, nearshore)

- **Geography:** Global (buyers mainly US and Europe)
- **Annual spend:** about $60B [my estimate; confidence low]
- **Size basis:** Concentrix FY2026 revenue guidance is $9.83-9.88B [verified: Concentrix release, via Pulse 2, dated 2026-10-01]. TP (formerly Teleperformance) H1 2026 revenue was €4.88B, about €9.8B annualized [secondary]. Those two alone are about $20B. The Philippines IT-BPM sector exported over $40B in 2025 (IBPAP; not all customer service) [secondary]. The rest of the market (Genpact, Foundever, TTEC, TaskUs, Alorica, captives) is estimated. No source gave the global CX-outsourcing total.
- **Money flow:** Enterprise customer-care budgets pay per seat-hour or per transaction to BPOs, which pay offshore agents.
- **Shock (2026-06):**
  - Concentrix cut full-year guidance on 2026-06-29 (to $9.925-10.025B) [verified: 8-K]. Shares fell about 21% and TP fell 11-13% in sympathy [secondary].
  - Concentrix cut again on 2026-10-01. Q3 revenue was $2.45B (-1.2%), with a $1.05B goodwill impairment and Q4 guided to -3% to -5% constant currency [secondary: Pulse 2 on Q3; verified Q2 numbers in 8-K].
  - TP H1 2026 like-for-like revenue was -1.7%, with Trust and Safety "sharply" lower on AI automation and offshoring. It raised restructuring costs to €120-140M [secondary].
  - Concentrix healthcare revenue was -14% in Q2 [verified].
- **Incumbents:** Concentrix, TP, Genpact, TaskUs, TTEC, Foundever, Alorica. Per-seat billing conflicts with AI that removes seats. Both leaders say they are repositioning (Concentrix: about 50% of revenue is from business won in the past three years).
- **Incumbent fragility:** high, per the share prices. But they have scale, compliance infrastructure and client relationships, and AI-led deflation is currently slow.
- **Funded startups already here:** Sierra ($950M at $15B+, May 2026), Decagon ($250M Series D at $4.5B, Jan 2026), Parloa ($350M Series D, about $3B, Jan 2026) [secondary, aggregator data conflicts]. Crescendo was not found.
- **Crowdedness:** **crowded.** A generic AI customer-support agent is exactly the cliché from round 1.
- **Wedge hints (only if you take the services P&L):**
  1. Health-plan member services and prior-authorization phone work, where Concentrix healthcare is shrinking and regulation (HIPAA, state call-recording laws) protects a human-in-the-loop service.
  2. Rolling up small regional BPOs and applying AI to cut seats, capturing margin instead of selling software.
  3. Collections and dispute handling priced per resolution.
- **Payer who signs:** VP customer experience or head of vendor management.
- **Insider roles:** BPO site directors and workforce-management planners; QA leads; client-services VPs at BPOs; enterprise CX procurement leads; contact-center platform admins; Manila and Pune labor relations.
- **Sources:**
  - https://www.sec.gov/Archives/edgar/data/0001803599/000180359926000133/exhibit991q22026.htm
  - https://pulse2.com/concentrix-reports-q3-revenue-of-2-45-billion-and-record-third-quarter-free-cash-flow/
  - https://seekingalpha.com/pr/20601856-tp-2026-first-half-results
  - https://business.inquirer.net/571179/it-bpm-revenues-top-40b
  - https://letsdatascience.com/news/call-centre-stocks-slide-as-ai-reshapes-investor-calculus-fd82ec31

---

## Pool 5. US enterprises' spend on offshore-delivered IT services (Indian IT majors, captives)

- **Geography:** Global supply, US demand
- **Annual spend:** about $100B [my estimate]
- **Size basis:** Nasscom FY26: IT services about $149B and total exports about $246B [secondary]. India's GCC ecosystem passed 2,000 centers and about $100B of revenue in FY26 (headline only). North America's share of exports was not found; I assume roughly two-thirds of IT-services exports (my background knowledge, flagged). That gives about $100B for US-bought offshore IT services.
- **Money flow:** US enterprises pay time-and-materials or multi-year fixed-price fees (3-5% annual escalators) for development, maintenance, testing and infrastructure. The work is done mainly by H-1B and India-based staff.
- **Shock (2025-09):**
  - Presidential proclamation of 2025-09-19 imposed a $100,000 fee on new H-1B petitions. Bloomberg found nearly 90% of new H-1B hires at TCS, Infosys and Cognizant were approved at consulates (so fee-exposed), more than $1B in fees for Infosys alone on historical volumes [secondary]. "H-1B demand plummeted" after the first fee (Bloomberg Tax headline).
  - AI deflation: broker commentary says TCS passes about 10-15% of AI productivity gains to clients; ICICI Direct estimates 2-3% a year deflation; Bessemer says the NIFTY IT index fell 39% from its Dec 2024 peak to May 2026 [secondary].
  - **Counterpoint:** TCS Q2 FY27 (reported 2026-10-08) showed revenue of Rs 73,188 crore, up 11.2% year over year in rupees but only 0.5% sequentially in constant currency, with annualized AI revenue of $3.1B and total contract value $9.6B [secondary]. Infosys reports 2026-10-23. The pool is eroding, not collapsing.
- **Incumbents:** TCS, Infosys, Wipro, HCLTech, Cognizant, Accenture. Pyramid-leveraged billing and visa dependency make them slow to reprice.
- **Funded startups already here:** Kodesage ($6.6M seed, 2026-06, legacy knowledge extraction), Hypercubic (about $5M seed, COBOL modernization; single aggregator), Rhino.ai ($50M, Jan 2025). Bessemer is publicly backing AI-native services challengers. Cognition and Factory: not verified here.
- **Crowdedness:** contested.
- **Wedge hints:**
  1. Fixed-price COBOL and mainframe modernization for mid-market banks and insurers, below the minimum ticket of Accenture or TCS.
  2. Per-ticket outcome-priced application maintenance.
  3. "Captive as a service" in India for US mid-market firms that cannot build a GCC of their own, now that H-1B import is costly. **Check:** transfer pricing and permanent-establishment rules.
- **Payer who signs:** CIO or head of IT sourcing (vendor management office).
- **Insider roles:** delivery heads at Indian IT majors; client-side vendor management office leads; sourcing advisors (ISG, Everest, Gartner); GCC leaders in Bengaluru and Pune; immigration counsel; mainframe and COBOL architects.
- **Sources:**
  - https://www.etvbharat.com/en/business/india-fy26-tech-revenues-hit-usd-315-billion-enn26022404879
  - https://www.staffingindustry.com/news/global-daily-news/tcs-infosys-and-cognizant-among-hardest-hit-by-100000-fee-for-h-1bs
  - https://news.bloombergtax.com/daily-labor-report/h-1b-demand-plummeted-in-fallout-from-trumps-first-100-000-fee
  - https://www.indiainfoline.com/news/companies/tcs-share-price-jumps-5-46-after-q2-fy27-results-net-profit-rises-4-qoq-to-13884-crore
  - https://www.bvp.com/atlas/the-rise-of-vertical-ai-native-services-in-india

---

## Pool 6. Corporate fees for associate-leveraged legal work at large US law firms

- **Geography:** US
- **Annual spend:** about $70B in the leveraged-work slice (of $178.95B total Am Law 100 revenue)
- **Size basis:** Am Law 100 aggregate gross revenue was $178.95B in 2025, up 13.0% (Kirkland $10.56B, Latham $8.3B) [verified: Am Law 100 press coverage on NatLawReview]. The leveraged-work share (diligence, drafting, review, research) of 35-45% is [my estimate; no source].
- **Money flow:** Corporate legal departments and sponsors pay hourly or fixed fees; firms bill associates at about 3-5x pay.
- **Shock (2026-01, weak):** Thomson Reuters/Georgetown's 2026 report calls 2025 a record (profit +13%, worked rates +7.3%) but warns of "fault lines." Smaller firms took most of the growth as clients moved work to lower-cost alternatives. Technology spend rose about 10% and talent costs 8.2%. Legal AI funding is the real disturbance: Harvey $200M at $11B (Mar 2026), Legora $550M Series D at $5.55B, Crosby $60M Series B (Mar 2026), and over $5B into legal AI in 2025 (PitchBook, via a vendor blog) [secondary].
- **Incumbents:** Kirkland, Latham, DLA Piper and the rest of the Am Law 100. They are not fragile now. The billable-hour model conflicts with AI efficiency, but partners are capturing gains as margin.
- **Funded startups already here:** Harvey, Legora, Crosby, Eudia (Series A, up to $105M, Feb 2025), plus others.
- **Crowdedness:** **crowded.** This is the generic-copilot trap.
- **Wedge hints:** Only owning a law-firm P&L in a niche (fixed-fee contract review for mid-market, as Crosby does) is open, and Crosby has the lead. **Check the legal premise:** unauthorized-practice-of-law rules and Arizona ABS-type structures. I did not verify the status of non-lawyer ownership in 2026.
- **Payer who signs:** general counsel or head of legal operations.
- **Insider roles:** law-firm pricing directors; practice-support partners; corporate legal-ops leaders; outside-counsel billing auditors; legal malpractice insurers; bar ethics counsel.
- **Sources:**
  - https://natlawreview.com/press-releases/2026-am-law-100-kirkland-hits-10b-wachtell-tops-12m-partner-pay
  - https://www.thomsonreuters.com/en/institute/reports/state-of-the-us-legal-market-2026
  - https://www.mlex.com/pulse/legal-tech/articles/2460033/crosby-raises-60m-series-b-to-expand-hybrid-ai-law-practice
  - https://sifted.eu/articles/legora-funding-round-valuation-triple

---

## Pool 7. US tax preparation and accounting fees (households and small businesses)

- **Geography:** US
- **Annual spend:** about $67B (tax preparation $56B + general accounting and bookkeeping $11B)
- **Size basis:** Census Services Annual Survey, NAICS 5412, 2022: tax preparation for corporate and other clients $30.6B, for individuals and unincorporated businesses $25.3B, general accounting $11.1B [verified: FRED series; 2022 is the latest annual found]. Not counted: audit and assurance $42.4B, payroll services $29.0B, tax planning $7.8B.
- **Money flow:** Households and small firms pay H&R Block, Jackson Hewitt, independent preparers and CPA or EA firms. NATP 2025: base Form 1040 averaged $280 by a CPA, $228 by an EA, about $185 by a non-credentialed preparer [secondary].
- **Shock (2026-01):**
  - IRS Direct File did not run for the 2026 filing season [verified: IRS told state revenue departments]. Paid preparers filed 54.7% of e-filed returns through 2026-04-10 (61.4M of 112.2M) [secondary].
  - CPA pipeline: first-time exam candidates fell from 48,004 (2016) to 32,188 (2021) [secondary].
  - Private equity: the 2026 Accounting Today list shows only 3 of 26 fastest-growing firms with no PE tie, and roughly half of the 20 largest firms are PE-backed or privately capitalized (June 2026 industry count) [secondary]. PE is pushing work offshore (anecdotal).
- **Incumbents:** H&R Block, Intuit, regional CPA firms (many PE-backed), thousands of sole practitioners with a succession cliff.
- **Incumbent fragility:** Partner retirements, staff shortage, seasonal capacity and PE margin targets. Intuit lobbied against Direct File, so its incentive is to keep the paid path.
- **Funded startups already here:** Basis ($100M Series B at $1.15B, Feb 2026), Rillet ($100M Series C at $1B), Accrual ($75M launch, Feb 2026, individual returns, General Catalyst), Juno ($12M seed, Apr 2026), Filed ($17.2M, 2025), TaxGPT, Black Ore (no funding found) [secondary].
- **Crowdedness:** **crowded** for software. Open only in buying practices.
- **Wedge hints:** Acquire retiring sole-practitioner books and run them AI-native (a services roll-up, which PE is also doing); IRS-notice and state-notice response at volume. I did not size either.
- **Payer who signs:** the household, or the small-business owner. The budget exists, and the practice owner is the buyer for software.
- **Insider roles:** managing partners and operations directors at CPA firms; enrolled agents; H&R Block franchisees; state CPA society executives; PE operating partners in accounting; offshore tax-prep managers in India.
- **Sources:**
  - https://fred.stlouisfed.org/data/REVTPCEF5412ALLEST
  - https://fred.stlouisfed.org/data/REVTPIEF5412ALLEST
  - https://www.natptax.com/news-insights/blog/direct-file-is-gone-what-s-next-for-free-filing-and-tax-pros/
  - https://www.accountingtoday.com/list/the-2026-fastest-growing-accounting-firms
  - https://news.bgov.com/financial-accounting/ai-for-accounting-startup-basis-hits-1-15-billion-valuation

---

## Pool 8. US financial institutions' BSA/AML/KYC compliance operations

- **Geography:** US (LexisNexis study covers US and Canada)
- **Annual spend:** about $59B
- **Size basis:** A June 9, 2026 House Financial Services Republicans letter cites about $59B a year (attributed to Forrester, derivation unverified) [secondary]. LexisNexis True Cost of Financial Crime Compliance puts US plus Canada at $61B (2024) [secondary; survey of 1,181 decision-makers, only 160 in US and Canada].
- **Money flow:** Banks, broker-dealers, MSBs and fintechs pay in-house analysts, offshore BPOs and software vendors for alert triage, investigations, SAR filing and onboarding checks.
- **Shock (2026-04):** FinCEN proposed on 2026-04-07 to rewrite AML/CFT program rules toward risk-based programs [verified: FinCEN NPRM]. In Oct 2025 FinCEN and the banking agencies issued four SAR FAQs easing continuing-activity review and documentation [secondary]. Congress is floating higher SAR and CTR thresholds, and House Republicans are urging AI-driven monitoring (June 2026). **This shock can shrink the pool**, because fewer low-value filings means fewer analyst hours.
- **Incumbents:** In-house operations teams, BPOs (Genpact, Accenture, Cognizant, Capgemini), and vendors (NICE Actimize, LexisNexis Risk, Fenergo, Quantexa). They are headcount-priced.
- **Funded startups already here:** Bretton AI ($75M Series B, Sapphire), Norm Ai (about $136M total per Owler, unverified), Greenlite (Series A about $15M, entity unconfirmed), Sardine ($70M Series C, Feb 2025), Seon ($80M Series C), Steward ($5M, Mar 2026), Diligent AI (about EUR 2M), Marble (EUR 6.5M Series A, Sept 2026). Hummingbird and Persona: not verified [secondary].
- **Crowdedness:** **crowded.**
- **Wedge hints:** Outsourced BSA officer and AML operations for community banks and credit unions (one-person compliance teams that cannot afford Bretton-class software); sponsor-bank oversight of fintech programs. I did not count the institutions.
- **Payer who signs:** BSA officer or chief compliance officer. Mandated spend, exam-driven.
- **Insider roles:** BSA officers at community banks; FIU investigators; sponsor-bank compliance leads; former OCC or FinCEN examiners; AML BPO site managers.
- **Sources:**
  - https://financialservices.house.gov/UploadedFiles/2026-06-09_-_FSC_Letter_-_AML_Programs_NPRM_Comment.pdf
  - https://www.fincen.gov/system/files/2026-04/Key-Changes-Program-NPRM.pdf
  - https://risk.lexisnexis.com/global/en/about-us/press-room/press-release/20240221-true-cost-of-compliance-us-ca
  - https://pulse2.com/diligent-ai-e2-1-million-raised-for-ai-agents-automating-kyc-and-aml-workflows/amp/

---

## Pool 9. Global language services (translation, localization, interpreting)

- **Geography:** Global
- **Annual spend:** about $72.6B (2025)
- **Size basis:** Nimdzi 2026 report: $72.6B in 2025 (revised down from $75.7B), $73.4B in 2026, under 1% CAGR to 2030 [secondary]. CSA Research's narrower scope gives $51.9B (2024). Interpreting is $11.7B (2024), growing to $17.1B by 2029 (8% CAGR). Compare figures only within one source.
- **Money flow:** Enterprises, hospitals, courts and governments pay language service providers (LSPs) per word or per minute; LSPs pay freelancers.
- **Shock (2025-03):**
  - Executive Order 14224 (2025-03-01) made English the official language and rescinded EO 13166; DOJ rescinded its LEP guidance (April 2025); a DOJ memo of 2025-07-14 ordered an audit and reallocation of multilingual services [secondary].
  - DOGE cancelled at least 10 language and translation contracts; the NWS translation contract lapsed [secondary].
  - Nimdzi blames US budget freezes, English-only rhetoric and tariffs for its downgrade. CSA Research predicts strong AI-driven price compression in translation.
  - **Floor under interpreting:** Section 1557 and Title VI still require meaningful access for LEP patients, but HHS enforcement of the 2024 rule was unclear and I did not verify its current status.
- **Incumbents:** LanguageLine, TransPerfect, RWS, Lionbridge, Welocalize and others. Thousands of small LSPs. Fragmented, per-word pricing is being compressed by machine translation.
- **Funded startups already here:** No 2026 rounds found in this session's search. From memory (not verified here): DeepL, Lilt, Smartcat and several interpreting-dispatch and AI-interpreting firms.
- **Crowdedness:** contested.
- **Wedge hints:** Healthcare qualified-interpreter dispatch plus AI-assist where the law requires human qualification; court interpreter scheduling in shortage states; regulated-content translation for pharma and devices; Section 1557 language-access compliance audits for hospitals.
- **Payer who signs:** hospital language-services director, court administrator or localization lead.
- **Insider roles:** hospital language-services directors; court interpreter coordinators; LSP vendor managers; certified medical interpreters (CCHI, NBCMI); HHS OCR staff; pharma localization leads.
- **Sources:**
  - https://nimdzi.com/nimdzi-100-2026/
  - https://multilingual.com/english-only-federal-policy/
  - https://tech.slator.com/?p=107068
  - https://www.csa-research.com/l/blog/article/ai-and-global-content-predictions-for-2026

---

## Pool 10. AI labs' and enterprises' spend on expert human data and evaluation labor

- **Geography:** Global buyers (mainly US frontier labs), US expert supply
- **Annual spend:** about $6.5B (gross annualized)
- **Size basis [secondary, self-reported or estimated, gross of contractor pay]:** Mercor about $2.0B annualized gross (June 2026; $760M at end of 2025); Scale AI about $1.5B; Handshake AI about $1.1B (Apr 2026); Surge AI over $1B trailing (crossed $1.2B in 2024); Turing $300M (2024); Invisible $134M (2024). Sum is about $6.2B and rounds to $6.5B with others. Contractors receive 60-70% of gross, so the labor pool is about $4B. There is no credible market-wide total.
- **Money flow:** Labs and enterprises pay vendors; vendors pay lawyers, doctors, quants and engineers hourly to write, grade and verify model outputs. This is the counter-flow to "AI displaces professionals."
- **Shock (2025-06):** Meta's investment in Scale AI (valuing it above $29B) pushed labs to diversify vendors, and Mercor grew about 2.6x in H1 2026. A March 2026 Mercor data breach led Meta to pause its contract [secondary: Sacra]. (The June 2025 date is from my memory of the Meta-Scale deal.)
- **Incumbents:** Scale, Surge, Mercor, Handshake, Turing, Invisible, with Appen and TELUS Digital in decline.
- **Incumbent fragility:** Buyer concentration (a handful of labs), 30-40% gross margins, insourcing, synthetic-data substitution, breach risk, worker-classification exposure.
- **Funded startups already here:** Mercor ($350M Series C at about $10B, Oct 2025; talks near $20B), Surge (reported raise at $15-25B), Turing ($2.2B), Invisible ($2B), Handshake. Valuations are press-reported.
- **Crowdedness:** **crowded.**
- **Wedge hints:** Vertical expert networks and RL-environment building for enterprise (non-lab) buyers deploying agents in law, finance, accounting and medicine; expert-quality certification. **Check the legal premise:** 1099 versus W-2 classification.
- **Payer who signs:** head of data or post-training at a lab; for enterprises, the AI platform lead.
- **Insider roles:** data-operations leads at frontier labs; vendor managers for data procurement; expert contractors; QA reviewer leads at Surge and Mercor; employment-classification counsel.
- **Sources:**
  - https://sacra.com/c/mercor/
  - https://sacra.com/research/handshake-indeed-for-data-labelers/
  - https://startupfortune.com/mercors-revenue-hit-2-billion-in-june-and-the-ai-data-race-isnt-slowing/

---

## Pools considered and dropped

- **CMMC and defense-contractor cybersecurity certification:** Phase 2 was suspended 2026-07-13 (see top). Self-assessment duties and DFARS 7012 remain. The population is 80,000-100,000+ contractors [secondary], but without a mandated third-party assessment date the forced spend is gone.
- **Employment background screening:** under the size bar (US $3.2-5.1B per IBISWorld; global estimates conflict). Deepfake-candidate fraud is real (HireRight benchmark: 1 in 6 employers saw identity fraud in hiring [secondary]) but the pool is too small alone. It could be a wedge inside a larger hiring-compliance pool.
- **Staffing and contingent labor (generic):** no verified 2025-2026 shock found in this session. The most interesting staffing money flow is Pool 10 (expert contractors for AI labs) and Pool 5 (H-1B-dependent IT staffing).
- **Benefits brokerage as a "AI displaces labor" story:** the shock (ICHRA and premium inflation) is real but slow. See the weakness note in Pool 3.

## Cross-pool observations for the idea generators

- The two pools with a **dated, statute-driven forcing event and an unfunded or underfunded buyer** are Pool 1 and Pool 2. Neither has a venture-funded direct attacker at the service-delivery layer. Both have slow procurement as the real barrier.
- Pools 4, 6, 7, 8 and 10 are all crowded at the software layer, and the only open space is owning the service P&L (roll-up or AI-native firm). That passes round 2's "services are fine as a wedge" test only if the path to software, a network, a data asset or a balance sheet is explicit.
- Round 1 lesson 3 (wrong payer): in Pool 3 the carrier pays the broker today and the employer would have to pay a fee. In Pool 1 the state signs, but managed-care plans may be the better payer. In Pool 7 the household pays, which is a budget line, but also the lowest willingness to pay per customer.
- Round 1 lesson 4 (legal premise): check UPL and ABS rules in Pool 6, Medicaid outreach and marketing rules in Pool 1, broker licensing and ERISA disclosure in Pool 3, and worker classification in Pool 10.
