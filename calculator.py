a = float(input("entrez un nombre : ")) 
b = float(input("entrez un autre nombre : "))
c = 0
operateur = input("entrez un opérateur : ")

match operateur: 
	case '+': 
		c = a + b  
	case '-': 
		c = a - b  
	case '*': 
		c = a * b 
	case '/': 
		c = a / b  
	case _:
		print("Syntax error")

print("Résultat : ",c) 

