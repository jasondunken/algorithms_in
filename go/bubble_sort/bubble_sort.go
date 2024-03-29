package algorithms_in

func BubbleSort(array []int) {
	var needsNextPass bool = true
	for i := 1; i < len(array) && needsNextPass; i++ {
		needsNextPass = false
		for k := 0; k < len(array)-1; k++ {
			if array[k] > array[k+1] {
				var temp int = array[k]
				array[k] = array[k+1]
				array[k+1] = temp
				needsNextPass = true
			}
		}
	}
}