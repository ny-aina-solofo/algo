/*
	Programme qui permet de trier par ordre décroissant les éléments d'un tab A dans un tab B 
	Tab A et B sont de même dimension
*/

function decreasingSort(tabA= new Array(5)) {
	let tabB = new Array(5);
	
	for (let i = 0; i < tabA.length; i++) {
		
		// Initialisé à -1 car les nombres du tableau sont positifs.	
		let max = -1; 
		let index_max = -1;

		for (let j = 0; j < tabA.length; j++) {
			// chercher le maximum de A 
			if (tabA[j] > max) {
				max = tabA[j];
				index_max = j;
			}
		}

        // Placer ce maximum dans B
		tabB[i] = max; 

		 // Remplacer le maximum dans A par -1
        // On vérifie que l'index a bien été trouvé pour éviter les erreurs
		if (index_max !== -1) {
			tabA[index_max] = -1 ; 
		}
	}

	console.log("\nLe tableau B trié par ordre décroissant est :\n");
	for (let i = 0; i < tabB.length; i++) {
		console.log(tabB[i]);
	}
	console.log("\n");
}

decreasingSort([33,4,56,7,22]);