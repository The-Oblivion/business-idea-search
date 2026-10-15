# Round 2 pool map: Logistics, transport and trade

Mapped mid-October 2026. Slice: trucking and freight brokerage, customs and tariff compliance, ports, warehousing and 3PLs, last-mile, aviation maintenance and parts, rail, cross-border e-commerce, fleet electrification.

How to read this file:
- **Verified** = a figure I read in a source this run. **Derived** = my arithmetic, assumptions stated. **Unverified** = a secondary or vendor claim I could not confirm. Sizes marked derived are order-of-magnitude only.
- "Bottom-up check" lines are my quick sanity math against the round-2 rule (credible path to $100M annual revenue). They are not full validation.
- I ran about 40 searches and fetches, above the 15-25 guide, because several shocks were only visible in October 2026 press.

## The macro picture in this slice (what changed in 2025-2026)

1. **Tariff law is in constant churn.** The Supreme Court struck the IEEPA tariffs on Feb 20, 2026. A Section 122 tariff followed, expired July 24, 2026, and was replaced by new Section 301 actions. Section 232 duties (steel, aluminum, trucks, parts) never stopped. Gross tariff revenue was about $281B in FY2026 through July, before refunds (First Trust).
2. **A truck capacity and cost shock.** Non-domiciled CDL final rule effective Mar 16, 2026 (FMCSA estimates 194,000 holders lose eligibility), English-proficiency out-of-service enforcement (more than 26,000 drivers sidelined per FreightWaves), and a diesel spike to an all-time EIA record of $6.529/gal for the week of Sept 21, 2026 (Iran conflict). C.H. Robinson's Oct 2026 outlook has dry van cost per mile up 30% y/y for 2026.
3. **Aviation engine bottleneck** (IATA/Emerton study, June 25, 2026) with repair turnaround of 180-240 days.
4. **Small parcels collapsed after de minimis ended** (UPU: roughly 70% down by weight into the US and EU), and the EU added a EUR 3 per-item duty on July 1, 2026.

---

## Pool 1. IEEPA tariff refunds and pass-through recovery (US) — one-time, mostly spent

**Money flow.** US Treasury pays about $166B (estimated) in refunds plus interest to roughly 330,000 importers of record; importers then owe or fight over pass-through to customers (carriers that acted as importer of record, DDP sellers, B2B buyers charged tariff surcharges, consumers).

**Size.** About $166B, a one-time stock rather than an annual flow (Fortune, citing the expected total; Penn Wharton says up to $175B; Reuters factbox says at least $133.5B). As of Oct 2, 2026 CBP had accepted about $136.6B for processing and certified about $126B to Treasury (Supply Chain Dive). Derived: 76% is already certified, so the window for pure filing services is mostly closed.

**Shock.** SCOTUS invalidated IEEPA tariffs on Feb 20, 2026. CBP's CAPE portal launched Apr 20, 2026. Phase 3 (finally liquidated entries, about $11.4B or 6.9% of IEEPA duties) opened Oct 6, 2026 but only for CIT plaintiffs who gave CBP an importer-of-record number by Jul 30, 2026. DOJ has appealed to the Federal Circuit on whether non-plaintiffs can get refunds. As of Sept 11, 2026 more than 20,000 refunds worth about $1.3B were undelivered because importers had not enrolled in ACH. Section 232, 301 and AD/CVD duties are not refundable.

**Incumbents.** CBP itself (CAPE), customs brokers and forwarders filing as IOR (UPS, FedEx, DHL), Big 4 and trade-law firms on contingency, hedge funds and private credit buying claims. Reported claim prices: 20 cents on the dollar before the ruling, up to 60 cents after (Sidley, reporting journalism); Seaport Global's Wes Harrell told Fortune loans run about 50% LTV and outright sales about 75 cents.

**Why fragile.** Nothing fragile about the filers; the fragility is in the leftovers. Refunds go to the importer of record, not whoever bore the cost. FedEx booked $749M of customer refund obligations at May 31, 2026 and disclosed 14 nationwide class actions (13 consolidated in Tennessee federal court); Costco, EssilorLuxottica and Lululemon have also been sued by consumers. Who owns the money is unresolved for thousands of mid-market flows.

**Crowdedness: contested** for filing and financing (Tariff Refund Agency, Capital Gurus "IEEPA Recovery", the carriers, law firms, claim buyers). Open for pass-through reconciliation, class-action settlement administration and the non-plaintiff tail, but those are one-off.

**Funded startups.** I found no venture round for an IEEPA-refund startup (searched "startup raises funding IEEPA tariff refund recovery"). Named players without disclosed rounds: Tariff Refund Agency (platform plus advance funding), Capital Gurus.

**Payer who signs.** Importer CFO/controller; in the pass-through case, the importer's GC.

**Legal premise check.** Refunds are paid to IOR or the Form 4811 notify party. Universal refunds to non-plaintiffs are under appeal (Federal Circuit). CBP said May 29, 2026 it lacks authority to refund finally liquidated entries without a court order. S. 3905 (Tariff Refund Act of 2026) would force refunds within 180 days but is only a bill.

**Wedge hints.**
- Pass-through reconciliation for B2B buyers charged tariff surcharges under contracts that did not say who keeps refunds.
- Settlement and claims administration for the FedEx/UPS/retailer class actions.
- The ACH-enrollment and un-enrolled importer tail (about 8% of importers had enrolled by end of March per CBP).
- Roll the capability into a standing duty-recovery stack (drawback, post-summary corrections, valuation). One secondary source claims only about 20% of eligible drawback is claimed (about $15B a year unclaimed); treat as unverified.

**Bottom-up check.** At a 3% fee on a $30B remaining tail, roughly $0.9B total, shared across all players and one-time. A $100M business needs a recurring duty-recovery franchise, not refund filing. Lesson-6 risk (why-now already used up) applies strongly.

**Insider roles.** Customs attorneys at CIT, licensed brokers filing CAPE declarations, importer trade-compliance managers, distressed-debt and claims traders, class-action settlement administrators.

**Sources.** [Supply Chain Dive, Oct 8 2026](https://www.supplychaindive.com/news/cbp-starts-paying-out-ieepa-tariff-refunds-for-finally-liquidated-entries/832411/); [Fortune, Apr 12 2026](https://fortune.com/2026/04/12/us-importers-tariff-refund-claims-used-loan-collateral/); [Thompson Hine on Phase 3](https://www.thompsonhinesmartrade.com/2026/09/cbp-confirms-october-6-2026-launch-of-phase-3-of-the-ieepa-tariff-refund-process/); [Penn Wharton](https://budgetmodel.wharton.upenn.edu/p/2026-02-20-supreme-court-tariff-ruling/); [Sidley on claim purchasers](https://www.sidley.com/en/insights/newsupdates/2026/04/ieepa-tariff-refund-claims-key-considerations-for-lenders-borrowers-and-claims-purchasers); [FedEx FY2026 10-K](https://www.sec.gov/Archives/edgar/data/0001048911/000104891126000105/fdx-20260531.htm); [CNBC on UPS/FedEx refunds](https://www.cnbc.com/2026/04/21/ups-fedex-tariff-refunds-ieepa.html); [class action vs FedEx](https://www.classaction.org/news/fedex-charged-consumers-illegal-tariff-fees-class-action-lawsuit-contends); [Tariff Refund Agency](https://natlawreview.com/press-releases/tariff-refund-agency-launches-ieepa-refund-platform-help-importers-recover); [Capital Gurus](https://ieepa.capitalgurus.com/); [duty drawback eligibility matrix](https://gingercontrol.com/resources/duty-drawback).

---

## Pool 2. US customs brokerage and trade-compliance fees — HIDDEN GIANT

**Money flow.** About 330,000+ importers of record pay roughly 6,000+ licensed brokerage firms per-entry fees, bond fees, classification and compliance advisory, on top of roughly $300B a year of duties they remit to CBP.

**Size.** About $5.5B a year of brokerage fees (Mordor: $5.48B in 2026; Deep Cognition: $5.3B in 2025). Cross-check (derived): about 35M formal entries a year (GII Research, undated, pre-2020 figure of 35.5M) times roughly $150 average per entry is about $5.3B; the $150 is my assumption. This sits right at the $5B floor; the duties flowing through it ($281B FY2026 through July) are the real leverage. Broker headcount sources conflict: about 14,500 licensed individuals and 6,200 firms in one source, about 11,000 active in J.J. Keller.

**Shock.** Tariff regime churn: IEEPA struck Feb 20, 2026; Section 122 ran to Jul 24, 2026; new Section 301 actions followed; Section 232 derivatives keep expanding. De minimis shipments now need formal or postal entry (two CBP interim final rules on Jun 24, 2026; mandatory CPSC eFiling for mail shipments from Oct 22, 2026 per one secondary source). CAPE refund filings on top. NCBFAA and trade press report 3x document loads and filings that needed one HTS code now needing three to five.

**Incumbents.** Express integrators with brokerage arms (UPS, FedEx, DHL), forwarders (Expeditors, C.H. Robinson, Kuehne+Nagel), and thousands of small regional brokerages; software from Descartes and WiseTech (CargoWise). They make money per entry.

**Why fragile.** Per-entry flat-fee pricing breaks when each entry needs more skilled labor. Licensed broker labor is the scarce input and the license (plus CBP "responsible supervision and control") is also the moat against software-only entrants. Small shops run on legacy ABI/ACE integrations and have no capital to rebuild.

**Crowdedness: contested.** Funded: Flexport (customs brokerage inside a forwarder; raise history not re-verified this run), Zonos ($69M Series A 2021 per its own site; selected by CBP in Nov 2025 for a Commercial Solutions Opening pilot on classification and duty collection), Amari AI (about $4.5M seed Feb 2026, Pear VC and First Round, aggregator-reported), Alchemize (YC Spring 2026, amounts conflict), Nabu (France, seed May 2026 per aggregator), CustomsBridge (France, about $2.8M total), KlearNow (Series A 2020). Raft also operates here; I did not verify its funding.

**Payer who signs.** Import/logistics manager or head of trade compliance at the importer (mid-market: often the CFO).

**Legal premise check.** Only licensed customs brokers may transact customs business for others; an AI-native firm must hold a license (or buy one) rather than sell around it.

**Wedge hints.**
- Buy or build a licensed brokerage as the regulated shell, run it with automation, and roll up small brokers whose owners are near retirement.
- Vertical niches with tariff-stack pain: auto parts (Section 232), steel/aluminum derivatives, e-commerce sellers moving to formal entry (Type 11).
- Non-resident importer-of-record services for foreign DTC brands.
- Recurring duty-recovery services (post-summary corrections, drawback, first-sale, FTZ) sold on contingency.

**Bottom-up check.** $100M is about 1.8% of the $5.5B fee pool. As a licensed broker at about $150 per entry that is roughly 650,000 entries a year; reachable but needs a roll-up or a high-value vertical. Selling software to brokers is much smaller (6,200 firms times $20-50k is $125-310M at 100% share).

**Insider roles.** Licensed brokers at 20-100 person regional brokerages, ACE entry writers, trade-compliance managers at mid-market importers, former CBP import specialists, customs attorneys, customs sureties/bond underwriters, drawback specialists.

**Sources.** [Mordor US customs brokerage](https://mordorintelligence.com/industry-reports/united-states-customs-brokerage-market); [Deep Cognition](https://deepcognition.ai/customs-brokerage-in-flux-why-intelligent-document-automation-is-now-essential/); [J.J. Keller on broker counts](https://jjkellercompliancenetwork.com/regsense/customs-brokers); [NCBFAA, May 2025](https://ncbfaa.org/news-advocacy/ncbfaa-in-the-news/2025/05/13/customs-brokers-star-in-the-trade-wars); [First Trust, Aug 6 2026](https://www.ftportfolios.com/Commentary/EconomicResearch/2026/8/6/the-current-state-of-u.s.-tariffs); [Federal Register de minimis IFR](https://www.federalregister.gov/documents/2026/06/24/2026-12670/indefinite-suspension-of-the-de-minimis-exemption-for-merchandise-arriving-through-all-modes-other); [Amari AI](https://www.vcbacked.co/company/amari-ai); [Alchemize](https://www.vcbacked.co/company/alchemize); [CustomsBridge](https://www.vcbacked.co/company/customsbridge); [Zonos about](https://www.zonos.com/about-us); [CBP selects Zonos](https://www.hjnews.com/news/state/u-s-customs-and-border-protection-selects-zonos-to-power-ai-driven-trade-compliance-and/article_b2132b6b-6c99-5332-ac1f-aae1f095942b.html); [KlearNow](https://techcrunch.com/2020/05/01/klearnow-raises-16-million-to-bring-customs-clearance-industry-into-the-digital-age).

---

## Pool 3. Low-value cross-border e-commerce parcels into the US and EU (duty plus clearance plus rerouted logistics)

**Money flow.** Platforms and sellers (Temu, Shein, AliExpress, TikTok Shop, many SMEs) pay customs duties, clearance/brokerage, postal or express carriage, and now local-warehouse middle-mile and domestic last-mile, to customs authorities, postal operators, express carriers, consolidators and DDP-tech providers.

**Size.** Roughly $15B a year pre-shock (derived, borderline). US: 1.36B de minimis parcels in FY2024 (verified via multiple secondary sources citing CBP); CBP reported more than $1B of duties on 246M shipments from May to Dec 2025. EU: about 4.6B items under EUR 150 in 2024 (about 12M parcels a day, European Commission data); at EUR 3 per item that is up to about EUR 13.8B a year of new duty if volumes held (derived). Realized flow is lower: UPU reports small-parcel volumes into the US and EU fell roughly 70% by weight after exemptions ended, and Shein/Temu moved stock into US warehouses.

**Shock.** US de minimis ended for China/HK May 2, 2025 and for all countries Aug 29, 2025; kept after the SCOTUS ruling by EO 14388 (Feb 20, 2026); codified by two interim final rules Jun 24, 2026; statutory repeal scheduled Jul 1, 2027 (one secondary source). EU temporary EUR 3 per-item duty from Jul 1, 2026, with a separate handling fee proposed (date provisional, Nov 2026).

**Incumbents.** Postal operators (USPS, Royal Mail, La Poste, Deutsche Post), integrators (DHL, FedEx, UPS), Chinese consolidators (Cainiao, YunExpress), customs brokers, DDP providers (Global-e, Zonos).

**Why fragile.** Postal operators' systems were built for parcel-level exemption, not item-level formal entry (CBP's interim postal process is literally a spreadsheet submission for shipments of $2,500 or less). Platforms are re-architecting from per-parcel postal to bulk freight plus domestic fulfillment, so volume moves between payers.

**Crowdedness: contested to crowded.** Zonos (CBP pilot award), Global-e (public), many DDP/landed-cost vendors and fulfillment networks. I did not find a market-size figure for cross-border logistics from a credible source.

**Payer who signs.** Head of logistics/customs at a platform (very few buyers) or an SME seller's operations lead (many, small).

**Wedge hints.**
- Duty collection and IOSS-style intermediary services for EU sellers (93% of e-commerce imports run through IOSS per one source).
- Middle-mile consolidation from China/SEA to US and EU bonded or domestic warehouses for mid-sized sellers.
- Returns and re-export handling, which now carries duty implications.

**Bottom-up check.** Capturable fee pool is a small share of duty. At roughly $0.10 per parcel for clearance/duty-collection services on 4.4B EU parcels, about $440M; $100M would be about 23% share, which is heroic. US volume is down about 70% by weight. Treat as a weak standalone pool; useful mainly as a feeder to Pool 2.

**Insider roles.** Customs brokers handling Type 86 entries, postal-operator customs liaisons, platform logistics heads, IOSS intermediary compliance staff, cross-border 3PL ops managers, consolidators in Shenzhen/Yiwu.

**Sources.** [CBP $1B collected](https://www.cbp.gov/newsroom/national-media-release/cbp-collects-1-billion-end-de-minimis-loophole); [Federal Register IFR](https://www.federalregister.gov/documents/2026/06/24/2026-12670/indefinite-suspension-of-the-de-minimis-exemption-for-merchandise-arriving-through-all-modes-other); [European Commission, EUR 3 duty](https://commission.europa.eu/news-and-media/news/ensuring-fairness-and-safety-eur3-customs-duty-low-value-parcels-2026-06-29_en); [VATCalc on the EU levy](https://vatcalc.com/eu/eu-e3-levy-low-value-e-commerce-import-package-july-2026); [Retail Insight Network on EU volumes](https://www.retail-insight-network.com/newsletters/eu-impose-customs-duty-low-cost-imports/); [Nikkei on US small parcel shrinkage](https://asia.nikkei.com/economy/trade-war/trump-tariffs/tariffs-targeting-china-s-temu-shein-shrink-us-small-parcel-deliveries); [Red Stag stats](https://redstagfulfillment.com/how-many-packages-are-sent-under-de-minimis/).

---

## Pool 4. US truckload freight brokerage gross profit — squeezed by a capacity shock

**Money flow.** Shippers pay brokers per load; brokers pay carriers; the broker keeps the spread (gross profit). Brokers handle about 30% of US truckload spend (Highway).

**Size.** About $20B a year of broker gross profit (market-research estimates of $19.5-20.1B for US freight brokerage in 2025; methodology not shown, so this may be net revenue). Context (verified): ATA puts US trucking industry revenue at $906B for 2024. Unverified: J.B. Hunt's brokerage gross margin fell from 15.5% to 12.5% in Q2 2026 as purchased transportation rose 54% against revenue up 49% (ARK TMS blog, not checked against the filing).

**Shock.** Driver supply cut: non-domiciled CDL final rule effective Mar 16, 2026 (194,000 holders per FMCSA; other estimates 214,000 to 437,000), English-proficiency out-of-service enforcement (26,000+ drivers sidelined; codifying rule proposed Aug 10, 2026). Spot rates and costs up: C.H. Robinson (Oct 1, 2026) forecasts 2026 dry van cost per mile +30%, reefer +31%, flatbed +28%; route-guide failures peaked at 7.5% over the summer. Broker financial responsibility rule fully effective Jan 16, 2026: $75,000 bond or trust, with FMCSA able to suspend authority if it falls below.

**Incumbents.** C.H. Robinson, RXO, J.B. Hunt, Landstar, TQL, Echo, Coyote (UPS), Uber Freight and about thousands of small brokers.

**Why fragile.** Contract rates are fixed for months while carrier cost resets weekly, so margins compress when rates spike; small brokers are thinly capitalized and now carry a larger bond requirement and fraud exposure.

**Crowdedness: crowded.** Uber Freight, Loadsmart, Parade ($36M total raised), Highway (FTV Capital growth equity, 2025; claims 1,050+ brokers including 70 of the top 100), Freight Hero ($5-6M seed, mid-2026, amounts conflict), Loop (freight audit and payment; $95M Series C Apr 2026 per an aggregator), Triumph/TriumphPay. Convoy's 2023 collapse is the cautionary history.

**Payer who signs.** Broker owner/COO; for shipper-side products, VP transportation or logistics procurement.

**Wedge hints.**
- Credit, working capital and bonding for small brokers under the $75k rule.
- Rate-risk tools (indexed contracts, hedges) for shippers and brokers when spot-contract spreads blow out.
- Broker back-office outsourced as a service (Freight Hero's model, services wearing software clothes).

**Bottom-up check.** $100M is 0.5% of the $20B pool, but the path is as a broker itself (about $700M of gross revenue at 14% margin) or via a finance/insurance layer. Generic "AI copilot for brokers" is the round-1 cliche; avoid.

**Insider roles.** Broker ops/carrier-sales leads, freight claims managers, BMC-84 surety underwriters, TMS implementers, 3PL CFOs, shipper transportation procurement managers.

**Sources.** [CCJ on non-domiciled CDL](https://www.ccjdigital.com/regulations/article/15767991/fmcsa-to-force-nearly-200k-nondomiciled-cdl-holders-out-of-trucking); [Trucking News on English proficiency](https://www.ttnews.com/articles/english-proficiency-rule-2026); [FreightWaves on ELP sidelining](https://www.freightwaves.com/news/speaking-english-is-no-longer-optional-over-6000-drivers-have-found-out-the-hard-way); [C.H. Robinson Oct 2026](https://www.chrobinson.com/es-us/resources/insights-and-advisories/north-america-freight-insights/oct-2026-freight-market-update/na-truckload/); [FMCSA broker rule presentation](https://www.fmcsa.dot.gov/sites/fmcsa.dot.gov/files/2026-01/Broker%20and%20Freight%20Forwarder%20Rule%20Industry%20Presentation.pdf); [ARK TMS on margins](https://arktms.com/blog/freight-broker-margin-compression-purchased-transportation-costs-2026); [ATA trends](https://www.trucknews.com/business-management/ata-trends-report-reflects-down-year-for-industry/1003201179); [Highway](https://www.freightwaves.com/news/carrier-identity-platform); [Parade](https://www.freightwaves.com/news/parade-secures-17m-from-i-squared-capital-for-ai-endeavors); [Freight Hero](https://seedtable.com/companies/freight-hero/funding-rounds/seed-2026-07); [Loop](https://sacra.com/c/loop).

---

## Pool 5. US trucking liability and cargo insurance premiums

**Money flow.** Motor carriers (about 500k authorities; large fleets self-insure) pay premiums to admitted and surplus-lines insurers, usually through retail and wholesale brokers (RPS, Amwins).

**Size.** About $30B a year for heavy trucking (derived, unverified split). Verified: US commercial auto direct premiums written were $72.18B in 2025, up 12.1% (AM Best data via Beinsure). Trucking is the largest commercial-auto segment but I found no published trucking-only split; my estimate is roughly 40% of the total.

**Shock.** Verified (Insurance Business, Demotech analysis of 10-Ks): at the 10 largest public trucking companies, insurance and claims cost rose 54.4% from $992M (2021) to $1.53B (2025) against revenue up 9.95%, and combined net profit fell 46.9%. Median trucking nuclear verdict $51M in 2024 vs $21M in 2020 (Marathon Strategies). ATRI: liability premiums +18.6% 2021-2024 while crash rates fell and per-mile losses rose 33.1%. AM Best: commercial auto posted its 14th straight underwriting loss in 2024 (about $4.9B), reserves short by $4-5B (secondary); Q1 2026 broker survey shows commercial auto rates +5.8%, the largest of any line, while overall P&C rates fell 1.2%. Umbrella capacity: buyers who bought $25M can often only get $10M.

**Incumbents.** Progressive (about 15% of commercial auto DPW), Travelers, Old Republic, Liberty Mutual, Canal and other specialty writers; wholesalers RPS and Amwins; captives and risk retention groups.

**Why fragile.** Fourteen years of underwriting losses, rate inadequacy versus loss trend, and legacy class-code pricing that ignores telematics and driver quality. Capacity is retreating at the excess layers.

**Crowdedness: contested.** Nirvana Insurance (about $262M raised, $100M Series D at $1.5B valuation late 2025, more than $100M of premium by Mar 2025), Cover Whale ($27.5M debt and equity, Jun 2024), HDVI ($16M Series A, 8VC and Munich Re Ventures), Koffie ($4.5M seed).

**Payer who signs.** Owner or risk manager at small fleets; CFO/VP risk at mid-size and large fleets; the broker steers the decision.

**Legal premise check.** Insurance is state-regulated, requires paper (an admitted or surplus carrier or fronting arrangement) and rate filings; an MGA model avoids balance-sheet risk but not licensing.

**Wedge hints.**
- Excess/umbrella layers for 50-1,000 truck fleets where capacity has been withdrawn (MGA with reinsurer backing).
- Group captives or RRGs for mid-size fleets with video-telematics-based underwriting.
- Pre-litigation claims handling and evidence capture aimed at nuclear-verdict exposure.
- Driver-hiring risk scoring in a market where tens of thousands of drivers are being removed and negligent-hiring suits follow.

**Bottom-up check.** $100M of MGA commission revenue at about 15% commission is about $670M of written premium, roughly 2% of the $30B pool. Nirvana shows that scale is reachable but capital and talent intensive. A fee-based claims/risk service has a lower ceiling.

**Insider roles.** Trucking defense attorneys, liability claims adjusters, wholesale brokers at RPS/Amwins, fleet risk managers, safety directors, plaintiff-side attorneys, casualty actuaries.

**Sources.** [Insurance Business on tipping point](https://www.insurancebusinessmag.com/us/news/auto-motor/nuclear-verdicts-and-tariffs-push-trucking-insurance-past-a-tipping-point-580447.aspx); [Beinsure commercial auto ranking](https://beinsure.com/ranking/us-commercial-auto-insurers/); [FreightWaves on the crisis](https://www.freightwaves.com/news/how-legislators-and-insurers-built-a-trucking-crisis); [Carrier Management](https://www.carriermanagement.com/news/2025/09/23/279681.htm); [Nirvana $100M](https://coverager.com/nirvana-raises-100-million/); [Cover Whale](https://pulse2.com/cover-whale-insurance-tech-company-raises-27-5-million/amp/); [HDVI](https://news.crunchbase.com/startups/rebuilding-the-trucking-insurance-market-hdvi-closes-16m-series-a); [Koffie](https://insuranceinsiderus.com/article/2876lf7xagop8htt4m96o/trucking-insurtech-koffie-gets-into-gear-with-4-5mn-seed-round). The Q1 2026 rate survey figure came from a Heffins summary I could not open; month of shock is approximate.

---

## Pool 6. US heavy-duty truck repair and parts aftermarket — HIDDEN GIANT

**Money flow.** Fleets and owner-operators pay dealers, distributors, truck-stop service chains and independent shops for parts, labor and tires on Class 6-8 trucks and trailers; a large share is in-house fleet maintenance.

**Size.** About $100B a year (stale but order-of-magnitude). MacKay & Co: aftermarket parts for Class 6-8 trucks, trailers and chassis were $31.6B in 2019 (forecast $37B by 2024); service labor was $58.5B in 2015 with the total aftermarket about $107B (Fleet Maintenance, citing MacKay, assumes $100 an hour and includes in-house work). Verified (ATRI via FleetOwner): repair and maintenance was 21.5 cents per mile in 2025, up 8.6%.

**Shock.** Section 232 25% tariffs on medium and heavy trucks and parts from Nov 1, 2025 (proclamation Oct 17, 2025; USMCA content relief partial). FreightWaves: one injector costs 20-30% more than two years ago (anecdote). Carriers keep older trucks longer (C.H. Robinson Oct 2026: delayed replacements and aging equipment raising costs). Technician shortage: per ATRI-cited data 65.5% of shops short-staffed and nearly one in five technician slots unfilled (secondary). Diesel and driver shortages squeeze fleet cash.

**Incumbents.** OEM dealer networks (49% of parts purchases per MacKay 2019), heavy-duty distributors (FleetPride, TruckPro; 18%), national service chains (TA, Love's, Pilot), and independent shops (9% of parts purchases).

**Why fragile.** Highly fragmented shops with weak procurement scale, opaque parts pricing, OEM control of fault-code data, and an aging technician workforce. Dealers cannot add technicians fast either.

**Crowdedness: open for parts procurement, mobile service and technician supply; contested for shop software.** Fullbay (shop management; $23M growth investment, JMI Equity with Mainsail, 2019/2024 dates conflict) says its shops billed $5.04B in 2025, up 68% from 2023 (company claim). I found no venture-funded heavy-duty mobile repair company (searched; the funded mobile-repair names were light-duty Wrench and RepairSmith). Fleetio and similar fleet-maintenance software exist; not re-verified.

**Payer who signs.** Fleet maintenance director (mid/large fleet), owner-operator or small-fleet owner (long tail); shop owner for procurement or software.

**Wedge hints.**
- Group purchasing and parts price transparency for independent shops in the tariff era (aftermarket and remanufactured alternatives).
- Technician supply: training, staffing, and shared mobile technicians for small fleets.
- Warranty/recall/core recovery for fleets; fault-code intelligence that reduces dealer dependence.
- Payments and financing at the shop-to-fleet layer (the Fullbay flow is the data asset).

**Bottom-up check.** $100M is 0.1% of the pool. Fullbay's $5.04B of annual shop billings are about 5% of the pool; a 1-2% take on a similar flow is $50-100M. Reachable.

**Insider roles.** Fleet maintenance directors, independent shop owners/service managers, parts counter managers, FleetPride/TruckPro branch GMs, OEM dealer warranty administrators, tire dealers, diesel technician instructors, owner-operators.

**Sources.** [MacKay forecast (Heavy Duty Trucking)](https://www.truckinginfo.com/news/u-s-aftermarket-demand-continues-to-grow); [Heavy Duty Aftermarket forum report](https://www.truckpartsandservice.com/home/article/14973538/report-from-the-heavy-duty-aftermarket-forum); [Fleet Maintenance on cost to maintain](https://fleetmaintenance.com/blogs/blog/12182881/kolmans-komments-whats-the-annual-cost-to-maintain-a-big-rig); [FleetOwner on ATRI 2026 report](https://www.fleetowner.com/news/news/55391195/atri-releases-2026-trucking-operational-cost-report-for-fleet-benchmarking); [Trucker on ATRI costs](https://www.thetrucker.com/trucking-news/trucking-industry/trucking-is-getting-more-expensive-atri-report-explains-why); [Trucking News on the Section 232 truck tariff](https://www.ttnews.com/articles/trump-heavy-truck-tariffs); [Clark Hill on Section 232 scope](https://www.clarkhill.com/news-events/news/section-232-tariffs-expand-to-medium-and-heavy-duty-vehicles-parts-and-buses/); [FreightWaves on parts invoices](https://www.freightwaves.com/news/same-repair-same-truck-higher-invoice-here-is-the-number-behind-what-you-are-paying-at-the-parts-counter-right-now); [Fullbay funding](https://www.freightwaves.com/news/truck-repair-facility-management-platform-fullbay-raises-23-million-in-growth-investment); [Mainsail on Fullbay](https://mainsailpartners.com/fullbay-announces-strategic-growth-investment-from-jmi-equity-and-reinvestment-from-mainsail-partners/); [technician shortage explainer (secondary)](https://www.diesellaptops.com/blogs/industry-and-technology/the-diesel-technician-shortage-explained).

---

## Pool 7. US trucking diesel purchasing (fuel cards, discount networks, surcharge pass-through)

**Money flow.** Motor carriers and private fleets buy diesel at truck stops and cardlock sites, mostly through fuel cards (Comdata, EFS/WEX, Fleet One) and network discounts; shippers pay fuel surcharges indexed to the EIA weekly average; the intermediary margin is cents per gallon.

**Size.** About $180B a year of fuel purchases (derived); the addressable intermediary margin is roughly $4-9B (derived, assumes 10-25 cents per gallon on about 35B gallons). Basis: EIA says the transportation sector consumed about 2.94M barrels a day of distillate in 2025 (about 45B gallons a year); I assume heavy trucks are about 75-80% of that (about 35B gallons, consistent with an undated ATA figure of 38.8B gallons) and an average 2026 price near $5.20. The $0.10-0.25 per gallon margin is my assumption.

**Shock.** Diesel rose 89% from a January 2026 low to a record EIA national average of $6.529/gal for the week of Sept 21, 2026 (Iran conflict; California $8.18; parts of the Pacific Northwest above $8). A 30-gallon fill-up went from about $113 to $191 in a year. Many surcharge tables step up automatically near $6 and carriers say surcharges do not cover deadhead, extended routes and downtime (C.H. Robinson). EIA forecasts distillate inventories below the five-year low through early 2027.

**Incumbents.** Corpay (Comdata), WEX (EFS, Fleet One), TCS Fuel, truck-stop chains (Pilot/Flying J, Love's, TA), regional fuel jobbers. These make money on interchange, network fees and retail margin.

**Why fragile.** Interchange and discount structures are opaque to small carriers; fuel cards are credit products tied to underwriting that small fleets fail; surcharge indices lag. Truck stops want volume commitments that app-based aggregators can supply.

**Crowdedness: contested.** Mudflap (fuel discount app plus fuel card; $50M Series B Aug 2022; 2,500-3,600 stops; no 2025-26 round found), plus the big card networks. I searched for other 2025-26 fuel-card startups and did not find any with disclosed rounds.

**Payer who signs.** Owner-operators and small-fleet owners (long tail); fuel manager or CFO at mid-size fleets; shippers' procurement for surcharge tables.

**Wedge hints.**
- Working-capital fuel advances and credit for small carriers underwritten on load and payment data (diesel is eating the cash cycle).
- Surcharge auditing and indexed-contract redesign for shippers.
- Fuel-tax (IFTA) and fuel-card fraud controls.
- Forward-pricing or hedging programs for mid-size fleets.

**Bottom-up check.** At 10 cents per gallon net, $100M needs about 1B gallons, roughly 3% of trucking diesel. Plausible but fiercely contested; the more defensible version is the credit layer.

**Insider roles.** Fleet fuel managers, truck-stop network GMs, fuel-card sales reps, fuel jobbers/distributors, owner-operators, shipper transportation procurement managers, IFTA auditors.

**Sources.** [USAFacts, diesel +89%](https://usafacts.org/articles/diesel-prices-rose-89-from-january-low-to-september-record-high/); [Supply Chain 24/7 on EIA record](https://www.supplychain247.com/article/national_diesel_average_hits_an_all_time_high_for_the_week_of_september_7_reports_eia/interroll); [Cap Logistics on surcharge risk](https://insights.caplogistics.com/record-diesel-prices-freight-invoice-fuel-surcharge-risk-september-2026/); [EIA use of diesel](https://www.eia.gov/energyexplained/diesel-fuel/use-of-diesel.php); [C.H. Robinson Oct 2026](https://www.chrobinson.com/es-us/resources/insights-and-advisories/north-america-freight-insights/oct-2026-freight-market-update/na-truckload/); [Mudflap, Preqin](https://www.preqin.com/data/profile/asset/mudflap-inc-/495442); [Mudflap, PYMNTS](https://www.pymnts.com/?p=1416331).

---

## Pool 8. Commercial aviation MRO and aftermarket parts (global) — HIDDEN GIANT

**Money flow.** Airlines and lessors pay engine shops, component repair stations, airframe MROs and parts distributors; OEMs capture much of it through power-by-the-hour contracts and proprietary parts.

**Size.** About $100B a year globally (estimates range $83-136B; Precision Aviation Group cites about $97B for 2026, Spherical Insights $114B for 2025, Cassel Salpeter $136B for 2025 on a wider scope). Engines alone about $50.7B in 2026 (Straits Research). Used serviceable material is a small sub-slice at about $6.2B (Business Research Company).

**Shock.** IATA/Emerton study (Jun 25, 2026): engine MRO bottlenecks are disrupting airlines; GTF-powered groundings peaked at 648 aircraft (28% of the GTF fleet) in March 2025; LEAP shop visits rise from about 600-800 (2025) to more than 5,000 a year by 2040; GTF from about 1,000 to over 2,000. Secondary reports: more than 3,500 engines stalled awaiting castings and forgings; overhaul turnaround 180-240 days in 2026 versus 60-90 before 2019. Tariffs (15% Section 301 on Chinese-origin parts, 25% on certain EU-origin parts per one analysis) raise part costs. Airlines are keeping old aircraft and leasing extra ones.

**Incumbents.** GE Aerospace, RTX/Pratt & Whitney, Safran/CFM, Rolls-Royce (OEMs); Lufthansa Technik, AFI KLM E&M, ST Engineering, StandardAero, AAR, HAECO (MROs); Boeing Distribution, AJW, Satair and others (parts).

**Why fragile.** OEMs are constrained by supply of castings and forgings and cannot add shop capacity quickly; airlines and IATA are pushing for fair MRO market access, spare-parts price transparency and more PMA and used-parts channels. Counterfeit-document scandals have also pushed buyers toward traceable parts.

**Crowdedness: contested.** ePlane (B2B aerospace parts and repair marketplace; $9M round led by Marubeni Mar 2024, about $16.5M total then, a Series C reported Feb 2026 by one aggregator, unverified), plus fipart, PartPilot, PartsBase, AeroParts Now, Honeywell GoDirect Trade, Locatory. AerSale and AAR are public. I did not find 2025-26 venture rounds for engine MRO or PMA-development startups (searched).

**Payer who signs.** Airline VP technical operations or MRO procurement; lessor technical manager; for parts, the materials manager.

**Legal premise check.** PMA, DER repair data and 8130-3/EASA Form 1 traceability are FAA/EASA gated; a new entrant needs a repair-station certificate or partners with one.

**Wedge hints.**
- PMA and DER-approved repairs for high-failure rotables on A320/737 families and regional fleets (ATR, E-Jets).
- Engine teardown and used serviceable material trading, including module-level.
- Traceability and documentation verification for parts transactions.
- AOG parts logistics and engine lease-return inspection.

**Bottom-up check.** $100M is 0.1% of the pool. A USM/PMA trading or repair business at 10-20% gross margin needs roughly $0.5-1B of throughput. Capital for inventory is the constraint, not demand.

**Insider roles.** Airline MRO procurement and tech services directors, engine shop planners, FAA DERs, USM traders, lessor technical reps (AerCap, SMBC), Part 145 quality managers, AOG desk coordinators.

**Sources.** [IATA/Emerton study via AFM](https://afm.aero/engine-mro-bottlenecks-disrupting-airline-operations-with-shop-visits-set-to-rise-sevenfold-by-2040-iata-study-finds); [Precision Aviation Group](https://www.precisionaviationgroup.com/publications/aviation-mro-growth/); [Straits Research, engine MRO](https://straitsresearch.com/report/aircraft-engine-mro-market); [Fastener Shows on backlog](https://fastenershows.com/news/17000-aircraft-on-backlog-aviations-supply-chain-crisis/145609/); [AviationPros 2026 engine trends](https://www.aviationpros.com/aircraft-maintenance-technology/mros-repair-shops/article/55385642/6-month-analysis-which-2026-engine-trends-and-aviation-industry-forecasts-are-most-important-for-maintenance-organizations); [Pratt on MRO growth](https://aviationweek.com/mro/aircraft-propulsion/pratt-whitney-sees-high-single-digit-mro-growth-year); [ePlane tariff analysis](https://www.eplaneai.com/news/impact-of-us-tariffs-on-aviation-aftermarket-mro-providers-oems-and-operators); [ePlane TechCrunch](https://techcrunch.com/?p=1963781); [ePlane Calcalist](https://www.calcalistech.com/ctech/articles/0,7340,L-3803316,00.html); [ePlane on Caplight](https://www.caplight.com/company/eplaneai); [marketplace landscape](https://www.digitalcommerce360.com/?p=959334).

---

## Pool 9. Amazon-linked last-mile delivery (delivery service partners and rural program) — weak, wrong-payer risk

**Money flow.** Amazon pays about 3,000-4,400 small delivery service partners (DSPs) and a smaller rural small-business program for last-mile delivery, replacing volume UPS is shedding.

**Size.** About $15B a year (derived, low confidence). Amazon-linked figures: 4,400 DSP owners, 390,000 driving jobs and $58B of cumulative revenue (TechRadar, undated); Amazon says it has put $21.7B of investment into the DSP program over eight years and announced another $1.9B for 2027 in Sept 2026. I treat roughly $13-20B a year as the plausible range from $58B cumulative over about eight years of growth; this is not a published annual figure.

**Shock.** UPS (Jan 28, 2026) said it is in the final six months of its Amazon glide-down, will remove another 1M pieces a day in 2026, cut up to 30,000 more jobs and close 24 more facilities after closing 93 in 2025. Amazon is spending about $4B to triple its rural delivery network by end of 2026 (200+ new delivery stations).

**Incumbents.** Amazon Logistics (sole payer and rule-setter), UPS, FedEx, USPS.

**Why fragile or not.** DSP owners are price-takers; Amazon supplies vehicles, cameras, insurance and coaching, so there is little space for outside vendors. The "fragility" sits with UPS, not with a startup-addressable payer.

**Crowdedness: open, but for a reason.** I searched for startups serving DSP owners (insurance, payroll, fleet, software) and found none with disclosed funding. That is more likely a signal of weak economics (one dominant payer, captive services) than of opportunity.

**Payer who signs.** The DSP owner (about $30k liquidity floor to join, per guides) for services; Amazon for anything structural.

**Wedge hints.**
- Insurance, driver payroll/benefits and van financing sold to DSP owners.
- Adjacent: small regional carriers picking up the volume UPS and FedEx are pruning.

**Bottom-up check.** 4,000 DSPs times $25k a year of third-party spend is $100M at 100% share. Only an insurance or financing product with $1M+ of annual premium or balances per DSP works. Likely dead as a standalone; keep for completeness.

**Insider roles.** DSP owners and station managers, Amazon last-mile program staff, UPS center managers, driver payroll providers, commercial auto brokers who write DSP fleets.

**Sources.** [BNN Bloomberg on UPS cuts](https://www.bnnbloomberg.ca/business/company-news/2026/01/28/ups-to-eliminate-30000-more-jobs-as-amazon-volume-cuts-accelerate/); [Allwork on UPS closures](https://allwork.space/2026/01/ups-to-cut-30000-more-jobs-close-24-facilities-as-amazon-deliveries-wind-down/); [TNW on Amazon $1.9B DSP investment](https://thenextweb.com/news/amazon-dsp-1-9bn-investment-delivery-driver-pay); [TechRadar](https://www.techradar.com/pro/amazon-is-spending-billions-on-improving-its-delivery-services); [Supply Chain Dive on rural expansion](https://www.supplychaindive.com/news/amazon-rural-delivery-expansion-ups-postal-impact/746922/).

---

## Pools I looked at and rejected (so nobody re-does the work)

| Candidate | Why rejected | Source |
|---|---|---|
| Demurrage and detention disputes | About $3B a year (carriers collected about $15.4B between Apr 2020 and Mar 2025, per a secondary tally), under the $5B floor and falling from the pandemic peak; the D.C. Circuit struck part of the FMC billing rule Sept 23, 2025 | [FreightWaves](https://www.freightwaves.com/news/fmc-tightens-rules-on-charging-container-late-fees); [STR Trade](https://www.strtrade.com/trade-news-resources/str-trade-report/trade-report/2025_/september_/court-overturns-part-of-fmc-rule-reforming-shipping-penalty-practices) |
| Cargo theft and freight fraud | Reported losses were $725M in 2025 (up 60%), far too small as a pool; matters as a driver of Pool 4 and Pool 5 | [Verisk CargoNet](https://www.verisk.com/company/newsroom/cargo-theft-losses-surge-to-estimated-$725-million-in-2025-verisk-cargonet-analysis-reveals/) |
| Fleet electrification | Only 875 zero-emission heavy trucks sold in 2025 (0.3%); 45W ended for vehicles acquired after Sept 30, 2025; 30C ends June 30, 2026; EPA rescinded the endangerment finding Feb 12, 2026, mooting Phase 3. The ZET SCALE 2,500-truck Tesla Semi order is real but tiny against the pools above | [Trucknews](https://www.trucknews.com/sustainability/trump-epa-formally-rescind-endangerment-finding-affecting-ghg-phase-3-rule/1003209125); [FreightWaves](https://freightwaves.com/news/tesla-semi-zet-scale-2500-truck-order) |
| Section 301 China-linked ship fees and drayage | Fees suspended Nov 10, 2025 to Nov 9, 2026 and may resume Nov 10; drayage size estimates range $4B to $131B depending on the publisher, so unusable | [FreightWaves](https://www.freightwaves.com/?p=581773) |
| Freight factoring and small-carrier working capital | Triumph's factoring balance was $1.149B at Dec 31, 2025, but I found no credible industry-wide volume; my guess is a fee pool of $3-5B (below or at the floor). Best treated as a wedge inside Pools 4 and 7 | [Triumph 10-K](https://www.sec.gov/Archives/edgar/data/1539638/000153963826000007/tfin-20251231.htm) |
| Driver recruiting and turnover | Replacement cost about $8,234 per driver (UGPTI) with 60-95% turnover, but no credible aggregate spend figure; incumbents include Tenstreet | [Trucking News](https://www.ttnews.com/articles/cost-replacing-driver-averages-more-8000-industry-study-shows) |
| LTL classification overhaul (NMFC density-based, Jul 19, 2025) | Real shock, but I could not size LTL spend in this run. The user already runs an LTL freight audit venture (see memory), so I did not re-map it | [FreightWaves](https://www.freightwaves.com/news/ltl-industry-readies-for-new-freight-classifications-in-2025) |
| Rail (Class I mergers), warehousing and 3PL, duty financing | Not researched deeply enough to claim a startup-addressable shock. Duty financing is plausible: roughly $26B a month of duties flows through ACE, so a float or financing business is conceivable. Flag as gaps | n/a |

## Ranking hints for the next stage (my read, not a verdict)

- Best fit with round-2 rules (big pool, real budget, shock, not saturated): **Pool 6 (heavy-duty aftermarket)**, **Pool 8 (aviation MRO/parts)**, **Pool 5 (trucking insurance layers)**, **Pool 2 (customs brokerage roll-up)**.
- Real shock but thin or time-limited capture: Pool 1 (refunds), Pool 3 (parcels), Pool 4 (brokerage; crowded).
- Watch for: Pool 7's credit layer (small-carrier cash crunch from $6+ diesel).
- Probably dead: Pool 9.
- Cross-pool insight: the driver and fuel shocks are squeezing small carriers' cash at the same time insurance and parts costs are rising. A product that sits between small carriers and their four biggest costs (fuel, insurance, repairs, financing) would touch Pools 5, 6 and 7 together.
