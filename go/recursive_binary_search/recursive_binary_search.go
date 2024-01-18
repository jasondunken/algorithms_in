package algorithms_in

import "fmt"

func recursiveBinarySearch(array []int, l int, r int, query int) bool {
	if l > r {
		return false
	}

	var i int = l + (r - l) / 2
	if array[i] == query { return true }
	if array[i] < query {
		return recursiveBinarySearch(array, i + 1, r, query)
	}
	if array[i] > query {
		return recursiveBinarySearch(array, l, i - 1, query)
	}

	return false
}

func main() {
	fmt.Println("testing binary search in go...")
	var array = []int{1, 2, 3, 4, 5, 6, 7, 8, 9}
	var result bool = recursiveBinarySearch(array, 0, len(array) - 1, 4)
	fmt.Println("result 1:", result, "-> expected true.")

	result = recursiveBinarySearch(array, 0, len(array) - 1, 10)
	fmt.Println("result 2:", result, "-> expected false.")
}