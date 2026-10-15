# Global arbitrage patterns (round 2): breakout companies outside the US, 2024-2026

STATUS: COMPLETE (2026-10-14). Brief: find mechanisms that built LARGE businesses in India, Brazil, Mexico, Nigeria, Kenya, Egypt, Indonesia, Vietnam, the Gulf, Europe, Japan and Korea, and say whether each ports to the US (regulation, payment rails, labor cost, density, culture).

Method: about 36 searches and fetches. WebSearch returns model-written summaries, so every load-bearing number carries an evidence grade. The raw per-batch evidence log is preserved verbatim at the bottom of this file, with the original caveats. Nothing was dropped.

Evidence grades:
- **A** = company release, filing or regulator data, or two or more independent reputable outlets.
- **B** = one reputable outlet, or a company claim that press reported.
- **C** = aggregator, blog, LinkedIn post, or no revenue number. Treat as a hypothesis.

"My calc" means arithmetic I did on sourced numbers. "Prior knowledge" means I did not verify it this run, so check it before relying on it.

---

## Read this first: what the data says about building LARGE businesses

1. **The biggest outcomes are balance-sheet businesses, not apps.** Nubank (about $16.4B revenue), Mercado Libre (Mercado Pago did $3.8B in one quarter), Revolut (about $6.0B), Safaricom/M-Pesa (KSh 182.7B) and M-KOPA (about $600M, company claim) all sit on credit or float. Lessons.md already says the scalable asset is "software, a network, a data asset, a balance sheet, or a standard". The evidence says balance sheet and standard.
2. **The why-now is almost always a state-built rail or mandate.** Examples: Pix and UPI, Brazil's Crédito do Trabalhador payroll platform, EU e-invoicing mandates, and M-Pesa as a telco-run rail. The US mostly lacks the equivalent rail. So the arbitrage is to find the US analog of the shock, not to port the product.
3. **Volume is not revenue.** PhonePe has about 45% of 24.5B UPI transactions a month and has never posted a statutory profit. Moniepoint moved about $294B in 2025 and has no audited revenue. Mixue's franchise fees are only 2.4% of its revenue. Always ask where the money is made.
4. **Anything that depends on cheap labor or extreme density does not port.** Blinkit works. Getir, Gorillas and Flink collapsed or retreated in Europe. Mixue is closing stores in Indonesia and Vietnam, its own overseas markets. Do not carry these into the US.
5. **Most of the clean patterns are already ported or being ported.** Nubank has OCC conditional approval for a US bank (Jan 2026). Vinted launched in New York in Jan 2026. Olive Young opened a Pasadena store in 2026. The best remaining arbitrage is the least visible one: **repayment-channel control (pattern 3)** and **mandate-created spend (pattern 10)**.

## Summary table

| # | Pattern | Scale proof | Evidence | US port | Verdict |
|---|---|---|---|---|---|
| 1 | Mass-market digital bank wins thin-file credit | Nubank ~$16.4B revenue, 131M customers | A/B | Already arriving (Nubank OCC) | Crowded |
| 2 | Marketplace-owned payments + credit flywheel | MELI $8.8B in Q4 2025 alone | A | No (needs a logistics moat) | Closed at national scale |
| 3 | Control the repayment channel | R$101B lent in ~10 months; Fuliza KSh 1.47T | A/B | Partial; no national rail | Best mechanism; gated |
| 4 | Remote-lock collateral + local-currency ABS | M-KOPA ~$600M (claim); Sun King $156M ABS | B | Weak | Low |
| 5 | Terminal/agent network as distribution + underwriting | Moniepoint ~$294B volume; PhonePe 45% of UPI | A volume / C revenue | Already ported (Square, Toast) | Avoid |
| 6 | Dark-store quick commerce | Blinkit 916.6M orders, 2,243 stores | A | No | Avoid in US |
| 7 | Flip which side pays the marketplace fee | Vinted EUR 1.1B revenue; Rapido Rs 934 cr | A | In progress (Vinted NY) | Watch the test |
| 8 | Own the supply chain, win on price | Mixue RMB 33.6B; Lenskart Rs 6,652 cr | A/B | Weak (labor and rent) | Idea transfers, price point does not |
| 9 | Instant-pay spot-labor marketplace | Timee JPY 34.3B revenue | A/B | Crowded | Low |
| 10 | Mandate-created compliance rails | Pagero sold for ~$800M; EU mandate calendar | A (deal) / C (company revenue) | No VAT mandate; look for US analogs | Strong mechanism, indirect port |
| 11 | Stablecoin rails for FX-constrained corridors | Bitso ~$6.5B of a $64.7B corridor | B | US law lands Jan 2027 | Pool compresses |
| 12 | Curated retail + fast brand incubation, exported | Korea cosmetics exports $11.43B | A macro / C company | Already underway | Crowded; brand-level only |

---

## Pattern 1. Mass-market digital bank that wins thin-file credit

**Mechanism.** A zero-fee account is acquired at near-zero cost in a market where a few banks charge high fees and refuse thin-file customers. The account produces transaction data. Credit cards, personal loans and payroll loans are underwritten on that data and funded by cheap deposits.

**Evidence**
- Nubank, FY2025: revenue ~US$16.4B (+45%), net income ~US$2.9B (+51%), ROE ~30%. It has 131M customers (Brazil 113M = 62% of adults; Mexico 14M = 15%; Colombia 4.2M = 11%). It plans to invest US$4.2B in Mexico by 2030. Grade B (NeoFeed summary; I did not open the 20-F). https://neofeed.com.br/negocios/a-espera-da-licenca-nos-eua-nubank-cresce-em-receita-lucro-e-volume-de-clientes/en/ and https://www.mobiletime.com.br/noticias/25/02/2026/nubank-131-mi-clientes/
- Revolut, 2025: revenue ~EUR 5.3B / US$6.0B (+46%), pre-tax profit ~US$2.3B, net profit ~US$1.7B, 68.3M retail customers. Subscriptions were ~US$936M (+67%), and the loan book roughly doubled to ~US$2.9B. Grade A/B. https://en.paperjam.lu/article/revolut-exceeds-eu5-billion-in-revenues-in-2025-up-46 and https://www.trendingtopics.eu/neobank-revolut-achieves-record-profit-of-1-7-billion-in-2025/
- Plata (Mexico): full bank license (Dec 2024 or Feb 2025, sources conflict), about 2.5M active credit customers, $563M loan book. Valuation went $1.5B (Mar 2025) to $3.1B (Oct 2025) to a reported ~$5B (Apr 2026). **No revenue figure found.** The valuation is evidence of investor belief, not of revenue. Grade C. https://www.fintechfutures.com/venture-capital-funding/mexican-fintech-plata-raises-250m-series-b-doubles-valuation-to-3-1bn and https://themoscowtimes.com/2026/04/16/tinkov-founded-fintech-plata-hits-5bln-valuation-after-405m-funding-round-a92520

**Shift that enabled it.** Instant payment rails, regulator-granted non-bank licenses, smartphone penetration, and (Mexico) the 2018 Fintech Law with CNBV licenses. The license detail is prior knowledge, apart from Plata's license, which is sourced.

**Why incumbents failed (my inference).** Fee-rich branch banks serve a narrow formal-income base, score only on bureau history, and have no reason to cannibalize card fees.

**Open or crowded.** Crowded, and the winners are going global. Nubank has conditional OCC approval for a US national bank (Jan 2026). In Mexico, Nu (14M), Plata, Klar and Mercado Pago are all funded.

**Port to the US.** The mechanism is already ported (Chime, Cash App, SoFi, Dave; prior knowledge) and now faces Nubank itself. I found no untouched US segment. The transfer is geographic (more countries with concentrated banks and high card APRs), not product.

---

## Pattern 2. Marketplace-owned payments + credit flywheel

**Mechanism.** The marketplace owns logistics, payments and credit. Commerce data lets it underwrite buyers and merchants more cheaply than any bank. Float funds the credit book. Free shipping drives purchase frequency.

**Evidence**
- Mercado Libre, Q4 2025: net revenue US$8.8B (+45%); FY revenue +39%. Mercado Pago Q4 revenue US$3.8B (+51%). Credit portfolio US$12.5B (+90%), 15-90 day NPL 4.4%, ~78M MAU. Margins compressed 5-6 points from free shipping and credit-card investment. Grade A/B. https://www.barchart.com/story/news/400094/mercado-libre-caps-stellar-2025-performance-with-45-yoy-revenue-growth-in-q4-as-strategic-investments-accelerate-market-share-gains and https://www.businesswire.com/news/home/20251029534041/en/
- Coupang (Korea) is the logistics-only variant. Rocket Delivery (Product Commerce) earned adj. EBITDA of $663M (9% margin) in Q2 2025. Taiwan, Eats and Farfetch lose ~$235M a quarter. Grade B. https://insideretail.asia/2025/08/07/coupang-turns-a-profit-but-can-taiwan-fuel-the-next-stage-of-growth/

**Shift.** Weak postal systems force owned logistics, low card penetration pushes wallets, and Pix lowers payment cost. The Pix point is partly prior knowledge.

**Why incumbents failed (inference).** Store-led retailers were weak at logistics. Banks did not underwrite small merchants on sales data.

**Open or crowded.** Closed at national scale. The moat is logistics plus capital, and there is no room for a me-too.

**Port to the US.** No. Amazon is the incumbent. The only transferable idea is the **vertical** version: a B2B marketplace where small buyers carry 30-90 day payables and the marketplace finances the gap. Hypotheses: independent restaurant supply, independent-pharmacy wholesale, auto-repair parts. Assume someone already does each (Faire, Toast Capital, Amazon Business, Sysco and US Foods, FBN; prior knowledge).

---

## Pattern 3. Control the repayment channel (payroll deduction or wallet sweep)

**Mechanism.** The lender is repaid first, from payroll or from wallet inflows. That drives losses down, so the rate falls far below revolving credit. Borrowers refinance, and volume explodes. The state or a telco builds the channel, and lenders compete on top of it.

**Evidence**
- Brazil, Crédito do Trabalhador (private-sector payroll-deducted loans, launched 21 Mar 2025): **R$101B lent, 17.04M contracts and 8.52M workers by 15 Jan 2026**, per the Ministry of Labor as reported by Poder360. The average rate is 3.2% a month, which is about 46% a year (my calc). The minister contrasts this with ~11.2% a month (about 258% a year, my calc) on CDC, card revolver and overdraft. Most contracts went to workers earning up to 4 minimum wages. Grade A/B. https://www.poder360.com.br/poder-economia/credito-do-trabalhador-supera-r-101-bilhoes-em-emprestimos/
- Monthly private payroll lending rose from ~R$1.5B to ~R$11B (Central Bank data via Serasa). Banco do Brasil alone disbursed R$18.2B in a bit over a year. Average ticket is falling and the Central Bank warns about indebtedness. Grade B. https://www.serasaexperian.com.br/sala-de-imprensa/solucoes-para-rh/credito-do-trabalhador-valor-medio-das-operacoes-de-consignado-privado-cai-73-um-ano-apos-a-criacao-do-novo-modelo-no-brasil-mostra-serasa-experian/ and https://www.canalrural.com.br/economia/banco-do-brasil-desembolsa-r-182-bilhoes-no-credito-do-trabalhador-em-pouco-mais-de-um-ano/
- Kenya, Fuliza (M-Pesa overdraft), FY to Mar 2026: KSh 1.47T disbursed (+49%), 17.7M customers, average loan KSh 218 (down from 241). Reported Fuliza revenue is KSh 6B, but that is only 0.41% of disbursements (my calc). Treat it as probably net or partial and **do not use it as a margin proof**. Grade B/C. https://capitalfm.africa/fuliza-loans-jump-49pc-to-sh1-47tn/

**Shift.** In Brazil the state built an employer-agnostic platform on its payroll data. The Poder360 and Exame articles do not describe the platform design. The design, and the fact that private-sector payroll loans previously needed employer-by-employer agreements, is prior knowledge. In Kenya the shift was M-Pesa's wallet float and partner-bank licenses.

**Why incumbents failed.** Banks could not reach employees outside large corporate agreements. Sub-$5 loans do not cover a bank's cost to serve. The second point is my inference.

**Open or crowded.** Brazil is already crowding (Banco do Brasil, others) and credit-quality alarms are sounding. In the US the product category is open, but gated (below).

**Port to the US.**
- *Key insight.* Brazil's breakout came from **the state removing the distribution bottleneck**, not from a product innovation. There is no US equivalent, so the nearest "rail owners" are payroll processors and large employers.
- *Regulatory gate.* The CFPB's Dec 2025 advisory opinion treats employer-offered, payroll-settled, no-recourse earned wage access as not credit. H.R. 9330 passed House Financial Services 29-22 on 30 Jun 2026 and is not law. About a dozen states have EWA laws, and CA, CT and MD treat EWA as credit. These facts are from Faegre Drinker and Chime pages, grade B/C. https://www.faegredrinker.com/en/insights/publications/2026/8/earned-wage-access-regulatory-update-federal-legislation-advances-as-states-continue-to-act
- *Not researched.* I found nothing on installment loans repaid by payroll deduction, which are governed by state small-loan and wage-deduction law. That is the largest open legal question.
- *Who signs.* Brazil's government mandated the platform. A US employer has no budget line and no obligation, only a retention motive. That is the same slow employer-by-employer sale Brazil had before 2025.
- *Fuliza-style auto-overdraft* is already ported in the US (Cash App Borrow, Chime MyPay, Dave, EarnIn; prior knowledge).

**Transfer targets (hypotheses).**
- Employer- or payroll-provider-integrated installment credit that replaces payday, installment and overdraft borrowing for hourly workers.
- Other countries with state payroll or pension rails.
- The US pool size is not sourced in this run.

---

## Pattern 4. Remote-lock collateral + mobile-money collections + local-currency securitization (PAYG)

**Mechanism.** If the customer stops paying, the product stops working, and that is the collateral. Daily micropayments flow through mobile money. Each cohort becomes an asset-backed security funded in local currency, which avoids FX mismatch.

**Evidence**
- M-KOPA: FY2025 revenue ~US$600M (+45%), 10M customers (3M added in 12 months). The company says it stayed profitable but gives no profit number. It sells smartphones (since 2020), solar and electric motorcycles, with ~50,000 agents. **Company-stated and unaudited.** Credit underwriting and funding sources are undisclosed. Grade B/C. https://techtrendske.co.ke/2026/10/08/m-kopa-10-million-customers-africa-2/
- Sun King: $156M (KES 20.1B) local-currency securitization, structured by Citi with Stanbic, backed by 5 banks and 3 DFIs. It follows a $130M deal in 2023. Total solar loans are $1.3B to ~10M customers, with payments from $0.19 a day. No revenue figure found. Grade A for the deal, none for revenue. https://www.citigroup.com/global/news/press-release/2025/citi-sun-king-securitization-deliver-solar-million-kenyans

**Shift.** Mobile money, cheap GSM lock modules, and a Kenyan securitization market.

**Why incumbents failed.** Banks cannot underwrite no-history customers, and microfinance lenders eat repossession costs. Inference.

**Open or crowded.** Two scaled players in Africa. The securitization is the proof that the cash flows are bankable.

**Port to the US.** Weak. The incumbents are lease-to-own and rent-to-own (Progressive, Katapult, Upbound; prior knowledge), and state lease and repossession law differs. Speculative targets: e-bikes for delivery workers, laptops, prepaid phones. I found no evidence of a US-scale gap.

---

## Pattern 5. Merchant-terminal or cash-agent network as distribution and underwriting data

**Mechanism.** Where payments are free or thin-margin, the terminal or agent relationship yields cash-flow data. It also gives the right to sweep settlement to repay loans, and a place to cross-sell accounts, devices and insurance. The payment itself is not the product.

**Evidence**
- Moniepoint (Nigeria): ~NGN 412T (~US$294B) of transactions in 2025 and ~800M a month (company data via TechCabal). It says it is profitable, with **no audited numbers**. It disbursed over NGN 1T to ~70,000 small businesses (company year-in-review). Valuation was $1B+ in Oct 2024 (FT). The CBN says system NPLs rose to ~7% in 2025. A "$600M ARR" figure appears on one review site and is **unverified; I excluded it**. Grade A/B for volume, C for revenue. https://www.techinafrica.com/blog/moniepoint-hits-unicorn-status-massive-250m-series-c/ and https://techcabal.com/?p=179521 (the page returned 403 when fetched directly; figures are from search summaries)
- PhonePe (India): ~45% of 24.5B monthly UPI transactions. FY25 revenue from operations is ~Rs 7,115 cr (+40%), but the **statutory net loss is ~Rs 1,727 cr** and it has never posted a statutory profit. Non-UPI (merchant payments and financial services) is ~42% of revenue. Grade B. https://www.indmoney.com/blog/ipo/phonepe-drhp-explained and https://www.medianama.com/2025/09/223-1-5b-ipo-phonepe-7631-cr-revenue-fy25-loss/

**Shift.** UPI's zero merchant fee, and in Nigeria the push to cashless (prior knowledge).

**Why incumbents failed (inference).** Nigerian banks had poor POS uptime and focused on corporates.

**Open or crowded.** Crowded in both countries (OPay and PalmPay in Nigeria; Google Pay and Paytm in India).

**Port to the US.** Already ported and saturated (Square, Toast, Clover, Shopify, Stripe; prior knowledge). Lesson for the search: dominating the rail does not make money. The revenue is in credit and software on top.

---

## Pattern 6. Dense dark-store quick commerce

**Mechanism.** Small warehouses sit inside dense neighborhoods. Delivery labor is cheap, order frequency is high, and ad revenue helps. Profit needs very high throughput per store.

**Evidence**
- India, FY26: Blinkit 916.6M orders and 2,243 stores; Zepto 640.2M and 1,139; Instamart 412.2M and 1,143. **Only Blinkit is adj-EBITDA positive** (Rs 37 cr in Q4 FY26, Rs 102 cr in Q1 FY27). Zepto lost Rs 1,248 cr and Instamart Rs 858 cr in Q4 FY26. Zepto does ~2,140 orders per store per day and needs ~3,000 to break even. Densification is hitting diminishing returns. Grade A/B. https://www.outlookbusiness.com/explainers/has-quick-commerce-growth-hit-a-speed-bump-inside-blinkit-instamart-zeptos-q1-fy26-performance
- Europe (the negative proof): Getir shut its US, UK and EU operations and cut 6,000+ jobs. Gorillas sold for ~$1.2B against a $3.1B valuation a year earlier. Flink exited France and was valued at ~$1B against a ~$5B peak. Hubs only profit at ~500-1,000 orders a day. No 2025-26 updates were found. Grade B. https://techcrunch.com/2024/09/16/flink-the-quick-commerce-startup-raises-another-150m-at-a-valuation-of-just-under-1b
- Gulf (the working variant): Talabat FY2025 GMV US$9.5B (+28%), revenue US$3.9B, adj. EBITDA US$615M (6.5% of GMV), net income US$464M, and it is reinvesting $100M+ in grocery. Grade A. https://www.zawya.com/en/press-release/companies-news/talabat-reports-resilient-results-for-q4-2025-announces-disciplined-investment-cycle-to-drive-long-term-growth-mue1ykjm

**Shift.** UPI-based payments, low rider cost, and kirana (corner-store) substitution (prior knowledge).

**Why incumbents failed.** Kiranas cannot offer assortment. Big grocers lack last-mile delivery. Inference.

**Open or crowded.** India is a three-way discount war (Blinkit ~45-49% share, estimates conflict). Europe is dead.

**Port to the US.** **No.** Labor cost and density kill the unit economics (Getir and Gorillas died in rich-world cities). The only transferable pieces are ad monetization and private label.

---

## Pattern 7. Flip which side pays the marketplace fee

**Mechanism.** Charge the side that values protection or convenience (the buyer, via a protection fee), or charge supply a small flat subscription instead of a commission. Supply keeps its margin, floods in, and gives the marketplace liquidity.

**Evidence**
- Vinted (Lithuania), 2025: revenue EUR 1.1B (+38%), GMV EUR 10.8B (+47%), net profit EUR 62M (-19% from EUR 77M), FCF EUR 137M, valuation EUR 8B. Sellers pay no commission and buyers pay a protection fee (fee amounts are third-party estimates). Revenue/GMV is ~10.2% (my calc). It launched in the US in January 2026 starting in New York with "tens of millions" in marketing. Grade A/B. https://dealroom.co/news/127284-vinted-hits-1-1b-revenue-and-sets-sights-on-the-us/
- Rapido (India): FY25 operating revenue Rs 934.4 cr (+44%; Inc42 says nearly 2x, a conflict), net loss Rs 258.4 cr. It replaced a 20-25% commission with a flat Rs 9-29 a day, about 5% of ride income. Uber moved its India auto drivers to subscription on 18 Feb 2025. GST treatment of subscription platforms is disputed across rulings. Grade B. https://www.medianama.com/2026/01/223-rapido-fy25-revenue-jumps-44-percent-loss-narrows/ and https://restofworld.org/2025/uber-india-price-war/

**Shift.** Rapido: driver anger over commissions plus the Indian tax-ruling gap. Vinted: European parcel-locker infrastructure and consumer-protection norms. Both are partly inference.

**Why incumbents failed.** eBay, Poshmark and Depop were built on seller fees of 10-20% (prior knowledge).

**Open or crowded.** Vinted is in the US now, so a US clone is closed. Rapido is still loss-making, and a flat fee caps revenue per ride.

**Port to the US.** Vinted's US test is the live experiment (the CEO says profit depends partly on it). For other categories, the unproven hypothesis is supply-scarce service marketplaces where pros pay per lead: home-services lead generation, trades, per-diem healthcare staffing. The gate is contractor classification (AB5, Prop 22; prior knowledge, legal premise unverified).

---

## Pattern 8. Own the supply chain, win on price

**Mechanism.** Own the factory, ingredients or logistics. Price 30-50% below incumbents to win traffic. Make money on the supply layer instead of on royalties.

**Evidence**
- Mixue (China-origin; big in Indonesia and Vietnam), 2025: revenue RMB 33.56B (+35%), net profit ~RMB 5.93B. It has 59,823 stores. **~98% of revenue is goods and equipment sold to franchisees** (RMB 32.77B); franchise fees are only RMB 794M (2.4%). Goods gross margin slipped to 29.9% from 31.2%. **Overseas stores fell from 4,895 to 4,467** as it optimized Indonesia and Vietnam while entering the US and Kazakhstan. Grade A/B. https://kr-asia.com/mixues-growth-continues-in-2025-despite-margin-pressure and https://www.itiger.com/news/1100683496
- Lenskart (India), FY25: operating revenue Rs 6,652.5 cr (+22.5%), EBITDA ~Rs 971 cr, 2,806 stores, claims 35-40% lower frame and lens cost from in-house automated manufacturing. **Net profit of Rs 297 cr includes a ~Rs 167 cr one-off gain**, so operating profit is closer to ~Rs 130 cr. Grade B. https://www.kotakneo.com/news/market-news/lenskart-fy25-revenue-profit-analysis/
- Mobile World (Vietnam): FY2025 revenue ~VND 157.4T (~$6B), profit ~VND 7.1T. Its grocery chain Bach Hoa Xanh took until Dec 2023, eight years, to break even. Grade B. https://news.tuoitre.vn/vietnam-retailer-mobile-world-posts-strong-2025-profit-boosted-by-financial-income-103260204160919933.htm

**Shift.** Manufacturing scale and automation (prior knowledge).

**Why incumbents failed.** Fragmented independents lack purchasing scale. Incumbents sell on brand premiums.

**Open or crowded.** Supply-margin franchising is old in the US (Domino's; prior knowledge). Mixue's own overseas retreat shows the price point does not survive higher local costs.

**Port to the US.** Weak. The price-point arbitrage fails on US labor and rent. The idea that does transfer is to find categories where the US retail layer is the cost, then own the supply chain behind it. Hypothesis categories (eyewear, hearing aids) already have incumbents (EssilorLuxottica, Warby Parker, Zenni; prior knowledge).

---

## Pattern 9. Instant-pay spot-labor marketplace in a shortage economy

**Mechanism.** Remove the friction of staffing (no interview, no contract, short shifts, instant pay). Idle labor becomes just-in-time capacity for employers that cannot hire.

**Evidence**
- Timee (Japan, TSE 215A): FY to Oct 2025 revenue JPY 34.28B (+27.5%) on GTV of JPY 117.2B, a ~29% take rate (my calc). Registered workers went from 12.74M (Oct 2025) to 14.2M+ (Apr 2026), and clients from 417k to 465k sites. Latest quarter: revenue JPY 10.44B (+24.8%), operating profit JPY 1.94B, but **spot-work growth slowed to +16.3%**. Worker counts are aggregator-sourced. The fiscal-year change makes comparisons messy. Grade B. https://www.staffingindustry.com/news/global-daily-news/japans-timee-revenue-rises-248-profits-up and https://www.staffingindustry.com/news/global-daily-news/timee-full-year-revenue-up-expects-further-growth-in-2026

**Shift.** Japan's labor shortage and side-job liberalization (prior knowledge).

**Why incumbents failed.** Dispatch staffing needed contracts, lead time and minimum durations (inference).

**Open or crowded.** In the US this is crowded (Instawork, Wonolo, ShiftKey, Clipboard Health, Snagajob; prior knowledge), and Timee's growth is decelerating.

**Port to the US.** Low. The gates are W-2 versus 1099 classification, state staffing law and workers' comp. Per-diem nursing is the biggest sub-pool and already contested.

---

## Pattern 10. Mandate-created compliance rails

**Mechanism.** A regulator mandates structured B2B invoice exchange through certified intermediaries. Every VAT-registered company must buy, with a legal deadline. Revenue is recurring per document or per seat. Accountants are the distribution channel.

**Evidence**
- Mandate calendar: Belgium live 1 Jan 2026 (Peppol); Poland KSeF 1 Feb 2026 (large) and 1 Apr 2026 (rest), micro-firms 2027; **France from 1 Sep 2026** (large and mid issue, all must receive, SMEs 1 Sep 2027, via certified PDP platforms plus e-reporting); Germany receive from 2025 and send from 2027; EU ViDA framework by 2030. Grade B (several consistent guides; confirm France against DGFiP). https://europe.thomsonreuters.com/events/france-einvoicing-mandate-8-things-to-know and https://www.spscommerce.com/community/articles/e-invoicing-mandates-in-europe-the-2026-business-guide
- Deal proof: Thomson Reuters bought Pagero for ~US$800M (SEK 8.1B), closing 26 Feb 2024, after beating a rival bid from Vertex. Grade A/B. https://www.cpapracticeadvisor.com/2024/02/26/thomson-reuters-acquires-pagero-for-800-million/101999/
- Pennylane (France, accounting SaaS): EUR 2B valuation in Apr 2025; claimed to exceed EUR 100M ARR in 2025 (company claim); ~4,500 accounting firms and 350k SMEs; claims certified PDP status. A $4.25B round was reported in talks and is unconfirmed. Grade C for revenue. https://tech.eu/2025/04/07/french-unicorn-pennylane-scores-eur75m-funding-as-capial-g-joins-investor-roster/

**Shift.** Governments closing VAT gaps through real-time reporting, now an EU-wide program (prior knowledge for motive).

**Why incumbents failed.** Mostly they did not fail. Pagero, Sovos, Avalara and Basware are the incumbents, and ERPs were not built for real-time reporting.

**Open or crowded.** Consolidating fast at the enterprise tier (TR/Pagero, Vertex's bid). The mandate calendar still has years to run for SMEs (France 2027, Germany send-side 2027-28). I found no reliable revenue for Sovos, Avalara or Basware.

**Port to the US.** There is **no US VAT or e-invoicing mandate**, so a direct port has no mandated spend. The mechanism does port to US rules that force data exchange. **Hypotheses from prior knowledge, verify each date before use:** CMS prior-authorization API rule (CMS-0057-F, 2026-27 deadlines), FDA drug-supply-chain serialization (DSCSA) and FSMA 204 food traceability (deadline extended to 2028). Round 1 died on "the why-now was already used up" and "demand arrives after 2028", so check the deadlines before building.

**Who signs (EU).** The CFO or tax director under a legal deadline, usually through the accountant.

---

## Pattern 11. Stablecoin and alternative rails for FX-constrained corridors

**Mechanism.** Stablecoin settlement plus a licensed local off-ramp replaces correspondent banking. Value is captured through FX spread and float. As volume moves, the fee pool compresses.

**Evidence**
- Bitso (Mexico): ~$6.5B of US-to-Mexico remittances in 2024, over 10% of the corridor. That is Bitso's own statement via Paymentology. The corridor is $64.7B (BBVA Research), 96.6% from the US. A "14.7% share, Jan-Aug 2026" figure is a LinkedIn sales post and **unverified; I excluded it**. In June 2025 Bitso launched USD accounts for Mexico and Argentina (ACH $2.99; wire $11.99 + 0.17%). Grade B/C. https://www.paymentology.com/blog/stablecoins-and-the-us-mexico-remittance-corridor-a-practical-case-for-financial-institutions and https://financialit.net/news/payments/bitso-introduces-new-service-enabling-us-dollar-transfers-users-mexico-and-argentina

**Shift.** FX-access limits in Mexico and Argentina per Bitso executives. On the US side, the GENIUS Act, signed Jul 2025, is **not yet effective**. It takes effect no later than 18 Jan 2027. Final rules were still pending in Aug 2026 (OCC targets Nov). Grade B. https://www.jonesday.com/en/insights/2026/08/us-treasury-proposes-genius-act-rules-for-stablecoin-issuance-offer-and-sale

**Why incumbents failed.** Money transmitters are slow and fee-heavy (inference).

**Open or crowded.** Crowded with Remitly, Wise, Western Union, Circle and Coinbase (prior knowledge). The pool is large but shrinking in price.

**$100M test (my arithmetic).** If the all-in cost to senders is 2-4% of $64.7B, the fee pool is ~$1.3-2.6B a year. Reaching $100M of revenue needs roughly 4-8% of it. The cost range is my assumption, not a sourced figure.

**Port to the US.** US rules land in 2027, which is a timing edge for anyone building the US-side license stack. A prior-knowledge note: a 1% US excise tax on cash-funded remittances began 1 Jan 2026, which pushes senders to account-funded rails. Verify before relying on it.

---

## Pattern 12. Curated retail and fast brand incubation, exported to the US

**Mechanism.** A hyper-competitive home retail market (Olive Young's curation and rotation) works as a fast feedback loop. Surviving brands export through TikTok, Amazon and Sephora to US buyers who pay higher prices.

**Evidence**
- Korea's cosmetics exports hit a record US$11.43B in 2025 (+12.3%). The US overtook China as the top destination (~$2.2B vs ~$2.0B). H1 2026 exports were ~$7B (+27%) with the US at ~$1.45B (20.7%), though customs and MFDS series differ. Grade A/B. https://www.koreajoongangdaily.com/business/koreas-cosmetics-exports-surpass-record-11-billion-in-2025/12129724 and https://www.personalcareinsights.com/news/kbeauty-export-record-us-china-shift.html
- Olive Young: over half of its global online sales came from US consumers in H1 2025. It opened a Pasadena store and is placing Sephora zones. **No company revenue figures** for APR/Medicube or Olive Young were found. Grade C for companies. https://insideretail.co.nz/2026/06/15/can-olive-young-export-koreas-beauty-retail-strategy/

**Shift.** Social commerce and Amazon fulfillment (prior knowledge).

**Why incumbents failed (inference).** US prestige beauty iterates on slow cycles. Korean contract manufacturers move fast.

**Open or crowded.** Crowded. Olive Young is taking the retail layer itself, so intermediaries are being squeezed out.

**Port to the US.** This is already a reverse port, in progress. The remaining space is brand-level (tens of millions, not $100M+) unless it becomes a retail or incubation platform. Do not call it large without company numbers.

---

## Evidence reviewed but not promoted to a pattern

- **Tabby (Saudi/UAE BNPL).** $3.3B valuation (Feb 2025), reportedly $4.5B in a secondary (Mar 2026), IPO in preparation with no filing found. The only profit figure (a Saudi entity, $55M on $378M, 2025) comes from LinkedIn commentary, grade C. BNPL is already ported to the US (Affirm, Klarna, Afterpay).
- **MNT-Halan (Egypt).** $1.4B valuation (Jun 2026), claims over $2B disbursed and over $300M revenue. Both are company claims with an unclear date, grade C. It is a consumer-finance super-app, so it belongs under pattern 1 if verified.
- **Toss (Korea).** FY2024 revenue KRW 1.96T and its first operating profit (KRW 90.7B), verified through The Investor and Korea Herald. FY2025 figures (KRW 2.7T revenue) come from an aggregator and are unverified. A US IPO was reported as planned, with no filing confirmed. Belongs under pattern 1.
- **Urban Company (India).** FY25 operating revenue ~Rs 1,144.5 cr, but profit of Rs 240 cr is mostly a Rs 211 cr deferred-tax credit. Profit before tax excluding that is only Rs 28.6 cr. Not promoted because the evidence is weak and the model depends on Indian labor cost.

## Claims dropped or downgraded (kept visible on purpose)

- Moniepoint "$600M ARR" from brands.ng: unverified, dropped.
- Bitso "14.7% share 2026" and Tabby Saudi-entity profit: LinkedIn posts, dropped.
- Fuliza "KSh 6B revenue": ratio to disbursement is implausibly low, flagged as uncertain.
- Exame's Crédito do Trabalhador article is an opinion piece by an Evertec executive, and its sub-totals do not sum (R$94.2B + R$26.3B ≠ R$117.1B). I used Poder360's ministry-sourced R$101B figure instead.
- Nubank's 20-F was not opened. Its revenue figure rests on NeoFeed.
- The Moniepoint TechCabal page returned 403. Its numbers came from search summaries.
- Sources disagree on Vinted's US timing (a soft rollout in 2024-25 versus a Jan 2026 launch). Dealroom says Jan 2026.

## What I did not verify

US-side incumbents and pool sizes are mostly from prior knowledge, not sourced this run. The state-law treatment of payroll-deducted installment loans, the 1% US remittance tax, the CMS, DSCSA and FSMA 204 deadlines, and the details of the Brazilian platform design all need primary-source checks before any idea depends on them.

---

# RAW EVIDENCE LOG (verbatim, appended after every research batch)


### Batch 1 (search summaries; numbers to be verified against primary where flagged)
- NUBANK (Brazil/Mexico/Colombia): FY2025 revenue ~US$16.4B (+45%), net income ~US$2.9B (+51%), ROE ~30%; 131M customers end-2025 (Brazil 113M = 62% of adults; Mexico 14M = 15% of adults; Colombia 4.2M = 11%). Plans US$4.2B investment in Mexico by 2030; Mexico banking license transition 2026; OCC conditional approval for a US national bank Jan 2026. Sources: https://neofeed.com.br/negocios/a-espera-da-licenca-nos-eua-nubank-cresce-em-receita-lucro-e-volume-de-clientes/en/ ; https://www.sec.gov/Archives/edgar/data/1691493/000129281426002166/nuform20f_2025.htm (Form 20-F FY2025) ; https://www.mobiletime.com.br/noticias/25/02/2026/nubank-131-mi-clientes/ ; https://euromoney.com/article/44ga246me0u8488k0c4sskk8o/banking/latin-americas-best-digital-bank-2026-nubank
- INDIA QUICK COMMERCE FY26: Blinkit 916.6M orders, Zepto 640.2M, Instamart 412.2M. Dark stores Mar-2026: Blinkit 2,243; Zepto 1,139; Instamart 1,143. Only Blinkit adj-EBITDA positive (Rs 37 cr in Q4 FY26, Rs 102 cr Q1 FY27); Zepto adj EBITDA loss Rs 1,248 cr in Q4 FY26, Instamart Rs 858 cr loss. Zepto needs ~3,000 orders/store/day to break even vs 2,140 now. Densification hitting diminishing returns, discounting hurting margins. Source: https://www.outlookbusiness.com/explainers/has-quick-commerce-growth-hit-a-speed-bump-inside-blinkit-instamart-zeptos-q1-fy26-performance
- MERCADO LIBRE 2025: Q4 net revenue US$8.8B (+45%); FY revenue growth 39%; Mercado Pago Q4 net revenue US$3.8B (+51%); credit portfolio US$12.5B (+90% YoY), credit-card portfolio US$5.7B (+114%); 15-90d NPL 4.4%; ~78M MAU on Mercado Pago. Q1/Q2 2025 net income $494M/$523M. Margin compression 5-6pts from free shipping/credit card investments. Sources: https://www.barchart.com/story/news/400094/mercado-libre-caps-stellar-2025-performance-with-45-yoy-revenue-growth-in-q4-as-strategic-investments-accelerate-market-share-gains ; https://www.businesswire.com/news/home/20251029534041/en/
- MONIEPOINT (Nigeria): ~NGN412T (~US$294B) 2025 transaction value, 14B transactions (company internal data via TechCabal); claims ~8 in 10 in-person payments in Nigeria; 2025 revenue NOT disclosed (TechCabal estimate 0.30% of volume ~ NGN1.24T payments revenue + NII NGN180B is an ESTIMATE). OPay+PalmPay >90M users combined, no revenue numbers found. Source: https://techcabal.com/?p=179521 . Evidence grade: volume STRONG-ish (company data), revenue WEAK.

### Batch 2 (search summaries; verify load-bearing numbers via fetch)
- BRAZIL "CREDITO DO TRABALHADOR" (private-sector payroll-deducted loan, launched 21 Mar 2025 on gov platform via eSocial / Carteira de Trabalho Digital): R$117.1B cumulative by 17 Mar 2026 (R$94.2B in Mar-Dec 2025; R$26.3B in 1 Jan-17 Mar 2026); R$101B / 17.04M contracts / 8.5M workers by 15 Jan 2026 (gov). Monthly private payroll lending went from ~R$1.5B to ~R$11B (Central Bank data via Serasa Experian). Average loan fell R$8.6k -> R$2.3k, shorter terms (over-indebtedness alert). Sources: https://exame.com/bussola/credito-do-trabalhador-um-balanco-do-primeiro-ano-da-modalidade ; https://www.serasaexperian.com.br/sala-de-imprensa/solucoes-para-rh/credito-do-trabalhador-valor-medio-das-operacoes-de-consignado-privado-cai-73-um-ano-apos-a-criacao-do-novo-modelo-no-brasil-mostra-serasa-experian/ ; https://www.portaltela.com/noticias/economia/2026/06/22/credito-do-trabalhador-aumenta-consignado-e-acende-alerta-de-endividamento/ . Caveat: Exame page may be sponsored content; cross-check with Labor Ministry / BCB.
- SAFARICOM FY2026 (yr to 31 Mar 2026): service revenue KSh 414.1B; net income KSh 99.7B (+67.3%, people.daily) [other source: attributable 95.6B +37%]; M-PESA revenue KSh 182.7B (+13.4%), 45.6% of Kenya service revenue; txn value ~KSh 41.7T; 46.4B transactions (+25.1%). FULIZA (overdraft on M-Pesa): disbursements KSh 1.47T (+49.3%); revenue ~KSh 6B (+46%) [NOTE: this looks low vs disbursement; verify - possibly Fuliza revenue defined differently]; active users 7.9M -> 17.7M; avg loan KSh 218 (down from 241). Sources: https://peopledaily.digital/business/safaricom-posts-ksh99-7b-profit-as-fy2026-revenue-hits-ksh414-1b ; https://capitalfm.africa/fuliza-loans-jump-49pc-to-sh1-47tn/ ; https://thekenyatimes.com/business/m-pesa-safaricom-revenue/
- VINTED 2025 (Lithuania): revenue ~EUR1.1B (+38%), GMV EUR10.8B (+47%), net profit EUR62M (-19% from EUR77M), adj EBITDA EUR151M, FCF EUR137M. MODEL: sellers pay no commission/listing fee; buyers pay a buyer-protection fee (~3-8% estimate from third parties; one says 5% + $0.70). US test/launch Jan 2026 (sources disagree on timing; reseller blogs). CEO says next year's profit depends partly on US. Sources: https://dealroom.co/news/127284-vinted-hits-1-1b-revenue-and-sets-sights-on-the-us/ ; https://fashionunited.com/news/business/vinted-reaches-1-1-billion-euros-in-revenue-for-2025-accepting-a-strategic-drop-in-profits/2026040971654 ; https://www.retailgazette.co.uk/?p=202471
- TABBY (Saudi/UAE BNPL): Series E Feb 2025 $160M at $3.3B; secondary sale reportedly $4.5B (Mar 2026, cairoscene); IPO on Tadawul being prepared (HSBC, JPM, MS) - NO confirmed filing found; Saudi entity audited ~ $55M profit on $378M revenue in 2025 (LinkedIn commentary, WEAK); group volume +~45%/yr (unverified). Acquiring Tweeq wallet. Sources: https://cairoscene.com/Business/Fintech-Tabby-Hits-4-5-Billion-Valuation-After-Secondary-Share-Sale ; https://www.fintechfutures.com/venture-capital-funding/saudi-bnpl-fintech-tabby-raises-160m-series-e-ipo-plans-reportedly-underway . Evidence grade: WEAK-MEDIUM (no primary financials).
- MIXUE 2025 (China-origin, big in Indonesia/Vietnam): revenue RMB33.56B (+35%), net profit ~RMB5.93B (+33%); 59,823 stores end-2025 (55,356 mainland; 4,467 overseas, down from 4,895); franchisees 27,450; SALES OF GOODS & EQUIPMENT TO FRANCHISEES = RMB32.77B (~98% of revenue); franchise fees only RMB793.9M (2.4% of revenue); goods gross margin 29.9% (from 31.2%). Owns production bases + warehousing; localized logistics in 8 countries. Overseas retrenching in Indonesia/Vietnam (store closures), entering US and Kazakhstan. Sources: https://www.itiger.com/news/1100683496 ; https://kr-asia.com/mixues-growth-continues-in-2025-despite-margin-pressure ; https://equalocean.com/news/2026032621813-mixue-group-reports-cny-33-56-billion-revenue-2025-accelerating-global
- TIMEE (Japan spot-work marketplace, TSE 215A): FY ended Oct 2025 revenue JPY34.28B (+27.5%), GTV JPY117.2B; 12.74M registered workers (Oct 2025) -> 14.2M (Apr 2026); client locations 417k -> 465k; latest quarter (May-Jul 2026) revenue JPY10.44B (+24.8%), op profit JPY1.94B; spot-work segment growth slowed to +16.3%; transitional fiscal period change. Takes ~29% of GTV as revenue (34.28/117.2). Sources: https://www.staffingindustry.com/news/global-daily-news/japans-timee-revenue-rises-248-profits-up ; https://www.staffingindustry.com/news/global-daily-news/timee-full-year-revenue-up-expects-further-growth-in-2026 ; https://envalith.com/en/companies/215A/segments

### Batch 3 (search summaries)
- REVOLUT 2025 (UK/EU): revenue ~EUR5.3B / ~US$6.0B (+46%); pre-tax profit ~EUR2.0B / US$2.3B (+57%); net profit ~US$1.7B; 68.3M retail customers end-2025 (from 52.5M); ~767k business customers; deposits ~US$67.5B (+66%); loan book ~US$2.9B (doubling); revenue mix: subscriptions ~$936M (+67%), card ~$1.3B, interest ~$1.3B, wealth ~$876M, FX ~$800M. Valuation ~$75B (Nov 2025 secondary, third-party). Target 100M customers mid-2027. Sources: https://www.revolut.com/annual-report-2025/ ; https://en.paperjam.lu/article/revolut-exceeds-eu5-billion-in-revenues-in-2025-up-46 ; https://www.trendingtopics.eu/neobank-revolut-achieves-record-profit-of-1-7-billion-in-2025/
- M-KOPA (Kenya, PAYG): FY2025 revenue ~US$600M (+45%); 10M customers (3M added in last 12 months); first annual profit (Oct 2025); growth now from credit-financed smartphones (entered 2020) more than solar; ~10,000 new customers/day; micropayments 23/sec; markets Kenya, Nigeria, Ghana, Uganda, South Africa. Company-announced, unaudited. Sources: https://techtrendske.co.ke/2026/10/08/m-kopa-10-million-customers-africa-2/ ; https://techeconomy.ng/m-kopa-marks-15-years-with-10-million-customers-record-revenue ; https://weetracker.com/?p=91123
- SUN KING: $156M (KES 20.1B) local-currency securitization of customer repayments, Citi-structured with Stanbic, 5 banks + 3 DFIs (July/Oct 2025), follows $130M in 2023; $1.3B solar loans to ~10M customers; payments via mobile money from $0.19/day; $450M raised across Kenya/Nigeria/Tanzania. No revenue figure found. Sources: https://www.citigroup.com/global/news/press-release/2025/citi-sun-king-securitization-deliver-solar-million-kenyans ; https://african.business/2025/10/energy-resources/sun-king-targets-next-growth-phase-after-156m-securitisation
- RAPIDO (India): FY25 operating revenue Rs 934.4 cr (+44%) [Inc42 says nearly doubled - conflict], net loss Rs 258.4 cr (narrowed 23%). Model: flat daily subscription (Rs 9-29/day, ~5% of ride income) vs 20-25% commission; Namma Yatri (open-source, Rs 10-30/day, ~75M rides since 2022); Uber moved auto drivers to subscription 18 Feb 2025; GST ruling conflict on whether subscription platforms owe 5% GST. Sources: https://www.medianama.com/2026/01/223-rapido-fy25-revenue-jumps-44-percent-loss-narrows/ ; https://sacra.com/c/rapido ; https://restofworld.org/2025/uber-india-price-war/ ; https://taxo.online/latest-news/01-03-2025-ride-apps-switch-to-subscription-model-amid-conflicting-rulings-on-gst-liability/
- LENSKART (India): FY25 operating revenue Rs 6,652.5 cr (+22.5%); EBITDA ~Rs 971 cr; net profit Rs 297 cr incl ~Rs 167 cr one-off gain (operating profit ~Rs 130 cr); 2,806 stores June 2025; in-house automated manufacturing (Bhiwadi), claims 35-40% lower frame/lens cost; ~68% gross margin (one source); IPO ~Nov 2025 at ~$10B valuation; adding 620 stores by FY29. URBAN COMPANY: FY25 operational revenue ~Rs 1,144.5 cr (+38.2%); profit Rs 240 cr mostly deferred tax credit (PBT ex-tax only Rs 28.6 cr); positive op cash flow Rs 212.6 cr; Rs 1,900 cr IPO. Sources: https://www.kotakneo.com/news/market-news/lenskart-fy25-revenue-profit-analysis/ ; https://www.business-standard.com/amp/markets/ipo/lenskart-files-rs-2150-cr-ipo-eyes-growth-in-affordable-eyewear-125072901456_1.html ; https://www.angelone.in/news/ipos/ipo-bound-urban-company-posts-profit-thanks-to-211-crore-deferred-tax-credit
- EUROPE QUICK COMMERCE (cautionary): Getir shut US/UK/EU ops, cut 6,000+ jobs, retreated to Turkey; Gorillas sold to Getir at ~$1.2B vs $3.1B valuation a year earlier; Flink cut to Germany/Netherlands, valuation ~$1B vs ~$5B peak, exited France; dark hub profitable only at ~500-1,000 orders/day; VC in sector fell $1.3B (13 deals, 2021) -> $125M (2 deals, 2022). Sources: https://techcrunch.com/2024/09/16/flink-the-quick-commerce-startup-raises-another-150m-at-a-valuation-of-just-under-1b ; https://www.business-punk.com/startup/flink-kassiert-100-mio-waehrend-gorillas-getir-vergluehen/ . Grade MEDIUM (no 2025-26 updates found).
- MEXICO FINTECH/STABLECOINS: Bitso handled ~$6.5B of US-Mexico remittances in 2024 (>10% of corridor, own statement via Paymentology); Mexico received $64.7B remittances 2024 (96.6% from US; BBVA Research); Bitso claims 14.7% of corridor Jan-Aug 2026 (LinkedIn sales post - UNVERIFIED). Bitso June 2025 launched USD receiving accounts for Mexico/Argentina (ACH $2.99; wire $11.99 + 0.17%). PLATA: full bank license (CNBV, Dec 2024/Feb 2025 sources conflict), Series A $160M @ $1.5B (Mar 2025), Series B $250M @ $3.1B (Oct 2025), reported $405M @ ~$5B (Apr 2026); ~2.5M active credit customers, $563M loan portfolio in 2025; >$2B raised equity+debt. Sources: https://www.paymentology.com/blog/stablecoins-and-the-us-mexico-remittance-corridor-a-practical-case-for-financial-institutions ; https://www.fintechfutures.com/venture-capital-funding/mexican-fintech-plata-raises-250m-series-b-doubles-valuation-to-3-1bn ; https://themoscowtimes.com/2026/04/16/tinkov-founded-fintech-plata-hits-5bln-valuation-after-405m-funding-round-a92520

### Batch 4 (searches + fetch verification)
- K-BEAUTY: Korea cosmetics exports record US$11.43B in 2025 (+12.3%, MFDS); US overtook China as #1 destination (~US$2.2B vs ~US$2.0B); H1 2026 exports ~US$7B (+27%), US ~US$1.45B (20.7%); Olive Young: >half of global online sales from US consumers in H1 2025; Pasadena CA store opened 29 May (2026 per Herald); Olive Young-curated zones in Sephora. Indie brands (TikTok/Instagram-led) drove the growth. No APR/Medicube revenue found. Sources: https://www.koreajoongangdaily.com/business/koreas-cosmetics-exports-surpass-record-11-billion-in-2025/12129724 ; https://www.personalcareinsights.com/news/kbeauty-export-record-us-china-shift.html ; https://insideretail.co.nz/2026/06/15/can-olive-young-export-koreas-beauty-retail-strategy/ . Grade: export macro MEDIUM-STRONG; company revenue WEAK (not found).
- EUROPE E-INVOICING MANDATES: Belgium B2B mandate live 1 Jan 2026 (Peppol); Poland KSeF live 1 Feb 2026 (large) / 1 Apr 2026 (rest) / micro 2027; France phase 1 from 1 Sep 2026 (large+mid issue; ALL must receive; SMEs 1 Sep 2027) via certified PDP platforms + e-reporting; Germany receive from Jan 2025, send from 2027; EU ViDA common framework by 2030. Pennylane (France accounting SaaS) is a certified PDP, claims 4,500+ accounting firms and 350k clients (vendor claim). Pagero rebranded under Thomson Reuters (no deal terms found). Sources: https://www.spscommerce.com/community/articles/e-invoicing-mandates-in-europe-the-2026-business-guide ; https://originstamp.com/en/blog/reader/eu-e-invoicing-mandates-timeline-2026-2030 ; https://europe.thomsonreuters.com/events/france-einvoicing-mandate-8-things-to-know . No revenue numbers found for Pennylane - WEAK on revenue.
- EGYPT MNT-HALAN: ~$400M round ($260M equity + $140M securitized bonds; Chimera $200M for 20%), ~$1B post-money (2023 unicorn); June 2026 $1.4B valuation first close led by Al Ahly Capital (National Bank of Egypt); claims >$2B disbursed to unbanked; claims >$300M revenue "last year" (date unclear, company claim, UNVERIFIED); operates Egypt, Turkey, UAE (2024), bank in Pakistan. valU not covered. Sources: https://www.wamda.com/2026/06/mnt-halan-reaches-1-4-billion-valuation-investment-round-led-al-ahly-capital ; https://www.techloy.com/egyptian-fintech-mnt-halan-raises-400-million/ . Grade WEAK-MEDIUM.
- FULIZA FETCH (capitalfm.africa): confirms FY to Mar 2026 disbursements KSh1.47T (+49%), "revenue generated from Fuliza" KSh6B (+46%) [NOTE ratio 6B/1.47T = 0.41% of disbursements - implausibly low unless it is net of bank lenders' share or only Safaricom's cut; flag as UNCERTAIN], 17.7M customers (article says 'customers' not active), avg loan KSh218 (from 241). Also M-Shwari disbursements KSh95B revenue KSh1.9B (-14.1%), 7M active; KCB M-Pesa disbursements KSh73.8B revenue KSh1B; Equity Timiza KSh28.5B. URL: https://capitalfm.africa/fuliza-loans-jump-49pc-to-sh1-47tn/
- BRAZIL CREDITO DO TRABALHADOR FETCH (Exame): it is an OPINION piece by Evertec's digital director - NOT primary. States 25M contracts in first year (Ministry of Labor), R$117.1B cumulative to 17 Mar 2026 (sub-periods R$94.2B + R$26.3B = ~R$120.5B so internal inconsistency, unexplained), average consignado CLT rate "approached 60% in 2025" (unit unclear), repayment by payroll deduction, no default data, lenders not named. => need gov.br / BCB primary. URL: https://exame.com/bussola/credito-do-trabalhador-um-balanco-do-primeiro-ano-da-modalidade
- M-KOPA FETCH (techtrendske): confirms $600M FY2025 revenue (+45%), 10M customers (3M new in last 12 mo; definition of customer not given), 5-yr CAGR 50% (metric unspecified), company says "stayed profitable" but NO profit figure; 50,000-agent network; 10,000+ e-motorcycles/3-wheelers financed; owns Kenya phone assembly; underwriting + funding sources NOT disclosed; not independently verified. URL: https://techtrendske.co.ke/2026/10/08/m-kopa-10-million-customers-africa-2/

### Batch 5 (searches; TechCabal fetch returned 403)
- BRAZIL CREDITO DO TRABALHADOR (news citing Ministry of Labor, MTE; gov.br page not accessible): first month (Apr 2025) 783,064 contracts, avg loan R$5,771; MTE avg rate ~3.2-3.59% per MONTH (conflicting across dates: 3.58%, 3.59%, 3.2%); R$61B by Sep 2025; R$101B / 17.0M contracts / 8.5M workers by 15 Jan 2026 (Poder360); Banco do Brasil alone disbursed R$18.2B in just over a year (Canal Rural). Banco Central warns it can raise household indebtedness and defaults; Poder360 says consignado debt up 80% with the program; no program-specific default rate found. Sources: https://www.poder360.com.br/poder-economia/credito-do-trabalhador-supera-r-101-bilhoes-em-emprestimos/ ; https://www.poder360.com.br/poder-economia/endividamento-do-consignado-aumentou-80-com-credito-do-trabalhador/ ; https://www.canalrural.com.br/economia/banco-do-brasil-desembolsa-r-182-bilhoes-no-credito-do-trabalhador-em-pouco-mais-de-um-ano/
- INDIA UPI / PHONEPE: UPI 24.51B transactions in Aug 2026 (~Rs 29.8 lakh crore; +22% YoY; NPCI), 228.3B txns / Rs 299.7 lakh crore in CY2025; PhonePe ~45-46% volume share (Dec 2025: 9.81B txns), Google Pay ~35%, Paytm ~8%. PhonePe DRHP: FY25 revenue from operations ~Rs 7,115 cr (+40%), statutory net LOSS ~Rs 1,727 cr (never posted a statutory profit), adj EBITDA positive ~Rs 1,477 cr (excludes ESOP); H1 FY26 loss ~Rs 1,444 cr; merchant payments + financial services ~42% of revenue; UPI payments themselves are ZERO MDR so revenue is non-UPI (devices, ads, distribution of loans/insurance/wealth); NPCI 30% volume-cap overhang. Sources: https://www.medianama.com/2025/09/223-1-5b-ipo-phonepe-7631-cr-revenue-fy25-loss/ ; https://www.indmoney.com/blog/ipo/phonepe-drhp-explained ; https://startuptalky.com/india-upi-transactions-august-2026-record-volume/ . KEY LESSON: a dominant rail position (45% of 24B txns/month) still does not produce statutory profit when the rail is free.
- TALABAT (UAE-based, DFM-listed; Delivery Hero subsidiary) FY2025: GMV US$9.5B (+28% cc), revenue US$3.9B (+33%), adjusted EBITDA US$615M (6.5% of GMV), net income US$464M, adj FCF US$559M, dividends US$421M; 2026 guide: GMV +11-14%, adj EBITDA $510-540M (reinvesting >$100M in grocery + loyalty). Sources: https://gulfbusiness.com/en/2026/food-industry/talabat-posts-2025-results/ ; https://www.zawya.com/en/press-release/companies-news/talabat-reports-resilient-results-for-q4-2025-announces-disciplined-investment-cycle-to-drive-long-term-growth-mue1ykjm . Grade STRONG (company release via Zawya).
- KOREA: Toss (Viva Republica) FY2024 revenue KRW1.96T (+42.7%), op profit KRW90.7B (first profit); FY2025 (secondary: Korea Herald via aggregator) revenue ~KRW2.7T (+38%), op profit KRW452B, net KRW202B - UNVERIFIED; US IPO planned (valuation >$10B, reports Jul 2025/Jan 2026), no filing confirmed. COUPANG: Q2 2025 revenue $8.5B (+16%), Rocket (Product Commerce) adj EBITDA $663M (9% margin); Taiwan/Eats/Farfetch segment loses ~$235M/qtr; FY2025 revenue ~$34.5B, op income ~$473M (aggregator, check 10-K). Sources: https://www.koreaherald.com/article/10453004 ; https://toss.im/tossfeed/article/RevenueQ12025 ; https://insideretail.asia/2025/08/07/coupang-turns-a-profit-but-can-taiwan-fuel-the-next-stage-of-growth/
- VIETNAM MWG: FY2025 net revenue ~VND157.4T (~US$6B, +16%), profit after tax ~VND7.1T (~US$273M, ~2x; ~22% from financial income); Bach Hoa Xanh (grocery) first-ever break-even Dec 2023 after 8+ years of losses (founded 2015); ~VND2B revenue/store/month; electronics chains rev VND105.7T with 221 stores closed since early 2024; An Khang pharmacy; ~5,205 stores. Sources: https://news.tuoitre.vn/vietnam-retailer-mobile-world-posts-strong-2025-profit-boosted-by-financial-income-103260204160919933.htm ; https://en.wikipedia.org/wiki/Mobile_World_Investment_Corporation

### Batch 6 (fetch verification + searches)
- BRAZIL (Poder360, 16 Jan 2026, citing Ministry of Labor): R$101B in loans by 15 Jan 2026; 17.044M contracts; 8.523M workers; avg rate 3.2%/MONTH (~46% annualized, my calc); avg R$11,895 per WORKER (101B/8.52M ~ R$11.85k; per CONTRACT = 101B/17.04M ~ R$5.9k, my calc) and avg installment R$245.90; minister: replaces CDC/credit-card revolver/overdraft averaging 11.2%/month; most contracts to workers earning up to 4 minimum wages; government projects ~25M people could join within 4 years (government projection, not fact). Lenders not named in article (Banco do Brasil alone R$18.2B per Canal Rural). BCB warns of indebtedness/default risk; no program-level default rate published in sources found. URL: https://www.poder360.com.br/poder-economia/credito-do-trabalhador-supera-r-101-bilhoes-em-emprestimos/
   NOTE on MEMORY-vs-SOURCE: the Exame piece (opinion by Evertec exec) said 25M contracts in year one and R$117.1B by 17 Mar 2026; Poder360 gives 17.0M contracts at R$101B in mid-Jan. Both are consistent with growth; use Poder360 for the Jan figure and flag Exame as non-primary.
- VINTED (Dealroom fetch, Apr 2026): CONFIRMED revenue EUR1.1B (+38%), GMV EUR10.8B (+47%), net profit EUR62M (-19% from EUR77M), FCF EUR137M (+36%), adj EBITDA EUR151M (-5%), valuation EUR8B, third consecutive profitable year (first profit 2023; revenue was EUR11M in 2017). Launched in US January 2026 starting New York with "tens of millions" in marketing. Vinted Go (own carrier, 5 markets, cost centre) + Vinted Pay (wallet). Fee model not in this article (buyer-protection-fee model from other sources). Implied take rate = 1.1/10.8 = ~10.2% of GMV (my calc). URL: https://dealroom.co/news/127284-vinted-hits-1-1b-revenue-and-sets-sights-on-the-us/
- MONIEPOINT (search; TechCabal original 403): company says profitable (no audited numbers); >NGN412T volume in 2025, ~800M monthly txns; >300,000 POS agents (older profile, dated); disbursed >NGN1T credit to ~70,000 small businesses in 2025 (company year-in-review); $600M "ARR 2025" from one review site brands.ng = UNVERIFIED, DO NOT USE; Series C $90M (Oct 2024) at >=$1B valuation (FT) extended to total $200M (DPI-led; Visa participated Jan 2025); CBN says system NPLs rose to ~7% in 2025; high-profile bad loans (Alerzo NGN5B, ShopRite NGN2.4B). Sources: https://www.techinafrica.com/blog/moniepoint-hits-unicorn-status-massive-250m-series-c/ ; https://techcabal.com/?p=180023 ; https://launchbaseafrica.com/2025/01/23/payments-behemoth-visa-joins-moniepoints-cap-table
- US EWA / PAYROLL-LINKED CREDIT REGULATION (for port analysis): CFPB Dec 2025 advisory opinion - employer-offered EWA settled via payroll, limited to earned wages, no repayment obligation = NOT credit under TILA (after 2024 proposed rule was never finalized and the 2020 AO rescinded Jan 2025); H.R. 9330 Earned Wage Access Consumer Protection Act introduced Jun 2026, House Financial Services advanced it Jun 30 2026 (29-22), would preempt state credit treatment (CSBS objects); states split: CA, CT, MD treat EWA as credit; ~9 states say not lending; ~a dozen states have EWA laws by 2026; found NOTHING on payroll-deducted installment loans specifically (governed by state small-loan and wage-deduction laws - unresearched). Sources: https://www.faegredrinker.com/en/insights/publications/2026/8/earned-wage-access-regulatory-update-federal-legislation-advances-as-states-continue-to-act ; https://enterprise.chime.com/blog/earned-wage-access-law-regulations

### Batch 7 (searches: e-invoicing revenue evidence, GENIUS Act status)
- PENNYLANE (France): Apr 2025 EUR75M round led by Sequoia (CapitalG, Meritech, DST), valuation EUR2B (doubled); Bloomberg Nov 2025: in talks at ~$4.25B led by TCV (NOT confirmed closed); company said it would exceed EUR100M ARR in 2025 (Ecole Polytechnique piece Dec 2025 - company claim); Getlatka estimate $68M 2025 revenue (low reliability, conflicts with ARR claim); ~4,500 accounting firms + 350k SMEs; claims certified PDP status for France (vendor claim, check official DGFiP list). Sources: https://tech.eu/2025/04/07/french-unicorn-pennylane-scores-eur75m-funding-as-capial-g-joins-investor-roster/ ; https://news.bloombergtax.com/daily-tax-report-state/sequoia-backed-pennylane-eyes-funding-at-4-3-billion-valuation
- PAGERO / THOMSON REUTERS: TR acquired Pagero for ~US$800M (SEK 8.1B), offer announced 11 Jan 2024, closed 26 Feb 2024, beat a rival bid from Vertex; Pagero network linked 90,000 customers, reach 14M companies, compliant with mandates in 75+ countries; per-share price conflicts (SEK 40 vs 50 across sources). No reliable revenue for Sovos/Avalara/Basware found (Avalara ">$500M" is a third-party estimate; Avalara was taken private 2022 by Vista). Sources: https://www.cpapracticeadvisor.com/2024/02/26/thomson-reuters-acquires-pagero-for-800-million/101999/ ; https://europe.thomsonreuters.com/newsroom/thomson-reuters-successful-acquisition-of-pagero-paves-the-way-for-significant-growth-opportunities
- GENIUS ACT (US stablecoin law, signed Jul 2025): effective on the EARLIER of 18 months after enactment (18 Jan 2027) or 120 days after final regs; regs NOT final as of Aug 2026 (OCC says it will finalize before Jan 2027, target ~Nov); OCC proposal: $5M min capital for new issuers, 10% same-day redemption liquidity; issuers >$25B must hold part of reserves as insured deposits; Treasury proposal reaches offers/sales to US persons even by foreign issuers; nothing found specific to remittances. Sources: https://www.jonesday.com/en/insights/2026/08/us-treasury-proposes-genius-act-rules-for-stablecoin-issuance-offer-and-sale ; https://theblock.co/news/regulation/2026-08-19-occ-races-to-finalize-genius-act-stablecoin-rules-by-november-412240 ; https://www.morganlewis.com/pubs/2025/07/genius-act-passes-in-us-congress-a-breakdown-of-the-landmark-stablecoin-law

--- END OF RAW EVIDENCE LOG ---
