# LLM TypeScript Validation Benchmark

A comprehensive benchmark system for testing LLM validation capabilities across different AI models using TypeScript type definitions. This benchmark evaluates how well Large Language Models can generate correct responses that conform to TypeScript type schemas.

## Quick Start

```bash
# Set up environment
mv .env.example .env
echo "OPENAI_API_KEY=sk-..." >> .env

# Install dependencies
pnpm install

# Build the project
pnpm run build

# Run benchmark with specific model
OPENAI_MODEL="openai/gpt-4o" pnpm start
```

## What This Benchmark Tests

This benchmark evaluates LLM capabilities in:

1. **Type Schema Validation**: Understanding and generating data that conforms to TypeScript type definitions
2. **Complex Object Structure**: Handling nested objects, unions, arrays, and hierarchical data
3. **Constraint Adherence**: Respecting validation rules like string formats, number ranges, and required fields
4. **Error Recovery**: Improving responses based on validation feedback across multiple attempts

### Benchmark Scenarios

The benchmark includes multiple validation scenarios:

- **ObjectSimple**: Basic object validation with primitive types
- **ObjectConstraint**: Objects with validation constraints (age limits, email formats, etc.)
- **ObjectHierarchical**: Nested object structures with multiple levels
- **ObjectJsonSchema**: JSON Schema-based validation
- **ObjectUnionExplicit/Implicit**: Union type handling
- **ObjectFunctionSchema**: Function parameter validation
- **Shopping Cart Scenarios**: Real-world e-commerce object validation

## How the Benchmark Works

1. **Trial Execution**: Each scenario runs 10 trials per model
2. **First Attempt**: Models receive schema and prompt without validation feedback
3. **Retry Logic**: Failed attempts get validation feedback for up to 5 total attempts
4. **Success Metrics**: 
   - **First Try Success Rate**: Percentage of immediate successes (no feedback needed)
   - **Overall Success Rate**: Percentage that eventually succeed (including after feedback)

## Project Structure

```
.
├── README.md                 # This file
├── CLAUDE.md                # Claude Code instructions
├── package.json             # Dependencies and scripts
├── build.config.ts          # Build configuration
├── tsconfig.json           # TypeScript configuration
├── biome.json              # Linting and formatting
├── src/                    # Source code
│   ├── index.ts            # Main entry point
│   ├── constants.ts        # Configuration constants
│   ├── openai.ts          # OpenAI/OpenRouter integration
│   ├── validate/          # Validation benchmark engine
│   └── utils/             # Utility functions
├── scenarios/             # Benchmark test scenarios
│   ├── ValidateObjectSimple.ts
│   ├── ValidateObjectConstraint.ts
│   ├── ValidateShoppingCart*.ts
│   └── internal/          # Shared scenario utilities
├── reports/               # Benchmark results
│   ├── validate/          # Validation benchmark reports
│   │   ├── README.md      # Results summary tables
│   │   ├── anthropic/     # Claude model results
│   │   ├── openai/        # GPT model results
│   │   ├── google/        # Gemini model results
│   │   ├── deepseek/      # DeepSeek model results
│   │   ├── meta-llama/    # Llama model results
│   │   └── mistralai/     # Mistral model results
│   └── analyze-results.ts # Analysis script
└── dist/                 # Built output files
```

## Running the Benchmark

### Prerequisites

1. **API Keys**: You need an OpenRouter API key to access different models
2. **Environment**: Node.js 18+ and pnpm
3. **Model Selection**: Choose from available OpenRouter models

### Environment Setup

Create a `.env` file with your OpenRouter API key:

```bash
# Required: OpenRouter API key
OPENAI_API_KEY=sk-or-v1-...

# Required: Model to benchmark (examples)
OPENAI_MODEL="openai/gpt-4o"              # GPT-4o
OPENAI_MODEL="anthropic/claude-3.5-sonnet" # Claude 3.5 Sonnet
OPENAI_MODEL="google/gemini-pro-1.5"       # Gemini Pro
OPENAI_MODEL="meta-llama/llama-3.3-70b-instruct" # Llama 3.3

# Optional: Schema model for validation (defaults to "chatgpt")
SCHEMA_MODEL="chatgpt"
```

### Running Benchmarks

```bash
# Run with specific model
OPENAI_MODEL="openai/gpt-4o" pnpm start

# Run with different models
OPENAI_MODEL="anthropic/claude-3.5-sonnet" pnpm start
OPENAI_MODEL="google/gemini-pro-1.5" pnpm start
```

### Development Commands

```bash
# Install dependencies
pnpm install

# Build the project
pnpm run build

# Lint and format code
pnpm run lint
pnpm run format

# Generate updated results table
pnpm run analyze-reports
```

## Understanding Results

### Report Structure

Results are organized by vendor and model:
```
reports/validate/
├── openai/gpt-4o-2024-11-20/
│   ├── ObjectSimple/
│   │   ├── README.md
│   │   └── trials/
│   │       ├── 1.success.json
│   │       ├── 2.success.json
│   │       └── ...
│   └── ObjectConstraint/...
└── anthropic/claude-3.5-sonnet/...
```

### Trial Results

Each trial produces a JSON file indicating:
- `X.success.json`: Trial X succeeded
- `X.failure.json`: Trial X failed validation
- `X.error.json`: Trial X encountered an error
- `X.nothing.json`: Trial X produced no response

### Metrics

The benchmark tracks:
1. **First Try Success Rate**: Immediate success without feedback
2. **Overall Success Rate**: Success after retries and feedback
3. **Average Attempts**: Mean number of attempts needed
4. **Failed Tasks**: Number of tasks that never succeeded

## Architecture

### Core Components

1. **ValidateBenchmark Engine** (`src/validate/ValidateBenchmark.ts`):
   - Orchestrates benchmark execution
   - Handles concurrency and retries
   - Generates detailed reports

2. **Scenario System** (`scenarios/`):
   - Type-driven validation scenarios
   - Uses `typia` for runtime type validation
   - Covers various complexity levels

3. **OpenRouter Integration** (`src/openai.ts`):
   - Unified API access to multiple LLM providers
   - Consistent request/response handling

### Key Technologies

- **TypeScript**: Type definitions and validation
- **Typia**: Runtime type validation and schema generation
- **OpenRouter**: Multi-provider LLM API access
- **Unbuild**: Modern build system with rollup

## Contributing

1. **Adding Scenarios**: Create new validation scenarios in `scenarios/`
2. **Model Support**: Add new models by updating model constants
3. **Analysis**: Enhance the analysis script for better insights

## Results

See [`reports/validate/README.md`](reports/validate/README.md) for the latest benchmark results across all tested models.

## License

[MIT License](LICENSE)