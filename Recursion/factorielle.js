/* Recursion */

function factorielle(n) {
	if(n == 0) return 1; 
	return n * factorielle(n-1); 
}

console.log(factorielle(4));
console.log(factorielle(5)); 