package algorithms_in

import "testing"

func TestBinarySearchFound(t *testing.T) {
	
	var array = []int{1, 2, 3, 4, 5, 6, 7, 8, 9}
	var result int = binarySearch(array, 5)
	var expected int = 4

	assertCorrectResult(t, result, expected)
}

func TestBinarySearchNotFound(t *testing.T) {
	
	var array = []int{1, 2, 3, 4, 5, 6, 7, 8, 9}
	var result = binarySearch(array, 10)
	var expected int = -1

	assertCorrectResult(t, result, expected)
}

func assertCorrectResult(t testing.TB, result int, expected int) {
	if expected != result {
		t.Errorf("expected %d got %d", expected, result)
	}
}

