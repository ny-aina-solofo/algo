"""
La raison pour laquelle `range` est `x+1` (et `y+1`, `z+1`) est que la fonction `range()` en Python est **exclusive de la fin**.

    En d'autres termes :
    * `range(x+1)` génère une séquence de nombres de `0` à `x` **inclus**.
    * Si vous aviez utilisé `range(x)`, la séquence irait de `0` à `x-1`.

Dans ce code, vous voulez inclure toutes les valeurs possibles de `i`, `j`, et `k` de `0` jusqu'à `x`, `y`, et `z` respectivement. 
Pour que la valeur maximale `x` (ou `y`, `z`) soit incluse dans la boucle, vous devez spécifier `x+1` comme argument à `range()`.

---

**Exemple :**

Si `x = 2`, `range(x+1)` est `range(3)`, ce qui générera les nombres `0, 1, 2`. 
C'est exactement ce que vous voulez pour inclure toutes les combinaisons possibles jusqu'à la valeur de `x`.

"""

if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())

result = []

for i in range(x+1):
    for j in range(y+1):
        for k in range(z+1):
            if i+j+k != n : 
                result.append([i, j, k])
print(result)


# Equilavent : 
result = [
    [i, j, k] 
    for i in range(x+1) 
    for j in range(y+1) 
    for k in range(z+1) 
    if i+j+k != n 
]
print(result)