# Validate Benchmark
## Summary
  - Model
    - schema: llama
    - vendor: meta-llama/llama-3.3-70b-instruct
  - Aggregation
    - Scenarios: #12
    - Trial: #120
    - Success: #108
      - 1st: #94
      - 2nd: #12
      - 3rd: #2
    - Failure: #1
    - Nothing: #10
    - Error: #1
    - Average Time: 30024.575 ms
  - Token Usage:
    - Everything
    - Input
      - Total
      - Cached
    - Output
      - Total
      - Reasoning
      - Accepted Predication
      - Rejected Predication

## Experiments
Name | Status | Time / Avg
:----|:-------|------------:
[ObjectConstraint](./ObjectConstraint/README.md) | 1️⃣🥇🥇🥇🥇🥇🥇🥇🥇🥇
[ObjectFunctionSchema](./ObjectFunctionSchema/README.md) | ⚠️⚠️2️⃣2️⃣2️⃣3️⃣3️⃣⚠️⚠️❌
[ObjectHierarchical](./ObjectHierarchical/README.md) | 1️⃣🥇🥇🥇🥇🥇🥇🥇🥇🥇
[ObjectJsonSchema](./ObjectJsonSchema/README.md) | ⚠️2️⃣2️⃣2️⃣2️⃣⚠️2️⃣1️⃣2️⃣2️⃣
[ObjectSimple](./ObjectSimple/README.md) | 1️⃣🥇🥇🥇🥇🥇🥇🥇🥇🥇
[ObjectUnionExplicit](./ObjectUnionExplicit/README.md) | 1️⃣🥇🥇🥇🥇🥇🥇🥇🥇🥇
[ObjectUnionImplicit](./ObjectUnionImplicit/README.md) | 1️⃣🥇🥇🥇🥇🥇🥇⚠️🥇🥇
[ShoppingCartCommodity](./ShoppingCartCommodity/README.md) | 1️⃣🥇🥇🥇🥇2️⃣🥇🥇🥇🥇
[ShoppingOrderCreate](./ShoppingOrderCreate/README.md) | 1️⃣🥇🥇🥇🥇🥇🥇🥇🥇🥇
[ShoppingOrderPublish](./ShoppingOrderPublish/README.md) | 1️⃣🥇🥇🥇⚠️🥇🥇🥇2️⃣🥇
[ShoppingSaleDetail](./ShoppingSaleDetail/README.md) | 1️⃣⚠️🥇⚠️🥇⚠️🥇🥇🥇🥇
[ShoppingSalePage](./ShoppingSalePage/README.md) | 1️⃣🥇🥇🥇🥇🥇🥇🥇🥇🥇
