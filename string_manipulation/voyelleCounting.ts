/*
	Programme qui donne en entrée une chaîne de caractère 
	Et qui donne en sortie le nombre de consonne et voyelle dans la chaîne 
	Réafficher la chaîne en changeant toutes les voyelles par des blancs
*/

function voyelleCounting(text:string):void {
	let voyelleCounter:number = 0;
	let consonneCounter:number = 0;
	let textLower:string = text.toLowerCase();
	let word:string[] = textLower.split("");

	const reConsonne = /[zrtpqsdfghjklmwxcvbn]/
	
	for(let i:number = 0; i < word.length; i++) {
		
		if (word[i] === ' ') continue;

		if(word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u' || word[i] == 'y') {
			voyelleCounter = voyelleCounter + 1;
		}

		if(reConsonne.test(word[i]) === true) {
			consonneCounter = consonneCounter + 1; 
		}
		
	}
	console.log("nombre de voyelle : ",voyelleCounter);
	console.log("nombre de consonne : ",consonneCounter);
}

voyelleCounting("tuer n'est pas jouer");