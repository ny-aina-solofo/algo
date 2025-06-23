/*
	programme qui affiche une phrase renversée. 
	La phrase commence obligatoirement par une lettre 
	Ses mots sont séparés par un seul espace et ne se termine pas par un espace
*/



function reverseSentence(text:string):string {
	
	// verifier les sensibilités à la case
	const re = /^[a-zA-Z][a-zA-Z0-9_]*( [a-zA-Z0-9_]+)*$/; 
	if(re.test(text) === false) {
		console.log("mauvais format de texte");
		return;
	}

	// décomposer les textes et les stocker dans un tableau 
	let word:string[] = text.split(" ");

	// inverser le tableau des textes décomposer
	for(let index:number = 0; index < Math.floor(word.length) / 2; index++) {
		let mirror:string = word[index];
		word[index] = word[word.length - 1 - index];
		word[word.length - 1 - index] = mirror;
	}

	// recomposer les textes inversés
	const textReverse:string = word.join(" ");

	// afficher le résultat
	console.log(textReverse);
	return textReverse;
}

reverseSentence("tuer n'est pas jouer");