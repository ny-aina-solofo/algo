/*
	Exercice qui consiste à lire des entiers dans un tableau 
	Séparer les nombres pairs et impairs en les mettant dans 2 tab
	Puis trier chacun des 2 tab
*/
function simpleTri(array:number[]):void {
	for (let i = 0; i < array.length - 1; i++){
        //j allant de 1 a (n-1)
        for (let j = i + 1; j < array.length; j++){ 
            //permuation de valeur de tab[i] et tab[j]
            if (array[i] > array[j]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
         }
    }
}


function evenSort():void {
	let array:number[] = [2,5,7,8,10,3];
	let evenTab:number[] = [];
	let oddTab:number[] = [];

	for (let i:number = 0; i < array.length; i++) {
		if(array[i] % 2 === 0) {
			evenTab.push(array[i]);
		} else {
			oddTab.push(array[i])
		}
	}
	simpleTri(evenTab);
	simpleTri(oddTab);
	
    console.log(evenTab);
    console.log(oddTab);

}

evenSort();

