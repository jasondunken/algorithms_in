package algorithms_in

func BinarySearch(array []int, query int) int {
	var l int = 0
	var r int = len(array) - 1

	var i int = l + (r-l)/2

	for i <= r {
		if array[i] == query {
			return i
		}
		if array[i] < query {
			l = i + 1
		}
		if array[i] > query {
			r = i - 1
		}
		i = l + (r-l)/2
	}
	return -1
}