# Round 3 generator: the college-admissions and financial-aid world, from the inside

Lens: frictions that families already pay to remove, in the world Asher is living in right now (Common App, ED/EA, portals, score sending, merit aid, appeals, scholarships). No essay tools.
Date of research: late October 2026. About 30 searches. Every number below is tagged where it is vendor-reported, secondhand, or my own estimate.

## What the research says (read this first)

1. **Families already pay thousands for this.** Private college counseling is a roughly $3B US industry; the average package is about $6,500 (Marketplace/Town & Country; CollegePlannerPro survey: $3,763 lowest package, $7,886 highest). College Aid Pro charges $3,499 for an aid-only package and $6,499 for aid plus admissions.
2. **The self-serve end has been pushed to near zero.** College Aid Pro's MyCAP Premium is $4.99 a month; Award Advisor (Vermont's VSAC) is free; Overgrad, College Raptor, Scholarships360 all have free award-letter comparison. A consumer "award letter decoder" is a dead end.
3. **The money is in the middle and on the outcome.** Nobody I found does contingency (pay-only-if-aid-rises) at scale. A 2021 startup (College Tuition Advisory Services) offered 25% of the added discount, capped at $2,000, targeting about 700,000 students a year from $80k-$250k families. I could not confirm it is still operating.
4. **There is a fresh forcing event.** From July 1, 2026, Parent PLUS is capped at $20,000 a year and $65,000 per student. A $50k school now leaves a $30k hole to fill some other way. NAICU reported colleges "scrambling." At the same time, NACUBO projects the private-college discount rate at 57.1% for first-time students in 2025-26 (90% get institutional aid) and net tuition revenue is falling (-2.2% real in 2024-25). Buyers' leverage is up.
5. **Appeal odds are genuinely murky.** Vendor figures: 75% of private-college appeals succeed (College Aid Pro, own research, unverified); 71% of the 29% who appeal succeed (Sallie Mae, secondhand); "a little more than 50%" (one consultant); about 1% of students get adjustments (another). Some schools refuse competing-offer matches; some appeals change the budget but not the grant. So any appeal business must run a pilot before it scales.
6. **Renewal losses are large and nobody sells protection.** Georgia: about 30% of HOPE entrants lose it, 20% of Zell Miller entrants drop or lose it, and 42% of HOPE entrants have lost it by credit hour 90 (Education Finance and Policy, 2023). Tennessee about 29% after two semesters (unverified). Florida Bright Futures needs 3.0/2.75 GPA plus 24 credit hours.
7. **Hidden traps with dollar value.** CollegeReadyParent found 79 of 302 test-optional colleges offering large awards (about 1 in 4) still require SAT/ACT for at least one full-tuition scholarship.
8. **Credit by exam is a real, self-reported multi-billion-dollar behavior.** Sophia says $1.7B in tuition saved and 4.8M transfer credits at $99 a month; policies on what each college accepts are scattered (caps on non-traditional credit, no online lab science, expiry windows).
9. **Investors are active but in adjacent slots.** Nerd Apply (outcomes data for counselors, 100k+ applications, 500+ counselors, $3.2M seed, Jan 2026); EdVisorly ($13.3M Series A, transfer workflows for universities); Straia ($3.1M seed, Oct 2026, college retention analytics, a16z Speedrun); Kollegio ($2.8M seed, AI coaching); CollegePlannerPro (growth investment from The Brydon Group, Dec 2025).
10. **Things that look like gaps but are not:** crowdsourced award data (TuitionFit since 2019, only about 4,000 offers in its first cycle; Road2College Insights), application autofill extensions (a dozen exist, each with a few dozen to a few hundred users), net-price-calculator aggregation (Rezolve blocked College Abacus in 2013; College Abacus compares only 3 schools), direct admissions (Common App has 234 colleges for 2026-27 and sent offers to 800k+ students last year).

## The 8 ideas, ranked best first

---

### 1. Second Look: pay-when-it-works financial-aid appeals

**One line:** A diagnostic-plus-contingency audit of college award letters: $149 for the audit, then 20% of any grant increase (capped), nothing on loans.

- **Customer:** Parents (and the 18-year-old, who co-signs) of admitted seniors holding award letters from private colleges and out-of-state flagships with a $15k+ yearly gap; household income roughly $80k-$250k, the band that gets little need aid. A 2021 contingency competitor sized this at about 700,000 students a year.
- **Who pays and budget:** Parent. $149 audit credited toward a success fee of 20% of the first-year grant/scholarship increase, capped at $2,500 per student, billed only after the revised letter posts. No fee on loans or work-study. The benchmark in their head is College Aid Pro's $3,499 flat fee, and the gap itself is $20-50k a year.
- **Problem:** Appeals are free, but families do not know which levers each school honors, what documents to send, or the deadlines. Odds are murky (see research item 5). Parent PLUS caps just made the gap bigger and harder to finance.
- **Solution:** Upload award letters, SAI/CSS numbers and test/GPA. A pipeline (a) strips loans out to show true net price, (b) reads each school's own appeal policy, forms and deadline, (c) checks the school's published merit grid against the student's stats for a missed tier, (d) flags special-circumstance triggers, and (e) only where policy allows it, builds a competing-offer request. Output: a 3-page "X-ray" plus a send-ready, factual, family-signed appeal packet (documents and numbers, not an essay). A contracted retired aid officer reviews each packet before it goes out. Every outcome gets logged.
- **Why now:** Parent PLUS caps (July 1, 2026); 57.1% projected private discount rate; falling net tuition revenue and the demographic cliff; the earliest FAFSA launch ever; ED and rolling-admission award letters arrive from mid-December, so there is a live pool within 60 days.
- **Founder edge:** He already built the exact business shape (flat diagnostic plus 20% contingency) for freight audit: engagement letter, intake, evidence pack, fee mechanics all carry over. His multi-agent pipelines can read hundreds of school appeal policies. He is the same age as the student. His mentor can introduce a retired financial-aid director.
- **First 10 customers:** (1) Offer a free "award letter X-ray" to 25 families in his own senior class and neighboring schools' parent groups the week ED decisions land (about Dec 15). (2) Post "upload your letter, I will tell you in 48 hours if an appeal is worth it" in r/ApplyingToCollege (about 1.3M members) and r/financialaid during the Dec-Feb window. (3) Convert 10 to the $149 audit by mid-January; success fees land February-May. (4) Ask 3 independent counselors (most do not do aid) to refer for a 20% share.
- **Cost to first revenue:** about $1,100 (Florida LLC or his state's equivalent about $125, domain and Stripe about $50, attorney review of the engagement letter and refund terms about $600, reviewer stipend for the first 5 packets about $375).
- **Path to big:** 700k target families (2021 estimate). At a 35% win rate and a $6,000 average first-year gain, expected revenue is about $570 per audited family in year one ($149 plus 0.35 x $1,200 fee). 2% share = 14k families = about $8M a year; 5% share = about $20M; add $99 annual re-audits and sibling business for about $25-30M steady state. If the real win rate is 10%, economics fall to about $250 per family and it needs 5%+ share. Second layer: the outcome log (which schools say yes to what) becomes the dataset in idea 8. **Biggest risk:** the win rate is unproven. Run a 10-family free pilot first and publish the results.
- **Who does it today:** College Aid Pro (Salem, MA; $3,499 aid package; MyCAP $4.99 a month; Juno student-loan marketplace partnership, Oct 2025; claims hundreds of thousands of families). College Tuition Advisory Services (25% capped at $2,000, 2021; status unknown). Frank (several hundred dollars upfront, 2021; status unverified). Free DIY via school aid offices and NerdWallet guides. Nobody visible runs capped contingency with a published win-rate.
- **Guardrails:** no guarantees, no fabricated hardship, family signs everything, no lender recommendations, no ghost-written essays. Student who is 17 does not sign; the parent does.

---

### 2. Credit Stack: the test-out planner (graduate a year early)

**One line:** A college-by-college map of exactly what AP/IB/CLEP and ACE-credit courses each school will accept, turned into a cheapest-path degree plan with dollars saved.

- **Customer:** Parents and students in the class of 2027-2029 who hold or will hold AP/IB/dual-enrollment credit, plus first-year college students trying to finish in 3 years.
- **Who pays and budget:** Family: $39 for a school-and-major plan, $79 for a 3-year graduation plan. Providers: StraighterLine lists $32 per lead on FlexOffers; Study.com listed 8% of sales (one aggregator shows the program closed); Sophia has no public affiliate program, so it needs a direct partnership. Value to the family: 30 credits is roughly $11k at in-state public tuition and roughly $45k at a private school (my estimates from published price levels).
- **Problem:** Policies are buried and uneven: Concordia caps non-traditional credit at 30; BMCC does not take online lab sciences; some schools expire Sophia credit after 5-10 years; ACE credit often has to be sent through a separate portal. Families guess and either under-use credit or take courses that do not count.
- **Solution:** Agents read the catalog and transfer-credit page of the top ~1,500 colleges into a normalized matrix: AP score to course, IB, CLEP, DSST, ACE-recommended courses, caps, residency rules ("last 30 credits in residence"), and expiry. A planner picks the cheapest accepted route for the chosen major's gen-eds, marks each cell "confirmed / unclear / not accepted" with the source link, and generates a registrar email for unclear cells.
- **Why now:** LLMs make reading 1,500 messy catalogs a weekend job rather than a research team; Parent PLUS caps make every saved credit matter; Modern States (free CLEP prep, exam fees covered in some programs) and Sophia ($99 a month) have trained consumers to expect this.
- **Founder edge:** He is an AP student himself (macro, stats, physics) and can test it on his own list. Multi-agent research at scale is his proven skill. The SAT playbook audience is a ready-made first channel.
- **First 10 customers:** Free sample maps for the 10 most common schools in r/ApplyingToCollege and r/APStudents threads ("what credit do I get at X?"); then $29 early-bird to AP classmates and their parents; target 10 paid in 3-4 weeks. Reach out to Modern States and StraighterLine partner teams in week 2.
- **Cost to first revenue:** about $500 (model usage for the catalog pass about $300, domain, Stripe).
- **Path to big:** About 2M first-time freshmen a year (my order-of-magnitude estimate). 5% x $49 = $4.9M; provider rev share (20k enrollments x $400 x 20% = $1.6M); adult learners with "some college, no degree" and data licensing to providers and universities take it to $10M+. **Biggest risk:** Sophia, Study.com or College Board could add their own cross-college lookup; providers may not pay.
- **Who does it today:** Sophia (115+ partner colleges, credit reviewed at 2,900+ others, self-reported $1.7B saved); Modern States (free); StraighterLine; Study.com; College Board's free CLEP and AP policy search tools; Transferology; school-run transfer explorers. EdVisorly ($13.3M Series A) sells workflow to universities, not families. No neutral, cross-provider, per-college plan found.

---

### 3. Admit Inbox: the admissions email-to-checklist autopilot

**One line:** Forward your admissions email to one address; get a live per-school board of missing items, portals, deadlines and discrepancies, plus a weekly parent digest.

- **Customer:** Seniors (and parents) applying to 6-20 schools; later, admitted students facing the onboarding checklist (housing, immunizations, orientation, placement tests).
- **Who pays and budget:** $24 per season for the student, $39 with parent digest, $299 with a human "do it for me" tier for portal chores. Later: schools and counselors ($3-8 per student seat) and colleges for melt prevention.
- **Problem:** Each school runs its own portal and sends its own stream of emails. Colleges often only contact you when something is missing, and matching transcripts and recommendations can lag two weeks or more. Score reporting is inconsistent: Asher himself found a school showing an ACT sitting score instead of his superscore. Up to a third of admitted students never arrive (summer melt, one source), partly from missed steps.
- **Solution:** A forwarding address (a Gmail filter on *.edu and Common App senders) avoids Gmail's restricted-scope security review. An LLM extracts events (missing item, portal link, deadline, interview invite, decision release, scholarship deadline) into a board; a rules layer checks consistency (scores on file vs scores sent, self-reported coursework vs transcript) and sends SMS/email nudges. Self-reported coursework helper with a transcript cross-check so the family does not create a discrepancy.
- **Why now:** More schools use self-reported academic forms; FAFSA opened early; email extraction is finally accurate and cheap.
- **Founder edge:** He lives the pain this month and already built a 27-school, 68-task checklist for himself. He ships this in two weeks.
- **First 10 customers:** His own senior class (group chats), then r/ApplyingToCollege and school Discords with a free single-school trial; convert on the first "missing item" catch.
- **Cost to first revenue:** about $350 (inbound email service, domain, Stripe, model usage).
- **Path to big:** About 1.5M Common App first-year applicants a year (my estimate). 3% x $29 = $1.3M, so the consumer ceiling is $2-4M. $10M+ needs institutional seats: SchooLinks raised an $8.3M Series A selling counseling platforms to districts; Mainstay and EAB sell melt prevention to colleges (vendor-reported 21-32% melt reductions). **Biggest risk:** low revenue per user and a Common App or Naviance feature copy.
- **Who does it today:** Common App's own dashboard; Naviance, Scoir and SchooLinks (district-bought); CounselMore, CollegePlannerPro (counselor-run trackers); Vidhya (AI workspace); Kollegio (AI coaching). In my searches I found no consumer tool that parses the admissions-office email stream.
- **Guardrails:** sell to parents or 18+ students, no under-13 users, never store portal passwords.

---

### 4. Aid Guard: keep the scholarship you already won

**One line:** Parse your award letter's renewal conditions into rules, track your credits and GPA against them, and warn you while there is still time to fix it.

- **Customer:** First- and second-year students (and parents) holding state or institutional merit awards with GPA and credit-hour renewal rules.
- **Who pays and budget:** $19 a year per student or $39 per family. Lost awards cost $3-15k a year. Later: colleges (retention) and scholarship funders (lapsed recipients waste their money).
- **Problem:** 30% of Georgia HOPE entrants lose it; 42% by credit hour 90. Rules are scattered across award letters, state portals and handbooks, and are rarely connected to course planning.
- **Solution:** Upload the award letter and pick the state program from a rules library (start with 3 states plus the top-50 universities' merit renewal terms). The app projects "on track / at risk," runs what-ifs (drop a class, grade needed in Calc II), maps the cheapest summer course that repairs a credit shortfall, lists appeal and extenuating-circumstance paths, reminds the FAFSA refile, and checks whether the school reduces institutional grants when you win an outside scholarship.
- **Why now:** First-semester grades land in December, the first checkpoint for freshmen; LLMs parse renewal terms; colleges are spending on retention (Straia, $3.1M seed, Oct 2026).
- **Founder edge:** He is exactly this age; the product is a rules-library plus parsing job his pipelines are good at.
- **First 10 customers:** Seniors who already hold a merit offer in December, plus freshmen on the subreddits of 3 big state schools in the states chosen ("Do you know your renewal rules?" post with a free rule card).
- **Cost to first revenue:** about $500.
- **Path to big:** Consumer: 1M students x 5% x $29 = about $1.5M. The real prize is B2B: 500 tuition-dependent colleges x $40k = $20M, because each retained student is worth roughly a year of net tuition. **Biggest risk:** the consumer slice is small and the institutional sale is slow; rules go stale.
- **Who does it today:** No renewal-specific product found. GPA calculators and scholarship application trackers (for example GPA Whiz) exist. On the institution side, Straia and EAB-style retention analytics.

---

### 5. Perk Pack: pay-per-use college-cost benefit for small employers and credit unions

**One line:** Small employers buy vouchers for the Second Look audit and Credit Stack plans that employees redeem; the employer pays only when someone uses one.

- **Customer:** The owner or HR lead of a 20-500 person company, or a credit union marketing director, wanting a benefit that parents notice.
- **Who pays and budget:** Employer benefits or retention budget; $149-$199 per redeemed voucher, or $2 per employee per month with a cap.
- **Problem:** Large employers (JPMorgan, EY, Mastercard) pay Bright Horizons College Coach for free admissions counseling for employees; the perk is concentrated at high-paying firms and I found no small-business price list.
- **Solution:** White-label landing page per employer, voucher codes, usage dashboard for HR, and the same product stack behind it.
- **Why now:** The PLUS caps make "help paying for college" a talked-about benefit; benefits-marketplace channels now bundle perks.
- **Founder edge:** Family business and investment connections give warm access to owners, which is how an 18-year-old gets in without being treated like a cold enterprise seller.
- **First 10 customers:** Pilot with 3 owners from the family network (first 25 employees free for one month, then vouchers); target 2 paying employers in 60 days.
- **Cost to first revenue:** about $300.
- **Path to big:** 60M employees at small firms; 2% enrolled at $36 a year = about $43M. The channel (PEOs, brokers, credit-union service organizations) is the lever. **Biggest risk:** depends on ideas 1-2 working; low employee usage means low revenue.
- **Who does it today:** Bright Horizons College Coach and similar admissions-counseling benefits at large employers; Empowerly and others sell to employers. No small-employer, pay-per-use version found.

---

### 6. Score-to-Dollars: the merit-aid matrix with retake ROI

**One line:** For each student's list, show what 40, 60 or 100 more SAT points are worth in guaranteed scholarship dollars, flag test-optional traps, and show the price that federal loans can actually finance.

- **Customer:** Families with juniors and seniors who earn too much for need aid and need merit.
- **Who pays and budget:** $39 one-time report or $12 a month list tracker; tutors and test-prep companies pay per qualified lead (tutoring marketing cost per qualified lead runs about $28-$62, so a $20-40 payout is plausible, unverified); counselors pay $199 a year to license.
- **Problem:** Merit grids are scattered by school; one in four test-optional colleges with large awards still require scores for a full-tuition scholarship.
- **Solution:** Parse about 500 published merit grids and Common Data Set merit sections; compute dollars per score band, renewal risk and PLUS-cap "financeable price"; add a National Merit perks map.
- **Why now:** PLUS caps; test-required policies returning; cheap parsing.
- **Founder edge:** His SAT playbook audience and his own score-sending analysis; strongest viral hook is the test-optional trap list.
- **First 10 customers:** Post the trap list and a "+60 SAT points = $X at your list" demo in r/ApplyingToCollege and SAT communities; sell to 10 seniors retaking the December SAT.
- **Cost to first revenue:** about $700.
- **Path to big:** Consumer ceiling is about $3-5M; going bigger needs counselor licenses and lead revenue, so it stays modest alone. **Biggest risk:** crowded and underpriced by MyCAP.
- **Who does it today:** College Aid Pro MyCAP ($4.99 a month), Road2College Insights (crowd-sourced plus college-reported), CollegeReadyParent (beta), College Raptor, school-run calculators (Ohio Northern, St. Norbert, GVSU), PrepScholar and Magoosh lists.

---

### 7. Policy Radar: verified requirements and change feed for independent counselors

**One line:** A cited, continuously verified database of admissions rules (test policy, superscoring, self-reported forms, deadlines, supplements, fee waivers, credit and merit policies) with an alert when a school changes anything.

- **Customer:** Independent educational consultants and small counseling firms (IECA alone has about 2,800 members; typical practice 15-25 students a year).
- **Who pays and budget:** $79-$149 a month; vendors (CounselMore, CollegePlannerPro-style tools) license the data via API.
- **Problem:** A competitor review noted one major IEC tool lacks verified application requirements; Peterson's and Common Data Set data are licensed and lag.
- **Solution:** Multi-agent crawl of about 1,500 sites and public Common Data Set PDFs with citations and diff alerts; sold as a feed plus a free "audit your school lists" hook.
- **Why now:** PE money entering IEC software (CollegePlannerPro, Dec 2025) and counselor-data venture rounds (Nerd Apply, $3.2M); AI makes continuous verification cheap.
- **Founder edge:** His research pipelines; the same data feeds ideas 1, 2, 3 and 6.
- **First 10 customers:** Free audits of 20 counselors' school lists, finding errors with citations; convert 10 to monthly.
- **Cost to first revenue:** about $600.
- **Path to big:** 5,000 counselors x $1,200 = $6M; data licensing could reach $10M. It is also the referral channel for idea 1. **Biggest risk:** a small standalone market and incumbents with their own databases.
- **Who does it today:** CounselMore (college database, $132 a month), CollegePlannerPro (about $100 a month for small practices; licenses Peterson's data), College Kickstart, Nerd Apply (outcomes data), Scoir, Naviance.

---

### 8. Offer Exchange: competitive-offer intelligence (long shot)

**One line:** Families trade anonymized award letters for instant "students like you got X" benchmarks; colleges pay for the aggregated competitor-offer data.

- **Customer:** Families (free to join, small fee to unlock); college enrollment and aid offices (buyers).
- **Who pays and budget:** Colleges already spend about $2k per enrolled student on recruitment (my estimate) and pay aid-optimization consultants $100k+; families pay $19 to unlock.
- **Problem:** Families bargain blind; colleges bargain blind about competitor offers.
- **Solution:** AI parses a screenshot of an award letter in seconds, redacts it, returns benchmarks, and links to idea 1 for the appeal. Every appeal outcome from idea 1 becomes labeled supply.
- **Why now:** Discount rates and enrollment pressure; AI parsing removes the upload friction that limited earlier attempts.
- **Founder edge:** Gen Z distribution and idea 1's data exhaust.
- **First 10 customers:** The same families as idea 1; require an upload to unlock.
- **Cost to first revenue:** about $200 on top of idea 1.
- **Path to big:** Colleges: 100 institutions at $100k = $10M; 1,500 privates at $25k = $37M. **Biggest risk:** the cold-start problem and enterprise sales, the exact buyer who will not take an 18-year-old seriously. Do not start here.
- **Who does it today:** TuitionFit (since 2019; about 4,000 offers in its first cycle; colleges can subscribe), Road2College Insights, College Aid Pro Award Analyzer (441 families uploaded when last reported), Nerd Apply (admissions outcomes, not aid).

---

## Considered and rejected

- **Private student-loan / PLUS-gap marketplace:** biggest dollars (lenders pay per funded loan) but regulated lead-gen and moral hazard; College Aid Pro already partnered with Juno.
- **Scholarship-provider software:** AwardSpring ($99 a month), SmarterSelect and Foundant (600+ clients each), CommunityForce, Bold.org; nonprofit buyers, crowded.
- **Application autofill extension:** a dozen exist, each with a few dozen to a few hundred users; fold into Admit Inbox as a feature.
- **Net-price-calculator scraper:** Rezolve blocked College Abacus in 2013.
- **SAT/ACT seat-alert bot:** small and College Board terms risk.
- **Direct-admissions marketplace:** Common App (234 colleges, 800k+ students got offers last year), Niche (100+ partners), EAB Concourse own it.
- **IEC lead marketplace:** CollegeVine and others; trust-heavy for an 18-year-old.
- **Student health insurance waiver autopilot:** real pain (mandatory plans cost thousands), unvalidated here, buying window is May-August; revisit in spring 2027.
- **Essay tools, AI-detection for admissions:** excluded by lens and guardrails.

## Suggested order of attack (my read)

Start 1 (audit pilot on ED letters in December) and 3 (two-week build, sells in November) at the same time. Use 7's crawl as the shared data layer. Treat 2 as the second wave for the January-March window.
