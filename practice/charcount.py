my_string = "programming"
frequency = {}

for char in my_string:
    if char in frequency:
        frequency[char] += 1
    else:
        frequency[char] = 1

print(frequency)