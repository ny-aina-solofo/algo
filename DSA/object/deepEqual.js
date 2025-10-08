/*
	L'opérateur == compare les objets par identité. Mais parfois, vous préférez comparer les valeurs de leurs propriétés réelles. 
	Écrivez une fonction `deepEqual` qui prend deux valeurs et retourne `true` uniquement si elles sont identiques 
	ou si ce sont des objets ayant les mêmes propriétés, 
	où les valeurs des propriétés sont égales lorsqu'elles sont comparées par un appel récursif à `deepEqual`. 
	Pour savoir si les valeurs doivent être comparées directement (utilisez l'opérateur `===` pour cela) 
	ou si leurs propriétés doivent être comparées, vous pouvez utiliser l'opérateur `typeof`. 
	S'il produit "object" pour les deux valeurs, vous devez effectuer une comparaison approfondie. 
	Mais il faut prendre en compte une exception curieuse : à cause d'une erreur historique, `typeof null` produit également "object". 
	La fonction `Object.keys` sera utile lorsque vous aurez besoin de parcourir les propriétés des objets pour les comparer.
*/

function deepEqual(a, b) {
    if (a === b) return true;

    // Récupère les clés des deux objets
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    // Vérifie récursivement les clés et les valeurs
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }

    // Si toutes les clés et les valeurs correspondent
    return true;
}

let obj = { here: { is: "an" }, object: 2 };

console.log(deepEqual(obj, obj)); // true
console.log(deepEqual(obj, { here: 1, object: 2 })); // false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 })); // true
console.log(deepEqual(1, 1)); // true
