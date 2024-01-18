package algorithms_in

import "fmt"

func insertionSort(array []int) {
	for i := 1; i < len(array); i++ {
		var currentElement = array[i]
		var k int
		for k = i - 1; k >= 0 && array[k] > currentElement; k-- {
			array[k + 1] = array[k]
		}
		array[k + 1] = currentElement
	}
}

func insertionSort2(array []int) {
	for i := 1; i < len(array); i++ {
		for k := i; k > 0 && array[k - 1] > array[k]; k-- {
			var temp = array[k - 1]
			array[k - 1] = array[k]
			array[k] = temp
		}
	}
}

func main() {
	fmt.Println("testing insertion sort in go...")

	var unsortedArray = []int{6, 2, 4, 8, 1, 9, 3, 5, 7}
	fmt.Println("unsorted array -> ", unsortedArray)
	insertionSort(unsortedArray)
	fmt.Println("sorted array -> ", unsortedArray)

	fmt.Println("testing insertion sort 2 in go...")

	var unsortedArray2 = []int{6, 2, 4, 8, 1, 9, 3, 5, 7}
	fmt.Println("unsorted array -> ", unsortedArray2)
	insertionSort2(unsortedArray2)
	fmt.Println("sorted array -> ", unsortedArray2)
}