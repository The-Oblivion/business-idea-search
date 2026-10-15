# Non-AI / AI-light growth patterns, 2024-2026 (round 2 research)

Written 2026-10-14. Brief: what is actually growing fast outside AI (Inc. 5000, Deloitte Fast 500, breakout consumer brands, PE roll-ups, services, GLP-1 telehealth, defense, energy contractors, staffing), reduced to mechanisms that could recur elsewhere. Round 2 lessons applied (lessons.md): the pool must support a path to $100M a year, someone is already doing it until proven otherwise, the payer must have a budget line, check the legal premise, and do not shrink to survive.

Retention note: the raw evidence log (every number, URL, failed fetch and confidence flag) is kept verbatim in the Appendix at the bottom of this file. A backup copy sits in the session scratchpad. Nothing was dropped when the pattern sections were synthesized.

Evidence grades used below: **A** = fetched primary (company filing or release), **B** = reputable press or law-firm analysis, **C** = third-party estimate or vendor-sourced, **D** = single weak source or unverified. Where a headline has no revenue number it says so. The "Evidence" bullets are sourced; the "Why incumbents failed" and "Transfer targets" lines are my inferences unless a source is named, and every transfer target is an untested hypothesis.

---

## What the lists actually say (read this before the patterns)

- **Inc. 5000 2025** (ranked on 2021-2024 revenue growth): median growth 169% on the full list, 1,552% for the top 500; median 2024 revenue only $12.4M; 41 companies above $1B. Median growth by industry: Health Care and Medical 210%, Government Services 181%, Construction 163%. #1 Akool (AI video, 37,364%). Largest by revenue: Carahsoft, and the release also names First Student, G&A Partners, PrestigePEO and Monogram Health in the top 10 by revenue. Grade B (Inc. press release). I could not get growth ranks 2-10 (inc.com returned 403).
- **Deloitte Fast 500 2025**: #1 Impiricus (AI) at 29,738%; average 1,079%; software 52% of winners, life sciences 14%, fintech 13%; energy and sustainability tech had the highest median growth at 624%. Grade A (Deloitte release).
- **Percent-growth lists reward tiny bases and gross revenue.** Of the five top-10-by-revenue companies named in Inc.'s release, four (Carahsoft, G&A Partners, PrestigePEO, Monogram Health) are intermediaries that plausibly book large pass-through flows (resale, payroll, or health-plan risk contracts); I did not verify how Inc. counts PEO revenue. Revenue rank is not margin rank. That is a finding in its own right (see Pattern 10).

## Cross-cutting findings (the patterns behind the patterns)

1. **The biggest, best-verified growth is somebody else's giant budget meeting a scarce physical or regulated capacity.** Comfort Systems (+50% revenue), Quanta (+41%), Anduril (about 2x) and Karman (+58%) are all filed or CEO-stated numbers. Comfort, Quanta and Karman needed capacity, not new technology (craft labor, factories, qualification), and Anduril paired capacity with software-defined hardware, while a hyperscaler, utility or the Pentagon had money to spend.
2. **Labor and equipment are the stated bottleneck.** IES: "availability of labor remains challenging". Sterling's CEO: labor, not demand, limits growth (grade C). Quanta is buying companies and building transformer capacity. Whoever supplies the scarce input has pricing power.
3. **Regulatory gaps close in about 24 months.** Compounded GLP-1: shortage-list gap opened 2023-24, Lilly and Novo cash channels at $149-$449 a month and an FDA/Novo squeeze closed it by March 2026. IEEPA refunds: a one-time pool. Kalshi: contested state by state. The durable assets that survive a closing gap are the customer base, the distribution engine and the licence, not the loophole.
4. **Roll-up arbitrage is real but late-cycle.** Multiples are compressing (public brokers 19.3x to 16.4x in 2025, Brown & Brown 17.8x to 12.9x) and buyers are thinning. It is a capital strategy, not a startup.
5. **Gross vs net revenue breaks comparisons.** Mercor's "$2B run rate" is gross; net is roughly $600-800M. Carahsoft's $18.9B (Forbes) vs about $1.8B government-facing (Washington Technology) is not reconciled. Always ask for take rate.
6. **Many headline winners are capital-gated.** Anduril ($5B raise), Hadrian ($1.37B), Base Power ($1B Series D, more than $2.5B total) cannot be started in a garage. The founder-replicable patterns are the services, claims, distribution-wrapper and category-reinvention ones.
7. **AI is upstream of several "non-AI" winners.** Comfort/Quanta/IES demand is partly hyperscaler capex (grade B; Comfort's own release does not name data centers). Mercor sells to three AI labs. Flagged per pattern.

---

## Pattern 1: Regulatory-gap cash-pay telehealth, then manufacturer re-entry (GLP-1)

**Mechanism.** A drug-shortage declaration let compounders legally copy branded semaglutide and tirzepatide at cash prices far below list. A telehealth front door (licensed physicians; the corporate-practice structure was not verified in this pass), paid acquisition and subscription billing turned that into a consumer subscription business. Then the manufacturers built their own cash channels and the gap closed.

**Evidence.**
- Hims and Hers FY2025 revenue $2,347.6M vs $1,476.5M (+59%), 2.511M subscribers, net income $128.4M, adjusted EBITDA $318M (A). Gross margin fell to 74% from 79%; marketing was $919M, 39% of revenue (A). 2026 guidance of $2.7-2.9B revenue but adjusted EBITDA of only $300-375M, so growth has stopped converting to profit (A). Its guidance assumed continued compounded semaglutide access, which the March 2026 Novo settlement ended: Hims agreed to stop advertising compounded GLP-1s (B).
- Lilly: self-pay Zepbound vials were about one-third of all Zepbound prescriptions and close to half of new starts in Q4 2025, at $299-$449 a month, and LillyDirect added more than 1M users in 2025 (B). Novo moved Wegovy cash to $349 and launched the oral pill from $149 (B). The cash channel runs through telehealth partners, GoodRx, WeightWatchers and Costco.
- Ro: no company-reported figure; Sacra estimates $598M annualized in 2024 (C).

**Why incumbents failed.** Insurance coverage of obesity drugs was patchy, pharma had no consumer cash channel, and obesity clinics were capacity-limited. The manufacturers then copied the model once they saw the demand (their own cash-pay numbers above).

**Still open?** The compounder loophole is closed and the field is crowded: Hims, Ro, LifeMD, Noom, GoodRx, Costco, Amazon and the manufacturers. What remains open is being the front door (prescribing, adherence, fulfilment, coaching) for manufacturer cash programs and for the next category.

**Transfer targets (hypotheses, pool sizes not researched here).** Any therapeutic area where a branded price is falling toward a cash price and insurance coverage is weak or hostile: menopause and hormone therapy, testosterone, hair loss, fertility drugs, migraine, and "front door as a service" for pharma direct-to-consumer programs. Needs a legal check: the loophole is not the business.

---

## Pattern 2: Capex-supercycle pass-through to scarce physical trades

**Mechanism.** A buyer with a huge capex budget (hyperscalers, utilities) needs electrical, mechanical and civil work faster than the trades can supply it. Contractors with craft labor, prefab capacity and buying power book multi-year backlogs and expand margins.

**Evidence.**
- Comfort Systems Q2 2026 revenue $3.27B vs $2.17B (+50.3%), backlog $14.06B vs $8.12B (+73%), operating margin 17.1% vs 13.8% (A, SEC exhibit). The release does not mention data centers; CEO commentary points to technology customers.
- Quanta Q2 2026 revenue $9.56B vs $6.77B (+41.1%, organic +27.4%), record backlog $53.4B, Electric segment +44%, full-year revenue guide near $39.5B (A, company summary). It also cites data-center-driven electricity demand and is building transformer capacity.
- IES Holdings backlog about $3.9B, +62% since fiscal year-end; data-center-facing Communications segment +35%; "labor remains challenging" (A/B).

**Why incumbents failed.** They did not fail; they are capacity-constrained. Utilities under-invested for 15 years of flat load, and the apprenticeship pipeline shrank.

**Still open?** Public contractors dominate and are acquiring capacity (Quanta alone expects $1.2-1.4B of revenue from acquired companies). The open space is the constraint itself: craft labor supply, training, specialty subcontracting, commissioning and testing, prefabrication, transformers and switchgear. Demand is partly AI-capex dependent, so a capex pullback is the risk.

**Transfer targets (hypotheses).** Other well-funded programs with the same constraint: grid transmission and distribution (utility rate base), onshored factories, water systems, and defense-industrial construction. A founder can enter through the scarce input (labor placement and training for electricians, testing and commissioning services, prefab) with the payer being a contractor or owner with a funded backlog. The bottom-up path to $100M needs a share of a multi-billion backlog, not a TAM claim.

---

## Pattern 3: Neo-primes and the defense supply-base rebuild

**Mechanism.** A demand shock (war, munitions depletion) plus a budget shock plus procurement reform lets builders that make products to a price, at volume, win share from cost-plus primes. Money flows down to a thin sub-tier that is also capacity-constrained.

**Evidence.**
- Anduril 2025 revenue $2.2B, roughly double 2024, per CEO announcement (unaudited, B); $5B Series H at $61B; $20B Army enterprise agreement; Golden Dome space-interceptor selection (B, fetched).
- Karman Holdings (public, sub-tier supplier) Q2 2026 revenue $182.1M (+58%), backlog $1.3B (+65% since year-end), FY2026 guide $730-745M, about half of growth acquired (B/C).
- Hadrian (automated precision machining) raised $1.37B at $7.87B (Aug 2026), supplies Lockheed, RTX and Anduril; no revenue published, so weak evidence (C).
- FY2027 request: about $1.15T base plus $350B via reconciliation; about $55B for the Defense Autonomous Warfare Group; multi-year munitions buys; low-cost munitions rising from 49% of munitions requests in FY2027 to 70% in FY2031 (B: Greenberg Traurig, CSIS). The Pentagon comptroller said the request predates the Iran conflict and excludes war costs.

**Why incumbents failed.** Primes optimized for low-rate cost-plus programs and a consolidated supplier base with many single sources.

**Still open?** The top is crowded and needs billions (Anduril, Hadrian, Shield AI class). The sub-tier (castings, forgings, energetics, precision machining, electronics, rocket motors) remains the bottleneck and is where small suppliers get prime pull. Payer risk: it is one customer, budget cycles matter, and the request is a request.

**Transfer targets (hypotheses).** Allied rearmament budgets, critical-minerals processing (explicitly in the budget), shipbuilding sub-tiers. A wedge needs a named prime that already buys the item, since contracts follow prime qualification.

---

## Pattern 4: Float and spread on payment rails, without taking credit risk

**Mechanism.** Hold or route money for many customers and keep a small spread (interest on reserves, interchange, FX, subscription on top). Growth comes from a regulatory clarity event (the GENIUS Act) or from software that wins the CFO, and the spread is shared with whoever holds distribution.

**Evidence.**
- Circle FY2025 revenue plus reserve income $2.7B (+64%) on $75.3B USDC (+72%); adjusted EBITDA $582M; but Q4 distribution, transaction and other costs were $461M against $770M of revenue, about 60%, so distribution partners keep most of the spread (A).
- Tether about $10B profit in 2025 on $193B reserves (attestation, not an audit; B/C).
- Ramp announced $1B annualized revenue in Sept 2025 (secondary, C); Deel said it passed $1B ARR in 2025 and reports of $1.4-1.5B in 2026 conflict (C).

**Why incumbents failed.** Banks ship slowly and treat corporate cards as a rewards product; global payroll needed entity-by-entity compliance that nobody had built.

**Still open?** Stablecoin issuance is winner-take-most with high distribution cost. Spend management is crowded (Ramp, Brex, Amex, Navan). The open space is vertical flows where the payer wants control and compliance, and where nobody has built the rails.

**Transfer targets (hypotheses).** Construction pay-apps and retainage, healthcare provider payments, escrow-type flows, freight pay. For each, the test is the take rate net of whoever owns distribution, and who signs.

---

## Pattern 5: A federal licence that preempts a state-by-state patchwork

**Mechanism.** One federal registration (a CFTC-designated exchange) lets a product that states license individually, and tax at high rates, launch nationally in months. Product form (event contracts, parlays) does the rest.

**Evidence.**
- Kalshi: Sacra estimates $735M revenue in 2025 and a $3.5B annualized run rate in June 2026, take rate about 1.2%, sports about 80-85% of volume, June 2026 volume about $31B (C: every figure is an estimate, and the page's own growth stat does not reconcile). Polymarket bought a CFTC-licensed exchange for $112M and launched in the US in May 2026 (B/C).
- Legal state: more than a dozen state actions, a Nov 2025 Nevada federal loss, an April 2026 Third Circuit ruling for CFTC preemption (B/C). The status can reverse.

**Why incumbents failed.** Sportsbooks built on state licences and state tax regimes; moving to federal rails cannibalizes their licensed business.

**Still open?** Crowded (one source puts Kalshi at about 83% of CFTC-regulated volume, and Polymarket is now in the US; other entrants likely but not checked) and legally unsettled. Revenue is concentrated in one category (sports) that is also the legal target.

**Transfer targets (hypotheses).** The structural asset is preemption: federal charters or registrations that replace many state licences (payments, trust or banking charters, certain commodities and swaps). This fails the "check the legal premise" rule until a specific statute is read.

---

## Pattern 6: Legal-shock claims pool

**Mechanism.** A court ruling creates a large, easily quantified receivable owned by many small, process-poor claimants. A service layer files the claims and a finance layer buys them at a discount.

**Evidence.**
- IEEPA tariffs struck down 6-3 on Feb 20, 2026; est. $166-175B owed to 330,000+ importers on about 53M entries (B: Steptoe, Mondaq, Penn Wharton). Refunds are not automatic; CBP's CAPE portal opened Apr 20, 2026 (about 63% of eligible entries); fewer than 10% of importers had set up ACH by late March (B).
- Secondary market: Fortune describes hedge funds buying refund rights; a 2025 report said Cantor offered 20-30 cents on the dollar, which Cantor disputes (C). Filing services such as GingerControl exist.

**Why incumbents failed.** Customs brokers are not claims businesses, law firms are too expensive for small claims, and CBP's tooling lagged.

**Still open?** Mostly closing: payment is expected within 60-90 days of valid claims, large players are present, and the pool is one-time. I did not verify status after April 2026.

**Transfer targets (hypotheses; round 1's refund-exchange ideas already died to incumbents, so assume competition).** Other mass-claim pools with low take-up: antitrust and class settlements, interchange litigation, unclaimed property, out-of-network dispute arbitration under the No Surprises Act. The reusable asset is a claims factory with a financing partner, built before the next ruling.

---

## Pattern 7: Roll-up multiple arbitrage in fragmented, recurring local services

**Mechanism.** Buy owner-operated firms at 4-12x EBITDA, add procurement, back-office and cross-sell, and sell or recapitalize the platform at 15-18x. Retiring owners and no succession plan are the supply.

**Evidence.**
- HVAC: 55 PE deals in 2024, +72% and the highest since at least 2017 (B, PitchBook via search snippet; the PDF returned 403). Reported Apex valuation about $10B and Champions at about 18.5x (C: advisory sites).
- Insurance brokerage: Hub 2025 brokerage revenue $4.75B (+10.1%), organic growth mid-single digit, 49 acquisitions (down from 61 and 65), about $29B enterprise value (B). Public broker multiples fell from 19.3x to 16.4x during 2025; Brown & Brown went from 17.8x to 12.9x; mid-market agencies 11.9x to 11.4x; PE broker deals fell from 1,066 (2021) to 543 (2023) (B/C).

**Why incumbents failed.** Fragmentation: thousands of small firms without capital or successors.

**Still open?** Late-cycle. Multiples are compressing, buyers are thinning, and organic growth slowed. I found no distress data either way for home-services platforms. Entry for a small team is a search fund or independent sponsor, not a startup.

**Transfer targets (hypotheses, unverified).** Recurring, compliance-mandated services not yet picked over: fire and life-safety inspection, elevator maintenance, backflow and water testing, specialty insurance agencies and MGAs. Each needs a bottom-up count of reachable firms before it is believed.

---

## Pattern 8: Category reinvention against legacy-brand health overhang, ending in a strategic exit

**Mechanism.** In a category with two or three giants whose core brands cannot credibly turn "better for you", a challenger uses creator and social-proof trial, wins retail velocity at Walmart, Target and Costco, makes through co-packers, and is then bought by the incumbent at 3-4x revenue.

**Evidence.**
- Poppi: PepsiCo paid $1.95B in March 2025 ($1.65B net of $300M tax benefits), about 3.3x an estimated $500M revenue (B/C; revenue unconfirmed; Brewbound returned 403).
- Olipop: $1.85B valuation in Feb 2025, about $400M FY2024 revenue (+100%) per secondary sources, and it refused Coke and Pepsi interest (C).
- Feastables: about $250M sales and more than $20M profit in 2024 (Bloomberg via Fortune, B); growth reportedly slowed in 2025 (US volume +13% after +33%; C), so the "sugar rush" is not guaranteed.

**Why incumbents failed.** They can build line extensions but not a credible new identity, and they buy rather than build.

**Still open?** Winners are visible and survivorship bias is large. Slotting fees, working capital and a channel-conflict fight are the cost of entry. Exit multiples depend on a few buyers.

**Transfer targets (hypotheses, sizes not researched).** Large legacy categories with a health overhang: cereal, candy, snacks, condiments, ice cream, yogurt, bread, pet food. Test each by asking who the three buyers are, and whether a $100M revenue brand has already appeared.

---

## Pattern 9: Expert-labor marketplaces for a buyer class with an unconstrained budget (plus offshore staffing)

**Mechanism.** A new buyer needs scarce human judgment urgently. A marketplace vets experts quickly, charges a 30-40% take, and scales on speed. A smaller version arbitrages wages between the US and the Philippines or Latin America.

**Evidence.**
- Mercor: over $2B gross annualized in June 2026 (The Information via secondary), about four months after $1B; it pays contractors 60-70%, so net is roughly $600-800M; over 30,000 weekly contractors at $85-105 an hour; reportedly more than 90% of revenue from three AI labs; unaudited (C).
- Surge AI: about $1.4B run rate, tracker estimate, unverified (D). Scale AI: just under $1B in 2025 (C).
- Offshore staffing: virtual assistant market $6.5B in 2026 per a vendor report; 87% of placements to businesses under 50 employees; 20four7VA at #3,943 on the 2026 Inc. 5000 (C). No sector revenue data, so weak.

**Why incumbents failed.** Staffing firms are slow and cannot vet experts at scale; crowd labeling platforms produced low-skill labor; freelance marketplaces had no vetting.

**Still open?** Concentrated and AI-dependent (three customers, "build in-house" risk). Offshore staffing has thousands of small vendors and low barriers.

**Transfer targets (hypotheses).** Other buyers with funded urgency and scarce expertise: defense contractors needing cleared engineers, utilities and data-center builders needing power and commissioning engineers, health systems needing coders. The wedge is vetting plus speed for a payer that already pays staffing fees.

---

## Pattern 10: The wrapper intermediary on pass-through flows (resale, risk contracts)

**Mechanism.** Sit between a large payer and many suppliers or beneficiaries, carry the contract vehicle, compliance or clinical risk the parties cannot or will not carry, and book the whole flow as revenue.

**Evidence.**
- Carahsoft: Forbes ranks it #20 among private US companies at more than $18.9B revenue, with more than $22.5B bookings in 2025 (B); Washington Technology's Top 100 lists about $1.79B of government-facing revenue and about 4,000 employees (B). The gap between the two is not reconciled, so net economics are unknown.
- Monogram Health (Inc. 5000 2025 #7): self-reported revenue of $4.9M (2020) to more than $3B (2024), 14,131% three-year growth, in-home value-based kidney care in 36-37 states (C: company press releases). Upward Health ranked #4 with more than 240x growth (C). I found no distress reports, but I also found no profit data.

**Why incumbents failed.** Software vendors have no government sales and compliance teams; chronic-disease patients were not served by fee-for-service primary care.

**Still open?** Government resale is a relationship and contract-vehicle moat. Risk-bearing care has a long failure record (risk adjustment, medical cost trend), so rank-based growth is not evidence of margin.

**Transfer targets (hypotheses).** Other complex buyers that vendors cannot reach cost-effectively: hospital group purchasing, state and local cooperative purchasing, K-12 and higher education. Always ask for the net take rate before sizing.

---

## Pattern 11: The collectibles liquidity stack (live marketplace plus authentication chokepoint)

**Mechanism.** Collectibles became a liquid asset class. That created demand for price discovery (live video auctions), trust (grading), and eventually storage and lending. The grading company is a capacity-constrained chokepoint with pricing power.

**Evidence.**
- Whatnot: GMV about $3B (2024) to more than $8B (2025) per its own report; revenue unpublished, Fortune estimates $700M-$1B (about 11% take); Series F at $11.5B (Oct 2025) and a reported Series G at about $20B (Aug 2026) (C).
- PSA: 26.6M cards graded by the major authenticators in 2025, PSA 19.26M (+26%), TCG over sports for the first time, Pokemon alone 16.1M; Collectors (PSA, SGC, Beckett) holds about 80% share; backlog peaked near 14M cards and the value tiers were paused (B/C). No revenue number found.

**Why incumbents failed.** eBay's static listings and auction houses' high fees missed live engagement, and grading capacity depends on trained graders.

**Still open?** Backlog is unmet demand for grading capacity, but the whole stack rides a Pokemon/sports card cycle that can reverse; Collectors is dominant.

**Transfer targets (hypotheses).** Asset classes that have price discovery but no trust layer: vintage video games, LEGO, sneakers, watches, wine. The test is whether a credible grading standard exists and whether resale volume justifies fees.

---

## Pattern 12: Home energy as a service on a project-finance stack (weak revenue evidence)

**Mechanism.** Own the asset (home battery), be the retail electricity provider, and sell flexibility back to the grid, financed with equity and asset-level capital.

**Evidence.**
- Base Power: $1B Series D at $13B (Aug 2026), more than $2.5B raised, fleet over 500 MWh, makes batteries in Austin (B/C). Revenue is only a Sacra estimate: about $12M annualized in 2025 and about $70M projected for 2026; 1,500 homes in July 2025 to 7,000 by December (C). Valuation is far ahead of revenue, so treat it as thesis, not proof.

**Why incumbents failed.** Utilities are regulated and installers sell one-off hardware.

**Still open?** Two states and capital-intensive.

**Transfer targets (hypotheses).** Other distributed assets that can be owned and aggregated: heat pumps, water heaters, EV chargers. No evidence yet at scale.

---

## What I could not establish (do not rely on these)

- Inc. 5000 2025 ranks 2-10 and their revenue: not obtained.
- Ro 2025 revenue, Hadrian revenue, PSA revenue, Whatnot revenue, Carahsoft net margin, Olipop 2025 revenue: not found.
- A claim that "Main Street Health" topped the 2026 Inc. 5000 at 546,533% appeared in one search answer and could not be confirmed.
- Roll-up distress or return data for PE-backed home-services platforms: none found.
- IEEPA refund status after April 2026, and what replaced the Section 122 tariff after July 24, 2026: not verified.
- A low-quality source mentioned a US-Iran conflict; the budget analysis (Greenberg Traurig, CSIS coverage) supports a conflict context, but I did not verify the conflict itself.

---

# APPENDIX: raw evidence log (verbatim, append-only; includes failed fetches and confidence flags)

## EVIDENCE LOG (raw, append-only, verified vs. unverified flagged)

### Lists
- Inc. 5000 2025 (Aug 2025; ranks by 2021-2024 revenue growth; private, US). #1 by growth Akool 37,364% (AI video). Largest by revenue: Carahsoft Technology (gov IT reseller); top-10 by revenue also First Student, G&A Partners (PEO), PrestigePEO, Monogram Health. Aggregates: >$300B combined 2024 revenue, 536,086 jobs added, median 2024 revenue $12.4M, median growth full list 169%, top 500 median 1,552%, 41 companies >$1B. Industry median growth: Health Care & Medical 210%, Government Services 181%, Construction 163%. Source: https://www.bankingdive.com/press-release/20250811-inc-reveals-2025-inc-5000-list-of-americas-fastest-growing-private-compa-1/
- Deloitte Tech Fast 500 2025 (Nov 2025; 2021-2024 growth): #1 Impiricus 29,738% (AI HCP engagement); range 122%-29,738%, avg 1,079%. Sector mix: software 52%, life sciences 14%, fintech 13%. Energy/sustainability tech had highest median growth 624%. Source: https://www.deloitte.com/us/en/about/press-room/deloitte-unveils-2025-north-america-technology-fast-500-rankings.html
- Caveat: growth-% lists reward tiny bases; revenue size matters more for this search.

### GLP-1 telehealth
- Hims & Hers FY2025: revenue ~$2.35B, +59% YoY, net income $128M, adj. EBITDA $318M; 2.511M subscribers (+13%); Q4 rev $617.8M (+28%). 2026 guide $2.7-2.9B. Q1 2025 growth was 111% on GLP-1. Compounded GLP-1 under regulatory attack: Feb 2026 compounded semaglutide pill launched then pulled within days; Novo suit; March 9 2026 settlement: Hims stops advertising compounded GLP-1s. Source: https://investors.hims.com/news/news-details/2026/Hims--Hers-Health-Inc--Reports-Fourth-Quarter-and-Full-Year-2025-Financial-Results/ ; SEC 8-K https://www.sec.gov/Archives/edgar/data/1773751/000177375126000019/hims-20251231x8xkearningsr.htm ; settlement coverage https://njbiz.com/novo-nordisk-hims-hers-glp1-drug-settlement/ ; https://www.frierlevitt.com/articles/hims-compounded-wegovy-fda-glp1-compounding-enforcement/

### Trades / capex pass-through
- Comfort Systems USA Q2 2026: revenue ~$3.27B vs $2.17B yr ago (+~50%), backlog $14.06B (vs $8.12B a year earlier), net income $441.6M, mechanical segment +40.1%. Demand = technology (data center) customers. Source: https://www.sec.gov/Archives/edgar/data/0001035983/000110465926086255/fix-20260723xex99d1.htm ; https://www.businesswire.com/news/home/20260723227439/en
- NOTE: this is AI-capex-derived demand for non-AI trades (AI-light supplier, AI-dependent demand).

### Defense
- Anduril 2025 revenue ~$2.2B vs ~$1B 2024 (company letter; unaudited); raised $5B Series H at $61B valuation (May 2026). Defense-tech VC >$12B in H1 2026 per low-quality source (verify). Sources: https://washingtontechnology.com/companies/2026/05/anduril-hauls-5b-series-h-round/413515/ ; https://finance.yahoo.com/news/us-defense-firm-anduril-raises-073253279.html

### Consumer brands
- Poppi: PepsiCo bought for $1.95B (Mar 2025), ~3.3x trailing revenue claim (multiples.vc), revenue est ~$500M 2024 (unconfirmed). https://www.brewbound.com/news/pepsico-to-acquire-poppi-in-1-95b-deal
- Olipop: $1.85B valuation (Feb 2025), ~$400M 2024 revenue (+100%) per secondary sources; no audited 2025. https://en.wikipedia.org/wiki/Olipop
- Feastables (MrBeast): ~$250M sales 2024, >$20M profit (Bloomberg via Fortune https://fortune.com/2025/03/11/youtube-biggest-star-mrbeast-makes-more-money-chocolate-videos); growth slowed in 2025 (US volume +13% after +33%) https://dnyuz.com/2026/07/10/mrbeasts-chocolate-brand-sees-growth-slow-after-a-sugar-rush/

### PE roll-ups
- PitchBook: 55 PE HVAC deals in 2024 (+72% vs 2023, highest since 2017). Hold periods 4-6 yrs, many early sellers already exited; anecdote of 17x EBITDA exit. https://files.pitchbook.com/website/files/pdf/Q2_2025_PitchBook_Analyst_Note_Clearing_the_Air_on_HVAC_19463.pdf

(more evidence appended below as research continues)

### Fintech / float / interchange (batch 2)
- Ramp: announced $1B annualized revenue Sept 2025 (up from $700M earlier in 2025); $750M Series F June 2026; reported talks at $60B valuation (unverified). Revenue = interchange on corporate cards + software. https://benzatine.com/news-room/ramp-surges-to-1-billion-in-annual-revenue-elevating-valuation-to-225-billion (secondary) ; https://www.kucoin.com/news/flash/ramp-in-talks-for-new-funding-at-60b-valuation (low-quality)
- Deel: >$1B ARR in 2025 (Series E Oct 2025, $17.3B valuation); reports of $1.4-1.5B ARR H1 2026 (conflicting). Global payroll/EOR. https://seedtable.com/companies/deel/funding-rounds/series-e-2025-10 ; https://www.calcalistech.com/ctechnews/article/mkl1xfyoe
- Circle FY2025: revenue + reserve income $2.7B (+64%); USDC in circulation $75.3B (+72%); reserve return rate 4.1%; net loss $70M due to $424M IPO-vesting SBC; adj EBITDA $582M. Primary: https://www.circle.com/pressroom/circle-reports-fourth-quarter-and-full-fiscal-year-2025-financial-results
- Tether: 2025 profit ~$10B (2024: $13B); reserves $193B, >$122B direct Treasuries (attestation, not audit). https://finance.yahoo.com/news/tether-records-lower-annual-profit-202015562.html

### Prediction markets (regulatory-shift)
- Kalshi: Sacra estimate $3.5B annualized revenue June 2026 vs $735M in 2025; June 2026 volume ~$31.5B (~85% sports); blended take rate ~1.2%. Polymarket US launch May 2026 (bought CFTC-licensed QCEX $112M); Polymarket revenue estimates conflict ($375M vs $1B annualized). State regulators in >12 states contest sports contracts; Kalshi lost Nov 2025 Nevada federal ruling; April 2026 3rd Cir. ruled CFTC preempts. Estimates are Sacra (secondary). https://sacra.com/research/kalshi-at-3b-year/ ; https://sacra.com/research/polymarket-at-375m-year-revenue/
- Hype risk: legal status split by state/circuit; revenue concentration in sports.

### Expert-labor marketplaces (AI-demand-dependent, but business is staffing)
- Mercor: >$2B gross annualized revenue June 2026 (The Information via secondary sources), ~4 months after $1B; pays contractors 60-70% of gross => net ~$600-800M; >30,000 weekly active contractors, ~$85-105/hr; >90% revenue from three AI labs (single-source report). Not audited. https://dealroom.co/news/137121-mercor-doubles-to-2b-gross-revenue-run-rate-as-ai-labs-buy-expert-data/
- Surge AI: ~$1.4B run-rate (tracker estimate, unverified), bootstrapped. Scale AI ~<$1B 2025.

### GLP-1 manufacturer DTC cash channel (batch 3)
- Lilly Q4 2025: Zepbound self-pay vials ~1/3 of total Zepbound Rx and ~50% of new Zepbound Rx in Q4; LillyDirect added >1M users in 2025; Zepbound ~70% of new branded obesity Rx. Jan 2026 pricing: $299 lowest dose, $449 higher doses (cash). Novo cut Wegovy cash price to $349 (Nov 2025), oral Wegovy launched at $149/mo entry dose via telehealth (Ro etc.), also via GoodRx, WeightWatchers, Costco. => The compounder gap was closed by manufacturers selling cash-pay direct through telehealth fronts. https://www.bnnbloomberg.ca/business/economics/2025/11/17/novo-nordisk-rolls-out-349-wegovy-cash-price-ahead-of-plan ; https://www.nbcdfw.com/news/business/money-report/eli-lilly-is-selling-higher-dose-vials-of-zepbound-at-a-lower-price-to-boost-weight-loss-drug-access/3777436/
- Ro: no company-reported 2025 revenue found. Sacra est. $598M annualized 2024 (+66% from $360M 2023), GLP-1 ~40% of revenue by end 2024 (estimate). https://sacra.com/research/ro

### Home energy as a service (batch 3)
- Base Power (Texas): $1B Series D at $13B valuation (Aug 2026), >$2.5B raised total, fleet >500 MWh, makes batteries in Austin. Revenue evidence is WEAK: Sacra est. $12M annualized 2025, ~$70M 2026 projected; 1,500 homes Jul 2025 -> 7,000 Dec 2025 (est.). Model: leases battery + is the retail electricity provider, earns on retail margin and on grid discharge at peak. https://dealroom.co/news/142739-base-power-raises-1b-series-d-at-13b-valuation-launches-us-built-home-ba/ ; https://sacra.com/c/base-power/

### Power/electrical contractors (batch 3)
- Quanta Services Q2 2026: record backlog $53.44B, revenue $9.6B; Electric segment backlog $43.8B; expanding transformer production (bottleneck). Primary: https://investors.quantaservices.com/_assets/_9546050958577210325d4e87129a40ac/quantaservices/db/917/10536/operational_and_financial_commentary/PWR+06-30-2026+ER+Operational+and+Financial+Summary+vF.pdf
- IES Holdings FQ2 2026 (Mar 2026): backlog ~$3.9B, +62% since FY-end 2025; Communications (data center) segment +35% ($94.7M); labor availability challenging; residential weak. https://www.sec.gov/Archives/edgar/data/0001048268/000104826826000087/q22026pressrelease-mar.htm
- Sterling Infrastructure: backlog ~$2.6B at Q3 2025 (+64%); CEO says labor, not demand, limits growth (promotional source, verify).

### Legal-shock claims pool: IEEPA tariff refunds (batch 4)
- SCOTUS Learning Resources v. Trump, Feb 20 2026, 6-3: IEEPA does not authorize tariffs. IEEPA duty collection stopped Feb 24 2026. Est. ~$166B (industry) to $175B (Penn Wharton) collected on ~53M entries from >330,000 importers. CIT (Atmus Filtration, Mar 4 2026) ordered refunds on unliquidated entries to all importers (order later suspended pending CBP build-out, appeal signaled). CBP built CAPE portal in ACE (expected late Apr 2026, phased); refunds NOT automatic; <10% importers had ACH set up by late March. Replacement: Section 122 10% tariff for 150 days to Jul 24 2026; 232/301 untouched. Liquidated entries need protests within 180 days. Sources: https://www.mondaq.com/unitedstates/export-controls-trade-investment-sanctions/1750338/supreme-court-strikes-down-ieepa-tariffs-refund-process-and-next-steps-for-importers ; https://www.steptoe.com/en/news-publications/global-trade-and-investment-law-blog/us-supreme-court-strikes-down-ieepa-tariffs.html ; https://blogs.tradlinx.com/ieepa-tariff-refunds-where-the-166-billion-refund-process-actually-stands-and-what-importers-should-do-now/  (status after March 2026 not verified in this pass)

### Defense industrial base (batch 4)
- FY2027 budget request: ~$1.15T base discretionary + $350B mandatory via reconciliation (headline $1.5T); ~$55B for Defense Autonomous Warfare Group (absorbed Replicator drones); multi-year munitions procurement; low-cost munitions share rising from 49% (FY27) to 70% (FY31) per CSIS. Pentagon comptroller: request predates conflict with Iran and excludes war costs. https://gtlaw.com/en/insights/2026/5/understanding-the-presidents-fy-2027-budget-request-for-the-department-of-war ; https://www.csis.org/analysis/industrial-base-wartime-footing-progress-report
- Karman Holdings (KRMN, public): Q2 2026 revenue $182.1M (+58%), backlog $1.3B (+65% vs 12/31/25), FY2026 guide $730-745M, growth split ~50/50 organic vs acquired; reliant on prime awards. https://www.panabee.com/news/karman-earnings-q2-2026 ; https://s205.q4cdn.com/167499471/files/doc_financials/2026/q2/v2/Karman-Q2-FY-2026-Earnings-Presentation-1.pdf
- Hadrian (automated precision machining factories for defense/aerospace): $1.37B Series D at $7.87B valuation (Aug 6 2026); supplies Lockheed, RTX, Anduril; plans to ~triple headcount to 2,000; NO published revenue found => weak revenue evidence. https://thenextweb.com/news/hadrian-1-37bn-series-d-7-87bn-defence-factories

### Insurance brokerage roll-ups (batch 4)
- Hub International: 2025 brokerage revenue $4.75B (+10.1%), gross $5.28B; organic growth mid-single digit; 49 acquisitions in 2025 vs 61 (2024), 65 (2023); ~$1.6B minority raise at ~$29B EV (2025). Public broker multiples fell from 19.3x (Q1 2025) to ~16.4x (Sept) / Brown & Brown 17.8x -> 12.9x over 2025 as organic growth slowed (Q2 2025 B&B organic 3.6% vs 10.0%). Midmarket ($1-10M EBITDA) agencies traded 11.9x -> 11.4x. PE deals for MGAs/brokers 1,066 (2021) -> 543 (2023) per Oliver Wyman. Arbitrage: buy $1-5M EBITDA brokers at 7.5-12x, platform trades 16-18x (secondary source). https://www.businessinsurance.com/top-insurance-brokers-no-7-hub-international/ ; https://mercercapital.com/insights/newsletters/insurance-industry-newsletter/fourth-quarter-2025/ ; https://www.insurancejournal.com/magazines/mag-features/2026/04/13/865247.htm
- PitchBook HVAC note returned 403 on direct fetch (use search snippet only).

### More batch 5 evidence
- Home-services PE roll-up thesis (weak sources: advisory/marketing sites): Apollo ~$2B into Apex Service Partners at ~$10B valuation; Blackstone ~$2.5B for Champions Group at ~18.5x EBITDA (reported); ~800 businesses bought by PE since 2022 per WSJ/PitchBook (secondary); small HVAC EBITDA bought ~4x sold ~10x on platform exit. Exit dependence on 2nd exit. No distress data found in this search. https://www.servicetitan.com/blog/hvac-private-equity ; https://pipelineon.com/blog/private-equity-buying-hvac/
- Monogram Health (Inc. 5000 2025 #7; 3-yr growth 14,131%): self-reported revenue $4.9M (2020) -> $21M (2021) -> $310M (2022) -> >$2B (2023) -> >$3B (2024); projected $5B 2025; ~1,500 employees; in-home value-based kidney care under risk contracts with health plans. SKEPTIC NOTE: revenue is probably gross risk-contract/total-cost-of-care revenue, not service margin. Upward Health Inc 5000 #4 (>240x growth). https://www.monogramhealth.com/resources/press/monogram-health-ranks-7th-on-the-2025-inc-5000-list-of-americas-fastest-growing-companies/
- Carahsoft: Forbes largest private cos 2025 #20 (>$18.9B revenue, up from #26); >$22.5B bookings 2025; WT Top100 gov-facing revenue ~$1.79B (Washington Technology 2026 list). Gross resale revenue, thin net margin; private, unaudited. https://virginiabusiness.com/government-contractors-technology-2026-craig-p-abod/ ; https://www.washingtontechnology.com/rankings/company/170/top-100/2026/
- Tariff refund secondary market: CBP CAPE Phase 1 launched Apr 20 2026 (~63% of eligible entries); 56,497 importers registered for e-refunds totaling $127B as of Apr 9; claim payments 60-90 days stated. Hedge funds buy refund rights at discounts (Cantor reportedly offered 20-30 cents on the dollar in 2025; Cantor denies executing). Filing-service firms (e.g. GingerControl) exist. https://www.foxrothschild.com/publications/with-the-tariffs-struck-down-now-the-refund-fight-begins ; https://www.mondaq.com/unitedstates/international-trade-investment/1768694/tariff-refund-claims-new-interest-in-purchasing-but-there-are-risks

### Batch 6: verification pass on load-bearing numbers (primary sources fetched)
- VERIFIED Hims FY2025 (company IR release, fetched): revenue $2,347.6M vs $1,476.5M (+59%); online $2,311.4M (+61%), wholesale $36.2M (-6%); US $2,213.6M (+53%), RoW $134.0M (+399%); gross margin 74% (79% in 2024); marketing $919.3M (about 39% of revenue; 46% in 2024; $678.8M in 2024); subs 2.511M (+13%); net income $128.4M; adj EBITDA $318.0M; 2026 guide revenue $2.7-2.9B, adj EBITDA $300-375M (flat-ish vs 2025); compounded GLP-1 share of revenue NOT disclosed; guidance assumes continued ability to offer compounded semaglutide (stale after Mar 2026 settlement). https://investors.hims.com/news/news-details/2026/Hims--Hers-Health-Inc--Reports-Fourth-Quarter-and-Full-Year-2025-Financial-Results/
- VERIFIED Comfort Systems (SEC Ex. 99.1, fetched): Q2 2026 revenue $3,265.7M vs $2,173.3M (+50.3%); 6-mo $6,131.0M vs $4,004.6M (+53.1%); backlog $14.06B vs $8.12B (+73%); same-store backlog $13.70B; operating income $558.0M (17.1% margin) vs $299.9M (13.8%); net income $441.6M vs $230.8M. The release itself does NOT mention data centers; the "technology" attribution is from CEO call commentary (secondary: nasdaq.com call highlights). https://www.sec.gov/Archives/edgar/data/0001035983/000110465926086255/fix-20260723xex99d1.htm
- VERIFIED Quanta Q2 2026 (company summary PDF, text-extracted): revenue $9,557.0M vs $6,773.0M (+41.1%; organic +27.4%); Electric segment revenue $7.8B (+44%); backlog record $53.4B, 12-month backlog $32.3B; Underground & Infrastructure backlog $9.7B; FY2026 revenue guide about $39.3-39.7B (low/mid/high $39.3B/$39.5B/$39.7B); backlog excludes most of NiSource program; cites rising electricity demand from data centers; "craft labor" as core strategy. URL above (batch 3).
- VERIFIED Circle FY2025 (company release, fetched; some figures in images): total revenue + reserve income $2.7B (+64%); USDC at year end $75.3B (+72%); net loss from continuing ops $70M incl. $424M IPO-vesting SBC; adj EBITDA $582M (+104%); Q4 revenue $770M, Q4 reserve income $733M; Q4 "distribution, transaction and other costs" $461M = about 60% of Q4 revenue (the spread is shared with distribution partners). Circle Payments Network: 55 FIs enrolled. https://www.circle.com/pressroom/circle-reports-fourth-quarter-and-full-fiscal-year-2025-financial-results
- Anduril (Washington Technology, fetched): 2025 revenue $2.2B per CEO announcement (article does not state 2024 revenue; OCBJ says $1B 2024); Series H $5B at $61B (Series G June 2025 was $2.5B at $30.5B); $20B Army enterprise agreement consolidating existing contracts; ~10,000 lower-cost hypersonic missiles over 3 yrs shared with 3 other companies; one of a dozen firms on Golden Dome space-based interceptors. Unaudited. https://washingtontechnology.com/companies/2026/05/anduril-hauls-5b-series-h-round/413515/
- Kalshi (Sacra page fetched): ALL numbers are Sacra estimates, none company-reported: 2025 revenue $735M; June 2026 annualized $3.5B; blended take ~1.2%; sports ~80% of volume (parlays ~50% during World Cup); talks at $40B valuation (unclosed). Page's own growth stat (+172%) does not reconcile with $735M->$3.5B (~4.8x). TREAT AS LOW-CONFIDENCE. https://sacra.com/research/kalshi-at-3b-year/
- Whatnot: 2024 GMV about $3B; 2025 GMV >$8B per company "State of Live Selling" report (via Tubefilter) / >$6B earlier forecast (Fortune); revenue not published (Fortune est. $700M-$1B, ~11% take); Series F Oct 2025 $11.5B valuation; Series G $545M at ~$20B (Aug 2026, ecommercegermany headline). https://www.fortune.com/2025/06/16/whatnot-startup-5-billion-dollar-livestream-video-shopping-app-auctions-sports-trade-card-breaks-ebay ; https://fashionunited.uk/news/business/whatnot-raises-545-million-us-dollars-in-series-g-round/2026081089707
- Collectors/PSA (cllct.com via search): 26.6M cards graded by major authenticators in 2025 (GemRate); PSA 19.26M (+26% YoY); TCG/non-sports 16.8M vs sports 10M; Pokemon 16.1M; Collectors (PSA+SGC+Beckett) ~80% share; PSA announced $200M investment May 14 2026, backlog peaked ~14M cards, ~12M and falling; value tiers paused May 28 2026 until backlog ~5M. NO revenue figure found (weak). https://www.si.com/collectibles/psa-backlog-falls-12-million-means-card-grading-2026 ; https://www.cllct.com/sports-collectibles/sports-cards/major-authenticators-graded-more-than-26-million-cards-in-2025
- Offshore staffing: vendor-sourced only. Global VA market $6.5B 2026 -> $34B 2030 (State of the Filipino VA Industry 2026, vendor report); 87% of placements to businesses <50 employees; Philippines ~38% of VA talent; 20four7VA ranks #3,943 on Inc. 5000 (2026 list; 118% avg 3-yr growth over 5 appearances). Weak evidence, no sector revenue data. https://allwork.space/2026/08/philippines-remote-workforce-disrupts-traditional-business-process-outsourcing-as-global-virtual-assistant-market-heads-for-34-billion/
- Inc. 5000 2026 list exists (published Aug 2026; ranks 2022-2025 growth; median 3-yr growth 130%). A claim that "Main Street Health" ranked #1 at 546,533% appeared in one search answer but could NOT be confirmed by any source: treat as unverified. Could not fetch inc.com/inc5000 (403); ranks 2-10 of the 2025 list not obtained. Known 2025 list placements: #1 Akool (AI), #4 Upward Health (in-home care, >240x), #7 Monogram Health, #14 Introl (AI infra, 9,594%).
- Fetch failures to remember: PitchBook HVAC PDF (403), Brewbound Poppi (403), inc.com/inc5000 (403), cllct.com page (404).
