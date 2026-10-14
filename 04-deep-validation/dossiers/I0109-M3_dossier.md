# I0109-M3 Dossier: Auto Loan-End Event Exchange for Add-On Refunds

Research date: 2026-10-13. Labels used below: FINDING (sourced), INFERENCE (my reasoning), GAP (not found).

## 1. Bottom line

**Verdict: do not advance as written. At best a small niche service; the venture-scale exchange is unproven and partly pre-empted.**

The prior competitor check marked this idea "gap" because its search budget was exhausted. That conclusion is wrong. Lender-side tools for the same job (payoff, repossession, charge-off refunds) already exist, are funded, and are growing:

- **F&I Sentinel**, PE-backed, with deep integration into the two big contracting platforms.
- **Lender Compliance Technologies (LCT)**, which launched a CUSO for credit unions on Sept 9, 2026, a month ago.
- **Allied Solutions RefundPlus**, a credit-union-focused product that explicitly covers charge-off.

The legal demand driver is real: regulators and state AGs do punish lenders for missed refunds. The remaining open space is narrow: pure contingency pricing, a charge-off focus, and an administrator-paid exchange. Nobody has shown administrators or carriers will pay.

## 2. Industry metrics (Step 0)

Operators here benchmark on:

- cancellations processed per year
- provider and administrator connections
- lenders served
- refund cycle time (the CFPB cited an 84-day average)
- cash recovered per eligible event
- regulator findings per exam

## 3. Market context and bottom-up sizing

**FINDINGS**

- Credit unions held $485.4B of auto loans at 2026Q2. There were 4,214 credit unions. 748 had assets over $500M. The 90th percentile asset size was $1.136B and the 75th was $281M. The system auto delinquency rate was 81 bps. ([NCUA Q2 2026](https://ncua.gov/files/publications/analysis/quarterly-data-summary-2026-Q2.pdf))
- Credit union used-auto charge-offs hit 1.11% over 12 months to March 2025, a record. ([CU Times on NCUA remarks](https://cutimes.com/2025/07/16/ncua-chair-kyle-hauptman-warns-of-rising-credit-risks)) Auto balances are flat to down, falling from 34% of credit union loans in 2019 to 28% in 2025. ([CU Times](https://www.cutimes.com/amp/2026/03/23/the-case-of-the-vanishing-credit-union-auto-loans/))
- US repossessions were 1.73M in 2024, the most since 2009 ([CNN via KTVZ](https://ktvz.com/money/cnn-business-consumer/2026/02/05/elizabeth-warren-launches-probe-into-booming-car-repossessions/)). Cox forecast about 1.8M for 2025 ([CURepossession](https://curepossession.com/how-many-cars-will-be-repossessed-in-2025/)). Fitch's subprime 60+ delinquency index set a record of 6.90% in January 2026 ([Auto Remarketing](https://www.autoremarketing.com/?p=107747)).
- The idea's "roughly 3M repossessions a year" is not supported. The higher figures come from repossession-assignment counts, which measure something different from repossessions ([CURepossession](https://curepossession.com/?p=34676)). Use about 1.7 to 1.8M.
- Add-on incidence at dealers: service contract penetration 44% and GAP 38% in Q3 2025, new and used combined ([StoneEagle via AutoSuccess](https://www.autosuccessonline.com/?p=68599)). No credit-union-indirect-specific rate was found.
- Allied reports an average GAP refund of $380, driven mostly by early payoffs ([Allied, Feb 2025](https://www.alliedsolutions.net/resources/allied-insights/the-gap-trap-blind-spots-that-could-cost-lenders-big)). Colorado credit union settlements imply GAP-only refunds of about $165 to $310 each, mostly payoffs: Ent $5.16M over 19,011 consumers ([CFM](https://www.consumerfinancemonitor.com/2022/03/21/colorado-attorney-general-enters-into-settlements-with-credit-unions-requiring-refunds-of-gap-fees/)), Red Rocks $312K over 1,328 ([Law Week Colorado](https://www.lawweekcolorado.com/?p=81522)).

**INFERENCES**

- *Reachable customers.* A credit union with at least $200M of auto loans is roughly a $1B-asset institution at the system-average mix (auto is about 19% of assets: $485B of $2.5T). That implies roughly 400 to 450 credit unions, with a plausible range of 300 to 600 depending on auto concentration. Credit unions above about $5B (WSECU, for example) already buy from vendors. I could not count community banks.
- *Per-customer spend.* The idea's own model yields $40K to $47K a year per $1B-auto lender. At 450 lenders that is about $19M a year at 100% penetration. At a realistic 5 to 10% penetration after three years it is about $1M to $2M a year.
- *Cross-check from event counts.* Take 300K to 500K credit union auto charge-off events a year (my estimate). Apply 45% with add-ons, $700 unearned, and 60% unclaimed. That gives about $57M to $95M of unclaimed refunds and a fee pool of about $13M to $21M at 22.5%. The two methods converge on roughly $15M to $20M a year. That is a small company, not a venture outcome, unless Stages 2 and 3 work.
- *The $700 and 60% inputs are unverified.* Observed refunds run lower: $165 to $310 for GAP alone, and $380 average in Allied's data. The "60% unclaimed" figure has no source.

## 4. Competitors (Steps 4, 6, 7)

| Player | Evidence | Overlap |
|---|---|---|
| **F&I Sentinel** (Tallahassee; Calera Capital majority recap, March 2022) | Acquired Express Recoveries from Cox in Feb 2024 ([release](https://staging1.fandisentinel.com/?p=18844); [CB Insights](https://www.cbinsights.com/company/fi-sentinel/financials)). Integrated into Dealertrack and RouteOne, Jan 21, 2026 ([Auto Remarketing](https://www.autoremarketing.com/subprime/dealertrack-routeone-integrate-with-fi-sentinel-to-streamline-compliance-validation/)). Claims 1.75M cancellations a year, 150+ lenders and 600+ administrators (Inc. 5000 for the fourth year, Aug 2026; aggregator, not the company release: [BriefGlance](https://briefglance.com/articles/the-compliance-engine-how-one-firms-growth-signals-a-sea-change-in-auto-finance)). FAIRRCalc is a real-time refund-quote engine over a 190,000-form repository ([sheet](https://fandisentinel.com/wp-content/uploads/2025/08/FAIRRCalc-Solution-Sheet.pdf)). Sells "Look Backs" audits ([post](https://fandisentinel.com/?p=16600)). | **High.** It is already the closest thing to a neutral lender-to-administrator hub. |
| **LCT** (Dallas, founded 2021) | Refund Control: 1M+ cancellations, 100K+ a month capacity ([Jan 2026](https://www.autoremarketing.com/subprime/lender-compliance-technologies-passes-1-million-processed-vpp-cancellations/)). LCT CUSO launched Sept 9, 2026 with One Washington Financial (WSECU's CUSO), AKUVO's CEO and SWBC. Nearly 30 credit unions, 5M+ members ([Auto Remarketing](https://www.autoremarketing.com/?p=131056)). Aligns with the new GAPA/SCIC/MVPPA quote-portal standards ([Nov 2025](https://www.autoremarketing.com/subprime/lcts-refund-control-now-aligns-with-new-industry-standards-set-by-3-associations/)). | **High.** It has the idea's CUSO-distribution model already running. |
| **Allied Solutions RefundPlus** | Covers early payoff, repossession, total loss, charge-off and abandonment, plus a refund lockbox. Credit unions are the main customer base; 2022 NAFCU Innovation Award ([page](https://www.alliedsolutions.net/solutions/refund-plus)). | **High** on charge-off. |
| Dealertrack and RouteOne | Distribution layers, now partnered with F&I Sentinel. | Gatekeepers |
| Origence | No refund product found. | Partner or channel |
| In-house teams | A "back-end refund specialist" job posting surfaced in search but had expired when I opened it. | Existing workaround |

**Flags**

- Vendor figures conflict. LCT cites 600+, 800+ and 900+ provider connections on different pages, and workload reductions of 80%, 90% and 95%. F&I Sentinel's own site says 99+ lenders against 150+ in the August 2026 summary. Treat all as marketing.
- **No competitor discloses pricing.** I found no evidence that anyone offers contingency-only recovery. That is the idea's one clear Stage 1 differentiator, and it is unproven rather than confirmed absent.

**Moat view**

- Switching costs are moderate (workflow plus audit trail).
- Provider connections are the key scale asset, and incumbents have 4+ years of lead.
- Their network effects are same-side, not cross-side.

## 5. Demand and willingness to pay

**FINDINGS (hard)**

- CFPB Spring 2022: failing to request unearned GAP refunds from administrators and apply them after repossession is unfair. Refund errors inflated deficiency balances by hundreds of dollars ([CFPB blog](https://consumerfinance.gov/about-us/blog/overcharging-for-add-on-products-on-auto-loans); [Hudson Cook](https://hudsoncook.com/article/refunds-of-gap-and-other-voluntary-protection-products-a-federal-udaap-issue/)). Fall 2024: servicers "failed to refund" unused add-ons after early termination ([NIADA](https://niada.com/dashboard/cfpb-releases-supervisory-highlights-on-auto-finance/)).
- Colorado AG GAP actions: Wells Fargo $9.58M in Colorado and $82.4M multistate ([Law Week](https://www.lawweekcolorado.com/?p=66621)). Credit union settlements: Ent, Premier Members, Credit Union of Denver, Westerra ($846K over 3,422; [Colorado AG](https://coag.gov/press-releases/10-27-21)), Red Rocks, and Bellco and Canvas ($4M plus $100K penalty each) ([Consumer Finance Monitor](https://www.consumerfinancemonitor.com/2023/01/11/credit-unions-settle-gap-fee-refund-cases-with-colorado-attorney-general/)).
- Liability is retroactive: Red Rocks covered Oct 2014 to Jul 2020, and Wells Fargo 2008 to 2018.
- Massachusetts consent orders in Nov 2024 required IronHorse to refund unearned GAP after repossession, with a $50K penalty ([Goodwin](https://www.goodwinlaw.com/en/insights/blogs/2024/12/massachusetts-division-of-banks-issues-consent-orders-over-vehicle-repossession-practices)).
- Vendors have real traction (section 4). A funded, growing vendor set is itself evidence of paid demand.

**INFERENCES**

- Demand is **compliance-driven fear**, not "found money." Credit union buyers purchase audit-readiness. This confirms the earlier sharper-angle note that the pitch is liability reduction.
- The "small lenders rarely chase it" claim has no direct evidence. Colorado shows credit unions failed on payoffs. For repossession and charge-off the evidence is the CFPB findings.

**GAPS**

- Actual claim rates on repossession and charge-off refunds.
- Forum complaints and RFPs. Search returned no Reddit threads or RFPs.
- Competitor pricing.
- The "dealer chargeback stalling" claim is unverified.

## 6. Regulatory and liability landscape

**FINDINGS**

- State law is a patchwork.
  - New Jersey, P.L. 2019 c.181: refund within 60 days of termination, "without requiring the borrower to request." The creditor may apply it to reduce the amount owed, and it may be paid to the creditor or administrator. The statute does not mention notifying the administrator ([NJ text](https://pub.njleg.gov/Bills/2018/PL19/181_.HTM)).
  - Alabama is similar.
  - Texas §354.007 lets the holder refund within 60 days or send instructions to the administrator within 30 days ([Texas](https://texas.public.law/statutes/tex._fin._code_section_354.007)).
  - Colorado §5-9.3-106, effective Jan 1, 2024, covers repossession and sets assignee and administrator reimbursement mechanics ([statute](https://colorado.public.law/statutes/crs_5-9.3-106)).
  - California AB 2311, effective Jan 2023 ([F&I Sentinel](https://staging1.fandisentinel.com/?p=16110)).
- **The informational thesis is validated.** The creditor is often the only party who knows the loan ended, and administrators and dealers "won't initiate the cancellation" without notice ([Allied state compilation, Sept 2020](https://lists.simplelists.com/cu_fly-in_attorneys/cache/21034478/2.pdf/)). The market response so far has been lender-side tools, because regulators put the burden on creditors.
- **Federal retreat is real.** The CFPB brought one auto enforcement action in 2025, terminated the Toyota Motor Credit consent order in May 2025, and proposed raising the larger-participant threshold ([Goodwin](https://www.goodwinlaw.com/en/insights/publications/2026/03/insights-finance-cfs-yir-auto-loan-origination-and-servicing)). A GAO-based report puts staff down about 88% (secondary: [GetOutOfDebt](https://getoutofdebt.org/242299/cfpb-downsizing-gao-report-consumer-impact)). State AGs are active: 41 AGs settled with Credit Acceptance on Sept 17, 2026 for about $710M ([Jenner](https://www.jenner.com/en/news-insights/client-alerts/regulation-in-the-midst-of-deregulation-state-ags-fill-the-federal-enforcement-void)).

**INFERENCES (need counsel)**

- *Who owns the money.* The refund legally belongs to the consumer and must be credited to the deficiency (Hudson Cook, above). It is not simply "the lender's own cash." The lender's gain is a smaller write-off. When the refund exceeds the deficiency, or no deficiency exists, the lender gets nothing.
- *The fee.* A contingency fee has to be paid from the lender's funds. Wisconsin guidance bars deducting processing fees from the customer's refund ([Wisconsin DFI](https://dfi.wi.gov/Pages/FinancialServices/LicensedFinancial/GAPComplianceInformationForDealers.aspx)).
- *The free retrospective audit.* It creates a written record of past noncompliance and invites UDAAP exposure. That is a sales obstacle and a legal-privilege problem for the vendor.
- *Pooled cross-lender data.* It raises Fair Credit Reporting Act (FCRA) consumer-reporting-agency questions if the data is used for eligibility decisions. De-identified actuarial use is lower risk. See [NCLC](https://library.nclc.org/article/data-gatherers-evading-fcra-may-find-themselves-still-hot-water). The Gramm-Leach-Bliley (GLBA) service-provider exception does not settle FCRA status.

## 7. Stage 2 and 3: the exchange

- *Administrators paying $2 to $5 per attested event.* GAPA, SCIC and MVPPA published minimum standards for refund-quote portals in late 2025, aimed at vendors, with administrator and lender input ([SCIC](https://go-scic.com/2025/10/scic-publishes-new-minimum-standards-to-drive-efficiencies/)). The industry is standardizing through trade associations and incumbent vendors. F&I Sentinel already links 600+ administrators. I found **no evidence that administrators pay for lender-attested intake**.
- *Carriers and reinsurers paying $50K to $250K for termination curves.* No analog found. StoneEagle's public benchmark reports cover dealer F&I profit and penetration, not cancellation curves ([StoneEagle](https://www.se-fi.com/post/stoneeagledata-record-breaking-f-i-performance-in-q1)). Dealer-owned reinsurer float economics were not documented in reliable sources.
- *Incentive problem.* Whoever holds unearned premium gains from slow refunds. That makes administrators and dealer reinsurers payers with mixed incentives. This inference is unverified.
- *Open-schema strategy.* An open schema competes with association standards and vendor APIs that already exist.

## 8. Why-now check

- **Real:** record subprime stress, repossessions at 2009-era highs, state AGs and private plaintiffs filling the federal gap, and the California CARS Act (effective Oct 2026) and the NY FAIR Act as signs of tightening state action ([Goodwin](https://www.goodwinlaw.com/en/insights/publications/2026/03/insights-finance-cfs-yir-auto-loan-origination-and-servicing)). Sen. Warren opened a voluntary inquiry into repossessions at 12 lenders in Feb 2026 ([CNN via KTVZ](https://ktvz.com/money/cnn-business-consumer/2026/02/05/elizabeth-warren-launches-probe-into-booming-car-repossessions/)).
- **Weak for this segment:** credit union delinquency is 0.81% versus about 6.9% in subprime ABS. Most repossession growth sits at finance companies, not credit unions.
- **Unverified:** the LLM cost claim ("cents per case"). Incumbents already hold form repositories and automation.
- **Net:** the why-now supports the category. It does not support a new entrant's edge over vendors launched in 2021 to 2024.

## 9. Synthesis

**Durable advantages of the idea**

- Contingency pricing removes budget friction, if the lender accepts it.
- A charge-off and repossession specialism could beat generalist payoff-first tools.

**Structural vulnerabilities**

- Three funded incumbents already sell the same core function to credit unions.
- LCT's CUSO covers the idea's cooperative-distribution plan.
- Stage 2 and 3 payers are unproven.
- The refund legally belongs to the consumer.
- The fee pool for the credit union segment is roughly $15M to $20M a year.

**Trajectory:** incumbents are consolidating distribution (Dealertrack, RouteOne, CUSOs, associations).

| Scenario | Probability | Driver |
|---|---|---|
| Bull: exchange adopted | 5% | An incumbent or association partners with it |
| Base: small contingency service, $0.5M to $2M a year | 35% | Niche credit union and agency channel |
| Bear: no traction or acqui-hire | 60% | Incumbents bundle charge-off recovery; sales cycles stall |

## 10. Cheapest tests before any build

1. Ask LCT, F&I Sentinel and Allied for pricing and whether they offer success-fee or charge-off recovery.
2. Interview 10 credit union collections managers for the current repossession refund workflow and claim rate.
3. Ask three GAP administrators whether they would pay for structured loan-end notices.
4. Get a short opinion from counsel on contingency fee, deficiency offset, and the audit-privilege structure.

## 11. Unresolved items

- No competitor pricing.
- No claim-rate data.
- No community-bank count.
- No cross-lender event data.
- The California SB 766 cite in the parent idea remains unverified; I did not recheck it.
