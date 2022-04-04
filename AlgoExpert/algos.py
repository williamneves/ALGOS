# coins = [1,2,3,4,5,65,6,7,7,8,6,4,3,1,23]

# a = [i for i in range(1,sum(coins))]

# list_values = [i for i in range(1,sum(coins))]
# list_possible_change = [y for y in coins]
# list_possible_change.append(sum(coins))

# print(a)
# print(list_values)
# print(list_possible_change)

def sum_array(a):
    sum = 0
    for i in a:
        sum+=i
    return sum

print(sum_array([]))