# I0428-M1 refined: Provider Briefs, treating-provider intelligence for LOP defense

Date: 2026-10-13. Verdict: ALIVE, but only as a narrow, test-gated data product. The original (a $395 expert-adjacent kit with testimony as the profit center) is dead and is not defended here. Honest odds that the refined version reaches even $100k ARR: roughly 10-15%. Ceiling is solo-founder scale, not venture scale.

## What the critics got right (conceded)

1. The signed-coder layer is taken. Texas has MedCost Contain, No World Borders and IMS Legal. In re Allstate made a nurse-CPC counteraffidavit sufficient, so the signature is a commodity there. Georgia has Blount / Health Law Network. The "10x cheaper than a $3-5k expert" claim has no verified price behind it. Dropped.
2. Testimony as the profit center fails. Young v. Panera shows exclusion risk in the 11th Circuit, there is no Georgia ruling admitting a coder on reasonable value, no evidence for a 10-15% attach rate, and a repeat-defense vendor is exposed to a bias attack. Dropped.
3. The payer is wrong. Carriers control expert and vendor spend, 0% of carriers in the CLM study would pay for law-firm tools, and the "price below the pre-approval threshold" hack has no source. I re-checked this session: public guidelines and retainer templates leave the dollar figure blank, and corporate guidelines (Entergy, Southbow) require advance approval for any consultant or vendor with no floor. Dropped.
4. The file-level audit is already a commodity. New this session: CaseMark (page fetched) sells a "Medical Billing Analysis" skill for attorneys that audits itemized bills against records, runs UCR / FAIR Health / Medicare fee schedule benchmarks, does LOP-inflation and chargemaster-markup analysis, and returns a Bates-cited memo "in minutes" on a credit-based price ($5 free credit shown, no price list). It names no expert signature and no cross outline. So a $395 file-level kit has no price umbrella: a firm can get the audit for a small fraction of that. Line-by-line audit becomes our cost of goods, not our product.
5. The market is small and the fixed costs (testifying coders, E&O, Daubert readiness, data licences) cannot be carried by it. Conceded. The refined version carries none of the expert costs.
6. Texas has no new statute: HB 2446 passed the House 5/12/2025 and the Senate record shows only "Received from the House" (bill history fetched this session). I no longer rely on it, and the plan no longer depends on counteraffidavit volume.

## What survives and what changes

Survives: the real problem. Defense lawyers lose LOP cases on the stand, when they cannot make the treating provider's referral source, ownership, charge practices and testimony habits look like what they are. Bias and billing-practice cross is a lawyer's question, not an expert opinion, so Daubert and the AI-declaration cases (Kohls v. Ellison) do not attach. Bias evidence is generally relevant and admissible, but admissibility of specific LOP facts varies by state, so check per state.

Changes:

| Item | Original | Refined |
|---|---|---|
| Product | File-level bill kit, signed declaration, testimony | Provider Brief (cross-file, per named provider) plus a line-keyed cross outline for the case's bill |
| What is scarce | Testifying coder with a public track record | Memory across cases: what this provider has billed, said, owned and been paid for elsewhere |
| Payer | Associate expense, carrier-reimbursed, "below threshold" | Firm overhead subscription, like a research seat |
| Signature, testimony | Profit centre | Referral to existing experts, no fee, no liability |
| Moat | Cornered resource = coder's track record | Cornered resource = cross-file provider dataset, plus switching costs from a saved firm library |
| First market | Houston + Atlanta equally | Houston first (files and tools exist now), Atlanta second (SB 68 files mature in 2027) |
| Florida | Phase 2 | Out |

## Wedge customer

A partner (or firm administrator) at a 3-20 lawyer insurance-defense boutique in Houston, then Atlanta, who takes carrier-assigned auto and commercial-vehicle BI files ($25k-$250k) where a treating provider is on an LOP. Buyer owns the firm's research-tool budget. Carrier and TPA litigation units are a phase-2 buyer, attempted only if the test shows carriers will approve.

## First product: the Provider Brief

3-5 pages, facts only, every statement source-cited, for one named provider, clinic or ASC:

- Medicare Part B submitted charge vs allowed amount for the provider's top codes, where data exist. CMS publishes these by NPI and HCPCS code (search summary confirms the dataset carries submitted charges and allowed amounts; column names not verified; records with 10 or fewer beneficiaries are suppressed, so coverage of young-patient LOP providers may be thin). Hypothesis to test: the LOP charge vs the provider's own Medicare submitted charge shows a gap.
- Licence and discipline record, ownership and affiliations from Secretary of State filings, Open Payments.
- Public litigation footprint: dockets, published rulings, depositions filed as public exhibits.
- Discovery checklist for that state: LOP, referral source, factor sale and price, billed vs paid, negotiated rates (Texas: In re K&L Auto Crushers; Georgia: SB 68, causes of action arising on or after 4/21/2025).
- A two-page question bank keyed to the firm's own bill lines (LLM-drafted, human QA).

Delivered in 48 hours, concierge by the founder at first. No patient data in the first two weeks.

## Pricing (all untested guesses; the test sets them)

- $149 per brief, or $349/month per firm (6 briefs plus library search), month to month; annual $3,490.
- First sample brief free; every later brief paid.
- Phase 2, only if earned: carrier / TPA litigation-unit licence in the $1.5-3k/month range.
- Cost: 2-3 founder hours per brief now; $10-20 variable cost per brief once the library exists (inference).

## Why now

- LLM extraction and public-record synthesis make a source-cited provider brief a few hours of work, not days. In 2019 it would have been manual research. But CaseMark proves the file-level layer already collapsed to near zero, so the scarce thing moves up to cross-file provider memory.
- Disclosure regimes create the facts to collect: Georgia SB 68 (LOP, referral source, receivable sales), Texas K&L Auto Crushers discovery of negotiated rates, Florida 768.0427 as the model.
- Expert AI-use scrutiny (Kohls v. Ellison, 2025; law-firm guidance in 2026) pushes AI away from signed declarations and toward attorney-held work product.
- Plaintiff AI (EvenUp $2B+, Eve $1B+) raises package polish and volume. That is context, not proof of defense spend.
- Honest weakness: Georgia volume arrives in 2027, and no statute change drives Texas.

## Moat (7 Powers)

Primary: cornered resource, a cross-file provider dataset. Secondary: switching costs (a firm's saved, annotated briefs), plus a weak give-to-get contribution loop.

How it is reached: month 1 is public data only, which is not a moat. Months 3-12 add litigation-derived facts that firms contribute (de-identified, with contract language). Real defensibility needs roughly 300-500 provider records with at least one litigation-derived fact each, about 12-18 months in. This assumes LOP care concentrates in a few hundred providers per metro; that is unverified (no study found) and the first 20 briefs will reveal how often providers repeat.

Threats: public-only briefs could be copied in a week by CaseMark or any legal-AI vendor; a defense bar could run a free depo bank (a search for TADC found nothing either way); carriers' SIU and ISO-type data already hold provider history and could be shared with panel counsel; protective orders and QPO return-or-destroy terms may block pooling, in which case the dataset is public data plus firm-owned data only.

## Bottom-up market

- Wedge firms: 80-150 across Houston and Atlanta (inference from stale bar-membership proxies, TADC 1.5-2k and GDLA about 920 members; no direct count exists).
- $349 x 12 = $4,188 per firm per year. Full penetration: $0.33-0.63M. Realistic 10-20% in 24 months: 8-30 firms, $34-126k per year.
- Extension to Dallas, Austin, San Antonio, Georgia statewide and Florida metros, if 500-900 firms exist (pure extrapolation): $2.1-3.8M at full penetration, $0.3-0.6M at 15%.
- Carrier / TPA tier: no data, not counted.

This is a lifestyle-scale business at best. It is worth testing because the test costs almost nothing and a data asset could later move up-market.

## Competitors and edge

- CaseMark: file-level audit incl. LOP inflation, minutes, credits. We do not fight it. We can also use it as a feeder.
- V7 Go: AI agent for bill reviewers, claims-side.
- Enlyte Demand Package Review: carrier-side, about 2 days on the enhanced tier, 60% charge-reduction claim. Not competing on file turnaround.
- MedCost Contain, No World Borders, IMS Legal, Health Law Network / Blount: signature and testimony suppliers. Referral partners and likely first contributors of provider knowledge.
- General LLMs, InPractice-style playbooks, USLAW-style closed AI: single-file DIY. Accepted.
- Searched for a defense-side treating-provider database: nothing found. Weak evidence, since search is lossy.
- Edge: cross-file, metro-local, bias-focused memory; nothing else.

## Other critique points, and the design answer

- PHI and protective orders: first two weeks use no PHI. Later intake is bill-only and de-identified (no names, dates shifted to day offsets), zero-retention model terms, a customer data-rights clause, and counsel review. Fallback: public plus firm-owned data only.
- TiC "blank anchors": demoted to a bonus. Primary anchors are Medicare and the provider's own Medicare submitted charges.
- AMA CPT licence: use code numbers and our own plain-language labels. Get a licence quote before shipping official descriptors.
- Defamation exposure: facts only, source-cited, no adjectives, for lawyers only. Have an attorney check the first five briefs. Get a media / tech E&O quote.
- Efficacy is unproven: log every brief with "used at deposition? what happened?" to build outcome data. Until then, claim nothing about verdicts.
- Founder fit (18, no clinical, coding or legal credentials): the product is research plus software, no credentialed opinion, so the credential gap matters much less. Trust is borrowed from one ex-defense-partner advisor; if none will talk to him in two weeks, that is a negative signal. Cold-call hours are scarce and his LTL audit venture is already waiting on them, so choose which one gets the next two weeks.

## Riskiest assumption

Defense lawyers will pay by card, out of firm overhead, for provider-level facts they cannot get from CaseMark, a general LLM or their bar network. That bundles two claims: the briefs contain facts the lawyer finds new and usable, and the lawyer (not a carrier) can buy them.

## Two-week test (about 25-35 founder hours, $0-300)

Days 1-4: build 5 public-source-only briefs (3 Houston, 2 Atlanta) on providers visibly active in LOP cases (identified from appellate opinions, press, dockets). Self-check: at least 3 source-cited, usable facts per brief. Have an attorney review the five for defamation risk first.

Days 3-12: send each brief with a short honest note ("student researcher building a research tool, sample attached, 15 minutes?") to about 60 Houston / Atlanta defense lawyers at 3-20 lawyer firms, plus 10 litigation managers or staff counsel. Target 12 calls.

Call script:
1. The last LOP provider you deposed: prep time, tools, what you wished you had known.
2. Show the brief: which facts were new, which would you use?
3. Who pays for tools like this: overhead, carrier, client? Last vendor purchase and how it was approved? Do you have written guideline language on a spend threshold?
4. What do you use today: CaseMark, a general LLM, a bar depo bank, an expert shop? What did you last pay?
5. The ask: a Stripe link for $149 for the brief on your next deposition within 30 days, or $349/month founding rate.

Pre-registered thresholds:
- Proceed: 2 or more actual card payments of $149 or more, AND at least 4 of 12 say they would use a brief on a named upcoming deposition, AND at most 4 of 12 say the carrier would have to approve.
- Pivot to carrier / TPA pilot: 7 or more of 12 say the carrier pays and would approve. Then test with 5 litigation managers.
- Kill: 0 paid, or "I'd use CaseMark / ChatGPT / our bar" is the top answer. Stop and move to the next finalist.

## Pre-mortem (it is 2028 and this is dead)

1. Public-only briefs added nothing new for lawyers (tested in week 1-2).
2. Firms will not buy tools outside the carrier channel (tested in week 2).
3. Legal friction (defamation, scraping terms, protective orders) blocked data growth (partly mitigated now; counsel review needed).

## Verified this session vs. not

Verified by fetch: HB 2446 bill history; CaseMark page. Verified by search summary only: the CMS provider-and-service dataset's contents; no public carrier threshold exists; no defense-side provider database surfaced. Inferred or unverified: firm counts, price points, provider concentration, attach and conversion rates, Georgia SB 68 volume timing, Young v. Panera and Kohls details (taken from the critics' sources). No counteraffidavit price was found despite searching.

Sources: https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB2446 ; https://casemark.com/workflows/medical-billing-analysis ; https://catalog-beta.data.gov/dataset/medicare-physician-other-practitioners-by-provider-and-service ; https://www.thehartford.com/claims-panel-counsel/case-management-guidelines/the-hartford-global-specialty-financial-lines-group/staffing-retention-of-experts-and-document-management ; https://ezel.ai/templates/insurance-defense-retainer ; https://www.txcourts.gov/media/1452189/200071.pdf ; plus the dossier and critique sources.
