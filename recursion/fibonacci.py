# la suite de Fibonacci :
# une suite de nombres entiers dans laquelle chaque terme est le résultat de l’addition des deux nombres qui le précèdent :

# Fibonacci with Recursion
def fibonacci(n):
	if n == 0 : 
		return 0
	if n == 1 : 
		return 1
	return fibonacci(n-1) + fibonacci(n-2)


fibo = {}

# Fibonacci with Memoization
def fibonacci(n):
	if n == 0 or n == 1:
        return 1
    if n not in Fibo:
        Fibo[n] = f(n - 1) + f(n - 2)
    return Fibo[n]


# print(fibonacci(4))
# print(fibonacci(5))

