package main

import "fmt"

func recursive_binarySearch(array []int, query int) bool {
	if len(array) == 0 {
		return false
	}

	var i int = len(array) / 2
	if array[i] == query { return true }
	if array[i] < query {
		return recursive_binarySearch(array[i + 1:], query)
	}
	if array[i] > query {
		return recursive_binarySearch(array[:i], query)
	}

	return false
}

func main() {
	fmt.Println("testing binary search in go...")
	var array = []int{1, 2, 3, 4, 5, 6, 7, 8, 9}
	var result bool = recursive_binarySearch(array, 5)
	fmt.Println("result 1:", result, "-> expected true.")

	result = recursive_binarySearch(array, 10)
	fmt.Println("result 2:", result, "-> expected false.")
}