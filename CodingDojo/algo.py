def gimme(input_array):
    # Implement this function
    higher = input_array[0]
    lower = input_array[0]
    midindex = 0
    
    for i in input_array:
        print(i)
        for y in input_array:
            print(higher)
            if i > y and i > higher:
                
                higher = i
            if i < y and i < lower:
                lower = i
                
        if i > lower and i < higher:
            i = midindex

    return midindex

print('result1',gimme([5, 10, 14]))
print('result2',gimme([2, 3, 1]))