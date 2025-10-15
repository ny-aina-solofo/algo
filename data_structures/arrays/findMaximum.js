/* trouver le plus grand élément d’un tableau */

function findMaximum(array) {
    let maximum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maximum) {
            maximum = array[i];
        }
    }
    console.log(maximum);
    return maximum;
}

findMaximum([1,-4,33,5,8,-9])

