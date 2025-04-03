# Validate Benchmark
## Summary
  - Model
    - schema: chatgpt
    - vendor: openai/o3-mini-2025-01-31
  - Aggregation
    - Scenarios: #8
    - Trial: #80
    - Success: #79
      - 1st: #66
      - 2nd: #12
      - 3rd: #1
    - Failure: #1
    - Nothing: #0
    - Error: #0
    - Average Time: 14452.025 ms
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
[ValidateObjectFunctionSchema](./ValidateObjectFunctionSchema/README.md) | 1️⃣2️⃣1️⃣❌1️⃣2️⃣2️⃣2️⃣3️⃣1️⃣
[ValidateObjectGeometry](./ValidateObjectGeometry/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectHierarchical](./ObjectHierarchical/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectJsonSchema](./ObjectJsonSchema/README.md) | 2️⃣2️⃣2️⃣2️⃣1️⃣2️⃣2️⃣1️⃣2️⃣2️⃣
[ObjectSimple](./ObjectSimple/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectUnionExplicit](./ObjectUnionExplicit/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectUnionImplicit](./ObjectUnionImplicit/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣