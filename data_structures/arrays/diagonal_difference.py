# Given a square matrix, calculate the absolute difference between the sums of its diagonals. 

"""
    We need to calculate the sums across the two diagonals of a square matrix. 
    Along the first diagonal of the matrix, row index = column index. 
    The second diagonal is at column for each row . 
    Loop through the rows, summing both values as increments. 
"""

def diagonalDifference(arr):
    # Write your code here
    left_to_right, right_to_left = 0, 0
    n = len(arr)
    for index in range(0,n) : 
        for j in range(0,n) : 
            if index == j :  
                left_to_right += arr[index][j]
            if index == n-j-1 :  
                right_to_left += arr[index][j] 
    difference = abs(left_to_right - right_to_left)
    return difference 