"""
    Given an array of integers, calculate the ratios of its elements that are positive,negative , and zero . 
    Print the decimal value of each fraction on a new line with 6 places after the decimal.
"""

def plusMinus(arr):
    size = int(len(arr))
    counter_positive,counter_negative, counter_null = 0,0,0
    for index in range(0,size) : 
        if arr[index] > 0 : 
            counter_positive += 1
        if arr[index] < 0 :
            counter_negative += 1
        if arr[index] == 0 :
            counter_null += 1
        
    ratio_positive = round(counter_positive / size,6)
    ratio_negative = round(counter_negative / size,6)        
    ratio_null = round(counter_null / size,6)
    result = [ratio_positive,ratio_negative,ratio_null]
    for index in range(0,len(result)) :
        print(result[index])
    return result