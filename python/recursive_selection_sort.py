def recursive_selection_sort(array, l, r):
    if l < r:
        currentMin = array[l]
        currentMinIndex = l
        for i in range(l + 1, len(array)):
            if currentMin > array[i]:
                currentMin = array[i]
                currentMinIndex = i
        
        array[currentMinIndex] = array[l]
        array[l] = currentMin
        recursive_selection_sort(array, l + 1, r)

print("testing recursive selection sort in python...")

unsortedArray = [4, 8, 1, 5, 2, 8, 3, 9, 7, 6]
print("unsorted array -> " + str(unsortedArray))
recursive_selection_sort(unsortedArray, 0, len(unsortedArray))
print("sorted array -> " + str(unsortedArray))