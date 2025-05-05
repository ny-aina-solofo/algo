/* Validate Email */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
// console.log(validateEmail("nyaina04")); // -> false


/* match a date and time format like 01-30-2003 15:20 */
const validateDate = (date) => {
    const dateTime = /\d\d-\d\d-\d\d\d\d\ \d\d:\d\d/;
    return dateTime.test(date);
}
// console.log(validateDate("01-30-2003")); // -> false


/* verify if not a binary number */
const notBinary = (number) => {
    const re = /[^01]/;
    return re.test(number);
}
// console.log(notBinary("012001")); // -> true


/* Repeating parts of a pattern  */
console.log(/'\d+'/.test("'123'")); // → true
console.log(/'\d+'/.test("''")); // → false
console.log(/'\d*'/.test("'123'")); // → true
console.log(/'\d*'/.test("''")); // → true

let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true
console.log(neighbor.test("neighbor"));
// → true


let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));
// → true







