package algorithms_in

import "fmt"

func recursiveSelectionSort(array []int, l int, r int) {
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
		recursiveSelectionSort(array, l + 1, r)
	} 
}

func main() {
	fmt.Println("testing recursive selection sort in go...")

	var unsortedArray = []int{6, 2, 4, 8, 1, 9, 3, 5, 7}
	fmt.Println("unsorted array -> ", unsortedArray)
	recursiveSelectionSort(unsortedArray, 0, len(unsortedArray) - 1)
	fmt.Println("sorted array -> ", unsortedArray)
}