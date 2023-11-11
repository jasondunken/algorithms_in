package main

import "fmt"

func binarySearch(array []int, query int) int {
	var l int = 0
	var r int = len(array) - 1

	var i int = l + (r - l) / 2

	for i <= r {
		if array[i] == query { return i } 
		if array[i] < query { l = i + 1 }
		if array[i] > query { r = i - 1 }
		i = l + (r - l) / 2
	}
	return -1
}

func main() {
	fmt.Println("testing binary search in go...")
	var array = []int{1, 2, 3, 4, 5, 6, 7, 8, 9}
	var result int = binarySearch(array, 5)
	fmt.Println("result 1:", result, "-> expected 4.")

	result = binarySearch(array, 10)
	fmt.Println("result 2:", result, "-> expected -1.")
}