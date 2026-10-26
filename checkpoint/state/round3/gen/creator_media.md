# Round 3 / Lens: Media, community and creator businesses (ranked best first)

Ground rules followed: 20 web searches plus 4 page fetches (late Oct 2026). Every competitor below was found by search; claims I could not verify are marked "(unverified)". Numbers labelled "my arithmetic" are my own bottom-up estimates, not sourced.

## Research notes that shaped the list

**What I killed before it reached the list (and why)**
- Hyperlocal AI newsletter networks: Patch runs AI newsletters in ~14,000 communities (~1M subscribers); 6AM City bought Good Daily's 350+ AI newsletters and made ~$9.5M revenue last year at a 10-20% margin. Crowded and the ceiling is single-digit millions. ([CJR](https://www.cjr.org/feature/hyperlocal-ai-patch-newsletter-million-subscribers.php), [Nieman Lab](https://www.niemanlab.org/2025/07/good-dailys-network-of-more-than-350-ai-generated-local-newsletters-finds-a-buyer/))
- Sermon-to-content AI for churches: Subsplash owns Pulpit AI; Pushpay has Studio AI; Sermon Shots, Gloo and Pastors.AI also sell it. ([faith.tools](https://faith.tools/app/pulpit-ai))
- Prediction-market data/embeds for publishers: the embed layer is being captured by platform deals (Polymarket x Substack) and Oddpool (YC, $3M seed) joined Kalshi. ([Substack](https://on.substack.com/p/what-the-markets-are-saying), [Dealroom](https://dealroom.co/news/149005-oddpool-raises-3m-seed-then-joins-kalshi/))
- Clipping marketplaces: Whop and Vyro own it; one sample of 50 Content Rewards campaigns showed ~$1.1M budgeted, median $1 per 1,000 views. ([Foundry](https://www.builtbyfoundry.io/blog/what-is-clipping-1-dollar-per-1000-views-50-campaigns))
- Gen Z consumer panels: YPulse ($199/mo starter, $22,999-$39,999/yr enterprise), Knit, Imagen Insights already sell this. ([YPulse](https://www.ypulse.com/pricing/))
- FTC-disclosure compliance checkers for influencer campaigns: Valen Sentinel ($99/mo) and Gamesight's monitor exist. ([Indie Hackers](https://www.indiehackers.com/post/show-ih-built-an-ftc-compliance-checker-for-influencer-marketing-after-watching-brands-get-blindsided-by-53-088-fines-heres-what-i-learned-52cd85803e)) I folded the useful part into idea 2.
- Skool tooling: Skool has no official API, only Zapier on its paid plan, so anything built on it is reverse-engineered and fragile. ([API Evangelist](https://providers.apievangelist.com/providers/skool/))

**Big-outcome precedents for media**: Industry Dive sold to Informa for $389M up front (up to $525M) on ~$110M projected revenue; Morning Brew's control sale was up to $75M on $20M+ run-rate. ([A Media Operator](https://www.amediaoperator.com/newsletter/industry-dive-proves-b2b-can-be-big/), [Axios](https://www.axios.com/2020/10/29/insider-inc-buys-majority-stake-morning-brew))

---

## 1. LiveBooks: the back-office for live sellers (Whatnot, TikTok Shop Live, eBay Live)

**One-liner:** Upload your Seller Hub exports and see which shows, categories and buyers actually make money after fees, shipping, giveaways and cost of goods.

- **Customer / who pays:** full-time and serious part-time live sellers (cards, coins and bullion, sneakers, beauty, electronics, jewelry) and their small teams. The seller signs. $39-149/mo, teams $249+.
- **Problem:** Whatnot commission runs 8% down to 3% plus 2.9% + $0.30 processing, and sellers also eat giveaways, shipping and cost of goods. Whatnot's own Seller Hub analytics are described as basic. Per Whatnot's own stats: 1 in 8 sellers is full-time, 53% earn most of their sales live, sellers average 23 hours a week, ~80% work from commercial space, and some run 20-40 person teams. Sellers say net earnings on low-priced items can be below minimum wage. ([Value Added Resource](https://www.valueaddedresource.net/whatnot-2026-live-selling-report/))
- **Solution:** CSV-first (no login scraping, no ToS fight): orders, payouts and show exports are matched to cost of goods (paste a lot cost or photograph a receipt). Output is per-show true profit, category margin, repeat-buyer and buyer-lifetime-value view, giveaway ROI, restock alerts, a pre-show planner, and a 1099-K / sales-tax-ready ledger export (bookkeeping output, not tax advice). Phase 2 adds team commission splits for hosts, shipping rebates and a wholesale-sourcing marketplace. Deliberately no break or random-spot mechanics (legal gray zone).
- **Why now:** Whatnot did $8B+ live GMV in 2025, said H1 2026 sales already exceeded all of 2025, and raised $545M at a $20B valuation in Aug 2026. ([Value Added Resource](https://valueaddedresource.net/whatnot-20-billion-valuation/)) This is the Shopify-app-store moment, year two of hypergrowth, and the tool layer is tiny.
- **Who does it today:** Selldeck (Chrome extension), Whatnot Spy by ResellBot (~1,000+ users, the largest I found), LiveStreamPro (~48 users), Whatnot Seller Analytics (~27 users), Vendoo (inventory), TCGSync (Whatnot via CSV/manual, API "on roadmap"), Etsy break-profit spreadsheets, and Whatnot's own Seller Hub. No one with real scale. ([Chrome Web Store](https://chromewebstore.google.com/detail/gpalhacppaamjllegpimcemednjjheep), [TCGSync](https://tcgsync.com/integrations/whatnot))
- **Founder edge:** ships deployed web apps with accounts fast; his Gen Z collectibles, sneaker and gamer friends sell on these platforms; he is 18 so he can sell live himself to dogfood.
- **First 10 customers:** Whatnot sellers' Reddit, Discord and Facebook groups. Show pages are public, so list 150 mid-size sellers and DM each a free "show profit audit" built from their own CSV. 3 friends as design partners first. Target 10 paid at $39/mo by about day 45.
- **Cost to first revenue:** ~$1,500 (LLC, hosting, LLM calls).
- **Path to big (my arithmetic):** tooling at 0.5-0.8% of GMV on a ~$15B Whatnot GMV year (the $15B is unverified, one German outlet) is a $75-120M pool on Whatnot alone, before TikTok Shop Live (reportedly larger) and eBay Live. A 15-20% share is $15-25M ARR as pure SaaS. $100M needs payments, shipping or sourcing take rates (the Klaviyo path). Total seller count was not published, so the pool is approximate.
- **Kill risks:** Whatnot ships this natively; Whatnot restricts CSV exports; low-price sellers churn.

## 2. DealDesk: verified creator rates, brand payment-speed scores and a scam screen

**One-liner:** Forward a brand-deal email, get the verified market rate, whether the sender is real, how fast that brand actually pays, and a counter-offer draft.

- **Customer / who pays:** creators with 10k-1M followers doing brand deals ($12-29/mo; free tier = 3 checks a month) and small DTC brands and agencies buying a verified rate and payment-reputation index ($199-999/mo). Later: escrow through a licensed partner.
- **Problem:** Rate guides disagree and do not disclose methods (dedicated-video multipliers range 1.3x to 3x depending on source). The one crowd-sourced database I found, FYPM, is self-reported (16,000+ deals across 7,200 brands). Late payment is the pain: one survey says 41% of creators name payment delays their biggest problem, a Campaign report cites up to 87% paid late, and creators fear speaking out because of blacklisting. I found no cross-platform database scoring brands on payment timeliness. ([FYPM](https://www.lindseygamble.com/blog/fypm-releases-2023-creator-pricing-benchmark-report), [Campaign](https://campaignlive.com/article/new-campaign-report-reveals-why-creators-arent-getting-paid-time/1930824), [Lumanu](https://www.lumanu.com/blog/insights-from-500-influencers-on-their-payment-experience))
- **Solution:** (1) verified pool: a deal counts only with an invoice, PayPal/Stripe record or payout screenshot parsed by AI; (2) per-deal range for niche, follower tier and format; (3) sender check (domain age, known agencies, attachment risk); (4) payment-speed score per brand with a minimum sample size and a brand reply right; (5) contract red flags (perpetual usage, exclusivity, net-90+); (6) invoice tracking and polite chasing. Start with forward-to-email, not Gmail connect, to avoid the restricted-scope audit.
- **Why now:** creators are leaving single-platform dependence, brands are cutting rates (creator-rate trend pieces), and vendor benchmarks are unverified. Pay transparency is a proven category (Levels.fyi).
- **Who does it today:** FYPM (rate data and "Rate My Offer"), SponsorRadar (claims 50,000+ partnerships, no method published), OutlierKit, Modash, Elev8or's rate report, CreatiCalc, CreatorIQ's State of Creator Compensation (enterprise), Insense (in-platform brand ratings), Popular Pays (brands rate creators), Valen Sentinel and Gamesight (disclosure checks). Collabstr and Passionfroot are marketplaces I know of but did not search. ([Elev8or](https://www.elev8or.io/creator-rate-report-2026))
- **Founder edge:** Gen Z creator world, AI parsing pipelines, trust-by-method (his blind-test habit).
- **First 10 customers:** r/NewTubers, r/influencermarketing and creator Discords: "Send me your last offer, I'll tell you if it's low, free." 100 DMs, 10 paid at $15. Brand side: 20 DTC founders get a free price check.
- **Cost to first revenue:** ~$1,200.
- **Path to big (my arithmetic):** 50k SMB brands and agencies running creator work at $300/mo is $180M, 10% share = $18M; creators add a few $M; escrow at 1.5% of $1B verified GMV = $15M. Realistic $20-50M; $100M only if it becomes the default ledger and payment rail.
- **Kill risks:** FYPM's head start; cold start; brand score defamation exposure (publish only verified, aggregated facts); Gmail audit cost if you go that route.

## 3. TradePay: Levels.fyi meets Doximity for the skilled trades

**One-liner:** County-level pay for electricians, plumbers, HVAC, linemen and welders from public data plus verified paystubs, a verified-trades community, and a job board where pay ranges are mandatory.

- **Customer / who pays:** small and mid-size contractors posting jobs ($149-399 per post or $199/mo), trade schools and apprenticeship programs (lead-gen), and tool, material and distributor brands (sponsorships, $1-5k/mo). The contractor owner or marketing manager signs.
- **Problem:** Gen Z interest in trades is rising, wages for trades roles are reported up ~30% in recent years, and about $162M in new federal grants is opening paid apprenticeships, but pay by county and trade is opaque and the community lives in scattered Reddit and forum threads. (Context sources are vendor or second-hand: [MetaIntro](https://www.metaintro.com/blog/162-million-paid-apprenticeships-in-demand-trades-2026).)
- **Solution:** programmatic pay pages built from BLS OEWS, DOL prevailing wage determinations and union wage scales, upgraded with crowd paystubs; short-form video series ("what electricians actually make in [county]"); verified-trade badges; apprenticeship directory; job board. 18+ accounts only.
- **Why now:** labor shortage plus the "toolbelt generation" story plus federal apprenticeship money.
- **Who does it today:** I found no pay-transparency community or dedicated apprentice job board in 2026 coverage. Adjacent: Workrise (staffing, $2.9B in 2021), Classet (apprenticeship matching), Indeed/ZipRecruiter (generic), free forums and Reddit. ([TechCrunch](https://techcrunch.com/2021/05/20/workrise-once-known-as-rigup-raises-300m-at-a-2-9b-valuation/embed/))
- **Founder edge:** Gen Z video distribution, programmatic-data pipelines; mentor network helps with trade-supplier intros.
- **First 10 customers:** publish 50 county pay pages and 20 short videos in his home metro; sell a $199 featured job post to 10 local contractors and a $500 sponsored-placement slot to the nearest trade school or apprenticeship program.
- **Cost to first revenue:** ~$2,000.
- **Path to big (my arithmetic, assumptions):** 150k contractors posting roles at ~$2k a year is a $300M pool, 5% = $15M, plus sponsorships. The Doximity model (free professional network paid for by marketers) is the upside case.
- **Kill risks:** cold start on both sides; job boards are a crowded category; audience quality (18+ rule).

## 4. CouncilScope: vertical "pre-RFP" signal briefs for small public-sector vendors

**One-liner:** AI reads thousands of council, county, school-board and utility agendas and sends installers, engineers and contractors the projects that will become bids 6-18 months before they are posted.

- **Customer / who pays:** owners and BD leads at 5-50 person vendors (EV-charging installers, school-construction subs, water and sewer engineers, playground and parks vendors, public-safety tech resellers). $99-249/mo. They already pay BidNet or BidPrime ($99-199) or cannot afford GovWin ($1,000+/mo).
- **Problem:** bid aggregators show a project after the solicitation is public; the buying decision happened earlier in budget workshops and minutes.
- **Solution:** one vertical at a time: weekly brief plus alert dashboard, then decision-maker contacts and a bid-draft assistant.
- **Why now:** LLM costs make reading 100k agenda PDFs a month trivial; local funds from infrastructure and broadband programs (unverified detail) keep flowing.
- **Who does it today:** Civic IQ ("pre-RFP" from meetings), Starbridge (bids, meetings, contacts, buyer scoring), BidPrime ($99-199/mo, no AI), BidNet, GovWin ($1,000+/mo), Bonfire (5,000+ SLED sites), Hamlet (resident-facing summaries). ([Civic IQ](https://civiciq.com/public-project/work-session-on-artificial-intelligence-ai-for-city-f4a4afdff3fb72a528442d698ea032ef), [SamSearch](https://samsearch.co/blog/bidnetdirect-alternatives-and-competitors-in-2026), [Fed360](https://www.fed360.agency/blog/govwin-iq-alternatives))
- **Founder edge:** multi-agent research pipelines; self-serve product that speaks for itself.
- **First 10 customers:** pick one vertical and one state; write "your 10 hottest signals this week" by hand-plus-agent; cold-email 300 vendors; 30-day paid trial at $149.
- **Cost to first revenue:** ~$2,500.
- **Path to big (my arithmetic):** 20k vendors at $200/mo is $48M at full penetration; pure alerts realistically top out at $5-15M. $100M needs contact data, bid tooling and licensing to GovTech. Starbridge is funded and may move down-market.
- **Kill risks:** funded incumbents, messy agenda parsing, vendors who say "we have BidNet."

## 5. ReUpload Radar: Content ID for creators below the platform thresholds

**One-liner:** "Here are the 12 accounts reposting your videos right now," plus one-click takedown or a license offer to the reposter.

- **Customer / who pays:** original-content creators with 20k-1M followers (comedy, sports analysis, education, skits). $19-79/mo.
- **Problem:** Meta's Content Protection is limited to creators in its monetization program (others via Rights Manager); YouTube's Copyright Match covers full re-uploads only and began at 100k subscribers; I found no proactive TikTok matching tool. ([Techloy](https://www.techloy.com/meta-rolls-out-new-content-protection-tool-to-fight-stolen-creator-content-on-facebook/))
- **Solution:** perceptual video and audio fingerprints, partial-clip matching, platform-compliant discovery, human-reviewed DMCA filings, optional "license or take it down" links.
- **Who does it today:** Remove.tech, Studio71's short-form claiming (for its own roster), Berify (images), Fanlock (2026, leak protection); platform tools above. ([Remove.tech](https://www.remove.tech/creator-blog/tiktok-content-theft-what-creators-can-do-when-their-videos-are-stolen), [Dot.LA](https://dot.la/copyright-piracy-2659401845.html))
- **Founder edge:** similarity detection (his AI-detector work); Gen Z creator reach.
- **First 10 customers:** pre-scan 100 creators' public videos and cold-DM the evidence of reposts; 10 convert at $29.
- **Cost to first revenue:** ~$3,500.
- **Path to big (my arithmetic):** 100k creators at $30/mo is $36M at full penetration; realistic $10-30M unless the "license to reposters" marketplace works.
- **Kill risks:** TikTok and Instagram have no public matching API, so discovery relies on search, scraping or licensed data (ToS risk); DMCA 512(f) liability for bad takedowns means a human reviews every filing; Meta's free tool may widen.

## 6. Event-Contracts Dive: AI-native trade media and data for the prediction-market industry

**One-liner:** The Industry Dive playbook for a brand-new regulated industry with a fresh sponsor base (law firms, compliance, data, infrastructure, brokers).

- **Customer / who pays:** sponsors (law firms, compliance and data vendors, brokers recruiting) at $750-2,500 per issue package; compliance teams paying $299-999/mo for a regulatory and listings tracker; a job board. B2B only: no retail-facing monetization, no affiliate links, no betting promotion.
- **Why now:** Kalshi reportedly raising at ~$22B (Mar 2026), Polymarket at ~$15B (Apr 2026), the CFTC proposed new rules in Sept 2026, and Kalshi is partnering on employee-trading compliance. ([The Block](https://www.theblock.co/news/business/2025-11-20-kalshi-1-billion-funding), [Bloomberg](https://bloomberg.com/news/articles/2026-04-20/polymarket-in-talks-for-new-investment-at-15-billion-valuation), [Front Office Sports](https://frontofficesports.com/article/kalshi-ceo-downplays-polymarket-rivalry/))
- **Who does it today:** Event Horizon (Substack, Dustin Gouker, 2,000+ subscribers); general crypto and gambling trade press I did not individually check. I found no Dive-style daily with a database. ([Event Horizon](https://nexteventhorizon.substack.com/))
- **Founder edge (weakest idea on this axis):** needs a veteran editor or lawyer partner; his edge is the Gen Z betting world and an AI pipeline that makes a daily affordable.
- **First 10 customers:** 6 weeks of free issues, then pitch 30 law firms and vendors a 4-issue sponsorship; 10 paying = $10-20k.
- **Cost to first revenue:** ~$2,000.
- **Path to big:** Industry Dive-style outcomes are $100M-class (see precedents above); realistic here is $3-10M until the industry is bigger. Honest ceiling risk: tiny audience.
- **Kill risks:** credibility, a market that regulators could shrink, covering gambling-adjacent products (keep it strictly industry coverage).

## 7. MicroDrama Forge: AI-native vertical series for the commissioning market

**One-liner:** A production pipeline that makes 40-60 episode vertical series for under $5k each and sells them to apps that are actively commissioning.

- **Customer / who pays:** micro-drama apps and commissioning programs (Anamana is committing $2M to commission 100 AI-native series, roughly $20k each). Secondary: ad and in-app revenue from own channels.
- **Why now:** Omdia puts US microdrama revenue ~$1.5B in 2026 (66M US monthly users); Sensor Tower counts $750M of global in-app revenue ex-China in Q1 2026; DramaBox did $323M revenue and $10M profit in 2024; ReelShort is forecast at ~$1.05B in 2026. Platforms reportedly buy series at $150-250K each (unverified). ([Interaksyon/AFP](https://interaksyon.philstar.com/hobbies-interests/2026/08/19/317988/microdramas-boom-in-a-shrinking-hollywood-as-studios-chase-a-tiktok-audience/), [StreetInsider](https://www.streetinsider.com/Press+Releases/Anamana+Commits+%242M+to+Commission+100+AI-Native+Micro-Dramas/26056213.html), [Filmustage](https://filmustage.com/blog/short-drama-apps-compared-reelshort-vs-dramabox-in-2026/))
- **Who does it today:** ReelShort, DramaBox, ShortMax and others as buyers; invideo and Genra as tool vendors; Gennial (reported 20 AI microdramas in one month); Anamana as commissioner.
- **Founder edge:** pipeline building and consistent-character automation; weak on writing, so pair with a strong young writer.
- **First 10 customers:** build 2 sample series, submit to every commissioning program and licensing desk; first realistic buyer is a program like Anamana.
- **Cost to first revenue:** ~$4,000.
- **Path to big:** a library with revenue participation plus selling the pipeline to other producers; hit-driven and commoditizing as AI video improves.
- **Guardrails/risks:** no real people's likeness, follow each platform's AI disclosure rules; quality bar is the whole game.

## 8. Player-Owned Gameplay Data Co-op

**One-liner:** Gamers 18+ get paid per verified hour for action-labeled gameplay (screen plus controller inputs) and share in dataset resales to world-model and robotics labs.

- **Customer / who pays:** world-model, embodied-AI and robotics teams that cannot build their own gameplay firehose. Pilot datasets $10-25k (unverified guess).
- **Why now:** General Intuition (spun out of Medal) raised $134M then $320M at $2.3B (June 2026) because action-labeled clips teach cause and effect; reporting did not establish that Medal players are paid. ([TechCrunch](https://techcrunch.com/2026/06/25/general-intuitions-2-3b-bet-that-video-games-can-train-ai-agents-for-the-real-world/))
- **Who does it today:** Troveo (paid $20M+ to content owners, 8M+ hours, expanded into gaming and robotics data in Apr 2026), Kled (task feed, $12M two-year non-exclusive deal claimed), Protege ($30M raise, Jan 2026), General Intuition's own Nerve platform. ([IT Brief](https://itbrief.co.uk/story/troveo-expands-ai-data-platform-into-five-categories), [Solana Compass](https://solanacompass.com/news/kled-ai-signs-12m-data-deal-calls-marketplace-officially-profitable), [SiliconANGLE](https://siliconangle.com/2026/01/08/protege-raises-30m-grow-governed-marketplace-ai-training-data/))
- **Founder edge:** gamer network and recorder-app speed; but buyers are sophisticated and the lane is funded.
- **First 10 customers:** 20 friends record for pay; send sample sets to 30 small labs; one $10-25k pilot is the goal.
- **Cost to first revenue:** ~$8,000 (gamer payouts, legal review of game EULAs).
- **Path to big:** data vendors scale into the hundreds of millions; this is the highest-ceiling, lowest-probability idea here.
- **Kill risks:** game EULAs and anti-cheat conflicts, funded rivals, enterprise sales cycles, paying only verified 18+ adults.

---

## Ranking logic

1. LiveBooks: clearest payer, fastest first dollar, huge growth in the underlying platform, no scaled tool.
2. DealDesk: real unmet pain with a data-asset path, but FYPM and many rate tools exist.
3. TradePay: biggest upside among the uncrowded ideas, slower cold start.
4. CouncilScope: quickest honest revenue but funded competitors and a modest ceiling.
5. ReUpload Radar: strong pitch hook, platform and legal friction.
6. Event-Contracts Dive: proven media playbook, weak founder-credibility fit.
7. MicroDrama Forge: real buyer budgets, hit-driven.
8. Gameplay Data Co-op: biggest ceiling, enterprise buyers, funded rivals.
