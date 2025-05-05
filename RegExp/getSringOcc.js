/*  
    A common thing to do is to scan through all occurrences of a pattern in a
    string, in a way that gives us access to the match object in the loop body. We
    can do this by using lastIndex and exec .
*/

const getSringOcc = (str)=> {
    let number = /\b\d+\b/g;
    let match;
    while (match = number.exec(str)) {
        console.log("Found", match[0], "at", match.index);
    }
} 
console.log(getSringOcc("A string with 3 numbers in it... 42 and 88.")); 

