# Round 3 generator: what a young AI builder can sell into pro AV integrators (and the family and mentor network around them)

Lens: the audio-visual integration industry (his mentor founded a roughly $1B integrator) and the family-business / investment network. Workflows covered: bid, design, procurement, install, closeout, service, talent. Written 2026-10-25 after about 35 searches and 1 page fetch. Items marked "assumption" are mine, not sourced.

## What the research said (read first)

1. **The obvious AV-AI slot is taken, by funded players.**
   - AI proposals, BOMs and designs: XTEN-AV (claims 30,000+ users and "$3B+ of proposals"), D-Tools merging with Portal.io (AI drafting proposals and drawings from historical data), Specifi, Jetbuilt.
   - Manufacturers are building their own: Crestron's Configure Pro AI mode (previewed at CEDIA 2026, due early 2027) and Savant Blueprint AI (reads floor plans, outputs a BOM and quote). Do not build "AI proposals for integrators".
2. **The end-user "scan the QR code, chat with an AI" support layer is also taken.** AV Support AI (chipp.ai), Jetbuilt's Jetbot (shown at InfoComm 2025), and IVCi's QR service all exist. Avoid it.
3. **Four things I searched for and did not find in AV:**
   - a cross-integrator labor-hours benchmark;
   - a cross-integrator troubleshooting knowledge base;
   - an automated BOM-to-IT-security-and-trade-compliance packet;
   - an automated closeout-pack builder that starts from raw field artifacts.
   Each is a manual process today, per trade press and vendor how-to guides.
4. **The pain is real and quantified, mostly by vendors (treat as directional):**
   - 57.3% of integrators run hardware margins of 20% or less (NSCA/Commercial Integrator figure repeated in vendor guides).
   - Labor is 30-40% of project cost (AVIXA figure via a vendor).
   - Undocumented change orders run 4-8 per project (Zigaflow estimate).
   - 72% of integrators call talent a top concern, and installers are the hardest role to fill (NSCA 2024, via Field Nation).
   - Closeout stalls after commissioning while clients hold final payment (Zigaflow).
5. **Manufacturers do pay for integrations.** Chowmain lists 240+ drivers from 180+ manufacturers, and more than half are manufacturer-sponsored. The Q-SYS Developer Partner Program, The Farm, Control Concepts and ControlWorks all sell this to device makers.
6. **Market-size anchors (all secondary):**
   - Global pro AV is about $332B (2025), forecast $402B by 2030 (AVIXA via a summary).
   - CEDIA counts about 20,000 integration firms with a median revenue of $900k, though that survey leans residential.
   - I found no census of US commercial integrators, so every bottom-up below uses a labeled assumption.
7. **Family and investment lens: mostly crowded or already covered.**
   - Family-office software: Asora from $900/month, Altexchange $10/investment/month, K1x for K-1s.
   - Search-fund and ETA deal sourcing: Grata, Inven, SourceScrub.
   - Contingency audits for tenants (CAM), importers (IEEPA refunds) and others are covered by the sibling `contingency_audit.md` lens.
   - So the family and mentor network works best here as the source of first customers and trust, not as the product.

## The 8 ideas, ranked best first

---

### 1. Margin Autopsy, then the AV Cost & Hours Index

- **One-liner:** A $1,500, five-day "where did my margin go" report built from an integrator's last 20-40 closed jobs. The anonymized pool of these reports becomes the first real task-level labor-hours benchmark in AV.
- **Customer / signs:** Owner, COO or controller of a commercial AV or low-voltage integrator doing $2-30M a year.
- **Who pays and budget:** The integrator.
  - Price: $1,500 per autopsy (founding rate $750), then $299-499 a month for live benchmark lookups in estimating.
  - Budget logic: found margin. 1% of a $10M firm is $100k a year. Vendor guides say 57.3% of integrators sit at 20% hardware margin or below, and labor underestimation is the top leak.
- **Problem:**
  - Integrators quote labor from gut feel and best-case assumptions.
  - Job-costing tools (D-Tools, Zigaflow, XTEN-AV) only see one firm's own data.
  - The NSCA/CI survey reports margins, not task hours.
  - Nobody can say what a 12-room conferencing job should cost in hours.
- **Solution:**
  - The integrator sends exports from D-Tools, Zigaflow, QuickBooks or timesheets.
  - Agents normalize them into one task taxonomy: design, rack build, cabling, programming, commissioning, training, PM.
  - The report shows estimate vs actual by room type and phase, discount vs margin, hours that never reached an invoice (change-order leakage), and a recommended labor contingency and rate change.
  - A 20-minute walkthrough follows.
  - Opt-in contract language lets him pool anonymized results.
  - At about 25 firms he publishes a free "State of AV Labor Hours" as lead generation.
  - Then he ships a lookup inside an estimating spreadsheet or plug-in.
- **Why now:**
  - Tariffs in 2025 squeezed hardware margin, and D-Tools reports average gross margin fell in 2025.
  - AI proposal tools (Crestron, Savant, D-Tools+Portal.io) make quoting faster but are blind to true labor, so garbage in, garbage out.
  - Agents make messy-export normalization cheap. It used to take an analyst weeks.
- **Founder edge:**
  - His pre-registration and holdout rigor from the strategy lab makes a benchmark credible.
  - The mentor can ask five CEOs to send exports.
  - $750 is a low-risk bet on an 18-year-old.
- **First 10 customers:**
  - Mon 10/26: draft the one-page offer and the data-rights agreement.
  - Tue (mentor call #2 is about 10/27): ask for 5 intros to firms of $3-25M.
  - Do the first 3 free in exchange for a case study and pooling rights, then sell 7 at $750.
  - Parallel: a free "10-job margin check" post in AVIXA Xchange, r/CommercialAV and NSCA groups, plus LinkedIn DMs to integrator ops managers.
  - About 6-8 hours a week.
- **Cost to first revenue:** about $600 (LLM spend, lawyer review of the data-rights template, domain).
- **Path to big:**
  - 200+ firms pooled, then sell (a) the live benchmark, (b) data licenses to manufacturers, distributors, lenders and PE roll-ups at $25-100k a year, (c) the same taxonomy for security, cabling, electrical and mechanical contractors ("RSMeans for actuals").
  - Honest bottom-up: assuming about 4,000 US integrators at $2M+ (assumption) times about $4k a year is $16M at 100% share, or about $3M at 20%.
  - Reaching $10M+ needs adjacent trades or data licensing.
- **Who does it today:**
  - NSCA/Commercial Integrator annual survey (margins only).
  - Job costing inside D-Tools, Zigaflow, XTEN-AV (own data only).
  - Consultants.
  - D-Tools is the real threat: it sits on the richest dataset and today publishes only an annual "year in review".
- **Kill risks:** Firms won't share data. Export formats are chaotic. D-Tools ships benchmarking.

---

### 2. Approval Packet, then the Device Trust Registry

- **One-liner:** Upload a BOM and get back the IT-approval packet an integrator currently assembles by hand across 30 manufacturer websites.
- **Customer / signs:** Project manager or sales engineer at an integrator selling to IT-controlled buyers (enterprise, higher-ed, healthcare, government). Later, product-security leads at device makers.
- **Who pays and budget:**
  - Integrator: $199 per packet or $349 a month for up to 15 packets (assumption). That is one to two days of PM time saved.
  - Later: manufacturers pay $3-10k a year to verify their profiles (assumption).
- **Problem:**
  - Trade press says port scanners flag AV gear, security teams ask the same recurring questions, and approval stalls.
  - TAA must be checked at the SKU level.
  - NDAA Section 889 attaches to the producing entity.
  - No tool does this for AV; sources describe a manual checklist.
- **Solution:** A 10-page, source-linked packet per BOM:
  - Ports, protocols and bandwidth table by device.
  - VLAN, multicast/IGMP, QoS and PoE requirements.
  - Insecure services to disable, TLS/SSH/802.1X/SNMPv3 support, firmware version, known CVEs, end-of-life dates.
  - Per-SKU trade status (TAA, NDAA 889, FCC covered list, Buy American) with a source link or "UNKNOWN, request attestation" plus an email template.
  - Pre-filled answers to the customer's security questionnaire.
  - It collates evidence and never certifies. The offeror makes the FAR 52.204-24 representation.
- **Why now:**
  - AV-over-IP and cloud-managed rooms put AV on corporate networks.
  - Tariffs and country-of-origin attention are up.
  - Agents can read 150 manufacturers' PDFs and keep them current.
- **Founder edge:** His multi-agent research pipelines are the product. The deliverable is a document, so he can ship in about 3 weeks. Early customers need only send a BOM, not financial data.
- **First 10 customers:**
  - Mon: build free sample packets for 5 common stacks (Q-SYS, Crestron NVX, Biamp, Shure, a Teams Rooms bar) and publish them. They double as SEO.
  - Email 30 integrators that serve universities and government with a packet built from a public BOM.
  - Sell the next 10 at $199.
  - Ask the mentor for 2 intros to integrators with higher-ed or government books.
- **Cost to first revenue:** about $400.
- **Path to big:**
  - Registry flywheel: free public profiles, then manufacturers claim and verify them, then integrators and IT cite the profile in RFP language.
  - Extend SKUs to cameras and access control, where NDAA 889 bites hardest, so the same packet serves security integrators.
  - License data to IoT/OT device-intelligence vendors.
  - Honest bottom-up: assume 3,000 AV plus 3,000 security integrators at 20% adoption and about $3k a year is $3.6M, plus 400 manufacturers at $6k is $2.4M, so about $6M. $10M+ needs the registry to become a procurement standard, which is a heroic step. Say so.
- **Who does it today:**
  - Nobody AV-specific found.
  - Manufacturers publish one-off sheets (e.g. Allen & Heath's dLive guide for IT managers).
  - Distributors answer TAA by SKU on request.
  - Thomson Reuters OneSource BOM analysis covers FTA rules of origin, not TAA/889.
  - Generic questionnaire tools (Loopio/Responsive/Conveyor, from general knowledge, not searched) answer about the vendor company, not the hardware.
- **Kill risks:** Stale or wrong data creates liability, so every line carries source and date and "unknown" beats guessing. Frequency per integrator may be too low. Manufacturers may publish their own.

---

### 3. Night Desk, then Fault Atlas

- **One-liner:** A private-label after-hours and Tier-1 service desk for integrators' managed-AV customers. Every ticket becomes a structured "fix card" in a cross-integrator knowledge base the techs can subscribe to.
- **Customer / signs:** Service manager at an integrator that sells service plans but cannot staff nights and weekends.
- **Who pays and budget:**
  - Integrator retainer of $1,000-2,500 a month or $20-35 a ticket (assumption).
  - The budget is service COGS, overtime, or lost renewals.
  - Later, Atlas seats at $49-99 per tech per month.
  - Later still, anonymized failure-rate analytics sold to manufacturers.
- **Problem:**
  - Trade sources say the best managed-services sellers stress a 24/7 team, and that service contracts are "forgotten until a client calls".
  - General MSP NOCs lack AV skills.
  - No cross-integrator fix database exists.
- **Solution:**
  - A private-label number and chat.
  - An agent takes room, symptom and photo, then runs fix cards ("camera not tracking: check...").
  - If unresolved, it hands the on-call tech a full diagnostic ticket.
  - No remote device access at first, which limits liability.
  - Student-staffed human fallback on nights and weekends.
  - Add a "Veteran Tech Vault": recorded interviews with retiring 55+ techs and programmers, turned into fix cards. The old Commercial Integrator survey said over 60% of the workforce was older than 50 (2019, dated).
- **Why now:** Integrators are pushing recurring revenue and cannot hire. Voice and chat agents are now good enough for triage. The end-user QR tools prove the demand but do not give integrators a private-label staffed service or a shared knowledge base.
- **Founder edge:** He builds agents and doc-ingestion pipelines. Gen Z peers staff the nights. The mentor knows which integrators sell service plans.
- **First 10 customers:**
  - Mentor intros to 2-3 pilots at $500 a month for 60 days.
  - Give Atlas free to 30 techs from AV forums and groups, in exchange for logging fixes, to seed the data.
  - About 6-8 hours a week plus student shifts.
- **Cost to first revenue:** about $3,000 (E&O and GL quote, phone and ticketing, LLM, small stipends).
- **Path to big:**
  - Assume 1,500 integrators with plans times 150 managed rooms times $10 per room per month is $27M.
  - Atlas: 25,000 techs at $50 is $15M.
  - A balance-sheet option: buy retiring integrators' recurring-service books with family capital.
  - Needs about 10% of integrators.
- **Who does it today:**
  - PSNI Global Alliance on Diversified's Pulse (a peer network).
  - General white-label NOCs: INOC, GMS Live Expert, Mission Control.
  - Vendor monitoring: Crestron XiO, Q-SYS Reflect, Liberty AV CXDetect.
  - End-user AI: Jetbot, AV Support AI.
  - No cross-integrator fix database found in two searches.
- **Kill risks:** Liability and SLA misses. Student reliability. General LLMs with uploaded manuals are the free substitute, so the moat is only the field-fix data.

---

### 4. Driver Mill: AI-built drivers, Q-SYS plugins and agent (MCP) endpoints, sold to device makers

- **One-liner:** Device makers pay to have their products supported across Q-SYS, Crestron, Control4, Savant, Home Assistant and AI agents. He does it in days, not months.
- **Customer / signs:** Product or partnerships manager at a mid-size maker of cameras, DSPs, displays, lighting, shades, locks or controllers.
- **Who pays and budget:**
  - The manufacturer's integration or partner-program budget. Chowmain says more than half its drivers are manufacturer-sponsored.
  - Price: $2,500-4,000 per platform build, $300-600 a month for firmware tracking and maintenance, and a $1,500 MCP add-on (all assumptions; incumbent prices are unpublished).
- **Problem:** Integrators will not specify a device without a driver. Each platform has its own SDK. Firmware changes break drivers. The incumbent shops are small.
- **Solution:**
  - A pipeline from protocol PDF or API doc to a structured command model, then a Q-SYS Lua plugin, Home Assistant integration, Control4/Crestron driver where a developer account exists, a test harness, docs and a changelog, and an MCP server.
  - Start with Q-SYS and Home Assistant, where tooling is free (Q-SYS Designer has an emulator).
  - The maker lends a unit or an emulator.
  - Use only official protocol docs. Do not reverse engineer.
- **Why now:** AI coding agents cut build time to days. KEF shipped certified Crestron drivers in October 2026, and Q-SYS and Crestron run active developer programs. CE Pro reports AI and MCP-style control layers appearing at CEDIA 2026 (Sonos), so device makers will be asked for "agent-ready" endpoints.
- **Founder edge:** AI-speed code shipping is the whole product. Weakness: no AV hardware or Crestron credentials, so pair with one freelance certified Crestron programmer for QA on a revenue share.
- **First 10 customers:**
  - Pick 3 popular devices with no Q-SYS plugin, using requests on the Q-SYS community.
  - Build free demo plugins in 2 weeks, post them, and email the product managers with a working link.
  - Ask the mentor for warm intros at 3-5 brands.
  - Offer $2,500 pilots.
- **Cost to first revenue:** about $1,500 (loaner hardware, dev accounts).
- **Path to big:**
  - Recurring maintenance and multi-platform bundles, then become the integration layer for commercial buildings, including agents.
  - Honest: Chowmain's 180+ manufacturer partners show the niche is real but small. $10M needs about 600 accounts at about $17k a year, which is a heroic share.
  - Venture scale only if it becomes the agent-integration layer for building devices.
- **Who does it today:** Chowmain, Control Concepts (Q-SYS Developer Partner), The Farm (Q-SYS plugin program), ControlWorks (Crestron driver services), the DriverCentral marketplace, manufacturers in-house.
- **Kill risks:** Platform owners build AI drivers themselves. Manufacturers move slowly. Unit economics fall apart if each build still needs hardware testing.

---

### 5. Closeout Engine, then Room Passport

- **One-liner:** Drop in the raw artifacts from a finished install and get the full handover pack and per-room guides. Each room then gets a live "passport" page the integrator can keep selling as recurring support.
- **Customer / signs:** Project manager or commissioning lead at an integrator.
- **Who pays and budget:**
  - $295-795 per project or $499 a month (assumption).
  - It replaces 10-30 hours of closeout labor.
  - Clients hold final payment until the pack is done.
- **Problem:** Zigaflow describes the stall after commissioning: as-builts, firmware log per device, IP schedule, DSP and control file archive, test certificates, warranties and user guides all have to be compiled by hand.
- **Solution:**
  - Inputs: BOM export, IP sheet, rack and label photos, file names, test results, warranty list.
  - Outputs:
    - handover binder PDF;
    - firmware and IP register;
    - warranty register with expiry reminders;
    - config-archive index;
    - per-room quick guide with a QR code;
    - training sign-off and acceptance forms.
  - Room Passport then keeps firmware, IP, files, warranties, tickets and who to call, and links to Fault Atlas support.
- **Why now:** More projects are being quoted by AI. RMR is the industry's strategic goal. Vision models can read labels and serials. Platform support clocks (such as the Windows 10 end of support on Oct 14, 2025 for Teams Rooms) drive refreshes, and the registry from idea 2 can feed refresh alerts.
- **Founder edge:** Document-generation pipelines, fast iteration.
- **First 10 customers:** Ask 5 integrators for their last closeout pack plus the raw folder. Build the pack free for 3, sell the next 7 at $295. Mentor intros. Share before and after examples on AVIXA Xchange.
- **Cost to first revenue:** about $500.
- **Path to big:**
  - Packs: assume 3,000 integrators times 40 projects times $400 is $48M, so 10% is about $4.8M.
  - Passport at $8 per room per month across 200k rooms is $19M (assumption).
  - Needs integrator distribution to carry the Passport.
- **Who does it today:**
  - Zigaflow (workflow checklists).
  - XTEN-AV (claims documentation across the lifecycle).
  - D-Tools service management plus the Portal.io AI roadmap.
  - Jetbuilt.
  - PlanIt AV (asset and refresh planning for owners).
  - I found none that auto-builds the pack from raw field artifacts, but XTEN-AV's marketing claims overlap, so verify before building.
- **Kill risks:** Crowded neighbors. D-Tools could add it. Photo and label capture quality varies by tech.

---

### 6. Dealer Margin Desk: supplier price-protection, rebate and RMA recovery for integrators

- **One-liner:** Contingency recovery of money integrators are owed by distributors and manufacturers: project-registration pricing not honored, unclaimed tier rebates, missed RMA credits and freight.
- **Customer / signs:** Owner or controller of an integrator with $3-30M revenue.
- **Who pays and budget:** 20-25% of dollars recovered (assumption). Zero up front.
- **Problem:**
  - Manufacturer project registrations are price-protected quotes tied to one distributor and one integrator, and they need the project number on every PO (Arecont policy example).
  - Quarterly rebate tiers of 4-9% exist (WAVE example).
  - A D-Tools/Stat AV article says most integrators miss savings because staff are stretched.
- **Solution:** Connect QuickBooks or Bill.com AP and D-Tools POs. Agents match every invoice line to the quote, registration, special price and rebate terms. They then file credits, claim rebates and chase RMA credit memos. He sends a monthly "found money" statement. His freight-audit engine already does the invoice parsing.
- **Why now:** 2025-26 tariff-driven price changes made invoice prices volatile, and AI now reads PDF invoices cheaply.
- **Founder edge:** The freight-audit service is already built and uses the same contingency model.
- **First 10 customers:** Run a 20-invoice look-back for 3 integrators before building anything, to measure the real leakage rate. Then offer a free 30-day look-back at 20%. Mentor intros plus the same outreach as idea 1.
- **Cost to first revenue:** about $1,000 (contract review).
- **Path to big:**
  - Honest math: a $8M integrator with about $4.5M of equipment spend and 0.5-1.5% recoverable is $22-68k a year, or $4-14k of fees. 2,000 integrators at 10% is about $1-3M.
  - $10M+ only if it extends to security, electrical and HVAC contractors.
  - It overlaps the sibling contingency lens.
- **Who does it today:**
  - Field Materials (AI invoice-to-PO matching for contractors, claims up to 10% savings, aimed at GC and mechanical trades).
  - VoltPro for electrical.
  - AP automation tools.
  - Enterprise recovery auditors.
  - None AV-specific found.
- **Kill risks:** Leakage rate is unproven. Some rebate programs bar third-party claim filers. Field Materials could add AV.

---

### 7. Bid Check: a buyer-side AV proposal checker for churches, schools and small venues

- **One-liner:** Upload an AV proposal and get a missing-scope list, price and labor sanity check, and the questions to ask before signing.
- **Customer / signs:** Building committee, treasurer or facilities lead at a church, private school, small municipality or family-owned venue evaluating a $50k-$500k AV proposal.
- **Who pays and budget:** $149 per check, $499 to level three bids, optional $250 human review by a veteran AV consultant (assumptions). Consultant fees are the benchmark. A search summary of MediaMerge says the average house of worship invests $275k-$720k in AVL (unverified). The US has about 356,700 congregations.
- **Problem:** Church Sound warns against low bids and hidden change orders, and says bids are rarely apples to apples. Independent consultants are expensive.
- **Solution:** An agent itemizes the proposal, flags missing scope (network, cabling, programming, commissioning, training, warranty, support), compares line prices and labor hours to ranges (using idea 1's data as it grows), and generates questions and a side-by-side leveling table.
- **Why now:** Home-project quote checkers exist (QuoteCheck, Ripoff.pro, BidCompareAI), but none are AV-specific, and the AV AI wave is all integrator-side.
- **Founder edge:** Speed, and the family and school network for the first checks.
- **Conflict flag:** It critiques integrators, which is his mentor's industry. Position it as a "scope completeness check" and offer a white-label version integrators can use to pre-qualify.
- **First 10 customers:** Offer free checks to 20 churches and schools through church-tech communities and family contacts. Convert 10 at $149. Needs 5 sample proposals from the mentor or friendly integrators first.
- **Cost to first revenue:** about $400.
- **Path to big:** Honest ceiling is $3-10M. Needs multiple buyer segments (schools, hospitality, municipal), the Index data as the moat, and later other installed-tech categories (security, solar, HVAC), where generic competitors already exist.
- **Who does it today:** Generic quote checkers (QuoteCheck, Ripoff.pro, EstimateHawk, BidCompareAI). Independent AV and acoustic consultants. Jetbuilt launched bid processing for integrators. None AV-specific on the buyer side found.

---

### 8. Rack Academy: a Gen Z to AV technician funnel with employer-paid placement

- **One-liner:** Recruit 18-24 year olds through short-form video, train them in cabling, networking and AV basics over 4-6 evenings-and-weekends weeks, and place them with integrators for a fee.
- **Customer / signs:** Owner or HR lead at an integrator or low-voltage contractor with open installer roles.
- **Who pays and budget:** Employer placement fee, assumed 10-15% of first-year pay (about $6-9k, unverified), or sponsored tuition. Budget is the recruiting spend they already can't fill.
- **Problem:** 72% of integrators call talent a top concern and installers are hardest to fill (NSCA 2024 via Field Nation). A Commercial Integrator survey says cable pulling (64.1%) and networking (63.1%) are critical skills. Existing options are freelance marketplaces (AV Junction, Field Nation), not a pipeline.
- **Solution:** Day-in-the-life videos shot with integrators, then a cohort program built on free vendor training and CTS-prep material with a veteran instructor, and a 90-day retention guarantee. Candidates must be 18 or older, with no income promises. Check state employment-agency licensing.
- **Why now:** The trades-as-career trend among Gen Z, a retiring workforce, and a 2024 NSCA survey showing hiring pain.
- **Founder edge:** Gen Z distribution is the one edge no incumbent has.
- **First 10 customers:** Mon: collect open reqs from the mentor's contacts and 5 integrators. Post the first videos. Run cohort 1 with 10 candidates. Aim for 3 placements.
- **Cost to first revenue:** about $3,000.
- **Path to big:** Honest math: 1,000 hires times $7k is $7M and 3,000 is $21M, which is a heroic share. Margins are staffing margins. It needs to become an employer-paid training platform for all low-voltage and electrical trades. It is ops-heavy for 10-15 hours a week, so it ranks last.
- **Who does it today:** AV Junction and Field Nation (freelance labor), AVTek Staffing (W-2 temp staffing), AVIXA job boards and certifications. No Gen Z-funnel pipeline found.
- **Kill risks:** Training quality, state licensing, and the ops load.

---

## Ranking logic

1. **Margin Autopsy:** the cleanest ROI story (found margin), the best use of the mentor's door-opening, a real data-asset path, no sibling competitor found, and a $750 first sale in weeks.
2. **Approval Packet:** the lowest trust barrier (a BOM is not sensitive), self-serve, and the clearest verified gap. Its volume per integrator is unproven.
3. **Night Desk / Atlas:** the strongest moat if it works (a data network plus a possible balance-sheet step), but the most operations and liability.
4. **Driver Mill:** a proven manufacturer-paid niche where AI cost is the wedge. It is hardware-dependent and has a small ceiling.
5. **Closeout Engine:** a real pain, but neighbors already claim documentation.
6. **Dealer Margin Desk:** the leakage rate is unproven and it overlaps another lens.
7. **Bid Check:** self-serve and non-obvious, but small and in conflict with the mentor's industry.
8. **Rack Academy:** the one use of Gen Z reach, but ops-heavy and low-margin.

## Cut during research (so later rounds do not redo them)

- **AI proposals, BOMs, designs for integrators:** XTEN-AV, D-Tools+Portal.io, Specifi, Crestron Configure Pro AI, Savant Blueprint AI.
- **QR-code AI room support for end users:** AV Support AI, Jetbuilt Jetbot, IVCi.
- **Sports-bar TV control:** Spectrum TV Control Pro (July 2026), DirecTV tablet app, WolfPack/HDTV Supply, GameMaster, DAZN autoplay.
- **Family-office capital-call and K-1 tools:** Asora, Altexchange, K1x. Priced from $10 per investment per month to $900 a month.
- **ETA and search-fund deal sourcing:** Grata, Inven, SourceScrub.
- **IEEPA tariff-refund help:** CBP's CAPE portal has been paying since April 2026, with many brokers and recovery firms. Covered by the sibling contingency lens.
- **Small-tenant CAM audit:** exists (Tango Analytics, CBIZ, Marks Paneth) and is covered by the sibling lens. It would also conflict with a family that may own commercial property.
- **Permit-based AV lead gen:** Shovels (about $599 a month, unverified) and Dodge already serve it.
- **Used AV gear marketplace:** Gearsupply and 10K Used Gear.
- **AV freelance marketplace:** AV Junction and Field Nation.
- **Church live-sound AI coach:** plausible, but outside the lens, and the practitioner evidence says live mixing needs a human. Not validated.
- **Legacy control-code migration:** niche, hardware-dependent, no evidence of a forcing event.

## Sources

- XTEN-AV: https://xtenav.com/blog/xten-av-launches-the-most-advanced-proposal-tool-x-doc/ and https://www.getapp.com/sales-software/a/xten-av/
- CE Pro, AI at CEDIA 2026: https://www.cepro.com/news/ai-on-the-cedia-expo-floor-what-the-smart-home-industry-is-actually-building/628680/
- D-Tools Cloud pricing: https://www.d-tools.com/cloud-pricing
- Zigaflow, closeout and margin:
  - https://zigaflow.com/industry-resources/project-handover-documentation-om-discipline-av-systems-integrators
  - https://www.zigaflow.com/workflows/av-system-integration-commissioning-and-handover
  - https://zigaflow.com/insights/av-integrators-site-changes-not-billed
  - https://zigaflow.com/insights/where-av-system-integrators-lose-margin
- XTEN-AV margin article: https://xtenav.com/av-margin-erosion-project-proposals/
- AVIXA forecast: https://www.avixa.org/av-topics/articles/new-revenue-forecasts-from-avixa-reveal-5-year-positive-outlook
- CEDIA integrator count: https://www.cepro.com/business-support/cedia-market-research-analysis-20k-integrators-29-billion-industry/
- AV Support AI: https://chipp.ai/avsupport. Jetbot: https://www.ravepubs.com/jetbuilt-jetbot-ai-support-infocomm-2025
- Managed services pain: https://avnetwork.com/news/making-the-case-for-managed-services
- PSNI: https://www.advanced-television.com/2024/01/09/psni-global-alliance-to-launch-worldwide-service-and-support-at-ise/. INOC: https://www.inoc.com/partner/managed-noc-support
- AV network security: https://www.avnetwork.com/features/playing-it-safe-the-state-of-networked-av-security and https://www.installation-international.com/technology/network-security-fear-of-the-unknown
- TAA / NDAA in AV: https://creationnetworks.net/blogs/audio-visual-technology-news/taa-compliance-in-av-procurement-what-government-buyers-need-to-know and https://xchange.avixa.org/posts/be-aware-of-government-rules-for-commercial-audio-solutions
- Drivers: https://cediaexpo.com/?p=159562 (Chowmain), https://www.ravepubs.com/control-concepts-joins-q-sys-developer-partner-program/, https://www.avnation.tv/2023/11/29/the-farm-launches-comprehensive-program-for-q-sys-plugin-development/, https://www.controlworks.com/crestron-drivers/, https://www.cepro.com/news/kef-announces-official-control-drivers-for-crestron-home/628224/
- Field Materials: https://smacna.org/stay-informed/news-and-publications/products-and-services-update/november-2023/field-materials-streamlines-material-purchasing-with-ai
- Project registration: https://arecontvision.com/project-registration-policy. Rebate example: https://www.cepro.com/news/wave_electronics_adds_savant_luxul_to_9_3_kickback_program/
- Talent: https://www.fieldtechnologiesonline.com/doc/field-nation-and-herman-integration-services-partner-to-address-the-av-labor-crisis-0001 and https://www.avnetwork.com/systems-contractor-news/av-junction-launches-global-av-freelance-platform
- Churches and bids: https://reachrightstudios.com/blog/how-many-churches-in-america/ and https://customdigital.livesoundint.com/march-2019/page-30
- Quote checkers: https://www.techtic.com/our-work/quotecheck-ai-quote-analysis-vendor-marketplace/ and https://peerpush.com/p/ripoffpro. Jetbuilt bid processing: https://www.cepro.com/productbriefs/jetbuilt-announces-bid-processing/
- Cuts: https://x1wealth.com/compare/family-office-software, https://www.inven.ai/workflows/deal-sourcing, https://www.sportsvideo.org/2026/07/17/spectrum-business-launches-spectrum-tv-control-pro-for-multi-screen-venue-management/, https://www.orrick.com/en/Insights/2026/03/CBP-Outlines-IEEPA-Tariff-Refund-Process-that-May-Be-Operational-as-Soon-as-in-45-Days, https://sacra.com/c/shovels/, https://gearsupply.com/about-us
