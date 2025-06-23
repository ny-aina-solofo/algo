/*
	Écrivez une fonction qui calcule la direction d’écriture dominante dans une chaîne de texte.
	Rappelez-vous que chaque objet script possède une propriété direction qui peut être "ltr" (de gauche à droite), 
	"rtl" (de droite à gauche), ou "ttb" (de haut en bas).

	La direction dominante est celle de la majorité des caractères ayant un système d’écriture (script) associé.
	Les fonctions characterScript et countBy, définies plus tôt dans le chapitre, seront probablement utiles ici.
*/
const SCRIPTS = [
  {
    name: "Adlam",
    ranges: [[125184, 125259], [125264, 125274], [125278, 125280]],
    direction: "rtl",
    year: 1987,
    living: true,
    link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet"
  },
  {
    name: "Caucasian Albanian",
    ranges: [[66864, 66916], [66927, 66928]],
    direction: "ltr",
    year: 420,
    living: false,
    link: "https://en.wikipedia.org/wiki/Caucasian_Albanian_alphabet"
  },
  {
    name: "Ahom",
    ranges: [[71424, 71450], [71453, 71468], [71472, 71488]],
    direction: "ltr",
    year: 1250,
    living: false,
    link: "https://en.wikipedia.org/wiki/Ahom_alphabet"
  },
]

function countBy(items, groupName) {
	let counts = [];
	
	for (let item of items) {
		let name = groupName(item);
		let known = counts.findIndex(c => c.name == name);
		
		if (known == -1) {
			counts.push({name, count: 1});
		} else {
			counts[known].count++;
		}
	}
	return counts;
}

function characterScript(code) {
	for (let script of SCRIPTS) {
		if (script.ranges.some(([from, to]) => { return code >= from && code < to; })) {
			return script;
		}
	}
	return null;
}

/*
	Vous devez à nouveau compter les caractères selon un critère basé sur characterScript, 
	puis filtrer les résultats pour supprimer les éléments qui correspondent à des caractères non intéressants (sans script associé).
*/


const dominantWritingDirection = (text) => {
	let counted = countBy(text, char => {
		let script = characterScript(char.codePointAt(0));
		return script ? script.direction : "none";
	}).filter(({name}) => name != "none");

	/*Trouver la direction avec le plus grand nombre de caractères peut se faire avec reduce. */	
	  if (counted.length == 0) return "ltr";

	  return counted.reduce((a, b) => a.count > b.count ? a : b).name;

}

console.log(dominantWritingDirection("Hello!"));
// → ltr

