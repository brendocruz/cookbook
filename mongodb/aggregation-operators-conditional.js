[
	/*
		Aggregation.
		Conditional Expression Operators.


		Operators in MongoDB 4.4:

		$cond
		$ifNull
		$switch
	*/



	// Evaluates a boolean expression to return one of the two specified return
	// expressions.
	{
		$cond: {
			if: BOOLEAN_EXPRESSION,
			then: TRUE_CASE,
			else: FALSE_CASE,
		},

		$cond: [
			BOOLEAN_EXPRESSION,
			TRUE_CASE,
			FALSE_CASE,
		],
	},



	// Evaluates an expression and returns the value of the expression if the
	// expression evaluates to a non-null value. If the expression evaluates to
	// a null value, including instances of undefined values or missing fields,
	// returns the value of the replacement expression.
	{ $ifNull: [EXPRESSION, REPLACEMENT_EXPRESSION_IF_NULL] },



	// Evaluates a series of case expressions. When it finds an expression which
	// evaluates to `true`, executes a specified expression and breaks out of 
	// the control flow.
	{
		$switch: {
			branches: [
				{ case: BOOLEAN_EXPRESSION_1, then: EXPRESSION_1 },
				{ case: BOOLEAN_EXPRESSION_2, then: EXPRESSION_2 },
				/*...*/,
				{ case: BOOLEAN_EXPRESSION_N, then: EXPRESSION_N },
			],

			// Optional. If unspecified and no branch case evaluates to true,
			// returns an error.
			default: EXPRESSION,
		},
	},

];
