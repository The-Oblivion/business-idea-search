# F02 refined: Usage-bill savings share ("model-price treadmill")

Refined 2026-10-25 after two serious critiques. Inputs: F02_dossier.md, round-2 lessons.md, both critiques, plus my own re-verification (section 2).

## 1. Verdict: alive = false as a venture

The savings-share service fails the founder's own bar on three of six criteria (2, 5 and 6), and the critics' evidence plus my re-check leaves no fix for any of them.

- **No credible path to $10M+ a year (criterion 5).** The only element that could make it big is the cross-customer benchmark, and it is unsupported. Gateways see more routing data than Asher ever could, the data is perishable (every release resets it), and no customer has agreed to pool prompt-derived data. Without the benchmark it is a hand-run service capped near $45-140k a year (dossier section 6).
- **Crowded, with free first-party substitutes (criterion 6).** Anthropic ships the deliverable as a free skill, OpenAI points to a free migration path, and cheap small vendors already ship the "recurring" part.
- **Trust gap (criterion 2).** The deliverable needs billing data, traces and repo access from companies large enough to have a security process. An 18-year-old with no insurance and no references is the weakest possible vendor for that ask.

The lessons file says: if an idea cannot be both defensible and big, call it dead rather than narrowing it into a boutique. Every rescue available here (flat-fee sprint, OpenAI-only niche, retainer) is that boutique. I am not rewriting it to survive.

What I keep is small and labeled as such: a bounded, nearly free credibility test (section 6) that costs about 26 hours spread over four weeks, runs only after the Nov 1 application batch, and stops on explicit gates. It is a lead-gen experiment, not a business plan.

## 2. What I re-verified myself (2026-10-25)

| Claim | Result | Source |
|---|---|---|
| Anthropic's skill does eval-gated cost reduction for free | Confirmed. `/claude-api cost-optimize` profiles spend and ranks levers; `hillclimb` searches model/effort/prompt on a train/test split and scores on held-out data. The blog describes only manual runs and does not mention scheduling or release triggers. | claude.com blog |
| "Rerun on every model release" is a defensible gap (critic 1 could not find a tool) | **Not defensible.** (a) Claude Code ships scheduled cloud routines (the `schedule` skill in this very environment runs prompts on a cron), so a customer schedules the free skill in minutes. (b) LLMTest already ships an opt-in weekly "Autopilot" that tests cheaper models and prompt variants on real traffic and auto-promotes changes that pass five safety gates, with a 24-hour revert link. It is small and unproven (no named customers or founders), but it is shipped. | LLMTest listing |
| A vendor charges a percentage of OpenAI/Anthropic savings | **None found, a second independent confirmation.** Closest pricing: flat $19-$799/mo tools, a 10% markup on usage (LLMTest), a 1% platform fee (Paygent). Attribution is the named obstacle. | web search |
| OpenAI-heavy accounts are the open flank | **Mostly closed.** OpenAI's official Codex guide covers model migration with regression checks. OpenAI's deprecations page schedules the Evals platform to go read-only Oct 31 and shut down Nov 30, 2026, pointing users to Promptfoo (free, MIT). The Evals shutdown is a one-time event, not a market. | OpenAI deprecations page, Codex use-case page |
| Nobody targets startups with a fixed-scope bill sprint | **False.** Automat-it (AWS Premier Partner) launched an "LLM Selection Optimizer" in Feb 2026: a fixed-scope engagement that benchmarks production data against Bedrock models, claims up to 60%, sold through AWS Marketplace. Stride (July 2026) and ActiveWizards sell similar work. Cast AI has an AI Optimizer. So even the sprint variant competes with partner-funded firms that have distribution. | Techleap, AWS Marketplace listing, dossier |
| Founders publicly ask for help with bills | **Not found.** Searches returned vendor blogs, not first-hand founder threads. This echoes the dossier's gap. | web search |

## 3. Answers to the critiques

I concede nearly every point. Where I disagree with a critic, I say so.

### Critic 1 (rated "serious, not fatal")

| Objection | Answer |
|---|---|
| Deliverable is a free first-party product | **Concede.** Section 2 closes the one gap critic 1 left open: recurrence is a cron entry in Claude Code routines, and LLMTest already sells it. Not defensible. |
| Substitute set wide, funded, mostly free | **Concede, and it is wider than stated.** Add Automat-it, Cast AI, LLMTest, OpenAI's Codex migration guide and Promptfoo as OpenAI's own named eval path. The "OpenAI-heavy" flank is closed by Codex plus Promptfoo. |
| 20% fee vs $0 and the 5% software norm | **Concede.** At 5-10% of a $1,500 saving the fee is $75-150 a month, below the cost of Asher's attention. I drop any percentage meter. If anything is sold, it is a flat fee. |
| Buyer squeeze (can afford it = can DIY) | **Concede.** I found no counter-evidence. Accounts big enough to matter have engineers who can run a free skill; accounts without engineers spend too little. |
| Compounding-benchmark moat is weak | **Concede and drop it.** Gateways see more data, mappings expire every release, and pooled prompt data is a consent problem. I no longer claim a moat. |
| Meter and price deflation | **Concede.** Counterfactual repricing is arguable and every dispute is churn. A flat fee avoids the meter but turns it into a one-time harvest, which is the correct description of the business. |
| Small pool, thin evidence people pay | **Concede.** Dossier math stands: low thousands of reachable accounts, a $45-140k ceiling, no transaction data. My follow-up searches found no first-hand founder demand either. |
| Critic's "serious, not fatal" rating | **Dispute, narrowly.** It is not fatal to a cheap experiment. It is fatal to the $10M requirement, which is the bar I was given. |

### Critic 2

| Objection | Answer |
|---|---|
| His scarce edge (fast eval-gated code) is not scarce here | **Concede.** Speed is neutralized by a free skill. The binding constraint is credibility, and no tactic fixes an age-and-references deficit with this buyer. |
| Trust gate (billing, traces, repo write, SOC 2) | **Concede.** Running the harness in the customer's CI keeps data away from Asher, but it hands the work to the customer's engineers, which is exactly what the free skill does. The pooled-data ask is dropped entirely. |
| Blind-test discipline does not transfer | **Concede, and this is the sharpest point.** The AI-text detector had labeled ground truth. Production traces have none, so the gate is an LLM judge (Anthropic's own demo used 14 held-out tickets) or customer labels. The only honest use is a customer who already has a labeled eval set, and that customer can usually run the skill. Insurance and a liability cap for a false pass are also unsolved. I would take only read-only billing exports in the test and never merge anything into a production path. |
| 20% meter weakly enforceable | **Concede.** No leverage to collect $300-900 a month from a customer who can stop sending data. Flat prepaid fee only. |
| Capacity | **Concede.** The month-one plan in the dossier is about 50 hours against a Nov 1 batch, a Mission Submission Oct 28 and Q1 grade close. My test is capped at about 26 hours and only starts Nov 2. |
| Distribution unproven; networks do not reach buyers | **Concede.** The mentor is an AV-integration founder and the family network has no found link to LLM-heavy startups. Kill gate (a) below is likely to trigger, and I treat that as an acceptable outcome. |
| Legal exposure blocks the moat | **Concede.** Admin keys are read-write, so CSV exports only. Distillation on Claude outputs is off the table. Form the LLC and confirm his state's age of majority before taking any money. |
| Platform risk is the single point of failure | **Concede.** The model vendor is both the substitute and the price-setter. Best case is a $750-1,500 one-off, about $40-50 an hour. |

## 4. What survives, and why it is not enough

1. **Flat-fee "eval-gated model-swap sprint" ($750-1,500).** Easy to sell to nobody in particular, cheap to deliver, and sold against Automat-it, Stride, Ramp Router (free) and the vendor's own skill. It does not scale past a few customers a month and has no data asset.
2. **A time-boxed hook: OpenAI Evals shutdown (read-only Oct 31, gone Nov 30).** Teams with existing OpenAI eval sets must move before Nov 30. Those teams do have labeled data, which is the one thing critic 2 said was missing. But OpenAI already points them to Promptfoo, and the window closes in five weeks. It is a lead source for a handful of sprints, not a market.
3. **A public teardown of his own multi-agent pipeline.** Real numbers from systems he actually runs (the research swarms have real token bills). This is the only genuinely differentiated asset here and the only part that helps outside this idea: it is a portfolio piece for engineering admissions, for other ventures and for credibility with the mentor.

None of these is a path to $10M. Combined, the ceiling is the dossier's $45-140k a year.

## 5. Path-to-big arithmetic (why I will not claim one)

- $10M a year needs about 926 customers at $10.8k a year, or 6,700-13,000 one-off sprints at $750-1,500. The reachable pool is low thousands (dossier section 3), so the first case needs 20-60% of it.
- A self-serve software version priced at $99-499 a month needs roughly 2,000-8,000 paying subscribers. It would compete head-on with Ramp Router (free through 2026), LLMTest, Promptfoo, Braintrust, Not Diamond and the cloud routers, and every one of those can bundle the feature.
- No moat path survives: benchmark pool (rejected), proprietary evals (customer-owned), distribution (lacks YC-type channel), brand (age and references work against it).

## 6. If he runs the bounded test anyway

**Pricing.** Fixed fee only: free X-ray (billing CSV, one page), then a prepaid $750-1,500 sprint. No percentage, no retainer. A $99-199 a month re-run retainer is offered only if three sprint customers ask for it.

**Hours cap.** About 26 hours total across 4 weeks, starting Nov 2. Zero hours in the week of Oct 26-Nov 1.

**Riskiest assumption.** That a company spending at least $10k a month will pay an unlicensed 18-year-old a fixed fee for a one-time eval-gated model swap when a free first-party skill and a free OpenAI migration path exist.

**Two-week test (Nov 2-15).** Publish the teardown and send 30 targeted outreaches to OpenAI-heavy or multi-vendor founders (channels below). Pass only if all three hold: at least 3 of 30 share a billing export, at least 1 of those shares an eval set or labeled sample, and at least 1 gives a written yes to a paid sprint of $750 or more. Otherwise stop.

**30-day plan.**

- Week 0 (Oct 26-Nov 1): no work on this. Applications first.
- Week 1 (Nov 2-8, up to 6 h): export his own pipeline's usage; run `/claude-api cost-optimize` and `hillclimb` on it with a held-out set of at least 50 items. Output: one table of at least 5 pipeline stages with dollars before/after and the quality delta. Draft the teardown.
- Week 2 (Nov 9-15, up to 7 h): publish the teardown. Send 30 personalized messages. Measure replies, CSVs received, sprint yeses. Run the pass/fail check on Nov 15.
- Week 3 (Nov 16-22, up to 7 h; only if the test passed): produce 3-5 one-page X-rays. Quote a $750-1,500 sprint. Form the LLC only on the first written yes, after confirming his state's age of majority.
- Week 4 (Nov 23-29, up to 6 h): deliver the first sprint in the customer's CI with the customer's keys (PR plus eval gate; nothing touches production without their review) and invoice via Stripe. Otherwise write a one-paragraph post-mortem and return the hours to school and the freight-audit calls.

**First customers and channels (10).**

1. OpenAI Developer Community forum threads about the Evals shutdown (read-only Oct 31, gone Nov 30): teams with live eval sets that must migrate.
2. Promptfoo's GitHub Discussions and Discord: OpenAI's named migration path; offer a free cost X-ray alongside the migration.
3. r/LLMDevs (about 150-160k members): the teardown post and "post your bill breakdown" replies.
4. Hacker News: a Show HN of the teardown, plus the monthly "Freelancer? Seeking Freelancer?" thread.
5. Vercel AI SDK GitHub Discussions: multi-vendor by design, so the Anthropic-only skill is less relevant.
6. Latent Space / AI Engineer community Discord: practitioners who discuss spend openly.
7. Indie Hackers: AI-SaaS founders who publish revenue and costs, so a visible margin problem is easy to spot.
8. Product Hunt AI launches: seed-stage makers whose app is visibly LLM-heavy; personalized founder DMs.
9. Marty Schaffel (UF Warrington entrepreneurship): ask for three intros to founders with AI products, not for endorsement.
10. Family business and investment connections: ask for three contacts running LLM features inside a product.

**Quit conditions.**

- Fewer than 3 of 30 outreaches share a billing export by Nov 15.
- None of those shares an eval set or labeled sample (so the quality gate would be an unlabeled LLM judge).
- No one gives a written yes to a fixed-fee sprint of $750 or more.
- Median addressable savings after existing caching is under 15%.
- Any hint that the work needs a read-write Admin key, production access or a pooled-data consent: stop.
- Hand-run effort above 25 hours per customer, or the test crowds out application deadlines.

## 7. What to do with the hours instead

The ten hours a week are worth more on an idea that clears criteria 2, 5 and 6. The reusable parts of this work (the eval-gated model-swap harness, the teardown) are small, and they cost almost nothing to build from his own pipelines. They do not justify treating this as a company.

## Sources

- Anthropic blog on cost optimization: https://claude.com/blog/reducing-cost-and-improving-performance-with-claude-platform
- LLMTest listing (weekly Autopilot, 10% usage fee): https://aipure.ai/products/llmtest-2
- OpenAI deprecations: https://developers.openai.com/docs/deprecations
- OpenAI Codex API-integration migrations guide: https://developers.openai.com/codex/use-cases/api-integration-migrations
- Automat-it LLM Optimizer (Techleap): https://finder.techleap.nl/news/feed/automat-it-launches-llm-optimizer-to-cut-startup-ai-costs-by-up-to-60
- Cast AI: https://cast.ai/reduce-large-language-model-cost/
- Dossier: /Users/asherperemel/projects/business-idea-search-work/biz/round3/deep/F02_dossier.md
- Lessons: /Users/asherperemel/projects/business-idea-search-work/biz/round2/inputs/lessons.md
