/**
 * generates a sorting function to be used with array.sort method.
 * @param {string} field
 * @param {boolean} reverse true (ascending) or false (descending)
 * @param {function} conversion optional. null if dont need to apply conversion function
 */
function SortFunction(field, reverse, conversion) {
	//create function to get attribute (after conversion function)
	const GetSortAttribute = conversion
		? function (x) {
				return conversion(x[field]);
		  }
		: function (x) {
				return x[field];
		  };

	reverse = !reverse ? 1 : -1;

	return function (a, b) {
		var a = GetSortAttribute(a);
		var b = GetSortAttribute(b);
		return reverse * ((a > b) - (b > a));
	};
}

/**
 *
 * @param {string[]} fields
 * @param {boolean} reverse
 * @param {Function[]} conversions
 */
function SortFunctionMultiple(fields, reverse, conversions) {
	if (fields.length !== conversions.length)
		throw "# of sorting fields and # of conversion functions does not match";

	return function (a, b) {
		var fieldindex = 0;
		var res = 0;
		while (res == 0) {
			if (fieldindex >= fields.length) break;

			var sortfunction = SortFunction(
				fields[fieldindex],
				reverse,
				conversions[fieldindex]
			);
			res = sortfunction(a, b);
			fieldindex++;
		}
		return res;
	};
}

/**
 *
 * @param {string[]} fields
 * @param {boolean[]} reverseDirections
 * @param {Function[]} conversion
 */
function SortFunctionMultipleFieldAndDirection(
	fields,
	reverseDirections,
	conversions
) {
	if (fields.length !== conversions.length)
		throw "# of sorting fields and # of conversion functions does not match";

	return function (a, b) {
		var fieldindex = 0;
		var res = 0;
		while (res == 0) {
			if (fieldindex >= fields.length) break;

			var sortfunction = SortFunction(
				fields[fieldindex],
				reverseDirections[fieldindex],
				conversions[fieldindex]
			);
			res = sortfunction(a, b);
			fieldindex++;
		}
		return res;
	};
}

module.exports = {
	SortFunction: SortFunction,
	SortFunctionMultiple: SortFunctionMultiple,
	SortFunctionMultipleFieldAndDirection: SortFunctionMultipleFieldAndDirection,
};
