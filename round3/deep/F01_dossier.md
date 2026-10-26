# F01 dossier: AV control-code copilot / verification layer (Q-SYS, Extron, Crestron)

Researched 25 Oct 2026. About 60 searches and fetches. "Inference" marks my reasoning; everything else is cited. Unverified items are listed under Gaps.

## Bottom line

**Verdict: weak, about 3/10. Do not make this the primary bet.** The pain is real and AV programmers already use AI. But the verify loop the idea sells already exists as free open-source code, built in the last four weeks. The Extron and Crestron packs, which are the only unserved part, sit behind certification and license walls. The AV-only ceiling needs 14-28% of all programmers to reach $10M a year, and QSC and Crestron are moving in. The gate's kill test is right. I would add one more: if three of ten programmers say a free tool already does this, stop.

## 1. Competitors and free substitutes

**Q-SYS (the proposed beachhead) is already crowded with free tools.**
- **QPDK** is an Apache-2.0 kit to "check and test Q-SYS plugins without Q-SYS Designer, a Core or hardware." It has a Lua 5.3 mock runtime (Controls, Timer, TcpSocket, Ssh), a validator, a QRC mock server and a GitHub Action. It says it "was built to keep AI-written plugins honest." It was created 29 Sep 2026 and is alpha with 1 star. [repo](https://github.com/NerdBase-by-Stark/qpdk)
- **qsys-designer-mcp** is MIT. It builds `.qsys` files headlessly, runs them in Designer's emulator and tests logic over QRC. It was created 14 Oct 2026 and has 8 stars. It needs Windows, uses undocumented Designer internals, and its author flags EULA risk. [repo](https://github.com/nerif-tafu/qsys-designer-mcp)
- **qsys-mcp (reowens)** is MIT and reads and writes controls on a Core or an Emulate session over QRC. It does not write Lua. The gate's `q-sys-mcp` URL now 404s because the project was renamed. [listing](https://glama.ai/mcp/servers/reowens/qsys-mcp)
- **Integrators publish free AI-built Q-SYS code.** levo AVL (Karlsruhe) ships MIT plugins "developed with Claude, tested on real Q-SYS hardware." [repo](https://github.com/levoavl/qsys-plugins) M3 Technology Group ships an MCP for Q-SYS UI work. [listing](https://glama.ai/mcp/servers/soche9aw5q)
- **Q-SYS tooling itself.** Designer's VS Code editor offers IntelliSense and parse-error highlighting. [help](https://help.qsys.com/Content/Control_Scripting/VSCode_Editor.htm) Community LuaLS definitions exist. [repo](https://github.com/Timmins-Creative-Technology/QSYS-Lua-Library-Definitions)
- Inference: four independent builders reached "agent plus emulator plus checks" within weeks. That confirms the need and removes any moat. A mock built from QSC's public Lua docs can be rebuilt by anyone in a weekend.

**Crestron and Extron are thinner but not empty.**
- **CrestronMCP** (Solution AV) is a free MIT client. The processor needs a licence at AUD $249 (three 1-week trials). It controls a running 4-Series system and does not generate code. [listing](https://glama.ai/mcp/servers/SolutionAVAutomation/mcp-for-crestron-client)
- **AV-MCP Automator** generates Crestron Construct UI files. It looks like a one-person Peruvian project. [listing](https://glama.ai/mcp/servers/e6bp3adk1o)
- Norgate AV, an integrator, open-sources CLIs that automate SIMPL Windows and SIMPL+ compiling. [smpc](https://github.com/Norgate-AV/smpc)
- r/crestron anecdote: a commenter said an acquaintance passed a Crestron certification exam with AI doing an estimated "60-70%" of the work (secondhand). Another said generated SIMPL+ often came out in a different language. [thread](https://reddit.sudovanilla.org/r/crestron/comments/1jtv7fr/gold_exam) (via a search summary; I could not open the page).
- I found no Extron-specific AI assistant (searches returned none).

**Vendors are moving in.**
- Crestron's Configure Pro AI builds projects from prompts or spreadsheets. It targets Crestron Home dealers, is slated for early 2027, and proposes changes for human approval. It is residential, not SIMPL/C# commercial code. [CE Pro](https://www.cepro.com/news/ai-on-the-cedia-expo-floor-what-the-smart-home-industry-is-actually-building/628680/) Savant Blueprint and Josh.ai Pro Studio do similar residential jobs (same article).
- QSC's RoomSuite configures standardized rooms in a browser with "no Q-SYS Designer programming" and clones them across sites via Reflect. [help](https://help.qsys.com/Content/RoomSuite/RoomSuite_Overview.htm) That is a direct vendor answer to the "hundreds of near-identical rooms" case in the sharpened pitch.
- QSC removed licence fees for scripting, plugins and UCI deployment in Designer v10 (2025). [rAVe](https://ravepubs.com/qsys-full-stack-av-platform-expansion-2025/) I found no official QSC MCP or AI scripting tool.
- Precedent: Codesys is adding MCP so LLMs can read, generate and test PLC code. [source](https://www.computer-automation.de/engineering-en/imagegallery/product-of-the-year-2026-industrial-ai-vote-for-your-favorite-industrial-ai-product-at-sps-2026/products-of-the-year---industrial-ai---the-nominees-5.htm) Inference: platform owners ship this layer themselves.

**In-house teams and humans are the real alternatives.**
- AVI-SPL's VP of Programming spoke at InfoComm 2026 on AI in source code, secret scanning, SAST and SBOMs. [session](https://www.infocommshow.org/2026-sessions/ai-and-security-in-av-source-code) M3's R&D lead showed a Cursor, MCP and docs-grounded workflow. [session](https://www.infocommshow.org/2026-sessions/ai-driven-av-programming-workflows) CTI's Dave Hatz (VP of Machine Intelligence) describes using AI on API docs and legacy code, and the panel names ChatGPT, Claude and Copilot. PepperDash makes GitHub Copilot standard for junior developers. [AVNation](https://www.avnation.tv/?p=95506)
- General agents cost $20 (Cursor Pro) to $200 (Cursor Ultra, Claude Max 20x) a month. [Cursor](https://www.jetadmin.io/blog/untitled-31/) [Claude](https://www.morphllm.com/claude-code-pricing)
- Outsourcers: Avendor sells fixed-scope programming on Crestron, Q-SYS, Extron, Kramer and AMX. It already mentions "simulation and logic validation" and does not mention AI. [page](https://www.avendor.com/pages/av-programming) ControlWorks has served integrators since 1998. [page](https://www.controlworks.com/av-programming-services/)
- Brand-neutral answer engine: none found. AVPro's Tech Sage is partner-only and single-brand. [rAVe](https://www.ravepubs.com/avpro-global-launches-tech-sage-ai-powered-platform-revolutionizes-technical-support-for-av-integrators/) madAssist is manufacturer-controlled. [RS](https://www.residentialsystems.com/news/madvr-labs-launches-madassist-ai-product-expert)

**Adjacent funding (the "big path" claim).** Copia raised $26M on 16 Jun 2026 ($55M total), but it is code management and backup, not code generation. [Pulse 2.0](https://pulse2.com/copia-automation-raises-26-million-to-expand-industrial-code-management-and-recovery-platform/) PLCs.ai and PLC Copilot took seed rounds in Jan-Feb 2026. [Caplight](https://www.caplight.com/company/plcs) PLC Copilot lists $99-499 a month with 0 Capterra reviews. [Software Advice](https://www.softwareadvice.com/product/552644-PLC-Copilot/)

## 2. Prices and willingness to pay

- **Closest AV price anchor.** XTEN-AV, which includes the XAVIA AI agent, lists $104.25-$169 per user per month. It covers design, drawings and proposals, not control code. [Capterra](https://www.capterra.com/p/10008832/XTEN-AV/pricing/)
- **Programmer cost.** ZipRecruiter shows a $82,234 average for Crestron programmers (about $39.54 an hour), $107,000 at the 75th percentile and $114,323 for certified programmers. [ZipRecruiter](https://www.ziprecruiter.com/Salaries/Crestron-Programmer-Salary) Enterprise postings run $105-130k. [Insight Global](https://jobs.insightglobal.com/find_a_job/massachusetts/job-552439/) Freelance asking rates are $35-50 an hour. [Freelancer](https://www.freelancer.de/freelancers/skills/crestron)
- **Labor in the job.** A standard single room takes about 6-10 programming hours. A multi-room job with third-party integrations takes 30-80 hours or more. [Zigaflow](https://www.zigaflow.com/resources/guides/how-to-quote-an-av-system-installation) Programming is "the one most likely to run over." It can be 20-30% of labor on a six-room job, and each client revision adds 4-8 hours. [Zigaflow](https://zigaflow.com/insights/where-av-system-integrators-lose-margin) (a vendor blog). 72% of integrators call talent shortage their biggest challenge (Jan 2026 piece, via search summary). [Commercial Integrator](https://www.commercialintegrator.com/?p=145734)
- Inference: at roughly $53 an hour loaded ($110k), a $300 seat pays back at about 6 saved hours a month. Value is plausible. The binding constraint is price versus a $20-200 general agent plus free QPDK-style tools, not payback.
- I found no evidence that anyone pays $300 a month for a Q-SYS or Crestron code tool. Q-SYS scripting licences used to be perpetual one-time purchases (a reseller summary showed $360 for a Nano). [reseller](https://creationnetworks.net/products/qsc-q-sys-scripting-engine-software-perpetual-slqud-8n-p)
- **Per-room fee ($100-300).** Inference: this is 10-30% of the single-room programming cost, for a check a free tool performs. It is not credible.
- **Manufacturer-funded answer engine.** I found no spending data. GEO tools cost $20-189 a month. [SE Ranking](https://visible.seranking.com/blog/best-generative-engine-optimization-tools/) Crestron Masters treats AI-search visibility as a marketing topic. [Crestron](https://www.crestron.com/News/Blog/May-2026/Crestron-Masters-2026-Built-on-Experience)

## 3. Market size and unit economics

- **Programmer pool.** Crestron says "over 4,000 certified designers and programmers worldwide" (Jan 2025). [Crestron](https://www.crestron.com/News/Blog/January-2025/Crestron-Masters-2025-A-Preview) QSC claimed "over 3,500 certified Q-SYS programmers" in 2016. [QSC](https://www.qsys.com/resources/news/detail/qsc-hosted-first-q-sys-level-one-training-in-kuwait) I found no Extron count.
- **Pool estimate.** Inference: with overlap and uncertified staff, 10-20k working control programmers is a fair range. The gate's 15-25k is unsourced and sits at the top.
- **Bottom-up math** (inference): at $300 a month a seat is $3,600 a year. $1M ARR needs about 280 seats, or 1.4-2.8% of the pool. $10M ARR needs about 2,800 seats, or 14-28%. At $500 a month it needs 8-17%. Round 2's rule calls over 20% "heroic."
- **Expansion adds no pool.** Home automation and building automation are dealer- or vendor-closed. Savant and Josh.ai build AI in-house. PLCs are funded and being absorbed by Codesys.
- **Cost to first revenue.** Tooling is cheap: QPDK is free, Designer needs only a QSC account (the gate says free; I could not confirm a price), and a Windows VM covers the Mac gap. Real cost is founder hours. Inference: heavy agent loops can cost a vendor close to the $100-200 a month a user pays Anthropic, so margin on a $300 seat is thin if usage is included.

## 4. Where the first customers gather

- **r/CommercialAV** has more than 20,000 members. [Commercial Integrator](https://www.commercialintegrator.com/?p=135420) GummySearch showed 29k. [GummySearch](https://gummysearch.com/r/CommercialAV) I could not confirm the r/crestron count.
- **AVNation's "A State of Control"** is the programmer podcast. Ep. 128 (2 May 2025) covers AI. Ep. 130 asks who owns the code. The latest episodes are history-themed. [series](https://www.avnation.tv/series/a-state-of-control/)
- **Crestron Masters**, 10-11 Nov 2026, San Antonio, 16 days away. [Crestron](https://www.crestron.com/News/Blog/May-2026/Crestron-Masters-2026-Built-on-Experience) Attendance was about 1,000 in 2024 and about 400 expected in Madrid in 2025; the 2026 blog says "thousands" (conflicting).
- **QSC Communities for Developers** (2021) has a code exchange and forums. [launch](https://www.qsys.com/resources/news/detail/qsc-communities-for-developers-goes-live/) The community plugin guide has 82 stars. [repo](https://github.com/q-sys-community/q-sys-plugin-guide) Q-SYS held regional Developer Summits in autumn 2025. [UK](https://www.qsys.com/campaigns/developer-summit-uk)
- **Mentor leverage is softer than the idea assumes.** AVI-SPL formed in 2008 from the merger of AVI (founded by Schaffel in 1979) and SPL. 26North completed a controlling-stake acquisition in Aug 2025. [Pulse 2.0](https://pulse2.com/26north-acquisition-of-avi-spl-completed/) [Wikipedia](https://en.wikipedia.org/wiki/AVI-SPL) AVI-SPL runs its own programming and security org, so it is a poor pilot customer. Intros to small-integrator owners and freelancers are the realistic ask. Schaffel's current AV role is unconfirmed.

## 5. Legal, age and platform walls

- **Age:** no licence is needed to write control software. Inference: an 18-year-old can contract and take payment. Not a blocker.
- **QSC EULA** (the 2018 generic text): use is "solely for your internal use"; "any other use including for third parties is expressly prohibited"; no "timesharing or bureau use"; no reverse engineering; "structure, sequence and organization" are trade secrets. [EULA](https://licensing.qsc.com/assets/img/qsc-software-eula-doc/Q-SYS%20EULA%20Rev%20NR.pdf) Inference: a hosted service that runs Designer Emulate for customers likely breaches this. A faithful simulator must come only from QSC's public docs. A user-run local tool is safer. The Designer-specific EULA is unchecked.
- **Manuals:** QSC's help site is "© QSC, LLC. All rights reserved." [legal](https://help.qsys.com/q-sys_8.4/Content/Legal.htm) Inference: ingesting manuals needs licences, and sponsored placements in a "neutral" engine conflict with trust.
- **Extron:** the EAP "enables access to all features of Global Scripter" and the ControlScript library. It is a four-day course plus a proctored exam, with 2-5 years of experience recommended (2016 brochure). [brochure](https://media.extron.com/public/download/files/brochure/eap_certification_B.pdf) The gate cited about 24 hours; Extron's training library lists that figure for a newer VS Code course. The price is not public.
- **Crestron:** the SDK is licensed under a "Software Development Tools License Agreement," and the library text says you must be "authorized by Crestron under a separate written agreement." [NuGet license](https://feed.nuget.org/packages/Crestron.SimplSharp.SDK.Library/2.22.15/License) Running programs without hardware needs a licensed VC-4. [Crestron](https://www.crestron.com/Products/Catalog/Control-and-Management/Control-System/Licenses/VC-4-ROOM)
- **Mac:** Designer is Windows-only. QSC tested Parallels on an M3 with Windows 11 and recommends 16 GB of RAM for complex designs. [QSC](https://help.qsys.com/Content/Q-SYS_Compatibility/Software_Requirements.htm)
- **Client IP and security:** AVIXA and NSCA tell integrators to avoid sending client data to AI vendors. [AVIXA](https://www.avixa.org/explore/articles/ai-guide-for-av-integrators) [NSCA](https://www.nsca.org/nsca-news/ai-for-integrators-protect-company-employees-clients/)
- Inference: the open-source builders avoided the Extron and Crestron packs, and the gated tools are why. The one unserved space is walled, and he would need certification to enter it.

## 6. Why now

The case is that agents now handle niche languages given docs and a test loop (the Reddit anecdote, AVNation ep. 128, the InfoComm sessions), and that QSC dropped scripting fees. The same facts show the window is already used. Free tools and in-house workflows exist. Crestron's AI lands early 2027. QSC's own answer for standardized rooms is no-code.

## 7. Scorecard and cheapest test

1. First payer in 60-90 days: **uncertain**. Five seats at $300 is plausible only if programmers see value beyond free tools.
2. Plausible buyers: **yes**. Prosumer and small-shop programmers.
3. Licence wall: **partial**. Q-SYS is open. Extron and Crestron are walled.
4. Uses his edges: **yes** on AI-speed building. The mentor adds less than assumed.
5. Path to $10M+: **no** for AV-only (14-28% share), and the extension markets are crowded or closed.
6. Not crowded: **no** for Q-SYS (four free projects); **yes** for Extron and Crestron because they are walled.

**Test (2 weeks, about $0):** try QPDK and qsys-designer-mcp with Claude Code. Post a no-pitch "I benchmarked AI-written Q-SYS plugins" thread on r/CommercialAV and in the QSC developer community. Ask 10 programmers: Do you use AI on jobs today? What did you pay? What broke? Would you pay more than $100 a month for anything in addition? Kill if fewer than 3 of 10 would, or if the free tools answer the pain.

Inference: if he stays in AV at all, the less-bad wedge is a fixed-price programming service delivered with AI leverage. It still tops out well below $10M.

## Gaps

- Extron EAP price and whether ControlScript tools are free to non-EAP users: Extron pages blocked fetch.
- Whether any Crestron emulator allows hardware-free tests without VC-4.
- Any evidence of paying customers for AV code tools at $300 a month.
- Headcount of control programmers: the 4,000 and 3,500 figures are vendor claims, one is a decade old.
- A LinkedIn snippet describing an agent that built and loaded a Crestron program (Hong Kong profile) could not be opened; treat as unverified. [profile](https://hk.linkedin.com/in/jeremygaffud)
- The $100-175 an hour programmer rate in the idea: not found in any source I opened.
- r/crestron size (gate says about 11k): unverified.
- Designer-specific EULA terms; QSC Technology Partner Program application terms (2022 sources only). [QSC blog](https://blogs.qsc.com/systems/2022/06/16/why-join-the-q-sys-technology-partner-program/)
- The mentor's current role at AVI-SPL and his network among programmers.
