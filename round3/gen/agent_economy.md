# Round 3 / lens: products sold TO AI agents or to the people building them (late Oct 2026)

About 31 searches grounded this. Most sources are vendor blogs, so figures marked (v) are vendor-reported and unverified.

## What is already crowded or dead (do not build these)

| Area | What I found | Verdict |
|---|---|---|
| Pay-per-call / x402 API marketplaces | Coinbase x402 (now under the Linux Foundation, per Blockscout docs), Polygon Agentic Services, PayAPI Market, Circle, Stripe Machine Payments, Solana MPP. One guide (v) claims 165M transactions at about $0.30 average, roughly $50M cumulative. | Rails are built, funded and dominated by big players. Volume is tiny and mostly crypto-native. Dead for a newcomer. |
| MCP server monetization | Smithery, MCPize, AgenticMarket, Apify. One blog (v): fewer than 5% of 12,000+ servers monetize. | Crowded and thin. The people who make money are the platforms. |
| Agentic affiliate links | ChatAds, Wildfire, Syndicate Links, LinkAffix, Skimlinks. | Crowded and early. Skip. |
| Vibe-coded app security scanners | Vibe App Scanner (free, $19 deep scan, $99/mo; TrustMRR shows about $500/mo revenue and 19 subscribers), VibeDefend, VibeScan, SymbioticSec's open-source scanner. | Commodity at $0-100/mo. Scanning alone cannot pay. |
| Agent identity / KYA | Vouched ($17M Series A), Skyfire, Entrust, Trulioo, Microblink. | Enterprise-sold and funded. He has no cold credibility. |
| MCP security / rug-pull scanning | Snyk Agent Scan (ex Invariant/MCP-Scan), mcpwn, MCP Fortress, $29-$750 audits. | Crowded. |
| Humans-for-agents marketplace | RentAHuman: about 160k humans signed up but only 81 agents posting jobs (one report). | Supply glut, no demand. |
| SMB "AI visibility" tracking | BrightLocal $31/mo, Otterly $29, Local Falcon $25, Rankscale about $20. | Race to the bottom. |
| Store "agent readiness" scoring | Shopify's free scorer (31 checks), an Apify auditor at $4.25 per 1,000 tasks, WooCommerce plugin. | Free substitute exists. |
| Voice-agent QA | Cekura ($0.25/min; $500/mo plan), Hamming, Coval. | Funded and already self-serve. |
| llms.txt tooling | One audit found 97% of 38,000 valid llms.txt files got zero requests. Google Lighthouse now checks it for free. | No business. |
| Generic AI QA testing | Momentic, QA Wolf, Applitools, Mabl, Autify. | Crowded. |

---

## 1. TokenAudit: the freight-audit playbook, pointed at AI bills

**One-liner:** Pay-on-savings optimizer for startups' LLM and agent API bills. He takes 20% of verified savings and nothing if there are none.

- **Customer:** Seed to Series B AI-product startups and agent-heavy small companies spending $5k-$150k a month on OpenAI, Anthropic, Gemini or Bedrock. The founder or CTO signs. The bill is a COGS line that already exists.
- **Who pays:**
  - A free Savings Scan from a usage export.
  - Optionally a $500 flat diagnostic, credited against the share (the same two-part structure as the freight service).
  - Then 15-25% of verified monthly savings for 12 months. Savings are measured against provider invoices, not his own dashboard, versus a baseline cost per unit of work at equal graded quality.
- **Problem:** The fixes are known and nobody has time to do them: prompt caching, the 50% batch discount, downgrading easy calls to cheaper models, trimming context, routing. A LiteLLM case study reports about 51% saved (v). Three weaker substitutes exist:
  - Trackers show spend but do not cut it.
  - Routers are DIY.
  - Flat-fee audits exist (Upwork gigs, an AWS Marketplace listing, ActiveWizards).
- **Solution:**
  - An open-source CLI that runs inside the customer's environment, so no prompts ever reach him.
  - It samples their logs and replays them on cheaper configurations.
  - It grades quality parity with their own eval set, or an LLM judge calibrated on 100 labeled pairs.
  - It outputs a ranked savings plan with a parity score.
  - He ships the change as a pull request or a thin proxy.
  - Later this becomes an always-on gateway that keeps re-optimizing as model prices move.
- **Who does it today (searched):**
  - Cost trackers: CloudZero ($56M Series C), Vantage, Finout, Pay-i, Datadog, YC W26 SuperPenguin.
  - Routers: Not Diamond (51% self-savings case), OpenRouter, LiteLLM.
  - Flat-fee audits: ActiveWizards, Upwork freelancers, an AWS Marketplace audit.
  - I found no one charging a savings share on LLM spend. This was one targeted search, so confirm Martian and OpenPipe pricing before launch.
  - The pricing model is proven in cloud: ProsperOps charges a "Savings Share" on realized AWS savings.
- **Why now:** Agents and coding tools multiply token use. Frontier and open-model prices move monthly, so the optimum keeps moving. A 2026 FinOps survey (secondary source) says AI spend management went from 31% to 98% of FinOps teams in two years.
- **Founder edge:**
  - He already built the contingency-fee audit machine for freight: baseline, evidence pack, share.
  - Quality-parity grading is his blind-test skill. His AI-text detector beat commercial ones in his own tests.
  - Claude Code is his daily driver.
- **First 10 customers:**
  - Post "I'll cut your AI bill or you pay nothing" with a before/after case on his own multi-game app.
  - Post in r/ClaudeAI, r/LocalLLaMA, Indie Hackers, and the Lovable, Cursor and Replit Discords.
  - DM founders who tweet their AI bills.
  - Use the mentor's and family's founder network for 3-5 warm intros.
  - The offer is a free scan from a CSV export.
  - Target 10 signed by day 75.
- **Cost to first revenue:** about $400 (replay credits, domain, LLC).
- **Path to big:**
  - A typical customer: a $30k/month bill, 40% saved, 20% share, so about $29k a year in revenue.
  - About 350 customers is $10M, with about $126M of annual spend under management.
  - That is roughly 1.5% of Menlo's mid-2025 enterprise LLM spend figure of $8.4B, a number that has surely grown since.
  - The gateway version raises retention.
- **Honest risks:**
  - Savings shrink as list prices fall (re-base the baseline quarterly).
  - Customers can do the work themselves after one audit.
  - Providers could ship native optimizers.
  - The trust ask is real, which is why the harness runs on the customer's side.

## 2. AgentFit: "Lighthouse with real agents" for API and devtool companies

**One-liner:** Run Claude Code, Codex, Cursor and Gemini CLI against a devtool's signup-to-first-API-call flow 200 times, then report the success rate, the exact failure modes and the fixes. Re-run it on every release.

- **Customer:** Seed to Series C API and devtool companies (auth, email, databases, payments, observability). The buyer is the head of DevRel, docs or developer experience.
- **Who pays:** $2,500 for a one-off audit, or $750-$2,500 a month for release-by-release regression monitoring plus a GitHub Action. Docs and DevRel budgets already fund Mintlify-class tooling.
- **Problem:** Agents are now the main integrators.
  - Mintlify says nearly half of docs traffic is AI agents (via Evil Martians; v).
  - Existing offerings are static checks (Fern's Agent Score leaderboard, Mintlify's `mint score` CLI) or consulting (Evil Martians "Agent Experience").
  - Nobody I found sells measured end-to-end task success across several real agents.
- **Solution:**
  - A harness that runs each agent in a fresh container against a per-product task bank. Tasks include signup, API key, first call, webhooks, pagination, error handling and a v1 to v2 migration.
  - It reports pass rate over N runs, steps, tokens and the points where the agent gave up.
  - A public "AX Index" of the top 50-200 devtools is the free marketing engine.
  - The paid layer is private reports and CI.
- **Who does it today (searched):** Fern Agent Score (free), Mintlify CLI score, StartupHub Agent Readiness Index, Stainless's AX guide, Evil Martians (services), an unattributed "AX Benchmark" page. The big docs vendors can bolt this on, and the free scorers anchor price low.
- **Why now:** Agent traffic to docs is rising, MCP is common, and Lighthouse added an agentic-browsing audit in May 2026, which makes "agent-readiness" a mainstream line item.
- **Founder edge:**
  - He lives in these agents all day.
  - He has already built multi-agent pipelines and a blind-test rigor.
  - An 18-year-old who is clearly a power user is credible to developers in a way he would not be to enterprise buyers.
- **First 10 customers:**
  - Build the public AX Index of 50 devtools in two weeks (about $300 of compute).
  - Send each company its own failure video and top-3 fixes.
  - Sell the $2,500 audit to the 5-10 that reply.
  - Use the mentor's founder network for warm intros.
- **Cost to first revenue:** about $700.
- **Path to big:** Become the score people cite (the "Lighthouse for agents"), with monitoring as the subscription. Devtools alone is thousands of companies. To reach $10M+ it has to expand to every SaaS with an API or agent surface (tens of thousands). At $1k/month, 1,000 customers is $12M. Honest ceiling if it stays devtools-only: roughly $3-8M.

## 3. Humanness Arena: a Gen Z ground-truth panel for people building AI products

**One-liner:** Blind pairwise tests by verified 18-24-year-olds on whether an AI's output feels human, trustworthy and non-cringe, sold per study and later as an arena plus dataset.

- **Customer:** Consumer AI teams (companions, voice, video, image, writing tools), AI-detector companies, and synthetic-research startups that need real-human calibration. Do not sell to "humanizer" tools, which are academic-dishonesty adjacent.
- **Who pays:** The product or eval lead, at $3-15k per study or a $2-5k/month weekly-test retainer.
- **Problem:**
  - Public leaderboards measure general ability, not taste.
  - Synthetic respondents are hot (Aaru is reported at about $1B) but are weak on novelty and thin segments.
  - I found no Gen Z calibration study at all.
- **Solution:**
  - Recruit 500-2,000 consented adults aged 18+ from his school, college, gaming and Discord world.
  - Run blind A/B tests on a customer's outputs against competitors.
  - Deliver a Humanness score, a failure taxonomy and a calibration set.
  - His own AI-text detector doubles as fraud control on panelists who use AI to answer.
- **Who does it today (searched):**
  - LMArena/Arena: about $30M run rate within 4 months of launching paid AI Evaluations, then a reported $100M run rate within 8 months, and a $1.7B valuation (Jan 2026).
  - Yupp: $33M seed from a16z crypto, paid users to rate models, shut down within a year. The lesson is not to run consumer cash-for-votes with API costs.
  - Prolific, Surge, Scale and Mercor for general human data.
  - Synthetic-research players: Aaru, Simile, Qualtrics synthetic panels.
  - None of these is a Gen Z taste-and-humanness specialist, as far as I found.
- **Why now:** The Arena precedent proves buyers pay for human preference. Synthetic research needs ground truth. "Feels human" is a product metric for companions and creative tools.
- **Founder edge:** Blind-testing is the thing he has already done (detector vs. commercial detectors). He has a Gen Z network and in-app-economy experience from the casino app for panel incentives.
- **First 10 customers:**
  - DM 100 seed-stage consumer AI founders (Product Hunt, recent YC consumer batches).
  - Offer a free 100-rater mini-study on their own outputs, then convert at $2.5k.
  - Add AI-detector companies as buyers of human-judgement data.
- **Cost to first revenue:** about $1,500 (panel gift cards, a consent flow).
- **Path to big:** An Arena-style public leaderboard plus licensed preference datasets to labs and synthetic-research firms. Honest risks: panel fraud and quality, consent and PII handling, and customer concentration.

## 4. Twin Factory: cheap UI gyms and SaaS twins for agent builders

**One-liner:** Deterministic clones of popular web apps (with state, tasks and verifiers) delivered in days at 50-70% below the funded players, for agent startups and mid-tier labs.

- **Customer:**
  - (a) Computer-use and agent startups and neolabs training or evaluating agents.
  - (b) Teams building agents on Slack, Salesforce or Shopify that need safe sandboxes.
- **Who pays:** About $4-8k per non-exclusive "UI gym", versus about $20k each for web replicas per SemiAnalysis (via Epoch). Or $99-$499/month for access to the twin library.
- **Problem:** Epoch's interviews: contracts run six to seven figures per quarter, and exclusivity costs 4-5x more. RL demand is "10-20x" benchmarking demand, and Anthropic reportedly discussed spending over $1B on environments.
- **Solution:** Use AI-speed building to ship web replicas fast, with graders. Publish open demo gyms (an Airbnb-like, a Gmail-like, a Shopify-admin-like) to build reputation, and list them on Prime Intellect's Environments Hub.
- **Who does it today (searched):**
  - Halluminate ($30M Series A, now narrowing to finance).
  - Plato.
  - Veris ($8.5M seed).
  - Arga Labs (YC).
  - Archal.
  - Pome.
  - Deeptune (reported $27.8M Series A, then agreed to be acquired by Mercor).
  - Mercor, Surge, Handshake and Turing sell environments too.
  - Labs are increasingly in-housing.
  - This is the most crowded idea on my list.
- **Why now:** RL-environment demand is exploding and fidelity is bottlenecked on engineering hours, which AI coding agents cut sharply.
- **Founder edge:** He ships complete web apps with accounts and economies in days, and has a verifier mindset from his backtesting and blind-test work.
- **First 10 customers:**
  - Build 3 public gyms in 3 weeks.
  - Post them on X and HN.
  - Cold-email about 100 agent startups with a paid $4-6k pilot.
  - Use the mentor's network to reach a lab contact.
- **Cost to first revenue:** about $1,000.
- **Path to big:** A library of 200+ twins licensed non-exclusively to many buyers, plus a hosted grader. Hitting $10M needs a handful of lab accounts at $500k+ a year, which is heroic share. Dead if he cannot match fidelity of the funded teams.

## 5. Surface Studio: launch on ChatGPT Apps, Claude connectors and the other agent surfaces

**One-liner:** A fixed-price sprint that turns a brand's data or service into a working, directory-approved ChatGPT app and Claude connector, with maintenance and analytics after.

- **Customer:** SaaS and consumer brands that want presence inside agents: travel, retail, food, local services, and B2B catalogs.
- **Who pays:** Marketing or product leads, at $4,900 for a 10-day sprint plus $500-$1,500 a month for maintenance and reporting.
- **Problem:**
  - OpenAI opened ChatGPT app submissions in December 2025. Vendors say ChatGPT has over 800M weekly users (v).
  - Claude's directory passed 200 connectors by April 2026.
  - Review, policy and design rules are fiddly, and ChatGPT apps cannot yet sell digital goods (they can link out for physical goods).
  - I found no published pricing or hard demand data for agencies doing this.
- **Solution:**
  - Build the server and widget UI.
  - Pass directory review.
  - Add analytics for agent-sourced traffic.
  - Over time, a "write once, publish to every agent surface" platform.
- **Mentor angle:** AV manufacturers and distributors have large spec catalogs. A "find the right AV gear" app for integrators is a natural first pilot.
- **Who does it today (searched):** Dev agencies; MCP-generation tools (Stainless, Speakeasy, Composio, Arcade); Apps SDK startups. The infra layer is crowded and directory rules change monthly.
- **Why now:** Both directories are new and brands are anxious about being invisible to agents.
- **Founder edge:** AI-speed building, and a live working demo is the sales pitch.
- **First 10 customers:**
  - Build 5 free demo apps from public brand data.
  - Email each brand's digital team with a working link.
  - Pilot with a mentor-network AV company.
- **Cost to first revenue:** about $300.
- **Path to big:** Services first, then a publishing and analytics platform. Honest: the ceiling is services-sized until the platform exists, and platform vendors may absorb it.

## 6. Proving Ground: pre-registered paper-trading arena and validation seal for AI-built trading and forecasting agents

**One-liner:** An MCP tool and registry where an agent's strategy is hashed before the test period, scored out of sample, and stamped. Paper trading only, no advice.

- **Customer:** Retail quants and "vibe trading" builders, strategy and signal sellers, and prediction-market bot builders (as a forecasting-accuracy test).
- **Who pays:** Builders pay $29-99/month for the sandbox and $9-29 per validation report. Sellers pay $199-499 for a verified listing. Platforms could license the seal.
- **Problem:**
  - AI makes overfitting worse (several practitioner sources).
  - QuantConnect's and Composer's MCP servers let Claude run backtests with no overfitting checks.
  - Free pieces exist (deflated-Sharpe libraries, backtester-mcp, a student project).
  - Upwork audits exist.
  - There is no independent forward-tested registry I could find.
- **Solution:** Hash the strategy before the period, count every variant tried, run deflated Sharpe, probability of backtest overfitting, walk-forward and holdout tests, and publish the result.
- **Who does it today (searched):** The open-source libraries above, QuantConnect and Composer (without validation), Upwork freelancers. It is an unclaimed slot, but the paying market is unproven.
- **Why now:** Everyone now asks Claude to write strategies.
- **Founder edge:** His Strategy Lab (25 pre-registered strategies, 1927-2025, where early winners flopped in holdout and only momentum survived) is this method.
- **Guardrails:** Paper only, no recommendations, no brokerage, no sports betting, and he never operates any gambling.
- **First 10 customers:** Publish "I ran 200 Claude-written strategies through a pre-registered holdout, and X% died." Offer free validation to 50 people posting backtests on r/algotrading and X.
- **Cost to first revenue:** about $300.
- **Path to big:** Weak and honest: licensing the seal to platforms (QuantConnect, Composer, Alpaca-style brokers) and becoming the Morningstar of agent strategies. Hard to see $10M without a platform partner.

## 7. Pit Crew: flat-rate rescue and care plans for AI-built apps

**One-liner:** Fixed-price fixes ($299) and maintenance subscriptions ($99-$399 a month) for apps built by vibe coders and non-engineers, delivered with agents.

- **Customer:** Non-technical founders and small businesses with apps built in Lovable, Bolt, Replit or Claude Code that hit a wall.
- **Who pays:** The app owner, at $299 for a fixed-scope rescue (auth, row-level-security, deploy, payments), then a monthly care plan.
- **Problem:**
  - SymbioticSec reports 98% of 1,072 Supabase-backed vibe apps had at least one vulnerability.
  - Fiverr and agencies sell RLS audits and migrations.
  - Scanning alone does not pay: the scanners are priced at $0-$99 a month and the one with visible numbers shows about $500 a month in revenue.
  - The paying layer is the fix.
- **Solution:** An automated diagnosis agent that handles most rescues. Humans (friends from his school and network) do the rest. Offers fixed quotes from a repo connection.
- **Who does it today (searched):** Freelancers on Fiverr and Upwork, small agencies (for example Rocking Tech), scanners (Vibe App Scanner, SymbioticSec), and the builder platforms' own "fix with AI" features. This is the second most crowded idea here.
- **Why now:** Millions of AI-built apps with no maintainer.
- **Founder edge:** He builds with these tools daily, and a first sale takes days.
- **First 10 customers:** Reddit (r/lovable, r/vibecoding), X, and the builder-platform Discords, with a free scan then a $299 fix.
- **Cost to first revenue:** about $200.
- **Path to big:** Productize the diagnosis into a subscription for every AI-built app. Honest: this is a fast-cash business that only becomes big if the diagnosis agent works and the platforms do not absorb it.

## 8. TrueStars: a review-trust layer for shopping agents and shoppers (post-Fakespot)

**One-liner:** A review-authenticity score, as a browser extension and an API for shopping agents, built to replace Fakespot.

- **Customer:** Affiliate and deal sites, AI shopping-assistant builders (API), and shoppers (extension).
- **Who pays:** API at $99-$999 a month, or $0.002-$0.01 per product check. Consumers pay $3 a month, or a disclosed outbound affiliate click on explicit user action.
- **Problem:**
  - Mozilla shut Fakespot on July 1, 2025.
  - The only visible replacement is a free extension funded by affiliate links (FakeFind).
  - A 2025 study found that LLMs and humans are poor at spotting fake AI reviews (LLMs lean toward calling everything "real").
  - Shopping agents therefore need more than a single detector score.
- **Solution:** Combine text signals with behavior (reviewer history, bursts of 5-star ratings, verified-purchase status), and publish a blind-tested accuracy benchmark.
- **Who does it today (searched):** FakeFind, ReviewMeta-style tools, platform-side detection at Amazon. No funded, agent-facing API found.
- **Why now:** The Fakespot vacuum and the rise of AI-written fake reviews.
- **Founder edge:** His detector work (blind tests, "anchor on gestalt, normalize formatting"), fast extension shipping, and a TikTok-native audience.
- **First 10 customers:** Publish a "can the tools catch 200 AI-written reviews?" benchmark. Sell the API to 10 affiliate review sites.
- **Cost to first revenue:** about $800.
- **Path to big:** A consumer extension at Honey scale (a very large exit once) is the dream. Honest: detection accuracy may not be provable, Chrome's affiliate rules are strict, and Amazon blocks scraping. Lowest confidence on this list.

---

## Ranking logic

1. TokenAudit scores best on every test: it has an existing budget line, a proven fee model, and reuses what he already built.
2. AgentFit has the fastest feedback loop and a credible edge, but a modest ceiling unless it expands beyond devtools.
3. Humanness Arena has the biggest upside (Arena precedent) and the hardest operations.
4-5. Twin Factory and Surface Studio are real but crowded.
6-8. Lower-confidence picks with a fast first sale but weaker paths to $10M a year.
