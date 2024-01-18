package algorithms_in

import "fmt"

func selectionSort(array []int) {
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

func main() {
	fmt.Println("testing selection sort in go...")

	var unsortedArray = []int{6, 2, 4, 8, 1, 9, 3, 5, 7}
	fmt.Println("unsorted array -> ", unsortedArray)
	selectionSort(unsortedArray)
	fmt.Println("sorted array -> ", unsortedArray)
}