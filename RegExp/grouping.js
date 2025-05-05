/* Grouping subexpressions  */
function grouping(expr) {
    const re = /boo+(hoo+)+/i;
    return re.test(expr);
}
console.log(grouping("Boohoohoo")); // -> true








