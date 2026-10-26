# Round 4 / Lens: COO of a Florida home-health agency (MHC as customer zero), as of 2026-10-26

About 35 searches and fetches. Every number below is tagged: (sourced) means a search result or page said it; (assumption) means I made it up to do the math and it must be tested; (verify) means I believe it but did not confirm it this session.

## Read this first

**The obvious AI-for-home-health lanes are already funded and crowded. I stayed out of them on purpose.**
- Referral intake, eligibility, scribe, chart QA: Enzo Health, $26M raised in total, $20M Series A led by N47 (sourced).
- OASIS and coding review: SimiTree SARA, Enzo QA. Brellium raised $23M on 2026-10-14 and lists Gentiva as a customer (sourced).
- Denial management and revenue cycle: Claim Health (YC), Amperos ($16M Series A, April 2026), Prochant PulseIQ (sourced).
- Referral analytics: Trella, which claims 40,000+ users and 18 of the top 20 agencies (company claim).
- LUPA, PDGM, pre-claim review and hurricane triage tooling: already inside Axxess (PDGM Center, 30-day calendar, Pre-Claim Review Center, triage codes plus evacuation zones) and HCHB (sourced).
- An AI-native home-health provider: Adaptive Innovations, $60M, operating in NYC and Dallas (sourced).
- Student-caregiver marketplaces: CareYaya exists (sourced).

**What a COO is squeezed by right now (sourced unless noted):**
1. **Cash.**
   - CY2027 proposed rule (CMS-1844-P, July 2026): no new permanent cut, but the temporary 3% cut stays, about $500M recouped in 2027.
   - Home health denial rate is about 13% with 52 days in A/R (AMS Solutions benchmark, a vendor).
   - Florida Medicare Advantage penetration is roughly 57-60% (sources conflict on the exact figure).
   - CenterWell (Humana) has 350 branches and bought Trilogy (11 Florida locations).
2. **Proof.**
   - CMS Administrator Oz sent Gov. DeSantis a fraud letter on 2026-03-17.
   - Florida is a Review Choice Demonstration state (pre-claim or post-payment review), extended five years from 2024-06-01.
   - Auditors treat cloned notes as a red flag.
3. **A growth ceiling.** CMS imposed a nationwide moratorium on new Medicare home-health and hospice enrollments, including new branches, effective 2026-05-13 for six months, extendable in six-month steps. The initial period ends about mid-November 2026, so the extension decision is imminent. Majority ownership changes inside the 36-month rule count as new enrollment and are blocked. Result: an existing Medicare number (CCN) is now a scarce asset. Protect it, price it, and grow by conversion and contracts, not by opening branches.
4. Florida had 1,079 Medicare-certified home-health agencies in 2023 (KFF; US total 11,925). An earlier KFF block shows 951 (year unconfirmed).

**What I do not know about MHC (verify in week 1; several ideas change with the answers):**
1. Type: Medicare-certified home health ("MHC Area N, LLC" suggests so), home care, hospice, or a mix.
2. EMR (Axxess, HCHB, WellSky, Alora, other).
3. Number of separately enrolled LLCs and CCNs.
4. Payer mix: MA plans, Medicaid managed care, VA, private pay.
5. How field clinicians are paid (per visit, hourly, salary).
6. Whether billing is in-house or outsourced, and whether he can get 12 months of 835 remittances.
7. Who runs marketing and liaisons.

**Convergence note for the judge:** ideas 1, 4 and 6 overlap at the title level with the sibling `healthcare_ops` lens (MA Rate Truth, Enrollment Sentinel, Certified Agency Exchange). Ideas 2, 3, 5, 7 and 8 are specific to this lens. If both lenses produced the same idea, that convergence is a signal the idea is real, not a reason to drop it.

**Two protocols that apply to every idea:**
- **HIPAA (ideas 1, 2, 3).** Sign a BAA between MHC and his LLC. Use minimum-necessary data. Keep data in MHC's cloud or a BAA-covered environment. Build on tokenized or de-identified copies. Do not send PHI to any model API that is not covered by a BAA. Carry cyber and E&O insurance. Ideas 4 through 8 use public data or no PHI.
- **Family.** His mother works at MHC and his grandfather owns it. Get the grandfather's written OK. Anything the tools find about MHC belongs to MHC. Pilot terms should be arm's length (a real price, a real contract) so the first "paying customer" is not just a gift.

---

## Ranking (best first)

| # | Name | First revenue | Big-path honesty |
|---|------|---------------|------------------|
| 1 | PayerProof: MA and Medicaid-MCO contract-compliance audit | Fastest (contingency) | About 5-6% of US agencies for $10M, plus other post-acute |
| 2 | Clean-Agency Shield: proof-of-visit and note-authenticity forensics | Fast (MHC pilot) | About 5% of US agencies, plus hospice and payers |
| 3 | FieldPay Audit: per-visit pay, mileage and overtime integrity | Fast (mileage savings opener) | About 6% of agencies, plus home-care aides |
| 4 | CCN Guardian: multi-CCN regulatory back office | Fast (MHC) | Weak unless payers adopt a verified "passport" |
| 5 | Referral Ledger: kickback-safe marketing supervision | Medium | Cross-vertical, about 4% of about 25k orgs |
| 6 | CHOW Desk: moratorium-era diligence and closing | Medium | Niche unless it becomes an integrity-score subscription |
| 7 | Survey Ready: public 2567 corpus plus plan-of-correction engine | Medium | Dead as home-health-only; alive only multi-provider |
| 8 | Operators Alliance: benchmark co-op, GPO, contracting | Slow | Highest ceiling, lowest probability for him |

---

## 1. PayerProof: contract-compliance audit of Medicare Advantage and Medicaid managed-care payments

**One line.** Upload 12 months of remittances (835s) and the plan contract rate exhibits. The engine recomputes what each claim should have paid, returns a variance list plus ready-to-file payment disputes, and monitors monthly after that.

**Customer and payer.** Owner or CFO of an independent Florida home-health agency or multi-LLC operator with MA plus Medicaid-MCO at roughly 35% of revenue or more. The owner signs. There is usually no "underpayment" budget line, so a contingency fee on recovered money removes the budget objection.

**Problem (COO view).**
- Agencies chase denials, not short-pays. Contract rate terms live in PDFs that no one reconciles against remits.
- Plans' automated claim review is rising (sourced: AMS Solutions).
- KFF: MA plans denied 12% of standard prior-auth requests in 2025, and 67% of appealed denials were overturned. That is all services, not home health specifically.
- Florida Medicaid managed-care plans add EVV denials: Sunshine (notice of 2025-08-22) denies EVV claims that are not verified or lack an exception code, and Molina denies manually submitted home-health claims with remit code N821 (sourced).

**What he builds (Monday plan).**
- Week 1: LLC, BAA template, contingency agreement; ask MHC for its top 5 payer contracts and 12 months of 835s.
- Weeks 1-2: contract extractor (PDF to rate-rule JSON, human-checked); 835 parser; expected-versus-paid engine. Reuse the freight-audit variance and tolerance logic he already built.
- Week 3: variance report and dispute letters.
- Week 4: MHC reviews; first disputes filed.
- Month 2 onward: monthly monitor. Phase 2 is an anonymized MA-rate benchmark across customers.

**Pricing.** $1,500-$2,500 flat diagnostic, credited against fees. Then 20-25% of recovered MA, MCO and commercial underpayments, or $750-$1,250 per month monitoring. Cost to first revenue is about $3,000 (counsel review of the BAA and contingency terms, cyber and E&O insurance, hosting).

**Why now.** MA is 57-60% of Florida Medicare; the temporary 3% cut continues; payment-suspension and fraud pressure tightens cash; contract-PDF extraction is cheap with current models.

**Founder edge.**
- He already built a freight-invoice audit with a flat diagnostic plus contingency. It is the same architecture: contract, invoice, expected versus actual, variance.
- MHC's remits are the validation set, and several Area LLCs means several payer contract sets.

**First 10 customers.**
- MHC diagnostic.
- Three owner peers the grandfather knows personally, via a dinner he hosts.
- Two to three through the Home Care Association of Florida (HCAF; its 37th annual HomeCareCon ran 2026-07-21 to 24 in Orlando).
- Two billing companies, offered as a resell partner.
- Two through accountants in his father's MyFinancialAdvice network who serve agency owners.
- Offer a free one-quarter "variance preview" before any contract.

**Path to big (math).**
- Assume $15k per agency per year (assumption: $9k monitoring plus $6k contingency). $10M needs about 670 agencies, which is 5.6% of the 11,925 US agencies. Florida alone caps near $16M at 100% share, so it must go national.
- Beyond home health: hospice, SNF, DME, ambulance and physician groups buy the same engine. Hospital underpayment recovery is a large existing category.
- Key assumption to test in the first 30 days: realized short-pay on MA and MCO revenue of at least 1% (assumption). If MHC's scan shows under 0.5%, kill it.

**Who does it today.**
- Claim Health (YC): denial prevention and appeals for post-acute.
- Amperos ($16M): agentic denial management.
- Prochant PulseIQ: RCM services.
- Billing companies.
- I found no home-health-specific MA contract-compliance auditor, but the search returned nothing on the topic at all. That is absence of evidence, not proof of a gap.

**Legal premise.**
- Medicare FFS billing-agent rules (42 CFR 424.73) restrict compensation tied to dollars billed or collected (verify). Keep contingency to MA, MCO and commercial recoveries and use flat fees for FFS.
- Plan contracts are often confidential. Confirm that disclosure to an agent is permitted.
- Antitrust for the benchmark: use the retired DOJ/FTC safety-zone conditions as a floor (third-party managed, at least 5 contributors, no contributor over 25% of any statistic, data at least 3 months old). DOJ withdrew those statements in 2023, so get antitrust counsel.

**Kill test (day 30).** Short-pay under 0.5% of MA and MCO revenue, or MHC cannot produce remits and contracts.

---

## 2. Clean-Agency Shield: proof-of-visit and note-authenticity forensics, with an admission integrity gate

**One line.** For every billed visit, build an evidence bundle (note originality score, timestamps, GPS, mileage, signature timing, duration versus note length) so a legitimate Florida agency can prove its visits happened when a pre-claim review, ADR, TPE or UPIC request lands. Add a pre-admission check on the referring physician.

**Customer and payer.** Administrator, compliance officer or DON at Florida home-health agencies and hospices. The owner pays from the compliance and audit-defense budget.

**Pricing.**
- $0.30-$0.60 per visit; about 3,000 visits a month works out to about $16k a year (assumption).
- A free retro scan of 500 notes is the opener.
- Cost to first revenue is about $4,500 (counsel review, E&O and cyber, hosting).

**Problem.**
- Regulators now treat Florida home health as a fraud market (moratorium, Oz letter).
- ADR response deadlines run 30-45 days (sourced, varies by MAC). Missing one is an automatic denial, and prepayment ADRs freeze payment.
- Practitioner guidance says auditors read identical notes across dates as inauthentic or written after the fact (Brellium, a vendor). The 2013 OIG EHR copy-paste audit is the closest federal source (via a law-firm summary).
- AI scribes (Enzo Scribe and others) will make notes more uniform, which creates a new audit risk.
- Existing QA tools ask "does the note support the code." Nobody I found asks "is this note authentic."
- The owner cannot see one clinician cloning notes or ghosting visits.

**What he builds.**
- Ingest EMR note exports (CSV or SFTP).
- Embeddings and similarity per clinician, patient and time. Template baselines per agency so legitimate templates are not flagged. Authorship-style scoring using the gestalt method from his detector.
- Anomaly rules: impossible travel between visits, same-minute notes, duration versus note length, signatures long after the visit.
- A per-claim "audit-ready proof packet" PDF for ADR and pre-claim review.
- An admission gate that checks the referring physician against the CMS Ordering and Referring file (updated twice weekly, sourced), the OIG exclusion list and volume outliers. PEPPER is free but downloaded by only 40-59% of states' agencies (sourced), so the gate has room.

**Why now.** The moratorium and fraud letter just made proof the thing every legitimate Florida operator needs. Brellium's $23M round on 2026-10-14 shows buyers pay for documentation audit, and the forensics angle is adjacent to it, not the same.

**Founder edge.**
- His AI-text detector beat commercial detectors in his own blind tests (his results).
- His strategy lab taught him pre-registered tests and false-positive control, which matters because falsely accusing a clinician is costly.
- MHC's DON can label 200 known-good and known-problem notes as ground truth.

**First 10 customers.**
- MHC retro scan.
- Owner peers through the grandfather.
- HCAF members.
- Two or three Florida healthcare fraud-defense and compliance law firms, who refer clients under audit.
- Billing companies.
- Hospice owners through the same network.

**Path to big (math).**
- At $16k a year per agency (assumption), $10M needs about 625 agencies, which is 5.2% of US home-health agencies. Adding hospices roughly doubles the pool.
- Honest risk: Brellium could add similarity checks. The moat has to be the cross-agency originality corpus and calibrated false-positive rates, not the idea itself. Longer term, payers and auditors want the same engine from the other side, but selling to them is a different business.
- Technical risk: clinical notes are templated by nature, so base-rate similarity is high. Per-agency baselines are the whole game.

**Who does it today.** Brellium ($23M, audits 100% of notes against payer rules), Enzo QA, SimiTree SARA (OASIS and coding), generic similarity tools used by auditors and payers, and PEPPER (free billing-pattern report). I found no provider-side clone and authenticity product with proof-of-visit packets.

**Legal.** Never auto-accuse. Output is a "needs review" queue to the compliance officer. Use the GPS and mileage data the EMR already captures. Employment counsel reviews the monitoring policy.

**Kill test.** On MHC's labeled set, the flag precision is under 70%, or the DON says the queue is noise.

---

## 3. FieldPay Audit: per-visit pay, mileage and overtime integrity

**One line.** Recompute weekly regular-rate overtime, unpaid drive and charting time, and mileage for field clinicians from the EMR payroll export. Open with a mileage-savings audit that pays for itself, and sell the wage-hour module only through the agency's employment counsel.

**Customer and payer.** Owner or CFO, plus the agency's employment counsel for the wage-hour part. Budget: payroll, HR compliance and legal-risk reserve.

**Problem.**
- Per-visit pay for non-exempt staff is a recurring FLSA target. Examples: Amedisys ($8M, 2016), Guardian Home Care and Hospice ($3M), Franciscan VNS ($3.65M).
- Fisher Phillips guidance says the DOL will make an employer recalculate overtime on a weighted regular rate.
- Axxess's Payroll Export Center already exports auto-calculated mileage, travel hours and EVV hours, so the data exists. I found no tool that audits regular-rate overtime on it (vendor claims only).
- Mileage is a large cost for a field workforce (assumption: 5-8% of revenue; test it).

**What he builds.**
- EMR payroll export plus payroll register in.
- Regular-rate and overtime recompute per week.
- Flags: mixed hourly and per-visit pay (the Amedisys and Guardian theory), after-hours charting with no paid time, visit-rate-card drift.
- Mileage: claimed miles versus route-computed miles from visit addresses. Overpayment equals savings.
- Counsel-directed workflow: the employment attorney commissions the analysis so it is privileged. This is the "defeats its own privilege" trap from earlier rounds. Do not hand the owner an un-privileged liability number.

**Pricing.** 25% of verified first-year mileage savings, or $12-$20 per clinician per month for continuous monitoring (assumption). Cost to first revenue is about $5,000, mostly employment counsel to set up the privilege structure.

**Why now.** Fraud-driven scrutiny and the 3% cut push owners to find cost; nurse shortage means turnover plus wage claims; the EMR already holds the data.

**Founder edge.** He ships data pipelines fast, and MHC gives real payroll exports. Note the family sensitivity: do this only if the grandfather wants to know.

**First 10 customers.** MHC (mileage first); owner peers; employment-law firms that defend agencies (they sell the privileged module); payroll and PEO firms serving home care; HCAF sessions on pay practices.

**Path to big (math).** At $14k a year per agency (80 clinicians x $15 x 12, assumption), $10M needs about 700 agencies, 5.9% of US agencies. The same engine extends to hospice and private-duty aides (BLS projects 765,000 home health and personal care aide openings a year, sourced), which is a far larger worker pool.

**Who does it today.** No home-health regular-rate overtime auditor found. Adjacent: payroll exports (ADP, Paychex via EMR), EVV-to-payroll validators (ShiftCare, vendor claim), GPS mileage apps (Timeero), and employment law firms.

**Legal.**
- Software only, no legal advice.
- Counsel owns the privileged analysis.
- State wage laws can be stricter.
- I found no source on whether mileage reimbursement belongs in the regular rate, so counsel must answer that.
- The fee-basis salary threshold I saw ($844 a week) comes from a rule I believe was vacated, so do not use it.

**Kill test.** MHC pays all field staff hourly or salaried (the wage module is moot, though mileage still works), or the grandfather declines.

---

## 4. CCN Guardian: regulatory back office for multi-CCN operators

**One line.** One system that tracks and drafts every filing, renewal, revalidation, change report, payer credentialing packet and cost report for operators running several separately enrolled agencies.

**Customer and payer.** Owner or compliance director at Florida operators with 3 to 30 CCNs. Budget: compliance staff, enrollment consultants, and the CPA for cost reports.

**Problem.**
- Each LLC and CCN has its own CMS-855A enrollment. Ownership and control changes must be reported fast (30 days, with 90 days for most other changes; verify in 42 CFR 424.516), and each has its own state license, accreditation, cost report (Form CMS-1728-20 per CCN) and payer credentialing for every MA plan and MCO.
- Under the moratorium a lost or revoked enrollment cannot be replaced. That turns paperwork slips into asset loss.
- CMS revised the cost-report chapter and electronic specifications on 2026-05-28, and the form's OMB approval expires 2027-01-31 (sourced).

**What he builds (Monday).**
- Per-CCN calendar built from PECOS and state license data.
- AI-drafted 855A change forms and payer packets from one master data room per operator.
- A weekly "what could cost us a CCN" list.
- Later: cost-report workpapers for CPA review.

**Pricing.** $400-$600 per CCN per month, plus $2k-$5k per payer credentialing package (assumption). Cost to first revenue is about $2,500.

**Founder edge.** MHC literally runs many Area LLCs, so the pain is real and the first customer is in the family. He has built multi-agent document pipelines.

**First 10 customers.** MHC; owner peers who run multi-LLC groups; Florida healthcare M&A attorneys (their clients arrive with messy records); CPAs who prepare home-health cost reports (white-label); hospice operators.

**Path to big (honest).** At $6k per CCN per year (assumption), $10M needs about 1,670 CCNs, 14% of US agencies, which is heroic for provider-paid only. It gets big only if the "organization passport" becomes a verified network that MA plans, health systems and ACOs pay to query. At $50-100k a year per payer or system, 100-200 such buyers is $5-20M. If payers do not adopt it, this is a $3-5M services business. That is why it is ranked 4 and not higher.

**Who does it today.**
- AI form-fillers for the 855A (Instafill, vendor).
- General credentialing platforms (Medallion, Verifiable, CertifyOS, Modio, symplr, MedTrainer), none confirmed to handle 855A or PECOS revalidation.
- Enrollment consultants and CPAs.
- I found no product built for multi-CCN home-health operators.

**Kill test.** MHC's compliance team already has this under control, or MHC runs one CCN only.

---

## 5. Referral Ledger: kickback-safe marketing supervision

**One line.** Every meal, gift, event, free in-service and hour of free staff time given to a referral source is logged, checked against the agency's written policy and Florida plus federal law, routed to supervisory review, and attested monthly. It reuses the books-and-records architecture of his father's compliance tech for advisor social media.

**Customer and payer.** Compliance officer or owner. Budget: compliance program and legal-risk reserve.

**Problem.**
- Florida's Patient Brokering Act (Fla. Stat. 817.505) applies to all payers, not just federal programs. It is a felony, with reported penalties of $50,000 to $500,000 per violation. A 2019 appellate decision held that advice of counsel is not a defense (sourced via law-firm summaries; verify the current text).
- Hospice compliance counsel say marketing is often "divorced from compliance" and somebody must track what marketers hand out.
- I found referral CRMs but no product that logs gifts and meals against AKS and Patient Brokering thresholds.

**What he builds.** Expense feed from corporate cards plus calendar and CRM entries; policy engine with per-source annual caps set by the client's counsel; flags for "free staffing" and other in-kind support (the hospice association deck's common risk); supervisory queue; monthly attestation; archive for intent documentation.

**Pricing.** $400-$900 per month per agency (assumption). Cost to first revenue is about $3,000.

**Founder edge.** His father spent about 24 years in financial services and built technology that keeps advisors compliant on social media: archive, lexicon flags, supervisory sign-off. That is the same workflow in a new vertical, and he can borrow the playbook with his father's blessing.

**First 10 customers.** MHC's marketing team; the Florida Hospice and Palliative Care Association (it ran a "Create & Maintain a Compliant Marketing Strategy" event, so propose a co-presented webinar); compliance attorneys; owner peers; hospices.

**Path to big (math).** At $9k a year (assumption), $10M needs about 1,100 organizations. Eligible pool: about 11,925 home-health agencies, plus hospices, DME, labs, ABA and senior living. Call it 25,000 organizations (assumption), so about 4%.

**Who does it today.** Referral CRMs (Trella CRM, Playmaker and similar) track referral volume and activity but not gifts versus thresholds. Pharma and device spend trackers exist outside this vertical (from my background knowledge, not searched).

**Legal.** He sells software, not legal advice. Thresholds come from the client's counsel. Never give free tools or services to referral sources: that is the same remuneration problem the product exists to prevent.

**Kill test.** Marketers will not log, or a CRM vendor ships this as a feature.

---

## 6. CHOW Desk: moratorium-era diligence and closing engine

**One line.** A public-data diligence report on any Medicare home-health agency (ownership history, 36-month-rule status, survey history, quality, outlier flags, litigation, exclusions), plus a change-of-ownership closing checklist engine (855A CHOW, state license CHOW, payer notices and re-credentialing, EMR transfer).

**Customer and payer.** M&A attorneys, brokers, PE add-on teams and individual buyers; lenders. Budget: diligence spend. Definitive Healthcare's median contract is reported around $50k a year (Vendr), so the budget exists.

**Problem.**
- The moratorium means the only way into Medicare home health is to buy an existing CCN. Multiples are reported at 5-12x EBITDA, and referral concentration over 25% from one source is often a deal-breaker (broker pages, indicative).
- The 36-month rule makes some structures unworkable and counsel must check each deal.
- Definitive's coverage reportedly lags during consolidation, and I found no diligence workflow in it.

**Pricing.** $750-$2,500 per report; $1,500 per month for monitoring a watch-list of about 50 agencies; flat closing-desk fee per deal. Cost to first revenue is about $2,000.

**Founder edge.** His grandfather is a founder-owner who sees buyers and sellers. His father's advisor network reaches people who want cash-flowing businesses. His mentor knows M&A.

**First 10 customers.** Five brokers and M&A attorneys (flat $750, resale rights); three individual buyers from his father's network; MHC's own acquisition team, if any; two lenders.

**Path to big (honest).**
- Stand-alone diligence is a $2-6M niche (assumption; I found no deal count).
- It becomes big only as a subscription "post-acute provider integrity score" sold to payers, systems and lenders. At a Definitive-like $25-50k a year, 200 contracts is $10M.
- Date risk: if CMS lets the moratorium lapse after its first six months (about mid-November 2026), the scarcity premium fades. That would move demand back to new-agency start-up kits, a different product.

**Who does it today.** Definitive Healthcare ($25-50k a year, more than 100K post-acute records, data lag), Trella, brokers' own research.

**Legal.** No success fees. Florida's real-estate licensing statute covers brokering business opportunities (Ch. 475; verify), and finder fees raise securities questions. Flat-fee data and software only.

**Kill test.** Brokers will not pay over $300 per report, or the moratorium ends.

---

## 7. Survey Ready: public 2567 corpus and plan-of-correction engine

**One line.** Learn from every public CMS-2567 home-health survey report to tell an agency what surveyors are citing in its state this quarter, run an AI mock survey against its policies and a chart sample, and draft the plan of correction within the 10-day window.

**Customer and payer.** Administrator or DON. Budget: compliance consultants and accreditation prep.

**Problem.**
- A plan of correction is generally due within about 10 calendar days of the 2567. Condition-level findings run an enforcement clock: 90 days to termination, 23 days with immediate jeopardy (vendor-sourced; check the State Operations Manual).
- Repeat condition-level findings can bar an agency from running an aide training program for two years (sourced from Indiana 2567s).
- I found no AI survey-readiness product.

**Pricing.** $3k a year subscription plus $2.5k for an emergency PoC (assumption). Cost to first revenue is about $1,500.

**Founder edge.** His multi-agent research pipelines are built for large document corpora, and the 2567 data is public, so no PHI.

**First 10 customers.** MHC; owner peers; agencies that have just been cited (public 2567s show who they are, though cold outreach to the cited is sensitive); accreditation consultants.

**Path to big (honest).** At $4k a year (assumption), $10M needs about 2,500 agencies, 21% of the US, which is heroic. Home-health-only is therefore dead. It lives only as a multi-provider survey-intelligence product, where the nursing home 2567 corpus is much larger. That is why it ranks 7.

**Who does it today.** Human consultants, accreditors' consulting arms, vendor glossary pages (Enzo). No AI product found.

**Kill test.** The DON says mock surveys are not a budgeted purchase, or accredited (deemed) agencies see state surveys too rarely to care.

---

## 8. Operators Alliance: benchmark co-op, group purchasing and a contracting vehicle

**One line.** A grandfather-chaired roundtable of independent Florida owners that starts as a free quarterly meeting, grows into an anonymized KPI and MA-rate benchmark, then a group purchasing program, and eventually a counsel-built contracting vehicle for MA and Medicaid plans.

**Customer and payer.** Independent agency owners. Revenue: dues ($3-6k a year) plus vendor admin fees (up to 3% under the group-purchasing safe harbor, 42 CFR 1001.952(j); verify) plus data licensing.

**Problem.**
- Independents face CenterWell's scale, and Humana's leaders call the market fragmented (top 10 providers under 30% share).
- Nobody publishes MA home-health rates.
- Precedent: the California Association for Health Services at Home runs a group purchasing program with vendor royalties. I found no independent home-health alliance contracting with MA plans.

**What he builds.** Start with the roundtable and a shared spreadsheet, then a benchmark pipeline (his engine from idea 1), then vendor deals.

**Pricing.** Dues plus admin fees. Cost to first revenue is about $6,000 (antitrust counsel for the information-exchange protocol, entity, event).

**Founder edge.** The grandfather's convening power is the one asset no competitor can copy. This is the only idea where the family is a distribution moat, not just a pilot.

**First 10 customers (members).** Six owners from the grandfather's personal network; four from HCAF.

**Path to big (honest).**
- Assume $12k a year per member ($6k dues plus $6k vendor fees, assumption). $10M needs about 830 members across five or six states, 7% of US agencies. Florida alone caps near $13M at 100%.
- A national alliance that payers contract with could be venture-sized, but it needs a clinical-integration program, years and counsel. That is the lowest-probability path for an 18-year-old.
- Without payer contracting this is an association-sized business ($3-8M).

**Legal.** Antitrust (information exchange among competitors; see idea 1) and anti-kickback on vendor fees. Hire counsel before the first data exchange.

**Kill test.** Fewer than six owners agree to share data in the first quarter.

---

## Week-1 checklist (ideas 1-3, all pilot at MHC)

1. Ask the grandfather and mother five questions: EMR, number of CCNs and LLCs, payer mix, clinician pay structure, who handles billing.
2. Form the LLC. Buy cyber and E&O insurance. Have a healthcare lawyer draft the BAA and the pilot terms.
3. Get 12 months of 835s, the top 5 payer contracts, and a 500-note export (tokenized).
4. Build the three first-pass analyzers in parallel: variance (1), originality (2), mileage (3).
5. Watch two dates: the moratorium extension decision (about mid-November 2026) and the CY2027 home-health final rule.

## Sources (key ones)

- CMS nationwide moratorium on home-health and hospice enrollment, 2026-05-13: https://www.gtlaw.com/de/insights/2026/5/cms-announces-nationwide-moratoria-on-medicare-enrollment-of-home-health-agencies and https://mondaq.com/unitedstates/healthcare/1790144/cms-imposes-nationwide-moratorium-on-home-health-agency-and-hospice-enrollments
- KFF count of Medicare-certified providers (Florida 1,079; US 11,925): https://www.kff.org/medicare/state-indicator/number-of-medicare-certified-providers/
- Review Choice Demonstration extension (FL included): https://leadingage.org/home-health-review-choice-demonstration-extended-cms/
- CY2027 proposed rule (CMS-1844-P): https://asprcmsolutions.com/insights/cy-2027-home-health-pdgm-proposed-rule/
- CMS letter to Florida (2026-03-17): https://telehealth.org/news/cms-targets-florida-in-expanding-medicare-medicaid-fraud-crackdown/
- Enzo Health funding: https://pulse2.com/enzo-health-raises-26-million-to-deploy-ai-across-home-health-and-post-acute-care/amp/
- Adaptive Innovations: https://pulse2.com/adaptive-innovations-raises-60-million-to-build-ai-native-home-health-provider/amp/
- SimiTree SARA: https://simitreehc.com/sara-ai-powered-oasis-review/
- Brellium ($23M, 2026-10-14): https://hlth.com/insights/news/brellium-raises-23-million-and-launches-cortexlm-to-strengthen-clinical-compliance-and-revenue-protection
- Brellium on cloned notes: https://brellium.com/articles/what-triggers-a-hospice-audit
- Denial benchmark, Claim Health, Amperos, Prochant: https://hitconsultant.net/2026/04/22/amperos-health-16m-series-a-agentic-ai-denial-management-rcm/ and https://www.ycombinator.com/launches/NPm-claim-health-ai-revenue-platform-for-at-home-care-providers
- Trella: https://www.trellahealth.com/solutions/home-health/
- Axxess PDGM Center and triage codes: https://www.axxess.com/help/agencycore/software-updates/pdgm-center/ and https://www.axxess.com/blog/news/emergency-preparedness-like-the-boy-scouts-we-should-always-be-prepared/
- Axxess payroll export columns: https://www.axxess.com/help/agencycore/software-updates/payroll-export-center-updates-3/
- Per-visit pay and FLSA: https://homehealthcarenews.com/2025/10/the-home-care-pay-practices-that-land-providers-in-legal-hot-water/ and https://www.insideindianabusiness.com/articles/franciscan-vns-home-care-pays-3-65m-to-settle-workers-ot-claims
- Florida Patient Brokering Act: https://florida.public.law/statutes/fla._stat._817.505
- Hospice marketing compliance: https://hospicenews.com/2022/02/01/hospices-refocus-on-legal-compliance-in-marketing-practices/
- Florida Medicaid EVV denials: https://www.sunshinehealth.com/evv and https://www.molinahealthcare.com/providers/fl/medicaid/comm/-/media/1CB517D31DBC465E96DB7A4DE6F20336.ashx
- Home-health M&A multiples: https://www.jdsupra.com/legalnews/home-health-hospice-m-a-in-2026-why-the-1381791/ and https://www.adastraequity.com/ebitda-multiples/home-health-agency
- Definitive Healthcare pricing: https://www.vendr.com/marketplace/definitive-healthcare
- Group purchasing precedent (CAHSAH): https://www.cahsah.org/group-purchasing
- HCAF HomeCareCon: https://simitreehc.com/events/homecarecon-37th-annual-conference-and-trade-show
- Florida MA penetration: https://coveredusa.org/en/medicare-advantage/florida
- CenterWell scale: https://homehealthcarenews.com/2025/06/why-the-home-is-integral-to-humanas-evolution-to-health-care-services-powerhouse/
- KFF on MA denials: https://homehealthcarenews.com/2026/08/medicare-advantage-plans-denied-12-of-prior-authorization-requests-in-2025/
- Health care services pool licensing (why Campus-style staffing is a license wall): https://ahca.myflorida.com/health-quality-assurance/bureau-of-health-facility-regulation/long-term-care-services-unit/health-care-services-pool.html
- CareYaya (student caregivers already exist): https://www.careyaya.org/resources/blog/solving-caregiver-shortage

## What I could not verify

- Any real MHC fact: type, EMR, payer mix, number of LLCs, pay structure.
- The size of MA and MCO short-pays in home health. That is the single biggest assumption behind idea 1.
- Who the Florida home-health MAC is. I did not state it.
- Current CMS-855A change-reporting windows and the Ch. 475 business-broker rule (both flagged verify).
- Whether Brellium, Enzo or Axxess already ship note-similarity forensics (they might; I found no sign).
- Whether the moratorium will be extended, and the CY2027 final rule contents.
