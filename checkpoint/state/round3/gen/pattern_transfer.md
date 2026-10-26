# Round 3 generation: pattern-transfer lens

Lens: take the 2024-2026 breakout mechanisms from `round2/inputs/patterns_digest.md` and ask what the solo-builder version is, for an 18-year-old with 10-15 hours a week, a mentor in pro-AV, Gen Z reach, and AI-speed building.

Method note: I ran about 22 searches (more than the 8-15 asked) because most first-pass transfers died on contact with a competitor. The killed ones are listed at the bottom so later rounds do not re-propose them. Figures marked "assumption" are mine and unsourced. Figures from vendor blogs or aggregators are labelled as such.

Ranking logic: speed to first dollar, buyer credibility for an 18-year-old, absence of a license wall, use of his real edges, and honesty about the ceiling. Ideas 1-3 are the ones I would start. Ideas 4-8 are real but weaker, each for a stated reason.

---

## 1. Launch Gate: security and store pre-flight for AI-built apps

**One-liner:** Paste the URL of an app built in Lovable, Bolt, Replit or Cursor and get the holes in plain English, each with the exact prompt that fixes it inside the builder you used.

**Patterns transferred:** "Race the bundle" (sit across several builders so none can bundle you), "free tool for a profession, paid by suppliers" (vibe coders are the profession; Supabase, Clerk, Stripe and Vercel are the suppliers), and "best-in-modality, self-serve first".

- **Customer:** Solo vibe coders, freelancers and agencies shipping client apps, and seed-stage founders whose first serious buyer sends a security questionnaire.
- **Who pays, and how much:** Free scan. Fix pack $29. Agency monitoring $99-249/mo. Customer-ready security review letter $499. Later, paid "fix with X" placements from dev-tool vendors.
- **Problem (evidence):**
  - CVE-2025-48757 exposed about 170 Lovable apps through one missing Supabase setting.
  - A founder lost $87,500 to a Stripe live key hardcoded in front-end code (Vibesecur founder's account).
  - Lovable's built-in scan was reported to check only whether Supabase access controls are enabled, not whether they are configured correctly.
  - A Replit employee and a colleague scanned 1,645 Lovable-built apps (Semafor, 2025).
  - One 2026 analysis says 91.5% of 200+ vibe-coded apps had at least one vulnerability. The source is thin, so treat it as indicative.
- **Why now:** Lovable reportedly raised $400M at a $13.3B valuation on 12 Aug 2026, so the number of non-engineers shipping apps is exploding. The only dedicated competitor I found is a free tool still listed as "launching soon".
- **Founder edge:** He is the target user. He ships deployed apps with accounts and an in-app economy using AI agents. His detector work gives him the habit of publishing measured false-positive rates, which is what a security tool needs to be believed. His House Money app is the first public dogfood case.
- **First 10 customers:**
  1. Run it on his own apps and publish the results.
  2. Post "free scan, verify you own the URL" in r/lovable, r/replit, r/vibecoding, and the builders' Discords.
  3. Offer the first 30 volunteers a free scan in return for permission to publish anonymised stats ("we scanned 100 volunteered apps: X% leaked keys"). That post is the growth engine.
  4. Convert about 15% to the $29 fix pack.
  5. Pitch freelancers on Upwork and Contra who build client apps with Lovable on the $99 plan.
  6. Sell the $499 letter to founders complaining about security questionnaires on Reddit and IndieHackers.
- **Cost to first revenue:** about $500 (domain, hosting, LLM credits, Stripe).
- **Legal premise (checked):** Only run active tests (RLS probing, auth tests) on apps whose owner proves control with a DNS TXT record or meta tag. Passive reads of publicly served JavaScript only for anything else. Never access data. This avoids unauthorised-access exposure.
- **Path to big:**
  - Wedge is indie builders. Scale comes from deploy hooks inside builders, a neutral trust attestation that payment processors, app stores and enterprise buyers can query, scanning of agent skills and MCP servers for the next wave of personal-agent users, and channel deals with Supabase, Vercel and Stripe.
  - Bottom-up (assumption): 20k agencies and freelancers at $200/mo is $48M. 150k founders at $29/mo is $52M. $100M needs both, so the realistic early target is $10M ARR from about 25k payers.
  - Honest risks: builders will improve their native scans (the multi-builder attestation is the hedge), ARPU is low, and general security vendors could move down-market.
- **Who does it today:** Vibesecur (free, pre-launch). Builder-native scans (Lovable's was narrow). Engineer-focused vendors such as Snyk, Semgrep and GitHub security (background knowledge, not searched). No funded vibe-code-specific security startup found.
- Sources: [Vibesecur listing](https://hunted.space/product/vibesecur-launching-soon), [TNW on Lovable exposure](https://thenextweb.com/news/lovable-vibe-coding-security-crisis-exposed), [Semafor](https://www.semafor.com/article/05/29/2025/the-hottest-new-vibe-coding-startup-lovable-is-a-sitting-duck-for-hackers), [Lovable raise](https://noqta.tn/en/news/lovable-400m-series-c-13-3-billion-vibe-coding-2026)

---

## 2. Pro-AV control copilot: Cursor for the scarce person who programs conference rooms

**One-liner:** A coding copilot for Q-SYS Lua and Extron Global Scripter (Crestron C# next) that generates a script, tests it in the free emulator, and fixes its own errors, with a free brand-neutral answer engine as the top of the funnel.

**Patterns transferred:** "Developer-salary capture for a scarce technical workforce working in a digital artifact an agent can edit and verify", plus "free tool paid by suppliers".

- **Customer:** Control programmers and commissioning engineers at AV integrators (the mentor's former company is one of the largest), mid-size integrators, freelance AV programmers, and corporate or university AV teams.
- **Who pays:**
  - Seats at $300-500/mo against a programmer's salary or $100-175/hr contract rate (assumption, verify in the first five calls).
  - The free tier is funded by manufacturers and distributors who want to be the recommended device in an answer. Budget size is unknown and must be verified.
- **Problem:** Programming and commissioning rooms is repetitive work done by too few people, across vendor-specific scripting environments with documentation scattered over PDFs and forums.
- **Why now:** Coding agents are now reliable on niche languages when they have docs and a test loop. Q-SYS and Extron scripting are text languages with free tooling (verify emulator coverage in week 1). Copia raising $26M in June 2026 ($55M total) shows investors fund AI for industrial control code, but AV is the unfunded sibling.
- **Founder edge:** His mentor's industry is exactly this one, which solves the credibility problem that blocks him with cold enterprise buyers. His builds already use a generate, test, fix loop with held-out checks.
- **First 10 customers:**
  1. Ask the mentor for five intros to programmers or operations heads.
  2. Offer a free two-week pilot on their next real Q-SYS job and measure hours saved.
  3. Charge $300/seat after.
  4. Add five freelancers from AV forums, LinkedIn AV-programmer groups and the Q-SYS user community.
- **Cost to first revenue:** about $1,500 (LLM credits, hosting, any dev accounts).
- **Path to big:**
  - Honest ceiling for AV alone: about 15-25k programmers worldwide (assumption) at $400/mo is $72-120M at 100% share, so a realistic AV-only outcome is $5-15M.
  - The big path is generalising to control-system programming for home automation (Control4, Savant, Lutron), building automation (BACnet, Niagara) and PLCs. Add sponsor placements and the voice change-order module (idea 5).
- **Who does it today:** XTEN-AV's XAVIA (design: cable schedules, bills of materials, compatibility). AVPro's Tech Sage (partner-only, built on Claude Sonnet 4.5). Copia Automation, PLCs.ai and PLC Copilot on the PLC side. I found nothing for Q-SYS or Extron programming assistance.
- Sources: [XTEN-AV profile](https://www.outlookindia.com/amp/story/hub4business/how-xten-avs-founders-develop-ai-powered-pro-av-hub), [Copia raise](https://pulse2.com/copia-automation-raises-26-million-to-expand-industrial-code-management-and-recovery-platform/amp/)

---

## 3. Back Online: success-fee appeals for banned sellers and frozen merchants

**One-liner:** A platform bans a seller's account, and AI drafts the plan of action from the seller's real documents. The seller pays most of the fee only if the account comes back, at a fraction of agency prices.

**Pattern transferred:** "Outcome-priced replacement of a high-volume, measurable labor function", plus a data flywheel (every appeal and its result becomes a dataset of what language reinstates accounts).

- **Customer:** Amazon, TikTok Shop, Walmart and eBay sellers (many are Gen Z dropshippers and private-label owners), Meta advertisers with disabled ad accounts, and merchants with Stripe, PayPal or Shopify Payments holds. YouTube strikes later.
- **Who pays:**
  - The merchant, with weeks of revenue and trapped inventory at stake.
  - Proposed price: $99 triage plus $399 on reinstatement.
  - Incumbent prices: attorney firms charge $3,500 flat or $1,500-2,300, FreeeUp charges $300 plus $300 if unsuspended, and Meta restoration runs about $2,499.
- **Problem:** Appeals are opaque, generic plans of action fail, and agencies are expensive. Vendors self-report 70-95% success, which nobody verifies.
- **Solution detail:**
  1. Classify the violation type.
  2. Draft the plan of action (root cause, corrective actions, preventive measures) from the seller's invoices and supplier letters.
  3. He reviews it by hand at first.
  4. Log every outcome.
  - Hard rule: never fabricate documents, and decline sellers who acted in bad faith.
- **Why now:** Several 2026 sources describe more automated, stricter enforcement. TikTok Shop is growing. Incumbents still price at agency rates, and I found no AI-native outcome-priced competitor.
- **Founder edge:** Seller communities are his native turf. He understands how AI-written text reads to a reviewer. He already runs the flat-diagnostic plus contingency commercial structure in the freight audit, so this reuses the model and the habit of selling on results.
- **First 10 customers:** Post in r/FulfillmentByAmazon, r/AmazonSeller, FBA Facebook groups and TikTok Shop seller Discords: "free draft, you pay only if reinstated." Add SEO pages for each suspension type. Expect the first success fee in 30-45 days.
- **Cost to first revenue:** about $300.
- **Legal premise (checked):** Position it as business consulting, not legal representation. No "attorney" claims. No guarantees. Platforms decide, so the success fee is conditional on reinstatement.
- **Path to big:**
  - Appeals alone cap around $10-30M (assumption: one unsourced claim says about 2,000 Amazon suspensions a month, roughly 24k a year, times about $500 is about $12M at 100% share, before Meta, TikTok and payment holds).
  - The scalable version is a platform-risk subscription: policy monitoring, listing compliance pre-checks and account-health alerts for platform-dependent merchants and creators, fed by the appeal-outcome dataset.
  - Do not call this a $100M business from appeals alone.
- **Who does it today:** AMZ Sellers Attorney, Riverbend Consulting, Seller Engine (note it already uses the name "Account Rescue"), FreeeUp, Hacked.com (Meta), and freelancers. None AI-native or outcome-priced.
- Sources: [AMZ Sellers Attorney](https://amazonsellers.attorney), [FreeeUp](https://freeup.net/suspension-appeal-service), [Seller Engine](https://sellerengine.com/services/account-rescue/), [Hacked.com Meta](https://hacked.com/meta-ad-account-restricted/), [Riverbend](https://riverbendconsulting.com/amazon-seller-suspension-appeal-experts/), [suspension-volume claim (unsourced)](https://ecomcircles.com/blog/amazon-suspension-prevention-recovery-guide-2026/)

---

## 4. Held-out-test environments for finance, markets and game-economy agents

**One-liner:** Sell AI labs and agent startups the thing he has already proven he can do, which is tasks with pre-registered holdouts that an agent cannot game.

**Pattern transferred:** "Selling scarce expertise to a new concentrated buyer class" (the AI labs), at solo scale: environment packs instead of a labor marketplace.

- **Customer:** Second-tier labs and agent startups that cannot build environments in-house, environment hubs and marketplaces, and top labs later.
- **Who pays (secondary-source figures):**
  - Individual tasks $200-2,000.
  - A website-replica environment about $20,000 (SemiAnalysis).
  - Contracts $300k to $1M+ per quarter at the high end (Epoch AI interviews, via summaries).
  - Anthropic reportedly discussed spending over $1B on environments.
  - DataVendor lets sellers keep 80%. Prime Intellect pays per accepted environment.
- **Problem:** Labs need verifiable tasks with real graders. Public gyms are toy or contaminated, and finance and markets tasks leak the answer unless the holdout is designed carefully.
- **Solution:** Three packs.
  1. Look-ahead-trap trading tasks graded on a pre-registered holdout, drawn from his Strategy Lab.
  2. Game-economy decision tasks built on House Money's accounts, bankroll and rakeback engine.
  3. Synthetic LTL invoice-audit tasks with ground truth, drawn from the freight engine.
  - Own all code and use synthetic data only (the buyer-side rights requirement).
- **Founder edge:** He ships full-stack deployed apps fast. His backtesting lab used pre-registration and holdouts, and its early winners flopped out of sample, which is exactly the anti-reward-hacking mindset. His detector blind tests are eval design.
- **First sales:** Accept a Prime Intellect bounty. Apply to DataVendor (invite-led). Cold-DM 30 research engineers at about 15 small labs and agent startups with a one-page summary and a GitHub link. Offer a free pilot to three agent startups for a case study. The first dollar may take 60-120 days, so be realistic.
- **Cost to first revenue:** about $1,500.
- **Path to big:** Several non-exclusive sales per environment at $20-50k, ten environments a year, is $1-2.5M. Exclusivity premiums (reported at 4-5x, unconfirmed) and eval retainers push it higher. A lab-grade vendor is worth far more, so the ceiling is high but the probability is low.
- **Who does it today:** Mechanize (reported $9.1M seed), Prime Intellect Environments Hub, DataVendor, Mercor, Surge and Turing, plus labs in-house. One critic argues the easy environments are taken, supply is crowded, and values trend toward zero as models generate their own data. He is partly right, so the edge has to be quality and rights, not volume.
- Sources: [pricing summary](https://fourweekmba.com/rl-environment-pricing-the-cost-architecture/), [SemiAnalysis](https://newsletter.semianalysis.com/p/rl-environments-and-rl-for-science), [seller guide](https://aitrainer.work/sell/rl-environments), [critique](https://andersonbcdefg.beehiiv.com/p/don-t-build-an-rl-environment-startup)

---

## 5. Change-Order Catcher: voice-first T&M capture for low-voltage and specialty subcontractors

**One-liner:** The foreman talks and the app produces a timestamped, photo-backed change-order request the GC can acknowledge, and the sub pays a slice of what it recovers.

**Pattern transferred:** "Ambient capture of conversations to eliminate documentation labor", with a measurable saving that makes outcome pricing possible.

- **Customer:** Owners, project managers and foremen at low-voltage and AV, electrical, mechanical and fire-protection subs with $2-50M revenue.
- **Who pays:** The sub. Extra work done on a directive and never billed is revenue already earned. Price $79 per foreman per month, or 10% of change orders captured above their baseline.
- **Solution:** A phone web app. The foreman records: "GC super asked us to relocate four drops in room 210, two techs, three hours." It extracts labor, materials, location and who gave the directive, attaches photos and GPS time, texts the GC rep an acknowledge link, and syncs to QuickBooks.
- **Why now:** Speech plus LLM extraction is good enough on a job site. The existing tools are photo and form based. A search for voice-first capture for subs found nothing.
- **Founder edge:** His mentor's industry (AV integrators are subs on construction projects). He has already used a flat-fee-plus-contingency model in the freight audit.
- **First 10 customers:** Three integrators through the mentor, plus seven subs via local ABC, IEC and NECA chapters. Run a 30-day pilot alongside their current process and show a ledger of unbilled items found. Take 10% of the recovered amount.
- **Cost to first revenue:** about $800.
- **Legal note:** Record only the foreman's own dictation, not crew conversations, to stay clear of two-party-consent states.
- **Path to big:** Change orders lead to pay applications, then retainage and lien rights, then financing (float on the flow). Bottom-up (assumption): 20k subs at $2k/yr is $40M before payments. The risk is that Procore or the GC's mandated platform owns the record, so data must flow into it.
- **Who does it today:** Clearstory (photo-based T&M tags to change-order requests), eSUB, Contractor+, Buildertrend. Voice-first not found.
- Sources: [Clearstory](https://www.clearstory.build/learn/subcontractor-software), [eSUB](https://electrical.esub.com/), [Contractor+](https://contractorplus.app/invoicing-payments)

---

## 6. Placement rail: pay-per-placement career services for trade programs

**One-liner:** Schools running 8-15 week trade programs must hit a 70% job-placement rate. He gets paid only when a graduate starts work.

**Patterns transferred:** "Policy money flows to whoever can absorb it", "capex pass-through to scarce trades", and performance-priced outcomes.

- **Customer:** Private career schools and community-college workforce divisions running HVAC, electrical-helper, welding, CDL, EMT and nursing-assistant programs, plus the employers hiring graduates.
- **Who pays:** The school's career-services or outcomes-compliance budget, about $500-1,500 per verified placement (assumption). Employers can add a hire fee.
- **Why now:**
  - Workforce Pell took effect 1 July 2026 (legal start 20 July per one source).
  - Programs must run 8-15 weeks (150-599 hours) and maintain 70% completion and 70% placement, measured in the second quarter after exit.
  - Approval is state first, then federal. As of 26 Sept 2026 a third party counted 18 federally approved programs in five states (Iowa, Indiana, Nebraska, Texas, North Carolina). So it is early, and the first cohorts finish around Q1 2027.
- **Solution:** A placement desk. AI finds local employers hiring that occupation, screens graduates by SMS, schedules interviews, and collects offer letters and pay stubs for compliance reporting, with a dashboard showing the school's rate against 70%.
- **Founder edge (weaker here):** AI sourcing of employers, Gen Z reach to 18-24-year-old graduates, and family and mentor employer intros. He has no education-sales credibility, so pay-per-placement is how he gets around that.
- **First 10 customers:** Pick two states already approving programs. List approved programs. Email directors: "we only get paid when your graduate starts work." Start with private schools.
- **Cost to first revenue:** about $1,500. Honestly 90 days is tight.
- **Legal premise to check per state:** Some states license employment agencies. Charge the school, not the job seeker, and serve only adults.
- **Path to big:** A national placement network, a "Handshake for trades". 100k placements a year at $1k is $100M (assumption, heroic). Risks: slow government approvals, school sales cycles, and the program only being funded through award year 2028-29.
- **Who does it today:** Classet (about $7M seed in total), Trade Jobs ($250 per posting), Gyver (EU pre-seed), Interplay Learning (training), workforce boards, Handshake (colleges). No pay-per-placement rail tied to Workforce Pell found.
- Sources: [NC Commerce](https://www.commerce.nc.gov/news/press-releases/2026/08/12/ncworks-commission-celebrates-first-set-state-approved-workforce-pell-programs), [NGA overview](https://www.nga.org/publications/workforce-pell-an-overview-for-governors/), [Trade Jobs](https://www.phcppros.com/articles/19567-q-and-a-with-jeff-bond-president-of-trade-jobs)

---

## 7. Furnished Finder for the traveling trades: flat-fee, worker-direct crew housing

**One-liner:** Hosts near data-center and plant megaprojects pay a flat annual fee to list rooms, houses and RV pads. Traveling electricians and welders find them free, and can match into shared houses to stretch their per diem.

**Patterns transferred:** "Flip which side pays" (flat fee on supply, no commission) and "capex pass-through to scarce trades".

- **Customer:** Hosts (landlords, RV-park owners, motel operators) in megaproject towns, and the traveling tradespeople themselves. Contractors later.
- **Who pays:** Hosts $149-199 a year. Later, contractors pay roughly 10% on block bookings with invoicing and reporting by project phase.
- **Evidence:**
  - Furnished Finder charges $199 per listing a year and takes no commission.
  - It lists 300k+ listings and 240k+ landlords, with third-party revenue estimates of $14.8-18.3M.
  - Data-center construction is squeezing local housing: a 2,313-site RV park was approved near Abilene, and one vendor claims about 300k construction workers will be needed for data centers in 2026 (vendor figure).
- **Honest competition:** Jobsite Stays is the closest marketplace (launched in Abilene). LodgeLink, Campbell Travel, Extended Stay America's crew program, Globeo and Nearsite exist, and Target Hospitality and Civeo build camps. The gap to exploit is worker-direct booking, shared-house matching, and non-hotel supply with project-phase rates.
- **Founder edge (modest):** Fast to build, but no trades network. He would need to earn trust in Facebook groups and Reddit.
- **First 10 customers:** Pick two towns with active megaprojects. Pull monthly rentals and RV parks from Facebook Marketplace and Craigslist. DM hosts: "free listing for 60 days, $149 after." Post in traveling-trades groups. Aim for 10 paying hosts by day 45.
- **Cost to first revenue:** about $1,000.
- **Legal note:** Listing-only platform. Hosts own local lodging taxes and zoning. Comply with fair-housing rules.
- **Path to big:** Traveling nurses supported Furnished Finder at roughly $15-18M. Trades, storm and utility crews, film crews and interns could add several times that. The post-construction cliff is the main risk: housing demand collapses when a project finishes.
- Sources: [Jobsite Stays](https://jobsitestays.com/services/crew-housing), [LodgeLink](https://www.lodgelink.com/crew-travellers/), [Bloomberg](https://www.bloomberg.com/news/articles/2026-07-31/data-center-boom-fueling-demand-for-workforce-housing), [Furnished Finder fees](https://www.hostfully.com/blog/furnished-finder-fees/), [revenue estimate](https://zoominfo.com/c/furnished-finder/363291488)

---

## 8. Honest-answer APIs for AI agents (option on assets he already has)

**One-liner:** Put three tools he has already built behind pay-per-call endpoints that agents can buy with USDC, with a 60-day kill rule.

**Patterns transferred:** "Best-in-modality, self-serve, usage-based" with the buyer being an agent, so no human ever has to take an 18-year-old seriously. Weakly, "float on rails".

- **Endpoints:**
  1. Human-or-AI probability with calibrated confidence and abstention.
  2. Honest backtest (pre-registered holdout, returns an overfit score).
  3. LTL freight invoice overcharge check.
  - $0.01-$1.00 per call. List on x402 and MCP registries.
- **Customer:** Developers wiring tools into agents, and the agents themselves.
- **Evidence and its limits:**
  - An aggregator reports about 75.4M transactions and $24.24M volume over 30 days, 94,060 buyers and 22,000 sellers, an average of roughly 30 cents.
  - The standard is moving to Linux Foundation governance.
  - There is no data on what individual sellers earn, and volume could include testing or self-dealing. The patterns digest says to score pilots and volume as zero, so this stays an option, not a plan.
- **Founder edge:** Costs almost nothing incremental because the tools exist.
- **First 10 customers:** Register on bazaars and registries. Give 20 agent builders free credits. Count paying wallets by day 60. Kill if fewer than three third parties pay.
- **Cost to first revenue:** about $300.
- **Legal note:** Receive payments as a merchant. Never hold anyone else's funds.
- **Path to big:** Only if agent commerce is real, in which case verification endpoints become a high-margin trust layer. Otherwise it is a cheap experiment.
- **Who does it today:** Thousands of x402 sellers (unverified revenue), plus API marketplaces such as RapidAPI and Apify (background knowledge).
- Sources: [x402 adoption statistics](https://nevermined.ai/blog/x402-protocol-adoption-statistics), [30-day dashboard report](https://ecosistemastartup.com/?p=101448)

---

## Transfers I killed (so later rounds do not re-propose them)

| Transfer | Why it died |
| --- | --- |
| Consumer settlement and refund claims autopilot | Chariot Claims (formerly ClaimClam) raised a $10M Series A in Oct 2026, with MoneyPilot and Sparrow also active. [Source](https://www.lawnext.com/2026/10/chariot-claims-raises-10m-series-a-to-fuel-mass-consumer-arbitrations.html) |
| Tariff-refund filing for small importers | I found no CBP filing fee, one broker's pooled terms are 5% capped at $20k (a thin take rate), phase 1 covers only about 63% of entries, and it is a one-time pool that brokers are already working (my inference on timing). |
| Free answer engine for HVAC techs | ACCA's Ask ACCA, FieldProxy, OxMaint and iFactory already exist. |
| Auto-repair voice upsell | Rilla already sells to auto shops, and AutoVitals bought Mastertech.ai in 2026. |
| Home-inspector voice reports | Binsr Inspect, InspectionX, SpecMind and InspectMind (YC) are in market. |
| Carrier detention recovery from ELD data | Bubba, Detention Source and DockChron already do it. |
| PLC copilot | Copia has $55M raised, and PLCs.ai and PLC Copilot exist. |
| Hair-color formulation assistant | Brand apps and third-party apps (Color Coach, OYA, HAIRCODE) are everywhere, and no sponsor model is evident. |
| Greek-life dues and treasury | OmegaFi (since 1992), PayDues and GreekBill. |
| Egocentric video and gameplay-data marketplaces | $7-30/hr contractor rates, with EgoVista, Cortex AI (YC) and Worldmodeldata funded and in market, and unresolved game-licence rights. |
