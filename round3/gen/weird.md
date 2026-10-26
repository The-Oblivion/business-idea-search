# Round 3 / lens: deliberately strange ideas with a real payer (searched 2026-10-25)

Founder: Asher, 18, 10-15 hrs/week, ships deployed software fast with AI agents. Lens: take the silliest-sounding premise and find the serious business inside it. Novelty matters, but so does a named payer, so every idea below has one.

## How I worked

About 40 searches and fetches. I first read the other round-3 lens files so I would not hand back the same ideas. They had already taken: bettor tax (Wager Ledger and Phantom Income), live-commerce back offices, token/cloud-bill audits, UI-gym clones, tariff refunds, settlement claims, deposit recovery, financial-aid appeals, AV integrator ideas. Where my best-evidenced idea overlaps one of them (idea 3), I say so.

Ranking logic: payer is named, first dollar inside 60-90 days, no license wall, uses his real edges, bottom-up path to $10M+, and not already owned by a funded player.

| Rank | Idea | Silly premise | Serious business |
|---|---|---|---|
| 1 | Env Auditor | "Home inspector for AI practice worlds" | Third-party reward-hack audits for the RL-environment market (labs reportedly weighing $1B+ a year) |
| 2 | Reinstated | "Ambulance for a business an algorithm switched off" | Evidence-first appeals and a continuity plan for Google/Amazon/Meta bans |
| 3 | Wager Ledger | "TurboTax for degenerates" | After-tax ledger for sportsbook, DFS and prediction-market users (consensus idea; my extra facts below) |
| 4 | Sponsor Board | "Scoreboard ads as a service" | Commission sponsor-sales desk for high-school athletic departments |
| 5 | Dead-SaaS Gym | "Buy a dead app and sell it to a robot" | Real-software training gyms made from defunct B2B apps |
| 6 | Waitlist Shows | "Run the card show with the waitlist" | Overflow Pokemon and sports-card shows plus a vendor OS |
| 7 | Auction Lens | "Should I bid on this wrecked Tesla?" | Profit overlay for Copart/IAA and pallet auctions, plus a broker lane |
| 8 | Pilot Pool | "Get paid to drive a robot" | Vetted, trained remote-operator pool for robot and teledriving fleets (moonshot) |

---

## 1. Env Auditor: the home inspector for AI training gyms

**One-liner:** an adversarial audit that tells an RL-environment seller or buyer whether the grader can be gamed, how flaky it is and how hard the tasks really are, plus a "hack-tested" seal.

- **Customer:** RL-environment startups and freelance builders, data vendors that now sell environments (Mercor, Surge, Handshake, Turing per Epoch AI), neolabs, and eventually lab data-procurement teams doing acceptance tests.
- **Who pays:** the seller (to command a higher price and avoid rejection) or the buyer (to refuse bad deliveries). $1,500-$5,000 per environment audit with a fix list; $10k-$25k a month retainers for vendors shipping 20+ environments; re-test fees.
- **Problem:** Epoch AI's interviews (18 people) name robustness to reward hacking as a top quality criterion and contractor QC as a core bottleneck. A June 2026 arXiv paper found 28.5% of a 49-task SWE-bench Verified sample (14 of 49) had tests weak enough that a Docker-verified wrong patch passed, and Pass@1 ran 14.1 points higher on the hackable tasks. Epoch also reports many "useless bad environments," often vibe-coded clones.
- **Solution:** a pipeline in which adversary agents write cheating and wrong-but-plausible solutions, a sandbox replays them, and the report scores hackability, verifier discrimination, flakiness, state leakage and difficulty (pass@k across several models). Output is a short report plus patches to the grader. Ship it as a managed audit first, then a CLI/GitHub App.
- **Why now:** The Information reported Anthropic discussed spending over $1B on environments in a year; Epoch sees contracts of $300k to $1M+ per quarter and about $20k per website-replica "UI gym"; "substantially more in-housing" means buyers care about QC control. Single-author audit pipelines already exist in papers, so one person can build it.
- **Founder edge:** his AI-text-detector blind tests are the same skill (adversarial evaluation); he builds multi-agent pipelines; he can publish a credible public report in two weeks.
- **First 10 customers:** (1) run the pipeline on public environments (Prime Intellect Environments Hub, open SWE-bench variants) and publish a "State of Hackable Gyms" report after telling maintainers first; (2) email and DM 40 environment startups and builders (Pavlov's List names many); two free audits, then $1.5k; (3) subcontract QA to one mid-size vendor; (4) offer buyers a $2k "acceptance test" before they pay a vendor invoice.
- **Cost to first revenue:** about $2,000 (API and sandbox compute).
- **Path to big:** a neutral standard and seal. If audit and QA take even 3% of a $1B environment-spend pool that is $30M; $10M needs about 100 vendor accounts at $100k a year or a platform license to a few labs. Expand into agent-eval QA for enterprises.
- **Who does it today:** I found no standalone auditor. Invisible Technologies lists "stress-tested for reward hacking" as a buyer checklist item (vendor marketing). A single-author arXiv audit pipeline exists with no released tool. A LessWrong post argues for third-party environment auditing. Labs and vendors do it in-house.
- **Risks:** labs in-house it; sophisticated buyers, no track record; lumpy revenue; graders and attackers co-evolve; could end up a feature. Kill test: no paid audit from the first 30 outreach emails by day 60.

## 2. Reinstated: the emergency room for businesses an algorithm just switched off

**One-liner:** a flat-fee, pay-on-success appeals desk plus a $19-$39 a month "continuity plan" (evidence vault and monitoring) for Google Business Profile, Amazon, Meta ad accounts and payment-processor holds.

- **Customer:** home-service owners (HVAC, pest, roofing, plumbing, landscaping, junk removal were hit hardest), Amazon/Etsy/TikTok Shop sellers, creators and gig workers.
- **Who pays:** the owner. $149-$299 per case, refunded if not reinstated in 21 days; continuity plan $19-$39 a month; wholesale to local-SEO freelancers.
- **Problem:** a Google sweep began about April 27, 2026 and a second round in May restricted whole accounts; a Gemini-style AI flags listings by shared signals, so legitimate businesses get caught. Google's appeal form gives 60 minutes to upload evidence and a 1,000-character message. Help costs $599 (Whitespark), $800 per location pay-for-performance (Sterling Sky), and $1,000-$2,000 for Amazon (My Amazon Guy, self-reported 94% success). Amazon is reported to flag templated and AI-written appeals, so generic generators fail.
- **Solution:** classify the suspension, run a diagnostic (business name vs legal name, address type, duplicates, NAP drift), prepare a case-specific evidence packet in advance, draft an individualized appeal, track and escalate, then harden the profile. The long-run asset is a database of what works by platform and reason code.
- **Why now:** an enforcement wave driven by AI, with no human recourse; cheap DIY guidance exists but owners panic.
- **Founder edge:** he understands how classifiers behave and can run agents around the clock; the work is evidence and document handling, not law.
- **First 10 customers:** answer live threads on r/GoogleMyBusiness, r/LocalSEO, r/AmazonSeller; undercut Fiverr/Upwork gigs ($50-$250) with pay-on-success; white-label for five local-SEO freelancers; Facebook groups for pest and HVAC owners.
- **Cost to first revenue:** under $1,000.
- **Path to big:** 60,000 cases a year at $200 is $12M, or about 50,000 members at $20 a month; needs enforcement waves to continue and referral partnerships (SEO agencies, POS vendors, Shopify app).
- **Who does it today:** Whitespark ($599), Sterling Sky ($800 per location, pay-for-performance), Reinstate Labs (hundreds of active cases), My Amazon Guy ($1k-$2k), Amazon-seller law firms, Fiverr and Upwork gigs ($50-$250), free DIY guides.
- **Risks:** zero control over the platform; service reputation; Google could add human review; no promising outcomes (FTC); no legal advice (not a law firm); sweeps are seasonal.

## 3. Wager Ledger: TurboTax for degenerates (consensus idea, extra facts)

**One-liner:** one ledger for sportsbook, DFS and Kalshi/Polymarket history that shows the real after-tax result and the filing choices, with a CPA-reviewed export.

- **Customer:** adults who bet at volume (21+ for sportsbooks, 18+ for prediction markets).
- **Who pays:** the user, $49-$79 a year, $149 with CPA hand-off.
- **Problem:** from tax year 2026 only 90% of gambling losses are deductible, so a break-even bettor owes tax on 10% of volume; and losses are an itemized deduction, so most standard-deduction filers get nothing back at all. The IRS has issued no guidance on prediction-market classification (gambling vs 1256 vs other income); sources conflict on what Kalshi sends (1099-MISC vs 1099-B).
- **Solution:** importers for the big books and prediction markets, scenario engine for the 90% cap and each event-contract treatment, quarterly estimates, harm-reduction layer (true ROI after vig and tax, deposits vs withdrawals). Calculator, not advice.
- **Why now:** first tax year under the cap, filing season Jan-Apr 2027. New fact the other lenses did not cite: House Ways and Means voted 38-5 on Sept 16, 2026 to restore the 100% deduction (inside H.R. 10357, retroactive to 2026); there is no Senate companion and the floor vote is unlikely before the post-midterm lame duck. If it passes, the "phantom income" hook dies but the itemization and prediction-market confusion remain, so build the product to survive repeal.
- **Founder edge:** bettor friends as beta users; EV math from his backtest lab; AI statement parsing.
- **First 10 customers:** free phantom-income calculator on r/sportsbook, r/Kalshi and X; two CPAs who write about gambling tax as referral partners; early price $49.
- **Cost to first revenue:** about $2,000 (CPA review and compute).
- **Path to big:** about 130,000 payers at $79 is $10M, around 5% of a high-volume bettor base I did not size independently; expand to every Gen Z side-income stream.
- **Who does it today:** Pikkit syncs 30+ books and its site mentions no tax features; crypto-tax tools (CoinLedger, CryptoTaxCalculator) have prediction-market guides; pro gambling-tax software for preparers (about $289-$499); CPAs.
- **Risks:** repeal; Pikkit could ship an export; app-store policies; tax-advice boundary; brand association with gambling (offset by harm-reduction framing).
- **Overlaps:** genz_life.md idea 3 and pool_wedges.md idea 2.

## 4. Sponsor Board: scoreboard ads as a service

**One-liner:** a commission-only sponsor sales and fulfillment desk for high-school athletic departments and booster clubs, run by 18+ reps, with AI doing prospecting, mock-ups, contracts, invoicing and proof of display.

- **Customer:** athletic directors and booster presidents (sellers); local businesses such as dentists, realtors, car dealers, banks and restaurants (buyers).
- **Who pays:** the business pays the school $1,500-$3,000 a year per panel (examples: St. Henry $2,000-$3,000 a year for 5 years, Darlington $1,500, a Tennessee school $250-$7,500); the school pays the desk 20-30%.
- **Problem:** 57% of 360 surveyed high schools used corporate sponsorship, and about a quarter of non-users cited lack of sales know-how (Ball State, 2011, dated). Athletic directors have no time to sell; booster clubs rely on volunteers. A record 8.26M athletes played in 2024-25 (NFHS via search).
- **Solution:** AI finds sponsors within 10 miles, emails a proposal with their logo mocked onto the scoreboard, handles e-signature and invoicing, sends a "sponsor wallet" so a business can see every school ask in one place, logs proof (banner photos, PA reads, posts), screens out alcohol, gambling, vape and cannabis sponsors.
- **Why now:** tight school budgets and booming participation; AI makes personalized outreach nearly free.
- **Founder edge:** he is inside a high school; classmates' parents run the local businesses; he can recruit 18+ seniors as commission reps (no minors).
- **First 10 customers:** his own athletic director and booster club; 20-30 local business owners through parents and family; then neighboring schools through teammates.
- **Cost to first revenue:** under $1,000.
- **Path to big:** at about $5,000 a year of commission per school, 2,000 schools is $10M; add digital program ads, streaming sponsorship and district-wide category exclusives ($50k+) to raise it.
- **Who does it today:** Slam Dunk Sports Marketing (commission model, found via a school article), schools and boosters self-selling, BoosterHub (booster software and guides). I found no venture-backed marketplace.
- **Risks:** school and district advertising policies, slow board approvals, 3-5 year contracts mean collections risk, sales-heavy.

## 5. Dead-SaaS Gym: buy a dead app, sell it to a robot

**One-liner:** buy the code of defunct small B2B apps, strip all customer data, wrap each in tasks and graders, and license it to AI labs and environment vendors as a "real-software gym."

- **Customer:** environment vendors, neolabs, data vendors (Mercor-style), marketplaces such as DataVendor.
- **Who pays:** buyer, $15k-$60k per non-exclusive license; exclusive deals run 4-5x (Epoch).
- **Problem:** the fastest-growing demand is enterprise workflows (expense reports, CRM updates, spreadsheet pivots); website replicas sell for about $20k and complex product clones up to about $300k. Meanwhile real codebases of dead startups are selling: SimpleClosure says it has done 100+ code/data deals in a year at $10k-$100k, 47% of its shutdowns now include a code or data sale, and one founder netted about $25k for code and another $15k for workspace data. Mercor even approached HubSpot's target Warmly about its code. Nobody I found is buying the sub-$10k tail (a TrustMRR listing set shows 2,099 businesses at a median ask of $5,000 and $247 monthly revenue).
- **Solution:** buy 3-5 real small apps (CRM, scheduling, invoicing, helpdesk, e-sign, project management) with full source and clean title; remove people's data; seed realistic synthetic data; write 50-200 tasks with programmatic graders; run them through Env Auditor; ship reproducible Docker plus example trajectories (aitrainer.work says docs and reproducibility raise price, and you must own everything in the environment).
- **Why now:** lab spend, a steady supply of failing AI-wrapper startups, and SimpleClosure has made code sales normal.
- **Founder edge:** he ships deployed apps fast, has built an app with an in-game economy and graders, and can pair this with idea 1.
- **First 10 customers (buyers):** environment startups from Pavlov's List; DataVendor listing (sellers keep 80%); Prime Intellect bounty; direct email to data-vendor environment teams. Realistic first sale: $5k-$20k for one gym.
- **Cost to first revenue:** about $6,000 (asset purchases and compute).
- **Path to big:** 100 gyms each licensed to about 5 buyers at $20k is $10M; the moat is real software instead of clones.
- **Who does it today:** SimpleClosure (brokers sellers), Mercor and labs (buy), environment startups (Mechanize and others), DataVendor marketplace; the other lenses cover clone-building ("Twin Factory," "UI gyms"). I found no one buying micro-SaaS to convert, but did not search exhaustively.
- **Risks:** chain of title and open-source licenses; labs prefer big complex apps; privacy (take code only); price compression; in-housing. Kill test: no buyer interested at $10k after 10 conversations.

## 6. Waitlist Shows: run the card show with the 375-table waitlist

**One-liner:** regional sports-card and trading-card shows in mid-size cities the big promoters skip, plus a vendor OS (table map, deposits, insurance certificate, tax-permit helper, load-in schedule).

- **Customer:** card dealers and Whatnot/eBay sellers (tables), attendees, sponsors and grading companies.
- **Who pays:** vendors $75-$200 per table at small regional shows and $200-$500 at mid-size shows (a vendor-side guide), attendees $5-$10, sponsors.
- **Problem:** demand beats supply. Front Row Card Show's Pasadena show had 540 tables and a 375-table waiting list; small shows run on Eventeny and Tickettailor with hobbyist promoters.
- **Solution:** book venues in five secondary metros within three hours of home, presell tables with deposits, use a vendor portal, run a buy desk and a no-gambling trade zone (no mystery packs or random-assignment breaks).
- **Why now:** hobby boom (one report puts collectible card games at $14.7B in 2025).
- **Founder edge:** Gen Z collector and seller network; Saturdays fit the school year; AI handles marketing and vendor outreach.
- **First 10 customers:** 60 tables at $100 from Instagram and Whatnot sellers he knows is about $6,000.
- **Cost to first revenue:** about $5,000 (venue deposit, insurance, marketing). Family seed money could cover it.
- **Path to big:** illustrative mid-size show of 250 tables at $175 plus 2,500 entries at $8 plus sponsors is about $75k; 100 shows is $7.5M revenue plus vendor-software subscriptions and sponsor deals.
- **Who does it today:** Front Row Card Show (national), many regional promoters, generic event software (Eventeny, Tickettailor, trade-show tools).
- **Risks:** events are ops-heavy and cannot scale without hires; liability, theft and sales-tax rules; minors attend (keep selling to adults, no gambling-style product); weekend time load.

## 7. Auction Lens: "should I bid on this wrecked Tesla?"

**One-liner:** a browser overlay that reads a Copart/IAA lot (or a B-Stock/liquidation pallet manifest) and returns a maximum bid with repair-cost and resale comps, plus a broker lane for public buyers.

- **Customer:** young flippers, rebuilders, exporters, pallet resellers.
- **Who pays:** $19-$49 a month; broker fee $199-$299 per vehicle (CarProxy $299; SalvageReseller $299 or 10%, or $249 or 7% plus $34.99 a month).
- **Problem:** fees stack (a $200 winning bid can reach $570+ after fees, tax and transport); manifests with more than 15% variance tend to lose money (a liquidation-analytics vendor's claim).
- **Solution:** fee calculators, AI damage-to-repair estimate with parts lookups, retail and auction comps, ROI and shipping, bid-ceiling alerts.
- **Why now:** DIY flipping content on TikTok and YouTube; Copart's non-insurance buyer pool is growing.
- **Founder edge:** fast extension builds, Gen Z flipper audience.
- **First 10 customers:** YouTube flipping creators (affiliate), r/Flipping, Copart forums, 50 free beta seats.
- **Cost to first revenue:** about $1,500.
- **Path to big:** 40,000 payers at $35 a month is about $17M; add financing, shipping and title.
- **Who does it today:** sendit scan (free AI salvage analyzer), SalvageAlert ($19.99-$39.99 a month, alerts), SalvageReseller and CarProxy (brokers), B-Stock Buddy (free, about 93 users), a UK pallet SaaS at GBP 39-149 a month listed for sale, Closo analytics.
- **Risks:** crowded with small players; weak novelty; terms of service; broker rules vary by state.

## 8. Pilot Pool: get paid to drive a robot (moonshot)

**One-liner:** vet and train gamers as remote operators for delivery robots, teledriving and humanoid data-collection programs, and place them for a fee.

- **Customer:** robotics and AV companies hiring teleoperators.
- **Who pays:** employers $2k-$5k per placement or a 20-30% markup; candidates a small fee for simulator practice.
- **Problem:** a one-person tracker of about 740 robot-training postings from about 60 employers shows a median pay near $25 an hour (Figure's Humanoid Robot Pilot $32, Helix Data Creator $30+, remote robotic-car operator $24-$28); Coco and Vay run on remote drivers.
- **Solution:** latency-realistic browser simulators, scoring, a vetted pool, employer dashboard.
- **Founder edge:** gamer network and browser-game building skills.
- **First 10 customers:** five teleop startups for a pilot; recruit candidates via gaming Discords.
- **Cost to first revenue:** about $1,500.
- **Path to big:** speculative; depends on physical AI scaling. Honest market evidence is thin.
- **Who does it today:** employers hire directly; staffing and BPO placement firms not identified.
- **Risks:** demand volume unknown; employers in-house hiring; hardware and security requirements. Kill test: five employer calls, none willing to pay a placement fee.

---

## Searched and rejected (so nobody repeats the work)

| Idea | Why it died |
|---|---|
| Settlement-claim autopilot | MoneyPilot claims 10M+ members and $2.5B saved (self-reported); Chariot Claims and others |
| AI-faked damage photo detector for Shopify | Verilo ($29 a month), DamageProof, PixelProof ($19) already live capture; Forter owns the enterprise side |
| Fake pay-stub detection for small landlords | Snappt, Findigs, Burnt; vendors now say verify the person (bank-linked income), not the paper |
| Fill-dirt exchange | Soil Connect, backed by Cemex Ventures and others |
| Gameplay-data co-op | Worldmodeldata (GBP 7M seed), General Intuition ($320M), Mercor pays gamers $12-$14 an hour |
| Estate inventory and valuation | Valuable (Blue Moon partnership), Meli, Homvi, Gavelist, AuctionWriter |
| Thrift-store scanner | Resell AI, Underpriced AI, RePick, Thrifted, Sella and more |
| Rental-car AI scanner disputes | Ravin's consumer app is free; Proofr is $9.90 a month; Hertz says 97% of scans produce no charge |
| Lease-end bill fighter | UK average charge about GBP 368 and 45% of cars charged; Lexus waiving up to $500 on new leases; NY AG arbitration is $75; little room for a fee |
| Aircraft logbook AI | BetterPlane, Bluetail, Airlogbooks, MyTailLog |
| Neighborhood group-buy for home services | OneNeighbor (5,000+ communities), Bulqit (Austin, Aug 2026), Neighbrium |
| PRO-free business music | Business-music vendors bundle all PROs for about $40 a month |
| Clipping view-fraud auditor | Whop's own bot score and reimbursement, plus Reachbot and ClipAffiliates |
| ADA Title II PDF remediation | DOJ pushed deadlines to April 26, 2027 (50k+ population) and April 26, 2028 (smaller); per-page $3-$15; many vendors |
| Tariff refund desk | CBP's CAPE portal is free; law firms take 15-25%; claim buyers pay 30-60 cents |
| LLM bill contingency audit | Fixed-price Upwork audits and a free MCP auditor; other lenses cover TokenAudit |
| Teleop staffing at scale | folded into Pilot Pool as a moonshot |

## Sources (selected)

- Epoch AI, "State of RL envs": https://epoch.ai/gradient-updates/state-of-rl-envs
- arXiv 2606.16062 summary (hackability audit): https://www.emergentmind.com/papers/2606.16062
- aitrainer.work, selling RL environments: https://aitrainer.work/sell/rl-environments
- SimpleClosure / dead-startup data (Gizmodo, Fast Company, MIT Technology Review Oct 13, 2026): https://technologyreview.com/2026/10/13/1145755/ai-labs-buying-data-from-dead-startups-to-train-models
- Google Business Profile suspension waves: https://wolfpackadvising.com/blog/thousands-just-got-their-google-business-profile-suspended/
- Reinstate Labs press release (July 3, 2026): kdhnews.com press release
- Whitespark, Sterling Sky, My Amazon Guy pricing pages
- Gambling loss cap and repeal vote: House Ways and Means Sept 16, 2026 coverage (Fox5 Vegas, SBC Americas, CPA Practice Advisor)
- Pikkit: https://pikkit.com
- Card shows: PasadenaNow (Front Row, 540 tables, 375 waitlist), thecardshopfinder.com vendor guide
- Copart brokers: carproxy.com, salvagereseller.com, auctiongate.io
- Robot-training jobs: IEEE DataPort snapshot, Tweaktown (Tesla), Figure postings
