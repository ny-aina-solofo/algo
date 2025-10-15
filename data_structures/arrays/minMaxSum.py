"""
    Given five positive integers, 
    find the minimum and maximum values that can be calculated by summing exactly four of the five integers
"""


def miniMaxSum(arr):
    maxSum = 0
    minSum = 0
    min_value = min(arr)
    max_value = max(arr)
    newArray = []

    if min_value : 
        newArray = list(arr)
        newArray.remove(min_value)
        for index in range(0,len(newArray)) :
            maxSum += newArray[index]
    
    if max_value : 
        newArray = list(arr)
        newArray.remove(max_value)
        for index in range(0,len(newArray)) :
            minSum += newArray[index]
    print(minSum,maxSum)

miniMaxSum([1,2,3,4,5])