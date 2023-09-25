[
	/*
		Aggregation.
		Arithmetic Expression Operators.


		Arithmetic expression perform mathematic operations on numbers. 
		Some arithmetic expression cal also support date arithmetic.


		Operators in MongoDB 4.4:

		$abs			Number.
		$add			Number, Date.
		$ceil			Integer.
		$divide			Number.
		$exp			Number.
		$floor			Integer.
		$ln				Number.
		$log			Number.
		$log10			Number.
		$mod			Integer.
		$multiply		Number.
		$pow			Number.
		$round			Number.
		$sqrt			Double.
		$subtract		Number, Date.
		$trunc			Number.
	*/



	// Adds numbers together.
	{ $add: [EXPRESSION_1, EXPRESSION_2, /*...*/, EXPRESSION_N] },

	// Adds numbers and a date. Treats the numbers as milliseconds to add to the
	// data.
	{ $add: [DATE, MILLISECONDS_1, MILLISECONDS_2, /*...*/, MILLISECONDS_N] },

	// Subtracts two numbers to return the difference.
	{ $subtract: [EXPRESSION_1, EXPRESSION_2] },

	// Subtracts two dates to return the difference in milliseconds.
	{ $subtract: [DATE_1, DATE_2] },

	// Subtracts a date and a number in milliseconds to return the resulting date.
	{ $subtract: [DATE, MILLISECONDS] },

	// Multiplies one or more numbers.
	{ $multiply: [EXPRESSION_1, EXPRESSION_2, /*...*/, EXPRESSION_N] },

	// Divide one number by another.
	{ $divide: [EXPRESSION_1, EXPRESSION_2] },

	// Returns the remainder of the division of two number.
	{ $mod: [EXPRESSION_1, EXPRESSION_2] },



	// Returns the smallest integer greater than or equal to the specified 
	// number.
	{ $ceil: NUMBER },

	// Returns the largest integer less than or equal to the specified number.
	{ $floor: NUMBER },

	// Rounds a number to a whole integer or to a specified decimal place.
	{ $round: [NUMBER, DECIMAL_PLACE /* Optional. */] },

	// Truncates a number to a whole integer or to a specified decimal place.
	{ $trunc: [NUMBER, DECIPLA_PLACE /* Optional. */] },



	// Returns the absolute value of a number.
	{ $abs: NUMBER },

	// Calculates the square root of a positive number.
	{ $sqrt: NUMBER },

	// Raises a number to the specified exponent.
	{ $pow: [NUMBER, EXPONENT] },

	// Raises Euler's number (e) to the specified exponent.
	{ $exp: EXPONENT },



	// Calculates the log of a number in the specified base.
	{ $log: [NUMBER /* Positive Integer. */, BASE /* >1 */] },

	// Calculates the log base 10 of a number.
	{ $log10: NUMBER },

	// Calculates the natural log of a number.
	// Equivalent to { $log: [NUMBER, Math.E] }.
	{ $ln: NUMBER },

];
