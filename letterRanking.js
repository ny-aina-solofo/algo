/*
    Programme qui consiste en la lecture d'un entier, qui est le rang d'une lettre dans l'alphabet
    Et en l'écriture de la lettre correspondant à ce rang
*/
function letterRanking(ranking) {
    // initialiser un tableau de caractère  avec l'alphabet 
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var alphabetTab = alphabet.split("");
    var adjustedRanking = ranking - 1;
    if (adjustedRanking >= 0 && adjustedRanking <= 26) {
        console.log("lettre correspondant : ", alphabetTab[adjustedRanking]);
    }
    else {
        console.log("rang invalide");
    }
    // for (let i:number = 0; i < alphabetTab.length; i++){
    // 	if(alphabetTab.indexOf(alphabetTab[i]) === adjustedRanking) {
    // 		if(adjustedRanking >= 0 && adjustedRanking <= 26 ) {
    // 			console.log("lettre correspondant : ",alphabetTab[i]);
    // 		} else {
    // 			console.log("rang invalide");
    // 		}
    // 	}
    // } 
}
letterRanking(1);
