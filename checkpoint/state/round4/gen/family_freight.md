# Round 4 / Lens: cross-selling the freight-invoice audit into the family networks (as of 2026-10-26)

## Read this first: what the research changed

1. **The family networks barely ship freight.** A home-health agency is a service business (supplies arrive from a distributor; the cost it controls is mileage). Advisor offices ship nothing. An independent festival buys staging, sound, fencing, sanitation and insurance, not freight. So "sell the LTL audit to MHC, MyFinancialAdvice advisors and Baygrass" fails as framed. The family's real overlap with freight is one step away: MHC's supplier base (distributors and manufacturers of medical supplies and devices), DME and pharmacy shippers who send parcels to patients, and the business-owner clients of Ron's advisor peers.
2. **The audit engine's real asset is "line items vs. contract terms," and it applies better to non-freight lines at MHC today.** The biggest fresh shock in invoice-vs-contract land is the IEEPA tariff ruling (Feb 20, 2026, 6-3). About $166B was collected, refunds have flowed to importers of record since April 20 through CBP's CAPE portal, and the fight over who owns the money downstream (buyers who paid "tariff surcharges") is only now starting. That is idea 1.
3. **The better vertical fit for the freight engine itself is medical-device and medical-supply makers and distributors** (idea 2). It is a better door, not a better business: the unit economics are still small-ticket (see the math in idea 2).
4. **The structural gap in freight audit is verifying that a billed event happened** (liftgate, inside delivery, residential, limited access). Rate-file automation cannot do that, and the burden of proof is on the shipper. Nobody I found sells independent event evidence (idea 3).
5. **Crowded or shrinking, so cut:** parcel late-refund recovery as a generic business (Refund Retriever, ShipScience, LateShipment, Shipware, Una); ocean demurrage and detention audit (BlueCargo, Windward, Cargoo, GoComet, BuyCo, Portcast; billed charges fell from the 2022 peak, and the 2025 court ruling unsettled who can be billed); smartphone LiDAR cubing (vMeasure, FreightSizer); a group parcel program for HME buyers (Shipware, Una/Triose); an LTL benchmark (Shipware, Gartner-listed tools); a carrier tariff and accessorial data API (SMC3 RateWare Plus is the industry's incumbent).
6. **MHC type is still unverified.** My search found no founder or parent for "MHC Healthcare" in Florida. Directory listings show "MHC Area 6 LLC" (Riverview) and "MHC Area 10 LLC" (Fort Lauderdale) as Medicare-certified home health agencies. Ideas 4 and 8 depend on MHC (or a peer) having a DME or pharmacy arm. First task: ask Mom what MHC buys, ships and bills for.

## Freight exposure map (who actually ships what)

| Family-network business | Ships freight? | What is actually exposed |
|---|---|---|
| Home-health agency (MHC) | Almost none | Supply invoices with tariff, fuel and "fee" lines; mileage |
| DME / HME arm (if any) | Yes: parcel to patient homes, LTL inbound for beds and chairs | Proof-of-delivery files, resupply parcels, lost rental equipment |
| Pharmacy / infusion arm (if any) | Yes: overnight cold-chain parcel | Reships, late-delivery refunds, excursions |
| MHC's suppliers (medical distributors, device makers) | Yes: LTL and parcel, heavily | The best home for the freight audit itself |
| Advisor offices (Ron's MFA network) | No | Their business-owner clients ship; advisors are a channel |
| Baygrass and peer festivals | Marginal | Production vendor invoices and costs |

## Ranking logic

Scored on: first paying customer in 60-90 days, family company as pilot, non-family path inside 6 months, no license wall, uses his edges, credible path to a $10M+ business, not crowded. Ideas 1 to 3 are the ones I would start with. Ideas 4 to 8 are real but each has a named weakness.

## Grounding facts (with confidence)

- Tariff refunds: Supreme Court struck IEEPA tariffs 6-3 on Feb 20, 2026; about $166B collected; CAPE Phase 1 opened Apr 20; $104.29B authorized and $71.06B paid by Jun 29 (Cato). Phase 3 (finally liquidated entries, CIT plaintiffs only) was set for Oct 6. Source: [Cato](https://www.cato.org/blog/ieepa-refunds-update-good-progress-still-ways-go), [Thompson Hine](https://www.thompsonhinesmartrade.com/2026/09/cbp-confirms-october-6-2026-launch-of-phase-3-of-the-ieepa-tariff-refund-process/). Confidence: high on the ruling, medium on the dollar figures (secondary sources).
- Refunds go only to the importer of record. Downstream buyers have no claim against CBP; recovery rests on contract clauses (surcharge, true-up, refund-sharing), unjust enrichment, and state consumer law. No court has decided pass-through claims on the merits. Private disputes emerged as payments reached importers in Sept 2026. Sources: [Nakachi Eckhardt](https://www.tradelawcounsel.com/insights-news/2026/9/4/private-disputes-over-ieepa-tariff-refunds-emerge-as-cape-payments-reach-importers-of-record), [Jones Walker](https://www.joneswalker.com/en/insights/blogs/perspectives/who-gets-the-tariff-refund-how-retailers-and-downstream-buyers-can-recover-their.html). One of those firms says most companies seriously seeking refunds have already obtained them, so timing matters.
- Existing downstream-recovery competitor: RSK Supplier Recovery (consulting, pricing not published). Source: [RSK](https://rsk.com/practices/supplier-recovery).
- FedEx, UPS and DHL say they will pass IEEPA refunds back to whoever paid the duty on carrier-cleared shipments (brokerage fees are not refunded). Source: [Supply Chain Dive](https://www.supplychaindive.com/news/fedex-ups-and-dhl-detail-tariff-refund-approach-for-customers/818057/).
- Stericycle precedent for hidden-fee creep: a class of over 246,000 small customers, a $295M settlement, plaintiffs estimated $608M of overcharges (allegations). Source: [Hagens Berman](https://hbsslaw.com/cases/stericycle).
- Home-health count: 12,234 Medicare-certified agencies in 2024 (MedPAC, via [Home Health Care News](https://homehealthcarenews.com/2026/07/medpac-flags-california-los-angeles-as-primary-drivers-of-home-health-agency-growth/)). DMEPOS: CMS cites 79,000+ approved suppliers ([Becker's](https://www.beckersasc.com/supply-chain/the-dme-fraud-crackdown-in-10-numbers/)).
- Medicare proof of delivery for shipped DME: the record must trace the item from supplier to beneficiary, retained 7 years; items without it are denied and overpayments requested. Source: [Noridian](https://med.noridianmedicare.com/web/jadme/topics/documentation/proof-of-delivery).
- Parcel refunds: contingency fees run 25-50%; FedEx and UPS narrowed their money-back guarantees to overnight and 2-day AM services; request windows are about 15 days; late-eligible volume is about 3.5% of shipments. Sources: [ShipScience Q2 2026 index](https://www.shipscience.com/parcel-refund-index-q2-2026/), [Refund Retriever](https://refundretriever.com/?p=30). Vendor claims, treat as such.
- Florida manufacturing: 26,000+ manufacturers, 80% with 20 or fewer employees; FloridaMakes is the state's official NIST MEP representative; it has an MOU with the Florida SBDC Network. Source: [FloridaMakes](https://www.floridamakes.com/manufacturing-ecosystem/manufacts2). Device-maker counts are inconsistent (roughly 400 to 1,000+ by old counts; no current official number found).
- Freight claims: Carmack gives at least 9 months to file; the statute does not shift a recovery firm's fee to the carrier. Source: [Inbound Logistics](https://www.inboundlogistics.com/articles/when-to-file-loss-and-damage-claims-know-your-rights/).
- Accessorial disputes: carriers generally win when the service was required and performed; the burden is on the shipper to document otherwise (dock photos, delivery receipt). Source: [WWEX](https://www.wwex.com/shipping-resources/how-to-dispute-accessorial-fees). Free tool competitor: [Warp accessorial audit](https://www.wearewarp.com/tools/accessorial-audit).
- Home-care purchasing groups already exist: HPSI, IMCO Home Care, The MED Group (3-5% stated savings), CAHSAH (earns vendor royalties). Source: [HPSI/Medline](https://www.homecaremag.com/news/medline-announces-agreement-hpsi-purchasing-services), [CAHSAH](https://www.cahsah.org/group-purchasing).
- VGM, the HME buying group, cites about 3,500 member providers and about 9,000 locations (its own site; figures differ by page).
- Festivals: Okeechobee paused future editions after its 2026 return, citing costs ([CBS12](https://cbs12.com/news/local/okeechobee-music-arts-festival-pauses-future-events-cites-rising-costs-after-2026-return-okeechobee-florida-omf-soundslinger-lunineers-zriz-t-pain-lcd-soundsystem-cage-the-elephant-sunshine-grove)); Michelada Fest cancelled again in 2026 (production, labor and insurance costs; [Sun-Times](https://chicago.suntimes.com/music/2026/06/05/michelada-fest-chicago-2026-summer-cancel-ticket-events-cost?rand=66539)). UK independent festivals fell from roughly 800-900 to 592 in 2025 (AIF via [Ticket Tailor](https://www.tickettailor.com/blog/the-state-of-independent-uk-festivals-in-2026)). The pooled-buying "15-30% discount" claim is from a ticketing vendor's blog and is not documented.

---

## 1. Surcharge Clawback: tariff pass-through, contract-price and hidden-fee recovery for healthcare buyers

**One-liner:** Read two years of a provider's supplier invoices, find tariff surcharges, price steps that track tariff dates, and fee creep, match each to the contract clause that lets the buyer claim money back, and take a share of what comes back.

- **Customer / payer:** Owner or CFO of an owner-operated healthcare services company (MHC first), then other home-health agencies (about 12,200), DME suppliers (79,000 enrolled), labs, clinics. Pays 20% of net cash, credit or price reduction recovered. No recovery, no fee. No budget line needed.
- **Problem:** In 2025 buyers saw "tariff surcharge" lines and quiet price increases. The tariffs were then ruled unlawful. The importer of record gets the refund; the buyer who paid it does not, unless a contract clause, a true-up term or an unjust-enrichment theory forces a share. Most buyers have not even identified which lines to claim.
- **Solution:** (a) Ingest invoices (PDF, email, CSV) and build a supplier ledger with every surcharge line and every unit-price step. (b) Map each supplier to who was importer of record where known. (c) Quote the clause (surcharge, true-up, refund-sharing) and score claim strength. (d) Output an evidence pack and a demand letter the client's own officer or counsel signs. (e) Add two cousins in the same pass: contract-price compliance against a GPO or negotiated price list, and fee creep (fuel, environmental, "regulatory", small-order, shipping and handling) in the Stericycle pattern.
- **Why now:** Refunds hit importers from April; private disputes surfaced in September; the window where suppliers will still negotiate (before the money is spent and positions harden) is months, not years. Law firms are publishing advice, but a productized low-ticket service for small buyers is thin.
- **Founder edge:** Mom works at MHC, so real invoices exist on day one. The freight engine already does "billed line vs. tariff or contract." Vendor invoices usually contain no PHI, so no BAA in the first pass (strip any patient identifiers if they appear).
- **Kill test (do this first, 2 hours):** Ask MHC for the last 12 months of invoices from its top 5 medical-supply vendors. If there are no surcharge lines, no price step in the tariff months and no fee creep, kill the tariff angle and keep only the fee-creep and price-compliance cousins.
- **Legal premises to check:** Pass-through claims are unsettled; the importer must have received the refund first; federal law does not require sharing. Do not give legal advice; the client sends the demand. Get an attorney's written answer on (1) unauthorized practice of law for letter templates, (2) any state collection-licensing question for a contingency fee on a commercial claim, (3) lawyer fee-splitting if a law firm joins (a lawyer cannot share fees with a non-lawyer, so use flat-fee referrals).
- **First 10 customers:** (1) MHC. (2-4) Two or three other agencies or DME shops the grandfather or MHC administrators name when asked "who do you trade notes with?" (5) A pharmacy or clinic in the family's circle. (6) Baygrass (equipment rental and merch invoices). (7-10) Intros from the state home-care association and from VGM-type groups (apply as a member benefit later).
- **Cost to first revenue:** about $1,500 (attorney hour, domain, e-sign).
- **Who does it today:** RSK Supplier Recovery (consulting-led, pricing hidden); law-firm advisories (Jones Walker, Covington, Baker Donelson); importer-side tariff refund shops (Tariff Recovery Group and similar); GPOs with 3-5% savings (HPSI, IMCO, MED Group); Cass's waste expense management for large healthcare accounts. Nobody I found sells a self-serve ledger to a 10-site home-health operator.
- **Path to big (honest):** The tariff pool is one-time and the law is unsettled. It only becomes big as a recurring "vendor surcharge ledger" with a clause database: 5,000 customers at about $2,000 a year is $10M. That is a heroic share of about 91,000 agencies and DME suppliers unless it expands to clinics, dental, vet and senior living. Say so out loud.

## 2. MedFreight Desk: freight audit plus damage claims for medical-device and medical-supply makers and distributors

**One-liner:** Point the finished LTL and parcel audit engine at one vertical (companies that make or distribute medical products), add a damage-claims desk, and reach them through MHC's suppliers and the manufacturing-extension network.

- **Customer / payer:** Owner or operations lead at a 5-100 person device maker, supply importer or distributor. Pays 15% of recoveries (free first look), plus 20% on filed damage claims.
- **Why this vertical beats a generic list:** High value per pallet (bigger claims), handling-sensitive goods (more damage), shipping documents already kept for traceability, and a real density-class change since July 19, 2025 that is still generating reclass bills.
- **Channel (the new part):** (1) Ask MHC's purchasing contact to introduce three suppliers. A customer asking a vendor to meet "a student who can find freight overcharges" is a warm door. (2) FloridaMakes (official MEP representative) and the Florida SBDC network, which have a signed MOU. (3) Later, other states' MEP centers: a national channel of manufacturing advisors with the same small-manufacturer client base.
- **Founder edge:** The engine exists (22 checks, 2,266 tests, 187 callable prospects, 98 ready emails). What is missing is calls, not code.
- **Honest math:** A manufacturer with $200k of annual LTL spend and a 4% error rate gives $8,000 recoverable; at 15-20% that is $1,200-1,600 a year per client. $10M of revenue needs 6,000-8,000 clients. This only becomes big with software, claims automation and a channel. Prior validation scored the generic version 3.33 out of 10; this changes the door and the claims upside, not the ceiling.
- **First 10 customers:** The 3 supplier intros; 3 FloridaMakes/SBDC introductions; 4 from the existing call sheet filtered to medical products.
- **Cost to first revenue:** about $800.
- **Who does it today:** Eller Audit (free first audit, 15%), the full freight-audit-and-payment field (Cass, nVision and others), freight claims shops (for example TLI), Warp's free reweigh/reclass tool, vMeasure and FreightSizer for dimensions.
- **Path to big:** Claims automation for small claims the big shops ignore, plus the data asset in idea 3, plus the MEP channel across states.

## 3. Event Truth: independent evidence that a billed freight event actually happened

**One-liner:** For every accessorial on a freight bill (liftgate, inside delivery, residential, limited access, redelivery), assemble independent evidence from imagery, a 20-second consignee text and the delivery receipt, and file the dispute with the evidence attached.

- **Customer / payer:** Small shippers with repeat consignees (medical makers shipping to clinics; DME shipping to homes). Pays 20% of accessorials recovered, or $2-5 per verified shipment later.
- **Problem:** Carriers win when a service was required and performed; the shipper carries the burden of proof. Rate-file automation (what the big auditors run) cannot tell whether a liftgate was used. Your own fact-check file says the same: invoice-vs-rate-file cannot verify billed events.
- **Solution:** (1) Address truth from licensed map and parcel data (dock presence, commercial vs. residential). Do not scrape consumer map products; their terms forbid it. (2) A text to the consignee after delivery ("Did the driver use a liftgate? Was a dock available?"). (3) Parse the signed receipt and driver photos. (4) Auto-compose the dispute within the carrier's window (some carriers allow only 30 days).
- **Founder edge:** He already shipped cube-rule and invoice-checker tools; SMS-first flows and parsing are his speed. MHC's offices are real consignees to test on.
- **Kill test:** On 30 real disputed accessorials, does an evidence packet get the charge withdrawn at 40% or better? Do consignees answer the text at 30% or better? If not, shelve it.
- **First 10 customers:** MedFreight clients (idea 2) get it bundled; a DME shop that delivers to homes; two brokers who want a differentiator.
- **Cost to first revenue:** about $1,000 (SMS, address data licence, attorney note).
- **Who does it today:** Nobody I found sells consignee-confirmed event evidence. Warp's free tool flags suspicious accessorials by rule; carriers' address classification vendors only classify addresses; SMC3 RateWare Plus handles published accessorial rates, not events.
- **Path to big:** An API licensed to freight-audit firms, brokers and TMS vendors, priced per shipment, built on a growing address-truth dataset. Unproven: carriers may not budge, and consignee response rates are unknown.

## 4. ProofPack: Medicare proof-of-delivery packets for shipped DME and pharmacy orders

**One-liner:** Auto-build the proof-of-delivery file that Medicare auditors demand (full carrier tracking, signature, date, recipient) for every shipped order and flag gaps before billing.

- **Customer / payer:** DME suppliers that ship resupply (CPAP, diabetic, wound care) and small pharmacies. Pays $149-499 a month per location. Budget line: audit exposure and recoupments.
- **Problem:** For shipped items the record must trace the item from supplier to beneficiary and be kept 7 years; without it claims are denied and overpayments requested. With 79,000 enrolled suppliers and an active fraud crackdown, audits are not rare. Small shops hold paper tickets and screenshots.
- **Solution:** Connect to the carrier tracking feeds plus an order CSV; produce a per-claim PDF; also add e-signature delivery tickets for direct deliveries; respond to documentation requests in minutes.
- **HIPAA:** Packets contain names and addresses. Sign a BAA, use HIPAA-eligible hosting, use order IDs and minimum necessary fields. Budget for an attorney review.
- **Founder edge:** Fast build; MHC (or its DME or pharmacy arm, if any) as the pilot. If MHC has no such arm, entry is through VGM-type groups (3,500 members), which is a weaker start.
- **First 10 customers:** MHC's DME or pharmacy arm; 3 HMEs from the family circle; 6 from a VGM or state-association talk.
- **Cost to first revenue:** about $3,000.
- **Who does it today:** ParcelShield (predictive tracking plus proof-of-delivery audit; Walmart Specialty and UNC Health are named customers), the practice-management vendors (Brightree and WellSky workflows), VGM Fulfillment for outsourced fulfilment. Small shops are underserved, but the incumbents are well funded.
- **Path to big:** Evidence layer that also monetizes through parcel-refund recovery from the same tracking data; 10,000 locations at $250 a month is $30M, which is a large share of VGM-scale networks.

## 5. Advisor-Embedded Leak Check: a white-label spend-leak scan advisors give their business-owner clients

**One-liner:** Let a CPA, RIA or fractional CFO hand a business-owner client a branded "leak check" (freight, supplier surcharges, duplicate fees) that the engine runs; the client pays only on recovery.

- **Customer / payer:** Advisors want a retention hook; the client pays 15-20% of recoveries. Advisor pays nothing at first, later a flat annual license.
- **Compliance wall to design around:** Do not pay advisors per referral at first. Commission and referral rules are touchy (AICPA limits for attest clients; fiduciary conflict disclosure for advisers). Use a flat license or no fee. Ron built compliance technology for advisors, so he is a good adviser on how they think.
- **Founder edge:** Ron's 24 years and a network of pre-screened flat-fee advisors; his Gen Z world is irrelevant here, his father's is the asset.
- **First 10 customers:** 3 advisors Ron introduces; each brings 2-3 business-owner clients; plus 3 CPAs from the same circle.
- **Cost to first revenue:** about $600.
- **Who does it today:** FreightWise runs referral commissions for brokers and fulfilment firms; cost-reduction consultancies run franchise-style CPA channels (not verified in detail).
- **Path to big:** A distribution channel, not a product. It is only worth building if ideas 1 or 2 work. Weakness: advisors are cautious about endorsing third-party vendors.

## 6. Baygrass Buying Club: an event-production co-op for independent festivals (benchmarks, pooled bids, invoice audit)

**One-liner:** Independent festivals share anonymized vendor quotes and invoices; the club benchmarks staging, sound, fencing, sanitation and trucking prices, runs pooled bids, and audits invoices against contracts.

- **Customer / payer:** Festival directors. $49-199 a month plus a vendor administrative fee on pooled deals (the way CAHSAH's group earns vendor royalties).
- **Why now:** Costs for stage, sound, labor and insurance jumped; Okeechobee paused and Michelada cancelled (see grounding facts); UK independent festivals dropped from about 800-900 to 592.
- **Founder edge:** Ron co-founded Annapolis Baygrass (nominated for IBMA 2026 Event of the Year) and knows the bluegrass and Americana circuit.
- **First 10 customers:** Baygrass; then 5 to 9 festivals Ron names, through IBMA and regional associations.
- **Cost to first revenue:** about $500.
- **Who does it today:** I found no US festival buying co-op. The "15-30% off pooled orders" claim comes from a ticketing vendor's blog and is undocumented.
- **Path to big (honest):** Bluegrass festivals are a small market. Reaching $10M needs a broader "temporary events" co-op (fairs, races, municipal events) with about $300M of pooled spend at a 3% fee. Plausible only if the first festivals show real savings.

## 7. Broker Audit Drop-In: the audit engine white-labeled to freight brokers, 3PLs and parcel consultants

**One-liner:** Brokers with 50-300 small shippers each add "we audit your bills" as a feature, run by your engine; they pay per shipper per month.

- **Customer / payer:** Independent freight brokers and 3PLs; $100-300 a month per shipper they enroll or a 30% share of recoveries.
- **Weakness:** No family tie. Brokers earn on volume and may not want errors surfaced. Fits only if idea 2 shows the engine works.
- **First 10 customers:** Three brokers from the call list; any broker that serves a MedFreight client.
- **Cost to first revenue:** about $1,000.
- **Who does it today:** The freight-audit-and-payment firms, TMS-embedded audits, and FreightWise (which pays commissions to brokerages, audit firms and fulfilment companies).
- **Path to big:** One broker equals 100 shippers, so scale is multiplied. Still capped by small-shipper recoveries.

## 8. Cold-Chain Claims Desk: reship and refund recovery for independent specialty and infusion pharmacies

**One-liner:** Track every temperature-sensitive overnight parcel, file the carrier's late-delivery refund inside its 15-day window, and document reships and excursions for claims.

- **Customer / payer:** Independent specialty, compounding and infusion pharmacies; 25% of recovered refunds and claims.
- **Weaknesses:** Family tie only if MHC has a pharmacy or infusion arm. Refund coverage is narrow (overnight and 2-day AM services). Carrier liability for temperature-sensitive pharma may be limited by tariff; I did not verify the carrier terms. Generic parcel refund recovery is crowded.
- **Founder edge:** Fast build of the tracking and filing loop; pharmacy contacts through the family if any.
- **First 10 customers:** MHC-linked pharmacy (if exists); 3 independents via a state pharmacy association; 6 via cold outreach.
- **Cost to first revenue:** about $2,500 (needs HIPAA-aware handling if patient data appears).
- **Who does it today:** ParcelShield (tracking and intervention, Walmart Specialty and UNC Health), Refund Retriever, ShipScience and LateShipment (refunds), sensor vendors such as SpotSee.
- **Path to big:** Folds into idea 4 as the monetization of the same tracking data. Standing alone it is small.

---

## Considered and cut

- **Ocean demurrage and detention audit:** crowded (BlueCargo, Windward, Cargoo, GoComet, BuyCo, Portcast); nine carriers collected about $15.4B over April 2020 to March 2025 but the indices fell from the 2022 peak; the Sept 2025 D.C. Circuit ruling vacated the "who can be billed" provision.
- **HME rental-equipment retrieval desk:** real pain (an HME owner described 15-30 unknown patient deaths a week among 8,000 patients) but HME Recovery already sells the death-notice side, and physical retrieval means vehicles, liability and hours he does not have.
- **Medical-waste invoice audit as a separate business:** Cass already sells waste expense management to healthcare; keep it as a module inside idea 1.
- **A group parcel program for HME buyers:** Shipware and Una (with a healthcare partner) already do it.
- **Yellow bankruptcy shipper claims:** I found no reports of the estate pursuing shippers for undercharges.
- **Tariff-refund filing for importers:** crowded with dozens of firms and mostly already paid out for straightforward entries.
- **Carrier tariff and accessorial rules API:** SMC3 owns that space.

## Monday plan

1. Text Mom: "Does MHC have a DME or pharmacy arm? Who handles supply purchasing? Can I see 12 months of invoices from the top 5 supply vendors, with patient names removed?"
2. Run the idea 1 kill test on those invoices (2 hours).
3. Book one attorney hour: unauthorized practice of law for demand-letter templates, collection licensing for contingency fees on commercial claims, and fee-splitting if a law firm partners.
4. Ask MHC procurement to introduce three of its suppliers, then email FloridaMakes about a small-manufacturer talk (idea 2).
5. Pull 30 old freight bills with accessorials from the call-list prospects' free first looks to run the idea 3 evidence test.
