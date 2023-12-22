function recursiveSelectionSort(array, l, r) {
    if (l < r) {
        let currentMin = array[l];
        let currentMinIndex = l;

        for (let i = l + 1; i < array.length; i++) {
            if (currentMin > array[i]) {
                currentMin = array[i];
                currentMinIndex = i;
            }
        }
        array[currentMinIndex] = array[l];
        array[l] = currentMin;
        recursiveSelectionSort(array, l + 1, r);
    }
}

function testRecursiveSelectionSort() {
    output.innerHTML += "<h3>testing recursive selection sort in javascript...</h3>";
    const unsortedArray = getRandArray(10, 1);
    output.innerHTML += `<p>unsorted array -> [${unsortedArray}]</p>`;
    recursiveSelectionSort(unsortedArray, 0, unsortedArray.length);
    output.innerHTML += `<p>sorted array -> [${unsortedArray}]</p>`;
}

testRecursiveSelectionSort();
