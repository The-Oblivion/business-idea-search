# F09 Refined: Raise Desk (price-increase autopilot for recurring-route businesses)

**Verdict: alive = false as a venture.** After two serious critiques and my own verification pass, the strongest honest statement is that Raise Desk is a feature of someone else's system of record, with a one-vendor gap (Jobber), no proven willingness to pay, a success-fee model that does not fit, and a ceiling of roughly $0.3-2.3M ARR. I am not shrinking it into a boutique to keep it alive. What remains is an optional, tightly capped, pre-registered probe (below) that should only run after the freight-audit calls are made.

## What I checked myself (and how reliable it is)

| Claim | Status |
|---|---|
| Skimmer has a native bulk service-rate editor on all tiers, up to 100 customers per page, rate categories toggled individually | **Confirmed from the primary help page** (help.getskimmer.com article 124). The page documents no effective-date scheduling, no customer notification, and does not say whether it is recurring-only. |
| Jobber has not shipped bulk repricing for existing recurring jobs | **Search-summary level only.** Two searches found only the open Community feature request and the in-app per-appointment workaround ("apply to future visits"). I found no release announcing the feature. Jobber's Community, product-updates and developer pages return 403 or a Cloudflare challenge to both WebFetch and curl, so the Sept 23 "Jobber Now" content is still unread. |
| Whether Jobber's `jobEdit` can reprice recurring line items forward-only | **Still unverified.** Developer docs are blocked. This is a free, 2-hour sandbox test, not a research question. |
| Housecall Pro's Service Price Adjuster reaches recurring plans | **No evidence it does.** Help-center description is price-book services only; recurring plans and the API need the MAX tier. |
| Pricebookr (Jobber sync, scheduled and bulk price updates) | **Exists** per Capterra listings. Whether it reaches recurring jobs is unconfirmed. It is a competitor either way. |
| California AB 2863 requires clear notice 7-30 days before a fee change, effective July 1 2025, applies to contracts entered into or amended on or after that date | **Law-firm summaries only** (McGuireWoods, KTS, Latham). Statute text (Bus. & Prof. Code 17602) not read. Generic "30-60 day" advice can be wrong in California. |
| PoolDial's "0-5 customers lost" churn claim | **Primary page read.** Its only source is one r/PoolPros thread with 29 comments. Weak evidence in both directions. It recommends 30 days' notice and names no season. |
| Ignition AutoPricing (accounting firms) | Press coverage confirms launch Feb 2025, bulk percent increases, company-reported $8.7M extra revenue. It is a launch feature of an existing billing platform, which is the pattern. |

## Point-by-point answers

**1. "Write-back is mostly redundant; Skimmer, ServiceTitan, LawnPro, Service Autopilot, Briostack, FieldRoutes all bulk-reprice." Conceded.** The dossier overstated the gap. I confirmed Skimmer's editor from the primary page. The only confirmed gap is Jobber, and Jobber is the gatekeeper (draft apps limited to 5 paying accounts per the dossier and both critics; marketplace review timeline unpublished; I could not re-read that page). Write-back is therefore one vendor's missing feature, not a product category.

**2. "The residual gap (staged waves, per-wave churn tracking, scheduled effective dates) is a small, copyable feature set." Conceded.** I can name no defensible reason a vendor could not ship it in a sprint. Anchor, Ignition, Zuora, SimPRO and Adfin all show price-increase automation landing as a checkbox in the system of record.

**3. "Margin analysis is free and AI-commoditized." Conceded.** PoolDial's scorecard, Jobber's own job costing, and a Claude prompt on an export all exist. A $99-199 audit competes with $0. The one non-trivial piece (drive-time and route-density cost) does not need a paid human. Verdict: the audit is, at best, a free lead magnet, not a product.

**4. "No evidence anyone pays." Conceded.** I searched again and found no precedent for a paid one-time route audit and none for percent-of-lift pricing in home services. At $1-2 per pool per month for core software, a $49 add-on used once or twice a year has no budget line.

**5. "Success fee has structural problems that freight audit does not." Conceded, and this is the most important correction.** Freight recovery works because the money comes from a third party (the carrier) and the shipper could not chase it alone. Here the lift comes from the owner's own act, the counterfactual is unprovable, the owner can repeat the wave next year for free, and collection falls on an 18-year-old with no leverage. I drop the success fee entirely. Without it, there is no path to a large number.

**6. "Low churn undercuts the value of the differentiators." Conceded in part.** If churn is low, the fear barrier is smaller than the pitch assumed, and the remaining value is execution convenience, which the systems of record already bundle. The churn evidence is anecdotal (one 29-comment Reddit thread, a 4%-raise anecdote), so it cannot prove the pitch either way.

**7. "Buyer fit and channel are weak; Jobber Community is hostile to selling; three-week window." Mostly conceded, one correction.**
- Conceded: the buyers who can pay (3-10 crew firms, hundreds of accounts) are older owners; the Gen Z solo network grosses about $36k a year. Jobber Community guidelines reportedly bar solicitation (snippet only; I could not fetch them). Treat Jobber Community as research and help-only.
- Corrected: the "mid-November deadline" only applies to January 1 effective dates. PoolDial's guide recommends 30 days' notice and ties it to no season. A March 1 effective date (spring routes) means sales conversations from December through January, so the test does not need to be crammed into three weeks. That moves the test later; it does not fix anything structural.

**8. "Platform risk: Jobber is the only gap, may ship it, may block the app; API write access unproven." Conceded.** Jobber released job costing and profit alerts in July 2026 (per critic, unverified by me) and could ship repricing any quarter. `jobEdit` repricing recurring lines is unproven. Pricebookr is already a Jobber-synced competitor. Test the API in a sandbox before anything else.

**9. "$10M path unsupported." Conceded. My own sizing:**
- *Jobber-only app.* 100,000 customers (Jobber's claim) x 20-30% with 50+ recurring accounts (my assumption, unsourced) x 3-8% penetration x $39-79/month = about **$0.3M to $2.3M ARR**. Midpoint about $0.9M.
- *Success fee, best case.* Skimmer's base is about 700,000 pools. At the survey's $225 average rate that is about $1.89B a year of recurring revenue. An 8% increase is about $151M of lift; a 12.5% fee is **about $19M, once, at 100% adoption**. A $10M annual business would need more than half that base and it would not recur at that level.
- *Closest comparable.* NiceJob, with continuous use, got to about $1.5-1.7M ARR at 3,200 customers (2019) and was acquired at about 6,000. An episodic price-increase tool should not beat that.

**10. "Write-back could corrupt billing history; one bad batch ends his reputation." Conceded.** A Jobber job-level price edit reportedly changes how completed visits display. A solo founder cannot support rollback on live billing data. No write path should be built before a sandbox test and at least five friendly owners.

**11. "Trust and data access: no SOC 2, no DPA, no insurance." Conceded.** Owners with enough accounts to matter will not hand a stranger their full customer list. Minimization (account ID, price, zip) helps the audit story but weakens the margin analysis.

**12. "State notice laws, TCPA, and Gmail OAuth verification make sending notices a trap." Conceded; the design response removes the differentiation.** The product must never send. It outputs a letter draft with a state-aware notice window and the owner sends it from their own system (Jobber campaigns, PoolDial broadcast, their own email). That avoids gmail.send verification (a Sensitive scope, unverified apps capped at 100 users) and TCPA vicarious-liability exposure. It also means the owner's own tools can already do the last step.

**13. "Execution load does not fit 10-15 hours; the owner texts him at the emotional moment of a churn." Conceded.** 3-6 hours per owner by hand across 10 owners is 30-60 hours, or 3-6 weeks of his entire budget, during application season, with support requests landing in school hours.

**14. "Opportunity cost against his one already-built asset." Conceded and decisive.** The freight audit is built and unsold; its bottleneck is his sales calls. A second, seasonal, sales-heavy product splits the same hours and will beat nothing.

**Net:** 13 of 14 points are conceded, one (timing) is partly rebutted without changing the outcome. No rewrite of the product makes it both defensible and big, so it is dead as a venture.

## The most defensible version that still exists (not a venture)

A free planning worksheet plus a hand-run, owner-sends "wave pack" for owners on Jobber, flat $149, no success fee, no write-back, no app. It is a lead-gen wedge or a learning exercise that answers two questions cheaply. If both pass, the right size is a $0.3-2M niche tool or a feature Jobber copies or buys.

## Optional pre-registered probe (30 days; only after the first freight-audit calls are made)

Cap: 3 hours a week, about 15 hours total plus at most 9 hours of delivery. Cost: under $100 (domain, Stripe fees). Suggested calendar: Day 1 = Mon Nov 9, ending Dec 8, so owners can still plan March 1 effective dates.

- **Day 1-2 (2-3 hrs): Technical gate.** Free Jobber developer sandbox. Create a recurring job with three line items; use `jobEdit` to raise one price. Check future visits versus completed visits and the Visits report. Output: one-page pass/fail memo. Fail = stop F09 for good (Jobber is the only gap).
- **Day 3-5 (3 hrs): Worksheet.** A Google Sheet with break-even churn, revenue lift, a wave schedule, and a state notice-window flag (CA 7-30 days; NY GBL 527-a; CT), plus "not legal advice, check your agreement." No data collected.
- **Day 6-14: 40 outreach messages and 15 completed 15-minute conversations.** Value-first posts in r/PoolPros, r/LawnCarePros and LawnSite; direct messages to owners who publicly asked about price increases; five local owners via family and friends; two or three intros through Marty Schaffel. Log tool used, recurring-account count, last increase, churn, who sends the letter, and willingness to pay. Output: 15 logged interviews, 10 or more qualified (100+ recurring accounts, on Jobber).
- **Day 15-21: The offer.** To qualified owners only: "I'll segment your accounts, draft the state-aware letter, set up the wave schedule and send you a 30-day churn readout; flat $149 by Stripe link, refunded if you don't send a wave." Pre-registered target: 3 or more payers.
- **Day 22-30: Deliver and decide.** Cap 3 hours per payer. Log waves sent, cancellations, owner-reported lift. Ask payers whether they would pay $49-79/month for the next wave. Day 30: a written verdict against the kill rules.

## Pre-registered kill rules

1. Sandbox shows `jobEdit` cannot reprice recurring lines forward-only without altering completed-visit prices: kill.
2. Fewer than 15 conversations from 40 outreach messages, or fewer than 10 qualified owners: kill (no reachable channel).
3. Fewer than 3 of the qualified owners pay $149: kill.
4. Fewer than 2 payers actually send a wave within 30 days: kill.
5. Jobber announces bulk recurring repricing, or 3 or more non-buyers cite a free tool as the reason they declined: kill.
6. F09 exceeds 6 hours a week for two consecutive weeks, or no freight-audit calls have been made: pause.

## What would flip this to alive

Only all of these together: the sandbox gate passes; 10 or more owners pay for a wave (not a percentage of lift); several of them commit to a recurring price for the next season; and Jobber has not shipped the feature. Even then the correct label is "niche tool with a $1-3M ceiling", not "venture-scale".

## First 10 channels (verified-existing ones come from the dossier; confirm rules on Day 6)

1. r/PoolPros: the price-increase threads PoolDial cites; post break-even math, invite DMs.
2. r/LawnCarePros (reported 5-7k members).
3. LawnSite.com owner forums (check self-promotion rules first).
4. Jobber Community, Finances forum: the posters in the open repricing feature-request thread and the annual-price-increase-reminders thread. Research and genuinely helpful replies only; the guidelines reportedly bar solicitation.
5. Skimmer's Pool Deck community for pool pros.
6. PoolDial's Pool Nation podcast and The Pool Guy Podcast audiences: offer a data-driven guest segment, not a pitch.
7. Jobber Ambassadors (invite-only) and Jobber's creator Partner Program: ask for a 15-minute conversation; do not pitch.
8. The three to five route owners who service his family's and friends' homes (pool, lawn, pest, cleaning), reached through parents and classmates.
9. Marty Schaffel (AVI-SPL founder, teaches entrepreneurship at UF Warrington): intros to two or three recurring-route operators, plus a blunt read on pricing and distribution.
10. Family business and investment connections: a short list of anyone who owns or has invested in a pool, lawn, pest or cleaning route business.

## Carry-forward lessons for other ideas

- Price-increase automation lives inside the system of record. Test any pricing-ops idea with the question "does the platform already bulk-edit this?" first.
- Contingency fees work when a third party pays (freight carriers) and fail when the lift comes from the customer's own action.
- A vertical's buyers who can pay are not always the buyers a Gen Z founder can reach. Check the age and size of the paying segment before building.
