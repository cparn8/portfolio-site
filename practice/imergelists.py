def merge_sorted_manual(list1, list2):

   merged_list = []
   i = 0
   j = 0

   while i < len(list1) and j < len(list2):
       if list1[i] <= list2[j]:
           merged_list.append(list1[i])
           i += 1
       else:
           merged_list.append(list2[j])
           j += 1

   if i < len(list1):
       merged_list.extend(list1[i:])

   if j < len(list2):
       merged_list.extend(list2[j:])

   return merged_list

# Example usage:
a = [1, 3, 5]
b = [2, 4, 6, 8]
merged = merge_sorted_manual(a, b)
print(f"List 1: {a}")
print(f"List 2: {b}")
print(f"Merged List: {merged}")