pub fn recursive_selection_sort(array: &mut [usize], l: usize, r: usize) {
    if l < r {
        let mut current_min: usize = array[l];
        let mut current_min_index: usize = l;
        for i in (l + 1)..array.len() {
            if current_min > array[i] {
                current_min = array[i];
                current_min_index = i
            }
        }
        array[current_min_index] = array[l];
        array[l] = current_min;
        recursive_selection_sort(array, l + 1, r);
    }
}