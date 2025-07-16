
if __name__ == '__main__':
    a = int(input().strip())
    b = int(input().strip())

div = int(a // b) 
modulo = a % b
print(div)
print(modulo)
print(divmod(a,b))
