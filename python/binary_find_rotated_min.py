nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 17, 18, 19, 22, 33, 44, 55, 66, 77, 88, 99, 100, 125, 150, 170, 200, 300, 400, 500, 1000]


def rotate_list(list, times):
    return list[times:] + list[:times]


def test_find_min(list):
    result = binary_find_rotated_min(list)
    print("found rotated list min: " + str(result[0]) + " in " + str(result[1]) + " steps")


# finds the minimum value in an ascending sorted list that has been rotated
def binary_find_rotated_min(list):
    print("------------------------")
    print("list: " + str(list))
    print("------------------------")

    l = 0
    r = len(list) - 1
    loops = 0

    # if the list isn't actually rotated
    if list[l] < list[r]:
        return (list[0], 1)

    while l < r:
        loops += 1

        m = l + (r - l) // 2

        if list[l] < list[m] and list[r] < list[m]:
            l = m
        elif list[l] > list[m] and list[r] > list[m]:
            r = m

        if r - l == 1:
            return (list[l] if list[l] < list[r] else list[r], loops)


test_find_min(nums)
test_find_min(rotate_list(nums, 4))
test_find_min(rotate_list(nums, 16))
test_find_min(rotate_list(nums, 30))