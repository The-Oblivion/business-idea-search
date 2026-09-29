"""Aggregate screener scores from screen-shard journals; write ranked list + shortlist for dedup."""
import json, sys, os, statistics

BIZ = os.path.dirname(os.path.abspath(__file__))
ideas = {i["id"]: i for i in json.load(open(os.path.join(BIZ, "ideas", "all.json")))}
W = {"upside": 1.25, "timing": 1.0, "originality": 1.25, "feasibility": 1.0, "defensibility": 0.75}

per = {}
for jp in sys.argv[1:]:
    labels = {}
    for line in open(jp):
        e = json.loads(line)
        if e.get("type") == "started":
            labels[e["key"]] = e.get("label", "")
        elif e.get("type") == "result" and labels.get(e["key"], "").startswith("screen:"):
            r = e.get("result") or {}
            for s in r.get("scores", []):
                if s.get("id") in ideas:
                    per.setdefault(s["id"], []).append(s)

rows = []
for iid, ss in per.items():
    comp = statistics.mean(sum(W[k] * s.get(k, 0) for k in W) / sum(W.values()) for s in ss)
    orig = statistics.mean(s.get("originality", 0) for s in ss)
    flaws = [s.get("fatal_flaw", "") for s in ss if s.get("fatal_flaw", "none").lower() not in ("none", "")]
    rows.append({"id": iid, "title": ideas[iid]["title"], "one_liner": ideas[iid]["one_liner"],
                 "kind": ideas[iid]["kind"], "source": ideas[iid]["source"],
                 "composite": round(comp, 3), "originality": round(orig, 2), "n": len(ss), "flaws": flaws})
rows.sort(key=lambda r: -r["composite"])
json.dump(rows, open(os.path.join(BIZ, "screens", "ranked.json"), "w"), indent=1)

TOP = int(os.environ.get("TOP", "150"))
short = rows[:TOP]
# originality reserve: high-originality ideas above median composite not already in shortlist
med = statistics.median(r["composite"] for r in rows) if rows else 0
ids = {r["id"] for r in short}
reserve = [r for r in sorted(rows, key=lambda r: (-r["originality"], -r["composite"]))
           if r["id"] not in ids and r["composite"] >= med][:25]
short += reserve
json.dump([{"id": r["id"], "title": r["title"], "one_liner": r["one_liner"], "composite": r["composite"],
            "originality": r["originality"]} for r in short],
          open(os.path.join(BIZ, "screens", "shortlist.json"), "w"), indent=1)
print(json.dumps({"scored": len(rows), "unscored": len(ideas) - len(rows), "shortlist": len(short),
                  "top5": [(r["id"], r["title"], r["composite"]) for r in rows[:5]]}, indent=0))
