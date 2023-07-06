export function SortFunction<T, V = T>(
	field: keyof V,
	reverse: boolean,
	conversion: ((input: any) => any) | null
): (a: T, b: T) => number;

export function SortFunctionMultiple<T, V = T>(
	fields: (keyof V)[],
	reverse: boolean,
	conversions: (((input: any) => any) | null)[]
): (a: T, b: T) => number;

export function SortFunctionMultipleFieldAndDirection<T, V = T>(
	fields: (keyof V)[],
	reverse: boolean[],
	conversions: (((input: any) => any) | null)[]
): (a: T, b: T) => number;
