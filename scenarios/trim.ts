export function trim(
	template: TemplateStringsArray,
	...values: unknown[]
): string {
	const str: string = template.reduce((result, str, i) => {
		const value = values[i] !== undefined ? values[i] : "";
		return result + str + value;
	}, "");
	const lines: string[] = trimArray(str.split("\n"));
	if (lines.length === 0) return "";

	let minimum: number = Math.min(
		...lines
			.filter((str) => str.trim().length !== 0)
			.map((l) => l.length - l.trimStart().length),
	);
	if (minimum === Number.POSITIVE_INFINITY) minimum = 0;
	return lines
		.map((l) => l.slice(minimum).trimEnd())
		.join("\n")
		.trimEnd();
}

const trimArray = (array: string[]): string[] => {
	let first = 0;
	let last: number = array.length - 1;

	for (; first < array.length; ++first)
		if (array[first]?.trim().length !== 0) {
			break;
		}
	for (; last >= 0; --last)
		if (array[last]?.trim().length !== 0) {
			break;
		}
	return array.slice(first, last + 1);
};
