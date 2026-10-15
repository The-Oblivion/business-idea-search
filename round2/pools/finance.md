# Round 2 pool map: Financial services slice (as of mid-October 2026)

Method: about 40 searches and fetches. Primary sources where reachable (ALTA, FinCEN via law-firm summaries, MBA, company earnings releases, CFPB). Many sizing and funding numbers come from trade press or vendor blogs, and I mark those as such. Every number below is either sourced or labelled "my derivation" or "from memory, not re-verified".

Pools, in order:

1. US bank and credit-union core, digital-banking and processing vendor spend (hidden giant)
2. US mortgage servicing operating cost (hidden giant)
3. US title insurance and settlement premiums (hidden giant, weak shock)
4. US third-party debt collection and recoveries (hidden giant)
5. US/Canada financial-crime compliance operations (AML, KYC, sanctions, fraud)
6. Global cross-border B2B payment revenue (stablecoins after GENIUS)
7. Card disputes and chargebacks (Visa VAMP)
8. US tax preparation and small-business accounting capacity
9. US estate settlement (the wealth-transfer fee pool)

Excluded (see end): private-credit administration and valuation fees, IEEPA tariff-refund claims, premium finance, student-loan servicing.

---

## 1. US bank and credit-union spend on core, digital-banking and processing vendors (hidden giant)

- **Money flow:** about 4,400 banks and about 4,300 credit unions (rounded, from memory) pay Fiserv, FIS and Jack Henry multi-year, per-account and per-transaction fees for core ledgers, digital banking, card and payments processing, and ancillary software.
- **Size:** about $19.5B a year across the big three. This is a ceiling for "US bank and CU spend", because it includes some non-US and card-issuer revenue.
  - Fiserv Financial Solutions FY2025: $9,664M (FY2024: $9,477M). [Fiserv Q4/FY25 release](https://mondovisione.com/news/fiserv-reports-fourth-quarter-and-full-year-2025-results-2026210/)
  - FIS Banking Solutions FY2025: $7,285M (FY2024: $6,892M). [FIS FY25 release](https://fisglobal.gcs-web.com/news-releases/news-release-details/fis-reports-full-year-2025-results-and-introduces-2026-outlook)
  - Jack Henry FY2026 (June year-end): about $2.55B. My derivation: the 10-K says revenue rose 7.1% or $169.05M. [Jack Henry 10-K](https://www.sec.gov/Archives/edgar/data/0000779152/000077915226000067/jkhy-20260630.htm)
  - Other vendors (nCino, Q2, Alkami, Temenos US, and others) are not counted.
- **Shock (2025-10 through 2026-08):**
  - Fiserv's stock fell about 44-48% in the week of its Q3-2025 miss and guidance cut ([Motley Fool](https://www.fool.com/investing/2025/10/30/why-shares-of-fiserv-fell-a-stunning-48-this-week/)).
  - Q2-2026 (reported 2026-08-06): banking organic revenue -10%, total revenue -3%, 2026 guide cut to -1% to flat organic and EPS $7.20-7.40. The head of Financial Solutions resigned in July 2026, and Fiserv is reviewing its product mix, including a debit network. [American Banker, 2026-08-07](https://www.americanbanker.com/news/another-tough-quarter-for-fiserv-may-lead-to-product-changes)
  - Bank M&A velocity and speed: the average regulatory approval window fell to about 4 months in 2025, the shortest since 1990 ([ABA Banking Journal](https://bankingjournal.aba.com/2025/11/report-average-bank-merger-approval-window-shrinks-to-four-months/)).
  - The FDIC proposed easing merger review in September 2026 ([ABA](https://bankingjournal.aba.com/2026/09/fdic-proposes-easing-bank-merger-review-process/)).
  - S&P: Q4-2025 deal value $26.3B, and Q1-2026 on pace for the highest since 2019. [S&P](https://spglobal.com/market-intelligence/en/news-insights/articles/2026/2/bank-m-a-deal-tracker-q1-2026-on-pace-for-highest-value-in-7-years-97780905)
  - Every merger forces a core and data conversion. Examples: Rockland Trust $4-5M core upgrade in 2026; Civista and Richmond Mutual integrations.
- **Incumbents and fragility:**
  - They capture the money through 5-10 year contracts with termination and deconversion fees, high switching costs, and decades of lock-in.
  - Fiserv holds about a third of community-bank cores, by one analyst's count. That same analyst's survey says DNA is its most disliked core and the least likely to be renewed (secondary source, from the earlier search).
  - Fiserv is distracted: a guidance reset, SEC/DOJ probes reported by one analysis (unverified), and activist Jana (unverified).
  - Their counter: management says attrition is "stable". Consultants note core contracts run for decades, so churn will be slow. Expect a decade-long migration, not a sudden break.
- **Funded startups already here (not deeply searched; named from memory, funding years not re-verified this session):** Nymbus, Thought Machine, 10x Banking, Mambu, Narmi; Finxact was bought by Fiserv in 2022. Public: nCino, Q2, Alkami. No attempt made to count 2023-26 rounds.
- **Crowdedness:** contested. Full cores are capital-intensive and sales cycles are 2+ years, so crowded at the "new core" level and open at the services and middleware layers.
- **Wedge hints (services into software):**
  - Core-contract benchmarking and renegotiation for $1-10B banks and credit unions, sold as a success fee on savings.
  - Merger-conversion toolkits: data mapping, deconversion, parallel testing, vendor-exit project management. This is sold to the acquirer, a named buyer with a deal-driven budget line.
  - A real-time data and API layer over legacy cores, so a bank can add products without a core swap.
  - Third-party risk management for bank-vendor oversight.
- **Insider roles:**
  - COOs and CIOs of $1-10B community banks.
  - Core-conversion project managers.
  - Bank M&A integration officers.
  - Vendor-contract negotiators at bank consultancies.
  - Credit union CEOs.
  - Former core-vendor account managers.
- **Hidden giant:** yes. Little startup attention goes to the vendor-contract and conversion services layer.
- **Open question:** what share of the $19.5B is truly US bank/CU core spend. The Fiserv number is the weakest.

---

## 2. US mortgage servicing operating cost (hidden giant)

- **Money flow:** investors and owners of mortgage servicing rights (MSR), meaning Fannie, Freddie, Ginnie, banks and non-bank servicers, pay servicers through the servicing fee strip. Servicers in turn pay the operating cost: call centers, escrow, collections, loss mitigation, foreclosure and systems. Operating cost is the addressable pool.
- **Size:** about $11-14B a year, my derivation.
  - MBA fully loaded cost per loan, 2024: $176 performing, $1,573 non-performing. [MBA Newslink, 2025-07-29](https://newslink.mba.org/mba-newslinks/2025/july/mba-newslink-tuesday-july-29-2025/chart-of-the-week-cost-of-servicing-performing-and-non-performing-loans/)
  - Loan count: I assumed 50-55M first-lien loans. I did not verify this. It is consistent with Valon's claim that 1 in 6 US mortgages is under contract to ValonOS.
  - Math: about 52M x $176 = $9.2B performing, plus about 2.6M loans 30+ days late or in foreclosure (4.37% + 0.67% of ~52M, rounded) x $1,573 = $4.1B. Total is about $13B.
  - MBA's 2025 direct servicing cost is $185 per loan, up from $181. About 75% of it is non-default cost (customer service, escrow, payoffs, systems). [NMN](https://www.nationalmortgagenews.com/news/servicing-costs-per-loan-climb-as-policy-shifts-bite)
- **Shock (2025-10 onward):**
  - Pandemic-era FHA loss-mitigation options expired at the end of September 2025, and trial payment plans keep loans delinquent in the survey until a permanent workout.
  - MBA Q2-2026: total delinquency 4.37% (+44 bps YoY), FHA 11.79% (+122 bps YoY), VA 4.89%, foreclosure inventory 0.67% (+19 bps). FHA foreclosure inventory is the highest since Q4-2018, and VA's the highest since Q2-2017. The VA partial-claim program is still pending guidance. [MBA Newslink Q1-26](https://newslink.mba.org/mba-newslinks/2026/may/mba-newslink-friday-may-15-2026/mortgage-delinquencies-increase-in-the-first-quarter-of-2026-mba-reports/)
  - Default cost is 9x performing cost, so delinquency growth moves the pool fast.
- **Incumbents and fragility:**
  - Platforms: ICE Mortgage Technology (MSP, expanded its servicing agreement with Wells Fargo) and Sagent.
  - Servicers: large non-banks (Rithm/Newrez, Carrington, ServiceMac) and banks.
  - Many run on decades-old mainframe-era systems and offshore call centers. The cost per loan climbs as agency rules (FHA loss mitigation, VA, Ginnie) change faster than the vendors ship.
- **Funded startups already here:**
  - Valon raised a $150M Series D at $2.3B on 2026-10-05 (Ribbit, a16z). It claims over $200M contracted ARR, with servicers covering 1 in 6 US mortgages. It sold its own servicing operations to Carrington in 2026 and now sells ValonOS plus AI agents. Customers: Newrez (migration starts 2027), Carrington, ServiceMac. Earlier rounds: $50M Series A in 2021 and $100M Series C in 2024. [Pulse 2.0](https://pulse2.com/valon-raises-150-million-series-d-at-2-3-billion-valuation-to-advance-valonos-deployment/)
  - ICE and Sagent are dispute-minded incumbents pushing AI features.
- **Crowdedness:** contested at the "servicing OS" layer (Valon has the money and the lead). Open at the default-operations layer, which no search turned up as startup-funded.
- **Wedge hints:**
  - FHA/VA default operations: loss-mitigation packet assembly, trial-payment-plan tracking, partial-claim processing, and Ginnie/FHA claim and curtailment avoidance. A curtailment is an investor penalty for late or wrong claims.
  - Subservicing for small non-bank servicers.
  - REO, property preservation and foreclosure-timeline management.
  - Escrow and insurance-shortfall handling as homeowners-insurance premiums climb.
  - Selling default-cost reduction on a per-loan or per-resolution basis.
- **Insider roles:**
  - Heads of default servicing at subservicers.
  - Loss-mitigation negotiators.
  - FHA/Ginnie compliance officers.
  - MSR traders.
  - Property-preservation vendor owners.
  - Foreclosure attorneys.
- **Hidden giant:** yes.
- **Round-1 trap to watch:** a per-loan fee must stay below the avoided loss. Default cost is $1,573 per loan, so the cost-reduction math is plausible, but it needs servicer data access.

---

## 3. US title insurance and settlement premiums (hidden giant, weak shock)

- **Money flow:** home buyers and refinancers pay lender's and owner's title premiums plus settlement fees. Agents keep most of the premium (about 80% in older estimates). Underwriters keep the rest and pay out claims.
- **Size:** $18.5B of premiums in 2025, +13.8% on 2024. Net income $1.168B, claims paid $667M. Q2-2026 premiums were $5.3B vs $4.5B in Q2-2025. Settlement and escrow fees come on top and are not counted. [ALTA 2025 full-year summary](https://alta.org/news-and-publications/news/20260519-2025-Full-year-Title-Insurance-Industry-Market-Share-Executive-Summary) and [HousingWire](https://www.housingwire.com/articles/title-insurance-premium-volume-jumped-nearly-14-in-2025/)
- **Shock (2025-07, weak):** the Fannie Mae title-waiver pilot lets certain refinances (LTV under 80%) skip the lender's policy and attorney opinion letter, using an automated title review. Launched November 2024 with Doma as the first vendor, and Westcor was added in July 2025. FHFA Director Pulte has said he wants to expand it, and Fannie's site shows an end date of November 30, 2027. [Inman 2025-07-11](https://www.inman.com/2025/07/11/trump-administration-expands-fannie-mae-title-waiver-program/)
  - Honest assessment: KBW says refinances are under 10% of title revenue, so the earnings effect is small. ALTA says fraud and forgery are about 40% of refinance claim costs (average claim above $206,000). Premiums are actually rising. The real prize is the purchase market (about 75% of mortgage volume), which the pilot does not touch. I could not confirm any 2026 expansion to purchases. This pool has a policy shock but not yet a money-flow shock.
- **Incumbents:**
  - Underwriter shares in 2025: First American 23.1%, Fidelity National 14.5%, Old Republic 14.0%, Chicago Title 13.1% (FNF brand, so FNF's total is higher), Stewart 10.9%.
  - Thousands of independent agents handle the local work. The business is a share of premium with no price competition (rates are state-filed).
  - Fragility: a revenue model priced as a percent of loan or sale price, while the work is a search and an exam. A waiver is a direct price attack.
- **Funded startups already here:** Qualia (closing software), Spruce, Snapdocs-type e-closing, and Doma (the first Fannie waiver vendor; I recall its 2024 sale to Title Resources Guaranty, from memory and not re-verified). Endpoint is a First American subsidiary after $70M of investment (2020). My search found only 2018-2020 rounds and no 2023-26 venture rounds. Both are signs of a hard-to-disrupt, incumbent-friendly market.
- **Crowdedness:** contested at the software layer, open at data and underwriting alternatives.
- **Wedge hints:**
  - A "title risk score" data asset for lenders considering waivers, which is a path to a third waiver vendor with an insurance-backed product, as Westcor does.
  - Automated county-record search and exam for agents.
  - Wire-fraud and closing-fund controls.
  - Curative (fixing defects) outsourcing.
  - Payoff and lien verification.
- **Insider roles:**
  - Title agency owners and escrow officers.
  - Underwriting counsel.
  - Title plant operators.
  - Lender secondary-market and QC staff.
  - Fannie/Freddie title policy people.
  - Claims examiners.
- **Hidden giant:** yes. Weakest shock of the nine pools.

---

## 4. US third-party debt collection and recoveries (hidden giant)

- **Money flow:** creditors (hospitals and physician groups, card issuers, telecoms, utilities, lenders) pay agencies a contingency fee of roughly 20-40% of recoveries. Debt buyers (Encore, PRA) buy defaulted paper at cents on the dollar.
- **Size:** about $15B in agency revenue. First Research (Nov 2025): about 3,900 establishments, about $15B, top 50 hold about half. [First Research](https://firstresearch.com/Industry-Research/Collection-Agencies.html) A 2026 roundup citing IBISWorld says $21.4B with about 7,000 agencies, which I could not verify. Debt-buyer income is on top, as are creditors' in-house collection costs. I take $15B as the conservative figure.
- **Shock (2025-07 through 2026-01):**
  - Medical debt is the biggest category: 68.9% of furnished collections by contingency collectors (CFPB, 2018-2022).
  - The CFPB's rule to remove about $49B of medical debt from credit reports was finalized in January 2025, then vacated in July 2025. [Orrick](https://infobytes.orrick.com/2025-07-18/district-court-tosses-cfpbs-medical-debt-rule/)
  - States moved in: about 15 states restrict medical-debt credit reporting as of mid-2026 (one 2026 blog count; verify with NCLC), and at least 8 states considered limits on wage garnishment for medical debt in 2026.
  - Federal student loans: collections restarted on May 5, 2025, but wage garnishment and Treasury offset were paused on 2026-01-16 with no end date, to implement the OBBBA repayment reforms. About 5.3M borrowers were in default. [Axios](https://axios.com/2026/01/16/student-loans-wage-garnishment-trump-collections)
  - CFPB debt-collection complaints nearly doubled to about 207,800 in 2024. [CFPB FDCPA report](https://www.consumerfinance.gov/data-research/research-reports/fair-debt-collection-practices-act-cfpb-annual-report-2025/)
  - Net effect: the leverage that made medical collections work (credit-report threats) is eroding state by state, with a patchwork of rules and a weakened CFPB.
- **Incumbents and fragility:** large agencies and buyers (Encore, PRA, Conduent, Performant, Alorica, healthcare revenue-cycle firms). The number of contingency collectors fell 18% (815 to 672) from 2018 to 2022. They run on call-center and letter workflows that are expensive to adapt to 50 sets of state rules.
- **Funded startups already here (from memory; rounds not re-verified):** TrueAccord (digital-first collections), Symend (behavioral collections), and Collectly (healthcare patient payments). I did not run a dedicated funding search for this pool.
- **Crowdedness:** contested.
- **Wedge hints:**
  - A hospital-side product that converts medical balances into payment plans or financing before they reach collections, aimed at ban states.
  - A state-law rules engine (licensing, call limits, reporting bans, garnishment limits) licensed to agencies and small creditors.
  - Chain-of-title and documentation for debt-buyer portfolios, since "debts I don't owe" is 45% of complaints.
  - Deceased-account and bankruptcy handling (links to pool 9).
  - Skip tracing and contact-consent management.
- **Insider roles:**
  - Collection-agency compliance officers.
  - Hospital patient-financial-services directors.
  - Debt-buyer portfolio managers.
  - FDCPA defense attorneys.
  - State licensing specialists.
  - Student-loan guaranty-agency staff.
- **Hidden giant:** yes.
- **Round-1 trap to watch:** payer and budget. The creditor pays on contingency, so a new approach must prove a higher net-of-cost recovery rate, and that is hard to demonstrate without portfolio access.

---

## 5. US and Canada financial-crime compliance operations (AML, KYC, sanctions, fraud)

- **Money flow:** banks, credit unions, broker-dealers, fintechs and money-service businesses pay analysts, offshore operations, software and data vendors.
- **Size:** $61B a year for the US and Canada. Forrester/LexisNexis survey (Feb 2024), 160 US/Canada respondents out of 1,181 global. Labor is the largest line. 99% of institutions reported rising cost. Survey-based and vendor-commissioned, so treat it as an upper-ish estimate. [LexisNexis](https://risk.lexisnexis.com/about-us/press-room/press-release/20240221-true-cost-of-compliance-us-ca)
- **Shock (2026-04):**
  - FinCEN's April 7, 2026 proposal replaces the 2024 proposal. It requires a program that is "effective" (defined for the first time), moves effort from low-risk to high-risk customers, and reserves enforcement for systemic failures. Four pillars: internal controls, independent testing, a US-based compliance officer, and training. Comments closed June 9, 2026, and the rule takes effect 12 months after the final rule. The FDIC, OCC and NCUA issued a companion bank proposal, and the Fed did not join. [Orrick](https://www.orrick.com/zh-TW/Insights/2026/04/FinCEN-Proposes-Rule-to-Modernize-AML-CFT-Program-Requirements)
  - Related: the investment-adviser AML rule was delayed to January 1, 2028 (final rule December 31, 2025). [MoFo](https://www.mofo.com/pdf/resources/insights/260108-fincen-hits-pause-no-aml-rule-for-investment-advisers-until-2028)
  - GENIUS Act adds AML duties for stablecoin issuers, effective by January 18, 2027.
  - Mayer Brown's read is that the structure of obligations does not change much. So the budget shock is "how spend gets allocated and examined", not a big cut.
- **Incumbents and fragility:** per-alert and per-seat pricing from big vendors (NICE Actimize, Oracle, SAS, Fenergo, LexisNexis, Nasdaq Verafin) plus BPO labor (large integrators). Effectiveness-based exams threaten alert-volume pricing, because fewer alerts are acceptable if risk is covered. (Vendor names from memory.)
- **Funded startups already here:** Sardine ($70M Series C Feb 2025, $660M valuation per third-party profile), Greenlite ($15M Series A, May 2025, Greylock), Flagright ($12.5M Series A per one source, undated), Castellum.AI ($8.5M Series A, undated), AiPrise ($12.5M Series A, undated), Diligent AI ($2.5M, March 2026), Marble (EUR 6.5M Series A, September 2026), Unit21 (last round I saw was 2022). Hawk AI, Hummingbird, Alloy, Parcha, Feedzai not verified here.
- **Crowdedness:** crowded. Many AI alert-triage plays, which fits round 1's "AI copilot" cliché.
- **Wedge hints (the non-copilot ones):**
  - Independent testing and "effectiveness" validation sold to $1-5B banks, since the proposal makes independent testing a named pillar. Needs examiner-defensible methodology plus software.
  - A US-based BSA officer-as-a-service for fintech sponsors and foreign-owned US entities (the US-based compliance officer requirement).
  - Investment-adviser AML program build-out ahead of the 2028 date (about 15,000 RIAs, from memory).
  - Sponsor-bank oversight for BaaS programs.
- **Insider roles:**
  - BSA/AML officers at $1-5B community banks.
  - Former OCC and FDIC BSA examiners.
  - SAR QA leads at offshore centers.
  - Sponsor-bank compliance heads.
  - AML consultants and independent testers.
- **Hidden giant:** no.

---

## 6. Global cross-border B2B payment revenue (stablecoins after GENIUS)

- **Money flow:** businesses pay banks, FX providers, correspondent networks and payment firms fees and FX spread to send money across borders.
- **Size:** about $193B a year in international payments revenue, about 80% B2B (a 2024 Visual Capitalist chart citing McKinsey; I did not find the 2025-report figure). McKinsey's 2025 report puts total payments revenue at about $2.5T. [Visual Capitalist PDF](https://elements.visualcapitalist.com/wp-content/uploads/2024/07/1722327973073.pdf) and [McKinsey 2025](https://www.mckinsey.com/industries/financial-services/our-insights/global-payments-report). One third-party estimate puts real stablecoin payments at about $390B a year, with B2B about $226B, which is tiny against the pool.
- **Shock (2025-07):**
  - The GENIUS Act became law on July 18, 2025. Agencies missed the July 2026 rulemaking deadline. The OCC said on 2026-08-19 it aims to finalize by November, and the effective date is expected January 18, 2027. Draft rules: $5M capital floor and 10% same-day redeemability. [The Block](https://theblock.co/news/regulation/2026-08-19-occ-races-to-finalize-genius-act-stablecoin-rules-by-november-412240)
  - Fed: stablecoin market cap $317B on 2026-04-06 (secondary).
- **Incumbents and fragility:** correspondent banks, SWIFT, Wise, Payoneer, Airwallex, card networks. Fees are high mostly on small-ticket and emerging-market corridors. The networks are buying their way in.
- **Funded startups already here:**
  - BVNK: Mastercard agreed to buy it for up to $1.8B (March 2026), after Coinbase's roughly $2B talks fell apart. [Fintech Futures](https://www.fintechfutures.com/m-a/mastercard-to-acquire-bvnk)
  - Bridge: acquired by Stripe for $1.1B (announced October 2024; my recollection is that it closed early 2025, though one search summary implied February 2026).
  - Zerohash: stayed independent and reportedly sought $250M at $1.5B.
  - Rain: $250M Series C, January 2026.
  - Noah: $38M seed, October 2026.
  - Cybrid: $10M Series A.
  - Also Circle and Ripple.
  - The March 2026 FXC Intelligence review lists Kast, Arq, Levl, VelaFi, Almond and Mesta.
- **Crowdedness:** crowded. Money is going to infrastructure, and the networks are buying the winners, so a small team sells into a market where the payment rail itself is commoditizing.
- **Wedge hints:** corridor-specific working-capital and trade finance for SMB importers (a balance-sheet path), AR and treasury reconciliation for businesses receiving stablecoins, payroll and contractor payouts into specific emerging markets, GENIUS "comparable regime" compliance for foreign issuers. All are narrow, and the honest read is that most are dead-end unless a lending balance sheet is attached.
- **Insider roles:**
  - Treasury managers at importers and exporters.
  - Freight-forwarder finance staff.
  - Correspondent-banking operations heads.
  - MSB compliance officers.
  - Regional-bank FX desks.
- **Hidden giant:** no.

---

## 7. Card disputes and chargebacks (Visa VAMP)

- **Money flow:** card-not-present merchants lose the sale value on chargebacks, pay dispute fees, and now face network program fees. Issuers spend about $9-10 to process each dispute (Mastercard/Datos). Representment vendors take a share of recoveries.
- **Size (low confidence):** about $33.8B of global chargeback value in 2025, rising to $41.7B by 2028 (Chargeflow's blog; I could not confirm it in Mastercard's pages). Mastercard/Datos: about 261M chargebacks in 2025, projected to reach 324M by 2028, with issuer cost of $9.08-10.32 per dispute, which is about $2.4-2.7B for issuers alone. The pool most relevant to a vendor is the part merchants recover or avoid. [Chargeflow stats](https://www.chargeflow.io/blog/chargeback-statistics-trends-costs-solutions), [Mastercard](https://b2b.mastercard.com/news-and-insights/blog/what-s-the-true-cost-of-a-chargeback-in-2025)
- **Shock (2026-04):** Visa's VAMP (effective 2025-04-01) merges fraud and dispute counts into one ratio. Sources conflict on dates. The most consistent account: merchant "Excessive" enforcement from October 1, 2025, and the merchant threshold cut from 2.2% to 1.5% on April 1, 2026, with fees of about $4-8 per flagged transaction and acquirers graded on portfolio ratios, which pushes acquirers to cut or reserve risky merchants. Confirm against Visa's rules before relying on any number. [Chargeflow VAMP guide](https://www.chargeflow.io/blog/vamp-visa-acquirer-monitoring-program)
- **Incumbents and fragility:** Chargebacks911, Kount (Equifax), Riskified, Signifyd, Forter, PSPs' own dispute tools. Fragility: each network changes rules and evidence formats, and merchants have no dedicated staff.
- **Funded startups already here:** Chargeflow ($25M Series A, Nov 2025, about $46M total per CB Insights), Justt ($30M Series C, Dec 2024, about $100M total), and Chargebacks911. Several fraud-prevention platforms overlap.
- **Crowdedness:** contested to crowded.
- **Wedge hints:** VAMP-ratio management for mid-size merchants and ISOs/PSPs, such as early-warning dashboards and dispute deflection before the TC40/TC15 count; acquirer-side merchant monitoring tooling; evidence packages for non-traditional merchants (subscription, travel, digital goods); performance-fee models.
- **Insider roles:**
  - Risk managers at PSPs and ISOs.
  - Acquirer merchant-risk analysts.
  - Dispute-operations managers at subscription and travel merchants.
  - Network-rules consultants.
- **Hidden giant:** no.
- **Round-1 trap:** vendor-supplied sizing and a performance fee on a recovery that is small per dispute (the $9-10 issuer cost is the floor).

---

## 8. US tax preparation and small-business accounting capacity

- **Money flow:** individuals and small businesses pay CPAs, enrolled agents, chains and software for returns, bookkeeping and advisory.
- **Size:** about $14.5B for tax preparation alone (IBISWorld, 2025, seen via a search summary; a different vendor, VerticaIQ, shows about $9.4B). The full small-business bookkeeping, payroll and accounting services pool is larger, and I did not find a primary Census or BLS number. Top 8 firms hold almost 40% of tax-prep revenue. [IBISWorld](https://www.ibisworld.com/industry/default.aspx?indid=1399)
- **Shock (2026-01):**
  - Labor supply: first-time CPA exam takers fell from 48,004 (2016) to 32,188 (2021) (AICPA via secondary source). The 75% retirement-eligible figure is an AICPA estimate from about 2020. New non-150-hour licensure paths took effect in Ohio, Virginia and Georgia on January 1, 2026, and in Iowa and Utah on July 1, 2026. [CPA Credits tracker](https://www.cpacredits.com/resources/tracking-changes-to-the-150-rule-state-by-state/)
  - Capital: IFAC found 177 direct PE investments that drove 875 roll-up acquisitions (1,052 transactions) from 2015-2025. Capstone counted a record 194 accounting deals in 2025. [CPA Practice Advisor, 2026-03-06](https://www.cpapracticeadvisor.com/2026/03/06/over-1000-accounting-firms-globally-have-seen-private-equity-investment-in-the-past-decade-ifac-says/)
  - Government: IRS Direct File is not available for the 2026 filing season (296,531 returns in 2025). OBBBA added tips, overtime and senior deductions. H&R Block expects complexity to shift filers to assisted prep (about 20 bps per major complexity shift, its own claim).
- **Incumbents:** H&R Block (about 9,000 offices), Intuit TurboTax, independent CPAs, roll-ups (Crete Professionals Alliance, Thrive-backed, over $300M revenue, planned $500M+ of acquisitions in mid-2025).
- **Funded startups already here:** Basis ($100M Series B, Feb 2026, $1.15B valuation), Rillet ($100M Series C, Aug 2026, $1B), Crete (roll-up), plus Pilot, Fieldguide, Juno-type AI tax tools (from memory). Bench collapsed in December 2024 (from memory).
- **Crowdedness:** crowded for AI automation of tax and accounting work. This is the classic "AI copilot" play.
- **Wedge hints (not copilots):**
  - Financing and brokerage for retiring solo-CPA practices (buyers use SBA 7(a) loans), which is a lending or marketplace path.
  - Seasonal and overflow prep capacity for firms (enrolled-agent networks).
  - Succession and client-transition services.
  - Multi-state small-business compliance.
- **Insider roles:**
  - Solo and small-firm CPAs and enrolled agents.
  - Practice brokers.
  - PE-platform deal teams.
  - State CPA society executives.
  - IRS practitioner-liaison contacts.
- **Hidden giant:** no.
- **Honest read:** the capacity problem is real, but venture money is already flowing into the software answer.

---

## 9. US estate settlement (the wealth-transfer fee pool)

- **Money flow:** heirs and estates pay probate and estate attorneys, corporate trustees and executors, CPAs (fiduciary and final returns), appraisers, and other service providers during the 12-18 month settlement process. Financial advisors compete for the inherited assets.
- **Size:** about $5.5-9B a year of settlement-related fees, my derivation. IBISWorld puts US estate lawyers' revenue at $18.2B (2026). I assumed 30-50% is administration (probate and trust administration) rather than planning, and excluded corporate trustee and executor fees. [IBISWorld](https://img3.ibisworld.com/united-states/industry/estate-lawyers-attorneys/4807) The wider context: Cerulli projects $124T of transfers through 2048 ($105T to heirs), about $2.5T a year to heirs now, above $3T by 2030 and above $4T around 2036. [NAPA/Cerulli](https://www.napa-net.org/news/2024/12/wealth-transfers-expected-to-hit-$124-trillion-through-2048/) Treat the $5.5-9B as a floor with large uncertainty. Third-party "estate administration services" market reports range from $1.5B (North America) to $15.8B (global), and they are low-quality.
- **Shock (2025-07):** Alix raised a $20M Series A (July 2025, Acrew, with Charles Schwab and Edward Jones Ventures), a sign that custodians and advisors are paying to own settlement. Empathy has raised about $162M including a $72M Series C and distributes through insurers and employers. Cerulli: more than 70% of heirs are likely to change their parents' advisor. [FinTech Global](https://fintech.global/2025/07/21/fintech-firm-alix-bags-20m-to-scale-ai-estate-solution/) Also relevant, from memory: OBBBA set the estate and gift exemption at $15M per person from 2026, indexed, which removes the estate-tax planning urgency for most families and shifts value toward administration.
- **Incumbents and fragility:** fragmented solo and small-firm probate attorneys (county-court processes, billed hourly or as a percent), bank trust departments, and advisors whose revenue leaves when heirs do. The process is manual, document-heavy and different in each state.
- **Funded startups already here:** Empathy (about $162M), Alix (about $30.65M), plus planning-side players such as Trust & Will and Wealth.com (from memory). 
- **Crowdedness:** contested. The distribution (insurers, custodians) is being locked up by the first two.
- **Wedge hints:**
  - White-label settlement operations for credit unions and community banks, which handle the deceased's accounts but have no service to offer heirs.
  - Inheritance-advance lending to heirs during probate (a balance-sheet path).
  - Probate real-estate sale and retitling.
  - Account-closure and asset-retitling automation across institutions.
  - Unclaimed-asset search for estates.
- **Insider roles:**
  - Probate attorneys and paralegals.
  - Trust officers.
  - Advisors who track heir attrition.
  - Probate court clerks.
  - Funeral directors.
  - Bank deceased-accounts teams.
- **Hidden giant:** no (venture money has noticed it).

---

## Excluded pools and why

- **Private-credit administration, valuation and loan servicing.** Strong shocks: First Brands and Tricolor double-pledging (2025), then retail private-credit redemption gates in 2026 (average redemption requests of 12.3% against 5% caps in Q1-2026; Cliffwater requests of 14% against a 7% cap, per AICPA; evergreen fund assets above $530B per PitchBook). But the fee pool is small. At around $2T of private credit assets, administration and valuation fees of a few basis points are about $1B, below the $5B bar. I did not find a primary figure. Worth revisiting as a data or collateral-verification play rather than a fee pool.
- **IEEPA tariff refunds.** The Supreme Court ruled on 2026-02-20, the CIT ordered refunds on 2026-03-04 (suspended two days later), and a claims market has formed (prices rose from about 22% before the ruling to 55-75% after, per an arranger). It is a one-time flow, not an annual pool, with an expiring why-now (round 1 lesson 6), and probably belongs to the trade slice.
- **Insurance premium finance.** Company claim of about $60B in US annual originations, which implies roughly $3-5B of revenue, probably below $5B. No reliable primary source.
- **Student-loan servicing.** Fiserv divested its student loan servicing. Servicing contract revenue is small relative to the bar.

## Cross-pool read (my hypotheses, not findings)

- **Strongest candidates for round-2 idea generation:** mortgage default operations (pool 2), medical-debt-to-payment-plan conversion and state-rules engines (pool 4), merger-driven core conversion and contract services (pool 1), and settlement white-labeling plus inheritance-advance lending (pool 9). All have an identifiable signer and a mandate-driven or shock-driven budget.
- **Likely dead for a small team:** AI alert triage in AML (pool 5), AI tax and accounting automation (pool 8), generic stablecoin rails (pool 6).
- **Weakest shock:** title (pool 3). Premiums are growing, and the waiver pilot is refinance-only.

## What I could not verify (treat as open)

- US loan count for pool 2 (assumed 50-55M) and the 2025 MBA non-performing cost.
- US bank and CU share of the pool 1 vendor revenue, and 2023-26 funding for core and BaaS startups.
- Primary source for the $15B vs $21.4B collections revenue, the TrueAccord, Symend and Collectly round details, and the 15-state medical-debt count.
- Whether the Fannie title pilot expanded to purchases, and any 2023-26 title startup rounds.
- A Census or BLS figure for the full accounting-services pool.
- Exact VAMP dates and fees (sources conflict), and the chargeback dollar value (vendor-sourced).
- Whether the FinCEN AML rule was finalized after the sources I found (latest was the April 2026 proposal; comments closed June 9, 2026).
- Whether GENIUS final rules have been issued since the OCC's August 2026 statement.
