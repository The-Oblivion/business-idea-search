import numpy as np
rng=np.random.default_rng(1)
N=2_000_000
V=300_000; p_sale=0.40
def run(m,sd,d,cap):
    S=rng.normal(m,sd,N)            # shortfall vs frozen/control-adjusted reference, % of ref
    pay=np.clip(S-d,0,cap)          # pay shortfall beyond deductible, up to cap (% of ref)
    per_sale=pay.mean()/100*V
    return pay.mean(), per_sale, per_sale*p_sale
print("m sd d cap | E[pay]% | $/sale | $/enrolled hh (40% sell in 10y)")
for sd in (8,10,12):
  for m in (0,3,7.2):
    for d,cap in ((0,20),(10,20)):
      e,ps,ph=run(m,sd,d,cap)
      print(f"{m:>4} {sd:>2} {d:>2} {cap:>2} | {e:5.2f} | {ps:8.0f} | {ph:7.0f}")
