package algorithms_in

func RecursiveSelectionSort(array []int, l int, r int) {
	if l < r {
		var currentMin = array[l]
		var currentMinIndex = l

		for i := l + 1; i < len(array); i++ {
			if currentMin > array[i] {
				currentMin = array[i]
				currentMinIndex = i
			}
		}
		array[currentMinIndex] = array[l]
		array[l] = currentMin
		RecursiveSelectionSort(array, l+1, r)
	}
}