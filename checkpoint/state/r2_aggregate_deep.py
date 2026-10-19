"""Round 2: aggregate deep validation v2 (labels r2research/r2critic/r2rewrite/r2recritic/r2score) across runs.

Usage: python r2_aggregate_deep.py <deep journal files...>
Writes round2/deep_results.json and .csv. Contenders (alive and re-critic not dead) first, by mean overall.
"""
import json, os, sys, csv, statistics
BIZ = os.path.dirname(os.path.abspath(__file__)); R2 = os.path.join(BIZ, "round2")
D = ["upside", "timing", "originality", "feasibility", "defensibility", "evidence_of_demand", "overall"]
res = {}
for jp in sys.argv[1:]:
    lab = {}
    for l in open(jp):
        e = json.loads(l)
        if e["type"] == "started": lab[e["key"]] = e.get("label", "")
        elif e["type"] == "result" and e.get("result") is not None: res[lab.get(e["key"], "")] = e["result"]
cids = sorted({k.split(":")[1] for k in res if k.startswith("r2rewrite:")})
rows = []
for c in cids:
    rf = res.get(f"r2rewrite:{c}") or {}; rc = res.get(f"r2recritic:{c}") or {}
    sc = {k: res.get(f"r2score:{c}:{k}") for k in ["vc", "operator", "contrarian"]}; ok = [s for s in sc.values() if s]
    crit = {k: res.get(f"r2critic:{c}:{k}") or {} for k in ["competition", "customer", "execution"]}
    rows.append({"cid": c, "title": rf.get("title"), "one_liner": rf.get("one_liner"), "alive": rf.get("alive"),
                 "recritic": rc.get("verdict"), "scores": {d: round(statistics.mean(s[d] for s in ok), 2) if ok else None for d in D},
                 "judge_overall": {k: (v or {}).get("overall") for k, v in sc.items()},
                 "median_m": rf.get("median_case_revenue_usd_m"), "upside_m": rf.get("upside_case_revenue_usd_m"),
                 "critic_severity": {k: v.get("severity") for k, v in crit.items()},
                 "critic_top_objection": {k: (v.get("objections") or [""])[0] for k, v in crit.items()},
                 "upside_believable": rc.get("upside_believable", ""), "remaining_holes": rc.get("remaining_holes", []),
                 "riskiest_assumption": rf.get("riskiest_assumption"), "two_week_test": rf.get("two_week_test"),
                 "judge_rationales": {k: (v or {}).get("rationale", "") for k, v in sc.items()},
                 "dossier": f"round2/deep/{c}_dossier.md", "refined": f"round2/deep/{c}_refined.md"})
rows.sort(key=lambda r: (0 if (r["alive"] and r["recritic"] != "dead") else 1, -(r["scores"]["overall"] or 0)))
for n, r in enumerate(rows): r["rank"] = n + 1; r["contender"] = bool(r["alive"] and r["recritic"] != "dead")
json.dump(rows, open(os.path.join(R2, "deep_results.json"), "w"), indent=1)
with open(os.path.join(R2, "deep_results.csv"), "w", newline="") as f:
    w = csv.writer(f); w.writerow(["rank", "cid", "title", "contender", "alive", "recritic", "median_m", "upside_m"] + D)
    for r in rows: w.writerow([r["rank"], r["cid"], r["title"], r["contender"], r["alive"], r["recritic"], r["median_m"], r["upside_m"]] + [r["scores"][d] for d in D])
for r in rows: print(f"{r['rank']:>2} {r['cid']} {'C' if r['contender'] else 'x'} ovr {r['scores']['overall']} up {r['scores']['upside']} def {r['scores']['defensibility']} | ${r['median_m']}M/${r['upside_m']}M | {r['recritic']} | {(r['title'] or '')[:75]}")
