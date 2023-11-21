def recursive_binary_search(array, l, r, query):
    if l > r:
        return False
    
    i = l + (r - l) // 2
    if array[i] == query:
        return True
    if array[i] < query:
        return recursive_binary_search(array, i + 1, r, query)
    if array[i] > query:
        return recursive_binary_search(array, l, i - 1, query)


print("testing recursive binary search in python...")
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

result = recursive_binary_search(arr, 0, len(arr) - 1, 5)
print("result 1: ", result, " -> expected True")
assert result == True

result = recursive_binary_search(arr, 0, len(arr) - 1, 10)
print("result 2: ", result, " -> expected False")
assert result == False