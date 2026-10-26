# Round 3, lens: demand signals (what real people are begging for and being burned by, Oct 2026)

## How the evidence was gathered (and what could not be reached)

- **Reddit and X were not reachable.** Reddit blocks the crawler and the search tool, and I did not route around the block. Nothing below is cited to Reddit.
- **Hacker News**: the Algolia API (Ask HN threads, 2026 comments, Show HN).
- **iOS App Store reviews**: ~6,000 recent 1-2 star reviews across 83 seller, creator, gig and small-business apps (Etsy Seller, TikTok Shop Seller Center, Whatnot, Linktree, Whop, Skool, Square, PayPal Business, Stripe, QuickBooks, Shopify, Thumbtack Pro, Angi Pros, Zillow Premier Agent, Bark, Yelp for Business, Google Ads, Airbnb, Turo, Rover, Booksy, and more). Reviews dated Jun-Oct 2026. I counted themes (held money, bans, fake leads, no human support) and read the clusters.
- **Web search** (about 25 searches) for competitors, prices, market sizes. Vendor blogs are marked as vendor claims.
- **Dead ends I checked and dropped:** prediction-market analytics (Oddpool, Polysights, Nijinn, Dome already funded and shipping), AI accessibility remediation (accessiBe was fined $1M by the FTC, but TestParty, AudioEye and others are everywhere), vibe-code security scanners (VibeSafe, Vibe App Scanner, VibeScan, Aikido), "human-made" certification (Humanable, Humartz, AI-Free Cert, plus Etsy's own Creativity Standards), restaurant delivery-commission recovery (Recoup 15%, Voosh, Deliverect Reclaim), Square/Shopify chargeback automation (Chargeflow already integrates Square), course-piracy takedowns (Ceartas, remove.tech, others), security-deposit recovery (RentCheck, Depositron).

## The pattern that came out of the data

Across every small-seller, creator and local-pro platform, the same three complaints repeat in 2026:

1. **Money is held, frozen or never paid**, and the platform's "support" is now an AI that cannot release it.
2. **Pay-per-lead / pay-per-click spend that produces nothing**, with refund windows too short and too manual for a busy owner to use.
3. **Payers that pay late** (brands to creators, platforms to affiliates), with no data on who is reliable.

Meanwhile HN's own debate this year is that code is cheap to clone ("What if users start cloning SaaS using AI", HN 48826680; "don't build what can be obtained by burning tokens", HN 48559769). So the ideas below are **outcome-priced and sit on data the customer cannot get alone** (what a platform owes them, which lead sources actually convert, which payers actually pay). That is the part AI cloning does not erase.

---

## Ranked ideas

### 1. SellerSOS: the independent back office and defense desk for TikTok Shop sellers (then every platform-dependent seller)

**One-liner:** Upload your TikTok Shop statements and get a report of what the platform owes you, plus an account-health watchdog and ready-to-send appeals when you get frozen.

**Demand evidence**
- iOS reviews of TikTok Shop Seller Center, Sep-Oct 2026: "I made two shops and both got banned by ai pretty much for no reason and $700 just frozen" (Oct 24); "contacted support easily 100+ times over a shipping issue... still waiting to be paid for my very first..." (Oct 2); "holding my money for more than a month after delivery" (Sep 22); "Randomly they block the product and put my shop on probation with no clear explanation" (Sep 30); "You no longer get option to submit a support ticket... they think AI is better" (Sep 26).
- HN 47077880 (Feb 2026), a Show HN by a seller-tool maker: "TikTok Shop has 45+ fee types (referral fees, transaction fees, affiliate commissions, FBT fulfillment, co-funded campaign deductions) that make it nearly impossible to know your real profit per order," and the Shop Performance Score "controls access to Flash Deals, ads, and affiliate marketing."
- Growth: TikTok Shop US GMV was about $15-16B in 2025 and $11.8B in H1 2026 alone (+103% YoY) per Momentum Works/Tabcut figures reported by Tubefilter (Aug 2026); store counts range from 215k to 800k depending on the source.

**Who does it today:** Hubfluence ("Official TikTok Shop Partner", FBT reimbursement, pay-on-recovery), CapTrack (25% of recoveries), AMZ Sellers Attorney and Fiverr freelancers (appeals), FastMoss/Kalodata (product research, not audit), a few Chrome profit calculators. The Amazon analog is a proven market (Helium 10 Refund Genie free DIY; GETIDA/Carbon6/Refunds Manager reported at ~25% of recoveries). Nobody combines fee-audit + account shield + payout tracker in one self-serve tool.

**Product:** CSV/API ingest of settlements and orders, reconcile every fee against the published fee schedule, flag wrong deductions, unpaid returns, FBT losses; SPS and violation watchdog; payout-aging tracker; appeal pack generator with evidence. Fees: $39-99/mo plus 15-20% of recovered money. No legal advice, no credential sharing.

**Path to big:** about 250k active US sellers x ~$750/yr blended ARPU = $190M ceiling; $10M ARR is about 5% of active sellers. Then Whatnot, Etsy, eBay, Amazon, Walmart, and payment-processor holds (see #4).

### 2. LeadLedger: the independent auditor of pay-per-lead spend for local pros

**One-liner:** Forward your Angi, Thumbtack, Zillow, Bark, Yelp and Google leads; get cost per booked job by source, a kill switch for dead sources, and credit requests filed inside the refund window.

**Demand evidence**
- Thumbtack Pro iOS reviews, Oct 2026: "Thumbtack is basically a gambling app for small business owners"; "lead fees were around $40-$60, even for projects with budgets under $100"; "They have completely removed pricing and estimates from the platform entirely."
- Angi Pros iOS: "I paid Angi $350 per month for 7 months, totaling $2,450... never received a single relevant lead" (Oct 9); a plumber/HVAC owner: "$1,700 per month... 4 jobs out of the 75+ leads in the past 3 months... profited about $500" (Sep 30); "duplicate leads to both my accounts" (Oct 8).
- Zillow Premier Agent iOS: "6 month period paying $1800 a month... not one connection has been legitimate" (Jun 2026); "30%-40% fee should go down..." (Jul 2026).
- Bark iOS: "$130 for what was advertised as a 70% guaranteed lead rate, yet I did not receive a single lead" (Jun 2026). Yelp for Business iOS: "calls from India trying to sell adds... count as leads on your account and you pay for them" (Oct 24). Google Ads iOS: "Spam fraud calls rack up pay per click" (Jul 2026).
- Thumbtack Community threads "Problems With Lead Refunds" and "Unfair Lead Charge & Lack of Support": $65.35 charged for a lead meant for another contractor, $119 for an out-of-scope lead, denial from a no-reply address.
- Scale: Angi FY2025 revenue $1,030.5M; average monthly active pros 105k in Q1 2026 (vs 134k); In re HomeAdvisor (D. Colo. 1:16-cv-01849) alleges fake and non-responsive leads. Google Local Services Ads allow disputes within 30 days, and Google moved to automated credits.

**Who does it today:** LSArespond (2,000+ users, LSA only), WhatConverts (a vendor case study: $18K of LSA refunds for one client), CallRail/Scorpion/CallSource (call tracking and LSA dispute service), field-service CRMs with lead-source reports. I found no cross-platform audit of Angi/Thumbtack/Zillow/Bark spend that files credit requests, and Google's automation is shrinking the manual-LSA niche (so start with Thumbtack/Angi/Zillow/Bark).

**Product:** email/SMS forwarding parser, 1-tap outcome capture ("did you book Maria?"), phone and duplicate validation, monthly "money you are burning" report, credit-request evidence packs. $49-149/mo plus 20% of credits recovered. Honest risk: platforms deny many credits, so the durable value is the ROI truth and spend cutting.

**Path to big:** about 400k SMBs spend $500+/mo on pay-per-lead (estimate); ARPU about $1,500/yr; $10M is about 6,700 customers (1.7%). A cross-platform lead-quality index by trade and ZIP becomes the data asset.

### 3. PaidOnTime: receivables chasing and revenue reconciliation for creators, with a payer-reliability index

**One-liner:** Auto-route invoices to the right accounts-payable contact, chase them, reconcile affiliate and platform payouts, and learn which brands actually pay on time.

**Demand evidence**
- Digiday: brands agree to Net-30, but 3-4 months is becoming common, one brand was 120 days late, and two brands went bankrupt inside the wait; Business Insider survey (via Digiday): 87% of creators paid late, wrong or never. Lumanu survey of 500+ creators: 48% paid late this year; 51% of advertisers have full visibility into what they pay creators.
- Linktree iOS (Oct 8, 2026): "I have yet to be paid from commissions earned in August 2025 up until now." Linktree (Oct 3): "I can do this with a website. With all the AI websites are so much easier to build... price gouging."
- Indie Hackers post "How influencer payment opacity became a brand reputation risk nobody's tracking."

**Who does it today:** Creator Deal Tracker (0 Product Hunt upvotes), Dolphin Voice Creator Flow, Taskade templates, Stripe/FreshBooks invoicing. Brand-side payout tools (Lumanu and others) serve the payer. I found no creator-side product that publishes payer reliability.

**Product:** forward the deal email; the tool builds the invoice, finds the AP contact, sends dunning on a schedule, tracks days-to-pay, and reconciles LTK/ShopMy/Amazon/Linktree/Stripe payouts. Brands get a paid "verified fast payer" badge. Avoid defamation: only aggregate creator-supplied timing data, n >= 5, brand right of reply. Pay-advances only through a licensed partner for a referral fee.

**Path to big:** about 250k US creators with $2k+/mo of deal or affiliate income x $29/mo = $87M; plus brand-side badges at $99-499/mo. $10M is about 7% of creators plus 600 brands.

### 4. HoldShield: payment-processor hold defense for side-hustlers and micro-merchants

**One-liner:** Stay unfrozen at Stripe, PayPal, Square, Shopify Payments and QuickBooks Payments, and when a hold lands, produce the proof pack and timeline in minutes.

**Demand evidence**
- iOS reviews: Square (Oct 12, 2026) "permanently closed my account without providing a specific explanation and is withholding $1,600 of my hard-earned money until December 9"; PayPal Business (Jun 2026) "CAN'T WITHDRAW MY CLIENTS DEPOSIT FOR 180 days"; PayPal (Mar 2026) "every time I've gotten a payment over $2,000 in my first year... restricted"; QuickBooks (Oct 14) "close your merchant account and then hold whatever funds for 180 days"; Shopify (Aug 10) "hold any money you've made for an entire year"; Stripe (Oct 11) "a month later, I have still not received the payout."
- HN, same pattern for developers: "AWS won't discuss my bill, suspended my account, took $1,600, still no human" (116 pts), "Microsoft won't let me pay a $24 bill" (198 pts), "Google bot suspended our startup's email with 0 human recourse" (Apr 2026).
- NerdWallet: holds run days to months, up to six months. A law-firm FAQ (terms.law, advocacy) reports Stripe reserves of 90-180 days.

**Who does it today:** law-firm demand-letter sites (terms.law, a members-only forum), consultants (Merchant Cost Consulting blog), Chargeflow (disputes only). No self-serve software for prevention plus hold response.

**Product:** onboarding checklist (MCC, descriptions, documents), chargeback-ratio and volume-spike alerts, a living "business legitimacy" vault (invoices, contracts, delivery proof), a one-click hold-response kit with deadlines and regulator-complaint drafts, and a backup-processor playbook. $49 rescue kit plus $15-29/mo monitoring; acquisition from high-intent search ("Stripe froze my account").

**Path to big:** millions of sole proprietors; 1% of 5M at-risk merchants x $180/yr = $9M, plus rescue-kit sales.

### 5. ControlPilot: AI-assisted control-system programming and commissioning for AV integrators

**One-liner:** Spec in, Crestron/Q-SYS/Extron control code and a commissioning checklist out, reviewed by the integrator's own certified programmer.

**Demand evidence:** AV Nation (Jul 2025) "How AI in AV Programming Is Changing the Game for Control Pros": programmers paste API docs into Claude/ChatGPT to get started; rAVe has documented a control-programmer shortage for a decade. Extron ships a Python ControlScript library plus a VS Code extension, Q-SYS uses Lua, and Crestron pushed low-code instead: AutoMeasure (Jan 2026) and Configure Pro with a visual Sequence Editor (Jun 30, 2026).

**Who does it today:** estimating AI exists (XTEN-AV XAVIA, Specifi "Bob", D-Tools, Jetbuilt). I found no AI product that writes control code. Crestron's own moves are low-code, not generative.

**Path to big:** about 5,000 integrators with in-house programming (my estimate, unsourced) x $6-12k/yr is a $30-60M software pool; productized per-room programming ($1,000-2,000/room) via a services layer is larger. Heroic share is needed for software alone, so the expansion path is building automation and industrial PLCs.

### 6. Duty-Back: tariff-refund reconciliation for small importers and delivery-duty-paid shippers (bridge business)

**One-liner:** Reuse the freight-audit engine on carrier invoices to find IEEPA duty lines, check that UPS/FedEx/DHL actually passed refunds through, and route importers of record to a licensed broker for CAPE filing.

**Demand evidence:** the Supreme Court struck down IEEPA tariffs 6-3 in Feb 2026; CBP stopped collecting Feb 24; about $166B is potentially refundable; CAPE Phase 1 launched Apr 20, Phase 2 Jun 29, Phase 3 Oct 6 (only for finally liquidated entries of CIT plaintiffs that registered by Jul 30). UPS expected about $5B in refunds, FedEx about $800M; carriers pass refunds to the customers who paid, consumers cannot file with CBP directly, and brokerage fees are not refunded (class actions pending).

**Who does it today:** free trackers and guides (tariffstool.com, canireturn.com, Avalara), law firms, brokers. **Why it ranks low:** the window is closing, it is crowded, and it is one-time. Use it for fast first revenue and the dataset, then pivot to permanent duty recovery (drawback, classification and valuation audits) for small importers. License note: filing is done by a licensed customs broker, not by Asher.

### 7. MicroDiligence: $1-2k AI-assisted diligence packs for small-business buyers

**One-liner:** For buyers of $200k-$2M businesses, a document-grounded read of tax returns, P&L, bank statements and customer concentration, with a red-flag memo.

**Demand evidence:** SearchFunder posts say a full QoE is $25-50k+ and a targeted one $8-15k, "hard to justify on a $2-3M acquisition"; SBA does not require a QoE. AI entrants exist (QoEAgent AI, Finsider.ai) but marketing-led.

**Why it fits:** it uses his multi-agent research pipeline and his family's investor network for first buyers. It is research, not CPA attestation or investment advice.

**Path to big:** about 10k small-business sales a year (to verify) x $2-5k = $20-50M ceiling, so treat it as a wedge into lenders, brokers and search-fund networks.

### 8. ShowOps: back office for live-commerce and card-shop sellers (Whatnot, eBay Live, TCG shops)

**One-liner:** Per-show profit, cost basis, combined shipping and dispute-evidence logs for sellers who run live sales.

**Demand evidence:** seller tooling is fragmented: Chrome extensions (Whatnot Seller Tools, Whatnot Double Check, which logs sales with timestamps for disputes), WhatCopilot (about £24.90/mo), Closo; TCG-shop software is a patchwork (BinderPOS onboarding paused, TCGSync £1,000 setup plus 2%, Storepass $499/mo, SortSwift). Whatnot iOS reviews (Oct 2026) are full of lost-mail and refund disputes.

**Weakness:** many small vendors already, limited per-seller wallet. Rank reflects that.

---

## Evidence caveats

- App Store reviews are self-selected and unverified; I used them for repeated themes, not for rates.
- Market-size and fee figures from vendor blogs (reimbursement 25%, "1-3% recoverable", legal-FAQ reserve lengths) are vendor claims.
- Estimates labeled "my estimate" are not sourced.
