# Validate Benchmark
## Summary
  - Model
    - schema: llama
    - vendor: meta-llama/llama-4-maverick
  - Aggregation
    - Scenarios: #12
    - Trial: #120
    - Success: #70
      - 1st: #62
      - 2nd: #7
      - 3rd: #1
    - Failure: #0
    - Nothing: #50
    - Error: #0
    - Average Time: 23447.333333333332 ms
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
[ObjectConstraint](./ObjectConstraint/README.md) | ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
[ObjectFunctionSchema](./ObjectFunctionSchema/README.md) | 2️⃣1️⃣1️⃣2️⃣3️⃣1️⃣1️⃣2️⃣1️⃣1️⃣
[ObjectHierarchical](./ObjectHierarchical/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectJsonSchema](./ObjectJsonSchema/README.md) | 2️⃣2️⃣1️⃣2️⃣1️⃣2️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectSimple](./ObjectSimple/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectUnionExplicit](./ObjectUnionExplicit/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectUnionImplicit](./ObjectUnionImplicit/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ShoppingCartCommodity](./ShoppingCartCommodity/README.md) | ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
[ShoppingOrderCreate](./ShoppingOrderCreate/README.md) | ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
[ShoppingOrderPublish](./ShoppingOrderPublish/README.md) | ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
[ShoppingSaleDetail](./ShoppingSaleDetail/README.md) | ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
[ShoppingSalePage](./ShoppingSalePage/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣