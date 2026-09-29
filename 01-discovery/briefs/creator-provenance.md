# Briefing: Creator economy and media after the AI flood (provenance, authenticity, human-made)
Date: 2026-09-28. Scout: creator-provenance.

**Method caveat.** The WebSearch budget (200/200) was already spent, so 0 of my searches ran. Everything below comes from about 40 direct WebFetch pulls of TechCrunch tag pages and articles, Wikipedia, Deezer, C2PA and artificialintelligenceact.eu. Fetch summaries were produced by a small model. Figures marked (1-src) rest on one source, so verify before betting on them. Reddit and The Verge were blocked, so practitioner-forum evidence is thin. Where I infer rather than cite, I say so.

## 1. Biggest shifts (last 12-18 months)
- **Music supply glut.** Deezer's share of daily uploads that are fully AI: about 10k tracks/day (Jan 2025), 18% (Apr 2025), about 33% (Nov 2025), 44% (Apr 2026, about 75k/day), **over 50% (Jul 21, 2026)**. Sources: [Deezer newsroom](https://newsroom-deezer.com/), [Wikipedia: Deezer](https://en.wikipedia.org/wiki/Deezer), [TechCrunch tag](https://techcrunch.com/tag/deezer/).
- **Platforms moved from tolerating slop to policing it in about 6 months.**
  - Bandcamp banned AI music outright on Jan 14, 2026 ([TC](https://techcrunch.com/tag/ai-music/)).
  - Spotify launched Artist Profile Protection, where artists approve releases before they hit their page (beta, Mar 24, 2026): [TC](https://techcrunch.com/2026/03/24/spotify-tests-new-tool-to-stop-ai-slop-from-being-attributed-to-real-artists/).
  - Spotify launched verified-artist badges (Apr 30) ([TC](https://techcrunch.com/2026/04/30/spotify-introduces-verified-artist-badges-to-help-distinguish-humans-from-ai/)) and "AI Persona" labels that exclude those profiles from recommendations by default (Aug 11): [TC](https://techcrunch.com/2026/08/11/spotify-will-label-ai-persona-profiles-and-exclude-their-music-from-recommendations/).
  - TIDAL demonetizes fully AI tracks and adds an "AI" badge from Jul 15, 2026: [TC](https://techcrunch.com/2026/06/29/tidal-cracks-down-on-ai-music-by-cutting-off-monetization/).
  - YouTube auto-labels photorealistic AI (May 27), but "labels won't impact recommendation or monetization": [TC](https://techcrunch.com/2026/05/27/youtube-will-now-automatically-label-ai-videos/). On Jul 16 it clarified demonetization for generic or repetitive content and for AI personas on finance, legal and health topics: [TC](https://techcrunch.com/2026/07/20/youtube-clarifies-policies-around-ai-slop-and-upsetting-videos/).
  - Snapchat stopped recommending fully AI Spotlight content (Jul 31): [TC](https://techcrunch.com/2026/07/31/snapchat-no-longer-rewards-fully-ai-generated-spotlight-content/).
  - LinkedIn added a "seems like AI slop" report button and says it blocks hundreds of thousands of automated comments daily (Jul 30): [TC](https://techcrunch.com/2026/07/30/linkedin-adds-a-button-to-report-ai-generated-slop/).
  - Substack embedded Pangram so any reader can scan any post, note or comment over 100 characters for a "% human vs AI" estimate (Jul 22): [TC](https://techcrunch.com/2026/07/22/substacks-new-tool-tells-you-whos-been-writing-their-newsletters-with-ai/).
- **Regulation.**
  - EU AI Act Art. 50 applies **Aug 2, 2026**. Providers must mark synthetic audio, image, video and text in a machine-readable, detectable way, and deployers must disclose deepfakes: [Art. 50](https://artificialintelligenceact.eu/article/50/).
  - The timeline page shows Art. 50(2) marking due **Dec 2, 2026** for systems already on the market before Aug 2: [timeline](https://artificialintelligenceact.eu/implementation-timeline/). This is a de facto grace window, and I could not confirm the mechanism.
  - The Act's general fine tiers run up to EUR 15M or 3% of turnover for operator violations: [Wikipedia](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act). Applying that tier to Art. 50 is my inference.
  - India mandated faster synthetic-media takedowns (Feb 10, 2026). Apple and Google were told to pull nudify apps (Jul 17, 2026): [TC](https://techcrunch.com/tag/deepfakes/).
- **Provenance standards.**
  - C2PA spec is at 2.3. Its steering committee is Adobe, Amazon, BBC, Google, Meta, Microsoft, OpenAI, Publicis, Sony, TikTok and Truepic: [c2pa.org](https://c2pa.org/). TikTok joined in Jul 2026, and CAI reports 5,000+ participants: [Wikipedia](https://en.wikipedia.org/wiki/Content_Authenticity_Initiative).
  - OpenAI added Google's SynthID watermark plus a public verifier in May 2026, for OpenAI images only: [TC](https://techcrunch.com/2026/05/19/openai-is-making-it-easier-to-check-if-an-image-was-made-by-their-models/).
  - Suno pledged watermarking on Aug 6, 2026: [TC](https://techcrunch.com/2026/08/06/amid-legal-battles-suno-says-it-will-start-watermarking-songs/).
- **Bot share of the web.** Cloudflare's CEO says bots are about 20% of traffic now and will exceed human traffic by 2027, with agents hitting about 1,000x more sites than a human: [TC](https://techcrunch.com/2026/03/19/online-bot-traffic-will-exceed-human-traffic-by-2027-cloudflare-ceo-says/).

## 2. Acute, quantified pain points
- **Impersonation and misattribution.** Sony Music asked for removal of **135,000+** AI songs impersonating its artists ([TC](https://techcrunch.com/2026/03/24/spotify-tests-new-tool-to-stop-ai-slop-from-being-attributed-to-real-artists/)). Jeff Tweedy, Father John Misty and Blaze Foley were impersonated in Aug 2025 (Wikipedia: [Velvet Sundown](https://en.wikipedia.org/wiki/The_Velvet_Sundown)). 404 Media's podcast (Sep 25, 2026) discusses "how we got AI slop onto a real band's Spotify page": [404 Media](https://www.404media.co/).
- **Streaming fraud.** Deezer says up to 70% of streams on AI tracks were fraudulent. A US case involved $10M+ in fake royalties.
- **Weak enforcement of the fix.** YouTube says likeness-detection removals are still "very small". The tool is now open to celebrities via agencies (CAA, UTA, WME) and has no path for long-tail creators: [TC](https://techcrunch.com/2026/04/21/youtube-expands-its-ai-likeness-detection-technology-to-celebrities/).
- **Volatile creator income.** MrBeast's media arm lost about $80M in 2024 while Feastables made about $250M in revenue. Creators are diversifying away from ad revenue: [TC](https://techcrunch.com/2026/02/10/youtubers-arent-relying-on-ad-revenue-anymore-heres-how-some-are-diversifying/). A Wikipedia line says as few as 0.1% of creators earn a living (weak source).
- **False-positive burden lands on humans (inference).** Pangram claims about 1 in 10,000 human documents flagged, and the reviewer still saw human sentences flagged. Substack lets publishers only dispute their own scans: [TC](https://techcrunch.com/2026/07/29/as-ai-content-floods-the-internet-pangram-raises-9m-to-detect-it/).

## 3. Where money is flowing, and what is crowded
- **AI generation, still booming.** Suno hit 2M paid subs and $300M ARR (Feb 2026), raised $400M (Jun 2026) after a $2.45B valuation (Nov 2025), and settled with Warner. On Sep 9 it swapped to a model trained on licensed music: [TC](https://techcrunch.com/2026/09/09/suno-replaces-its-ai-models-with-a-new-one-trained-on-licensed-music-as-copyright-suits-pile-up/). UMG and Sony filed a second suit over about 60k songs (Sep 2026, 1-src, [Wikipedia](https://en.wikipedia.org/wiki/Artificial_intelligence_in_music)).
- **Licensed AI derivatives.** Spotify-UMG fan AI covers and remixes will be a paid Premium add-on, with "consent, credit, compensation" but no disclosed attribution mechanism. Merlin joined Aug 4: [TC](https://techcrunch.com/2026/05/21/spotify-and-universal-music-strike-deal-allowing-fan-made-ai-covers-and-remixes/). Deezer's remix feature requires artist consent (Jun 24).
- **Detection (crowded, low prices).** Pangram raised $9M (Menlo) at $20/month consumer pricing. GPTZero has a $10M Series A. GetReal raised $18M (Mar 2025). Reality Defender raised $15M (2023): [TC](https://techcrunch.com/tag/ai-detection/). Deezer licenses its detector to rivals (Jan 29, 2026) and Winamp is using it.
- **Creator infrastructure.** Substack raised $100M (a16z, Chernin) in Jul 2025 and Slow Ventures launched a $60M creator fund. Agentio raised $40M. Passionfroot (Insight, $15M) grew revenue 13x with B2B creator marketplaces: [TC](https://techcrunch.com/2026/07/22/passionfroot-raises-15m-to-expand-its-b2b-creator-marketplace-to-the-us/).
- **Proof-of-human.** World has about 15M verified humans out of 33M app users (Sep 2025) and faces bans or probes in 13+ jurisdictions: [Wikipedia](https://en.wikipedia.org/wiki/World_(blockchain)).
- **Crowded:** text detectors, enterprise deepfake detection, platform-native labels, and watermarking by model vendors.

## 4. Underserved segments and structural gaps
- **Cross-platform artist identity.** Spotify's approval flow is a beta on one service, and distributors are the upstream chokepoint. Nothing found in my sources shows identity checks at upload (inference).
- **Long-tail likeness and voice protection.** Content ID-style tools are gated by agencies and celebrity status.
- **Process-based proof for human creators.** Detectors judge outputs probabilistically. C2PA metadata can be stripped or forged (Wikipedia: [CAI](https://en.wikipedia.org/wiki/Content_Authenticity_Initiative)). No one sells a portable "made by a human, here is the timeline" credential that survives platform hops.
- **Structural conflicts.** Platforms sell the AI tools (YouTube's Veo and Dream Screen, Spotify's AI covers), so a neutral "human-made" verdict cannot come from them. YouTube explicitly refuses to demote labeled AI.
- **Downstream buyers with legal exposure (inference).** Brands, sync buyers and agencies need clean chain-of-title now that the labels are suing Suno. Passionfroot-style B2B buyers have no authenticity assurance layer.
- **Attribution rails for licensed AI derivatives.** The Spotify-UMG deal names credit but discloses no tracking method.

## 5. Weird signals
1. **Upload majority is not demand.** AI is over 50% of Deezer uploads, yet the streams are largely fraud (up to 70%). Real listening is human. The "AI flood" is largely a royalty-arbitrage attack surface.
2. **The "human" badge is being given away free.** Spotify says over 99% of artists listeners actively search are verified. A paid third-party credential must beat a free native one.
3. **Detection has become a reader-side consumer feature.** Substack put a scan button on every post and comment. Public "% human" scores will shape reputations before any standard exists.
4. **Sora reportedly shut down** (app Apr 26, API Sep 24, 2026, and the $1B Disney deal ended). Peak use was about 1M users, cost was about $1M/day, and third-party watermark removers appeared within a week ([Wikipedia](https://en.wikipedia.org/wiki/Sora_(app)), 1-src). Visible watermarks are worthless, and consumer AI video economics look shaky while audio (Suno) sticks.
5. **AI labs are building provenance themselves.** Suno is watermarking and retraining on licensed data, and OpenAI adopted SynthID. "Clean chain-of-title" is becoming a market requirement, not just an ethics stance.
6. **Human premium shows in talent.** WME and Gersh refused to sign AI actress Tilly Norwood, and SAG-AFTRA condemned it ([Wikipedia](https://en.wikipedia.org/wiki/Tilly_Norwood)).
