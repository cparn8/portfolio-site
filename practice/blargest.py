my_list = [10, 24, 76, 23, 12]

def largest(my_list):
    largest_value = my_list[0]
    for number in my_list:
        if number > largest_value:
            largest_value = number
    return largest_value