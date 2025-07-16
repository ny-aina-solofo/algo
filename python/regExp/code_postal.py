regex_integer_in_range = r"^[1-9][0-9]{5}$"

# r"": Le préfixe r indique une "raw string" (chaîne brute) en Python. 
# Cela signifie que les barres obliques inverses (\) ne sont pas traitées comme des caractères d'échappement spéciaux de Python, 
# ce qui est crucial pour les expressions régulières où \ a déjà une signification spéciale.

# (?=...): C'est une assertion de lookahead positif (positive lookahead assertion). C'est le point clé ici.
#     Le (?=...) ne "consomme" pas de caractères de la chaîne. Il vérifie simplement si le motif à l'intérieur du lookahead peut être trouvé à partir de la position actuelle, 
#     sans faire avancer la position du moteur de l'expression régulière.
#     Imaginez-le comme un projecteur qui regarde en avant sans bouger.

# (\d): C'est le premier groupe de capture.
#     \d correspond à n'importe quel chiffre (0-9).
#     Les parenthèses () "capturent" ce chiffre. Le contenu capturé est stocké dans ce qu'on appelle une référence arrière (back-reference), 
#       accessible via \1 plus tard.

# \d: Ceci correspond à un deuxième chiffre. Ce chiffre n'est pas capturé car il n'est pas entre parenthèses.
# \1: C'est une référence arrière au contenu capturé par le premier groupe ((\d)).
#     Cela signifie que ce caractère doit être identique au premier chiffre capturé par (\d).

regex_alternating_repetitive_digit_pair = r"(?=(\d)\d\1)"


import re
P = input()

print (bool(re.match(regex_integer_in_range, P)) 
and len(re.findall(regex_alternating_repetitive_digit_pair, P)) < 2)