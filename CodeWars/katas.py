# def square_digits(num):
#     stringNum = str(num)
#     sequence = ""
#     for i in range(0,len(stringNum)):
#         sequence += str(int(stringNum[i])*int(stringNum[i]))
#     return int(sequence)
    
# print(square_digits(123))

# def find_needle(haystack):
#     index = 0
#     for i in range(0,len(haystack)):
#         if haystack[i] == "needle":
#             index = i
            
#     return print(f"found the needle at position {index}")

# find_needle(['3', '123124234', None, 'needle', 'world', 'hay', 2, '3', True, False])

def is_anagram(test, original):
    letters1 = [i.lower() for i in test]
    letters2 = [i.lower() for i in original]
    letters1.sort()
    letters2.sort()
    if letters1 == letters2:
        return True
    return False


print(is_anagram("foefet", "toffee"))
