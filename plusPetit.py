"""
programme qui demande un nombre compris entre 10 et 20 , 
si le nombre est supérieur à 20 , on fera apparaitre un message : "plus petit "
et inversement : "plus grand
"""


# demande un nombre entier ? flottant? -> input

# compris entre 10 et 20 

# jusqu'à ce que la réponse convienne -> do while

# en cas de réponse supérieur à 20, on fera apparaître un message "Plus petit" -> output

# en cas de réponse inférieur à 10, on fera apparaître un message "Plus grand" -> output
 

def plusPetit(number):	
	while True : 
		if number < 10 :
			return "plus grand"
		elif number > 20 :
			return "plus petit"
		else :
			return "ok"
			break

if plusPetit(22) == "plus petit":
	print("✔ Test Passed")
else :
	raise ValueError("❌ Test Failed") 


# while True : 
# 	number = int(input("Entrer un nombre compris entre 10 et 20 : "))
# 	if number < 10 :
# 		print("plus grand")
# 	elif number > 20 :
# 		print("plus petit")
# 	else :
# 		print("ok")
# 		break


