"""
    Escalier : 

    Nous pouvons utiliser des boucles pour dessiner notre escalier. 
    À chaque niveau, nous devons imprimer un certain nombre d'espaces de remplissage suivis d'un certain nombre de #. 
    Le premier (top) level a un #, le deuxième niveau a deux #, le troisième niveau a trois #, etc. 
    Chaque niveau doit contenir un total de caractères (espaces et #), 
    donc nous remplissons tous les caractères restants à gauche des #s avec des espaces 
    jusqu'à ce que nous atteignions le dernier niveau (qui ne contient aucun espace du tout).

    the i-th level (if 1<i<n) must have i #s and size-i spaces 
"""


def staircase(n):
    sharp = "#"
    for index in range(1,n+1) :    
        # print space
        for t in range(0,n-index):
            print(" ",end="")
        # print sharp
        for j in range(0,index) :
            print(sharp,end="")
        print()