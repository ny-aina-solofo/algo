"""
    Your task is to count how many candles are the tallest.
"""


def birthdayCakeCandles(candles):
    counter = 0
    max_value = max(candles)
    
    for index in range(0,len(candles)) :
        if candles[index] == max_value :
            counter += 1

    result = counter 
    print(result)
    return result
    
birthdayCakeCandles([3,2,1,3])


