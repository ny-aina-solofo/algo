import math


"""
	Pour cet exercice, écrivez deux fonctions, `reverseArray` et `reverseArrayInPlace`. 
	La première, `reverseArray`, prend un tableau en argument 
	et produit un nouveau tableau qui a les mêmes éléments dans l'ordre inverse. 

	La seconde, `reverseArrayInPlace`, fait ce que fait la méthode `reverse` : 
	elle modifie le tableau donné en argument en inversant ses éléments. 
"""

def reverseArray(array) :
	for index in range(len(array) - 1, 0, -1) :
		print(array[index])
	return array


"""
	L'astuce consiste à échanger le premier et le dernier élément, puis le deuxième et l'avant-dernier, et ainsi de suite. 
	Vous pouvez le faire en parcourant la moitié de la longueur du tableau , 
	et en échangeant l'élément à la position i avec celui à la position array.length - 1 - i
"""
def reverseArrayInPlace(array):
	for index in range(0,math.floor(len(array) / 2)):
		mirror = array[index]
		array[index] = array[len(array) - 1 - index]
		array[len(array) - 1 - index] = mirror
	print(array)
	return array


reverseArray([4, 1, 9, -2])
reverseArrayInPlace([4, 1, 9, -2])