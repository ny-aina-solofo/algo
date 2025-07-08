"""
    Arrondir les grades des étudiants 
    
    Si la différence entre les grades et le nombre multiple de 5 suivant est inférieure à 3 , 
    arrondi le grade au multiple 5 .

    si la valeur du grade  est inférieure à 38, aucun arrondi ne se produit car le résultat sera toujours un grade défaillant.
    
    grade = 84 round to 85 (85 - 84 is less than 3)
    grade = 29 do not round  (result is less than 38) 
    grade = 57 do not round (60 - 57 is 3 or higher) 
"""

def gradingStudents(grades):
    number = 0
    for i in range(len(grades)) : 
        number = grades[i]
        if number >= 38 and number % 5 >= 3 : 
            while number % 5 != 0 :
                number += 1
        print(number)
    return number


gradingStudents([37,38])