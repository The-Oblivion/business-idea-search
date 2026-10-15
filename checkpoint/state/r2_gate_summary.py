"""Round 2: flatten every pool's ideation + gate results into round2/gate_results.json and .csv.

Usage: python r2_gate_summary.py <ideate-gate journal files...>
Handles both gate versions (v1: realistic ceiling; v2: median + upside cases).
"""
import json, os, sys, csv
BIZ = os.path.dirname(os.path.abspath(__file__)); R2 = os.path.join(BIZ, "round2")
pools = {p["pool_id"]: p for p in json.load(open(os.path.join(R2, "pools_all.json")))}
res, ver = {}, {}
for jp in sys.argv[1:]:
    labels = {}
    for line in open(jp):
        e = json.loads(line)
        if e.get("type") == "started": labels[e["key"]] = e.get("label", "")
        elif e.get("type") == "result" and e.get("result"):
            lab = labels.get(e["key"], ""); res[lab] = e["result"]; ver[lab] = os.path.basename(os.path.dirname(jp))
rows = []
for lab, g in res.items():
    if not lab.startswith("r2gate:"): continue
    pid = lab.split(":")[1]; ideas = {i["title"]: i for i in (res.get(f"r2ideate:{pid}") or {}).get("ideas", [])}
    picks = {p["from_title"]: p for p in g.get("picks", [])}
    for v in g["verdicts"]:
        i = ideas.get(v["title"], {})
        rows.append({"pool_id": pid, "pool": pools[pid]["name"], "run": ver[lab], "title": v["title"], "lens": i.get("lens", ""),
                     "one_liner": i.get("one_liner", ""), "verdict": v["verdict"], "picked": v["title"] in picks,
                     "realistic_m": v.get("realistic_revenue_ceiling_usd_m"), "median_m": v.get("median_case_revenue_usd_m"),
                     "upside_m": v.get("upside_case_revenue_usd_m"), "upside_assumptions": v.get("upside_assumptions", ""),
                     "n_competitors": len(v.get("competitors_found", [])), "deciding_reason": v["deciding_reason"],
                     "pick": picks.get(v["title"])})
json.dump(rows, open(os.path.join(R2, "gate_results.json"), "w"), indent=1)
with open(os.path.join(R2, "gate_results.csv"), "w", newline="") as f:
    w = csv.writer(f); cols = ["pool_id", "title", "lens", "verdict", "picked", "realistic_m", "median_m", "upside_m", "n_competitors", "deciding_reason"]
    w.writerow(cols); [w.writerow([r[c] for c in cols]) for r in rows]
from collections import Counter
print(json.dumps({"ideas_gated": len(rows), "verdicts": Counter(r["verdict"] for r in rows), "picks": sum(r["picked"] for r in rows),
                  "verdict_by_lens": {l: dict(Counter(r["verdict"] for r in rows if r["lens"] == l)) for l in ["insider", "pattern", "dilemma", "shock"]}}, indent=0))
