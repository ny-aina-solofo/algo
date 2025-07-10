"""
    There is a sequence of words in CamelCase as a string of letters,s, having the following properties:
    - It is a concatenation of one or more words consisting of English letters.
    - All letters in the first word are lowercase.
    - For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
    Given s, determine the number of words in s .
"""


def camelCase(my_string):
    counter = 0
    counterUpper = 0;
    firstWordCounter = 0
    
    if my_string[0] : 
        firstWordCounter = 1

    for i in range(len(my_string)) : 
        if my_string[i].isupper() == True :
            counterUpper += 1
    
    counter = firstWordCounter + counterUpper
    
    return counter

camelCase("saveChangesInTheEditor")
