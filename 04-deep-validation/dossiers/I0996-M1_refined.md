# I0996-M1 (refined): Converter-Model Validation for AI Power Vendors

Refined 2026-10-13. Replaces "ERCOT Large-Load Energization Files, Fixed Fee".

## Verdict

**Alive, but only as a different and much smaller business, and only as a cheap option, not a confident bet.**

- **Dead:** the developer-paid, $90-180k "sell acceptance" package, the 25% success kicker, the "no direct competitor" claim, and the "reuse across sites lifts margin to 50-60%" story. All three critics are right on these, and ERCOT's own rule text confirms the core point.
- **Survives:** a vendor-paid, fixed-scope **converter model validation (CMV)** service for the power-electronics makers (power shelves, 800 VDC solid-state transformers, battery backup units, UPS, ride-through devices) who have to produce the hardware-benchmarked PSCAD model that PGRR144 requires and who the Data Center Coalition says are not getting it done.
- **Honest ceiling:** a 3-8 person specialist firm doing roughly $1-3M a year from this niche at best, with a 40-50% gross margin if the repeatable pipeline works and 30-40% if it does not. That is a good small business or an acquisition target. It is not a top-tier venture idea, and the pitch should stop implying it is.
- **My odds (judgment):** about 10-20% of reaching $500k a year or more. The cost of finding out is about 40 hours over two weeks, which is why it is worth running.

## 1. What the critics got right (no argument)

1. **The reuse belongs to the OEM.** ERCOT's own text makes CMV a hardware-type benchmark of "different converter hardware components," not a site test (PGRR144 TAC report, Aug 26 2026, converter model validation test (iii), "for LCL only"). It names two tests: (A) large voltage disturbance (voltage ride-through) and (B) subsynchronous. ERCOT's June ESIG deck says it is generally done in the OEM's lab, once per converter family. A developer will not pay $150k per site for it. The OEM is the natural payer, and that is where this business has to point.
2. **There are direct competitors.** Keentel, Electric Power Engineers, ZEG, PSC, Powertech and Electranix are all in or next to this space. ON.energy has reportedly already done the vendor-led version for its own UPS (company-reported, per critic 1; I did not open the slide myself).
3. **No price evidence supports $90-180k.** The only anchor I could verify is TIEC's "tens of thousands of dollars" for an outside consultant to package dynamic data (TIEC comments, Aug 3 2026, opened and read). It is about traditional manufacturers, so it is not like-for-like. It still shows the packaging layer is cheap.
4. **The acceptance kicker is unworkable.** ERCOT says completing the tests "does not constitute an endorsement" of compliance. The pre-energization gate is frozen. A fee tied to a regulator's decision on sealed work is an ethics and structuring problem.
5. **Timing.** I confirmed on ERCOT's PGRR144 page today: ROS 7/9, TAC 8/26, Board 9/15/26 all recommended approval; PUCT status is "Pending" with no date, no docket and no effective date listed. The page marks it "Urgent: No" and shows no transition language. The July 10 Batch Zero model deadline has passed, so the developer buying window is mostly closed.

## 2. What changed

| Element | Before | After | Answers |
|---|---|---|---|
| Payer | Neocloud and colo developers (30-60 firms) | Power-electronics OEMs without a mature in-house PSCAD and grid-code team (10-40 firms) | C1, C2, C3 |
| First product | Six-week full "energization file" with ISO submission and resubmittals | 2-week **CMV Readiness Review**, then a per-converter-family **CMV Package** | C2 (24-day cure windows, timing) |
| Price | $15-25k gap analysis, $90-180k package, 25% kicker | $8-12k review, $60-110k per family, 30/40/30 milestones on deliverables, no kicker | C1, C2, C3 |
| Moat claim | Reusable model library plus "knows what ERCOT accepts" | Repeatable test-and-model pipeline plus switching costs on firmware re-issue. No moat claimed in year 1 | C1, C2, C3 |
| Jurisdiction | ERCOT only | ERCOT-first, method portable to NERC and other ISOs | C1, C3 |
| Developer work | The core business | A capped door-opener (cure sprints, at most 25% of revenue) that also tells me which vendor models are missing | C2 |

## 3. The refined business

**Wedge customer.** The grid-code, applications-engineering or product lead at a power-electronics OEM that:
- sells a converter sitting in the ride-through path of an ERCOT Large Computational Load (75 MW and above, 50% or more power-electronic load): power shelf or PSU, battery backup unit, 800 VDC solid-state transformer, UPS, ride-through or storage device, and possibly cooling VFDs;
- has no mature in-house PSCAD/EMT and grid-code modeling team;
- is not Eaton, Vertiv, Schneider or ON.energy class.

The evidence that this customer exists is the Data Center Coalition's March 30 2026 comments (opened and read). They say PSCAD validation "is difficult for power shelf and ... VFD manufacturers that are not familiar with PSCAD tools," that DCC members "have been working with power shelf vendors for over 6 months with minimal progress," that the vendors "lack experience with PSCAD/EMT simulations," and that vendor models "involve intellectual property" that is hard to share. The hyperscalers are the ones asking vendors for models, so they are motivated sponsors. Early-adopter pool: shippers of 2027 800 VDC hardware. A search summary says 80-plus manufacturers are building to the OCP LVDC SST specification. That is secondary and unverified, but it suggests a long tail.

**Job to be done.** A tenant's or developer's equipment checklist asks "where is your ERCOT-ready PSCAD model and converter benchmark?" and the vendor cannot answer without exposing firmware. The vendor is currently choosing between handing out spec sheets and a generic model (not a hardware benchmark), pulling its controls team into PSCAD, or buying hours from an hourly consultancy.

**Product ladder.**
1. **CMV Readiness Review** (2 weeks, $8-12k fixed). Map the product against the DWG test definitions (large voltage disturbance, subsynchronous). Check where its ride-through logic sits against the NOGRR282 behavior (the proposed text the DCC quoted: keep drawing power between 0.5 and 0.9 pu, return to 90% within 2 s; re-read the final PUCT-approved text before relying on it). Produce a test plan, a decision on which tests can be witnessed in the vendor's own lab, an IP-protection plan, and a fixed quote. This is the first sale, the riskiest-assumption test, and the template-building step.
2. **CMV Package** ($60-110k per converter family, fixed scope). An IP-protected (encrypted or compiled) PSCAD component, a hardware test campaign (witnessed in the vendor's lab or run on HIL, which ERCOT accepts), and benchmark overlays and a report in the DWG format. It includes support for ERCOT and developer questions on the model. Lab and HIL costs are quoted in advance and passed through at cost plus 10%.
3. **Re-issue** ($10-25k per change, or $15-30k a year per family). ERCOT's text treats a material change to controls or protection settings as a trigger for re-review, so firmware changes create repeat work.
4. **Door-opener: developer cure sprint** (capped fixed fee, $12-30k, three weeks or less, no kicker). It targets the roughly 24-day deficiency-cure window for Batch Zero projects flagged as "subject to curing deficiencies in dynamic model data." I do not expect to beat Keentel on merit here. The point is cash, plus finding out which vendors' models the developers are missing. Cap it at 25% of revenue so the firm does not drift into being a worse Keentel.

**Payment and liability.**
- Milestones: 30% at kickoff, 40% at delivery of the validated model and report, 30% at customer sign-off that the package is submission-ready. All milestones are tied to deliverables, never to an ERCOT decision.
- Contract: liability capped at fees; no guarantee of acceptance; the owner's as-built attestation stays with the owner.
- Technical warranty: free rework for 12 months on any deficiency ERCOT raises that traces to our model. This replaces the kicker with a rework cost rather than contingent pay. Counsel must confirm it, and the Texas conflict-of-interest rule (22 TAC 137.57) should be checked.
- Licensing and insurance: engage a Texas PE as principal or subcontractor and get an E&O quote in week 1. Readiness reviews and test plans are advisory. Whether CMV deliverables need a seal is unresolved and is a day-1 check.

**Delivery cost.** About 300-450 engineer-hours per package (assumption, not market data), at an assumed blended billing rate of $225 an hour and loaded cost of $110-130 an hour. Gross margin comes out around 42-50% before pass-throughs, lifted only by reusing the harness, the test sequences, the encrypted-component template and the report generator. No multi-MW rig is needed for power-shelf-scale products, because the benchmark can be vendor-witnessed lab tests plus PSCAD tuning. Fixed costs stay near zero until a PO: the founder, a fractional PE, contract PSCAD engineers paid per project, rented HIL time.

## 4. Why now (verified items marked)

- PGRR144 cleared the ERCOT Board on 9/15/26 and now sits at the PUCT with no transition language (verified today). ERCOT rejected the DCC's 1-2 year transition and measured-data fallback in its April and June responses (per critics and a search summary; not re-opened).
- The FERC order of July 16, 2026 (Docket RD26-7-000, verified in the Willkie memo) directs NERC to file computational-load Reliability Standards, glossary changes and registration criteria by Dec 31, 2026, with an informational filing by March 1, 2027. This does not yet specify OEM validation, but it points toward a national requirement. For a vendor-paid, ISO-agnostic validation service this widens the market. For the original ERCOT-only developer pitch it was a threat.
- Next-generation hardware (800 VDC, solid-state transformers, battery backup units) means new converter families that each need a benchmark. This is a forward product cycle (deployments around 2027), unlike the Batch Zero window, which has closed.
- The firmware caveat is real: the DCC says the hardware and firmware "are in different stages of development and not finalized." Validation will follow firmware freezes, and re-issue is built into the model for that reason.

## 5. Bottom-up market and year-1 math

All of this is assumption-driven except where a source is named.

- **Vendor pool:** assume 30-40 vendors sell converters into LCL power paths in ERCOT, and about half lack mature in-house capability. That gives 15-20 reachable payers with about 2 families each, or 30-40 families. (Anchor: the 80-plus OCP LVDC SST-spec manufacturers is secondary and unverified; the "half" is my judgment.)
- **One-time pool:** 30-40 families at about $75k is **$2.3-3.0M**, possibly up to $5M if cooling VFDs and other component classes join. Re-validation at about $20k a family adds **$0.6-0.8M a year**.
- **Share:** a new shop plausibly gets 10-25% against Keentel and EPE, which gives **$0.3-1.2M** a year. This matches the dossier's own, more cautious 4-8 package estimate for developers.

| Scenario (my judgment) | Mix in year 1 | Revenue | Probability |
|---|---|---|---|
| Bear | 3 reviews, 0-1 package, 2 sprints | about $150k | 45% |
| Base | 8 reviews, 3 packages, 3 sprints | about $365k | 40% |
| Bull | 15 reviews, 7 packages, 4 sprints, re-issues | about $800k | 15% |

Year 2 is $0.8-1.6M only if PGRR144 takes effect and the NERC standards generalize the requirement. The original pitch's 12 packages and $1.8M is withdrawn.

## 6. Competition and the honest edge

| Player | Status | How I treat it |
|---|---|---|
| Keentel (51 engineers, Austin, self-reported), EPE (Berkshire-backed, hiring data-center EMT staff; reportedly ran the DIMAAG study), PSC, Powertech, Electranix | Same or adjacent offer. Strongest incumbents | Head-on competitors. They have PEs, insurance and ERCOT history, and I do not |
| ZEG | HIL validation of large-load models | Competitor and possible channel |
| ON.energy and other vendors with in-house capability | Have done the vendor-led version | Excluded from the wedge. Proof the model works |
| Typhoon HIL, OPAL-RT, RTDS | Tool vendors | Partners and possible acquirers |
| UL Solutions, NVIDIA, free ERCOT/TAMU, PNNL and NERC models | Certifier moving in; reference models; free baselines | Watch triggers (below). Free models lower my build cost but do not satisfy a hardware benchmark |

**Honest edge:** narrow focus on the CMV step, fixed and published scope, a repeatable pipeline, and neutrality between OEMs. I cannot verify that incumbents are slow, backlogged or unwilling to do hardware benchmarks. The calls in section 8 must establish that.

## 7. Moat (7 Powers, honestly)

- **Month 6:** none. Speed and focus only.
- **Month 18, if the pipeline works:** **process power** (each family costs materially fewer hours than the first because the harness, sequences and report generator carry over) and **switching costs** (firmware re-issue returns to the shop that holds the test configuration and history).
- **Possible but unproven:** a **cornered resource**, if the shop's test method ends up referenced by ERCOT's DWG or in hyperscaler vendor-qualification lists. Do not plan on this.
- **Not claimed:** network effects, scale economies and branding. Counter-positioning against hourly consultancies is weak because they can offer fixed fees.
- **Exit logic:** the plausible end states are an acquisition by a consultancy roll-up (EPE is Berkshire-backed), a HIL tool vendor or a certifier. Build for that, not for a platform.

## 8. The riskiest assumption and the two-week test

**Riskiest assumption.** At least a handful of power-electronics vendors that are not Eaton, Vertiv, Schneider or ON.energy lack a workable path to CMV and will put real money (a paid review now, with a stated price of $60k or more later) behind a neutral third party. The alternatives are doing it in-house, buying it from Keentel, EPE, ZEG, Electranix or Powertech, or waiting for ERCOT to blink.

**Why this one.** Everything else is either checkable at a desk (day-1 gates below) or outside my control (the PUCT). If no vendor will pay a third party, nothing else matters.

**Day 1-2 desk gates (free).**
1. Pull the PUCT docket for PGRR144 and confirm status and effective date.
2. Read DWG Procedure Manual section 3.1.5.16 and confirm what counts as a valid hardware benchmark (vendor-witnessed lab test versus HIL).
3. Get an E&O quote and confirm the TBPELS and PE-seal question for CMV deliverables.
4. Build a list of about 40 vendors (OCP SST-spec contributors, NVIDIA MGX power partners, the power-shelf makers the DCC refers to, second-tier UPS and BESS vendors, cooling VFD makers) with the right contact title for each.

**Days 2-12: 20 outreach messages, 8-10 calls of 20 minutes.** Ask, do not pitch:
- Do customers ask you for an ERCOT-ready PSCAD model with a hardware benchmark?
- Who is building yours today, and how long has it taken?
- Who have you talked to, and what were you quoted?
- Would a neutral party that keeps your control details under NDA change your answer?

Add 4-5 calls with developer or tenant power leads. Ask which vendors' models they are missing and what they paid whoever built their July 10 models. Do not pose as a buyer with competitors; ask developers what they were quoted instead.

**Days 10-14.** Offer the $8-12k readiness review with a one-page SOW, or a non-binding LOI that names the product family, a price range and a target date.

**Thresholds.**
- **Go:** 2 or more distinct non-big-three vendors commit to a paid review or a signed LOI, and at least one says it has no in-house path.
- **Extend two more weeks:** 5 or more calls in which 3 or more vendors say they lack a path and react to a $50k+ range without flinching, but no commitment yet. Two weeks is short for B2B hardware sales cycles.
- **Stop or pivot to subcontracting HIL benchmarking to the incumbents:** fewer than 4 calls obtained from 40 outreach attempts, or 6 or more vendors say they are covered (in-house, an incumbent consultancy, or an OEM model on its way) and none will pay.

## 9. Pre-mortem: why it is dead in 2028

1. **No payer.** Vendors with budget go in-house or to incumbents; the rest will not pay. This is the section 8 test. It is not fixable by selling harder.
2. **Rule softening.** The PUCT delays or weakens CMV, or adds a transition period like the one the DCC asked for. Partly hedged by NERC and FERC, but not fixable by me. Gate: day-1 docket check, and pause spending if CMV is removed.
3. **Someone productizes it with better access.** UL, a HIL vendor, or a power-shelf-maker-plus-consultancy alliance offers CMV as a bundle. Watch triggers: a named OEM announcing a shipped, ERCOT-accepted model and report; UL listing a large-load model validation program; NVIDIA publishing per-generation reference models (an inference; I found no evidence it has). Note that ERCOT's text requires per-component hardware benchmarks, so a GPU reference model does not replace a UPS or power-shelf benchmark.

## 10. Response ledger

| Objection | Status |
|---|---|
| Reuse belongs to OEMs; ON.energy did it | **Accepted.** OEM is now the payer; their in-house-capable peers are excluded. I no longer sell "validate once, resell everywhere" |
| "No direct competitor" is wrong | **Accepted and withdrawn** |
| Incumbents can match price, success fee, or bundle it | **Accepted.** Kicker dropped, so there is nothing to match. Real edge is focus and a repeatable pipeline, unproven |
| Precedent is invisible (Protected Information) | **Accepted.** The "known acceptance expert" claim is dropped from the pitch |
| $90-180k unsupported; "tens of thousands" anchor | **Partly answered.** Re-priced from hours, with a cheap paid review to discover the real price. Still unproven |
| Free and bundled models | **Accepted.** They lower my build cost but do not satisfy a hardware benchmark |
| Kicker, ethics, regulator-controlled event | **Removed.** Milestones tie to deliverables, plus a rework warranty |
| Wrong payer and price anchor | **Answered** by the payer switch |
| Window is 9-12 months away; six-week package misses the 24-day cure window | **Accepted.** Package is no longer sold on the Batch Zero clock. A 3-week cure sprint exists as a door-opener. Year-1 revenue is cut to about $365k base |
| Wedge is thin, stretched, mostly below 75 MW | **Answered** by dropping developers as the primary payer. A smaller remaining concern: CMV still applies only to LCLs |
| Unit economics, HIL cost, E&O, PE supervision | **Partly answered.** Margin cut to 42-50% before pass-throughs. E&O premium and PE structure are day-1 items, unknown |
| UL, NVIDIA, FERC standardization | **Partly answered.** FERC becomes a tailwind for a validation service. UL and NVIDIA are watch triggers. A UL-style entrant is also a possible acquirer |
| OEM NDAs are the binding constraint | **Answered by construction**: the OEM is the customer and holds the NDA. The new risk is that OEMs set the price and own the output |
| Customer acquisition is a bespoke VP-level sale | **Not solved.** It is still bespoke selling, now to product and grid-code leads at a shorter list of firms |

## 11. What would change my mind

Mapped to the critics' lists. Either direction counts.

- **Toward go:** 2 or more non-big-three vendors paying; one written statement from a vendor that it will not ship its own ERCOT-ready model and would license a third party; a PUCT order approving PGRR144 with CMV intact and an effective date; a Dec 10 verification report with energization restarting; counsel and an E&O quote that fit the price.
- **Toward stop:** two of Eaton, Vertiv and Schneider (or a power-shelf maker) saying they will ship validated models free to customers; PUCT weakening CMV; incumbents quoting well below $60k with no backlog.

## 12. Evidence ledger

**Verified directly this run:**
- PGRR144 ERCOT page (today): Board 9/15/26 recommended; PUCT pending, no date; "Urgent: No"; no transition language.
- PGRR144 TAC report text: CMV definition (component-level hardware benchmark, tests A and B, LCL only); ERCOT review of 10 business days extendable by 20; as-built attestation; control and relay-setting changes as a re-review trigger.
- DCC comments (3/30/26): quotes in section 3.
- TIEC comments (8/3/26): "tens of thousands of dollars" for traditional manufacturers.
- FERC order memo (Willkie, 7/30/26): Docket RD26-7-000; NERC filing by 12/31/26; informational filing by 3/1/27.

**From the critics only, not re-opened by me:** ON.energy approval claim and NLR test; Keentel size; EPE hiring and Berkshire backing; ZEG and PSC offers; ERCOT's rejection of the DCC fallback; UL programs; NVIDIA GB300 smoothing; Batch Zero counts; Abbott audit; CoreWeave debt.

**Not found by anyone:** any transaction price for a converter validation or large-load model package; any OEM statement that it will or will not ship validated ERCOT models; any PUCT action on PGRR144; whether a CMV deliverable needs a PE seal; HIL or witness-lab cost per family; the size of the real vendor pool. All numbers above that rely on these are labeled assumptions.
