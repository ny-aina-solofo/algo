sharp = ''
size = 4

# Cette boucle parcourt chaque ligne du damier, de 0 à size - 1. Elle représente la hauteur du damier.
for index in range(0,size) :
	# Cette boucle parcourt chaque colonne de la ligne actuelle, de 0 à size - 1. Elle représente la largeur du damier.
	for j in range(0,size) :
		# Cette condition alterne les caractères de manière à créer un motif de damier.
		if (index+j) % 2 != 0 : 
			sharp += '#'
		else : 
			sharp += ' '
	sharp +='\n'

print(sharp)		
