package algorithms_in

func RecursiveBinarySearch(array []int, l int, r int, query int) bool {
	if l > r {
		return false
	}

	var i int = l + (r-l)/2
	if array[i] == query {
		return true
	}
	if array[i] < query {
		return RecursiveBinarySearch(array, i+1, r, query)
	}
	if array[i] > query {
		return RecursiveBinarySearch(array, l, i-1, query)
	}

	return false
}