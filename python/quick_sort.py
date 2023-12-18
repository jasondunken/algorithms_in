def quick_sort(list, first, last):
    if last > first:
        pivot_index = partition(list, first, last)
        quick_sort(list, first, pivot_index - 1)
        quick_sort(list, pivot_index + 1, last)



def partition(list, first, last):
    pivot = list[first]
    low = first + 1
    high = last

    while high > low:
        while low <= high and list[low] <= pivot:
            low += 1

        while low <= high and list[high] > pivot:
            high -= 1

        if high > low:
            temp = list[high]
            list[high] = list[low]
            list[low] = temp
    
    while high > first and list[high] >= pivot:
        high -= 1

    if pivot > list[high]:
        list[first] = list[high]
        list[high] = pivot
        return high
    else:
        return first

print("testing quick sort in python...")

unsortedArray = [4, 1, 5, 2, 8, 3, 9, 7, 6]
print("unsorted array -> " + str(unsortedArray))
quick_sort(unsortedArray, 0, len(unsortedArray) - 1)
print("sorted array -> " + str(unsortedArray))