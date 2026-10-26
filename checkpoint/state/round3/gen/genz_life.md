# Round 3, Gen Z life lens: 8 ideas, ranked best first

Written 2026-10-25. Lens: problems 16-24-year-olds live (money, first jobs, betting culture, fitness, social life, dating, studying, moving out, status).
Research: about 30 web searches (over the 8-15 guide, because several first-pass ideas died on competitor checks and I wanted the survivors grounded). Numbers from vendor blogs, advocacy groups or AI-written aggregators are flagged "unverified".

## The pattern worth noticing

Ideas 1, 2 and 3 are the same machine: **import -> ledger -> tax pack -> payout rail** for a young boom economy where the platform pays out gross, reports badly (or not at all), and the earners are 18-30. Crypto proved this category (CoinLedger and similar tools exist because exchanges never gave users usable cost basis). The next three booms with the same hole are live commerce (Whatnot), UGC games (Roblox) and prediction markets / sportsbooks. Build the core once, verticalize three times. Every one of them sells to a self-serve prosumer who pays $30-100 and does not care that the founder is 18.

---

## 1. LiveLedger: profit, inventory and tax back office for live-commerce sellers (Whatnot first)

**One-liner:** the per-show P&L, card-level cost basis and Schedule C that Whatnot sellers currently fake with Google Sheets.

- **Customer:** collectibles / sneaker / clothing sellers going live on Whatnot, then TikTok Shop Live, eBay Live, Fanatics Live. Core: the "full-time" cohort and sellers going live 3-4x a week (Whatnot claims they average more than $13,000/month in sales; its own claim).
- **Who pays:** the seller, $29-49/month plus a $79 tax pack. Signs: themselves, in one click.
- **Problem:** Whatnot's reported 2025 live GMV was over $8B, it raised $545M at a $20B valuation in Aug 2026, and management says volume doubles in 2026. Fees run about 11% (8% + card processing). A 1099-K reports gross, not net (one guide's example: $42,000 on the form, about $37,300 received). Since the 1099-K threshold is back to $20,000 / 200 transactions, many sellers get no form and still owe 15.3% self-employment tax. Cost basis for card-show buys, breaks and grading fees is the classic mistake.
- **Solution:** import payout CSVs (and a Chrome extension that reads the seller's own dashboard); each show becomes a P&L (revenue, fees, shipping, giveaways, refunds, cost of goods); FIFO or specific-ID cost basis; box-cost allocation across break spots (accounting only); profit per hour and "which formats actually made money"; sales-tax-on-fees flags; monthly tax set-aside and quarterly estimate; CPA export. Phase 2: phone-camera bulk intake (snap a stack, get card ID and comps).
- **Why now:** platform at $20B and doubling; 1099-K threshold rollback; multi-platform live selling is brand new, so nobody has the cross-platform ledger.
- **Founder edge:** ships this in a weekend with AI agents; vision + parsing is exactly his stack; his strategy-backtest habit (what is the real expectancy of a format) becomes the hook feature; Gen Z collectibles and gaming reach.
- **First 10 customers:** (1) free "break-even price per spot" calculator posted in Whatnot seller Discords / subreddits; (2) DM 100 sellers who go live nightly offering free 30-day setup for feedback; (3) 3 micro-creators in the card-breaking niche at $50-150 per video; (4) card-show vendors via friends. Convert beta users at $29.
- **Cost to first revenue:** about $2,000 (domain, vision/LLM credits, Chrome store fee, creators, $1,000 CPA review of the tax logic).
- **Path to big:** $10M ARR needs about 21,000 payers at $39/month. Whatnot does not disclose seller count (France alone had about 33,000 active sellers in a 90-day window, per a July 2026 figure), so the base is plausible but needs multi-platform plus general resellers. Add: net-payout advances through a lending partner, shipping-label margin, sourcing marketplace, platform API deal.
- **Who does it today:** Selldeck (Chrome extension, "Whatnot Seller Intelligence"), Etsy-sold Google Sheet templates for breakers, Closo (cross-listing), Keeper (generic 1099 tax), Whatnot's own Seller Hub; a reseller-tax guide on underpriced.app hints at a competing tracker (unverified).
- **Risks:** Whatnot ships native finance tooling; scraping vs. ToS (prefer official exports); ARPU lower than $39; tax logic needs CPA sign-off. Breaks are gambling-adjacent, so the product only does accounting, never runs or promotes breaks.
- **Monday plan:** write the CSV parser + per-show P&L from your own sample exports or a friendly seller's; post the free calculator; DM the first 50. **Kill test:** fewer than 10 paying sellers in 45 days, or under 30% of beta users opening it weekly.

## 2. StudioLedger: rev-share contracts, payouts and 1099s for UGC game studios (Roblox first)

**One-liner:** Roblox pays one account; StudioLedger turns that single DevEx deposit into signed splits, contributor payouts, tax forms and a cap table.

- **Customer:** adult (18+) owners of Roblox studios and groups paying 2-30 contributors. Roblox reports about 42,000 DevEx creators, a $1,500 median, top-1,000 average of $1.4M, top-100 average $10.8M. Target the top 2,000-5,000 teams.
- **Who pays:** the studio owner, $99/month plus about 0.5% of payouts routed. Signs: owner (often 18-25) or their accountant.
- **Problem:** Roblox docs: group-owned revenue goes to one payer who cashes out through DevEx and pays collaborators. I found no native percentage-split feature in Creator Hub (verify before building). Roblox now says DevEx counts as royalties for US federal tax from Nov 1, 2026 (1099-MISC after that date). Paying collaborators may trigger your own 1099-NEC (threshold sources conflict: $600 vs $2,000), and informal profit-sharing may be a partnership (Form 1065), per a gaming-CPA firm. Disputes over splits are the standard way teams die.
- **Solution:** contract builder (percent splits, vesting, leaver clauses, IP assignment, buyout), DevEx statement import, automatic period splits, W-9/W-8 intake, USD payouts via a licensed payments partner (never hold funds), 1099 e-file via partner, tax set-aside, studio P&L, later revenue advances against future DevEx through a lender partner.
- **Why now:** DevEx hit about $1.7B in the 12 months to June 2026 (+~50%); royalty tax treatment from Nov 1, 2026; "Roblox Everywhere" standalone apps (announced Sept 11, 2026) push first-wave studios into app-store, revenue and compliance work; higher DevEx rate for age-verified 18+ US users.
- **Founder edge:** peers run these studios; he built an in-app economy with accounts; money-flow software is a Stripe-Connect-shaped build; gamer network is exactly the sales channel.
- **First 10 customers:** Roblox dev Discords, DevForum collaboration threads, r/RobloxDevelopers; interview 25 studio owners on "how do you pay your team"; offer a free January "1099 readiness audit" to 10 studios; sell $99/month after. A gaming-focused CPA as a referral partner.
- **Cost to first revenue:** about $4,500 (lawyer review of contract templates $2,000, payments / e-file sandbox, hosting, domain).
- **Path to big:** honest math: 1% of the whole top-1,000's $1.4B is $14M, but realistic share is 15-25% = $3-6M with SaaS. $10M+ needs revenue-based advances (where margin lives), other UGC platforms (Fortnite UEFN, etc.) and general creator-team payroll.
- **Who does it today:** no dedicated tool found. Gaming CPAs (Monaco CPA writes the guides), generic contractor-payment tools, Roblox Groups (profit-sharing with no defined mechanics), game publishers that bundle finance into publishing deals (my own knowledge, unverified).
- **Risks:** Roblox adds native splits; money-transmission (use licensed partner only); minors on teams (pay only verified adults or via guardian, never build for under-18s); top studios already have accountants.
- **Monday plan:** join five dev servers, post "how do you split revenue" poll, build the split calculator + contract generator. **Kill test:** fewer than 5 of 25 interviewed owners commit to a paid pilot by Jan 31.

## 3. Wager Ledger: the tax-and-truth ledger for sportsbook and prediction-market users

**One-liner:** one ledger for every sportsbook, DFS and Kalshi/Polymarket record, with the new 90% loss cap and the unsettled event-contract rules modeled, and a "Wrapped" that shows the real after-tax result.

- **Customer:** adults who bet at volume: 21+ for sportsbooks, 18+ for prediction markets. Heavy: itemizers, "pros", arbitrage / matched bettors, prediction-market traders.
- **Who pays:** the user, $79/year (tax pack + tracking) or $9/month; $149 CPA-handoff tier.
- **Problem:** from tax year 2026 only 90% of gambling losses are deductible, so break-even bettors owe tax on phantom income (win $100k, lose $100k, deduct $90k). The IRS has issued no guidance on prediction markets; classification (Section 1256 60/40 vs gambling vs property) is contested; sources disagree on whether Kalshi sends a complete 1099-B. KPMG and NATP have both published on event-contract reporting in 2026. I found no dedicated tracker, only guides (CoinLedger, Keeper) and a free calculator.
- **Solution:** import (CSV, statements, email-receipt parsing, screenshot OCR, Kalshi/Polymarket exports); scenario engine for the 90% cap and for each event-contract treatment, showing the spread (one example: roughly $13,400 vs $18,500 tax on $50k of gains); quarterly estimates; CPA workbook. Harm-reduction layer that also makes the viral hook: real ROI after vig and tax, deposits vs withdrawals, loss-chasing detector with opt-in cooling-off nudges. Never gives picks, never recommends betting.
- **Why now:** first tax year under the cap; filing season (late Jan-Apr 2027) lands inside the 60-90 day window; one poll says 46% of men 18-49 are sports bettors (Siena/SBU, Apr 2026), SSRS finds 11% of men 18-34 use prediction markets for sports, AIBM/Ipsos says about 1 in 4 men 18-24 used a betting or prediction app in six months; Kalshi had about 83% of CFTC-regulated volume and roughly $31B notional in June 2026 (Blask).
- **Founder edge:** bettor friends are the beta group; EV/probability math from his backtest lab; AI parsing; knows what Gen Z will screenshot and share.
- **First 10 customers:** the 21+ bettors he knows; free phantom-income calculator on r/sportsbook, r/Kalshi, X; CPAs who already write about gambling tax as referral partners; early price $49.
- **Cost to first revenue:** about $2,000 (CPA review $1,000-1,500, LLM costs, domain).
- **Path to big:** $10M needs about 130,000 payers at $79, roughly 5% of an assumed 2.5M high-volume bettors/traders. Expand to all retail speculation (DFS, sweepstakes, options, crypto), CPA seats, and white-label "tax center" for platforms.
- **Who does it today:** Pikkit (syncs 30+ books, no manual entry; I found no tax report, but this is its obvious next feature, so the window may be one season), CoinLedger (prediction-market tax guide; crypto tooling), Keeper, tax47.app calculator, CPAs.
- **Risks:** casual bettors who take the standard deduction get no loss deduction anyway, so pain is concentrated; repeal bills (FAIR BET Act and others) could blunt the cap; store policies on gambling-adjacent apps; tax-advice boundary (publish calculators, not advice, CPA-reviewed); brand association with gambling, offset by harm-reduction positioning.
- **Monday plan:** build importers for DraftKings / FanDuel / BetMGM / Kalshi / Polymarket statements and the scenario engine; get a CPA to review. **Kill test:** under 50 paid tax packs by Mar 1, or Pikkit ships a tax export first.

## 4. Social Reps: an AI debrief coach for real-life social practice

**One-liner:** not another AI to practice on; a coach that debriefs your actual night. Sixty seconds of voice memo in, one move to repeat, one to drop, next rep out.

- **Customer:** 18-26-year-olds who want better friendships, dating and networking and are anxious but not clinical. Strictly 18+, no clinical claims, no pickup tactics.
- **Who pays:** the user, $9.99/month or $59/year after a 3-day trial.
- **Problem:** social skill grows from real reps plus honest feedback. Existing apps are role-play sandboxes. Self-improvement subscriptions are proven at $40-70/year (Finch Plus is $69.99/year); Gen Z had the fastest subscription growth in Bank of America data (about 14% YoY, July 2026).
- **Solution:** after any event, a voice memo or text; AI codes it against a research-based behavior codebook (initiation, curiosity questions, disclosure, exits, humor), compares it to the user's own prediction, quotes one moment from the user's words, and assigns the next micro-rep ("start two conversations in a line"). Streaks, levels, weekly review, optional accountability pod.
- **Why now:** Cal AI is the precedent: a teen founder, 250+ creator network, over $30M annual revenue in under two years (TechCrunch via MyFitnessPal), acquired by MyFitnessPal in early 2026. One analysis says consumer is only 5.6% of YC's 2026 batch, so VC-funded competition in consumer is thin while AI made building cheap.
- **Founder edge:** he already has a working v0 of the debrief workflow built for himself and is user zero; ships mobile fast; Gen Z creator channel.
- **First 10 customers:** friends, then 20 beta users from Discord communities, then 3-5 TikTok micro-creators doing "my debrief" demos ($50-150 each). Charge from day one for a founding cohort.
- **Cost to first revenue:** about $3,500 (creators $1,500, Apple developer fee, speech-to-text and LLM costs).
- **Path to big:** $10M needs about 170,000 payers at $59. Unlikely inside the niche alone, so expand into "reps for life skills" (dating, networking, interviews, hard conversations) and B2B2C (orientation programs, new-grad onboarding). High variance, cheap to test.
- **Who does it today:** Sociabl (self-reported $683 MRR, 45 subscribers), DatingX (launched Feb 2026), AskMeOut!, Rizz.ai (claims 3.5M downloads, unverified), human coaches and courses, Finch for self-care.
- **Risks:** retention; wellness-claims creep; trust. 
- **Monday plan:** wrap the existing workflow as a mobile web app, onboard 20 users. **Kill test:** trial-to-paid under 3% or 4-week retention under 20% at 100 users.

## 5. TradeTrack: the Workforce Pell finder for 18-24s skipping the four-year path

**One-liner:** a national, outcome-ranked directory of Workforce Pell-eligible short programs with a Pell and net-cost calculator and a FAFSA walkthrough.

- **Customer:** 18-24-year-olds choosing trades, CDL, EMT and similar programs; reached through TikTok / YouTube trades content.
- **Who pays:** training providers (private trade schools, CDL schools, community-college workforce divisions) pay a flat fee per qualified lead plus monthly sponsored placement. Employers pay for vetted apprentice candidates. Students pay nothing. Signs: enrollment or marketing director.
- **Problem:** Workforce Pell began July 1, 2026 for programs of 150-599 clock hours over 8-15 weeks, but approval is state by state and lists live on scattered state portals (Oregon has a search tool, South Dakota uses SDWORKS, North Carolina approved an initial 43 programs and a report says only a fraction of programs are expected to qualify). I found no national directory. FAFSA opened Oct 1, 2026.
- **Solution:** scrape and normalize every state list weekly with a multi-agent pipeline; zip-code search; completion / placement / wage outcomes where states publish them; Pell and net-cost calculator; FAFSA help; provider handoff.
- **Why now:** program just launched, approvals rolling out, search demand has no home yet.
- **Founder edge:** multi-agent research pipelines and programmatic SEO are what he is fastest at; weakness is no trades network.
- **First 10 customers:** pick two or three states with live approvals; email enrollment directors: "I will send 10 FAFSA-ready prospects free, then flat fee per qualified lead." Employer-paid placement with local contractors.
- **Cost to first revenue:** about $2,500 (domain, scraping / LLM, $1,500 ad test).
- **Path to big:** my assumption (unverified): if Workforce Pell reaches 150-300k students a year by 2028, a 20% platform share with about $60 per qualified lead across several leads per eventual student plus employer placement fees could reach $5-15M. This is the weakest-sized of the top five.
- **Legal premise (checked from memory, verify with counsel):** the Title IV incentive-compensation ban bars paying third parties per enrollment, so do not charge per enrolled student; use flat per-lead or listing fees and employer-paid placements. Only list state-approved programs and show outcomes.
- **Who does it today:** state portals (Oregon HECC search, SDWORKS), CareerOneStop and Apprenticeship.gov (my knowledge), content from test-prep sites like Achievable; lead-gen aggregators in education.
- **Monday plan:** scrape Oregon plus two states, ship zip search, call 20 providers. **Kill test:** no provider agrees to pay for qualified leads by day 60.

## 6. NIL Pre-Flight: deal clearance check and comps for college athletes

**One-liner:** before an athlete signs, check the deal against NIL Go's three tests and against comps, then keep the paperwork and taxes straight.

- **Customer:** Division I athletes and the local businesses, agents and collectives offering them deals.
- **Who pays:** brand / agent $39 per deal, or athlete $9/month.
- **Problem:** NIL Go (Deloitte) approved about $355M of deals in year one and rejected nearly $90M, so roughly one dollar in five of reviewed deals failed. Deals of $600+ must be reported within about five days. Tests: school-associated marketer, valid business purpose, pay within the range of similarly situated athletes. High school NIL is allowed in 41 states plus DC, typical deals $250-$1,500.
- **Solution:** intake form that mirrors the three tests, missing-document flags, a crowdsourced comps pool built from athletes' cleared / rejected outcomes, contract and invoice templates, tax set-aside, deadline reminders.
- **Why now:** clearinghouse live since June 2025; rejections are costing real deals.
- **Founder edge:** sports network; status-and-money problem he understands; speed. 
- **First 10 customers:** athletes he knows, local businesses that sponsor teams, 3 NIL-focused agents.
- **Cost to first revenue:** about $1,500.
- **Path to big:** honest: about $445M reviewed in year one; 1% of that is under $5M, so this is a $5-10M ceiling unless it becomes compliance infrastructure for collectives or schools. 
- **Who does it today:** Opendorse (claims 175k+ athletes, $250M+ deals; vendor figure), INFLCR and Basepath (both Teamworks), Front Office 360, Dropback (YC), MOGL, NIL Club; an income-tracking startup was listed for sale. None found that does pre-clearance comps.
- **Risks:** state athlete-agent registration laws (do not negotiate or represent, software only); the rubric is not public; athletes have little money; incumbents.
- **Monday plan:** build the checklist engine from published NIL Go criteria, interview 10 athletes and 5 businesses. **Kill test:** nobody pays $39 by day 60.

## 7. Squad Season: friend-group fitness and habit seasons (the healthier cousin of betting on each other)

**One-liner:** a fantasy league for real life. Friends run 6-week seasons scored from synced workouts, study hours or check-ins, with trash talk, recap cards and social stakes, never cash.

- **Customer:** 18-24 friend groups and campus clubs; sponsors are local gyms and supplement brands.
- **Who pays:** commissioner pass $3-4/month; local sponsor $149 per campus season.
- **Problem:** the pull of betting is competition, banter, status and stakes with friends; fitness spending is Gen Z's fastest-growing category in one dataset (+37% YoY; date unclear). Nothing turns that into a fantasy-style league.
- **Solution:** commissioner picks the rules; scoring via Strava / Hevy / manual photo check-ins; weekly auto-generated recap cards; loser forfeits are social (host dinner), never money. Entry is always free, prizes come from sponsors, so this stays outside gambling statutes; check sweepstakes and contest law per state.
- **Why now:** young-men betting concern is at a peak; wearable and workout-app data is easy to read.
- **Founder edge:** knows what makes a friend-group league sticky, built game economies and leaderboards in House Money.
- **First 10 customers:** his own friend groups; 3 squads on one campus; 5 gyms near him or UF for the sponsor spot.
- **Cost to first revenue:** about $2,500.
- **Path to big:** consumer social is high variance; $10M needs roughly 250,000 commissioners at $40/year or a sponsor network. Realistically a retention feature or a Strava-style acquisition target.
- **Who does it today:** Strava challenges, Whoop teams, Apple Fitness sharing, StickK / Beeminder-style commitment apps (from my own knowledge, not re-verified this round).
- **Monday plan:** MVP of one 6-week season with manual check-ins; run three squads. **Kill test:** fewer than 3 squads finish a season or no sponsor by day 75.

## 8. Deposit Back: evidence and demand-packet kit for young renters

**One-liner:** guided move-in capture, a deadline engine and a state-specific demand packet so first-time renters actually get their deposit back.

- **Customer:** college and first-job renters at move-out (December and May-August peaks).
- **Who pays:** the renter, flat $29 per tenancy (parent often pays). No contingency fee.
- **Problem:** deposit return deadlines and penalties vary by state (templates show 14 days in Hawaii, 21 in Washington and Minnesota, treble damages in a Georgia template), and landlord-side photo evidence is becoming standard (California AB 2801). Tenants rarely have organized proof.
- **Solution:** guided timestamped capture and hash; AI condition report; deadline reminders; state-specific demand letter and small-claims packet reviewed by a licensed attorney.
- **Why now:** landlord-side inspection tools just consolidated (AppWork bought Paraspot AI, Oct 2026), so tenants are the unarmed side.
- **Founder edge:** quick to build; weak distribution edge.
- **First 10 customers:** Dec move-outs from his network, college-town renter groups, parents' groups.
- **Cost to first revenue:** about $3,000 (attorney review).
- **Path to big:** honest ceiling low (roughly $2-7M) unless it grows into a renter-protection brand or B2B2C with college housing offices.
- **Who does it today:** RentVault (tenant app, paid), UnitCheck AI (DIY landlords), Paraspot AI (now AppWork), Switchlabs (landlord photo verification), free and AI-made demand-letter templates (Ezel and others). No recovery-focused product found.
- **Legal premise:** non-lawyers collecting money owed to others may need a collection-agency license in some states, and legal advice is UPL, so stay flat-fee, self-serve, attorney-reviewed templates.
- **Monday plan:** capture flow plus deadline engine for 5 states. **Kill test:** under 30 paid packs by Jan 31.

---

## Considered and killed (with who killed them)

- **Off-campus sublet / roommate marketplace:** hostU (second round closed Jan 2025), Leaseful, College Pads, RoomSync, RoomChazer, Cribspot; Facebook groups are the real incumbent. Crowded, landlord-paid leads, small.
- **Greek / club dues and treasury:** re:Members Choice Finance (ex-Greekbill, about $5M revenue by a Datanyze estimate), OmegaFi, Billhighway, PayDues, myGreek; nationals mandate vendors (Sigma Alpha Mu requires Greekbill).
- **Local-creator foot-traffic network for restaurants and gyms:** FoodiFy, FoodFluence (claims 50,000 creators), Postento, Crafted, DoorDash's creator program.
- **Settlement-claim autopilot:** Chariot Claims (ex-ClaimClam, $3.6M seed July 2025), ClaimsHero, MoneyPilot; filing directly is free and claim rates are only about 4-9%.
- **Financial-aid appeal / offer comparison:** Frank (JPMorgan), SwiftStudent, Award Advisor (free, VSAC), ScholarPath AI, OpenAI College Planner (announced Oct 2026 inside ChatGPT for Teens); aid officers say AI-written appeals backfire. The real pain is the Parent PLUS cap ($20,000/year, $65,000 per student) from July 1, 2026, but the tools are already crowded.
- **AI dating / social role-play:** crowded; Social Reps differs on purpose (debrief of real events).
- **Campus meme-page ad exchange:** no marketplace found, but the money is tiny, sponsorships are mostly undisclosed (FTC problem) and Instagram purges pages.
- **18th-birthday legal pack (HIPAA / FERPA / POA):** free substitutes (CaringInfo, school forms, student legal services); law-firm bundles at $300-400.
- **Tip tracker for "no tax on tips":** deduction up to $25,000 for 70+ occupations, but employers must report qualified tips and occupation on W-2 from 2026, so the employer's number controls and an app adds little.
- **Bettor edge tools (arb scanners, picks):** promotes gambling; outside the guardrails.

## Sources used (selected)

- Prediction markets and betting: Fortune https://fortune.com/2026/04/10/prediction-markets-gambling-addiction ; SSRS https://ssrs.com/insights/how-many-americans-use-prediction-markets-for-sports/ ; Siena/SBU https://www.sbu.edu/news/2026/04/13/siena-sbu-survey--over-half-of-men-18-49-have-sportsbook-accounts ; Blask https://blask.com/blog/prediction-markets-us-igaming-2026/
- Gambling and event-contract tax: Kiplinger https://www.kiplinger.com/taxes/new-gambling-loss-deduction-limit ; CoinLedger https://coinledger.io/blog/prediction-markets-tax ; Keeper https://www.keepertax.com/posts/how-to-file-taxes-on-kalshi-and-polymarket ; NATP https://www.natptax.com/news-insights/blog/prediction-market-contracts-are-showing-up-on-client-returns/ ; KPMG https://kpmg.com/kpmg-us/content/dam/kpmg/pdf/2026/event-based-contract-reporting.pdf ; tax47 https://tax47.app/tools/gambling-winnings-tax-calculator/ ; Pikkit https://apps.apple.com/app/id1586567110
- Roblox: https://www.ibtimes.co.uk/roblox-top-creators-devex-payouts-2026-1819403 ; https://create.roblox.com/docs/en-us/production/monetization/tax-information ; https://www.monacocpa.cpa/post/roblox-developer-taxes-devex-guide ; https://create.roblox.com/docs/projects/groups ; https://80.lv/articles/roblox-will-let-developers-release-their-games-as-standalone-apps
- Whatnot: https://valueaddedresource.net/whatnot-20-billion-valuation/ ; https://ecommercebonsai.com/whatnot-statistics/ ; Selldeck https://chromewebstore.google.com/detail/gpalhacppaamjllegpimcemednjjheep ; https://www.monacocpa.cpa/post/whatnot-seller-taxes-collectibles-1099k ; https://keepertax.com/posts/whatnot-1099
- Cal AI: https://techcrunch.com/?p=3178431 ; https://athletechnews.com/myfitnesspal-cal-ai-acquisition
- Social apps: https://trustmrr.com/startup/sociabl ; DatingX on Product Hunt
- Workforce Pell: https://www.nga.org/publications/workforce-pell-an-overview-for-governors/ ; https://partners.hecc.oregon.gov/wfp-public/approved-programs ; https://www.the74million.org/article/nc-workforce-pell-only-a-fraction-of-programs-expected-to-qualify/
- NIL: https://www.mondaq.com/unitedstates/sport/1817372/a-year-of-nil-go-review ; https://africa.espn.com/college-sports/story/_/id/49308194/nil-clearinghouse-rejected-90m-deals ; https://www.launchpointhq.com/blog/top-nil-platforms-college-athletes
- Renting: https://www.multifamilydive.com/press-release/20261015-appwork-acquires-paraspot-ai-for-video-inspections/ ; https://verify.switchlabs.dev/industries/property-management ; https://ezel.ai/templates/security-deposit-demand
- Killed ideas: hostU https://www.thegarage.northwestern.edu/news/hostu-closes-second-round-of-financing-adding-key-strategic-partners ; Greekbill https://greekbill.com ; Parent PLUS https://thecollegeinvestor.com/79823/new-parent-plus-limits-take-effect-july-1-what-families-need-to-plan-for-fall/ ; SwiftStudent https://thecollegesolution.com/swiftstudent-new-tool-to-appeal-financial-aid-awards/
