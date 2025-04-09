# Validate Benchmark
## Summary
  - Model
    - schema: llama
    - vendor: deepseek/deepseek-r1
  - Aggregation
    - Scenarios: #12
    - Trial: #120
    - Success: #26
      - 1st: #26
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #53
    - Error: #41
    - Average Time: 40363.76666666667 ms
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
[ObjectConstraint](./ObjectConstraint/README.md) | ⚠️1️⃣1️⃣1️⃣⚠️1️⃣1️⃣1️⃣1️⃣⚠️
[ObjectFunctionSchema](./ObjectFunctionSchema/README.md) | ⚠️😱⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
[ObjectHierarchical](./ObjectHierarchical/README.md) | ⚠️⚠️⚠️1️⃣⚠️⚠️⚠️1️⃣⚠️⚠️
[ObjectJsonSchema](./ObjectJsonSchema/README.md) | 1️⃣⚠️1️⃣⚠️⚠️⚠️1️⃣⚠️⚠️1️⃣
[ObjectSimple](./ObjectSimple/README.md) | ⚠️⚠️⚠️⚠️1️⃣⚠️⚠️⚠️1️⃣1️⃣
[ObjectUnionExplicit](./ObjectUnionExplicit/README.md) | ⚠️1️⃣⚠️1️⃣⚠️⚠️⚠️1️⃣⚠️1️⃣
[ObjectUnionImplicit](./ObjectUnionImplicit/README.md) | 1️⃣⚠️⚠️1️⃣1️⃣1️⃣1️⃣⚠️⚠️1️⃣
[ShoppingCartCommodity](./ShoppingCartCommodity/README.md) | 😱😱😱😱😱😱😱😱😱😱
[ShoppingOrderCreate](./ShoppingOrderCreate/README.md) | 😱😱😱😱😱😱😱😱😱😱
[ShoppingOrderPublish](./ShoppingOrderPublish/README.md) | 😱😱😱😱😱😱😱😱😱😱
[ShoppingSaleDetail](./ShoppingSaleDetail/README.md) | 😱😱😱😱😱😱😱😱😱😱
[ShoppingSalePage](./ShoppingSalePage/README.md) | ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️