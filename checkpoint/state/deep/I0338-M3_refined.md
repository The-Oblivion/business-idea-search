# I0338-M3 refined: Direct-Notice Desk for Cattle Lenders

Date: 2026-10-13. Verdict: **alive, but only as a small niche compliance business, not the venture originally pitched.** The two-sided alert network and the Phase 3 title registry are deleted. What survives is a lender-side product that does not need any sale barn to cooperate.

## 0. What I verified this session vs. what I am taking from the critics

Verified by me (fetched):
- 7 U.S.C. 1631 (Cornell LII). A commission merchant or selling agent takes cattle free of the seller's security interest, even if it knows of it, unless it received written notice from the secured party or the seller within 1 year before the sale, the notice carried payment conditions, and the agent failed to perform them. Required notice content: secured party and debtor names and addresses, a debtor identifier, a product description including crop year and each county, and the payment obligations. Material changes must be amended in writing within 3 months. The statute text does not prescribe a delivery method (certified mail, email, etc.). Whether USDA regulations add one: not checked.
- USDA AMS page on certified central filing systems (fetched through a mirror; page undated). 19 states: AL, CO, ID, LA, ME, MN, MS, MT, NE, NH, NM, ND, OK, OR, SD, UT, VT, WV, WY. The page does not say which products each "Specified" entry covers. Texas, Kansas, Missouri, Kentucky, Tennessee, Arkansas, Iowa, Georgia and Florida are not on it.
- Baird Holm article (fetched): nothing in law mandates an EFS or direct notice; filing is "cheap insurance"; direct notice protects only against buyers that received it within the year, not against buyers the farmer picks later; courts have ruled against lenders when required content (county, tax ID) was missing, and direct notice is held to a stricter standard than an EFS in the Eighth Circuit; Iowa and Kansas are direct-notice-only states.

Taken from the critics' fetched pages (not re-verified by me): 9 CFR 201.43(a) knowledge clause; Fin-Ag v. Pipestone (lender omitted the d/b/a, barn largely won); AgCountry v. Tri-County; Nebraska Banker anecdote of a bank skipping notice as "too much trouble"; Alberta C$52.50/yr alert, Montana $25 filing, North Dakota $480/yr statewide list; FRED ag charge-off series (about 0.165% average, all-cause); KC Fed "negligible" at most banks.

## 1. Critique-by-critique response

| Critique point | Accept / reject | What changes |
|---|---|---|
| C1: Nebraska is the most incumbent-saturated place to start (central filing master list, mandatory brand inspection, Sale Time, Montana-style portals) | Accept | Wedge moves to states with no certified central filing and no mandatory inspection: Kansas first (direct-notice-only per Baird Holm), then Missouri and Kentucky (absent from the USDA list; direct-notice status inferred, confirm in week 1). Nebraska, Montana, Dakotas, Oklahoma and the other 14 certified states are out. In the wedge there is no free master list, no brand-lien portal, no state alert to undercut us. |
| C1: Barn software and LMA own the supply side; matching is a commodity | Accept, dependency removed | The product never needs barn data. The lender sends statutory notice; the statute binds the barn whether or not it cooperates. Sale Time, ViewTrak and LMA are paid by barns and cannot credibly build a tool whose job is to force barns to honor lender payment conditions. That is counter-positioning, not a moat claim about data. |
| C1/C2/C3: lender inertia, cheap substitutes, lenders already skip a $30 filing | Accept as the central risk | Priced near the government anchors instead of 6-12x above. Sold first as a fixed-fee audit so the inertia is measured directly. This is the riskiest assumption (section 5). |
| C1: fraudsters evade by alias or unapproved barns; 31% of feeder receipts bypass auctions; phantom collateral not caught | Accept | We no longer claim to stop fraud. Scope is ordinary-course unauthorized sales through barns and, above all, the lender's own notice and filing defects. Determined alias fraud and non-barn channels are out of scope and stated as such. |
| C1/C3: Phase 3 title registry has no legal hook; NAIS history; Halter, Allflex, B3; buyers too few | Accept | Phase 3 deleted, not reframed. Cattle have no title statute, a private registry has no perfection or priority effect, and the funder pool is about 165 institutions. |
| C2: price ($300-600) exceeds the loss the product can prevent ($20-125 per loan per year) | Accept | Price drops to $30 per borrower per year (floor $2,500 per institution). That sits inside the critic's own recoverable-value band only if exit sales are at least about 10% of cattle-loan losses and notices reach about half of the barns used. Both are assumptions the interviews must confirm. Market size shrinks accordingly (section 3). |
| C2/C3: barn has a negative incentive (1631(g) shield, 9 CFR 201.43 knowledge clause); pre-sale lists may not exist | Accept the incentive, reject that it matters | Barns are not asked to ingest, share or pay anything. A standing annual notice replaces same-day alerts, so the P&S next-business-day payout rule is not a problem: the barn sets up joint-payee handling at check-in because the law requires it once noticed. The "knowledge" the barn gains is exactly the lender's statutory right. Local friction with barn owners is real and a loan-officer-level objection to test. |
| C2: go-to-market (ACV $6-45K, 12-18 month bank vendor reviews, rural field sales) | Accept in part | Entry offer is a one-time professional-services audit on a redacted spreadsheet, signed on a one-page order form, which should fall within an officer's signing authority and does not touch bank systems. No field sales: channel is ag-law firms, state bankers associations, and direct credit-administration outreach. At about $4.5K per institution, a field-sales motion cannot pay back; if the channel does not work, the business is dead. The notice requires a debtor identifier (tax ID or SSN-type data), so the pilot uses bring-your-own-identifier: the bank's staff merge it at send time and we never store it. |
| C2: demand evidence does not match the product (cases were caught by inspections, covenants, defaults) | Accept | Dropped the forged-bill-of-sale case and exit-sale-as-fraud-detector framing. Remaining evidence is thinner and different: lender notice and filing defects (Fin-Ag, AgCountry, the Nebraska Banker anecdote, Baird Holm's content-error warning). That is three or four items, not a market proof; the test adds a case-law count and lender recall of incidents. |
| C2/C3: moat illusory, public EFS data, cornered resource circular | Accept | Cornered-resource claim dropped. Realistic power: counter-positioning plus modest switching costs from holding the lender's annual notice record. Weak-to-moderate, honestly stated. |
| C3: lenders are either protected (EFS in central filing states) or too sloppy to buy | Partly accept | Central-filing states removed from the wedge, because lenders there are already protected by the free system. In direct-notice states the lender is not protected unless it notices each barn, which is the burden the product removes. Whether the remaining lenders are "too sloppy to buy" is the test. |
| C3: alert fatigue in October-November on normal authorized sales | Accept | Per-consignment alerts are not part of the paid product. An optional "watch public sale reports" feature stays as a free add-on only if barns publish seller names, to be checked in a one-day scrape. |
| C3: why-now stale (EID rule covers breeding cattle, fraud case mismatched, screwworm, herd at 75-year low) | Accept | EID and fraud-headline why-now removed. Texas and the Southern Plains are excluded from the pilot (screwworm movement controls, per the critic's search summary). Remaining why-now is cost-side: cheap LLM and OCR processing of messy loan files and filings lets one person audit 40 borrower files in about a day. That is real but copyable. |
| C3: first dollar 9-18 months away | Reject for the audit, accept for the platform | Audit revenue can start within weeks of a signed order form; platform subscriptions will take longer and are not assumed in the first year. |

## 2. The refined business

**Customer.** The credit-administration or ag-lending manager (the person who owns documentation and exams, not the loan officer who owns the relationship) at a community bank of roughly $300M-$2B assets, or a Farm Credit association, in Kansas, Missouri or Kentucky, with 100+ cattle borrowers.

**Job.** Make sure that if a borrower's cattle are sold through a barn or to a buyer, the lender holds a complete, current, provable statutory notice that forces that barn to honor the lender's payment conditions.

**Product, stage 1: Notice Gap Audit (service, 10 business days).** Input: redacted spreadsheet of cattle borrowers (entities, d/b/a, family names, brands, counties, last notice date). Output: per-borrower gap report against the statute (content, one-year receipt window, three-month amendment, name variants, counties), a trade-area barn and buyer map from public licensee lists, and ready-to-send, content-checked notice packets with the identifier left blank for bank staff. Optional: we run the send and track acknowledgments.

**Product, stage 2: Notice Desk (subscription).** Annual re-notice before the one-year window closes, amendment tracking, receipt tracking, and an examiner-ready binder. Free read-only verify page for barns (optional, no dependency).

**Pricing.** Audit $2,000 flat for up to 40 borrower files, credited against year one. Subscription $30 per borrower per year, floor $2,500 per institution; mail and filing fees at cost. Anchors: Alberta alert C$52.50/yr, Montana filing $25, North Dakota statewide list $480/yr. Payer: the lender only.

**Moat (7 Powers).** Primary: counter-positioning against barn-side vendors and trade groups that cannot serve as lender advocates without alienating their payers. Secondary: switching costs from holding the lender's dated notice record, built over an annual cycle. Reached after roughly two annual cycles with 20-30 institutions. Not claimed: scale economies, network effects, cornered resource.

**Competitors and substitutes.** Ag-law firms (substitute and, better, channel; Baird Holm and Domina write on exactly this topic); Wolters Kluwer lien services (generic monitoring, farm-products notice logic not checked); Nortridge and Abrigo (own the lender workflow, potential integration partners); AgBaseline and Farmers National Company (inspections, not notices); Sale Time Systems, ViewTrak, LMA (barn side, structurally conflicted); state registries (absent in the wedge states). No direct competitor found, which reflects thin search coverage, not proof.

## 3. Bottom-up market (assumptions marked A)

- Ag banks nationally: 933 (farmdoc daily, Q4 2025, from the dossier). With material cattle books: 30% (A) = about 280.
- Outside the 19 certified states: about 50% (A) = about 140 banks, plus about 25 Farm Credit associations (A, count unverified) = about 165 institutions.
- Cattle borrowers per institution: 150 (pitch figure, unverified). Revenue per institution: 150 x $30 = about $4.5K per year.
- 100% penetration: about $0.74M per year. At 25-40%: about $0.19-0.30M per year. One-time audits at $2,000 on 40% of institutions: about $0.13M.
- If the same program also covers other farm products (grain, hogs, milk) and borrower counts triple (A): about $2.2M at 100%, about $0.55-0.9M at 25-40%.
- Honest read: a realistic three-year outcome is $100-400K ARR, with a ceiling near $2M. This is not venture scale. The original claim of $2-3M from 40 banks relied on $300-600 per loan, which the loss math does not support.

## 4. Pre-mortem (2028)

1. Lenders keep skipping it because they judge the risk negligible, not because it is a hassle. Not fixable by execution; this is what the test measures.
2. A law firm bundles it free with other work, or Wolters Kluwer adds a farm-products module. Partly fixable by making law firms the channel.
3. Counsel says platform-delivered notices do not satisfy the statute's receipt standard or raise unauthorized-practice concerns. Gate: week-1 counsel call.
4. Banks refuse a startup that handles debtor identifiers. Mitigated by bring-your-own-identifier in stage 1.

## 5. Riskiest assumption and the 2-week test

**Riskiest assumption.** Ag lenders in direct-notice states will pay real money (about $2,000 up front, about $30 per borrower per year after) to close a notice gap that is cheap to close by hand and that they already choose not to close, because the obstacle is friction and not a belief that the risk is negligible.

**Test (days 1-14, no building).**
- Days 1-3, desk only: confirm Kansas, Missouri and Kentucky are direct-notice states; list licensed markets per county from state and USDA lists; count reported court decisions since 2005 where a lender's claim against a market or buyer failed over notice or filing defects; draft one sample notice and check it against 1631; email two ag-law firms about electronic delivery and a channel arrangement; scrape 20 barn websites to see whether sale reports name sellers (add-on check only).
- Days 3-14: contact about 60 ag credit or loan-administration people in the three states (bankers association directories, Farm Credit association sites, law-firm introductions). Offer the Notice Gap Audit at $2,000 with a signed one-page order form, invoiced on delivery. Ask each person to describe the last unauthorized sale, near-miss or defective filing they know of, and how they handle barn notices today.

**Pass:** at least 10 conversations, at least 3 signed order forms from non-friends, at least 3 interviewees describing a concrete incident, and a law firm confirming electronic delivery is arguable. **Kill:** fewer than 10 conversations (distribution fails), or 10+ conversations with zero signed orders and fewer than 3 incidents (demand fails). One or two orders: deliver those audits and measure the gap rate before deciding; do not extend outreach. Cost: about 25-35 hours and about $0.
