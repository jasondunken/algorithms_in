function bubbleSort(array) {
    needsNextPass = true;
    for (let k = 1; k < array.length && needsNextPass; k++) {
        needsNextPass = false;
        for (let i = 0; i < array.length - k; i++) {
            if (array[i] > array[i + 1]) {
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                needsNextPass = true;
            }
        }
    }
}

function testBubbleSort() {
    output.innerHTML += "<h3>testing bubble sort in javascript...</h3>";
    const unsortedArray = getRandArray(10, 1);
    output.innerHTML += `<p>unsorted array -> [${unsortedArray}]</p>`;
    bubbleSort(unsortedArray);
    output.innerHTML += `<p>sorted array -> [${unsortedArray}]</p>`;
}

testBubbleSort();
