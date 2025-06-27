/*
	Deux joueurs lancent en même temps un dé dont les faces sont numérotées de 1 à 6. 
	Le joueur qui obtiendra la plus grande valeur aura un point. 
	Le jeu s’arrête quand l’un des joueurs arrive le premier à un score de 10 points.
	Ecrire un programme simulant ce jeu et affiche le numéro du joueur gagnant.
*/

// Simulation du dé qui renvoie des nombres entre 1 et 6
// On renvoie un entier aléatoire entre une valeur min (incluse) et une valeur max (incluse).
function getRandomIntInclusive(min, max) {
  	min = Math.ceil(min);
  	max = Math.floor(max);
  	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomGame():void {
	let scoreMax:number = 10 ;
	let score1:number = 0, score2:number = 0 ;
	let laps:number = 0 ; 

	do {
		laps++;

		console.log(`\n--- Tour ${laps} ---`);
	 			
		const resultPlayer1:number = getRandomIntInclusive(1,6)
		const resultPlayer2:number = getRandomIntInclusive(1,6);
		
		console.log(`Joueur 1 a lancé : ${resultPlayer1}`);
    console.log(`Joueur 2 a lancé : ${resultPlayer2}`);
		
		if(resultPlayer1 > resultPlayer2) {
			score1++;
			console.log("je joueur 1 gagne un point");
		} else if(resultPlayer1 < resultPlayer2) {
			score2++;
			console.log("je joueur 2 gagne un point");
		} else {
			console.log("égalité, pas de vainqueur");
		}
		
		console.log(`Scores actuels : Joueur 1 = ${score1}, Joueur 2 = ${score2}`);

	} while(score1 < scoreMax && score2 < scoreMax);

	// Annonce du gagnant
	console.log("\n--- Fin du jeu ---");
	if (score1 === scoreMax) {
	  console.log(`Félicitations ! Le joueur 1 a gagné en atteignant ${scoreMax} points !`);
	} else {
	  console.log(`Félicitations ! Le joueur 2 a gagné en atteignant ${scoreMax} points !`);
	}
}

randomGame();

