"""Collect ideas from discover-shard journals, assign IDs, shuffle, write screening batches."""
import json, random, sys, os, glob

BIZ = os.path.dirname(os.path.abspath(__file__))
journals = sys.argv[1:]
ideas = []
for jp in journals:
    labels = {}
    for line in open(jp):
        e = json.loads(line)
        if e.get("type") == "started":
            labels[e["key"]] = e.get("label", "")
        elif e.get("type") == "result":
            lab = labels.get(e["key"], "")
            r = e.get("result")
            if lab.startswith(("idea:", "wild:", "collide:", "persona:")) and isinstance(r, dict):
                kind = "signal" if lab.startswith("persona:signal") else lab.split(":")[0]
                for i in r.get("ideas", []):
                    i["source"] = lab
                    i["kind"] = kind
                    ideas.append(i)

random.Random(42).shuffle(ideas)
for n, i in enumerate(ideas):
    i["id"] = f"I{n:04d}"
json.dump(ideas, open(os.path.join(BIZ, "ideas", "all.json"), "w"), indent=1)

B = 20
for f in glob.glob(os.path.join(BIZ, "screens", "batch_*.json")):
    os.remove(f)
nb = 0
for s in range(0, len(ideas), B):
    batch = [{k: v for k, v in i.items() if k not in ("source", "kind")} for i in ideas[s:s + B]]
    json.dump(batch, open(os.path.join(BIZ, "screens", f"batch_{nb:03d}.json"), "w"), indent=1)
    nb += 1

kinds = {}
for i in ideas:
    kinds[i["kind"]] = kinds.get(i["kind"], 0) + 1
print(json.dumps({"ideas": len(ideas), "batches": nb, "by_kind": kinds}))
