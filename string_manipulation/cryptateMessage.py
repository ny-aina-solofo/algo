"""
    Programme permettant de coder un message selon le procéder suivant :
    permuter chaque indice impaire avec le caractère qui le succède
"""

def cryptateMessage(text) :
    word = list(text)

    for i in range(len(word)) : 
        if word[i] == ' ' :
            continue
        if word.index(word[i]) % 2 != 0 :
            mirror = word[i]
            word[i] = word[i - 1]
            word[i - 1] = mirror
        
    
    textReverse = "".join(word)
    print(textReverse)
    return textReverse;

cryptateMessage("Langage");
