# C12 refined: Outside Care Plan (P108) after three "fatal" critiques

Written 2026-10-18. Tags: (S) primary text read, (A) my arithmetic or assumption, (U) secondary, aggregator or search summary. "(S, critic)" means a critic read the primary text and I did not re-open it.

## 1. Verdict, plainly

**alive = false.** I tried to rebuild this idea against every critique. The rebuilt version is a real product, but it is a fee business capped near $45M of revenue in a good case. The only route to $100M is to book risk premium as revenue, and no buyer has ever bought that from a third party.

Three numbers decide it:

1. **The fee pool is too small.** Heritage's USMS contract is the only large fee benchmark. Over Oct 2017 to Sep 2024 USMS spent about $398M medical plus $222M drugs and paid Heritage about $40M, which is **6.5% of managed spend** or about $5.7M a year (S, DOJ OIG 25-096, read myself). Take the whole off-site spend universe I can find (about $2.1-3.8B across state prisons, jails and federal, A). The fee pool is $137-247M at 6.5% and $210-380M at 10%. **$100M of fees means 26-73% share, and incumbents already hold the best accounts.** Round 1's rule says to call a path that needs over 20% share dead.
2. **The premium path has no buyer.** $100M of premium is only 2.6-4.8% of the universe, so the arithmetic works. But it needs a DOC, county or vendor to hand hospital-payment risk to a startup at a fixed price. Primary evidence runs the other way:
   - Virginia's first fully capitated vendor quit after losses, Corizon used a 120-day exit, and the DOC then carved inpatient care out to keep the Medicaid money (S, critic, RD210).
   - Centene, the best-capitalized would-be risk-bearer, sold Centurion in January 2023 after a $259M impairment (S, 8-K, read myself).
   - Florida chose cost-plus at 11.5% markup over risk transfer (S).
   - Every 2026 award swapped one full-service vendor for another.
3. **Risk pays too little for its variance.** $100M of premium at 5-8% margin is $5-8M of profit and needs $15-20M of surplus (A). One Oregon-sized +17% swing on a $100M book is a $17M loss, 2-3x a year's margin (S for Oregon, A for the book).

## 2. What I verified myself

| Item | Result |
|---|---|
| DOJ OIG 25-096 | $398M medical + $222M drugs + about $40M Heritage fee, Oct 2017 to Sep 2024. Fee is 6.5% of managed spend. The 2017 award was 1 base year plus 9 options, expiring 2027. Heritage reprices at the lowest of Medicare, the network rate or billed charges under 18 U.S.C. 4006, so the statute is the discount. The dossier's "about 10%" divided the fee by medical spend only. |
| Centene 8-K, Feb 2023, Ex. 99.1 | Centurion ("its prison healthcare business") divested January 2023, $259M impairment. HealthSmart divested too, $36M impairment. The idea file and gate still call Centurion a Centene subsidiary, which is stale. |
| CDCR SD25-00019 (Govly listing, U on detail) | Posted 2023-10-04. **Responses due 2026-10-30**, which supersedes the dossier's 8/18 date. Scope: specialty provider network plus prior authorization, with performance guarantees, up to 5 years plus five 1-year extensions, value not stated. No risk transfer is described. It is 12 days out, so a startup cannot bid it. Its award notice is the best free evidence on what a big buyer will unbundle. |

## 3. Critique by critique: what I changed, what survived

### Critique 1: every piece except risk transfer already has an entrenched, cheap incumbent
UMR/Optum, BCBS, Heritage, Prime and Safety Net Connect already sell the fee layers. Statute supplies the discount. Medicaid and state models own inpatient care. The on-site vendors can answer cheaply.

- **Changes tried:**
  - Move the first payer from state DOCs to county jails, through sheriffs' associations (one decision covers 70-100 counties), and to on-site vendors, who actually hold off-site risk in the 14 all-inclusive or risk-share states (Pew, S).
  - Stop selling "Medicare-plus discount", which statute gives away.
  - Sell payment certainty instead: a segregated hospital-payment trust, so a vendor bankruptcy cannot strand hospitals (Georgia 750+ providers claiming $75.6M, Michigan $35M+; S).
- **What is left:** a good product, but it is a fee product in the exact layer Heritage ($40/claim in Limestone, S), Prime (no-savings-no-fee, NC since 2011, WI in Aug 2025) and UMR (Nebraska's template is $19.50 per person per month) already occupy. The one differentiated piece is risk transfer, and the buyer has declined it.

### Critique 2: no buyer has asked for risk transfer, the price anchor is free, the economics fail on variance, and the sales cycle is brutal
- **Changes tried:**
  - Put the risk behind a fronting carrier and reinsurer, run as an MGA or as a county "level-funded" plan. The county stays the risk-holder, which matches revealed preference. This removes most of the capital need and most of the insurance-licence problem, since the carrier holds the insurance and the company needs a TPA/MGA licence.
  - Use sheriffs' associations to raise the number of decisions per year.
- **What is left:** the capital problem goes away and the revenue goes with it. An MGA keeps about 15-20% of premium (gate, A), so $100M of revenue needs $500M+ of premium, 17-25% of the whole universe. That is worse, not better. Association decisions are still RFPs, and Prime already holds NC, WI and FL.
- **Sales cycle:**
  - About 3 eligible state procurements a year at a 20-30% win rate (A) means 3-4 state wins takes 4-6 years or more.
  - Tennessee was protested, re-solicited and sued; Illinois has gone a year with only emergency or one-year deals.
  - Nebraska's plain claims RFP drew five bidders.

### Critique 3: the structure was tried by states and reversed, the credibility gap is too wide, and the incentive logic is flawed
- **Changes tried:**
  - Use a state-funded imprest account, so there is no float and hospitals see the state's credit rather than ours.
  - Drop the fixed-PMPM-with-denial-incentive design and use pass-through claims with a +/-5% risk corridor.
- **What is left:**
  - The imprest account fixes credibility but removes the reason for the 15-day-pay discount to depend on us. The state can pay in 15 days by itself.
  - Pass-through with a corridor is a fee manager. That is the honest fix for the gatekeeper-profits-from-denial flaw, and it is exactly what the dossier, Heritage and UMR already are.
- **Corrections that cut both ways:**
  - HB 913 as enacted has no payment cap (S, critic: FHA report and enrolled text). Only county-specific 110%-of-Medicare caps passed (Jefferson, Lake, Indian River, Polk per a tracker). So statute is a local substitute (Florida counties, Utah HB 321, Georgia emergency care, Arizona), not a universal one.
  - The flip side is that hospitals defend their pricing power (the FHA testified against the Medicaid-rate cap), so a startup does not get a cheap discount either.

## 4. The strongest honest version (what I would build if forced)

**Off-site payment trust and claims manager for jails and vendors.** It is a licensed TPA that holds off-site claims funding in a segregated trust and pays hospitals within 15 days at pre-agreed Medicare-plus rates. It adds network and utilization review with published referral timelines, and a risk corridor held by a reinsurer rather than by the company.

- **Wedge:** counties of 150-1,500 average daily population that lost or fear losing a vendor, sold through state sheriffs' associations without a Prime-type program. Second door: on-site vendors, as the off-site subcontractor named in re-procurement bids (IL, IN, TN, AL, CDCR are all live in 2026-27).
- **Payer and signer:** the county jail-medical line, signed by the sheriff and county commissioners or the association board. A vendor's VP of contracts for the subcontract. DOC CFOs only after a track record.
- **First product:** the hospital-payment trust plus TPA, sold as a contract clause counties can demand in re-procurement. This is the product-level answer to the Georgia and Michigan arrears.
- **Pricing:** about 6-8% of managed spend all-in (admin of roughly $20 per person per month, Nebraska's template, plus a 25-30% share of documented savings against trailing baseline). No risk premium.
- **Sequencing:**
  1. TPA licence plus URAC.
  2. Five hospital contracts per target county.
  3. One association program.
  4. Add a stop-loss MGA layer.
  5. Bid state network/utilization-review lots (CDCR-type) from year 3.
- **Moat (7 Powers), honestly:**
  - Switching costs and process power only, after 3+ years of claims history and hospital contracts.
  - Scale economies need over $500M of managed spend, which this plan does not reach.
  - Counter-positioning is weak because the vendor response is cheap (add a network and a stop-loss rider).
  - So the moat is **weak**.

## 5. Bottom-up market (A unless S)

| Segment | Off-site managed spend | Basis |
|---|---|---|
| State prisons, DOC holds risk | $1.1-1.8B | $11B grown from Pew's $8.1B (FY2015), 20-27% off-site, minus Medicaid-shifted inpatient and vendor-risk states (dossier; gate says $1.4-2.0B) |
| Jails | $0.6-1.5B | 667,700 ADP x $6-9k, 15-25% off-site; counties often hold only the tail above vendor caps (U) |
| Federal (USMS, BOP) | about $0.4-0.5B | USMS about $90M/yr medical plus drugs (S, derived); BOP $327M outside medical in FY2014 (S, dossier) |
| **Universe** | **$2.1-3.8B** | midpoint about $3.0B |

- **Fee pool:** 6.5% gives $137-247M; 10% gives $210-380M. Only the part already outsourced to a TPA is addressable, so assume 50% or less.
- **Premium pool:** $100M of premium is 2.6-4.8% of the universe, but needs an unbundled risk buyer. Per-state anchors: Virginia $62M off-site, Oregon about $41-48M, NC UNC network $29-32M, Texas hospital line $137M (FY2012).

## 6. Cases for the rebuilt fee version (year 6-7)

**Median, conditional on winning a first contract: about $10M.** About half of paths never get that far.

| Component | Revenue |
|---|---|
| 2 association programs, 120 counties, about $40M managed at 8% | $3.2M |
| 1 mid-size state network/UR/claims lot, 12,000 people at about $40 PMPM | $5.8M |
| 3 large county systems at about $0.6M | $1.8M |
| **Total** | **about $10.8M** |

**Upside: about $45M.**

| Component | Revenue |
|---|---|
| 2 state lots, 25,000 people each at about $35 PMPM | $21M |
| 5 association programs, 100 counties each, ADP 150, $1,500 off-site per person, 8% | $9M |
| 10 large counties at about $1.2M | $12M |
| Stop-loss MGA commissions, 15% of about $40M premium | $6M |
| **Total** | **about $48M, reported as $45M** |

**Tail, $100M+:** needs an unbundled fixed-price risk contract from a state or vendor, plus a fronting carrier at or under 3% of premium, plus 3-4 statewide wins. Joint probability is **3% or less**.

- **My distribution:**
  - $0: about 50%.
  - $5-15M: about 30%.
  - $25-50M: about 17%.
  - $100M+: 3% or less. The dossier's 10% was before the primary reads on Virginia, Centene and HB 913.
- **Upside assumptions, each only moderately likely:**
  1. Sheriffs' associations in 5 states adopt one program.
  2. Two state network/UR lots go to a new entrant rather than Heritage, Anthem or UMR.
  3. Hospitals sign Medicare-plus deals for 15-day pay at county scale (Limestone pays 140% of Medicare, S).
  4. A reinsurer backs the corridor layer.

## 7. Riskiest assumption and the 2-week test

**Riskiest assumption:** a state DOC, large county or on-site vendor will sign, or at least write down a budget line for, a fixed per-member price in which a third party carries hospital-payment risk, at a price above what statutory or Medicaid-rate repricing already gets them. Nobody has shown it, and everything above hangs on it.

**Test (no money, no licence):**
1. **Days 1-3, documents.**
   - CDCR SD25-00019 solicitation and any addenda or Q&A: is there a risk or capitation lot?
   - Nebraska RFP 120174 O3 award and cost proposals: what did UMR charge?
   - Oregon's new off-site billing contract: was it a fee contract or a risk contract?
2. **Days 2-12, 20 structured calls** with a one-page term sheet (fixed PMPM, 15-day pay, +/-5% corridor, Medicare+40%):
   - 6 DOC finance or health-services offices (OR, VA, NC, NE, WA, ID).
   - 5 on-site vendor contract heads.
   - 5 sheriffs' association executives or jail administrators.
   - 4 hospital contracting executives.
3. **Two reinsurer or MGA calls** for an indicative stop-loss rate.

**Pass:** at least 2 of the 20 buyers, including at least one state or vendor, say in writing that they would pay a premium for risk transfer and name the budget line, and one reinsurer quotes at or under 3% of premium. **Anything less confirms dead.** I expect a fail. The honest value of the test is that it costs two weeks, not two years.

## 8. What would resurrect it (tripwires)

Merged from the three critics' lists, and checkable in public:

- CDCR SD25-00019 award (bids due 2026-10-30) includes any risk transfer or a performance guarantee backed by a new entrant.
- A state or large county RFP or contract with a third party holding hospital-payment risk at a fixed price.
- Nebraska or USMS (recompete after FY2027) pricing well above about $20 PMPM or 6.5%, or UMR, BCBS and Heritage declining to quote a risk-bearing version.
- A state insurance regulator opinion that a fixed-PMPM government off-site contract needs only a TPA licence.
- A reinsurer quote with stop-loss at or under about 3% of premium, and a hospital-system LOI at 125-140% of Medicare with 15-day pay that survives termination for convenience.
- Evidence that OBBBA work requirements and six-month redeterminations push inpatient stays back onto DOC budgets (critic 1 found only an advocacy analysis).

## 9. Corrections to the record

- Centurion was sold by Centene in January 2023 (S, 8-K). Drop "Centene's Centurion" as a competitor and as a backer.
- The Capitolist Florida cost-plus article appears to date from about 2019. It is not a 2026 signal and it lists Centene as parent.
- HB 913 as enacted has no payment cap.
- Pew's count is 17 states delivering care directly and 4 on a university model. The idea file's "36 outsource, 14 in-house" does not match.
- The Heritage fee ratio is 6.5% of managed spend (S), not about 10%.
- SD25-00019 responses are due 2026-10-30, not 8/18.
- Unconfirmed and not relied on: Wellpath's reported $40M negative gross profit on Michigan and Georgia (aggregator), Maryland's 2012 stop-loss terms, the San Diego NaphCare $20.6M cap, and the insurance-regulator opinions (all search summaries).

## 10. Where the energy should go instead

The pool's live candidate is Day 21 (the gate's one strong pick). This idea is parked, not worth a build. The 2-week test above is cheap enough to run if nothing better is available.
