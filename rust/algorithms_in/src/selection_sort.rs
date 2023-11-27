pub fn selection_sort(array: &mut [usize]) {
    for i in 0..array.len() {
        let mut current_min: usize = array[i];
        let mut current_min_index: usize = i;
        for j in (i + 1)..array.len() {
            if current_min > array[j] {
                current_min = array[j];
                current_min_index = j
            }
        }
        if current_min_index != i {
            array[current_min_index] = array[i];
            array[i] = current_min;
        }
    }
}