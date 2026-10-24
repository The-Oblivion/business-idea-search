"""Step 6: aggregate the round-robin head-to-head. Labels h2h:<A>:<B>:<order>.

Usage: python r2_aggregate_h2h.py <h2h journal files...>
Writes round2/h2h_results.json and .csv: wins, margin-weighted points, a Bradley-Terry strength, and how often the
two order-swapped judgments of each pair agreed (an order-bias check).
"""
import json, os, sys, csv, itertools
from collections import defaultdict
BIZ = os.path.dirname(os.path.abspath(__file__)); R2 = os.path.join(BIZ, "round2")
deep = {r["cid"]: r for r in json.load(open(os.path.join(R2, "deep_results.json")))}
games = {}
for jp in sys.argv[1:]:
    lab = {}
    for l in open(jp):
        e = json.loads(l)
        if e["type"] == "started": lab[e["key"]] = e.get("label", "")
        elif e["type"] == "result" and e.get("result"):
            L = lab.get(e["key"], "")
            if L.startswith("h2h:"): games[L] = e["result"]
wins, pts, played, beats = defaultdict(int), defaultdict(float), defaultdict(int), defaultdict(float)
pair_votes = defaultdict(list)
for L, g in games.items():
    _, a, b, o = L.split(":")
    w, l = (a, b) if g["winner"] == "A" else (b, a)
    wins[w] += 1; pts[w] += g["margin"]; pts[l] -= g["margin"]; played[a] += 1; played[b] += 1
    beats[(w, l)] += 1
    pair_votes[tuple(sorted((a, b)))].append(w)
ids = sorted(played)
s = {i: 1.0 for i in ids}  # Bradley-Terry via the MM algorithm
for _ in range(500):
    new = {}
    for i in ids:
        num = sum(beats[(i, j)] for j in ids if j != i)
        den = sum((beats[(i, j)] + beats[(j, i)]) / (s[i] + s[j]) for j in ids if j != i and beats[(i, j)] + beats[(j, i)])
        new[i] = (num + 0.1) / den if den else s[i]
    tot = sum(new.values()); s = {i: v * len(ids) / tot for i, v in new.items()}
agree = sum(1 for v in pair_votes.values() if len(v) == 2 and v[0] == v[1]); both = sum(1 for v in pair_votes.values() if len(v) == 2)
rows = sorted(({"cid": i, "title": deep[i]["title"], "wins": wins[i], "games": played[i], "win_rate": round(wins[i] / played[i], 3),
                "margin_points": pts[i], "bt_strength": round(s[i], 3), "deep_overall": deep[i]["scores"]["overall"],
                "median_m": deep[i]["median_m"], "upside_m": deep[i]["upside_m"]} for i in ids),
              key=lambda r: (-r["wins"], -r["bt_strength"], -(r["deep_overall"] or 0)))
for n, r in enumerate(rows): r["rank"] = n + 1
json.dump({"ranking": rows, "games": len(games), "order_agreement": f"{agree}/{both}", "judgments": games},
          open(os.path.join(R2, "h2h_results.json"), "w"), indent=1)
with open(os.path.join(R2, "h2h_results.csv"), "w", newline="") as f:
    w = csv.writer(f); cols = ["rank", "cid", "title", "wins", "games", "win_rate", "margin_points", "bt_strength", "deep_overall", "median_m", "upside_m"]
    w.writerow(cols); [w.writerow([r[c] for c in cols]) for r in rows]
print(f"games {len(games)} | order agreement {agree}/{both}")
for r in rows: print(f"{r['rank']:>2} {r['cid']} {r['wins']}/{r['games']} BT {r['bt_strength']} pts {r['margin_points']:+} | {(r['title'] or '')[:70]}")
