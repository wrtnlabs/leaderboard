# Validate Benchmark
## Summary
  - Model
    - schema: chatgpt
    - vendor: openai/gpt-4.1-mini
  - Aggregation
    - Scenarios: #12
    - Trial: #120
    - Success: #118
      - 1st: #92
      - 2nd: #16
      - 3rd: #6
    - Failure: #2
    - Nothing: #0
    - Error: #0
    - Average Time: 7794.658333333334 ms
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
[ObjectConstraint](./ObjectConstraint/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectFunctionSchema](./ObjectFunctionSchema/README.md) | 5️⃣2️⃣4️⃣5️⃣4️⃣1️⃣3️⃣❌3️⃣❌
[ObjectHierarchical](./ObjectHierarchical/README.md) | 2️⃣2️⃣1️⃣1️⃣2️⃣2️⃣2️⃣2️⃣2️⃣2️⃣
[ObjectJsonSchema](./ObjectJsonSchema/README.md) | 1️⃣1️⃣1️⃣1️⃣2️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectSimple](./ObjectSimple/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectUnionExplicit](./ObjectUnionExplicit/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectUnionImplicit](./ObjectUnionImplicit/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ShoppingCartCommodity](./ShoppingCartCommodity/README.md) | 3️⃣3️⃣2️⃣2️⃣2️⃣2️⃣2️⃣3️⃣2️⃣3️⃣
[ShoppingOrderCreate](./ShoppingOrderCreate/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ShoppingOrderPublish](./ShoppingOrderPublish/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ShoppingSaleDetail](./ShoppingSaleDetail/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ShoppingSalePage](./ShoppingSalePage/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣