"""Build the idea index (for taxonomy) and 3 rounds of shuffled 20-idea tournament batches."""
import json, os, random

BIZ = os.path.dirname(os.path.abspath(__file__))
ideas = json.load(open(os.path.join(BIZ, "ideas", "all.json")))

with open(os.path.join(BIZ, "ideas", "index.txt"), "w") as f:
    for i in ideas:
        f.write(f"{i['id']} | {i['title']} — {i['one_liner']}\n")

T = os.path.join(BIZ, "tournament")
os.makedirs(T, exist_ok=True)
for fn in os.listdir(T):
    os.remove(os.path.join(T, fn))
FIELDS = ["id", "title", "one_liner", "customer", "problem", "solution", "why_now",
          "revenue_model", "non_obvious_insight", "first_30_days"]
B, ROUNDS = 25, 3
files = []
for r in range(ROUNDS):
    order = ideas[:]
    random.Random(1000 + r).shuffle(order)
    n = len(order)
    nb = max(1, round(n / B))
    for b in range(nb):
        chunk = order[b * n // nb:(b + 1) * n // nb]
        p = os.path.join(T, f"r{r}_b{b:03d}.json")
        json.dump([{k: i[k] for k in FIELDS} for i in chunk], open(p, "w"), indent=1)
        files.append(p)
json.dump(files, open(os.path.join(T, "_files.json"), "w"))
print(json.dumps({"ideas": len(ideas), "batches": len(files), "per_round": len(files) // ROUNDS}))
