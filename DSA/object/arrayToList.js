/*
	Écrivez une fonction `tableauVersListe` qui construit une structure de liste comme celle montrée lorsqu'on lui donne `[1, 2, 3]` 
	en argument. 
	Écrivez également une fonction `listeVersTableau` qui produit un tableau à partir d'une liste. 
	
	Ensuite, ajoutez une fonction utilitaire `ajouterDevant`, qui prend un élément et une liste 
	et crée une nouvelle liste qui ajoute l'élément au début de la liste d'entrée, 
	
	et `ieme`, qui prend une liste et un nombre et retourne l'élément à la position donnée dans la liste 
	(zéro correspondant au premier élément) ou `undefined` lorsqu'il n'y a pas un tel élément.

*/


function arrayToList(array) {
	let list = null;
	for(let index = array.length - 1 ; index >= 0 ; index--)
	{
		list = ({ value : array[index], reste : list});	
	}
	console.log(list);
	return list
}
// arrayToList([1,2,3]);

function listToArray(list){
	let array = [];
	/*
		À chaque itération de la boucle, noeud pointe vers la sous-liste actuelle, 
		et le corps de la boucle peut lire sa propriété valeur pour obtenir l'élément courant. 
		À la fin d'une itération, noeud passe à la sous-liste suivante. 
		Lorsque celle-ci est null, nous avons atteint la fin de la liste, et la boucle est terminée.
	*/
	for(let node = list; node ; node = node.reste)
	{
		array.push(node.value);
		// console.log(node.value);
	}
	console.log(array);
	return array
}
// listToArray({value: 1,reste:{value: 2,reste:{value: 3,reste: null}}})


function appendNode(element,list){
	let newList = {value : element, reste : list}; 
	console.log(newList);
	return newList
}
// appendNode(4,{value: 1,reste:{value: 2,reste:null}})


function nth(n,list) {
	for(let node = list; node ; node = node.reste)
	{
		if (n == 0) 
			return node.value
		else if(!node) 
			return undefined
		else return nth(n - 1 ,node.reste)
	}
}
// console.log(nth(1,arrayToList([10, 20, 30])));


























