# AI breakouts: transferable growth patterns from the fastest AI-native companies (2024 to Oct 2026)

Analyst: round-2 research subagent. Written mid-October 2026. The raw evidence log (every figure with its source and confidence tag) is preserved verbatim in the Appendix at the bottom of this file, so nothing found during research is lost.

## 0. Read this first: how much to trust the numbers

1. **Almost no revenue figure in this field is audited.** Three tiers appear below, and I tag them throughout:
   - **[C] company-stated** (e.g., EliseAI's own $200M ARR post, ElevenLabs' CEO on $330M, Sierra's $100M announcement).
   - **[S] Sacra or similar third-party estimate** (Harvey, Abridge, OpenEvidence, Replit, Rilla, Handshake).
   - **[P] press report citing an anonymous source** (Cursor's >$4B, Mercor's $2B gross).
2. **"ARR", "annualized revenue", "run rate" and "gross run rate" are not the same thing.** Mercor's $2B is *gross* customer spend before paying contractors 60-70% of it, so its software-style revenue is roughly $0.6-0.8B. Handshake's ~$1B gross is ~$0.3-0.45B net. Any "fastest to $100M" list that mixes these overstates labor-marketplace companies.
3. **Weak-evidence cases are flagged, not dropped.** Rillet (no dollar ARR disclosed), EvenUp (only "doubling yoy"), Genspark/Gamma (nothing found), Legora's "$200M ARR in under six months" (a Bessemer teaser line only).
4. **Valuations are not evidence of durability.** Sierra ~100x ARR at its $10B round, OpenEvidence ~50x, Abridge ~53x. Those are investor beliefs.
5. **Retention is the hidden variable.** ChartMogul (Dec 2025, ~3,500 software companies, ~200 AI-native): AI-native median gross revenue retention is **40%**, net 48%. By price per month: under $50 gives GRR 23% / NRR 32%; $50-249 gives 45% / 61%; over $250 gives **70% / 85%**. Cheap AI subscriptions churn. Expensive workflow products stick.
6. **The speed benchmarks** (Bessemer State of AI 2025, 20 companies studied, small sample): "Supernovas" average ~$40M ARR in year 1 and ~$125M in year 2 at roughly 25% gross margin (often negative); "Shooting Stars" go ~$3M, $12M, $40M, $103M over four years at ~60% gross margin. Bessemer itself warns Supernova growth can reflect low switching costs and novelty. A SoftwareSeni piece (secondary) says 80+ AI startups have passed $100M ARR, averaging 5.7 years versus 7.5 for the Cloud 100.

## 1. The pool sizes that frame everything

Source: Menlo Ventures, State of Generative AI in the Enterprise, Dec 2025 (survey of ~500 US enterprise buyers plus a bottoms-up model). https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/

| 2025 enterprise gen-AI spend | $ |
|---|---|
| Total | $37B (from $11.5B in 2024, $1.7B in 2023) |
| Applications | $19B: departmental $7.3B, vertical $3.5B, horizontal $8.4B |
| Infrastructure | $18B (model APIs $12.5B) |
| Coding (inside departmental) | $4.0B (55% of departmental; was $550M in 2024) |
| Departmental: IT / marketing / customer success | $700M / $660M / $630M |
| Vertical: healthcare | ~$1.5B (ambient scribes $600M) |
| Vertical: legal / creator / government | $650M / $360M / $350M |
| Share of app spend captured by startups | 63% (up from 36%); finance and ops 91%, sales 78%, product/eng 71% |
| Bought rather than built | 76% (53% in 2024) |

Reality checks I computed from these:
- **Cursor's reported run rate (>$4B, Jun 2026) alone equals the entire 2025 coding category** ($4.0B). The category is roughly doubling or more per year, so this is a growth market, but one product is already category-sized.
- **Harvey** (~$195M end-2025 per Sacra) was about 30% of the whole 2025 legal-AI line ($650M). Legal is a pool that a leader has substantially claimed. Ratio is rough because ARR and calendar-year spend are not the same measure.
- **Abridge** (~$100M ARR mid-2025) was about 17% of the 2025 ambient-scribe line ($600M).
- **The entire 2025 vertical AI pool was $3.5B.** A new vertical company reaching $100M needs about 3% of that, but the pool is growing about 3x a year, so this is feasible. It also means most single verticals are small.
- **The bigger frame is labor, not software.** Foundation Capital sizes "service as software" at ~$4.6T (≈$2.3T of salaries in sales and marketing, software engineering, security, HR, plus ≈$2.3T of outsourced IT and business-process services, citing Gartner). Bessemer's Jan 2026 *Building Vertical AI* says business and professional services are 13% of US GDP, "roughly 10x the size of the software market", and that vertical AI "isn't competing for IT budgets; it's competing for labor budgets." https://foundationcapital.com/ai-service-as-software/ ; https://bvp.com/atlas/building-vertical-ai-an-early-stage-playbook-for-founders

## 2. The ten patterns

Each pattern: mechanism, examples with numbers, the shift that enabled it, why incumbents did or did not respond, whether it is crowded or open, and where it might transfer. Transfer targets are **my inference, not sourced findings**, and each would need the round-2 rules applied (named payer, bottom-up path to $100M, incumbent search).

---

### Pattern 1. Outcome-priced replacement of a high-volume, measurable labor function

**Mechanism.** The vendor takes responsibility for finishing the work (a resolved customer conversation) and is paid per completed outcome, not per seat. Revenue scales with the customer's *volume of work*, and the budget line is operations labor or outsourced BPO, not IT.

**Examples.**
- **Sierra** (customer-service agents): announced $100M ARR on 21 Nov 2025, ~21 months after founding [C]; ~$200M reported by May 2026 [P, one June 2026 source says ~$150M]; valued at $10B (Sep 2025) then ~$15.8B; customers include ADT, Bissell, Vans, Cigna, SiriusXM, SoFi; founders said they were "astounded" that older non-tech businesses signed. Outcome-based pricing (~$1.50 per resolution per secondary sources; Sierra has not published a rate). https://techcrunch.com/2025/11/21/bret-taylors-sierra-reaches-100m-arr-in-under-two-years/
- **Decagon**: says it reached $100M annualized (outsiders have not verified); Sacra estimated only $35M in Oct 2025; $4.5B valuation Jan 2026; per-resolution pricing ~$1.50. https://sacra.com/c/decagon/
- **Intercom Fin**: $0.99 per resolution plus seats; Intercom's claimed resolution rate varies by source (42-67%); critics note "resolved" can mean the customer simply stopped replying. Bessemer lists Intercom as having launched a "$100M+ AI product" (no ARR given).

**Shift that enabled it.** LLM agents became able to resolve tickets end to end (authenticate a patient, process a return, reissue a card). The measurable unit (a resolution) made per-outcome pricing possible. Foundation Capital's implied target criteria: repetitive and rule-based, large existing spend, chronic understaffing, measurable outcome.

**Why incumbents failed (partially).** They did not fail outright. Zendesk launched outcome-based pricing in 2024 and let customers shift committed spend from seats to AI agents without rewriting contracts; Intercom built Fin. The structural problem for incumbents is that per-resolution pricing cannibalizes seat revenue. Startups won greenfield enterprise deals because they had no seat base to protect.

**Crowded or open.** CX is crowded (Sierra, Decagon, Intercom, Zendesk, plus ElevenLabs and others selling voice agents into support). Open is the *mechanism* in other functions.

**Transfer targets (inference).** Functions with a clear unit of finished work and a large outsourced or in-house headcount: insurance claims intake and first-notice-of-loss, prior authorization and denial appeals in healthcare billing, accounts-payable and invoice exception handling, collections, KYC/onboarding case handling, recruiting coordination. In healthcare RCM I found incumbents buying rather than losing (R1 is acquiring Humata Health, Aug 2026; Waystar bought Digitize.AI), so that sub-pool may be harder than it looks.

---

### Pattern 2. Developer-salary capture through bottom-up seats that expand into the enterprise

**Mechanism.** A product that makes an expensive, scarce worker (a software engineer, roughly $1T a year of global salaries per Foundation Capital) visibly more productive. Individuals adopt it on a credit card; the employer buys seats once it is already embedded; then usage-based agents expand spend per seat.

**Examples.**
- **Cursor (Anysphere)**: $1B annualized Nov 2025; ~$2B Feb 2026; ~$3B late Apr 2026; >$4B early Jun 2026 [P, anonymous source]; ~75% (~$2.6B) enterprise, with enterprise revenue reportedly tripling Q1 2026 over Q4 2025. Reported SpaceX option to acquire at $60B (status unverified). https://dealroom.co/news/134107-cursor-tops-4b-annualized-revenue/
- **Lovable**: ~$100M ARR mid-2025, ~$200M Nov 2025, ~$400M Feb 2026, reported tracking toward ~$600M by end Aug 2026 [P, secondary]; $13.3B valuation. https://www.vktr.com/ai-platforms/lovable-raises-400-million-at-133-billion-valuation/
- **Replit**: ~$525M annualized Apr 2026, up from ~$300M end-2025 [S]; $9B valuation. https://sacra.com/research/replit-passes-500m-year/
- Fast-follower decay is visible: Bolt.new hit ~$40M ARR in five to six months and is described as much smaller than Lovable and Replit.

**Shift that enabled it.** Models crossed the threshold where agents write and debug real code; developers adopted bottom-up, and Menlo credits startups' shipping speed, model-agnostic design and product-led growth for beating incumbents.

**Why incumbents failed.** I did not pull GitHub/Microsoft share data, so I cannot say how badly they lost. Menlo's general explanation applies: startups swapped to the best new model immediately and entered via individual users while incumbents sold top-down.

**Crowded or open.** The most crowded category in the whole study (frontier labs ship their own coding agents, which is general knowledge, not from my sources; margins at the Supernova end are ~25% per Bessemer; vibe-coding retention is a known question). Do not plan a new company against it.

**Transfer targets (inference).** Other scarce, expensive technical workforces working in a digital artifact where an agent can act: chip and hardware design, mechanical/CAE engineering, scientific computing and bioinformatics, quantitative research, security engineering (Foundation Capital lists security as a salary pool). The test is whether the worker already has a text-or-code-like artifact an agent can edit and verify.

---

### Pattern 3. Seat price anchored to a professional's billable hour

**Mechanism.** Sell to organizations whose *product is the professional's time* (law firms, clinics). Price per seat as a small fraction of that professional's hourly rate, require annual commitments and minimums, and embed forward-deployed staff who are former members of the profession.

**Examples.**
- **Harvey**: Sacra estimates ARR >$100M Aug 2025, ~$195M end-2025, ~$400M Aug 2026 [S]; $15.5B valuation after $550M round (Sep/Oct 2026, press); 142,000+ lawyers, 1,500+ customers, ~50% of the Am Law 100 [C]. Pricing reported at ~$1,200 per lawyer per month, 12-month commitment, ~20-seat minimum (unattributed); about 10% of staff are ex-lawyers in forward-deployed roles. https://sacra.com/c/harvey/
- **Legora**: reported 18 months to $100M ARR (secondary) and Bessemer's teaser says it "doubled to $200M ARR in less than six months" (no detail, treat as unconfirmed); $5.6B valuation.
- **EvenUp** (personal-injury demand letters): $150M Series E at >$2B (Oct 2025), 2,000+ firms, 20% of the top 100 PI firms [C]; only "doubling ARR yoy" is disclosed, so the revenue evidence is weak. https://www.bvp.com/news/tripling-down-on-evenup-to-redefine-justice-with-ai

**Shift that enabled it.** Language-heavy professional work became automatable at acceptable quality. Bessemer notes that traditional SaaS "failed to solve high-value vertical-specific tasks" that were language-heavy or multimodal.

**Why incumbents failed (partially).** Legal-content incumbents sold databases and search. LexisNexis chose an alliance with Harvey over building a competing AI stack; Thomson Reuters has CoCounsel. Frontier labs (Anthropic's legal plugin) are now a threat from below.

**Crowded or open.** Legal is crowded and the leader holds a large share of the pool (see section 1). The *mechanism* is open in other high-rate professions.

**Transfer targets (inference).** Accounting and audit, management consulting and research, regulatory/compliance consulting, patent prosecution, actuarial, architecture/engineering permitting. The caveat I could not resolve from sources: in firms that bill by the hour, efficiency can cut the firm's own revenue, so the buyer needs a reason to want it (fixed fees, competitive pressure, in-house teams).

---

### Pattern 4. Ambient capture of conversations to eliminate documentation labor (the voice wedge)

**Mechanism.** Professionals spend large fractions of time documenting work they just spoke aloud. Record the conversation, produce the structured record the system of record needs, and sell it to the organization on a measurable saving (physician retention, billing capture, coaching).

**Examples.**
- **Abridge**: Sacra ~$100M ARR May 2025 (from ~$60M end-2024) [S]; 250+ health systems; $5.3B valuation (Jun 2025); ~$2,500 per clinician per year (Sacra estimate). https://sacra.com/c/abridge/
- **Menlo**: ambient scribes were a $600M line in 2025 (up 2.4x).
- **Rilla** (records in-home sales conversations for HVAC, plumbing, roofing reps): ~$70M ARR Apr 2026 (from ~$51M in 2025) [S]; Home Depot deal Jan 2026. https://sacra.com/c/rilla
- **Ambience** ~$30M ARR May 2025 [S].
- Bessemer: breakout vertical AI companies share a compelling wedge, "often voice/audio", deep domain context, and ROI clear from day one; it cites Abridge as a "tertiary workflow" (safer wedge) entry.

**Shift that enabled it.** Speech recognition plus LLM summarization reached clinical-grade reliability. Clinician burnout gave health systems a retention budget line.

**Why incumbents failed (partially).** Microsoft owned Nuance/DAX (600+ organizations) and Epic, with ~42% of acute-care EHR share, launched its own scribe in 2026 (sources conflict on whether it is built on Microsoft's technology). This is the clearest case of the system-of-record owner bundling a good-enough version. Abridge's Epic integration both accelerated it and limits how far it can go against Epic. https://medcitynews.com/2026/02/04/ambient-scribe-ai-startups-epic/

**Crowded or open.** Clinical scribes are crowded (Abridge, Ambience, Nabla, DAX, Epic, Freed). Open is the *conversation-to-record* mechanism in non-clinical fields where the system of record is weaker or fragmented.

**Transfer targets (inference).** Insurance field adjusters and home inspectors, home-health and social-work case management, public-safety reports, construction site logs, mortgage and wealth-advisory meetings. Rilla also shows the risk: ServiceTitan owns the technician workflow and job record and is moving into the recording layer.

---

### Pattern 5. Free tool for a profession, paid for by the vendors who want that profession's attention

**Mechanism.** Make a tool so useful to a professional that most of the profession uses it daily at no charge, then sell the moment of attention (here, the seconds while the answer loads) to suppliers whose marketing budget is aimed at that exact audience.

**Example.**
- **OpenEvidence** (physician answer engine): Sacra estimates ~$7.9M annualized end-2024, ~$150M end-2025, ~$300M annualized Jul 2026 [S]; reported 90% gross margin; free to verified clinicians; funded by pharma and device advertising; ~20M consultations a month (Jan 2026, up from ~3M a year earlier); company claims >50% of US physicians use it daily; valuation $1B (Feb 2025) to $12B (Jan 2026) to ~$15B (Sep 2026). https://sacra.com/c/openevidence/
- Peers for scale: Doximity $645M revenue FY ending Mar 2026; Wolters Kluwer's UpToDate ~$690M in 2025, growing 8%.

**Pool reality check (important).** eMarketer sizes healthcare/pharma *B2B digital ad* spend at ~$2.1B (2025) to ~$2.6B (updated forecast), plus ~$1.2B of point-of-care marketing (POCMA members). OpenEvidence's ~$300M annualized is therefore on the order of 10-15% of the digital B2B pool, so this specific pool is filling up, and the pattern only works where a vendor class has a big, measurable budget for reaching a defined professional audience. https://www.emarketer.com/content/physician-marketing-2025

**Shift that enabled it.** LLM answer engines became better than keyword search for clinical questions, and the generation wait created a premium ad slot. Pharma has been moving physician outreach from sales reps to digital.

**Why incumbents failed.** UpToDate and similar tools charge clinicians or institutions subscriptions; going free would cannibalize them. Doximity is ad-funded but a network, not an answer engine.

**Crowded or open.** Medicine is being attacked by OpenAI (ChatGPT for Clinicians, Apr 2026) and others. Revenue is concentrated in one regulated buyer category (pharma).

**Transfer targets (inference, pool sizing not done).** Professions whose suppliers spend heavily to reach them: contractors and trades (building-product manufacturers), farmers and agronomists (ag-input companies), dentists and veterinarians (dental and animal-health suppliers), pharmacists, technicians. The medical case is unusually rich because pharma earns very high return per physician reached; most professions have much smaller supplier budgets, so size the supplier-marketing pool before believing this transfers.

---

### Pattern 6. Selling scarce credentialed human expertise to a new, concentrated buyer class (the AI labs)

**Mechanism.** The frontier labs became buyers of a new input: expert human judgment for post-training and evaluation. A marketplace that already controls a supply of credentialed people can resell their time at a markup to a handful of buyers with multibillion-dollar budgets.

**Examples.**
- **Mercor**: >$2B *gross* annualized in Jun 2026, double the start of 2026 and ~4 months after $1B (CEO confirmed to The Information) [P]; H1 2026 gross revenue ~$614M, ~90% from AI model firms; contractors take 60-70%, so net roughly $0.6-0.8B; 30,000+ weekly active contractors, >$2M a day in payouts; free-cash-flow positive; $10B valuation Oct 2025. https://dealroom.co/news/137121-mercor-doubles-to-2b-gross-revenue-run-rate-as-ai-labs-buy-expert-data/
- **Handshake** (a former campus job board): ~$1B gross annualized Apr 2026 per The Information, up from $550M in Jan and $5-10M a year earlier; net ~$300M (Information) to ~$450M (Sacra). The *existing supply-side network* of students and PhDs was the wedge. https://dealroom.co/news/127345-handshakes-arr-crosses-1b-as-ai-training-revenue-surges/
- **Surge AI**: told staff it had $1B+ revenue in 2024 versus Scale's $870M, always profitable, no outside capital [P]. **Micro1**: >$500M gross run rate Aug 2026 [P].

**Shift that enabled it.** Reinforcement-learning-based post-training needs expert-graded data. Meta's 49% stake in Scale AI made rival labs pull work from Scale, redistributing a large share to Mercor, Handshake, Surge and Turing.

**Why the incumbent failed.** Scale AI lost neutrality overnight (Google reportedly planned to cut ties; OpenAI wound down work) and laid off ~14% of staff in Jul 2025. https://sacra.com/c/handshake/

**Crowded or open.** Crowded at the top (at least four businesses at $0.5-2B gross). Fragile: ~90% revenue from model firms, labs are considering in-house labeling, switching costs are low, margins are thin, and a data breach at Mercor in late March 2026 reportedly led to a suspended partnership (my source does not say whose).

**Transfer targets (inference).** The *transferable* part is "an owned network of scarce credentialed or physical-world workers plus a new buyer class with huge budgets." Candidate buyer classes: robotics and embodied-AI developers (demonstration and teleoperation data), model evaluators in regulated fields. I did not research either, and the labs' insourcing risk applies equally.

---

### Pattern 7. Best-in-modality product, self-serve first, enterprise second, priced high enough to retain

**Mechanism.** Win on quality in one modality or task (voice, search, code), launch self-serve and usage-based, let enterprise demand arrive from internal champions. Revenue per account grows with usage.

**Examples.**
- **ElevenLabs**: CEO said $330M ARR in Jan 2026; 20 months to $100M, 10 months to $200M, 5 months to $330M [C]; Sacra estimates ~$500M by Apr 2026; growth mainly enterprise voice agents for support, sales and hiring. https://finance.yahoo.com/news/elevenlabs-ceo-says-voice-ai-161522538.html
- **Perplexity**: FT reported ARR >$450M in Mar 2026, up ~50% in a month after launching an agent tool. https://seekingalpha.com/news/4573154
- **Cursor** (also Pattern 2) fits this go-to-market.

**Shift that enabled it.** Model quality jumps (voice, agents) plus self-serve payment let one product reach millions of users without sales teams. Menlo credits product-led growth for startups' 63% share of application spend.

**Why incumbents failed.** Incumbents sell through procurement cycles and seat contracts. Futurum frames the real risk for ElevenLabs as whether AI voice can survive "platform wars" with larger model providers that can bundle voice (my reading of that framing, not a quoted claim).

**Crowded or open.** Horizontal consumer/prosumer AI is crowded and low-retention at low price points. The ChartMogul data above is the key lesson: under $50 a month retains 23% of revenue, over $250 a month retains 70%. Plan for per-account revenue in the hundreds of dollars a month or contracts, not $20 subscriptions.

**Transfer targets (inference).** A function-specific tool for professionals with expense authority (e.g., recruiters, procurement, analysts, clinicians) priced above $250 a month with workflow embedding.

---

### Pattern 8. Buy the services firm, then use AI to rebuild its margin (the balance-sheet path)

**Mechanism.** Instead of selling software to skeptical, fragmented service providers, acquire the providers (their clients, staff and revenue) and install AI to cut delivery cost. Revenue arrives through acquisition; the bet is on margin expansion, not growth.

**Examples.**
- **Crete Professionals Alliance (now Current)**, Thrive Holdings: >$300M annual revenue, 20+ accounting firms, ~900 employees, planned >$500M of acquisitions over two years with OpenAI-powered tools; it reportedly ran 7,000 tax returns through its Tax AI and cut time per return by about a third. https://www.aol.com/news/thrive-backed-accounting-firm-crete-130200514.html
- **Shield Technology Partners** (IT services): >$100M revenue by end-2025; Thrive Holdings was seeking $2B+ in Mar 2026 ($1B already committed), with Crete and Shield together serving 10,000+ clients. https://finder.techleap.nl/news/note/thrive-holdings-seeks-2b-to-wire-ai-into-analogue-industries
- General Catalyst has committed more than $1B to its "low-tech AI transformation" strategy.

**Shift that enabled it.** Private capital is available to hold services businesses long term, and AI makes the cost-of-delivery gain plausible. In a 2026 survey, over 90% of 102 AI-roll-up investors set a 2x EBITDA improvement as the bar versus about 10-15% from traditional back-office consolidation.

**Why incumbents failed / why it works.** I found no source on why small firms sell (succession and technology gaps are commonly cited but I did not verify that here). Treat that as an open question.

**Crowded or open.** Accounting and IT services are crowded with capital. Exits are unproven: Xeinadin was marketed at £1B, Exponent has not found a buyer at its target, Citrin Cooperman sold to Blackstone for ~$2B; the cited differentiator is whether the acquired firms were truly integrated. The "revenue" here is bought, so it is not comparable to the organic ARR above.

**Transfer targets (inference).** Other fragmented, recurring-revenue service lines with repetitive cognitive work: insurance agencies and brokerages, title and escrow, medical billing, property-management back offices, court reporting and legal support, claims adjusting. This is the only pattern here where a small team with outside capital can credibly reach $100M of *revenue*, but it needs hundreds of millions of capital.

---

### Pattern 9. Concentrated-operator vertical platform that compounds, then widens into a system of record

**Mechanism.** Sell a communications and workflow agent (leasing calls, maintenance requests, renewals) to the largest operators in a fragmented industry, where the same labor-heavy function repeats across thousands of sites. Win a few very large accounts first, then widen into adjacent workflows until the product becomes the record.

**Examples.**
- **EliseAI** (housing and healthcare): passed $200M ARR in Jun 2026 and reports 100% growth for five consecutive years [C]; Sacra's earlier estimates ~$37M end-2023 and ~$75M end-2024 [S]; $350M raise at $4B (Sep 29, 2026); 500+ housing operators including 75% of the top 50 multifamily owners (Built In). https://eliseai.com/blog/eliseai-hits-200m-arr-after-five-consecutive-years-of-100-growth-across-housing-and-healthcare
- **Rillet** (AI-native ERP): $100M Series C at $1B (Aug 2026); discloses no dollar ARR, only relative growth. **Evidence is weak.** https://sacra.com/c/rillet/
- Menlo: finance and operations application spend is 91% captured by startups.

**Shift that enabled it.** Voice and text agents became good enough for routine resident and patient interactions, giving operators a headcount line to cut or avoid.

**Why incumbents failed.** I did not verify why property-management software incumbents did not own this. The question remains open.

**Crowded or open.** This is a "Shooting Star" shape (Bessemer: ~$3M to ~$103M in four years with healthier margins and retention), slower than Supernovas but with stronger evidence of durability. Housing is contested; the structure (a short list of very large owner-operators) can recur elsewhere.

**Transfer targets (inference).** Industries where a few dozen operators control a large share of locations and run a repetitive customer-communication function: self-storage, senior living, dental and veterinary groups, auto dealer groups, hotel management companies, K-12 and higher-ed administration. Pool sizing needed.

---

### Pattern 10. Race the bundle: land through the incumbent's system of record, then widen before it ships a good-enough native version

**Mechanism.** Fast-growing AI wedges often sit on top of an incumbent system of record (Epic, ServiceTitan, a helpdesk, a legal research platform). The startup integrates, grows quickly, and must become a multi-product platform before the owner of the record ships a native feature. Incumbents respond in three ways: bundle, reprice, or acquire.

**Examples.**
- **Bundle**: Epic launching its own scribe (2026) against Abridge; ServiceTitan expanding into recording against Rilla.
- **Reprice**: Zendesk's 2024 outcome-based pricing and seat-to-agent budget reallocation against Sierra and Decagon.
- **Acquire**: R1 acquiring Humata Health (Aug 2026) and Waystar's Digitize.AI purchase in prior authorization (price and date not given in my sources).
- **Ally**: LexisNexis partnering with Harvey instead of competing.

**Shift.** Foundation models make a good-enough competing feature cheap for the incumbent to build once the category is proven.

**Why this matters.** It is the main reason fast growth does not equal durability. Bessemer's open question is whether vertical AI integrates with, or replaces, legacy systems of record.

**Crowded or open.** Not a market; it is a *risk filter* for every idea. Ask for each idea: who owns the record, how long before they bundle, and what second product exists by then?

**Transfer targets.** Apply as a screen. Strong candidates are products that become the record themselves (Pattern 9) or that sit across several incumbents' records.

---

## 3. Crowded versus open, summarized

| Pattern | Status | Why |
|---|---|---|
| 1 Outcome-priced labor replacement | CX crowded; mechanism open | Many funded CX agents; other functions less proven |
| 2 Developer-salary capture | Fully crowded | Frontier labs compete; ~25% Supernova margins |
| 3 Billable-hour-anchored seats | Legal crowded; mechanism open | Leader holds ~30% of 2025 legal line |
| 4 Ambient capture | Clinical crowded; non-clinical open | Epic/Microsoft bundling in health |
| 5 Free tool, vendor-paid | Medicine crowded and pool filling | Pharma digital HCP pool only ~$2-3B |
| 6 Expert labor to AI labs | Crowded and fragile | ~90% concentration, insourcing, low switching cost |
| 7 Best-in-modality, self-serve | Horizontal crowded | Low-price retention 23% GRR |
| 8 Roll-up plus AI | Accounting/IT crowded with capital | Exits unproven; revenue is bought |
| 9 Concentrated-operator platform | Housing contested; structure open | Few big buyers, strong durability signal |
| 10 Race the bundle | Risk filter | Applies to everything |

## 4. What this means for round 2 (my read)

1. **The money moved to labor pools measured in $B-$T, not software categories.** Software-only vertical AI was $3.5B in 2025. Ideas should name the labor or services line they displace.
2. **The wedge is usually a narrow, painful, measurable task with day-one ROI**, often with voice or documents, then widens (Bessemer's "tertiary or adjacent-to-core" advice).
3. **Price high.** Retention data says expensive workflow products keep customers and cheap subscriptions do not.
4. **Buyer concentration cuts both ways.** It gives huge ACVs (EliseAI's top-50 owners, AI labs) and brutal fragility (Mercor's ~90%, Scale's collapse).
5. **Assume the system-of-record owner will bundle** and plan the second product.
6. **Only Pattern 8 (and arguably 9) give a small team a credible path to $100M of revenue without a category-defining model-quality lead.** Pattern 8 needs outside capital; Pattern 9 needs slow, sales-heavy compounding.
7. **Round-1 lessons these patterns avoid or fail:** Patterns 1-4 have a payer with a budget line; Pattern 5 has a clear payer but a pool that is already filling; Pattern 6 has a payer but extreme concentration; Pattern 8 uses services as the wedge with a balance-sheet path to scale.

## 5. Source list (primary or high-quality first)

- Bessemer, State of AI 2025: https://www.bvp.com/atlas/the-state-of-ai-2025
- Bessemer, Building Vertical AI (Jan 2026): https://bvp.com/atlas/building-vertical-ai-an-early-stage-playbook-for-founders
- Menlo Ventures, State of Generative AI in the Enterprise (Dec 2025): https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/
- Foundation Capital, AI leads a service-as-software paradigm shift: https://foundationcapital.com/ai-service-as-software/
- ChartMogul, SaaS retention and the AI churn wave (Dec 10, 2025): https://chartmogul.com/reports/saas-retention-the-ai-churn-wave/
- TechCrunch, Sierra reaches $100M ARR: https://techcrunch.com/2025/11/21/bret-taylors-sierra-reaches-100m-arr-in-under-two-years/
- Zendesk outcome-based pricing: https://www.zendesk.com/newsroom/articles/zendesk-outcome-based-pricing
- Dealroom on Cursor: https://dealroom.co/news/134107-cursor-tops-4b-annualized-revenue/
- Dealroom on Mercor (citing The Information): https://dealroom.co/news/137121-mercor-doubles-to-2b-gross-revenue-run-rate-as-ai-labs-buy-expert-data/
- Dealroom on Handshake: https://dealroom.co/news/127345-handshakes-arr-crosses-1b-as-ai-training-revenue-surges/
- Sacra profiles (estimates): Harvey https://sacra.com/c/harvey/ ; Abridge https://sacra.com/c/abridge/ ; OpenEvidence https://sacra.com/c/openevidence/ ; Decagon https://sacra.com/c/decagon/ ; Rilla https://sacra.com/c/rilla ; Rillet https://sacra.com/c/rillet/ ; ElevenLabs https://sacra.com/c/elevenlabs/ ; Replit https://sacra.com/research/replit-passes-500m-year/ ; Handshake https://sacra.com/c/handshake/ ; Surge https://sacra.com/c/surge-ai
- EliseAI (company): https://eliseai.com/blog/eliseai-hits-200m-arr-after-five-consecutive-years-of-100-growth-across-housing-and-healthcare
- MedCity on Epic vs ambient scribes: https://medcitynews.com/2026/02/04/ambient-scribe-ai-startups-epic/
- eMarketer on pharma physician marketing: https://www.emarketer.com/content/physician-marketing-2025
- Reuters/AOL on Crete: https://www.aol.com/news/thrive-backed-accounting-firm-crete-130200514.html ; Thrive Holdings: https://finder.techleap.nl/news/note/thrive-holdings-seeks-2b-to-wire-ai-into-analogue-industries ; AIMultiple roll-ups: https://aimultiple.com/ai-rollups
- R1/Humata: https://www.fiercehealthcare.com/finance/r1-agrees-acquire-humata-health-enhance-os-ai-powered-prior-auths
- Lovable (VKTR): https://www.vktr.com/ai-platforms/lovable-raises-400-million-at-133-billion-valuation/
- ElevenLabs CEO (Yahoo Finance): https://finance.yahoo.com/news/elevenlabs-ceo-says-voice-ai-161522538.html
- Perplexity (Seeking Alpha citing FT): https://seekingalpha.com/news/4573154
- EvenUp (Bessemer): https://www.bvp.com/news/tripling-down-on-evenup-to-redefine-justice-with-ai

## 6. Gaps I could not close (so the next stage does not trust them)

- No primary source for Cursor, Harvey, Abridge or OpenEvidence revenue; all are Sacra estimates or anonymous-source reports.
- Legora's $200M ARR is a one-line teaser. EvenUp and Rillet disclose no dollar ARR. Genspark and Gamma returned no revenue figures; Hebbia and Clay were not searched; Glean appears only in a secondary roundup (about $100M to $200M ARR in roughly nine months, then $200M to $300M in roughly six months).
- Why property-management and accounting-firm incumbents did not respond (Patterns 8, 9) is unverified.
- Pool sizes for supplier-marketing budgets outside pharma (Pattern 5 transfers) were not researched.
- I used about 35 searches and fetches, above the 12-20 requested, because pool-size and retention checks changed several conclusions. WebSearch returned no limit errors; the DuckDuckGo fallback was not needed.

---

# Appendix: raw research log (verbatim, saved incrementally during research)

## Research log (raw evidence, appended as found)

### Benchmarks
- Bessemer State of AI 2025 (Aug 2025), https://www.bvp.com/atlas/the-state-of-ai-2025 : 20 high-growth AI cos studied. "Supernovas" avg ARR $40M yr1, $125M yr2, ~25% gross margin (often negative), ~$1.13M ARR/FTE. "Shooting Stars": ~$3M, $12M, $40M, $103M over 4 yrs, ~60% GM, ~$164K ARR/FTE. Proposes Q2T3 (quad, quad, triple, triple, triple). Named breakouts: Perplexity, Abridge, Cursor. Bessemer notes adoption strongest in "manual or service-heavy" workflows; AI tools "resemble intelligent service providers" (software/service line blurs). Warns Supernova growth can reflect low switching costs/novelty.
- SoftwareSeni (May 2026, secondary): 80+ AI startups at $100M ARR; avg Cloud 100 company 7.5 yrs to $100M vs AI-native 5.7 yrs; Legora 18 months, Sierra 7 quarters. Argues speed != durability (secondary source, weak).

### Company evidence (search 1-3, Oct 2026). Confidence tags: [C]=company-stated, [S]=Sacra/third-party estimate, [P]=press report
- HARVEY (legal): Sacra est ARR $100M Aug 2025, $195M end-2025, $300M May 2026, ~$400M Aug 2026 [S]. Seat pricing ~$1,200/lawyer/month, 12-mo commit, ~20-seat minimum [S, unattributed]. 142k+ lawyers, 1,500+ customers, ~50% of Am Law 100 [C]. Valuation $11B (Mar 2026, CNBC), $15.5B after $550M round (Sep/Oct 2026) [P]. ~10% of team = ex-lawyers in forward-deployed roles. https://sacra.com/c/harvey/ ; https://sacra.com/research/harvey-at-195m-arr/ . Competitors: Legora ($5.6B val), Thomson Reuters CoCounsel, EvenUp, Anthropic legal plugin. Incumbent LexisNexis chose alliance, not a competing AI stack.
- ABRIDGE (health scribe): Sacra ~$100M ARR May 2025 (from $60M end-2024), contracted ARR $117M Q1 2025 [S]; 250+ health systems; $5.3B val (a16z Series E Jun 2025) ; ~$2,500/clinician/yr [S]. Epic (42% acute-care EHR share) launched own scribe (2026) = platform-risk. Ambience $30M ARR May 2025 [S]. https://sacra.com/c/abridge/ ; https://medcitynews.com/2026/02/04/ambient-scribe-ai-startups-epic/
- OPENEVIDENCE (physician AI, pharma-ad funded): Sacra: $7.9M end-2024 -> ~$150M end-2025 -> ~$300M annualized Jul 2026 [S]; 90% GM "reported"; free to verified clinicians, pharma/device ads fund it; CPM reported $70-150+ (other source: $1,000+) ; >40-65% of US physicians use it (company claim); ~20M consults/mo Jan 2026 (from ~3M); valuation $1B Feb 2025 -> $12B Jan 2026 -> $15B Sep 2026. Peers: Doximity $645M rev FY Mar 2026; UpToDate ~$690M 2025. https://sacra.com/c/openevidence/ . Risk: pharma ad concentration; OpenAI "ChatGPT for Clinicians" launched Apr 2026.
- SIERRA (CX agents): $100M ARR announced Nov 2025 ~21 months after founding [C, TechCrunch https://techcrunch.com/2025/11/21/bret-taylors-sierra-reaches-100m-arr-in-under-two-years/]; ~$200M by May 2026 [P, conflicting: one source $150M]; $950M round at $15.8B; outcome-based pricing (pay per resolved conversation; ~$1.50/resolution per secondary sources, Sierra has not published). Serves 40% of Fortune 50 (claim).
- DECAGON: said it reached $100M annualized (disclosed, unverified by outsiders); Sacra est $35M Oct 2025; $4.5B val Jan 2026; per-resolution ~ $1.50 [S].
- MERCOR (expert human data / labor marketplace for AI labs): >$2B GROSS annualized revenue Jun 2026, ~4 months after $1B (CEO confirmed to The Information); H1 2026 gross revenue ~$614M, ~90% from AI model firms; pays 60-70% of gross to contractors so NET ~ $600-800M annualized; 30k+ weekly active contractors, >$2M/day payouts. https://dealroom.co/news/137121-mercor-doubles-to-2b-gross-revenue-run-rate-as-ai-labs-buy-expert-data/ ; https://aiweekly.co/alerts/mercor-books-614m-in-h1-2026-leaning-on-openai-anthropic . Customer concentration extreme (labs). Micro1 >$500M gross run rate Aug 2026 [P].
- SURGE AI: told staff $1B+ 2024 revenue (vs Scale $870M), always profitable, no outside capital, ~50k expert contractors [P: The Information]; Sacra est $1.2B 2024.
- LEGORA: 18 months to $100M ARR [secondary]; "doubled to $200M ARR in <6 months" (Bessemer teaser) ; $5.6B val.

### More evidence (searches 4-7)
- CURSOR (Anysphere): $1B annualized Nov 2025; ~$2B Feb 2026; ~$3B late Apr 2026; >$4B early Jun 2026 [P: Dealroom citing "a person familiar", https://dealroom.co/news/134107-cursor-tops-4b-annualized-revenue/]. ~75% (~$2.6B) from enterprise; enterprise revenue reportedly tripled Q1 2026 vs Q4 2025. Bottom-up developer adoption -> top-down seat expansion. SpaceX reportedly holds option to buy for $60B (reported, status unverified). Consumer list price $20 Pro / $40 Business per user-month. Enterprise contract range reported $19K-$150K+, median ~$61K (aggregator, weak).
- LOVABLE: ~$100M ARR ~Jul 2025, $200M Nov 2025, $300M Jan 2026, ~$400M Feb 2026, tracking toward ~$600M by end Aug 2026 [P, secondary]; $13.3B valuation. REPLIT: Sacra est $525M annualized Apr 2026 from $300M end-2025; $9B val Mar 2026 [S] https://sacra.com/research/replit-passes-500m-year/ . Bolt.new ~$40M ARR in 5-6 months then much smaller (shows fast-follower decay). Caveat: vibe-coding retention/churn is the known weak point.
- EVENUP (personal injury demand letters): $150M Series E at >$2B (Bessemer-led, Oct 2025); "doubling ARR yoy" (no absolute number public); 2,000+ firms, 20% of top 100 PI firms [C]. Weak revenue evidence. https://www.bvp.com/news/tripling-down-on-evenup-to-redefine-justice-with-ai
- MENLO VENTURES State of Gen AI in Enterprise (Dec 2025) https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/ : enterprise gen-AI spend $37B in 2025 (vs $11.5B 2024, $1.7B 2023). Apps $19B (departmental $7.3B, vertical $3.5B, horizontal $8.4B); infra $18B. Coding $4.0B (55% of departmental; $550M in 2024). Departmental: IT $700M, marketing $660M, customer success $630M. Vertical: healthcare ~$1.5B (ambient scribes $600M), legal $650M, creator $360M, government $350M. 76% of AI solutions bought not built (53% in 2024). Startups captured 63% of application spend (36% prior yr); finance & ops 91% startup share, sales 78%, product/eng 71%. Menlo says startups beat incumbents via shipping speed, model-agnosticism, PLG.
- FOUNDATION CAPITAL "service as software" https://foundationcapital.com/ai-service-as-software/ : $4.6T = ~$2.3T salaries (S&M $1.1T, software eng ~$1T, + security/HR) + ~$2.3T outsourced IT/BPO (Gartner: IT services $1.5T 2024 -> $2.3T 2028; BPS $303B by 2027). Mechanism: vendor owns the outcome, outcome pricing. Criteria implied: repetitive rule-based, large existing spend, understaffed, measurable outcome.
- SEQUOIA (Julien Bek "Services: The New Software") per secondary: ~$6 spent on services per $1 on software. Bessemer Jan 2026 vertical AI playbook (secondary): vertical AI competes for labor budgets not IT budgets. (Secondary; verify before relying.)
- INTERCOM Fin: $0.99 per resolution + seats; Intercom claims 42-67% resolution rates (conflicting); Intercom launched a "$100M+ AI product" (Bessemer). ZENDESK responded with outcome-based pricing in 2024 and lets customers reallocate commitment from seats to AI agents = incumbents DO respond when pricing/model is compatible. https://www.zendesk.com/newsroom/articles/zendesk-outcome-based-pricing
- SIERRA (TechCrunch): $100M ARR at 21 months, $10B valuation (Sep 2025), ~100x revenue; customers include ADT, Bissell, Vans, Cigna, SiriusXM, SoFi; founders "astounded" non-tech/older businesses adopted. https://techcrunch.com/2025/11/21/bret-taylors-sierra-reaches-100m-arr-in-under-two-years/

### More evidence (searches 8-12)
- ROLL-UPS: Thrive Holdings (Thrive Capital offshoot) seeking >=$2B (Mar 2026; $1B already committed) to buy/transform "analogue" businesses; platforms Crete Professionals Alliance (accounting; rebranded Current) and Shield Technology Partners (IT services/MSP); together >1,000 employees, >10,000 clients (Bloomberg). Crete: >$300M annual revenue, 20+ firms, 900 employees, plan to spend >$500M on acquisitions (Reuters); Shield >$100M revenue end-2025. General Catalyst >$1B committed to "creation strategy". Survey: >90% of 102 AI-roll-up investors set 2x EBITDA improvement as the bar; traditional roll-up levers give ~10-15%. Caution: Xeinadin marketed at GBP1B, Exponent hasn't found a buyer; Citrin Cooperman sold to Blackstone ~$2B (2025); difference = true integration. Revenue is ACQUIRED, not organic. https://www.aol.com/news/thrive-backed-accounting-firm-crete-130200514.html ; https://aimultiple.com/ai-rollups
- RETENTION REALITY (ChartMogul, 10 Dec 2025, ~3,500 software cos incl ~200 AI-native) https://chartmogul.com/reports/saas-retention-the-ai-churn-wave/ : AI-native median GRR 40%, NRR 48% (B2B SaaS NRR 82%, B2C 49%). By price/month: >$250 GRR 70%/NRR 85%; $50-249 GRR 45%/NRR 61%; <$50 GRR 23%/NRR 32%. LESSON: cheap AI subscriptions churn; high-ACV workflow products retain.
- AI SDR crowding (single blog, unverified): 20+ funded AI-SDR startups in 2024 -> 3-5 credible survivors (11x, Artisan) by 2026.
- ELISEAI: passed $200M ARR Jun 2026, 100% yoy growth for 5th consecutive year [C: https://eliseai.com/blog/eliseai-hits-200m-arr-after-five-consecutive-years-of-100-growth-across-housing-and-healthcare ]; Sacra est ~$37M end-2023, ~$75M end-2024; $350M raise at $4B (Sep 29 2026); 500+ housing operators incl 75% of top-50 multifamily owners (Built In). Housing + healthcare front-desk/leasing comms (voice, text, email). Slow compounding "shooting star", not a supernova.
- RILLA (voice recording of in-home sales conversations for HVAC/plumbing/roofing reps): Sacra est $70M ARR Apr 2026, from $51M in 2025 [S]; Home Depot deal Jan 2026; ServiceTitan (system of record) is a platform threat. https://sacra.com/c/rilla
- RILLET (AI-native ERP): $100M Series C at $1B (Aug 2026, ICONIQ); does NOT disclose ARR in dollars; claims only relative growth (doubling ARR in 12 weeks pre-B). 600+ customers (secondary). WEAK revenue evidence. Campfire raised $100M (A+B, 2025); DualEntry $90M @ $415M (Oct 2025). Menlo: finance & ops app spend is 91% startup-captured.
- ELEVENLABS: CEO said $330M ARR (Jan 2026); 20 months to $100M, 10 months to $200M, 5 months to $330M; Sacra est $500M ARR Apr 2026 [S]; growth mainly enterprise voice agents (support, sales, hiring). Futurum: platform-war risk. https://sacra.com/c/elevenlabs/ ; https://finance.yahoo.com/news/elevenlabs-ceo-says-voice-ai-161522538.html
- PERPLEXITY: FT: ARR >$450M in Mar 2026 after ~50% monthly jump following agent tool launch. https://seekingalpha.com/news/4573154
- AI RCM / prior auth: no ARR found for Commure/Tennr/Infinitus; incumbents ACQUIRING (R1 buying Humata Health Aug 2026; Waystar bought Digitize.AI). Humata claims 96% first-pass approval (vendor claim). Signals incumbents buy rather than lose in RCM. 

### Last-batch raw notes (searches 13-15)
- eMarketer (https://www.emarketer.com/content/physician-marketing-2025): healthcare/pharma B2B digital ad spend $2.11B in 2025 (+10.7%), $2.54B by 2027 in one forecast; a later update says $2.63B "this year" (+15.2%), $3.13B by 2028 (undated, may be 2025 or 2026). Point-of-care marketing ~ $1.2B in 2025 (POCMA members, likely understated). Total US healthcare/pharma digital ads ~$24.77B (all audiences). No single figure found for total pharma spend aimed at physicians.
- HANDSHAKE (https://dealroom.co/news/127345-handshakes-arr-crosses-1b-as-ai-training-revenue-surges/ ; https://sacra.com/c/handshake/): ~ $1B gross annualized Apr 2026 (The Information), up from $550M Jan 2026 and $5-10M a year earlier; net of contractors ~ $300M (Information) / Sacra: $1.1B gross, ~$450M net, +349% yoy; recruiting adds ~$150M gross. Ignore the "$10B" aggregator claim. Meta's 49% Scale stake -> Google (Scale's largest customer) planned to cut ties, OpenAI wound down; Scale laid off ~200 FTE (14%) + 500 contractors Jul 2025; Handshake CEO: demand tripled overnight; Turing ~ $300M revenue. Labs considering in-house labelers; Sacra: data labeling is a low-switching-cost commodity.
- BESSEMER Building Vertical AI (Jan 2026): business & professional services = 13% of US GDP, "roughly 10x the size of the software market"; "Vertical AI isn't competing for IT budgets; it's competing for labor budgets"; entry framework: tertiary (Abridge), adjacent-to-core (Sixfold), core ("Toast playbook"); underpenetrated: built world (construction/real estate), public safety/emergency response, India IT services ($264B), professional services (legal, clinical, accounting); Legora "doubled to $200M ARR in less than six months" (teaser only). https://bvp.com/atlas/building-vertical-ai-an-early-stage-playbook-for-founders
- Rillet: raised $100M Series C at $1B (Aug 2026, ICONIQ-led per AI2Work); no dollar ARR disclosed; claims ARR doubled in 12 weeks pre-Series B. Campfire $100M across A+B; DualEntry $90M at $415M (Oct 2025).
- Tool accounting: ~35 searches/fetches total; no WebSearch limit errors; DuckDuckGo fallback not used.
