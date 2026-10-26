# Round 4 / Lens: the BIG version of the insider positions (8 ideas, ranked best first)

Researched 2026-10-26 with about 25 searches. Tags: (sourced) = a search result said it; (sibling) = taken from the other round-4 lens files in this folder, not re-checked; (assumption) = my arithmetic or guess, test it; (unverified) = general knowledge, not confirmed this session.

## Read this first

1. **I could not verify MHC Healthcare.** Searching "MHC Healthcare" found only an Arizona community health center network and "Medical House Calls", an in-home urgent-care firm in Tennessee and the Florida Emerald Coast. Neither is a grandfather-founded Florida home-health company. A sibling lens saw "MHC Area 9, LLC" doing business as Choice Health At Home (Boca Raton, Tyler TX mailing address) in the NPI registry, which may not be the family firm. **Ask Mom this week for: legal entity names, NPIs/CCNs, service lines (Medicare-certified skilled home health, private duty, Medicaid, hospice), payer mix, EHR, who bills.** Ideas 1, 3, 6 and 7 assume Medicare-certified skilled home health; 2, 4, 5 and 8 do not depend on it.
2. **The obvious AI-for-home-health lanes are funded.** Intake, scribe and chart QA (Enzo, $26M raised; Olli, $13M; Brellium, $23M; Basalt Health, $20M Series A on 2026-09-30; Arya Health, $18.2M Series A) (sibling and sourced). I stayed out of them. The BIG plays left are the layers above the software: who negotiates, who tests, who vets, who holds the audience.
3. **Siblings already cover the narrow versions** (payer-contract audit, advisor compliance, workforce, CCN diligence). Ideas 1 and 7 are the BIG versions of those and are labeled as such. Where a narrow version is already in a sibling file I say so rather than pretend it is new.
4. **Honest sizing.** Only ideas 1 and 2 have a bottom-up path that plausibly reaches $50M. Ideas 3 to 6 are $10M to $25M businesses unless something else happens. Idea 7 needs a balance sheet. Idea 8 is the weakest on size and the cheapest to run; the festival market is too small to carry a venture-scale company (about 283 US bluegrass festivals, Eventbrite sold for about $500M).
5. **His real moat this round is the pairing:** a freight-audit engine that already does "contract rate table versus invoice" (so payer-contract audit is a weeks-long port), a proven blind-testing method (the AI detector), and family-owned businesses that give him real data, real credibility and real peers.

## Ranking logic

Score = chance of a paid customer in 90 days x credible ceiling x whitespace x use of insiders. Idea 1 wins because it starts with a port of something he already built and the family company is customer zero. Idea 2 has the largest proven category behind it. The rest taper.

---

## 1. Contract Atlas: the independent home-health payer-rate network (Aledade for agencies that cannot negotiate alone)

**One line.** Port the freight-audit engine into a contract-versus-remittance auditor for MHC, then pool what independent agencies are really paid by each Medicare Advantage plan into a rate benchmark, then a messenger-model contracting network, then an MSO.

- **Customer.** Owner, administrator or CFO of an independent Medicare-certified home-health agency. There are 12,234 Medicare-certified agencies (MedPAC data book, July 2026, sourced) and 1,079 in Florida in 2023 (KFF via sibling). First customer: MHC.
- **Who pays and budget.**
  - Stage 1: $500 to $1,500 flat diagnostic plus 20% to 25% contingency on recovered underpayments (the same structure as his freight product). Start with MA and managed-Medicaid money; for Medicare fee-for-service money check the billing-agent rules (payment must land in the provider's own account) before charging a percentage.
  - Stage 2: $600 to $1,500 a month for member-only peer rate benchmarks.
  - Stage 3: a 2% to 4% administrative fee on revenue contracted through the network, plus MSO fees.
  - Budget line: managed-care contracting, billing and compliance. One analyst estimates home-health firms earn 30% to 40% less from MA than from traditional Medicare (sourced), so a 5% to 10% rate fix is worth more than any software they buy.
- **Problem.** Agencies sign MA contracts one at a time and cannot see what peers get. Payments are rarely checked against the contract schedule. Insurers that own captive home-health capacity cut independents' leverage (LeadingAge and an analyst, sourced).
- **Solution, stage by stage.**
  - Stage 0 (Monday): ingest MHC's MA contract PDFs (LLM extraction into a rate table) and 835 remittance files. Flag short-pays, wrong rate tiers, late payments and missed timely-filing windows. Deliver a recovery packet.
  - Stage 1: pooled, anonymized rate benchmark: percent of Medicare by plan, by market.
  - Stage 2: with antitrust counsel, a messenger-model network. Home Care Iowa (ten visiting-nurse associations, 1994) and a DOJ business-review letter are precedents (sourced). Competing agencies cannot agree on prices, and the messenger cannot negotiate for them; a clinically integrated network is the heavier alternative.
  - Stage 3: MSO services, in-home visit capacity sold to MA plans, and value-based contracts. Aledade is the proof the "independents' network" model works: 3,000+ practices and 3M+ patients (Feb 2026, sourced), though I found no Aledade program for home-health agencies.
- **Why now.** MA is 55.4% of beneficiaries (flat, Jan 2026, sourced). A 3% temporary Medicare cut continues in the proposed CY2027 rule (sibling). The nationwide moratorium on new home-health enrollments began 2026-05-13 and expires 2026-11-13 unless extended, with no decision announced as of the latest October coverage (sourced), so every existing certificate is scarce and its cash flow is worth protecting.
- **Founder edge.** The freight engine already does rate-table-versus-invoice with a flat-plus-contingency model. The family firm gives real remits under a BAA. The founder-owner's name opens doors with peer owners. His mother sits inside billing and operations (role unverified).
- **First 10 customers.** (1) MHC. (2) Grandfather and Mom introduce five owner friends; offer a free 90-day, one-payer diagnostic for a contingency on recoveries. (3) Present the "what Humana really pays agencies like you" findings at one state home-care association meeting through the same introductions. (4) Ask each paying agency for two more intros.
- **Cost to first revenue.** About $3,000: LLC $125, healthcare-attorney review of BAA and contingency terms about $1,500, cyber and E&O insurance about $1,200, a BAA-ready hosting setup.
- **Path to big (assumptions).** Value created: roughly $14B of MA and managed-care home-health revenue (assumption; FFS alone was $16.0B in 2024, sibling) times a 10% uplift is $1.4B a year; capturing 5% to 10% of it is $70M to $140M. Bottom-up: 1,500 member agencies (12% of the nation) x $1.6M contracted revenue x 3% = $72M, plus $7k a year of software each = $10M. Florida alone at 20% share is only about $10M, so national expansion is required. Over 10% share is a stretch; say so. Exit candidates: Waystar, Axxess, Trella, Enzo, Aledade-type operators, or a PE-backed platform.
- **Who does it today.** No independent HHA payer-rate network found. Adjacent: Trella (referral analytics), Strategic Healthcare Programs (cost benchmarks), Enzo (a contracting glossary, not a rate base), Claim Health and Amperos (denials and appeals, not contract rates), eCapital (financing). Sibling lenses list the same idea as "Payer Truth", "PayerProof" and "MA Rate Truth", so expect it to be contested; the network and MSO stages are what the narrow versions lack.
- **Legal premise.** HIPAA (BAA, minimum necessary). Antitrust: messenger only, firewalls, counsel before any group pricing. Contingency fees on federal money: confirm.

---

## 2. Ground Truth Guild: a vetted expert bench that sells graded evals to AI companies

**One line.** A bench of working professionals (CFPs, CPAs and advisors from his father's network; RNs, OASIS coders and billers from the family company) that sells expert-graded eval sets and rubric grading to AI companies, starting where no independent tests exist.

- **Customer.** Heads of product, ML or clinical quality at home-health-operations AI startups (OASIS review, scribes, denials, intake) and at advisor-tech and fintech AI startups. Later: AI labs.
- **Who pays and budget.** The AI company's eval and data budget. $2,500 for a 100-chart blind eval; $10k to $50k for an eval pack; $3k to $10k a month for regression retainers. Expert hours billed at expert pay plus 35% to 50%. Mercor's contractors keep roughly 60% to 70% of gross (sourced), so a 30% to 40% take is the market norm.
- **Problem.** Healthcare AI vendors publish self-reported accuracy (Enzo about 95%, Olli 98% "verified through internal audits") and I found no independent OASIS benchmark (sourced). Generic expert marketplaces are not vertical and have had breaches and contractor lawsuits (Mercor, sourced). Hippocratic AI hires nurses in-house (Oct 2026 posting, sourced), which is slow and costly.
- **Solution.** Build synthetic gold sets with no PHI (experts write realistic charts and client emails). Three first packs: OASIS and chart review, advisor marketing-rule review, and consumer money questions graded to CFP standards. His multi-agent pipelines pre-grade; experts adjudicate; deliver inter-annotator agreement and an error taxonomy. Then monthly regression subscriptions, then adjacent licensed roles.
- **Why now.** Expert data is the hottest line in AI: Mercor reported about $2B annualized gross run rate in June 2026 and was in talks at $20B; Handshake about $1B gross (sourced). Healthcare-ops AI raised heavily in 2026 yet has no independent test.
- **Founder edge.** His AI-text detector beat commercial detectors in blind tests, which is exactly eval design. The family supplies pre-vetted experts who trust the name.
- **First 10 customers.** List 60 healthcare-ops AI startups and 30 advisor-tech AI startups. Send founders a one-page offer: "blind eval of your model on 100 expert-graded synthetic charts, $2,500, results in 10 days." Use his father's advisor-tech peers for fintech introductions. Seed the bench with MHC coders and five advisors.
- **Cost to first revenue.** About $1,500: LLC, E&O about $1,000, contractor agreements. Expert pay is passed through from client money.
- **Path to big (assumptions).** $50M of gross billings at a 35% take is $32.5M of expert pay, about 340,000 hours at $95, roughly 2,000 part-time experts at 3 hours a week. That is plausible only if the bench spreads across regulated professions. Honest base case for the vertical alone: $5M to $15M.
- **Who does it today.** Mercor, Surge AI, Scale/Outlier, Handshake AI, Turing; healthcare: Centaur Labs (50,000+ experts, a Series B of $16M+ in Oct 2024, sourced). No home-health-operations or advisor-specific independent bench found.
- **Risks.** Worker classification, security of expert data, trust in a young founder (mitigate with signed methodology and published agreement stats).

---

## 3. Proving Ground: the first measured bake-off of home-health AI tools

**One line.** Run the same blind test on every AI tool agencies are being sold, publish a scorecard, sell it to operators and PE platforms as a buying guide and to vendors as private regression reports. It shares the bench and the synthetic charts with idea 2.

- **Customer.** Owners, COOs and quality directors at agencies, PE-backed platforms, state associations, plus the vendors themselves.
- **Who pays and budget.** Operators and associations: $1,500 to $3,000 a year. PE platforms and consultancies: $10k to $25k reports. Vendors: $5k to $15k private reports, with publication rules fixed in advance and no pay-for-rank. Budget: software selection and consulting.
- **Problem.** Every accuracy claim is vendor-reported. Buyers are told to run their own pilot with their own coders (sourced). Surveyors will not accept "the software made a mistake" (Enzo's guidance, sourced). KLAS ranks home-health EHRs by customer-reported satisfaction, not measured performance (sourced).
- **Solution.** A quarterly "Home Health AI Scorecard": 300 synthetic charts graded by credentialed coders, per-error results (missed PDGM driver, wrong functional score, hallucinated visit), cost per chart, BAA and data-use checks.
- **Why now.** At least six funded vendors in one workflow. CMS proposes cutting the OASIS submission deadline from 4.5 months to 45 days (sibling), which pushes adoption.
- **Founder edge.** The detector-versus-GPTZero-versus-Pangram blind tests are the same method. MHC's owner can sit on a small operator advisory panel.
- **First 10 customers.** Publish a free "five tools, 100 charts" blind test. Ask MHC to forward to five owners. Sell ten operator subscriptions at $1,500 and two vendor reports.
- **Cost to first revenue.** About $2,500: expert grading about $1,500, tool trials about $1,000.
- **Path to big (assumptions).** KLAS-style. 3,000 subscribers x $2,000 = $6M, plus PE and vendor work of $4M to $8M. Reaching $50M means becoming the standard across all post-acute and then hospital procurement. Honest: $10M to $25M; best used as the trust layer that feeds ideas 1 and 2.
- **Who does it today.** KLAS (surveys), vendor self-reports, SimiTree buyer-question blog, QAPIplus webinar. No measured independent benchmark found.

---

## 4. Care Navigators: his father's flat-fee marketplace model applied to elder care

**One line.** Families pay a flat fee for an independent care navigator who compares options and plans costs; the navigator takes no commissions, and no money passes to or from any home-health provider.

- **Customer.** Adult children of aging parents, among 63 million US family caregivers (AARP 2025, sourced). First: clients of his father's advisors and families leaving hospital stays. Later: employers.
- **Who pays and budget.** Families, $295 to $495 for a care-and-cost plan and a provider shortlist, versus Aging Life Care managers at $150 to $350 an hour (KFF, sourced). Caregivers already spend about $7,200 a year out of pocket (AARP, sourced). Later: employers at $4 to $8 per employee per month (assumption).
- **Problem.** A Place for Mom is free to families because facilities pay referral fees; conflicts are documented (Minnesota state guidance, sourced), and the company raised $175M at a $1B+ valuation (Dec 2024 report, sourced). Care managers are scarce (about 1,700 members in 2018, outdated).
- **Solution.** AI intake plus a contracted human navigator (care managers, social workers, retired discharge planners, pre-screened the way MFA screens advisors) produces: care level needed, three vetted options (including agencies other than MHC), what Medicare, MA, Medicaid and VA cover (information with pointers to official sources), and private-pay costs. No medical, legal (Medicaid planning goes to elder-law attorneys) or investment advice.
- **Why now.** SEO lead-gen is being eroded by AI answers (NerdWallet's Q4 2025 call tied revenue drops to organic search headwinds, sourced). Caregiver numbers rose 45% in a decade (AARP, sourced). A moratorium on new agencies makes picking among existing ones the decision.
- **Founder edge.** The 24-year playbook (pre-screening, flat fee, consumer demand) lives in his father. The family company supplies domain intelligence and trust, not payments. He builds the AI intake in days.
- **First 10 customers.** Offer ten of his father's advisors' clients with aging parents a $295 "parent care plan". Mom has the family company's social workers hand a neutral flyer to private-pay families (no payment either way). Post in two local caregiver Facebook groups.
- **Cost to first revenue.** About $2,000: LLC, $1,000 liability coverage, Stripe, $500 ad test.
- **Path to big (assumptions).** 50,000 families a year x $400 = $20M. Past that, the employer channel: 1M covered employees x $6 per month x 12 = $72M. Competitors in the employer channel probably include Wellthy, Cariloop and Ianacare (unverified).
- **Who does it today.** A Place for Mom, Caring.com, Seniorly (provider-paid); Aging Life Care managers (hourly); Area Agencies on Aging (free, public). I found no flat-fee startup.
- **Legal premise.** Anti-Kickback Statute: never accept payment from a provider that bills Medicare or Medicaid, and disclose the family tie to MHC. Check whether Florida regulates senior-care referral or placement agencies (unverified).

---

## 5. Advisor Front Door: the compliant "talk to a human" exit for AI assistants

**One line.** Expose his father's pre-screened flat-fee advisors as a tool that AI assistants, newsletters and fintech apps can call when a person needs a human for a money question.

- **Customer.** (1) Flat-fee and hourly advisors who want AI-era client flow. (2) Distribution partners: fintech apps, newsletters, alumni groups, employers.
- **Who pays and budget.** Advisors, a flat $99 to $299 a month listing (not a per-lead success fee, because compensated referrals are "endorsements" under the SEC Marketing Rule and some states require solicitors to register; counsel decides). For scale: WiserAdvisor $1,000 to $2,500 a year plus per-lead fees and Broadridge $1,899 a month (sibling).
- **Problem.** NerdWallet's credit-card revenue fell 24% and SMB revenue 12% in Q4 2025 on organic-search headwinds (sourced). Advisors report prospecting that starts with a prompt to a chatbot (July 2026 trade piece, sourced). There is no standard, vetted way to hand someone from AI to a human fiduciary.
- **Solution.** A weekend build: an MCP server, a ChatGPT-style app and a web embed. It collects a structured, non-advice brief (goal, asset range, state, complexity), matches against the verified roster (CRD/IAPD checks), and books a 20-minute consult. The assistant never recommends products.
- **Why now.** ChatGPT app submissions opened Dec 2025, though monetization was narrow and I found no financial-services policy (sourced). The SEC's Dec 2025 risk alert makes unvetted lead-gen riskier, so pre-screening is a selling point. NY Life (Sept 2026) found 40% of Gen Z say AI makes them more likely to want a human (sibling).
- **Founder edge.** He ships integrations in days. MFA has the roster, the screening process, the compliance tech and the brand.
- **First 10 customers.** Ten existing MFA advisors at $149 a month (three months free for a case study). Then list the app in the directories and pitch five newsletters.
- **Cost to first revenue.** About $1,200: LLC, domain, hosting, counsel hour on the listing-fee structure.
- **Path to big (assumptions).** 5,000 advisors x $200 x 12 = $12M. $50M needs about 20,000 paying advisors or a counsel-approved per-consult model plus employer channels. **Main risk: platform dependence.** Direct rivals are funded: Zoe Financial ($45M raised), Range ($60M, Feb 2026), Facet (sibling).
- **Who does it today.** Zoe, Facet, Range, SmartAsset, WiserAdvisor, Wealthtender. None found as an AI-assistant-native handoff; the sources are commentary only.

---

## 6. Founder Transfer Kit: turn an owner's head into what a buyer pays for

**One line.** An AI interviewer converts an aging owner's knowledge into a transfer binder, owner-dependence score and regulatory calendar, starting with his grandfather and sold through advisors, CPAs and bankers.

- **Customer.** Owners aged 55 to 75 of founder-led businesses. First: his grandfather (design partner). Then owner-clients of his father's network, CPAs, bankers and brokers.
- **Who pays and budget.** The owner at $2,500 to $7,500 per kit, or the advisor at a $1,500 white-label price. Budget: exit and succession planning.
- **Problem.** About 6 million US private businesses are expected to change hands by 2035 (McKinsey, via IQExit's materials, sourced). Owner-dependent firms are discounted. In home health the moratorium makes certified agencies scarce and diligence reads like a compliance audit.
- **Solution.** Weekly 30-minute voice interviews, structured into SOPs, vendor and referral maps, key-person risks, a 12-month licenses/enrollment/contract calendar, and a buyer-ready data room. A healthcare edition adds CCN and payer-concentration facts.
- **Why now.** Deal pace in certified home health is up 41% (sibling). Seed-funded entrants prove demand but are generic: Rowan ($3.3M seed, Mar 2026) and IQExit (Feb 2026).
- **Founder edge.** The grandfather is the founder-owner and an authentic case study. Advisors in his father's network are the channel. He is plausibly the successor, which lends credibility.
- **First 10 customers.** Grandfather (free, for a testimonial and introductions). Five advisors offering two owner-clients each a $1,500 pilot. Three CPAs.
- **Cost to first revenue.** About $800.
- **Path to big (assumptions).** 600,000 transfers a year x 1% x $3,000 = $18M; add data room, buyer matching and financing referrals toward $50M. Long sales cycles and funded competitors cap it.
- **Who does it today.** Rowan, IQExit, brokers and exit-planning firms; none found specific to certified-healthcare owners.

---

## 7. Cash Radar: payer-level cash forecasting for post-acute, then a working-capital marketplace

**One line.** Use remittance data to tell each owner which payer pays what on which day, then connect the forecast to a licensed lender. It is the financing stage of idea 1.

- **Customer.** CFO or owner of an agency or hospice with 30 to 300 employees, especially after an ownership change.
- **Who pays and budget.** $300 to $800 a month; lender partners pay origination fees where state licensing allows (check). Evidence of lender appetite: eCapital announced a $10M facility (Sept 2026) and a $30M facility (Aug 2026) for post-acute providers (sourced).
- **Problem.** About 52 days in accounts receivable and a 13% denial rate (vendor benchmark, sibling); aides are paid biweekly. Lenders can take a security interest in Medicare receivables but cannot receive Medicare payments directly, so they use double lockboxes (Skadden, Buchalter, sourced). Medicare Advantage assignment depends on each contract (unverified).
- **Solution.** Train payer-specific pay-time models on 835s; deliver a 13-week cash forecast with alerts; later an "Advance Desk" with a licensed lender; later a family-capital facility for peers, under counsel.
- **Why now.** Pre-claim review slows cash. The moratorium raises a certificate's value as collateral.
- **Founder edge.** Idea 1's audit data feeds the models. The family's investment connections are the capital partner.
- **First 10 customers.** MHC (free), then idea 1's member agencies at $300 a month.
- **Cost to first revenue.** About $2,500.
- **Path to big (assumptions).** $50M of revenue at an 18% yield needs an average book near $280M, which requires a licensed lender entity and institutional credit. Treat as a multi-year option, not a start.
- **Who does it today.** eCapital and other specialty lenders; Care.fi (India, $8M Series A, hospitals). None forecasting by payer for home-health agencies found.

---

## 8. Roots Circuit: a shared audience and sponsor network for independent roots festivals

**One line.** Run first on Annapolis Baygrass: a consented fan database, sponsor reports, volunteer and vendor workflows, then a co-op of neighboring festivals that sells regional sponsors an audience no single festival has, plus live-set archive sales.

- **Customer.** Independent roots, bluegrass and folk festival producers and their sponsors. First: Baygrass (nominated for IBMA 2026 Event of the Year).
- **Who pays and budget.** Festivals $200 to $600 a month plus 5% to 10% of sponsorship they close; sponsors $5k to $25k packages across several festivals. A veteran organizer says corporate sponsorship is the only way festivals survive long term; an old (2007) blues-festival source says sponsorship was about 25% of revenue (both sourced, both soft).
- **Problem.** Sponsors are sold one at a time with no audience data. Software is patchworked across Eventeny, Etix, Tixr and volunteer tools.
- **Solution.** Weekend build for Baygrass; invite ten neighboring festivals into the co-op; regional sponsor packages; optional live-set recording and archive in the style of nugs.net (rights are complicated, per its founder).
- **Why now.** Eventbrite sold for about $500M (Dec 2025), so ticketing alone is a low ceiling and the value is in audience, sponsorship and payments. IBMA's convention gathers festival promoters in one place.
- **Founder edge.** His father co-founded Baygrass and sits in the IBMA world. He builds in days.
- **First 10 customers.** Baygrass (free pilot), then five festivals met through his father's contacts and the next IBMA convention.
- **Cost to first revenue.** About $500.
- **Path to big (assumptions).** About 283 US bluegrass festivals (listing-site count, sourced) x $6k a year of software and sponsorship take is $2M to $5M. Adding roots, folk and Americana festivals and food festivals might reach $20M to $40M. Venture scale is unlikely; the realistic exit is to a ticketing or festival-software company.
- **Who does it today.** Eventeny (festival software), Etix (1,800 venues), Tixr, Eventbrite (now Bending Spoons), nugs.net (live recordings, self-financed until 2017). No sponsorship co-op found.

---

## Week-1 checklist for idea 1 (the one to start Monday)

1. Ask Mom for the entity, NPI and CCN list, service lines, payer mix, EHR and billing owner (the answer reranks everything).
2. Get one healthcare attorney hour: BAA, contingency-fee terms, and a no-price-agreement rule for any peer network.
3. Port the freight engine: swap the invoice parser for 835 and swap the tariff table for contract rate schedules.
4. Pull 90 days of one payer's remits from MHC and produce the first recovery packet.
5. Book three owner introductions through grandfather.

## What I could not verify

- MHC's real legal identity and service lines.
- Any current Florida payer-rate benchmark vendor (none found, but search is imperfect).
- OpenAI's financial-services rules for apps and any referral-fee terms.
- Whether Florida regulates senior-care referral agencies.
- Competitors in employer caregiver benefits (names above are from memory).
- The moratorium decision (due on or before 2026-11-13).

## Sources (key ones)

- MedPAC July 2026 data book and agency counts via https://homehealthcarenews.com/2026/07/medpac-flags-california-los-angeles-as-primary-drivers-of-home-health-agency-growth/
- Moratorium status: https://homehealthcarenews.com/2026/10/the-future-for-hospice-home-health-providers-under-cms-moratoria/
- Aledade 2026 network: https://businesswire.com/news/home/20260206329715/en/Aledade-Adds-a-Record-700-New-Primary-Care-Organizations-to-its-Value-Based-Care-Network-for-2026
- Messenger-model guide: https://publish.ahcancal.org/Reimbursement/Medicare/Documents/GUIDE TO ANTITRUST COMPLIANCE FOR PROVIDERS CONSIDERING COLLABORATIVE CONTRACTING_ FINAL.pdf
- MA home-health rate context: https://homehealthcarenews.com/2025/05/we-need-you-to-work-with-us-home-health-providers-renegotiate-better-medicare-advantage-deals/
- Medicare receivables anti-assignment: https://buchalter.com/wp-content/uploads/2024/11/Medicare-Medicaid-Anti-Assignment-Provisions.pdf and https://www.skadden.com/-/media/files/publications/2024/02/health_care_accounts_receivable_financing.pdf
- eCapital post-acute facilities: https://pulse2.com/ecapital-provides-30-million-receivables-facility-to-support-18-facility-post-acute-care-provider/amp/
- Mercor run rate: https://startupfortune.com/mercors-revenue-hit-2-billion-in-june-and-the-ai-data-race-isnt-slowing/
- Centaur Labs: https://www.biospace.com/centaur-labs-raises-15-million-led-by-matrix-partners-to-label-the-world-s-medical-data-accelerate-ai-development
- OASIS AI vendor claims: https://www.enzo.health/glossary/ai-in-home-health and https://simitreehc.com/our-insights/blog/ai-powered-coding-vendor-questions
- Basalt Health: https://hlth.com/insights/news/basalt-health-raises-20m-to-scale-ai-powered-post-acute-care-platform
- KLAS home-health rankings: https://www.beckershospitalreview.com/healthcare-information-technology/ehrs/klas-3-a-list-ehrs-for-home-health-agencies/
- AARP caregivers: https://www.aarp.org/press/releases/2025-07-24-new-report-reveals-crisis-point-for-americas-63-million-family-caregivers
- Care manager fees: https://kffhealthnews.org/aging/new-old-age-aging-life-care-managers-geriatric-help/
- Provider-paid referral conflicts: https://mn.gov/adresources/search/827359d1-b8ba-537a-888f-aefebebc8722/
- NerdWallet and AI search: https://www.marketbeat.com/earnings/reports/2026-2-25-nerdwallet-inc-stock/
- Marketing Rule promoters: https://www.sec.gov/resources-small-businesses/small-business-compliance-guides/investment-adviser-marketing
- Succession startups: https://pulse2.com/rowan-3-3-million-raised-to-modernize-small-business-succession-with-ai/amp/ and https://www.wilmingtonbiz.com/technology/2026/02/18/wilmington_startup_launches_with_focus_on_business_exit_planning/27247
- Eventbrite sale: https://www.businesswire.com/news/home/20251202408560/en/Eventbrite-Enters-into-Definitive-Agreement-to-Be-Acquired-by-Bending-Spoons-for-Roughly-500-Million-to-Accelerate-Eventbrites-Next-Phase-of-Growth
- Festival software: https://resources.eventeny.com/best-festival-software-for-small-vs-large-u-s-events-2026
- Bluegrass festival count: https://bluegrasstoday.com/speaking-of-bluegrass-festivals/
