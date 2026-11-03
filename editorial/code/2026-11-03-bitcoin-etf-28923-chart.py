"""Rebuild the November 3, 2026 BitcoinVersus.Tech chart using Farside Investors net flows.

Source: https://farside.co.uk/bitcoin-etf-flow-all-data/
Trading session net flow values in US$ millions, no inferred weekend values.
"""
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.ticker import FuncFormatter

values = [110.3, 176.0, 137.3, 17.2, -643.2, -398.6]
labels = ["Oct 26", "Oct 27", "Oct 28", "Oct 29", "Oct 30", "Nov 2"]
assert abs(sum(values[-2:]) + 1041.8) < 1e-8
assert round(sum(values[:4]), 1) == 440.8
fig, ax = plt.subplots(figsize=(12.4, 6.9), dpi=150)
fig.patch.set_facecolor("white")
ax.set_facecolor("white")
palette = ["#227e66" if v >= 0 else "#b14549" for v in values]
bars = ax.bar(range(len(values)), values, color=palette, width=.59, zorder=3)
ax.axhline(0, color="#28323c", lw=1.05, zorder=2)
ax.grid(axis="y", color="#e5e8eb", lw=.85, zorder=1)
ax.set_axisbelow(True)
ax.set_xticks(range(len(labels)), labels, fontsize=11)
ax.set_ylim(-775,315)
ax.set_ylabel("Net flow (US$ millions)", fontsize=11)
ax.yaxis.set_major_formatter(FuncFormatter(lambda x,p: ("$" if x >= 0 else "−$") + f"{abs(x):,.0f}"))
for side in ["top","right","left","bottom"]:
    ax.spines[side].set_visible(False)
for bar, value in zip(bars, values):
    label = ("+" if value > 0 else "−") + f"${abs(value):,.1f}M"
    ax.text(bar.get_x() + bar.get_width()/2, value+(21 if value>=0 else -23), label,
            ha="center", va="bottom" if value>=0 else "top", fontsize=10.3, weight="bold",
            color="#205e51" if value>=0 else "#8e3436")
fig.suptitle("Spot Bitcoin ETF flows reversed sharply",x=.09,ha="left",y=.956,fontsize=18,weight="bold")
fig.text(.09,.878,"Six U.S. trading sessions, October 26–November 2, 2026",fontsize=11)
fig.text(.09,.086,"Oct 30 + Nov 2: −$1,041.8 million combined  •  Latest complete session: Nov 2",fontsize=11,weight="bold")
fig.text(.09,.046,"Source: Farside Investors. Net flows, not Bitcoin prices or on-chain transfers.",fontsize=9.6)
fig.subplots_adjust(left=.13,right=.97,top=.78,bottom=.22)
fig.savefig("bitcoin-etf-net-flows-oct26-nov2-2026.png",facecolor="white",dpi=150)
plt.close(fig)
