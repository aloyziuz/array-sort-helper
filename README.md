# array-sort-helper
A simple library to make sorting array of objects easier
## Install
You can install this library via npm
`npm i @aloysius-software-factory/array-sort-helper`
# #How to use 
This package provides 3 functions: 
* SortFunction
* SortFunctionMultiple
* SortFunctionMultipleFieldAndDirection
These functions will return a function that will be used as an argument when sorting array
`array.sort(SortFunction('name', false, null);`

### SortFunction
SortFunction is the simplest of the 3. It simply sorts an array of objects according to the specified attribute string. 
    `SortFunction<T, V = T>(
	field: keyof V,
	reverse: boolean,
	conversion: (input: any) => V | null
): (a: T, b: T) => number`
It takes 3 arguments: 
1. *field* - a string containing the attribute name you want to sort the array with
2. *reverse* - a boolean which denotes whether you want the array to be sorted in ascending or descending order. `true` means it will sort in ascending order. `false` means it will sort in descending order. 
3. *conversion* - is a function that will be applied to each member to each array to transform it to another form. the input of the function is the value of the object's attribute (T[field]). Pass `null` if no conversion is needed. 

### SortFunctionMultiple
SortFunctionMultiple is similar to SortFunction but it can sort the array using multiple attributes. 
    `SortFunctionMultiple<T, V = T>(
        fields: (keyof V)[],
        reverse: boolean,
        conversions: ((input: any) => V | null)[]
    ): (a: T, b: T) => number`
It takes 3 arguments: 
1. *fields* - an array of attribute names (string) to sort by. sorting will be applied in sequence
2. *reverse* - a boolean which denotes whether you want the array to be sorted in ascending or descending order. `true` means it will sort in ascending order. `false` means it will sort in descending order. 
3. *conversion* - is an array of function that will be applied to each member to each array to transform it to another form. The input of the function is the value of the object's attribute (T[field]). Pass `null` if no conversion is needed. Each function will be applied to the corresponding attribute at the same index as fields

### SortFunctionMultipleFieldAndDirection
SortFunctionMultipleFieldAndDirection is similar to SortFunctionMultiple. It can sort the array using multiple attributes with multiple directions (e.g. sort by attribute X in ascending order then by attribute Y in descending order). 
    `SortFunctionMultipleFieldAndDirection<T, V = T>(
        fields: (keyof V)[],
        reverse: boolean[],
        conversions: ((input: any) => V | null)[]
    ): (a: T, b: T) => number`
It takes 3 arguments: 
1. *fields* - an array of attribute names (string) to sort by. sorting will be applied in sequence
2. *reverse* - an array of boolean which denotes whether you want the array to be sorted in ascending or descending order. `true` means it will sort in ascending order. `false` means it will sort in descending order. The order is applied to the corresponding attribute at the same index as *fields*. 
3. *conversion* - is an array of function that will be applied to each member to each array to transform it to another form. The input of the function is the value of the object's attribute (T[field]). Pass `null` if no conversion is needed. Each function will be applied to the corresponding attribute at the same index as *fields*   