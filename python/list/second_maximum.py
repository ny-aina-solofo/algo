if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())


score_list = list(arr)
maximum = max(score_list)

# mois  à l'infini
second_maximum = -float('inf')

for i in range(len(score_list)) : 
    if score_list[i] != maximum and score_list[i] > second_maximum: 
        second_maximum = score_list[i]
print(second_maximum)

