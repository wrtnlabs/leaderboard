# Validate Benchmark
## Summary
  - Model
    - schema: chatgpt
    - vendor: anthropic/claude-opus-4
  - Aggregation
    - Scenarios: #12
    - Trial: #120
    - Success: #97
      - 1st: #93
      - 2nd: #4
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: #23
    - Average Time: 19006.841666666667 ms
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
[ObjectFunctionSchema](./ObjectFunctionSchema/README.md) | 1️⃣😱1️⃣😱😱😱1️⃣😱1️⃣😱
[ObjectHierarchical](./ObjectHierarchical/README.md) | 1️⃣1️⃣2️⃣2️⃣1️⃣1️⃣2️⃣2️⃣1️⃣1️⃣
[ObjectJsonSchema](./ObjectJsonSchema/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣😱
[ObjectSimple](./ObjectSimple/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectUnionExplicit](./ObjectUnionExplicit/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectUnionImplicit](./ObjectUnionImplicit/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ShoppingCartCommodity](./ShoppingCartCommodity/README.md) | 1️⃣😱1️⃣😱😱1️⃣1️⃣1️⃣1️⃣😱
[ShoppingOrderCreate](./ShoppingOrderCreate/README.md) | 1️⃣1️⃣1️⃣😱1️⃣1️⃣1️⃣1️⃣😱😱
[ShoppingOrderPublish](./ShoppingOrderPublish/README.md) | 😱1️⃣😱1️⃣1️⃣😱😱😱1️⃣1️⃣
[ShoppingSaleDetail](./ShoppingSaleDetail/README.md) | 😱1️⃣😱1️⃣1️⃣😱1️⃣😱1️⃣1️⃣
[ShoppingSalePage](./ShoppingSalePage/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣