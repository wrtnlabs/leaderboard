# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Essential Commands

### Build and Run
```bash
pnpm install          # Install dependencies
pnpm run build        # Build the project using unbuild
pnpm start            # Run the benchmark (requires OPENAI_API_KEY in .env)
```

### Linting and Formatting
```bash
pnpm run lint         # Run Biome linter
pnpm run format       # Format code with Biome
```

### Environment Setup
```bash
# Create .env file with OpenRouter API key
echo "OPENAI_API_KEY=sk-..." >> .env

# Set model environment variable (required)
export OPENAI_MODEL="openai/gpt-4o"  # or other model from OpenRouter

# Optional: Set schema model (defaults to "chatgpt")
export SCHEMA_MODEL="chatgpt"
```

## Architecture Overview

This is a benchmark system for testing LLM validation capabilities across different AI models. The system validates whether LLMs can generate correct responses based on TypeScript type definitions.

### Core Architecture

1. **ValidateBenchmark Engine** (`src/validate/ValidateBenchmark.ts`):
   - Central orchestrator that executes validation experiments
   - Supports concurrent execution with configurable parallelism
   - Implements retry logic for validation failures
   - Generates detailed reports of benchmark results

2. **Scenario System** (`scenarios/`):
   - Each scenario tests a specific type validation capability
   - Scenarios range from simple object validation to complex hierarchical structures
   - All scenarios export a validation function that the benchmark engine uses
   - Scenarios leverage the `typia` library for runtime type information

3. **Report Generation** (`reports/`):
   - Results are written to `reports/validate/{vendor}/{model}/`
   - Each experiment produces JSON files with trial results
   - Reports include success/failure status and detailed validation feedback

### Key Design Patterns

1. **Type-Driven Validation**: Uses TypeScript's type system with `typia` to generate validation schemas at runtime
2. **Multi-Model Support**: Abstracts vendor-specific implementations through `IBenchmarkVendor` interface
3. **OpenRouter Integration**: All LLM calls go through OpenRouter API for unified model access
4. **Concurrent Execution**: Uses semaphore pattern for controlled parallel execution

### Build System

- Uses `unbuild` with Rollup for building
- `@ryoppippi/unplugin-typia` plugin transforms TypeScript types at build time
- Scenarios are built as separate entry points alongside main index
- Source maps enabled for debugging