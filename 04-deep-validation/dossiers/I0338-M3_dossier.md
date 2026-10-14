# I0338-M3 Dossier: Cattle Lien Registry and Sale-Barn Exit Alerts

Research date: 2026-10-13. Items marked (S) were read only in a search-result summary, not a fetched page. Every figure below has a source or is labeled an assumption.

## 1. Verdict

Provisional: **weakened, not dead.** The 30-day manual pilot is cheap and still worth running, but four load-bearing premises of the pitch did not survive checking:

1. The headline fraud case is a different fraud type from the one the product catches.
2. Federal law gives sale barns more protection than the pitch assumes, which weakens "barns pay twice, so they will fund this."
3. Sale-barn software and state brand agencies already offer lien checks and lender-facing registries.
4. Public price anchors are 6-12x below the proposed $300-600 per loan per year.

My bottom-up estimate puts the Phase 1 pool near $4-13M a year at 100% penetration (Section 3). That is a niche business unless the Phase 3 registry is both built and adopted.

## 2. Pitch claims versus verified facts

| Pitch claim | Finding |
|---|---|
| Parent fraud case: "$2.8M loan against 850 head" shows double-pledging | The case is Craig Johnson, a Missouri bank vice president and pastor, who pleaded guilty to at least $9.3M of fraud. Prosecutors say he never bought cattle, and the "850 cow-calf pairs for $2.8M" was a forged bill of sale. The article mentions no liens and no sale barns. [KCTV5, 2026-09-10](https://www.kctv5.com/2026/09/10/former-bank-vp-pastor-pleads-guilty-multi-million-dollar-cattle-investment-fraud-scheme/) |
| Markets "end up paying twice" on conversion | Partly true under old common law; the Food Security Act (FSA) largely displaced it. See Section 4. |
| State agencies are passive, paper or annual lists | Contradicted for Montana (live brand-lien portal) and Alberta (paid alert service). See Section 5. |
| EID tags are more common after the Nov 2024 rule | The rule took effect 2024-11-05 but covers sexually intact cattle and bison 18 months or older, dairy cattle and rodeo/exhibition cattle, and grandfathers previously tagged animals. Steers and feeder calves are not covered. Brands and tattoos are unchanged. [Federal Register](https://www.govinfo.gov/content/pkg/FR-2024-05-09/html/2024-09717.htm), [PCFB summary](https://pcfb.org/usda-announces-aphis-final-rule-on-electronic-id-in-cattle/). I did not check for later changes. |
| Record prices raise dollars at risk | Prices peaked in May 2026 (five-area steer $2.63/lb) and have fallen since. [FoodMarket](https://www.foodmarket.com/News/A/1349621/ANALYSIS-US-2026-Live-Cattle-Rally-Loses-Steam-Steer-Prices-Fall-Nearly-10-percent-from-Record-Highs) (S). Oklahoma 500-548 lb steers averaged $408/cwt in the week ending Sept 5, versus about $516 in late April. [USDA AMS Sept 2026](https://s3.amazonaws.com/barchart-news-store-prod/external_links/USDA/20260904-AMS_1831.pdf), [USDA AMS Apr 2026](https://mymarketnews.ams.usda.gov/filerepo/sites/default/files/1831/2026-04-19/1319944/ams_1831_00352.pdf) (S) |

## 3. Market context and bottom-up sizing

**Cattle base.** The US herd was 86.2M head on Jan 1, 2026, a 75-year low, with 27.6M beef cows and 4.71M beef replacement heifers (+1%). [DTN](https://www.dtnpf.com/agriculture/web/ag/news/article/2026/01/30/jan-1-cattle-inventory-slightly-year)

**Lender universe.** At Q4 2025, 3,334 commercial banks held farm loans, of which 933 met the 25%-of-loans "agricultural bank" test. Farm loans at banks totaled $207.4B ($119.8B real estate, $87.6B production). [farmdoc daily, Apr 2026](https://farmdocdaily.illinois.edu/wp-content/uploads/2026/04/fdd040226.pdf) (S). Farm Credit System associations are additional lenders; I did not verify their count.

**Auction base.** About 32M cattle a year sell through auctions (2020 P&S data); the Livestock Marketing Association (LMA) says it represents 85% of markets. [LMA](https://www.lmaweb.com/NewsAndMedia/PressReleases/economic-impact-study-lma-2023) The pitch's "10M+ head" is conservative. I found no current national market count. A research list shows 1,619 known cattle markets for 2012-2016, including closed ones. [Dryad](https://datadryad.org/dataset/doi:10.5061/dryad.cfxpnvxg7) South Dakota listed 27 licensed markets in 2020. [SD AIB](https://aib.sd.gov/auctionmkts.html) Barns are closing as herds shrink. [FERN](https://thefern.org/ag_insider/as-cattle-numbers-drop-livestock-auction-barns-close)

**Exit coverage.** Auction barns handled about 69% of reported feeder and stocker receipts; direct sales ran about 16% and video/internet about 15%. The shares sum above 100%, so treat them as approximate. [Farm Bureau/USDA-AMS](https://www.fb.org/market-intel/marketing-feeder-cattle-changes-in-sales-data) (S). Fed cattle going feedyard to packer also bypass barns. "Watch the gates" therefore covers a majority of feeder exits, not all.

**Phase 1 pool (assumptions marked A).**
- 933 ag banks x 30% with material cattle books (A) = about 280 banks.
- 150 monitored loans per bank (the pitch's figure, unverified) = about 42,000 loans.
- At $100 / $300 / $600 per loan per year: **$4.2M / $12.6M / $25M** at 100% penetration. The $100 case is about 2x the Alberta price anchor in Section 7.
- Phase 3 per-head fee: 32M head x $0.10-0.25 = $3.2-8M at 100% capture.
- Combined realistic pool: about $7-21M a year. Five-year penetration of 20-30% implies roughly $1.5-6M ARR. Registry lookups and advance-fee share are unsized.

## 4. Legal and liability landscape

**The FSA sharply limits market exposure.** Under 7 U.S.C. §1631(g), a commission merchant or selling agent generally is *not* subject to the seller's security interest, even if perfected and known. Exceptions: (A) written notice within one year before the sale, with prescribed content (lender and debtor names and addresses, a tax identifier, product description, county); (C) in a central-filing state, the agent failed to register with the Secretary of State and the lender filed an effective financing statement (EFS); or (D) the agent received written notice from the Secretary of State and did not obtain a waiver or release. [Cornell LII](https://www.law.cornell.edu/uscode/text/7/1631)

Implications:
- Barns are exposed only after notice or non-registration, so they have a reason to avoid formal notice, not to welcome it. Pre-1985 cases holding auctioneers liable even without knowledge ([Commercial Bank at Alma v. Hales](https://cite.case.law/ark/281/439/) (S)) predate the FSA.
- A product that delivers lender profiles to barns may turn them into noticed parties. Whether a platform feed meets the notice-content rules is a question for counsel.
- Fuzzy matching addresses a documented failure. In *Fin-Ag v. Pipestone*, 2008 SD 48, the lender's EFS omitted the seller's d.b.a. (C&M Dairy). The case reached a cert petition (No. 08-576), where the Solicitor General recommended denial. [SG brief](https://www.justice.gov/osg/brief/fin-ag-inc-v-pipestone-livestock-auction-mkt-inc-amicus-invitation-petition), [SD opinion](https://ujs.sd.gov/media/1vdfl5cp/23982.pdf) (S). Lenders can fix this by listing all names on the EFS, which makes the product a convenience layer on an existing legal tool.

**Central filing.** USDA says 19 states have certified systems; I confirmed 12 (AL, CO, ID, LA, ME, MN, MS, MT, NE, NH, NM, ND), and the other seven were cut off. [USDA AMS](https://www.ams.usda.gov/node/29815) (S; the page returned 403 on fetch). In Nebraska, buyers and commission merchants register annually with the Secretary of State to receive the master lists. [Neb. LB1035](https://www.NebraskaLegislature.gov/FloorDocs/104/PDF/Slip/LB1035.pdf) (S) North Dakota sells an agricultural lien buyer's report for $480 a year. [ND SOS](https://sos.nd.gov/node/4643) (S)

**Packers and Stockyards.** Sale proceeds run through custodial accounts. Montana, for example, exempts licensed markets only if proceeds go through such an account. [Montana Livestock Sale Application](https://prod-liv.mt.gov/_docs/BE/Forms/Livestock-Sale-Application_11-2024.pdf) (S)

**Not researched:** Gramm-Leach-Bliley limits on lenders uploading borrower names to a third party; state data law; and whether alerts could create negligence claims if a missed alert precedes a loss.

## 5. Competitors and incumbents

| Player | What it is | Overlap | Evidence |
|---|---|---|---|
| Sale Time Systems (US, founded 1988) | Cloud sale-barn management with check-in, **lien verification**, brand management, clerking and settlement | **Direct for the barn side.** It sits in the workflow where the consignment list already exists. | [SourceForge](https://sourceforge.net/software/product/Sale-Time-Systems/). Washington State Dept. of Agriculture is co-developing a module so brand inspectors verify ownership inside Sale Time. [WSDA](https://agr.wa.gov/departments/animals-livestock-and-pets/livestock/sale-time-at-the-auction). Customer count and pricing are not public. |
| ViewTrak (TrustBIX, TSXV: TBIX) | Auction Master Pro and Market Master | Adjacent; no lien module described | Claims 400+ locations as of a Nov 2021 release. [Newsfile](https://www.newsfilecorp.com/release/102929/TrustBIX-Subsidiary-ViewTrak-Technologies-Commercializes-Three-New-Modules-for-Auction-Software) |
| Montana Dept. of Livestock Brand Lien Portal | Lenders file a Notice of Security Interest against a recorded brand; $25 per transaction, no annual or search fee | **Direct in brand states.** It covers only animals bearing the borrower's brand. The page documents no alert feature. | [MDOL](https://liv.mt.gov/brands-enforcement/Brands-Liens), [portal](https://app.mt.gov/brandliens/Help/Instructions) |
| Nebraska Brand Committee | Will not record a brand transfer once notified of a lien without the lienholder's consent. Lender-requested inspections are chargeable. | Partial | [Neb. §54-1,100](https://nebraskalegislature.gov/laws/statutes.php?statute=54-1,100), [LB646 amendment](https://www.nebraskalegislature.gov/FloorDocs/109/PDF/AM/AM1342.pdf) (S) |
| Alberta LIS Client Alert Requests | A claimant files proof of interest (a registry report or court document). Livestock or proceeds are held when matching animals reach inspection. $52.50 a year. | **Closest functional analog** to Phase 1. It is a non-profit statutory body, in Canada. | [LIS](https://lis-ab.com/information/client-alert-requests/) |
| TSCRA special rangers | Investigators who handle lender-reported collateral cases in Texas and Oklahoma | Adjacent enforcement incumbent | [HPJ, 2026](https://hpj.com/2026/06/19/texas-man-arrested-in-cattle-collateral-case/) (S) |
| AgBaseline; Nortridge; Abrigo | Inspection worksheets and borrowing-base tracking; loan servicing with livestock lien oversight; ag origination | Adjacent; they own the lender workflow | [Trustburn](https://trustburn.com/reviews/agbaseline-com) (five reviews, weak evidence), [Nortridge](https://nortridge.com/agriculture-loan-servicing-software-lp/), [Abrigo](https://www.abrigo.com/?p=23495) |
| Halter | Collars and virtual fencing. $220M Series E at $2B in March 2026; 2,000+ ranchers. No lender product found. | Indirect. Per-animal data could become verified-inventory evidence. | [Drovers](https://www.drovers.com/news/industry/halter-raises-220m-series-e-accelerate-globalnbsp-expansion-virtual-fencing) |
| Where Food Comes From / IMI Global | Verification and Beef Passport. Management reported beef verification declines tied to smaller herds. No lender product found. | Adjacent; plausible white-label partner | [MarketBeat](https://www.marketbeat.com/instant-alerts/where-food-comes-from-q4-earnings-call-highlights-2026-02-27/) (S) |
| Drone and AI counting (NSF SBIR; "BovEye" listing) | Remote herd counts for lenders | Adjacent; different mechanism | [NSF](https://nsf.elsevierpure.com/en/projects/sbir-phase-ii-an-automated-drone-based-cattle-monitoring-service-2/) (S). The grant's claim that about 75% of US cattle are bought with bank loans is unverified. |
| Cattler (Lincoln, NE) | Feedlot and ranch management software, "hundreds" of customers | Adjacent. Its page mentions no lender or lien features, though one search summary said otherwise. | [Cattler](https://cattler.farm/services-4) |
| Abroad: Cowmed/B3 (Brazil); E-Livestock (Zimbabwe) | Collar or RFID data tied to credit instruments | Phase 3 analogs, built with exchange or bank partners | [CryptoSlate](https://cryptoslate.com/how-10-cows-in-brazil-unlocked-a-path-to-bridge-an-8-trillion-global-finance-gap/) (S) |

**No US startup found** selling cross-barn consignment alerts to lenders. That reflects thin search coverage, not proof of absence. The finalist file's prior check ran no searches.

**Who could add this:** Sale Time (lien and brand modules already shipped) and state brand agencies (Montana, Alberta precedent). Their neutrality gap is real, but a barn-software vendor can offer a free lien-matching feed to its own customer base.

## 6. Evidence of demand and willingness to pay

**Real losses exist, but mostly by other mechanisms.**
- Rabo Agrifinance alleges about $50.6M unpaid on McClain feedyards. Reported inventory fell from 89,522 to 37,992 head by February, and nearly 78,000 head may have been sold or moved. Rabo's audit began only after missed April payments. [DTN](https://www.dtnpf.com/agriculture/web/ag/livestock/article/2023/05/10/rabo-asks-bankruptcy-court-subpoenas) The article does not name auction markets. This is the best "monitor the exits" case, but it is feedyard-scale, and a missed-payment trigger came before any barn alert would have.
- Texas: $5.8M against 8,000 head pledged, none found, with other people's cattle shown to the bank. [Ag Proud](https://agproud.com/articles/51727-texas-man-arrested-for-5-8-million-fraud-involving-8-000-cattle) A 2026 Decatur case involves a $5.5M loan on 3,000+ head and a refused inspection. [HPJ](https://hpj.com/2026/06/19/texas-man-arrested-in-cattle-collateral-case/) (S)
- Montana's Mack sold cattle securing loans from two lenders and kept the proceeds. [DOJ](https://www.justice.gov/usao-mt/pr/lewistown-man-sentenced-bank-fraud-obtaining-loans-cattle-ranching-business) An Arkansas woman is charged with keeping sale proceeds on a $214K estate loan (allegation). [SW Arkansas Radio](https://southwestarkansasradio.com/ashdown-woman-charged-in-alleged-cattle-sale-loan-fraud-case/)
- Eastern Livestock (2010) was check-kiting against sellers, with $81-130M of bad checks and 743 producers hit. [Farm and Dairy](https://www.farmanddairy.com/?p=18908) (S) It is a buyer-side payment-risk story, not a lien-exit story.

**Pattern:** the cases I found are mostly phantom collateral, inspection evasion or insider fraud. Only the Mack and Arkansas cases fit "pledged cattle sold, proceeds kept," and both are small. I found no dataset on lender losses by mechanism, no RFP, and no forum thread asking for a consignment alert.

**Spend on workarounds:** inspection mandates exist but target counts. Nebraska's livestock-loan rule calls for inspection within 30 days of origination, yearly follow-ups and head counts. [Neb. Title 45 ch.14](https://makecentsmakesense.nebraska.gov/sites/default/files/legal/Title-45_chapter-14_Livestock_Loans.pdf) (S) Texas examiners ask whether inspections are independent and documented. [Texas DOB](https://www.dob.texas.gov/public/uploads/files/Bank-Trust-Companies/Exam-Procedures/nrf14wk06.pdf) (S) No regulation forces spend on exit monitoring.

## 7. Unit-economics analogs

| Analog | Price |
|---|---|
| Alberta LIS alert, one year | C$52.50 ([LIS](https://lis-ab.com/information/client-alert-requests/)) |
| Montana brand lien filing | $25 per transaction, no annual fee ([MDOL](https://app.mt.gov/brandliens/Help/Instructions)) |
| ND agricultural lien buyer's report | $480 a year ([ND SOS](https://sos.nd.gov/node/4643)) (S) |
| Commercial UCC monitoring | Vendor prices unpublished. Forum posts claim $8-50 per entity per month ([Claimyr](https://claimyr.com/financial-services/ucc/Best-way-to-monitor-UCC-filings-for-portfolio-changes/2025-06-11)); anecdotal. |
| Pitch | $300-600 per loan per year, or $25-50 per month |

The pitch sits at the top of the UCC anecdote range and about 6-12x the two government alert and filing prices. A lender will pay a premium only if the alert prevents a loss. At $1M+ per loan, one prevented event pays for years, but base rates are unknown.

## 8. Is the why-now real?

- **True:** fall calf run timing; heifer retention (+1%) means more bred-heifer collateral.
- **Weak:** EID covers breeding-age cattle, not feeders. Price is falling about 20% from the April peak, which raises collateral shortfall pressure (my inference) but also borrower distress that tends to produce phantom-collateral fraud, which exit alerts do not catch.
- **Not supported:** that the 2026 fraud headline is an exit case (see Section 2).

## 9. Moat assessment

| Moat | Rating | Reason |
|---|---|---|
| Network effects | Moderate, long-dated | Cold start on both sides; each barn needs enough lenders and vice versa |
| Switching costs | Weak | Lender profile upload is portable; a barn-software vendor or state portal could replicate it |
| Scale economies | Weak | Matching is cheap |
| Intangibles / data | Moderate | Pledge data is valuable only if lenders will share it, which has unresolved privacy and notice questions |

## 10. Gaps and what to test next

- **Interview first (10-15 lenders, 5 barns).** How often do lenders discover unauthorized sales, how do they find out, and what does a missed one cost? Is Sale Time's lien module actually used, and does it ingest lender data?
- **Pick a wedge outside brand-lien systems.** Montana and Nebraska already have lender channels. The Nebraska Sandhills and Kansas Flint Hills wedge needs a check on each state's brand and central-filing rules. I did not verify those.
- **Counsel questions:** FSA notice sufficiency, GLBA, and barn liability from receiving feeds.
- **Missing data:** current US market count; Sale Time customer count; lender losses by mechanism; the seven unconfirmed central-filing states; Nebraska lender-inspection fee amounts.
- **Reframe the pilot's success test:** require at least one real hit the lender did not know about. If the 4-week log shows zero, the thesis is dead.
