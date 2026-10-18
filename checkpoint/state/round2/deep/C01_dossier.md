# C01 dossier: "Progressive for Turbines" (P036, idea 5), a condition-priced, insurer-backed independent LTSA

Date: 2026-10-18. About 55 searches and fetches. Tags: [S] sourced, [D] my arithmetic on sourced inputs, [A] assumption. Where a page would not load and I relied on a search-result summary, I say so.

## 1. Bottom line

**Verdict: wounded to dead as specified. Overall 3/10, upside 3/10.** The budget line is real and buyers do run competitive RFPs for exactly this contract. But the product (a fixed-fee, multi-year parts-plus-outage agreement from a non-OEM) is already sold, and won, by funded independents. The two things the idea adds, condition pricing and an insurer wrap, have no demand evidence and no insurer evidence. The gate's arithmetic (25-35 units = 3-5% of 600-800 units) uses the wrong denominator. Corrected, $100M needs roughly 8-22% of the units a new entrant can plausibly reach. That is at or past the "heroic share" line in lessons.md.

Five findings drive this:
1. The independent LTSA already exists and just won a municipal RFP against GE (section 4).
2. Only about a quarter of GE's installed base is under LTSA, so the "takeout of expiring OEM LTSAs" pool is small (section 3).
3. The 10-20% discount the idea promises is mostly available from non-OEM parts, not from condition pricing (section 6).
4. Buyers demand bonds and references a start-up cannot show (section 5).
5. No insurer product for gas-turbine parts-cost cover turned up, and standard property cover excludes wear and tear (section 7).

## 2. Assumption ledger (the upside case, tested)

| Claim in idea / gate | What I found | Status |
|---|---|---|
| "No condition-priced, reinsurer-backed F-class offer exists" | True as far as I can find, but nobody asks for it either. Austin's 2026 RFP bundled rotor end-of-life assessment and optional remote monitoring into a fixed quarterly fee, so buyers already get a condition element from independents (section 4). | Gap exists, demand unproven |
| "Only OEMs offer F-class LTSAs" (idea) | False. Third-party F-class term deals date from 2007 (NYPA), 2011 (AECI), 2015 (MEAG); Hanwha Power won Austin's 7FA deal in 2026. | Refuted |
| "~1,100 US baseload F-class units" (idea) or "600-800 addressable" (gate) | GE says 960+ 7F-family units worldwide. A 2008 CCJ report put ~700 operating in North America. Addressable for this product is far smaller (section 3). | Refuted |
| "OEM cannot price on condition (adverse selection)" | Plausible but untested. GE can discount selectively, and its LTSA book is only ~26% of its fleet, so it prices most of the fleet transactionally anyway. | Unproven |
| "10-20% under OEM for top-quartile units" | Chromalloy says non-OEM parts save "thirty or more percent" vs OEM list. Any independent can deliver this without a condition model. | Real saving, wrong source |
| "Reinsurer parts-cost excess-of-loss" | Nothing found for gas turbines. The one precedent is Munich Re's 2012 wind serial-loss cover. | Unproven |
| "Real buyer is the lender's independent engineer" | No source found. The documented buyer is the owner's procurement office via RFP (Austin). | Unsupported |
| "Share isn't the problem" | It is, once the denominator is corrected. | Refuted |

## 3. Market and bottom-up

Metrics this industry runs on: LTSA fee per unit-year, share of fleet under LTSA, equivalent operating hours (EOH) and starts to the next inspection, service gross margin, and forced-outage cost.

**Top down.** GMI sizes services at $27.1B (2025) and $4.5B in the US (pool file: https://www.gminsights.com/industry-analysis/gas-turbine-service-market). Parts are 68% of F-class aftermarket spend, repair 18%, field service 14% (https://www.turbomachinerymag.com/view/aftermarket-parts-is-there-life-after-the-oem). GE Vernova's Power EBITDA margin was 18.8% in Q2 2026 (https://www.sec.gov/Archives/edgar/data/0001996810/000199681026000147/gevpressrelease2q26.htm).

**The LTSA book is a minority of the fleet.** GE Vernova's FY2025 10-K: "a gas turbine installed base of approximately 7,000 units with approximately 1,800 units under long-term service agreements and an average remaining contract life of approximately 10 years" (https://www.sec.gov/Archives/edgar/data/1996810/000199681026000015/gev-20251231.htm) [S]. So about 26% of units are on LTSAs, and the book is long-dated. This undercuts the "free forensic audit of expiring LTSAs" door. The older roll-off wave was a 2009-2012 story: a 2009 article said ~70% of turbines had been under OEM agreements and predicted more than half would not renew by 2011 (https://www.power-eng.com/environmental-emissions/turbine-maintenance-market-heats-up/). Most units today buy transactionally (parts and outage events), a different and smaller-ticket product.

**US F-class base.** GE reports 960+ 7F units worldwide (https://gevernova.com/gas-power/resources/articles/2020/7f-30-years-of-performance-reliability). CCJ reported ~700 operating in North America in 2008 (https://www.ccj-online.com/7f-users-group-a-really-big-show/). I found no US count for Siemens or Mitsubishi F-class. My estimate of the whole US F-class base across OEMs: 900-1,100 [A].

**Addressable units [D/A].**
- Big fleets with scale or in-house programs: per a search-result summary of the 7F Users Group steering committee page (https://na.eventscloud.com/website/89691/steering-committee/; the page itself would not show the list), FPL runs 52 units, Southern 39, Calpine 34, Dominion 19, Xcel 16. That is 160 units from five owners. Adding Vistra, NRG, Constellation, Duke, LS Power and Talen, I assume 40-50% of units sit in about 15 fleets.
- Subtract units already on long OEM LTSAs (~26% [S, GE] applied to the rest) and units under about 10 years old, where independents advise using OEM parts.
- Result: about 150-300 US units a new entrant could realistically contract in 5-7 years. This is a wide estimate, and the first thing a 20-call primary study should fix.

**Fee per unit-year.**
- NYPA's 2007 independent term agreement was $88M over 16 years for two 7FA+e units (https://www.investegate.co.uk/announcement/prn/wood-group-john---wg./re-contract/1189062) = ~$2.75M per unit-year nominal [D]. At 3% a year that is ~$4.8M in 2026 dollars [A].
- Cross-check: EIA's contractor study gives $3.41/MWh variable O&M (2023$) for a 1,227 MW H-class combined cycle (https://www.eia.gov/analysis/studies/powerplants/capitalcost/pdf/capital_cost_AEO2025.pdf). For a ~230 MW F-class unit at 55% capacity factor that is ~$3.8M a year [D/A], and it includes some non-turbine items.
- So $3-5M is sound.

**Path to $100M.** 25-35 units x $3-4M = $100M of gross fees [D]. That is 8-22% of 150-300 addressable units. Most of that revenue is pass-through parts. At 12-18% gross margin (gate assumption), $100M of fees yields $12-18M of gross profit before insurance premium, capital and overhead. A realistic ramp is 1-3 contracts a year after a 2-year build: roughly 8-15 units and $25-60M of fees by year 7 [A]. The visible independent record supports a slow ramp: the press-announced US F-class independent term deals I found are NYPA (2007), AECI (2011), MEAG (2015) and Austin (2026), though many contracts go unannounced.

## 4. Competitors (confirmed, refuted, added)

| Player | Evidence | Read |
|---|---|---|
| GE Vernova, Siemens Energy, Mitsubishi | GE: 7,000 units, 1,800 on LTSA; company RPO ~$94.4B; "higher volume and favorable price" at Gas Power (links above). | Incumbent with pricing power now |
| Hanwha Power (PSM + Hanwha Power Systems, merged March 2026) | LTA, LTMA and Frame Agreement tiers, "full-scope or modular pricing," does not require buying all parts from it (https://www.psm.com/services/service-agreements). LTA business since 2007; 9-year "subscription" LTSA at Trumbull, 950 MW, June 2026 (https://www.turbomachinerymag.com/view/hanwha-power-commissions-fuel-gas-compressors-at-ohio-ccgt-plant). Hanwha Group parent. | Direct competitor with balance sheet |
| Wood Group GTS / PW Power Systems | NYPA, AECI, MEAG deals above. | Direct, older wins |
| EthosEnergy | ~3,600 staff; Wood sold its stake for $138M; $34M adjusted EBITDA for 2023 (https://www.woodplc.com/news/latest-press-releases/2025/wood-completes-sale-of-ethosenergy-for-$138-million). One Equity Partners owns it. | PE-backed |
| Allied Power Group | Owned by Warren Equity Partners (not AEA, as the idea said): https://www.rwbaird.com/transactions/investment-banking/dealcard/6793/. Bought EthosEnergy's generator assets, April 2026. | PE-backed |
| MD&A, Sulzer, Chromalloy | MD&A bid at Austin. Sulzer Services: CHF 1.31B sales, 18.3% EBITDA margin, 39.6% gross margin on orders, 2025 (https://report.sulzer.com/ar25/en/business-review-services). | Repair and parts side |
| Advisers (free or cheap substitute) | IEM Energy Consultants and Mercer Thompson ran a 7F Users Group session on re-thinking LTSAs (https://www.ccj-online.com/7fug-2020-mercer-thompson-llc-iem-energy-consultants/); Troutman says it has structured LTSAs for 200+ gas turbines (https://www.troutman.com/images/content/4/7/v1/4795/LTSAPDF.pdf). | The "free audit" is a commodity |
| In-house teams | Big fleets self-manage; one owner with 24+ 7FAs standardized its own practices (CCJ 2008 above). | Removes the best customers |
| Funded start-ups | None found for turbine LTSA or parts. Nearest are monitoring firms such as Novity (compressors, Tokyo Gas investment). | Open, but for a reason |

**The best single piece of evidence: Austin Energy RFP 1100 MMH3038** (Sand Hill Unit 5, 7FA+e and D-11 steam turbine; published 2026-02-16, award recommended 2026-07-29).
- Scope: quarterly fixed payments for 9 years plus two optional 3-year extensions, contract parts pricing, rotor end-of-life assessment or exchange, optional remote monitoring (https://assets.austintexas.gov/financeonline/downloads/vc_files/RFP_1100_MMH3038/RFP_1100_MMH3038_0600_v1.pdf).
- Bidders: Allied, GE Vernova, Hanwha, MD&A (https://financeonline.austintexas.gov/afo/account_services/solicitation/solicitation_details.cfm?sid=142784).
- Scores out of 100: Hanwha 61, MD&A 30, Allied 29, GE 20 (https://assets.austintexas.gov/financeonline/downloads/vc_files/RFP_1100_MMH3038/RFP_1100_MMH3038_RESPONSE_v2.pdf). Price points out of 25: Allied 25, MD&A 16, Hanwha 11, GE 7. Experience points out of 25: Hanwha 25, others 4.
- Reading: three independents bid and one won. If price points scale with the low bid (formula not disclosed), GE priced about 3.6x the lowest and Hanwha about 2.3x, yet Hanwha won on experience. Buyers pay for proven 7FA+e work, not for novelty.

## 5. Demand and willingness to pay

- **Budget line and signer exist.** Austin's RFP shows a municipal utility procuring this as an O&M contract.
- **Availability has a price.** In Winter Storm Elliott, ~$1.8B of PJM non-performance charges were assessed (settled near $1.2B), gas plants were ~70% of unplanned outages, and charges were 83% of the capacity payments of the penalized resources (https://www.utilitydive.com/news/pjm-winter-storm-elliott-report-gas-generation/688217/; settlement: https://www.publicpower.org/periodical/article/ferc-approves-winter-storm-elliott-settlement-agreement). That supports an availability guarantee, but the owner would need the guarantee to cover market penalties, not just repair costs.
- **Contract literature flags the OEM structure as owner-unfriendly.** LTSAs are treated as non-terminable except for breach (https://www.power-eng.com/gas/turbines/gas-turbineslong-term-service-agreementstop-10-contractual-pitfalls-and-how-to-avoid-them-ndash-part-ii/), and title to the remaining life of parts bought under the contract can revert to the OEM (https://www.turbomachinerymag.com/view/servicing-the-aftermarket). I found no owner-versus-OEM dispute over EOH formulas. A JEA procurement spec (surfaced in search; the page would not load) reportedly requires EOH formula disclosure and lets the owner shift intervals by 10%, which suggests informed owners can already extract transparency.
- **Barriers a start-up cannot clear.** Austin requires a payment bond and a performance bond, each 100% of the annual contract with a $10M minimum, and five references each for similar maintenance, parts supplied and monitoring in the last five years (RFP link above). A new entrant would likely score near 4/25 on experience, as three of the four bidders did.
- **Not found:** any RFP or contract that prices on measured condition, or any owner statement that it would pay for it.

## 6. Unit economics and capital

- Selling at 85-90% of the OEM price [A, gate range 10-20% under]. Sourcing cost under independent parts: parts 68% of spend at ~70% of OEM price (Chromalloy's "thirty or more percent" saving), repair 18% at ~85%, field service 14% at ~100% [A]. That is a cost of ~77% of OEM price, leaving ~12% gross margin before reinsurance, condition-model cost and bonding [D]. Margin comes from parts substitution, which every independent has.
- Price versus value (lesson 5): the customer's saving is $0.3-1M per unit-year on a $3-5M fee [D]. A reinsurance premium has to come out of that same slice.
- Capital: a 10-year fixed-price obligation across 30 units is $300M+ of contingent liability [D]. Bonding, parent guarantees or letters of credit, plus a risk-capital facility, come first (Austin's bond terms above; JEA's credit appendix allows a guarantor: https://www.jea.com/About/Procurement/Formal_Procurement_Opportunities/1411846048_Appendix_G_-_Credit_Requirements).
- Even the OEM warns that LTSA profitability "depends on our ability to execute and estimates of product durability" (GE 10-K above). Sulzer's H1 2026 report, per a search summary, noted customers deferring service cycles on high energy prices.
- Supply: independents' backlogs run into fall 2026, OEM component quotes went from ~4 to 12-16 weeks (vendor claims: https://blog.psm.com/blog/spring-2026-outage-season-why-this-year-is-different), rotor queues fill into 2028-29 (https://www.ccj-online.com/hanwha-power-and-the-new-value-of-the-installed-fleet/). A wrapper without shop capacity depends on the same constrained suppliers.

## 7. Regulatory and liability

- **Insurance classification.** Courts and attorneys general ask whether risk transfer is the "principal object and purpose" or incidental to a service; the label does not control (Kansas AG opinion: https://ksag.washburnlaw.edu/opinions/1980/1980-008.pdf; New Mexico AG: https://nmonesource.com/nmos/ag/en/14625/1/document.do; both via search summaries). A fixed-price O&M contract with a service principal-object is the safer side, but a standalone "cap on parts cost" sold to owners is the home-value-guarantee pattern that killed a round-1 finalist. It needs a licensed fronting carrier, state by state.
- **Insurer appetite.** Wear and tear is generally excluded from property policies, and insurers pay only resulting damage (https://www.powermag.com/forced-outage-parametric-insurance-solutions-for-ccgts, by three Aon consultants). The same piece says an OEM LTSA is "viewed favorably" by insurers, a point against an independent. FM reports 427 power-generation losses and ~$3.7B gross over 2021-2025, with gas turbines the largest single source of property damage (https://insurance-canada.ca/2026/07/31/fm-power-risks-electricity-demand-soars/). I could not confirm a separate figure of 52 gas-turbine events and $540M that appeared in one summary, so I do not use it.
- **Precedent.** Munich Re's 2012 serial-loss cover for REpower took a broker two years and a survey of the manufacturer's production (https://www.munichre.com/en/company/media-relations/media-information-and-corporate-news/media-information/2012/2012-12-04-munich-re-insures-serial-loss-risk-on-offshore-wind-turbines.html). It shows component-level cover is possible, but it was sold to the manufacturer of a new, uniform product, not to an integrator of mixed 20-year-old frames.
- **IP and warranty.** Independents face OEM IP and warranty limits on newer designs (Chromalloy advice above). I found no 2025-26 GE suit against independent F-class parts.

## 8. Why now: real, partly used up

Real: GE's equipment backlog plus reservations rose to 116 GW (release above). Casting is the stubborn constraint, and GE Aerospace's $11.75B CPP deal is expected to close in 2H 2027 (https://www.turbomachinerymag.com/view/ge-aerospace-cpp-acquisition-spacex-turbine-blade-foundry). PJM capacity cleared at the cap for 2028/29, and FERC extended the collar through 2029/30 only (https://insidelines.pjm.com/ferc-approves-capacity-auction-price-collar-to-next-two-capacity-auctions/).

Not as strong as pitched: scarcity squeezes independents' casting supply and shop slots as much as the OEM's. The LTSA roll-off wave is old news, and the capacity-price cliff after 2029/30 falls inside the 10-year contract term.

## 9. Verdict and cheapest decisive test

Defensible and big cannot both hold here, so I call the specified business dead rather than narrow it. Gate ceiling of ~$70M (range $40-110M) is too high; I put the 5-7 year fee ceiling at $25-60M with $3-10M gross profit [D/A].

Only unvalidated variant with scale economics: a capital-light underwriting layer (parts-cost cover sold through ISPs), where revenue is premium, not pass-through parts. No evidence yet that a carrier will write it.

Kill tests, in order: (1) two reinsurers decline or price parts-cost cover above the saving; (2) a surety will not bond a start-up for $10M+ annual contracts; (3) three or more of five audited owners already hold an independent bid within ~10% of the OEM price; (4) measured saving under ~8% (gate threshold).

Open gaps: US F-class unit count by OEM and owner (needs the EIA-860 generator file and model data); actual LTSA fee distribution; whether any carrier has quoted this; independents' US win count. Allied/Hanwha revenues were not found.
