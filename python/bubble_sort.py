def bubble_sort(array):
    needsNextPass = True
    k = 1
    while k < len(array) and needsNextPass:
        needsNextPass = False
        for i in range(len(array) - k):
            if array[i] > array[i + 1]:
                temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
                needsNextPass = True
        k += 1


print("testing bubble sort in python...")

unsortedArray = [4, 1, 5, 2, 8, 3, 9, 7, 6]
print("unsorted array -> " + str(unsortedArray))
bubble_sort(unsortedArray)
print("sorted array -> " + str(unsortedArray))