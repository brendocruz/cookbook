[
	/*
		Aggregation.
		Accumulator operators ($group, $bucket, $bucketAuto).


		Available for use in the `$group` stage, accumulators are operators that
		maintain their stage as documents progress throught the pipeline.

		When used as accumulators in the `$group` stage, these operators take as
		input a single expression, evaluating the expression once for each input
		document, and maintain their stage for the group of documents that share
		the same group key.


		Operators in MongoDB 4.4:

		$accumulator
		$addToSet				Array.
		$avg					Number.
		$first					Document.
		$last					Document.
		$max					Any.
		$mergeObjects			Document.
		$min					Any.
		$push					Array.
		$stdDevPop				Number.
		$stdDevSamp				Number.
		$sum					Number.
	*/


	// Returns the collective average of all numeric value that result from
	// applying a specified expression to each document in a group of documents
	// that share the same group by key. Ignores non-numeric values.
	{ $avg: EXPRESSION },

	// Returns the collective sum of all the numeric values that result from
	// applying a specified expression to each document in a group of documents
	// that share the same group by key. Ignores non-numeric values.
	{ $sum: EXPRESSION },


	// Returns the first document in a group of documents.
	{ $first: EXPRESSION },

	// Returns the last document in a group of documents.
	{ $last: EXPRESSION },


	// Returns the maximum value that results from applying an expression to
	// each document in a group of documents that share the same group by key.
	// Only considers the non-null and non-missing values for the field. If all
	// documents have `null` value or are missing the field, returns `null`.
	{ $max: EXPRESSION },

	// Returns the minimum value that results from applying an expression to
	// each document in a group of documents that share the same group by key.
	// Only considers the non-null and non-missing values for the field. If all
	// documents have `null` value or are missing the field, returns `null`.
	{ $min: EXPRESSION },



	// Returns an array of all values that result form applying an expression to
	// each document that share the same group by key.
	{ $push: EXPRESSION },

	// Returns an array of all unique values that results from applying an
	// expression to each document in a group of documents that share the same
	// group by key.
	{ $addToSet: EXPRESSION },


	// Returns the population standard deviation of the specified expression 
	// for a group of documents that share the same group by key.
	// Ignores non-numeric values. If all operands are non-numeric, returns
	// `null`. If the sample consists of a single numeric value, returns `0`.
	{ $stdDevPop: EXPRESSION },

	// Returns the sample standard deviation of the specified expression for 
	// a group of documents that share the same group by key.
	// Ignores non-numeric values. If all operands are non-numeric, returns
	// `null`. If the sample consists of a single numeric value, returns `null`.
	{ $stdDevSamp: EXPRESSION },


	// Combine multiple documents into a single document. Ignores `null` 
	// operands. If all operands resolves to `null`, returns an empty document.
	// DOCUMENT can be any valid expression that resolves to a document.
	{ $mergeObjects: DOCUMENT },

];



[
	/*
		Aggregation.
		Accumulators (Other stages).


		Some operators that are available as accumulators for the `$group` stage
		are also available for use in other stages but not as accumulators. When
		used in these other stages, these operators do not maintain their state
		and can take as input either a single argument or multiple arguments.
		

		Operators in MongoDB 4.4:
		
		$avg				Number.
		$first				Any.
		$last				Any.
		$max				Any.
		$min				Any.
		$stdDevPop			Number.
		$stdDevSamp			Number.
		$sum				Number.
	*/



	// Returns the average of the specified expression or list of expressions
	// for each document. Ignores non-numeric values.
	{ $avg: EXPRESSION },
	{ $avg: [EXPRESSION_1, EXPRESSION_2, /*...,*/ EXPRESSION_N] },

	// Returns the sum of the specified expression or list of expressions for 
	// each document. Ignores non-numeric values.
	{ $sum: EXPRESSION },
	{ $sum: [EXPRESSION_1, EXPRESSION_2, /*...,*/ EXPRESSION_N] },


	// Returns the first element of the array.
	{ $first: EXPRESSION },

	// Returns the last element of the array.
	{ $last: EXPRESSION },


	// Returns the maximum of the specified expression or list of expressions
	// for each document. Ignores non-numeric values. Only considers the
	// non-null and non-missing values for the field. If all documents have
	// `null` value or are missing the field, returns `null`.
	{ $max: EXPRESSION },
	{ $max: [EXPRESSION_1, EXPRESSION_2, /*...,*/ EXPRESSION_N] },

	// Returns the minimum of the specified expression or list of expressions
	// for each document. Ignores non-numeric values. Only considers the
	// non-null and non-missing values for the field. If all documents have
	// `null` value or are missing the field, returns `null`.
	{ $min: EXPRESSION },
	{ $min: [EXPRESSION_1, EXPRESSION_2, /*...,*/ EXPRESSION_N] },


	// Returns the population standard deviation of the specified expression or
	// list of expressions for each document. Ignores non-numeric values. If all
	// operands are non-numeric, returns `null`. If the sample consists of a
	// single numeric value, returns `0`.
	{ $stdDevPop: EXPRESSION },
	{ $stdDevPop: [EXPRESSION_1, EXPRESSION_2, /*...,*/ EXPRESSION_N], },

	// Returns the sample standard deviation of the specified expression or list
	// of expressions for each document. Ignores non-numeric values. If all
	// operands are non-numeric, returns `null`. If the sample consists of a
	// single numeric value, returns `null`.
	{ $stdDevSamp: EXPRESSION },
	{ $stdDevSamp: [EXPRESSION_1, EXPRESSION_2, /*...,*/ EXPRESSION_N] },

];
