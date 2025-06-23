"use strict";
let stack = new Array(100);
let last = 0; // index l (last) to manage the stack
function push(x) {
    stack[last++] = x;
}
function pop() {
    let x = stack[last--];
    return x;
}
function isEmpty() {
    return last == 0;
}
function print() {
    for (let i = 0; i < last; i++) {
        console.log("%d ", stack[i]);
    }
    console.log("\n");
}
function main() {
    // Insert numbers from 1 to 5
    console.log("First stack state after insert[1-5]:\n");
    for (let i = 1; i <= 5; i++) {
        push(i);
    }
    print(); // See the state of the stack
    // Delete the last 2 elements
    pop();
    pop();
    console.log("Stack state after 2 deletes:\n");
    print(); // See the state of the stack
    push(4); // Insert one element
    console.log("Stack state after 1 insert (number 4):\n");
    print(); // See the state of the stack
    // Clear the stack
    while (!isEmpty()) {
        pop();
    }
    console.log("Stack empty\n");
}
main();
