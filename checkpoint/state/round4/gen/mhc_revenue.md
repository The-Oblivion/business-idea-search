# Round 4 / lens: home-health revenue and payer friction (MHC insider access)

Date: 2026-10-26. 33 searches/fetches run this session. Anything marked (unverified) or (general knowledge) was NOT confirmed this session; check before relying on it.

## Read this first: the MHC lead may be wrong

- The brief says MHC is probably "MHC Area N, LLC" (Riverview, Boca Raton, Fort Lauderdale).
- A search of the NPI registry shows **MHC Area 9, LLC (Boca Raton) doing business as "Choice Health At Home"**, with a Tyler, Texas mailing address (npiprofile.com/npi/1245899020; I could not open the page, so this is from the search snippet).
- Choice Health at Home is a Tyler, TX company founded by David Jackson, backed by Trive Capital (homehealthcarenews.com 2022). If that is what the family lead points to, it is NOT a grandfather-founded firm.
- Searches for "MHC Healthcare" returned only an Arizona health center and a Tennessee house-calls firm. Nothing confirmed the grandfather's company.
- **Ask Mom this week for:** exact legal entity names, NPIs/CCNs, states, service lines (Medicare-certified skilled home health vs private duty vs Medicaid vs hospice), payer mix, EHR, and who does the billing. Every idea below is flagged by what it needs from that answer.

## Grounded facts (searched this session)

**Money and margins**
- 12,000+ Medicare-certified HHAs, 2.7M fee-for-service (FFS) users, $16.0B FFS spend in 2024. FFS margin 21.2% (for-profit 23.1%) but **all-payer margin only 5.0%** (MedPAC, March 2026). The profit sits in FFS Medicare; every other payer book is thin.
- CY2026 final rule: -1.3% (about $220M), with a -1.023% permanent and a -3.0% temporary behavioral adjustment (Home Health Care News).
- CY2027 proposed rule (July 1, 2026): +2.4% (about $420M), no new permanent cut, but a 3% temporary adjustment continues. About $4.9B of temporary dollars are still to be recouped (LeadingAge). CMS says 2025 payments exceeded costs by about 34%. MedPAC recommends -7% for 2027. The final CY2027 rule is due around early November (typical timing, unverified).
- Medicare Advantage (MA): 55.4% of beneficiaries nationally (Jan 2026) and about 57% in Florida. MA home-health volume now exceeds FFS (Trella, vendor analysis). MA patients get about 1.8 fewer visits per episode (Commonwealth Fund). MA pays agencies less than FFS (several sources); no Florida per-visit data found.
- Florida had 1,079 home health agencies in 2023 (KFF).
- KFF (Aug 2026): MA plans denied 12% of prior-authorization requests in 2025; 67% of appealed standard-request denials were overturned; denials are rarely appealed. The data are not broken out by service, so **home-health-specific denial rates are unpublished**.
- 2026 study of 51,000 New York external appeals: home health denials overturned more than 78% (commercial/other, not Medicare).

**Review Choice Demonstration (RCD)**
- Six states: Florida, Illinois, Ohio, North Carolina, Texas, Oklahoma. Extended five years from June 1, 2024 (end about May 2029).
- Agencies choose pre-claim review (PCR) or postpayment review. A 90% affirmation rate (minimum 10 requests) unlocks relief. The "25% payment reduction" option was removed.
- FY2024 approval rate 84.4% (FY2023: 85.5%). Level 1 appeal overturn rate 51.6% (FY2023: 35.4%). CMS report dated Sept 16, 2025. I found no Florida-specific rate.
- Palmetto's ranking of top non-affirmation reasons (2021): face-to-face (F2F) encounter not related to the primary reason; F2F note missing. Palmetto targeted-review denials, Jul-Sep 2023: 942 of 5,839 claims denied; F2F (110), no plan of care or certification (105), no order (47), documentation does not show skilled need (40), homebound (32).

**Moratorium, M&A, enrollment**
- **Nationwide 6-month moratorium on new HHA enrollment (including branches), effective May 13, 2026**, expiring about Nov 13, 2026 unless extended; trade press expects extension (Mintz, Greenberg Traurig, HHCN).
- Certified home health deals on pace for 48 in 2026, up 41% (Braff). Broker multiples 5-12x EBITDA (Adastra) or 10-15x (CT Acquisitions); both are broker marketing, so indicative only. A change of ownership (CHOW) takes 4-9 months.
- CMS July 2026 proposal: claw back payments to the date of noncompliance for ALL Medicare enrollment revocations; cut the OASIS submission deadline from 4.5 months to 45 days; clarify that skilled palliative care can be billed under the home health benefit.

**Home Health Value-Based Purchasing (HHVBP)**
- Up to +/-5% of FFS payment. Weights: OASIS 40%, claims 40%, patient survey 20%. A $5M-FFS agency swings up to $250K. Two-year lag. Preview reports came out Aug 20, 2026; recalculation requests were due Sept 4, 2026; final reports come in January.

**Competitors that already exist**
- Enzo Health: $26M raised ($20M Series A, May 2026). "Agentic EHR": intake, AI scribe, QA, order tracking, claim prep. Claims more than 100 organizations.
- Olli Health: $13M raised. OASIS and coding review.
- Claim Health: $4.4M seed (Maverick, Peak XV, YC S25). Intake, eligibility, authorization, payment reconciliation, denial appeals. Claims 30x revenue growth (self-reported).
- SimiTree (SARA chart review plus consulting). Axxess with Home Care Answers (coding and OASIS audits). HHAeXchange RCM (claims 97% payment success, appeals within 72 hours, underpayment recovery listed). Prochant (free denial map and AR audit). ASPR CMS Solutions (Florida home health billing; underpayment case studies for physician groups).
- Underpayment-detection engines (PMM, Lido, Contracto, RecoveAR, Genzeon REVA) are built for physician and hospital fee schedules. None found that model home-health case-mix payments (not exhaustive).
- Outsourced RCM typically costs about 5-10% of collections (CapMinds, vendor claim).

**Florida Medicaid managed care**
- Plans deny home health and personal care claims that are not EVV-verified through HHAeXchange (Humana, Molina, Sunshine notices). Molina denies manual claims since July 1, 2024 (code N821, "visit not found"); Sunshine since Jan 30, 2025. Disputes need electronic clinical notes plus ticket numbers.
- Fla. Stat. 408.7057 runs a state claim-dispute program covering Medicaid prepaid plans and HMOs; interest-only disputes are excluded. 12% interest applies on late claims under the insurer/HMO prompt-pay statutes; a class action alleges SMMC plans withheld interest (unverified status).

**Prior-authorization rule (CMS-0057-F)**
- Since Jan 1, 2026: MA plans must decide expedited requests in 72 hours and standard in 7 days, and give a specific denial reason. First public metrics were due Mar 31, 2026. Prior-authorization FHIR APIs are due Jan 1, 2027.

**Other**
- Late Notice of Admission (more than 5 days): payment cut by 1/30 per day, taken on the final claim (CMS manual).
- Vendors name unsigned physician orders the top cause of held claims. Medicare cannot final-bill until every order is signed.
- Cloned documentation: MAC notices (NGS, 2012) treat identical or template-worded notes as failing medical necessity regardless of source. Compliance commentators (RACmonitor/ICD10monitor, 2026) say AI-generated notes carry the same risk. No home-health-specific AI-note guidance found.

## Cross-cutting setup (about $2,500, my estimate)

Florida LLC; cyber and E&O insurance; HIPAA policies and a security risk analysis; BAA template; a zero-retention model API under a BAA; 2 hours of a healthcare attorney's time to confirm the fee structure. No PHI touches his machine before the BAA is signed. Minimum-necessary data only.

**Legal premise to confirm for any percentage fee (general knowledge, unverified):** Medicare and Medicaid billing-agent rules (42 CFR 424.73 and 447.10) bar an agent whose pay is tied to amounts billed or collected from RECEIVING the payments. Keep all cash flowing into agency-owned accounts, never his. Where a percentage fee is risky, use a flat fee per item (per affirmed packet, per released claim, per dispute).

---

## 1. Payer Truth: contract-compliance audits of Medicare Advantage and managed-care pay

**One-liner:** Port his freight-invoice audit engine to home health. Compare every remittance (835) with the agency's payer contract, recover underpayments for 25% of what comes back, and pool the results into the first payer-performance benchmark for post-acute care.

- **Customer / signer:** Owner or CFO of an independent Medicare-certified agency with $3M+ a year from MA, commercial and managed Medicaid. Florida first.
- **Who pays and budget:** The agency, from found money that was never in its cash forecast. Fee is $2,500 flat for the diagnostic, credited against 25% of recovered dollars. Comparison: RCM outsourcing runs about 5-10% of collections.
- **Problem:** All-payer margin is 5.0% against 21.2% in FFS, so the non-FFS book is where agencies bleed. MA plans pay by their own methods (percent of Medicare PDGM rate, per episode, per visit), re-group claims with their own logic, and load new Medicare rates late each January (general knowledge, to test on MHC's contracts). A remit that "paid" is never re-checked against the contract, so shortfalls close as normal payments. Assumption to test: leakage of 2-4% of MA revenue (a vendor cites up to 4% of net revenue lost to undetected variances).
- **Solution:**
  1. Ingest 835s and the contract PDFs; an LLM extracts the rate terms into a rules table.
  2. Recompute the expected payment per claim with CMS's public home health grouper and pricer, or per-visit tables.
  3. File dispute packets citing contract sections inside each plan's dispute window.
  4. A "January rate-reset watch": check the first 60 days of 2027 remits after the CY2027 final rule.
  5. A payer P&L (contribution margin per plan) so owners know which contracts to renegotiate or drop.
- **Why now:** MA is now the majority payer. MedPAC says FFS margin is 21% but all-payer is 5%. The CY2027 final rule resets Medicare rates on Jan 1, 2027, which is inside his 90-day window.
- **Founder edge:** The freight audit he already built is the same machine (invoice vs contract tariff becomes remit vs contract). He has a blind-test habit for proving recovery rates. The family agency can be pilot and proof (if confirmed).
- **First 10 customers:**
  1. The family agency: BAA, 12 months of 835s and MA contracts, free scan, fee only on recovery.
  2. Three owner-peers through the grandfather's calls.
  3. Two or three through the state home care association and Alliance for Care at Home webinars.
  4. Two through CPAs and healthcare attorneys who serve agencies (no referral fees until counsel reviews).
  5. Two through the mentor's network, and cold outreach to Florida owners with a "free scan of 3 months of remits" offer.
- **Cost to first revenue:** about $3,000.
- **Path to big (bottom-up):**
  - MA home-health revenue is roughly $12-16B (my estimate: FFS is $16.0B and MA volume now exceeds FFS but pays less).
  - At 2% leakage the pool is about $280M a year, and a 25% fee pool is about $70M. At 4% it is about $140M.
  - $10M a year is about 15% of the fee pool at 2% leakage.
  - **$100M is not reachable in home health alone.** It needs hospice, SNF and therapy contracts plus data licensing (benchmarks sold to associations, hospital systems and investors).
- **Who does it today:** Nobody found that models home-health case-mix contracts. Adjacent players: HHAeXchange RCM, Prochant, ASPR CMS Solutions, Claim Health (payment reconciliation), and generic underpayment engines built for physicians and hospitals.
- **Kill test (one week):** If 3 months of the family agency's MA remits show shortfalls under 0.5% of MA revenue, kill it.

---

## 2. Documentation-to-Cash Desk: right documents before Palmetto or the biller sees them

**One-liner:** An EHR-agnostic desk, AI plus humans, that checks Review Choice packets for the exact defects Palmetto denies and chases unsigned physician orders, billed per affirmed packet or released claim.

- **Customer / signer:** Administrator or billing/compliance director at a Florida agency (then TX, IL, OH, NC, OK) in pre-claim review or postpayment review, or holding claims for unsigned orders.
- **Who pays and budget:** The agency, out of PCR coordinator and order-chaser payroll. Pricing is flat per item: about $12-20 per packet affirmed first time, $150 per overturned level 1 appeal, $15-25 per held claim released. This avoids the percentage-fee issue.
- **Problem:** FY2024 approval was 84.4% against a 90% relief target, and 51.6% of level 1 appeals were overturned, so many denials are fixable. The top denial reasons are F2F related and missing certifications or orders. Vendors call unsigned orders the top cause of held claims, and unsigned orders can end as bad debt.
- **Solution:**
  1. Pre-submission checker: tests the F2F date window (within 90 days before or 30 days after start of care), whether the encounter relates to the primary reason, the homebound narrative, and signatures and dates.
  2. Resubmission and level 1 appeal drafting.
  3. Order chase by fax, SMS and e-sign links, with a signature-turnaround scorecard per physician.
  4. A dashboard of the 6-month cycle affirmation rate against 90%.
  Documentation checks only, no clinical decisions.
- **Why now:** RCD was extended to 2029. The 25%-reduction option was removed, and approval fell. The July 2026 proposal cuts the OASIS deadline to 45 days. The moratorium means agencies cannot grow by adding branches and must defend margin instead.
- **Founder edge:** His multi-agent research pipelines and detector work are document judgement at scale. Palmetto's checklists are public. Mom, if she works inside, can walk him through real packets.
- **First 10 customers:**
  1. The family agency (PCR packets plus held-claim aging).
  2. Three peers via the grandfather.
  3. Four more Florida administrators via Palmetto-region webinars and association events.
  4. Two via EHR user groups.
- **Cost to first revenue:** about $3,500.
- **Path to big:**
  - The six RCD states likely hold about 4,000-5,000 agencies (my estimate; Florida alone had 1,079). At about $35K per agency a year the pool is about $150M.
  - Agencies that reach 90% need less, so assume 40% stay in the service: about $60M. $10M is about 16% of that.
  - The RCD sunsets around May 2029.
  - The durable version is the orders and F2F release network, which applies in all 50 states: 12,000 agencies at about $20K is a $240M pool.
- **Who does it today:** Enzo (intake, QA, order tracking, claim prep), EHR modules (Axxess, HCHB), SimiTree (order-management consulting), in-house coordinators, Axxess RCD webinars. No outsourced, per-result, EHR-agnostic desk found.
- **Biggest risk:** It works itself out of a job at each client, and Enzo or the EHRs absorb it.

---

## 3. Chart Integrity Radar: audit-defensibility scoring for the AI-scribe era

**One-liner:** Use his AI-text and similarity detection to find cloned, copy-forward and templated visit notes and F2F narratives, so the agency fixes them before an auditor does.

- **Customer / signer:** Compliance officer, DON or QA director at an agency adopting AI scribes (later hospices).
- **Who pays and budget:** The agency's QA and audit-response line. Pricing is $0.60-1.25 per note reviewed with a $500/month minimum, or $100 per ADR packet pre-check. First step is a $2,500 baseline report.
- **Problem:** AI scribes cut charting time sharply (Enzo claims 75%). Medicare contractors have long held that cloned or template-worded notes fail medical necessity regardless of source, and commentators say AI-generated notes carry the same risk. Palmetto still denies on "documentation does not show skilled need" and on F2F narratives. No agency has a tool that measures its own sameness. Gap: I found no current CMS or MAC guidance on AI-generated home-health notes.
- **Solution:** Embedding and n-gram clustering across patients, clinicians and time; copy-forward detection inside one patient's chart; narrative-versus-structured-data consistency (vitals, diagnosis, visit times); a ranked fix list for QA staff; a weekly score by clinician; ADR packet pre-check. It only flags for human review and never edits a clinical record or helps hide AI use.
- **Why now:** Ambient scribes are spreading in home health (Enzo Scribe). July 2026 CMS integrity push. Shorter OASIS deadlines mean faster, more templated documentation.
- **Founder edge:** His detect-ai-writing skill, a detector that beat commercial tools in blind tests, and a draft-comparison method. A 90-second demo on 500 de-identified notes sells it.
- **First 10 customers:**
  1. The family agency (de-identified 500-note batch).
  2. Three peers via the grandfather.
  3. Two via audit-defense and compliance consultants as a tool partner.
  4. Four via owner groups and EHR user communities.
- **Cost to first revenue:** about $2,500.
- **Path to big:** About 12,000 HHAs plus roughly 6,000 hospices (general knowledge) at about $12K a year is about $216M. $10M is about 5%. Distribution via EHR marketplaces, audit-defense firms and regulatory-liability insurers.
- **Who does it today:** Enzo QA (clinical and regulatory accuracy), Olli and SimiTree SARA (coding and OASIS). MAC and UPIC analytics. No clone-detection product found (searched once, so verify).
- **Biggest risk:** Demand may be latent until audits bite. Enzo could add a similarity check in a month.

---

## 4. Triple-Match: authorization, EVV and claim reconciliation for Florida Medicaid home care

**One-liner:** Move the freight three-way match (contract, receipt, invoice) to Florida Medicaid home care (authorization, EVV visit, claim) and chase every delivered visit that went unpaid, using the state's claim-dispute program.

- **Customer / signer:** Owner or billing manager of a Florida skilled agency, personal care or homemaker agency, or nurse registry paid by SMMC plans. If the family agency is Medicare-only, it needs a different pilot.
- **Who pays and budget:** The agency. 15-20% of recovered dollars, or $8-15 per resolved visit if percentage pay is barred.
- **Problem:** Plans deny home health and personal care claims not EVV-verified through HHAeXchange. Molina uses code N821 ("visit not found"). Manual claims are denied (Molina from July 1, 2024, Sunshine from Jan 30, 2025). Edited visit times hurt the compliance rate. Disputes need electronic clinical notes plus ticket numbers; time sheets do not count. Agencies write off visits that were delivered.
- **Solution:** A nightly pull of schedules, EVV visits, authorizations, claims and remits. Flags: delivered but unbilled, billed with no EVV, open exceptions, units beyond authorization, claims nearing timely filing. It builds each appeal packet to that plan's rules, escalates to AHCA's 408.7057 dispute program, and tracks late-pay days for interest claims (verify which statute applies to SMMC plans).
- **Why now:** EVV mandates are in force; plan notices of 2024-25 raised denials; AHCA has enforced prompt-pay (2022 letter to Sunshine); a class action alleges withheld interest.
- **Founder edge:** The freight three-way match is the same logic. Florida-based. Dad's regulated-industry world adds credibility.
- **First 10 customers:**
  1. The family agency if it has a Medicaid book.
  2. Florida nurse registries and homemaker/companion agencies through owner groups.
  3. Skilled agencies with SMMC contracts via grandfather introductions.
- **Cost to first revenue:** about $3,000.
- **Path to big:** I did NOT size the Florida spend, which is the first task. EVV is federally mandated, so the match generalizes state by state. My guess is $5-15M a year if multistate; it is not a $100M business.
- **Who does it today:** HHAeXchange (the EVV aggregator that also sells RCM, and the gatekeeper), plan portals, billing firms (ASPR CMS Solutions lists Florida home health billing), law firms recovering prompt-pay interest (Frier Levitt).
- **Biggest risk:** Depends on MHC's type; HHAeXchange can block or copy it; small-ticket claims.

---

## 5. Auth Clock: prior-authorization tracking, appeals, and a plan scorecard for MA home health

**One-liner:** Log every MA authorization against the new 72-hour and 7-day decision clocks, auto-draft the appeal on denials and short approvals, and publish the first home-health-level MA denial index.

- **Customer / signer:** Intake or authorization coordinator and administrator at an agency with a heavy MA census.
- **Who pays and budget:** The agency. $40-60 per appeal packet plus 20-25% of overturned dollars (flat fallback if percentage pay is risky).
- **Problem:** MA plans denied 12% of prior-authorization requests in 2025 and 67% of appeals were overturned, yet denials are rarely appealed. Home-health-specific denial rates are not published. Since Jan 1, 2026 plans owe 72-hour and 7-day decisions with specific reasons, but agencies do not track which plans miss the clock.
- **Solution:** Track submit time, decision time, visits requested versus approved, and denial reasons. Draft reconsiderations using the plan's own reason and the clinical record. Plug into plans' FHIR prior-authorization APIs when they go live on Jan 1, 2027. Quarterly anonymized scorecards by plan, used at contract renewal and sold to hospital systems, ACOs and investors.
- **Why now:** CMS-0057-F clocks and public metrics; the Jan 1, 2027 API deadline; KFF's Aug 2026 data; MA now exceeds FFS in home health.
- **Founder edge:** Pre-registered, methodology-first indexes (his strategy lab). Fast document assembly.
- **First 10 customers:** The family agency; three peers; four from MA-heavy Florida owners via the association; two from the mentor's network.
- **Cost to first revenue:** about $3,000.
- **Path to big:** If 3% of MA home-health revenue (about $14B, my estimate) is reversible auth loss, that is about $420M and the 25% fee pool is about $105M. $10M is about 10% of that. Shares its data layer with #1.
- **Who does it today:** **Crowded.** Claim Health (YC, $4.4M seed; authorization management plus appeals), HHAeXchange RCM, Prochant, Enzo (intake and eligibility), Availity and clearinghouses. It ranks fifth because it is the first idea anyone would have.

---

## 6. Revenue Clock Sentinel: the alarm system for deadlines that can zero out cash

**One-liner:** One dashboard for the clocks that silently destroy home-health revenue: the 5-day NOA, OASIS submission, certifying-physician enrollment and exclusion status, 855A revalidation, state license, RCD cycle dates and MA authorization expirations.

- **Customer / signer:** Administrator or compliance officer.
- **Who pays and budget:** SaaS at $249-799 a month by census; the compliance line.
- **Problem:** A late NOA cuts payment 1/30 per day. The OASIS deadline would shrink to 45 days. CMS proposes clawing back to the date of noncompliance for all enrollment revocations, and with the moratorium a revoked or deactivated agency cannot simply re-enroll. A certifying physician who is not enrolled can cause denials, and employing an excluded person brings penalties (both general knowledge).
- **Solution:** Read EHR exports plus free public files (exclusion list, ordering/referring file, opt-out list; general knowledge), apply rules, send SMS and email alerts, and publish a monthly clock report.
- **Why now:** The moratorium raises the cost of losing billing privileges. The July 2026 proposals tighten both enrollment and OASIS timing.
- **Founder edge:** Public data plus fast shipping. Easiest sale: it has no regulated-data wall.
- **First 10 customers:** The family agency; accreditation and compliance consultants as resellers; peers via the grandfather.
- **Cost to first revenue:** about $1,500.
- **Path to big:** 12,000 HHAs at $3-5K a year is $36-60M. $10M is 15-25% of that, which is heroic, so it is a **wedge into #1 and #2**, not a standalone company.
- **Who does it today:** EHR alert modules, exclusion-screening vendors (names from general knowledge, unverified), accreditation bodies, compliance consultants.

---

## 7. Certified-Agency Readiness Dossier: moratorium-era sell-side Medicare integrity report

**One-liner:** Because new enrollments are frozen, existing Medicare numbers are scarce. Sell owners a buyer-ready AI-assisted Medicare-integrity binder before a sale.

- **Customer / signer:** Owner of a certified agency considering a sale or raise within 12-24 months; brokers and PE buyers as channel.
- **Who pays and budget:** The seller, flat $15-40K, paid from sale prep. No success fees (broker rules).
- **Problem:** Buyers inherit liabilities; CHOW takes 4-9 months; diligence centers on PDGM and HHVBP performance, payer mix and post-close audits; earnouts tie to ratings and CMS audits. Sellers do not know their own exposure, so price gets chipped.
- **Solution:** Two-week report: 3-year claims sweep for overpayment exposure, outlier and PEPPER-style analysis from public data, RCD history, HHVBP score, enrollment and license status, exclusion checks, and a payer-contract-versus-Medicare summary. A healthcare CPA or attorney signs off; it is not an audit opinion.
- **Why now:** The moratorium began May 13, 2026; certified deals up 41%; CMS proposes broader clawbacks.
- **Founder edge:** Grandfather as owner-operator with peers who may sell or buy. Mentor who built and sold a roughly $1B company. Family finance contacts.
- **First 10 customers:** The family agency as a pre-sale health check; three peers; two broker partners; two healthcare CPAs.
- **Cost to first revenue:** about $4,000.
- **Path to big: weak.** About 48 certified deals a year at $25K is about $1.2M even at 100% share. It is big only if it becomes an annual "Medicare Integrity Score" for about 1,000 agencies at $10K (about $10M) sold to lenders, insurers and buyers. Otherwise call it a $1-3M services niche.
- **Who does it today:** M&A advisors (Braff, Mertz Taggart, Lincoln), accounting firms' quality-of-earnings teams, compliance consultants (SimiTree), data vendors (Definitive Healthcare, general knowledge). No standardized AI-assisted dossier found.

---

## 8. HHVBP Score-to-Cash: audit the CMS scorecard and share the uplift

**One-liner:** Audit each agency's HHVBP annual performance report, fix the OASIS and claims data that drive it, and take a share of the payment uplift.

- **Customer / signer:** Administrator or QA director.
- **Who pays and budget:** Flat $2.5-4K for the report audit, then 15-20% of the first-year HHVBP adjustment improvement (a consulting performance fee, not billing).
- **Problem:** Up to +/-5% of FFS payment, weighted OASIS 40, claims 40, survey 20. A $5M-FFS agency swings up to $250K. The program is budget-neutral, so gains come from peers. Most agencies never check CMS's math in the short recalculation window (Aug 20-Sep 4, 2026).
- **Solution:** Compare the iQIES report with the agency's own data; flag missing OASIS functional items; build a performance-year-2026 early-warning dashboard (it sets CY2028 payments); improve survey response; file the August 2027 recalculation.
- **Why now:** Final 2027 adjustments publish in January 2027. Performance year 2026 decides CY2028 pay. Other payers can reuse the public scores.
- **Founder edge:** Pre-registered, data-hygiene discipline. Weak on speed.
- **First 10 customers:** The family agency, then peers from the grandfather.
- **Cost to first revenue:** about $1,500.
- **Path to big: weak.** Realistically 1-2% of FFS ($160-320M) is redistributed a year. A 15% fee on a minority of that is $3-5M at best. It is big only if MA plans adopt HHVBP-style adjustments and he sells the scoring layer to them.
- **Who does it today:** Forvis Mazars guidance, Enzo glossary content, consultants, EHR analytics. Slowest to cash of the eight.

---

## Why this ranking

1. **Payer Truth** is the only idea that reuses an engine he already built, can be tested in a day on the family's own remits, and has a data moat.
2. **Documentation-to-Cash Desk** hits the Florida RCD directly and has a nationwide second act.
3. **Chart Integrity Radar** is the most non-obvious and uses his best skill.
4. **Triple-Match** reuses the freight match but depends on the family's service mix and on HHAeXchange.
5. **Auth Clock** has the biggest pool but is the most crowded.
6. **Sentinel** is easy to sell but small.
7. **Dossier** is timely but small unless it becomes a recurring score.
8. **HHVBP** is slowest to pay.

Ideas 1, 2, 3 and 5 share one data pipeline (remits, authorizations, notes), so building any of them gets him halfway to the others.

## Sources

- MedPAC March 2026, Ch. 8: https://www.medpac.gov/wp-content/uploads/2026/03/Mar26_Ch8_MedPAC_Report_To_Congress_SEC.pdf
- CY2026 final rule (HHCN): https://homehealthcarenews.com/2025/11/cms-finalizes-2026-home-health-medicare-payment-rule-with-1-3-aggregate-reduction/
- CY2027 proposed rule (CMS release): https://www.cms.gov/newsroom/press-releases/cms-proposes-updates-strengthen-medicare-program-integrity-combat-fraud-expand-access-home-health
- LeadingAge on CY2027: https://leadingage.org/leadingage-statement-on-cy2027-home-health-proposed-payment-rate-update/
- CMS RCD page: https://www.cms.gov/research-statistics-data-and-systems/monitoring-programs/medicare-ffs-compliance-programs/review-choice-demonstration/review-choice-demonstration-for-home-health-services
- RCD metrics (LeadingAge): https://leadingage.org/hha-review-choice-demonstration-metrics-decreased-in-2024/
- Moratorium: https://www.mintz.com/insights-center/viewpoints/2146/2026-05-18-cms-imposes-nationwide-enrollment-freeze-home-health and https://www.gtlaw.com/de/insights/2026/5/cms-announces-nationwide-moratoria-on-medicare-enrollment-of-home-health-agencies
- M&A (HHCN): https://homehealthcarenews.com/2026/08/home-health-ma-activity-rises-as-proposed-rule-provider-moratorium-shape-market/
- MA denials (HHCN/KFF): https://homehealthcarenews.com/2026/08/medicare-advantage-plans-denied-12-of-prior-authorization-requests-in-2025/
- HHVBP: https://www.cms.gov/priorities/innovation/files/hhvbp-newsletter-jun-2026.pdf and https://leadingage.org/hhvpb-preliminary-july-2026-iprs-published/
- Enzo: https://www.fiercehealthcare.com/ai-and-machine-learning/enzo-health-launches-ai-driven-enzo-ehr-first-agentic-system-home-health
- Olli: https://homehealthcarenews.com/2025/11/home-health-ai-platform-olli-health-raises-10m/
- Claim Health: https://ycombinator.com/companies/claim-health
- HHAeXchange RCM: https://www.hhaexchange.com/solutions/providers/rcm-services
- Underpayment engines: https://asprcmsolutions.com/newsletters/ai-underpayment-recovery-contract-variance-2026/ and https://pmmconline.com/denial-management-services/
- Orders and held claims: https://simitreehc.com/?p=7870
- NOA penalty: https://www.cms.gov/files/document/r10839CP.pdf
- Florida EVV: https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/fl/medicaid/EVV-AHCA-Compliance-Denial-General.pdf and https://www.sunshinehealth.com/evv
- Fla. Stat. 408.7057: https://m.flsenate.gov/Statutes/408.7057
- Florida prompt-pay: https://www.frierlevitt.com/results/florida-prompt-pay-law-unpaid-healthcare-claims-interest-recovery/
- Cloned documentation: https://medlearn.com/icd10monitor/why-ai-generated-notes-pose-the-same-risks-as-chart-cloning/
- CMS-0057-F summary: https://asprcmsolutions.com/insights/cms-0057-f-prior-authorization-api-deadline-2026/
- Choice Health at Home: https://homehealthcarenews.com/2022/08/why-and-how-choice-health-at-home-plans-to-go-national/
