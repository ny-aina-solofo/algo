"""	
	Invariant is a condition that does not changing during execution of a given program or algorithm

	Loop-invariant is a condition that is true at the beginning and end of every iteration of the given loop
"""

def minimum(number,array) :
	minimum = array[0];

	# min equals the minimum item in array[0],...,array[0]
	for index in range(1, number) :
		# min equals the minimum item in array[0],...,array[i-1]
		if array[index] < minimum :  
			min = array[index]
	
	# min equals the minimum item in array[0],...,array[i-1], and i == number
	return minimum


print(minimum(4,[2,4,33,50]));
