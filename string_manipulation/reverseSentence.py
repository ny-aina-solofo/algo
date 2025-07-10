"""
    programme qui affiche une phrase renversée.
    La phrase commence obligatoirement par une lettre
    Ses mots sont séparés par un seul espace et ne se termine pas par un espace
"""
import re
import math

def reverseSentence(text) :
    
    # verifier les sensibilités à la case
    re_text = r"^[a-zA-Z][a-zA-Z0-9_]*( [a-zA-Z0-9_]+)*$"
    if re.match(re_text,text) == False :  
        print("mauvais format de texte")
        return None
    
    # décomposer les textes et les stocker dans un tableau 
    word = text.split(" ")
    
    #inverser le tableau des textes décomposer
    for index in range(0,math.floor(len(word) / 2)) :
        mirror = word[index]
        word[index] = word[len(word) - 1 - index]
        word[len(word) - 1 - index] = mirror
    
    # recomposer les textes inversés
    textReverse = " ".join(word)
    
    # afficher le résultat
    print(textReverse)
    return textReverse

reverseSentence("tuer n'est pas jouer");
