[
	/*
		Aggregation.
		Boolean Expression Operators.


		Boolean expression evaluate their argument expressions as boolean and
		return a boolean as the result.


		Operators in MongoDB 4.4:
	
		$and		Boolean.
		$not		Boolean.
		$or			Boolean.
	*/



	// Evaluates one or more expressions and returns `true` if all of the
	// expressions are `true` or if run with no argument expression.
	{ $and: [EXPRESSION_1, EXPRESSION_2, /*...*/] },

	// Evaluates one or more expressions and returns `true` if any of the
	// expressions are `true`.
	{ $or: [EXPRESSION_1, EXPRESSION_2, /*...*/] },

	// Evaluates a boolean and returns the opposite boolean value.
	{ $not: EXPRESSION },

];
