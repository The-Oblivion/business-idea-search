# F08 Dossier: Restock Monitors Turned Competitor Sell-Through Radar ("Drop Tape")

**Evidence read (checked 2026-10-25):** weak, and weaker than the gate's "weak" in two places. The gate's "Shopify robots.txt reportedly bars automated access" is wrong for read-only catalog monitoring, which is good news. But the "consented receipt panel" step hits a policy wall the gate did not see (Google bans selling Gmail-derived data), and the one thing a panel would add (resale premium by size) is already public. The only visible route to a $10M+ business is a consumer subscription app (Collectr-style), not a B2B data panel.

## 1. Who already does this, and what is free?

### Takeaway
Every layer is occupied. The raw sold-out/restock layer costs $0 to $150 a month, resale prices by size are public, and the only unoccupied slot (first-party consented demand data) is the hardest layer to build.

### Cited Findings
- Particl's own pricing page lists Starter $250/mo (5 competitors, 3 months of history), Essential $500 (10, 6 months), Growth $1,000 (10, 12 months) and Custom; the page does not mention inventory. [Particl pricing](https://particl.com/pricing). Its homepage claims it tracks "inventory quantities down to the SKU," with no methodology and no investor product. [Particl](https://particl.com/)
- A hands-on review says Particl infers sales from stock depletion, review-count growth and price changes, and calls the numbers educated estimates. [websites2know review](https://websites2know.com/particl-com-review/)
- Particl raised an $8.5M Series A (Nov 2022) after a $5M seed (Dec 2021). [TechBuzz](https://www.techbuzznews.com/luz-closes-8-5-million-series-a-rebrands-as-particl/); [VCBacked](https://www.vcbacked.co/company/particl). Owler's unaudited revenue estimate is $100K to $5M; I could not verify the gate's "$5.5M." [Owler](https://www.owler.com/company/particl-inc)
- Cheap substitutes: EcomScout Signals (launched May 11, 2026; free, $9.99, $19.99; zero reviews) [Shopify App Store](https://apps.shopify.com/ecomscout-signals); Koala Inspector $22/mo for 50 stores [Koala](https://koala-apps.io/blog/koala-inspector-vs-shophunter/); Trendtrack $59/$89/$149 [Trendtrack](https://www.trendtrack.io/blog-post/best-shopify-competitor-analysis-tool); PriceKit free/$19 [Shopify App Store](https://apps.shopify.com/pricekit).
- The Apify Shopify Sales Tracker charges $3.00 per 1,000 changes, reports sold-out and price events (stock-drop only if the store publishes exact counts), and shows just 10 total users. [Apify](https://apify.com/dev_web_col/shopify-sales-tracker)
- My own pull of Kith's public `products.json` (250 products, 2026-10-25) returned a boolean `available` per size and no inventory quantity. A Shopify developer thread says quantity is hidden from public JSON. [Shopify dev forum](https://community.shopify.dev/t/available-field-in-liquid-product-variant-does-not-work-when-inventory-at-app-location/21232)
- Restock alerts: PageCrawl free/$8/$30/$99 [PageCrawl](https://pagecrawl.io/blog/pokemon-tcg-restock-new-set-drop-alerts); PokeNotify advertises 50k+ members with a free lounge and paid monitor channels [PokeNotify](https://pokenotify-web.onrender.com/discord); TrackaLacker free [Discord Hunt](https://discordhunt.com/en/servers/trackalacker-929564867516579902); Retail Monitors $10/mo [Gumroad](https://retailmonitors.gumroad.com/l/AEWWN); Sneaky Deals Elite $10/mo on Whop. [promo-site listing](https://promocodes.beehiiv.com/p/sneaky-deals-elite-promo-code)
- Eighteen paid reseller communities are indexed, including FlipFlip (50K), Deal Soldier (43K), Sneaker Squad (31K). [Hive Index](https://thehiveindex.com/topics/reselling/feature/paid/)
- Resale prices by size: StockX per-size bid/ask/last-sale is scrapable via commercial Apify actors [Apify](https://apify.com/xtracto/stockx-orderbook-scraper); eBay's free Product Research gives 3 years of sold data and a sell-through rate for the last 90 days. [eBay Product Research](https://www.ebay.ca/help/selling/selling-tools/terapeak?id=4853)
- Collectr (TCG portfolio app): 4M+ users, eight-figure ARR, $7.99/mo Pro, five people, bootstrapped. [BetaKit](https://betakit.com/how-collectr-bootstrapped-a-trading-card-hobby-into-an-eight-figure-business/) Card Ladder belongs to PSA's parent. [SCD](https://sportscollectorsdigest.com/news/collectors-universe-acquires-card-ladder-card-grading-values)
- Funds buy scraped and panel data from large incumbents: Thinknum charges $16,800 per user per year, has 300+ firms and 35 scraped datasets including product pricing [Integrity Research](https://www.integrity-research.com/thinknum-adds-web-traffic-data/); YipitData is est. $260M ARR with 650+ customers, receipts among 40+ sources, a 12M+ shopper panel, and SKU-level products for brands. [Sacra](https://sacra.com/c/yipitdata/); [Yipit](https://www.yipitdata.com/)
- ShopVision raised $4.1M seed in Sept 2025 for competitive intelligence from 100,000+ retailers. [BetaKit](https://betakit.com/elastic-path-founders-new-startup-shopvision-secures-5-6m-cad-seed-round/)

### Inferences
- A $199 tier sits in a squeeze between $9.99 to $149 tools and Particl's $250 floor.
- Because StockX and eBay data are public, the panel's resale-premium output is not scarce; what is scarce is checkout success/failure at retail, and that comes from reseller bot users, who are not representative of consumer demand.

### Gaps
- No direct competitor found for a "reseller pressure" metric (share of a drop taken by resellers). Particl's customer count and revenue are unpublished.

## 2. What do customers actually pay?

### Takeaway
Prosumer reseller subscriptions price at $10 to $100 a month with heavy compression at the low end; small streetwear founders look too poor for $199; funds pay $25K to $150K a year per dataset but only for data that clears compliance.

### Cited Findings
- ShockedIO started at about $25/mo and now charges $100; about 850 payers (peak about 1,500); 30 to 50 staff; about $4.4M since 2020 per the founder; bots are built by hired outside developers; the founder's survey claims 40 of 44 new members recouped their fee in week one. [Fortune](https://fortune.com/2026/07/29/subscription-reselling-community-24-year-old-founder-4-million/)
- Sneaker cook groups run about $20 to $75/mo: AMNotify $60, Secured $25 to $30 (promo-site figures) [roundup](https://promocodes.beehiiv.com/p/secured-promo-code); Link'd sneaker info $39.99 to $89.99 on Whop [Whop](https://whop.com/joined/linkd-services/products/basics-package-0c/); FlipFlip has a $10 bot-only plan. [Whop review](https://whop.com/blog/flipflip-review/)
- The reseller margin is thinning: Pokémon booster boxes are down 17 to 24% from launch resale and ETBs about 23% since late July 2026, still above MSRP. [ICv2](https://icv2.com/print/article/63244)
- StoreCensus's 45-store streetwear sample has median estimated revenue of about $1.4K a month. [StoreCensus](https://www.storecensus.com/shopify-stores/streetwear) A Shopify merchant says a weekly manual check of 5 to 10 competitor SKUs gets "most of the value for free." [Shopify Community](https://community.shopify.com/t/merchants-who-track-competitor-prices-what-do-you-use/652475)
- Neudata: most datasets cost $25K to $150K a year; web- and app-tracking data is in the priciest group. [Institutional Investor](https://www.institutionalinvestor.com/article/2bsx5x6m2pew8jzgavmyo/corner-office/how-much-are-managers-paying-for-data)
- Brands already own their own drop data in Shopify; TheDrop sells marketplace data to brands. [Glossy](https://www.glossy.co/fashion/how-streetwear-marketplace-thedrop-became-profitable-during-a-pandemic)

### Inferences
- Willingness to pay for competitor size-level data from brands under about $1M revenue is unproven; the gate's "10 brands at $199" is $24K a year of revenue and says little about scale.

### Gaps
- No price evidence anywhere for a "time-to-sell-out" or "resale-premium-by-size" report. No churn data for reseller groups. No Reddit threads surfaced.

## 3. Law, age and platform policy (including whether the consented panel can exist)

### Takeaway
Read-only monitoring of public Shopify catalogs is more defensible than the gate stated. The panel is the problem: Google's developer policy blocks the obvious build, and fund compliance punishes thin provenance.

### Cited Findings
- Kith's live robots.txt says "Public product, collection, page, blog, policy, cart, and localized HTML is crawlable," allows `/` for all agents, and focuses its agent rules on checkout and payment review (contact bots@shopify.com). [Kith robots.txt](https://kith.com/robots.txt) Allbirds' default file blocks `/cart`, `/checkout` and `/search`, not products. [Allbirds](https://www.allbirds.com/robots.txt)
- Shopify's July 2025 robots comment said scraping and buy-for-me agents are "not permitted," but Shopify pointed to an exec saying it adds no new rules. [Modern Retail](https://www.modernretail.co/technology/shopify-has-quietly-set-boundaries-for-buy-for-me-ai-bots-on-merchant-sites/) Shopify's terms (section 1.9) bar scrapers accessing "the Services" and bind merchants and users; only Shopify can enforce them. [Shopify ToS](https://www.shopify.com/legal/terms)
- Since May 30, 2026 Shopify applies stricter rate limits to unsigned bots on storefront pages. [Shopify changelog](https://shopify.dev/changelog/posts/bots-and-agents-should-identify-themselves-via-web-bot-auth.md) One developer reports signed `/products.json` calls from a datacenter IP getting 429 every time since Sept 29, 2026 while residential calls succeed. [Shopify dev forum](https://community.shopify.dev/t/signed-web-bot-auth-crawler-gets-429-on-every-request-from-oci-since-2026-09-29/38441)
- Case law: Meta v. Bright Data (Jan 2024) held logged-off scraping is not "use" under the terms; hiQ survived the CFAA claim but contract claims are separate. [Farella Braun](https://www.fbm.com/data-analytics/publications/major-decision-affects-law-of-scraping-and-online-data-collection-meta-platforms-v-bright-data/)
- Retail enforcement is contractual and operational: Pokémon Center cancelled many 30th Celebration orders in early Sept 2026, hitting some real buyers; whether Discord alert traffic triggered it is unconfirmed. [Kotaku](https://kotaku.com/pokemon-tcg-30th-celebration-orders-cancelled-bots-scalpers-center-company-2000732116) Nike's terms allow cancelling bot orders. [Complex](https://www.complex.com/sneakers/a/riley-jones/nike-terms-of-sale-resale-update-october-2022) The Stopping Grinch Bots Act (S.3516) was introduced Dec 2025; I found no passage. [GovInfo](https://www.govinfo.gov/app/details/BILLS-119s3516is)
- Age: Discord server subscriptions require an owner 18+ [Game Developer](https://gamedeveloper.com/business/discord-releases-server-subscription-program-in-the-us); Discord made teen-by-default settings global from March 2026 [MediaNama](https://www.medianama.com/2026/02/223-discord-teen-by-default-settings-globally-next-month/); Whop's terms allow users 13+ with parental supervision, so there is no built-in 18+ buyer gate. [Whop ToS](https://whop.com/tos/)
- Panel wall: Google's Limited Use rules cover raw, aggregated, anonymized and derived Gmail data, allow only user-facing features, and prohibit selling or transferring it to data brokers or resellers. [Google policy](https://developers.google.com/terms/api-services-user-data-policy) Restricted-scope verification needs a CASA assessment: $540 (one indie developer) up to $3,000 to $6,000 at a lab, yearly. [Unipile](https://www.unipile.com/integrating-google-oauth-2-0-user-authentication-into-your-app/); [Leviathan](https://leviathansecurity.com/programs/google-casa-cloud-application-security-assessment)
- Precedents: Unroll.me/Slice receipts sold to Uber ended in an FTC order to delete stored e-receipts [Marketing Dive](https://www.marketingdive.com/news/unrollme-under-fire-for-selling-user-data-to-uber/441212/); Edison Mail receipt scraping drew a Vice exposé [CPO Magazine](https://www.cpomagazine.com/data-privacy/top-email-apps-sift-through-user-mails-to-sell-data-products/); Yipit now owns Edison (Sept 2021) and says its panel is opt-in, de-identified and aggregated. [CB Insights](https://www.cbinsights.com/investor/edison-software)
- App Annie paid the SEC $10M for using non-aggregated data against its representations. [Hunton](https://hunton.com/privacy-and-information-security-law/sec-settles-with-alternative-data-provider-for-10-million) Advisers are expected to diligence provenance, including scraping. [Lowenstein](https://www.lowenstein.com/media/iyrpwxij/key-considerations-for-alternative-data-and-ai-vendors-to-investment-firms.pdf) California requires opt-in to sell data of consumers under 16. [Malwarebytes](https://www.malwarebytes.com/blog/news/2024/03/data-brokers-admit-theyre-selling-information-on-precise-location-kids-and-reproductive-healthcare)

### Inferences
- Workable panel designs avoid Google's API (forwarded receipts, uploaded screenshots, self-reported outcomes). Each adds friction, so expect panel size in the hundreds, against Yipit's 12M.
- Do not probe carts or checkout to infer exact stock; Shopify's agent rules target exactly those flows.
- The alert business is probably legal as alert-only, but it exposes him to retailer hostility and a reputational problem (Pokémon products are bought by kids).

### Gaps
- No counsel opinion. Not confirmed whether browser extensions can read order pages under Chrome Web Store rules. Not confirmed whether Whop has a seller age check.

## 4. Where do the first customers gather, and how are they reached?

### Takeaway
Consumer demand is reachable and cheap to test; the white-label premise and every B2B leg are unevidenced.

### Cited Findings
- Reseller audiences live on Discord and Whop: sneaker groups, PokeNotify (50k+), TCG Tracker, PokeFinder, PokePullz. [Hive Index](https://thehiveindex.com/topics/reselling/feature/paid/) Whop charges 3% extra on sales that use access automation, plus 2.7 to 2.9% and $0.30 processing. [Dodo Payments](https://dodopayments.com/blogs/whop-fees-explained)
- ShockedIO runs a waitlisted Whop product and a free server funnel. [Whop review](https://whop.com/blog/shocked-review/)
- Particl lists itself in DTC tool directories. [1-800-D2C](https://1800dtc.com/tool/particl)
- Funds are not cold-reachable: a vendor blog says a new data source takes weeks to clear compliance (secondary claim). [Kadoa](https://www.kadoa.com/blog/alternative-data-for-hedge-funds)

### Inferences
- Cook-group admins already employ developers (ShockedIO hires outside bot builders), so a teen white-label vendor competes with their own staff; I found zero evidence of a market for rented monitors.
- His own Gen Z circle can supply the first 20 to 50 payers fast; 100 payers in 60 days is plausible, 10 brand founders is not obviously so.

### Gaps
- No source on white-label or revenue-share monitor deals. No evidence of where small hype-brand founders gather. No verified route to a fund buyer.

## 5. Unit economics and path to $10M

### Takeaway
Cheap to start, capped on the consumer side, and unsupported on the B2B side. No bottom-up route reaches $10M without a different business.

### Cited Findings
- Components: Apify $3 per 1,000 changes; PageCrawl $8 to $99/mo; Whop about 7% of a $20 sale (3% + 2.7% + $0.30 = $1.44 to $1.48). Proxy costs: no sourced figure. The gate's $800 to first revenue is plausible only for a few stores' worth of monitoring.
- ShockedIO: 850 x $100 x 12 is about $1.0M a year, carrying 30 to 50 staff. [Fortune](https://fortune.com/2026/07/29/subscription-reselling-community-24-year-old-founder-4-million/)

### Inferences
- 100 payers x $20 is $2,000 a month gross, about $1,850 net; this funds the project but not a company.
- $10M at $20/mo needs about 41,700 payers; the largest groups only claim 31K to 50K Discord members, not payers. Collectr reaches eight figures at $7.99 only with 4M users, roughly 100K paying subscribers.
- $10M at $199/mo is about 4,200 brands; at Particl's $500, about 1,700. Particl, after about 5 years and $13.5M raised, has no published revenue; Owler's unaudited estimate tops out at $5M.
- A $1M fund book is about 13 datasets at $75K, each needing a compliance pass a teen vendor is unlikely to get.
- 24/7 monitors, Discord support, anti-bot breakage and Shopify 429s do not fit 10 to 15 hours a week.

### Gaps
- Proxy and residential-IP cost at scale. Real churn. Size of the hype-brand segment (no source sized it).

## 6. Why now

### Takeaway
There is a real catalyst for the investor-signal idea, but it is a public-data play; the consumer-alert timing is mixed to negative.

### Cited Findings
- Resale premium as an equity signal: Labubu blind-box prices fell about 84% from the June 2025 peak per Dewu; Pop Mart shares fell more than 40% in five months from August 2025. Analysts disagreed on whether resale reflects demand or supply (Morgan Stanley said the secondary market is a small share of demand). [KrASIA](https://kr-asia.com/pop-mart-launches-share-buyback-as-labubu-craze-fades); [KrASIA](https://amp.kr-asia.com/pop-mart-pricks-labubus-resale-bubble-in-bid-to-outlast-the-hype)
- Those readings came from Chinese platforms (Dewu, Qiandao, Xianyu); I found no firm systematically selling US resale data to investors. [MarketScreener](https://in.marketscreener.com/news/labubu-resale-price-falls-may-be-more-about-supply-than-demand-ce7d5ddadf8ff22c)
- Headwinds: sealed Pokémon premiums are falling [ICv2](https://icv2.com/print/article/63244); Pokémon Center purges [Kotaku](https://kotaku.com/pokemon-tcg-30th-celebration-orders-cancelled-bots-scalpers-center-company-2000732116); Shopify bot limits since May 2026. [Shopify changelog](https://shopify.dev/changelog/posts/bots-and-agents-should-identify-themselves-via-web-bot-auth.md)

### Inferences
- A public-data resale-premium index for collectibles equities (Pop Mart, Funko, Pokémon-linked names) is the one fresh angle, but it still needs fund compliance, and Yipit and Thinknum already sell to the same buyers.
- If anything is tested, run only a 30-day, under-$1K restock-alert cash test with an 18+ gate. Skip the panel, skip Gmail, and treat "100 payers" as the kill gate. The "10 brands at $199" gate should be dropped as uninformative.

### Gaps
- No current (Oct 2026) data on Labubu or sneaker resale premiums. No buyer interview evidence for any B2B leg.
