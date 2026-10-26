# Round 3 generator: "AI builder" lens (self-serve software, 2026 agents)

Author: lens agent `ai_builder`. Date: 2026-10-25.
Searches run: about 44 (the brief said 8-15; extended because the user's instruction was "go ham"), plus a few page fetches. Every competitor named below came out of those searches; nothing is from memory alone unless marked "unverified".

## What the searching taught me (read this first)

1. **Pure tooling for AI-fluent builders is a dead zone.** Anything aimed at vibe-coders or developers already has free or open-source substitutes plus 5-15 funded or micro competitors (security scanners, App Store preflight, x402 paywalls, GEO trackers, prediction-market dashboards). Strangers pay for **outcomes with a dollar figure attached** (money recovered, a lead, a decision), not for tools.
2. **The product that survives is "AI reads messy documents or public filings at scale" + "a dollar outcome" + "a segment enterprise vendors ignore."** All of the top ideas below follow this shape, which is also the shape of the freight-audit service he already built (ingest documents, apply rules, dispute, contingency fee).
3. **Tariff-refund and similar "shock" plays are already crowded and mostly paid out.** SCOTUS struck down the IEEPA tariffs on 2026-02-20; CAPE opened 2026-04-20; a court filing says roughly $100B+ (about 60%) has been refunded; Caspian ($5.4M seed), Pax AI ($4.5M seed), Flexport, Avalara, Tariff Recovery Group and financing firms are all in. Do not build there now.
4. **Verified gaps found:** (a) no self-serve tenant-side CAM audit for small tenants (LeaseMind is in design-partner mode for 50-lease operators; Visual Lease is enterprise); (b) no consumer-facing structured database of franchise disclosure documents (FDDs), and public brand-level SBA default tables are stale (2014-2018 vintage); (c) no AI bill-level benchmark network for SMB local-service vendors (only human success-fee consultancies like Expense Reduction Analysts, and Xero's ratio-level benchmarks); (d) no tools found for franchisee-side royalty / ad-fund / supplier-rebate audits.

## Ranking logic

Ranked by: probability of a first paying customer in 60-90 days under $10k, x size of the honest bottom-up ceiling, x how little competition the searches found, x fit with his edges (AI-speed building, the freight-audit engine, mentor/family network, Gen Z world).

---

## 1. FranchiseFile: the "credit report" for franchise brands (AI reads every FDD, joins it to SBA loan outcomes)

**One-liner:** AI reads the ~3,000+ public Franchise Disclosure Documents, extracts the 25 numbers that matter (closures/transfers/terminations, Item 19 earnings quality, litigation, fees, supplier rebates, franchisor financial strength), joins them to SBA loan charge-off data by franchise code, and sells prospective franchisees a $99 "read my FDD" report plus brand scorecards.

- **Customer:** prospective franchisees (adults investing $100k to $1M), plus SBA lenders, franchise CPAs/attorneys/consultants who need a fast first pass.
- **Who pays:** prospect $99 per deep report or $29/mo watchlist; advisers/lenders $199-$499/mo seats. Later: franchisors pay for verified-profile and lead-gen, with a firewall so rankings stay independent.
- **Problem:** the FDD is 200-400 pages and the signals are buried. Prospects lean on brokers who, per a 2026 franchise-industry summary, earn 40-50% of the initial franchise fee on a closed sale, and on portals that franchisors pay for. Public brand-level SBA default tables are old (WSJ 2014: Planet Beach 41.1%, Quiznos 29.6%; FitSmallBusiness 2000-2018: best 50 brands 8-25%, worst 50 brands 52-98%). FRANdata says early SBA defaults rose 213% in 18 months, so stale data is dangerous.
- **Solution:** (1) pull FDDs from free state registries (California DFPI, Wisconsin DFI, Minnesota, Washington; confirm each portal's terms); (2) LLM extraction into a page-cited schema (Items 3, 5-8, 19, 20, 21); (3) blind-test extraction against 20 hand-coded FDDs and publish the accuracy; (4) SBA 7(a) FOIA loan-level files (franchise code and charge-off fields; verify field names) for brand-level default rates with sample-size warnings; (5) SEO brand pages ("[Brand] franchise closures, cost, Item 19 reality"), compare-3-brands view, upload-your-FDD report.
- **Why now:** reading 300 pages with citations costs dollars, not hundreds of dollars (LLM long-context is newly cheap and accurate); AI answer engines cite structured brand pages; lead costs are at records (reported 2026 Annual Franchise Development Report: $351 average per lead, up from $271 in 2024; $17,550 per signed franchisee in 2025; service franchises about $608 per lead), so franchisors will pay for quality traffic.
- **Founder edge:** ships a pipeline plus site in 2-3 weeks; his blind-test culture (the AI detector, the pre-registered strategy lab) is the trust signal: "here is our extraction accuracy against hand-coded FDDs." Mentor teaches entrepreneurship, so franchise owners and prospects are reachable by intro.
- **First 10 customers:** post a "closure + transfer + termination rate" leaderboard for the 100 most-searched brands on r/franchising, r/smallbusiness, LinkedIn and franchise Facebook groups; offer "send me the FDD you are evaluating, I will return a cited breakdown free for the first 20" and convert the rest at $99; email 30 franchise CPAs/consultants offering a white-label $49 report. Realistic first dollar in 3-6 weeks.
- **Cost to first revenue:** about $2,500 (LLM extraction for ~1,000 priority FDDs, domain, hosting, Stripe).
- **Path to big:** franchisors reported paying $351 per lead and $17.5k per signed franchisee; brokers take 40-50% of initial fees. Capturing even 5,000 signings a year at a $5k referral/lead-equivalent is $25M; lender and adviser data licensing adds more. Base case $3-10M, upside $30M+. Main risks: franchise-broker registration laws in some states if it ever takes placement fees (get counsel; start with buyer-paid revenue), brand-score defamation (cite the FDD, offer franchisor right of reply), FDD site terms.
- **Who does it today (found):** FRANdata (B2B data for lenders/franchisors, paid reports); lead-gen portals Franchise Gator, FranchiseDirect, Franchise Opportunities, Entrepreneur Franchise 500 (franchisor-paid, no deep analysis); Franchise Business Review (surveys); one tiny "AI SaaS for franchise document risk analysis" listed for sale on Acquire.com at $25,000; generic AI document tools (CaseMark); franchise attorneys ($2-5k reviews, unverified). No consumer database of extracted FDD metrics found.
- **Kill test (14 days):** can extraction hit 95% on closures/transfers/Item 19 fields, and will 5 of 20 prospects pay $99 for the report?

---

## 2. Lease X-ray: self-serve CAM / operating-expense audit for small commercial tenants

**One-liner:** a restaurant, salon or franchisee uploads their lease and annual CAM/tax/insurance reconciliation; the AI turns the lease into rules, flags overcharges clause by clause, and drafts the audit request, for a $149 diagnostic credited against a 25% success fee.

- **Customer:** small tenants on NNN/CAM leases (restaurants, retail, dental/medical offices, salons), multi-location operators and franchisees with 2-30 leases.
- **Who pays:** tenant: $149 diagnostic, 25% of confirmed recovery, or $49/yr per lease for critical-date tracking.
- **Problem:** reconciliations arrive in Q1 (usually due 30-90 days after Dec 31) with short audit windows. Vendors and recovery firms put material errors at roughly 30-40% of statements (Tango Analytics via a Predictap summary; Commercial Tenants Services says about 40% of leases it reviews; MightyBot says 2 in 5 and $5-10B in overcharges; all vendor figures) and a recovery-audit firm says 5-15% of billed CAM is miscalculated or not owed. Typical errors: capital items charged as repairs, management fees above a cap, wrong pro-rata share, uncapped controllable expenses. Small tenants cannot afford a $3-10k manual audit.
- **Solution:** extract ~30 provisions (pro-rata formula, caps, exclusions, gross-up, base year, admin/management fee, audit rights, notice window, look-back) from the lease PDF; parse the reconciliation; compute expected vs billed; every flag cites the clause; auto-generate an audit-rights request and dispute letter; deadline tracker so the audit window is never missed. Test set: thousands of real commercial leases sit on SEC EDGAR as exhibits to public-company filings.
- **Why now:** long-document extraction with citations is finally reliable; insurance and property-tax pass-throughs have jumped; reconciliation season starts in Q1 2027, exactly when he has school-year hours and before summer.
- **Founder edge:** it is the freight-invoice audit engine pointed at a new document type (ingest, rules, dispute packet, flat diagnostic plus contingency). Family and mentor network can supply the first tenants and a commercial-lease sanity check.
- **First 10 customers:** free "statement X-ray" (statement only, finds math and share errors) pitched on r/restaurateur, r/smallbusiness, franchisee Facebook groups, local chamber members and tenant-rep brokers; mentor intros to 3 multi-location operators; "no recovery, no fee" to remove trust friction. First paid diagnostics in 3-6 weeks; first recoveries after landlord responses.
- **Cost to first revenue:** about $1,500 (LLM, domain, e-sign, insurance quote).
- **Path to big:** average small-tenant pass-throughs of $20-40k a year x 5% recoverable = $1-2k per audited tenant; at 25% that is $250-500 revenue per tenant-year. $10M needs about 20-40k active tenants; plausible only if it expands into a tenant "lease OS" (option and critical dates, rent escalations, percentage-rent checks, ASC 842 schedules, tax and insurance pass-through audits) and builds landlord-level CAM benchmarks. Base case $2-8M, upside $20-40M. Risks: landlord retaliation fear, backup-invoice access, wrong flags damage trust (always cite the clause), leases that require a CPA-certified audit.
- **Who does it today (found):** LeaseMind by MightyBot (design-partner pilot, 5 slots, aimed at multi-location operators with dozens of leases, no price listed); Visual Lease (enterprise tenant-side CAM module); Tango Analytics; human lease-audit firms (Commercial Tenants Services, Mohr Partners, recovery boutiques); landlord-side tools (Yardi, Re-Leased, Stratafolio, ChatFin). No self-serve small-tenant product found.
- **Kill test (14 days):** run the engine on 20 real EDGAR leases with synthetic statements, and have 10 real tenants send statements; if fewer than 3 show a confirmable overcharge above $500, stop.

---

## 3. Bill Benchmark: upload any recurring vendor bill, get a peer benchmark, contract-trap flags and a switch plan

**One-liner:** the cost-reduction consultancy for businesses too small to hire one: photo or PDF of a waste, linen/uniform, grease-trap, pest, internet/phone or processing bill in, "you pay 22% above the median for your zip, here is the auto-renew trap and the cheaper quote" out; paid on verified savings.

- **Customer:** independent restaurants, multi-unit operators, franchisees, salons, gyms, small medical/dental offices. Beachhead: restaurants and franchise units (about 1M US restaurant locations is the commonly cited figure; unverified).
- **Who pays:** owner pays 20-30% of verified first-year savings or $29/mo monitoring; brokers and vendors pay referral fees on switches (waste brokers are paid by haulers).
- **Problem:** vendor price creep and evergreen contracts. Example anecdote: a Waste Management commercial dumpster bill rising from $78.76 to $181.48 a month in five years (Trustpilot, unverified). Nobody shows a small business what peers pay.
- **Solution:** bill-to-structured-data extraction for ~8 bill types; benchmarks seeded from public rate cards (municipal franchise waste rates, utility tariffs, FCC broadband labels) so the cold start is solved before peer uploads exist; contract-trap detector (auto-renew, escalators, fuel and environmental surcharges); one-click letter of authorization to get competing quotes; savings tracking.
- **Why now:** bill extraction is cheap and accurate; price creep 2024-26; Xero launched ratio-level industry benchmarks in June 2026 (proves SMBs want benchmarks, but not at line-item level).
- **Founder edge:** reuses the freight-audit engine; multi-agent research pipeline scrapes rate cards; family restaurant and business owners for the first 20 uploads.
- **First 10 customers:** free "send me your last 3 bills" diagnosis for 50 restaurants (family, mentor, restaurant-owner Facebook groups, local restaurant association); sell the switch/negotiate step on contingency; sign one waste/linen broker for rev-share.
- **Cost to first revenue:** about $2,000.
- **Path to big:** an average $3-8k a year of savings across waste, linen, processing and telecom x 25% fee = $1-2k per customer; 10k customers = $10-20M. The human version (Expense Reduction Analysts, success-fee, ERA-linked pages cite 15-20% typical savings per category) proves the category is large; benchmark data becomes the moat. Risk: savings need negotiation labor; start with categories where a competing quote is one email (waste, internet, processing).
- **Who does it today (found):** Expense Reduction Analysts and Cost Reduction Analysts (human success-fee consultants); Xero Industry Benchmarks (ratios only); delivery-app reconciliation tools (Virturant Rapid-Reconcile, Deliverect Resolve); waste brokers. No AI bill-level peer benchmark network found.

---

## 4. Franchisee Margin-Leak Audit (royalty base, ad fund, supplier rebates, tech fees vs the contract)

**One-liner:** multi-unit franchisees upload their franchise agreement, royalty remittances, ad-fund statements and supplier invoices; the AI checks the royalty base, ad-fund accounting, required-supplier pricing vs market, disclosed rebates (FDD Item 8) and tech-fee creep against what the contract allows.

- **Customer:** owners of 3-50 franchise units (restaurants, fitness, home services, hotels), franchisee associations.
- **Who pays:** $299 per unit per year, or 20% of verified overcharges; association group licenses.
- **Problem:** franchisees often cannot see where supplier rebates go. Disputes are common (the Cold Stone franchisee association sued over rebate transparency; trade press documents rebate disputes), and the Franchise Rule does not require per-product sourcing disclosure.
- **Solution:** reuses the FranchiseFile dataset (Items 5-8) and the Lease X-ray engine (contract to rules, statement to flags); outputs a private audit and an association-ready benchmark of royalty, ad fund and supplier cost by brand.
- **Why now:** margin squeeze, 2025-26 cost inflation, vendor-rebate scrutiny, cheap contract and invoice extraction.
- **Founder edge:** shares the data engine with ideas 1 and 2; mentor and entrepreneurship network reach franchisee owners; Gen Z "owner-operator" kids of franchisees exist in his school.
- **First 10 customers:** franchisee Facebook groups per brand, AAFD events, association newsletters, a free "royalty base check" using only one month of remittance plus the agreement.
- **Cost to first revenue:** about $1,500 (after idea 1's pipeline exists; otherwise $3,000).
- **Path to big:** about 800k franchise units (IFA figure; verify) x $300-500/yr = $240-400M gross ceiling; $10M needs roughly 25-30k units (about 3-4%), reachable through group deals with franchisee associations. Risks: confidentiality clauses, franchisor retaliation, sales cycle, defamation (keep audits private to the franchisee).
- **Who does it today (found):** no franchisee-side audit software found; franchise attorneys and accountants do it by hand; association lawsuits. Evidence of the gap is thin; treat as a hypothesis to test with 10 interviews.

---

## 5. Collectibles Dealer OS: vision intake of mixed lots, cost-basis allocation, multichannel listing, live-show P&L and 1099-K reconciliation

**One-liner:** photograph a bulk lot (cards, comics, sneakers, toys) once, get item IDs and comps, allocate the lot cost across items, list to Shopify/eBay/TCGplayer/Whatnot, run profit per live show, and reconcile the year-end 1099-K against real cost basis (so resellers do not pay tax on gross).

- **Customer:** local game/card shop owners and full-time Whatnot/eBay/TikTok Shop resellers (Gen Z and millennial hobbyists).
- **Who pays:** $39-$99/mo; shops $99-$229/mo.
- **Problem:** Whatnot is the fastest-growing channel (Series G of $545M at a $20B valuation in Aug 2026; about $8B GMV in H1 2026 per a trade outlet; one in eight sellers full-time; Shopify integration launched Apr 29, 2026). Sellers buy lots and never have per-item cost basis, so margins and taxes are guesses.
- **Solution:** vision-first intake (his House Money live-dealer spike already proved tracked card-swap on video), lot-cost allocation, comps from sold listings, listing push, show P&L, tax export. **Strictly fixed-price/auction only: no randomized "breaks"** (Whatnot faces 15 arbitration claims arguing breaks are unlicensed lotteries, so building break tools would cross his gambling guardrail).
- **Why now:** hobby commerce is booming, vision IDs of mixed lots are newly accurate, Whatnot-Shopify sync gives an API on-ramp.
- **Founder edge:** Gen Z, gamers and collectors in his circle; shipped deployed apps with accounts and economies; video and card-tracking prototype.
- **First 10 customers:** school and college collectors, 5 local card shops via walk-in demo, r/PokemonTCG-adjacent reseller subs, Whatnot seller Discords; offer a free 1099-K cost-basis worksheet during Q1 tax season.
- **Cost to first revenue:** about $3,000 (vision API, hosting, device testing).
- **Path to big:** 100k full-time-ish sellers x $50/mo = $60M ceiling; need about 17k paying for $10M. Big risks: Whatnot or Shopify absorbing features, thin extension-style competitors already exist, ToS on data access.
- **Who does it today (found):** shop POS and scanners SortSwift, TCGSync Storefront Pro, NeoSatoshi ($99-$229/mo); live-seller Chrome extensions WhatLabels, BundleLive, Resellbot's Whatnot Double Check (profit calc added Feb 2026), Whatnot Seller Analytics; consumer scanners Collectr, Poke Pricer; Whatnot's own Seller Hub. Gap: lot-cost allocation plus 1099-K basis reconciliation.

---

## 6. Mandate Radar: leads for buildings legally forced to repair by a deadline

**One-liner:** a weekly feed for commercial contractors of buildings that failed a milestone inspection, filed an unsafe-structure notice, or face a legal recertification or repair deadline (Florida milestone/SIRS and 40-year recertification; NYC façade Local Law 11), with building, owner/management contact, deadline and estimated scope.

- **Customer:** concrete-restoration, roofing, waterproofing, painting, engineering, fire-alarm, elevator and scaffolding contractors working on condos and commercial buildings.
- **Who pays:** contractor $299-$999/mo per trade per county; high-ACV jobs ($100k-$5M) make a single win cover years.
- **Problem:** Florida's post-Surfside rules (milestone inspections for buildings 3+ stories at 30 years, or 25 near the coast; SIRS reserves; reserves can no longer be waived since July 1, 2025) force repair spending; one South Florida analyst (promotional source) estimates special assessments of $25k per unit in low-rises to $100k+ in towers. Contractors learn about jobs late.
- **Solution:** agents continuously read county and city portals, building-department notices and association postings (messy, per-jurisdiction); normalize, de-duplicate, tag trade and urgency; delivery by email/CRM export; exclusive territory per trade. Expand to NYC Open Data façade filings, Chicago and Boston ordinances.
- **Why now:** compliance wave peaking through 2026-27; thousands of portals are now cheaply scrapeable by agents.
- **Founder edge:** scraper and agent fluency; start in whichever metro he lives in (South Florida has the strongest mandate-driven demand); condo owners' families in his network can verify lead quality.
- **First 10 customers:** build a 50-building sample for one county, cold email 100 restoration/roofing/engineering firms with 5 free leads, sell the exclusive-trade territory for $499/mo.
- **Cost to first revenue:** about $2,000 (proxies, browser-agent runs, hosting).
- **Path to big:** 1,000 contractors x $6k/yr = $6M in two or three metros; $10M+ requires NYC, Chicago and other mandate cities. Risks: coverage varies by jurisdiction, generic permit-lead micro-products already exist, solicitation and contact rules (no cold calls/texts without compliance; mail and email are fine).
- **Who does it today (found):** PermitGrab ($149/mo flat), BellAveGo (claims 60+ public-data signals, exclusive per zip, $197/mo), Signals (21+ cities), Shovels (permit API, 2,770+ jurisdictions), Apify code-violation scrapers, ConstructConnect/Dodge (enterprise); buyer-side condo tools GoverningDocs, StrataReports, CleanCondo (launched July 2026), Kaloop. None found selling a milestone/SIRS/recertification repair pipeline to contractors (unverified; test first).

---

## 7. Closing Guardian: loan-estimate-to-closing-disclosure checker for homebuyers

**One-liner:** upload the Loan Estimate and Closing Disclosure; the AI classifies every fee into the three Reg Z tolerance buckets, flags violations the lender must cure, and drafts the request.

- **Customer:** first-time homebuyers; secondary: mortgage brokers and buyer's agents who want a client-service tool.
- **Who pays:** buyer $39 flat; brokers/agents $99/mo. **Do not take referral fees from lenders or title companies (RESPA section 8).**
- **Problem:** the CD arrives about 3 days before closing and tolerance violations (unexplained increases in zero-tolerance fees, or a 10%-bucket overrun) must be cured by the lender, but borrowers never check.
- **Why now:** document extraction plus rule logic is cheap; only lender-side compliance tools exist (CaseMark tolerance workflow, SEI).
- **Founder edge:** document-audit engine; weak on distribution (not Gen Z's moment yet).
- **First 10 customers:** mortgage brokers and buyer's agents via local meetups, r/FirstTimeHomeBuyer, TikTok explainer clips.
- **Cost to first revenue:** about $1,000.
- **Path to big:** about 4M financed purchases a year x 3% adoption x $39 is under $5M; B2B2C could double it. Honest read: small, wrapper-adjacent; included because no consumer tool was found.
- **Who does it today (found):** CaseMark and SEI (lender/compliance side); no consumer-facing checker found.

---

## 8. Wildcard: UI gyms (website-clone environments) sold to AI labs

**One-liner:** build high-fidelity, deterministic clones of common web apps (admin consoles, booking sites, spreadsheets) with seeded states, verifiers and 200 tasks each, and sell them to labs and agent companies.

- **Customer:** about a dozen frontier labs and agent startups.
- **Who pays:** reported about $20k per "UI gym" (SemiAnalysis via Epoch interviews); common task pricing $200-$2,000 per task; larger contracts $300k-$1M+ per quarter; exclusivity commands a premium (unverified multiplier).
- **Problem for him:** buyers are concentrated, prefer embedded partners, may not take an 18-year-old seriously cold, cloning real products carries IP and ToS risk (use synthetic "inspired-by" apps), and it is on the round-2 cliche list.
- **Edge:** he has shipped stateful multi-game apps with accounts and economies and runs multi-agent pipelines; verifier design resembles his blind-test habit.
- **First customers:** Prime Intellect Environments Hub bounties; aggregators that broker environments; mentor/family introductions; sell the first environment as a 14-day paid pilot.
- **Cost to first revenue:** about $3,000; first revenue likely beyond 90 days.
- **Path to big:** an environment hub or "RL studio for SMB workflows" could be venture-scale, but the market may narrow to a few winners by 2030.
- **Who does it today (found):** Mechanize, Prime Intellect, Mercor, Surge, Turing and others; marketplaces such as aitrainer.work list buy-side demand.

---

## Searched and rejected (so nobody repeats the work)

| Area | Why rejected | Evidence |
|---|---|---|
| IEEPA tariff-refund services | Law-firm and startup crowded; roughly $100B+ already refunded; downstream carrier refunds flowing | Caspian ($5.4M), Pax AI ($4.5M), Tariff Recovery Group, Flexport, Avalara, Commercial Finance Partners; FedEx/UPS/DHL refund portals |
| Vibe-code security scanners | At least 10 products at $6-$99/mo | VibeSafe, Vibe App Scanner, VibeCheck, VibeEval, UNPWNED, VibeShield, VibeDoctor, VibeLint |
| App Store preflight for AI-built apps | Free open-source (Greenlight) and Claude skills, plus Rork's AI reviewer | Greenlight, App Store Preflight skill, maj-labs skill, Rork AI App Reviewer |
| Prediction-market analytics | 8+ tools, mostly free; Oddpool raised $3M seed then joined Kalshi; commodity-trading-adviser risk if recommending trades | Kalshinomics, Hashdive, Polymarket Analytics, Predictu, Vezta, SimpleFunctions, 0xinsider |
| x402 / agent micropayments | Volume collapsing: roughly $800k/day in Jan to $40k/day in Sept; heavy wash trading | American Banker, Artemis, TRM Labs |
| ChatGPT app directory | Monetization limited; Instant Checkout rolled back March 2026 | OpenAI developer pages, trade press |
| GEO/AEO, agentic-commerce readiness | On cliche list; Shopify makes storefronts agent-ready by default | Profound, Peec, Otterly; Shopify Catalog/UCP |
| EAA/ADA code-level remediation | Established overlay and remediation vendors; FTC fined accessiBe $1M | TestParty, WebAbility, AudioEye, accessiBe |
| Condo/HOA document analyzers | Four entrants in 2026 | GoverningDocs, StrataReports, CleanCondo, Kaloop |
| CPG retailer-deduction recovery | Funded and contingency competitors | Glimpse ($10M), SPS Commerce Revenue Recovery, RevRecoup, Carbon6, SupplyPike, Promomash $349-$1,250/mo |
| Roofing supplement writers | Product exists; public-adjuster licensing risk | RoofGenius AI ($249) |
| Google LSA lead disputes | Google replaced manual disputes with automatic credits in 2024 | Search Engine Land |
| Pro-AV design/proposals | Crowded despite mentor access | XTEN-AV, D-Tools (free solo tier), Jetbuilt AI |
| Mystery-shopper calls | Call-scoring incumbents | Invoca, Marchex, Convirza |
| Demurrage and detention audit | Rule partly vacated; vendors exist | FreeTimeLedger, nVision, Kognitos, Portcast |
| CPSC eFiling prep | In effect July 8, 2026 but soft enforcement and brokers file | Comply PRO+, ShippyPro |
| Site-selection reports | Micro-products at $49 | PlacePilot, Spotfic |
| Car deal/OTD checkers | Four apps already | DealLens, DealCheck Defender, OTD Shield, CarEdge |
| IEC college-planning software | Established and small | AdmitPlatform ($65/mo), CounselMore ($35/mo); also minors-adjacent |
| Card-break tooling | Possible lottery/gambling exposure | Whatnot arbitration claims |

## Key sources (for the next stage to re-verify)

- Franchise lead costs: https://www.franchising.com/articles/20260923_tracking_average_costs_per_lead_and_costs_per_sale.html
- FRANdata SBA outlook: https://frandata.com/franchise-sba-lending-outlook-2025/
- Stale SBA brand defaults: https://fitsmallbusiness.com/best-franchises-sba-default-rates/ and https://www.qsrweb.com/news/quiznos-cicis-cold-stone-cited-for-having-high-default-rates/
- AI FDD SaaS listed for sale: https://app.acquire.com/startup/cztzfripdh-ai-saas-for-franchise-document-risk-analysis
- LeaseMind: https://mightybot.ai/agents/leasemind/
- CAM error rates: https://blog.predictap.com/the-15-billion-problem-hiding-in-plain-sight and https://www.wealthmanagement.com/real-estate/retailers-are-fighting-back-against-cam-charge-errors
- Xero benchmarks: https://www.xero.com/media-releases/xero-introduces-industry-benchmarking-intelligence-for-small-businesses/
- Franchise rebate disputes: https://www.restaurantbusinessonline.com/financing/recent-disputes-highlight-franchisors-use-vendor-rebates
- Whatnot: https://valueaddedresource.net/whatnot-20-billion-valuation/ and https://www.modernretail.co/technology/live-shopping-platform-whatnot-taps-shopify-to-reach-millions-of-merchants-as-it-chases-growth/
- Lead-feed competitors: https://www.saashub.com/permitgrab and https://hunted.space/product/bellavego
- RL environments: https://epochai.substack.com/p/an-faq-on-reinforcement-learning
- CleanCondo: https://www.pr.com/press-release/973553
- Tariff refunds: https://greatlakescustomslaw.com/ieepa-tariff-refunds/
