def insertion_sort(array):
    for i in range(1, len(array)):
        currentElement = array[i]
        k = i - 1
        while k >= 0 and array[k] > currentElement:
            array[k + 1] = array[k]
            k -= 1
        array[k + 1] = currentElement


print("testing insertion sort in python...")

unsortedArray = [4, 1, 5, 2, 8, 3, 9, 7, 6]
print("unsorted array -> " + str(unsortedArray))
insertion_sort(unsortedArray)
print("sorted array -> " + str(unsortedArray))