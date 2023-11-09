def recursive_binary_search(array, query):
    if len(array) == 0:
        return False
    
    i = len(array) // 2
    if array[i] == query:
        return True
    if array[i] < query:
        return recursive_binary_search(array[i + 1:], query)
    if array[i] > query:
        return recursive_binary_search(array[:i], query)


print("testing recursive binary search in python...")
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

result = recursive_binary_search(arr, 5)
print("result 1: ", result)
assert result == True

result = recursive_binary_search(arr, 10)
print("result 2: ", result)
assert result == False