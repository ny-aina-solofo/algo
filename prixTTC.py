# input : nombre d'article(int), prix unitaire(float)
# réduction de 5% si le nombre d'article à acheter est supérieur à 100 et < 200
# réduction de 10% si le nombre d'article à acheter est supérieur à 200
# output : prix TTC
# TVA : prix / 10

import math

def prixTTC():
	article = float(input("Entrer le nombre d'article : "))
	prix_unitaire = float(input("Entrer son prix unitaire : "))
	tva = prix_unitaire / 10

	if article >= 100 and article < 200 :
		prix_reduit = prix_unitaire - ( prix_unitaire * 0.05)
		pTTC = article * tva * prix_reduit
		print("nombre d'article supérieur à 100, réduction de 5% !!!")
	elif article >= 200 :
		prix_reduit = prix_unitaire - ( prix_unitaire * 0.1)
		pTTC = article * tva * prix_reduit
		print("nombre d'article supérieur à 200, réduction de 10% !!!")
	else :
		pTTC = article * tva * prix_unitaire

	print('son prix tout taxe compris est de : ',pTTC)
	return pTTC

prixTTC()

