/* 
    Putting parentheses around the parts of the expression that we are interested
    in, we can now create a date object from a string. 
*/

function animalCount(string) {
    const re = /\b\d+ (pig|cow|chicken)s?\b/;
    return re.test(string);
}
console.log(animalCount("1 pigs")); // -> true
console.log(animalCount("15 pigchickens")); // → false
