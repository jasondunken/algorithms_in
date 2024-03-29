package algorithms_in

func MergeSort(array []int) {
	if len(array) > 1 {
		var midpoint int = len(array) / 2
		var firstHalf []int = array[:midpoint]
		MergeSort(firstHalf)

		var secondHalf []int = array[midpoint:]
		MergeSort(secondHalf)

		var temp []int = merge(firstHalf, secondHalf)
		for i := 0; i < len(temp); i++ {
			array[i] = temp[i]
		}
	}
}

func merge(firstHalf []int, secondHalf []int) []int {
	var temp = make([]int, len(firstHalf)+len(secondHalf))

	var current1 int = 0
	var current2 int = 0
	var current3 int = 0

	for current1 < len(firstHalf) && current2 < len(secondHalf) {
		if firstHalf[current1] < secondHalf[current2] {
			temp[current3] = firstHalf[current1]
			current3++
			current1++
		} else {
			temp[current3] = secondHalf[current2]
			current3++
			current2++
		}
	}

	for current1 < len(firstHalf) {
		temp[current3] = firstHalf[current1]
		current3++
		current1++
	}

	for current2 < len(secondHalf) {
		temp[current3] = secondHalf[current2]
		current3++
		current2++
	}

	return temp
}