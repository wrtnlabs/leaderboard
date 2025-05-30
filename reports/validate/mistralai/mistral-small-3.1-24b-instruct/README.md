# Validate Benchmark
## Summary
  - Model
    - schema: chatgpt
    - vendor: mistralai/mistral-small-3.1-24b-instruct
  - Aggregation
    - Scenarios: #8
    - Trial: #80
    - Success: #65
      - 1st: #65
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #2
    - Error: #13
    - Average Time: 41780.25 ms
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
[ValidateObjectConstraint](./ValidateObjectConstraint/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣⚠️1️⃣1️⃣
[ValidateObjectFunctionSchema](./ValidateObjectFunctionSchema/README.md) | 1️⃣⚠️⚠️⚠️⚠️⚠️1️⃣⚠️⚠️⚠️
[ValidateObjectGeometry](./ValidateObjectGeometry/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectHierarchical](./ObjectHierarchical/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectJsonSchema](./ObjectJsonSchema/README.md) | ⚠️1️⃣⚠️1️⃣⚠️1️⃣⚠️⚠️1️⃣⚠️
[ObjectSimple](./ObjectSimple/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectUnionExplicit](./ObjectUnionExplicit/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectUnionImplicit](./ObjectUnionImplicit/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣