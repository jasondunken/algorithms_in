pub fn quick_sort(array: &mut [usize], first: usize, last: usize) {
    if last > first {
        let pivot_index: usize = partition(array, first, last);
        if pivot_index > 0 {
            quick_sort(array, first, pivot_index - 1);
        }
        quick_sort(array, pivot_index + 1, last);
    }
}

fn partition(array: &mut [usize], first: usize, last: usize) -> usize {
    let pivot: usize = array[first];
    let mut low: usize = first + 1;
    let mut high: usize = last;

    while high > low {
        while low <= high && array[low] <= pivot {
            low += 1;
        }

        while low <= high && array[high] > pivot {
            high -= 1;
        }

        if high > low {
            let temp: usize = array[high];
            array[high] = array[low];
            array[low] = temp;
        }
    }

    while high > first && array[high] >= pivot {
        high -= 1;
    }

    if pivot > array[high] {
        array[first] = array[high];
        array[high] = pivot;
        return high;
    } else {
        return first;
    }
}