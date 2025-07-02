# Si vous avez un système avec un certain nombre de résultats possibles, 
# la probabilité qu’un événement donné se produise est égale au **nombre de résultats correspondant à cet événement 
# divisé par le nombre total de résultats possibles**.

# Quelle est la probabilité de tirer deux as de suite dans un paquet de 52 cartes ?
# tirer un as 
event = 4
# cas possible : 52 cartes
possible_result = 52

probability = float((event/possible_result))

# plusieurs événements se produisent en séquence
result = float(probability * probability) * 100

print("la probabilité de tirer deux as de suite dans un paquet de 52 cartes", result,"%") 






