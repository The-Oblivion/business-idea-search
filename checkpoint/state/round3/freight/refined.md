# Refined venture: LTL overcharge filing desk (post-critique)

Written 2026-10-25. Inputs: dossier, START-HERE, HANDOFF, FACT-CHECK, offer-v2, outbound-playbook, the engagement terms, and both critiques. Evidence tags: **[checked]** I verified it today, **[critic]** taken from a critique and not re-verified, **[est]** my estimate or assumption.

---

## 0. Verdict

**This is a cash-flow side business with a small, gated option on something bigger. It is not a defensible company as built, and the binding constraint is not the product.**

Checked today: `track.py pipeline` says 42 due, 0 called. `personalize.py --check` says 154 placeholders unfilled. There is no `dist/` and no `clients/`. The tracker was last touched Aug 10. The suite has grown to 2,091 passing tests across 8,279 lines of `src/` (HANDOFF still says 1,143). Revenue is $0.

The strongest honest version, in one paragraph: **sell only the thing the free tools stop short of.** That is done-for-you filing and follow-up of LTL overcharge claims for owner-run manufacturers and distributors that hold their own carrier accounts and spend about $1M to $5M a year on LTL. Detection is free and getting freer, and Asher should not compete on it. Reach the first customers by introduction, not cold dial. Charge 15% on money actually credited, with a free first look and no retainer. Do not sign a contingency contract until an attorney has answered the state collection-licensing question. Run it as a six-week experiment with written quit rules, and freeze all building until three real invoice sets exist.

---

## 1. The refined offer on one screen

| Item | Decision |
|---|---|
| **Customer** | Owner-run or controller-run manufacturer or distributor, roughly $15M to $100M revenue, **at least $1M a year of LTL spend** (breakeven: about $1.1M of spend earns $1,000 a year at 1% found, 60% paid, 15% fee). Must hold its own carrier accounts and pay carriers directly. No TMS. Not buying through a broker or platform with "guaranteed pricing". |
| **Screening question (first 20 seconds of any conversation)** | "Do you have your own accounts and pricing agreements with the carriers and pay them yourselves, or do you ship through a broker or platform?" Broker-billed means stop politely. |
| **Offer ladder** | **0. Free first look:** one month of invoices, or two or three invoices. Findings within 48 hours, with dollar amounts and the carrier document behind each. Drafted claim packets are shown for one finding as a sample and released only on signature. No contract, no payment rail, nothing to pay. **1. Recovery engagement:** 15% of money actually credited or refunded. No retainer, no up-front fee, 12-month term, 30-day exit. Includes a 12-month "covered claims" clause. **2. Report only, on request:** $400 flat, client files and keeps the money. This is for prospects who will not do contingency, and it is the legal hedge in section 2.4. |
| **What the pitch is** | A named, reachable person who files and chases, with evidence from your own invoices. Not "AI", not "I check the BOL" (Eller says the same), not statistics. |
| **Channel order** | 1) mentor introductions, 2) family and family-friend business network, 3) email then phone to the 42 listed prospects as a supplement, 4) MEP centers and fractional CFOs only after there is a result to describe, 5) inbound from the reference library and tools (slow, free). |
| **Standing rules** | Audit cadence at most 60 days (section 2.6). Skip single-line claims worth under $60 net unless they form a pattern. Client chooses which carriers I file against. Client data stays on my machine and in deterministic code, with no third-party AI service without written consent. First three clients run in shadow mode (section 2.7). No claim is filed on a finding that lacks the supporting document. |

---

## 2. Answers to the critiques

Each ruling is **Conceded**, **Partly conceded** or **Open**. I rebutted nothing outright, because the critics were mostly right and their strongest points were checkable.

### Critique 1: the market

**1.1 The front door is free in three layers. Conceded.**
Checked today:
- Warp's reweigh and reclass tool is free. It detects and drafts but files nothing, and accessorials sit in a separate tool.
- LanePilot's free plan gives 5 quotes and 7 audits a month. Its page says it "does not file on your behalf".
- FreightSimple is "free to use", has no minimum volumes, bundles "automatic bill auditing" and says "we challenge incorrect charges on your behalf", with guaranteed pricing.
- Eller says "Your first audit is free" and "We charge 15%".

What changes:
- The class calculator, the invoice checker and the NMFC-2025 table become proof of competence, linked after someone shows interest. They are not the hook.
- The NMFC freshness gap leaves the pitch. It is a staleness gap any competitor closes with a table update.
- The free tools become a lead source. The line is: "If a free tool already flagged lines nobody has time to file, send me those." The product is the filing and the chasing, which is the part LanePilot and Warp explicitly leave to the shipper.

**1.2 The reachable segment is narrow and may be unreachable. Conceded.**
- TForce's claim page says "Only the payer of the original freight charges can file an overcharge claim" [checked]. It is silent on authorized agents, so the first TForce claim is itself a test. A broker-billed prospect cannot be served at all.
- The billing arrangement is not public, so the 42 cannot be screened from outside. The screening question in section 1 does it in 20 seconds.
- Measure the broker-billed share across the first 10 conversations. If more than 60% are broker-billed, the target is wrong and the quit rule in section 6 fires.
- The pool is still large. The dossier puts spend above $500k at roughly 10,000 to 30,000 shippers [est]. If only 10% hold direct accounts and have no TMS, that is still thousands. The constraint is reach and trust, not market size.
- I could not find a current broker-share number. The only one is a 2013 figure [critic].

**1.3 20% against Eller's 15%, and no premium to charge. Partly conceded.**
- **Decision: 15% flat, matching Eller. Never say "cheaper".** At these sizes the five-point gap is $45 to $90 a year on a $1M account, so credibility is worth more than the five points.
- If a prospect cites a lower quote, do not counter. Ask for the free-look invoices anyway.
- Revisit 20% only after three documented recoveries and only if no one has quoted 15% or less in the first 10 conversations.
- Open question: Eller's page states no minimum spend and no customer size [checked], so whether it serves a $1M account is unknown. Ask the first five prospects whether anyone has quoted them.

**1.4 Document-grounded accessorial checking is already Eller's pitch. Partly conceded.**
- I accept that it is a difference in degree. Eller's LTL page says it checks accessorials against BOLs and delivery receipts [critic].
- I accept that the accessorial slice may shrink if location databases like Shiplify work as claimed. That claim is vendor-reported and unverified [critic].
- **Change the lead.** Stop opening on liftgate charges. Order findings by how well they survive a carrier's rebuttal:
  1. Mechanical: duplicates, and carrier balance-due bills issued after the carrier's own 180 days under §13710(a)(3)(A).
  2. Contract arithmetic: discount, fuel-surcharge base and minimums, checked against the pricing agreement.
  3. Documentary: accessorials against BOL and POD.
  4. Contested: reclass and reweigh, where the carrier's own records decide.
- The difference Asher can offer is service, not method: a reachable named person with a phone number, serving accounts too small for a staffed shop.
- Whether accessorials are really the largest slice in this segment is exactly what the first three teardowns measure.

**1.5 AI plus fast shipping is table stakes. Conceded.**
- A $19 agent skill, a free paste-in prompt and free statute-cited letters exist. Assume a shipper with Claude and a CSV can replicate most detection in days.
- What stays scarce is trust, filing labor and carrier-by-carrier procedure. Asher's real assets are the procedure notes in `delivery/carrier-claim-channels.md`, the outcomes he will log, and introductions.
- Change: no technology claims in outreach. The engine is a cost advantage only. An audit costs him minutes, so he can serve accounts a staffed shop cannot.

**1.6 The AI startup moves down-market and detection goes to zero. Conceded on the trend.**
- Revenue lives in filing and in results, not in detection. A 15% fee on a $300 annual fee cannot beat free, so the customer floor is $1M of spend. Smaller shippers get the free look, the $400 report or a polite referral.
- Plan for commoditization. Treat the window as 12 to 24 months and harvest it rather than defend it. Wind down if a free-detection player adds managed filing under 15% for sub-$5M shippers.
- I found no acquisition multiples for a recovery shop this small, so any tuck-in or acqui-hire is an option, not a plan.

**1.7 Small tickets carry fixed friction. Conceded.** Liftgate charges run $75 to $200 per the project's own FACT-CHECK, so 15% is $11 to $30. Four rules:
- **(a)** Skip single-line claims under $60 net unless the charge is a recurring default across the file. One letter per carrier and issue, per 49 CFR 378.3(b).
- **(b)** Batch by carrier and issue, and file on the 60-day cadence.
- **(c)** ODFL: Tariff 100-Q Item 396 Note A adds $50 on settled claims "through no fault of Carrier" (from the project's carrier-claim-channels.md, not re-verified at ODFL). Skip ODFL claims under about $150 expected, and any shipper-caused error.
- **(d)** XPO and Estes need the invoice paid first, so file only on paid invoices.

Accessorial-only accounts fail the floor. A viable account is $1M or more of spend with 30 to 60 claimable lines a year, filed in batches.

**1.8 The $500 diagnostic is upside down and the playbook is inconsistent. Conceded fully.**
- One month at $100k of annual spend is about $8k, so 1.5% found is $125. The $500 is rarely earned below about $400k of spend.
- Dropped from the cold funnel, as offer-v2 recommended on 10/25 after reading eleven firm pages. It survives only as the $400 report on request.
- START-HERE already says "no charge" for the first look. Mark `96-hour-plan.md` and `HANDOFF.md` "superseded" in one line each instead of rewriting them.
- Cap the document cleanup at 3 hours. The exact lines are in offer-v2 §8: the site pricing section, the one-pager, the call-script ask, the engagement terms and five pinned tests. If it is not done by Day 2, deploy only the reference library and the calculators and send plain email. Do not let this become the next build project.

**1.9 The numbers on the script are weak. Conceded.**
- Remove "five to ten percent" from the call script. FACT-CHECK graded it WEAK.
- Replace it with: "AFS reported errors on about 4.5% of roughly 250,000 LTL invoices it checked, and most are small. I don't know what's in yours. The first look answers that." Quote no win rates.
- Carrier retaliation is an unmeasured risk, not a disproved one. Mitigation: the client picks the carriers I file against, claims go through the carrier's claims channel and not the sales rep, and I do not file against any carrier the client calls fragile. Ask the question in conversation.

### Critique 2: execution, law and operations

**2.1 Execution record is the binding problem. Conceded, and it is the first-order risk.** Verified above. Redesign the first steps so they are small, warm and external:
- **Shrink setup.** A free first look needs no PayPal account, no LLC and no payment rail. Run `personalize.py` with a real full name, a Google Voice number and a mailbox address rather than a home address. CAN-SPAM requires a postal address (outbound-playbook §2). Do it in 25 minutes this week.
- **Warm first.** The first outreach is an introduction request to people who already know him, not a dial to a stranger.
- **External commitment.** Tell the mentor the stop rule and the date, and keep a visible touch log.
- **Hard stop.** If fewer than 20 logged touches by Day 14, shelve the venture. That is information about fit, not a verdict on character.
- **Freeze the repo.** Eight thousand lines and 2,091 tests have been built and nothing sold. No engine, site or document work beyond the Day 1 to 2 list until three real invoice sets exist.

**2.2 The time budget does not match the job. Conceded on the math.**
- Cold-dialing the 42 gives about 9 conversations at Gong's average connect rate (5.4%), or about 23 at the top-quartile rate. At a 5% yes rate that is **about 0.5 to 1.1 invoice sets from the whole list** (computed from offer-v2's 170 dials). The "120 contacts for 3 sets" plan was optimistic.
- So the cold list is a supplement. The 14-day test (section 5) measures warm access. It cannot pass or fail cold conversion, which needs more dials than the list holds.
- Schedule: email first, using scheduled send so school hours do not matter. Two 45-minute dial blocks a week in his free window (the critique puts it near 3 to 4pm ET). About 1.2 hours a day, roughly 17 hours over the 14 days.
- Pause new selling from May 15 to June 15 for finals. The 60-day cadence rule covers the gap.

**2.3 The offer leaks and the fee is hard to collect. Partly conceded.** Four fixes:
- **(a)** Drafted packets are released only on signature.
- **(b)** A 12-month covered-claims clause: the fee applies to any claim first identified in my written findings that is paid within 12 months, whoever files it (offer-v2 §7).
- **(c)** Collection visibility is a contract condition: a monthly statement export or read-only portal access. Credit memos show up as negative lines in the next audit's input anyway. Invoice within 3 business days of a confirmed credit, due on receipt.
- **(d)** Price in the leakage. At $450 to $1,800 a year per client, there is no collections effort. A non-payer gets terminated and written off. I haircut the median by 15% for this.

Free alternatives in the same niche are handled under 1.1.

**2.4 State collection-agency licensing. Open, and it gates the contingency fee.**
- Checked: Minn. Stat. 332.31 subd. 3 defines a collection agency as "a person engaged in the business of collection for others any account, bill, or other indebtedness". The definition draws no consumer or commercial line. I did not see the exemption subdivisions.
- Not verified here and taken from the critic: the PurCo OAH recommendation, the Tennessee position and the "about 20 states" figure.
- My search found no source on freight auditors either way, including no enforcement. This is unresolved, not proven fatal.

Treatment:
- **No contingency contract is signed until a licensed attorney in Asher's state has answered in writing.** Budget $300 to $600 [est]. Questions to ask:
  1. Does filing overcharge claims with carriers as a client's authorized agent for a percentage of recovery require a collection license?
  2. Is there an exemption for freight auditors or claims agents?
  3. Does it matter where the client sits?
  4. Does a flat fee avoid it?
  5. Does an LLC change the answer?
- Until then the only paid product is the **$400 report-only**. It is a fee for analysis, not contingent on collecting, and the client files and keeps the money. The free first look is not an engagement.
- Do not re-label "collect" as "recover". The critic reports that failed in Minnesota.
- If counsel says a license is needed and its cost exceeds expected first-year fees (likely at about $3k a year), the options are report-only permanently, a referral arrangement with an already-licensed firm, or stopping.

**2.5 No escalation power, so carriers can say no. Conceded.**
- Narrow the claims to ones that win on documents the carrier must honor (section 1.4, items 1 to 3).
- Escalation ladder with no lawyer: check the day-30 acknowledgment, push at day 60, request the rate, classification and rules under §13710(a)(1), resubmit inside ODFL's 30-day window, offer the client the option of raising it with its own carrier rep, then stop.
- Never threaten suit and never litigate. Stay at "filing a claim with a carrier" and out of anything tribunal-like.
- Do not present the 180-day rule as settled national law. The Tenth Circuit enforced it over a dissent and the site already says "one circuit". Say "a federal statute that carriers enforce".
- A §14101(b) waiver could make the client's deadline contractual, so run the existing RUNBOOK waiver screen on every pricing agreement.
- The real win rate is unmeasured, and measuring it is the point of the first 10 claims (gate E).

**2.6 Missed deadlines are permanent and there is no backstop. Conceded, and structurally reducible.**
- The clock is a rolling 180 days per invoice. A **60-day audit cadence** therefore has slack. If a cycle is skipped for finals, the next audit lands around day 120 and files by about day 130. That is still before 180, though pickup-anchored carriers (ODFL, Saia, AAA Cooper, Central) eat 10 to 20 of those days. Monthly is not required. Cadence 60 days, hard maximum 90.
- Contract terms: best efforts, no guarantee of recovery, liability capped at fees received in the prior 12 months (attorney to confirm), a 30-day exit with a deadline calendar handed to the client.
- LLC and an E&O quote before the first contingency contract. Move the attorney-review threshold from "five-figure deals" to "any contingency deal".
- August 2027: no new clients after June 15, 2027 unless the whole book runs in 4 hours a week or less. Name a backup, or a transfer to a partner firm with client consent, or give 60 days' notice and wind down.

**2.7 Accuracy on real carrier data is unverified. Conceded.** The 2,091 tests are a self-consistency check on constructed data, not an accuracy check.
- **Shadow mode** for the first three clients: every finding is hand-verified against the BOL, POD or rate agreement before anything leaves, and nothing is filed in the first 7 days.
- File only findings with the supporting document in hand. Never file "needs evidence" without it.
- Track precision as filed, paid, and rebutted with documents. Any documented rebuttal freezes that check class until fixed. HANDOFF's rule stands: a false finding costs more than a missed one.
- Ask the first client's shipping manager to sanity-check the first 10 findings.
- Real portal exports and PDFs have never gone through the extractors. Expect parser fixes.

**2.8 The trust ask is hardest for a teenager. Conceded, and the channel plan is built around it.** The trust ladder:
1. A vouch from someone they know (mentor, family friend).
2. A one-page mutual NDA ready before the first reply. outbound-playbook §1 found none exists.
3. The smallest data ask: a portal CSV export, consignee names maskable, no rate agreement at first.
4. Local, deterministic processing, with a plain sentence in the terms: "I use software I wrote that runs on my own computer. If I ever send your documents to a third-party AI service I will ask first."
5. The public reference library, so they can judge competence without talking to anyone.
6. An LLC and insurance after the first signed client.

Defer the de-identified data-asset clause. Ask for opt-in at month 3, after a recovery, not in the first contract. From the mentor, ask for introductions, not endorsement. Do not use his name on the site or in cold email unless he says yes.

---

## 3. Pricing and economics

### 3.1 Price list

| Product | Price | Notes |
|---|---|---|
| Free first look | $0 | One month or 2 to 3 invoices. No contract. |
| Recovery engagement | **15% of money actually credited or refunded** | No retainer, no up-front, 12-month term, 30-day exit. Covered-claims clause. Fee invoiced within 3 business days of a confirmed credit, due on receipt. |
| Report only | **$400 flat** | On request only. Client files. Never offered cold. |
| Anything else | Not offered | No rate negotiation, no booking, no cargo claims, no litigation. |

### 3.2 What a client is worth (15% fee, carrier pays 60% of what is found, steady-state, per year) [est]

| LTL spend | 0.5% found | 1% found | 2% found |
|---|---|---|---|
| $500k | $225 | $450 | $900 |
| $1M | $450 | $900 | $1,800 |
| $2M | $900 | $1,800 | $3,600 |
| $5M | $2,250 | $4,500 | $9,000 |

Found rate of 0.5% to 3% is the dossier's planning range. The AFS-based inference is 0.5% to 1.1%. The first year runs about 1.3 times steady-state because of the 180-day backlog. Fees decline as recurring errors get fixed.

### 3.3 Outcomes over 12 months from the first signed client [est]

| Case | Assumptions | Fees to Asher | Hours | Per hour |
|---|---|---|---|---|
| **Modal (includes never starting)** | Execution record | **$0** | 0 | n/a |
| Bad but executed | 1 client, $800k, 0.5% found, 50% paid | about $300 | about 100 | about $3 |
| **Median, given he executes the plan** | 3 clients averaging $1M, 1% found, 60% paid, 15% fee | $2.7k steady, $3.5k year one, **about $3.0k after 15% leakage** | about 180 | **about $17** |
| **Upside** | 10 clients averaging $1.5M, 2% found, 65% paid, via a channel partner | $29k steady, $38k year one, **about $32k to $43k after leakage** (top end if later accounts price at 20%) | about 410 | about $80 to $105 |

One-time costs: attorney consult $300 to $600, LLC fee varies by state, domain and mail about $150 a year, E&O premium unknown. Budget under $1,500, which can exceed a median first year's fees. Net median is roughly $1.5k to $2.5k.

The upside needs a channel, because no one makes 10 sales alone at 10 to 15 hours a week. That is why the first move is introductions.

---

## 4. Path to big, or not

**Plainly: today it is a cash-flow side business.** The "wedge then data asset" story is real but needs scale this team cannot reach alone. A claims-outcome dataset (carrier, reason, evidence, result, days to pay) needs several hundred outcomes across at least 8 carriers. Eight clients filing 30 claims a year each is about 240 outcomes a year, which is borderline. I would put the chance of this becoming a $100k-a-year business at under 5%, and the chance of an enterprise outcome lower. That is judgment, not data.

If the gates are met, there are three doors, each with its own gate:

| Door | What it is | Gate to open |
|---|---|---|
| A. Filing desk for the detect-only tools | Paid back-end for shippers who use Warp, LanePilot or Lojistic's free tier and have flags nobody files. Per-claim fee or revenue share. | At least 100 filed claims with outcomes by carrier, and one real partner conversation. |
| B. Public claims scorecard | De-identified carrier-by-carrier approval rates and days to pay, as PR and lead generation. | At least 300 outcomes across 8 or more carriers, and signed opt-in clauses. |
| C. Referral, tuck-in or acqui-hire | Hand the book to Eller, Lojistic or LanePilot when he leaves for college. | A book of at least 5 clients with a clean track record. No multiples found, so price it as a bonus. |

Door C is also the college-transition plan. A sensible aim is a clean hand-off with a reference attached, not a sale.

---

## 5. Riskiest assumption and the 2-week test

**Riskiest assumption:** *A direct-account shipper with at least $1M of LTL spend will hand an 18-year-old a month of real invoices.* It sits upstream of everything: economics, accuracy and the data asset all need real invoices. It also contains the execution risk.

**Test clock: Mon Nov 2 to Sun Nov 15, 2026**, after the Nov 1 application deadline. Pre-work this week takes at most 1 hour. Shift the dates if his calendar differs but keep the 14-day shape.

| When | Action | Time |
|---|---|---|
| This week (pre-work) | Run `personalize.py` with real name, Google Voice, mailbox address. Ask the mentor on call #2 (reminder 10/27): "Which two or three people run freight or logistics at companies you know that ship heavy equipment, and would you forward a four-line note?" List 8 family-network names. | 1 hour |
| Days 1 to 2 | Cap-3-hour cleanup (1.8). One-page mutual NDA. Gmail templates for the first-look email. | 3 hours |
| Days 1 to 5 | Send 8 family-network asks and the mentor forward. | 2 hours |
| Days 3 to 14 | 30 cold emails (scheduled for 8 to 9am recipient time, Wed and Thu), then 30 calls in two weekly blocks. First question is always the screening question. | 12 hours |
| Any day | Any invoices arrive: shadow-mode teardown within 24 hours, hand-verified. | as needed |

**Expected funnel, an assumption chain and not data:** mentor 1.0 sets, family 1.0 sets, cold 0.3 sets, so about 2.3 sets at best and **a central 1.5**. At a mean of 1.5, the probability of at least one set is about 78%, at least two about 44%, at least three about 19%.

**Pass:** at least 20 logged touches (behavior), at least 3 conversations with an owner, controller or shipping manager, and **at least 1 invoice set** received. Two or more is a strong pass.

**Also in the same 14 days:** if any friendly shipper (family, mentor's network) can give one real LTL invoice set, even if not a prospect, run it through the engine in shadow mode. That tests the parsers and gives the first found-rate number.

---

## 6. Quit conditions and gates

Each quit is final for its term. No re-planning until the gate review, and the repo goes on the shelf.

| Gate | When | Trigger | Action |
|---|---|---|---|
| **A. Behavior** | Day 14 (Nov 15) | Fewer than 20 logged touches, or setup not done | Shelve. Do not re-plan. Take the lesson to the next idea. |
| **B. Access** | Day 42 (Dec 13) | Fewer than 2 invoice sets from at least 60 touches (at least 15 warm) | Stop direct selling. One 4-week channel-only attempt via mentor introductions, MEP or fractional CFOs, then quit by Jan 10, 2027. |
| **B2. Segment** | After 10 conversations | More than 60% of reached prospects are broker-billed or on platforms | Target is wrong. Re-point or quit. |
| **C. Economics** | After 3 teardowns, by Jan 15, 2027 | Median found under 0.5% of spend or under $300 per client-month | No contingency at this segment. Raise the floor to $3M or stop. Continue only if 2 of 3 show at least 1% collectible. |
| **D. Legal** | Before the first contingency contract | Attorney says a license is needed and cost exceeds expected first-year fees | Report-only, a referral arrangement, or stop. |
| **E. Carrier reality** | After the first 10 claims decide (about Feb to Mar 2027) | Under 40% paid in full or part, or median decision over 75 days | Stop filing for new clients. |
| **F. Integrity** | Any time | A filed claim is rebutted with documents | Freeze that check class, audit it, disclose to the client. |
| **G. Calendar** | June 1, 2027 | Fewer than 3 paying clients or under $1,500 of fees collected | Wind down by July 31. No carryover into college. |
| **H. College** | June 15, 2027 | More than 4 hours a week for the whole book | No new clients. Hand off per 2.6. |

---

## 7. What was verified and what was not

**Checked today:** pipeline 42 due and 0 called; 154 placeholders; no `dist/` or `clients/`; tracker last touched Aug 10; 2,091 tests pass; Eller ("first audit is free", "We charge 15%", no minimum or size stated); LanePilot (free plan 5 quotes and 7 audits, "does not file on your behalf"); Warp tool (free, detect and draft, accessorials separate); FreightSimple (free, no minimum volumes, audits bundled, guaranteed price); TForce ("Only the payer of the original freight charges can file", silent on agents, 120-day decision); Minn. Stat. 332.31 definition.

**From the critics and not re-verified:** the Minnesota PurCo recommendation, the Tennessee position, "about 20 states", Wisconsin E-79-3, Blanchette v. Cataldo, Shiplify's claims, Opereit, Loop, Transflo, Intelligent Audit Catalyst, MyCarrier Freight Audit Pro, the ODFL $50 note (from the project's own channels file), the FreightWaves reweigh quote.

**Assumptions to replace with data:** found rate, carrier pay rate, warm-intro conversion, broker-billed share, leakage, and the legal cost.

**One premise to settle before any contract:** offer-v2 §6 flagged a date-of-birth inconsistency in Asher's own notes (self-reported 18 versus a Common App date of 07/11/2009). The brief says he is a legal adult. If he is not yet 18, a contract he signs is generally voidable and a payment account may be refused. Settle it before any engagement agreement, LLC or PayPal account. The free first look needs no contract, so the 14-day test is unaffected.
