/*
	Écrivez une fonction d’ordre supérieur appelée loop qui reproduit le comportement d’une instruction for.
	
	Elle prend en paramètres :
    - une valeur de départ,
	- une fonction de test,
	- une fonction de mise à jour,
	- et une fonction de corps (body).

	À chaque itération, elle commence par exécuter la fonction de test sur la valeur actuelle de la boucle, 
	et s’arrête si cette fonction retourne false.
	Ensuite, elle appelle la fonction de corps en lui passant la valeur actuelle.
	Enfin, elle appelle la fonction de mise à jour pour créer une nouvelle valeur, puis recommence depuis le début.

	Lors de la définition de cette fonction, vous pouvez utiliser une boucle classique pour gérer le déroulement de la boucle.

*/

const ownLoop = (start,test,update,body) => {
	for (let index = start; test(index); index = update(index)) {
		body(index);
	}
}
ownLoop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
