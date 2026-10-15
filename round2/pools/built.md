# Round 2 pool map: real estate, construction and housing

Written 2026-10-14 (mid-October 2026). Slice: residential new-build and remodeling, multifamily, manufactured housing, the CRE debt maturity wall, property management, HOAs, permits and inspections, insurance-driven repairs, skilled-trade labor.

Raw research notes (checkpoints written while researching) are in `built.CHECKPOINT-notes.txt` in this same folder.

## How to read this file

- Each pool is a stream of money (who pays whom for what), not an industry.
- "Verified" means I read the primary document. "Secondary" means the number came from press or a trade blog that cites the primary, and I could not open the primary. Every secondary number that is load-bearing is flagged.
- The fee-pool and bottom-up sizes marked "my derivation" are arithmetic on sourced inputs. The assumptions are written next to them so they can be attacked.
- Funded-startup lists come from 2-3 searches per pool. A "none found" means I searched and found nothing, not that nothing exists.
- Blocked or unreadable primaries: mba.org (403, read the same release via newslink.mba.org), Fannie Mae LL-2026-03 PDF (403, confirmed through five secondary summaries that quote it), Novogradac PDF (403), FRED residential-property-manager series (404), Census/MHI/AGC PDFs (read by pdftotext, fine).

## Summary table

| # | Pool | Annual $ | Crowdedness | Hidden giant |
|---|------|----------|-------------|--------------|
| 1 | CRE refinancing, extension and transaction costs on the maturity wall | ~$9B fee pool (on $875B maturing) | contested | no |
| 2 | Insurer-paid home repair and restoration (homeowners claims) | ~$82B claims paid | contested | yes |
| 3 | HOA, condo and co-op assessments and capital repairs | $124.2B | contested | yes |
| 4 | Third-party property management fees and rent-pricing tools | $105B (all property managers, 2022) | crowded | no |
| 5 | Building-permit plan review and inspection | ~$10B (inspector wages alone) | contested | yes |
| 6 | Residential construction trade labor | ~$245B payroll, $12-37B intermediation | open | yes |
| 7 | Manufactured-home sales and chattel finance | ~$13.6B | open | yes |
| 8 | New-home builder incentives and rate buydowns | ~$24B | open | no |
| 9 | Title insurance premiums | $16.2B | crowded | no |
| 10 | Low-income housing tax credit equity and compliance | ~$25B | open | yes |

---

## Pool 1. US commercial real estate refinancing, extension and transaction costs

**Money flow.** Borrowers pay brokers/bankers, lenders (origination points), lawyers, appraisers, title and third-party report vendors to refinance or extend maturing loans. Lenders pay special servicers when loans default.

**Size.** $875B of commercial and multifamily mortgages mature in 2026, 17% of a $5.0T base (MBA, verified via newslink copy). The 2025 figure was $957B; 2027 is $652B. My derivation of the fee pool: about $700-800B of annual originations (MBA 2025 about $706B; First American quotes a forecast of about $806B for 2026) times 1.0-1.5% all-in friction (broker/banker 0.5-1.0%, lender fee 0.5-1.0%, legal, appraisal, reports, title) is $7-12B. Extension and modification fees on the roughly $200B being extended add $0.5-1B. Central estimate: **$9B**. Sanity check: Walker & Dunlop alone booked $1.2B of revenue on $54.8B of transaction volume in 2025 (company release), though that includes servicing income.
- MBA release: https://www.mba.org/news-and-research/newsroom/news/2026/02/09/17-percent-of-commercial-and-multifamily-mortgage-balances-to-mature-in-2026
- Lender mix maturing in 2026 (MBA): depositories $396B (21%), CMBS/CLO/ABS $200B (25%), credit companies/warehouse/other $163B (29%), life companies $76B (10%), GSE/FHA/Ginnie $39B (4%). By property: hotel 30%, industrial 23%, office 17%, healthcare 15%, multifamily 13%.

**Shock.** MBA's February 2026 survey plus the behavior change behind it. First American's analysis shows extensions falling from $384B (2024 into 2025) to $200B (2025 into 2026). MBA's chief economist: lenders "were no longer simply extending loan terms." Trepp, September 2026: CMBS delinquency 8.02% (highest since late 2020), office 12.16%, multifamily 8.04%; special servicing rate 10.86% overall and 16.75% for office in May 2026.

**Who signs.** The borrower's CFO or principal for the refinancing fee; the bank's chief credit officer or workout head for bank-side tools.

**Incumbents.** Capital-markets brokers and bankers (CBRE, JLL, Newmark, Cushman, Berkadia, Walker & Dunlop; Walker & Dunlop is the only one I verified in this pass), banks, CMBS servicers and special servicers, debt funds (CRE private credit took 23% of capital raised in Q1 2026 per PERE Credit, secondary).

**Fragility, honestly.** Low to moderate. The fee pool is mostly success-based commissions held by large brokers with relationships. The real softness is small-balance loans (roughly under $10M) at community banks and regional banks, which are manual and local. A software-only entrant faces the problem that the buyer of the loan, not the borrower, decides.

**Funded startups (2023-2026).** Atlas Invest (AI-driven CRE bridge lender, $25M led by BlackRock in January 2026, $38M total). Blooma (AI underwriting for lenders, $15M Series A in 2021, older). I did not find a 2025-26 round for Lev or a refinance-marketplace startup. **Crowdedness: contested**, because private credit capital is flooding in even if venture-funded software is thin.

**Wedge hints.** Sub-$10M loan workflow for community banks (re-underwriting collateral, extension and modification paperwork); borrower-side refinance readiness packages for sub-$10M owners; special-servicing workout administration for bank-held loans (not CMBS).

**Insider roles.** CRE debt brokers, bank workout officers, special servicer asset managers, receivers, appraisers who value distressed office.

**Hidden giant:** no.

---

## Pool 2. Insurer-paid home repair and restoration (homeowners insurance claims)

**Money flow.** Homeowners insurers pay claim proceeds, often by check payable jointly to the homeowner and the mortgage servicer, which flow to roofers, restoration contractors, general contractors and public adjusters. Carriers also pay adjusters, TPAs and estimating-software vendors.

**Size.** III Facts and Statistics (verified): 2025 net premiums earned $152.6B; incurred losses 53.6% of premiums (about $82B); loss plus loss-adjustment expense 61.1% (about $93B). Property damage is 97.3% of claims (ISO 2023): wind and hail 42.5%, water damage and freezing 22.6%, fire and lightning 21.6%. So roughly **$82B a year** of claim money is overwhelmingly repair and rebuild spend.
- https://www.iii.org/fact-statistic/facts-statistics-homeowners-and-renters-insurance
- LA fires, January 2025: California Department of Insurance says insurers have paid more than $22.4B on 42,121 claims (secondary report of the CDI figures).

**Shock.** The January 2025 Los Angeles wildfires (largest single payout event) plus a 2025-26 shift in how roofs are paid. Verisk's 2026 roof report (secondary): roof claims fell nearly 20% in 2025 but average residential roof replacement reached $17,631 (+33% against 2021-24) and repairs $4,699 (+25%). Carriers increasingly pay older roofs on actual-cash-value or payment-schedule terms. Texas TDI clarified on 2026-09-29 that insurers may consider roof condition. Roof coverage rules differ by state (Florida limits nonrenewal on roofs under 15 years).
- https://beinsure.com/news/la-wildfires-drive-22-4bn-insurance-losses-mount/
- https://verisk.com/company/newsroom/roofing-reality-check-risk-is-rising-even-in-quiet-storm-years/

**Who signs.** For contractor-side products: the restoration or roofing contractor owner. For servicer-side products: the head of loss-draft operations at a mortgage servicer. For carrier-side products: a claims operations VP.

**The non-obvious friction (wedge candidate).** Mortgagee loss drafts. Fannie and Freddie rules (per a Louisiana AG summary; verify against the Selling Guides): proceeds up to $20,000 go to the borrower alone, above $20,000 the servicer releases jointly with the contractor, and a licensed contractor is required at $40,000 or more; "monitored" drafts release as repairs are confirmed. Freddie Bulletin 2020-29 loosened inspection and joint-check rules. Roughly 60% of owner-occupied homes carry a mortgage (ACS, 2022: 60.7%, secondary), so a large share of claim money passes through a servicer's hands before reaching a contractor. I did not find data on average delay or on how many servicers use software for this.

**Incumbents.** Carriers; Verisk (Xactware/Xactimate) and Cotality for estimating; Sedgwick and Crawford as TPAs and adjusters; restoration franchisors; public adjusters. (Verisk, Cotality, Crawford named from background knowledge; not re-verified in this pass.) Fragile because the contractor base is fragmented, carrier payment rules are changing (ACV, schedules), and the loss-draft step is a manual back office.

**Funded startups (2023-2026).** Rebuild (restoration claims software, $13M Series A in September 2026 led by Asymmetric Capital Partners, $2.1M seed January 2025; company claims over 50% faster claim cycles and 12% higher reimbursements, unverified). NovaData Solutions (carrier-side restoration invoice review, Series A March 2024, Activate Venture Partners). Xcelerate (restoration documentation software). T&M Pro (acquired by Sedgwick). **Crowdedness: contested.**

**Wedge hints.** Contractor cash acceleration against approved claims; recoverable-depreciation holdback recovery on ACV roofs; servicer-side loss-draft disbursement and inspection workflow; contents inventory; post-catastrophe lien and payment tracking.

**Insider roles.** Restoration estimators and owners, public adjusters, servicer loss-draft managers, roofing contractor owners, carrier claims-operations leaders.

**Hidden giant:** yes.

---

## Pool 3. US community associations (HOA, condo, co-op): assessments, capital repairs and reserves

**Money flow.** Owners pay assessments to 373,000 associations, which pay management companies, insurers, utilities, landscapers and contractors, and fund reserves for roofs, elevators, structure and pools.

**Size (verified, FCAR 2025 Statistical Review PDF).** $124.2B of assessments collected in 2025, of which $31.1B went to reserve funds. 35.2% of US housing is in associations; Florida has 50,600 associations and 4.47M units, California 51,700 associations. 9,000-10,000 management companies, 60,000-65,000 community association managers, and 30-40% of associations are self-managed.
- https://foundation.caionline.org/wp-content/uploads/2026/03/2025StatisticalReviewFoundation.pdf

**Shock.** Fannie Mae Lender Letter LL-2026-03 (March 18, 2026, in coordination with FHFA): the minimum reserve allocation rises from 10% to 15% of annual budgeted assessment income for loan applications dated on or after January 4, 2027; Limited Review ended for established projects of more than 10 units (August 3, 2026 per several summaries). Buildings that miss the floor lose conventional financing eligibility (warrantability), which hits unit values. Florida added: reserves must be funded to 100% of structural-integrity reserve study recommendations from January 1, 2026 with no waiver, after HB 913 (2025) extended the study deadline to December 31, 2025. Miami Realtors found 62% of South Florida associations had missed the original December 31, 2024 deadline. I could not open the Fannie PDF (403); five secondary summaries agree on the 10%-to-15% change and the January 4, 2027 date.
- https://singlefamily.fanniemae.com/media/44986/display

**Who signs.** The board treasurer or president on a vote of owners for special assessments and loans (Florida law allows loans and lines of credit with majority owner approval), advised by the management company.

**Incumbents.** Management companies, reserve-study firms (Association Reserves, Reserve Advisors), portfolio banks that lend to associations, insurers. Fragile because 30-40% of associations are volunteer-run, boards face a hard compliance deadline with six-figure unit-level exposure (examples of $134,000 per unit at a North Miami complex are anecdotal), and conventional unit-owner financing is shrinking.

**Funded startups (2023-2026).** Vantaca (HOA management software, $300M+ growth round at $1.25B in October 2025, Cove Hill Partners; serves 500+ management companies and six million households). PayHOA ($27.5M Series A, May 2024). Assembly HOA ($1.8M), Bluejay HOA ($2.0M). Capital-project financing and procurement for associations: I found no venture-scale startup. **Crowdedness: contested** (software crowded and well funded; capital projects and association financing open).

**Wedge hints.** Special-assessment financing and loan servicing for Florida condo associations, with the association's lien right as the security (banks such as U.S. Century Bank already lend, so competition is bank-local); 15%-rule budget modeling plus lender-eligibility reporting; milestone-inspection repair project procurement; master-policy insurance premium financing.

**Insider roles.** Community association managers, reserve specialists, condo attorneys, association lending officers at community banks, engineers who perform milestone inspections, insurance brokers who place master policies.

**Hidden giant:** yes.

---

## Pool 4. US third-party property management fees and rent-setting tools

**Money flow.** Owners pay property managers (management fees, leasing and maintenance markups) and software vendors (property management systems and revenue-management tools).

**Size.** Census (via FRED): total revenue of real estate property managers (NAICS 53131, employer firms) was $105.2B in 2022, up from $94.3B in 2021. This includes non-residential managers; I did not find a Census residential-only series. A Business Brokerage Press figure of $134.2B for NAICS 531311 is unverified. 60,818 residential property manager establishments in 2023 (third-party summary of Census data).

**Shock.** The DOJ-RealPage proposed consent decree (November 2025): no real-time use of competitors' nonpublic data, any nonpublic data used for training at least one year old, no features limiting price decreases. Greystar, Cortland, LivCor and Willow Bridge followed with their own settlements; ten states are still litigating; Maryland HB 434 and Massachusetts H.5222 (2026) pending (the Massachusetts bill is broader and would bar the vendor model even with public data). A second shock: the January 20, 2026 executive order restricting federal financing support for large institutional single-family-home buyers, with a build-to-rent carve-out (Invitation Homes fell 7.5% on the announcement).
- https://www.multifamilydive.com/news/realpage-states-federal-rent-price-fixing-settlement/831422/

**Who signs.** The regional VP of operations or the head of revenue management at a multifamily operator; the asset manager at an owner.

**Incumbents.** RealPage, Yardi, AppFolio, Entrata, and the large operators' in-house teams (named from background knowledge, not re-verified). Fragile because the dominant revenue-management product is now legally constrained in its core mechanism.

**Funded startups (2023-2026).** EliseAI ($250M Series E August 2025 at about $2.2B; $350M at $4B in September 2026; reported over $200M ARR by June 2026; all secondary). Latchel ($16.7M Series A in 2022, Allegion Ventures in 2023, single-family maintenance). Belong ($50M total). **Crowdedness: crowded** for AI leasing and resident communication (the generic copilot trap); less so for pricing built on public data and for single-family maintenance coordination.

**Wedge hints.** Compliant, public-data-only market benchmarking and pricing for small and mid-size landlords; maintenance coordination and turn operations for single-family and build-to-rent operators; legal-defensible audit trails for pricing recommendations.

**Insider roles.** Revenue managers, regional property managers, antitrust counsel at operators, single-family maintenance operations heads.

**Hidden giant:** no.

---

## Pool 5. Building-permit plan review and inspection

**Money flow.** Applicants pay permit, plan-review and inspection fees to cities and counties, which employ plan examiners and inspectors. Where private-provider laws exist, applicants pay licensed third-party reviewers directly.

**Size (my derivation).** BLS counts about 133,640 construction and building inspectors (May 2023, mean wage $72,880) and about 147,600 jobs in 2024 (Occupational Outlook Handbook, median $72,120). That is **roughly $10-11B** a year in inspector wages alone, excluding plan examiners, permit technicians, software, overhead and private-provider fees. The work supports $882B of annual private residential construction spending (Census, August 2026 SAAR) and $2.2T total.
- Census: https://www.census.gov/construction/c30/pdf/release.pdf (read via PDF text)

**Shock.** State laws that move work to private providers when governments miss deadlines. Florida HB 803 (signed May 6, 2026; effective July 1, 2026): a 10-business-day clock when a private provider is used (5 days for single-trade single-family work); a missed deadline can mean deemed approval; commercial permit fees reduced 50% when private providers do all review and inspection (per summaries; verify the statute). Florida HB 683 (2025) added automated single-trade plan review. California AB 253 (signed October 10, 2025) lets builders hire a licensed third-party reviewer after 30 days. Texas HB 14 (2023) and SB 1450 (2025), Tennessee Public Chapter 771 (2024).
- https://flsenate.gov/Session/Bill/2026/803

**Who signs.** The builder or contractor's permit coordinator or owner (private-provider fee); the city building official or CIO (software, outsourced review).

**Incumbents.** Municipal building departments (understaffed), permitting-system vendors (Tyler Technologies, Accela, Clariti; vendor names other than Clariti from background knowledge), and code-consulting and third-party review firms. Fragile because statutory clocks now shift volume to private providers faster than public departments can hire.

**Funded startups (2023-2026).** PermitFlow ($54M Series B, December 2025, led by Accel; about $90M total; a single report puts valuation near $500M). CivCheck (AI plan review) was acquired by Clariti; Honolulu requires CivCheck for eligible residential projects from September 1, 2026, and Denver uses it. Seattle ran a CivCheck pilot (June 2026). **Crowdedness: contested**, and tilted toward software that helps applicants or governments. I found no venture-backed licensed private-provider firm that combines software and a state-registered inspection license.

**Wedge hints.** A licensed private provider (plan review plus inspection) in Florida, Texas, California and Tennessee that earns the review and inspection fee itself, with software doing first-pass checks; single-trade permits (solar, HVAC, roofing, electrical) where the shortest clocks apply; inspection scheduling for builders.

**Insider roles.** Building officials, plan examiners, ICC-certified private providers, expediters, builder permit coordinators.

**Hidden giant:** yes (inspection and plan-review labor is rarely examined by tech founders).

---

## Pool 6. Residential construction trade labor (payroll and subcontract labor)

**Money flow.** Builders and remodelers pay framers, drywallers, roofers, concrete and finish crews, directly or through subcontractors. Intermediaries (staffing firms, payroll providers, PEOs, workers' compensation insurers, recruiters, training programs) take a share.

**Size (my derivation from BLS).** September 2026: construction employment 8.364M (seasonally adjusted); residential building construction 922.7k plus residential specialty trade contractors 2,340.3k is 3.26M jobs. Average weekly earnings in construction are $1,634.25 (about $85k a year; all-construction payroll about $710B). At roughly $75k for residential trades, **residential trade payroll is about $245B**; the intermediation layer at 5-15% is **$12-37B**. NAHB's analysis of ACS data put immigrants at 26.3% of the construction workforce in 2024 (secondary); Pew via secondary coverage estimates about 1.5M undocumented construction workers; foreign-born shares reach 56.9% of drywall installers, 50.2% of painters and 50% of roofers (secondary).
- BLS: https://www.bls.gov/news.release/empsit.t17.htm and https://www.bls.gov/news.release/empsit.t19.htm

**Shock (primary, read in full).** AGC and NCCER 2026 Workforce Survey, released September 3, 2026 (1,830 respondents): 87% have hourly craft openings, 88% of those say the openings are as hard or harder to fill than a year ago (50% harder); about 29% report at least one direct or indirect effect of immigration enforcement in six months (42% in the South); 12% saw workers leave because of actual or rumored enforcement; 16% say subcontractors lost workers; 42% say labor shortages delayed projects; more than 80% raised base pay; 36% started or increased training spending; 49% expanded online recruiting. Data centers are pulling skilled labor (58% of firms doing that work say it raised competition for skilled workers).
- https://www.agc.org/sites/default/files/users/user21902/2026%20Workforce%20Survey%20National%20Release%20(5).pdf

**Who signs.** The residential contractor owner or builder's field-operations VP; for training, the contractor owner or an association training fund.

**Incumbents.** General staffing firms, union hiring halls and apprenticeship trusts, local labor brokers, informal 1099 crews, PEOs. Fragile because informal labor is exposed to I-9 and E-Verify risk and to enforcement, which is exactly the shock.

**Funded startups (2023-2026).** Buildforce ($10M Series A, July 28, 2026, led by Saepio Capital, commercial electrician staffing; claims 2M+ hours logged). I found none for residential framing, drywall, roofing or concrete crews. Labor marketplaces have a poor history (worker misclassification, thin margins), so "open" reflects a thin search and a hard model. **Crowdedness: open** (with that caveat).

**Legal premise to check.** Worker classification (employee versus 1099), E-Verify and I-9 duties for a platform that places crews, and joint-employer liability.

**Wedge hints.** Verified-work-authorization crew staffing for builders; training-to-placement pipelines paid by contractors (36% increasing training spend); payroll, certified-payroll and workers' compensation bundles for small subcontractors.

**Insider roles.** Residential framing and drywall subcontractors, builder field operations VPs, union apprenticeship coordinators, immigration and employment counsel, workers' compensation brokers.

**Hidden giant:** yes.

---

## Pool 7. Manufactured-home sales and chattel finance

**Money flow.** Buyers pay manufacturers, retail dealers and installers; most finance with chattel (personal-property) loans from specialized lenders; many sit on leased lots in communities that charge lot rent.

**Size (my derivation).** MHI April 2026 report (read): seasonally adjusted annual shipments 103,703; year to date through April 33,054 (-7.3%); 57.7% multi-section. Census prices (secondary): new single-section about $88-91k, double-section about $161-164k, excluding land, delivery and setup ($5-25k). Blended average about $131k times about 104k homes is **about $13.6B** a year. FHFA says chattel loans are 70-80% of new manufactured homes, so about $9-11B of chattel originations. Lot rent is a separate and larger stream: MHI counts more than 43,000 communities with about 4.3M homesites (not included in the headline).
- MHI report: https://www.manufacturedhousing.org/wp-content/uploads/2026/06/MHI-Economic-Report-April-2026.pdf

**Shock.** June 2026 rule proposals. FHFA proposed replacing the Duty to Serve rule with an outcome framework that emphasizes chattel loans (91 FR 37848, published June 24, 2026; final rule expected effective by January 1, 2028). HUD proposed on June 12, 2026 to require the permanent chassis only for sections forming the lowest floor, enabling multistory homes (HUD estimates $4,800-6,700 saved per multistory unit; comment period closed August 11, 2026; not final). Opponents (ICBA) object to GSE expansion while in conservatorship; supporters (MHI) call GSE chattel purchases the most important step.
- https://infobytes.orrick.com/2026-06-18/hud-proposes-changes-to-manufactured-housing-definition-to-promote-multistory-construction/
- https://www.housingwire.com/articles/duty-to-serve-chattel-loans-fhfa/

**Who signs.** The home buyer (via the dealer), the dealer principal for lender partnerships, and a chattel lender's CEO for servicing and securitization.

**Incumbents.** Clayton (Berkshire; 21st Mortgage and Vanderbilt), Cavco, Skyline Champion (named from background knowledge, not re-verified). Chattel lending is thin because the GSEs do not buy these loans, so lenders charge high rates. Community ownership has consolidated (private equity heavy in Florida, Michigan, Texas), generating lot-rent fights.

**Funded startups (2023-2026).** Zippy (digital chattel lender, $26M total, last reported July 2023). CoverTree (manufactured-home insurance, $13M Series A, May 2024). Tammac Holdings ($60M debt and equity from LL Funds, undated). Apollo's manufactured-housing fund (first close $850M, late 2025; institutional, not a startup). Resident-owned community financing: ROC USA (nonprofit; 331 communities, about 23,000 homes). **Crowdedness: open.**

**Wedge hints.** A chattel origination and servicing platform built to GSE standards so loans become securitizable; conversion finance for resident-owned communities; land-lease home insurance and escrow; dealer-side finance workflow.

**Insider roles.** Manufactured-home retail dealership managers, chattel underwriters and servicers, community operators, state manufactured housing association executives, plant managers, installers.

**Hidden giant:** yes.

---

## Pool 8. New-home builder sales incentives and mortgage rate buydowns

**Money flow.** Builders give buyers price cuts, closing-cost credits and mortgage rate buydowns. Buydown dollars are paid to lenders, often the builder's own captive mortgage company.

**Size (my derivation).** Census: 679,000 new homes sold in 2025; December 2025 median price $414,400; Lennar's average sales price $391,000 in fiscal 2025. Roughly $270B of annual new-home sales. Incentives: Lennar said it held "approximately 14% in incentives and price adjustments" in Q4 2025 (company release, read in full); PulteGroup reported incentives at 10.9% of gross sales price in Q1 2026 against 8% a year earlier (secondary). NAHB's September 2026 survey: two-thirds of builders use incentives and 38% cut prices, by an average of 6%. At a blended 8-10% across the industry, the pool is **about $24B** (range $16-38B); only the buydown and closing-credit part reaches third parties, and I did not find its split.
- https://newsroom.lennar.com/2025-12-16-Lennar-Reports-Fourth-Quarter-and-Fiscal-2025-Results

**Shock.** Incentive intensity rose sharply in late 2025 and 2026 as new-home inventory built, and regulators have noticed. A February 2026 law-firm alert (Benesch) warns that low promotional rates can mask higher prices and that federal and state regulators are watching. An analysis cited by CUNY coverage found about 20.8% of FHA loans originated by D.R. Horton's lender in 2022-24 underwater, and about 30.7% for Lennar (secondary; verify before relying).

**Who signs.** Builder CFOs and heads of mortgage joint ventures.

**Incumbents.** Builder captive lenders: Lennar Financial Services alone earned $612.5M of operating profit in fiscal 2025 (company release). Many incentive packages require the buyer to use the captive lender (Texas buydown guide, secondary), which also keeps spread inside the builder. Fragile because incentives are eating gross margin (Lennar guided Q1 2026 gross margin to 15-16% from 18.7% a year earlier) and regulatory scrutiny of captive steering is rising.

**Funded startups (2023-2026).** None found for builder-side buydown pricing, escrow, insurance or hedging. Adjacent and older: Built Technologies (construction lending software), UpEquity (2021 cash-offer rounds). **Crowdedness: open.**

**Legal premise to check.** Seller-concession caps and appraisal treatment (FHA about 6%, VA about 4%, conventional 3-9% depending on loan-to-value; these limits are from background knowledge and must be verified), RESPA steering rules, and state regulators' view of captive requirements.

**Wedge hints.** Independent buydown pricing and escrow administration for mid-size builders without captives; forward-commitment capital for temporary buydowns; compliance and audit tooling for buydown disclosure.

**Insider roles.** Builder CFOs, captive mortgage heads, builder closing managers, FHA underwriters, settlement agents.

**Hidden giant:** no.

---

## Pool 9. US title insurance

**Money flow.** Buyers and lenders pay title premiums through title agents, who keep most of the premium and remit a share to underwriters.

**Size (verified through ALTA release coverage).** 2024 title insurance premiums were **$16.2B**, up 7% from 2023, with claims paid only about $676M (about 4% of premiums, which is the structural reason alternatives attract attention). Shares: First American 22.2%, Fidelity National 14.3%, Old Republic 14.3%, Chicago Title (Fidelity-owned) 13.4%, Stewart 9.2%.
- https://www.alta.org/news-and-publications/press-release/ALTA-Reports-Title-Insurance-Premium-Volume-Increased-7-in-2024

**Shock.** The FHFA and Fannie Mae title waiver pilot: certain refinances (loan-to-value under 80%) can be sold without a lender's title policy or attorney opinion letter. Expanded in July 2025 with a second vendor (Westcor), FHFA Director Pulte says more expansion is coming; the pilot is scheduled to end November 30, 2027. ALTA opposes it, citing fraud (about 40% of refinance title claim costs); H.R. 5837 would require title insurance on all GSE loans. I found no 2026 rule or rate data.
- https://www.inman.com/2025/07/11/trump-administration-expands-fannie-mae-title-waiver-program/

**Who signs.** The lender's secondary-marketing or quality-control head for any waiver-based product; the title agent for closing software.

**Incumbents.** The four underwriter groups hold about 70%, own agencies and technology (Endpoint is a First American subsidiary with $220M raised from its parent). Fragile on the lender policy in refinances, not on owner's policies in purchases.

**Funded startups (2023-2026).** Qualia (closing platform; $1B-plus valuation in 2020; an unverified aggregator lists a $50M round in September 2026), Westcor (a vendor in the waiver pilot), Endpoint (parent-funded). I could not verify 2025-26 rounds for Qualia or Pavaso. **Crowdedness: crowded.**

**Wedge hints.** Property-data risk scoring that qualifies refinances for waiver; lender-side quality-control tooling. Honest read: a regulatory bet on a pilot that could be reversed by Congress, so I rate the legal premise as weak.

**Insider roles.** Title agents and escrow officers, underwriting counsel, lender secondary-marketing and QC heads, title claims counsel.

**Hidden giant:** no.

---

## Pool 10. Low-income housing tax credit (LIHTC) equity, development and compliance

**Money flow.** Investors (mostly banks, about 80% of LIHTC equity in 2024) buy federal tax credits from developers, which funds construction and rehab of affordable rental housing; property managers then handle annual income certifications and compliance for 15 years or more.

**Size.** Novogradac estimates the LIHTC equity market at about **$25B in 2025** (cited in a June 2026 comment letter; secondary, the PDF returned 403). Berkadia closed a $100M multi-investor LIHTC fund in September 2025.

**Shock.** The One Big Beautiful Bill Act (signed July 2025) made two permanent changes starting in 2026: the private-activity-bond test for 4% deals falls from 50% to 25% of land and building costs (for properties with bonds issued after December 31, 2025), and a permanent 12% increase in 9% allocations. Novogradac estimates these finance about 1.22 million additional affordable rentals over 2026-2035 (about $15.7B of added housing credit investment). Open risks: equity pricing may fall as credit volume rises, a June 2026 bank regulatory capital proposal concerns LIHTC investors (details unverified), and HUD rental assistance budgets are uncertain.
- https://www.williamsmullen.com/insights/news/legal-news/low-income-housing-tax-credit-reform-one-big-beautiful-bill-acts-effect

**Who signs.** State housing finance agency allocators (credit awards), developers (software, structuring), bank CRA or tax-credit investment officers (equity), and owners (compliance outsourcing).

**Incumbents.** Syndicators and investors (Boston Capital, Raymond James, Enterprise; named from background knowledge), banks, state agencies, compliance monitoring firms and CPA firms (Novogradac). Fragile because the bond-test change creates structuring work that incumbents handle by hand, and compliance is labor-intensive.

**Funded startups (2023-2026).** Pronto Housing (affordable housing compliance software, about $9M total, last round February 2024). I found no LIHTC marketplace or structuring startup. **Crowdedness: open.**

**Wedge hints.** Income-certification and compliance automation for affordable properties; 25%-test structuring and pricing analytics for developers; a credit and equity pricing data product; a transfer marketplace. Revenue path: 1% of a $25B equity market is $250M, but that needs a share of a market dominated by bank relationships, so I treat $100M as a stretch.

**Insider roles.** Syndicator asset managers, state allocators, tax-credit attorneys and CPAs, affordable-housing compliance specialists, bank CRA officers.

**Hidden giant:** yes.

---

## Cross-pool read (my judgment)

- Best combination of size, fresh shock and thin venture coverage: pools 3 (capital-project finance for associations, with the Fannie 15% rule and Florida's no-waiver reserve funding), 7 (chattel finance ahead of GSE entry), 5 (licensed private providers), and 10 (LIHTC compliance and structuring).
- Pool 2 is large and real but its tools are drifting toward carrier-side software; the wedge is on the contractor and servicer side.
- Pools 4 and 9 are crowded or regulation-dependent and are mostly useful as context.
- Pool 6's size is huge but the model (labor platform) has a bad track record; the legal premise is the whole game.
- Pool 1's fee pool is real but mostly captured by large brokers; the only unlocked segment is small-balance loans.
