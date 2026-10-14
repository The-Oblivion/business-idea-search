# I1172-M2 refined: Home Equity Assurance for Data Center Neighbors

Refined 13 Oct 2026 after three critiques (severity: serious, fatal, serious). Tags: [V] verified by me this pass, [C] supplied by a critic with a primary source, [D] from the dossier, [I] my inference.

## 1. Verdict: alive = false

The business as pitched (a developer-funded, third-party-administered 10-year home-value guarantee, about $1M per program) does not survive. The dossier set its own kill triggers (section 9). Public evidence already hits two of the four before any outreach:

- Trigger 3, "developers prefer buyouts and treat guarantees as a worse version": met. Every 2026 developer action found is a buyout or put-to-developer (Mason Co. WV about 53 homes, Festus MO 12 homes at FMV+15% plus $10k, Howell Twp MI appraised value +1% within 1,000 ft, DeForest WI 110% of assessed value). A critic's read of the FAS report found zero property-value guarantees in ten executed agreements [C, my own search also found no data-center guarantee, only buyouts and checks [V]].
- Trigger 1, "counsel says it is insurance": partly met. NY DFS OGC 08-07-31 and 11-07-02 treat provider-sold pay-on-sale plans as insurance [C].

What is left is a small services practice (independent price-effect review, rider drafting, possibly a subcontract to an incumbent administrator), not a company. Revenue per program is roughly $100-300k, first cash is 12-24 months out, and the founder has no credential that county attorneys or developer counsel require. I recommend dropping it from the top-12 and keeping it as a zero-cost watch item with explicit revive triggers (section 10).

## 2. What each critique got right, and where I push back

| # | Critique claim | My call | Basis |
|---|---|---|---|
| 1a | A&M already sells this exact product (Value Assurance Programs) | Concede fully. The dossier's "no productized third-party guarantee" was wrong | [V] Norfolk Southern's page names Alvarez & Marsal as administrator. It pays market value minus sale price when the sale is below 95% of appraiser-determined value "without the Incident's influence". Interim program Sept 2023 to Aug 2026, long-term Aug 2026 to Aug 2031. A&M's own pages 403'd for the critic, so "used in AL, MS, CA, OK, MI, OH, PA, WV" is search-summary level [C]. My searches found no data-center-specific VAP, so the gap is capability and template, not demonstrated intent |
| 1b | Berkeley paper changes the economics both ways | Concede. This was the biggest miss | [V] Energy Institute WP 366 (Schlauch and Greenhill, 10 Sept 2026, not peer reviewed): large data centers cut values 3% on average within 3 miles; 7.2% within 1 mile; persistent at least 5 years; larger for hyperscale, urban and first-in-area; for recently announced projects the effect is capitalized almost entirely at announcement |
| 1c | Developers buy the problem; hyperscalers self-administer | Concede for hyperscalers and for small rings. Partly push back for large rings | A buyout only works where the ring is small (12-53 homes). Where the ring is 500-5,000 homes (Hazle, 4,500 households) nobody buys it out, so the live substitute there is a lump-sum check, and checks drew the "bribe" backlash [D]. That is the only segment where a guarantee competes with something other than a buyout |
| 1d | Neutral-agent slice is thin; revenue $100-300k, not $1M | Concede. Re-priced in section 4 | Berkeley's effect is localized to about 1 mile, and typical new sites have about 70% fewer housing units per square mile [D], so rings are hundreds of homes, not 3,000 |
| 1e | Pre-mortem: no obligor, incumbent wins RFP, left selling free research | Concede. Two of three causes are not fixable by the company | Only cause (3) is fixable, by becoming a research-and-review practice |
| 2a | Revenue sized on 3,000 households; real programs are 12-53 homes | Concede for buyout rings, partly for guarantee rings | The ring size is set by the product's cost: a buyout is about $60k+ net per home, a deductible guarantee is about $1-4k expected per home (section 4), so a guarantee can cover 10-50x more homes for similar total cost. That is an argument, not evidence anyone wants it |
| 2b | No evidence the buyer pays; buyouts are revealed preference | Concede. This is the load-bearing objection | Zero guarantee clauses in ten executed agreements [C]; Sabey won Indianapolis variances with a commissioned study [D] |
| 2c | History is zero claims (Lee County IL) | Partly. Real, but the data-center case differs | Lee County was a wind plan where the price effect is near zero, so no claims is unsurprising. Neodesha KS VAP had 27 sales in about 6 years at 3.3% average discount [C]. With Berkeley's numbers, claims will not be rare, which flips the problem to payout size |
| 2d | Insurance classification is gating | Partly push back | NY opinions concern plans a provider sells to homeowners. The Norfolk Southern VAP [V] is a defendant-funded pay-on-sale shortfall program run by a third party in Ohio and surrounding communities, with no sign of operating as licensed insurance. That makes it a state-specific, structure-specific risk, not a category ban. Still untested for a voluntary data-center version and still needs state opinions |
| 2e | GTM: county is the wrong co-signer, cycles are long, developer exit | Concede | DeForest took about 7 months before announcement; the deal died 3 weeks after [D]. The 90-day signed-pilot gate was unrealistic |
| 3a | Insurance and adjuster licensing | Concede on adjusting. A discretionary claim decision invites a licensing question. Mitigation is a formula-only trigger plus a panel that decides disputes | Needs counsel in 2-3 states before any revenue |
| 3b | Economics bimodal: rare claims means worthless; frequent claims drains escrow | Concede, and Berkeley puts us in the second branch | See payout table |
| 3c | Data foundation weakest where it is sold (non-disclosure states, thin rural comps, AVM error) | Concede | Seven or more build-out states do not disclose prices [C]. Texas was in the dossier's own pilot plan |
| 3d | Why-now is moratoria, which shrinks the buyer pool | Concede | Moratoria and the Illinois HB4319 tailwind are dropped from why-now |

One rebuttal worth keeping. Critic 1 says "counties cannot tell bluffers from sincere developers". They do not need to: a funded escrow is a costly signal, so a bluffer who signs pays. The real problem is adverse selection in who signs, not bluffing. The developers who can afford the signal are the ones with low expected payout (small, not first-in-area, not hyperscale), which is Berkeley's low-effect group, which is the group that least needs the signal.

## 3. Payout math with Berkeley-consistent effects [I]

Model: shortfall of sale price versus a control-index-adjusted reference is Normal(m, sd), where m is the true project effect and sd includes house-specific noise and AVM/BPO error. Payout = shortfall beyond a deductible, capped at 20% of reference. $300k home, 40% chance of sale within 10 years (NAR median seller tenure is 11 years [D]). Simulated, 2M draws each; script is `deep/I1172-M2_payout_calc.py`.

| True effect m | Noise sd | Deductible | Expected payout per sale | Expected cost per enrolled household |
|---|---|---|---|---|
| 0% (null studies) | 10% | none | $11.7k | $4.7k |
| 0% | 10% | 10% | $2.5k | $1.0k |
| -3% (Berkeley, 3 mi) | 10% | none | $16.5k | $6.6k |
| -3% | 10% | 10% | $4.2k | $1.7k |
| -7.2% (Berkeley, 1 mi) | 10% | none | $24.3k | $9.7k |
| -7.2% | 10% | 10% | $8.1k | $3.3k |
| -7.2% | 12% | 10% | $10.2k | $4.1k |

What this says:

- With no deductible the escrow must be about $5-10k per household. At the 1-mile effect that is the same as the $10k checks the idea was supposed to beat. The original "$3-5k escrow" only works with a deductible.
- With a 10% deductible, expected cost is about $1-4k per household. Berkeley's 1-mile mean (7.2%) sits below the deductible, so payouts come from the tail, not the mean.
- A "10% deductible" cuts what residents asked for. A Lysander NY committee asked for an escrow equal to 20% of nearby residential value [C]. The gap between 20% asked and about 1-3% expected is where any negotiation would sit.
- Adverse selection and moral hazard (Neodesha [C]) push every number above up. The model ignores both.
- Developer comparison [I]: an 800-home ring costs about $2.6M expected at the 1-mile effect with a deductible. A 53-home buyout at FMV+15% plus $10k is about $55k premium per home, about $2.9M before resale. Total cost is comparable. So price is not why developers choose buyouts. Control is (the angriest neighbor leaves, the homes become worker housing).

## 4. Re-priced revenue (honest version)

Original: about $1M+ year one per 3,000-household program, with a $1,500 claim fee. Replaced by:

| Line | Price | 800-household program |
|---|---|---|
| Set-up (term sheet, rider, index build, escrow-agent coordination) | $40-75k flat | $60k |
| Per-household enrollment (AVM plus light BPO, lien check, portal; dossier says $70-170 real cost) | $100-150 | $96k |
| Annual administration | 0.75-1% of escrow ($3.5M) | $30k/yr |
| Adjudicated claims | $750-1,500 each, mostly panel pass-through | about $20k/yr |
| Year 1 | | about $190-210k |
| Years 2-10 | | about $50-70k/yr |
| Ten-year program revenue | | about $0.6-0.8M |

Front-loaded costs not in the original: state counsel opinions (tens of thousands each, per critics), reference-value QA, escrow-agent fees. One state opinion consumes a quarter of a program's year-one revenue. Float income is dropped; the custodian bank keeps it.

## 5. Options considered for wedge, payer and product

| Option | Payer | Product | Verdict |
|---|---|---|---|
| A. Original | Developer | Obligor-of-record guarantee with administrator | Dead (buyers prefer buyouts; A&M; insurance risk) |
| B. White-label engine to VAP administrators | A&M, Epiq, Kroll | Control-index and valuation model | A&M has real-estate economists in-house and no need. Epiq lacks valuation and might buy, but this is a feature sale at $50-100k/yr, one customer |
| C. Neutral valuation panel for buyouts | Developer or county | Three-appraiser fairness certification (Festus is being sued over a developer-approved appraiser) | Real pain, but appraisers are licensed and commoditized, 12-53 homes per deal, $20-80k per program, founder cannot be the appraiser |
| D. County-side peer review of developer property-value studies | Developer, via applicant-funded review escrow, selected by the county | Independent review plus a published-method price-effect estimate for the site | Developers do buy "no impact" studies (Align/LaSalle at Coal City, Sabey/Integra at Indianapolis [C]), and applicant-funded consultant review is standard land-use practice. Spend is real and observed. Ticket is $10-40k. Berkeley, Realtor.com, GMU and NAR make the method free. Needs credentials (MAI appraiser or PhD economist) the founder lacks |
| E. Release-for-guarantee (VAP as litigation peace) | Defendant in a value or nuisance class action | VAP-style program that buys a release of diminution claims | The Norfolk Southern model. Strong buyer logic, but counsel and court pick the administrator and A&M is the default. Dowagiac MI class action is pending [C] |
| F. Option on a mandate | Developer, to comply | Packaged compliant program (bond plus panel plus escrow) if a county or state mandates value guarantees for data centers | No data-center mandate exists. St. Joseph and Delaware County IN show counties adopt mandates, then meet limits (bond and developer-funded assessor; "unenforceable by county officials") [C]. Hold as a watched option |

Strongest surviving form = D now, F as an option, B as the exit. It is a consulting practice with a product option attached.

## 6. Moat (Helmer's 7 Powers)

No power is reachable in the next 12 months.

- Scale, network, switching costs: none. Programs are one-offs.
- Counter-positioning: fails. A&M is not hurt by this product, it already earns from it.
- Cornered resource: deeds, MLS and AVMs are public, and the price-effect model is now reproducible from WP 366.
- Brand: nonexistent.
- Process power: the first real track record, in one state, could give a head start measured in quarters. A Big Four-class firm can match it.

The only moat that could be reached is standard-setter status: an open, published methodology that a county ordinance or state statute names as the standard of record (critic's item 5). That requires giving the method away, which fits a research practice and not a software business.

## 7. Why now (reduced)

Kept:

- WP 366 (10 Sept 2026) gives the first national causal estimate, so negotiations now have a number for deductible and ring.
- Lump-sum checks drew "bribe" coverage (NorthPoint, 2026), so developers are visibly looking for a structure that does not look like a payoff.
- 108 ZIPs host a large data center, up from 12 in 2015 [D].

Dropped: NY and Texas pauses (grid and water actions that pause approvals, not demand for guarantees) and HB4319 (referred to Rules 1/14/2026, nothing since [C]).

Honest read: the problem's why-now is strong; the product's is weak, because the same 2026 conditions produced buyouts.

## 8. Bottom-up market [I]

- Contested projects: about 240 a year, annualizing Data Center Watch's Q1/Q2 2026 counts [D].
- Guarantee-compatible subset: rings of 500-5,000 homes, an independent (non-hyperscale) developer, no buyout path. Guess 5-10% of 240, which is 12-24 programs a year.
- Realistic early capture: 10-30% of that, so 1-5 programs a year at about $200k first-year revenue.
- Result: $0.2-1.0M a year at best, in years 2-3, and $0 until a first signed rider. Adding Option D reviews at 10-20 a year x $15-30k adds $0.15-0.6M, at services margins.
- Ceiling: low single-digit millions a year. No evidence anyone has paid for any of it.

## 9. Competitors and edge

- Alvarez & Marsal: productized VAPs, Norfolk Southern as reference, court recognition, GIS and outreach, real-estate and environmental economics practice [V for NS; rest C].
- Epiq, Kroll, JND: neutrality, bank relationships, no valuation models [D].
- Title, escrow and appraisal-management firms: closing-table access and data.
- Developer commissioned studies (Align/LaSalle, Sabey/Integra), free research (Berkeley, Realtor.com, GMU, NAR), and law-firm CBA templates (Columbia, FAS).
- Edge left: a data-center-specific, published control-index method, a lower price point than A&M for sub-500-home programs, and speed. None is defensible against an incumbent that decides to serve the segment.

## 10. Kill and revive triggers

Kill triggers from the dossier, status now: (1) counsel says insurance in 2-3 states: partly met in NY; (2) no developer obligor after 10 calls: untested; (3) developers prefer buyouts: met in public evidence; (4) no county rider in 6 months: untested.

Revive only if one of these appears:

1. A signed LOI from an independent developer for a ring of 1,000+ households and a fee of $150k+, plus counsel's non-insurance view in that state.
2. A county ordinance or state statute that mandates a data-center value guarantee and names or permits a neutral administrator.
3. A written white-label or subcontract offer from A&M, Epiq or Kroll worth $100k+ a year.
4. A back-test on deed and MLS data (including one non-disclosure state) showing expected payout under 30% of escrow with a 10% deductible.

## 11. Riskiest assumption and the 2-week test

Riskiest assumption: someone with authority and budget (developer, county, or the lawyers who draft the development agreement) will put a third-party-administered pay-on-sale value guarantee on a ring of 500+ homes into a real agreement, instead of a buyout, bond, check or commissioned study.

Test, 14 days, about 15-20 founder hours, $0:

1. Days 1-3 (desk): build a list of 30 live matters with a pending vote in the next 6 months and a documented public ask for property-value protection (Lysander NY, St. Joseph and Delaware IN, Festus, Mason, Coal City, Howell, Hazle, Decatur, Dowagiac and others). For each: home count in the ring, what the developer has offered, who administers it, who pays, county attorney.
2. Days 3-12 (calls): 20 interviews, 30 minutes each, honestly as a student researcher (no company claim). Mix: 8 county attorneys and planners (they take public calls), 6 land-use or real-estate counsel who draft development agreements, 3 independent developers' community-affairs staff, 2 bank trust or escrow officers, 1 ex-VAP appraiser or economist (for the white-label question).
3. Script: ask current-state questions first (what was done about property values, who decided, who administers, what did it cost). Then show a one-page term sheet (1-mile ring, 10% deductible, $3.5k escrow per home, $40-75k set-up, $100-150 per home) and ask three questions. Why not a buyout, bond or study? Who owns this budget? Will you read a 2-page draft rider?
4. Pre-registered pass: at least 3 of 20 name a live matter where a guarantee is on the table with no administrator in place and a named budget owner, and at least 1 agrees in writing to read the draft rider. Pre-registered kill: 0-1 live matters, or most say buyout, bond or study, or A&M or an equivalent is already on the matter.
5. If fewer than 5 of 40 outreach attempts get answered, record it as "no access", which is a finding about the founder's ability to sell this and not about demand.

## 12. Verification notes

- Read myself this pass: Berkeley WP 366 abstract (PDF text), Norfolk Southern VAP page. Searches: no data-center-specific VAP found; Howell Twp's "property value protection plan" is a sell-to-developer option at appraised value +1% (single news report).
- Taken from critics with primary sources: NY DFS opinions, Poletti/Lee County deck, FAS report (zero guarantees in ten agreements was the critic's own text search, so a differently worded clause could have been missed), Neodesha study, Lysander list, St. Joseph and Delaware County reporting.
- Unverified: A&M multi-state list (403), East Palestine claim counts, Nscale buyout counts beyond 15 of 53, Gallup breakdown.
- Payout table is my model, not data; it assumes Normal noise and ignores adverse selection.
