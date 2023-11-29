pub fn insertion_sort(array: &mut [usize]) {
    for i in 1..array.len() {
        let mut k = i;
        while k > 0 && array[k - 1] > array[k] {
            array.swap(k, k - 1);
            k -= 1;
        }
    }
}

pub fn insertion_sort_2(array: &mut [usize]) {
    for i in 1..array.len() {
        for k in (0..i).rev() {
            if array[k] >= array[k + 1] {
                array.swap(k, k + 1);
            } else {
                break;
            }
        }
    }
}