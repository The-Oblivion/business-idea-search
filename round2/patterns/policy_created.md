# Policy-created spend: 12 transferable patterns (round 2, mid-October 2026)

Brief: businesses that exploded because of a 2023-2026 policy or regulation change; which created LARGE new spend; who captured it; which 2026-2028 deadlines create the next wave.
Method: about 36 searches and fetches on 2026-10-14. Primary sources used where reachable (Palantir 8-K, Circle press room, Rheinmetall H1 report, CBP declaration via Supply Chain Dive). Everything else is secondary press or law-firm summaries and is labeled as such. The raw log with every source is in the appendix at the bottom of this file.

## Read this first: what the evidence says

1. **The biggest, most durable policy-created businesses were captured by companies that already had the product, the permits or the installed base.** Palantir, Rheinmetall, CoreCivic/GEO, Deloitte (Medicaid systems) and Bloom Energy are not companies that appeared because of the policy. The challengers who did break through (Anduril, Kalshi) combined a policy permission slip with a product and huge private capital.
2. **A deadline is only forced spend if someone enforces it.** In 2026 alone, CMMC Phase 2 was suspended (2026-07-13), the CSRD scope was cut by about 90%, EU AI Act high-risk dates slipped to Dec 2027 / Aug 2028, and EUDR slipped a year. Vendors who sold "readiness" against those dates were selling a mirage. Round 2 should treat "the law says by date X" as insufficient.
3. **When the government builds a free self-service pipe, the middleman layer collapses fast.** CBP stood up CAPE for the IEEPA refunds on 2026-04-20, and by 2026-07-31 it had paid about $100B of $166B. The "claims recovery" opportunity was real for roughly 90 days.
4. **Money-flow shifts that bite the payer directly are the strongest next-wave signals.** SNAP is the cleanest live example: states pay 75% of admin costs from 2026-10-01 and a tiered share of benefits from 2027-10-01, priced by their own error rate. That is a named signer (the state SNAP director) with a dollar number attached, not a vendor-marketed deadline.
5. **Evidence quality varies a lot.** Strong: Palantir, Rheinmetall, Circle, CBP/IEEPA, Crux volumes. Medium: Kalshi (private, press-reported), CoreCivic/GEO (earnings summaries). Weak: Anduril and Helsing revenue, H-1B offshoring, Workforce Pell, Persona ARR.

---

## Pattern 1. Budget surge plus buying reform turns a software-defined challenger into a prime

**Mechanism.** A large, politically protected budget increase meets procurement that now rewards products over cost-plus programs (enterprise agreements, program-of-record software, OTAs). Whoever has a deployed product plus engineering velocity absorbs the dollars. The incumbent primes keep the hardware; the challenger takes the software and autonomy layer, then vertically integrates.

**Examples**
- **Palantir.** Q2 2026 US government revenue $809M, +90% YoY (+18% QoQ); total revenue $1.935B, +93%; FY2026 guide about $8.15B. Primary: SEC 8-K, https://www.sec.gov/Archives/edgar/data/0001321655/000132165526000039/a2026q2ex991pressrelease.htm
- **Anduril.** Series H at $61B post-money (2026-05-13); about $2.2B 2025 revenue; 2026 projection about $4.3B (The Information, unaudited); Army 10-year enterprise contract with a ceiling of up to $20B that consolidates 120+ procurement actions (a ceiling, not obligated spend). Still loss-making; about 27.7x revenue. Secondary: https://sacra.com/c/anduril/ and https://www.ocbj.com/defense-2/anduril-gets-army-contract-worth-up-to-20b/
- **Rheinmetall (the incumbent that also won).** H1 2026 sales EUR5.2B (+39%), operating result EUR786M (+74%), backlog EUR80.5B vs EUR56.0B a year earlier, H1 nominations EUR16.2B (book-to-bill above 3). But operating free cash flow was -EUR1.6B and FY guidance was cut by EUR300M after the F126 frigate cancellation. https://www.rheinmetall.com/en/media/news-watch/news/2026/08/2026-08-06-rheinmetall-news-half-yearly-financial-report-h1
- **Helsing ($18B, Series E 2026-07-13) and Quantum Systems (about $8B, July 2026).** Valuation only; no revenue disclosed. Weak evidence of actual spend captured. https://defensenews.com/global/europe/2026/07/13/helsing-raises-18-billion-in-europes-biggest-defense-startup-round

**Shift that enabled it.** US defense budget surge plus Golden Dome (reported as a proposed $185B initiative) and European rearmament; Army-wide enterprise buying; commercial-first acquisition rules.

**Why incumbents failed.** Cost-plus primes are paid on cost, so they under-invest in product. Palantir and Anduril self-fund R&D and sell a finished capability. Incumbents with real production capacity (Rheinmetall) did fine, so the failure is specific to software and autonomy, not to hardware.

**Open or crowded.** The top layer is crowded and priced for perfection. What is more open: sub-tier suppliers (energetics, rocket motors, castings, batteries), test and evaluation, secure software supply chain. A $100M business needs a very small slice of a pool measured in hundreds of billions, so the constraint is access and cleared staff, not demand.

**Transfer targets.** Other government pools run by cost-plus integrators where a mandate exists: state eligibility systems (see Pattern 6), border and customs IT, public-health data, utilities' grid planning. (FAA air-traffic modernization is a candidate from background knowledge, not verified in this run.)

---

## Pattern 2. Policy money flows first to whoever already holds permitted physical capacity

**Mechanism.** When the government must spend fast, it buys from operators with sites, permits and staff already in place. The scarce asset is permitted, powered, cleared capacity, not the idea. Incumbents then sell the assets back to the government at a premium.

**Examples**
- **CoreCivic Q2 2026.** Revenue about $684.9M (+27% YoY); ICE revenue +$91.3M (+51.6%); sold four detention facilities to the federal government for $2.2B gross (about $1.6B net). https://www.marketbeat.com/instant-alerts/corecivic-q2-earnings-call-highlights-2026-08-07/
- **GEO Group.** Q2 revenue about $732M (+15%); FY2026 revenue guide $2.95-3.05B; adjusted EBITDA guide $550-560M; contracted ICE capacity heading to about 29,500 beds. https://www.marketbeat.com/instant-alerts/geo-group-q2-earnings-call-highlights-2026-08-08/
- **Context.** H.R.1 provided $45B for detention expansion over about 51 months; about 90% of ICE detention is private. https://www.americanimmigrationcouncil.org/blog/immigration-challenges-implementing-the-one-big-beautiful-bill/ (Figures are from earnings-call summaries, so verify against the 10-Qs.)

**Shift that enabled it.** A one-time appropriation with a multi-year spend window and an enforcement mandate that cannot wait for new construction.

**Why incumbents failed.** They did not; they are the winners. New entrants fail because permitting and licensing take years.

**Open or crowded.** Closed for detention and politically toxic. The transferable lesson is to pre-position permitted capacity before the budget arrives.

**Transfer targets.** Cleared facilities (SCIFs), powered land near substations, munitions-grade energetics plants, shipyard and drydock capacity, drone test ranges, IL5/IL6 cloud regions, bonded warehouses and free-trade zones. Reputational and political risk should be a gate for any idea in this family.

---

## Pattern 3. A liability-shifting mandate becomes a per-event verification rail

**Mechanism.** A law makes the platform liable for a fact about the user (age, identity, provenance). The platform cannot build this itself at scale, so it buys a per-check API. Revenue is usage-based and scales with traffic, not headcount.

**Examples**
- **Socure.** ARR over $340M, 3,000+ customers, new ARR +62% YoY (Inc. / Star report). Broad identity, so only part is age-driven.
- **Persona.** $200M Series D at $2B (April 2025); ARR above $100M in 2025 (Forbes estimate, secondary).
- **Yoti.** Revenue +62% in 2025 to about $43M (year to March 2026); about 1M checks a day; still loss-making with over GBP100M of debt (City AM). Demand driven by the UK Online Safety Act. https://www.thestar.com.my/tech/tech-news/2026/08/22/the-internet-is-starting-to-card-everyone-these-startups-are-making-millions-from-it , https://www.cityam.com/?p=2379370
- **Platform side.** Roblox reported over half of global daily active users and 65% of US users had completed an age check by 2026-03-31.

**Shift that enabled it.** Free Speech Coalition v. Paxton (June 2025), UK Online Safety Act (July 2025), Australia's under-16 social media rule, US state app-store and children's laws, EU age-proof app in development.

**Why incumbents failed.** Platforms relied on self-declaration to avoid friction and privacy exposure. Bank-oriented KYC vendors were priced and designed for high-value checks, not cent-level consumer checks.

**Open or crowded.** Crowded at the vendor layer (Persona, Yoti, Veriff, k-ID, Socure and others). Skeptic's math: if all of Yoti's $43M were age checks at 1M a day (365M a year), that implies roughly 10 cents a check, a thin price for a $100M outcome. The chokepoint risk is Apple and Google absorbing the check into the OS or app store.

**Transfer targets.** Any law that forces a platform to attest a fact about a user: AI-content provenance and watermarking (EU AI Act Art. 50(2), provisional date 2026-12-02), non-consensual deepfake takedown, right-to-work verification under tougher immigration enforcement, AML identity checks for licensed stablecoin issuers.

---

## Pattern 4. A windfall refund creates a claims-recovery and claims-financing rail, until the government builds the free pipe

**Mechanism.** A court strikes down a levy, creating a large refund liability with a messy claims process. Four layers appear: filing services, litigation, claim purchase at a discount, and loans secured on the claim. The window closes when the payer offers a free portal.

**Examples**
- **IEEPA tariffs.** About $166B collected from 333,000+ importers. Supreme Court struck them down 6-3 on 2026-02-20. CBP's CAPE portal went live 2026-04-20. As of 2026-07-31 (CBP declaration): $128.68B accepted, about $100B refunded including interest, about $66B unreturned, about $11.4B on finally liquidated entries not yet processable; Amazon reported receiving $600M. https://www.supplychaindive.com/news/cbp-has-paid-100-billion-in-ieepa-tariff-refunds/827257/ , https://www.supplychain247.com/article/tariff-refund-process-goes-live-april-20-for-ieepa-tariffs
- **Claims market.** Pre-ruling claims traded around 20 cents on the dollar; about 40 cents right after the ruling (NPR). A later 50 to 80 cents figure appears in one undated source and is unverified. Hedge funds also lent against claims with PIK interest. American Eagle Outfitters and The Children's Place sold refund rights for cash. https://www.npr.org/2026/02/25/nx-s1-5723910/the-market-for-tariff-refunds
- **Startups and services.** Small players (for example Tariff Recovery Team) and law and consulting firms; no revenue figures found for any of them. DOJ's Federal Circuit appeal (filed 2026-06-03) could shrink universal relief.

**Shift that enabled it.** Statutory-authority ruling plus CIT order that all importers of record are entitled to refunds.

**Why incumbents failed.** Customs brokers were mostly filing tools, not financiers; they were busy, and large importers handled their own claims. The government itself became the best "product" by shipping CAPE in 60 days.

**Open or crowded.** Mostly closed for IEEPA. The fee-able residual is the finally liquidated entries (about $11.4B), SMB importers who never filed, and the appeal outcome. Honest verdict: the headline pool was huge, but the revenue pool for a new intermediary was small and short-lived.

**Transfer targets.** Pending refund disputes: Section 122 tariffs (CIT held unlawful 2026-05-07, relief limited to named plaintiffs, stayed by the Federal Circuit 2026-06-16), the new Section 301 tariffs, and other pools where a court may create refunds. The pattern to look for is a pre-existing long list of payers with a deadline for protective filing.

---

## Pattern 5. A regulatory permission slip creates a licensed first mover

**Mechanism.** A regulator or court says "yes" to a product that was previously illegal or grey. The licence is the moat; the product is simple; growth comes from distribution plus legal capital.

**Examples**
- **Kalshi.** CFTC-regulated; raised $1B at $22B (2026), double its $11B valuation five months earlier; annualized volume rose from $52B to $178B in six months; annualized revenue above $1.5B; about 89-90% of 2025 revenue from sports ($263.5M of 2025 fees). Legal risk is live: a Massachusetts court (Jan 2026) found unlicensed sportsbook conduct (appeal argued 2026-05-04, undecided), a Nevada loss (Nov 2025), cease-and-desist letters in at least six states, vs a Third Circuit win (2026-04-06). https://dealroom.co/news/128667-kalshi-raises-1b-hits-22b-valuation-and-1-5b-arr-as-legal-battle-looms/ , https://dealroom.co/news/136134-kalshi-eyes-40b-valuation-nearly-triple-rival-polymarket-as-prediction-m/
- **Circle after the GENIUS Act.** Verified in Circle's own Q2 2026 release: revenue and reserve income $701M (+7% YoY), USDC $73.3B at quarter end (+19% YoY, but down from $77B at end of March), reserve return rate down 66bp to 3.5%. One year after the law, the issuer's growth is mostly interest-rate driven. https://www.circle.com/pressroom/circle-reports-second-quarter-2026-results
- **Window closing.** OCC says final GENIUS rules by Nov 2026 with applications from 2027; 21 global banks (BofA, Citi, Goldman, Wells and others) announced a consortium stablecoin targeted for H1 2027. https://theblock.co/news/regulation/2026-08-19-occ-races-to-finalize-genius-act-stablecoin-rules-by-november-412240 , https://northeasttimes.com/2026/09/01/21-global-banks-plan-dollar-stablecoin-launch-by-mid-2027/

**Shift that enabled it.** Kalshi's 2024 court win against the CFTC, a CFTC that now sides with the sector, and the GENIUS Act (July 2025) for stablecoins.

**Why incumbents failed.** State-licensed sportsbooks cannot serve every state under one licence; banks moved slowly on stablecoins until the rules were certain.

**Open or crowded.** Kalshi's position depends on federal preemption holding; one state supreme court could change it. The stablecoin first-mover window closes in about 12 months as banks arrive.

**Transfer targets.** Where a licence application window opens: OCC national trust charters for stablecoin issuers (2027), any rescheduling or reclassification that opens a market (cannabis 280E relief is a candidate from background knowledge), drone beyond-visual-line-of-sight rules, nuclear micro-reactor licences. Treat as leads to verify, not findings.

---

## Pattern 6. Mandated government IT with a rich federal match: incumbents pre-empt it, but a hard dollar penalty on the payer opens a lane

**Mechanism.** Congress imposes a rule the states must operate. The federal government pays 90% of system builds, so the demand is real. But the installed integrators bid first, and here they offered discounts to protect their base.

**Examples**
- **Medicaid work requirements.** 43 states must implement by 2027-01-01; notices due 2026-08-31; 90% federal match for builds, 75% for operations. CMS announced 10 vendors (Accenture, Acentra, Conduent, GDIT, Deloitte, Gainwell, Maximus, Curam/Merative, Optum, RedMane) pledged over $600M in no-cost or discounted services; states estimated $3-10M each to set up; most states are using existing vendors. Deloitte alone has Medicaid system contracts with 25 states worth at least $6B (KFF). I found no startup contract awards. https://www.kff.org/medicaid/an-early-look-at-policy-decisions-as-states-get-ready-to-implement-work-requirements/ , https://www.fiercehealthcare.com/regulatory/10-medicaid-vendors-pledge-600m-discounted-free-services-support-work-requirements-cms
- **SNAP (the live next wave).** State admin share rises from 50% to 75% on 2026-10-01 (not error-linked). From 2027-10-01, states pay 0%, 5%, 10% or 15% of benefits depending on payment error rate (under 6%, 6 to under 8, 8 to under 10, 10 or more). National FY2025 error rate was 10.62% and only nine states were under 6%. One analysis puts the extra state cost at about $10B a year. Alabama alone faces about $174M a year unless it gets below 7.99%. States are already buying: Kansas hired a consultant (reported 10% to 5.5%), Mississippi is buying case-management software, Louisiana pays cash bonuses for spotting errors. https://alabamareflector.com/2026/04/24/federal-budget-changes-to-snap-could-cost-alabama-up-to-261-million/ , https://san.com/cc/states-scramble-to-cut-snap-error-rates-or-risk-billions-in-penalties-next-year/ , https://www.usdigitalresponse.org/resources/is-this-working-data-driven-strategies-to-reduce-snap-payment-error-rates

**Shift that enabled it.** H.R.1 (Public Law 119-21) work requirements and cost shifts.

**Why incumbents failed (or did not).** In Medicaid they did not fail; they gave the system build away and kept the contract. The opening is a layer they do not own: income and employment data, error detection, and state-by-state payment accuracy.

**Open or crowded.** Medicaid system builds: closed. SNAP error reduction: open, and the buyer has a hard number. Bottom-up illustration (my arithmetic, not sourced): if 40 states each face an average $100-200M a year of exposure and a vendor were paid 3-5% of the exposure it helped a state avoid, the pool is about $120-400M a year. Reaching $100M needs a large share of that, and the effect of error-rate reduction is hard to attribute, so contract terms matter. The caveat: error rates count over- and under-payments, not fraud.

**Transfer targets.** Any program where Congress converted a federal obligation into a state cost-share priced by performance: SNAP (now), Medicaid provider-tax and state-directed-payment limits (from background knowledge, not verified), unemployment insurance integrity, child-care subsidy integrity. Buyer: state SNAP director or the human services CIO.

---

## Pattern 7. A subsidy becomes a tradable asset (tax-credit transfer market); the cliff then splits winners from the dead

**Mechanism.** The IRA let developers sell tax credits for cash. That created a marketplace business (matching, diligence, insurance) and a financing layer. When the OBBBA phased out wind, solar and 25D, volume rushed ahead of the deadline, then segments that lost protection collapsed while those that kept credits kept growing.

**Examples**
- **Crux data (via PV Tech).** 2025 transfers $42B (vs $60B forecast); Q2 2026 a record $14.9B; H1 2026 up to $21B; FY2026 forecast $47.5-49B; clean-energy capex $74B in H1 2026, on pace for $180B. Solar share 30% (from 35%), wind share 7.5% (from 23%). https://www.pv-tech.org/us-clean-energy-tax-credit-transfers-us21-billion-h1-2026-crux/ , https://pv-magazine-usa.com/2026/08/18/clean-energy-capital-expenditures-on-track-for-180-billion-in-2026-reports-crux/
- **Casualties.** Sunnova (Chapter 11, about $10.7B of debt) and Mosaic (Chapter 11, 2025-06-06). Analysts note company-specific problems also existed. 25D ended 2025-12-31; leasing through 48E survives. https://www.canarymedia.com/articles/solar/sunnova-mosaic-bankruptcies-industry-challenges

**Shift that enabled it.** IRA transferability (2022); OBBBA begin-construction cutoff of 2026-07-04 and placed-in-service 2027-12-31 for wind and solar; FEOC restrictions.

**Why incumbents failed.** Tax-equity capacity was limited to a handful of banks, so the market needed brokers and insurers.

**Open or crowded.** Storage, nuclear and geothermal keep their timelines, so volume continues there. No marketplace revenue figures were found, so the profit pool is unproven; at an assumed 1-2% fee on about $48B the gross pool is only $0.5-1B, shared among brokers, insurers and banks (my arithmetic).

**Transfer targets.** Any other tradable government instrument: CBAM certificates (sales start 2027-02-01), 45Q/45V credits, state carbon and fuel-standard credits, RINs. The cautionary lesson: businesses whose customer is a retail subsidy recipient die quickly when the subsidy is withdrawn.

---

## Pattern 8. When regulation cannot keep pace with demand, the unregulated substitute earns a speed premium

**Mechanism.** A regulated queue (grid interconnection, permitting) becomes the bottleneck on a hot demand wave. A supplier that bypasses the queue charges for speed. The policy "failure" is the product.

**Examples**
- **Bloom Energy.** Q2 2026 revenue $1.065B (+166%); FY2026 guide $3.9-4.2B; Oracle master agreement for 2.8GW after a 55-day deployment; Brookfield infrastructure agreement expanded to $25B. Backlog is growing faster than revenue. https://www.webull.com/news/15315821020718080 (company results as relayed by press)
- **Policy status.** DOE told FERC (2025-10-23) to finalize a large-load (above 20MW) interconnection rule by 2026-04-30; FERC instead issued six show-cause orders to ISO-NE, NYISO, PJM, MISO, SPP and CAISO on 2026-06-18; outcomes pending. https://www.foley.com/insights/publications/2026/06/ferc-issues-six-tailored-show-cause-orders-to-accelerate-large-load-interconnection/

**Shift that enabled it.** AI data-center load growth meeting a decades-old interconnection process.

**Why incumbents failed.** Utilities and the grid operate on multi-year queues by design.

**Open or crowded.** Risky: if FERC or RTO reform actually speeds up interconnection, the speed premium shrinks. A business built on someone else's regulatory delay has an expiry date.

**Transfer targets.** Other regulated queues: transformer and switchgear supply, nuclear licensing for small reactors, water rights, spectrum, airspace approvals, port and rail slots. Look for a queue length measured in years and a customer with a very high cost of delay.

---

## Pattern 9 (anti-pattern). Compliance-deadline whiplash: the date moves, the vendor revenue never arrives

**Mechanism.** A rule creates a deadline and a flood of "readiness" vendors. A later political decision suspends, narrows or delays the rule. The spend shifts from "must" to "should", and the budget line disappears.

**Examples**
- **CMMC Phase 2.** The Department of War suspended Phase 2 on 2026-07-13; contracting officers were told to remove Phase II third-party assessment requirements; a 60-day review reported around late September or early October 2026 with no published outcome found; officials did not rule out cancelling the program. Pre-suspension estimates were 80,000-118,000 defense contractors, about 80-100 C3PAOs and $75,000-150,000+ per assessment (vendor numbers). https://www.wilmerhale.com/en/insights/client-alerts/20260720-pentagon-suspends-cmmc-phase-2-requirements-and-launches-review-of-cybersecurity-certification-program , https://www.akingump.com/en/insights/alerts/dow-pauses-cmmc-third-party-assessment-regimecould-this-be-cmmc-30
- **CSRD.** The December 2025 provisional deal limits scope to companies with over 1,000 employees and over EUR450M turnover, starting FY2027, cutting in-scope companies by roughly 90%; formal approval was still required. Sustainability software buyers are "more selective" and vendors are consolidating. I could not verify layoffs at Persefoni or Watershed. https://www.traverssmith.com/knowledge/knowledge-container/the-omnibus-reaches-its-destination-csrd-and-cs3d-20/ , https://knowesg.com/finance-technology/sustainability-software-faces-shake-up-as-rules-ease-in-eu-and-us
- **EU AI Act.** Provisional agreement 2026-05-07 moved Annex III high-risk to 2027-12-02 and Annex I to 2028-08-02; formal publication not confirmed. https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines/
- **EUDR.** Postponed 12 months to 2026-12-30 (large and medium companies), 2027-06-30 for micro and small. https://taxnews.ey.com/news/2026-0237-eu-deforestation-regulation-application-postponed-to-30-december-2026
- **Wind.** Share of tax-credit transfers fell from 23% to 7.5% (Pattern 7).

**Shift that enabled it.** Simplification and "omnibus" politics in the EU; a US administration that reviews or cancels rules it did not write.

**Why it matters.** Round 1 died on "the why-now was already used up". This is the mirror image: the why-now evaporates before it arrives.

**Decision rule for ideation.** Count a deadline as forced spend only if (a) there is a statutory penalty with a named enforcer who has budget and is already acting, (b) the rule is not inside an active simplification or review process, and (c) the buyer loses revenue or a licence, not just reputation, by missing it. Check each next-wave item below against this rule.

---

## Pattern 10. A price-control deal reroutes demand into a manufacturer-controlled channel; intermediaries get squeezed

**Mechanism.** Government pricing pressure (negotiation, most-favored-nation) leads manufacturers to open a cash-price channel that bypasses insurers and PBMs. The party that controls supply keeps the value; distribution partners are paid as marketing.

**Examples**
- **TrumpRx.** Launched 2026-02-05 with 40 drugs; 16 of the 17 largest manufacturers had signed the MFN framework; works by applying manufacturer-set cash prices outside insurance. https://www.beckershospitalreview.com/pharmacy/trumprx-launches-with-discounts-on-40-drugs-5-takeaways/
- **Hims & Hers.** 2025 revenue $1.85B (up from $1.48B) but gross margin fell from above 80% to 74% as it moved from compounded to branded GLP-1s (Novo in March 2026; LillyDirect in late April 2026). Bank of America called the arrangement outsourced marketing for pharma. Hims 8-K (Q2 2026): https://www.sec.gov/Archives/edgar/data/0001773751/000177375126000161/hims-20260630x8xkearningsr.htm
- **Medicare negotiation.** First 10 prices took effect 2026-01-01 with the Medicare Transaction Facilitator; pharmacies must enroll and face a refund-timing cash gap (NCPA study: about $10.8k a week per pharmacy, $40-46k a year lost revenue per pharmacy; assumption-dependent); 15 more drugs for 2027 including Ozempic and Wegovy. https://cms.gov/inflation-reduction-act-and-medicare/medicare-drug-price-negotiation/resources-pharmacies-and-dispensing-entities

**Shift that enabled it.** The IRA negotiation program plus MFN executive deals; TrumpRx rests on voluntary manufacturer agreements, not a statute, so it is more fragile than it looks.

**Why incumbents failed.** PBMs and insurers were the target of the policy, not its beneficiaries.

**Open or crowded.** The intermediary margin is thin and being competed away (Amazon One Medical entered GLP-1 the same week as the Lilly news). The small-ticket float problem for pharmacies is real but not a $100M business on its own.

**Transfer targets.** Any market where a policy forces price disclosure and a manufacturer-run direct channel: Part B drugs entering negotiation for 2028 (up to 15 more drugs, Part D and Part B). Other categories such as hearing aids or devices are speculative and unverified here. Ask who controls supply and who bears the working-capital gap.

---

## Pattern 11. The government exits as lender or payer; private capital fills only the creditworthy slice

**Mechanism.** When a federal loan or payment program is capped, a funding gap appears. Private lenders take the bankable slice at higher prices; a residual of able-to-repay but thin-credit borrowers is left, which is where a new underwriting model could win or lose.

**Examples**
- **Grad PLUS elimination.** Ended for new borrowers after 2026-07-01. Annual caps $20,500 (graduate) and $50,000 (professional). NBER working paper w35683 estimates about $8B a year across roughly 370,000 borrowers. Experian: about 38% of recent graduate borrowers exceeded the new limits. Sallie Mae projected 12-14% growth in private originations for 2026 (a projection). A Philadelphia Fed / PEER estimate says about 40% of over-limit borrowers have credit too weak for a private loan. I found no reported post-July origination figures. https://www.nber.org/papers/w35683 , https://www.experian.com/blogs/insights/private-student-lending/
- **Workforce Pell (early).** Effective 2026-07-01 for 8-15 week programs; two-stage state and federal approval; only about 18 programs federally approved in five states as of 2026-09-26 (third-party count). Not new money and rollout is slow. https://grantedai.com/blog/workforce-pell-18-programs-five-states-september-26-2026-north-carolina-54-state-approved-6-federal-forsyth-tech-70-percent-completion-placement-strategy

**Shift that enabled it.** OBBBA caps on graduate and professional borrowing.

**Why incumbents failed.** Existing private lenders want cosigners and credit scores of roughly 650-670+, so the thin-credit group is structurally unserved.

**Open or crowded.** The bankable slice is contested by SoFi, Sallie Mae, Earnest and others. Bottom-up check: $8B of annual originations at about 10% interest is about $0.8B a year of interest income at 100% share, so even a 12% share of the gap yields about $100M, which is heroic. Credit risk and regulatory limits on outcome-based contracts are the main caveats.

**Transfer targets.** Other places where the federal role was capped: Parent PLUS limits (from background knowledge, not verified), state-directed payment phase-downs for hospitals (both from background knowledge, not verified). Look for a new cap with a dated start and a quantified gap.

---

## Pattern 12. Rule volatility becomes a permanent compliance data layer (customs and trade)

**Mechanism.** Frequent changes in tariff authority, rates and origin rules mean every importer must repeatedly classify, value and document goods. The volatility itself is the recurring service.

**Examples**
- **Regime churn.** De minimis exemption suspended 2025-08-29 and upheld by the CIT 2026-08-13; OBBBA repeals it permanently from 2027-07-01 (per Saltbox); the EU applies a EUR3-per-tariff-line duty on low-value parcels from 2026-07-01. IEEPA struck down; Section 122 global tariff (10% or 15%, sources differ) imposed, held unlawful by the CIT, stayed on appeal, expired 2026-07-24; Section 301 forced-labor tariffs of 10-12.5% on 60 economies began the same day. https://www.americanbar.org/groups/public_contract_law/resources/procurement-lawyer/2026-fall/ieepa-tariffs-struck-down-replacement-tariffs-expired/ , https://www.saltbox.com/blog/end-of-de-minimis-ecommerce
- **Vendors.** Flexport: Sacra estimates $2.1B 2024 revenue (+30%) and that customs brokerage gross profit doubled in 2025; CEO targets about 30% growth in 2026 (mostly freight forwarding revenue, so the compliance slice is unclear). Zonos: awarded a CBP Commercial Solutions Opening pilot (Nov 2025); no public revenue. https://sacra.com/c/flexport/

**Shift that enabled it.** Executive-branch tariff experimentation plus the EU's matching moves.

**Why incumbents failed.** Customs brokers charge per entry and run on manual filings; ERP vendors do not maintain rules.

**Open or crowded.** Crowded (Flexport, Zonos, Avalara, Descartes and others) and revenue proof for the software slice is thin.

**Transfer targets.** Dated EU import rules: CBAM (definitive period since 2026-01-01; certificates on sale from 2027-02-01; first declaration for 2026 imports due 2027-09-30), EUDR (2026-12-30), and ongoing forced-labor tracing. Free allocation is 97.5% in 2026, so the net 2026 cost is small, which weakens near-term spend (sources conflict on 2027).

---

## Next-wave forced-spend calendar (status as of 2026-10-14)

| Date | Event | Payer | Status / how real |
|---|---|---|---|
| 2026-09-11 | EU Cyber Resilience Act: 24h/72h reporting duty for actively exploited vulnerabilities, all products with digital elements (even already on market) | Hardware and software makers selling in EU | In force; Commission guidance 2026-07-27. Enforcement posture not verified. https://www.jonesday.com/de/insights/2026/07/eu-cyber-resilience-act-24hour-reporting-duties-start-september-11-2026 |
| 2026-10-01 | SNAP admin cost share 50% to 75% | States | In force. High confidence. |
| 2026-11 | OCC final GENIUS Act rule (target); statutory reg deadline 2027-01-18 | Stablecoin issuers, banks | Promise, not published. |
| Late 2026 | CMMC review outcome | 80,000+ defense contractors | Phase 2 suspended; cancel risk. Do not build on it. |
| 2026-12-02 | EU AI Act Art. 50(2) watermarking and deepfake ban (provisional) | Generative AI providers | Provisional agreement; publication not confirmed. |
| 2026-12-30 | EUDR application (large and medium) | EU importers of cocoa, coffee, soy, palm, timber, etc. | Already delayed once; check April 2026 simplification review. |
| 2027-01-01 | Medicaid work requirements in 43 states; CCPA ADMT compliance | States; businesses using ADMT in California | Statutory; vendors chosen. |
| 2027-02-01 | CBAM certificate sales begin (first declaration due 2027-09-30) | EU importers of steel, aluminium, cement, fertilizer, etc. | In force; net 2026 cost is small. |
| 2027-07-01 | US permanent de minimis repeal (per Saltbox) | Cross-border e-commerce | Statutory. |
| 2027-10-01 | SNAP benefit cost share by error rate | States (about $10B a year combined) | Statutory; best-defined signer + dollar number. |
| 2027-12-02 / 2027-12-11 / 2027-12-31 | AI Act Annex III / CRA full obligations / wind-solar placed-in-service cutoff | AI deployers; product makers; developers | Dates provisional for AI Act. |
| 2028 | Delete Act broker audits; CCPA cybersecurity audit certifications from 2028-04-01 for companies over $100M; AI Act Annex I 2028-08-02; EU low-value parcel exemption fully removed (mid-2028) | Data brokers; large California businesses; manufacturers | Far-dated. |
| Unknown | Federal Circuit ruling on IEEPA universal refunds; Massachusetts high court on Kalshi; FERC/RTO responses to show-cause orders | n/a | Binary events that change multiple patterns. |

---

## Mapping to round 1's failure modes (what to carry into round 2)

- **Pools worth a $100M path.** SNAP and Medicaid cost-shifts (billions of state exposure), defense sub-tier supply, utility interconnection, and customs data are the only pools here where a bottom-up path to $100M exists without heroic share. Age verification, claims recovery and student-loan substitution pass only with heroic assumptions.
- **Payer with a budget line.** Strongest: state SNAP director (SNAP error rate), state Medicaid agency (work-requirement operations), Army or program offices (software enterprise agreements). Weakest: sustainability reporting and CMMC readiness.
- **Hidden incumbent check.** Every pattern here had a named incumbent: Deloitte/Gainwell/Conduent/Maximus/Optum (state systems), Persona/Yoti/Socure (identity), Flexport/Zonos/Avalara/Descartes (customs), SoFi/Sallie Mae/Earnest (student lending), Palantir/Anduril/Rheinmetall (defense), CoreCivic/GEO (detention). Round 2 ideas must say how they beat these.
- **Legal premise check.** Kalshi's whole position rests on federal preemption of state gambling law (pending in multiple courts). TrumpRx rests on voluntary manufacturer deals. Appeals on IEEPA refunds are pending.

## Gaps and things not verified

- Revenue for Crux, Zonos, Persona (only press estimates), Helsing, Quantum Systems.
- Post-July origination data for private grad loans.
- Persefoni and Watershed layoff claims (not found).
- Whether the H-1B $100k fee was extended past September 2026, and any measured offshoring effect.
- The CMMC task-force outcome (expected late September or early October 2026).
- Hims & Hers Q2 2026 numbers (the 8-K is linked but not read).
- Items marked "background knowledge" above (FAA modernization, cannabis rescheduling, Parent PLUS caps, Medicaid state-directed payment limits, app-store age laws).
- CBP Brandon Lord declaration read only through news summaries; CBPP vendor-landscape page returned HTTP 403.

---

# Appendix: raw research log (append-only, written as research proceeded)
# Policy-created spend: patterns (WORKING FILE, appended incrementally so nothing is lost)
Started 2026-10-14. Brief: businesses that exploded because of a 2023-2026 policy/regulation change.
## Raw research log (append-only; source URL + fact)

### Notes batch 1 (WebSearch summaries; verify before relying)
- Palantir Q2 2026 8-K (primary): US gov revenue $809M, +90% YoY; total rev $1.935B +93%; FY26 guide ~$8.15B. https://www.sec.gov/Archives/edgar/data/0001321655/000132165526000039/a2026q2ex991pressrelease.htm
- Anduril: Series H $61B post-money 13 May 2026 (Thrive, a16z); 2025 rev ~$2.2B; 2026 proj ~$4.3B (The Information, unaudited); Army 10-yr enterprise contract ceiling up to $20B (Mar 2026) - ceiling not obligated. Aggregator sources: https://sacra.com/c/anduril/ , https://www.ocbj.com/defense-2/anduril-gets-army-contract-worth-up-to-20b/
- IEEPA: SCOTUS struck down IEEPA tariffs 6-3 on 2026-02-20; ~333k importers paid ~$166B; CIT Judge Eaton ordered refunds (Atmus, Mar 2026); CBP CAPE tool phase 1 live 2026-04-20; 126,237 claims submitted as of May 11. Claims buyers, brokers, startups (Tariff Recovery Team). https://www.supplychain247.com/article/tariff-refund-process-goes-live-april-20-for-ieepa-tariffs , https://www.cohnreznick.com/insights/ieepa-tariffs-refund-request-process-open , https://www.frierlevitt.com/articles/ieepa-tariffs-refunds-importers-supreme-court-decision/

### Notes batch 2
- IEEPA refund claims MARKET: pre-ruling ~20c on dollar; right after SCOTUS ruling ~40c (NPR); Hedgeweek claims 50c->80c later (undated, single source, UNVERIFIED). Hedge funds also lend against claims w/ PIK interest. Seaport Global's Wes Harrell: "hundreds of millions" of deals done. https://www.npr.org/2026/02/25/nx-s1-5723910/the-market-for-tariff-refunds , https://www.hedgeweek.com/?p=103469
- Circle: Q2 2025 reserve income $634M (+50% YoY), avg USDC $61.3B (Circle PR, primary). Q2 2026 per secondary blog: rev $701M (+7%), USDC $73.3B (UNVERIFIED, needs Circle IR). Note: growth slowed - USDC fell from $77B (end Mar) to $73.3B. https://www.businesswire.com/news/home/20250812836620/en/Circle-Reports-Second-Quarter-2025-Results , https://stablecoininsider.org/circle-q2-2026-results-usdc-circulation/
- Medicaid work req (KFF/CBPP): 43 states must implement by 2027-01-01; notices by 2026-08-31; 90% federal match for system builds, 75% M&O; CMS roster of vendors (Optum, Deloitte, Maximus) some at discount/free; most states use EXISTING vendors; 34 states verify every 6 months; 18 states plan new data sources. Nebraska enforcing since 2026-05-01. https://www.kff.org/medicaid/an-early-look-at-policy-decisions-as-states-get-ready-to-implement-work-requirements/ , https://www.cbpp.org/research/health/assessing-the-medicaid-work-requirement-vendor-landscape

### Notes batch 3
- CBPP vendor page: WebFetch 403 (blocked). Use KFF + search snippets instead.
- **CMMC Phase 2 SUSPENDED 2026-07-13** by Dept of War; C3PAO Level 2 cert no longer a condition of award from 2026-11-10; contracting officers told to strip Phase II requirements; 60-day program review / Reform Task Force report expected late Sep-early Oct 2026; officials did not rule out cancelling program. DFARS 7012, NIST 800-171 r2, Phase 1 self-assessments + SPRS remain. Pre-suspension: ~80k-118k DIB firms, ~80-100 C3PAOs, wait 6-18 months, $75-150k+ per assessment (vendor est). => LESSON: compliance-deadline spend is political and can be pulled; do not build on an un-enforced deadline. https://www.wilmerhale.com/en/insights/client-alerts/20260720-pentagon-suspends-cmmc-phase-2-requirements-and-launches-review-of-cybersecurity-certification-program , https://www.jenner.com/en/news-insights/client-alerts/department-of-war-suspends-cmmc-phase-iibut-compliance-obligations-remain-as-does-enforcement-risk , https://www.akingump.com/en/insights/alerts/dow-pauses-cmmc-third-party-assessment-regimecould-this-be-cmmc-30
- Age verification: Persona raised $200M Series D at $2B (Apr 2025, Founders Fund/Ribbit), ARR >$100M in 2025 (Forbes est, secondary). Yoti turnover +55% to GBP20.3M (UK filings via City AM), ~1M age checks/day, loss-making, >GBP100M debt; driver = UK Online Safety Act (Ofcom deadline 25 Jul 2025). k-ID Series A $45M (a16z). Veriff last val $1.5B (2022). https://fintech.global/?p=198974 , https://www.cityam.com/?p=2379370 , https://www.thestar.com.my/tech/tech-news/2026/08/22/the-internet-is-starting-to-card-everyone-these-startups-are-making-millions-from-it

### Notes batch 4
- Age verification (Star/Inc/Forbes 2026-08-22, secondary): Socure ARR >$340M, 3,000+ customers, new ARR +62% YoY, ~$646M raised; Yoti revenue +62% in 2025 to ~$43M (yr to Mar 2026), >1B age checks; Persona ARR >$100M 2025 (Forbes est), $418M raised, ~700 staff; Roblox: >50% of global DAU completed age check by 2026-03-31. Laws: UK OSA, Australia under-16 social ban, EU age-proof app, US state patchwork (adult content, app-store acts, COPPA-type). Fraud: deepfakes = 1 in 5 biometric fraud attempts (Entrust 2026). NOTE: Yoti is ~$43M revenue after 5+ years and loss-making => per-check price is low (cents); this pool is real but fragmented. https://www.thestar.com.my/tech/tech-news/2026/08/22/the-internet-is-starting-to-card-everyone-these-startups-are-making-millions-from-it
- Grad PLUS eliminated for new borrowers after 2026-07-01 (OBBBA): annual cap $20.5k grad / $50k professional; NBER w35683 estimates ~$8B/yr gap across ~370k borrowers; Experian: ~38% of recent grad borrowers exceeded new limits; Sallie Mae projects 12-14% private originations growth 2026; ~40% of over-limit borrowers have credit too low for private loan (PEER/Philly Fed). Post-July origination data NOT found (projection only). https://www.nber.org/papers/w35683 , https://www.experian.com/blogs/insights/private-student-lending/
- TrumpRx launched 2026-02-05 with 40 drugs; 16 of 17 largest pharma signed MFN framework; cash-price channel bypassing insurance; Cost Plus Drugs, Lilly, Novo DTC GLP-1 ~$350/mo trending to $245. Hims: 2025 rev $1.85B (vs $1.48B), gross margin fell from >80% to 74% as it pivoted from compounded GLP-1 to branded (Novo Mar 2026, LillyDirect late Apr 2026); BofA: Hims = "outsourced marketing" for pharma (the DTC channel's economic value accrues to manufacturers, not intermediary). Hims 8-K Q2 2026: https://www.sec.gov/Archives/edgar/data/0001773751/000177375126000161/hims-20260630x8xkearningsr.htm ; https://www.beckershospitalreview.com/pharmacy/trumprx-launches-with-discounts-on-40-drugs-5-takeaways/

### Notes batch 5
- Rheinmetall H1 2026 (reported 2026-08-06; primary report at rheinmetall.com): H1 sales EUR5.2B +39%; operating result EUR786M (+74%, 15.0% margin); backlog EUR80.5B at 30 Jun 2026 vs EUR56.0B yr earlier; nominations EUR16.2B in H1 (book-to-bill >3); operating FCF -EUR1,616M (advance payments timing, inventory, capex); FY26 sales guide cut to EUR13.7-14.2B after F126 frigate cancelled. https://www.rheinmetall.com/en/media/news-watch/news/2026/08/2026-08-06-rheinmetall-news-half-yearly-financial-report-h1 ; https://www.grosswald.org/data/articles/rheinmetall-h1-2026-results-39-percent-sales-growth-80-5-billion-backlog-negative-operating-cash-flow-f126-guidance-cut.json
- Helsing: $1.8B Series E at $18B valuation, closed 2026-07-13 (up from EUR12B Jun 2025). Quantum Systems: $1.2B Series D ~ $8B valuation early Jul 2026 (Blackstone, Airbus, Advent). NO startup revenue disclosed in results => valuation-only evidence = weak on revenue. https://defensenews.com/global/europe/2026/07/13/helsing-raises-18-billion-in-europes-biggest-defense-startup-round ; https://www.trendingtopics.eu/helsing-deutsches-defensetech-holt-18-milliarden-dollar-von-grossen-us-investoren/
- Crux (tax credit transfer marketplace) data via PV Tech: 2025 transfers $42B (vs $60B forecast); Q2 2026 $14.9B record; H1 2026 up to $21B; FY26 forecast $47.5-49B; clean-energy capex $74B in H1 2026, on pace for $180B; solar share 30% (from 35%), wind share 7.5% (from 23%) after FEOC/PFE + permitting headwinds; begin-construction deadline 2026-07-04 passed; projects missing it must be placed in service by 2027-12-31. Storage/nuclear/geothermal keep timelines. https://www.pv-tech.org/us-clean-energy-tax-credit-transfers-us21-billion-h1-2026-crux/ ; https://pv-magazine-usa.com/2026/08/18/clean-energy-capital-expenditures-on-track-for-180-billion-in-2026-reports-crux/
- CSRD omnibus (provisional deal 2025-12-08; needs formal EP+Council approval): scope = >1,000 employees AND >EUR450M turnover, FY starting on/after 2027-01-01; ~90% fewer companies in scope; CSDDD 5,000 emp / EUR1.5B. Verdantix: buyers still spend but more selective; market consolidating (PwC DE via KnowESG). No verified Persefoni/Watershed layoff evidence found. https://www.traverssmith.com/knowledge/knowledge-container/the-omnibus-reaches-its-destination-csrd-and-cs3d-20/ ; https://knowesg.com/finance-technology/sustainability-software-faces-shake-up-as-rules-ease-in-eu-and-us

### Notes batch 6
- Immigration detention (H.R.1 = $45B for detention expansion over ~51 months): CoreCivic Q2 2026 rev ~$684.9M (+~27% YoY), ICE revenue +$91.3M (+51.6%), sold 4 facilities to federal govt for $2.2B gross (~$1.6B net); GEO Q2 rev ~$732M (+15%), FY26 rev guide $2.95-3.05B, adj EBITDA $550-560M, ICE contracted capacity heading to ~29,500 beds. ~90% of ICE detention is private. These are 2 incumbents (pre-existing) not new businesses = policy money flowed to EXISTING incumbents with capacity. Sources are 3rd-party summaries; verify with 10-Qs. https://www.marketbeat.com/instant-alerts/corecivic-q2-earnings-call-highlights-2026-08-07/ ; https://www.marketbeat.com/instant-alerts/geo-group-q2-earnings-call-highlights-2026-08-08/ ; https://www.americanimmigrationcouncil.org/blog/immigration-challenges-implementing-the-one-big-beautiful-bill/
- Kalshi (CFTC-regulated DCM; won 2024 court case vs CFTC on election contracts): raised $1B at $22B (Coatue; Mar/May 2026), ~2x the $11B from ~5 months earlier; annualized volume $52B -> $178B in 6 mo; annualized revenue >$1.5B; ~89-90% of 2025 revenue from sports ($263.5M 2025 fees); June 2026 talks ~$40B. Legal risk: MA court Jan 2026 ruled unlicensed sportsbook (appeal argued 2026-05-04, pending); 3rd Cir. Apr 6 2026 for Kalshi (NJ); Nevada loss Nov 2025; cease-and-desists in MD, NJ, OH, MT, AZ, IL. Polymarket relaunched US 2025-12-02 via CFTC-licensed arm. https://dealroom.co/news/128667-kalshi-raises-1b-hits-22b-valuation-and-1-5b-arr-as-legal-battle-looms/ ; https://dealroom.co/news/136134-kalshi-eyes-40b-valuation-nearly-triple-rival-polymarket-as-prediction-m/ ; https://theblock.co/post/399759/polymarket-and-kalshis-combined-lifetime-volumes-hit-150-billion-in-april
- EU AI Act Digital Omnibus: provisional agreement 2026-05-07 moves Annex III high-risk to 2027-12-02 and Annex I to 2028-08-02; Art 50(2) watermarking and new deepfake ban 2026-12-02; GPAI + prohibited practices unaffected; formal OJ publication status NOT confirmed. https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines/ ; https://www.simmons-simmons.com/en/publications/cmoveo6ke00icuxskpgueb0od/ai-omnibus-update
- EU Cyber Resilience Act: vulnerability/incident REPORTING obligations apply from 2026-09-11 (24h early warning, 72h notification, 14d-1mo final) to ALL products with digital elements incl. those already on market; rest (conformity assessment) 2027-12-11; Commission guidance 2026-07-27; non-EU manufacturers in scope. Reporting via ENISA Single Reporting Platform. => live NEXT-WAVE forced spend (hardware+software vendors selling in EU). https://www.jonesday.com/de/insights/2026/07/eu-cyber-resilience-act-24hour-reporting-duties-start-september-11-2026 ; https://www.mccannfitzgerald.com/knowledge/data-privacy-and-cyber-risk/cyber-resilience-act-reporting-obligations-apply-from-11-september-2026

### Notes batch 7
- De minimis: US $800 exemption suspended 2025-08-29; CIT upheld suspension 2026-08-13 (Saltbox); OBBBA repeals permanently 2027-07-01; EU flat EUR3/HS-code duty on low-value parcels from 2026-07-01, full removal ~mid-2028. Zonos: CBP awarded it a Commercial Solutions Opening pilot contract Nov 2025; no public revenue; last raise $69M Series A (2021). Flexport: Sacra est 2024 rev $2.1B (+30%), customs brokerage gross profit doubled in 2025 (Sacra), CEO targets ~30% growth in 2026. Post-SCOTUS: Section 122 global tariff (10% or 15%, sources conflict) imposed Feb 2026, CIT ruled it unlawful 2026-05-07, Fed Cir stayed 2026-06-16, Section 122 expired 2026-07-24 and replaced the same day by Section 301 "forced labor" tariffs (10%/12.5% on 60 economies, per ABA). Section 232 + 301 China were never at issue. => tariff REGIME CHURN is the durable forced spend (classification, origin, valuation, duty calc), not any single tariff. https://www.americanbar.org/groups/public_contract_law/resources/procurement-lawyer/2026-fall/ieepa-tariffs-struck-down-replacement-tariffs-expired/ ; https://www.saltbox.com/blog/end-of-de-minimis-ecommerce ; https://sacra.com/c/flexport/
- FERC: DOE Sec. Wright directed FERC (2025-10-23) to do large-load (>20MW) interconnection rule; FERC chose instead 2026-06-18 six show-cause orders to ISO-NE, NYISO, PJM, MISO, SPP, CAISO. Outcome pending. Bloom Energy Q2 2026 rev $1.065B (+166%), FY26 guide $3.9-4.2B, Oracle 2.8GW master agreement, Brookfield $25B infra deal; pitch = speed (55 days) while grid queue slow. => policy FAILURE/delay (grid interconnection) created a bottleneck business. Bloom's backlog grows faster than revenue. https://www.foley.com/insights/publications/2026/06/ferc-issues-six-tailored-show-cause-orders-to-accelerate-large-load-interconnection/ ; https://www.webull.com/news/15315821020718080
- H-1B $100k fee (proclamation 2025-09-19; new petitions from 2025-09-21; 12-month duration unless extended; status after Sep 2026 UNVERIFIED). Offshore GCC-boom claims = forecasts by interested consultancies; NO measured 2026 data found. India GCCs ~1,760 firms/3,050 units/1.9M employees FY24 (Rodl & Partner). WEAK evidence. https://www.outlookbusiness.com/explainers/why-trumps-100k-h-1b-visa-fee-is-a-gift-to-indias-gcc-model
- GENIUS Act: OCC 376-page proposal Feb 2026; comment closed May; OCC head Gould promises final rule by Nov 2026; statutory reg deadline Jan 18 2027 (agencies missed July deadline); effective Jan 2027; AML/sanctions in separate Treasury rulemaking; stablecoin total cap >$322B June 2026 (secondary); 21 global banks (BofA, Capital One, Citi, Goldman, Wells, etc.) announced 2026-09-01 consortium to launch USD stablecoin H1 2027. https://theblock.co/news/regulation/2026-08-19-occ-races-to-finalize-genius-act-stablecoin-rules-by-november-412240 ; https://northeasttimes.com/2026/09/01/21-global-banks-plan-dollar-stablecoin-launch-by-mid-2027/

### Notes batch 8
- IEEPA refunds LATEST (CBP official Brandon Lord court declaration, as of 2026-07-31; via search summaries): ~$128.68B accepted into CAPE; ~$100B refunds incl. interest completed and sent to Treasury; ~$23B at June; total at stake ~$166B. CAPE phase 2 launched 2026-06-29 (reconciliation entries), 2.2M submissions filed; phase 3 (finally liquidated entries ~ $11.4B / 6.9%) limited to importers who sued at CIT (CIT order 2026-07-17). DOJ appealed to Fed Circuit 2026-06-03 (non-party universal relief) - outcome unknown. American Eagle Outfitters + Children's Place SOLD their refund rights for quick cash. => the refund became a government-run self-service pipe within ~3 months: the claim-recovery window for BIG importers was short and mostly closed; residual = finally-liquidated entries, SMB importers who don't know, claims financing. https://www.supplychaindive.com/news/cbp-has-paid-100-billion-in-ieepa-tariff-refunds/827257/ ; https://www.ppai.org/media-hub/cbp-issues-over-20b-in-ieepa-refunds-in-first-month/ ; https://www.thompsoncoburn.com/wp-content/uploads/2026/07/FAQ-2-IEEPA-Tariffs-Litigation-CAPE-Developments.pdf
- Medicaid work requirements vendors: CMS announced (Jan 2026) 10 vendors pledged >$600M in no-cost/discounted services (Accenture, Acentra, Conduent, GDIT, Deloitte, Gainwell, Maximus, Curam/Merative, Optum, RedMane); states estimated $3-10M each to set up eligibility systems; Missouri est ~$33M; Deloitte has Medicaid system contracts with 25 states worth >= $6B (KFF); Senate Finance probed Deloitte/Gainwell/Conduent/GDIT Oct 2025 over system errors. NO startup contract awards found. => incumbents gave it away to protect the $6B+ installed base; new entrants face "free" incumbents. https://www.fiercehealthcare.com/regulatory/10-medicaid-vendors-pledge-600m-discounted-free-services-support-work-requirements-cms ; https://www.healthcaredive.com/news/medicaid-vendors-trump-deals-cms-work-requirements/810839/ ; https://kffhealthnews.org/news/article/deloitte-contractors-medicaid-eligibility-system-errors-senators/
- Workforce Pell: effective 2026-07-01 (final rule May 2026); programs 150-599 clock hours / 8-15 weeks; must be offered >=1 yr, 70% completion within 150% time, accredited Title IV institution, positive ROI; two-stage state + federal approval; as of 2026-09-26 only ~18 programs federally approved in 5 states (third-party count). Not new money; slow rollout. WEAK / early. https://grantedai.com/blog/workforce-pell-18-programs-five-states-september-26-2026-north-carolina-54-state-approved-6-federal-forsyth-tech-70-percent-completion-placement-strategy

### Notes batch 9
- IEEPA verified via Supply Chain Dive (2026-08-07, citing CBP's Brandon Lord CIT declaration as of 2026-07-31): $100B refunded, $128.68B accepted in CAPE, $166B total, ~$66B unreturned, ~$28.7B accepted not yet paid, ~$11.4B (6.9%) finally liquidated entries not processable; 2.2M submissions since 2026-06-29; Amazon reported receiving $600M; American Eagle and Children's Place SOLD refund rights for quick cash. DOJ appeal pending. https://www.supplychaindive.com/news/cbp-has-paid-100-billion-in-ieepa-tariff-refunds/827257/
- IRA fragility: Sunnova Ch.11 (Jun 2025; $10.67B debt) and Mosaic Ch.11 (2025-06-06) - residential solar lender/installer hit by rates + 25D termination (25D ended 2025-12-31, accelerated from 2032); leasing/TPO route survives via 48E (Sunrun-type). Analysts: both had company-specific problems predating the bill. => businesses built on a retail subsidy die fast when it's pulled. https://www.canarymedia.com/articles/solar/sunnova-mosaic-bankruptcies-industry-challenges ; https://pv-magazine-usa.com/2025/06/09/residential-solar-loan-provider-mosaic-announces-bankruptcy-filing/
- California Delete Act DROP: brokers must start processing deletion requests via DROP from 2026-08-01, access at least every 45 days; $200 per request per day penalty; >600 registered brokers; >300,000 CA residents registered; independent audits from 2028. CCPA regs (ADMT/risk assessment/cyber audit) effective 2026-01-01: ADMT compliance by 2027-01-01; risk assessments for pre-2026 processing by 2027-12-31; cyber audit certifications from 2028-04-01 for >$100M revenue firms (smaller by 2030). 20 states with comprehensive privacy laws in effect (Jan 2026). No vendor revenue figures found. https://privacy.ca.gov/drop-for-data-brokers/ ; https://www.hunton.com/privacy-and-information-security-law/cppa-finalizes-ccpa-regulations-on-automated-decision-making-technology-risk-assessments-and-cybersecurity-audits
- CBAM: definitive period began 2026-01-01; importers above 50t/yr must be authorised declarants; certificate sales start 2027-02-01; first annual declaration for 2026 imports due 2027-09-30; free allocation 97.5% in 2026 (net 2.5%; sources conflict on 2027 share). EUDR: postponed 12 months by Reg (EU) 2025/2650 to 2026-12-30 (large/medium), 2027-06-30 for micro/small; due diligence statement via TRACES NT; geolocation data required; fines up to 4% EU turnover (vendor claim). Second EUDR delay risk (April 2026 simplification review outcome not found). https://taxnews.ey.com/news/2026-0237-eu-deforestation-regulation-application-postponed-to-30-december-2026 ; https://cbamguide.com/learn/is-cbam-delayed/

### Notes batch 10
- Circle Q2 2026 VERIFIED (Circle pressroom 2026-08-05; https://www.circle.com/pressroom/circle-reports-second-quarter-2026-results): USDC end of quarter $73.3B (+19% YoY, but down from $77B end of March); avg circulation $76.5B (+25%); reserve income $668M (+5%); total revenue+reserve income $701M (+7%); other revenue $34M (+41%); adj EBITDA $143M (+8%); reserve return rate fell 66bp to 3.5%; USDC onchain volume $14.8T (+151%). => one year after GENIUS Act passage, Circle growth is mostly RATE-driven; regulatory clarity did not produce a revenue step-change at the issuer. (Distribution cost-share with Coinbase is from background knowledge of the S-1; NOT verified in this run.)

### Notes batch 11
- SNAP (OBBBA secs 10105/10106; Public Law 119-21; via search summaries of state/advocacy/AEI/USDR sources): state ADMIN cost share rises 50% -> 75% starting 2026-10-01 (FY2027), NOT tied to error rates (Kansas est +$16.4M/yr). BENEFIT cost share starts FY2028 (2027-10-01): error rate <6% = 0%; 6-<8% = 5%; 8-<10% = 10%; >=10% = 15%; year-1 states may elect FY25 or FY26 rate; later years use rate from 3 FYs prior; high-error states (>13.34%) get 1-2 yr delay. National FY25 error rate 10.62%; only 9 states <6%; one analysis: states collectively +~$10B/yr from Oct 2027. Alabama FY25 9.52% => ~$174.3M/yr from 2027-10-01 unless FY26 rate <7.99%. States acting: Kansas hired outside consultant (10% -> 5.5%), Louisiana cash bonuses for spotting errors, Mississippi buying case-mgmt software + training, Virginia exec order. Error rate counts over AND under-payments, not fraud. https://alabamareflector.com/2026/04/24/federal-budget-changes-to-snap-could-cost-alabama-up-to-261-million/ ; https://www.usdigitalresponse.org/resources/is-this-working-data-driven-strategies-to-reduce-snap-payment-error-rates ; https://san.com/cc/states-scramble-to-cut-snap-error-rates-or-risk-billions-in-penalties-next-year/ ; https://cosm.aei.org/snaps-new-cost-share-requirement-is-a-blunt-but-necessary-tool/
- Medicare drug negotiation: first 10 MFPs effective 2026-01-01 and Medicare Transaction Facilitator (MTF) began operating; manufacturers must ensure pharmacies pay <= MFP or refund the difference via MTF; pharmacies must enroll in MTF to contract with Part D plans; NCPA/Three Axis est weekly cash shortfall ~$10,838 per pharmacy and annual revenue loss ~$40-46k per pharmacy (assumption-dependent); 15 more drugs for 2027 incl. Ozempic/Wegovy; up to 15 more (Part D + Part B) for 2028. https://cms.gov/inflation-reduction-act-and-medicare/medicare-drug-price-negotiation/resources-pharmacies-and-dispensing-entities ; https://www.quarles.com/newsroom/publications/part-d-pharmacies-required-to-enroll-in-data-exchange-module-to-help-drug-price-negotiation-cash-flow-issue
