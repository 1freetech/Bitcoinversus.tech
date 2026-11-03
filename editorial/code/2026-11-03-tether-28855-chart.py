"""BitcoinVersus.Tech v5.1 Tether BTC comparison. Sources in sibling editorial/data JSON."""
import json
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.ticker import FuncFormatter

reserve_usd = 8367170264
sept_btc_usd = 83621.23
reserve_btc = reserve_usd / sept_btc_usd
ceo_btc = 150000
assert round(reserve_btc) == 100060
fig, ax = plt.subplots(figsize=(11.5, 6.6), dpi=155)
fig.patch.set_facecolor("white")
ax.set_facecolor("white")
values = [reserve_btc, ceo_btc]
labels = ["USDT reserve Bitcoin\nSept. 30 attestation", "Tether-wide BTC estimate\nCEO statement, Nov. 3 report"]
bars = ax.bar([0, 1], values, color=["#008c86", "#c49c30"], width=.53)
ax.set_ylim(0, 180000)
ax.set_xlim(-.65, 1.65)
ax.set_xticks([0, 1], labels, fontsize=11)
ax.set_ylabel("Bitcoin (BTC)", fontsize=12, color="#24282d", labelpad=14)
ax.yaxis.set_major_formatter(FuncFormatter(lambda x, pos: f"{x:,.0f}"))
ax.grid(axis="y", alpha=.23, linestyle="-")
ax.set_axisbelow(True)
for side in ["top", "right", "left"]:
    ax.spines[side].set_visible(False)
ax.spines["bottom"].set_color("#d4d8dc")
ax.tick_params(axis="y", length=0, labelsize=10)
for bar, value in zip(bars, values):
    ax.text(bar.get_x() + bar.get_width()/2, value + 3900, f"{value:,.0f} BTC",
            ha="center", va="bottom", fontsize=14, fontweight="bold", color="#25282b")
fig.suptitle("Two Tether Bitcoin disclosures, two different scopes",
             x=.5, y=.958, fontsize=17, fontweight="bold", color="#17222b")
fig.text(.09, .86, "September USDT reserves are independently attested; November company-wide holdings are a CEO estimate.",
         fontsize=10.5, color="#444a50")
fig.text(.09, .085, "Difference ≈ 49,940 BTC. The figures are not a time series or evidence of a new purchase.",
         fontsize=10.5, color="#313b42", weight="bold")
fig.text(.09, .048, "Sources: Tether / BDO Q3 2026 reserves (reported Oct. 30); Paolo Ardoino, Plan B Forum (reported Nov. 3).",
         fontsize=9, color="#525b62")
fig.subplots_adjust(left=.13, right=.95, bottom=.23, top=.75)
fig.savefig("tether-2026-btc-reported-vs-attested-vertical-bar.png", facecolor="white", dpi=155)
plt.close(fig)
