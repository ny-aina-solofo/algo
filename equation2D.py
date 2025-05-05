import math

a = 1 
b = -9 
c = 19
x = 0 
y = 0  

delta = (b*b) - (4*a*c) 

if delta == 0 :
	x = y = (b) / (2*a)
elif delta > 0 :
	x = (-b + math.sqrt(delta)) / (2*a)
	y = (-b - math.sqrt(delta)) / (2*a)
else : 
	print("racine imaginaire")

print(" solutions : " ,x," , ",y) 
