# Validate Benchmark
## Summary
  - Model
    - schema: chatgpt
    - vendor: anthropic/claude-opus-4
  - Aggregation
    - Scenarios: #24
    - Trial: #240
    - Success: #126
      - 1st: #117
      - 2nd: #9
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: #114
    - Average Time: 18327.0875 ms
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
[ObjectSimple](./ObjectSimple/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectSimple-embedded-json-desc](./ObjectSimple-embedded-json-desc/README.md) | 1️⃣1️⃣1️⃣1️⃣😱1️⃣1️⃣😱1️⃣😱
[ObjectConstraint](./ObjectConstraint/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectConstraint-embedded-json-desc](./ObjectConstraint-embedded-json-desc/README.md) | 1️⃣😱😱😱😱😱😱1️⃣😱😱
[ObjectUnionImplicit](./ObjectUnionImplicit/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectUnionImplicit-embedded-json-desc](./ObjectUnionImplicit-embedded-json-desc/README.md) | 😱😱😱😱😱😱😱😱😱😱
[ObjectHierarchical](./ObjectHierarchical/README.md) | 2️⃣1️⃣2️⃣2️⃣1️⃣1️⃣2️⃣2️⃣2️⃣1️⃣
[ObjectHierarchical-embedded-json-desc](./ObjectHierarchical-embedded-json-desc/README.md) | 😱😱😱😱😱😱😱😱😱😱
[ShoppingSalePage](./ShoppingSalePage/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ShoppingSalePage-embedded-json-desc](./ShoppingSalePage-embedded-json-desc/README.md) | 😱😱😱😱😱😱😱1️⃣😱😱
[ShoppingSaleDetail](./ShoppingSaleDetail/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ShoppingSaleDetail-embedded-json-desc](./ShoppingSaleDetail-embedded-json-desc/README.md) | 😱1️⃣😱😱😱😱😱😱😱😱
[ObjectJsonSchema](./ObjectJsonSchema/README.md) | 1️⃣1️⃣😱1️⃣1️⃣1️⃣😱1️⃣1️⃣1️⃣
[ObjectJsonSchema-embedded-json-desc](./ObjectJsonSchema-embedded-json-desc/README.md) | 😱😱1️⃣😱😱😱😱😱😱😱
[ObjectUnionExplicit](./ObjectUnionExplicit/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectUnionExplicit-embedded-json-desc](./ObjectUnionExplicit-embedded-json-desc/README.md) | 😱😱😱😱😱😱😱😱😱😱
[ShoppingCartCommodity](./ShoppingCartCommodity/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ShoppingCartCommodity-embedded-json-desc](./ShoppingCartCommodity-embedded-json-desc/README.md) | 😱1️⃣😱😱😱😱1️⃣😱😱😱
[ObjectFunctionSchema](./ObjectFunctionSchema/README.md) | 😱😱😱😱😱😱😱😱😱😱
[ObjectFunctionSchema-embedded-json-desc](./ObjectFunctionSchema-embedded-json-desc/README.md) | 😱😱😱😱😱😱😱😱😱😱
[ShoppingOrderCreate](./ShoppingOrderCreate/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ShoppingOrderCreate-embedded-json-desc](./ShoppingOrderCreate-embedded-json-desc/README.md) | 😱😱😱😱😱😱😱😱😱😱
[ShoppingOrderPublish](./ShoppingOrderPublish/README.md) | 1️⃣😱1️⃣1️⃣😱1️⃣1️⃣1️⃣1️⃣😱
[ShoppingOrderPublish-embedded-json-desc](./ShoppingOrderPublish-embedded-json-desc/README.md) | 😱1️⃣2️⃣1️⃣2️⃣1️⃣😱1️⃣2️⃣😱