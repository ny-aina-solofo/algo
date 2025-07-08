"""
    Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. 
    In each operation, select a pair of adjacent letters that match, and delete them.

    Delete as many characters as possible using this method and return the resulting string. 
    If the final string is empty, return Empty String
"""


def superReducedString(my_string):
    text = []
    
    for char in my_string : 
        # Check if the 'text' list is not empty AND if the current character
        # matches the last character added to 'text'
        if text and text[-1] == char:
            text.pop() # If they match, remove the last character (effectively deleting the pair)
        else:
            text.append(char) # If they don't match, add the current character

    result = "".join(text)

    if not result:
        return "Empty String"
    else:
        return result
print(superReducedString("aaabccddd")) # Expected: "abd"
