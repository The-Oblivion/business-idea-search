# Round 2 pool map: Industrial and manufacturing slice (as of mid-October 2026)

Slice: reshoring and tariff-driven sourcing shifts, MRO and industrial distribution, contract manufacturing, the defense industrial base, factory automation and robotics, industrial equipment service, aftermarket parts, quality and certification.

Method: about 46 searches and fetches (WebSearch, WebFetch, SEC EDGAR, BLS). I read /biz/round2/inputs/lessons.md first and applied its rules: big pool first, assume someone already does it, name the payer, check the legal premise, do not shrink to survive.

How to read the evidence labels:
- **[primary]** = I fetched the primary document itself (SEC filing, BLS, FTC, AFS trade-association release).
- **[secondary]** = trade press, law-firm alert, market-research firm or search-engine summary; I did not open the underlying document.
- **[memory]** = from my own background knowledge, not re-verified in this run.
- **[derivation]** = my arithmetic, shown.

Pools, in order (hidden giants marked HG):

1. US industrial MRO and indirect-supplies spend (distribution)
2. US OEM spend on outsourced machined parts (machine shops) - HG
3. US metalcasting purchases (castings; defense-critical) - HG
4. DoD munitions and shipbuilding production ramp, as it flows to sub-tier suppliers
5. US industrial plant maintenance, repair and millwright labor and services - HG
6. Owners' parts and service spend on heavy equipment (ag, construction, mining), now opened by right-to-repair - HG
7. North American factory-automation and robot-cell spend
8. US importers' customs-duty bill on industrial inputs, and the duty-mitigation services market
9. US medium- and heavy-duty truck parts aftermarket (independent fleets and shops) - HG
10. US-owned contract manufacturing in Mexico (IMMEX / maquila) under the USMCA review

Dead or excluded at the end (CMMC, ISO 9001 certification fees, IEEPA refunds, global TIC, Section 232 robotics outcome).

Overlap note for the synthesizer: pool 8 touches trade/logistics slices, and the finance slice already excluded IEEPA refund claims. I treat duty mitigation on Section 232 and 301 goods as a different stream from IEEPA refunds.

---

## 1. US industrial MRO and indirect-supplies spend (distribution)

- **Money flow:** plants, contractors and facilities pay industrial distributors (Grainger, Fastenal, MSC, Motion, Applied, Amazon Business, thousands of regional independents) for MRO products: fasteners, safety gear, cutting tools, bearings, electrical, janitorial. Distributors buy from thousands of suppliers (Grainger: more than 5,000 primary suppliers, none above 5% of purchases) and earn roughly 39-45% gross margin.
- **Size:** about **$165B a year** addressable in North America for the "high-touch" MRO model.
  - Grainger's own 2022 investor-day estimate: High-Touch Solutions NA addressable market $165B, with Grainger at about 7% share or $11B of a North American B2B supply market of about $1.4T. [secondary: search summary of the investor deck, not re-verified]
  - Earlier 10-K sizing: US MRO about $127B in 2017; "no player has double-digit share". [secondary]
  - Cross-check from actuals: Grainger FY2025 net sales $17,942M, gross margin 39.1%. [primary: [Grainger FY2025 10-K](https://www.sec.gov/Archives/edgar/data/277135/000027713526000011/gww-20251231.htm)] The 10-K itself calls it "the large and fragmented MRO industry". Fastenal 9M-2026 net sales $7,051.9M (annualised about $9.4B) and MSC fiscal Q3-2026 sales $1,047M (about $4.2B annualised) [derivation]. Top three together about $31B, a minority of the pool.
- **Shock (2025-2026):**
  - Tariff regime churn. IEEPA tariffs struck down by the Supreme Court 2026-02-20 (6-3); a flat 10% Section 122 surcharge expired 2026-07-24 and was replaced the same day by Section 301 duties of 10% or 12.5% on goods from 60 economies; Section 232 metals tariffs restructured 2026-04-02 (effective 2026-04-06). [secondary: [UHY, July 2026](https://uhy-us.com/insights/news/2026/july/tariff-reset-section-122-expires-as-section-301-duties-expand)]
  - Spend is consolidating to the biggest distributors. Fastenal Q3-2026 (reported 2026-10-14): net sales $2,463.3M, +15.5%; product pricing added about 240 bp; total customer sites fell to 90,759 from 98,823 while $50k+/month sites rose to 3,288 from 2,771; manufacturing daily sales +17.2%, heavy manufacturing +20.2%; contract sales 76.5% of sales; gross margin helped by "direct sourcing savings, supplier rebates, and tariff refunds". [primary: [Fastenal Q3-2026 8-K](https://www.sec.gov/Archives/edgar/data/0000815556/000081555626000046/ex_99109302026earningsrele.htm)]
  - Grainger said underlying MRO demand was muted in 2025. [secondary]
- **Incumbents:** Grainger, Fastenal, MSC, Applied, Motion, Amazon Business, Home Depot's SRS/HD Supply, plus a long tail of local distributors. Captured by margin on product plus "inventory management" services (vending, bin stocking, onsite).
- **Fragility / why they cannot respond:** the big three are healthy, so I do not call them fragile. The fragile layer is the mid-size independent distributors and the plants' own storerooms: the independents lose national accounts to Fastenal and Grainger (the site-count data above), and they reprice slowly while tariffs change every few months. Plants hold large stocks of slow-moving spares they cannot find, cross-reference or sell. [derivation / memory]
- **Crowdedness: contested.** Funded startups found (2023-2026): Partium (Philadelphia, AI spare-parts search, $15M Series A led by Trestle Partners, 2024-09) [secondary]; Eezee (Singapore, MRO e-commerce, raised $5M 2026-02, total $18.7M) [secondary]; Moglix (India, B2B industrial marketplace) [secondary]; GoExpedi (Houston, last round $25M Series B in 2019, so old). Amazon Business and Grainger's own Zoro are the real competition. I found no US startup with a 2025-2026 round that targets independent distributors.
- **Wedge hints:** (a) repricing and sourcing-substitution software for independent industrial distributors under tariff volatility; (b) plant-side spare-parts data cleanup, cross-reference and surplus resale (Partium is the funded entrant, only one of many ways in); (c) distributor roll-ups where the acquirer supplies software and buying scale.
- **Insider roles:** plant storeroom and MRO buyers; inside sales reps and branch managers at independent distributors; Fastenal onsite managers; distributor pricing analysts; reliability and maintenance planners; indirect-spend category managers.
- **Hidden giant:** no. Investors know it. The long-tail independent distributor layer is the less-looked-at part.
- **Bottom-up path check (derivation):** about 2,000 independent distributors, if each paid a $50k a year software fee, is $100M. I did not verify the count, so treat it as a hypothesis to test, not a result.

---

## 2. US OEM spend on outsourced machined parts (machine shops) - hidden giant

- **Money flow:** manufacturers (aerospace, defense, energy, medical, machinery, automotive) buy custom machined parts from about 16,600 independent machine shops on quote, mostly via RFQ and relationships.
- **Size:** about **$47.8B** of 2026 revenue for US machine-shop services (NAICS 33271), roughly 16,619 businesses, about 224,000 employees, 0.4% five-year revenue CAGR forecast. [secondary: [IBISWorld, updated Feb 2026](https://img3.ibisworld.com/united-states/industry/machine-shop-services-in-the-us/645), via search summary]
  - Derived: about $2.9M revenue and 13.5 employees per business. [derivation: 47.8B / 16,619; 224k / 16,619]
  - Xometry management claims a $275B custom-parts opportunity (global, company claim, not independent). [secondary]
  - Excludes captive in-house machining and fabricated-metal job shops.
- **Shock (2026-04):**
  - Section 232 metals tariffs restructured by proclamation 2026-04-02, effective 2026-04-06. Most derivative products moved from 50% on metal content to 25% on the full entered value, a formal derivative "inclusions" process was terminated, and Commerce/USTR can add products on a rolling basis. [secondary: [Thompson Hine, April 2026](https://www.thompsonhinesmartrade.com/2026/04/president-trump-makes-major-changes-to-section-232-tariffs-on-aluminum-steel-and-copper/); Perkins Coie and BHFS say the same] Section 301 duties of 10-12.5% added 2026-07-23/24 (see pool 1).
  - Workforce is the binding constraint. NTMA surveys: all respondents named recruitment a top challenge; 82% rated conditions good or better in August 2026 (survey of 150+ members). [secondary]
  - Capital is now flooding the high-end niche: Hadrian raised $1.37B (Series D, 2026, $7.87B valuation) to build automated US factories for defense and space parts. [secondary]
- **Incumbents:** thousands of owner-operated shops; buyer-side OEM procurement and supplier-development teams; marketplaces (Xometry, Protolabs) on the prototype and low-volume end.
- **Fragility:** shops quote by hand over days, are owner-led with an aging workforce, and cannot easily finance automation. Tariffs raise landed cost of imported machined parts, so domestic quotes are suddenly competitive, but shops lack capacity and people to absorb it.
- **Crowdedness: contested** (crowded for defense/aerospace CNC). Named, funded: Xometry (public; Q3-2025 revenue $181.0M, +28%; a critic argues marketplace revenue has been flat since Q3-2022) [secondary]; Protolabs (public, in-house production); Fictiv and Hubs (no recent round found; Fictiv acquired by MISUMI in 2025 and Hubs by Protolabs in 2021 [memory]); Hadrian ($260M 2025-07, then $1.37B 2026) [secondary: [TechCrunch 2025-07-17](https://techcrunch.com/2025/07/17/hadrian-raises-260m-to-build-out-automated-factories-for-space-and-defense-parts)]; Isembard (London; reported $50M Series A led by Union Square Ventures in 2026, per Vestbee, unverified) [secondary]; Standard Bots ($200M Series C, June 2026, sells robots to machine shops) [secondary].
- **Wedge hints:** mid-volume (100-5,000 pieces) mid-tolerance parts that Xometry's prototype model and Hadrian's defense-grade model both skip; shop-side ERP, quoting, scheduling and inspection-as-a-service (CMM and first-article reports); buy-and-automate roll-ups of non-defense shops; used-machine and tooling financing.
- **Insider roles:** shop owners and estimators; OEM sourcing and supplier-development engineers; NTMA and PMPA staff; CNC programmers; SBA/commercial lenders to shops; Haas and Mazak dealers.
- **Hidden giant:** yes.
- **Bottom-up path check (derivation):** a $100M software/services business needs about 2,000 shops at $50k a year, or 12% of all shops. That is heroic for a software play; a roll-up or marketplace take rate on about $1B of flow (10% take) is the alternative route. I flag this as hard.

---

## 3. US metalcasting purchases (castings; defense-critical) - hidden giant

- **Money flow:** OEMs and primes (valves and pipe fittings, pumps, heavy equipment, vehicles, rail, aerospace and defense) pay foundries for castings. Foundries buy scrap, alloys, sand and patterns, and do their own finishing.
- **Size:** **$53.7B** of US metalcasting industry revenue in 2025; AFS projects +8.0% casting sales growth for 2026 (about $58B), up from a 4.2% projection in January. [primary: [AFS, 2026-07-27](https://www.afsinc.org/news/2026/07/27/afs-projects-8-percent-casting-sales-growth-2026)]
  - Forgings sit on top and are not counted: the only FIA figure I found is $10.6B of custom-forging shipments in 2012, too old to use. [secondary]
- **Shock (2026-09):**
  - The Department of War's "Manufacturing Technology Program Strategic Plan FY2026-2031" (published 2026-09-30) names castings, forgings and microelectronics as single points of failure and states: "Today, we lack the latent capacity to rapidly scale production of key systems and munitions in a crisis." It cites just-in-time logistics, offshoring and consolidation, qualification delays and small-supplier financing gaps. No new dollars attached. [secondary: [defence-industry.eu, 2026-10-03](https://defence-industry.eu/u-s-department-of-war-warns-of-limited-capacity-to-increase-weapons-production-in-a-crisis/); I did not open the plan itself]
  - A Pentagon acquisition official is quoted saying the defense cast-and-forge supply chain has shrunk 80% while needed output is at Cold War tonnage; at least 122,000 more workers needed by 2028. Date of quote unclear. [secondary: [IACMI](https://iacmi.org/metal/)]
  - AFS puts total tariff cost to the industry at about $1B to date, largely 30% China tariffs. [secondary]
  - A June 2026 MxD casting-and-forging "digital fabric" roadmap cites aging equipment, workforce shortage and offshoring. [secondary]
- **Incumbents:** thousands of small and mid-size foundries; large aerospace casting and forging houses (Howmet, PCC, Wyman-Gordon, Carpenter [memory]). The count of US foundries was not found in AFS's release (a narrower figure: about 377 foundries make valves and pipe fittings [secondary]).
- **Fragility:** capital-intensive, environmentally permitted, aging workforce, long pattern and tooling lead times, and qualification (NADCAP, AS9100) that takes months to years. Customers cannot easily dual-source because of qualification cost, so capacity is sticky and cannot flex.
- **Crowdedness: open.** Castings-specific startups found: Fabri (MIT spinout, investment casting, $13.5M total, RTX Ventures and Lockheed Martin Ventures are investors, second foundry targeted for 2027; one profile dates a seed round to 2026-06, which looks like a data artifact) [secondary: [Tectonic](https://www.tectonicdefense.com/fabri-announces-its-raised-13-5m-for-new-age-casting/)]; Foundry Lab (New Zealand, microwave casting, $8M Series A, date unclear). Adjacent but not casting: Hadrian (CNC). I did not find a funded foundry-sourcing marketplace or qualification-as-a-service company.
- **Wedge hints:** casting and forging sourcing and qualification (RFQ routing, first-article, NADCAP-ready paperwork); pattern and tooling as-a-service (digital twin, 3D-printed sand molds); foundry capacity and utilization data; casting-to-machining kitted supply for primes; foundry roll-up with software.
- **Insider roles:** foundry owners, melt and pattern-shop managers; prime supplier-quality engineers; DCMA reps; NADCAP auditors; AFS and FIA staff; metallurgists qualifying alloys.
- **Hidden giant:** yes.
- **Bottom-up path check (derivation):** a 3% take on $53.7B is $1.6B of flow-based revenue, so the $100M test is about 6% of the pool at a 3% take rate. Needs trust and qualification credentials before volume.

---

## 4. DoD munitions and shipbuilding production ramp, as it flows to sub-tier suppliers

- **Money flow:** Congress funds the Department of War; primes (Lockheed, RTX, Northrop, General Dynamics, HII, L3Harris) pass roughly half or more of the cost to sub-tier suppliers (castings, forgings, machined parts, energetics, electronics). An Army official said subcontractors often account for 50-60% of weapon-system cost. [secondary]
- **Size (my derivation):** about **$10B a year** flowing to sub-tier suppliers from newly funded work only.
  - Reconciliation law (OBBBA, signed 2025-07-04): about $150B for defense, with the Pentagon given until 2029 to execute. Reported lines: $29B shipbuilding, $25B munitions, $25B Golden Dome. [secondary: [Covington / Inside Government Contracts](https://www.globalpolicywatch.com/2025/07/one-big-beautiful-bill-act-makes-150b-investment-in-defense/); line items from SOFREP]
  - $25B + $29B = $54B over about four years = about $13.5B a year. FY2026 appropriations (topline $838.7B) added another roughly $3B to $6.4B for munitions (sources differ) and gave multiyear authority for 8 of 13 missiles requested (PAC-3, LRASM, JASSM-ER, THAAD, SM-6, AMRAAM, Tomahawk, SM-3 IB). [secondary: [Breaking Defense, 2026-01](https://breakingdefense.com/2026/01/fy26-defense-bill-boosts-budget-by-8b-largely-bypassing-last-minute-28b-munitions-request/)]
  - Gross new procurement about $17-20B a year; sub-tier share at 50-60% gives about $9-12B a year. I use $10B. The full base-budget flow is larger but not sourced here.
- **Shock (2025-07, reinforced 2026):**
  - OBBBA funding (2025-07-04), with reporting that the Pentagon planned to spend it in FY2026.
  - A 2026 Iran campaign drew down stocks: a Pentagon inspector-general report is reported to put the campaign cost at $33.4B including $22.3B of expended munitions, and names solid rocket motors, energetics and qualified labor as constraints. [secondary: ROIC and Anadolu summaries, unverified]
  - Lockheed said in May 2026 it will invest $8-9B through 2030, partly to develop second sources; GMLRS output rose from about 8,000 to about 14,000 rounds a year and PAC-3 from 300 to 550 missiles, with an Army target near 19,000 GMLRS a year by FY2028. [secondary: Lockheed 2026-05-14 release and trade coverage]
- **Incumbents:** the primes and their tier-1s. **Fragility:** DoW itself says no latent capacity; supplier qualification cycles are long; small suppliers face financing gaps; many sole-source parts. Primes buy on cost-plus and fixed-price multiyear deals and cannot create sub-tier capacity by contract alone.
- **Crowdedness: crowded** for capacity and hardware: Hadrian ($1.37B), Isembard, Fabri (all above); also Anduril, Castelion, Firehawk, X-Bow, Ursa Major, Saronic and Divergent [memory, not searched]. Open only for the unglamorous support layer (supplier qualification, first-article inspection, special-process capacity).
- **Wedge hints:** AS9102 first-article inspection automation; special-process capacity (NADCAP heat treat, plating, NDT) brokerage [memory: a known aerospace bottleneck]; sub-tier supplier-development services sold to primes; working-capital financing for small defense suppliers; sub-tier supply-chain mapping for DCMA and program offices.
- **Insider roles:** prime supplier-development and supplier-quality engineers; DCMA industrial specialists; program-office industrial-base analysts; sub-tier shop owners with AS9100; NADCAP auditors.
- **Hidden giant:** no.
- **Legal and policy premise to check:** DFARS specialty-metals rules, ITAR, cost-accounting rules for subcontract financing. The CMMC cybersecurity route died (see Dead pools).

---

## 5. US industrial plant maintenance, repair and millwright labor and services - hidden giant

- **Money flow:** plants pay their own maintenance staff and outsourced repair shops and contractors for keeping production equipment running: motors, pumps, gearboxes, conveyors, machine tools.
- **Size:** about **$54.6B** a year of outsourced commercial and industrial machinery repair (NAICS 81131 group, Economic Census 2022), plus an in-house wage bill of about **$35B**.
  - In-house: BLS counts 547,300 jobs in 2025 (446,900 industrial machinery mechanics, 59,700 machinery maintenance workers, 40,700 millwrights), median pay $64,100. [primary: [BLS OOH](https://www.bls.gov/ooh/installation-maintenance-and-repair/industrial-machinery-mechanics-and-maintenance-workers-and-millwrights.htm)] Direct wages = 547,300 x $64,100 = about $35.1B [derivation], before benefits and overhead.
  - Outsourced: $54.6B is a group-level figure (NAICS 81131) from Vantage Insights citing the Economic Census 2022; Census does not publish a separate 811310 total in what I could reach. [secondary] I could not use the Census API (it now requires a key; I did not register for one).
- **Shock (2026-09, approximate):** BLS 2025-35 projections: +14% (78,900 jobs, to about 626,200), about 51,900 openings a year, "much faster than average". [primary, same BLS page; release month inferred] Deloitte/Manufacturing Institute (April 2024): up to 3.8M manufacturing jobs needed by 2033, 1.9M could go unfilled. [secondary] Reshoring and automation enlarge the installed base that must be maintained (North American robot orders 36,766 units in 2025, see pool 7).
- **Incumbents:** in-house maintenance departments (most of the money); OEM service arms (Siemens, ABB, Rockwell); regional motor, pump and gearbox rebuilders; maintenance contractors and industrial staffing firms. [memory]
- **Fragility:** fragmented, owner-led shops; technician scarcity; knowledge held in retiring workers; OEM service lock-in on proprietary controls.
- **Crowdedness: contested.** Sensing and AI is funded: Augury ($75M Series F, Feb 2025, valuation above $1B), Tractian ($120M Series C, late 2024, led by Sapphire per most sources), plus MachineMetrics, Falkonry, Uptake, Uptime AI named as competitors; Fullbay (truck-shop software) adjacent. [secondary] I found no funded startup selling technician labor or repair capacity as a service to plants.
- **Wedge hints:** technician-as-a-service with an apprenticeship pipeline and dispatch; motor, pump and gearbox rebuild roll-up with rebuild-versus-replace software (tariffs make replacement costlier); spare-part reverse engineering and remanufacture (DLA is doing this for DoD, a signal); outcome-priced maintenance bundled with sensing.
- **Insider roles:** plant maintenance managers; reliability engineers; maintenance planners and schedulers; motor-repair shop owners (EASA members); millwright union business agents; OEM field-service managers.
- **Hidden giant:** yes.
- **Bottom-up path check (derivation):** a labor-as-a-service business at $100M needs about 800 full-time technicians billing at $125k a year of revenue each, so about 0.15% of the 547k workforce. Plausible on volume; the hard part is gross margin and recruiting.

---

## 6. Owners' parts and service spend on heavy equipment (ag, construction, mining), now opened by right-to-repair - hidden giant

- **Money flow:** farmers, contractors and miners pay OEM dealer networks for parts, diagnostics and repair; software locks (diagnostic tools, pairing, emissions "limp mode") have kept independents out.
- **Size:** at least **$24B** a year (global) just for Caterpillar's services revenue in 2025; Deere, CNH, AGCO, Komatsu, Kubota aftermarket is on top.
  - Cat total 2025 sales and revenues $67.589B [primary: [Cat FY2025 10-K](https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231.htm)]; services revenues "$24 billion" per Cat's 2026 proxy statement [secondary: via search summary of [the proxy](https://www.sec.gov/Archives/edgar/data/0000018230/000130817926000358/cat014496-def14a.htm); I could not reach the MD&A text in the 10-K to confirm]. I also could not confirm a $28B 2026 services target.
  - I did not retrieve Deere's parts-and-service total, so this is a floor.
- **Shock (2026-07-08):** FTC and five states (Illinois, Arizona, Michigan, Minnesota, Wisconsin) announced a settlement with Deere: a 10-year order requiring Deere to give farmers and independent shops the same repair resources it gives dealers (read, clear and reset fault codes, reprogram and pair components, restart after emissions shutdown, manuals and troubleshooting), "on fair and reasonable terms", with no dealer retaliation. No fee schedule. Stipulated order filed in N.D. Illinois, pending judicial approval. [primary: [FTC press release](https://www.ftc.gov/news-events/news/press-releases/2026/07/ftc-states-secure-settlement-deere-company-advancing-farmers-right-repair)] Preceded by a $99M class-action settlement (April 2026) in which Deere also promised digital repair tools for 10 years, starting before the end of 2026. [secondary]
- **Incumbents:** OEMs and franchised dealers (Deere, Caterpillar, CNH, AGCO, Komatsu). Parts and service carry higher margins than new machines [memory]. **Business-model conflict:** dealers' service departments are profit centers and franchise law protects them, so an OEM cannot price the tools low without cannibalizing dealers, yet "fair and reasonable terms" is now court-enforced for Deere.
- **Crowdedness: open.** I found no venture-funded company building multi-brand diagnostics or independent-shop software for ag or construction equipment (search for 2026 rounds returned nothing). That may reflect search limits, since the settlement is only three months old. Not covered: construction equipment (the settlement covers Deere ag equipment, and Cat is not a party).
- **Wedge hints:** multi-brand diagnostic hardware and software for independent ag and construction repair shops (the "Snap-on or Autel for tractors" analogy); mobile field-repair networks; remanufactured emissions and electronic components; shop-management and parts-cross-reference software; extended warranty and financing for independent repair.
- **Insider roles:** independent ag and construction repair shop owners; former Deere and Cat dealer service managers; custom-harvester and large-fleet equipment managers; equipment auction appraisers; US PIRG right-to-repair staff.
- **Hidden giant:** yes.
- **Legal premise to check:** the order is stipulated and unapproved as of the FTC page; terms and pricing are not final; it is Deere-only, and construction, mining and non-Deere brands still depend on state laws (Colorado's farm-equipment law, 2023 [memory]) and the DMCA repair exemptions [memory].
- **Bottom-up path check (derivation):** if independents capture even 5% of the $24B Cat-scale pool as a toolkit and software take of 10%, that is $120M. Heroic assumptions: 5% share shift in under five years and a 10% take. Flag as weak until pricing terms are known.

---

## 7. North American factory-automation and robot-cell spend

- **Money flow:** manufacturers pay robot OEMs (FANUC, ABB, Yaskawa, KUKA), controls vendors (Rockwell, Siemens) and system integrators for robot cells and automation projects.
- **Size:** about **$9B** a year (my estimate).
  - A3: North American companies ordered 36,766 robots worth $2.25B in 2025 (+6.6% units, +10.1% revenue; 2024: 31,311 units). [primary-adjacent: [A3 press release via Business Wire, 2026-02-04](https://www.businesswire.com/news/home/20260204160172/en/Robot-Orders-Grow-6.6-in-2025-as-General-Industries-Drive-Broader-Automation-Adoption), widely echoed by trade press]
  - Installed cell cost is a multiple of the robot: using "robot = about 25% of a cell" [memory], $2.25B x 4 = about $9B. [derivation]
  - Control Engineering's 2026 Giants list: the top 75 integrators reported $4.67B of integration revenue net of hardware, +18% year on year; concentration is rising (integrators above $100M gross revenue: 12% in 2021, 24% in 2025). [secondary]
- **Shock (2025-09 start, still unresolved):** Commerce opened a Section 232 investigation into robotics and industrial machinery in September 2025; by mid-2026 the administration signalled new tariffs but I found no final action; a 2026-06-01 proclamation reduced Section 232 rates on ag, mobile industrial and HVAC equipment (effective 2026-06-08, through 2027-12-31). [secondary: [White & Case](https://www.whitecase.com/insight-alert/trump-administration-initiates-section-232-investigation-robotics-and-industrial)] Demand is rotating: H1-2026 North American robot orders were 17,995 units and $1.166B (+2.0% units, +6.6% value); semiconductors and electronics +35%, pharma +32%, automotive components +24%, automotive OEMs -25%. [secondary: A3 via trade press]
- **Incumbents:** robot OEMs, controls vendors, and thousands of custom-engineering integrators. **Fragility:** integrators are labor-bound project shops with scarce controls engineers (average engineers per integrator 105 in 2021, 168 in 2025); projects are quoted one by one, and tariffs raise equipment cost. [secondary]
- **Crowdedness: crowded.** Standard Bots ($200M Series C, June 2026, $1B valuation; Sacra estimates $24M ARR in 2025), Vention ($110M Series D, Jan 2026), Path Robotics ($100M Series D, Oct 2024), Bright Machines ($126M Series C, June 2024), Formic (tiny listed round) [secondary: aggregators, not company releases]. Also Hadrian for machining cells.
- **Wedge hints:** integrator back-office and engineering tools (quoting, PLC and cell-code generation, commissioning); brownfield welding and machine-tending for small shops; used and refurbished robot resale; safety validation services.
- **Insider roles:** integrator project managers and controls engineers; plant automation engineers; robot-brand distributors; machine builders; safety assessors.
- **Hidden giant:** no.

---

## 8. US importers' customs-duty bill on industrial inputs, and the duty-mitigation services market

- **Money flow:** importers pay duties to CBP; they pay customs brokers, trade counsel and consultants for classification, valuation, origin, drawback and foreign-trade-zone work.
- **Size:** about **$214B** of customs duties over the twelve months through July 2026 (net monthly figures can dip when duties are refunded). [secondary: [Dror Poleg tracker of Monthly Treasury Statement data](https://www.drorpoleg.com/charts/tariff-collections/); I did not open the Treasury statement] The capturable services fee pool is a small fraction of that and I did not size it.
- **Shock (2026-07):** Section 122 surcharge expired 2026-07-24; Section 301 duties (10% or 12.5%) on goods from 60 economies took effect 2026-07-23, with no statutory sunset and already challenged in court; Section 232 stacks on top; the formal derivative-inclusions process ended 2026-04-06; IEEPA tariffs struck down 2026-02-20, with the Court of International Trade ordering refunds with interest (early March 2026). [secondary: [UHY](https://uhy-us.com/insights/news/2026/july/tariff-reset-section-122-expires-as-section-301-duties-expand); [Thompson Hine](https://www.thompsonhinesmartrade.com/2026/04/president-trump-makes-major-changes-to-section-232-tariffs-on-aluminum-steel-and-copper/)] Customs bonds, audits and enforcement are rising. [secondary: National Law Review, July 2026]
- **Incumbents:** customs brokers (UPS, Expeditors, Livingston and others [memory]), Big Four and trade-law firms, trade-software vendors (E2open and similar [memory]). **Fragility:** hourly-billing brokers and counsel are built for stable rules; tariff stacking changes monthly, and classification and origin work is manual.
- **Crowdedness: contested.** Altana (about $323-337M total raised, $1B valuation in July 2024; incumbent on a CBP trade-enforcement tool contract); Tarifflo (YC S26; AuditLive finds overpaid duties; $500K+ pre-seed); Tariff Sense (Canada, CAD 220k pre-seed Dec 2025); TariffLens AI (launched May 2026); traide AI (Berlin). [secondary] Flexport is also in this space [memory]. Many AI classification entrants but little capital outside Altana.
- **Wedge hints:** post-entry audits and recovery of overpaid Section 232 and 301 duties (contingency fee); first-sale-for-export and drawback programs for mid-market manufacturers; metals-content declarations for Section 232 derivatives (the new 15%-by-weight carve-out and annex-based treatment make this a real data task); origin evidence for suppliers.
- **Insider roles:** licensed customs brokers; import compliance managers at mid-size manufacturers; trade counsel; CBP import specialists; drawback specialists.
- **Hidden giant:** no (tariffs are everywhere in the news).
- **Legal premise to check:** a contingency fee on duty recovery needs a licensed customs broker or counsel in the loop; refund eligibility turns on protest deadlines (180 days from liquidation) and the 2026 court orders. Also note the finance slice already excluded IEEPA refund claims.

---

## 9. US medium- and heavy-duty truck parts aftermarket (independent fleets and shops) - hidden giant

- **Money flow:** fleets and owner-operators pay dealers, distributors and independent shops for engine, drivetrain, brake and chassis parts and repair.
- **Size:** about **$25.5B** of 2026 sales through US heavy-duty truck parts dealers (IBISWorld; dealers only, so a floor). [secondary: [IBISWorld](https://www.ibisworld.com/united-states/industry/heavy-duty-truck-parts-dealers-in-the-us/5405/)] Global heavy-duty aftermarket estimates run $93B to $158B, North America about 36% of the heavy-duty automotive aftermarket (definitions differ). [secondary]
- **Shock (2025-11-01):** 25% Section 232 tariff on imported medium- and heavy-duty trucks and truck parts (Class 3-8, engines, transmissions, tires, chassis), proclaimed 2025-10-17, effective 2025-11-01; USMCA-eligible goods treated on non-US content; manufacturer offsets of 3.75% benefit domestic assemblers, not aftermarket importers. FreightWaves reports heavy-duty engine parts cost 20-30% more than two years ago, and many small carriers have not changed how they buy parts. [secondary: [Fleet Equipment](https://www.fleetequipmentmag.com/tariff-on-truck-parts-section-232/); FreightWaves, unverified]
- **Incumbents:** OEM dealers (PACCAR Parts, Volvo/Mack, Daimler Truck), national distributors (FleetPride, TruckPro and others [memory]), and independent shops. **Fragility:** price discovery is by phone and counter; sourcing is concentrated in imports now taxed; small fleets buy through habit.
- **Crowdedness: open for parts procurement, contested for shop software.** Fullbay raised $23M in July 2024 (JMI Equity, Mainsail) and is reported to have acquired Pitstop in March 2026 (unverified); Decisiv (service-relationship software) not researched. I found no funded heavy-duty parts-procurement startup. [secondary]
- **Wedge hints:** parts price transparency and sourcing for small fleets and independent shops, including tariff-avoiding sources; remanufactured and domestic alternatives to taxed imports; core-return and warranty-recovery services; parts availability for down trucks.
- **Insider roles:** parts counter managers at truck dealers and distributors; independent fleet maintenance managers; owner-operators; heavy-duty shop owners; Auto Care Association and HDMA staff.
- **Hidden giant:** yes.
- **Bottom-up path check (derivation):** 1% of $25.5B is $255M of parts flow, so a $100M revenue marketplace needs roughly 0.4% of dealer-channel flow at a full pass-through of parts revenue, or about 4% at a 10% take rate. Not heroic in share terms, but trust and logistics are hard.

---

## 10. US-owned contract manufacturing in Mexico (IMMEX / maquila) under the USMCA review

- **Money flow:** US and foreign OEMs pay Mexican export-manufacturing operations (their own plants, shelter operators, EMS firms) to build products under the IMMEX duty-deferral program.
- **Size:** more than **$300B** of IMMEX goods shipped in 2024 (an export value, not a fee pool; value added in Mexico is lower and I did not find it). As of December 2025: 6,512 active IMMEX establishments, 3.15M workers, monthly revenues above 653B pesos. [secondary: [American Industries Group](https://hub.americanindustriesgroup.com/insights/maquiladora-mexico-understanding-the-industry-that-powers-global-manufacturing/); sources disagree on IMMEX's share of exports (40% of total exports vs about 80% of manufacturing exports)]
- **Shock (2026-07-01):** the first USMCA joint review closed without the 16-year extension, so the three countries move to annual reviews (the agreement itself runs to 2036); US-Mexico bilateral rounds covered steel, aluminum, autos, labor and rules of origin (third round ended about 2026-07-23, fourth set for Washington in September 2026; auto rules of origin unresolved). TrendForce says nearshoring investment turned more cautious; the Wilson Center found most sourcing changes made to meet rules of origin raised cost. [secondary: [TrendForce](https://datatrack.trendforce.com/blog/content/61284/usmca-enters-annual-review-u-s-mexico-trade-rules-face-renegotiation-and-nearshoring-investment-turns-more-cautious); [Wilson Center](https://www.wilsoncenter.org/article/nearshoring-and-usmca-review-view-chihuahua)]
- **Incumbents:** EMS and contract manufacturers (Jabil, Flex, Foxconn, Celestica, Plexus [memory]), shelter operators, industrial-park developers, customs brokers. **Fragility:** plants have multi-year paybacks that now sit on a one-year political horizon; rules-of-origin changes can strand compliance work; many "nearshore" operations are limited assembly.
- **Crowdedness: open (weak evidence).** I found no startup funding for a Mexico contract-manufacturing or USMCA-origin platform. Incumbent software (E2open) and ERP add-ons (a 2026 NetSuite USMCA guide) cover part of the problem. [secondary]
- **Wedge hints:** USMCA origin and regional-value-content evidence collection across tiers (a data-chasing task that recurs every review); shelter-as-a-service for mid-size US manufacturers; Mexico-side quality and inspection services; dual-footprint planning tools.
- **Insider roles:** Mexican customs brokers (agentes aduanales); IMMEX program administrators; maquila plant managers; USMCA compliance managers at OEMs; industrial-park brokers.
- **Hidden giant:** no.

---

## Dead or excluded pools (so nothing is lost)

- **CMMC cybersecurity compliance for defense suppliers - dead.** Phase 1 (self-assessments) started 2025-11-10, but the Department of War suspended Phase 2 and later phases in July 2026 (dates reported as 07-13 or 07-15) with a 60-day review that may end the program, after citing roughly 100,000+ suppliers needing third-party assessment against about 100 approved assessors. SBA estimate: up to $593,800 per verification for small entities. A compliance wedge here has been reversed. [secondary: BDO, SAMSearch and DefenseScoop summaries]
- **ISO 9001 certification fees - too small.** The 2024 ISO Survey reports about 1.47M ISO 9001 certificates worldwide, but US counts are only about 21,000-29,000 (sources disagree), too few to reach a $5B US fee pool. ISO 9001:2026 is expected to publish 2026-09-16 with a probable three-year transition to about September 2029, and IAF has not issued the transition rules. Global "TIC" (testing, inspection, certification) estimates run $230-420B, with Bureau Veritas saying about 45% of a roughly EUR 300B market is outsourced, but that is a whole industry, not a stream. [secondary]
- **IEEPA tariff refund claims - out of this slice.** The Supreme Court struck down IEEPA tariffs 2026-02-20 and the CIT ordered refunds with interest; the finance slice already excluded this stream. One search summary gave roughly $35.46B across 8.3M entries, which conflicts with larger figures commonly cited, so I did not use it.
- **Section 232 robotics and industrial-machinery tariff - unresolved.** Investigation opened September 2025; no final proclamation found as of mid-2026. A June 2026 Holland & Knight note lists "summer deadlines". Worth re-checking before any idea depends on it.
- **FDA QMSR (effective 2026-02-02) and EU CBAM definitive period (2026-01-01)** - noted from memory as quality and compliance shocks; not researched here and not sized, so not included as pools.

---

## Source quality, conflicts and gaps (read before relying on numbers)

- Primary-verified in this run: Grainger FY2025 10-K sales and margin; Fastenal Q3-2026 8-K; BLS employment and projections; AFS casting revenue and 2026 forecast; FTC Deere settlement terms; Cat FY2025 total revenue.
- Secondary only (search-engine summaries of trade press and law-firm alerts): IBISWorld machine-shop size, OBBBA line items, Iran-campaign munitions figures, startup funding amounts, customs-duty total, IMMEX size, heavy-duty parts size, A3 H1-2026, DoW manufacturing-technology plan.
- Not retrieved: Census Economic Census 2022 (API requires a key; I did not register), Deere's parts-and-service total, Cat's MD&A text, the DoW plan itself, the Treasury Monthly Treasury Statement, a US foundry count, current forging shipments.
- Conflicts noted: Section 122 rate (10% vs 15%); FTC v. Deere filing date (2023 vs 2025); CMMC pause date (07-13 vs 07-15); Hadrian 2026 round shown as $1.37B (Series D) and $1.4B (Signalbase); munitions add-on in FY2026 appropriations ($1.8B, $2.9B, $3B or $6.4B depending on counting); Tractian Series C date (Nov 2024 to Jan 2025); US ISO 9001 certificate count (about 21k vs 28.8k).
- Search tool behaviour: the WebSearch summarizer sometimes returned secondary framing of numbers; where a figure mattered I tried a primary fetch (success: Grainger, Fastenal, BLS, AFS, FTC; failed or partial: Cat MD&A, Wipfli tariff article returned HTTP 429).
- No account creation, key registration, download or form submission was needed.

## Candidate shortlist signal for the next stage (my judgment, not a score)

Most promising for a "services wedge to a scaling asset" test, given the lessons file: pool 3 (castings sourcing and qualification), pool 5 (technician labor plus rebuild roll-up), pool 6 (multi-brand diagnostics for independent shops), pool 9 (parts procurement for independent fleets and shops). Weakest on payer and size per wedge: pool 10. Pools 4 and 7 are well capitalised and crowded, so entry needs a niche the funded players skip.
