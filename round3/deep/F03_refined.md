# F03 Refined: Closed-Loop Paper (weekly paper math packets, no screen for the child)

**Verdict: DEAD as a venture for this founder (alive = false).**
The critics are right on the points that decide it. The only thing left standing is a cheap, gated cold-traffic pre-sell that I expect to fail. It runs only after the freight-audit venture has had a verdict, and it is described below so the answer is falsifiable, not so it gets built.

Written 2026-10-25. Evidence tags: [P] fetched primary page, [S] search summary or secondary, [U] unverified. "My arithmetic" was run in Python.

---

## 1. The strongest honest version (what I tested the critics against)

- **Product.** Per-child, paper-only math practice for grades 2-5. Each Sunday the parent scans 4-6 pages. The packets carry page IDs and fixed answer boxes, so a vision model only has to read digits. Problems come from code templates, so every answer key is exact. An item-level skill record per child drives Monday's packet, plus a three-line note to the parent. The child never touches a screen.
- **Payer.** The parent, usually a homeschooler. The budget line is homeschool curriculum (about $1,295 per elementary child per year, an HSLDA figure I only saw secondhand [S]) or an ESA balance.
- **Price.** $29 per month or $249 per year per child. This is the price the test has to clear. No other price survives (section 5).
- **What is true in its favor.**
  - There is no licence wall.
  - The build is a few weekends for Asher.
  - Model cost is about $0.35 per child per month.
  - As of today the closed loop with memory is a real gap, and it is also the cheapest gap for anyone else to fill.

## 2. What I re-verified this session (9 searches and fetches)

| Claim | What I found |
|---|---|
| MathSprout is a direct clone of the core loop | [P] Confirmed. SEDX LLC, free to generate and print, photo grading by Claude on the parent's own API key, 100 gradings for $4.99, v1.0 on Sep 1 and v1.0.1 on Sep 27, no ratings yet. The page does not describe progress tracking over time or weekly plans. So it is a **nascent** competitor, not an entrenched one, and it proves the loop is a weekend project. |
| RedMarker is a funded-looking competitor | [P] Weaker than the critic said. The Product Hunt page shows 35 views and 2 upvotes. It scans drill worksheets, is organized by student and class, runs on iPhone and Android, and was aimed first at ages 4-10. The page does **not** state pricing, so the "free tier plus credits" claim stays [S]. Tiny, not a threat today. |
| Mathnasium is shipping AI plans | [S] Not confirmed. The Jan 27, 2026 release lists AI-powered learning plans as **planned**. myMathnasium (the parent portal) launched to enrolled families around June 15, 2026. The Sept 22, 2026 release mentions the portal and "Mathnasium Plus" and says nothing about AI. The incumbent-copy risk is an inference, as critic 1 said. |
| Kumon proves a growing paper market | [S] No. One franchise-data aggregator shows 1,689 US units in 2025 and a net decline of about 1.7% a year. I could not verify it against Kumon filings, and I found no current US enrollment figure. The anchor is flat to shrinking at best. |
| Excellence Learning (YC W25) is the funded rival | [S] Its YC page still says US parents are the primary customers. A third-party profile adds teacher tools and B2B/B2B2C school sales (French institutions named). That reads as an expansion, not a confirmed pivot. No pricing found. |
| Microschools or tutors are a bulk buyer | [U] I found **no** per-student software spend data for microschools (Prenda and KaiPod bundle materials). A search for a tutor-facing scan, diagnose, next-sheet tool returned only consumer homework solvers. Absence of evidence in a weak search, but also no sign of a budget line. |
| A cheap lead-gen funnel might rescue CAC | [S] One undated, self-reported homeschool founder (Zip): free-worksheet Facebook ad, $0.20 per email at 756 signups from 1,635 clicks; $3-6 per email on Google. Lead-to-paid unknown. This is the only CAC-relevant datum anyone found, and it is why the pre-sell test measures cost per paying stranger. |

## 3. Critique-by-critique answers

Legend: **Conceded** means it is right and it matters. **Partly** means the critic overstated one piece. **Rebut** means I disagree.

### Critic 1 (market lens)

1. **No wedge; clones exist.** *Conceded.* MathSprout is verified. RedMarker is real but obscure. The "memory plus weekly habit" wedge is reproducible by a parent with a saved ChatGPT or Claude project, and a feature sprint for Khan or Google. The item-level skill graph is invisible at purchase and only matters after retention is proven.
2. **Price in a dead zone.** *Conceded.* Khanmigo is $4/month and takes photos of handwritten work [P per the dossier]. Synthesis Tutor sells a family of seven for the same $29. Zearn and Khan are free. $29 for one child has no anchor except Kumon, and Kumon sells something else (item 3). Section 5 shows the price has no escape in either direction.
3. **Kumon is a category error.** *Conceded.* Kumon and Mathnasium sell a human, a place and accountability. This product removes the human and keeps the hardest part (getting a 7-10-year-old to sit down daily) on the parent. The buyer who pays $190/month to outsource nagging is not the $29 DIY buyer, and the DIY buyer names a $10 workbook as the substitute.
4. **Incumbents are moving.** *Partly.* Verified: Mathnasium *announced* AI plans (planned, unconfirmed live) and launched a portal. Not verified: any incumbent shipping a paper packet. The structural point stands anyway. If it works, the copy cost is a sprint, and HomeschoolFox already sells printable daily skill sheets and is both the best affiliate channel and a copycat risk.
5. **Chegg analog.** *Partly rebut, net conceded.* Chegg sold answers, which a chatbot replaces one-for-one. This sells a weekly ritual and a printed object, which a chatbot does not replace. But the same retention data say the ritual is the weakest link, so the analogy does not rescue the economics.
6. **Paper-first tailwind is not purchase evidence.** *Conceded.* The AP story and the 14+ state bills regulate school-issued devices, and Pinterest search growth is interest, not payment. I removed it from why-now except as a cheap free-printable top-of-funnel channel.
7. **Retention math.** *Conceded.* Median first renewal is 56% monthly and 24% annual (RevenueCat, via the dossier). A weekly chore with no child-facing hook makes the dossier's kill rule ("half stop scanning by week 4") the **base case**.
8. **Search and channel dominance; favors are not signal.** *Conceded.* "Kumon alternative" results are occupied by vendor comparison posts. Homeschool Facebook groups restrict promotion. Warm pilots of 10-15 relatives measure obligation. The new test uses cold strangers only.
9. **ESA is smaller and riskier than it sounds.** *Conceded.* Texas TEFA gives homeschoolers $2,000 a year with a reported 10% hardware-plus-software cap (about $200). $348 is **1.74x** that cap if the cap covers software, and 17% of the whole award. Florida vendor onboarding runs about 4-5 months. Arizona audits focus on supplemental materials and tutoring. ESA stays an option to probe, never a launch plan.
10. **Data moat only exists after winning.** *Conceded.* Also a COPPA-adjacent child-data liability from day one.

### Critic 2 (founder-fit and operations lens)

1. **Distribution is the binding constraint and Asher's documented weak spot.** *Conceded, and this is the fatal one.* The freight-audit service is fully built and unsold because the sales calls have not happened. A consumer parent subscription needs far more selling hours per dollar than a $500 diagnostic. Nothing in his network (mentor in AV integration, Gen Z peers, college applicants, gamers) reaches parents of 7-11-year-olds.
2. **Unit economics at his capacity.** *Conceded.* I re-ran it. The dossier's "$87 affiliate cost per family" is wrong. At 10% monthly churn over the 12-month affiliate window it is **$62.4**, and at RevenueCat-like retention it is **$35.7**. Critic 2's $119 year-one revenue is right (4.11 paid months). Cheaper affiliate cost does not help because LTV falls by more.
3. **Pilot kill rule can't detect the real failure.** *Conceded.* Warm buyers, four weeks (ends before the first renewal), and a Nov-Dec window that collides with his Nov 1 college batch, USC ED notification and finals. The refined test is cold-traffic, gated on cost per paying stranger, and extends to the month-2 renewal.
4. **Weekly ops and trust load.** *Conceded.* About 72 answers per packet at 95-97% digit accuracy is 2-4 misreads per child per week. Models tend to "correct" malformed digits into plausible ones, which hides exactly the errors the product exists to find. The fix is a parent-confirm step on flagged boxes (breaks "the only chore is scanning") or a paid reviewer (labor he does not have).
5. **Efficacy gap worse than generic edtech.** *Conceded.* One 20-minute packet a week is a low dose. The tutoring literature favors 3+ days per week, though I did not verify the once-a-week claim. Calling it "Kumon at home" invites the comparison and a trademark problem (the KUMON mark; ad copy is the actionable risk).
6. **ESA is slow and fragile.** *Conceded* (see Critic 1, item 9). Weekly recurring invoices are impractical in ClassWallet, which pushes toward the $249 annual plan, whose median renewal is 24%.
7. **No moat; trivial substitute layer.** *Conceded.* Math Mammoth Grade 3 is $42.50 once with keys, tests and a worksheet maker. Kumon workbooks run about $4-9.
8. **Legal is manageable but not "one hour of counsel."** *Conceded.* Budget about $500 for a privacy review covering the amended COPPA rule (in force since April 22, 2026), a written retention policy, and the state child-data laws the dossier skipped. No KUMON in names or ad copy.
9. **Printer and scan friction.** *Conceded.* About 31% of adults have no home printer (MetaFacts 2019-2020, the best figure found) and the weekly print-scan loop sits at the point where retention is weakest.

**Net.** All ten of critic 1's objections and nine of critic 2's survive. The few places I pushed back (RedMarker's strength, Mathnasium's AI launch, the Chegg analogy) only narrow the competitor map. They do not touch price, retention, distribution or the missing moat.

## 4. The math (my arithmetic)

**Per paying family, monthly plan (56% first renewal, then 85% monthly retention):**

| Price | Paid months, 12 mo | Revenue, 12 mo | Revenue, lifetime |
|---|---|---|---|
| $9 | 4.11 | $37 | $43 |
| $19 | 4.11 | $78 | $90 |
| $29 | 4.11 | $119 | $137 |

- At $29: contribution per month is about $27.51 after Stripe (2.9% + $0.30) and about $0.35 of model cost. That is about **$113** over the first 12 months.
- For a 3:1 LTV:CAC, **blended CAC must be at or below about $38**. No published number shows anyone achieving that for a K-5 parent subscription. Support and the human reviewer are not even in this number.
- Annual plan: $249 with 24% renewal gives about $328 lifetime, but a cold visitor converting to $249 up front is a harder ask.

**Scale needed for $10M a year (steady state):**
- Monthly plan only: about **73,000** new paying families every year.
- Annual plan only: about **30,500** new families every year (this is where the dossier's "30,000 families" quietly assumed a stock, not a flow).
- A 50/50 mix: about **43,000** new families every year, forever. That is 1.3% of *all* US homeschoolers (about 3.4M [S]) freshly acquired every year, and the target age band is only part of them.
- Holding a base of 30,000 *paying* families at monthly-plan retention needs about 6,300 new paying families **per month**.

## 5. Why no rewrite saves it (the rewrites I tested)

| Rewrite | Result |
|---|---|
| **Cut the price to about $9.** | Lifetime revenue about $43, CAC ceiling about $12-14, and a 30% affiliate share leaves almost nothing. Reaching $10M needs about 235,000+ new families a year. Dead on acquisition. |
| **Add a human-supported premium tier ($60-130).** | This is the real Kumon-replacement tier. It needs a paid coach per roughly 20 families, which Asher cannot supply at 10-15 hours a week. A labor business with Thinkster and Kumon as comparators is a boutique service, which the lessons forbid. |
| **Sell to microschools, co-ops, or tutors.** | A buyer who might sign for 20 kids at once is attractive, but there is no spend data [U]. At $5/student/month ($1,200/yr per 20-student school), $10M needs about 8,300 schools, about **11% of all roughly 75,000 microschools** (one nonprofit's count). Bundled providers hide the spend, and an 18-year-old is selling to operators. It is a hypothesis to interview, not a plan. |
| **Lean on ESA money.** | Slower than the product needs (4-5 months to a Florida listing), capped in Texas, audited in Arizona. It is a retention-timing mismatch (annual invoices, 24% renewal) and a regulatory dependency. |
| **Use the data/skill graph as the moat.** | Exists only after the product has already won retention, which items 7 and 8 above say it will not. |

None of these gives a version that is both defensible and big. Per the rules, that means dead, not narrower.

## 6. Path to big (honest)

There is no credible path under his constraints.
- The only mechanical routes are paid acquisition at a CAC no one has shown is achievable, ESA vendor channels that take 4-5 months per state and carry audit risk, or a microschool bulk channel that needs about 11% share.
- The median outcome (a few hundred families, cold plus affiliate, over two years) is a **$0.03-0.08M a year** side income. The upside outcome (ESA listing in two states plus affiliate scale plus a co-op channel working) is roughly **$3-5M a year**, with perhaps 3-5% odds. The $10M case requires everything to work at once and incumbents to stay asleep.

## 7. What would revive it: the gated cold pre-sell

This is the only form I'd run, and only after the preconditions below.

**Preconditions (all of them):**
1. The freight-audit service has landed a first paid diagnostic, or Asher has explicitly parked it. These hours compete directly.
2. College-application crunch is over (Nov 1 batch done and the USC ED decision in hand, mid-December). Earliest realistic start is winter break, **Day 0 = about Dec 19** (check the school calendar).

**Test design:** no product build. Packets are made by a template script, Claude reads the digits, and Asher reviews every packet by hand. Price is a single cell at $29/month. I cut the $19-vs-$29 split: at about 300 ad clicks it is statistically meaningless, and a $19 price needs a CAC under $26 that no cold channel reaches anyway.

**Gates:**
- **Gate 1 (Day 14):** at least **8 strangers** (not relatives, not friends of friends) pay $29 from at most **$300** of spend, which is a CAC at or under about $38 and roughly 2.5% visit-to-paid. That is a top-decile cold conversion, and it is the point: the economics require it.
- **Gate 2 (Day 30):** at least 75% of paying families scan at least 2 of their first 3 weeks, and per-family support is at or under 20 minutes a week.
- **Gate 3 (Day 60, month-2 renewal):** at least 70% renew (above the 56% median).
- **Read accuracy:** on at least 30 real child pages, at most 1 misread per child per week after the parent-confirm step.

Fail any gate: stop permanently. No redesign.

## 8. First 30 days (starts at Day 0, only if the preconditions are met)

- **Days 1-7 (about 10 h):**
  - Template script for 10 grade-3 packets with exact keys and page IDs.
  - Digit-read QA on 30 real child pages from borrowed kids. This is pipeline QA, **not** a demand signal.
  - One landing page with a Stripe link at $29, a refund promise for the first month, a privacy page (parent-only accounts, no child names or faces, 30-day image deletion), and copy with no KUMON.
  - $500 privacy-counsel review (COPPA, retention, state child-data laws) before any child's page is scanned.
  - Output: 10 packets, a measured digit-accuracy number, and a live page.
- **Days 8-14 (about 12 h):**
  - $300 of Meta and Google traffic to parents of grade 2-5 kids.
  - 40 cold emails to homeschool bloggers and review programs.
  - Posts only in allowed promo threads.
  - Output: visits, paying strangers, cost per paying stranger. **Gate 1 on Day 14.**
- **Days 15-21 (about 10 h):**
  - Fulfil packet #1 within 48 hours of each first scan.
  - Log read errors, misreads, support minutes and parent-confirm taps.
  - Optionally run 6 microschool-operator interviews with one question: "what do you pay per student for practice, and who grades?"
  - Output: scan-completion rate and a misread log.
- **Days 22-30 (about 10 h):**
  - Packets #2 and #3 and a parent note.
  - Submit the Step Up MyScholarShop interest form to time Florida's decision window (about 90 days). This costs nothing.
  - Output: week-2 scan completion, support minutes per family, and a cohort table. **Gate 2 on Day 30.** If both gates pass, continue to the month-2 renewal gate. If not, stop and archive.

## 9. Ten first channels (cold, not favors)

1. **Trivium Pursuit's "replacement for Kumon" thread and its commenters** (triviumpursuit.com) [S]. People who literally asked for a Kumon replacement and named a $10 workbook as the alternative. Reply with a free packet and an email capture.
2. **Hip Homeschool Moms Facebook community** (about 36.5k members in Sept 2024 [S]). Pinned promo thread or admin approval only.
3. **Homeschool Review Crew** (The Old Schoolhouse). Reviewers keep the product and post public reviews. Vendor terms not found [U], so check first.
4. **HomeschoolFox partner and marketplace program.** 30% recurring for 12 months, 60-day cookie [P per dossier]. Also a copycat risk, so treat it as a channel test, not a dependency.
5. **iHomeschool Network member blogs.** Over 60% of homeschool parents reportedly use blogs to pick curriculum (2021-22, secondary [S]). Pitch free-trial reviews.
6. **r/homeschool weekly threads.** Reddit was inaccessible to every researcher, so read the current promo rules before posting anything.
7. **Pinterest "screen-free math practice" boards** (grade 2-4 printable packets). Search interest for screen-free activities is up [S]. Free printable sample packets as the lead magnet.
8. **Teachers Pay Teachers.** Publish a free sample packet and a $5 paid pack. It shows what parents pay for packets, and it has no ad cost. [U] unverified here.
9. **KaiPod Learning and Prenda microschool operators.** Median 20 students, 87% ages 5-11 [S]. The B2B hypothesis; interview only.
10. **One Florida PEP or Arizona ESA homeschool family** as the vendor-approval probe (Step Up MyScholarShop form; Arizona ClassWallet vendor request filed by a parent). Times the approval window. It is not a revenue plan.

## 10. Quit conditions

- Fewer than 8 cold strangers pay within 14 days of the first ad, or cost per paying stranger above $38.
- Fewer than 75% of paying families complete at least 2 of their first 3 weekly scans, or support exceeds 20 minutes per family per week.
- Fewer than 70% renew at month 2.
- More than 1 misread per child per week after the confirm step on at least 30 real pages.
- The freight audit has no verdict by Day 0, or any week of the test displaces freight-audit selling hours.
- A free tool (MathSprout, Khan, Google) ships a weekly memory plus print loop before Gate 1.

## 11. Bottom line and where the hours go

- The pitch survives only as "a cheap thing to disprove." It does not survive as a venture: the price has no escape, the retention economics cap CAC near $38, the market has free and tiny rivals today and giants one sprint away, and the buyer is outside Asher's reach.
- The reusable asset is the template engine plus the digit reader. That is a few weekends of work worth keeping on the shelf, not a company.
- The honest use of the next 10-15 hours a week is the freight-audit sales calls that have not happened yet.

### Numbers for the pipeline

- **Cost to first revenue:** about $350 (ads $300, domain and tools $50), with a $500 privacy review before the first scan.
- **Weeks to first revenue:** about 2 after Day 0.
- **Median-case revenue:** about $0.04M a year by year 3.
- **Upside:** about $4M a year.
