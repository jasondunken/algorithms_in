def merge_sort(array):
    if len(array) > 1:
        midpoint = len(array) // 2
        firstHalf = array[:midpoint]
        merge_sort(firstHalf)
        secondHalf = array[midpoint:]
        merge_sort(secondHalf)

        temp = merge(firstHalf, secondHalf)
        for i, val in enumerate(temp):
            array[i] = val
    else:
        return array


def merge(firstHalf, secondHalf):
    mergedList = []
    while len(firstHalf) > 0 and len(secondHalf) > 0:
        if firstHalf[0] < secondHalf[0]:
            mergedList.append(firstHalf[0])
            firstHalf.pop(0)
        else:
            mergedList.append(secondHalf[0])
            secondHalf.pop(0)
    return mergedList + firstHalf + secondHalf

print("testing merge sort in python...")

unsortedArray = [4, 1, 5, 2, 8, 3, 9, 7, 6]
print("unsorted array -> " + str(unsortedArray))
merge_sort(unsortedArray)
print("sorted array -> " + str(unsortedArray))