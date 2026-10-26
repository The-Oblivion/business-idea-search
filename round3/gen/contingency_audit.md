# Round 3 generator: contingency-fee recovery and audit, in verticals other than freight

Lens: an AI-built system finds money that businesses or consumers are owed and gets paid only on recovery, so the buyer takes no risk and the founder's age matters less.
Date: 2026-10-25. About 22 searches and 4 page fetches. Competitors named below were found in those searches unless marked "(my prior knowledge, not verified)".

## What the research said in one paragraph

Most obvious contingency-recovery verticals are already taken by funded or entrenched players: medical bills (Goodbill 20% capped at $1,000, CoPatient reported 35%), property tax (Ownwell, $74M raised, 25%+), restaurant delivery refunds (Checkmate 8% of recovered, Deliverect Reclaim, Voosh), retailer deductions and OTIF fines (SupplyPike, now inside SPS Commerce; Glimpse $10M; Carbon6; Rev Recoup), Amazon/TikTok reimbursements (Hubfluence ~25%), consumer class-action claim apps (MoneyPilot, Claimed, Catch, Chariot Claims with a $3.6M seed, TapClaim), and tariff refunds (a dozen vendors, one advertising a fee as low as 1.5%). Financial-aid appeals do not work as a contingency business (the school's aid office is the only party who can change the award). The ideas that survive are where a 2025-26 rule change or cost explosion created fresh overcharges, or where the small buyer is ignored by the funded players. Ranking below reflects that, plus how cleanly he can clear the legal wall.

Ranked best first. Idea 1 carries one legal gate (unauthorized practice of law) that must be cleared in week 1; if it fails, Idea 2 becomes number 1.

---

## 1. Renter Money-Back (national deposit + junk-fee recovery, 18+ renters)

**One-liner:** Upload your lease and move-out photos; the system builds the statutory demand for your state, tracks the deadline clock, escalates to a small-claims packet, and takes 25% only if money comes back.

- **Customer:** Renters 18 and older, heaviest among college students and recent grads moving out in December and May-August; second wave: tenants of big institutional landlords with hidden mandatory fees.
- **Who pays and budget:** The tenant, out of the money recovered. No upfront cost; optional $29 self-serve "demand packet" tier on day 1 so there is revenue before any recovery lands. No budget line is needed because the fee comes out of money they would otherwise lose. The person who signs is the tenant.
- **Problem:** Landlords wrongly keep deposits and add unlawful fees; tenants do not know the statutory deadlines and penalties, or will not sue. Facts found: New York requires itemization and return within 14 days or the landlord loses the right to keep any of it (Brick Underground legal Q&A); a California guide says up to double the withheld amount as statutory damages (secondary source); roughly 5,000 deposit complaints went to the NY AG since 2023 and about half of Brooklyn small-claims cases are deposit disputes; the NYC comptroller estimates about $507M is tied up in deposits citywide (all via Depositron's launch coverage in the ABA Journal). Texas has a bad-faith penalty of $100 plus three times the wrongly withheld amount plus attorney's fees (Prop. Code 92.109; from my memory, verify before relying on it).
- **Solution:** Mobile-first app. AI extracts lease terms and the ledger, checks them against a per-state statute pack (deadline, itemization rule, interest on deposit, fee caps, late-fee caps, statutory multiplier), computes what is owed, generates the demand letter and evidence exhibit, calendars the landlord's deadline, and prepares the small-claims filing. Start in 2-3 states with strong penalties and large student populations and no incumbent (Texas and California are candidates; Depositron already sits in NYC). Later modules: illegal application, "convenience", pest/trash/package fees; utility pass-through overbilling; lease-end charges.
- **Why now:** Junk-fee law wave: Colorado HB 25-1090 effective Jan 1, 2026; Connecticut rental fee provisions Oct 1, 2025; FTC proposed rulemaking on advertised rent and fees (March 13, 2026, over 3,000 comments); NYC junk-fee task force (Jan 2026); FTC and Colorado's $24M Greystar settlement (about $23M consumer refunds). AI makes the per-case cost cents. Depositron (launched July 2025) proves the demand but is NYC only.
- **Founder edge:** The customers are his peers and the distribution is Gen Z-native (campus housing groups, GroupMes, TikTok "I got my deposit back" content). He ships the app in a few weekends. Same contingency motion and document-ingest muscle as the freight audit. A young founder is an asset here, not a liability.
- **First 10 customers:** (1) Post a free "deposit check" in off-campus housing Facebook groups and r/college town subreddits for 3 target campuses; (2) ask older friends and siblings of friends in college who move out in December; (3) take the first 10 clear-violation cases (no itemization, deadline blown) and run them by hand with the engine; (4) sell the $29 packet from day 1 to anyone who prefers to self-serve. First recoveries land January-February 2027 (landlord response windows are 14-45 days).
- **Cost to first revenue:** about $800 (domain, tokens, a one-hour consult with a licensed attorney or state-bar ethics line on the fee structure).
- **Path to big (bottom-up, assumptions flagged):** 100,000 paid cases a year x $1,000 average recovery (deposit plus penalty) x 25% = $25M. Needs roughly 0.5% of annual US renter move-outs if there are about 20M (assumption, unverified). $100M needs the junk-fee refund expansion (institutional landlords, class refunds like Greystar) plus B2B2C channels (universities, student-housing platforms, credit unions). Realistic: $5-30M. Honest ceiling: collection leakage (tenant wins in small claims and does not pay the fee) and per-case dollars are small.
- **Who does it today:** Depositron (NYC only; built by LawDroid; demand-letter app launched July 2025); RentHelp (France, 30% of recovery); Retriever Claim and Tenant Angels (UK, success fee up to 25%, built on UK deposit-protection rules); Deposify (Ireland); free substitutes: small claims, state AG complaints, legal aid. I found no US national contingency player doing deposit plus junk-fee recovery.
- **Legal gate (check first):** Unauthorized practice of law and fee rules for non-lawyers differ by state. Design as tenant-directed document preparation (tenant is the sender), have a licensed attorney review the templates and the fee structure, and use an attorney partner for escalations without sharing legal fees. If a contingent fee is not allowed in a state, fall back to flat-fee packets there. Engagement terms must address leakage (fee on any recovery of that deposit after engagement; landlord pays through a link where possible). 18+ attestation required.
- **Kill test:** If an attorney ethics consult says a success fee is impossible in the first 2 states, drop to the flat-fee version and re-judge the economics (likely too small), and promote Idea 2.

---

## 2. Usage-Bill Savings Share for AI and cloud bills

**One-liner:** Read-only look at your LLM, cloud and observability bills, a free 48-hour "bill X-ray", fixes shipped as pull requests with quality evals, and 20% of the verified savings for 12 months.

- **Customer:** Seed to Series B software and AI-native companies spending $5k-$200k a month on LLM APIs (OpenAI, Anthropic, Google), cloud and usage-priced tools. Start with LLM bills.
- **Who pays and budget:** The technical founder or head of engineering; pays out of a line that already exists (API and infra spend), and only from realized savings. Technical founders do not care that he is 18.
- **Problem:** The bill grows with usage and nobody owns it. Guides report the main levers: routing simple tasks to cheaper models (40-70% savings estimated), 50% batch discounts from OpenAI, Anthropic, Google and others for non-urgent work, prompt caching (up to 90% on repeated context). These need code changes engineers do not prioritize. (Figures are from vendor guides; treat as directional.)
- **Solution:** Phase 1: X-ray from usage exports: spend by feature and model, batch-eligible traffic, cacheable prefixes, over-qualified models tested offline on a sample of their own prompts. Phase 2: PRs that add caching, batching and routing, each with an eval showing quality parity. Phase 3: savings meter against an agreed baseline (trailing 30-day cost per unit of work, normalized for volume and provider price changes). Expand to AWS/GCP (rightsizing, commitments) and log/metric bills.
- **Why now:** Outcome-based pricing is a live trend ("AI on contingency" commentary; clients asking for a share of AI savings). ProsperOps proves savings-share pricing at scale for AWS commitments (raised $72M in Feb 2023; reportedly acquired by Flexera in Jan 2026, unverified). Redress Compliance already sells 25%-of-savings contingency for enterprise GenAI contract negotiation, so the fee norm is accepted. AI spend is the fastest-growing line in startup budgets.
- **Founder edge:** Uses LLM APIs daily; runs multi-agent pipelines and a deployed multi-game app, which are real case-study material; built an AI-text detector and blind-test harness, which is exactly the eval discipline needed to prove "same quality, lower cost". Zero license wall. The product speaks for itself in a diff.
- **First 10 customers:** (1) Cut his own pipeline's bill and publish the teardown with real numbers; (2) offer free X-rays to 30 founders who post about LLM bills (X, r/LLMDevs, r/SaaS, Indie Hackers, Show HN); (3) hackathon and college AI-club startups; (4) intros through the mentor's network. First dollar: month 2-3 after the first merged PR. Optional $1,500 flat implementation sprint to pull revenue forward.
- **Cost to first revenue:** about $300 (eval tokens, hosting).
- **Path to big:** 2,000 customers x $15k a month addressed spend x 30% verified savings x 20% share = about $21.6M a year (assumptions flagged). $100M needs managed spend near $1B+ across LLM, cloud and observability and an up-market move. Risks: the fix is partly one-time so revenue decays after 12 months unless the system keeps optimizing; model price deflation shrinks the baseline; providers add native caching; free open-source gateways exist; baseline disputes.
- **Who does it today:** Found: Redress Compliance (25% contingency, enterprise GenAI contracts), ProsperOps (share-of-savings, AWS only). Prior knowledge, not verified in search: Helicone, Portkey, OpenRouter, LiteLLM, Martian, Not Diamond, Vantage, CloudZero. I found no startup-focused LLM savings-share vendor.
- **Kill test:** If 10 free X-rays show under 25% addressable savings or founders refuse to share usage exports, dead.

---

## 3. Small-Operator Lease Audit (CAM, NNN, utilities pass-through), built for multi-unit owners

**One-liner:** Upload the lease and last year's reconciliation; AI abstracts the audit rights and caps, deterministic code recomputes every pass-through line, the audit demand goes out inside the lease's window, and he keeps 25% of credits or refunds. $299 flat diagnostic up front (same shape as the freight audit).

- **Customer:** Owners of restaurants, salons, dental and medical offices, fitness studios and boutique retail in NNN or modified-gross space, then the real prize: multi-unit operators (franchisees and regional groups with 3-50 locations) who each get dozens of reconciliations a year and have no lease administrator.
- **Who pays and budget:** The owner or CFO signs; budget is the contingency itself (fee out of recovered money) plus the $299 diagnostic on a card.
- **Problem:** Tenants are billed for common-area maintenance, taxes, insurance and management fees they cannot check. A lease-audit glossary cites roughly 40% of CAM reconciliations with material errors and management-fee issues in 15-25% of NNN leases (unverified, vendor-sourced). Published recoveries include $27,588 for one tenant and $300k+ for a retailer. Windows to audit are short, and cost-shifting to the landlord usually only kicks in above a 3-5% overcharge.
- **Solution:** Checks pro-rata share, caps on controllable expenses, excluded capital items, management-fee base and stacked admin fees, gross-up on variable expenses, base-year errors, utility submetering, and tax and insurance pass-throughs against public tax records. Outputs: audit request letter, landlord Q&A, settlement credit; a CPA "auditor of record" partner for formal inspection of books on contested files. The retention hook: it calendars every lease's audit window and checks each year's reconciliation automatically.
- **Why now:** AI lease abstraction just made it cheap to audit a $20k-$60k pass-through line; a one-person tenant-side product (CAMAudit) just launched, which signals timing. Pass-through categories (insurance, property tax) are volatile (general knowledge, unverified here).
- **Founder edge:** It is the freight-audit pattern (contract versus invoice, flat diagnostic plus contingency), so most of the engine is reusable. He can start in strip centers near home; the mentor and family network may supply pilot leases (ask, do not assume).
- **First 10 customers:** (1) 3 free pilots through family and mentor contacts; (2) walk 40 strip-center restaurants and salons with "free lease check, pay only if we recover"; (3) referral deals with small-business bookkeepers and tenant-rep brokers who see reconciliations; (4) SBDC and chamber workshops; (5) publish "I audited 20 restaurant reconciliations; here is what I found". First dollars: $299 diagnostics within 2-4 weeks; recoveries in 3-9 months.
- **Cost to first revenue:** about $400.
- **Path to big (honest):** Single-store economics are small: $25k pass-through x 5% recoverable = $1,250 recovered, $312 fee. A 20-unit franchisee with $40k pass-through per unit and 5% recoverable yields about $10k a year in fees; 3,000 such groups = $30M (reachable-group count is an assumption). $100M needs adding utilities, property-tax appeals, insurance pass-through, lease-administration SaaS and benchmark data. Realistic ceiling without that: $15-40M.
- **Who does it today:** Contingency lease-audit firms for big tenants (CBIZ, Mohr Partners, Marks Paneth); Tango Analytics (enterprise retailer software and guide); CAMAudit (one-time $199-$699 license, free blurred scan, solo developer; Leasecake listed as an alternative); landlord-side tools (V7 Labs, Prophia, Scry AI, Datagrid). I found no contingency, monitoring-based product for small multi-unit operators.
- **Risks to name:** Tenants fear landlord retaliation and often carry personal guarantees; "conclusive and binding" clauses; audit windows may already have lapsed on 2025 reconciliations, so real contingency revenue arrives with the 2026 reconciliations in spring 2027.

---

## 4. Micro-Importer Customs Desk: IEEPA refunds now, duty audit and drawback after

**One-liner:** Find every IEEPA-duty entry a small importer paid, get their ACE/CAPE filing done through a licensed-broker partner, take a small percentage of the refund, then keep auditing their duties.

- **Customer:** Shopify, Amazon and eBay brands and small manufacturers that import directly (they are importer of record) but have no ACE portal account, ride on a forwarder's bond, and have $20k-$2M of 2025-26 duties.
- **Who pays and budget:** Owner or CFO; fee of 4-8% of refund (competitors advertise as low as 1.5%), nothing if no refund.
- **Problem:** CBP pays IEEPA refunds for free through CAPE, but only to the importer of record with an ACE account and bank details, in phases by liquidation status; Phase 3 (from Oct 6, 2026) is limited to importers who are plaintiffs in the Court of International Trade; finally liquidated entries only for plaintiffs who submitted an importer number by July 30, 2026. About $166B was collected. The gap is administrative, and the government appealed the refund order on June 2, 2026.
- **Solution:** Ingest ACE reports and broker statements, classify entries by phase and liquidation, estimate refund with interest, onboard ACE, file through a licensed customs broker partner (customs business needs a license he does not have), track payment. Then run classification, 301/232 stacking and drawback checks.
- **Why now:** Phased CAPE rollout; huge pool; window of roughly 12-18 months.
- **Founder edge:** Same buyer class and document-reconciliation engine as the freight audit; DTC brand founders are his generation.
- **First 10 customers:** Freight-audit prospect list ("did you import in 2025-26?"); r/FulfillmentByAmazon, r/shopify and sourcing groups; a free "refund estimator" that takes an ACE CSV; broker partner referrals.
- **Cost to first revenue:** about $1,500 (broker agreement, tooling).
- **Path to big:** 2,000 importers x $60k average refund x 5% = about $6M, one time. Not a durable $100M business unless it becomes the duty-audit layer for small importers. Honest verdict: a timing arbitrage; take it only as a revenue bridge.
- **Who does it today:** Avalara (guide), Baker Tilly, Tariff Recovery Group, TariffApprove, Tariff Recovery Team, One Eagle Advisory (also downstream buyers, no-recovery-no-fee), CapitalGurus IEEPA Recovery, Ginger Control, Airlift, trade attorneys on contingency, plus customs brokers filing for free via CAPE. Very crowded; fee compression.

---

## 5. Micro-Brand Deduction Recovery (retail chargebacks and OTIF fines for small CPG brands)

**One-liner:** Pull remittances from Walmart, Kroger, UNFI and Amazon Vendor Central, find the invalid deductions, file disputes with proof, and take 22% of what is won back, priced for brands under about $5M in retail sales.

- **Customer:** Founders of small food, beverage and beauty brands that recently landed Walmart, Target, Kroger, UNFI or Amazon Vendor accounts (many are Gen Z).
- **Who pays:** The founder or ops lead; pays from recovered money.
- **Problem:** Sources estimate brands lose 2-5% of gross revenue to deductions and 40-60% are invalid, disputable or preventable; SPS Commerce research says suppliers dispute only 20-30% of deductions and win back about 40% of what they dispute; Walmart OTIF fines are 3% of cost of goods on non-compliant cases; Amazon disputes have a 30-day clock. Small write-offs go unchallenged because investigating a $300 deduction costs $300 of analyst time.
- **Solution:** Read-only portal exports and remittances, auto-match to proof of delivery and purchase orders, auto-file disputes, calendar the clocks.
- **Why now:** Retail compliance tightened; small brands are scaling into retail via social.
- **Founder edge:** Gen Z founder-to-founder trust; same invoice-vs-contract engine; fast builds.
- **First 10 customers:** Founder communities (Reddit, Discord, LinkedIn, local food-brand incubators); free "deduction X-ray"; cold DMs to founders who post about retail launches.
- **Cost to first revenue:** about $500.
- **Path to big:** A $3M-retail brand leaks $60-150k; 40-60% invalid; a 40% win rate leaves $10-36k recovered; 22% fee = $2-8k per brand per year; 3,000 brands (assumed) = $6-24M. Realistic $5-20M.
- **Who does it today:** SupplyPike (OTIF Radar, one-click disputing; inside SPS Commerce), Glimpse ($10M raised), Carbon6 (claims 75% recovery), Rev Recoup, Endless Commerce and others; freelancers on Upwork. Crowded; only the micro-brand price point is plausibly open.

---

## 6. Shop-Channel Money-Back (TikTok Shop and the newer marketplaces)

**One-liner:** Match what a seller shipped to what the marketplace received, fulfilled, refunded and paid; file the reimbursement claims; take 20% of what comes back.

- **Customer:** TikTok Shop sellers using Fulfilled by TikTok (mostly young operators), later Walmart WFS and other new marketplaces.
- **Who pays:** The seller owner, 20% of recovered.
- **Problem:** TikTok treats reimbursements as claims you file, not refunds it issues; loss categories include missing inbounds, lost inventory, damaged stock, return and refund errors and fee errors; windows vary by case; weak documentation gets denied. On the creator side, commissions can be clawed back (a vendor estimates 8-15%).
- **Solution:** Pull Seller Center reports, reconcile, pre-fill claims, track windows, show "owed" on a dashboard.
- **Founder edge:** Gen Z seller network, speed of build.
- **First 10 customers:** Seller Discords and Facebook groups; DMs to 50 sellers; friends who resell.
- **Cost to first revenue:** about $200.
- **Path to big (weak):** The "about 2% of FBT revenue lost" figure is untraceable. Even $20B of GMV x 2% x 20% = $80M only at 100% share (assumed). Treat as a wedge for a cross-marketplace settlement-reconciliation product, or kill it.
- **Who does it today:** Hubfluence (official TikTok Shop partner; performance fees around 25% in its pitch), Dashboardly (clawback analytics), CommissionGuard (concept page); Amazon-side players are crowded (prior knowledge).

---

## 7. Contingency PBM-Underpayment Recovery for Independent Pharmacies

**One-liner:** Replace RxDelta-style monthly subscriptions with pay-on-recovery: reconcile remittances against wholesaler invoices, find below-cost reimbursements and NDC swaps, file the appeals, take 20-25%.

- **Customer:** Independent pharmacy owners.
- **Who pays:** The owner-pharmacist, out of recovered money.
- **Problem:** Claims paid below acquisition cost; appeals fail because invoice proof is hard to find and deadlines get missed (vendor claims).
- **Solution:** Ingest billing exports, 835 remits and wholesaler files; flag by PBM and BIN; assemble appeals with invoice proof.
- **Founder edge:** Document reconciliation engine; speed. Weakness: regulated, trust-sensitive buyer and HIPAA business associate agreements.
- **First 10 customers:** State pharmacy associations, pharmacy owner Facebook groups, a free reconciliation on one month of data. Revenue is slow.
- **Cost to first revenue:** about $2,000 (HIPAA policies, BAA template, counsel review).
- **Path to big:** About 18-19k independents (from memory, unverified) x $5-15k recoverable x 25% is a $23-70M theoretical ceiling; at 10% share, $2-7M. Appeal success rates and legal status of PBM reform are unverified.
- **Who does it today:** RxDelta (founded 2026, $199 a month per pharmacy, flat subscription, no contingency), Pharmacy Marketplace PBM Appeals Tool, DataScan content on 835 files, law firms on contingency (Keller Rohrback, Dinsmore). No contingency software vendor found.

---

## 8. Small-Business Settlement-Claims Desk

**One-liner:** A radar that matches a small business's processors and vendors to open settlements where businesses are class members, files the claims, and takes 15-20% of payouts.

- **Customer:** Small merchants and operators.
- **Who pays:** The owner, from the payout.
- **Problem:** Claims need affirmative filing; many small businesses miss them. Evidence: the Discover settlement (claim deadline May 18, 2026) and the Visa/Mastercard interchange settlement (claims extended to Aug 30, 2026) both required filings; Brownstone Recovery Group charges 10-30% of settlement collected, reaching merchants through payment-processor sales channels.
- **Why now (mostly gone):** Both big merchant windows appear closed as of today. Consumer-side claim apps are crowded (MoneyPilot subscription, Claimed and Catch taking a small percentage, Chariot Claims $3.6M seed, TapClaim).
- **Founder edge:** Weak. No special edge beyond speed.
- **Cost to first revenue:** about $500.
- **Path to big:** Depends on future settlements; unquantified. Lowest-ranked because the biggest wave has passed and incumbents have channels.
- **Who does it today:** Brownstone Recovery Group, class administrators, and the consumer apps above.

---

## Killed or demoted during research (so later rounds do not redo them)

- **Financial-aid appeal on contingency:** the school's aid office is the only party that can change an award; free to the family; no contingency vendor found.
- **Medical-bill negotiation:** Goodbill (20%, $1,000 cap, hospital bills only), CoPatient (35% reported), CareRoute, Resolve; plus state debt-settlement licensing risk.
- **Property tax appeals:** Ownwell raised $50M Series B in Feb 2026 ($74M total), 86% reported success rate, 25%+ fee.
- **Restaurant delivery-platform refund and commission audits:** Checkmate (8% of recovered), Deliverect Reclaim, Voosh, DTiQ.
- **Music royalty recovery:** The MLC's distributor portal (DURP, 100+ partners) routes unmatched royalties to rights holders for free; SoundExchange audits target platforms, not artists.
- **Security deposit as a stand-alone product** is folded into Idea 1.
- **Workers' comp premium audit disputes for contractors:** real disputes exist in case law, but I found no contingency competitor and no evidence on fee norms or licensing; too thin to rank. Worth one test: collect 10 small-contractor audit statements and measure error rates before building.
- **Airbnb host damage claims:** attorney-led arbitration (Traverse Legal says 500+ cases); no fee data; not a software wedge.
- **3PL and parcel invoice audit:** crowded vendors, 25-50% contingency norms; too close to the existing freight build.

## Sources (search and fetch results used)

- CAMAudit: https://alternativeto.net/software/camaudit-io/about
- Lease audit: https://rets.ai/glossary/lease-audit , https://tangoanalytics.com/blog/cam-audits/ , https://mohrpartners.com/?p=20935
- Walmart OTIF and deductions: https://supplypike.com/blog/how-to-dispute-walmart-otif-chargebacks/ , https://www.spscommerce.com/community/articles/introducing-otif-disputing , https://foodindustryexecutive.com/2025/04/glimpse-secures-10m-to-automate-deduction-management-for-cpg-brands/ , https://revrecoup.com/go/manufacturing/
- Restaurants: https://restaurantbusinessonline.com/technology/restaurants-say-theyre-bearing-brunt-delivery-chargebacks , https://www.deliverect.com/reclaim-by-deliverect
- Interchange claims: https://www.digitaltransactions.net/merchants-get-another-extension-to-file-claims-in-their-class-action-against-visa-and-mastercard/ , https://www.digitaltransactions.net/formed-in-wake-of-credit-card-settlement-recovery-firm-uses-isos-to-sell-claims-service/
- TikTok Shop: https://www.hubfluence.io/tiktok-shop-reimbursement , https://www.dashboardly.io/glossary/commission-clawback , https://www.turbostarter.dev/ideas/ai/commission-guard
- Renters: https://www.abajournal.com/web/article/tech-meets-tenant-rights , https://www.costar.com/article/1725530122/colorado-bans-apartment-landlords-from-collecting-junk-fees , https://www.nclc.org/ftc-orders-greystar-to-return-24-million-in-rental-housing-junk-fees-to-harmed-tenants/ , https://www.trustpilot.com/review/retrieverclaim.com
- LLM and cloud savings: https://redresscompliance.com/ai-cost-reduction/ , https://aicounsel.substack.com/p/ai-on-contingency-the-bessemer-model , https://blog.premai.io/llm-cost-optimization-8-strategies-that-cut-api-spend-by-80-2026-guide , https://help.prosperops.com/how-does-prosperops-bill , https://www.einpresswire.com/article/618626232/prosperops-secures-72-million-to-help-businesses-save-money-as-cloud-computing-growth-continues
- Medical bills and property tax: https://help.goodbill.com/en/articles/254209 , https://www.inman.com/2026/02/25/ownwell-raises-50m-to-grow-its-property-tax-appeal-fintech/
- Tariff refunds: https://www.cbp.gov/trade/programs-administration/trade-remedies/ieepa-duty-refunds , https://www.thompsonhinesmartrade.com/2026/09/cbp-confirms-october-6-2026-launch-of-phase-3-of-the-ieepa-tariff-refund-process/ , https://tariffrecoverygroup.com/ , https://www.oneeagleadvisory.com/service/tariff-refund
- Pharmacy: https://sourceforge.net/software/product/RxDelta/ , https://pharmacymarketplace.com/pbm-appeals-tool
- Consumer claim apps: https://finance.yahoo.com/economy/policy/articles/people-using-free-apps-sue-100500511.html
- Parcel/3PL audit pricing: https://www.fulfill.com/blog-posts/parcel-audit-guide
- Music royalties: https://www.themlc.com/news/the-mlcs-public-data-portal-for-independent-music-distributors-surpasses-100-partners-across-20-countries
