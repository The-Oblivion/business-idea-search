# F01 refined: AV control-code verification layer (Q-SYS, Extron, Crestron)

Refined 25 Oct 2026 after two fatal critiques. I re-checked the load-bearing claims against primary pages and tried four rescue reframings.

## Verdict: DEAD (alive = false)

The idea fails two ways, and either one is enough.

1. **Arithmetic, before any competition.** The pool is about 10-20k control programmers (vendor claims: ~4,000 Crestron certified, ~3,500 Q-SYS certified, one of them a decade old).
   - At the pitched $149 a seat, $10M a year needs about 5,600 seats. That is 28-56% of the pool.
   - At the price anchors the market actually shows, even 100% of the pool does not reach $10M:

     | Anchor | Seat per year | 10k pool at 100% | 20k pool at 100% |
     |---|---|---|---|
     | AV-Command Pro, $5.99 a month | $72 | $0.7M | $1.4M |
     | Wokwi top tier, $25 a month | $300 | $3.0M | $6.0M |

   - The $10M test fails on arithmetic alone. This is the single most important finding, and neither critic put it this way.
2. **The free half is taken and the paid half is walled.** Both critics are right on the facts, and I confirmed them myself.

I will not shrink this into a fixed-price programming service to keep it alive. That is the side hustle the brief rules out. It tops out at low single-digit millions of dollars, needs headcount and certifications he does not have, and sells to buyers who will not take him seriously.

## What I verified myself (primary pages, 25 Oct 2026)

| Claim | Result |
|---|---|
| QPDK is a free Q-SYS plugin test kit | **Confirmed.** MIT or Apache-2.0, 49 commits, alpha, 1 star. It ships a validator, a Lua 5.3 mock runtime, pytest support, a QRC mock server, a GitHub Action and runs QSC's own evaluator. Component, NamedControl and HttpClient are still stubs, and binary protocols fail. No Crestron or Extron roadmap. [repo](https://github.com/NerdBase-by-Stark/qpdk) |
| Qanvas (only critic 1 found it) | **Confirmed.** Free VS Code extension. Its Test mode runs plugin Lua against simulated devices, records sessions into tests, and exposes an MCP for Claude Code, Cursor and Copilot. 5 stars, 6 commits. [repo](https://github.com/1o1tm/Qanvas) |
| av-module-maker | **Confirmed.** MIT, 10 stars, 62 commits. Q-SYS, SIMPL+ and SIMPL# are ready with compile verification. SIMPL# Pro is in progress and Extron Global Scripter is planned. [repo](https://github.com/shorty456132/av-module-maker) |
| Emulate is the official free simulator | **Confirmed, with a real gap.** It runs control scripts and UCIs on a PC. It does not emulate DSP, audio, hardware data or serial connections. [help](https://help.qsys.com/Content/Q-SYS_Designer/003_Emulate_Mode.htm) |
| Extron access is gated | **Still gated.** Every source I found says Global Scripter and ControlScript are for certified Extron Authorized Programmers. The sources date from 2015-2018, and I found no 2026 evidence that this changed. [search](https://www.ravepubs.com/extron-now-custom-control-market-debut-global-scripter-using-python/) |
| Paid, third-party plugin development exists | **Confirmed, and it is already organised.** QSC runs a Developer Partner program (Control Concepts, The Farm and Forward Thinking Designs are named members) that builds plugins for manufacturers. ControlWorks builds white-label Crestron drivers for manufacturers. No prices are published. [QSC partner coverage](https://www.ravepubs.com/control-concepts-joins-q-sys-developer-partner-program/) [The Farm](https://www.avnation.tv/2023/11/29/the-farm-launches-comprehensive-program-for-q-sys-plugin-development/) [ControlWorks](https://www.controlworks.com/crestron-drivers/) |

I took the critics' other facts (PepperDash plan, BVFactory, Wokwi and AV-Command pricing, ZipRecruiter wages, Crestron SDK licence text) as stated. Both critics fetched them independently and the dossier agrees.

## The strongest honest version (and why it still fails)

**Local-first AV test bench.** Nothing leaves the programmer's machine, which answers the AVIXA and NSCA rules against sending client data to AI vendors.
- It replays captured real-device serial and IP traces against AI-written control code.
- It starts on Q-SYS. Crestron and Extron follow later through a bring-your-own-SDK harness.
- It says "checks", never "proof".
- The product is a library of real-device behaviour traces that integrators contribute.

This targets the one gap the free tools leave open. Manuals diverge from firmware: a Canon projector update changed the default stop bit, Epson returns state-dependent ERR, and a Sony projector needs two presses to power off. Emulate cannot run serial at all.

It fails on three counts:
- Capturing real traces needs a hardware and firmware lab, which is tens of thousands of dollars, over the budget cap.
- A trace library sold to 10-20k programmers at the anchored $6-25 a month is a $1-6M ceiling.
- Even a trace library can be copied by contributors, and the free tools are being built in weeks.

## Rescue attempts, all rejected

| Reframing | Why it fails |
|---|---|
| **Manufacturers pay**, because they have a budget line and need Q-SYS, Crestron and Extron modules for each product | Already served. The QSC Developer Partner program is formal. Control Concepts, The Farm, Forward Thinking Designs and ControlWorks sell exactly this, quote-based and certified. Every manufacturer engineer can also run Claude Code. Crestron and Extron authorisation is still required. An unlicensed 18-year-old selling cold to manufacturers is the enterprise-buyer problem. No evidence of a $10M+ pool. |
| **Device-behaviour ground-truth library** | See above. The real gap, but a lab-capital business with a small, price-anchored payer pool. |
| **Expand to building, industrial or home** | Copia has raised $26M ($55M total). PLCs.ai and PLC Copilot took seed rounds. Codesys is adding its own MCP. Savant and Josh.ai build in-house. Crestron Home is dealer-only. Nothing there is open to him. |
| **Fixed-price AI-leveraged programming service** | The only real cash path. Ceiling is low single-digit millions of dollars, it needs headcount and certifications, and it is exactly the shrink the brief forbids. |

## How each critique is answered

**Critique 1 (market and competition)**

| Objection | Answer |
|---|---|
| Free half already taken (QPDK, qsys-designer-mcp, Qanvas, qsys-tools, av-module-maker) | **Conceded.** All confirmed. A free open-core pack would be a sixth free entrant with nothing to sell. |
| Emulate is already the faithful free simulator | **Conceded on the core.** The one real gap is serial, hardware and DSP behaviour. Free builders are closing the mock side in weeks, and the remainder needs a hardware lab. |
| Extron and Crestron packs are not empty | **Conceded.** av-module-maker already covers Crestron with compile checks and lists Extron as planned. PepperDash has a draft plan for hardware-free tests. |
| Price anchors are 5-20x lower | **Conceded, and it kills the idea.** See the table above. At market anchors, $10M exceeds 100% of the pool. |
| Vendors are removing the programming | **Conceded.** RoomSuite plus Reflect, no scripting licence fees since v10, and Configure Pro AI (early 2027, residential). QSC is also formalising its third-party supply side. |
| "Prove it works" overclaims | **Conceded.** Emulate documents what it cannot do. The honest claim is "checks", and per-verified-room pricing invites liability. |
| Paid parts are walled | **Conceded.** Crestron SDK needs a separate written agreement, the QSC EULA says internal use only, Extron is EAP-gated. |
| Willingness to pay is unproven | **Conceded.** The dossier, both critics and my searches found no one paying $99 or more a month for AV code tooling. |
| No moat, no big path | **Conceded.** |

**Critique 2 (founder fit, legal, execution)**

| Objection | Answer |
|---|---|
| Legal wall sits where the money is | **Conceded.** The only clean build is Q-SYS from public docs, which is the free tier. |
| Faithful mock is the hardest and most dangerous promise | **Conceded.** |
| Paid layer already occupied | **Conceded.** |
| Technology Partner program is not a channel | **Conceded and sharpened.** It serves vendors. The developer-partner tier is for plugin shops, who are competitors, not channels. |
| No credibility with certification-culture buyers | **Conceded.** His real edge, shipping fast, is not the scarce input here. Trust and hardware fidelity are. |
| Day-30 test cannot run on real jobs | **Partly accepted.** A no-client-data benchmark on public docs can run. A real-job pilot cannot. Skip Crestron Masters (10-12 Nov, a school week, a four-figure cost). |
| Pricing does not survive his own anchors | **Conceded.** |
| Maintenance treadmill for a solo, part-time founder who leaves in about nine months | **Conceded.** |

## What to do with the lessons

- **Transferable lesson for the other contenders:** "a free tool that does the verify loop already exists" is the first thing to search, and the payer's real alternatives are a general agent at $20-200 a month plus free GitHub tools. Run that check on every finalist before building anything.
- **Optional, near-zero cost:** if he wants a falsification check or a portfolio piece (useful for engineering applications), run the benchmark thread below. Cap it at about 12 hours and do not let it turn into a build.

### Falsification sprint (30 days, about 12 hours total, about $0 to $300)

| Days | Action | Measurable output |
|---|---|---|
| 1-4 | Install QPDK, Qanvas and av-module-maker. Have Claude Code write 5 real Q-SYS plugins from public docs. Run each through the free checks, Emulate and (via a Windows VM) Designer. | A table of what the free stack catches and misses. Count of defects found only on a real device or only in Emulate. |
| 5-8 | Publish the benchmark as a no-pitch thread on r/CommercialAV and in the Q-SYS developer community. Add a 4-question survey: Do you use AI on jobs today? What did it cost? What broke? Would you pay more than $20 a month for anything extra? | Thread posted. 25 or more survey replies, or 10 or more conversations. |
| 9-14 | Run 10 short calls with programmers from the replies and from AVNation listeners. | 10 completed calls with notes. |
| Day 14 | Decision gate. Kill if 3 or more of 10 already use QPDK, Qanvas, av-module-maker or Emulate for this, or fewer than 3 of 10 would pay more than $20 a month. | Written yes or no. |
| 15-30 | If killed, stop. Move the hours to the next contender. If it passes, rerun the unit economics at the price the survey actually supports before writing any product code. | One-page revised arithmetic. |

## Numbers

| Field | Value |
|---|---|
| Cost to first revenue | About $300 (Windows licence or VM, domain, agent usage) |
| Weeks to first revenue | About 10, and only through a fixed-price programming gig, not the product |
| Median-case annual revenue | About $0.02M |
| Upside-case annual revenue | About $1.5M (programming service, no certifications held) |
| Path to $10M+ a year | None credible |

## Riskiest assumption

That a working AV programmer will pay more than $100 a month, or a room fee, for something that free tools, Emulate and a general agent do not already do. No evidence of anyone doing so was found by the dossier, either critic, or me.
