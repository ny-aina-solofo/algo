# approach 1
for i in range(1,int(input())): 
    if i == 1 : 
        print(i)
    elif i >= 1 :
        for j in range(0,i) :
            print(i,end="")
        print()


# âpproach 2
for i in range(1,int(input())): 
    print(int(i * pow(10,i) / 9))