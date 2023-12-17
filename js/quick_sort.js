function quickSort(array, first, last) {
    if (last > first) {
        let pivotIndex = partition(array, first, last);
        quickSort(array, first, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, last);
    }
}

function partition(array, first, last) {
    let pivot = array[first];
    let low = first + 1;
    let high = last;

    while (high > low) {
        while (low <= high && array[low] <= pivot) {
            low++;
        }

        while (low <= high && array[high] > pivot) {
            high--;
        }

        if (high > low) {
            let temp = array[high];
            array[high] = array[low];
            array[low] = temp;
        }
    }

    while (high > first && array[high] >= pivot) {
        high--;
    }

    if (pivot > array[high]) {
        array[first] = array[high];
        array[high] = pivot;
        return high;
    } else {
        return first;
    }
}

function testQuickSort() {
    output.innerHTML += "<h3>testing quick sort in javascript...</h3>";
    let unsortedArray = getRandArray(10, 1);
    output.innerHTML += `<p>unsorted array -> ${unsortedArray}</p>`;
    quickSort(unsortedArray, 0, unsortedArray.length - 1);
    output.innerHTML += `<p>sorted array -> ${unsortedArray}</p>`;
}

testQuickSort();
