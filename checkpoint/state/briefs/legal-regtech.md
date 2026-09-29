# Briefing: Legal services, compliance and new regulation (as of 2026-09-28)

**Research limits, read first.** The session's WebSearch budget (200/200) was exhausted before this scout started, so I ran zero searches. I did not route around that by pointing WebFetch at search engines. Everything below comes from about 25 direct page fetches (Wikipedia, TechCrunch, LawSites, trackers). The fetch tool summarizes pages with a small model, and several sources were 404, 403 or blocked, including Reddit, ECHA, the EPA TSCA page and the EU Commission omnibus page. Items marked **[UNVERIFIED]** are secondary-source or from my own background knowledge. Nothing here is a primary-source legal reading.

## 1. Biggest shifts, last 12-18 months

- **The EU AI Act clock moved.** The implementation tracker now lists Annex III high-risk obligations at **2 Dec 2027**, Annex I (product-embedded) at **2 Aug 2028**, public-authority systems at 2 Aug 2030, and Article 50(2) synthetic-content marking at **2 Dec 2026** ([artificialintelligenceact.eu timeline](https://artificialintelligenceact.eu/implementation-timeline/)). The Act as originally passed said Aug 2026 and Aug 2027 (my background knowledge), so this looks like the Digital Omnibus delay. The page never names the Omnibus, so **[UNVERIFIED]** whether it is final.
  - GPAI (general-purpose AI) obligations have applied since Aug 2025, and the AI Office began Chapter V enforcement in Aug 2026 ([artificialintelligenceact.eu](https://artificialintelligenceact.eu/)).
  - Fines run up to EUR 35M or 7% of turnover for prohibited practices, and EUR 15M or 3% for other operator duties ([Wikipedia](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act)).
- **Product-cyber and data rules are switching on.**
  - EU Cyber Resilience Act (CRA) **reporting obligations began 11 Sep 2026**: 24-hour incident reporting to ENISA for anything with digital elements. Full application is 11 Dec 2027, and fines reach EUR 15M or 2.5% of turnover ([Wikipedia](https://en.wikipedia.org/wiki/Cyber_Resilience_Act)).
  - EU Data Act: general applicability since 12 Sep 2025. Connected products must give users direct data access **by design from 12 Sep 2026** ([Wikipedia](https://en.wikipedia.org/wiki/Data_Act_(European_Union))).
- **Sustainability rules got delayed, carbon border rules did not.**
  - CSRD "stop-the-clock" pushes Waves 2 and 3 out two years, to 2028 ([Wikipedia](https://en.wikipedia.org/wiki/Corporate_Sustainability_Reporting_Directive)).
  - CBAM (carbon border levy) entered its definitive phase in 2026, and the UK CBAM starts 1 Jan 2027 across 8 sectors ([Wikipedia](https://en.wikipedia.org/wiki/Carbon_Border_Adjustment_Mechanism)).
- **Right to repair.**
  - The EU Directive 2024/1799 transposition deadline was **31 Jul 2026**. An EU repair platform is due by 1 Jan 2028 ([Wikipedia](https://en.wikipedia.org/wiki/Right_to_repair)).
  - US state laws: Washington took effect 1 Jan 2026, Texas applies from Sep 2026 to electronics over $50, and Oregon has a parts-pairing ban. Wikipedia lists conflicting Oregon dates.
  - Nobody I found sells compliance tooling here (repair-information forms, parts-availability tracking), which is a gap.
- **US privacy keeps fragmenting.** The IAPP tracker (updated 8 Sep 2026) says state momentum is "at an all-time high" ([IAPP](https://www.iapp.org/resources/article/us-state-privacy-legislation-tracker/)). I could not extract the state count.
- **GDPR enforcement is steady, not slowing.** The tracker shows 3,275 actions and **EUR 7.16B** in cumulative fines, with 229 cases in 2026 so far and 110 in the last six months ([enforcementtracker.com](https://www.enforcementtracker.com/)).
- **PFAS.** Fetches returned only dated material, with no ECHA or EPA pages. Wikipedia cites PFAS claims of "$18 billion by 2024" and a UK 2026 plan to align with the EU by 2029 ([Wikipedia](https://en.wikipedia.org/wiki/Per-_and_polyfluoroalkyl_substances)). **[UNVERIFIED]** For current TSCA 8(a)(7) and EU universal-restriction status, re-check with a working search tool.

## 2. Acute, quantified pain points

- **AI hallucinations in court filings are an epidemic.** Damien Charlotin's database holds **~2,095 cases** as of 28 Sep 2026: 829 involve lawyers and **1,208 involve pro se litigants**. Sanctions run $1,750 to $23,222, plus disciplinary referrals and revoked pro hac vice status ([database](https://www.damiencharlotin.com/hallucinations/)).
  - Buyers exist on both sides: firms that fear sanctions, and courts and opposing counsel who must check other people's citations.
- **Small firms lack tools and cash.** 8am's MyCase says 60+ firms used its new Claude MCP connector (73 actions across cases, billing, intake) in its first month, "predominantly small practices with five or fewer attorneys." It also launched LawPay-linked financing: funds in 1-2 days, repaid over 13-40 weeks via payment deductions, underwritten on payment history rather than credit checks ([LawSites](https://www.lawnext.com/2026/09/at-its-user-conference-in-las-vegas-8am-announces-mcp-integration-and-new-ai-tools-for-mycase-plus-new-law-firm-funding-program-through-lawpay.html)).
- **Alternative legal service providers (ALSPs) are under AI pressure.** PE-backed ALSPs are consolidating: Repario (JLL Partners) bought UnitedLex (CVC) on 28 Sep 2026, pitching "AI-enabled workflows engineered around human review" ([LawSites](https://www.lawnext.com/2026/09/in-a-marriage-of-two-alsps-repario-acquires-unitedlex-to-strengthen-its-ai-offerings.html)). Deal size was not disclosed.
- **Compliance deadlines stack in a single quarter.** Between Sep and Dec 2026 the CRA reporting duty, the Data Act design obligations and AI Act Art. 50(2) all land (dates above). I found no cheap tooling aimed at small hardware and software makers, but I could not search to confirm that.

## 3. Where the money is flowing

- **Harvey is the category winner.**
  - TechCrunch: 2025 fundraising totaled **$760M**, valuation went from $3B to $8B, and it has 1,000+ clients in 60 countries. It acquired Hexus in Jan 2026 ([TechCrunch](https://techcrunch.com/2026/01/23/legal-ai-giant-harvey-acquires-hexus-as-competition-heats-up-in-legal-tech/)).
  - **[UNVERIFIED, Wikipedia]** Series G of $200M at $11B in Mar 2026, Series H of $550M at **$15.5B** in Sep 2026, and 2025 revenue of about $190M ([Wikipedia](https://en.wikipedia.org/wiki/Harvey_(software))).
- **The "AI-native law firm" model is funded.** Norm AI raised a **$120M Series C** at a $1.2B valuation (Khosla lead, $260M+ total). It runs Norm Law, with supervised agents and **outcome-based pricing** instead of hourly billing ([TechCrunch](https://techcrunch.com/2026/07/07/ai-law-startup-norm-raises-120m-hits-unicorn-valuation/)).
- **Other rounds.** Sandstone $30M for in-house teams (Jun 2026), Stilta $10.5M for patent discovery from a16z and YC (May 2026), LegalOn $50M Series E (Jul 2025), Definely $30M (Jun 2025) ([TechCrunch legal-tech](https://techcrunch.com/tag/legal-tech/)). Legal-tech funding was $3.56B in H1 2025, up 44% year on year ([Wikipedia](https://en.wikipedia.org/wiki/Legal_technology)).
- **The frontier labs are entering.** OpenAI released "Astra for Law" on 17 Sep 2026. It bundles a legal search index over 230M+ URLs, sourced from the Free Law Project's CourtListener, and scored 54% vs 38.7% on legal research benchmarks. It ships via API to Harvey and Legora and through a "Trusted Access" program for Am Law 200 firms, with 26 vendor plugins including Thomson Reuters and iManage ([LawSites](https://www.lawnext.com/2026/09/openai-releases-astra-for-law-a-gpt-6-model-configured-for-legal-work.html)).
- **Crowded categories:** horizontal legal research and drafting, contract review, in-house copilots. Every one has a $30M+ funded player.

## 4. Underserved segments and structural gaps

- **Solo and small firms (5 or fewer attorneys).** They adopt fast (see 8am) but sit below what Harvey-class vendors serve.
- **Pro se litigants.** They file 58% of hallucination cases and are largely unserved. Consumer tools face unauthorized-practice-of-law (UPL) exposure, which incumbents avoid. The UPL fetch returned only generic material, so I could not check 2025-26 reforms, and I could not load the Arizona/Utah reform pages at all.
- **Court-side and opposing-counsel verification.** Who checks citations at scale? The public database shows demand, but I found no dominant product. This is a gap only as far as my fetches reached.
- **Mid-market hardware and software makers** facing CRA, Data Act and repair rules at once, without a GC (general counsel) or a Big Four budget.
- **What incumbents cannot do.** Thomson Reuters, LexisNexis and hourly-billing firms are structurally unable to sell outcome-priced work, and their research moat is eroding as open case law (CourtListener) feeds frontier-lab products.

## 5. Weird signals

1. **Open legal data now powers a frontier-lab legal product.** A nonprofit corpus (CourtListener) underpins Astra for Law. That is a quiet, unpriced threat to Westlaw and Lexis pricing power.
2. **The pro se side of the hallucination problem is bigger than the lawyer side** (1,208 vs 829). Most coverage focuses on embarrassed lawyers.
3. **Practice-management software is becoming a tool inside someone else's agent.** 8am's MCP connector got 60+ small firms in one month, and 8am says nearly all of its new "Firm Agent" features already work via MCP.
4. **Law-firm working capital is being sold as fintech.** Advances underwritten on payment history and repaid by deducting a share of each client payment are a new product for small firms.
5. **A 24-hour vulnerability-reporting law (CRA) went live 17 days ago,** with very little visible tooling. This is my inference, not a checked fact.
