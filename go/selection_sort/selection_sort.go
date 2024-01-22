package algorithms_in

func SelectionSort(array []int) {
	for i := 0; i < len(array); i++ {
		var currentMin = array[i]
		var currentMinIndex = i

		for j := i + 1; j < len(array); j++ {
			if currentMin > array[j] {
				currentMin = array[j]
				currentMinIndex = j
			}
		}

		if currentMinIndex != i {
			array[currentMinIndex] = array[i]
			array[i] = currentMin
		}
	}
}