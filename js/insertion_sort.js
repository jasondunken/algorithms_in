function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let currentElement = array[i];
        let k;
        for (k = i - 1; k >= 0 && array[k] > currentElement; k--) {
            array[k + 1] = array[k];
        }
        array[k + 1] = currentElement;
    }
}

function insertionSort2(array) {
    for (let i = 1; i < array.length; i++) {
        for (let k = i; k > 0 && array[k - 1] > array[k]; k--) {
            let temp = array[k - 1];
            array[k - 1] = array[k];
            array[k] = temp;
        }
    }
}

function testInsertionSort() {
    output.innerHTML += "<h3>testing insertion sort in javascript...</h3>";
    let unsortedArray = getRandArray(10, 1);
    output.innerHTML += `<p>unsorted array -> [${unsortedArray}]</p>`;
    recursiveSelectionSort(unsortedArray, 0, unsortedArray.length);
    output.innerHTML += `<p>sorted array -> [${unsortedArray}]</p>`;

    output.innerHTML += "<h3>testing insertion sort 2 in javascript...</h3>";
    unsortedArray = getRandArray(10, 1);
    output.innerHTML += `<p>unsorted array -> [${unsortedArray}]</p>`;
    recursiveSelectionSort(unsortedArray, 0, unsortedArray.length);
    output.innerHTML += `<p>sorted array -> [${unsortedArray}]</p>`;
}

testInsertionSort();
