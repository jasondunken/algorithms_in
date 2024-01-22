package algorithms_in

func InsertionSort(array []int) {
	for i := 1; i < len(array); i++ {
		var currentElement = array[i]
		var k int
		for k = i - 1; k >= 0 && array[k] > currentElement; k-- {
			array[k+1] = array[k]
		}
		array[k+1] = currentElement
	}
}

func InsertionSort2(array []int) {
	for i := 1; i < len(array); i++ {
		for k := i; k > 0 && array[k-1] > array[k]; k-- {
			var temp = array[k-1]
			array[k-1] = array[k]
			array[k] = temp
		}
	}
}