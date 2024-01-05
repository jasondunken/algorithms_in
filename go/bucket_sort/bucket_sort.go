package main

import (
	"fmt"
	"math"
)

func bucket_sort(list []int) {
	var max int = math.MinInt
	for _, val := range list {
		if val > max {
			max = val
		}
	}

	var buckets [][]int = make([][]int, max + 1)

	for _, key := range list {
		if buckets[key] == nil {
			buckets[key] = make([]int, 0)
		}
		buckets[key] = append(buckets[key], key)
	}

	var k int = 0
	for _, bucket := range buckets {
		if bucket != nil {
			for _, j := range bucket {
				list[k] = j
				k++
			}
		}
	}
}

func main() {
	fmt.Println("testing bucket sort in go...")

	var unsortedArray = []int{6, 2, 4, 8, 1, 9, 3, 5, 7}
	fmt.Println("unsorted array -> ", unsortedArray)
	bucket_sort(unsortedArray)
	fmt.Println("sorted array -> ", unsortedArray)
}