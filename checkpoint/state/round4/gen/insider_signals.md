# Round 4 / Lens: insider signals (home-health forums, advisor compliance forums, festival producers, plus the family company itself)

Written 2026-10-26 for Asher (18, ships software fast, 10-15 hrs/week until June 2027). About 45 searches and fetches this session. Every fact is tagged: (sourced) = a page or search result said it, (assumption) = my number to do the math, (verify) = I believe it but did not confirm it.

## Read this first: the MHC premise is wrong, and it changes the whole round

**MHC HealthCare is not a home-health company. It is a 130+ location auto-accident and personal-injury (PI) clinic network.** (sourced, high confidence)

- mhcorp.com says it was "founded in 1987 by Dr. Semyon Friedman" (a Johns Hopkins researcher), is "specializing in injury treatment," and has "more than 130 specialty care locations across Delaware, Florida, Maryland, North Carolina, Virginia and Washington, D.C." Services: orthopedics, neurology, physiatry, generalized medicine, physical therapy, in-house radiology. It offers same-day appointments, patient transportation, and a login portal for attorneys to get their clients' records. https://www.mhcorp.com/ and https://www.mhcorp.com/about
- LinkedIn calls it "a leading medical provider of rehabilitative care for patients injured in motor vehicle accidents since 1987," HQ Owings Mills, Maryland; the legal entity is Maryland Healthcare Clinics LLC, dba MHC Healthcare. https://www.linkedin.com/company/maryland-healthcare-clinics
- The family link is explicit on the About page: Dr. Friedman, his wife Janna, and "his daughter Julia Peremel" run a Holocaust-museum tour partnership for employees, families and law firms. Florida records list a second entity, MHC Healthcare Consulting LLC (Jan 2022), with officers Roman Balakirsky, Alex Friedman and Julia Friedman-Peremel. https://www.floridareg.com/company/L22000035144/mhc-healthcare-consulting-llc
- Julia Friedman-Peremel is a named co-inventor (with Dr. Friedman and Roman Balakirsky) on US Patent 11,315,669 B1, "Dynamic generation of an electronic medical report," assigned to Maryland Healthcare Clinics LLC (filed 2021-12-01). It auto-builds a personal-injury-context medical report from messy clinic notes pulled from one or more clinic systems. https://patents.google.com/patent/US11315669B1/en
- Inference (verify with Mom): Julia Friedman-Peremel is Asher's mother. The surname matches Ron Peremel, and Maryland matches Ron's Annapolis festival.
- Named executives on the About page: Roman Balakirsky (CEO), Alyona Sargsyan (COO), Andre Spiak (CFO, CPA), Bobur Moydinov (Growth and Strategy), David Agatstein (Accounts Receivable and Medical Records). The footer shows sponsorships of the Trial Lawyers Association, the Maryland Association for Justice (MAJ) and NC Advocates for Justice (NCAJ). MHC also runs a Maryland-board-approved Chiropractic Assistant course ($549, 103 hours). https://www.mhcorpca.com/

**What this means for the other round-4 files.** `mhc_coo.md`, `mhc_revenue.md`, `mhc_workforce.md` and `healthcare_ops.md` are built on the home-health guess (Medicare PDGM, hospice, Medicare Advantage, CHOW moratorium). One sibling already found that "MHC Area 9, LLC" in Boca Raton is Choice Health At Home, a Texas company backed by Trive Capital, which is not the Friedman family. I found no evidence that MHC HealthCare has any home-health arm. Their ideas may still be good generic ideas, but none of them can use "MHC as customer zero." The PI medical-legal world is the real insider wedge, and nobody has searched it yet. Ideas 1, 2, 4, 5 and 6 below do that.

**Ask Mom this week (these answers decide which of ideas 1-6 are live):**
1. Which states bill PIP (no-fault: Florida, Delaware) versus letters of protection (LOP, treat now and get paid from the settlement) versus health insurance versus workers' comp? Rough share of revenue for each.
2. How big is accounts receivable, how many days outstanding, and who runs collections (David Agatstein's team)?
3. What does the patented report module and the attorney portal already do (narratives, ledgers, payoff requests)? What is on the build roadmap so I do not duplicate it?
4. Would the company let a small, BAA-covered data export (no patient names) be used for a pilot, and who signs?

## Where the demand signals are (the "I would pay for" ledger)

I could not read Reddit bodies (WebFetch and curl are blocked; the Brave fallback returns titles only). So the Reddit evidence below is thread titles, not quotes. Everything else was read.

### Personal-injury medical-legal (new, strongest)
| Signal | What it shows | Source |
|---|---|---|
| Job postings for manual collection roles | Surgery Partners "Litigation Collector" (reduce days in A/R on LOP and litigation cases; negotiate final resolutions; produce ledgers for law firms). A New Jersey spine group posting: follow up on open injury accounts, liens, settlement timing. A May 2026 Workana "lien management specialist": validate medical necessity, check provider bills for upcoding. A Las Vegas clinic "Lien Specialist" owns a case from intake to lien release. Morgan and Morgan has lien roles inside settlements. | https://remotive.com/remote/jobs/legal/litigation-collector-4994910 , https://www.ihireaccounting.com/jobs/view/523653924 , https://job-boards.greenhouse.io/morganmorganjobsapplynow/jobs/5474921004 , https://www.workana.com/en/job/bilingual-medical-case-manager-us-medical-lien-specialty |
| Money is stuck | KFF Health News: providers that take LOPs "often wait years" for settlement, "if at all"; some surgeons sold liens to buyers paying 10% to 25% of the bill. VMG Health: A/R in these businesses "can approximate a full year's revenue or more," and buyers want historical claim-level collection curves in diligence. | https://kffhealthnews.org/news/article/letters-of-protection-personal-injury-cases-surprise-bills/ , https://vmghealth.com/insights/blog/letters-of-protection-in-healthcare-ma-navigating-risks-opportunities/ |
| Funders exist because collection is hard | Libra Solutions buys medical receivables (Key Health line), claims 45,000+ attorneys and 10,000+ providers, and funds with asset-backed securities (a ~$290M issue in Aug 2025; unverified aggregator). Alleon advances up to 65% of PI receivables. Cherokee's Gain Servicing sells LOP-tracking software plus staff to practices (since 2018). | https://asreport.americanbanker.com/news/libra-solutions-securitization-pools-litigation-and-medical-receivables , https://alleon-healthcare-khr3t.sevalla.app/pi-receivables-funding , https://www.trizettoprovider.com/wp-content/uploads/GainServicing-RCM-Partnership.pdf |
| Law reform is making LOP terms evidence | Florida s.768.0427 (2023): LOP, itemized coded ledger, identity of any factoring buyer, and referral source become disclosure items; sale price of a sold receivable can be admitted. Georgia SB 68 (signed 2025-04-21): LOP, coded charges, receivable sale and price, referral relationship all discoverable. 2026 bills copying this: Nebraska, Utah, Oklahoma. | https://www.flsenate.gov/Laws/Statutes/2025/768.0427 , https://kennedyslaw.com/en/thought-leadership/article/2025/georgia-enacts-sweeping-tort-reform-key-takeaways-from-sb-68 , https://nebraskalegislature.gov/FloorDocs/109/PDF/AM/AM2688.pdf |
| Private equity is buying PI law firms | Bloomberg Law (2026-05-29): PE "aggressively investing" in PI firms; one adviser did 10 law-firm MSO deals last year and is on 20 this year; Apollo, Fortress and Stifel attended an April 2026 conference. | https://news.bloomberglaw.com/states-of-play/private-equity-woos-personal-injury-law-firms-with-profits-tech |
| Insurers are suing PIP clinics | GEICO suits against Florida clinics filed 2026-07-06 (six Miami clinics, alleged $5.2M), 2026-08-18 (five clinics, alleged $5.9M) and 2026-08-19 (an ownership-and-licensing theory). Florida PIP was not repealed in 2026. | https://www.insurancebusinessmag.com/us/news/risk-compliance-legal/geicos-lawsuit-accuses-six-florida-clinics-of-5-2m-nofault-fraud-581594.aspx , https://www.insurancejournal.com/news/southeast/2026/05/05/868507.htm |
| Narrative reports cost attorneys real money | A Georgia PI firm blog: doctors quoted $1,500 to dictate a one-to-two page narrative, $500+ just to sign one already in the chart (anecdote). Texas workers' comp schedules $100 for a 1-2 page narrative. | https://finchmccranie.com/blog/?p=1579 , https://www.tdi.texas.gov/medcases/medfee25/m4252484.pdf |
| Ecosystem money | IBISWorld: US PI lawyer market $61.7B (2025). EvenUp $385M raised, $2B+ valuation (Oct 2025); Eve $1B (Sept 2025); Supio $91M raised. All three serve the attorney side, not the clinic. | https://img2.ibisworld.com/united-states/market-size/personal-injury-lawyers-attorneys/4812 , https://app.dealroom.co/news/feed/evenup-raises-385m-valued-over-2b , https://legaltechnology.com/2025/09/30/plaintiff-legal-ai-startup-eve-raises-103m-series-b-at-a-1bn-valuation |
| What clinic software costs | Ambula (PI EMR with attorney portal and report builder): $300 per provider per month. ADSC offers PI/no-fault billing with lien tracking and attorney portal. MoveDocs: free to law firms, 10,000+ lien-friendly providers listed, balance requests and chronologies. | https://www.ambula.io/personal-injury-emr/ , https://www.adsc.com/personal-inury , https://movedocs.com/medical-treatment-on-a-lien-or-lop-for-personal-injury-cases/ |
| Treatment gaps cost case value | EvenUp 2025 benchmark (vendor claim): 17% of PI cases have a 30+ day treatment gap. Hona sells AI follow-up to law firms. | https://evenuplaw.com/blog/mitigate-treatment-gaps-preserve-case-value , https://www.hona.com/post/treatment-phase-pi-case-value |

### Festival producers
| Signal | What it shows | Source |
|---|---|---|
| Costs are killing independents | FestivalPro (Jan 2026): renewal premiums have risen "by a factor of 5 or more" even with clean records. Ticket Fairy blog: premiums up 50-300% (vendor blog). AIF: 20 independent UK festivals canceled or postponed by 2026-06-10, after 43 in 2025 and 78 in 2024. Okeechobee paused future events citing costs. | https://www.festivalpro.com/festival-management/4620/news/2026/1/19/Hidden-Insurance-Costs-and-Rising-Premiums-for-Music-Festivals.html , https://news.pollstar.com/2026/06/10/20-independent-uk-festivals-canceled-postponed-closed-in-2026/ , https://cbs12.com/news/local/okeechobee-music-arts-festival-pauses-future-events-cites-rising-costs-after-2026-return-okeechobee-florida-omf-soundslinger-lunineers-zriz-t-pain-lcd-soundsystem-cage-the-elephant-sunshine-grove |
| Nobody buys together in the US | A UK collective of independents (Where It All Began, 2026) projects up to 40% savings from shared staging, marketing and talent (organizer projection). Ticket Fairy blogs claim 20-40% bulk discounts (unverified). I found no US festival buying group. | https://www.festivalinsights.com/2025/09/cooperative-festival-where-it-all-began-to-debut-in-2026/ , https://www.ticketfairy.com/blog/festivals-united-how-resource-sharing-alliances-cut-costs-and-build-community |
| Vendor percentage fees run on trust | A Square community thread: organizer says they have always used the "honor code" for vendor sales and would prefer reliable tracking. Tulsa State Fair requires percentage vendors to self-report gross sales by 8am daily. Marketspread's percentage tool relies on vendor-submitted sales. | https://community.squareup.com/t5/Square-Point-of-Sale/How-do-I-Track-Sales-of-Multiple-Vendors-at-an-Event/m-p/692316 , https://www.tulsastatefair.com/reporting , https://marketspread.com/learning/articles/setting-individual-per-vendor-percentage-pricing/ |
| Vendor paperwork and expiry | LocalStalls describes managers who cannot recall whose insurance expired. FestivalPro: managing hundreds of vendors can be a full-time job. | https://ipsnews.net/business/2026/04/20/localstalls-offers-market-management-software-as-community-events-scale-nationwide/?amp=1 |
| Ticket money arrives late | Platforms often hold ticket revenue 2-6 weeks after the event (Coinflow, vendor). Ticket Fairy Capital offers $10k-$3M+ advances, so financing is taken. | https://coinflow.cash/blog/event-settlement-timeline-venues/ , https://www.ticketfairy.com/us/capital |
| Volunteers | No-show rules are hard (Rocklahoma bills $160 and blacklists). Tools exist: Rosterfy, Better Impact, Liveforce. Crowded; skip. | https://form.jotform.com/261795978343071 |
| The family festival | Annapolis Baygrass: Sandy Point State Park, 2026-09-19/20, headliner Little Feat, ticketing on Afton, third-party listing estimates 25,000 attendance (unverified), raised $36,061 for three Chesapeake nonprofits in 2025, nominated IBMA Event of the Year 2026 with Bluegrass in La Roche at 20, Bluegrass Spartanburg, CBA 50th Anniversary Father's Day Festival, and Marysville Winter Bluegrass Series. | https://www.broadwayworld.com/bwwmusic/article/ANNAPOLIS-BAYGRASS-Festival-Nabs-IBMA-Event-of-the-Year-Nomination-20260730 , https://ibma.org/press-releases/nominees-announced-for-2026-ibma-industry-momentum-awards/ , https://aftontickets.com/annapolisbaygrass2026 |

### Advisors and RIA compliance (already heavily mined by `mfa_compliance.md` and `mfa_growth.md`; I add only new signals)
| Signal | What it shows | Source |
|---|---|---|
| Archiving price wall | One comparison (third-party site, verify) puts Smarsh's cloud plan at a $25,000 annual minimum and Global Relay at $15 per user per month with a 10-user minimum and $995 setup. RIA Workspace (Feb 2026) says both "may not fit smaller or newly launched RIAs." | https://complianceofficer.ai/global-relay-pricing , https://www.riaworkspace.com/blog/smarsh-vs-global-relay-vs-microsoft-what-should-your-ria-use-for-email-archiving-2/ |
| Reg S-P is live for small firms | Smaller-entity compliance date was 2026-06-03 (larger: 2025-12-03); SEC named it an FY2026 exam priority. Commentary: advisers struggle to get clear vendor commitments to the 72-hour notice. Vendor-risk platforms (Whistic, nContracts, LogicGate) already target this. | https://www.dwt.com/blogs/privacy--security-law-blog/2026/05/reg-sp-smaller-entities-june-2026-deadline , https://www.whistic.com/resources/blog/reg-s-p-is-live-for-everyone-most-vendor-oversight-programs-still-cant-prove-the-chain |
| r/CFP thread titles (bodies unreadable) | "Best option to outsource RIA compliance?", "Solo RIA just getting started - what tools are worth the hype?", "Compliance and starting your own RIA" (snippet: the poster's mentor "did so much incorrectly" and was "lucky he didn't get audited"), "How long does onboarding a new client usually take?" | https://www.reddit.com/r/CFP/comments/1ks2kh0/best_option_to_outsource_ria_compliance/ , https://www.reddit.com/r/CFP/comments/1nxer3v/compliance_and_starting_your_own_ria/ |
| Manual compliance jobs exist | ZipRecruiter "RIA compliance" listings ($61k-$172k) include annual Form ADV updates and program upkeep. | https://www.ziprecruiter.com/Jobs/Ria-Compliance |
| Social archiving for small RIAs is being built by others | AdvisorVault added social media archiving and supervision for RIAs on 2026-05-30. | https://pr.taosnews.com/article/AdvisorVault-Adds-Social-Media-Archiving-to-its-Consolidated-D3P-Service/6a1b461d004597ee6ba13d6a |

### Home health (only relevant if the premise turns out wrong; siblings cover it)
- Axxess reviews: hour-plus support holds, product changes without notice, prices that keep changing (SelectHub, Capterra). https://www.selecthub.com/home-health-software/axxess-vs-hchb/ , https://capterra.com/p/114010/AgencyCore/reviews/
- WellSky Personal Care (G2 discussion): buggy mobile app, GPS drops that break EVV clock-ins, slow tickets. I found no HCHB review data. https://www.g2.com/discussions/axiscare-vs-wellsky-personal-care-vs-axxess-for-home-care-agencies-which-home-care-management-system-are-operations-managers-finding-most-reliable-based-on-user-reviews
- Unsigned physician orders are called the most common hospice survey finding (WorldView, 2026-05-15), and signature-chasing tools already exist (Forcura, WorldView, Klio). https://worldviewltd.com/blog/physician-orders-home-health-hospice-compliance , https://klio.care/articles/best-home-health-order-signing-software
- Intake and referral coordinator postings list manual packet prep, insurance verification and call logging (BrightSpring and others). https://careers-brightspring.icims.com/jobs/189363/intake-coordinator--home-health/job
- Verdict: crowded or taken, per the siblings. I add no home-health idea.

## Ranking logic

1. Ideas on the MHC data and attorney relationships come first because nobody has searched them, the first customer is inside the family, and there is a real data asset (38 years of claim-level collection history that a startup cannot buy).
2. Festival ideas use Ron's real operating company and a named peer list (the other IBMA nominees), but their ceilings are lower. I say so.
3. Advisor ideas: 16 ideas already exist in the siblings. I add only one that does not overlap.
4. Guardrails for all PI ideas: Asher never steers patients, never pays or takes referral fees (Florida has a patient-brokering statute, s.817.505; verify with counsel), never gives clinical or legal advice, works only under a BAA with minimum-necessary or de-identified data, and uses the scores for billing and collections policy only, never for clinical triage.

---

## 1. Lien Curve: collection curves and attorney-payment scorecards for treat-on-lien clinics

**One line.** Turn a clinic's closed-case history into a weekly collections plan, a per-law-firm payment scorecard, and a diligence-grade collection-curve report. Build it first on MHC's data, then sell to peers, PE sponsors and receivable funders.

**Customer and payer.** The CFO or head of revenue cycle at a multi-site injury clinic group, or a lien-heavy ortho, pain, imaging or surgery-center practice. Second buyer: the PE sponsor, lender or M&A adviser valuing LOP receivables or a PI-firm MSO. Budget line: the collections staff they already employ (see job postings above). Price: $3-5k per month per group, or 5-8% of cash above a baseline (assumption); diligence reports $15-40k (assumption).

**Problem.** Money is stuck for years and nobody on the clinic side can say which law firms pay, how fast, and after what reduction. Collectors work by habit and phone. When the clinic sells receivables, the buyer pays 10-40 cents on the dollar (KFF; Alleon) because the buyer has the data and the clinic does not. VMG lists historical collection curves as a standard diligence item.

**Solution (what he builds, in order).**
1. Weeks 1-2: take a 12-month closed-case export from MHC (case ID hash, date of service, CPT, billed amount, law-firm ID, payer type, settlement date, amount paid, reduction). No patient names. Build firm scorecards: days to pay, percent of billed collected, reduction rate, no-pay rate, each with an honest confidence band.
2. Weeks 3-6: per-case expected cash and timing (survival-style curves by case type, firm and state), turned into a ranked weekly call list for collectors: expected dollars times probability the case resolves soon.
3. Weeks 6-12: a billing-policy view for intake (which financial arrangement fits a case: LOP, med-pay, self-pay, health insurance), applied to billing only.
4. Months 3-6: a one-click diligence report (curves by CPT, geography, referral source) for M&A and lenders; a de-identified pooled benchmark once three or more groups contribute.

**Why now.**
- PE is buying PI law firms (about 20 MSO deals this year per one adviser), so someone must value open-case inventory and the liens against it.
- Florida and Georgia made LOP terms, factoring-sale price and referral source discoverable; the sale price can be admitted. Receivable values are now argued in court.
- Funders securitize these pools, which needs claim-level data.

**Founder edge.** MHC's 38-year record, a CPA CFO and an A/R manager he can reach through Mom, and a legal-and-compliance team that already built an in-house EMR and patent. His Strategy Lab (pre-registered tests, holdout checks) is exactly the discipline needed to avoid fooling himself on small samples. CORRECTION for the orchestrator: MHC is a PI clinic network, not home health.

**First 10 customers.**
1. MHC pilot (Mom to CFO): free scorecard on closed cases, then pay-for-performance on lifted collections.
2-3. Two outside groups from Mom and Ron's intros to clinic owners who sponsor MAJ, NCAJ and TLA events alongside MHC.
4-6. Lien-heavy ortho and pain practices from the MoveDocs provider directory; cold offer: "free benchmark of your last 200 closed cases."
7-8. Two healthcare M&A advisers (VMG Health and Health Capital Consultants write about this exact diligence) as white-label channels.
9-10. Two receivable funders (Alleon, Key Health) who pay for data-backed screening.

**Cost to first revenue.** About $3,000: HIPAA-eligible hosting ($100-300 per month), one healthcare-attorney hour for the BAA and data-use terms ($1,000-2,000), basic E&O.

**Path to big (bottom-up, assumptions flagged).** Layer A: if 2,500 of the ~10,000 listed PI-accepting providers are lien-heavy (assumption) and 16% subscribe at $30k per year, that is about 400 customers and $12M. Layer B: 20-40 diligence reports per year at $25k is $0.5-1M. Layer C: a pooled index licensed to 50-100 funders, lenders and insurers at $50-250k per year is $2.5-25M. Reaching $10M needs layer A plus a few layer C licenses. If lien-heavy practices number under 1,500, the ceiling drops to roughly $8M.

**Who does it today.** Funders' internal underwriting (Libra/Key Health, Alleon). Cherokee's Gain Servicing (staff plus software for LOP receivables, since 2018). In-house lien and collection teams. PI EMRs track liens but I found no collection-curve or firm-scoring product: Ambula ($300 per provider per month), ADSC. Law-firm side: Lido (lien ledgers), MoveDocs (free to firms), ChartRequest. Attorney AI (EvenUp, Eve, Supio) works from records and does not serve the clinic's cash.

**Risks.** Sharing firm-level payment behavior across competing clinics may raise antitrust and defamation questions: start single-client, pool only de-identified aggregates, get a lawyer's read. MHC may say its data is its moat.

---

## 2. Fast-Pay Ladder: a pre-approved discount schedule and payoff page for LOP balances

**One line.** The clinic sets a discount ladder (for example 12% off if paid within 7 days of disbursement, 8% within 14, 4% within 30). The attorney opens one link, sees the balance and the ladder, e-signs, and pays. Cash arrives in days and the record shows the amount actually paid.

**Customer and payer.** The clinic's collections head pays; paralegals at law firms use it free. Pricing: 1-3% of cash moved through the ladder or a flat SaaS fee (assumption).

**Problem.** Reductions are negotiated by phone, one case at a time. The job postings say it plainly: negotiate "final resolution" within company guidelines. Attorneys routinely ask for 10-15% off (attorney source), funders buy at 20-40 cents on the dollar, and providers wait years. After Florida s.768.0427 and Georgia SB 68, "amount actually paid" is evidence, so a clean payoff record has new value.

**Solution.** Link generated from the portal or an emailed statement; guardrail rules set by finance by case type and balance; auto-approve inside the ladder, route exceptions to a human; payment through a regulated payments partner (for example Stripe Connect with the clinic as the connected account) so Asher never holds funds; auto-post to the clinic's ledger. No contact with patients; attorneys only.

**Why now.** Same legal wave as idea 1, plus PE-backed firms that want faster, cleaner disbursements.

**Founder edge.** MHC's attorney portal and trial-lawyer sponsorships give a built-in distribution channel: attorneys already log in. Asher has shipped accounts, ledgers and an in-app economy; payment pages are the same skill set.

**First 10 customers.** MHC on its oldest settled-but-unpaid accounts (the clean first test); two to three more groups from idea 1's pipeline; the law firms that use the link become the pull for other providers on the same cases.

**Cost to first revenue.** About $3,000 (payments partner setup, e-sign API, one ethics-aware attorney review of the language).

**Path to big.** If 500 clinics each run $2-3M a year of LOP payoffs through it (assumption; MHC's real figure is a Mom question), that is $1-1.5B of volume; a 1% take is $10-15M. A network of firms and the 10-30 providers on each case is the moat.

**Who does it today.** Gain Servicing (outsourced servicing), MoveDocs "balance requests," Lido (law-firm lien ledger). Generic B2B early-payment platforms exist but I did not search for a PI-specific one and found none.

**Legal checks.** Lawyers owe duties on trust accounts; an Ohio ethics opinion covers disbursing to LOP providers (https://ezel.ai/ethics-opinions/ohbpc/2023-010-letter-of-protection-medical-provider-disbursement). The tool must make offers only and never tell a lawyer how to disburse. Confirm with counsel that offering discounts raises no state billing-rule problem.

---

## 3. Festival Cost Desk: contingency-fee procurement and invoice audit for independent festivals, growing into a buying group

**One line.** Audit a festival's last-year invoices, run a competitive bid for each major cost line (staging, sound, fencing, toilets, generators, shuttles, security), and keep 15-25% of verified savings. Later, pool demand across festivals for vendor-paid volume fees.

**Customer and payer.** Independent festival producers with $0.5-5M budgets. Payer: contingency on savings (no savings, no fee), so there is no budget fight. Insurance is excluded from the scope (it needs a license); a licensed broker partner can handle it.

**Problem.** Costs and insurance are rising and festivals are failing (AIF: 78, 43, then 20 independent UK cancellations in 2024, 2025 and mid-2026). The UK has a collective projecting up to 40% savings; I found no US buying group.

**Solution.** Week 1: collect last year's invoices and contracts. Week 2: flag overbilled days, duplicate fees and fuel surcharges. Weeks 3-6: normalize quotes from 3-5 alternative vendors per category with AI, negotiate, document savings. Month 4 on: for regions where several festivals use the same weekend, bundle demand and ask vendors for a volume rate with a fee paid by the vendor.

**Why now.** The 2027 season contracts are written in Q4 2026 and Q1 2027, exactly the next 90 days. Cost pressure makes owners listen.

**Founder edge.** Ron is founder and CEO of a nominated festival, so Baygrass can be customer zero with real invoices. Asher already built a freight-invoice audit with a flat diagnostic plus contingency; this is the same machine on a new invoice type. The named peer list is the other 2026 IBMA Event of the Year nominees.

**First 10 customers.** Baygrass (free audit on 2026 invoices, contingency on 2027 savings). Then Bluegrass in La Roche, Bluegrass Spartanburg, the CBA Father's Day Festival and the Marysville series by Ron's introduction at no cost for one category (toilets or fencing), then 5 more Maryland and Mid-Atlantic producers.

**Cost to first revenue.** Under $1,000 (the audit pipeline exists; reuse it).

**Path to big (honest).** Suppose 2,000 US independent festivals and events spend $750k a year on addressable categories (assumption, no count found) = $1.5B. A 3% vendor fee on 15% of that is $6.75M. To reach $10M+ it must widen to fairs, races, parades and outdoor concerts (30,000+ events, assumption). Treat the ceiling as $5-10M unless it widens.

**Who does it today.** Nobody US-wide that I found. Ticket Fairy's blog describes alliances but sells ticketing. Event-specialist insurance brokers exist (not touched). Eventeny, Marketspread and LocalStalls manage vendor applications, not production procurement.

---

## 4. Insurer's-Eye Audit: run the insurer's fraud-pattern analytics on your own billing, privileged through counsel

**One line.** A monthly report that shows a PIP or no-fault clinic what an insurer's special-investigations unit would see: templated notes, repeat service patterns, missing medical-necessity and 14-day documentation, and ownership or supervision gaps. Delivered to the clinic's lawyer.

**Customer and payer.** Owners and compliance counsel of Florida (and later New York, New Jersey, Michigan) no-fault clinics. Budget: legal and compliance. Price: $2-5k per month per group or $10-25k per audit (assumption).

**Problem.** GEICO filed three federal suits against Florida clinics in July and August 2026 alleging $3.6-5.9M schemes each, one based on ownership and licensing rules. A clinic defending one pays six figures in legal fees. Florida PIP stays law (repeal bills died in 2026).

**Solution.** Detectors built from the public allegations in these complaints (identical treatment protocols, same-day multi-service patterns, 14-day-rule and emergency-medical-condition documentation, medical-director supervision records) plus a templated-note detector. His AI-text detector already beat commercial detectors in blind tests; cloned clinical notes are the same signal. Output is a fix list for documentation and training, never "how to avoid detection."

**Why now.** The suits are fresh, and the 2023 and 2025 tort reforms put more weight on records.

**Founder edge.** MHC has Florida clinics for a pilot, and the detector is his own work.

**First 10 customers.** MHC Florida (if the executives agree); health-care defense firms that represent PIP clinics, as a channel; then clinic owners they refer.

**Cost to first revenue.** About $4,000 (counsel to structure privilege, HIPAA hosting).

**Path to big.** If 1,500 high-exposure clinics in no-fault states pay $30k a year (assumption), the pool is $45M; 20% share is $9M.

**Who does it today.** Insurer-side SIU vendors sell to insurers. Brellium (AI chart audit) is home-health focused. I found nothing selling this self-audit to PIP clinics.

**Risks.** Bad actors may self-select as buyers; refuse any feature that helps evade rather than fix; keep reports privileged. Executives may dislike an audit by family. Ethics check needed.

---

## 5. Disclosure Pack: one-click LOP disclosure packets that meet state law

**One line.** Generate the packet that Florida law requires and Georgia law makes discoverable: the LOP, an itemized coded ledger, any receivable-sale identity and price, insurance-availability facts, and the referral source. State-specific, logged, and exportable to the law firm.

**Customer and payer.** Clinic records and billing teams (subscription) and plaintiff firms (a small per-packet fee). Price: $200-500 per month per clinic group, or $30-75 per packet (assumption).

**Problem.** Disclosure is a condition for claiming LOP medical expenses in Florida, and discovery in Georgia, with three more states proposing it in 2026. Packets are assembled by hand from different systems; formats vary.

**Why now.** Georgia's rule covers causes of action arising on or after 2025-04-21, so the first cases are maturing; 2026 bills in Nebraska, Utah and Oklahoma.

**Founder edge.** A multi-agent research pipeline makes the state-rule matrix cheap to maintain. MHC's patent covers report generation and its portal already hands records to attorneys.

**First 10 customers.** MHC's Florida sites and the law firms they work with; Florida surgery centers and ortho groups from the KFF-type Broward cluster; attorneys met through MAJ and NCAJ.

**Cost to first revenue.** About $3,500 (a Florida healthcare lawyer's review of what must and must not be in a packet, hosting).

**Path to big.** If 5,000 providers in disclosure states pay $3-4k a year, that is $15-20M (assumption). It depends on how many states copy Florida; two large states beyond Florida and Georgia are needed.

**Who does it today.** None found for packets. Adjacent: Lido (ledgers), ChartRequest (records), Ambula and ADSC (bills and portals). Ambula could add it as a feature, so speed matters.

**Risk.** Packets surface markups, so this product serves transparency, not hiding; the defense bar may use them. Must preserve records under legal hold.

---

## 6. Narrative and Testimony Desk: fixed-price treating-physician narratives and testimony slots

**One line.** Attorneys book a narrative report (AI-drafted from the chart, signed by the physician within five business days) or a testimony slot at published prices through the portal.

**Customer and payer.** The attorney pays the clinic; the clinic pays Asher a revenue share on incremental fees (assumption: 20%).

**Problem.** A Georgia PI firm reports doctors charging $500-$1,500 for narratives and $2,000+ for a video deposition, with long waits (anecdote). Texas workers' comp prices a short narrative at $100. Neither side has a transparent menu.

**Solution.** Menu pricing, a physician review queue, scheduling slots, and a reminder system. Drafting uses the patented report module as the base and adds narrative formats for the states where a narrative can stand in for live testimony (Georgia's statute is the example).

**Why now.** More cases will be litigated as reforms push disputes into court; attorney AI tools make a fast, structured narrative more valuable.

**Founder edge.** MHC's patent and 100+ licensed clinicians. Ask Mom whether MHC already auto-writes narratives; if yes, sell only the menu-and-scheduling layer.

**First 10 customers.** MHC's most active attorney relationships first; a few Maryland trial-lawyer association contacts; two outside clinics after.

**Cost to first revenue.** About $2,500.

**Path to big.** Alone this is probably a $2-6M business (600 clinics at $500-800 per month). Its value is as a feature of ideas 1 and 2.

**Who does it today.** MHC's own patent; Ambula's report builder; MoveDocs chronologies; records-summary services for IME/QME reviewers. EvenUp and Eve serve the attorney side. AMA policy treats contingent physician fees as unethical, so the fees must be fixed.

---

## 7. Verified Vendor Sales: POS-checked revenue share for festivals and fairs

**One line.** Vendors connect their Square, Clover, Toast or Stripe account read-only. The festival sees real sales during the event window, the percentage fee is computed, invoiced and collected, and insurance and permit expiry is tracked.

**Customer and payer.** Festivals, fairs and markets that take a percentage of vendor gross. Price: $300-1,500 per event, or 0.25% of verified sales (assumption).

**Problem.** The "honor code" is common, state fairs depend on daily self-reporting, and Marketspread's percentage tool uses vendor-submitted sales. I found no product that verifies sales through the processor.

**Founder edge.** Ledgers, accounts and reconciliation are what his casino app is made of. Ron can confirm whether Baygrass takes percentages (verify; unknown).

**First 10 customers.** Baygrass if applicable; the other IBMA nominees; Maryland fairs and farmers' markets.

**Cost to first revenue.** About $1,000.

**Path to big (honest).** Software alone is $3-8M at best. It becomes bigger only if it grows into vendor payouts and vendor working-capital loans (balance sheet needed). Include for completeness; do not lead with it.

**Who does it today.** Marketspread, Eventeny, LocalStalls, FestivalPro and Submittable manage applications and fees. Intellitix and NoQ run closed-loop POS (hardware heavy).

---

## 8. Contingency Counsel Wealth Desk: MyFinancialAdvice's playbook for plaintiff lawyers facing a sale

**One line.** Reuse MFA's vetting and compliance machinery to build a vetted flat-fee advisor program for contingency-fee lawyers, with a first focus on owners getting PE/MSO offers. Asher builds the landing, quiz and lead flow; licensed advisors give all advice.

**Customer and payer.** Advisors in the program pay a subscription (not per referral). Lawyers use it free.

**Problem.** Contingency income is lumpy (an NCAJ past president warns new lawyers to build reserves), and PI firm owners face MSO sale offers. Structured-fee firms (NFP, RBC Wealth, Waverly) already serve this, so the open slot is the flat-fee, no-product-sales advisor.

**Why now.** About 20 PI-firm MSO deals this year (one adviser's count), and an aging founder base looking for liquidity.

**Founder edge.** MHC sponsors MAJ, NCAJ and the Trial Lawyers Association, so Mom's and MHC's name opens trial-lawyer events. Ron has 24 years of advisor vetting.

**First 10 customers.** Ron's best flat-fee advisors in Maryland and the Southeast. Event booth at a state trial-lawyer convention (NCAJ sponsorship tiers run $7,500 to $50,000, so start with free referral intros instead).

**Cost to first revenue.** About $1,500.

**Path to big (honest).** About 164,000 PI lawyers (IBISWorld via a marketing blog) is a large audience, but only a fraction have the income. I see $3-9M. The weakest big-path of the eight.

**Who does it today.** NFP, RBC Wealth Management, Waverly Advisors (structured attorney fees). No flat-fee, no-product program found.

**Legal checks.** Lawyer-advertising and fee-splitting rules differ by state; keep the payment flow advisor-to-platform subscription only; a securities lawyer should review any lead-gen arrangement.

---

## Also considered and cut

- Continuity Desk (no-show and treatment-gap outreach plus ride dispatch). Real pain (EvenUp: 17% of cases have 30+ day gaps) but Hona serves law firms and generic patient-comms tools serve clinics, so it is a me-too with a PI flavor.
- Chiropractic Assistant course as a national brand. $549, Maryland-only board approval, commodity category.
- Reg S-P vendor-oversight registry. Whistic, nContracts and LogicGate sell this already.
- Festival volunteer software. Rosterfy, Better Impact, Liveforce.
- Festival financing. Ticket Fairy Capital offers $10k-$3M+.
- Home-health ideas of any kind. Siblings cover them and the premise appears false.
- Patient-facing accident-injury lead generation or referral. Patient brokering risk and it targets injured people; excluded by guardrails.

## Week-1 checklist (ideas 1, 2 and 3)

1. Ask Mom the four questions above; request one meeting with the CFO and A/R lead. Bring a one-page "what I will and will not touch" and a draft BAA and data-use agreement.
2. Hire a healthcare attorney for two hours (BAA, data-use, antitrust note on pooling); budget $1,000-2,000.
3. Ask Ron for Baygrass's 2026 invoice pack and vendor contract list. Start the category benchmark.
4. Ask Ron to introduce him to the four other IBMA Event of the Year nominees.
5. Stand up HIPAA-eligible hosting; build the scorecard against fake data first.

## What I could not verify

- That Julia Friedman-Peremel is Asher's mother (inferred), and what MHC's payer mix is (PIP versus LOP versus health insurance).
- Any national count of lien-heavy PI providers (the 10,000 figures come from MoveDocs and Libra marketing).
- Libra's origination and ABS numbers (aggregator-sourced).
- Whether Baygrass charges vendors a percentage; Baygrass attendance (25,000 is a third-party estimate).
- Smarsh's $25,000 minimum (third-party site).
- Reddit thread bodies (blocked).
- Whether MHC already sells narratives or has a payoff workflow in its portal.
- Georgia and Florida statute text beyond lawyer summaries; the 2026 Nebraska, Utah and Oklahoma bills may not have passed.
