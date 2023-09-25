[
	/*
		Aggregation.
		Type Expression Operators.


		Operators in MongoDB 4.4:

		$convert
		$isNumber
		$toBool
		$toDate
		$toDecimal
		$toDouble
		$toInt
		$toLong
		$toObjectId
		$toString
		$type
	*/



	// Converts a value to a specified type.
	{
		$convert: {
			input: EXPRESSION,

			// Possible values: 'bool', 'date', 'decimal' 'double', 'int', 
			// 'long', 'objectId', 'string'.
			to: TYPE_EXPRESSION,

			// Optional. If unspecified, throws an error upon encountering an 
			// error.
			onError: EXPRESSION,

			// Optional. If unspecified, returns `null` if the `input` is `null`
			// or missing.
			onNull: EXPRESSION,
		},
	},

	// Converts a value to a boolean. If the value cannot be converted, throws
	// an error. If the value is `null` or missing, returns `null`.
	{ $toBool: EXPRESSION },

	// Converts a value to a Date. If the value cannot be converted, throws an
	// error. If the value is `null` or missing, returns `null`.
	{ $toDate: EXPRESSION },

	// Converts a value to a Decimal. If the value cannot be converted, throws
	// an error. If the value is `null` or missing, returns `null`.
	{ $toDecimal: EXPRESSION },

	// Converts a value to a double. If the value cannot be converted, throws
	// an error. If the value is `null` or missing, returns `null`.
	{ $toDouble: EXPRESSION },

	// Converts a value to an integer. If the value cannot be converted, throws
	// an error. If the value is `null` or missing, returns `null`.
	{ $toInt: EXPRESSION },

	// Converts a value to a long. If the value cannot be converted, throws an
	// error. If the value is `null` or missing, returns `null`.
	{ $toLong: EXPRESSION },

	// Converts a value to an ObjectId. If the value cannot be converted, throws
	// an error. If the value is `null` or missing, returns `null`.
	{ $toObjectId: EXPRESSION },

	// Converts a value to a string. If the value cannot be converted, throws an
	// error. If the value is `null` or missing, returns `null`.
	{ $toString: EXPRESSION },



	// Checks if the specified expression resolves to Intenger, Decimal, Double
	// or Long.
	{ $isNumber: EXPRESSION },

	// Returns a string that specifies the BSON type of the argument.
	{ $type: EXPRESSION },

];
