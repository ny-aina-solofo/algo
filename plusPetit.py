"""
programme qui demande un nombre compris entre 10 et 20 , 
si le nombre est supérieur à 20 , on fera apparaitre un message : "plus petit "
et inversement : "plus grand
"""
 
# while True : 
# 	number = int(input("Entrer un nombre compris entre 10 et 20 : "))
# 	if number < 10 :
# 		print("plus grand")
# 	elif number > 20 :
# 		print("plus petit")
# 	else :
# 		print("ok")
# 		break


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

