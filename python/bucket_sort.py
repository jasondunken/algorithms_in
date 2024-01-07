# doesn't work with negative numbers
def bucket_sort(list):
    n = 0
    for val in list:
        if val > n:
            n = val
    
    buckets = [None] * (n + 1)
    for val in list:
        if buckets[val] is None:
            buckets[val] = []
        
        buckets[val].append(val)

    k = 0
    for bucket in buckets:
        if bucket is not None:
            for val in bucket:
                list[k] = val
                k += 1


#works with negative numbers
def bucket_sort_2(list):
    min = max = list[0]

    for val in list:
        if val < min:
            min = val
        if val > max:
            max = val

    range = max - min
    offset = 0 - min

    buckets = [None] * (range)

    for val in list:
        key = val + offset
        if buckets[key] == None:
            buckets[key] = []
        buckets[key].append(val)

    k = 0
    for bucket in buckets:
        if bucket is not None:
            for val in bucket:
                list[k] = val
                k += 1


print("testing bucket sort in python...")

unsortedArray = [4, 1, 5, 2, 8, 3, 9, 7, 6]
print("unsorted array -> " + str(unsortedArray))
bucket_sort(unsortedArray)
print("sorted array -> " + str(unsortedArray))

print("testing bucket sort 2 in python...")

unsortedArray = [4, 1, -2, 5, 2, 8, 3, -1, 9, 7, 6]
print("unsorted array -> " + str(unsortedArray))
bucket_sort_2(unsortedArray)
print("sorted array -> " + str(unsortedArray))