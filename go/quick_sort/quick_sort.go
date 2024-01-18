package algorithms_in

import "fmt"

func quick_sort(list []int, first int, last int) {
	if (last > first) {
		var pivotIndex int = partition(list, first, last)
		quick_sort(list, first, pivotIndex - 1)
		quick_sort(list, pivotIndex + 1, last)
	}
}

func partition(list []int, first int, last int) int {
	var pivot int = list[first]
	var low int = first + 1
	var high int = last

	for high > low {
		for low <= high && list[low] <= pivot {
			low++
		}

		for low <= high && list[high] > pivot {
			high--
		}

		if high > low {
			var temp int = list[high]
			list[high] = list[low]
			list[low] = temp
		}
	}

	for high > first && list[high] >= pivot {
		high--
	}

	if pivot > list[high] {
		list[first] = list[high]
		list[high] = pivot
		return high
	} else {
		return first
	}
}

func main() {
	fmt.Println("testing quick sort in go...")

	var unsortedArray = []int{6, 2, 4, 8, 1, 9, 3, 5, 7}
	fmt.Println("unsorted array -> ", unsortedArray)
	quick_sort(unsortedArray, 0, len(unsortedArray) - 1)
	fmt.Println("sorted array -> ", unsortedArray)
}