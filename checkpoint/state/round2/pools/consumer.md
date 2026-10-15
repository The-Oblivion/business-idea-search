# Round 2 pool map: big consumer and household spend

Date of research: mid-October 2026. Slice: food and groceries, car ownership, childcare, aging at home, pets, death, home services, subscriptions and household admin.

Method: about 45 searches and fetches (more than the 15-25 budget, because several search summaries contained errors that had to be checked). Primary sources were used where reachable (NY Fed, ALTA, CDC, IRS, SEC filings, UK CMA, company releases). Where I could only reach trade press or vendor pages, the line says so. Anything marked UNVERIFIED comes from a search summary I could not open or from my own memory.

Corrections to search-summary claims, so nobody reuses them:
- The "$3.4B / 2.7%" tariff-on-repair-cost figure is a 2018 PCI projection for a hypothetical 25% tariff on all imported parts, NOT a 2025-26 estimate. No updated APCIA or PCI number was found.
- A search summary dated Honor's $140M Series D to "June 2026". The Homebrew post is almost certainly the 2021 round. Treated as pre-window.
- A search summary attributed the 2023 "scuttled" Fannie Mae title-waiver pilot to the present. It was a 2023 decision (Aug 2023); the current pilot (Doma from Nov 2024, Westcor from Jul 2025) is a separate, narrower program.

## Summary table

| # | Pool | Annual $B | Crowded? | Hidden giant | $100M revenue = % of pool |
|---|------|-----------|----------|--------------|---------------------------|
| 1 | US personal-auto physical-damage claims (repair, parts, total loss) | ~92 | contested | yes | 0.11% |
| 2 | US consumer auto-loan interest, with servicing/collections/repo stress | ~130 | contested | yes | 0.08% |
| 3 | US homeowners' residential HVAC replacement and install | ~55 | contested | yes | 0.18% |
| 4 | US title insurance premiums | 18.5 | contested | yes | 0.54% |
| 5 | US families' paid child care | 68.5 (2022) | contested | no | 0.15% |
| 6 | US private-pay in-home care for older adults | ~50 (low confidence) | crowded | no | 0.20% |
| 7 | US estate settlement (post-death administration) fees | ~15 (low confidence) | contested | yes | 0.67% |
| 8 | US pet owners' veterinary care | 41 | crowded | no | 0.24% |
| 9 | US individuals' tax-preparation fees | 15 | contested | no | 0.67% |
| 10 | SNAP benefits redeemed at US grocers (plus state admin and retailer compliance) | 101.7 | open | no | 0.10% |

---

## 1. US personal-auto physical-damage claims (collision + comprehensive): repair, parts, total-loss payouts

**Money flow.** Drivers pay premiums to insurers. Insurers pay repair shops (labor, paint, parts, calibrations), parts distributors and OEMs, and cash out total losses to owners. Estimating and valuation platforms take a per-claim fee.

**Size.** Private-passenger physical-damage premiums were about $154.3B in 2024, with a 59.9% loss ratio. That implies roughly $92B of incurred physical-damage losses (my arithmetic: 154.3 x 0.599). Source is NAIC data as summarized by trade press (not the NAIC report itself). Includes comprehensive, glass and theft, so the collision-shop revenue slice is smaller (not sized).
- https://www.collisionrepairmag.com/news/ev/insurance-coverage/article/15833728/insurance-profits-repair-underwriting-turning-profits

**Shock.**
- 25% Section 232 tariff on non-USMCA auto parts effective May 3, 2025 (vendor and news sources; no quantified claims impact found). Parts prices +3.8% y/y in April 2026 and vehicle maintenance and repair +5% y/y per a Scripps report. https://www.newschannel5.com/politics/economy/car-maintenance-costs-are-still-rising-one-year-after-trumps-sweeping-tariffs
- CCC Crash Course 2026 (Mar 31, 2026, covering 2025): total-loss frequency 23.1% of claims, a record; calibrations on 28.3% of repairable estimates (up from 21.8%); 72% of total-loss valuations are for vehicles 7+ years old. Verified on CCC's page: https://www.cccis.com/news-and-insights/posts/ccc-crash-course-2026-report-finds-higher-severity-and-record-total-loss-frequency
- Secondary (FenderBender summary, not verified on CCC's page): average repair cost $4,818 (+1.7%), repairable claim volume -9.7%, average calibration fee about $486. https://www.fenderbender.com/news/latest-news/news/55368724/ccc-crash-course-2026-analyzes-how-to-navigate-industry-complexity
- S&P Global Market Intelligence headline: "rate filing read-across implies one-time $12B+ US private auto tariff hit". UNVERIFIED (page returned 403, headline only). https://www.spglobal.com/market-intelligence/en/news-insights/research/rate-filing-read-across-implies-1-time-12b-plus-us-private-auto-tariff-hit

**Incumbents and fragility.** CCC (public), Mitchell/Enlyte and Solera/Audatex own estimating, valuation and workflow. Insurers steer volume through direct-repair programs. Large multi-shop operators (Crash Champions, Caliber, Gerber) are consolidating. Crash Champions renewed with CCC and expanded AI estimating in Aug 2026. The structural weak point: insurer and shop are adversaries who both pay the same platform vendor; total-loss valuation (23.1% of claims) is the one step where the policyholder has no advocate; and each added calibration is a new line item no one in the chain owns. https://collisionweek.com/2026/08/14/crash-champions-renews-ccc-agreement-expands-ai-estimating-rollout/

**Funded startups (2023-2026).**
- Revv: $20M Series A, about late 2024, AI inspections and supplier links for independent shops (lead investor conflicts between sources). https://www.collisionrepairmag.com/technology/article/15747757/revv-funding-secured
- ServiceUp: $55M Series B led by PeakSpan, July 2025; repair management for fleet and insurance (total raised $70M). https://collisionweek.com/tag/serviceup/
- Tractable: $65M Series E in 2023 (AI damage estimating).
- VaraFix: launched an AI estimate-review product Aug 25, 2026 (no funding disclosed).
- CrashBay: $1.25M, Apr 2024.
- Found nothing funded on ADAS-calibration networks or consumer-side total-loss advocacy.
Judgment: contested at estimating and workflow software; open at calibration logistics, parts procurement under tariffs, and policyholder-side total-loss audit.

**Wedge hints.**
- ADAS calibration capacity and scheduling for shops (28.3% of repairable estimates now carry calibrations).
- Tariff-aware parts sourcing and price-lock for independent shops (PartsTrader is the incumbent to check).
- Missed-operations and supplement audit for shops (VaraFix just launched, so it is early).
- Policyholder-side total-loss valuation audit on contingency. Legal premise to check: state total-loss valuation rules and whether a non-adjuster can negotiate (public-adjuster licensing).
- $100M revenue is 0.11% of loss dollars, so even a thin per-claim take works if one distribution channel (a large MSO or a carrier program) is won.

**Insider roles.** Shop estimators and owners, DRP managers at carriers, total-loss adjusters, ADAS calibration technicians, parts managers, public adjusters, auto-claims litigators.

---

## 2. US consumer auto-loan interest and fees (with the subprime servicing, collections and repossession layer under stress)

**Money flow.** Borrowers pay interest and fees to banks, captives, credit unions, finance companies and buy-here-pay-here dealers. Lenders pay servicers, collection agencies, repo agents and auctions.

**Size.** NY Fed Q2 2026: auto balances $1.713T. At a blended APR of roughly 7.5-8% (my assumption; Experian Q1 2026 originations average 6.39% new, 11.43% used, 21.77% used deep-subprime) the interest bill is about $130B a year. Subprime was 15.75% of Q1 2026 financing (20.60% of used). A subprime-only slice is probably $40-55B (my estimate). Servicing and collections costs are not sized from a source.
- https://www.newyorkfed.org/newsevents/news/research/2026/20260811
- https://www.experianplc.com/newsroom/press-releases/2026/new-experian-automotive-report-shows-nearly-one-third-of-automot

**Shock.**
- Tricolor Holdings filed Chapter 7 on Sept 10, 2025 (alleged double-pledged collateral); Vervent took over servicing of roughly 100,000 loans within days. https://www.bloomberg.com/news/articles/2025-09-17/vervent-set-to-take-over-servicing-tricolor-s-auto-loans
- Fitch subprime 60+ day delinquency hit 6.9% in Jan 2026, reported as a record since tracking began in the 1990s (vendor-cited; Fitch not opened). The Philadelphia Fed (Apr 2026) argues the headline overstates new distress because delinquent borrowers are accumulating without charge-off. https://www.philadelphiafed.org/-/media/FRBP/Assets/Consumer-Finance/Reports/cfi-report-april-2026-do-recent-auto-loan-delinquency-rates-overstate-borrower-distress.pdf
- NY Fed Q2 2026: 3.00% of balances moved into 90+ day delinquency, the most new serious delinquencies for autos since 2010; originations a nominal record $211B.
- Cox Automotive: about 1.73M repossessions in 2024, highest since 2009 (secondary). https://www.mbsicorp.com/post/auto-lending-2026-state-of-the-union-the-repo-squeeze-and-what-comes-next
- Average new-car payment $770, 35.55% of new loans longer than 6 years, about 31% of new-car trade-ins underwater (Edmunds via a vendor).

**Incumbents and fragility.** Big captives and banks run in-house servicing. Independent subprime lenders and BHPH dealers run thin servicing shops on legacy systems (Megasys-type vendors) and fail abruptly, as Tricolor did. Collection BPOs are paid by recovery, with no incentive to prevent default. CFPB enforcement pullback (my understanding; not sourced here) removes the compliance push that used to fund vendors.

**Funded startups (2023-2026).**
- Salient: $60M Series A, July 2025 (Axios Pro headline; the page is paywalled, and Salient's own site shows auto-lending content). https://www.axios.com/pro/fintech-deals/2025/07/28/loan-servicing-ai-salient-60-million
- Prodigal (AI collections for subprime auto; funding not verified).
- Vervent (successor servicer; ownership and funding not verified).
- Not found in this pass: a funded startup focused on post-repo recovery or deficiency balances.
Judgment: contested for AI-collections and servicing software. Open for the backup and successor-servicing utility and for post-default recovery.

**Wedge hints.**
- Warm backup and successor servicing for small subprime lenders and ABS issuers (the Tricolor playbook as a standing product; investors and warehouse lenders are the payer).
- Early-intervention and extension programs sold to lenders on a per-saved-loan basis. The price must stay below expected loss avoided (round 1 failed here).
- Post-repossession recovery and remarketing, including deficiency balances.
- $100M is 0.08% of interest dollars, or well under 1% of servicing and collections spend.

**Insider roles.** BHPH dealer principals, subprime collections managers, repossession agents and forwarders, auction remarketing managers, ABS investors and rating analysts, consumer-bankruptcy attorneys.

---

## 3. US homeowners' residential HVAC replacement and installation

**Money flow.** Homeowners pay local contractors, who buy from distributors, who buy from OEMs. Financing runs through third-party lenders. Lead-gen platforms sit on the front end.

**Size.** AHRI 2025: 7.75M central AC and heat-pump units plus 3.25M gas furnaces shipped (about 11.0M). If about 75-80% are replacements (my assumption) at about $6.5k average installed (my assumption), that is roughly $55B. Cross-check: Carrier's CEO cited about 130M installed systems and about 6% annual replacement, about 8M a year (secondary). Estimate range is $40-70B.
- https://www.contractingbusiness.com/industry-news/news/55358865/heat-pumps-hold-steady-air-conditioners-slide-breaking-down-ahris-2025-year-end-shipment-numbers

**Shock.**
- R-410A equipment manufacturing ended Jan 1, 2025 (A2L transition); William Blair estimated 8-10% equipment price increases. https://www.facilitiesdive.com/news/a2l-transition-tariffs-not-yet-slowing-hvac-sales-william-blair-lennox/745283/
- Section 25C efficiency credit ended for installs after Dec 31, 2025 (contractor source; IRS page not opened). https://www.donovanac.com/blog/federal-tax-credits-for-energy-efficient-hvac-systems-are-expiring
- Section 232 tariffs on steel, aluminum and copper content and later 2026 tariff changes.
- Result: 2025 central AC and heat-pump shipments fell 20.0%; Oct and Nov 2025 were down 49.4% and 46.4% y/y (partly a pull-forward and a strong 2024 base). Carrier and Trane tempered 2026 expectations. https://achrnews.com/articles/soft-residential-demand-carries-into-the-new-year

**Incumbents and fragility.** OEMs (Carrier, Trane, Lennox, Daikin and others), distributors and a very fragmented contractor base, with some private-equity roll-ups (not sourced here). Homeowners buy under duress (system died in a heat wave) with no price visibility; the comfort-advisor sales model depends on one-visit closes. OEMs cannot sell direct without breaking their dealer networks, which is why direct-to-consumer attempts so far come from startups.

**Funded startups (2023-2026).**
- Jetson: $50M Series A, Jan 2026, led by Eclipse; vertically integrated heat-pump installer, 1,000+ systems, CO/MA/NY and California from June 2026. https://www.contractingbusiness.com/industry-news/news/55352078/jetson-secures-50m-to-scale-all-electric-heat-pump-systems-into-new-us-markets
- Quilt: $20M Series B (date unconfirmed).
- Arch: $6.2M seed (date unconfirmed).
- Tetra: $10.5M seed, 2023.
- Aira (EU): EUR 150M.
- Field-service software (ServiceTitan and others) is established. Not re-verified here.
Judgment: contested. Crowded for heat-pump electrification. Open for replace-on-failure conventional systems, where the tax-credit tailwind is gone and the pain is price and speed.

**Wedge hints.**
- Instant replace-on-failure quote, financing and install booking for conventional AC and furnace, sold on price transparency.
- Contractor buy-side tools: pricing and availability across distributors, A2L compliance and refrigerant handling documentation.
- Distributor-embedded financing or "good-better-best" quoting.
- $100M is 0.18% of the pool.

**Insider roles.** HVAC contractor owners, comfort advisors and sales techs, distributor branch managers and counter staff, OEM territory reps, home inspectors, utility rebate program managers.

---

## 4. US title insurance premiums (plus the attached settlement-fee stack)

**Money flow.** Buyers, sellers and refinancers pay premiums at closing to title agents and underwriters. The lender's policy is required; the owner's policy is optional. Agents keep most of the premium (typical split from my knowledge; not verified here).

**Size.** ALTA: $18.5B of premium in 2025 (+13.8%), published May 22, 2026. Claims paid were just over $667M, about 3.6% of premium (my arithmetic). Top underwriters by share: First American 23.1%, Fidelity National Title 14.5%, Old Republic 14.0%, Chicago Title 13.1%, Stewart 10.9%. Fidelity and Chicago are both FNF brands, so FNF is about 27.6% (my sum; verify). Texas $2.7B, Florida $2.01B, California $1.6B.
- https://alta.org/news-and-publications/press-release/ALTA-Reports-2025-Market-Share-and-Title-Insurance-Premium-Volume
- https://www.scotsmanguide.com/news/title-insurance-industry-posts-bumper-year-in-2025/

**Shock (modest; be honest).**
- Fannie Mae title-waiver pilot: started Nov 2024 with Doma, Westcor added July 2025, refinances under 80% LTV only, test ends Nov 30, 2027. FHFA Director Pulte said on X (reported June 26, 2026) that Fannie is working to expand it. https://www.scotsmanguide.com/news/pulte-says-fannie-mae-title-waiver-pilot-program-poised-for-expansion/
- KBW: the pilot "remains very small", and refinances are under 10% of title revenue. https://www.nationalmortgagenews.com/news/pulte-says-title-waiver-pilot-expanding-new-study-warns-of-risk
- Precedent: Fannie scrapped an earlier waiver pilot in Aug 2023 after industry pushback. https://nationalmortgagenews.com/news/criticism-praise-follow-fannie-maes-scuttled-title-waiver-pilot
- Attorney-opinion-letter acceptance broadened in 2024 (condos, covenants); a Stewart analysis says Fannie will evaluate purchase-loan use after the pilot (UNVERIFIED, secondary).
- Why the pool still matters: a 3.6% payout ratio on $18.5B is the clearest overpricing signal in this whole slice. A real shift in GSE policy would be the trigger, and it has not happened yet.

**Incumbents and fragility.** A five-brand oligopoly with a thousands-strong agent network, a strong trade group (ALTA) that has already killed one waiver pilot, and rates that are filed or, in some states, promulgated (e.g., Texas; from memory). Why they cannot respond: any move to price near expected loss cuts their premium base by an order of magnitude, and agents, who keep most of the premium, are their distribution.

**Funded startups (2023-2026).**
- Titl (Miami): $2.5M seed, 2026.
- Qualia (closing software): last rounds 2019-2021 (Series D-II $40M, April 2021).
- Endpoint: $150M corporate minority round, Oct 2021 (CB Insights).
- Blueprint Title: $16M Series B, Sep 2021.
- Spruce: 2018.
- Doma: the pilot's first vendor. Prior-wave underwriting-startup economics were poor (my memory; not verified here).
Judgment: contested. The 2019-22 wave is mostly outside the window and not obviously successful. Almost nothing funded in 2023-26.

**Wedge hints.**
- Automated title-risk scoring and attorney-opinion-letter workflow for low-LTV refinances, HELOCs and second liens, sold to lenders (budget line: lender closing-cost and QC).
- Closing-cost transparency for consumers is a distribution wedge, not a revenue one.
- Check the legal premise first: state title-insurance statutes, rate filing and licensing, and whether the GSEs will buy loans without a lender's policy beyond the pilot.
- $100M is 0.54% of premium.

**Insider roles.** Title and escrow officers, underwriting counsel, agency owners, lender QC and closing managers, county recorders, real-estate attorneys in attorney-opinion states.

---

## 5. US families' paid child care

**Money flow.** Parents pay (after-tax, or pre-tax through dependent-care FSAs) or state subsidies pay about 624,300 providers; center-based care is 86% of revenue.

**Size.** $68.5B industry revenue in 2022 (Committee for Economic Development / Conference Board, July 9, 2024). Child Care Aware's 2025 national average price is $13,184 per child (released May 13, 2026; +0.4%), about 10% of median two-parent income and 33% for single parents. Revenue includes subsidy dollars (about $52B of supplemental federal aid was infused during the pandemic). Parents' out-of-pocket share was not found; EPI estimated $42B for children under 5 in 2020.
- https://conference-board.org/press/post-covid-19-child-care-industry-revenue
- https://info.childcareaware.org/media/child-care-prices-rival-major-household-expenses

**Shock.**
- Dependent-care FSA cap rises from $5,000 to $7,500 for tax years starting Jan 1, 2026 (law signed July 4, 2025); employers need not adopt it. https://www.hwhlaw.com/advisory-dependent-care-fsa-limit-increased-to-7-500-for-2026
- Section 45F employer child-care credit rises from 25% to 40% (50% for small business) with the cap at $500k ($600k small), effective for 2026 expenses. Payments to intermediaries such as CCR&Rs now qualify, which opens it to employers without an on-site center. https://www.irs.gov/businesses/small-businesses-self-employed/employer-provided-child-care-credit-tax-year-2026-and-later
- New Mexico began no-cost universal child care Nov 1, 2025 (first state). https://www.kirtland.af.mil/News/Article-Display/Article/4319224/new-mexico-implements-universal-child-care-for-all-residents/
- Supply is shrinking: home-based family child care down 17,235 providers since 2019; center-worker average wage $28,185 in 2022 (CED).

**Incumbents and fragility.** Tens of thousands of small providers on razor margins, large chains (Bright Horizons, KinderCare; from memory), state CCDF subsidy administrators and CCR&Rs, and benefit administrators who run DCFSAs. Providers cannot raise price without losing families, and state subsidy rates lag cost.

**Funded startups (2023-2026).** Brightwheel ($88.8M total; last round Series C Feb 2021), Lillio/HiMama (Series B $55.6M, Nov 2021), Kinside ($12M, June 2022), Winnie ($9M, 2019), Upwards/WeeCare ($21M Series B, about Feb 2024), Bumo ($67M, Sept 2025; VCBacked only, UNVERIFIED), Kidola ($2.5M, June 2025). https://www.cbinsights.com/company/brightwheel/financials
Judgment: contested. Provider software and parent marketplaces are well covered; very little targets employer-credit packaging or subsidy-payment speed.

**Wedge hints.**
- 45F "intermediary" product: an employer buys capacity or subsidies through a managed network and gets a 40-50% credit. Payer is the employer's HR or finance head; the tax credit is the budget line. Check: how 45F treats payments to for-profit intermediaries; whether employers will make the cash outlay.
- Fast subsidy reimbursement or payment advances for small providers (state CCDF payments are slow; cash-flow product).
- $100M is 0.15% of the pool.

**Insider roles.** Center directors, family child-care owners, state CCDF administrators and CCR&R directors, employer benefits managers, licensing inspectors.

---

## 6. US private-pay in-home care for older adults (non-medical aides, companions, live-in)

**Money flow.** Older adults and their families pay agencies (franchise and independent) or hire aides directly. Public payers (Medicaid, VA) add to the same workforce.

**Size.** LOW CONFIDENCE. IBISWorld puts "elderly and disabled services" at $80.1B in 2025; Home Care Pulse reported agencies at 65% private-pay in 2020 (down from 72% in 2018). 80.1 x 0.65 is about $52B (my derivation mixing scopes). The NY DFS cites about $55B of total out-of-pocket long-term care in 2018, which includes nursing homes, so it is not directly comparable. No clean private-pay number exists. Median home health and personal care aide pay was $16.78 an hour in 2024.
- https://img.ibisworld.com/united-states/industry/elderly-disabled-services/1607
- https://hcaoa.org/newsletters/private-pay-has-decreased-by-9-in-the-past-3-years
- https://www.dfs.ny.gov/consumers/health_insurance/long_term_care_insurance/cost_ltc

**Shock.**
- OBBBA (July 4, 2025) cuts federal Medicaid by about $911B over 10 years (KFF). Medicaid pays about two-thirds of home- and community-based services. Nearly one in three home care workers is an immigrant. https://www.kff.org/medicaid/payment-rates-for-medicaid-home-care-ahead-of-the-2025-reconciliation-law/
- DOL proposed (July 2, 2025) to restore the FLSA companionship and live-in exemptions for third-party agencies, and on July 25, 2025 told investigators to stop enforcing the 2013 rule. Final status not confirmed; an Apr 2026 law-firm alert still called it pending. Many states (NY, NJ, CA) require overtime regardless. https://www.jacksonlewis.com/insights/home-care-agencies-and-their-clients-could-get-relief-through-dol-proposal-reinstate-companionship-live-exemptions and https://www.parkerpoe.com/news/2026/04/sixth-circuit-upholds-labor-departments-narrow-interpretation-of
- TPS for Haitians ended after a Supreme Court ruling (reported July 2026): about 330,000 people lose work authorization; Haitians are about 7% of this workforce per LeadingAge. https://www.aljazeera.com/news/2026/7/2/will-the-end-of-tps-for-haitians-mean-a-caregiving-crisis-in-us
- CMS GUIDE dementia model: Papa joined June 2026 (company release; verify with CMS).
- Adjacent: New York moved its Medicaid CDPAP to a single statewide fiscal intermediary (PPL) effective April 1, 2025, consolidating a formerly many-agency market. https://healthweb-back.health.ny.gov/health_care/medicaid/redesign/mrt90/mltc_policy/2025/docs/25-03.pdf

**Incumbents and fragility.** Franchisors and independents (Home Instead, Right at Home, Visiting Angels, etc.; from memory), thousands of local agencies, and gray-market direct hires. Supply is the binding constraint: immigration enforcement cuts the labor pool at the same time demand and price rise, and agencies cannot raise wages without pricing out families. Private-pay share is falling as public programs grow.

**Funded startups (2023-2026).**
- Papa: $242M total raised (CB Insights; last big round Nov 2021). GUIDE-model partnership June 2026. https://www.cbinsights.com/compare/papa-technologies-vs-right-at-home
- Hera: $27M Series A, June 26, 2026, led by Bain Capital Ventures (coordination for home-based care). https://homehealthcarenews.com/company/hera/
- Carallel: Series A-II about $2M, Jan 2025. Cariloop: Series C April 2024. Wellthy: Series C $25.5M, May 2023. Hometeam and ConcertoCare: undated.
- Honor: pre-window (see correction above).
Judgment: crowded for marketplaces and care-delivery; open for the labor-supply and household-employer back-office layers.

**Wedge hints.**
- Household-employer payroll and compliance for families that hire directly (cuts the agency's typical markup; labor law varies by state).
- Caregiver supply: training, credentialing, visa-eligible pipelines, backup-coverage pools.
- VA Aid and Attendance and LTC-insurance claim filing for families (small but real).
- $100M is 0.20% of the pool. The unit economics depend on take rate against a very tight labor supply.

**Insider roles.** Agency owners and administrators, geriatric care managers, elder-law attorneys, hospital discharge planners and social workers, VA benefits advisors, state Medicaid HCBS program managers, immigration attorneys, aides themselves.

---

## 7. US estate settlement (post-death administration) fees

**Money flow.** Estates and heirs pay probate and trust attorneys, CPAs (final 1040, 1041, 706), appraisers, real-estate agents, corporate trustees and courts. Funeral spend is a separate flow.

**Size.** LOW CONFIDENCE, and no authoritative national total exists. Deaths: 3,094,593 in 2025 (CDC provisional, July 2026). If roughly half need formal administration (my assumption) and professional fees average more than $8,500 (WealthManagement), that is about $13B. The same article estimates North American hidden costs at $15-16B a year (an author's estimate). Consumer guides cite 3-6% of estate value. Executor time is not in the dollar figure: about 570 hours and 16 months on average (EstateExec survey of about 1,200 adults); Alix says 12-18 months and up to 900 hours. A realistic range is $12-25B.
- https://cdc.gov/nchs/blog/posts/2026/07/provisional-data-u-s-death-rate-fell-to-a-record-low-in-2025.html
- https://www.wealthmanagement.com/estate-planning/we-need-to-talk-about-end-of-life-bureaucracy
- https://www.estateexec.com/Docs/General_Statistics

**Shock.**
- Wealth transfer: Cerulli projects $124T through 2048 ($105T to heirs); about $2.5T a year is already being inherited. https://www.cerulli.com/press-releases/cerulli-anticipates-124-trillion-in-wealth-will-transfer-through-2048
- The federal estate-tax exemption is $15M per person for 2026 deaths (OBBBA), indexed from 2027. That removes federal estate tax from almost every estate, so the work shifts from tax planning to plain administration. https://www.irs.gov/businesses/small-businesses-self-employed/whats-new-estate-and-gift-tax
- Wealth managers are buying in to keep inherited assets: Alix's $20M Series A (July 2025, Acrew) included Charles Schwab and Edward Jones Ventures. https://fintech.global/2025/07/21/fintech-firm-alix-bags-20m-to-scale-ai-estate-solution/

**Incumbents and fragility.** A fragmented small-firm probate bar billing hourly, bank trust departments, and online will companies (LegalZoom and Trust and Will; from memory). 50 state regimes, paper courts, and no one owns the end-to-end job. Lawyers cannot easily productize because hourly billing rewards the 16-month timeline.

**Funded startups (2023-2026).**
- Alix: $20M Series A (July 2025), $30.65M total, Schwab and Edward Jones as backers and distribution.
- EverSettled: $5M seed led by Emergence, reported July 17, 2026 (CB Insights only; UNVERIFIED). https://www.cbinsights.com/company/eversettled
- ClearEstate (Canada): CAD 16.8M Series A, 2021 (pre-window).
- Empathy, Lantern and Cake: not found in this search (may be death-admin or end-of-life tools; not verified).
Judgment: contested but thin. Only Alix is well funded, and it has the wealth-manager channel.

**Wedge hints.**
- Executor operating system with a flat-fee attorney network in a few high-volume states (CA, FL, TX, NY).
- Deceased-account intake for banks, brokerages and insurers. They each handle thousands of deaths a year and have a servicing-cost budget line; this is a B2B payer that is not the grieving heir.
- Real-estate disposition (sell, rent or retitle the house) as the monetizing step; houses are the largest asset in most estates.
- Legal premise to check: unauthorized-practice-of-law rules. Arizona ABS licensing and Utah's sandbox allow non-lawyer ownership.
- $100M is 0.67% of the pool, and it only works with a channel (wealth managers, banks, insurers) rather than direct-to-heir marketing.

**Insider roles.** Probate attorneys and paralegals, probate court clerks, bank trust officers and deceased-accounts ops staff, recent executors, funeral directors, estate-sale liquidators, fiduciary-return CPAs, life-insurance claims adjusters.

---

## 8. US pet owners' veterinary care

**Money flow.** Owners pay mostly out of pocket (pet insurance is small) to clinics, which are increasingly corporate (Mars, NVA, Thrive; from memory and Stateline). Clinics buy drugs and diagnostics from Zoetis, IDEXX and distributors.

**Size.** APPA 2026 State of the Industry: "vet care and product sales" $41.0B in 2025, inside a $158B total pet industry (2026 projection $165B). Private equity spent $45B on vet deals 2017-2022 (PitchBook via Stateline); PBS reports vet costs up about 60% since 2014.
- https://www.accessnewswire.com/newsroom/en/business-and-professional-services/u.s.-pet-industry-reaches-158-billion-in-2025-poised-for-continu-1165595
- https://stateline.org/?p=12798

**Shock.**
- UK CMA final report, Mar 24, 2026: vet prices +63% over 2016-23 vs 31.3% inflation; remedies include price lists, prescription fee caps and a comparison site; online pharmacies are 50-60% cheaper on common medicines; over 60% of UK practices owned by six groups. A foreign precedent, not US law. https://www.gov.uk/government/news/cma-concludes-market-investigation-with-major-reforms-to-veterinary-sector
- Chewy bought Modern Animal for about $400M, announced Apr 8, 2026 and closed May 21, 2026; Chewy's clinics went from 18 to 47. https://www.sec.gov/Archives/edgar/data/0001766502/000162828026042060/chwy-20260503.htm
- US telehealth VCPR laws are loosening state by state: Rhode Island (signed June 23, 2026), Arizona framework effective Sept 12, 2026, California AB 1399 (2024), about 8 states allow video-established VCPRs. https://www.myvetcandy.com/news/2026/6/26/rhode-island-just-legalized-veterinary-telemedicine-heres-exactly-what-the-law-says
- No US FTC action on vet consolidation found.

**Incumbents and fragility.** Corporate groups earn their margin on drugs, diagnostics and bundled pricing. That is exactly what a price-transparency or prescription-portability rule attacks, as the CMA is now doing. Debt-funded roll-ups cannot cut price.

**Funded startups (2023-2026).**
- Modern Animal: $46M, Sept 2025 (Addition, True Ventures, Upfront), then acquired by Chewy. https://builtin.com/articles/modern-animal-raises-46m-20250917
- Supertails (India): $30M Series C, Feb 2026.
- Vetster: $30M Series B, 2022 (pre-window).
- Invetx: $60.5M Series B (undated).
- Chewy Vet Care (incumbent entrant).
Judgment: crowded for clinics and telehealth. Open for price transparency and independent-clinic defense.

**Wedge hints.**
- Independent-clinic buying group and services for owners who want to resist or exit a roll-up (valuations were 2-10x per Stateline).
- Price-comparison and estimate-transparency layer, on the model the CMA mandated in the UK.
- Written-prescription portability to online pharmacies. Check the legal premise state by state.
- $100M is 0.24% of the pool.

**Insider roles.** Independent clinic owners, practice managers, vet techs, veterinary M&A brokers, compounding pharmacists, pet-insurance claims adjusters, emergency-hospital managers.

---

## 9. US individuals' tax-preparation fees (paid preparers; DIY software excluded from the sourced number)

**Money flow.** Taxpayers pay paid preparers (H&R Block, Jackson Hewitt, CPAs, enrolled agents, independent shops) or DIY software (Intuit and others). Bank products (refund transfer fees) ride on top.

**Size.** IBISWorld: $15.0B for US tax preparation services in 2026. About 54% of individual returns for tax year 2021 were paid-prepared (GAO 2024, via secondary quote). H&R Block FY2026 (June 30, 2026) revenue $3.95B (+4.9%, global including Wave); FY2027 guidance $4.11-4.16B. DIY software adds an unsourced amount. Total with DIY is probably $20B+ (my estimate).
- https://www.ibisworld.com/united-states/industry/tax-preparation-services/1399/
- https://www.sec.gov/Archives/edgar/data/0000012659/000001265926000019/q4fy26earningsrelease.htm

**Shock.**
- The IRS told the 25 participating states in Nov 2025 that Direct File will not run in the 2026 season, with "no launch date" set. In 2025 it accepted 296,531 returns, more than twice 2024. Free File remains (AGI $89,000 or less). The 2025 budget law directed the IRS to set up a task force on public-private partnerships to replace it. https://www.nextgov.com/digital-government/2025/11/direct-file-wont-happen-2026-irs-tells-states/409309 and https://www.kiplinger.com/taxes/a-free-tax-filing-option-just-disappeared
- New deductions in the 2025 law (tips, overtime, seniors, car-loan interest) add forms and rules; not separately sourced here.
- Honest read: the shock helps incumbents more than entrants. H&R Block's assisted revenue rose on higher net average charge and volume. The IRS-built free option is gone, so a state-level or privately funded free or low-cost option is now an open lane.

**Incumbents and fragility.** Intuit and H&R Block hold the consumer layer, together with the Free File partnership. They are not fragile on price. The openings are the segments they under-serve: 1099 and gig filers, multi-state filers, ITIN filers, and simple filers who paid for TurboTax because the free option was hard to find.

**Funded startups (2023-2026).** Filed ($17.2M seed, May 2025; pro-facing), Fifteenth ($8.25M seed, Feb 2025; founders and tech employees), TaxGPT ($4.6M seed, Feb 2025), Taxwire ($25M seed or Series A, June 2026; single aggregator, UNVERIFIED), TaxScouts (UK Series A). Column Tax: could not confirm funding. https://www.arctictoday.com/filed-raised-17-2m-to-help-tax-pros-finally-enjoy-tax-season
Judgment: contested. Funding clusters in pro-side AI tools, not consumer filing.

**Wedge hints.**
- White-label state free-filing (the Direct File architecture) sold to state revenue departments; the budget line is the state DOR's e-file program. The IRS tax-credit task force may produce federal demand.
- Embedded filing inside payroll, gig-platform and banking apps (1099 filers), sold per return.
- Enrolled-agent network for simple-but-not-DIY returns.
- $100M is 0.67% of the sourced $15B pool.

**Insider roles.** Enrolled agents, seasonal preparers and franchise owners, VITA coordinators, state DOR e-file managers, Free File Alliance participants, refund-transfer bank product managers.

---

## 10. SNAP benefits redeemed at US grocers (plus state administration and retailer compliance)

**Money flow.** Federal government funds EBT cards. Recipients spend at about 250,000 authorized retailers (count not verified; the FNS dashboard returned no figure). EBT processors (e.g., FIS in South Dakota) and POS vendors sit in the middle. States pay administration costs.

**Size.** The federal government spent $101.7B on SNAP in FY2025 (USAFacts). Average benefit $188 per person per month. Participation about 39.5M in Dec 2025, down from about 43M a year earlier (an unlabeled USDA table).
- https://usafacts.org/answers/how-much-does-the-federal-government-spend-on-snap-every-year/country/united-states/

**Shock.**
- OBBBA (July 4, 2025) cuts SNAP by about $186B over 2025-2034 (CBO). States pay up to 15% of benefits from FY2028, scaled by payment-error rate (with a delay of up to two years for high-error states), and their share of administration rises from 50% to 75%. https://www.supermarketnews.com/legislation-regulatory-news/snap-faces-186b-in-budget-cuts
- Food-restriction waivers: first five states (IN, IA, NE, UT, WV) began Jan 1, 2026; about 18 approved by early 2026; a National Grocers Association letter (Apr 2026) says retailers face 22 state pilots with "thousands" of unresolved product-classification questions. https://www.grocerydive.com/news/what-grocers-need-to-know-state-snap-waivers/828339/ and https://www.nationalgrocers.org/wp-content/uploads/2026/04/SNAP-Retailer-Letter-Oppose-SNAP-Restrictions-in-Farm-Bill.pdf
- Retail trade groups estimate $1.6B in initial losses.
- In June 2026 a federal district court ruled that USDA exceeded its authority in approving the waivers for five states (CO, IA, NE, TN, WV). Appeal status unknown. This is a real legal risk to any wedge built on restrictions.
- South Dakota uses FIS and a UPC-level Denied Product List at checkout. https://dss.sd.gov/docs/economicassistance/snap/SNAP_Food_Restriction_Waiver.pdf

**Incumbents and fragility.** EBT processors, POS vendors, grocers' IT teams and product-data firms. There is no single national SKU-level eligibility dataset; each state defines categories differently, and retailers are left to update systems themselves. State agencies face a hard new cost line (the 75% admin share and the error-rate-based benefit share) with no tooling budget.

**Funded startups (2023-2026).** Propel (Fresh EBT) raised a $4M seed in 2017 and a $12.8M Series A in 2018; no 2023-26 rounds found. No funded startup found on SKU-level eligibility or on state error-rate reduction. https://pulse2.com/propel-raises-12-8-million/
Judgment: open. The caveat is that retailer ARPU is small and the buyer is government, with long procurement cycles.

**Wedge hints.**
- A SKU-level SNAP eligibility data service (UPC denied-product lists by state) sold to retailers, POS vendors and EBT processors.
- Payment-error-rate reduction tooling (income and asset verification, duplicate participation checks) for states that now pay up to 15% of benefits.
- $100M is about 0.10% of benefits, but the revenue pool is administration plus retailer compliance, which is a small fraction of the $101.7B. This one needs the state-agency payer to reach $100M.

**Insider roles.** Grocery front-end and IT managers, convenience-store compliance leads (NACS), POS and EBT-processor product managers, state SNAP quality-control directors, USDA FNS retailer-management staff, food-bank benefits navigators.

---

## Notes for the next stage

1. Strongest combination of size, concrete shock, and weak-incumbent logic: pool 1 (total-loss and calibration layer), pool 7 (estate settlement through a bank, wealth-manager or insurer channel), pool 2 (backup servicing utility) and pool 3 (replace-on-failure HVAC).
2. Pool 4 (title) has the best raw overpricing signal (3.6% payout on $18.5B) but the 2025-26 shock is small and the industry has already beaten one waiver pilot. Treat it as a watch item unless the GSEs extend the pilot to purchase loans.
3. Pools 6 and 8 are crowded and carry thin or foreign-precedent shocks; only the labor-supply and independent-clinic wedges look open.
4. Pools 5, 9 and 10 depend on government or tax-code actions that could change on short notice (45F implementation, a Direct File replacement, the SNAP waiver litigation).
5. Round 1 lesson applied: every "gap" above is flagged as a candidate only. The named funded companies and incumbents should be read as the hidden-competitor check, not as the final one.
