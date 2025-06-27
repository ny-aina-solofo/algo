/*
	Programme qui consiste en la lecture d'un entier, qui est le rang d'une lettre dans l'alphabet
	Et en l'écriture de la lettre correspondant à ce rang
*/

function letterRanking(ranking:number):void {
	// initialiser un tableau de caractère  avec l'alphabet 
	const alphabet:string = "abcdefghijklmnopqrstuvwxyz";
	const alphabetTab:string[] = alphabet.split("");

	// ajuster le rang pour le faire correspondre à l'index du tableau
	const adjustedRanking: number = ranking - 1;

	if(adjustedRanking >= 0 && adjustedRanking <= 26 ) {
		console.log("lettre correspondant : ",alphabetTab[adjustedRanking]);
	} else {
		console.log("rang invalide");
	}

}

letterRanking(1);

