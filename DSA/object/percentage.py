"""
    The provided code stub will read in a dictionary containing key/value pairs of name:[marks] for a list of students. 
    Print the average of the marks array for the student name provided, showing 2 places after the decimal. 
"""
if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    
for x,y in student_marks.items() :
    if query_name == x : 
        array = y
        Sum = 0
        result = 0
        for index in range(0,len(array)) :
            Sum += array[index]
        result = Sum / len(array)    
        print('{0:.2f}'.format(result))