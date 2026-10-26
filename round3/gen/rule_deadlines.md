# Round 3 generator: rule changes, deadlines and platform-policy shifts (lens: rule_deadlines)

Written 2026-10-25. About 40 searches and fetches. Every dated fact below came from a search result or a fetched page in this run; anything from memory is marked "unverified".

## What the research said (read first)

1. **The federal rulebook mostly stalled; enforcement moved to three other places.** FTC click-to-cancel was vacated (8th Cir., July 2025) and was reportedly reopened for new rulemaking in March 2026 (sources differ; nothing has replaced it). The action shifted to (a) a growing state patchwork, (b) FTC priority sweeps ordered from the top (Made in USA executive order, review-rule warning letters), and (c) private plaintiffs who find targets with automated website scanners (ADA, CIPA wiretap, auto-renewal, Made in USA class actions). Small online sellers are the exposed group: they have one checkout page, no counsel, and a cheap fix.
2. **The biggest "rule" windfall of the year is mostly used up.** IEEPA tariff refunds: CBP said on Sept 17, 2026 that about $122B of roughly $134.7B accepted had been sent to Treasury for payment, about $1.3B was stuck waiting on ACH details, and the contested remainder is finally liquidated entries (government argues it can keep $30B+). Importer-side filing is crowded and fee-compressed. What is left is downstream: who gets a share of money that importers now hold (idea 3).
3. **Several hot-looking deadlines were already dead or crowded.** SB 343 recyclable labels (enforcement enjoined July 14, 2026), NY LLC Transparency Act (foreign LLCs only), CPSC eFiling (in force July 8, 2026, at least ten vendors at $39 to $3,000), hemp THC ban (moved to Dec 11, 2026; wrong industry for an 18-year-old applying to colleges), ADA Title II (government buyer; dates pushed to Apr 26, 2027 and Apr 26, 2028).
4. **Convergence with other lens files** (so the judge does not double count): bettor taxes (genz_life #3 Wager Ledger, pool_wedges #2 Phantom Income), renter deposits (genz_life #8, contingency_audit #1), importer-side IEEPA refunds (contingency_audit #4, demand_signals #6), integrator supplier-credit recovery (mentor_network #6). I found the same bettor-tax facts independently (90% loss cap from tax year 2026, W-2G threshold up to $2,000, no dedicated tracker found, Kalshi roughly 2M monthly users, 61% of prediction-market traders under 35) and did not re-list it. AI accessibility remediation was dropped by demand_signals and my search agrees it is crowded.

### Dated facts used in the ideas
- NYC DCWP cancellation rule effective Oct 1, 2026; civil penalties $525, $1,050, $3,500; restitution of charges after a first cancellation attempt. Louisiana Click to Cancel Act effective Jan 1, 2027; up to $500 per violation, 30-day cure after AG notice; businesses under 50 employees or $5M revenue broadly exempt (the statute conflicts with itself). Colorado one-step online cancel from Feb 2026 (secondary source). California AB 2863 from July 1, 2025. Virginia's law now covers small-business buyers. Minnesota limits save offers. (Kelley Drye, ZwillGen, Olshan.)
- Executive Order 14392 (Mar 13, 2026) tells the FTC to prioritize false Made in USA claims and to consider a rule making online marketplaces verify third-party sellers' country-of-origin claims. April 2026 FTC settlements: TouchTunes $625,000; Americana Liberty and Three Nations $167,743; Oak Street Manufacturing $75,000. July 6, 2026: warning letters to seven companies, including over hashtags like #madeinUSA. Civil penalty up to $53,088 per violation. California allows a "Made in USA" claim only if foreign parts are 5% or less of wholesale value (10% in narrow cases); a 2025 jury awarded $2.36M in the Bigelow tea class action. (Morgan Lewis, Wiley, Kelley Drye, Mondaq.)
- FTC consumer review rule: 10 warning letters on Dec 22, 2025, five days to confirm fixes, up to $53,088 per violation.
- New York GBL 396-b (synthetic performers in ads) in force since June 9, 2026; $1,000 first violation, $5,000 after; no private right of action; reaches ads shown to New York audiences even from out-of-state advertisers; carve-outs for audio-only, translation-only, and some film/TV/game promos. (Cooley, Manatt, Mondaq.)
- California AB 1043 (OS and app-store age signals) effective Jan 1, 2027, $2,500 or $7,500 per affected child. Android developer verification starts Sept 30, 2026 in Brazil, Indonesia, Singapore and Thailand and goes global in 2027. California SB 243 (companion chatbots) since Jan 1, 2026, annual reports to the Office of Suicide Prevention from July 1, 2027, private right of action. New York AI companion law since Nov 5, 2025, up to $15,000 a day.
- Amazon bundling: from Jan 11, 2027 most seller-built bundles under one ASIN must be packed by the brand unless the seller holds a letter of authorization from every brand inside (secondary sources only; Amazon's own post not retrieved).
- Apple v. Epic: US external payment links carry 0% commission today; the Ninth Circuit (Dec 2025) allowed a commission tied to Apple's "necessary costs" and remanded; the Supreme Court took Apple's appeal for the term starting Oct 2026; Apple proposed 15% (5% for Small Business Program, 10% for some partner programs) in Aug 2026; Epic rejected it.
- Litigation volume: ADA website suits about 2,045 in H1 2026 (EcomBack, Shopify most targeted); UsableNet projects 6,176 digital accessibility suits for 2026. CIPA website-tracking suits estimated at roughly 4,000 cumulative (vendor estimate); SB 690 was amended July 1, 2026 and no longer removes private wiretap claims under section 631. State privacy regulators fined mid-size retailers for broken opt-outs (Todd Snyder $345,178; Tractor Supply $1.35M).

---

## The 8 ideas, ranked best first

### 1. RenewalShield: a mystery-shopper agent that signs up, tries to cancel, and grades a small subscription seller against every state's auto-renewal law

**One-liner:** An AI browser agent that runs a real test purchase and a real cancellation on your store, tells you which state laws you fail, hands you the fix, and keeps dated evidence, before a plaintiff's bot or a demand letter does it for you.

- **Customer:** owners and ops leads of small online subscription businesses (about $100k to $20M revenue): Shopify and Recharge or Skio brands (coffee, supplements, pet, beauty, boxes), app and SaaS subscriptions, paid communities and newsletters, memberships with online signup. Anyone selling to California, New York City, Colorado, Virginia, Minnesota, Louisiana residents.
- **Who pays and budget:** the owner; $149 one-time "fix sprint" (often bought right after a demand letter) or $79 to $199 a month for weekly re-tests and an evidence vault. Budget line is legal and risk spend, which for a letter recipient is a settlement plus lawyer fees; NYC penalties alone are $525 to $3,500 per violation.
- **Problem:** the federal rule is dead, so owners think nothing applies, while a fast-growing state patchwork does (NYC from Oct 1, 2026; Louisiana from Jan 1, 2027; Colorado, California consent records, Virginia's coverage of small-business buyers, Minnesota's save-offer limits). Plaintiffs' firms attack checkout pages with weak renewal disclosure next to the pay button, no retainable acknowledgment, and cancellation harder than signup. Static scanners read policies; nobody tests the cancel path.
- **Solution:** a computer-use agent buys with a test card, logs disclosure placement, consent mechanics, the acknowledgment email, reminder emails, then tries every cancel route and counts steps and friction. A lawyer-reviewed state rule matrix grades it. Output: ranked fixes with copy-paste checkout language and Shopify/Stripe/Recharge settings, weekly re-test, a time-stamped consent-record vault (California wants three years), and a "cure statement" kit for responding to demand letters. A flat-fee attorney reviews the matrix quarterly.
- **Why now:** NYC went live 25 days ago, Louisiana is 67 days out, the FTC reopened rulemaking in March 2026, and Virginia and Colorado widened coverage. Caveats: Louisiana exempts small sellers (under 50 employees or $5M), a federal rule or preemption would shrink the state matrix (the agent generalizes, the matrix does not), and I could not confirm NYC reaches out-of-state online sellers.
- **Founder edge:** he builds multi-agent browser pipelines in days and the scanner is the product; the prospect's own checkout is the demo, so the product speaks for itself; Gen Z DTC founders and creators running paid communities are his peers; Shopify App Store is a self-serve channel.
- **First 10 customers:** (1) search r/shopify, r/ecommerce, Shopify Community and X for "auto-renewal demand letter" posts and DM a free scan of the poster's own checkout; (2) free scans for 50 subscription brands found from public checkouts, results sent as a teardown; (3) three Shopify agencies on a referral split; (4) classmates and friends running Whop or Skool communities; (5) publish "I tested 100 subscription checkouts against NYC's rule" as the lead magnet.
- **Cost to first revenue:** about $3,500 (attorney review of the matrix $2,000 to $2,500, hosting and model costs, domain).
- **Path to big:** auto-renewal is the wedge; the product is "what the plaintiff's bot sees on your site." Add ADA, session-replay and pixel wiretap (CIPA), drip pricing, the review rule, SMS consent. Needs about 10,000 paying merchants at $99 a month for $12M a year (my assumption). Channels: Shopify App Store, agencies, and later cyber or E&O insurers (an insurer channel is plausible but unverified).
- **Who does it today:** StoreHQ Compliance Scanner (Shopify app, launched July 2026, zero reviews, static and read-only), Subnotice (UK and EU reminders, policy score, WooCommerce and Shopify), Yotpo Subscriptions (billing app with an ARL guide), Churnkey (cancel flows plus a state-law guide), privacy-only tools (Termly, Iubenda, Cookiebot), law-firm guidance (ZwillGen, Traverse Legal, Kelley Drye, Olshan). I found no tool that live-tests the cancel path with an agent or stores evidence.
- **Kill test:** under 15 paid sprints by Jan 31, or StoreHQ adds live cancel testing.

---

### 2. Origin Audit: the Made-in-USA claim auditor and "origin passport" network for small brands

**One-liner:** Crawl every place a brand says "Made in USA" (site, Amazon, Etsy, packaging, hashtags), test it against the FTC "all or virtually all" standard and California's 5% rule using the real bill of materials, rewrite unsafe claims into safe ones, and build the evidence file a retailer, marketplace or FTC letter will ask for.

- **Customer:** small and mid-size consumer brands (about $500k to $50M) that use American-origin claims: tools, apparel, flags and patriotic merch (America's 250th was July 4, 2026), pet, food, home goods, supplements; plus real US makers who need proof for retailers.
- **Who pays and budget:** founder or head of ops; $99 audit, $59 to $149 a month for monitoring and the supplier-evidence vault. Budget line is legal/risk and retailer onboarding; exposure is up to $53,088 per violation at the FTC and class actions in California.
- **Problem:** the March 2026 executive order made Made in USA a stated FTC priority and told it to consider forcing marketplaces to verify sellers' origin claims; three settlements ($75,000 to $625,000) and seven warning letters (even over hashtags) followed. The legal test is component-level, final assembly alone is not enough, and California's statute is stricter in places. Brands do not know their own bill of materials by origin, and have claims scattered across channels.
- **Solution:** (a) claim crawler across the brand's Shopify, Amazon, Etsy, Instagram/TikTok captions and hashtags; (b) BOM and supplier intake (upload spreadsheets and POs; an agent sends supplier attestation forms and parses certificates of origin); (c) scoring against the FTC standard and California's 5% test with cost-share by origin; (d) qualified-claim rewrites ("Assembled in USA with global materials", "Designed in USA") pushed back to the listing; (e) a retailer/marketplace verification pack. Suppliers fill one reusable "origin passport" that many brands can reuse, which is the network effect.
- **Why now:** EO 14392, April 2026 settlements, July 6 warning letters, a 2025 $2.36M jury verdict in California, and a possible marketplace-verification rule. Caveat: only three public settlements and seven letters so far, so many brands will wait for a letter; sell to the ones a retailer already asked.
- **Founder edge:** the same multi-agent research and document-parsing stack as his detector and freight-audit work; honest-numbers brand; the family and mentor network likely includes US manufacturers who want proof for retailers (assumption); Gen Z merch and Amazon FBA sellers are reachable.
- **First 10 customers:** (1) 200 public listings that say "Made in USA", sorted by risk; outreach is a friendly free claim check, not an accusation; (2) legitimate US makers from family and mentor contacts, sold the "retailer-ready proof pack"; (3) America250 merch sellers; (4) r/FulfillmentByAmazon and r/Etsy; (5) two e-commerce attorneys as referral partners (flat referral only, no fee sharing).
- **Cost to first revenue:** about $2,000 (attorney review of the scoring rubric, hosting, models).
- **Path to big:** brands pay for claims and evidence now; the asset is a supplier-attested origin graph that marketplaces, retailers and importers need (origin also drives tariffs and transshipment penalties). Needs about 14,000 brands at $59 a month for $10M a year (my assumption on how many brands make origin claims; not sourced). Marketplace verification contracts would be a second revenue line but are enterprise sales.
- **Who does it today:** OriginProof (Shopify app, $29 a month, a documentation locker, not an independent verifier), Made in USA Certified (audit-based seal, price not found), Made in USA Inc. (March 2026 "AI-compatible" verification framework, one press release), USA Made Finder (directory), spreadsheets and law-firm checklists. The FTC has already acted against a certifier that did not actually verify products (Made in the USA Brand, LLC; older case), so independence matters.
- **Kill test:** under 20 paid audits by Jan 31, or a marketplace announces its own origin-verification flow.

---

### 3. TariffBack: buyer-side recovery of tariff surcharges (plus a pass-back ledger for sellers)

**One-liner:** A contingency audit that finds the "tariff surcharge" lines and tariff-timed price jumps small businesses paid their suppliers, and asks the suppliers that just received IEEPA refunds to share them.

- **Customer:** 5 to 200 person businesses that buy goods through distributors or direct from importers and saw itemized tariff surcharges in 2025 to 2026: pro-AV integrators and dealers, IT resellers, contractors, equipment dealers, small manufacturers, retailers. Start with pro-AV, where itemized surcharges are documented.
- **Who pays and budget:** owner or controller; $495 flat diagnostic credited against a 20% to 25% success fee on credits or cash recovered. Budget line: none needed (found money).
- **Problem:** refunds go only to the importer of record. A downstream buyer cannot file, importers are not obliged to share absent a contract clause, and indirect-purchaser antitrust theories face real hurdles (Bloomberg Government). Law-firm guidance sorts claims into three tiers: explicit surcharge plus adjustment clause (strongest), a separate invoice line with no clause (middle), an embedded price increase (weakest). Small buyers do not know which tier each vendor sits in or whether the vendor was the importer.
- **Solution:** connect QuickBooks, Xero or Bill.com or drop in invoice PDFs; reuse the freight-audit invoice extractor to pull surcharge lines and detect tariff-timed SKU price jumps; classify each vendor into the three tiers; check importer-of-record status; produce a plain business refund-sharing request the client signs (no legal advice); track replies and book credit memos; hand contested strong claims to a separate contingency litigator with no fee splitting. Second product on the same data: a pass-back ledger for Shopify brands and distributors that took refunds, reconciling surcharge orders and issuing credits with an audit trail (no tool found).
- **Why now:** Supreme Court ruled 6-3 against IEEPA tariffs (Feb 2026); the CIT ordered universal refunds; about $122B was queued for payment by Sept 17, so importers hold cash now; consumer class actions are pending against Costco, FedEx and IKEA; carriers and some brands (Dame, Amazon in limited cases) are passing refunds back. Caveats: the Federal Circuit appeal is open, many vendors owe nothing, and embedded price increases are weak claims. This is a 12 to 24 month window.
- **Founder edge:** the freight-audit engine, flat-diagnostic plus contingency contract, and shipper prospect list already exist (shippers also buy goods); mentor's AV-integration network is the densest cluster of tariff-surcharged hardware buyers. Crestron billed a 5% then 4% invoice surcharge from May 1, 2025 until its removal on May 29, 2026 (replaced by a 5% to 15% price rise), and Kramer billed 15% from May 9 to July 1, 2025.
- **First 10 customers:** (1) mentor introductions to five AV integrators or dealers, free 10-minute scan of May 2025 to May 2026 Crestron, Kramer and Epson invoices; (2) family and investor-network owners of contractors, distributors, dealerships; (3) freight-audit prospects get the same intake; (4) screen for invoices with itemized lines and vendor notices that call the surcharge temporary; charge $495 only after the scan shows more than $5,000 at stake.
- **Cost to first revenue:** about $2,500 (attorney review of the engagement letter and request templates, domain, models).
- **Path to big:** the tariff window is a wedge, not the company. My assumption, not sourced: 100k small buyers with $5k+ of itemized surcharges x $15k average x 35% recovered x 22% fee is about $115M of fees if all were reached; 3% to 5% share is $4M to $6M. The real company is an SMB recovery-audit platform (freight accessorials already built, vendor price versus contract leakage, duplicate payments, missed rebates): 10,000 clients x $12k average recovery x 25% is $30M.
- **Who does it today:** importer-side refund filers (Tariff Recovery Group, FreightRight, TariffRefundHQ, 1st Capital Financial, Home Products Insider's Tariff Recovery Team; contingency typically 15% to 30%), carriers refunding customers (UPS, FedEx, DHL; brokerage fees excluded), class-action firms, law-firm advisories (Baker Donelson, Jones Walker). The contingency lens notes One Eagle Advisory handles downstream buyers; my searches did not surface it. I found no vendor auditing small buyers' invoices.
- **Risk to check first:** some states license collection agencies even for commercial claims; stay a client-led negotiation with an audit fee. **Kill test:** under 3 vendor credits secured from the first 25 scans by Jan 31.

---

### 4. Link-Out Lab: a performance-priced app-to-web checkout migration for mid-size consumer apps

**One-liner:** Move an app's subscription purchases to a web checkout while Apple's US link-out commission is 0%, build and test the paywall funnel, and take 10% to 15% of the verified fee savings for a year.

- **Customer:** indie and mid-size subscription app developers earning about $30k to $500k a month through the App Store, especially annual-plan apps (fitness, language, journaling, photo, AI apps), many run by Gen Z founders.
- **Who pays and budget:** the founder; no upfront fee, 12% of savings (assumption). Budget line: the 15% to 30% Apple fee they already pay.
- **Problem:** since April 2025 US apps may link to web payments with no commission; Apple is fighting for a fee, the Ninth Circuit said a cost-based commission is allowed on remand, the Supreme Court took the case this term, and Apple proposed 5%, 10% or 15%. Web checkout saves fees (Stripe is about 2.9% + $0.30) but conversion can fall; results vary from large gains to double-digit losses, so most small teams neither try it nor test it well.
- **Solution:** audit app revenue mix, then build and A/B test the web paywall funnel (Stripe or Paddle, entitlement sync, deep-link return, refund and chargeback handling), measure net proceeds against a holdout, bill a share of the proven savings only. Re-price automatically if the commission is set.
- **Why now:** the 0% window is open and could be closed or priced within the term; even at Apple's 15% proposal the Small Business Program rate drops to 5%, so savings persist for small developers, but they shrink.
- **Founder edge:** he ships deployed web apps with accounts and payments quickly, knows indie developer culture, and AI coding agents make a funnel a days-long build.
- **First 10 customers:** indie developers who publish revenue (Indie Hackers, X, r/iOSProgramming); free "web checkout savings estimate" from their public MRR; pick annual-plan apps over weekly-plan apps (a case study showed a weekly-subscription app lost money switching).
- **Cost to first revenue:** about $1,000 (Stripe and Paddle test accounts, hosting).
- **Path to big:** (my assumption) 300 apps x $150k a month web-eligible revenue x about 20% net savings x 12% fee is about $13M a year. Upside if it becomes the default "post-IAP" growth layer; downside if Apple wins a high fee or the vendors below automate migration to zero.
- **Who does it today:** RevenueCat Web Billing, Superwall (web checkout; it already automates RevenueCat-to-Superwall migrations with a coding agent, vendor claim), Adapty, Paddle, Stripe, Dodo Payments and others. Crowded and VC-funded; the difference is performance pricing and conversion engineering rather than another SDK.
- **Kill test:** under 5 signed apps and one verified net-proceeds lift by Jan 31, or an adverse remand ruling that sets a high rate.

---

### 5. SynthLabel: pre-flight and evidence log for ads with AI-generated people

**One-liner:** Scan ad creatives for "synthetic performers", add the conspicuous disclosure New York requires where it applies, and keep a time-stamped record of what the advertiser knew and when.

- **Customer:** DTC brands, performance agencies and UGC-ad creators running AI-avatar ads (HeyGen, Arcads, Topview-style tools) to US audiences.
- **Who pays and budget:** brand or agency ops; $49 to $149 a month per brand, $499 for an agency. Penalties are modest ($1,000, then $5,000 per violation) with no private right of action, so budget comes from risk avoidance and agency client pressure, not fear of lawsuits.
- **Problem:** since June 9, 2026 New York GBL 396-b requires a conspicuous disclosure when an advertiser or agency has actual knowledge that an ad shows a synthetic performer, even if the advertiser is outside New York; the statute does not say what the label must look like and leaves AI-enhanced real people unclear. Platform labels and the IAB's August 2026 framework differ from the statute.
- **Solution:** vision model flags synthetic people in uploaded creative and in a brand's live ad library; stamps a compliant label at export or flags non-compliant placements; geo-aware rules (New York now, other states and the EU later); evidence log of vendor, tool and approval for each asset.
- **Why now:** law in force 4 months, nothing public on enforcement yet, IAB framework out in August, AI-UGC ad volume is exploding.
- **Founder edge:** his AI-text detector work shows he can build and honestly benchmark detectors; AI media tools are already on his machine; Gen Z AI-UGC creators are his network.
- **First 10 customers:** AI-UGC creators on X and TikTok, five DTC brands and two agencies reached through them; $49 library audit.
- **Cost to first revenue:** about $1,500 (attorney read of the rules, vision model costs).
- **Path to big:** (my assumption) 20k brands and agencies x $79 a month is $19M, if more states copy New York and platforms do not absorb the function. Honest ceiling is lower than ideas 1 and 2.
- **Who does it today:** Luthor (compliance platform that routes synthetic-performer risk to reviewers and ties evidence to campaigns), Hightouch Ad Studio (auto-labels AI-person ads it generates), law-firm alerts. I found no tool that detects synthetic people in existing creative at scale.
- **Kill test:** under 10 paying brands by Feb 15, or an enforcement-free first year makes brands ignore the law.

---

### 6. AppComply: age-signal, AI-disclosure and crisis-protocol layer for consumer apps and AI companions

**One-liner:** A drop-in SDK and dashboard that makes a small consumer app comply with the Jan 1, 2027 California age-signal law and the state AI-chatbot laws, and exports the audit trail regulators will ask for.

- **Customer:** seed-stage and indie teams building companion, coach, journaling, tutoring or character apps, and any consumer app with California users.
- **Who pays and budget:** founder or CTO; $149 to $499 a month. Exposure: California AB 1043 penalties $2,500 or $7,500 per affected child; New York up to $15,000 a day; California SB 243 allows private suits.
- **Problem:** California AB 1043 starts Jan 1, 2027 (apps must act on age brackets from Apple's Declared Age Range and Google's Play age signals); SB 243 and New York require AI disclosure cadence (New York: daily and every three hours), crisis detection with referral, break reminders for minors, and from July 1, 2027 annual reports. Google's Android developer verification goes global in 2027. Eleven states are listed as having chatbot laws (secondary source). Small teams have no compliance staff.
- **Solution:** SDK for iOS, Android, web: age-bracket intake and gating, disclosure scheduler, crisis classifier with 988 handoff and logging, state policy matrix, red-team test suite, one-click audit export; free "gap report" to start. The product protects minors; nothing here targets them.
- **Why now:** AB 1043 is 67 days out; July 2027 reports; no vendor found packaging the state-chatbot-law obligations.
- **Founder edge:** he builds consumer apps with accounts and an in-app economy and is the first customer for age rules (House Money); Gen Z AI-app founders are his peers; multi-agent evaluation skills make the red-team suite credible.
- **First 10 customers:** Indie Hackers, Product Hunt and X founders of AI companion and journaling apps; "SB 243 gap report" free, $149 a month after.
- **Cost to first revenue:** about $2,500 (attorney review of the matrix, hosting).
- **Path to big:** (my assumption) 5,000 apps x $199 a month is $12M; more state laws and a possible federal bill widen the base. Weak spots: statutes are ambiguous about who is a "companion" bot, federal preemption efforts against state AI laws, and free platform APIs.
- **Who does it today:** Apple and Google (free age-signal APIs), age-assurance and parental-consent vendors (k-ID, Yoti, Persona, adjacent), generic moderation APIs; law-firm memos. No packaged "SB 243 and New York in a box" vendor found.
- **Kill test:** under 10 paying apps by Mar 1.

---

### 7. RuleDrop: a rule-to-kit studio that ships a self-serve compliance kit within a week of every new small-business rule

**One-liner:** A multi-agent monitor of the Federal Register, state legislatures and platform policy pages that drafts, lawyer-reviews and sells a $49 to $249 kit (checklist, copy-paste language, fillable documents) for each new rule, with the winners graduating into software.

- **Customer:** micro-business owners and solo operators who cannot parse a law-firm alert: Shopify and Amazon sellers, creators, small landlords, app developers.
- **Who pays and budget:** the owner, $49 to $249 per kit or $29 a month for the drop feed. Budget: avoiding fines on the first compliance date.
- **Problem:** free law-firm alerts are not actionable; generic template sites update slowly; owners learn of rules from demand letters.
- **Solution:** research agents flag a rule, draft the kit, a flat-fee attorney reviews, programmatic pages and an email list sell it. First three kits from this run: Louisiana and NYC cancel-flow kit (feeds idea 1), Amazon bundle letter-of-authorization pack (feeds idea 8), California AB 1043 implementation guide (feeds idea 6). Track kit sales; build software only where repeat demand shows.
- **Why now:** an unusually dense calendar: Jan 1, 2027 (Louisiana, AB 1043, California employment laws), Jan 11 (Amazon bundles), Apr 26, 2027 (ADA Title II for larger governments), July 1, 2027 (SB 243 reports).
- **Founder edge:** his multi-agent research pipelines are exactly this, and speed of shipping is his strongest trait.
- **First 10 customers:** search-demand pages and answers on Shopify Community, r/FulfillmentByAmazon, r/ecommerce; email capture from a free deadline calendar.
- **Cost to first revenue:** about $2,000.
- **Path to big:** honest warning: a kit studio is a $1M to $3M business and risks shrinking into a boutique unless a kit graduates into recurring software (RenewalShield is the first graduate). Value is the audience and demand data it gives the rest.
- **Who does it today:** LegalZoom and Rocket Lawyer templates, Termly and Iubenda for privacy, poster-compliance firms, free law-firm alerts. Kit-per-new-rule with lawyer review and software graduation is not offered.
- **Kill test:** under $3,000 of kit sales across the first three kits by Jan 31.

---

### 8. BundleLOA: letters of authorization for Amazon sellers before the Jan 11, 2027 bundling cutoff

**One-liner:** Get brand letters of authorization on behalf of sellers whose multi-brand bundles will be switched off on Jan 11, 2027, and turn the pile of brand permissions into an exchange.

- **Customer:** Amazon third-party sellers with self-assembled bundles (gift sets, snack boxes, first-aid kits, supplement and pet packs) and the brands that could license them.
- **Who pays and budget:** sellers, $99 per brand letter secured (success-based) or $49 a month to access pre-approved brand programs; listing revenue is the budget.
- **Problem:** from Jan 11, 2027 most bundles under one ASIN must be packed by the brand unless the seller holds a letter from every brand inside; Amazon asks for the upload only after a listing is flagged; brands ignore requests. Reported through secondary sources only; whether it applies outside the US is unclear.
- **Solution:** AI-personalized outreach to brand contacts and authorized-reseller programs, templates that match Account Health uploads, a tracker, then a brand-side portal to approve qualified bundlers on stated terms; later a brand permission exchange.
- **Why now:** hard date in 11 weeks; one-time rush.
- **Founder edge:** AI outreach and Gen Z Amazon FBA and reselling circles.
- **First 10 customers:** r/FulfillmentByAmazon, Facebook groups and FBA YouTubers; free list of affected ASINs, $99 per letter.
- **Cost to first revenue:** about $800.
- **Path to big:** weakest of the eight. A one-time event service is under $2M; the exchange could reach $5M to $12M only if brands treat bundler permissions as a licensing channel (assumption).
- **Who does it today:** Amazon policy consultants and appeal agencies (GOAT Consulting, Riverbend and similar) handle bundling violations; no exchange found.
- **Kill test:** under 10 letters sold by Dec 31.

---

## Ranking logic

- 1 and 2 pass every test: reachable self-serve buyers, enforcement that is already happening, a cheap fix, an 18-year-old can win on product alone, a real scale path, and no direct product match found (closest rivals are new and shallow).
- 3 has the best founder fit (freight-audit assets, mentor's integrator network) and big dollars per customer but the shakiest legal premise and a closing window.
- 4 and 5 have clear pain but are contested by funded competitors; 4 has the best economics per customer, 5 has the thinnest enforcement.
- 6 to 8 are honest smaller bets; 7 is the engine that finds the next 1 or 2.

## Considered and rejected (so later rounds do not redo them)

- **AI accessibility remediation for Shopify (AccessFix):** demand is real (about 5,000 federal ADA Title III suits in H1 2026, settlements often $5k to $75k, AudioEye ARR $42.3M at June 30, 2026), but funded rivals ship source-code fixes (accessiBe Code Agent beta Sept 17, 2026; Level Access; BrowserStack; A11yFix at $29 a month) and demand_signals already dropped it. Fold into RenewalShield's later modules.
- **CPSC eFiling readiness for importers:** mandatory since July 8, 2026, but ConformReady, Complir, Comply PRO+, Portless, Trackports, Compliance Gate, Eurofins and others sell at $39 per filing to $3,000 a month.
- **Hemp THC ban (now Dec 11, 2026) pivot services:** wrong industry and optics for an 18-year-old applying to colleges; also whipsawed by Congress.
- **ADA Title II remediation for towns and school districts:** deadlines are Apr 26, 2027 (50,000+ population) and Apr 26, 2028 (smaller); government buyers will not take him seriously cold.
- **California SB 343 recyclable-label checker:** a federal court enjoined the Attorney General's enforcement on July 14, 2026.
- **NY LLC Transparency Act filings:** per the sources, domestic LLCs are not currently required to file; only foreign LLCs.
- **CMMC for small defense suppliers (Nov 2026 phase):** regulated buyers who will not take him seriously (from memory, unverified); crowded with consultants.
- **Medicaid work-requirement documentation (Jan 2027):** the payer is the state or the managed-care plan; not reachable.
- **Landlord compliance autopilot (rental registries, fee disclosure):** fragmented by city, crowded by TurboTenant and Avail style suites.
- **Bettor taxes and renter deposits:** already in other lens files (see convergence note above).

## What I did not verify

- Whether NYC's rule reaches out-of-state online sellers; the Kelley Drye summary did not say.
- Amazon's own Jan 11, 2027 bundling post (only secondary coverage).
- Colorado's penalty size (secondary source).
- CIPA suit counts (vendor estimates differ widely).
- Number of brands making Made in USA claims, number of subscription merchants, number of app developers eligible for web checkout: all bottom-up figures above are my assumptions, labeled as such.
- Whether a "no fee-sharing" referral relationship with litigators is allowed in a given state; use a lawyer.
- Market status of One Eagle Advisory (named by another lens file; my search found nothing).

## Sources (search and fetch results used)

- CBP and IEEPA refund status: [CR Robinson advisory on CAPE Phase 3 and Sept 17 declaration](https://www.chrobinson.com/en-au/resources/insights-and-advisories/client-advisories/2026q3/09-17-26-cbp-cape-phase-3-ieepa-refunds/), [Leyton on Phase 3](https://leyton.com/us/insights/articles/cape-phase-3-set-to-launch-october-6-what-it-means-for-ieepa-tariff-refunds/), [Thompson Hine on Phase 2](https://www.thompsonhine.com/insights/cbp-launches-phase-2-of-the-ieepa-tariff-refund-process-and-confirms-development-of-phase-3/)
- Downstream claims: [Baker Donelson](https://www.bakerdonelson.com/ieepa-tariff-refunds-can-retailers-keep-the-money-without-triggering-downstream-claims), [GingerControl](https://gingercontrol.com/blog/ieepa-refunds-customer-chargebacks-pass-through), [Jones Walker](https://www.joneswalker.com/en/insights/blogs/perspectives/who-gets-the-tariff-refund-how-retailers-and-downstream-buyers-can-recover-their-share.html), [Bloomberg Government on antitrust hurdles](https://news.bgov.com/esg/downstream-tariff-refund-suits-face-hurdles-from-antitrust-law), [Supply Chain Dive on carriers](https://www.supplychaindive.com/news/fedex-ups-and-dhl-detail-tariff-refund-approach-for-customers/818057/)
- AV surcharges: [Commercial Integrator on Crestron and others](https://www.commercialintegrator.com/news/crestron-and-other-av-vendors-to-roll-out-price-increases/147868/), [CEPro list of surcharges](https://www.cepro.com/news/list-of-price-increases-surcharges-and-other-responses-to-tariffs-made-by-custom-integration-industry/617914)
- Auto-renewal: [Kelley Drye summer 2026 roundup](https://www.kelleydrye.com/viewpoints/blogs/ad-law-access/summer-2026-autorenewal-roundup-nyc-and-louisiana-enact-new-regulatory-requirements), [ZwillGen state patchwork](https://www.zwillgen.com/practical-advice/evolving-state-law-patchwork-imposes-new-obligations-on-subscription-businesses/), [Olshan 2026 outlook](https://olshanlaw.com/Advertising-Law-Blog/automatic-renewal-laws-2026-regulatory-and-legislative-outlook), [StoreHQ Compliance Scanner](https://apps.shopify.com/storehq-compliance), [Traverse Legal](https://www.traverselegal.com/blog/automatic-renewal-law-compliance-subscriptions/)
- Litigation volumes: [EcomBack mid-year ADA report](https://www.ecomback.com/ada-website-lawsuits-recap-report/2026-mid-year-ada-website-lawsuit-report), [UsableNet midyear](https://blog.usablenet.com/inside-the-2026-midyear-numbers-where-digital-accessibility-litigation-is-going), [Skadden on CIPA](https://skadden.com/insights/publications/2026/06/cipa-is-still-a-mess), [Parker Poe on SB 690](https://www.parkerpoe.com/news/2026/07/amended-california-bill-would-narrow-litigants-website-tracking), [Benesch on review-rule enforcement](https://www.beneschlaw.com/insight/five-stars-zero-tolerance-ftc-turns-up-enforcement-under-consumer-review-rule/)
- Made in USA: [Morgan Lewis (EO 14392 and settlements)](https://www.morganlewis.com/pubs/2026/05/made-in-usa-claims-face-increased-ftc-scrutiny-ahead-of-americas-250th-anniversary), [Wiley on warning letters](https://www.wiley.law/alert-FTC-Sends-Warning-Letters-Regarding-Made-in-USA-Advertising-Compliance-Indicates-a-High-Enforcement-Priority), [OriginProof on Shopify](https://apps.shopify.com/originproof), [ITIF](https://itif.org/publications/2026/04/02/made-in-usa-claims-need-better-data-not-more-liability/)
- Synthetic performers: [Cooley](https://www.cooley.com/news/insight/2026/2026-01-29-new-york-enacts-synthetic-performer-disclosure-law-for-advertisements-including-those-using-generative-ai), [Manatt](https://www.manatt.com/insights/newsletters/client-alert/new-york-synthetic-performer-law-what-advertisers-need-to-know), [Mondaq: now in effect](https://www.mondaq.com/unitedstates/advertising-marketing-branding/1819424/new-york-ai-advertising-disclosure-requirement-now-in-effect)
- Apps and AI chatbots: [Kelley Drye FAQ on AB 1043](https://www.kelleydrye.com/viewpoints/blogs/ad-law-access/faq-digital-age-assurance-act-california-youth-safety-on-the-internet), [Android developer verification timeline](https://www.helpnetsecurity.com/2026/06/19/android-developer-verification-rollout-markets/), [Mondaq on state companion-bot laws](https://www.mondaq.com/unitedstates/new-technology/1764488/state-companion-bot-laws-what-business-owners-need-to-know-in-2026)
- Apple link-outs: [Channel Insider on Apple's 15% proposal](https://www.channelinsider.com/apple/news-apple-external-purchase-fee-epic-court-fight/), [Fenwick on the Ninth Circuit](https://www.fenwick.com/insights/publications/ninth-circuit-largely-upholds-ruling-in-epic-v-apple), [RevenueCat on Stripe for in-app purchases](https://www.revenuecat.com/blog/can-you-use-stripe-for-in-app-purchases/), [Superwall case study](https://superwall.com/case-studies/how-an-indie-developer-switched-from-revenuecat-back-to-superwall)
- Amazon bundles: [selfemployed.com](https://www.selfemployed.com/news/amazon-product-bundle-brand-packaging-rule-2027/), [ppc.land](https://ppc.land/amazon-gives-bundle-sellers-4-months-to-get-brand-approval-or-lose-listings/)
- Rejected items: [DOJ Title II extension via UNC SOG](https://canons.sog.unc.edu/blog/2026/04/20/deadlines-to-comply-with-ada-web-accessibility-requirements-extended-by-one-year/), [SB 343 injunction (Davis Wright Tremaine)](https://www.dwt.com/blogs/energy--environmental-law-blog/2026/07/sb-343-truth-in-recycling-injunction), [hemp delay (Akerman)](https://www.akerman.com/en/perspectives/congress-approves-one-month-delay-of-federal-hemp-thc-restrictions.html), [CPSC eFiling cost guide (ConformReady)](https://conformready.com/guides/cpsc-efiling-cost/), [AudioEye Q2 2026](https://www.barchart.com/story/news/3837634/audioeye-reports-record-second-quarter-2026-results), [NY LLC Transparency Act (Crowell)](https://www.crowell.com/en/insights/client-alerts/new-york-llc-transparency-act-key-requirements-and-deadlines)
