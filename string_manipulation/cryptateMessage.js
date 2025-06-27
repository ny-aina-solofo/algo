/*
    Programme permettant de coder un message selon le procéder suivant :
    permuter chaque indice impaire avec le caractère qui le succède
*/
function cryptateMessage(text) {
    var word = text.split("");
    for (var i = 0; i < word.length; i++) {
        if (word[i] === ' ')
            continue;
        if (word.indexOf(word[i]) % 2 !== 0) {
            var mirror = word[i];
            word[i] = word[i - 1];
            word[i - 1] = mirror;
        }
    }
    var textReverse = word.join("");
    console.log(textReverse);
    return textReverse;
}
cryptateMessage("Langage");
