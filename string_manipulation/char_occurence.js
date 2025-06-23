"use strict";
/*
    Programme qui cherche toutes les occurences des lettres de l'alphabet dans un texte.
    On suppose que le texte n'utilise pas de caractère accentués
    On affiche chaque lettre suivie de ses occurences dans le texte
*/
function searchLetterOcc(text) {
    let counter;
    let textLower = text.toLowerCase();
    // verifier les sensibilités à la case
    const re = /[a-zA-Z]/;
    if (re.test(text) === false) {
        console.log("mauvais format de texte");
        return;
    }
    console.log("occurences pour chaque lettres :");
    // on parcoure le texte 
    for (let i = 0; i < textLower.length; i++) {
        counter = 0;
        // on reparcoure le texte
        for (let j = 0; j < textLower.length; j++) {
            // verifier si le texte du premier parcours correspond au deuxième
            // alors on incrémente le compteur d'occurence
            if (textLower[i] === textLower[j]) {
                counter++;
            }
        }
        if (textLower[i] === ' ')
            continue;
        if (textLower.indexOf(textLower[i]) === i) {
            console.log(`${textLower[i]} = ${counter}`);
        }
    }
}
searchLetterOcc("Baby born bad Boys");
