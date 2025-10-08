/*
    Write a function that receives a string S and returns true
    if S is a palindrome, otherwise returns false.
*/

function isPalindrome(str) {
    
    let word = str.split("");

    for (let i = 0; i < Math.floor(word.length) / 2; i++) {
        mirror = word[i];
        word[i] = word[word.length - 1 - i];
        word[word.length - 1 - i] = mirror;
        
    }
    let result = word.join("");
    
    let isPalindrome = result ===  str
    
    if (isPalindrome === true) {
        console.log("it's a palindrome")
    } else {
        console.log("it's not a palindrome")
    }

}

isPalindrome("1992")