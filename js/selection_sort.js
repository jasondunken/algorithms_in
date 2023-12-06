function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let currentMin = array[i];
        let currentMinIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (currentMin > array[j]) {
                currentMin = array[j];
                currentMinIndex = j;
            }
        }

        if (currentMinIndex != i) {
            array[currentMinIndex] = array[i];
            array[i] = currentMin;
        }
    }
}

function testSelectionSort() {
    output.innerHTML += "<h3>testing selection sort in javascript...</h3>";
    const unsortedArray = getRandArray(10, 1);
    output.innerHTML += `<p>unsorted array -> ${unsortedArray}</p>`;
    selectionSort(unsortedArray);
    output.innerHTML += `<p>sorted array -> ${unsortedArray}</p>`;
}

testSelectionSort();
