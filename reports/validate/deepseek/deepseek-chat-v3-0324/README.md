# Validate Benchmark
## Summary
  - Model
    - schema: llama
    - vendor: deepseek/deepseek-chat-v3-0324
  - Aggregation
    - Scenarios: #12
    - Trial: #120
    - Success: #113
      - 1st: #103
      - 2nd: #9
      - 3rd: #0
    - Failure: #0
    - Nothing: #2
    - Error: #5
    - Average Time: 15954.533333333333 ms
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
[ObjectConstraint](./ObjectConstraint/README.md) | 1️⃣2️⃣1️⃣1️⃣1️⃣1️⃣1️⃣2️⃣2️⃣2️⃣
[ObjectFunctionSchema](./ObjectFunctionSchema/README.md) | 😱⚠️⚠️2️⃣😱😱5️⃣😱😱2️⃣
[ObjectHierarchical](./ObjectHierarchical/README.md) | 2️⃣1️⃣1️⃣1️⃣2️⃣1️⃣1️⃣1️⃣2️⃣1️⃣
[ObjectJsonSchema](./ObjectJsonSchema/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectSimple](./ObjectSimple/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectUnionExplicit](./ObjectUnionExplicit/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectUnionImplicit](./ObjectUnionImplicit/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ShoppingCartCommodity](./ShoppingCartCommodity/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ShoppingOrderCreate](./ShoppingOrderCreate/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ShoppingOrderPublish](./ShoppingOrderPublish/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ShoppingSaleDetail](./ShoppingSaleDetail/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ShoppingSalePage](./ShoppingSalePage/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣