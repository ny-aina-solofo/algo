if __name__ == '__main__':
    a = int(input().strip())
    b = int(input().strip())
    m = int(input().strip())
    
power = pow(a,b)
modulo = power % m
print(power)
print(modulo)