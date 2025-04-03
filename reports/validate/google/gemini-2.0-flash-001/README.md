# Validate Benchmark
## Summary
  - Model
    - schema: chatgpt
    - vendor: google/gemini-2.0-flash-001
  - Aggregation
    - Scenarios: #8
    - Trial: #80
    - Success: #30
      - 1st: #30
      - 2nd: #0
      - 3rd: #0
    - Failure: #40
    - Nothing: #0
    - Error: #10
    - Average Time: 6653.05 ms
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
[ValidateObjectConstraint](./ValidateObjectConstraint/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ValidateObjectFunctionSchema](./ValidateObjectFunctionSchema/README.md) | ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
[ValidateObjectGeometry](./ValidateObjectGeometry/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectHierarchical](./ObjectHierarchical/README.md) | ❌❌❌❌❌❌❌❌❌❌
[ObjectJsonSchema](./ObjectJsonSchema/README.md) | ❌❌❌❌❌❌❌❌❌❌
[ObjectSimple](./ObjectSimple/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectUnionExplicit](./ObjectUnionExplicit/README.md) | ❌❌❌❌❌❌❌❌❌❌
[ObjectUnionImplicit](./ObjectUnionImplicit/README.md) | ❌❌❌❌❌❌❌❌❌❌