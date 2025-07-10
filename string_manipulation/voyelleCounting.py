"""
    Programme qui donne en entrée une chaîne de caractère
    Et qui donne en sortie le nombre de consonne et voyelle dans la chaîne
    Réafficher la chaîne en changeant toutes les voyelles par des blancs
"""
import re

def voyelleCounting(text) :
    voyelleCounter = 0
    consonneCounter = 0
    textLower = text.lower()
    word = list(textLower)
    reConsonne = r"^[zrtpqsdfghjklmwxcvbn]"
    
    for i in range(0,len(word)) :
        if word[i] == ' ' :
            continue
        if word[i] == 'a' or word[i] == 'e' or word[i] == 'i' or word[i] == 'o' or word[i] == 'u' or word[i] == 'y' :
            voyelleCounter = voyelleCounter + 1
        
        if re.match(reConsonne,word[i]): 
            consonneCounter = consonneCounter + 1
        
    
    print("nombre de voyelle : ", voyelleCounter)
    print("nombre de consonne : ", consonneCounter)

voyelleCounting("tuer n'est pas jouer")
