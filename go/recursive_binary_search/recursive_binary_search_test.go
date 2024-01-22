package algorithms_in

import "testing"

func TestBinarySearchFound(t *testing.T) {
	
	var array = []int{1, 2, 3, 4, 5, 6, 7, 8, 9}
	var result bool = RecursiveBinarySearch(array, 0, len(array) - 1, 4)
	var expected bool = true

	assertCorrectResult(t, result, expected)
}

func TestBinarySearchNotFound(t *testing.T) {
	
	var array = []int{1, 2, 3, 4, 5, 6, 7, 8, 9}
	var result = RecursiveBinarySearch(array, 0, len(array) - 1, 10)
	var expected bool = false

	assertCorrectResult(t, result, expected)
}

func assertCorrectResult(t testing.TB, result bool, expected bool) {
	if expected != result {
		t.Errorf("expected %t got %t", expected, result)
	}
}
