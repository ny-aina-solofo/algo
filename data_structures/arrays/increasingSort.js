/* tri par ordre croissant*/

function increasingSort(array) {
    for (var i = 0; i < array.length - 1; i++) {
        //j allant de 1 a (n-1)
        for (var j = i + 1; j < array.length; j++) {
            //permuation de valeur de tab[i] et tab[j]
            if (array[i] > array[j]) {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    console.log(array)
}

arraySort([2, 5, 7, 8, 10, 3])
