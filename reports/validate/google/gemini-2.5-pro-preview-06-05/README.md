# Validate Benchmark
## Summary
  - Model
    - schema: chatgpt
    - vendor: google/gemini-2.5-pro-preview-06-05
  - Aggregation
    - Scenarios: #24
    - Trial: #240
    - Success: #131
      - 1st: #88
      - 2nd: #27
      - 3rd: #4
    - Failure: #74
    - Nothing: #14
    - Error: #21
    - Average Time: 79072.57916666666 ms
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
[ObjectFunctionSchema](./ObjectFunctionSchema/README.md) | 😱😱😱😱😱😱😱😱😱😱
[ObjectFunctionSchema-embedded-json-desc](./ObjectFunctionSchema-embedded-json-desc/README.md) | 😱😱😱😱😱😱😱😱😱😱
[ObjectSimple](./ObjectSimple/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectSimple-embedded-json-desc](./ObjectSimple-embedded-json-desc/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ShoppingSaleDetail](./ShoppingSaleDetail/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ShoppingSaleDetail-embedded-json-desc](./ShoppingSaleDetail-embedded-json-desc/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectConstraint](./ObjectConstraint/README.md) | 1️⃣1️⃣2️⃣1️⃣1️⃣1️⃣1️⃣1️⃣2️⃣1️⃣
[ObjectConstraint-embedded-json-desc](./ObjectConstraint-embedded-json-desc/README.md) | 1️⃣⚠️1️⃣⚠️1️⃣1️⃣1️⃣2️⃣1️⃣1️⃣
[ObjectHierarchical](./ObjectHierarchical/README.md) | 1️⃣2️⃣1️⃣1️⃣2️⃣1️⃣1️⃣2️⃣1️⃣1️⃣
[ObjectHierarchical-embedded-json-desc](./ObjectHierarchical-embedded-json-desc/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣2️⃣
[ShoppingSalePage](./ShoppingSalePage/README.md) | ❌❌❌❌❌❌❌❌⚠️❌
[ShoppingSalePage-embedded-json-desc](./ShoppingSalePage-embedded-json-desc/README.md) | ❌❌❌❌❌❌❌❌❌❌
[ObjectUnionExplicit](./ObjectUnionExplicit/README.md) | 1️⃣2️⃣1️⃣1️⃣2️⃣2️⃣1️⃣1️⃣2️⃣1️⃣
[ObjectUnionExplicit-embedded-json-desc](./ObjectUnionExplicit-embedded-json-desc/README.md) | 2️⃣2️⃣⚠️2️⃣1️⃣2️⃣1️⃣1️⃣1️⃣1️⃣
[ShoppingOrderPublish](./ShoppingOrderPublish/README.md) | ❌❌❌❌❌❌❌❌❌❌
[ShoppingOrderPublish-embedded-json-desc](./ShoppingOrderPublish-embedded-json-desc/README.md) | ❌❌❌❌❌❌❌❌❌❌
[ShoppingCartCommodity](./ShoppingCartCommodity/README.md) | ❌❌⚠️❌⚠️⚠️❌⚠️❌⚠️
[ShoppingCartCommodity-embedded-json-desc](./ShoppingCartCommodity-embedded-json-desc/README.md) | ❌❌❌❌❌❌❌❌❌❌
[ObjectUnionImplicit](./ObjectUnionImplicit/README.md) | 4️⃣2️⃣5️⃣1️⃣5️⃣4️⃣1️⃣1️⃣2️⃣1️⃣
[ObjectUnionImplicit-embedded-json-desc](./ObjectUnionImplicit-embedded-json-desc/README.md) | 5️⃣2️⃣3️⃣5️⃣❌2️⃣2️⃣2️⃣5️⃣😱
[ShoppingOrderCreate](./ShoppingOrderCreate/README.md) | ❌❌❌❌❌❌❌❌❌❌
[ShoppingOrderCreate-embedded-json-desc](./ShoppingOrderCreate-embedded-json-desc/README.md) | ❌❌⚠️❌❌❌❌❌❌❌
[ObjectJsonSchema](./ObjectJsonSchema/README.md) | ⚠️3️⃣3️⃣2️⃣2️⃣1️⃣4️⃣⚠️5️⃣2️⃣
[ObjectJsonSchema-embedded-json-desc](./ObjectJsonSchema-embedded-json-desc/README.md) | 3️⃣1️⃣⚠️2️⃣6️⃣2️⃣5️⃣4️⃣⚠️2️⃣