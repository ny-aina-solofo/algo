/*	Write a loop that makes seven calls to console.log to output a triangle of stars */

let stars = '*';

for(stars.length = 0 ; stars.length < 8 ; stars = stars + '*') 
{
	console.log(stars);
}



/*

	length = 0 ; * ; * + *
	length = 1 ; ** ; ** + *
	length = 2 ; *** ; *** + *

*/