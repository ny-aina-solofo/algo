/* 
    It is possible to pass a function—rather than a string—as the second argument to replace . 
    For each replacement, the function will be called with the 
    154matched groups (as well as the whole match) as arguments, and its return value
    will be inserted into the new string.
*/

const toUppercase = (strings) => strings.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase());  
console.log(toUppercase("the cia and fbi")); // -> the CIA and FBI 