[
	/*
		Aggregation.
		Comparison Expression Operators.
	

		Comparison expressions return a boolean except for $cmp which returns a
		number.


		Operators in MongoDB 4.4:

		$cmp		Boolean.
		$eq			Boolean.
		$gt			Boolean.
		$gte		Boolean.
		$lt			Boolean.
		$lte		Boolean.
		$ne			Boolean.
	*/



	// Returns `0` if the two values are equivalent, `1` if the first value is
	// greater than the second, and `-1` if the first value is less than the
	// second.
	{ $cmp: [EXPRESSION_1, EXPRESSION_2] },

	// Return `true` if the values are equivalent.
	{ $eq: [EXPRESSION_1, EXPRESSION_2] },

	// Return `true` if the first value is greater than the second.
	{ $gt: [EXPRESSION_1, EXPRESSION_2] },

	// Return `true` if the first value is greater than or equal to the second.
	{ $gte: [EXPRESSION_1, EXPRESSION_2] },

	// Return `true` if the first value is less than the second.
	{ $lt: [EXPRESSION_1, EXPRESSION_2] },

	// Return `true` if the first value is less than or equal to the second.
	{ $lte: [EXPRESSION_1, EXPRESSION_2] },

	// Return `true` if the values are not equivalent.
	{ $ne: [EXPRESSION_1, EXPRESSION_2] },
];
