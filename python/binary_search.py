def binary_search(array, query):
    l = 0
    r = len(array) - 1

    i = l + (r - l) // 2

    while l <= r:
        if array[i] == query: return i
        if array[i] < query:
            l = i + 1
        if array[i] > query:
            r = i - 1
        i = l + (r - l) // 2
    return -1


print("testing binary search in python...")
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

result = binary_search(arr, 5)
print("result 1: ", result, " -> expected 4")
assert result == 4

result = binary_search(arr, 10)
print("result 2: ", result, " -> expected -1")
assert result == -1