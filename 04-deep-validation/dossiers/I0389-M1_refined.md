# I0389-M1 refined: Scribe Screen (non-PHI scribe-cohort run-rate screen for physician acquisitions)

Status: DEAD AS A STANDALONE COMPANY (alive = false). A small residual wedge survives and is described below. Strongest honest version, after three critiques (one fatal, two serious) and the dossier.

Tags: [C] taken from the critiques or dossier and not re-verified by me in this pass. [I] my inference or assumption. [A] my arithmetic.

## 0. Verdict in five lines

1. The original product (privileged, counsel-engaged, 10-day, coder-signed extrapolated overpayment number, $20-45k, with a benchmark moat and a monitor upsell) is not buildable and not sellable as specified. Its best-selling feature (a precise overpayment number) is the thing both sides' lawyers avoid creating.
2. What survives is narrow: a cheap, fast, non-PHI screen that tells a physician-practice acquirer how much of the target's trailing E/M revenue moved with scribe go-live, and what to hand the chart auditor. Incumbents (PYA, VMG, Aprio, HIA) already sell the chart audit and can add the screen at near-zero cost, so this is a feature unless they would rather buy it than build it. That is untested.
3. Bottom-up, the residual is about $0.03-0.47M a year of PE buy-side revenue (central about $0.16M), or $0.05-0.7M with non-PE acquirers [A, section 5]. That is a side business for a credentialed person, not a company.
4. No Power from Helmer's seven is reachable inside two years. The nearest is a cornered resource (contractual rights to anonymized provider-month trajectories), which needs 30-40 engagements and engagement-letter consent that nobody has granted.
5. Fit warning: the buyer set (PE deal partners, healthcare transactions counsel) buys on track record. A high-school-senior founder has none. The only way around this is a credentialed partner (CPMA/CPC with transaction experience, or a former PYA/VMG/Aprio staffer). Without that partner, stop.

## 1. What changed

| Element | Original | Refined | Why |
|---|---|---|---|
| Core output | Extrapolated overpayment exposure with confidence interval | A scribe-attributable E/M revenue ceiling (a run-rate adjustment range), plus a sampling frame for the chart auditor. No overpayment extrapolation. | Avoids creating "identified" liability under the knowledge-based 60-day rule and the Kovel/RWI waiver tangle [C] |
| Engaging party | Buyer's healthcare counsel, privileged | Buyer's corp-dev team or the buyer's existing coding/QoE reviewer. Counsel reviews the engagement terms once. | Descriptive valuation input does not need Kovel. Counsel only enters at the chart stage, which the incumbents already run. |
| Data | Claims plus chart sample (PHI) | Stage 1 uses provider-month CPT and E/M-level counts plus go-live dates. These are aggregate and non-PHI. PHI stage is the buyer's existing coding reviewer, or an optional later add-on. | HIPAA due-diligence exception problems for non-covered PE buyers [C]. QoE data requests already ask for revenue by CPT by provider [I]. |
| Method | Staggered DiD as headline | Event-study and cohort comparison with a pre-sale power gate. Causal language only when the target's rollout supports it. Otherwise labelled descriptive and priced lower. | DiD is fragile at 20-150 providers, and group-wide rollouts leave no controls [C] |
| Price | $20-45k, plus $8-15k sell-side, plus $4-8k/month monitor | $4,500 (under 20 providers) or $7,500 (20-150 providers). Sell-side and monitor cut. | At-risk value is $0.2-2M, not $8M, and $20-45k rivals the whole QoE [A, C] |
| Customer | PE deal partners via healthcare counsel | Repeat acquirers: corp-dev leads at PE-backed physician platforms that run add-on programs. Second channel: coding-review and QoE shops as white-label or subcontract. | One-off deal partners cannot be created; repeat programs can be sold to once |
| Moat claims | Benchmark, free pre-screen, DiD, counter-positioning | None claimed. Data-rights clause as a long-shot cornered resource. | All the original assets commoditize or are copyable [C] |
| Why-now | Payer downcoding, Cigna nationwide, no 2023 playbook | Scribe adoption now majority-scale; knowledge-based 60-day rule since 1/1/2025; exits in 2027-29 will carry scribe-era TTM | Payer downcoding is a paused patchwork (Cigna R49 paused, Maryland action, Indiana and Illinois laws) [C] |
| Target specialties | Includes behavioral health | Behavioral health out of v1 | 42 CFR Part 2 and state law at the chart stage [C] |
| Timeline | 10 business days incl. chart review | 5 business days from receipt of provider-month data (Stage 1 only) | HIA already runs 1-2 weeks plus 1-2 weeks reporting; speed is not a moat [C] |

## 2. Answers to each critique

### Critique 1 (serious): served market, funded AI auditors, no moat, incumbent channel, shrinking niche

Conceded:
- Buy-side E/M review in physician deals is a served, budgeted service (PYA, HIA, VMG, Aprio all publish it; Aprio and VMG show findings moving price) [C]. The "gap" was framing. The finalist file's own note says incumbents could rebrand within a quarter or two.
- Disruptive-innovation test: why will incumbents rationally not respond? There is no structural reason (no cannibalization, channel conflict or regulation). The only candidate is "too small to bother", which is the weakest kind. This is not a moat. It is a bet that 10-30 engagements a year is below the threshold where a firm builds a module and above the threshold where a firm will subcontract one.
- Brellium (reported $16.7M Series A, clawback guarantee, audits scribe output) and Charta ($8.1M seed, 100% pre-bill review) were missed in the original research [C]. I do not compete with them on coverage or guarantees, and I cut the $4-8k/month monitor because they can sit inside the target after close.
- Moat table, 7 Powers read: scale economies none (about 10-30 engagements a year), network effects none, switching costs none (one-time project), branding none (new firm), process power thin, counter-positioning thin (copying costs incumbents nothing), cornered resource not yet held. The free CMS pre-screen is a copyable lead magnet and I drop it as a differentiator. The cross-deal benchmark is being produced free by Johns Hopkins (NIHCM grant through 12/2026), Trilliant and Holmgren [C], and I stop counting it as a moat.

Fixes:
- Incumbents become the first channel, not the enemy. The Scribe Screen is built to be what a coding reviewer runs before the chart audit (it produces their stratified sampling frame). Pitch to second-tier coding and regional QoE shops first (the HIA type that lacks data-science staff), not PYA, VMG or Aprio.
- Brellium and Charta are post-close monitoring partners, not competitors for diligence work. No referral fee in v1 (keeps it clean).
- Pilot is priced at $1,500-2,500 for a named reference, not a $12-15k pilot in exchange for data rights.

Not fixed (honest residual): an incumbent can still decide to build this. The test in section 7 asks them directly.

### Critique 2 (fatal): the number is what lawyers avoid; no demand evidence; overstated value; data access; weak second and third legs

Fatal as originally specified: yes. What I did with each point:

1. Quantified overpayment number creates knowledge (60-day rule, stock-deal inheritance, RWI known-issue exclusion, privilege waiver on sharing with underwriter or lender).
   Fix: the number is deleted from my scope. I produce a ceiling on scribe-attributable E/M revenue (a valuation input, like a QoE adjustment) and a sampling frame. The "supported versus unsupported" call stays with the buyer's existing counsel-engaged coding reviewer, who already works in this legal space on every deal. What I lose: the product no longer resolves the "legitimate catch-up versus at-risk narration" question, which was the original value proposition. I now size the ceiling and hand over the sampling frame. That is a smaller product. I accept this.
2. No evidence anyone pays; value overstated 3-10x.
   Conceded. Recomputed [A]: for a 50-provider, $30M, 40%-E/M group, Holmgren-based coding-only uplift of about 3% gives $0.36M revenue and about $4.0M EV at 11x. The JAMA commentary figure (about $3,000 per physician per year, half coding) gives $75k and about $0.8M EV. The file's 6% gives $7.9M. The at-risk (unsupported) share is perhaps 20-50% of the drift value [I], so at-risk EV is roughly $0.2-2M. At that level a $30k fee is 1.5-15% of the at-risk value, which fails. A $4.5-7.5k fee is 0.2-3.75%, which is defensible. Price cut accordingly. Demand evidence is still absent, so this becomes the riskiest assumption.
3. Buyer pool small and shrinking (PPM deals about 71 in Q2 2026 versus 111 a year earlier; 2026 on pace for 46-50% down) [C].
   Conceded. I move from one-off deal partners to repeat add-on programs (add-ons remain the plentiful segment per Health Capital [C]) so one customer is 4-8 targets a year. The market is still small (section 5).
4. Pilot collides with NDAs, privilege and HIPAA; benchmark cannot be built from privileged data.
   Conceded. No data-for-discount pilot. A data-rights clause covering anonymized provider-month trajectories is offered in the standard engagement terms and is optional; nothing in the plan depends on it being signed.
5. Data access (non-covered PE buyer, minimum-necessary, BAA, public CMS file lags and is Medicare-only).
   Fix: Stage 1 needs provider-month CPT and E/M-level counts and go-live dates, with small-cell suppression, which are aggregate rather than PHI [I; a healthcare lawyer must confirm]. Provider-level productivity is commercially sensitive but not PHI. The PHI-dependent chart stage is not mine. Vendor session-duration metadata and audio timestamps are dropped (retention windows and unverified vendor export). The CMS pre-screen is used internally for simulation and specialty priors only, not as a lead magnet.
   Not fixed: the seller can still decline to hand over provider-month data and go-live dates early, and a seller who will not share go-live dates kills Stage 1. The test asks about this directly.
6. Sell-side adverse selection; monitor sells into portfolio companies that already have tooling.
   Conceded and both legs are cut.
7. Why-now murkier (Cigna R49 paused, Maryland, Indiana, Illinois).
   Conceded. Payer downcoding is removed as a pillar. Replacement why-now (section 3) is weaker and I rate it moderate.
8. Price anchor (2013 Rivkin Radler figures, QoE $25-75k).
   Conceded. $4.5-7.5k sits at roughly 10-25% of a lower-middle-market QoE, so it is an add-on that is hard to squeeze out.

### Critique 3 (serious): privilege versus the number; PHI and timeline; timing; DiD control group; thin moat, brutal channel

1. Privilege contradiction. Handled as above by scoping out the extrapolated number. My output goes to the buyer's corp-dev team and reviewer. Contract language says I give no legal advice and do not share with lenders or underwriters without the buyer's counsel. A one-time engagement-template review by a healthcare transactions lawyer is a startup cost ($2-5k [I]).
2. PHI and 10 business days. Solved by splitting stages. Stage 1 is 5 business days from data receipt. Stage 2 (charts) is outside my promise. The audio-timestamp reconciliation idea is dropped.
3. Timing and legal overhang (PPM decline, Oregon SB 951, California SB 351, federal MSO bill introduced 9/16/2026). Accepted as headwinds [C]. Not a fix. It lowers the ceiling in section 5.
4. DiD control group. Conceded. Rollouts in 20-150 provider groups are often group-wide in weeks, volunteer early adopters violate parallel trends, few treated units under-cover with clustered errors [C]. Fixes: (a) a pre-sale power gate. Before quoting, I look at the go-live schedule: if there are fewer than N providers in either cohort or no staggering, the output is labelled descriptive and not causal; (b) I report a range and call it a ceiling, never a standalone escrow number; (c) the public CMS provider file is used only for pre-trend and placebo checks, because it is Medicare-only and lags to CY2023 or CY2024. Not fixed: if the sim shows most targets lack usable staggering, the causal claim is rarely sellable and what is left is descriptive, which incumbents already do. That is the second-biggest kill condition.
5. Liability at a 1:250 fee-to-exposure ratio and E&O. Conceded. Mitigation: no extrapolation, no opinion on overpayment, liability capped at 1x fee, reliance limited to the engaging party. An E&O quote is required before the first paid job. I have no sourced premium figure.
6. Moat thin; free checklist already published to the channel. Conceded (section 4). Differentiation is operational: fixed price, 5 days, runs before PHI is exchanged, honest power gate.
7. Founder credibility. Conceded fully. See the fit warning in section 0.

## 3. The refined business

One-liner: a $4,500-7,500, five-business-day, no-PHI screen that tells a physician-practice acquirer how much of a target's trailing E/M revenue moved with ambient-scribe go-live, and hands its coding reviewer the sample frame.

Wedge customer: corp-dev or VP-acquisitions at a PE-backed physician platform that closes at least 4 add-ons a year in E/M-heavy specialties (dermatology, ophthalmology, orthopedics, GI, urology, ENT/allergy, primary care). Second channel: second-tier coding-review and regional QoE firms buying it white-label. I have no sourced count of qualifying platforms ("low hundreds" is my guess [I]).

First product (Stage 1 only, no PHI):
1. Provider-month E/M-level mix aligned to each provider's go-live date (event-study plot per provider and per specialty cohort).
2. Design check: staggered variation, cohort sizes, and a power statement. Output labelled causal or descriptive accordingly.
3. Scribe-attributable E/M revenue ceiling in TTM EBITDA terms, as a range, with an explicit "not an overpayment estimate" line.
4. Stratified sampling frame (top-drift providers, plus controls) for the buyer's chart auditor.
5. A one-page seller question list: scribe vendor, go-live dates, whether the tool suggests E/M levels or only documents (mechanism differs), template and prompt settings, whether time statements are used.

Stage 2 (charts, PHI) is not built. If it is ever added, it is a subcontract to or from an existing coding reviewer, or contract CPC/CPMA coders under the buyer's counsel.

Pricing: $4,500 for targets under 20 providers; $7,500 for 20-150 providers. Pilot: two jobs at $1,500-2,500 for a named reference. Direct cost about $1-1.5k per screen (10-20 analyst hours at a blended $50-75/hour, plus senior review) [I], so gross margin about 75-85% [A]. Break-even to $100k revenue is about 17 screens a year at $6k.

Why-now (rated moderate): (a) scribe adoption is now majority-scale (UCSF about 70% of physicians; Menlo about $600M of 2025 healthcare AI spend on ambient documentation) [C], so a 2026-27 target's TTM is likely to contain a step change; (b) the 60-day rule has been knowledge-based since 1/1/2025, so ignorance costs more [C]; (c) PE exits in 2027-29 will carry scribe-era TTM EBITDA [I]. It fails the "would it have worked in 2019" test only partly: scribes did not exist at scale, but E/M coding diligence did.

Moat: none within two years. Best reachable: a cornered resource (anonymized provider-month trajectories by vendor, specialty and go-live, built under an optional data-rights clause) plus a codified protocol (process power). 30-40 engagements needed, so 2-3 years at the mid-case rate.

JTBD: the job is "tell me how much of this target's current run-rate I should not pay a multiple for, before I spend $15-30k on a chart audit". The struggling moment is the QoE data room showing a post-2025 E/M step change. The firing candidate is "do nothing and take a rep and an escrow".

Pre-mortem (it is 2028 and this is dead): (1) PYA/VMG/Aprio or a QoE shop added the module for free and buyers never saw a separate line item, which is not fixable by me, only avoided by being the sub-vendor first; (2) the power gate kills the causal claim on most targets so the product is descriptive, which is a commodity; (3) the founder could never get meetings with the buyer set, which is fixable only with a credentialed partner.

## 4. Competitors and edge

| Who | What they do | Edge assessment |
|---|---|---|
| PYA, VMG, Aprio, HIA | Buy-side coding/E-M review in diligence | They own relationships and chart-audit capability. They can add this. My edge: fixed price, five days, no PHI, power gate. It is operational, not structural. |
| Brellium, Charta | Funded AI auditors, 100% review, guarantees | Post-bill, in-practice, no evidence of diligence sales [C]. They become monitoring partners. |
| Harine, other analytics boutiques | PE-facing practice analytics, same scribe-drift story | Direct overlap in marketing. Unknown depth. Needs a call. |
| MDaudit, Healthicity, Cotiviti | In-house compliance and payer-side software | Adjacent. Not diligence. |
| Scribe vendors | Self-attested "AAPC-verified" coding quality | Counter-message the buyer will hear. Independence is my angle but incumbents have it too. |
| Free sources | CMS data, AAPC benchmark tool, Hopkins, Trilliant, Holmgren, Composo open audit instrument | Make the method copyable. No moat. |

## 5. Bottom-up market

Method: reuse the dossier funnel [C], add an add-on segment, and price at the refined screen. All shares are my assumptions [I] except the PitchBook deal counts [C].

| Step | Low | Mid | High |
|---|---|---|---|
| PE physician-practice deals per year | 210 | 300 | 400 |
| Segment 1, 20+ providers: share of deals | 15% | 22% | 30% |
| Scribe live 12+ months at signing | 25% | 37% | 50% |
| Buyer buys a separate scribe screen | 25% | 42% | 60% |
| Segment 1 screens per year | 2 | 10 | 36 |
| Segment 1 revenue at $7,500 | $15k | $77k | $270k |
| Segment 2, under 20 providers: share of deals | 85% | 78% | 70% |
| Scribe live 6+ months at LOI | 15% | 25% | 35% |
| Buyer buys a $4,500 screen | 15% | 30% | 45% |
| Segment 2 screens per year | 4 | 18 | 44 |
| Segment 2 revenue at $4,500 | $18k | $79k | $198k |
| **PE buy-side total** | **6 screens, $33k** | **28 screens, $156k** | **80 screens, $468k** |
| With non-PE acquirers at an assumed 1.5x (health systems and others) | $50k | $234k | $700k |

Sell-side and monitoring are excluded because I cut them. The original capacity of 50-100 reports a year at $30k ($1.5-3M) exceeds even the high case here. Central case is about $0.15-0.25M a year, which is a side business for one credentialed person.

## 6. Unit economics

- Price $4.5-7.5k; direct cost about $1-1.5k; gross margin about 75-85% [I, A].
- Startup costs to first paid job: engagement-template review by a healthcare transactions lawyer ($2-5k [I]), E&O quote (unsourced), a data-handling setup (hashing and small-cell suppression), and a power-simulation script. None of these is large, but none is zero.
- CAC is relationship time. No paid channel exists. Payback depends on whether two to three referral partners each send 4-8 screens a year.
- Revenue per head is not the constraint; deal flow is.

## 7. Riskiest assumption and the cheapest two-week test

Riskiest assumption (highest risk times highest importance): someone with budget authority in a physician-practice acquisition will pay at least $4,500, as a separate line item, for a scribe-specific E/M run-rate screen, and the incumbent coding and QoE firms will buy or tolerate it instead of absorbing it into their own scope. Every other open question (HIPAA wording, power, E&O) matters only if this holds.

Two-week test (budget under $500 plus time; the founder or a partner does the calls):
1. Interview 15-20 people from three groups: 6-8 healthcare-transactions lawyers or associates; 5-7 PE VPs or corp-dev leads at platforms with add-on programs; 4-5 current or former staff at coding-review or QoE firms (PYA, Aprio, VMG, HIA, regional CPA firms). Ask about their last three physician deals: did a scribe come up, who looked at it, what did it cost, was the cost separately budgeted, and what stopped them from doing more. Then ask for a commitment: "On the next add-on where the target runs a scribe, would you sign a $4,500 paid pilot?" and, for coding firms, "Would you white-label or subcontract this?"
2. In the same two weeks, run the power simulation on public CMS data plus synthetic go-live schedules at 20, 40, 80 and 120 providers with realistic adoption patterns (group-wide, staggered, volunteer-first).
3. Ask one lawyer and one platform compliance lead whether provider-month CPT and E/M counts with small-cell suppression can be shared pre-LOI without a BAA.

Pre-registered thresholds (decide before the calls):
- Continue as a bounded boutique only if all hold: at least 6 of 15 interviewees say a scribe came up in a recent deal and someone was paid to look at it; at least 2 give a named, dated commitment to a paid pilot of at least $4,500 (or at least 2 coding/QoE firms say they would subcontract or white-label); and the simulation shows the design check can support a causal label on at least 40% of plausible rollout patterns at 40 providers (otherwise the product is descriptive only and I reprice or drop it).
- Kill if: fewer than 2 commitments; or most interviewees say the QoE or coding reviewer already covers it; or incumbents say they will build it.
- Revive the larger version only if two or more buyers say they paid at least $15k for a scribe-specific analysis in the last 12 months and a named transactions lawyer will run the extrapolation through a Kovel letter. Nothing so far suggests this.

## 8. What I did not verify

- I did not re-fetch any critique source in this pass. Figures marked [C] are as the critics and the dossier report them; several were search snippets, and some fetches (Axios, Becker's Payer) returned 403.
- The Kovel, 60-day-rule and RWI-exclusion points are legal inference. They need a healthcare transactions lawyer. The aggregate non-PHI claim for Stage 1 needs the same lawyer.
- No sourced count of qualifying platforms; no sourced coding-diligence fee; no E&O premium.
- Brellium and Charta not selling into diligence is absence of evidence only.
- Harine's depth is unknown.

## 9. Fit

This idea needs a credentialed healthcare-transactions or coding-audit insider to be believable and to get meetings. If that person does not exist in the founder's network within a month, do not pursue. Even with that person, the central-case ceiling is about $0.15-0.25M a year, so it should be compared against the other finalists on that basis, not on the original $1.5-3M framing.
