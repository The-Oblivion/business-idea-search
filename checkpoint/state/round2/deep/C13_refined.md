# C13 refined: Run-Base Shrinker v2 (funded retirement of application run cost, paid per invoice line that drops)

Refined 2026-10-19 after three "serious" critiques. Inputs: P129 idea file, P129 gate report, C13 dossier, round-2 lessons, strategy frameworks. Tags: **[critic]** = fact from the critics' evidence packets that I did not re-fetch; **[checked]** = I looked it up this session, search-summary level; **[est]** = my arithmetic or assumption; **[bg]** = background knowledge. Model code and every number in section 5 came from a small simulation I ran this session (cohort revenue by client, logos per year, tail, decay, attrition, engineering cost, CAC, fixed cost).

---

## 1. Verdict

- **Alive, but only as a gated bet with a thin right tail.** My own odds of reaching $100M a year: about 4-10% if the first gates clear (depending on how correlated the good outcomes are), about 2-4% before any gate. The dossier's 10-15% is higher than my model supports.
- **The median case is not a good business.** At typical account sizes it is a $15-20M-revenue services company that burns about $28M and only reaches break-even around year 8-9. It is the failure mode, not the plan. The plan is to kill early if the first accounts look like the median, not to drift into it.
- **The critics were right about three big things:** (1) the 36-month annuity needs far more new clients than the gate said, (2) at $30M accounts and 6% savings the funded-engineering model earns almost nothing, (3) vendor-labor ticket cuts, the SAP wedge, the Big 4 co-sign, and the 30-35% share are all weaker than the gate credited. All four are dropped or changed below.
- **What survives is narrower in lever, wider in pool.** I stopped trying to be paid on a modelled bill and moved to one rule: **no third-party invoice line drops, no fee.** That removes the baseline fight, and it lets the addressable base grow from "offshore AMS labor" to the whole external application run bill (licences, hosting, third-party support, AMS lines), which is what a $100M path needs.

---

## 2. What the critics got right, and what I changed

| Critic point | Verdict | Change |
|---|---|---|
| Vendors already concede AI savings; renegotiation costs 0%; fixed-bid raises vendor margin, not client saving | Right for the rate. Wrong that it overlaps with us: renegotiation changes **price per unit**; we remove **units** | Fee base is units removed at the then-current invoice price. We never claim rate cuts, AI pass-through or internal labor. Vendor-labor lever demoted to an add-on |
| Citi-type in-sourcing; falling cost of engineering | Right for the top ~50 tech spenders | Exclude them. Sell to firms that cannot free change capacity; sell the CFO-backed sweep and a guarantee, not code. Add a buyout |
| Client-controlled levers are where Redress, Flexera, IBM, SoftwareOne already sit | Right on identification and negotiation; none funds or executes retirement | Price negotiation-only lines at 20% or refer them. Charge 30% only where we execute. Ingest their data, partner where useful |
| SAP custom-code wedge is soft (extended maintenance to 2030, free SAP tools, saving lands in the SI fee) | Right | Dropped as the wedge. Kept as an opportunistic module only |
| Vendor counter-moves (confidentiality, volume bands, drag the reset, productivity credit) | Right on the vendor-labor lever | Lead levers need no vendor cooperation. AMS lever only via client-signed scope change orders and only on contracts with an itemised exit price |
| 36-month annuity means 3x new clients per year; 12-15 a year gives 36-45 payers | Right (my sim reproduces it: 45 payers, $57M at gate inputs, $20M at dossier inputs) | Evergreen step-down tail, multi-wave agreements, bigger accounts with land-and-expand. Honest result: the tail adds only about 12%. Account size and velocity do the real work |
| 18-30 months to first cash; $50-100k of free pre-sale work per prospect | Partly right | Paid X-ray ($75-150k, credited). Cash in month 2-4. First success-fee dollar month 9-15 |
| $1.0-1.5M of engineering vs $0.45M a year of fees flips the sign | Right at $30M accounts and 6% savings | Fund only units that clear an 18-month payback hurdle; lead with low-engineering lines; account-size floor; co-funded option |
| Realization: 20% targeted, 5-6% realized | Right, and it is the riskiest assumption | Owner sign-off before we fund; CFO budget sweep; time-to-cash sequencing; the two-week test targets exactly this |
| Big 4 co-sign collides with SEC contingent-fee independence | Probably right (my inference, needs counsel) | Withdrawn. Open protocol, signed per client by Internal Audit; independent verifier only on a flat client-paid fee |
| Insurance AI exclusions, SOC 1, agent incidents, TPRM for banks | Right | Human-led, AI-assisted; no autonomous production writes; client's own change process; scream-test; liability cap; non-bank sectors first; E&O quote is a gate |
| Moat: data library blocked by no-training clauses; counter-positioning only versus AMS vendors; advisers can add independence | Right | Moat claim rebuilt (section 7). The data asset is our own outcome statistics, not client data |
| 30-35% share has no support | Right (25% documented; SaaS-buying guide says 15-30% [checked]) | Blended 26% median, 28% upside, with a 10% tail. Over seven years the client keeps about 81% of the savings |

---

## 3. The refined business

**One line.** A vendor-neutral company that funds and runs the retirement of unused application run cost (applications, licences, hosting, third-party support, AMS contract lines) and is paid a share only when a third-party invoice line actually goes down, on a ledger the client's Internal Audit signs.

**The one rule: the invoice line drops or there is no fee.** A unit counts only if (a) a named application or licence, hosting or support line is retired or downsized, (b) the vendor invoice for it falls or disappears, or (for an AMS line) a signed change order removes it from scope, and (c) the client's finance team can see it on a budget line. Verified reduction = the **lesser of** units removed x invoice price before removal, **and** the actual net fall in that vendor's invoice for the affected products. Excluded from the fee base: rate-card cuts, AI pass-through, productivity credits, and internal labor redeployed. This is the answer to the baseline fight, to AI deflation, and to "you only earn what the vendor already conceded". If the client renegotiates the unit price, our base shrinks in proportion, and nobody argues.

**Why the metered rule matters.** The private-sector contingency businesses that reached scale are the ones where a third party meters the saving (PRGX: roughly $41.5M a quarter in Q3 2020, taken private for about $195M [checked, search summary]; telecom, freight and cloud-savings share models [bg]). The ones that struggle are those paid on modelled gains, which is where the "gainshare rarely produces results" record comes from [critic]. v1 was in the second group; v2 is in the first.

### Wedge: events with a date and an owner, not a regulation

Take companies with at least **$40M of fee-eligible external application run spend** (licences and maintenance, hosting and cloud, third-party support, AMS lines), outside the ~50 biggest in-sourcers, in one of three dated situations:

1. **6-18 months after an acquisition closes.** Duplicate application estates, a synergy number the board tracks, transition-service exits with fixed dates. Integrators bill time here; we are paid in dollars out. [est; the trigger is a hypothesis the two-week test checks]
2. **12-24 months before a sponsor exit.** Each $1 of run cost removed is $1 of EBITDA, which the buyer capitalises at a multiple. Single signer, fast decisions. Redress's reported $100M across 14 portfolio companies shows sponsors buy this, on licences only [critic, vendor claim].
3. **Platform end-of-support and licence repricing cliffs.** SQL Server 2016 support ended 14 July 2026; Windows Server 2016 gets its last security update 12 January 2027. Year-one extended security updates are reported at about 75% of licence cost, rising after (third-party estimate, not a Microsoft price list) [checked]. For an old, rarely used application, "retire it" beats "pay again". Broadcom/VMware repricing is a second case [critic, secondary].

Sector order: non-bank first (industrial, healthcare services, retail, software and services, PE platforms). Banks and insurers come after SOC 2 Type II and a third-party-risk playbook, in year 2-3.

First ten: five through PE operating partners or portfolio-operations heads, three through acquirers' integration offices, two through a hired ex-AMS delivery head's network.

### Payer and signer

- **CFO (or Controller; in a sponsor-owned company, the CFO plus operating partner)** signs the program agreement and the budget sweep. The CFO owns the line the savings come out of and the line the fee is paid from. This answers the critics' "LOI from a Controller or CFO, not a CIO".
- **CIO** owns execution through the client's own change process.
- **Internal Audit** signs the ledger method as accepted evidence (a client-by-client acceptance, not a Big 4 co-sign).
- **Procurement** signs vendor notices and AMS scope change orders.
- Budget lines: the X-ray comes from the integration, transformation or cost-to-achieve budget; the share comes out of the freed budget.

### First product: Estate X-ray, then the Unit Ledger

**Estate X-ray (paid):** fixed $75-150k, 3-5 weeks, 100% credited against first-year success fees if a program agreement is signed within six months. For comparison, SaaS-buying services quote a $30-250k subscription plus 15-30% of validated savings (a vendor-authored guide) [checked]. Inputs the client already owns: accounts-payable export for software, hosting and support lines with renewal dates; SSO and usage logs; the application inventory; contract schedules. Output:

1. A ranked list of **units** (named applications and invoice lines). For each: annual dollars, renewal or exit date, business owner, usage evidence, exit terms (minimums, volume bands, notice), engineering cost estimate, and a realization-risk tier.
2. A clause read of the relevant contracts (minimum commitments, exit prices, confidentiality limits on sharing terms with a third party).
3. A one-page CFO sweep memo: which cost centres give up which dollars on which date.
4. A Wave 1 offer covering only units that pass the funding hurdle.

This is paid, so the free pre-sale cost the critic estimated at $50-100k per prospect largely disappears. It also screens out tire-kickers.

**Wave execution:** the Unit Ledger is the system of record (units, owners, dates, evidence, invoice proof). The software is thin at first: connectors for AP exports, SSO and cloud billing, plus ledger workflow. It grows as the standard asset.

### Pricing

| Component | Terms |
|---|---|
| Estate X-ray | $75-150k fixed, credited |
| Share, executed retirement or consolidation (we fund) | 30% of verified annual reduction for 36 months from each unit's realization date; 25% from wave 3 on |
| Share, negotiation-only lines | 20% (at or below Redress's 25%, since we are not the differentiator here) |
| Share, co-funded (client pays engineering at cost plus 10%, capped) | 15% |
| Tail | 10% of still-verified reduction for months 37-84, conditional on the ledger being maintained and regrowth monitored. 10% of savings is about 0.7% of the base at a 7% reduction, in line with ISG's observed governance price of about 0.7% of spend [critic] |
| Buyout | Client may buy out remaining scheduled fees at an agreed discount, any time |
| Funding hurdle | We fund a unit only if estimated payback at our share is 18 months or less (engineering cost no more than about 0.45x annual saving at a 30% share); other units are co-funded or client-funded |
| Floor on account size | Fee-eligible base of at least $40M, and an X-ray-identified Wave 1 of at least $2M a year |

Total fee over seven years is about 1.3 years of the annual saving (30% x 3 + 10% x 4), so the client keeps about 81% of every dollar. The client's do-it-yourself cost is about 0.3 years of saving per attempted dollar, but at the 25-30% realization the critics cite, that is about 1.1 per realized dollar. Our price is roughly parity with a DIY program at observed realization rates, plus no capital and no capacity needed. **If a client can reliably realize more than half of what it identifies, it should do it itself, and we should not chase that account.**

### What I killed from v1

SAP custom code as the wedge. The 30-50% idea-file share and the gate's 30-35% flat share. "Big 4 audit partner co-signs the protocol". Repeat-incident elimination as a lead lever. Banks as the first sector. The claim that "nobody removes repeat incidents". The ESCO analogy as a market-size or financing argument (kept only as a contract template: shared savings, M&V, buyout, tail).

### Sequencing

| When | What |
|---|---|
| Days 0-14 | The realization test (section 9). Hire or recruit the insider co-founder (ex-AMS delivery head or IT-finance/ITAM lead); the founder alone cannot carry enterprise credibility |
| Months 1-3 | Three design partners with dated events. Tech E&O quote for human-led work. Contract-clause library. Open protocol v0.1 |
| Months 3-12 | 5-8 paid X-rays. Wave 1 on units with invoice end dates inside 9 months (licence, hosting, support) plus 5-10 retirements. SOC 2 Type I. First audited invoice drops by month 9-12 |
| Year 2 | 4-6 program agreements. Sponsor and integration-office channel pilots. Lender term sheet. SOC 2 Type II. AMS scope change orders on itemised contracts |
| Years 3-5 | 7-15 new a year. Land-and-expand across business units. Banks and insurers. Neutral calculation agent for AI-gainshare clauses (price benchmark: ISG's about 0.7% of spend) |
| Years 5-8 | 18-20 new a year if the gates held. Tail about 16% of revenue by year 8 in the upside case. Ledger adopted as the reference record by advisers or sponsors |

---

## 4. Positioning: why not renegotiate, in-source, or buy Redress

| Alternative | What it does | Why we still win some accounts |
|---|---|---|
| Renegotiate or rebid to fixed price | Cuts **price per unit** (UpperEdge case: about 16% off fees [critic]) | Units are untouched. Our fee base is units, so the two stack. A renegotiated price lowers our base but never creates a dispute |
| Redress Compliance (25%, one-time, licence deals, no fee if no savings) | Negotiates better terms with software publishers | Does not retire anything or fund execution. We price negotiation-only lines at 20% or refer them; we pay for execution where the line must disappear |
| Flexera, LeanIX/Apptio, IBM Concert, Zylo, SoftwareOne | Software that finds waste | Subscription tools that identify; none funds, executes or guarantees realization. We ingest their data |
| ISG GovernX, Avasant, UpperEdge | Governance and advice | No engineering, no funding; potential channel |
| AMS vendors, Rimini (3,100 clients [critic]) | Self-funded transformation, fixed-price tickets | Conflicted (they lose volume), and their savings sit on rate, not units |
| Integrators at time-and-materials | Application rationalization projects | Paid for effort, not for dollars out |
| AI engineering tools (AWS Transform, Copilot, Devin, AI-SRE startups) | Make the engineering cheaper | Mostly for the client to buy; the bottleneck is owner sign-off, archive and retention sign-off, contract exit and the sweep, not code |
| In-house program (Citi: about 14,000 engineers on Devin [critic]) | Does it themselves | Real for the top ~50. We exclude them |

Watch items: an AI-native roll-up of application-management businesses that sells outcome-priced run and keeps the savings (I found no deal yet [critic]); Redress, ISG or Flexera adding execution partners.

---

## 5. Numbers (my simulation, all inputs labelled [est])

### 5.1 The critics' volume math, reproduced

Old design (36-month annuity, $1.26M per client-year, ~79 payers needed):

| Scenario | New clients a year | Concurrent payers (yr 8) | Revenue yr 8 |
|---|---|---|---|
| Gate inputs, gate velocity | 12-15 | 45 | $57M |
| Gate inputs, velocity needed for 79 payers | 26 | 78 | $98M |
| Dossier-anchored ($0.45M per client-year) | 12-15 | 45 | $20M |

The critic's arithmetic is right. A funded 36-month annuity cannot reach $100M at 12-15 signings a year.

### 5.2 What actually moves the answer

Contract structure alone does not fix the volume math. On the upside case, removing the tail costs only about 12% of year-7 revenue ($88M vs $100M). The drivers are account size, reduction achieved, and signings per year.

**What must be true for $100M with signings capped at 20 a year** (94 cumulative by year 7, 114 by year 8; 13-16% of ~700 reachable payers [est]):

| Effective base per client | Reduction at yr 3 / yr 5 | Revenue yr 7 | Revenue yr 8 |
|---|---|---|---|
| $60M | 8% / 10% | $68M | $81M |
| $60M | 10% / 13% | $85M | $103M |
| $80M | 8% / 10% | $89M | $107M |
| **$80M** | **9% / 11.5%** | **$101M** | **$121M** |
| $100M | 8% / 10% | $111M | $133M |

(Share 28%, tail 10%, decay 3% a year, client attrition 4% a year.) "Effective base" means land at about $40M of fee-eligible spend in one business unit and expand to about $80M across units within three years.

### 5.3 The two cases

**Median case (conditional on clearing the early gates):** land base $45M, no large expansion, reduction 6% at yr 3 and 7% at yr 5 (right at the gate's 6% kill line), blended share 26%, tail 8%, decay 5%, attrition 5%, engineering cost 0.30 x annual saving, 2, 4, 6, 8, then 9 new clients a year.

| Year | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|
| Revenue $M | 6.8 | 10.3 | 13.7 | **16.6** | 18.7 | 20.1 |
| EBITDA $M | -5.4 | -4.8 | -3.4 | -1.7 | -0.4 | +0.6 |

Cumulative logos 47 by year 7 (about 7% of reachable). Peak cumulative cash need about $28M in the model; allow $45-60M with receivable timing, bad debt and cost-model error. This is a thin-margin services company, not a venture outcome.

Sensitivities on the median (year-7 revenue): reduction 4.5% at yr 3 -> $12.8M; CFOs cap the share at 20% -> $13.4M; $30M accounts -> $11.4M.

**Upside case:** land $40M, expand to an effective $80M, reduction 3% / 6% / 9% / 10% / 11.5% (cumulative, years 1-5), blended share 28%, tail 10%, decay 3%, attrition 4%, engineering cost 0.30 x annual saving, 3, 7, 11, 15, 18, then 20 new clients a year.

| Year | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|
| Revenue $M | 33 | 54 | 77 | **100** | **121** | 137 |
| EBITDA $M | -7.8 | -2.4 | +6.8 | +19.6 | +32.7 | +44.2 |

Peak cumulative cash burn about $32M in the model (allow $40-80M with receivable timing; half of it financeable against signed receivables if the lender facility materialises). Tail about 16% of year-8 revenue.

**Sensitivity of the upside (year-7 / year-8 revenue, $M):**

| Change | Yr 7 | Yr 8 |
|---|---|---|
| Base | 100 | 121 |
| Signings 30% lower (14 a year) | 70 | 85 |
| Reduction 25% lower | 76 | 91 |
| Effective base $60M instead of $80M | 76 | 91 |
| Share 22% instead of 28% | 82 | 100 |
| Sales cycle slips one year | 77 | 100 |
| No tail | 88 | 101 |
| Regrowth 8% a year | 94 | 112 |
| Client attrition 10% a year | 86 | 102 |

Every single adverse change drops year-7 revenue below $100M. The upside needs several things at once, which is why the odds are low.

### 5.4 Odds

Correlated Monte Carlo on my own priors (good outcomes move together; conditional on clearing the first gates): P($100M by year 7 / 8 / 9) = 4% / 7% / 10%; median year-8 revenue about $32M under those priors, which are generous on account size (hence I show the deterministic median above, not the simulated one). With independent priors the same tail is 0.4%. Probability of clearing the first gates: my guess 35-45%. So unconditional chance of $100M within nine years: about 2-4%.

### 5.5 Unit economics by account size (7 years, per client, $M)

Reduction 6% at yr 3 and 7% at yr 5, share 26%, tail 8%, engineering cost 0.35 x annual saving:

| Base | Revenue | Engineering | Ops | CAC | Contribution | % of revenue |
|---|---|---|---|---|---|---|
| $20M | 1.2 | 0.5 | 0.3 | 0.2 | 0.2 | 13% |
| $30M | 1.8 | 0.7 | 0.4 | 0.2 | 0.4 | 21% |
| $45M | ~2.6 | ~1.1 | ~0.45 | ~0.24 | ~0.7 | ~27% |
| $60M | 3.4 | 1.5 | 0.5 | 0.3 | 1.0 | 30% |

At $30M accounts, contribution is about 21%, which barely covers platform, insurance, security and G&A. That is why the account-size floor exists. If engineering cost falls to 0.20 x annual saving, contribution at $30M becomes 39% and at $60M 49%; on the upside path ($80M, 9%/11.5%, 28%, cost 0.30) it is 52%.

Unit payback on our funding (cost ratio / share): cost 0.20 -> 0.8 years at 26%; 0.35 -> 1.3 years; 0.60 -> 2.3 years; 1.00 -> 3.8 years. Anything above about 0.45 x annual saving misses the 18-month hurdle at 30% and goes to co-funding. Low-engineering lines (licence, SaaS, hosting at renewal) run near 0.1; retirements with archive and user migration run near 0.6; the mix drives the blended ratio.

### 5.6 Bottom-up market

- **Reachable payers:** US companies and large PE-owned platforms with at least $40M of fee-eligible external application run spend, excluding the ~50 biggest in-sourcers: about 700 [est, unsourced]. This count is the first thing to verify (two former AMS delivery heads, independent of me). If it is under 500, the upside needs more than 20% share and fails.
- **Spend per payer:** median client about $0.55M of peak annual fees on a $45M base (7-year revenue about $2.5M); upside client about $1.6M of peak annual fees on an $80M effective base (7-year revenue about $8M). Averaged over ramp, tail, decay and attrition, revenue per active client is about $0.4M in the median case and $1.2M in the upside case in year 7.
- **Pool cross-check:** $100M of fees at a 28% share is about $360M a year of verified invoice reductions (before the tail), about 0.9% of the $40B run-related offshore pool [est] and less once licences, hosting and support are included.
- **Valuation caveat:** contingent services revenue is valued low (PRGX: about $195M for about $165M of annualised revenue [checked]). A $100M-revenue year 7 is worth much more only if the ledger earns recurring or software-like revenue.

---

## 6. Evidence base for realization (so nobody thinks 9-11% is proven)

- Health-system CIO panel: 20% target, 5-6% realized; $1M of labor to save $200k of licences [critic].
- BMO Harris: 16 applications in seven years, about $5M a year (vendor-authored) [critic].
- Case studies I found this session (vendor or consultancy marketing, self-reported, not audited) [checked]: a utility with $2M saved in year one from easy wins (SoftwareOne); a healthcare provider retiring 24 of 120 applications with more than $2M hard savings (Concord); a health system with about $1.7M hard savings over 10 years (Highspring); KPMG projecting $7-10M a year for a biotech cutting 20-30% of its portfolio (a projection).
- Read honestly: per large client, $1-5M a year of savings is documented; that fits the median case ($2-3M run-rate on a $45M base) and does not prove the upside (about $9M run-rate on an $80M effective base).

---

## 7. Moat (7 Powers), honest about timing

No power is strong at launch. In the order I think they arrive:

1. **Process power / cost curve (years 1-3).** A retirement pipeline (dependency discovery from usage logs, data extraction and archive validation, test generation, contract-exit checklist, scream-test). Target: engineering cost per dollar saved falls from about 0.6 for archive-heavy retirements to about 0.3 blended, and 0.2 later. A competitor with a higher cost ratio cannot fund the same units at the same share.
2. **Cornered resource: our own outcome statistics (years 2-4).** Which unit types, owner types and contract types actually convert to invoice drops, and which retirements break something. This is an underwriting model of realization risk. It is our data (aggregated, de-identified outcome statistics, defined in the contract as ours), not client data, so no-training and no-derivative clauses do not touch it. Consultants and tool vendors that do not take the risk do not learn it. Needs roughly 100-200 units of history to be informative.
3. **Switching costs (years 3-5).** The ledger becomes the CFO's baseline record for the next vendor renewal and the neutral calculation agent for AI-gainshare clauses.
4. **Cost of capital (years 3-5).** Low dispute rates on audited receivables are the real barrier to entry in an ESCO-style business; this needs a specialty lender and a track record.
5. **Counter-positioning: narrow.** Holds only against AMS vendors on scope removal, and only where we never need their cooperation. It fails against Redress, Flexera, ISG and in-house teams, none of which lose revenue by doing this.

What I withdrew: a Big 4 co-signed protocol as a moat. The protocol will be open (IPMVP-style) and accepted client by client; if a standards body or two advisers adopt it, that is a bonus, not a plan.

---

## 8. Pre-mortem for 2028, and what is fixed now

1. **Owners never release the money; realization stays near 25-30%.** Partly fixable now: owner sign-off before funding, CFO sweep, renewals within nine months first, low-engineering lines first, fee only on invoice drops. Tested by the two-week test and gate G5.
2. **CFOs cap the share near 15-20%, or choose Redress or in-house after year one.** Partly fixable: lever-specific shares, co-funded option, buyout, 7-year tail priced at a benchmark. Not fully fixable. At a 20% cap the median is $13M; at 22% the upside is $82M in year 7.
3. **Sales cycle and diligence eat the runway.** Mitigated by the paid X-ray, dated-event accounts, non-bank sectors first, and the account floor. Rimini needs 6-12 months for a simpler pitch [critic]; I plan for 9-18 months outside event accounts and 4-9 inside them.
4. **A retired application breaks a quarter-end or audit process.** Mitigated by scream-test (read-only isolation for 60-90 days, restorable snapshot kept 12 months), the client's own change approval, a liability cap tied to fees, and a tech E&O policy. Insurance terms are an open gate, not a solved problem.
5. **Vendors retaliate (licence audit, loss of discount tier, minimum commitments).** The X-ray reads exit terms before we propose a unit, and the fee is paid on the net invoice, so losing a tier discount reduces our fee rather than creating a dispute.

---

## 9. Riskiest assumption and the two-week test

**Riskiest assumption:** once a CFO backs it, business owners will release at least half of the identified retirable run spend, so that third-party invoice lines actually fall within 12 months. Everything else (price, share, funding) is downstream of a fee base that exists. Price has precedent (SaaS-buying share models, recovery audit, cloud savings share); realization has contrary evidence (5-6% realized against 20% targeted).

**Cheapest real-world test (14 days, about $0 cash, no system access):**

1. **Days 1-7.** Recruit one insider advisor (ex-AMS delivery head, ITAM or IT-finance lead). Reach out to about 40 people in IT finance, ITAM, vendor management and PE portfolio operations at companies with an estimated $40M or more of external application run spend. Offer: a free "retirable spend" list built from one export they are authorised to share, turned around in 48 hours. Goal: three companies. Only use data the owner is authorised to share, under NDA.
2. **Days 5-10.** From each company's exports (AP spend lines for software, hosting and support with renewal dates; SSO or usage report; application inventory) build a ranked list of at least 15 units of $25k a year or more, each with a renewal date, usage evidence and a named owner. Record identified dollars as a share of the external application run base the company supplied.
3. **Days 8-14.** The company contact (not us) sends each unit's owner a short written notice: "we plan to retire or downsize this on [renewal date] unless you object by [date]". Count responses by dollars: written agree, silent, object. In the same window, show the CFO or Controller the one-page term sheet (share, tail, buyout, sweep) and record four answers: the maximum share they would sign, which budget line pays it, what the alternative would be (Redress, in-house, vendor), and who else must sign. Also ask: "what event would make you sign within 90 days?"

**Pass (all three):**
- M1: identified dollars are at least 6% of the supplied external application run base in at least 2 of 3 companies.
- M2: written agreement on at least 50% of identified dollars and objection on no more than 25%, within 14 days.
- M3: at least 2 of 3 finance contacts state a maximum share of 25% or more on invoice-evidenced lines and name the paying budget.

**Kill:** identified under 4% in two of three; or written agreement under 25% of dollars; or finance caps at 15% or prefers in-house or Redress. **Inconclusive:** fewer than three companies agree to share data in 7 days (that is itself a demand signal; run the fallback).

**Fallback (if no data in 7 days):** 12 structured calls with people who ran decommissioning programs: dollars identified, retired and actually dropped from invoices on their last program. If the median realization is under 30%, kill. Add a count check: ask two former AMS delivery heads for their independent count of US companies with at least $40M of external application run spend and no Citi-scale in-house capability.

**Follow-up, not part of the two weeks:** at each agreed unit's next renewal date, check whether the invoice line fell.

### Later gates (kill, do not shrink)

| Gate | By | Pass |
|---|---|---|
| G2 | Day 60 | At least 2 paid X-rays at $50k or more (paid beats LOI) |
| G3 | Day 120 | One signed program agreement, share 25% or more, fee-eligible base $40M or more, signed by CFO or Controller |
| G4 | Month 6 | Tech E&O quote, $5M or more of limit, no AI exclusion on human-led work |
| G5 | Month 12 | First audited invoice drops, with at least 50% of Wave 1 identified dollars realized |

Miss any two of G2-G5 by month 12 and stop. Do not narrow into a $5M boutique.

---

## 10. Point-by-point answers to the three critiques

### Critique 1 (vendors concede the savings; in-sourcing; contested client-controlled levers; SAP; vendor counter-moves)

- **Vendors concede savings; renegotiation is free.** Conceded for rate. The fee base is now units at invoice price, so rate concessions neither compete with us nor create disputes. UpperEdge-style productivity commitments act on productivity per unit of work; they do not remove licences, hosting or third-party support, which are about half of the application run bill and which the AMS vendor never controls. Fixed-bid contracts are handled by only taking AMS units with a contractual exit price.
- **Citi and in-house.** Treated as evidence that the pool is real and being harvested at the top. The top ~50 are excluded. For the rest, the constraint is change capacity and owner sign-off, so we sell the executed outcome plus a buyout. The CFO's "cost is falling" argument is met by a lower blended share (26% against 30-35%), a 25% rate on wave 3 and later, and the buyout.
- **Contested levers (Redress, Flexera, IBM, LeanIX/Apptio, SoftwareOne, A&M, Tech Mahindra).** Conceded on identification and negotiation. We take a smaller share there and refer or partner. The differentiator is funded execution to an invoice drop, which is not a balance-sheet position alone: it also needs the pipeline cost curve and the outcome statistics. The PE channel is contested by Ode and OpenAI's Deployment Company, but they sell AI deployment and do not reduce legacy run cost; they may add to application sprawl. We use sponsors as one of three trigger channels, not the only one.
- **SAP wedge.** Dropped. The deadline is soft (extended maintenance to 2030), SAP gives the analysis away, and the saving lands in an SI's conversion fee. It stays as a module where the saving is a visible SI statement-of-work reduction.
- **Vendor counter-moves, confidentiality, minimums, gainshare disputes.** Lead levers are on client-controlled invoices and need no vendor cooperation. The X-ray reads contracts for confidentiality limits and exit terms before any unit is proposed. The fee is paid on the net invoice fall, so volume bands and minimums reduce fees rather than start fights. The AMS lever comes late, only with signed scope change orders. The ESCO analogy is used for contract shape only; metered invoices replace metered kilowatt-hours.

### Critique 2 (volume math; sales cycle; in-house; realization; baseline and fee norms)

- **Volume math.** Conceded and reproduced. Fixes: accounts of at least $40M with land-and-expand to about $80M, an evergreen tail (adds about 12%, not a rescue), multi-wave agreements, 18-20 signings a year in the upside case from sponsor, integration-office and adviser channels, and the median explicitly modelled at 9 a year. The upside therefore needs about 13-16% of ~700 reachable payers, under the 20% "heroic" line only if the 700 count survives checking.
- **Sales cycle, CAC and cash.** Paid X-ray puts cash in month 2-4; the first success-fee dollar arrives month 9-15 because we sequence by renewal date. CAC per won client is roughly $0.15M + 0.2% of base in my model, mostly offset by X-ray margin. Gross margin at $30M accounts is thin (21% contribution), so the floor is $40M.
- **In-house and "cheap engineering".** Excluded top ~50; the guarantee and sweep are the product; engineering is funded only for units clearing an 18-month payback.
- **Realization (5-6% of 20%).** This is now the named riskiest assumption and the object of the two-week test. Design response: owner sign-off before funding, CFO sweep, renewal-date sequencing, low-engineering lines first.
- **Gainshare baseline fights; fee norms (30-40% of first-year benefit for advice).** The invoice rule replaces the contested baseline. Our total fee is about 1.3 years of saving, but we fund and execute; advice-only norms do not apply. The share is lower than v1 and lever-specific.
- **SEC contingent-fee independence.** The Big 4 co-sign is withdrawn.

### Critique 3 (pricing and timing; capital; liability; SAP and why-now; moat)

- **Pool already harvested at renewal.** The renewal wave takes rate; we take units. Our base moves with rate but does not disappear. The 2.5% implied fee for the renegotiation case is a price for advice, not for execution.
- **Capital flips sign.** Conceded at $30M accounts and 6%. Changes: account floor, hurdle-gated funding, co-funded option, lead with low-engineering lines. Model peak cash need about $28M (median) and $32M (upside) before working capital; I plan for $45-60M.
- **Deadbands and receivable character.** Fee is paid on actual invoice falls, so deadbands self-correct. Variable-consideration revenue timing is real: recognise as constrained, plan cash for it.
- **Liability, insurance, SOC 1.** No autonomous production writes. Human-led, AI-assisted; changes run through the client's change process and ITGC; scream-test; snapshot retention; liability cap; E&O quote is gate G4; SOC 2 early; non-bank first. SOX-scoped systems are touched only through the client's controls. I could not confirm that tech E&O will cover this work: untested.
- **SAP wedge and why-now.** SAP dropped. Why-now rebuilt on cost-of-execution, CFO offsets for AI spend (HFS/UST: self-funding standard at 42% of surveyed firms, vendor co-produced [critic]; Gartner: 75% of CFOs expect bigger tech budgets, which cuts both ways [critic]), ISG's finding that AI savings cannot be verified [critic], and dated events: M&A integration windows, sponsor exits, platform end-of-support. Honest: the why-now is moderate, not strong.
- **Moat contradicted.** Rebuilt in section 7: cost curve, our own outcome statistics, ledger switching cost, cost of capital. Counter-positioning narrowed. Advisers adding independence is a real risk; they do not fund or execute.

---

## 11. What would change my mind

**Toward alive and bigger:**
- Three real accounts with at least 6% identified and at least 50% owner agreement (the test above).
- A paid X-ray from a company that named Redress or in-house as the alternative and chose us.
- An independent count of 700 or more reachable payers.
- A lender term sheet advancing against signed savings receivables at 12% or less.
- A tech E&O quote without an AI exclusion on human-led work.
- Any adviser or sponsor adopting the ledger as the calculation agent for AI-gainshare clauses.

**Toward dead:**
- Identified under 4%, owner agreement under 25%, or finance caps at 15% (two-week test).
- Fewer than 500 reachable payers.
- Two carriers or two buyers' risk teams refuse the write-access model.
- Any two of G2-G5 missed by month 12.

---

## Sources

Verified this session (search-result level, not full fetches):
- SQL Server 2016 end of support and ESU pricing: https://www.techielass.com/sql-server-2016-end-of-support-esu-dates-pricing-and-what-to-do-next/ ; Windows Server 2016 end of support: https://www.anglepoint.com/blog/articles/windows-server-2016-end-of-support/ (pricing is third-party, not a Microsoft list)
- SaaS-buying savings-share norm (subscription $30-250k plus 15-30% of validated savings; vendor-authored): https://vendorbenchmark.com/guides/benchmarking-software-pricing-guide
- PRGX: $195M Ardian deal https://www.sheppard.com/news-and-events/press-releases/sheppard-advises-ardian-in-acquistion-of-prgx-for-195-million ; Q3 2020 revenue $41.5M from a news summary in the search results; contingent-fee model per its filings
- Decommissioning case studies (marketing, self-reported): https://www.softwareone.com/ru-kz/case-studies/global/energy/utility-company-gains-control-of-software-assets-using-apm ; https://concordusa.com/casestudy/data-solutions-analytics/dropping-dead-weight ; https://www.highspring.com/wp-content/uploads/sites/2/2025/07/Success-Story-A-SE-based-academic-health-system.pdf ; https://assets.kpmg.com/content/dam/kpmg/pdf/2016/04/why-paying-retired-applications.pdf ; merger-integration decommissioning as a services offer: https://rgp.com/work/merger-integration-application-decommissioning-strategy-mgmt/

From the critics' packets and the dossier (not re-fetched by me): Citi insourcing (theasianbanker, 13 Oct 2026); Rimini Street 10-K and release; Redress Compliance fee page; ISG Q2 2026 recap; UpperEdge case study; HFS/UST survey; health-system CIO panel (healthsystemcio.com); SEC Rule 2-01(c)(5) and EY/Cintas; ISO generative-AI exclusion; Pinsent Masons on AI gainshare; Computerworld on gain-sharing; Somerset/Southwest One. See the three critique evidence lists and `/Users/asherperemel/projects/business-idea-search-work/biz/round2/deep/C13_dossier.md`.
