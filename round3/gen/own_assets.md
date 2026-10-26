# Round 3, lens: "Businesses built on what Asher already has"

Date: 2026-10-25. About 33 searches and fetches were run. Facts below come from those searches, and anything I could not confirm is marked (unverified).

## Honest verdict per asset (read this first)

| Asset | Is it a business on its own? | Best honest use |
|---|---|---|
| Freight-invoice audit system | Real, but crowded at the top. Loop raised a $95M Series C in April 2026. Lighthouz AI (YC S24) sells to brokers and 3PLs. Opereit and Warp's free reweigh/reclass tool are in the space too. The whole freight audit and payment market is only about $0.3-0.7B a year by analyst estimates, so a standalone service is a $1-5M business. | Re-aim the engine at pools where the payer is a prosumer or a small shop, not a Fortune 500 shipper: tariff refunds, Amazon inbound-freight adjustments, and a white-label engine for small audit shops. |
| House Money (play-money casino platform) | **No.** Real money is off the table (guardrail). Sweepstakes casinos are being banned state by state: California AB 831 took effect Jan 1 2026, and roughly 9 states ban them by statute, with AG actions in about 10 more. Pure play-money social casinos are still legal, but they earn only by selling coin packs to young adults, which is the exploitative part. The "daily games for publishers" fallback is crowded and increasingly free (ParkerSyndication gave away 18 daily games with a 50% ad share in July 2026; Hearst owns Puzzmo; Arkadium has been signing publishers since 2016). | A portfolio piece and a code donor (accounts, wallet and ledger, leaderboards, anti-abuse). Reuse it as the funnel and points layer for the Referee game (#6). |
| AI-text detector | **No, not standalone.** GPTZero (about $13.5M raised, $16-24M ARR by third-party estimates), Pangram ($4M seed in 2025, then $9M in July 2026) and Originality.ai (about $2.3M revenue) already own it. His own test showed plain Claude ties his skill, so there is no technical moat. Detectors also carry false-positive liability: a scholarship platform ran GPTZero on about 1,000 essays, flagged 42%, and does not act on the flags. | A credibility engine, and a neutral "referee" role that needs no moat (#6). |
| Multi-agent research pipeline | **No, not as a generic research or idea-validation product.** It is a commodity: Preuve charges $29, DimeADozen $129 (it sold for $150k in 2023), VentureVault is free, Ideabrowser runs $499-2,999 a year, FDD analyzers are cheap (one listed for sale at $25k), and deep research is built into the big chatbots. | The internal engine behind the other businesses (refund-pool radar, claim verification) and a verified-research service where the buyer pays for a guarantee, not for a draft (#8). |
| Strategy-backtesting lab | **Not as a signals or advice business** (regulated, and the early winners flopped in his own holdout). | Verification and forensics: "is this edge real?" (#1). |

---

## 1. Backtest Court: a 60-second "real edge or luck?" verdict, and a badge that sellers pay for

- **One-liner:** Upload a trade list or equity curve, or paste a guru's claim. You get a plain-English verdict from a fixed, pre-registered protocol. Strategy, EA, signal and course sellers pay for a hash-stamped "protocol-passed" badge.
- **Customer:**
  - Retail algo traders and prop-firm candidates (self-serve).
  - Buyers of bots, courses and signals who want to check a claim first.
  - The sellers of those products, who need substantiated performance claims.
- **Who pays:** Traders pay $9 per report or $19-29 a month. Sellers pay $199-499 per verified report and badge, renewed quarterly. Later, platforms pay per API call.
- **Problem:** Backtests are the main sales weapon of the retail trading-education, EA and prop-firm world, and most are overfit or cherry-picked. Buyers have no cheap check. Honest sellers cannot prove anything. The FTC's Online Trading Academy case set the rule that earnings claims need written substantiation.
- **Solution:**
  - Deflated Sharpe ratio and probability-of-backtest-overfitting (Bailey and López de Prado).
  - A multiple-testing haircut using the declared number of trials.
  - Cost and slippage sensitivity.
  - A regime split and a holdout.
  - A Monte Carlo drawdown and ruin check.
  - A luck-vs-skill score.
  - A shareable report page.
  - Phase 2, forward-test mode: the strategy logs hashed trades live, and the badge upgrades from "backtest-checked" to "forward-verified".
- **Why now:**
  - The prop-firm boom: about 2.1M active funded traders and 12M challenge purchases at an average fee near $250, with 5-14% of challengers passing (Track360 estimates; the site also runs affiliate content).
  - AI agents make a "profitable" backtest a 5-minute job, so overfit strategies are flooding the market.
- **Founder edge:** He has already done this: 25 pre-registered strategies, a holdout that killed the early winners, and a debunk of a viral claim. He also has blind-test methodology from the detector work, a fast shipping loop, and Gen Z trader networks.
- **First 10 customers:**
  1. Run the protocol on 10 famous or viral public claims and post teardown threads on X and r/algotrading, r/FuturesTrading and trading Discords. Offer 50 free verdicts in return for permission to publish anonymized stats.
  2. DM 100 small EA, signal and course sellers with a verdict on their own public claims, and sell the $199 badge.
  3. Target 10 paying traders and 5 paying sellers inside 60 days.
- **Cost to first revenue:** about $300 (domain, hosting, Stripe, compute).
- **Path to big:**
  - Segment math: 1% of 2.1M prop traders at $20 a month is about $5M. Add 5,000 sellers at about $400 a year, which is $2M.
  - Reaching $10M+ needs the badge to become a norm, plus API deals with marketplaces (MQL5, TradingView script sellers, copy-trading platforms) and prop-firm trader screening. That would also give him the largest dataset of what fails.
  - Comp: TradeZella has 50-100k traders at $29-49 a month.
  - Honest weakness: ARPU is low, and it needs 30k+ subscribers or a standard-setter outcome.
- **Who does it today:**
  - StrategyQuant ($175 a month or about $1,490-4,900 one-time) and Build Alpha include robustness tests, but they are desktop strategy-generation suites.
  - Free prop simulators cover pass odds: LuxAlgo (open source), The Desk, Aeromir, delta-z.
  - Myfxbook and FX Blue verify live accounts, not backtests.
  - Upwork freelancers sell "backtest verdicts".
  - I found no seller-paid, pre-registered verification badge (not exhaustive).
- **Legal premise:** Analytics and education on user-supplied data, never personalized advice, signals, or performance guarantees. Keep badge wording to "passed protocol X", and keep verdicts independent of fees.

## 2. Tariff Refund Finder, then a duty and landed-cost audit for small importers

- **One-liner:** A free "how much am I owed" checker for small importers' IEEPA refunds. It turns into a paid duty audit as the next refund waves (Section 122, Section 301) and classification errors arrive.
- **Customer:** Small importers of record: Amazon, Shopify and Etsy sellers and small B2B importers. CAP estimates about 234,000 small importers.
- **Who pays:** A flat $199-499 for the audit plus a filing-ready CAPE CSV or protest packet. A contingency of 8-15% is possible only through a licensed customs broker or attorney partner who actually files.
- **Problem:**
  - The Supreme Court held the IEEPA tariffs unlawful in *Learning Resources v. Trump*.
  - About $166B was paid by about 330k importers across 53M+ entries.
  - About $126B has been sent to Treasury, but about $29B is not yet accepted into the refund system (CAPE).
  - About $11.4B sits in finally liquidated entries that need a court order.
  - Roughly $1.1-1.3B is stuck for missing bank or ACH details.
  - CBP has been voiding importer numbers with bad Form 5106 data since Sept 18.
  - Small importers do not know whether they are the importer of record, which route applies to which entry, or the deadlines: an 80-day CAPE window, a 180-day protest window, and 2 years at the CIT.
- **Solution:**
  - Upload the ACE ES-003 report.
  - Flag the Chapter 99 IEEPA lines.
  - Read each entry's liquidation status.
  - Route each entry: CAPE, protest, class member, or CIT.
  - Build a deadline calendar.
  - Generate the CAPE CSV.
  - Add a stuck-refund checklist (ACH, Form 5106, Form 4811).
  - Reuse the freight engine's ingest, recompute and deadline-claim logic.
  - Layer 2: HTS classification and valuation checks, plus a research-pipeline "refund radar" on Section 122 (the CIT held it unlawful May 7 and the Federal Circuit stayed that June 11) and Section 301 forced-labor tariffs (argued Sept 30, no decision yet).
- **Why now:**
  - The class was certified Oct 8 (*Freestyle World v. CBP*), with no class-wide injunction yet.
  - The pool is enormous.
  - **The easy money is gone: about 76% has already been sent.** This is a move-in-weeks window, and the tail shrinks every month.
- **Founder edge:** The engine already ingests documents, recomputes against rules, and tracks claim deadlines. He builds fast, his Gen Z seller communities are reachable, and he can use the mentor and family network to find a customs attorney or broker (to be tested).
- **First 10 customers:**
  1. Post the free checker in r/FulfillmentByAmazon, r/shopify and r/AmazonSeller, in Facebook seller groups, and on X.
  2. Sell the first 10 audits at $99.
  3. Sign one licensed broker or customs attorney as the filing partner.
- **Cost to first revenue:** about $1,500 (LLC plus a one-hour customs-counsel opinion).
- **Path to big:**
  - A one-time harvest is realistically $0.5-2M.
  - $5-15M needs a recurring duty audit (misclassification and valuation errors cost more now that tariffs are 5-10x pre-2025 levels) or a second refund wave (Section 122 or 301 wins).
  - Treat this as a pivot-able beachhead, not a durable moat.
- **Who does it today:** Contingency law firms (for example Ayar Law), freight and customs firms (FreightRight), Big-4 and regional advisors (Baker Tilly, CLA), the customs brokers themselves, and guides from Avalara and SCORE. Claim buyers may also exist (unverified).
- **Legal premise (check before launch):** My reading is that "refund, rebate or drawback of duties" is "customs business" under 19 CFR 111.1. That means a brokerage license or an attorney is required to act for others, and only the importer of record can claim. So structure it as self-serve software (the importer files its own CAPE CSV) plus a licensed partner for power-of-attorney filings. Do not take a percentage unless counsel says it is clean. An hour with a customs attorney is the first spend.

## 3. PCP Freight Dispute Desk: Amazon inbound LTL adjustments, recomputed from the BOL, on contingency

- **One-liner:** A contingency desk that recomputes Amazon partnered-carrier inbound transportation adjustments from the seller's BOLs, scale photos and NMFC density math, then files evidence-grade disputes. The fee is 25% of credits recovered.
- **Customer:** Amazon FBA, Walmart and DTC sellers moving pallets by LTL, with $20k-$500k a year in inbound freight.
- **Who pays:** 20-25% of recovered credits (the norm for recovery audit is 20-30%), nothing upfront, plus an optional $29-a-month monitor.
- **Problem:**
  - Amazon's policy of June 12, 2025 turns measured weight, dimension or class differences on LTL and small-parcel shipments into fee adjustments.
  - The NMFC overhaul of July 19, 2025 moved 2,000+ items (about 30% of classifications) to density-based classes.
  - Sellers contest on forums with scale tickets and density math (a Class 300 vs 250 case) and get non-answers.
  - One seller claims $109k of excess charges over 1,118 shipments (unverified).
  - Sellers never see the carrier invoice, only a line on the settlement report.
- **Solution:**
  - Ingest the Payments or settlement "Inbound Transportation Charge" lines, the shipment summaries and the BOLs.
  - Recompute weight, class and accessorials with the freight engine.
  - Produce the dispute packet and track outcomes.
  - Add a prevention layer: a SKU-level density and class sheet.
- **Why now:** The NMFC change, Amazon's adjustment policy, and sellers squeezed by tariffs and fees.
- **Founder edge:** The engine is built and the buyers are prosumers he can reach on Reddit and YouTube without any enterprise credibility. NMFC density math is a knowledge moat over generalist FBA reimbursement firms.
- **First 10 customers:**
  1. Offer a free "last 90 days" CSV audit on r/FulfillmentByAmazon and in Facebook groups.
  2. Show the found money, then take 25%.
  3. Add prep-center referral partners at a 10% share.
- **Cost to first revenue:** about $500.
- **Path to big:**
  - Honest: this niche alone is about a $5-20M-a-year pool (for example 10k LTL-shipping sellers at about $3k a year of fees).
  - The path is to become the logistics-fee recovery layer for marketplace sellers: inbound LTL, FBA dimension fees, Walmart fulfillment, TikTok Shop, and parcel refunds.
- **Who does it today:**
  - Warp (a free reweigh/reclass checker used as lead generation for its rates).
  - Loop (enterprise).
  - Lighthouz AI (YC, brokers and 3PLs).
  - Opereit (pre-seed).
  - Parcel refund apps at 35-50% shares (71lbs, Share a Refund, LateShipment, Refund Retriever).
  - Generalist FBA reimbursement services such as Getida and Helium 10 (named from memory, not searched).
  - I found no freight-class specialist for Amazon inbound (not exhaustive).

## 4. RecoveryKit: a white-label audit engine for small audit shops, customs brokers and 3PLs

- **One-liner:** License the freight and customs audit engine to the long tail of 5-50 person freight-audit shops, cost-reduction consultants, regional 3PLs and customs brokers. They have the shipper relationships and the trust, and they still audit in spreadsheets.
- **Customer:** The owners of those small firms.
- **Who pays:** $499-1,999 a month, plus an optional 10% of recoveries.
- **Problem:** Small shops cannot build software. Enterprise platforms need volume. Parcel-audit white-label exists (ShipScience), but I found no LTL plus customs white-label aimed at small shops.
- **Solution:** A multi-tenant portal: upload invoices, see findings, generate dispute letters, track deadlines, and send client reports under the shop's brand.
- **Why now:** The NMFC overhaul and the tariff-refund surge create work these shops cannot staff.
- **Founder edge:** Small-business owners judge by demo on their own old invoices. He never has to win a shipper's trust himself.
- **First 10 customers:**
  1. Cold-email and LinkedIn 300 small audit, consulting and brokerage shops: "Send me 20 old invoices, and in 48 hours I'll show you what your team missed."
  2. Run 30-day free pilots, then $799 a month.
  3. Target 10 pilots and 5 paying shops.
- **Cost to first revenue:** about $800.
- **Path to big:**
  - Honest: the freight audit and payment market is only about $0.3-0.7B by report estimates, and PRGX (the public recovery-audit comp) did about $162M in 2017.
  - 2,000 shops at $12k a year is about $24M as a ceiling, and that count is unverified (I found no census of audit firms).
  - Extending the engine to ocean demurrage and detention, customs, and lease CAM audits could make it the system of record for recovery shops.
  - A low-to-moderate ceiling unless that happens.
- **Who does it today:** ShipScience (white-label parcel audit), Betachon, Intelligent Audit, and Trax and Cass (enterprise).

## 5. Audit-led managed LTL (agent model): the audit is the free lead magnet, the freight program is the business

- **One-liner:** A free 12-month LTL invoice audit proves a small shipper is overpaying against benchmarks. He then moves that freight into a managed program run under a licensed broker partner as an independent agent, earning ongoing commission on gross margin.
- **Customer:** Small and mid-size shippers (wholesale, building products, flooring, furniture, AV and trade-show freight) with $150k-$1M a year in LTL spend.
- **Who pays:** The broker partner pays the agent a commission split of gross margin. The shipper's cost drops.
- **Problem:** Small shippers overpay, with reweigh and reclass fees, accessorial errors and weak discounts. Errors run 2-8% of spend per one consultant source. They do not have a team to renegotiate.
- **Solution:** Audit, then a benchmark report, then a managed program (rating, tendering, tracing, claims) delivered by the broker partner with his dashboard on top.
- **Why now:** The NMFC reclass pain, plus carriers' general rate increases and tariff-driven cost pressure.
- **Founder edge:** The engine already produces the diagnostic. Agent splits mean he needs no broker authority of his own. Mentor and family network intros are the cold-start channel (for example AV integrators).
- **First 10 customers:** 20 warm intros (mentor, family, AV and trade-show contacts), 50 cold emails to niche distributors, the free audit as the hook, and a goal of 3 shippers into a program by day 90.
- **Cost to first revenue:** about $1,000.
- **Path to big:**
  - The best unit economics in the cluster. A $300k shipper at roughly 15-20% broker gross margin and a 60% agent split would yield about $27-36k a year (my estimate, unverified).
  - 300 shippers is about $9M.
  - Honest risks: a conflict of interest between auditor and seller (it must be disclosed), a long cold sales cycle, and a crowded broker field.
- **Who does it today:** Warp (a free audit tool feeding its own rates), C.H. Robinson-type brokers, Echo, Freightquote, and thousands of independent freight agents. AI-led agent models exist at funded startups (not itemized).

## 6. The Referee: independent blind tests and an arena for AI-text detectors, plus a Human-or-AI game

- **One-liner:** A monthly, public, blind test of every AI detector and humanizer on fresh, never-published text, with an open protocol. It earns from certified-result badges for vendors, procurement reports for schools and publishers, and affiliate referrals. A "Human or AI?" crowd game built on the House Money accounts and points stack feeds and recruits for it.
- **Customer:** Schools, districts, publishers and HR teams choosing a detector. Detector vendors who want third-party credibility. Teachers and writers.
- **Who pays:** Vendors pay about $2-5k per certified test cycle (plausible, untested). Schools and publishers pay $199-999 for a procurement report. Affiliate referrals pay recurring commissions where programs exist (rates unverified).
- **Problem:** Vendors publish their own accuracy claims. Non-native writers get flagged unfairly. Buyers cannot tell which tool to trust. A scholarship platform that flagged 42% of about 1,000 essays does not act on the flag.
- **Solution:** Fresh holdout sets (human text from paid 18+ writers, current-model AI text, paraphrased and edited text, ESL text), fixed metrics (false-positive rate at 1%, robustness), a public leaderboard, and an open protocol. The crowd game adds judgments and adversarial examples. Keep his own detector out of the rankings to avoid a conflict.
- **Why now:**
  - Pangram raised $9M in July 2026 and GPTZero has an estimated $16-24M ARR, so the category is hot and has no neutral referee.
  - AI21's "Human or Not" drew 2M+ players and 15M+ conversations, so the game format is viral.
  - LMArena shows the arena model can be venture-scale: $150M Series A at a $1.7B valuation in January 2026, with over $30M ARR reported, and frontier labs as customers.
- **Founder edge:** He already ran blind tests against commercial detectors (his own results; independent replication needed). He has a platform with accounts and points, and Gen Z distribution.
- **First 10 customers:**
  - Publish the first leaderboard in 3 weeks.
  - Pitch teacher communities (r/Teachers, r/professors) and 5 detector vendors for the badge.
  - First dollars come from affiliate links and one or two vendor tests ($1-2k).
- **Cost to first revenue:** about $2,500 (paid writers, API runs).
- **Path to big:**
  - Honest base case: affiliate plus badges is about $0.5-2M.
  - The venture path is an "LMArena for authenticity" that sells evaluation and red-team data to detector and AI companies. That is unproven, because LMArena's buyers are frontier labs and an 18-year-old's arena would need a niche labs care about.
- **Who does it today:** Vendor-published accuracy claims, academic benchmarks (such as RAID, from memory, unverified), Pangram's own comparisons, and affiliate listicles. I found no neutral, continuously refreshed leaderboard (not exhaustive).

## 7. Kalshi-first backtesting and calibration for event-contract traders

- **One-liner:** One-click historical replay and calibration scorecards for event-contract traders, starting on Kalshi where backtest tooling is thin, with a free Polymarket tier.
- **Customer:** Adult retail event-contract traders (sports are about 83% of Kalshi volume) and hobbyist bot builders.
- **Who pays:** $19-49 a month, with a $99 API tier.
- **Problem:** Kalshi hit $19.03B in the week of Oct 5-11, 2026, but most traders cannot test an idea or measure their own calibration.
- **Solution:** Pull Kalshi REST data, replay with fees and slippage, add calibration plots and a pre-registered holdout, and import the user's fills for a luck-vs-skill score.
- **Why now:** A prediction-market volume boom, and AI coding makes bots easy to build and just as easy to overfit.
- **Founder edge:** The backtest lab, the pre-registration discipline, and a network of Gen Z prediction-market users.
- **First 10 customers:** Free calibration scorecards on X and r/Kalshi, then $19 a month. Target 10 paying in about 45 days.
- **Cost to first revenue:** about $250.
- **Path to big:**
  - Honest: this is a micro-SaaS. PolyBacktest had 322 subscriptions and about $2k of 30-day revenue (TrustMRR, May 2026), roughly $6 per subscriber, and its owner listed it for $89k.
  - The upside needs a data or API business for funds and market makers, since Kalshi is courting institutions.
  - Low probability.
- **Who does it today:** PolyBacktest, PolyTest (launched April 2026), MarketLens, Oddpool (historical data), and Kalshi's own free API. kalshibacktest.com is listed as pre-revenue.
- **Guardrail flags:**
  - It is analytics software only, not picks.
  - Selling paid signals on commodity interests may require CTA registration (verify before any signal product).
  - Sports contracts are gambling-adjacent, so adults only, calibration framing that shows how many lose, and no exchange affiliate revenue.

## 8. The Verified Research Desk: claim-level fact-checking for creators and small newsrooms

- **One-liner:** A 24-hour pre-publication research and fact-check service for mid-size YouTube, podcast and newsletter creators. Every claim is traced to a primary source and re-verified by an independent agent, and the creator gets a verification ledger.
- **Customer:** Creators with 50k-2M subscribers in finance, science, history and tech explainers, and small newsletters and newsrooms.
- **Who pays:** $250-750 per episode, or a $1.5-4k monthly retainer.
- **Problem:** AI-hallucinated stats and fake quotes get channels corrected in public. Creators cannot afford human researchers. Free deep-research tools produce the draft but not the verification.
- **Solution:** His pipeline (researcher, adversarial critics, a verifier that fetches the primary source, a quote-match check). Each claim gets a source, a match status and a confidence in the ledger.
- **Why now:** Deep research commoditized drafting but not verification, and AI-fabricated citations are now a known embarrassment.
- **Founder edge:** He built the pipeline, and his own experience is that search snippets have returned fabricated quotes. He is a heavy viewer of this creator class.
- **First 10 customers:** DM 100 creators with a free fact-check of their latest video, then convert 10 to paid.
- **Cost to first revenue:** about $400.
- **Path to big:**
  - Honest: as a service this is a $200k-$1M side business at his hours, and the weakest idea here on bigness.
  - The path is the ledger as software: a claim-verification layer or API for publishers and newsrooms. That is speculative.
  - It is included because it gets a first dollar fastest and feeds #1, #2 and #6.
- **Who does it today:** Freelance researchers on Upwork, in-house fact-checkers at large channels, and the chatbot deep-research tools. Idea-validation reports at $29-129 show that buyers pay little for AI reports, so the price has to be tied to a verification guarantee.

---

## Considered and rejected (so they do not come back)

- **Casino and sweepstakes variants of House Money:** the real-money version is out under the guardrails, the sweepstakes version is being banned state by state, and the coin-pack monetization is the exploitative piece.
- **Publisher daily-games hub:** free competitors (ParkerSyndication, July 2026), Hearst and Puzzmo, and Arkadium.
- **Generic idea-validation reports:** commodity pricing ($0-$129).
- **Franchise (FDD) analyzer:** several tools exist, and one business listed for $25k.
- **Parcel late-delivery refund app:** 35-50% revenue-share competitors already live.
- **Fake-review defense:** Google's report flow is free and paid removal services exist.
- **Scholarship-essay screening:** the data subjects are minors, which creates a privacy and guardrail problem.
- **Sports-betting tracker or affiliate:** against the guardrail spirit.

## Sources (searched 2026-10-25)

- Freight and parcel: [Warp reweigh/reclass tool](https://www.wearewarp.com/tools/reweigh-reclass-audit), [NMFC changes (GlobalTranz, Green Worldwide, WWEX, CH Robinson)](https://www.greenworldwide.com/nmfc-new-ltl-freight-class-rules-in-effect/), [Refund Retriever](https://www.refundretriever.com/refunds), [71lbs app](https://apps.shopify.com/71lbs-app), [Loop (Sacra)](https://sacra.com/c/loop), [LTL freight audit and payment market reports](https://www.technavio.com/report/freight-audit-and-payment-market-industry-analysis)
- Amazon inbound: [Seller Central forum thread](https://sellercentral.amazon.com/seller-forums/discussions/t/7a073524-ec50-4b7a-8f12-6961a97eb0f3), [amzprep LTL guide](https://amzprep.com/ltl-freight-shipping/)
- Tariff refunds: [Baker Tilly IEEPA refunds](https://www.bakertilly.com/insights/ieepa-refunds), [Troutman Pepper Locke](https://www.troutman.com/insights/getting-duties-back-where-recovery-stands-under-ieepa-section-122-and-section-301-forced-labor-tariffs/), [C.H. Robinson CAPE Phase 3 advisory](https://www.chrobinson.com/en-us/resources/insights-and-advisories/client-advisories/2026q3/09-17-26-cbp-cape-phase-3-ieepa-refunds/), [SCORE small business refunds](https://www.score.org/articles/how-apply-small-business-tariff-refunds/), [Ayar Law](https://ayarlaw.com/tariff-refund-attorney), [FreightRight](https://www.freightright.com/solution/ieepa-tariff-refund)
- Detectors: [GPTZero (Sacra)](https://sacra.com/c/gptzero/), [Pangram $9M (TechCrunch)](https://techcrunch.com/2026/07/29/as-ai-content-floods-the-internet-pangram-raises-9m-to-detect-it/), [Originality.ai (Starter Story)](https://www.starterstory.com/businesses/originality-ai/monetization), [Scholarships360/GPTZero (Hechinger)](https://hechingerreport.org/students-try-using-ai-to-write-scholarship-essays-with-little-luck/), [AI21 Human or Not](https://www.ai21.com/blog/human-or-not-results), [Authors Guild Human Authored](https://authorsguild.org/news/ag-launches-human-authored-certification/), [LMArena $1.7B](https://mexicobusiness.news/cloudanddata/news/lmarena-hits-us17-billion-valuation-after-series-round)
- Trading: [StrategyQuant pricing](https://strategyquant.com/pricing), [Deflated Sharpe Ratio (SSRN)](https://papers.ssrn.com/abstract=2460551), [LuxAlgo prop sim](https://www.luxalgo.com/prop-firms/), [Track360 prop industry 2026](https://track360.io/blog/prop-trading-industry-report-2026-market-analysis), [TradeZella pricing](https://www.tradezella.com/blog/tradezella-pricing-guide-2026), [FTC v. Online Trading Academy](https://www.ftc.gov/business-guidance/blog/2020/09/online-trading-academy-settles-charges-it-made-deceptive-money-making-claims-tried-gag-consumers), [PolyBacktest (TrustMRR)](https://trustmrr.com/startup/polybacktest), [Kalshi volume (DeFi Rate)](https://defirate.com/news/kalshi-hits-record-19-billion-week-as-polymarket-us-triples-fall-trade-volume/)
- Games and social casinos: [Sweepstakes casino bans 2026](https://www.gambling.com/us/sweepstakes-casinos/legal), [ParkerSyndication free daily games](https://lifestyle.kbew98country.com/story/327095/guinness-world-records-puzzle-master-opens-parkersyndication-18-free-daily-games-for-publishers/), [Hearst/Puzzmo](https://www.mediapost.com/publications/article/391586/hearst-newspapers-acquires-puzzmo-puzzle-gaming-p.html)
- Idea validation and FDD: [Ideabrowser comparisons](https://bigideasdb.com/ideabrowser-alternative), [ClearlyFDD (Capterra)](https://www.capterra.co.il/software/1111503/ClearlyFDD)
