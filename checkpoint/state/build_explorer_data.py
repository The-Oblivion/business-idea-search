"""Step 9 prep: build one compact JSON with every idea from both rounds and its full journey, for the explorer artifact.

Usage: python build_explorer_data.py  ->  round2/explorer/explorer_data.json
"""
import json, os, glob
BIZ = os.path.dirname(os.path.abspath(__file__)); R2 = os.path.join(BIZ, "round2")
L = lambda p: json.load(open(os.path.join(BIZ, p)))
ideas = L("ideas/all.json")
tour = {r["id"]: r for r in L("screening_out/tournament_results.json")}
exists = {os.path.basename(f)[:-5]: json.load(open(f)) for f in glob.glob(os.path.join(BIZ, "exists", "*.json"))}
pool = {r["id"]: r for r in L("evo/pool.json")}
evo = {r["id"]: r for r in L("evo_out/evolution_results.json")}
deep1 = {r["id"]: r for r in L("deep_out/deep_validation_results.json")}
cut = lambda s, n=600: (s or "")[:n]
out = []
def r1_record(i, base, kind_override=None):
    t = tour.get(i); e = exists.get(i); ev = evo.get(i); d = deep1.get(i)
    rec = {"id": i, "round": 1, "t": base.get("title"), "o": cut(base.get("one_liner"), 400), "cu": cut(base.get("customer"), 300),
           "pr": cut(base.get("problem")), "so": cut(base.get("solution")), "wn": cut(base.get("why_now"), 400),
           "rm": cut(base.get("revenue_model"), 300), "ins": cut(base.get("non_obvious_insight"), 400),
           "src": base.get("source", ""), "k": kind_override or base.get("kind", ""), "obs": base.get("outside_box_score")}
    if t: rec["tour"] = {"rank": t.get("overall_rank"), "score": t.get("score"), "cl": t.get("cluster_name"), "cv": t.get("cliche_votes"),
                         "sel": t.get("selected_for_existence_check"), "why": t.get("selection_reason"),
                         "j": [{"l": j.get("lens"), "r": j.get("rank"), "of": j.get("of"), "c": j.get("cliche"), "f": cut(j.get("fatal_flaw"), 120), "n": cut(j.get("note"), 200)} for j in t.get("judges", [])]}
    if e: rec["comp"] = {"s": e.get("status"), "ws": cut(e.get("white_space"), 400), "sa": cut(e.get("sharper_angle"), 400),
                         "c": [c.get("name") for c in e.get("competitors", [])][:8]}
    if ev: rec["evo"] = {"rank": ev.get("evo_rank"), "score": ev.get("score"), "fin": ev.get("finalist"), "lin": cut(ev.get("lineage"), 300)}
    if d: rec["deep"] = {"alive": d.get("alive"), "v": d.get("recritic_verdict"), "ov": (d.get("scores") or {}).get("overall"),
                         "rt": d.get("title"), "why": cut(" | ".join((d.get("critic_top_objection") or {}).values()), 600)}
    kids = [k for k in pool if k.startswith(i + "-M")]
    if kids: rec["kids"] = kids
    return rec
for x in ideas: out.append(r1_record(x["id"], x))
for i, x in pool.items():
    if i in {y["id"] for y in ideas}: continue
    r = r1_record(i, x, "hybrid" if i.startswith("H") else "offspring"); r["parent"] = x.get("hybrid_parents") or [x.get("family")]
    out.append(r)
# Round 2
gate = json.load(open(os.path.join(R2, "gate_results.json")))
deep2 = {r["cid"]: r for r in json.load(open(os.path.join(R2, "deep_results.json")))}
h2h = {r["cid"]: r for r in json.load(open(os.path.join(R2, "h2h_results.json")))["ranking"]} if os.path.exists(os.path.join(R2, "h2h_results.json")) else {}
CID = {("P036", "Progressive for Turbines"): "C01", ("P061", "The exception-free fiscal intermediary"): "C02", ("P061", "The neutral LTSS manager"): "C03",
       ("P032", "Time-to-Power Fleet"): "C04", ("P079", "The Non-GE Foundry"): "C05", ("P102", "Overnight Yard Crews"): "C06",
       ("P108", "Day 21"): "C07", ("P022", "Last Mile"): "C08", ("P004", "Meisterwerk"): "C09", ("P038", "Signed-Off"): "C10",
       ("P062", "Outreach Without Selling"): "C11", ("P108", "Outside Care Plan"): "C12", ("P129", "Run-Base Shrinker"): "C13",
       ("P017", "Covenant Parks"): "C14", ("P003", "Hot-Spot Contract"): "C15", ("P067", "Approved Buyer"): "C16"}
wg = {}
for f in glob.glob(os.path.join(R2, "wargame", "*.md")): wg[os.path.basename(f)[:-3]] = True
for n, g in enumerate(gate):
    cid = next((c for (p, t), c in CID.items() if g["pool_id"] == p and g["title"].startswith(t)), None)
    rec = {"id": f"R2-{g['pool_id']}-{n:03d}", "round": 2, "t": g["title"], "o": cut(g.get("one_liner"), 400), "pool": g["pool"],
           "pid": g["pool_id"], "k": g.get("lens"), "gate": {"v": g["verdict"], "pick": g["picked"], "real": g.get("realistic_m"),
           "med": g.get("median_m"), "up": g.get("upside_m"), "why": cut(g.get("deciding_reason"), 400), "nc": g.get("n_competitors")}}
    if cid and cid in deep2:
        d = deep2[cid]; rec["cid"] = cid
        rec["deep"] = {"alive": d["alive"], "v": d["recritic"], "ov": d["scores"]["overall"], "rt": d["title"], "med": d["median_m"], "up": d["upside_m"],
                       "why": cut(" | ".join(d["critic_top_objection"].values()), 600), "risk": cut(d.get("riskiest_assumption"), 300), "test": cut(d.get("two_week_test"), 300)}
        if cid in h2h: rec["h2h"] = {"rank": h2h[cid]["rank"], "w": h2h[cid]["wins"], "g": h2h[cid]["games"], "pts": h2h[cid]["margin_points"]}
        if cid in wg: rec["wargame"] = True
    out.append(rec)
os.makedirs(os.path.join(R2, "explorer"), exist_ok=True)
pth = os.path.join(R2, "explorer", "explorer_data.json")
json.dump(out, open(pth, "w"), separators=(",", ":"))
from collections import Counter
print(len(out), "records;", Counter(r["round"] for r in out), "; size MB", round(os.path.getsize(pth) / 1e6, 2),
      "; r1 with comp", sum(1 for r in out if "comp" in r), "; r2 with deep", sum(1 for r in out if r["round"] == 2 and "deep" in r))
