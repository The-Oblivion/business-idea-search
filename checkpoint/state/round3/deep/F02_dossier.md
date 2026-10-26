# F02: Usage-Bill Savings Share / "Model-Price Treadmill" (LLM, cloud and observability bills): validation dossier

Researched 2026-10-25. Findings are cited; my own arithmetic and judgments are labeled as Inferences. Vendor claims are marked as vendor claims.

## 1. Who already does this, and what is free?

### Takeaway
Every lever Asher would ship is free, bundled, or sold by funded companies. The sharpest new threat is Anthropic's own Claude Code skill (Sept 2026), which does eval-gated cost reduction from the customer's own usage data for $0. The gate's "no startup-focused LLM savings-share vendor" finding holds, but the likely reason is that the levers are hard to charge 20% for.

### Cited Findings
- Anthropic put cost guidance into its `claude-api` skill. `/claude-api cost-optimize` profiles spend (from usage and cost reports via an Admin key, logged usage objects, or code), ranks caching, context trimming, output bounding and batching, and with an eval measures cost versus quality across effort and model. `/claude-api hillclimb` searches model, effort and prompt configurations on a train/test split. Anthropic's own benchmarks vs an Opus 5.5 baseline: LegalBench about 67% cheaper, tau2 retail about 73% cheaper with no pass-rate change, OfficeQA Pro about 72%, SWE-bench Verified about 24%. Published Sept 8, 2026 — [Anthropic](https://claude.com/blog/reducing-cost-and-improving-performance-with-claude-platform)
- Ramp Router: one OpenAI-compatible endpoint that picks the cheapest approved model clearing a quality bar. "Free through 2026"; claims a 40% average cost reduction (vendor claim, no methodology), no named customers — [router.com](https://router.com). Ramp's blog says about 30% on its own traffic — [Ramp](https://ramp.com/blog/what-is-an-llm-router)
- Stripe confirmed on Aug 19, 2026 that it is buying OpenRouter (NYT reported $7.5B; Axios more than $8B). OpenRouter claims 400+ models and 10T+ tokens a day; Collison said the goal is to help firms "spend their tokens efficiently" — [TNW](https://thenextweb.com/news/stripe-openrouter-acquisition-confirmed)
- Gateway consolidation: Helicone joined Mintlify in March 2026 and is in maintenance mode — [Helicone](https://www.helicone.ai/blog/joining-mintlify). Palo Alto closed Portkey on May 29, 2026 (reported $117M in its 10-K) — [Technology Decisions](https://www.technologydecisions.com.au/content/security/news/palo-alto-completes-acquisition-of-portkey-1780733452), [10-K](https://www.sec.gov/Archives/edgar/data/0001327567/000132756726000023/panw-20260731.htm)
- YC S2026 Mentlio claims about 30% cuts in engineering teams' AI spend via routing, context optimization and log compression, using a local desktop agent — [YC](https://www.ycombinator.com/companies/mentlio), [Dealroom](https://app.dealroom.co/companies/mentlio). Tokenless (YC S26) is a turn-by-turn routing gateway; commenters called the field crowded — [HN](https://news.ycombinator.com/item?id=49099143)
- nOps recommends moving Anthropic usage to cheaper Bedrock, Llama or DeepSeek models with estimated monthly savings (Oct 2025) — [nOps](https://www.nops.io/blog/introducing-anthropic-migration-recommendations/). Stride launched fixed-scope "AI token cost optimization" in July 2026 claiming 40-60% on routed surfaces — [Stride](https://www.stride.build/blog/stride-launches-ai-token-cost-optimization)
- Anthropic's docs list CloudZero, Datadog, Grafana, Harness, Honeycomb and Vantage as ready-made usage and cost integrations — [Anthropic](https://platform.claude.com/docs/en/manage-claude/usage-cost-api). Inference.net claims 50-90% savings from task-specific models (vendor claim) — [Inference.net](https://inference.net/calculator)
- The closest fee-model match, Redress Compliance, sells enterprise GenAI contract negotiation for a fixed fee or 25% of savings, claims 500+ clients, and prices against the vendor's opening proposal — [Redress](https://redresscompliance.com/genai-contract-advisory-service)

### Inferences
- A customer can run Anthropic's skill and Ramp Router for $0, so the "PR with caching/batching/routing plus eval" is no longer a differentiated deliverable for Claude-heavy accounts. I found no OpenAI or Google equivalent of the skill, so OpenAI-heavy and multi-vendor accounts are the soft spot.
- "Continuous" is not unique either: Mentlio, Tokenless and Ramp all sell ongoing routing.

### Gaps
- No OpenAI- or Google-native cost-optimization agent found (absence, not proof). Mentlio and Tokenless pricing and customer counts are unknown.

## 2. What do buyers pay, and what are the fee norms?

### Takeaway
Savings-share runs 20-25% when humans do the work and 5% when software does. A 20% fee competes against $0 tools, so expect pushback to 10-15% or caps.

### Cited Findings
- Vantage Autopilot charges 5% of savings found, AWS only (launched 2022) — [Vantage](https://www.vantage.sh/blog/vantage-launches-autopilot)
- Zesty's published entry rate is 25% of savings with a $7,000/month on-demand EC2 minimum; the contracted rate governs (competitor-authored page) — [Usage.ai](https://www.usage.ai/blogs/finops/tools/zesty-pricing/)
- Redress: 25% success fee or fixed fee (above). Amnic charges about 0.25-1% of monitored spend; Helicone $79-$799 a month; TrueFoundry $499-$2,999 a month; CloudZero is custom. This list is written by Amnic, which ranks itself first — [Amnic](https://amnic.com/blogs/ai-cost-optimization-tools-for-startups)
- OpenAI negotiates custom terms from about $5,000/month; typical discounts are 0-10% under $120k a year and 15-25% at $120k-$600k (a procurement consultancy's view) — [Negotiation Experts](https://thenegotiationexperts.com/blog/openai-api-volume-discounts-negotiation/). Anthropic enterprise discounts are reportedly about 15% off list (unverified) — [TNW](https://thenextweb.com/news/anthropic-openai-enterprise-discounts-tokens-the-information)
- Among Ramp businesses with token spend (April 2026): median $2,246/month, 75th percentile $14,843, 90th $73,030 — [Ramp](https://ramp.com/blog/ai-token-cost-for-businesses). Ramp says $10,000/month is where AI becomes a formal budget line — [Ramp](https://ramp.com/blog/how-to-reduce-ai-token-costs)

### Inferences
- Payer: the CTO or head of engineering, from an existing API line, and only once spend passes roughly $10k/month. Below that, a fee of $90-300/month is not worth anyone's attention.
- Contract design (the baseline) matters more than the percentage; see Q7.

### Gaps
- I found no transaction data on what any startup actually paid an LLM-cost consultant. ActiveWizards' page lists no price, so the gate's $3k-$6k is unverified — [ActiveWizards](https://activewizards.com/services/llm-cost-audit/). McKinsey's "93% over AI budget; 20-30% optimization potential" appeared only in a search summary (fetch timed out) — [McKinsey](https://www.mckinsey.com/featured-insights/charts/burning-through-the-ai-budget).

## 3. How big is the reachable pool?

### Takeaway
Thousands of accounts, not tens of thousands, and the easiest lever (caching) is already widely used. $10M a year needs roughly 900-3,300 paying customers.

### Cited Findings
- Ramp, April 2026, spend distribution: over $10k/month 31%, over $50k 13%, over $100k 9%, over $500k 2% (denominator not defined in the article; presumably token-spending businesses) — [Ramp](https://ramp.com/blog/ai-token-cost-for-businesses). A separate Ramp post says 8.4% of companies spend over $10k/month on AI — [Ramp](https://ramp.com/blog/how-to-reduce-ai-token-costs). Ramp's base is 85,000+ businesses.
- Top 1% of customers generate 80% of enterprise revenue at both OpenAI and Anthropic (Ramp data); Anthropic has about 6,000 customers at $100k+ a year — [PYMNTS](https://www.pymnts.com/?p=4156473). More than 1,000 spend over $1M and 100+ over $10M — [TNW](https://thenextweb.com/news/anthropic-openai-enterprise-discounts-tokens-the-information)
- As of April 2026, 74.5% of businesses connected to Anthropic's API had enabled prompt caching versus 50.8% for OpenAI — [Ramp](https://ramp.com/blog/how-to-reduce-ai-token-costs). Sonnet 4.6's effective cost was $0.62 per million tokens against $3.00 list, a gap Ramp attributes to caching — [Ramp](https://ramp.com/blog/ai-token-cost-for-businesses)
- Early-stage bills are often paid with credits: Anthropic up to $100,000, OpenAI Grove $50,000 — [AI Weekly](https://aiweekly.co/alerts/openai-anthropic-battle-for-startups-with-free-compute-credits)

### Inferences
- My arithmetic: 85,000 x 8.4% is about 7,100 Ramp customers over $10k/month (includes seat subscriptions; Ramp skews SMB). Anthropic's $100k-$1M band is about 5,000 (6,000 minus 1,000). Seed to Series B software firms who would buy from him are perhaps a third to a half of that: low thousands.
- Because caching is already widespread, realistic blended savings are nearer 10-20% than the pitch's 30%. Credit-funded customers feel runway, not cash, so a cash fee is awkward.
- The pitch's 2,000 customers is a share of 20-60% of the reachable pool. That is the "heroic share" the lessons file warns against.

### Gaps
- No OpenAI count of accounts by spend band. No data on how many reachable accounts are Claude-light.

## 4. Where do first customers gather, and can he reach them?

### Takeaway
The audiences exist, but evidence that people pay to fix bills is thin. Distribution is plausible through a public teardown plus free X-rays; conversion is untested.

### Cited Findings
- r/LLMDevs is roughly 150-160k members by third-party trackers — [Hive Index](https://thehiveindex.com/communities/r-llmdevs/).
- HN traction for cost tools is modest: an Ask HN cost-optimizer post got 1 point and 2 comments, TensorZero 49 points, Launch HN Speko (voice routing) 118 — [HN Algolia](https://hn.algolia.com/api/v1/search?query=LLM%20cost%20optimization%20audit&tags=story&hitsPerPage=20).
- Closest scale analogy: Pump (YC S22) went from about $0.5M annualized revenue (Mar 2024) to about $25M (end 2025, Sacra estimate), serving 1,000+ startups mainly through YC and word of mouth. It is a licensed cloud reseller keeping a 15-25% gross margin on the spread, not a fee-on-savings model — [Sacra](https://sacra.com/research/pump-at-25m-revenue-growing-257-yoy/)

### Inferences
- The scale proof for startup-facing bill savings relies on concentrated distribution (YC) that Asher lacks. A public teardown of his own pipeline is the right asset, but expect dozens of replies, not hundreds.
- The mentor's network is audio-visual integration and a university classroom; I found nothing linking it to LLM-heavy startups.

### Gaps
- Reddit blocked the search tool and X is not searchable, so I could not find posts of founders disclosing bills or asking for help. r/SaaS (about 768k per a GummySearch snapshot I could not open) is unverified.

## 5. Legal, age and platform-policy issues

### Takeaway
No license wall. The real frictions are credential scope, data sharing and one terms-of-service trap.

### Cited Findings
- Age: majority is 18 in most states, 19 in Alabama and Nebraska, 21 in Mississippi (with contract exceptions) — [Cornell LII](https://www.law.cornell.edu/wex/age_of_majority), [MoneyGeek](https://www.moneygeek.com/insurance/life/resources/age-of-majority-by-state/). Sources disagree on a few states.
- Anthropic's Usage and Cost API needs Admin credentials; workspace keys do not work — [Anthropic](https://platform.claude.com/docs/en/manage-claude/usage-cost-api). Vantage quotes Anthropic that all Admin keys have read-write access with no finer scoping — [Vantage](https://docs.vantage.sh/connecting_anthropic). The Admin API manages members, invites, workspaces and keys (it can rename or change status of existing keys, not create them) — [Anthropic](https://platform.claude.com/docs/en/manage-claude/admin-api)
- OpenAI offers a restricted Admin key with Read on the Usage API and Organization Administration scopes, owner-created — [CloudZero](https://docs.cloudzero.com/docs/connecting-to-openai)
- Anthropic's terms bar using Outputs to train models competitive with its own and supporting a third party's attempt; narrow classifiers appear allowed, but "training targets" is ambiguous — [Anthropic](https://support.claude.com/en/articles/12326764-can-i-use-my-outputs-to-train-an-ai-model)
- First SOC 2 Type 1 runs roughly $25-50k and 3-6 months by vendor estimates; questionnaires run 30-300 questions — [Drata](https://drata.com/grc-central/soc-2/how-much-does-a-soc-2-audit-cost)

### Inferences
- Design so the eval harness runs in the customer's CI with the customer's keys. Then no prompt data reaches Asher, which sidesteps most DPA and SOC 2 asks from small buyers. For Anthropic accounts, take CSV exports rather than a read-write Admin key.
- Skip the distill-to-a-small-model lever on Claude outputs. Routing, caching and batching among existing models are clean.
- Confirm his state's age of majority and form an LLC before signing; I am not a lawyer.

### Gaps
- Could not read OpenAI's current terms on third parties handling customer API data.

## 6. Unit economics and capacity

### Takeaway
At 20% of savings, a typical early customer pays $300-900 a month for 12 months. A hand-run service tops out near $45-140k a year.

### Cited Findings
- The gate puts cost to first revenue at about $300-500 and about 9 weeks (gate input, not independently verified). Spend is volatile: Ramp finds the median business's AI spend swings about 58% month to month, and 61% of businesses average swings of 40% or more — [Ramp](https://ramp.com/blog/how-to-reduce-ai-token-costs)

### Inferences
My model, with savings and fee share as stated assumptions:

| Monthly LLM spend | Savings | Fee at 20% | Year-1 fee |
|---|---|---|---|
| $10k | 15% | $300/mo | $3,600 |
| $10k | 30% | $600/mo | $7,200 |
| $15k | 30% | $900/mo | $10,800 |
| $100k | 15% | $3,000/mo | $36,000 |

- $10M a year needs about 926 customers at $10.8k, 2,000 at $5k, or 3,333 at $3k.
- Capacity (my assumption: 30-40 setup hours plus 4-6 hours a month upkeep per customer, 12 hours a week available): about 9-13 steady-state customers and 1-2 onboardings a month. That caps hand-run fees near $45-140k a year, before 12-month decay.
- A flat $1,500 sprint is the faster cash route and avoids the baseline fight.

### Gaps
- Real implementation hours per customer are unknown until the first merged PR.

## 7. Why now, and does the treadmill thesis hold?

### Takeaway
Falling prices and rising spend are real, so a "keep re-pricing my stack" pitch is directionally right. But the labs, Ramp and Stripe are publishing and shipping the same playbook, and falling list prices make a locked-baseline meter contestable.

### Cited Findings
- Anthropic list prices (per million input/output): Opus 4.1 $15/$75 to Opus 5.5 $4/$20; Sonnet 4.6 $3/$15 to Sonnet 5.5 $2/$10; Haiku 4.5 $1/$5 to Haiku 5.5 $0.10/$0.50 for prompts up to 100k tokens. Batch is 50% off and stacks with caching multipliers; cache reads cost 0.1x (0.05x on Opus 5.5 and Sonnet 5.5) — [Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- OpenAI cut GPT-5.6 Luna 80% and Terra 20% on July 30, 2026 as businesses pushed back on bills (other listings give different Luna prices) — [Allwork](https://allwork.space/2026/07/openai-cuts-prices-by-up-to-80-as-businesses-push-back-on-rising-ai-costs/). OpenRouter's two-provider spend split roughly evenly in September — [Trending Topics](https://www.trendingtopics.eu/openai-anthropic-openrouter-price-war/)
- Ramp: token usage up 1,001% and spend up 497% from Jan 2025 to Apr 2026 — [Ramp](https://ramp.com/blog/ai-token-cost-for-businesses). Jellyfish: median cost per engineer for AI tools rose from about $5 to $81 a month (16x) between Aug 2025 and May 2026 — [Jellyfish](https://jellyfish.co/?p=34191)
- Anthropic's own Opus 4.8 to 5.5 migration test: the model swap alone cut cost about 18%, and a prompt audit another 9% — [Anthropic](https://claude.com/blog/reducing-cost-and-improving-performance-with-claude-platform)

### Inferences
- Treadmill risk: if the baseline is "trailing cost per unit of work," a vendor price cut or a customer's own model upgrade counts as "savings," and any sharp customer will refuse to pay 20% of it. The only defensible meter is counterfactual: same tokens priced at the old configuration's current list price versus the new one. That is smaller and more arguable than the pitch implies.
- Fee decay is structural: model swaps are one-time, vendor prices keep falling, and the labs ship the tooling to find them.
- A second buyer pool is growing, coding-agent spend (Jellyfish), but Mentlio already targets it.

### Gaps
- No evidence yet that customers will accept a counterfactual meter, and no churn data after the first PR round.

## 8. Bottom line

### Takeaway
Do not treat this as a $10M plan. Research since the gate makes it weaker on substitutes (Anthropic's free skill, Ramp's free router, Stripe-OpenRouter) and on pool size, and it cannot be both defensible and big. Run it only as a cheap credibility and lead-gen experiment, aimed at OpenAI-heavy or multi-vendor accounts.

### Cited Findings
- For: the fee norm is accepted (20-25%, Redress, Zesty); I found no startup-focused LLM savings-share vendor; spend is volatile and growing (Ramp, Jellyfish); startup bill-savings can scale (Pump, Sacra estimate).
- Against: see Q1 (free tools, funded rivals), Q3 (concentrated, caching already used, credits), Q7 (price deflation weakens the baseline).

### Inferences
- Realistic ceiling for a hand-run service is about $45-140k a year; my guess at upside is a few million a year only if it becomes software with a proprietary cross-customer benchmark. The "anonymized benchmark of which cheaper model matches which task" is the only moat in the sharpened pitch, and nothing I found shows anyone will let him accumulate it.
- Sharper test than the gate's: 30 X-rays, targeting OpenAI-heavy or non-Claude accounts. Kill if (a) fewer than 3 of 30 share billing exports, (b) median addressable savings is under 15% after existing caching, (c) no one accepts a counterfactual meter, or (d) the only willing customers are credit-funded and spend under $5k a month.

### Gaps
- Whether any founder pays 20% for this is untested. The mentor's usefulness and the OpenAI-side substitute landscape remain unverified.
