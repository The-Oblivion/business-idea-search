"""Build the evolution pool (parents + mutants + hybrids) and 3 rounds of shuffled ranking batches.

Usage: python build_evo_tournament.py <evolution journal files...>
"""
import json, os, sys, random

BIZ = os.path.dirname(os.path.abspath(__file__))
E = os.path.join(BIZ, "evo")
survivors = json.load(open(os.path.join(E, "survivors.json")))
parents = {i: json.load(open(os.path.join(E, "parents", f"{i}.json"))) for i in survivors}
FIELDS = ["title", "one_liner", "customer", "problem", "solution", "why_now", "revenue_model",
          "non_obvious_insight", "first_30_days"]

def comp_summary(p):
    c = p["competition"]
    names = ", ".join(x["name"] for x in c["competitors"][:4]) or "none found"
    return f"Competitor check: {c['status'].upper()}. Closest players: {names}. White space: {c['white_space']}"

pool = []
for i, p in parents.items():
    pool.append({"id": i, **{k: p[k] for k in FIELDS}, "family": i, "lineage": "original (tournament survivor)",
                 "competition_context": comp_summary(p)})

muts, hybs = {}, []
for jp in sys.argv[1:]:
    labels = {}
    for line in open(jp):
        e = json.loads(line)
        if e.get("type") == "started":
            labels[e["key"]] = e.get("label", "")
        elif e.get("type") == "result" and isinstance(e.get("result"), dict):
            lab = labels.get(e["key"], "")
            if lab.startswith("mutate:"):
                muts[lab.split(":", 1)[1]] = e["result"].get("mutants", [])
            elif lab.startswith("hybrid:"):
                hybs.extend(e["result"].get("hybrids", []))

for pid, ms in muts.items():
    if pid not in parents:
        continue
    for k, m in enumerate(ms[:3]):
        pool.append({"id": f"{pid}-M{k + 1}", **{f: m.get(f, "") for f in FIELDS}, "family": pid,
                     "lineage": f"mutation of {pid} ('{parents[pid]['title']}'), type: {m.get('mutation_type', '')}",
                     "competition_context": comp_summary(parents[pid]) + f" | How this version avoids them: {m.get('how_it_avoids_competitors', '')}"})
seen = set()
hn = 0
for h in hybs:
    ps = [x for x in h.get("parents", []) if x in parents]
    key = tuple(sorted(ps))
    if len(ps) < 2 or key in seen:
        continue
    seen.add(key); hn += 1
    pool.append({"id": f"H{hn:02d}", **{f: h.get(f, "") for f in FIELDS}, "family": f"H{hn:02d}",
                 "lineage": f"hybrid of {' + '.join(ps)} ({' + '.join(parents[x]['title'] for x in ps)}). Why stronger: {h.get('why_combination_is_stronger', '')}",
                 "competition_context": " || ".join(comp_summary(parents[x]) for x in ps), "hybrid_parents": ps})

json.dump(pool, open(os.path.join(E, "pool.json"), "w"), indent=1)
TB = os.path.join(E, "tournament"); os.makedirs(TB, exist_ok=True)
for fn in os.listdir(TB):
    os.remove(os.path.join(TB, fn))
B, ROUNDS = 25, 3
nb = max(1, round(len(pool) / B))
for r in range(ROUNDS):
    order = pool[:]
    random.Random(2000 + r).shuffle(order)
    n = len(order)
    for b in range(nb):
        chunk = order[b * n // nb:(b + 1) * n // nb]
        json.dump([{k: v for k, v in x.items() if k not in ("family", "hybrid_parents")} for x in chunk],
                  open(os.path.join(TB, f"r{r}_b{b:03d}.json"), "w"), indent=1)
print(json.dumps({"parents": len(parents), "mutant_sets": len(muts), "mutants": sum(1 for x in pool if "-M" in x["id"]),
                  "hybrids": hn, "pool": len(pool), "batches_per_round": nb}))
