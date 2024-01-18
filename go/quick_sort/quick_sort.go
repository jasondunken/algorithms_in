package algorithms_in

func quickSort(list []int, first int, last int) {
	if last > first {
		var pivotIndex int = partition(list, first, last)
		quickSort(list, first, pivotIndex-1)
		quickSort(list, pivotIndex+1, last)
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