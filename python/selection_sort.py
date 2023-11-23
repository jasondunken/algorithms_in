def selection_sort(array):
    for i in range(len(array)):
        currentMin = array[i]
        currentMinIndex = i
        for j in range(i + 1, len(array)):
            if currentMin > array[j]:
                currentMin = array[j]
                currentMinIndex = j
        
        if currentMinIndex != i:
            array[currentMinIndex] = array[i]
            array[i] = currentMin

print("testing selection sort in python...")

unsortedArray = [4, 8, 1, 5, 2, 8, 3, 9, 7, 6]
print("unsorted array -> " + str(unsortedArray))
selection_sort(unsortedArray)
print("sorted array -> " + str(unsortedArray))