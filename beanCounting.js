/*	Comptage de lettres  
	
	Fonction `countBs` qui prend une chaîne de caractères comme seul argument 
		et retourne un nombre indiquant combien de caractères "B" majuscules il y a dans la chaîne.  
	
	Fonction appelée `countChar` qui se comporte comme `countBs`, 
		sauf qu'elle prend un second argument qui indique le caractère à compter 
*/

function countBs(text) {
	// console.log(text.length);
	let counter = 0;
	for(let i = 0; i < text.length; i++) 
	{
		if(text[i] === 'B')
		{
			counter += 1;
		}

	}
	console.log(counter);
	return counter;
}

function countChar(text, Char) {
	// console.log(text.length);
	let counter = 0;
	for(let i = 0; i < text.length; i++) 
	{
		if(text[i].includes(Char))
		{
			counter += 1;
		}

	}
	console.log(counter);
	return counter;
}

// countBs('Baby born bad Boys');
// countChar('Baby born bad Boys','r');

