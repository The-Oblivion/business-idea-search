# Round 2 pool map: Insurance and risk transfer worldwide

Prepared 2026-10-14 for the round-2 business idea search. Slice: property and casualty availability (wildfire, hail, flood, Florida/California), reinsurance, workers comp, commercial auto and trucking, title, life and annuities, specialty and E&S, AI and cyber liability, parametric and captive structures.

Method: about 37 searches and fetches. Primary or near-primary sources used where possible: the NAIC 2025 full-year P&C and Title report (read as a PDF), the Triple-I/NAIC LAE table, LIMRA releases, AM Best summaries, the California Department of Insurance (CDI) August 2026 legislative brief (read as a PDF), the Federal Register, Ryan Specialty's Q4 2025 release, Marsh's captive benchmarking, Munich Re. Where a figure is derived or comes from secondary press, the section says so. A raw-notes appendix at the bottom keeps every verified data point.

## Read this first: what the data says about the cycle

- **The broad P&C "crisis" has partly reversed.** NAIC's 2025 full-year report shows industry combined ratio 92.9%, net income $150.6B, record surplus of $1.27T, no US hurricane landfall in 2024 or 2025, and the homeowners pure net loss ratio down 12.5 points to 53.5%. Swiss Re sigma 2/2026 projects P&C premium growth of only 0.6% in 2026. Property cat reinsurance fell 12-15% at 1/1/2026 and 15-25% at mid-year. Florida Citizens has shrunk from about 1.4M policies (Sept 2023) to 293,772 (May 31, 2026).
- **Where it is still hard:** California wildfire (Palisades and Eaton were the costliest wildfires in world history), casualty lines (commercial auto and general liability are the only major lines still above 100% combined), and anything touching AI.
- **So the best pools are not "hard market" bets.** Ideas that need premiums to keep rising will die in a soft market. The durable pools are the ones where an incumbent is structurally conflicted or where a rule forces new spend: title (agents keep 72.6% of the money while claims are 4.4%), captives (brokers lose commissions), AI exclusions (coverage vanished by form change), the California mitigation and FAIR Plan depopulation mandates, and the E&S/MGA delegated-authority layer where 65 new carriers must police their MGAs.
- **Insurtech funding is thin.** CB Insights reports a decade-low 81 insurtech deals in Q1 2026, and money is concentrating in a few late-stage names (Nirvana, Corgi, Qualia). That cuts two ways: less competition for small teams, but also fewer cheques.

## Summary table

| # | Pool | Size ($B/yr) | Hidden giant | Crowdedness |
|---|------|-------------|--------------|-------------|
| 1 | US homeowners premiums in wildfire/hail/hurricane markets (CA reform, FL reset) | 173 | no | contested |
| 2 | Cedents' property-cat reinsurance and ILS spend (global) | about 15 (lower bound, weak basis) | no | contested |
| 3 | US commercial auto and trucking liability premiums | 72 | no | contested |
| 4 | US workers' comp system cost (medical, indemnity, claims admin) | 64 | yes | contested |
| 5 | US title insurance premiums (agent-retained money) | 18.6 | yes | contested |
| 6 | US annuity and life distribution compensation (commissions, overrides) | about 15 (derived) | yes | contested (annuity back-office is open) |
| 7 | Wholesale, MGA and delegated-authority intermediation of E&S/specialty | about 21 (derived) | yes | contested (AI tools crowded, plumbing open) |
| 8 | P&C insurers' claims-handling and litigation-defense expense (LAE) | 86 | yes | contested |
| 9 | Cyber and liability premiums being carved out for AI risk | 16.3 (cyber); GL base about 131 | no | contested (cyber crowded, AI liability open) |
| 10 | Captives, group captives and fronting (alternative risk transfer) | 79.1 (premium); fee pool 2-4 | yes | open |

---

## Pool 1. US homeowners premiums in wildfire-, hail- and hurricane-exposed markets (California reform, Florida reset)

- **Geography:** US, concentrated in CA, FL, TX, CO, LA.
- **Size:** about $173.1B direct homeowners premium written in 2024 (+13.4%; combined ratio 99.3%), per S&P Global Market Intelligence on NAIC data (https://www.spglobal.com/market-intelligence/en/news-insights/articles/2025/3/state-farm-homeowners-premiums-soar-exceed-30b-in-2024-87876514, figure via search summary). State Farm held about 19.4% of 2024 homeowners premium. The NAIC 2025 report says 2025 premium growth slowed, so 2025 is a bit above $173B; I use 173 as the floor.
- **Money flow:** households (and their mortgage escrow accounts) pay carriers; carriers pay claims, cat reinsurers, agents (commissions) and modelers; residual plans (CA FAIR Plan, FL Citizens) sit behind the market and assess the industry when they lose money.
- **Shock:**
  - California's Sustainable Insurance Strategy now lets insurers price with forward-looking wildfire catastrophe models and pass California-only reinsurance costs into rates, in exchange for writing in distressed areas (85% of market share). CDI approved the Verisk wildfire model on 2025-07-24; Mercury filed the first rate case under the framework on 2025-08-15.
  - CDI's August 2026 brief says twelve insurer groups have now filed under SIS, FAIR Plan growth slowed to under 2% in Q2 2026, and a public wildfire cat model and annual California-only reinsurance cost analysis are coming.
  - The FAIR Plan has more than 668k policies (Jan 2026, secondary source) and a rate increase of roughly 30-35% for renewals from 2026-10-15 (sources conflict, secondary).
  - Florida is the opposite story: Citizens at 293,772 policies, June 1, 2026 cat reinsurance down 15-20% (Guy Carpenter), with take-outs by nine private carriers approved Feb-Apr 2026.
- **Sources:** CDI brief https://www.insurance.ca.gov/0400-news/0102-alerts/2026/upload/CDI-Natural-Catastrophe-and-Insurance-Overview-August-2026-Legislative-Brief.pdf ; Verisk model approval https://www.reinsurancene.ws/cdi-completes-review-of-verisks-wildfire-model-to-help-address-californias-coverage-crisis/ ; Florida https://www.insurancebusinessmag.com/reinsurance/news/breaking-news/florida-insurers-see-lower-reinsurance-pricing-at-june-renewals-577086.aspx and https://www.citizensfla.com/-/20260531-policies-in-force ; NAIC https://content.naic.org/sites/default/files/2025-annual-property-and-casualty-and-title-insurance-industries-analysis-report.pdf
- **Incumbents:** State Farm, Allstate, Farmers, Progressive, USAA, Chubb, Mercury, CSAA; independent agents; cat modelers (Verisk, Moody's RMS, KCC). Carriers make money on spread between premium and (modeled) loss; modelers license by seat.
- **Why fragile:** State Farm General went to S&P CreditWatch Negative and sought an emergency 17% hike; California is prior-approval, so any change needs a rate filing; the 85% writing commitment is a regulatory bargain carriers must now prove with data; legacy policy and inspection workflows cannot ingest mitigation evidence at scale. They cannot respond quickly because the regulator, not the market, sets the pace.
- **Startups already here (funded 2023-2026, verified this session):** RockRose Risk ($12.5M Series A, Aug 2026, vertically integrated wildfire mitigation plus insurance, plans to buy tree-trimming and roofing firms); BurnBot (strategic investment from Mercury Insurance, May 2026); BirdsEyeView (seven-figure round, Jan 2026, wildfire modeling); Zesty.ai (Series B 2022, model accepted by CDI, no 2026 round found); Kettle (wildfire reinsurance MGA, $25M Series A, older). Not re-verified this session, from background knowledge: Kin, Openly, Hippo, Lemonade, Branch.
- **Crowdedness:** contested. Carriers plus a long list of risk-scoring and MGA startups; the unclaimed ground is evidence and logistics, not scoring.
- **Wedge hints:**
  1. Verified-mitigation evidence layer: SIS forces discounts and a published wildfire risk score, but homeowners must prove work (photos, invoices, third-party or IBHS inspection; State Farm's 2024 version needed a $125 inspection fee). A registry or inspection-and-repair network that carriers accept as the record.
  2. FAIR Plan take-out tooling for the twelve SIS carriers (policy-level matching, pricing, agent workflow). Florida's Citizens depopulation is the template.
  3. Wildfire rebuild and claims logistics (contractor capacity, permit tracking) after Palisades and Eaton.
  4. Parametric deductible top-ups sold through MGAs.
- **Insider roles:** CDI rate-filing analysts and carrier actuaries who file SIS cases; independent agents in California WUI zones; wildfire claims adjusters from Palisades and Eaton; FAIR Plan underwriters; Fire Safe Council and mitigation contractors; mortgage servicers' hazard-loss departments; reinsurance brokers handling Florida.
- **Check before building:** the legal premise is regulatory (a product that influences rates or discounts is inside the filing process); status of the FAIR Plan rate increase and 85% commitment measurement differ across sources.
- **Hidden giant:** no.

---

## Pool 2. Cedents' property-catastrophe reinsurance and ILS spend (global)

- **Geography:** global (US and Florida are the price-setting regions).
- **Size:** at least $15B a year, **weak basis**. I could not find a sourced total of global property-cat reinsurance premium. Lower bound derived: insurance-linked securities (ILS) capital of $144.5B at 6/30/2026 (Insurance Business) times a rate-on-line of about 8.5-12% (Citizens' net rate-on-line was 8.46% in 2026 and 11.95% in 2025) gives about $12-17B for third-party capital alone. Dedicated reinsurance capital is $648B (Gallagher Re, YE2025) to $790B (Aon, 3/31/2026), so the true premium pool including traditional reinsurers is several times larger, but that is unquantified.
- **Money flow:** primary insurers, state funds (Citizens, FHCF, CEA) and some corporates pay reinsurers and cat-bond investors for catastrophe limit; brokers (Aon, Guy Carpenter, Gallagher Re, Howden) take brokerage; modelers sell the risk view.
- **Shock:** the January 1, 2026 renewals: Howden risk-adjusted property cat pricing -14.7% (largest drop since 2014), retro -16.5%; Guy Carpenter global property cat ROL index -12%, then -16% at mid-year, now 23% below the 2024 peak; Florida June 1 down 15-25%. Cat bonds hit a record $25.6B issued in 2025, with $63.4B outstanding at mid-2026. Counter-signal: CDI's August 2026 brief says cumulative losses signal higher reinsurance costs for 2027.
- **Sources:** https://www.artemis.bm/news/property-cat-reinsurance-down-14-7-retrocession-down-16-5-at-jan-2026-renewals-howden-re ; https://www.insurancebusinessmag.com/us/news/catastrophe/record-reinsurance-capital-fails-to-close-us-catastrophe-coverage-gaps-591241.aspx ; https://www.insurancebusinessmag.com/reinsurance/news/breaking-news/propertycat-rates-fall-up-to-25-as-reinsurance-capital-hits-record-high-580411.aspx
- **Incumbents:** Munich Re, Swiss Re, Hannover Re, SCOR, Everest, Arch, RenaissanceRe; four large brokers; ILS managers. Reinsurers earn the spread over modeled loss; brokers earn a percentage of premium.
- **Why fragile:** only moderately. Falling rates shrink brokerage dollars (a percentage of a smaller premium) while placement work stays manual (spreadsheets and bordereaux); a record capital glut means reinsurers fight for the large cedents and neglect the long tail of small insurers, public entities and corporates that cannot afford a full placement. Balance sheets are not fragile.
- **Startups (verified this session):** Kettle (wildfire reinsurance MGA). Not verified: Reask, Oasis LMF, Fermat Capital, and others.
- **Crowdedness:** contested. The cat-model layer is crowded; the small-ticket access layer is thinly served.
- **Wedge hints:**
  1. A repeatable small-ticket cat-bond or parametric shelf for regional insurers, municipalities and mid-size corporates (under about $50M limit), where reinsurers' minimum sizes bite.
  2. Reinsurance procurement and bordereaux data tooling for the roughly 65 new E&S carriers and MGAs that each buy several treaties.
  3. Collateral and trust accounting operations (letters of credit, trusts).
  4. Parametric top-ups attached to Pool 1.
- **Insider roles:** reinsurance brokers who place treaties; cedent reinsurance managers and CROs at regional carriers; cat modelers; ILS portfolio managers; trust and collateral administrators in Bermuda; parametric calculation agents.
- **Check before building:** reinsurance/ILS issuance is licensed and capital-heavy; a small team should assume it sells software or services to cedents, not capacity.
- **Hidden giant:** no (famous, but opaque).

---

## Pool 3. US commercial auto and trucking liability premiums

- **Geography:** US.
- **Size:** about $72.2B direct premium written in 2024 (+12.1%, AM Best as summarized in search results; not re-verified at source). NAIC reports commercial auto premium grew 15 straight years and 6.6% in Q4 2025, the highest of any line. Commercial auto liability pure net loss ratio was 71% in 2025 (NAIC).
- **Money flow:** motor carriers and fleets (a very large number of small carriers; count not verified here) pay carriers and MGAs, often through trucking-specialist agents; carriers pay claims and defense counsel; verdicts above $10M ("nuclear") drive the severity.
- **Shock:** two federal changes remove drivers and rewrite driver-qualification risk. English-language proficiency (ELP) out-of-service enforcement started 2025-06-25 (DOT says 26,000+ drivers sidelined). The non-domiciled CDL final rule is effective 2026-03-16 and FMCSA estimates 194,000 non-domiciled CDL holders are affected. Commercial auto and general liability are the only major lines above 100% combined (Triple-I/Milliman, May 2026), and S&P projects commercial auto at 104.4% in 2026 rising to 106.3% by 2029. A link from these rules to premiums is mostly forecast so far (underwriters expected to ask about language testing at renewal); one executive said capacity has not yet fallen.
- **Sources:** https://www.federalregister.gov/documents/2026/02/13/2026-02965/restoring-integrity-to-the-issuance-of-non-domiciled-commercial-drivers-licenses-cdl ; https://www.insurancebusinessmag.com/us/news/property/pandc-industrys-best-half-in-years-hides-a-casualty-problem-589025.aspx ; NAIC report above.
- **Incumbents:** Progressive (among the largest trucking writers, background knowledge), Travelers, Liberty Mutual, Berkshire/National Indemnity, Old Republic, Sentry, Great West, Canal; specialty agencies (e.g., Reliance Partners). They profit when rate increases outrun severity; they have not.
- **Why fragile:** 15 years of underwriting loss in commercial auto; loss data and driver files sit in incompatible systems (telematics per fleet, MVR per state, CSA scores from FMCSA); verdict inflation outruns filed rates; small-fleet agents cannot verify driver status. They are slow because states regulate rates and the line is unprofitable, which cuts appetite rather than driving innovation.
- **Startups (verified this session):** Nirvana Insurance ($100M Series D at $1.5B valuation, over $260M raised, telematics-based, serves single-truck to 500+ truck fleets); Cover Whale (MGA, $40M from Morgan Stanley Expansion Capital in July 2025, $1.3B+ GWP since 2020); LEEO (telematics commercial auto product launched March 2026); HDVI ($16M Series A, Munich Re Ventures and 8VC); Humn.ai ($13.7M Series A, UK, undated).
- **Crowdedness:** contested, bordering on crowded for telematics-underwritten MGAs. The compliance-data layer is open.
- **Wedge hints:**
  1. Driver-qualification verification feed (CDL status, ELP out-of-service history, non-domiciled flags, chameleon-carrier detection) sold to carriers, MGAs and brokers as underwriting data. The payer has a budget line (underwriting data, like MVR vendors); it does not need the carrier's balance sheet.
  2. Group captive or risk retention group formation for 20-100 truck fleets (links to Pool 10).
  3. Post-crash evidence and rapid-response services to blunt nuclear verdicts, paid by carriers' claims budgets (links to Pool 8).
- **Insider roles:** trucking insurance agents (large specialty agencies); fleet safety directors; trucking claims adjusters and litigation managers at Progressive or Great West; defense counsel who try nuclear-verdict cases; FMCSA compliance consultants; loss-control engineers; CVSA inspectors.
- **Check before building:** the non-domiciled rule has been under litigation and injunction; the ELP rule is being codified, not yet codified.
- **Hidden giant:** no.

---

## Pool 4. US workers' compensation system cost (medical, indemnity, claims administration)

- **Geography:** US (50 state systems).
- **Size:** $64.1B total benefits paid in 2023 (medical plus cash), per the National Academy of Social Insurance (NASI), covering about 150M jobs; private carriers wrote $41.6B net premium in 2025 (NCCI), the rest being state funds and self-insured employers. Total employer cost is larger than benefits (administration, profit, taxes); not sourced here.
- **Money flow:** employers pay premiums (or self-insure) to carriers and state funds; carriers and third-party administrators (TPAs) pay medical providers, injured workers and lawyers; cost-containment vendors (bill review, pharmacy benefit management, nurse case management) are paid per bill or as a share of savings.
- **Shock:** NCCI's 2026 State of the Line (May 2026): private carrier premium fell 0.2% in 2025, the only major line to shrink; the calendar-year combined ratio rose to 91% from 86%, the accident-year 2025 combined ratio was 102% (profit now depends on releasing old reserves), and medical claim severity rose 6% (2024 data). Premium is shrinking while accident-year results have slipped above break-even, and NCCI notes prior-year reserves are still being released, which is what keeps the calendar year profitable.
- **Sources:** https://riskandinsurance.com/workers-compensation-remains-profitable-as-premium-dips-and-severity-climbs/ ; https://www.nasi.org/2026/08/11/workers-compensation-benefits-costs-and-coverage-2023-data/
- **Incumbents:** Travelers, Hartford, Liberty, Zurich, Chubb, AmTrust; state funds (e.g., California SCIF); TPAs (Sedgwick, Gallagher Bassett, CorVel); medical cost-containment (Enlyte, MedRisk, Healthesystems). Money is made on float and reserve releases, and on vendor per-bill fees.
- **Why fragile:** 50 separate fee schedules and rules, so national vendors rebuild logic per state; vendor fees tied to savings create incentives to inflate "savings"; premium audits and class-code disputes irritate the paying employer; reserve-release earnings are about to shrink. Not highly fragile, but boring and fragmented.
- **Startups (verified this session):** CompScience ($27.6M Series B, Feb 2025, safety video analytics plus an MGA); Pie Insurance (over $615M raised, Series D 2021); Hourly ($27M Series A, undated); Insurate (2021 seed). No 2026 rounds found for workers' comp claims, medical or nurse case-management startups.
- **Crowdedness:** contested for MGAs and underwriting; open on the claims, medical management and audit side.
- **Wedge hints:**
  1. Employer-side premium audit and class-code correction on contingency (employers have a premium line and hate disputes; a recovery fee is easy to price).
  2. Medical bill-review exceptions and pharmacy cost transparency for self-insured employers and TPAs.
  3. Return-to-work and case-management coordination networks.
- **Insider roles:** workers' comp claims adjusters and nurse case managers; employer risk managers; applicant and defense attorneys; TPA operations heads; premium auditors; NCCI and WCIRB classification specialists; state fund underwriters.
- **Check before building:** state-by-state fee schedules and anti-kickback rules; whether a "percent of savings" fee is allowed in each state.
- **Hidden giant:** yes.

---

## Pool 5. US title insurance premiums (agent-retained money)

- **Geography:** US.
- **Size:** $18.6B direct premium written in 2025 (+13.5%), per NAIC (ALTA says $18.5B, +13.8%). Settlement and escrow fees paid by buyers and borrowers sit on top and are not in this number.
- **Money flow:** buyers and refinancing borrowers pay one-time title premiums at closing; 62.7% of premium goes through non-affiliated agents, and agents keep or are paid 72.6% of operating expenses; underwriters keep the rest and pay claims.
- **The odd economics:** loss ratio 4.4% and expense ratio 98.5% (combined 102.8%, third straight year above 100%); paid losses and expenses averaged $51 per policy. The product is priced like distribution, not insurance. ALTA argues forgery and fraud drive about 40% of refinance claim costs.
- **Shock:** the FHFA/Fannie Mae title waiver pilot: Doma Title as first vendor from November 2024 and Westcor added in July 2025. Lenders can skip lender's title insurance on low-risk refinances and pay Fannie a $75 fee. In June 2026 FHFA director Bill Pulte said Fannie Mae was working to expand the pilot; analysts at KBW called the earnings impact small and the pilot is still refinance-only. NAIC adds that 2025 premium grew because refinancing revived after rates fell to about 6.5% in September 2025.
- **Sources:** NAIC report above; https://www.scotsmanguide.com/news/pulte-says-fannie-mae-title-waiver-pilot-program-poised-for-expansion/ ; https://www.scotsmanguide.com/news/title-insurance-industry-posts-bumper-year-in-2025/ ; https://www.housingwire.com/articles/westcor-joins-fannie-mae-title-insurance-waiver-pilot/
- **Incumbents:** First American 23.1%, Fidelity National 14.5%, Old Republic 14%, Chicago Title 13.1%, Stewart 10.9% (ALTA via Scotsman Guide; top five over 75%); thousands of agencies; county recorders and local title plants as data gatekeepers.
- **Why fragile:** nearly all revenue is a one-time toll on a transaction, priced per state; the underwriters earn more from investment and fees than from risk; a federal buyer (Fannie/Freddie) can waive the requirement for loans it owns. But statutes in many states, the purchase-loan lender requirement, and ALTA lobbying slow the bypass, and the waiver so far is small.
- **Startups (verified this session):** Qualia (closing platform; reported $50M round in August 2026, sources conflict on series and valuation); Doma (first waiver vendor); Westcor (a traditional underwriter, second waiver vendor); Spruce, States Title, JetClosing, Modus and Endpoint (named by Bain Capital Ventures; no 2026 rounds found); Blueprint Title (Series B, $16M, 2021); Vestris (YC, automates title processing).
- **Crowdedness:** contested. Closing software is near-won by Qualia; the risk-pricing and county-data layers are open.
- **Wedge hints:**
  1. Automated title-risk product for the GSE waiver: needs a licensed underwriter partner; the $75 flat fee and the 4.4% loss ratio tell you the margin is in not paying agents.
  2. Wire-fraud and forgery prevention at closing (identity, wire verification), paid from the same escrow budgets and tied to the fraud share of claims.
  3. National, standardized title-plant and recorder data (3,000+ counties) licensed to underwriters, lenders and the GSEs.
  4. Commercial real estate title review as commercial volumes rebound.
- **Insider roles:** title examiners and underwriting counsel; escrow officers; title agency owners; county recorders; mortgage closers and post-closers; GSE seller/servicer relationship managers.
- **Check before building:** state law on who may issue title insurance, state-promulgated rates (e.g., Texas), the GSEs' lender-requirement guide, and ALTA's expected response.
- **Hidden giant:** yes.

---

## Pool 6. US annuity and life distribution compensation (commissions and overrides)

- **Geography:** US.
- **Size:** about $15B a year, **derived**. LIMRA: 2025 annuity sales $461.3B (+6%), of which fixed indexed annuities (FIA) $128.2B, registered index-linked (RILA) $79.6B, and about $253.5B other (fixed-rate deferred, variable, income). Commission assumptions (not verified at source): FIA about 5% (Wink reported an average first-quarter indexed commission of 4.96% in 2017), RILA about 3.5%, other about 2.5%. That gives about $6.4B plus $2.8B plus $6.3B, roughly $15.5B. Life insurance commissions are extra and not counted. A 3-5% blended range gives $14-23B.
- **Money flow:** carriers (Athene, Corebridge, Allianz Life, Jackson, MassMutual, F&G) pay commissions to independent agents, banks and broker-dealers, plus overrides to independent marketing organizations (IMOs) and field marketing organizations (FMOs); consumers pay through the spread and surrender charges.
- **Shock:** record demand: Q2 2026 was a record quarter at $123.9B and the first half of 2026 reached $231.3B (LIMRA), with RILA +21%, FIA -5% as caps fell, and fixed-rate deferred -7%. Volume is moving between products, which reshuffles who gets paid what, and surrender periods on the 2022-2024 purchases are starting to end (hypothesis, not verified).
- **Sources:** https://www.limra.com/en/newsroom/news-releases/2026/limra-u.s.-retail-annuity-sales-top-$460-billion-in-2025-marking-fourth-year-of-record-sales/ ; https://www.limra.com/en/newsroom/news-releases/2026/limra-u.s.-annuity-sales-set-new-quarterly-record-totaling-$123.9-billion-in-the-second-quarter-of-2026/ ; Wink commission figure https://www.looktowink.com/2017/06/rise-shorter-term-surrender-fias-means-commission-declines/
- **Incumbents:** IMOs and FMOs (Integrity, AmeriLife, and others), independent broker-dealers (LPL, Osaic), banks, captive career agencies, carriers' wholesalers. Money is made on override percentages and carrier bonuses.
- **Why fragile:** each carrier has its own application, illustration, suitability form and contracting process; best-interest rules (NAIC model) add documentation burden; commission compression as products shift to lower-commission RILAs; overrides pay for manual back-office work. Their lock-in is real, though: agents follow their IMO.
- **Startups (verified this session):** Ethos (term life, IPO January 2026 raising about $200M); DPL Financial Partners ($23M Series C, Dec 2024, RIA insurance marketplace); Annuity.com ($15.7M seed, May 2024); Axonic Insurance ($210M, Oct 2025, annuity issuer); Micruity ($5.1M seed, annuities in 401(k)s, undated); Blueprint Income (MassMutual subsidiary, 1-4% one-time commission).
- **Crowdedness:** open to contested. Life term is crowded (Ethos, Ladder, Bestow, Policygenius from background knowledge); annuity back-office and compliance workflow is thin.
- **Wedge hints:**
  1. Best-interest documentation and suitability workflow for IMOs and carriers (the carrier or IMO signs; a compliance budget exists).
  2. In-force book management for agents: maturity and surrender-expiry alerts plus 1035-exchange paperwork, if the 2022-24 purchase wave is maturing (needs verification).
  3. Carrier contracting and licensing back-office as a shared network (agents wait weeks per carrier).
- **Insider roles:** IMO and FMO compliance officers; annuity wholesalers at carriers; independent agents with 500+ clients; IMO new-business desk staff; state insurance department market-conduct examiners; annuity actuaries.
- **Check before building:** the NAIC best-interest regulation by state; DOL fiduciary rule status (not verified); and whether anything counts as "compensation" under state producer licensing law.
- **Hidden giant:** yes.

---

## Pool 7. Wholesale, MGA and delegated-authority intermediation of E&S and specialty insurance

- **Geography:** US (Lloyd's and London market linked).
- **Size:** about $21B a year, **derived**. US surplus lines direct premium was $143.3B in 2025 (+10.4%; AM Best), 12.9% of all P&C premium and 27.5% of commercial lines; surplus lines carriers wrote over $51B of general liability, 39% of industry GL. Conning (via InsurTech NY, secondary) puts US MGA premium at about $128B in 2025. Taking about 15% as the intermediary take (assumption) on $143.3B gives about $21B. Cross-check: Ryan Specialty alone had 2025 revenue of $3,051M (+21.3%), of which about $1.4B (47%) is delegated authority; $3.05B on a $21B pool would imply about 14% share, which fits its stated #2 wholesale and #1 delegated-underwriting position.
- **Money flow:** retail agents hand risks to wholesalers (Amwins, CRC/Ryan, Brown & Brown, Gallagher) and MGAs/program administrators, who place with surplus lines carriers or fronting carriers that provide the balance sheet; intermediaries are paid commission and fees by carriers (out of the premium).
- **Shock:** the E&S boom is ending its double-digit run: premium growth slowed to 9.7% through Q3 2025 from 13.5%, competition in cyber, property and D&O, admitted carriers returning to lines they left, and AM Best cut its segment outlook to stable in November 2025. AM Best also flagged adverse development risk at fronting companies (accident years 2021-2024). About 65 carriers formed or refocused on E&S in the past decade now hold about 26% of premium (ALIRT). AXA XL is forming a wholesale-only surplus lines carrier for 2027.
- **Sources:** https://www.insurancebusinessmag.com/us/news/excess-surplus/surplus-lines-hit-143bn-record-as-placement-market-shifts-589475.aspx ; https://ir.ryanspecialty.com/ir-news-events/press-releases/detail/117/ryan-specialty-reports-fourth-quarter-2025-results ; https://www.theinsurer.com/e-and-s/news/am-best-es-premium-growth-slows-in-first-nine-months-of-2025-berkshire-retains-2026-01-28
- **Incumbents:** Ryan Specialty (revenue $3.05B), Amwins, Brown & Brown, Gallagher, CRC; MGAs by the thousand; capacity providers (Berkshire, Lloyd's, AIG, Markel, fronting carriers). Money is made as a percentage of premium.
- **Why fragile:** commissions are a percentage of premium, so falling property rates shrink revenue while submission handling stays manual (each carrier has a portal and ACORD forms); 65 new E&S carriers each need to audit, bordereau-check and police dozens of MGAs, which is a manual, regulator-watched process; capacity providers can pull support from an MGA overnight if reserves develop badly; surplus lines tax and stamping rules differ in every state.
- **Startups (verified this session):** Sixfold ($30M Series B, Jan 2026, underwriting AI); Kalepa ($14M Series A plus an SMB MGA buildout); Corgi (AI-native carrier, reported $2.6B valuation and more raises, serves startups); Federato (no 2026 funding found).
- **Crowdedness:** crowded on underwriting-workbench AI (and that is excluded by round 2 rules); open on the non-AI plumbing around delegated authority.
- **Wedge hints:**
  1. Bordereaux and delegated-authority compliance infrastructure sold to capacity providers and fronting carriers (they must audit MGAs; there is a budget line in underwriting management, and AM Best's fronting concern raises the stakes).
  2. Surplus lines tax, diligent-search and stamping compliance as a service for wholesalers and MGAs.
  3. MGA-capacity marketplace and orphan-program transfer when a capacity provider exits.
- **Insider roles:** MGA COOs and finance leads; bordereaux analysts; delegated-authority audit heads at carriers; wholesalers' submission-desk managers; program managers at fronting carriers; surplus lines compliance officers.
- **Check before building:** state surplus lines licensing and tax filing rules; whether sold software is considered an "insurance producer" activity.
- **Hidden giant:** yes.

---

## Pool 8. P&C insurers' claims-handling and litigation-defense expense (LAE)

- **Geography:** US.
- **Size:** about $86B a year, **derived from primary data**. Triple-I's table of NAIC data via S&P: 2025 net premiums earned $959.5B; adjusting and other expense (A&O) 5.3% (about $50.9B); defense and cost containment (DCC, essentially defense legal) 3.7% (about $35.5B). In 2024: A&O 5.5% and DCC 3.8% of $902.4B. NAIC separately reports $162.9B of unpaid LAE reserves.
- **Money flow:** insurers' claims departments pay independent adjusters, TPAs and in-house staff (A&O), and defense law firms, experts and court costs (DCC); estimating, repair-network and photo vendors are also paid per claim.
- **Shock:** 2025's Palisades and Eaton fires, the costliest wildfires in world history (NAIC), put about half of 2025 insured losses in one state; severe convective storms cost about $50B for the third year in a row. AM Best says social inflation, nuclear verdicts and third-party litigation financing keep pressure on liability, and CDI's August 2026 brief warns of a Super El Niño. Adjusting cost ratios have fallen from 7.4% (2021) to 5.3% (2025) in benign years, so surge capacity is thin.
- **Sources:** https://www.iii.org/table-archive/23867 ; NAIC report above ; CDI brief above.
- **Incumbents:** in-house claims organizations; Sedgwick, Crawford, Gallagher Bassett and other TPAs and independent adjusters; Verisk (Xactimate), CCC and Enlyte (Mitchell/Genex) for estimating; panel defense firms working under billing guidelines; e-billing platforms such as LexisNexis CounselLink and Mitratech (all named from background knowledge, not re-verified). Money is earned per file, per hour and per estimate.
- **Why fragile:** labor-intensive and priced by volume, so benign years cut staff and cat years overwhelm it; panel-counsel billing is audited by hand; and the payer (the insurer's claims VP) is cost-pressured while the beneficiary (loss ratio) is managed elsewhere. No single vendor owns litigation-spend intelligence.
- **Startups (verified this session, but funding is old):** Five Sigma ($12M Series A in 2021; $18M total), Snapsheet (over $100M raised; last round 2021), Tractable, CLARA Analytics, Hi Marley, Sprout.ai (named in a 2026 vendor guide; no 2023-2026 funding found for these in my searches).
- **Crowdedness:** contested. Claims "AI" is a round-1 cliché and a crowded vendor list; litigation-spend management for carriers is thinner.
- **Wedge hints:**
  1. Litigation-spend and panel-counsel performance intelligence (outcomes by firm and venue, not just bills) sold to claims VPs and litigation managers.
  2. Credentialed catastrophe surge-capacity marketplace for adjusters and repair contractors, activated by event, paid per claim.
  3. Subrogation and recovery services where insurers under-collect (needs sizing before building).
- **Insider roles:** claims VPs and litigation managers; cat adjusters; TPA operations heads; panel-counsel partners who bill hourly; Xactimate estimators and public adjusters; subrogation specialists; repair contractors.
- **Check before building:** state claims-handling regulation (unfair claims practices acts), adjuster licensing, privilege on litigation data.
- **Hidden giant:** yes.

---

## Pool 9. Cyber and liability premiums being carved out for AI risk

- **Geography:** global for cyber; US for the general liability base.
- **Size:** $16.3B global cyber premium in 2025 (Munich Re; $15.3B in 2024, about $29B forecast by 2027). The larger base affected is US general liability: if surplus lines carriers wrote $51B+ and that was 39% of GL, the industry GL base is about $131B (my derivation). The AI-specific spend today is a small fraction of both; the point is that coverage for AI risk is being removed from existing policies, so buyers must find it elsewhere.
- **Money flow:** corporates pay cyber, tech E&O, D&O and GL premiums; carriers pay claims and rely on Verisk/ISO form language.
- **Shock:** Verisk/ISO generative-AI exclusions (CG 40 47 broad, CG 40 48 advertising injury, CG 35 08 products) took effect January 2026; W.R. Berkley filed an "absolute" AI exclusion across D&O, E&O and fiduciary; AIG, Great American and Hamilton filed exclusions; Beazley and QBE use AI sublimits of about 10% of cyber limits instead. An unverified analysis counts 2,369 generative-AI exclusion records across 49 states by mid-2026.
- **Sources:** https://www.insurancebusinessmag.com/us/news/breaking-news/isos-generative-ai-exclusion-is-already-on-thousands-of-cgl-policies-589971.aspx ; https://www.jonesday.com/en/insights/2026/04/aeye-on-coverage-maximizing-insurance-for-ai-risks-amid-emerging-exclusions ; https://www.carriermanagement.com/news/2025/04/11/274106.htm
- **Incumbents:** Chubb, AXA XL, Beazley, AIG, Travelers, Munich Re (aiSure from background knowledge); cyber MGAs (Coalition, At-Bay, Cowbell, Resilience from background knowledge); Verisk as form-maker; brokers Marsh and Aon.
- **Why fragile:** the incumbents cannot price AI because there is no loss history and no testing standard, so they exclude; a blunt "arising out of" exclusion leaves enterprises with deployments that their customers' contracts require them to insure; broad forms are shared by licensing, so everyone excludes at once.
- **Startups (verified this session):** Armilla AI ($25M, Jan 2026; first Lloyd's coverholder dedicated to AI liability); Klaimee ($5.5M seed, July 2026, YC; insurance-backed performance warranties for AI agents, A-F certification); Mount (YC Spring 2026, AI-liability carrier; seed size unconfirmed); Corgi (AI-native carrier). Not verified this session: AIUC, Testudo, Vouch and the cyber MGAs named above.
- **Crowdedness:** crowded for cyber; open to contested for AI liability (several seed-stage entrants, no standard yet).
- **Wedge hints:**
  1. An AI-system testing and certification standard that underwriters accept for pricing, paid by AI vendors because their customers demand insurance (Klaimee and Armilla are already pointing here, so differentiate on testing depth and a shared standard).
  2. M&A and renewal coverage-gap diligence: acquirers inherit AI liabilities and discover narrowed coverage only at renewal.
  3. A pooled AI-incident loss-data consortium that gives actuaries something to price from.
- **Insider roles:** policyholder-side coverage counsel; cyber and tech E&O underwriters at Beazley, Chubb and AXA XL; Verisk/ISO form drafters; broker cyber and tech practice leaders; CISOs and general counsel negotiating AI vendor contracts; cyber reinsurance modelers.
- **Check before building:** whether a certification that influences coverage terms is treated as insurance rating or advisory; the actual filed endorsement text, not press paraphrase.
- **Hidden giant:** no.

---

## Pool 10. Captives, group captives and fronting (alternative risk transfer for corporates)

- **Geography:** global (Vermont, Delaware, Bermuda, Cayman, Guernsey, Montana and 30+ US states with captive laws).
- **Size:** $79.1B of gross written premium in 2025 in Marsh-managed captives alone (up from $77B; Marsh Benchmarking Report published June 1, 2026). Swiss Re Institute's older estimate for the entire world was $60-80B, so the true total is larger than Marsh's slice. The fee pool inside this (captive management, fronting, letters of credit, actuarial, reinsurance placement) is much smaller; at an assumed 3-5% it would be $2-4B (hypothesis, not sourced).
- **Money flow:** corporates and groups of mid-size firms pay premium into their own insurance subsidiary instead of to commercial carriers; fronting carriers issue the policies and charge fees and collateral; managers (Marsh, Aon, WTW, Gallagher's Artex) charge management fees; reinsurers take the excess.
- **Shock:** captives kept growing as commercial pricing fell. Marsh's captives wrote $79.1B in 2025 while its commercial price index fell 4%; Marsh formed 118 new captives in 2025 against 92 in 2024 and manages about 1,500; third-party-risk captives wrote $4.4B; protected-cell programs grew 47% by premium. Regulatory moves: the IRS final rule of 2025-01-14 designating certain 831(b) micro-captive transactions as listed transactions was upheld by one court in March 2026 (CIC Services) and narrowed in April 2026 (Drake Plastics) per conflicting secondary reports; Montana passed a new captive law in May 2025.
- **Sources:** https://www.captive.com/news/marsh-2026-benchmarking-report-highlights-continued-captive-growth ; https://www.captiveinternational.com/marsh-captive-formations-rise-to-118-in-2025 ; https://www.insurancebusinessmag.com/us/news/breaking-news/captive-insurance-premiums-hit-us79-billion-as-growth-defies-softening-market-577013.aspx ; micro-captive rulings https://www.currentfederaltaxdevelopments.com/blog/2026/3/7/micro-captive-scrutiny-formalized-a-technical-analysis-of-the-2026-cic-services-llc-v-irs-opinion
- **Incumbents:** Marsh Captive Solutions, Aon, WTW, Gallagher/Artex; fronting carriers; group-captive specialists (e.g., Captive Resources, from background knowledge).
- **Why fragile:** conflicts of interest: brokers that earn commissions on commercial placements run the captives that replace them, so they sell captives to large clients and under-serve mid-size ones; fronting capacity and letters of credit are costly and slow; domiciles are fragmented; a mid-size fleet or contractor group has no standard "captive in a box".
- **Startups:** none found with 2023-2026 venture funding for captive management, fronting or group captive formation. Searched: group captive, fronting fee, captive management, 831(b). One vendor guide says a 20-100 truck fleet needs about $50K-$250K of initial capital (marketing estimate).
- **Crowdedness:** open on the venture side; heavy capital and regulatory moat, so "open" does not mean easy.
- **Wedge hints:**
  1. Group-captive formation for 20-100 unit fleets, contractors and dealerships, with standardized fronting, reinsurance and actuarial work (links to Pool 3).
  2. Captive loss-data benchmarking and feasibility studies as a data asset.
  3. White-label cells (protected cell or rent-a-captive) for associations that want a risk pool without building one.
- **Insider roles:** captive managers; captive actuaries; Vermont, Delaware, Montana and Bermuda regulators; tax counsel from the 831(b) cases; fronting-carrier underwriters; group-captive agents; CFOs of mid-size trucking and construction firms.
- **Check before building:** state captive licensing, risk-distribution and tax rules (IRS safe harbor for insurance), fronting-carrier appetite, and whether reinsurance credit rules apply.
- **Hidden giant:** yes.

---

## Dropped or deferred pools (kept so nothing is lost)

- **NFIP and private flood:** NFIP premium is under $5B; fails the size test.
- **Parametric insurance:** no credible sized total found; folded into wedge hints for Pools 1, 2 and 10.
- **Pension risk transfer and life reinsurance (Bermuda/PE-backed):** large (US PRT is about $50B/yr from background knowledge), with litigation and regulatory shocks; not researched this session. Worth a dedicated search if the life slice needs more depth.
- **Personal auto claims and repair under tariffs:** large, but not researched this session.

## Items I could not verify (treat as low confidence)

- Global property-cat reinsurance premium total (Pool 2): not found; size is a derived lower bound.
- Annuity blended commission rates (Pool 6): only the 2017 Wink figure; total is an estimate.
- Wholesale/MGA intermediary take rate (Pool 7): assumed about 15%.
- Commercial auto $72.2B (2024): AM Best as summarized by search, not read at source.
- California FAIR Plan rate increase (30% vs 35%), policy count and exposure: secondary sources conflict.
- Micro-captive court outcomes (Pool 10): two secondary sources, not read as opinions.
- Startup names marked "from background knowledge" were not re-verified for 2023-2026 funding.

---

# Appendix: raw verified notes (as collected during research)

## Raw notes (verified in searches so far)

- Swiss Re sigma 2/2026: global premium growth 1.3% 2026, 1.6% 2027 (3.9% 2025); P&C 0.6% in 2026; Marsh commercial property pricing -9%, casualty +3%. Source: https://www.insurancebusinessmag.com/reinsurance/news/breaking-news/ai-boom-and-supply-shocks-reshape-insurance-outlook-swiss-re-sigma-581833.aspx
- Jan 1 2026 renewals: Howden risk-adjusted property cat -14.7% (biggest since 2014), retro -16.5%; Guy Carpenter global property cat ROL index -12%. Source: https://www.artemis.bm/news/property-cat-reinsurance-down-14-7-retrocession-down-16-5-at-jan-2026-renewals-howden-re
- NCCI State of the Line 2026: private WC carrier NWP ~$41.6B in 2025 (-0.2%), CY2025 combined ratio 91% (86% in 2024), accident-year 2025 102%. Source: https://riskandinsurance.com/workers-compensation-remains-profitable-as-premium-dips-and-severity-climbs/
- Commercial auto: DPW $72.2B in 2024 (+12.1%, AM Best); only commercial auto + GL still >100 combined (Triple-I/Milliman May 2026); S&P projects commercial auto CR 104.4% 2026 to 106.3% 2029. Amwins: commercial auto premiums +9.4% in 2025. Sources: https://www.insurancebusinessmag.com/us/news/property/pandc-industrys-best-half-in-years-hides-a-casualty-problem-589025.aspx
- California: forward-looking cat models + reinsurance cost pass-through (Sustainable Insurance Strategy); State Farm General sought 17% emergency hike post-Jan 2025 LA fires; S&P CreditWatch negative. Source: https://uphelp.org/state-farm-expects-to-shed-1m-homeowner-policies-in-california/
- NAIC 2025 full-year P&C + Title report (primary, pdftotext of https://content.naic.org/sites/default/files/2025-annual-property-and-casualty-and-title-insurance-industries-analysis-report.pdf): P&C DPW ~$1.1T 2025 (+4.6%); NPW $976.8B; combined ratio 92.9% (96.9% in 2024); net income $150.6B; policyholder surplus new high $1.27T; total loss+LAE reserves $1.03T incl. $162.9B unpaid LAE; no US hurricane landfall 2024 or 2025; Palisades+Eaton fires = costliest wildfires in world history, ~half of 2025 insured losses; severe convective storm ~ $50B insured losses 3rd year in a row; homeowners PNLR improved 12.5 pts to 53.5%; commercial auto liab PNLR 71%; WC PNLR 48%; professional reinsurers GPW $68.9B, net income $5.1B; commercial property rates falling from 3Q25 (-0.7% 4Q25); commercial auto premium up every quarter for 15 straight years (CIAB), +6.6% Q4 2025.
- NAIC Title: DPW $18.6B 2025 (+13.5%); non-affiliated agents 62.7% of DPW; operating expenses $19.0B of which 72.6% paid to/retained by agents, 16.1% personnel; net loss ratio 4.4%, expense ratio 98.5%, combined ratio 102.8% (3rd straight year >100%); paid losses+LAE only $51 per policy. ALTA (via Scotsman Guide) $18.5B, top 5 = >75% (First American 23.1%, FNF 14.5%, Old Republic 14%, Chicago Title 13.1%, Stewart 10.9%).
- Surplus lines (AM Best Market Segment Report 2025): $143.3B DPW 2025 (+10.4%), 12.9% of all P&C DPW (3.6% in 2000), 27.5% of commercial lines; GL surplus lines >$51B = 39% of industry GL; 65 carriers formed/refocused on E&S in past decade now hold ~26% of premium (ALIRT); AM Best cut segment outlook to stable Nov 2025 (soft rates, fronting carriers). Source: https://www.insurancebusinessmag.com/us/news/excess-surplus/surplus-lines-hit-143bn-record-as-placement-market-shifts-589475.aspx
- LIMRA: 2025 US annuity sales record $461.3B (+6%), FIA $128.2B, RILA $79.6B; H1 2026 $231.3B (record), Q2 2026 $123.9B record quarter; FIA H1 2026 $57.5B (-5%). Source: https://www.limra.com/en/newsroom/news-releases/2026/limra-u.s.-retail-annuity-sales-top-$460-billion-in-2025-marking-fourth-year-of-record-sales/
- Homeowners: S&P/NAIC 2024 direct homeowners premiums ~$173.1B (+13.4%), CR 99.3; State Farm ~19.4% share; CA FAIR Plan >668k policies Jan 2026, ~30% rate increase approved effective for renewals/new on/after Oct 15 2026 (coveragecat, secondary - verify).
- Cyber: Munich Re global cyber premium $15.3B 2024, ~$16.3B 2025, ~$29B by 2027 (Munich Re Apr 2025). AI exclusions: Verisk ISO CG 40 47 / CG 40 48 / CG 35 08 effective Jan 2026; W.R. Berkley "absolute" AI exclusion across D&O/E&O/fiduciary; AIG, Great American, Hamilton filed exclusions; Beazley, QBE sublimit AI ~10% of cyber limit. Sources: https://www.insurancebusinessmag.com/us/news/breaking-news/isos-generative-ai-exclusion-is-already-on-thousands-of-cgl-policies-589971.aspx ; https://www.jonesday.com/en/insights/2026/04/aeye-on-coverage-maximizing-insurance-for-ai-risks-amid-emerging-exclusions
- Captives (Marsh Benchmarking Report 2026): Marsh-managed captive GWP $79.1B in 2025 (77B in 2024), 118 new captives formed in 2025 (92 in 2024), ~1,500 captives managed; third-party-risk captives $4.4B premium; commercial pricing index -4% in 2025. Source: https://www.insurancebusinessmag.com/us/news/breaking-news/captive-insurance-premiums-hit-us79-billion-as-growth-defies-softening-market-577013.aspx
- Cat bonds: record $25.6B issued 2025 (Artemis), outstanding $61.3B end-2025, $63.4B mid-2026; ILS capital $144.5B at 6/30/2026; Swiss Re global nat cat protection gap $424B in 2025, insured nat cat losses ~$107B in 2025. Source: https://www.insurancebusinessmag.com/us/news/catastrophe/record-reinsurance-capital-fails-to-close-us-catastrophe-coverage-gaps-591241.aspx
- Workers comp: NASI (Aug 2026, 2023 data): total benefits paid $64.1B, ~150M covered jobs, $0.98 benefits per $100 covered payroll. Source: https://www.nasi.org/2026/08/11/workers-compensation-benefits-costs-and-coverage-2023-data/
- Title: Fannie Mae title waiver pilot (Doma Nov 2024; Westcor added Jul 2025; $75 fee to Fannie); ALTA argues fraud/forgery ~40% of refi title claim costs. Source: https://www.housingwire.com/articles/westcor-joins-fannie-mae-title-insurance-waiver-pilot/
- Triple-I table (NAIC data via S&P; https://www.iii.org/table-archive/23867): 2025 loss+LAE ratio 66.6%, adjusting & other (A&O) 5.3%, defense & cost containment (DCC) 3.7% of $959.5B net premiums earned => A&O ~$50.9B + DCC ~$35.5B = ~$86B LAE in 2025 (derived: ratio x NPE). 2024: A&O 5.5%, DCC 3.8% of $902.4B.
- Florida: Citizens 293,772 policies 5/31/2026 vs ~1.4M peak Sept 2023; June 1 2026 cat reinsurance risk-adjusted -15% to -20% (Guy Carpenter), Citizens net ROL 8.46% vs 11.95%; Florida domestic insurers combined ratio ~77% in 2025. Sources: https://www.citizensfla.com/-/20260531-policies-in-force ; https://www.insurancebusinessmag.com/reinsurance/news/breaking-news/florida-insurers-see-lower-reinsurance-pricing-at-june-renewals-577086.aspx
- Reinsurance capital: Gallagher Re dedicated capital $648B YE2025; Aon $790B at 3/31/2026; alternative capital ~$128-141B; Guy Carpenter global property cat ROL index -12% at 1/1/2026, -16% at mid-year, 23% below 2024 peak. Swiss Re Institute: captives ~$60-80B global premium.
- FMCSA: ELP out-of-service enforcement effective 2025-06-25 (26,000+ drivers placed OOS per DOT); non-domiciled CDL interim final rule 2025-09-29, final rule effective 2026-03-16, FMCSA estimates 194,000 non-domiciled CDL holders affected (Federal Register 2026-02-13). Nirvana Insurance $100M Series D at $1.5B (total >$260M); Cover Whale $40M (Jul 2025, >$1.3B GWP since 2020); LEEO telematics commercial auto (Mar 2026); HDVI $16M Series A; Humn.ai $13.7M.
- Ryan Specialty FY2025: revenue $3,051.1M (+21.3%), organic +10.1%, delegated authority revenue ~$1.4B (47%), #2 US wholesale broker. Conning (via InsurTech NY): US MGA premium ~$128B in 2025 (secondary).
- Insurtech: Corgi (AI-native carrier) ~$2.6B valuation, further round reported; Sixfold $30M Series B (Jan 2026); Kalepa $14M Series A + MGA; Armilla AI $25M (Jan 2026, Lloyd's coverholder for AI liability); Klaimee $5.5M seed (Jul 2026, YC); RockRose Risk $12.5M Series A (Aug 2026, wildfire); Ethos IPO Jan 2026 (~$200M raised, ticker LIFE); Axonic Insurance $210M (Oct 2025); DPL Financial Partners $23M Series C (Dec 2024). CB Insights: insurtech deal volume decade-low of 81 deals in Q1 2026.
- Micro-captives: IRS final rule 2025-01-14 listing 831(b) transactions; CIC Services (E.D. Tenn., 2026-03-05) upheld, Drake Plastics (S.D. Tex., Apr 2026) vacated listed-transaction designation but left transaction-of-interest (sources conflict; verify).
