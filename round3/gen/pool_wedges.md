# Round 3 / lens: wedges into the 143 big money pools (searched 2026-10-25)

Method: read all 143 pools in `round2/pools_all.json` (name, shock, incumbents, funded startups, wedge hints), kept only pools where an 18-year-old can enter through a consumer, prosumer, small-business or self-serve door (about 30 of 143), ran about 35 searches and fetches to find who already does it, and killed anything where a live competitor, a free substitute or a license wall already closed the door. Most pool wedges in the file are enterprise or government sales; those were skipped on purpose.

## Ranking logic

Ranked on: time to first paid customer (60-90 days), who signs (a person who would buy from an 18-year-old), license wall, use of his real edges, and whether a credible path to $10M+ a year exists. The top two are consumer products with a dated trigger and a measurable payoff. Ideas 3-5 are bigger swings with a real pool behind them and a thinner Asher edge. Ideas 7-8 are the weakest fits and are included because the pool is large and the gap looks open.

## Killed or demoted during research (so later rounds do not redo them)

- **Condo buyer due-diligence reports (pool 12):** GoverningDocs (AI on HOA/condo packages, 1,900+ packages) and CleanCondo (Florida launch July 2026, 24-hour building reports) already sell this. I moved to the board side instead (idea 4).
- **HVAC quote checker (pool 22):** HVAC.com QuoteScore and CheckMyBid already take uploaded quotes; Jetson ($50M) is attacking installs.
- **Camera/parking ticket fighter (pool 73):** Fixed's own win rate was 20-30%, DoNotPay's unauthorized-practice-of-law suits and FTC action make this a legal minefield, and the municipal rails are slow.
- **Packaging EPR software for small brands (pool 119):** Packlog already sells US-state EPR reporting on Shopify at $9.99 a month.
- **GAP/add-on refund recovery for consumers (pool 21):** the money is owed by the lender or administrator and can be requested directly; regulators (Colorado AG) force lenders to pay automatically. No paying demand for a middleman.
- **Grad PLUS funding-gap lead-gen (pool 136):** the court stay on 24 June 2026 and ED's interim list (29 programs incl. nursing, PA, PT, OT) shrank the gap. Why-now partly used up.
- **Workers' comp premium audit on contingency (pool 89):** small incumbents (Premium Paybacks) plus free state ombudsmen; insurance-consultant licensing varies by state.
- **Waste/uniform audit consultancies as a service business:** Cost Analysts, Cass and Uniform Bright exist and a consultancy tops out small (a marketplace version survives as idea 6).
- **Small-carrier detention recovery (pool 99):** RevRecoup (15% of recovered, self-serve) and Bubba.ai already serve it; his freight-audit machinery is better spent elsewhere.
- **Main Street deal screener (pool 9):** Baton ($10M A), Iconic, Rowan, Boom and DealFlowAgent are funded; the pool file itself calls it crowded.
- **Medicaid/SNAP work-requirement member retention (pools 58/105/124):** real shock, but the payer is a managed-care plan or a state agency, which is the cold enterprise sale he cannot make.
- **Workforce Pell program directory:** schools cannot pay per-enrollment fees under the Title IV incentive-compensation ban (my reading; verify), so the lead-gen model fails.
- **VA Aid and Attendance claim help (pool 25):** only accredited agents or attorneys can charge for VA claims (38 U.S.C. 5904, from memory; verify).

---

## 1. Lowball: a total-loss audit that checks the insurer's valuation and builds the counter-offer

**Pool:** US personal-auto physical-damage claims, $92B a year (pool 20), with the lender and GAP layer from the auto-loan pool (21).

**One-liner:** Upload your insurer's total-loss valuation PDF; in minutes get a list of what they got wrong, a counter-offer packet with live comparable listings, and (if needed) a flat-fee licensed appraiser for the appraisal clause.

**Customer and payer:** the car owner (often 18-40, in a car 7+ years old) pays a flat $49 for the audit and packet, or $149 with the appraiser path. Later payers with a budget line: credit unions (member-benefit budget), GAP administrators (a GAP claim is loan balance minus the insurer's actual cash value, so every recovered dollar cuts their payout; this is my inference and must be tested with one call), and dealers (a higher settlement makes the replacement-car sale easier; AutoClaimHelpers sells to dealers on that logic).

**Problem:** CCC's 2026 Crash Course reports a record 23.1% total-loss frequency for 2025 and says 72% of total-loss valuations are on vehicles 7+ years old. Owners cannot replace the car with the check. Valuations come from CCC, Mitchell or Solera; condition adjustments, comparable choice, trim/option errors and omitted state sales tax, title and registration fees are the usual levers. Public reviews of one competitor show settlements moving from about $35k to about $43k and by $7k. Most owners do not know the policy's appraisal clause exists.

**Solution:** parse the valuation report (OCR plus rules from the freight-audit playbook), flag errors, pull current comparable listings, compute the state-specific tax/fee gap, write the counter-offer and a timeline. Escalation: invoke the appraisal clause using a flat-fee licensed appraiser (an appraiser paid on contingency would not be "impartial", so keep that fee flat). Do not negotiate for the owner in states where the public-adjuster statute covers auto; several states exclude auto (New York's insurance department said so in 2004; Oregon's draft rule excludes it) but check state by state before ever charging a percentage.

**Why now:** record total-loss rate, aging fleet, tariff-driven repair costs, and a competitor's October 2026 reviews prove live demand.

**Founder edge:** his freight-invoice audit engine is the same pattern (document vs rules vs market); multi-agent pipelines; blind-test culture (publish a "carrier lowball index"); Gen Z distribution through Reddit, TikTok and classmates' older cars; no license needed for a DIY software tool.

**First 10 customers:** answer 30 "insurer lowballed my total loss" threads on r/Insurance, r/personalfinance and local car groups with a free valuation autopsy; show the dollar gap; convert 10 at $49 in 2-3 weeks. Then tow yards and body shops (they carry storage fees and lose repair jobs on totals) and one credit union through the family or mentor network.

**Cost to first revenue:** about $400 (domain, OCR/LLM calls, one comps data source).

**Path to big:** $10M a year is roughly 127k reports at $79. CCC publishes rates, not counts, so confirm annual total-loss volume first; if it is in the low millions this is a low-single-digit share. The larger route is B2B2C (credit unions, GAP administrators, dealers pay per audited claim) plus a carrier-by-carrier error dataset that plaintiff firms and regulators buy, plus a "car owner advocate" membership (repair-estimate check, diminished-value demand, dealer buyer's-order check).

**Who does it today (searched):** Appraisal Engine (flat fee, about $150 appraisal, $100 negotiation, human appraisers), InsurifyAI (flat fee, ASCAA appraisers, two Trustpilot reviews), AutoClaimHelpers.com (dealer program, percentage of increase), ZB Negotiations (NY contingency), Ryckman Appraisals ($499), diminished-value report mills, attorneys. Tractable, VaraFix and Revv are insurer/shop-side. No funded AI-native consumer player found.

**Main risks:** state public-adjuster rules; competitors copy a flat-fee model; insurers revise offers once a packet arrives (good for the customer, hard to attribute).

---

## 2. Phantom Income: the tax pack for sports bettors, then every Gen Z side-income stream

**Pool:** US individuals' tax-preparation fees, $14.5B-$67B depending on the pool (pools 28, 46, 130). Direct File was not offered for the 2026 season.

**One-liner:** Import every sportsbook, DFS and prediction-market statement, get the real taxable number under the new 90% loss cap, the itemize-or-not answer, state-by-state rules, the Schedule A/Schedule 1 lines and a contemporaneous log the IRS accepts.

**Customer and payer:** adults 21+ who bet (18+ for prediction markets where allowed) pay $29 (log, math, exports), $79 (state rules, estimated-tax and year-end plan) or $149 (enrolled-agent review). E-file partner or affiliate revenue on top. No marketing of betting itself.

**Problem:** From tax year 2026 only 90% of gambling losses can offset winnings; a break-even year leaves 10% of volume taxable (Withum, Tax Foundation, Thompson Coburn). Losses are deductible only if you itemize, and some states (for example Illinois and Kansas per Withum-type summaries) tax gross winnings. Forum posts say books split bet and wager lines and sometimes export only "all time" or "last 365 days". Pikkit and BetStamp are tracking tools; I could not verify a return-ready tax export from either.

**Why now:** 2026 is the first year of the cap, filing season runs January-April 2027, and a year-end planning window (estimated payment, itemizing math) opens in December. The FAIR BET Act would repeal the cap; the tool still earns from logging, state rules and itemizing math if it passes.

**Founder edge:** his strategy-backtesting lab is the same data shape (bet histories, P&L); friends in sports betting for the first interviews; ships fast. Gen Z is overrepresented in prediction markets, DFS and creator/reseller income, which are the next streams.

**First 10 customers:** post a free "phantom income calculator" in r/sportsbook, betting Discords and X; sell the $29 pack to the first 10 of those users in December; use a 21+ gate.

**Cost to first revenue:** about $1,500 (LLM and hosting, legal disclaimer review, one enrolled-agent partner pilot).

**Path to big:** niche-first, then "TurboTax for the attention economy": bettors, prediction markets (tax treatment still unsettled, a content moat), crypto, creators, resellers, 1099-K filers. $10M is about 200k returns at $50. Embedded tax centers inside bet-tracking apps and fintechs (Column Tax and April both sell white-label e-file, and Column's own page says integration can take about a week) are the distribution multiplier.

**Who does it today (searched):** TurboTax, H&R Block, FreeTaxUSA and NerdWallet/TaxSlayer explainers; online calculators (ustax.tools); Pikkit/BetStamp trackers; CPAs for professional gamblers. Column Tax is a white-label e-file API but its page says "Book a demo", not self-serve, so access is a risk (fallback: sell the pack as a standalone export plus affiliate links).

**Main risks:** legal line between software and giving personal tax advice (stay a tool, route advice to an enrolled agent); rule repeal; Intuit adds a gambling wizard; small ticket price.

---

## 3. Hard-Hat Stays: Furnished Finder for traveling trades at data-center build towns

**Pool:** craft labor on US data-center construction, $17.7B (pool 141), plus residential and industrial trade labor (pool 15).

**One-liner:** A 30-180 day housing marketplace and "crew desk" for traveling electricians and trades around the 40 or so big data-center build towns, priced to a $100-$160-a-day per diem.

**Customer and payer:** hosts (homeowners, RV pad owners, small landlords) pay a flat listing fee ($99 launch, $199 later; Furnished Finder charges $199 per listing a year); contractors and foremen pay a crew-desk fee ($50-$150 per bed-month, my guess, to test) to have six or twelve beds found and invoiced as a group.

**Problem:** In Prineville, Oregon, a city survey found about 17% of 230 hotel rooms booked long-term by workers on two builds and a 0% rental vacancy rate; Rosendin had 300-400 electricians there. Travel electrician postings advertise per diem ($160 a day in one) or company-paid Airbnb. A corporate-travel analyst notes that group bookings with changing dates break standard booking tools. Purpose-built camps are being financed (Target Hospitality's $550M+ contract for 4,000 workers on one Texas site; Civeo on a Meta project), but they are slow and only for the biggest jobs.

**Why now:** AI capex is pulling electricians to rural towns; electricians earn up to double wages on large projects; Google, Meta and BlackRock are pledging tens to hundreds of millions in trades training, so the labor wave is funded through 2028+.

**Founder edge:** AI-speed programmatic SEO ("electrician housing in Abilene TX" for each town), SMS booking, listing-quality scoring, no license. Weak spot: no field-ops background.

**First 10 customers:** pick one build town; list 10 hosts from local Facebook groups and Nextdoor (free first year), then answer "need housing near the site" posts from traveling electricians in their Facebook groups and r/electricians; collect the first 10 listing fees and first bookings in 60-90 days.

**Cost to first revenue:** about $1,500 (site, domain, small ad tests, host-verification flow).

**Path to big:** Furnished Finder shows the ceiling for flat-fee, no-commission housing marketplaces: it reports 300k+ listings and 240k+ landlords, took Summit Partners money in 2023 and charges $199 a listing, so full-price math is up to about $48M a year (my arithmetic; revenue is undisclosed). The trades vertical extends to oil and gas, LNG, chip fabs, nuclear restarts and utility storm crews, with contractor billing and per-diem tooling layered on.

**Who does it today (searched):** Furnished Finder (travel nurses, "not just for nurses", no trades product), Airbnb/VRBO, RV parks, corporate-housing firms, camp builders (Target Hospitality, Civeo). I found no marketplace built for trade crews.

**Main risks:** Furnished Finder adds a trades filter; remote supply cold start; a data-center slowdown; local occupancy rules; trust and safety.

---

## 4. Reserve Ready: the Fannie Mae 15% reserve-rule autopilot for condo boards

**Pool:** US HOA, condo and co-op assessments and capital repairs, $124.2B (pool 12), with community-association reserve funding $26.6B (pool 68).

**One-liner:** Upload your 2027 budget and reserve study; get your Fannie Mae reserve ratio, the dues change needed to hit 15%, an owner notice letter, a lender-questionnaire pack, and loan or special-assessment options.

**Customer and payer:** the board treasurer or president of a self-managed or small-management-company condo (volunteers who feel personally liable) pays $199-$499 a year; small management companies pay $15-$30 per association a month. Later: lenders to associations pay per funded loan.

**Problem:** Fannie Mae Lender Letter LL-2026-03 (18 March 2026) raises the minimum reserve allocation from 10% to 15% of annual budgeted assessment income for loan applications dated on or after 4 January 2027; Limited Review for established projects over 10 units ended 3 August 2026; the highest recommended reserve-study funding level replaces baseline funding. Buildings that miss it can lose conventional financing. In Florida, reserves must be funded to the SIRS recommendation from 1 January 2026 with no waiver (HB 913). Boards set 2027 budgets in Q4 2026, which is now.

**Founder edge:** speed of tool-building, SEO ("Fannie Mae 15% reserve rule" will be searched by tens of thousands of board members). Weak spot: nobody in the family network is confirmed in real estate.

**First 10 customers:** publish a free ratio calculator, then cold-email 100 small management companies (the 10,000 or so firms noted in the pool file) in Florida, Nevada, Illinois and New York; offer "we model your whole portfolio" for free to the first 10.

**Cost to first revenue:** about $600.

**Path to big:** the SaaS alone is small ($199 times a few tens of thousands is single-digit millions). The real prize is the association credit marketplace and special-assessment installment financing the pool file points to, insurance premium finance and reserve-study procurement. Check licensing (for example California's finance lender law for commercial loan brokers) before taking a loan referral fee.

**Who does it today (searched):** reserve-study firms (Association Reserves, Reserve Advisors), ReservesPro (30-year projections), management software (Vantaca at $1.25B, PayHOA), buyer-side report sellers (GoverningDocs, CleanCondo), law-firm and management-company blog posts. I found no board-side Fannie-readiness product.

**Main risks:** low ARPU; slow volunteer buying; Fannie's rule applies only to Full Review projects and lenders differ; lending license.

---

## 5. Roadside English: the driver-side coach that becomes a verified-driver profile

**Pool:** trucking driver slots re-sourced after the non-domiciled CDL and English-proficiency crackdown, $11.4B (pool 140), feeding commercial-auto premiums of $72.2B (pool 88).

**One-liner:** A phone app that rehearses the exact roadside English-proficiency inspection (interview plus highway sign recognition, no translation aids) in the driver's first language, with a practice score that carriers can request.

**Customer and payer:** the driver ($9.99 a month or $49 for a course); then carriers and CDL schools ($5-$15 per driver seat); later insurers, MGAs and brokers pay for a verified driver data feed.

**Problem:** English-proficiency violations have been an out-of-service criterion since 25 June 2025; officials cited about 7,200 drivers sidelined by October 2025 and about 9,500 later (critics say the counts include warnings); roadside inspectors may not allow interpreters, phones or cue cards; a proposed rule would codify the standard. The non-domiciled CDL final rule (13 February 2026, effective 16 March) narrowed eligibility, affecting about 194,000 holders as licenses come up for renewal. Schools hand out printed scripts of phrases.

**Founder edge:** AI voice role-play and multilingual content are fast to build; his freight-audit work gave him the trucking vocabulary. Weak spot: no ties to the driver community.

**First 10 customers:** walk into or email 10 CDL schools in New Jersey, Chicago, Houston and Sacramento that already use printed scripts and offer free pilot seats; join Punjabi, Russian, Ukrainian, Uzbek and Spanish trucker Facebook and WhatsApp groups; convert the first 10 paying drivers or two paying schools.

**Cost to first revenue:** about $800 (voice and LLM costs, translations, a small ad test).

**Path to big:** ELP practice is the hook; the asset is a portable, driver-owned profile (CDL status, medical card, ELP scores, training) that carriers, brokers and insurers query. The pool file lists "driver-qualification verification feed" as an underwriting-data business like MVR vendors.

**Who does it today (searched):** CarriersEdge (carrier-side ELP assessment, July 2025), J.J. Keller Documents app, Tenstreet, driver-qualification-file tools (TruckX, Bobtail guides), CDL school ESL classes. No driver-side coach or portable profile found.

**Main risks:** policy swings (litigation on the CDL rule); political optics; trust with the drivers; carriers prefer to buy from existing vendors.

---

## 6. Exit Window: contract-trap review and supplier-paid switching for small businesses renting uniforms

**Pool:** US uniform, linen and workwear rental, $27.7B (pool 66), generalizing to fire/life-safety (67), elevator (69), pest control (72) and vending/coffee (75).

**One-liner:** Free upload-your-contract review that flags auto-renewal dates, notice windows, minimums and exit penalties, calendars the exit window, and gets quotes from independent launderers that pay a bounty per signed route.

**Customer and payer:** restaurants, auto shops, clinics and gyms pay nothing; independent suppliers (Alsco, Unitex, Mission Linen and regional launderers) pay a referral or first-year-revenue share (typical for energy, telecom and waste brokers; must test with 10 calls).

**Problem:** Complaint reports describe a $24.98 a month service with a $1,350 cancellation demand, an acknowledgment treated as a five-year contract, and billing for undelivered items. The Cintas-UniFirst merger (agreed 10 March 2026, about $5.5B, FTC second request 11 June, no close before 11 December 2026 per the pool file) would combine about 1.5M customers; Alsco is already publishing "will the merger affect your business" pages.

**Why now:** renewal notices and price letters cluster around the merger closing; competitors are courting the switchers.

**Founder edge:** his invoice/contract audit machinery; free-to-owner pitch lowers the trust barrier; no license (contract review is information, not legal advice; keep the disclaimer and avoid acting as counsel).

**First 10 customers:** hand 200 local restaurants and shops a "free uniform contract check" by email, Nextdoor and r/restaurateurs; sign three regional launderers to a pilot bounty; close the first 10 switches.

**Cost to first revenue:** about $500.

**Path to big:** a contract-trap database and a supplier marketplace for all route-based small-business services (waste, pest, mats, coffee, fire inspection, elevator) with 1.5M-customer-scale pools each; the data asset is auto-renew terms and real prices.

**Who does it today (searched):** Uniform Bright (a single consultancy selling contract audits and arbitration defense), Cost Analysts and Cass (waste and utility audits), vendor marketing from Alsco. No supplier-paid uniform broker found.

**Main risks:** suppliers will not pay for leads; exclusive contracts or exclusive city haulers limit leverage; each switch is small money.

---

## 7. Calibrate On Call: shop-to-technician ADAS calibration dispatch for independent collision shops

**Pool:** US personal-auto physical-damage claims, $92B (pool 20), wedge (1).

**One-liner:** Independent body shops without calibration equipment text a request and get a vetted mobile calibration technician with the quote, scheduling, documentation and insurer-ready invoice.

**Customer and payer:** the shop (the insurer pays the calibration line; the shop is indifferent to the sublet price); take rate of 12-15% on each job.

**Problem:** CCC reports calibrations on 28.3% of repairable estimates in Q4 2025 (21.8% a year earlier); Enlyte's data shows 34.7% penetration in 2025 and an average $688 per estimate when a calibration is present; sublet calibrations commonly run $200-$400 per event. Many shops cannot afford the targets and tools.

**Why now:** penetration rose from 12% in 2022 to about 35% in 2025; Repairify launched Mobile Tech RX in July 2026 to run calibration companies, which signals a coming supply of professional calibrators.

**Founder edge:** web and dispatch software is fast; the invoice-to-insurer paperwork is his freight-audit pattern. Weak spot: field operations, trust with shop owners, and ties to the trade.

**First 10 customers:** pick one metro, sign 3 mobile calibration firms, then walk 100 independent shops; take the first 10 jobs by hand.

**Cost to first revenue:** about $2,000 (site, phone number, a small errors-and-omissions policy).

**Path to big:** this is an operations marketplace. If sublet calibrations are about 1M a year (an assumption; CCC does not publish a count) at $350, the flow is $350M and 15% is about $50M; the data layer (OEM position statements, required calibrations by estimate line) can be sold to shops and insurers.

**Who does it today (searched):** Repairify/asTech (diagnostics plus adasThink and Mobile Tech RX software for calibration companies), dealers, mobile calibrators such as Protech Automotive Solutions, shop in-house programs (Revv sells calibration programs). I did not find a shop-to-technician marketplace.

**Main risks:** repairs volume fell 9.7% in 2025 per the pool file; operational drag at 10-15 hours a week; liability if a calibration fails.

---

## 8. Scholarship Stack: an SGO operating platform for the federal tax-credit scholarship (high variance)

**Pool:** private-school-choice money, $10.6B (pool 135); the federal credit starts 1 January 2027.

**One-liner:** White-label donor portal, income-eligibility checks, the 90% distribution ledger, state-list compliance and annual designation packet for the new scholarship-granting organizations (SGOs).

**Customer and payer:** newly forming SGOs (diocesan scholarship funds, community foundations, state choice nonprofits); $2k-$5k setup plus 0.5%-1.5% of donations processed.

**Problem:** individuals can claim a dollar-for-dollar credit of up to $1,700 for cash gifts to SGOs from 1 January 2027; the IRS counted 27 opted-in states by 8 June 2026; governors designate SGOs each year; Treasury regulations are still pending. General grant software (Foundant, AwardSpring) is not built for this credit.

**Why now:** every new SGO needs infrastructure before January 2027; ClassWallet (about $102.6M raised) and Odyssey ($10M Series A) serve ESA administration, not SGOs.

**Founder edge:** quick to ship portals and ledgers; mentor and family network might reach nonprofit boards. This is a regulated nonprofit buyer, so his weakest fit.

**First 10 customers:** contact the 20 largest existing state-credit SGOs and every diocese in the 27 opt-in states; pre-sell a December pilot to 3 small SGOs.

**Cost to first revenue:** about $3,000 (legal review of templates, KYC/payments, hosting).

**Path to big:** if donor volume reaches a few billion dollars a year, a 1% platform fee on 10% admin pools is tens of millions; wide uncertainty until Treasury rules appear.

**Who does it today (searched):** no tailored SGO software found; general grant and scholarship tools (Foundant, AwardSpring); ESA platforms (ClassWallet, Odyssey).

**Main risks:** regulations not final; nonprofits will not buy cold from an 18-year-old; political reversal in a state; heavy compliance liability.

---

## Sources (searched 2026-10-25)

- CCC Crash Course 2026 (total-loss frequency 23.1%): https://ir.cccis.com/news-releases/news-release-details/ccc-crash-course-2026-report-finds-higher-severity-and-record
- Appraisal Engine: https://appraisalengine.com/ ; InsurifyAI: https://www.trustpilot.com/review/insurifyai.app ; AutoClaimHelpers: https://www.autoremarketing.com/ar/retail/autoclaimhelpers-com-program-offers-dealers-a-way-to-help-customers-get-larger-settlements-for-totaled-cars/
- Public adjuster scope and auto: https://www.dfs.ny.gov/insurance/ogco2004/rg040608.htm ; Oregon draft rule https://dfr.oregon.gov/help/committees-workgroups/Documents/RAC/public-aduster-licensing/20241205-draft-rule.pdf
- Gambling loss cap: https://taxfoundation.org/blog/gambling-losses-tax-big-beautiful-bill/ ; https://www.thompsoncoburn.com/insights/sports-betting-and-2026-income-tax-changes/ ; https://www.withum.com/resources/sports-betting-impacted-by-90-loss-limitation-in-new-legislation/
- Column Tax: https://www.columntax.com/ ; embedded tax providers directory https://openbankingtracker.com/embedded-finance/category/embedded-taxes
- Data-center housing: https://bendbulletin.com/?p=796157 ; https://www.bisnow.com/news/national/data-center-development/ai-boomtowns-oilfield-workforce-housing-developers-turning-to-data-centers-131978 ; Furnished Finder fees https://www.hostfully.com/blog/furnished-finder-fees/ ; https://summitpartners.com/companies/furnished-finder
- Fannie Mae LL-2026-03 coverage: https://managecasa.com/articles/hoa-reserve-studies ; https://www.jdsupra.com/legalnews/client-alert-fannie-mae-announces-5098877/ ; GoverningDocs https://builtin.com/company/governingdocs ; CleanCondo https://www.pr.com/press-release/973553
- ELP and CDL: https://www.freightwaves.com/news/cvsa-votes-to-put-truck-drivers-with-limited-english-out-of-service ; https://www.freightwaves.com/news/carriersedge-launches-new-assessment-to-address-english-proficiency-requirements ; https://www.govinfo.gov/content/pkg/FR-2026-02-13/pdf/2026-02965.pdf
- Uniform: https://business.minstercommunitypost.com/minstercommunitypost/article/abnewswire-2025-10-16-uniform-bright-the-only-firm-in-the-world-fighting-unfair-uniform-rental-contracts-saving-businesses-millions ; https://alsco.com/resources/will-the-cintas-unifirst-merger-affect-your-business
- ADAS: https://www.insurancebusinessmag.com/us/news/auto-motor/calibration-costs-are-reshaping-auto-physical-damage-claims-588069.aspx ; https://collisionweek.com/2026/07/15/mobile-tech-rx-launches-connected-adas-workflow-calibration-companies/ ; https://www.autobodynews.com/news/enlytes-2026-trends-report-tracks-climbing-calibration-costs-uneven-parts-inflation-and-a-repair-rate-reversal
- SGO credit: https://www.ncsl.org/news/details/4-questions-about-the-new-federal-tax-credit-scholarship
- Killed items: Packlog https://apps.shopify.com/packlog-epr-compliance ; Fixed https://techcrunch.com/2014/07/24/fixed-raises-1-2-million-for-a-mobile-app-that-fights-your-parking-tickets-for-you ; QuoteScore https://www.hvac.com/expert-advice/QuoteScore/ ; RevRecoup https://revrecoup.com/go/logistics-freight/ ; professional-degree list https://thecollegeinvestor.com/83422/ed-expands-professional-degree-list-to-29-programs-after-court-stay/
