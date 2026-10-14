# I0716 Refined: Blind Test Lab for Survey-Fraud Defenses

Date: 2026-10-13. Tags: [P] primary or neutral, [V] vendor claim, [I] my inference or arithmetic, [A] unsourced assumption.

## 0. Verdict in four lines

- The original company (a buyer-funded per-study audit with a control panel, contamination-adjusted estimates, scorecards and a $10-25M market) is dead. All three critiques land, and the fatal one is correct on the evidence available.
- A smaller, different business survives: a neutral lab that tests survey-fraud defenses with labeled traffic, paid by the sell side. This matches the critic's own fallback ("fixed-fee practice or free benchmark as lead generation"), but is built as a repeatable test harness rather than a bespoke consultancy.
- It is a boutique, not a venture. Realistic year-3 revenue is $0.15-0.6M [I]. My judgment is a 10-15% chance of reaching $100k a year and a 3-5% chance of becoming the reference standard. Neither number is computed.
- It is alive only as an experiment. The riskiest assumption (anyone pays before end buyers demand evidence) can be tested in 14 days for under $600. If that test fails, the idea is dead.

## 1. What changed, in one table

| Element | Original pitch | Refined |
|---|---|---|
| What is sold | Audit of a client's real response file, bias-adjusted estimates, stamp, scorecard | A measurement of a defense: known-fake and known-real test traffic injected, outcomes reported with confidence intervals |
| Where ground truth comes from | A recruited, address-based control panel (low-to-mid six figures, slow) | Labels created by construction (we inject the agents and the verified humans). A rented 100-150 verified humans per test measure false removals |
| Payer | Buyer insights heads, litigators, pharma | Sell side: challenger detection vendors first, then panel suppliers and aggregators |
| Price | $3-15k per study, $50-150k programmes | $4.5-8k private red-team report, $9k annual supplier test plus $3k retest. Public quarterly benchmark is free |
| Claim made | "X% of your data is fake; here is the corrected estimate" | "Under protocol vN on date D, tool or supplier S let in L% of tier-2 agents (CI) and wrongly removed F% of verified humans (CI)" |
| Moat claimed | Scarce verified-human control | Counter-positioning (owns no sample, no detection IP), harness scale economies, a private held-out attack library. Branding only if a standard adopts it |
| Dropped | | Calibration, address-based panel, vendor scorecards, detection ensemble, "audit stamp", litigation and pharma wedge, election hook, contamination-adjusted estimates |

## 2. Why the buyer-funded audit is dead (conceded)

1. **No observed budget and the money runs the other way.** Dynata paid Neutronian for NQI certification, suppliers pay CIRQ for ISO 20252, and P&G made ISO 20252 a supplier obligation (July 2025). I found no buyer-funded per-study referee anywhere (critiques 1 and 2). The Bible Society's remedy after YouGov was to ask the vendor again.
2. **The mechanism is owned.** NORC TrueNorth (2-5 weeks, about 25% cheaper than a full probability study, 8.6% to 1.3% error claims), SSRS Encipher and Ipsos KnowledgePanel calibration already sell opt-in recalibration. Verasight and Ipsos rent verified humans for $3.50-5 per complete, so "scarce control" was never scarce.
3. **The statistics were not identified.** Pew claims no statistical fix for bogus respondents, and the critic cites Kennedy and Brick on modeling being poorly suited to them. A "contamination-adjusted estimate with error bounds" rested on unidentified assumptions.
4. **Unit economics.** At $10k the dossier's own arithmetic gives 8-38% margin, and a $3-15k audit is 1-4 times the sample bill for a 1,000-complete study.
5. **Why-now was weak for the human-fraud half.** Pew documented 4-7% bogus respondents in 2020, and nobody built a paid per-study referee then. The midterm hook expires on Nov 3.

## 3. What survives, and why it is different

**Survivor 1: the seller grades its own homework.** Every accuracy claim I can find is vendor-run:
- CloudResearch's Engage white paper (about 1,000 completions, "100%" detection, under 1% false positives) was run on its own product [V].
- Verisoul claims 100% detection from internal tests [V]. Prolific's CEO reports agent detection at or below 1% [V].
- The Bot Olympics (CloudResearch site, judged by an "MIT research team") still reads "Coming Soon" and has no published results.
- My search for an independent, labeled, head-to-head benchmark of survey-fraud tools found none, and found no formal third-party "known-bot injection" audit standard. Search was limited (one pass), so treat it as "not found", not "does not exist".

**Survivor 2: the industry just built self-disclosure frameworks with no verification.**
- The Insights Association's Sample Supply Transparency Framework (Aug 29, 2026) has 95 questions across suppliers, aggregators, agencies and brands. The announcement does not mention audits or testing, which suggests self-disclosure.
- ISO 20252:2026 strengthens panel and sampling data-quality requirements; fraud is not named and no transition date is stated.
- The IA itself said its ISO 27001 audit would not have caught the alleged Op4G/SliceMR conduct. Process certificates do not test whether the data are real.
- Pen-test logic applies: a static process audit cannot catch an adaptive attacker, so someone must attack the defense and count.

**Survivor 3: attack traffic is now cheap.**
- Westwood's agent produced fake responses at about five cents each [P via 404 Media], and commodity agent frameworks exist.
- What used to be a custom red-team project is a harness built from commodity parts. That is the Wardley shift: build on commodity attackers, sell the still-scarce thing, a credible and neutral measurement.
- Honest caveat: the "agents are rampant" story is contested (Prolific: at or below 1%; CloudResearch: click farms dominate). The product therefore tests scripted and human-style fraud personas as well as agents, so it does not depend on the contested claim.

## 4. The business

**One-liner.** A neutral lab that sends labeled fake and real respondents through survey-fraud tools and panel suppliers and publishes how many fakes got in and how many real people were wrongly removed.

**Test design (protocol v1).**
- Attack tiers [I]: T0 scripted speeder/straightliner; T1 LLM text via API; T2 browser-using commercial agent; T3 agent plus anti-detect browser, residential proxy, human-like input; D duplicate-identity multi-account registration.
- Human controls: 100-150 verified real people (Prolific about $1.90 and CloudResearch about $2.00 per quality respondent [P, Douglas et al. 2023]; Verasight from $3.50 [V]).
- Output: leak rate per tier and false-removal rate, each with an exact confidence interval. Resolution is limited: zero leaks in 100 sessions only bounds the true rate below about 3-4%; zero false removals in 150 humans bounds it below about 2-2.5%.
- What it does NOT measure: prevalence of fraud in a supplier's real traffic, or whether passing means clean data. It measures resistance to known attack classes at a date. Attack classes lag real fraud, so tests rotate and a private held-out variant set stays unpublished.

**Safeguards (learned from NSS Labs).** CrowdStrike sued NSS Labs in 2017 to block publication; the injunction was denied, NSS published, and the later settlement included NSS stating the product was "not properly configured" and apologizing. NSS then ceased operations in Oct 2020 (reported causes: COVID, private-equity turmoil; not tied to the suit in sources). Lessons built in:
1. Vendor-signed configuration before any run, so "you tested it wrong" is answered by their own sign-off.
2. A 14-day factual-correction window with no veto.
3. Pre-registered protocol (timestamped), plus a named methodologist as co-signer.
4. Named results only for consenting vendors or products bought on public terms with a signed configuration; otherwise anonymized aggregates.
5. Dated measurement reports, not an "audit stamp"; contract liability capped at fees; counsel review; an E&O quote obtained before the first paid engagement (cost unknown).
6. Consent and scope in writing before any test touches a production system; evasion recipes withheld (publish method and results, not attack code).

**Revenue model (AV-Comparatives analog).** Their public test series is free to enter; vendors pay for post-test consultancy, logo licensing, commissioned tests and QA, and AV-Comparatives also takes public and university funding and says fees do not affect results. Same shape here: the public benchmark is free and published regardless; fees buy depth, retests and the right to cite.

**Pricing.**
- Private red-team report for a detection vendor: $4.5k per tool per round (failure analysis by tier, a 60-day retest, logo and citation licence).
- Supplier test: $9k annual (about 450 agent sessions plus 150 human controls through registration, profile and survey paths; leak and false-removal report; remediation memo; attestation letter shareable under NDA), plus $3k retest at 6 months.
- Later: marketplace or aggregator rolling programme, $30-60k a year [A, untested].

**Unit economics [I; every input is a guess or a dossier figure].**
- Supplier test at $9k: humans $0.6k, agent compute and proxies about $0.4k, analyst time 24 h (at $75 imputed about $1.8k; at the dossier's $150 about $3.6k), insurance and legal allocation about $0.5k. Cost $3.3-5.1k, so a 43-63% margin, improving as the harness is automated.
- Vendor round: the labeled set is shared across tools, so marginal cost per extra tool is about $1k at $4.5k, a margin around 75%. The sunk cost is the founder's build time (my guess: 150-250 hours).
- Year-1 plausible revenue: $0-60k. A realistic base case is about $35k (4 vendor reports plus 2 supplier tests) and $0 is a live outcome.

## 5. Customers and where the check comes from

**Wedge: the founder or head of product at an independent challenger detection vendor** (dtect, Roundtable, ReDem, Obsurvant, CleanID, DeviceForensIQ-type; roughly 6-8 firms [I]).
- Pain: they lose deals to Verisoul and CloudResearch "we catch 100%" claims, and they cannot outspend them on self-tests.
- Check: product or R&D budget, signed by a founder with no procurement cycle. dtect already offers a free 30-day pilot, so it is open to being evaluated.
- Value does not depend on end-buyer demand. A private failure analysis is useful R&D, so the first dollar does not require a buyer-side mandate.

**Second customer: head of quality or operations at a mid-size panel or sample aggregator**, the person who already signs ISO 20252 and CIRQ spend.
- Pain: P&G-style requirements and fear of a YouGov-type withdrawal.
- Demand risk: they will pay only if their buyers start asking for outcome evidence.

**Not customers** (conceded): insights heads buying sample, academic labs, litigators, pharma access, pollsters. The routes through them were unproven or conflicted.

**Bottom-up market (year 3, realistic) [I unless noted].**
- Challenger and independent detection vendors: about 8 reachable (named in the competition file), 3-5 buying 1-2 rounds at $4.5-8k, so $15-60k.
- Suppliers and aggregators: Cint alone reports 800+ suppliers and 4,600+ panels [V, Cint ESOMAR answers], mostly tiny. [A] 150-300 have real quality teams; 5-10% adopt at $12k including retest, so 8-30 customers and $90-360k.
- Marketplaces and large agencies: [A] 5-10 exist, 1-3 sign at $30-60k, so $30-180k.
- **Total about $0.15-0.6M a year; ceiling low single-digit $M if a certifier, the IA or ISO 20252 adopts the protocol.** The dossier's $10-25M assumed buyer-paid high-stakes audits that are now dropped.

## 6. Moat (7 Powers, honest)

- **Today:** none. The tests are copyable and the human controls are rentable.
- **Counter-positioning (partial):** CloudResearch, Prolific, Verasight, Verisoul, Ipsos, NORC and SSRS sell sample or detection and cannot credibly referee themselves. Signals & Standards and DQC are already neutral, so this is not a clean win against them.
- **Scale economy in the harness (small):** the labeled corpus and attack library are fixed costs spread over every tool and supplier tested.
- **Cornered resource (weak but real):** a private held-out attack-trace library that vendors must not see to avoid overfitting. A vendor cannot hold a credible private test set about itself.
- **Switching costs (later):** a longitudinal track record of a supplier's results does not move to another lab.
- **Branding (the only power that makes this a company):** the route is publishing the protocol and becoming the reference test method for the IA/GDQ, the ISO 20252 certifiers and AAPOR. Plausibly 2-4 years, and not guaranteed.

## 7. Competitors and edge

| Player | Overlap | Edge or relationship |
|---|---|---|
| CloudResearch / MIT Bot Olympics | Open red-team vs. blue-team contest; MIT methodology reportedly meant as an open benchmark; no results yet | CloudResearch is conflicted. If MIT publishes the dataset and method, treat it as a free input, not only a threat |
| Data Quality Co-op | Passive signal aggregation, 0-1000 Trust Score, in Sago, Dig Insights, Advertiser Perceptions | We test whether a score separates labeled agents from labeled humans. Natural partner or white-label |
| Signals & Standards (launched 9/2026) | Independent audit of quality claims, process and results, named personal validation | They sign process, we supply outcome measurements. Partner or subcontract before competing |
| Neutronian | Supplier-paid quality certification (ad data) | Closest business-model analog. Different domain |
| NORC TrueNorth, SSRS Encipher, Ipsos, Verasight | Selection-bias calibration; verified sample | Different problem. We do not calibrate or sell sample |
| ISO 20252 / CIRQ, IA framework | Process certification and self-disclosure | Complements. We provide the outcome evidence they lack |
| Vendor red teams (CloudResearch, Verisoul) | In-house testing | Not credible as external proof. Cannot serve the challengers |

Edge is neutrality plus ground truth by construction. Both are copyable by DQC or Signals & Standards, so speed and publishing first matter.

## 8. Answers to each critique

**Critique 1 (serious)**
- Asset not scarce, incumbents can add an audit line: conceded. We no longer sell calibration or a control panel. Sample owners cannot referee themselves.
- Neutrality niche taken; sellers pay referees: adopted. Sell-side payment is the only observed flow, run with AV-Comparatives-style separation of fees from results. Partner path with Signals & Standards and DQC.
- Buyers route around an auditor; audit costs 1-4 times the fieldwork bill: conceded. The customer is no longer the buyer, so the ratio does not apply. The non-consumption competitor (sellers self-test or skip) remains, and it is tested in Section 10.
- Detection half has no pricing power, dependence on competitors: dropped. We do not resell detection. Cheap, plentiful detectors raise the need for independent measurement.
- High-stakes wedges lack pull: dropped.

**Critique 2 (fatal)** — judged: correct for the original, answerable by test for the refined business.
- No proven budget: still true. No one has been shown to pay for an outcome test. That is now the single riskiest assumption, with a pre-committed kill.
- Check-signer undefined or conflicted: defined (founder or head of product at a challenger vendor; head of quality at a mid-size supplier). Conflict is managed by process, not removed. Some residual conflict remains by design.
- White space smaller, control owned by others: conceded, mechanism changed to injected labeled traffic. No panel dependency.
- Unit economics and boutique market: accepted. Boutique sizing in Section 5, margins in Section 4, the address-based panel is gone.
- Pain solved cheaper or shrinking: partly accepted. Synthetic respondents and direct panels are tail risks. The refined product depends on vendors' claims needing verification, not on a fraud boom.

**Critique 3 (serious)**
- TrueNorth, SSRS, Ipsos already do calibration; statistics shaky: conceded and dropped.
- Key input owned by competitors: the product needs only 100-150 rentable verified humans per test from Prolific, CloudResearch, Verasight or others. It is fungible, no longer a moat or a dependency.
- Weak why-now, midterms expiring: election hook dropped. Human fraud is old and buyers did not pay for it, so it is not the why-now. The why-now is Section 3.
- Demand unproven, free channels, standards moving in: acknowledged and unresolved until the test. Standards bodies (IA, ISO) are customers' customers and potential adopters of the protocol.
- Data access and liability: the lab needs no real-panelist paradata because it knows its own labels, and it uses vendor-granted test access. Dated measurement reports replace a stamp. The NSS-derived safeguards in Section 4 apply. The founder cold-start is answered with pre-registration and a named methodologist, not a reputation.

## 9. Pre-mortem (2028)

1. **Nobody pays before buyers ask.** Most likely cause (about 45% [I]). Fix: the Section 10 test, then the IA/ISO adoption route.
2. **Credibility or lawsuit.** A vendor disputes a result and the lab has no standing (the NSS pattern). Partly fixable with the safeguards. Residual risk remains.
3. **Commoditized benchmark.** MIT/CloudResearch publish an open labeled benchmark, or DQC adds red-team tests. Fix: move first, treat the open dataset as an input, compete on rotating private variants and supplier-path tests.

## 10. Riskiest assumption and the 2-week test

**Riskiest assumption.** A paying customer (a challenger detection vendor or a mid-size supplier) will put real money on a labeled-traffic test report from an unknown lab before any end buyer demands such evidence.

**Test (14 days, cap about $600).**
- Days 1-4: build a minimal harness: tiers T1-T3, 20 sessions each (60 agent sessions), plus 30 verified humans ($120-200) on a short survey hosted on the founder's own account. Run it through 3-4 tools that offer trials or self-serve (dtect free 30-day pilot, DQC trial, Prolific/Qualtrics authenticity checks, Verisoul $99-350 a month, ReDem upload). No production system is touched without consent.
- Days 5-7: write a two-page teaser (default trial configuration, labeled as such). Send each tested vendor its own result privately with a 14-day correction window. This doubles as outreach.
- Days 7-14: send the anonymized teaser to about 40 named targets (challenger vendors, supplier quality leads, agency research directors) and ask for a call. Offer a founder-rate paid pilot with a $1,500 deposit, or a signed LOI naming price and budget owner.

**Pass:** at least 2 deposits or LOIs at $4.5k or more, with named budget owners. Alternatively 1 deposit plus at least 6 written "would pay $5k or more" from people who name the budget.
**Kill:** 0 deposits and at most 1 "would pay" after at least 10 real conversations, or the harness cannot run labeled sessions through at least 3 tools in 5 days.
**Inconclusive:** fewer than 10 conversations. Extend by one week. Do not count it as a pass.
**Salvage if killed:** the published benchmark remains a credential and portfolio piece. Nothing else is salvaged.

## 11. Ranking guidance for the finalist pool

- Strengths: very cheap to falsify; a real, specific gap (no independent labeled benchmark found); an observed payer type; the founder can build the harness alone.
- Weaknesses: small realistic market ($0.15-0.6M by year 3); trust-gated (young founder, no credential); copyable; liability tail; reliance on pull that does not exist yet.
- Suggested placement: the lower half of the finalists on scale and moat, but a candidate to run as a cheap parallel test.

## 12. What I could not verify

- Whether an independent labeled head-to-head benchmark of survey-fraud tools exists (one search found none). Whether DQC or Signals & Standards already plan red-team tests.
- Willingness of challenger vendors to pay anything; no price evidence for private red-team reports exists.
- Bot Olympics structure beyond its landing page (blue-team role, data openness, dates).
- Real counts of suppliers with quality budgets. Cint's 800+ and 4,600+ are self-reported and include many tiny sources.
- Cost of E&O insurance for this activity.
- Every margin figure in Section 4 is my arithmetic from rented-sample prices and an imputed hourly rate.

## Sources used or relied on

- AV-Comparatives funding page: https://www.av-comparatives.org/funding/
- NSS Labs and CrowdStrike dispute: https://www.darkreading.com/endpoint/crowdstrike-fails-in-bid-to-stop-nss-labs-from-publishing-test-results-at-rsa/d/d-id/1328154 ; https://www.techtarget.com/cybersecurity/news/252464003/CrowdStrike-NSS-Labs-settle-legal-disputes-over-product-testing ; https://www.techtarget.com/cybersecurity/news/252490829/NSS-Labs-ceases-operations-amid-financial-turmoil
- IA Sample Supply Transparency Framework: https://www.insightsassociation.org/News/Industry-News/ArticleID/2668/Insights-Association-Releases-Sample-Supply-Transparency-Framework
- Bot Olympics landing page: https://www.cloudresearch.com/botolympics/ ; CloudResearch agent-detection test: https://www.cloudresearch.com/resources/blog/ai-agent-detection/
- Cint supplier counts (self-reported): https://www.cint.com/esomar
- Critique evidence reused: NORC TrueNorth, SSRS Encipher, Signals & Standards, DQC, Neutronian/CIRQ/P&G, Douglas et al. 2023 prices, Pew 2026, ISO 20252:2026 (Research Live), GRIT 2026, as cited in the three critiques and the dossier.
