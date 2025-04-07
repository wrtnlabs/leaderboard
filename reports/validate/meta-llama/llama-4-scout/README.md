# Validate Benchmark
## Summary
  - Model
    - schema: llama
    - vendor: meta-llama/llama-4-scout
  - Aggregation
    - Scenarios: #12
    - Trial: #120
    - Success: #82
      - 1st: #71
      - 2nd: #6
      - 3rd: #4
    - Failure: #2
    - Nothing: #33
    - Error: #3
    - Average Time: 10104.616666666667 ms
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
[ObjectConstraint](./ObjectConstraint/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣⚠️1️⃣
[ObjectFunctionSchema](./ObjectFunctionSchema/README.md) | ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
[ObjectHierarchical](./ObjectHierarchical/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectJsonSchema](./ObjectJsonSchema/README.md) | ⚠️⚠️⚠️⚠️❌⚠️1️⃣⚠️❌⚠️
[ObjectSimple](./ObjectSimple/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectUnionExplicit](./ObjectUnionExplicit/README.md) | 1️⃣1️⃣1️⃣2️⃣4️⃣⚠️2️⃣1️⃣⚠️3️⃣
[ObjectUnionImplicit](./ObjectUnionImplicit/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣⚠️1️⃣1️⃣1️⃣
[ShoppingCartCommodity](./ShoppingCartCommodity/README.md) | ⚠️2️⃣⚠️⚠️⚠️⚠️⚠️1️⃣⚠️⚠️
[ShoppingOrderCreate](./ShoppingOrderCreate/README.md) | 1️⃣⚠️1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ShoppingOrderPublish](./ShoppingOrderPublish/README.md) | ⚠️⚠️3️⃣⚠️⚠️⚠️2️⃣2️⃣⚠️3️⃣
[ShoppingSaleDetail](./ShoppingSaleDetail/README.md) | 2️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣3️⃣1️⃣
[ShoppingSalePage](./ShoppingSalePage/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣