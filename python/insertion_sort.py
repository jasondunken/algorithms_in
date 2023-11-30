def insertion_sort(array):
    for i in range(1, len(array)):
        currentElement = array[i]
        k = i - 1
        while k >= 0 and array[k] > currentElement:
            array[k + 1] = array[k]
            k -= 1
        array[k + 1] = currentElement


def insertion_sort_2(array):
    for i in range(1, len(array)):
        for k in range(i, 0, -1):
            if array[k - 1] > array[k]:
                temp = array[k - 1]
                array[k - 1] = array[k]
                array[k] = temp



print("testing insertion sort in python...")

unsortedArray = [4, 1, 5, 2, 8, 3, 9, 7, 6]
print("unsorted array -> " + str(unsortedArray))
insertion_sort(unsortedArray)
print("sorted array -> " + str(unsortedArray))

print("testing insertion sort 2 in python...")

unsortedArray2 = [4, 1, 5, 2, 8, 3, 9, 7, 6]
print("unsorted array -> " + str(unsortedArray2))
insertion_sort_2(unsortedArray2)
print("sorted array -> " + str(unsortedArray2))