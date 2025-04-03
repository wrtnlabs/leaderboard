# LLM Benchmark Scenarios Summary

| Filename | Primary Purpose | Validation Focus | Key Interfaces | Features |
|----------|----------------|-----------------|----------------|----------|
| ValidateObjectConstraint.ts | Creating virtual person for campaign participation | Complex type constraints | `IPerson` | Includes constraints like UUID, pattern, minLength, maximum values |
| ValidateObjectFunctionSchema.ts | Converting functions to schema | Schema generation from function definitions | `App.enrollFunction` | Automates schema generation from a circle drawing function |
| ValidateObjectGeometry.ts | Drawing 3D boxes | 3D coordinate system processing | `IBox3D`, `IPoint3D` | Handles 3D coordinates for scale, position, rotation, pivot |
| ValidateObjectHierarchical.ts | Validating hierarchical object structures | Complex interrelated objects | `ICustomer`, `IChannel`, `IMember`, `IEnterprise` | Interrelated hierarchical structures for channels, members, enterprises |
| ValidateObjectJsonSchema.ts | Converting TypeScript to JSON Schema | Schema generation from type definitions | JSON Schema | Tests ability to convert TypeScript interfaces to JSON Schema |
| ValidateObjectSimple.ts | Simple object validation | Basic property validation | `IMember` | Validates member objects with basic properties (id, name, age) |
| ValidateObjectUnionExplicit.ts | Validating explicit union types | Union types with discriminators | `IShape` (with discriminator) | Validates shape drawing with union types containing `type` field |
| ValidateObjectUnionImplicit.ts | Validating implicit union types | Union types without discriminators | `IShape` (without discriminator) | Validates shape drawing with union types without discriminators |

## Common Technical Features

- Runtime type information utilization via the **typia** library
- Configurations for multiple LLMs (ChatGPT, Claude, Llama, Gemini, 3.0, 3.1)
- Leveraging TypeScript's advanced type system (generics, intersection types, union types)
- Constrained types using `tags` (Format, Pattern, MinLength, Minimum, etc.)
- Type reference control via the `{ reference: true }` option
