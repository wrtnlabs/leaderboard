import matplotlib.pyplot as plt
import numpy as np

# Define the data for each vendor
vendors = [
    "openai/o3-mini-2025-01-31",
    "openai/gpt-4o-mini-2024-07-18",
    "openai/gpt-4o-2024-11-20",
    "openai/gpt-4o-2024-08-06",
    "anthropic/claude-3.5-sonnet",
    "anthropic/claude-3.7-sonnet",
    # "mistralai/mistral-small-3.1-24b-instruct",
    "meta-llama/llama-3.3-70b-instruct",
    "meta-llama/llama-4-maverick",
    "meta-llama/llama-4-scout",
    # "google/gemini-2.0-flash-001",
    # "google/gemini-pro-1.5",
    "deepseek/deepseek-chat-v3-0324",
    "deepseek/deepseek-r1",
]

# Total trials for each vendor
total_trials = [
    120,
    120,
    120,
    120,
    120,
    120,
    # 80,
    120,
    120,
    120,
    # 80,
    # 80,
    120,
    120
]

# Outcome counts for each vendor: (No Agentica, Agentica Used, Failures)
counts = [
    (101, 18, 1),  # openai/o3-mini-2025-01-31
    (105, 4, 10),  # openai/gpt-4o-mini-2024-07-18
    (112, 8, 0),   # openai/gpt-4o-2024-11-20
    (104, 16, 0),    # openai/gpt-4o-2024-08-06
    (105, 5, 10),  # anthropic/claude-3.5-sonnet
    (109, 1, 10),  # anthropic/claude-3.7-sonnet
    # (65, 0, 15),  # mistralai/mistral-small-3.1-24b-instruct
    (94, 14, 12),  # meta-llama/llama-3.3-70b-instruct
    (62, 8, 50),  # meta-llama/llama-4-maverick
    (71, 10, 38),  # meta-llama/llama-4-scout
    # (30, 0, 50),  # google/gemini-2.0-flash-001
    # (29, 1, 50),  # google/gemini-pro-1.5
    (103, 9, 7),  # deepseek/deepseek-chat-v3-0324
    (26, 0, 94),  # deepseek/deepseek-r1
]

# Convert outcome counts to percentages for each vendor
no_agentica_pct = [
    (no / total) * 100 for (no, agent, fail), total in zip(counts, total_trials)
]
agentica_used_pct = [
    (agent / total) * 100 for (no, agent, fail), total in zip(counts, total_trials)
]
failure_pct = [
    (fail / total) * 100 for (no, agent, fail), total in zip(counts, total_trials)
]

# Prepare the x-axis positions and bar width
x = np.arange(len(vendors))
width = 0.6

fig, ax = plt.subplots(figsize=(12, 6))

# Create a stacked bar chart
bar_no = ax.bar(x, no_agentica_pct, width, label="No Agentica")
bar_agent = ax.bar(
    x,
    agentica_used_pct,
    width,
    bottom=no_agentica_pct,
    label="Agentica Used",
)
bottoms = [i + j for i, j in zip(no_agentica_pct, agentica_used_pct)]
bar_fail = ax.bar(x, failure_pct, width, bottom=bottoms, label="Failures (Others)")

# Set chart labels and title
ax.set_ylabel("Percentage (%)")
ax.set_title("Outcome Rates by Vendor")
ax.set_xticks(x)
ax.set_xticklabels(vendors, rotation=45, ha="right")
ax.legend()


# Optional: Add percentage labels inside each bar segment
def add_labels(bars, base_offset):
    for bar in bars:
        height = bar.get_height()
        if height > 0:
            ax.annotate(
                f"{height:.1f}%",
                xy=(
                    bar.get_x() + bar.get_width() / 2,
                    bar.get_y() + height / 2 + base_offset,
                ),
                ha="center",
                va="center",
                fontsize=8,
            )


# Add labels with cumulative offsets
add_labels(bar_no, 0)
add_labels(bar_agent, 0)
add_labels(bar_fail, 0)

plt.tight_layout()

# Save the figure as SVG or PDF (uncomment the desired format)
plt.savefig("agentica_success_rates.svg", format="svg")
plt.savefig('agentica_success_rates.pdf', format='pdf')

plt.show()
