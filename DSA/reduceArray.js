/*
	Another common thing to do with arrays is to compute a single value from
	them. Our recurring example, summing a collection of numbers, is an instance
	of this. Another example is finding the script with the most characters.
	The higher-order operation that represents this pattern is called reduce (some-
	times also called fold). It builds a value by repeatedly taking a single element
	from the array and combining it with the current value.
*/

const reduce = (array,combine,start) => {
	let current = start;
	for (let element of array) {
		current = combine(current, element);
	}
	return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// → 10