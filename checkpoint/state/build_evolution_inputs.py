"""Collect competitor-check verdicts, decide survivors, and write parent files for the evolution phase."""
import json, os, sys, collections

BIZ = os.path.dirname(os.path.abspath(__file__))
ideas = {i["id"]: i for i in json.load(open(os.path.join(BIZ, "ideas", "all.json")))}
T = {r["id"]: r for r in json.load(open(os.path.join(BIZ, "screening_out", "tournament_results.json")))}
sel = json.load(open(os.path.join(BIZ, "screening_out", "selected_ids.json")))

rep = {}
for jp in sys.argv[1:]:
    labels = {}
    for line in open(jp):
        e = json.loads(line)
        if e.get("type") == "started":
            labels[e["key"]] = e.get("label", "")
        elif e.get("type") == "result":
            lab = labels.get(e["key"], "")
            if lab.startswith("exists:") and isinstance(e.get("result"), dict):
                rep[lab.split(":", 1)[1]] = e["result"]

EX = os.path.join(BIZ, "exists"); os.makedirs(EX, exist_ok=True)
P = os.path.join(BIZ, "evo", "parents"); os.makedirs(P, exist_ok=True)
rows, survivors = [], []
for iid in sel:
    r = rep.get(iid)
    if r is None:
        rows.append({"id": iid, "title": ideas[iid]["title"], "status": "missing", "kill": None}); continue
    json.dump(r, open(os.path.join(EX, f"{iid}.json"), "w"), indent=1)
    rows.append({"id": iid, "title": ideas[iid]["title"], "status": r["status"], "kill": r["kill"],
                 "kill_reason": r["kill_reason"], "n_competitors": len(r["competitors"]),
                 "n_direct": sum(c["overlap"] == "direct" for c in r["competitors"]),
                 "tournament_score": T[iid]["score"], "cluster": T[iid]["cluster_name"]})
    if r["status"] in ("open", "gap") and not r["kill"]:
        survivors.append(iid)
        parent = {k: v for k, v in ideas[iid].items()}
        parent["tournament"] = {"score": T[iid]["score"], "overall_rank": T[iid]["overall_rank"],
                                "cluster": T[iid]["cluster_name"],
                                "judge_notes": [f"{j['lens']}: rank {j['rank']}/{j['of']} - {j['note']}" for j in T[iid]["judges"]]}
        parent["competition"] = r
        json.dump(parent, open(os.path.join(P, f"{iid}.json"), "w"), indent=1)

json.dump(rows, open(os.path.join(BIZ, "screening_out", "existence_verdicts.json"), "w"), indent=1)
json.dump(survivors, open(os.path.join(BIZ, "evo", "survivors.json"), "w"))
print(json.dumps({"reports": len(rep), "selected": len(sel), "survivors": len(survivors),
                  "status": collections.Counter(r["status"] for r in rows),
                  "killed": [(r["id"], r["title"], r.get("kill_reason", "")[:90]) for r in rows if r.get("kill")]}, indent=0))
