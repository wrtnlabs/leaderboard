import type { ILlmFunction, ILlmSchema } from "@samchon/openapi";

/**
 * Schema enhancer that applies the Mastra technique of embedding constraints
 * as JSON in description fields to improve LLM compatibility.
 *
 * This addresses the issue where many AI models ignore standard JSON Schema
 * constraint properties but do pay attention to descriptions.
 *
 * Technique inspired by Mastra's MCP Tool Compatibility Layer:
 * @see https://mastra.ai/blog/mcp-tool-compatibility-layer
 */

/**
 * Transform a function schema by embedding JSON constraints in descriptions
 * following the Mastra technique.
 */
export function enhanceFunction(func: ILlmFunction): ILlmFunction {
	return {
		...func,
		parameters: enhanceSchema(func.parameters),
	};
}

/**
 * Transform a schema by embedding constraints as JSON in description fields.
 * This is the core implementation of the Mastra technique for better LLM compatibility.
 */
export function enhanceSchema(schema: ILlmSchema): ILlmSchema {
	if (!schema || typeof schema !== "object") {
		return schema;
	}

	const enhanced = { ...schema };

	// Handle different schema types
	if ("properties" in enhanced && enhanced.properties) {
		enhanced.properties = Object.fromEntries(
			Object.entries(enhanced.properties).map(([key, value]) => [
				key,
				enhanceSchema(value),
			]),
		);
	}

	if ("items" in enhanced && enhanced.items) {
		enhanced.items = enhanceSchema(enhanced.items);
	}

	if (
		"additionalProperties" in enhanced &&
		typeof enhanced.additionalProperties === "object"
	) {
		enhanced.additionalProperties = enhanceSchema(
			enhanced.additionalProperties,
		);
	}

	// Apply constraint enhancement to individual schema
	return enhanceSchemaConstraints(enhanced);
}

/**
 * Convert constraint properties to JSON-encoded descriptions.
 */
function enhanceSchemaConstraints(schema: ILlmSchema): ILlmSchema {
	const enhanced = { ...schema };
	const constraints: Record<string, unknown> = {};

	// Collect constraint properties
	const constraintProps = [
		"format",
		"pattern",
		"minLength",
		"maxLength",
		"minimum",
		"maximum",
		"exclusiveMinimum",
		"exclusiveMaximum",
		"minItems",
		"maxItems",
		"uniqueItems",
		"multipleOf",
		"enum",
	] as const;

	for (const prop of constraintProps) {
		if (prop in enhanced) {
			constraints[prop] = enhanced[prop as keyof ILlmSchema];
		}
	}

	// If we have constraints, encode them in the description
	if (Object.keys(constraints).length > 0) {
		const constraintJson = JSON.stringify(constraints);
		const existingDescription = enhanced.description || "";

		// Combine existing description with constraint JSON
		const enhancedDescription = existingDescription
			? `${existingDescription}\n${constraintJson}`
			: constraintJson;

		enhanced.description = enhancedDescription;
	}

	// Also handle typia's @-prefixed constraint descriptions
	if (enhanced.description && typeof enhanced.description === "string") {
		enhanced.description = convertTypiaConstraints(enhanced.description);
	}

	return enhanced;
}

/**
 * Convert typia's @-prefixed constraints to JSON format.
 * e.g., "@format email" -> {"format":"email"}
 */
function convertTypiaConstraints(description: string): string {
	const constraintRegex = /@(\w+)\s+([^\n@]+)/g;
	const constraints: Record<string, unknown> = {};

	let remainingDescription = description;

	for (;;) {
		const match = constraintRegex.exec(description);
		if (match === null) break;

		const [fullMatch, key, value] = match;

		// Parse the value appropriately
		let parsedValue: unknown = value.trim();

		// Try to parse as number or boolean if appropriate
		if (parsedValue === "true") {
			parsedValue = true;
		} else if (parsedValue === "false") {
			parsedValue = false;
		} else if (/^\d+$/.test(parsedValue as string)) {
			parsedValue = Number.parseInt(parsedValue as string, 10);
		} else if (/^\d+\.\d+$/.test(parsedValue as string)) {
			parsedValue = Number.parseFloat(parsedValue as string);
		}

		constraints[key] = parsedValue;

		// Remove the processed constraint from description
		remainingDescription = remainingDescription.replace(fullMatch, "").trim();
	}

	// If we found constraints, create JSON representation
	if (Object.keys(constraints).length > 0) {
		const constraintJson = JSON.stringify(constraints);
		return remainingDescription
			? `${remainingDescription}\n${constraintJson}`
			: constraintJson;
	}

	return description;
}
