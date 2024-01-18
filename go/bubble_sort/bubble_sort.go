package algorithms_in

import "fmt"

func bubble_sort(array []int) {
	var needsNextPass bool = true
	for i := 1; i < len(array) && needsNextPass; i++ {
		needsNextPass = false
		for k := 0; k < len(array) - 1; k++ {
			if array[k] > array[k + 1] {
				var temp int = array[k]
				array[k] = array[k + 1]
				array[k + 1] = temp
				needsNextPass = true
			}
		}
	}
}

func main() {
	fmt.Println("testing bubble sort in go...")

	var unsortedArray = []int{6, 2, 4, 8, 1, 9, 3, 5, 7}
	fmt.Println("unsorted array -> ", unsortedArray)
	bubble_sort(unsortedArray)
	fmt.Println("sorted array -> ", unsortedArray)
}