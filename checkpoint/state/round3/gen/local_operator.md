# Round 3 generator: Local operator with a software edge

Lens: real-world local businesses an 18-year-old can start in weeks, where software is the edge ordinary operators lack.
Date: 2026-10-25. Research: 15 WebSearch, 5 fallback searches, about 14 page fetches. Claims marked (unverified) came from blogs, broker pages or franchise-marketing pages.

## The finding that shaped every idea

The "software edge" in local services is being commoditized by funded vendors who sell to the operators themselves. YC's Home Services list alone has: Bernard (S26, AI diagnosis and parts-prep for appliance servicers, "already live with some of the largest authorized service companies"), Kebra (S26, AI for field techs), CentralComs, Cactus, Drillbit, Feldy, Broccoli AI (AI phones, quoting, dispatch), and Craftwork (S23, a software-run painting company). Probook raised $40M (a16z, Sequoia) and Avoca reached a reported $1B valuation selling AI call-handling to trades.

So generic ops AI (AI receptionist, AI dispatch, instant quote widget) is rentable by every competitor for a few hundred dollars a month. It is not a moat. The durable edges left are:
1. Customer-acquisition cost and route density (data plus direct mail plus community).
2. A proprietary data asset (a parts crosswalk, a pool-owner list, a pricing history).
3. A niche the vendors ignore because the TAM looks small.
4. A structural arbitrage (build a recurring route cheaply, sell it at 8-15x monthly revenue).

Every idea below is built on one of those four, not on "we have an AI app."

## Ideas killed during research (so nobody re-proposes them)

- **Robot-mower subscription.** Robin Autopilot has done leased robotic mowing for years in 12 states; a reviewer calls it more expensive than regular lawn care and rates it below TruGreen on mostly negative online reviews. Robin is pivoting from franchising to selling RaaS to landscapers, not to homeowners. Weak consumer economics.
- **Solar-panel cleaning triggered by production data.** NREL-style soiling loss is about 5% a year in most of the US ($45-90 a year of lost kWh on a typical system) against $100-300 per visit. A Florida installer calls paid cleaning "usually a scam." Only works in dusty deserts.
- **Insurer roof-stain non-renewal rescue.** The only case found was California (aerial photos cited "moss, mildew, algae"; the insurer reversed within hours of press inquiry). No Florida evidence. Legal premise unproven.
- **Restaurant hood cleaning.** Hoodz franchise averages $575,405 per unit (2025 listing, 129-141 units, $59K fee, 7-10% royalty) so the economics are real, but it is rooftop, fire-risk, insurance-heavy work and the market-size data is junk.
- **Permanent or holiday lighting as a standalone business.** Wonderly Lights' 2024 franchisee sales ranged $15,554 to $417,502 across 21 units (average about $105K per one FDD-derived figure). Crowded with franchises (Trimlight, Gemstone, Jellyfish, Everlights, Wonderly). It survives below only as a seasonal beachhead (idea 5).

---

## 1. Pool Route Factory

**One line:** Build dense weekly pool-service routes with a data-driven direct-mail engine, then hold them or sell them to PE roll-ups at 8-15x monthly revenue.

- **Customer:** Homeowners with pools in Sunbelt suburbs. About 10.4M US residential pools; one report puts 2025 US pool-cleaning service revenue near $8.8B (Skimmer sizes the maintenance segment at about $7.2B).
- **Who pays:** The homeowner, roughly $140-195 a month on autopay for weekly service (a 2027 playbook benchmarks $165-195 chemicals-included; the broker's own Phoenix example uses $185). The exit buyer pays for the route: 20-80 accounts sell at 8-12x monthly recurring revenue (10x rule of thumb), tight turnkey routes at 12-15x (CT Acquisitions, a broker marketing page; treat as estimates).
- **Problem:** Technicians are scarce (PHTA 2024: 47% of companies list recruiting and retaining skilled staff as a top challenge, secondhand). Homeowners get no-shows, green pools, no proof of service. Owner-operators are retiring. Roll-ups pay well for dense recurring routes but cannot find enough of them.
- **Solution:** The product is the route-building machine, not the app.
  1. Build a pool-owner list from county appraiser rolls and aerial detection (Florida appraiser extra-feature records flag pools; verify per county).
  2. Score neighborhoods for density and pick three where pools sit within a mile or two.
  3. Run door-tag and postcard sequences ("we already service your neighbors at 214 and 218") using a print-and-mail API, with autopay signup and photo-proof visit reports.
  4. Add a technician copilot (photo of the test strip returns a dosing instruction) so a new hire is productive in days. This is not the moat; it just loosens the labor bottleneck.
  5. Upsell sensors and monitoring.
- **Licensing:** Florida's statute (F.S. 489.105(3)(l)) says a license is not required for cleaning a pool in a way that does not affect structural integrity, nor for water treatment that needs no installed equipment. Installing or replacing equipment does need a license, so stay out of equipment repair. Other Sunbelt states differ; verify before launch.
- **Why now:** PE consolidators are active (SPS PoolCare has made 191 add-ons since 2021 and says it has 42,000+ recurring customers in 19 markets after buying Pool Troopers in January 2026; also Pool Service Partners, Landmark Aquatic, Easton Select, Poolwerx, American Pool, Pool Scouts). Direct-mail and data tooling is now cheap enough for a teenager.
- **Founder edge:** Classmates' parents in pool-heavy suburbs are the warmest possible first accounts. He can build the list-and-mail pipeline in days. A route can run on weekends. Family seed capital can later buy a retiring owner's route.
- **First 10 customers:**
  1. Five from his own street and his classmates' parents (first month at cost, plus a free month for each referral).
  2. Door tags on the same streets, citing the neighbors he already serves.
  3. Nextdoor and HOA Facebook groups.
  4. Pool-supply store bulletin boards.
  5. The county-list postcards to the next 300 pool homes nearest his first accounts.
  He can personally cover roughly 15-20 accounts on weekends (stops run 25-35 minutes plus drive; typical techs do 12-20 stops a day), then hires a part-time tech.
- **Cost to first revenue:** about $2,500 (liability insurance, LLC, test kit, net and pole, chemicals, printing).
- **Path to big:** 5,000 accounts at about $170 is about $10M a year, needing roughly 70 technicians. At 15-25% EBITDA that is $1.5-2.5M, inside the $1-3M EBITDA band where residential pool companies trade at roughly 4-7x (broker estimate), so a $6-17M exit. Route arbitrage: 60 accounts is about $9.9K MRR, worth about $99K at 10x, against an assumed $6-12K to build (my CAC assumption of $100-200 per account). Honest ceiling: a $10-30M regional platform, not venture-scale.
- **Who does it today:** SPS PoolCare (Storr), Pool Troopers (Shoreline Equity), Pool Service Partners (Tamarix), Landmark Aquatic, Poolwerx, American Pool, Pool Scouts (franchise, "post-service reports, no contracts"), Premier Pools and Spas, Pinch A Penny, and thousands of owner-operators. Route software: Skimmer, Pool Brain. Nobody found markets the acquisition-engine approach.
- **Kill test:** if postcards plus door tags cost more than about $250 per signed account after 300 mailers, or you cannot reach 8 accounts per mile, stop.

## 2. Orphan E-Bike ER

**One line:** A weekend mobile and drop-off repair network for the electrical side (controllers, displays, hub motors, battery packs) of direct-to-consumer e-bikes whose makers have gone bankrupt or never built service.

- **Customer:** Adult owners of DTC e-bikes (Rad Power Bikes, Lectric, Aventon and similar), delivery workers, and later fleets (apartment, hotel, campus e-bike programs).
- **Who pays:** The owner: a diagnostic (about $60-90, credited to the repair), a controller or display swap (about $150-300) or a UL-listed replacement pack (about $400-800). These price points are my estimates.
- **Problem:** Rad Power Bikes filed Chapter 11 on December 15, 2025 (assets about $32.1M, liabilities $72.8M) and was sold at auction for about $13.2M (reported buyer Life EV; warranty coverage unclear). Owners report that controllers, throttles, batteries and displays are the pinch points, and one forum found that Rad's hub carries a Rad-specific part number the maker does not recognize. The CPSC warned about certain older Rad batteries (per reports). The biggest mobile bike-shop brand, Velofix, lists Rad among serviced brands but states: "We do not replace or service electric components or batteries."
- **Solution:**
  1. Diagnose by controller error codes, multimeter and a battery capacity tester.
  2. Swap known-compatible parts.
  3. Install only UL-listed (2849/2271) packs, never ship lithium (hazmat), do it locally.
  4. Publish a free parts-crosswalk database (Rad part number to compatible Bafang or other equivalents). That is the SEO engine, the community asset and the parts store in one.
  5. Later, sell fleet maintenance contracts and approach brands for outsourced warranty service.
- **Why now:** The Rad collapse just created a large orphaned installed base; DTC e-bike makers are failing; local shops often decline DTC e-bikes; there is no software vendor chasing this.
- **Founder edge:** Gen Z reach into Reddit and Discord e-bike communities, engineering curiosity, and speed at shipping a searchable crosswalk site.
- **First 10 customers:** Post the crosswalk and a "free battery health check" in Rad owner groups and Facebook groups; set up at a coffee shop or campus bike rack on weekends; use Nextdoor; offer delivery riders a flat-rate triage. Customers must be adult owners; do not market to minors.
- **Cost to first revenue:** about $3,000 (tools and testers, top-8 SKU inventory, insurance with a lithium endorsement, LLC).
- **Path to big:** Sizing is my estimate: if about 1.5M DTC e-bikes are in service at about $120 a year of aftermarket spend, that is about $180M. A regional network of about 40 vans at $250K is about $10M. Venture-scale only if a brand (for example Rad's new owner) outsources national warranty service. Honest: a $5-15M regional business with a platform option.
- **Who does it today:** Velofix (mobile bike shop, mechanical only), local bike shops (many refuse DTC e-bikes), the brands' own support, Life EV for Rad, battery rebuilders.
- **Risks:** Lithium fire liability and insurance availability; product liability on replacement packs; exclude e-motorcycles and any bike with a recall remedy.

## 3. Appliance Repair with an Owned Demand Engine

**One line:** A homeowner-facing appliance repair brand where he builds the demand and dispatch engine and a bench of 1099 technicians does the wrenching.

- **Customer:** Homeowners, renters and small landlords (10-50 units) with a dead refrigerator, washer, dryer, dishwasher or oven.
- **Who pays:** The homeowner or landlord, roughly $150-500 a visit (consumer guides put the service-call fee at $65-125; ticket is that plus parts and labor). Avoid home-warranty companies; they pay little.
- **Problem:** IBISWorld puts US appliance repair at $7.4B in 2026 across 37,453 businesses, no company above 5% share. BLS counted about 37,300 appliance repairers (May 2024, median $23.76 an hour, average age 43-44); lean shops stretch response times from same-day to 3-5 days. One technician generates $150-250K of revenue a year.
- **Solution:**
  1. A "model plate and error code" landing page for every brand and code (programmatic SEO) that books a visit with an upfront price range.
  2. Local Services Ads for first revenue while SEO matures.
  3. Parts pre-ordered before the visit so the first visit fixes it.
  4. Technicians on 60-70% revenue share, recruited from retiring or laid-off techs.
  5. Buy, do not build, the triage and call-handling AI.
- **Licensing:** Appliance repair is generally unlicensed, but refrigerant sealed-system work needs EPA 608 certification and gas-line work may need a trade license. Stay out of both at first.
- **Why now:** Technicians are retiring and training enrollment is flat. AI diagnosis is now cheap enough for a lean operator to rent. Repair-over-replace pressure from higher new-appliance prices (unverified).
- **Founder edge:** He builds the funnel and the data loop (cost per booked job, first-visit-fix rate) faster than a 30-year technician-owner. A family friend's broken dishwasher is the first test case.
- **First 10 customers:** Recruit one technician through local appliance-parts counters and trade-school boards; classmates' families; Nextdoor; three small landlords he can text directly; LSA leads.
- **Cost to first revenue:** about $4,500 (LLC, insurance, LSA budget, a parts float).
- **Path to big:** About 50 technicians at roughly $200K each is about $10M a year, with about 30-35% gross margin before marketing. City-by-city technician pods, then property-manager contracts, then authorized-service contracts with brands, then buying out retiring shops. Mr. Appliance is the benchmark: about 310 units, flat (Franchise Times 2025: sales -0.8%, units -4.5%), so the franchise model is not winning; a demand-engine-led model might.
- **Who does it today:** Mr. Appliance (Neighborly), Sears Home Services and authorized-service networks (Frontdoor, Asurion, HomeServe-type warranty channels), thousands of local shops. Software vendors selling to servicers: Bernard and Kebra (YC S26). That is why the moat has to be demand and technician supply, not triage.
- **Risks:** Quality control of 1099 technicians, review exposure, warranty callbacks.

## 4. Plaza-First Storefront Route

**One line:** Sell windows, sidewalks, dumpster corrals and litter control to the owner of a whole strip plaza in one contract instead of door-to-door per tenant.

- **Customer / who signs:** The owner or small property manager of a strip center or mixed-use plaza with 8-30 storefronts; individual tenants as a fallback.
- **Who pays:** The plaza owner on a monthly contract (about $1,200-3,000 a month for a 10-20 tenant plaza; my estimate built from storefront windows at about $75-150 a visit, monthly sidewalk and dumpster-pad washes, weekly litter).
- **Problem:** Plazas get a patchwork of vendors or none. Tenants complain about dirty glass and sidewalks; owners lose curb appeal and leasing leverage. A commercial maintenance route runs about $300-1,200 a month per property (blog benchmark).
- **Solution:** One vendor, one invoice, photo-proof on each visit, a 60-second Street View and satellite quote, pure-water pole systems (a starter kit is under $1,500 for a basic setup), scheduled early weekend mornings. Start without sweeping trucks ($85K-350K).
- **Why now:** Pink's Window Services reached $58K a month in revenue, sold to ResiBrands in July 2023, and started by offering a free first job to a door it knocked on. Exterior brands have proven exit buyers.
- **Founder edge:** The family's business and investment network is the point of this one. Warm introductions to plaza owners skip the cold-start trust problem that kills most 18-year-old B2B pitches.
- **First 10 customers:** Two or three plazas through family introductions, offered a free first month on one storefront row; five tenant restaurants and cafes via door-knocking in uniform; then the rest of those plazas' tenants.
- **Cost to first revenue:** about $2,500.
- **Path to big:** Honest math: $10M needs roughly 500+ plazas at $1,500 a month unless ARPU rises. The realistic path is a $5-10M regional property-services company that adds pressure washing, landscape and sweeping contracts, then sells to a commercial maintenance consolidator. Not venture-scale.
- **Who does it today:** Local window cleaners, Pink's / Window Genie / Squeegee Squad-type franchises, BrightView and ABM at the enterprise end, local sweeping contractors (35-45% gross margins reported, but capital-heavy).

## 5. Exterior-Care Season Stack with Student Branch Managers

**One line:** Start with holiday lights this November, add gutter and soft-wash seasons, and replicate the playbook through student branch managers on a shared software spine.

- **Customer:** Affluent homeowners.
- **Who pays:** The homeowner: holiday install about $800-2,500 (my estimate), permanent track lighting $18-35 per linear foot or $2,500-5,500 a house (Trimlight pricing and an installer's range), later gutters and soft wash.
- **Problem:** Installers are booked or priced opaquely; quotes take days.
- **Solution:** A site that returns a quote in under a minute from a house photo or address (satellite roofline measurement) with an AI rendering of the lights, 50% deposit, crew of 2-3 friends aged 18+. The software spine (quote engine, CRM, scheduler, review requests, onboarding checklists) becomes the template for branches run by 18-22-year-old managers.
- **Model caveat:** College Works Painting says it hires 2,000+ students a year in 35 states. A watchdog (Truth in Advertising) challenged its earnings claims; the only floor was a $4,000 minimum. Pay managers a real floor plus profit share, as employees, and take counsel before selling anything that looks like a franchise. The FTC Franchise Rule and state laws can apply.
- **Why now:** It is late October. The install window is roughly November 7 to December 10, and homeowners are booking now. Wonderly Lights shifted to year-round because seasonal-only is fragile. Student labor is plentiful.
- **Founder edge:** Classmates' parents; he ships the quote-and-render tool in a week; Gen Z friends are the crew.
- **First 10 customers:** Neighbors and classmates' families; HOA and Nextdoor groups with a rendered preview of their own house; door hangers.
- **Cost to first revenue:** about $4,000 (commercial LED inventory, clips and cords, ladders, insurance).
- **Path to big:** About 60 branches at about $170K each is $10M. The franchise-comp warning: Wonderly's 21 franchisees ranged $15.6K to $417.5K in 2024, so the sales engine, not the product, decides outcomes. Honest: a good seasonal first dollar, a mediocre standalone business, and a credible multi-city network only if the branch-manager model works.
- **Who does it today:** Wonderly Lights ($91-142K to open), Trimlight and its dealers, Gemstone, Jellyfish, Everlights, Christmas Decor-type franchises; for the branch-manager model, College Works Painting and Craftwork (YC S23).

## 6. Doorstep Services for Independent Apartment Communities

**One line:** Valet trash, pet-waste and turn cleaning for 50-250 unit communities, paid by residents, with a pitch to the owner built on new net operating income.

- **Customer / who signs:** Owners and managers of independent apartment communities that the national vendors ignore.
- **Who pays:** Residents pay $25-40 a unit a month on their rent bill; the owner pays the vendor about $8-15 a unit a month. A 100-unit property is $800-1,500 a month for the vendor. The owner keeps the spread, about $10-25 per unit a month.
- **Problem / pitch:** On 200 units the spread is about $24-60K of new annual NOI at zero capital, which at an illustrative 6% cap rate is $400K-$1M of added property value. Smaller properties pay higher per-unit rates because the vendor's route cost is the same.
- **Solution:** Evening crews of students, photo-verified pickups, a resident app for billing and missed-pickup reports, bundled add-ons (pet waste, bulk-item pickup, apartment turns).
- **Why now:** Valet Living (1.6M homes in 40 states; revenue estimated $359-503M by third parties; owned by GI Partners after Ares and Harvest) targets large portfolios. Independent owners under 250 units are underserved.
- **Founder edge:** The family's investor network likely includes small multifamily owners. The NOI math is a number even a skeptical owner respects. Crews can be recruited from the same student pool.
- **First 10 customers:** Pull independent-owner LLCs with 50-250 units from county records, exclude the big manager lists, cold-call 100 and offer a free 30-day pilot at one building; warm introductions from family contacts.
- **Cost to first revenue:** about $6,000 (liability and workers' comp, carts, uniforms, first payroll before the first invoice).
- **Path to big:** 100 communities of 200 units at $12 is about $3.5M a year; about 290 communities reaches $10M. Add pet waste and turns to raise revenue to $20-25 a unit. Honest ceiling: $10-25M regional.
- **Who does it today:** Valet Living and its Valet Waste unit, City Wide Facility Solutions and other local providers.
- **Risks:** Contracts run 12-36 months; insurance and night-shift management; managers prefer proven national vendors. Weak fit with the lens "buyers who take an 18-year-old seriously," so it ranks mid-pack.

## 7. Family Tech and Scam-Proofing Concierge

**One line:** A flat-fee house call that secures the family's devices, router and passwords, aimed at adult children buying it for their parents.

- **Customer:** Households with aging parents and mixed-device homes.
- **Who pays:** The adult child (35-60): about $250 for setup plus $39-79 a month for remote support and an annual check-up. (my pricing; unverified demand)
- **Problem:** Parents get phished, run old routers and reuse passwords; local help is a stranger or a store queue.
- **Solution:** Password manager and MFA setup, call blocking, router replacement and segmentation, backups, update hygiene, and an emergency number.
- **Licensing:** In Florida, stay plug-and-play. F.S. 489.503 exempts finished products that do not become a permanent fixed part of the structure; do no in-wall wiring and no alarm work.
- **Why now:** Elder-fraud and tech-support scams are widely reported as rising. (specific 2024 FBI figures not retrieved)
- **Founder edge:** Real technical skill, plus classmates' parents who think of him as the family's IT person.
- **First 10 customers:** Ten families at his school, a "scam-proof my parents" offer to their grandparents, neighborhood groups.
- **Cost to first revenue:** about $500.
- **Path to big:** 10,000 households at $59 a month is about $7M; reaching it needs a local-technician network and a remote-monitoring layer. Honest ceiling is low and defensibility is weak.
- **Who does it today:** Geek Squad, Asurion, HelloTech, Papa-type senior services, and local freelancers.

## 8. Downsizing and Closet "Sell It For You" Concierge

**One line:** Zero-upfront resale of estates, closets and garages, priced from sold comparables and listed across marketplaces for about a 40% commission.

- **Customer:** Adult children clearing a parent's home, and affluent suburban households with unused goods.
- **Who pays:** About 40% of what sells (my estimate), no upfront cost to the seller.
- **Problem:** Estate-sale companies price by gut and ignore niche categories; items worth $500 go for $50. NAR 2026 data say boomers are 55% of home sellers.
- **Solution:** A photo-to-comp pricing and cross-listing pipeline, local pickup, and a category specialist for jewelry, tools, instruments and electronics.
- **Why it ranks last:** The pricing AI is widely available (eBay and Google tools), the buyer is a grieving adult who will not hand an 18-year-old the keys, and the drop-off-store model has a poor history (QuikDrop shut its franchise program in 2007; iSold It still franchises).
- **First 10 customers:** Family friends, realtors, estate attorneys and senior-move managers; an adult partner to front it.
- **Cost to first revenue:** about $400.
- **Path to big:** Weak without a proprietary data asset or a marketplace layer.
- **Who does it today:** Everything But The House, MaxSold, Caring Transitions, thousands of local estate-sale firms, iSold It.

---

## Suggested portfolio

If he wants one primary bet and one cheap hedge: **Pool Route Factory** (weekends, most predictable money, clearest exit comps), plus the **holiday-lights beachhead** only if he can sell ten homes by mid-November. Orphan E-Bike ER is the best non-obvious bet and the one to pilot with $3K if the other two feel too conventional.

## Sources used

- SPS PoolCare / Pool Troopers and roll-up activity: privsource.com deal pages; ctacquisitions.com/prepare-your-business-for-sale/pool-service-exit/ (valuation multiples, buyer list).
- Pool market size: researchandmarkets.com; getskimmer.com blog.
- Florida pool licensing: leg.state.fl.us F.S. 489.105(3)(l); low-voltage exemptions: F.S. 489.503.
- Pool Scouts: poolscouts.com.
- Rad Power Bikes bankruptcy: electrek.com (2025-12-17), micromobility.io, retrospec.com; Velofix: velofix.com/ebike-services/.
- Appliance repair: ibisworld.com, servicemag.org technician workforce article, franzy.com / pulserevops.com (Mr. Appliance), ycombinator.com/companies/bernard and /industry/Home Services.
- Valet trash: propertymanagerinsider.com, hellodata.ai, growjo.com / zoominfo.com (Valet Living).
- Window routes: starterstory.com/pinks-window-services-breakdown.
- Lighting: trimlight.com pricing, 1851franchise.com and franchisetimes.com (Wonderly).
- Student model: houzz.com and truthinadvertising.org (College Works).
- Robot mowing: todayshomeowner.com, lawnandlandscape.com (Robin).
- Solar cleaning: solar.com, floridasolardesigngroup.com.
- Roof-stain case: abc7news.com / uphelp.org.
- Hood cleaning: bizbuysell.com / franzy.com (Hoodz).
