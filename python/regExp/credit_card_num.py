import re

if __name__ == '__main__':
    n = int(input())
        
number = []
isValid = False

# Expression régulière pour les numéros de carte de crédit valides :
# ^ : Début de la chaîne
# [456] : Doit commencer par 4, 5 ou 6
# \d{3} : Suivi de 3 chiffres
# (?:-?\d{4}){3} : Ceci est un groupe non-capturant (?:...)
# Il correspond à un tiret optionnel (-?) suivi de 4 chiffres (\d{4}).
# Le {3} signifie que ce motif doit se répéter exactement trois fois.
# Cela garantit que si des tirets sont présents, ils le sont uniquement après chaque groupe de quatre chiffres.
# $ : Fin de la chaîne
re_num = r"^[456]\d{3}(-?)\d{4}\1\d{4}\1\d{4}$"

for i in range(n) :  
    number = input()
    
    # Supprimer les tirets pour la vérification des chiffres consécutifs
    card_number_cleaned = number.replace('-', '')
    
    # Vérifier si le numéro nettoyé a exactement 16 chiffres
    if len(card_number_cleaned) != 16 :
        isValid = False
        print("Invalid")
        continue
    
    # Vérifier les chiffres répétitifs consécutifs (4 fois ou plus)
    # Cette regex va trouver si un chiffre (\d) se répète 4 fois ou plus ({3,} pour 3 répétitions du même chiffre, plus l'original)
    if re.search(r"(\d)\1{3,}", card_number_cleaned):
        isValid = False
        print("Invalid")
        continue

    if re.match(re_num,number):  
        isValid = True
        print("Valid")
    else : 
        isValid = False
        print("Invalid")
        
        