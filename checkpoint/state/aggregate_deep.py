"""Aggregate step 5 deep validation (research -> 3 critics -> rewrite -> re-critic -> 3 judges) per finalist.

Usage: python aggregate_deep.py <step-5 journal files...>
Writes deep_out/deep_validation_results.json and deep_out/deep_validation_results.csv.
Ranking: finalists that are alive AND whose second-round verdict is not "dead" come first, by mean overall score;
the rest follow, also by mean overall. Duplicate results (from resumes) keep the last one.
"""
import json, os, sys, csv, statistics

BIZ = os.path.dirname(os.path.abspath(__file__))
DIMS = ["upside", "timing", "originality", "feasibility", "defensibility", "evidence_of_demand", "overall"]
fin_order = json.load(open(os.path.join(BIZ, "evo_out", "finalist_ids.json")))
evo = {r["id"]: r for r in json.load(open(os.path.join(BIZ, "evo_out", "evolution_results.json")))}

res = {}  # label -> result (last wins)
failed = []
for jp in sys.argv[1:]:
    labels = {}
    for line in open(jp):
        e = json.loads(line)
        if e.get("type") == "started":
            labels[e["key"]] = e.get("label", "")
        elif e.get("type") == "result":
            res[labels.get(e["key"], e["key"])] = e.get("result")
        elif e.get("type") == "failed":
            failed.append(labels.get(e["key"], e["key"]))

ids = [i for i in fin_order if f"research:{i}" in res or f"rewrite:{i}" in res]
rows = []
for i in ids:
    crit = {lens: res.get(f"critic:{i}:{lens}") for lens in ["competition", "customer", "execution"]}
    ref = res.get(f"rewrite:{i}") or {}
    rc = res.get(f"recritic:{i}") or {}
    judges = {lens: res.get(f"score:{i}:{lens}") for lens in ["vc", "operator", "contrarian"]}
    ok = [j for j in judges.values() if j]
    avg = {d: round(statistics.mean(j[d] for j in ok), 2) if ok else None for d in DIMS}
    dossier = os.path.join(BIZ, "deep", f"{i}_dossier.md")
    refined_md = os.path.join(BIZ, "deep", f"{i}_refined.md")
    missing = [k for k, v in [("research", res.get(f"research:{i}")), ("rewrite", ref), ("recritic", rc)] if not v]
    missing += [f"critic:{k}" for k, v in crit.items() if not v] + [f"score:{k}" for k, v in judges.items() if not v]
    rows.append({
        "id": i, "step4_finalist_rank": fin_order.index(i) + 1, "evo_rank": evo[i]["evo_rank"],
        "original_title": evo[i]["title"], "title": ref.get("title") or evo[i]["title"],
        "one_liner": ref.get("one_liner", ""), "alive": ref.get("alive"),
        "recritic_verdict": rc.get("verdict"), "scores": avg,
        "judge_overall": {k: (v or {}).get("overall") for k, v in judges.items()},
        "judge_rationales": {k: (v or {}).get("rationale", "") for k, v in judges.items()},
        "critic_severity": {k: (v or {}).get("severity") for k, v in crit.items()},
        "critic_top_objection": {k: ((v or {}).get("objections") or [""])[0] for k, v in crit.items()},
        "remaining_holes": rc.get("remaining_holes", []),
        "dodged": rc.get("which_critiques_were_dodged_not_answered", ""),
        "wedge_customer": ref.get("wedge_customer", ""), "first_product": ref.get("first_product", ""),
        "pricing": ref.get("pricing", ""), "moat": ref.get("moat", ""),
        "bottom_up_market": ref.get("bottom_up_market", ""),
        "riskiest_assumption": ref.get("riskiest_assumption", ""), "two_week_test": ref.get("two_week_test", ""),
        "dossier_words": len(open(dossier).read().split()) if os.path.exists(dossier) else 0,
        "refined_md": os.path.exists(refined_md), "missing": missing,
    })

def key(r):
    live = r["alive"] is True and r["recritic_verdict"] != "dead"
    return (0 if live else 1, -(r["scores"]["overall"] or 0))

rows.sort(key=key)
for n, r in enumerate(rows):
    r["deep_rank"] = n + 1
    r["contender"] = r["alive"] is True and r["recritic_verdict"] != "dead"

OUT = os.path.join(BIZ, "deep_out"); os.makedirs(OUT, exist_ok=True)
json.dump(rows, open(os.path.join(OUT, "deep_validation_results.json"), "w"), indent=1)
with open(os.path.join(OUT, "deep_validation_results.csv"), "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(["deep_rank", "id", "title", "step4_rank", "contender", "alive", "recritic_verdict"] + DIMS +
               ["sev_competition", "sev_customer", "sev_execution", "riskiest_assumption", "missing"])
    for r in rows:
        w.writerow([r["deep_rank"], r["id"], r["title"], r["step4_finalist_rank"], r["contender"], r["alive"],
                    r["recritic_verdict"]] + [r["scores"][d] for d in DIMS] +
                   [r["critic_severity"][k] for k in ["competition", "customer", "execution"]] +
                   [r["riskiest_assumption"], ";".join(r["missing"])])
print(json.dumps({"finalists": len(rows), "failed_labels": failed,
                  "incomplete": {r["id"]: r["missing"] for r in rows if r["missing"]},
                  "table": [(r["deep_rank"], r["id"], r["title"][:60], r["alive"], r["recritic_verdict"],
                             r["scores"]["overall"], r["critic_severity"]) for r in rows]}, indent=0))
