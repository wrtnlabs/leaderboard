# Validate Benchmark
## Summary
  - Model
    - schema: chatgpt
    - vendor: anthropic/claude-3.5-sonnet
  - Aggregation
    - Scenarios: #8
    - Trial: #80
    - Success: #80
      - 1st: #77
      - 2nd: #3
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: #0
    - Average Time: 8732.6 ms
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
[ValidateObjectFunctionSchema](./ValidateObjectFunctionSchema/README.md) | 2️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣2️⃣1️⃣1️⃣
[ValidateObjectGeometry](./ValidateObjectGeometry/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectHierarchical](./ObjectHierarchical/README.md) | 1️⃣2️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectJsonSchema](./ObjectJsonSchema/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectSimple](./ObjectSimple/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectUnionExplicit](./ObjectUnionExplicit/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectUnionImplicit](./ObjectUnionImplicit/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣