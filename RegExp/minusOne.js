/* 
    This takes a string, finds all occurrences of a number followed by an alphanu-
    meric word, and returns a string wherein every such occurrence is decremented
    by one.
    The (\d+) group ends up as the amount argument to the function, and the
    (\w+) group gets bound to unit . The function converts amount to a number—
    which always works since it matched \d+ —and makes some adjustments in case
    there is only one or zero left.
*/

let stock = "1 lemon, 2 cabbages, and 101 eggs";

function minusOne(match, amount, unit) {
    amount = Number(amount) - 1;
    if (amount == 1) { // only one left, remove the 's'
        unit = unit.slice(0, unit.length - 1);
    } else if (amount == 0) {
        amount = "no";
    }
    return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// → no lemon, 1 cabbage, and 100 eggs
