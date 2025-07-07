#
# Complete the 'compareTriplets' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER_ARRAY a
#  2. INTEGER_ARRAY b
#


def compareTriplets(a, b):
    score_alice = 0
    score_bob = 0
    result = []
    size = 3
    for index in range(0,size) :
            if a[index] > b[index] : 
                score_alice += 1
            elif a[index] < b[index] : 
                score_bob += 1
            else : 
                score_alice += 0
                score_bob +=0 
    result.append(score_alice) 
    result.append(score_bob)
    return result 