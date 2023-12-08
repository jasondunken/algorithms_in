pub fn bubble_sort(array: &mut [usize]) {
    let mut needs_next_pass = true;
    let mut i: usize = 1;
    while i < array.len() && needs_next_pass {
        needs_next_pass = false;
        for k in 0..array.len() - i {
            if array[k] > array[k + 1] {
                let temp: usize = array[k];
                array[k] = array[k + 1];
                array[k + 1] = temp;
                needs_next_pass = true;
            }
        }
        i += 1;
    }
}