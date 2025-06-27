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
function randomGame() {
    var scoreMax = 10;
    var score1 = 0, score2 = 0;
    // let laps:number = 0 ; 
    do {
        // laps++;
        // console.log(`\n--- Tour ${laps} ---`);
        var resultPlayer1 = getRandomIntInclusive(1, 6);
        var resultPlayer2 = getRandomIntInclusive(1, 6);
        console.log("Joueur 1 a lanc\u00E9 : ".concat(resultPlayer1));
        console.log("Joueur 2 a lanc\u00E9 : ".concat(resultPlayer2));
        if (resultPlayer1 > resultPlayer2) {
            score1++;
            console.log("je joueur 1 gagne un point");
        }
        else if (resultPlayer1 < resultPlayer2) {
            score2++;
            console.log("je joueur 2 gagne un point");
        }
        else {
            console.log("égalité, pas de vainqueur");
        }
        console.log("Scores actuels : Joueur 1 = ".concat(score1, ", Joueur 2 = ").concat(score2));
    } while (score1 < scoreMax && score2 < scoreMax);
    // Annonce du gagnant
    console.log("\n--- Fin du jeu ---");
    if (score1 === scoreMax) {
        console.log("F\u00E9licitations ! Le joueur 1 a gagn\u00E9 en atteignant ".concat(scoreMax, " points !"));
    }
    else {
        console.log("F\u00E9licitations ! Le joueur 2 a gagn\u00E9 en atteignant ".concat(scoreMax, " points !"));
    }
}
randomGame();
