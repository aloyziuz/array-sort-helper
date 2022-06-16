export function SortFunction<T>(
	field: keyof T,
	reverse: boolean,
	conversion: Function | null
): (a: T, b: T) => number;

export function SortFunctionMultiple<T>(
	fields: (keyof T)[],
	reverse: boolean,
	conversions: (Function | null)[]
): (a: T, b: T) => number;

export function SortFunctionMultipleFieldAndDirection<T>(
	fields: (keyof T)[],
	reverse: boolean[],
	conversions: (Function | null)[]
): (a: T, b: T) => number;
