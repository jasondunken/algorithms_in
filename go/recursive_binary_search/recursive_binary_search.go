package algorithms_in

func recursiveBinarySearch(array []int, l int, r int, query int) bool {
	if l > r {
		return false
	}

	var i int = l + (r-l)/2
	if array[i] == query {
		return true
	}
	if array[i] < query {
		return recursiveBinarySearch(array, i+1, r, query)
	}
	if array[i] > query {
		return recursiveBinarySearch(array, l, i-1, query)
	}

	return false
}