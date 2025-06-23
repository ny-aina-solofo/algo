/*	
	Invariant is a condition that does not changing during execution of a given program or algorithm

	Loop-invariant is a condition that is true at the beginning and end of every iteration of the given loop
*/

function mininmum(number,array) {
	let min = array[0];

	// min equals the minimum item in array[0],...,array[0]
	for (let i = 1; i != number; i++) {
		// min equals the minimum item in array[0],...,array[i-1]
		if (array[i]) min = array[i];
	}
	// min equals the minimum item in array[0],...,array[i-1], and i == number
	return min
}

console.log(minimum(4,[2,4,33,50]));
