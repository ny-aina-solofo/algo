/*
	De manière analogue à la méthode some, les tableaux possèdent aussi une méthode every. 
	Celle-ci retourne true lorsque la fonction donnée retourne true pour chaque élément du tableau.

	D’une certaine manière, some est une version de l’opérateur logique || (OU) appliqué aux tableaux, 
	tandis que every est comme l’opérateur && (ET).

	Implémentez every comme une fonction prenant un tableau et une fonction prédicat en paramètres.
	Écrivez deux versions : l’une en utilisant une boucle, et l’autre en utilisant la méthode some.
*/

const everyLoop = (array,test) => {
	for (let index = 0; index < array.length; index++) {
		if (!test(array[index])) return false 
	}
	return true
}

/* loi de De Morgan qui affirment que a && b est équivalent à !(!a || !b). */
const everySome = (array,test) => !array.some((index)=> !test(index));


console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true