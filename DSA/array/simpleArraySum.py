#!/bin/python3

#
# Complete the 'simpleArraySum' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY ar as parameter.
#

def simpleArraySum(array):
    sum = 0
    result = 0
    for index in range(0,len(array)) :
        sum += array[index]
    result = sum 
    return result    


result = simpleArraySum([1,3,5,11,13])
print("somme des éléments du tableau : ",result)
