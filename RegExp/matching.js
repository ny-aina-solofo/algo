/* Matches   */
function matching(expr) {
    const re = /\d+/;
    return re.exec(expr);
}
// console.log(matching("one two 100")); // -> [ '100', index: 8, input: 'one two 100', groups: undefined ]
// console.log(matching("one two 100").index); 


/* String values have a match method that behaves similarly. */
// console.log("one two 100".match(/\d+/));
// → ["100"]


/* group */
function group(expr) {
    const re = /'([^']*)'/;
    return re.exec(expr);
}
console.log(group("she said 'hello'")); // -> ["'hello'", "hello"] 


console.log(/bad(ly)?/.exec("bad"));
// → ["bad", undefined]
console.log(/(\d)+/.exec("123"));
// → ["123", "3"]








