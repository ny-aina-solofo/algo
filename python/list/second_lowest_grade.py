if __name__ == '__main__':
    records = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        inner_list = [name,score]
        records.append(inner_list)

name_list = []
score_list = []
minimum_score = 0
second_minimum = float('inf')

for sublist in records :
    name_list.append(sublist[0])
    score_list.append(sublist[1])

minimum_score = min(score_list)

for i in range(len(score_list)) : 
    if score_list[i] != minimum_score and score_list[i] < second_minimum :
        second_minimum = score_list[i]          

name_sort = []
for sublist in records :
    for item in sublist :    
        if second_minimum == item :  
            name_sort.append(sublist[0])

name_sort.sort()  
for name in name_sort :     
    print(name)

    
     
        