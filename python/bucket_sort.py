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
                

print("testing bucket sort in python...")

unsortedArray = [4, 1, 5, 2, 8, 3, 9, 7, 6]
print("unsorted array -> " + str(unsortedArray))
bucket_sort(unsortedArray)
print("sorted array -> " + str(unsortedArray))
