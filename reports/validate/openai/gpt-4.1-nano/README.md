# Validate Benchmark
## Summary
  - Model
    - schema: chatgpt
    - vendor: openai/gpt-4.1-nano
  - Aggregation
    - Scenarios: #12
    - Trial: #120
    - Success: #72
      - 1st: #69
      - 2nd: #3
      - 3rd: #0
    - Failure: #36
    - Nothing: #1
    - Error: #11
    - Average Time: 22743.441666666666 ms
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
[ObjectFunctionSchema](./ObjectFunctionSchema/README.md) | ❌😱❌❌❌❌❌😱❌😱
[ObjectHierarchical](./ObjectHierarchical/README.md) | ❌😱😱1️⃣2️⃣❌2️⃣2️⃣😱😱
[ObjectJsonSchema](./ObjectJsonSchema/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectSimple](./ObjectSimple/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectUnionExplicit](./ObjectUnionExplicit/README.md) | 1️⃣1️⃣1️⃣1️⃣😱1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectUnionImplicit](./ObjectUnionImplicit/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ShoppingCartCommodity](./ShoppingCartCommodity/README.md) | ❌❌❌❌❌❌😱❌😱❌
[ShoppingOrderCreate](./ShoppingOrderCreate/README.md) | 1️⃣1️⃣😱1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ShoppingOrderPublish](./ShoppingOrderPublish/README.md) | ❌❌❌❌⚠️❌❌❌❌❌
[ShoppingSaleDetail](./ShoppingSaleDetail/README.md) | ❌❌❌❌❌❌❌❌❌❌
[ShoppingSalePage](./ShoppingSalePage/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣