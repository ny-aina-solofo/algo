"""	
	Comptage de lettres  
	
	Fonction `countBs` qui prend une chaîne de caractères comme seul argument 
		et retourne un nombre indiquant combien de caractères "B" majuscules il y a dans la chaîne.  
	
	Fonction appelée `countChar` qui se comporte comme `countBs`, 
		sauf qu'elle prend un second argument qui indique le caractère à compter 
"""

def countBs(text) :
	counter = 0;
	for i in range(0,len(text)) :  
		if text[i] == 'B' :
			counter += 1;
		
	print(counter);
	return counter;


def countChar(text, Char) :
	counter = 0;
	for i in range(0,len(text)) :	
		if text[i] == Char :
			counter += 1;
		

	print(counter);
	return counter;


countBs('Baby born bad Boys');
countChar('Baby born bad Boys','r');

