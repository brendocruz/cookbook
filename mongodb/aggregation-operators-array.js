[
	/* 
		Aggregation.
		Array Expression Operators.


		Operators in MongoDB 4.4:

		$arrayElemAt		Any.
		$arrayToObject		Document.
		$concatArrays		Array.
		$filter				Array.
		$in					Boolean.
		$indexOfArray		Integer.
		$isArray			Boolean.
		$map				Array.
		$objectToArray		Array.
		$range				Array.
		$reduce				Any.
		$reverseArray		Array.
		$size				Integer.
		$slice				Array.
		$zip				Array.
	*/



	// Returns the element at the specified array index.
	{ $arrayElemAt: [ARRAY, INDEX], },

	// Returns the number of elements in the array.
	{ $size: ARRAY },



	// Converts an array into a single document.
	{
		$arrayToObject: [
			[
				[FIELD_NAME_1, FIELD_VALUE_1],
				[FIELD_NAME_2, FIELD_VALUE_2],
				/*...,*/
				[FIELD_NAME_N, FIELD_VALUE_N],
			],
		],

		$arrayToObject: {
			$literal: [
				/*...,*/
				[FIELD_NAME_N, FIELD_VALUE_N],
			],
		},
	},
	{
		$arrayToObject: [
			[
				{ 'k': FIELD_NAME_1, 'v': FIELD_VALUE_1 },
				{ 'k': FIELD_NAME_2, 'v': FIELD_VALUE_2 },
				/*...,*/
				{ 'k': FIELD_NAME_N, 'v': FIELD_VALUE_N },
			],
		],

		$arrayToObject: {
			$literal: [
				{ 'k': FIELD_NAME_N, 'v': FIELD_VALUE_N },
			],
		},
	},

	// Converts a document to an array. The return array contains an element for
	// each field/value pair in the original document. Each element in the
	// return array is a document that contains two field `k` and `v`.
	// The field `k` contains the field name in the original document.
	// The field `v` contains the value of the field in the original document.
	{ $objectToArray: OBJECT },



	// Concatenates arrays to return the concatenated array.
	{ $concatArrays: [ARRAY1, ARRAY2, /* ..., */, ARRAYN] },

	// Returns a boolean indicating whether a specified value is in an array.
	{ $in: [EXPRESSION, ARRAY_EXPRESSION] },

	// Searches an array for an occurrence of a specified value and returns the
	// array index of the first occurrence. If not found, returns -1.
	{
		$indexOfArray: [
			ARRAY_EXPRESSION,
			SEARCH_EXPRESSION,

			// Integer. Optional. Specifies the starting index position for the
			// search. If unspecified, the starting index position for the
			// search is the beginning of the array.
			START,

			// Integer. Optional. Specifies the ending index position for the
			// search. If unspecified, the ending index position for the
			// search is the beginning of the array.
			END,
		],
	},

	// Determines if the operand is an array. Returns a boolean.
	{ $isArray: ARRAY },



	// Returns an array whose elements are a generated sequence of numbers.
	{ $range: [START_INCLUSIVE, END_EXCLUSIVE, STEP /* Optional. */] },



	// Returns the array with the elements in reverse order.
	{ $reverseArray: ARRAY_EXPRESSION },

	// Returns a subset of an array.
	{
		// Returns the first NUMBER elements.
		$slice: [ARRAY, NUMBER /* Positive Integer */],

		// Returns the last NUMBER elements.
		$slice: [ARRAY, -NUMBER /* Negative Integer */],

		// Returns the first NUMBER elements starting from POSITION 
		// counting from the start.
		$slice: [ARRAY, POSITION /* Positive Integer */, NUMBER],

		// Returns the first NUMBER elements starting from POSITION 
		// counting from the end.
		$slice: [ARRAY, -POSITION /* Negative Integer */, NUMBER],
	},



	// Selects a subset of an array to return based on the specified condition.
	{
		$filter: {
			input: ARRAY_EXPRESSION,

			// Optional. A name for the variable that represents each individual
			// element of the `input` array. If no name is specified, the
			// variable name defaults to `this`.
			as: STRING,

			// An expression that resolves to a boolean value used to determine
			// if an element should be included in the output array. The
			// expression references each element of the `input` array
			// individually with the variable name specified in `as`. ($$STRING)
			cond: BOOLEAN_EXPRESSION,
		}
	},

	// Applies an expression to each item in an array and returns an array with
	// the applied results.
	{
		$map: {
			input: ARRAY_EXPRESSION,

			// Optional. A name for the variable that represents each individual
			// element of the `input` array. If no name is specified, the
			// variable name defaults to `this`.
			as: STRING,

			// An expression that is applied to each element of the `input`
			// array. The expression references each element individually with 
			// the variable name specified in `as`. ($$STRING)
			in: BOOLEAN_EXPRESSION,
		}
	},

	// Applies an expression to each element in an array and combines them into
	// a single value.
	{
		$reduce: {
			input: ARRAY_EXPRESSION,

			// The initial cumulative `value` set before `in` is applied to the
			// first element of the `input` array.
			initialValue: EXPRESSION,

			// A valid expression that is applied to each element in the `input`
			// array. During its evaluation, two variables will be available:
			// - `$$value` represents the cumulative value of the expression.
			// - `$$this` refers to the element being processed.
			in: BOOLEAN_EXPRESSION,
		}
	},

	// Transposes an array of input arrays so that the first element of the
	// output array would be an array containing the first element of each
	// array, the second element would be an array containing the second element
	// of each array, and so on.
	{
		$zip: {
			inputs: [
				ARRAY_EXPRESSION_1,
				ARRAY_EXPRESSION_2,
				/*...,*/,
				ARRAY_EXPRESSION_N
			],

			// Optional. Specifies whether the length of the longest array 
			// determines the number of arrays in output array. The default
			// value is `false`.
			useLongestLength: BOOLEAN,


			// Optional. An array of default element values for each array to 
			// use if the input arrays have different lengths and 
			// `useLongestLength: true`. If empty or not specified, uses `null` 
			// as the default value. You must specify a default for each input
			// array.
			defaults: ARRAY_EXPRESSION,
		},
	},

];
