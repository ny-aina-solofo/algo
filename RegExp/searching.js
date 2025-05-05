/* 
    The indexOf method on strings cannot be called with a regular expression. But
    there is another method, search , that does expect a regular expression. Like
    indexOf , it returns the first index on which the expression was found, or -1
    when it wasn’t found.
*/

function searching(expr) {
    const re = /\S/;
    return expr.search(re);
}
console.log(searching("word")); 
console.log(searching(" ")); 

