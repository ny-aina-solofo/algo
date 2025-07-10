"""
    Programme qui consiste en la lecture d'un entier, qui est le rang d'une lettre dans l'alphabet
    Et en l'écriture de la lettre correspondant à ce rang
"""
def letterRanking(ranking) :
    # initialiser un tableau de caractère  avec l'alphabet 
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabetTab = list(alphabet)
    adjustedRanking = ranking - 1;
    if adjustedRanking >= 0 and adjustedRanking <= 26 :  
        print("lettre correspondant : ", alphabetTab[adjustedRanking])
    
    else :
        print("rang invalide")
    
letterRanking(23);
