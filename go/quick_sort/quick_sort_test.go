package algorithms_in

import "testing"

func TestQuickSort(t *testing.T) {
	var unsortedArray = []int{6, 2, 4, 8, 1, 9, 3, 5, 7}
	var sortedArray = []int{1, 2, 3, 4, 5, 6, 7, 8, 9}
	quickSort(unsortedArray, 0, len(unsortedArray) - 1)

	assertCorrectResult(t, unsortedArray, sortedArray)
}

func assertCorrectResult(t testing.TB, a1 []int, a2 []int) {
	for i, v := range a1 {
		if v != a2[i] {
			t.Errorf("expected %d got %d", a1, a2)
			return
		}
	}
}