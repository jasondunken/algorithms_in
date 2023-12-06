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

const unsortedArray34 = [4, 7, 2, 8, 3, 5, 1, 9, 6];
console.log("testing bubble sort in javascript...");
console.log("unsorted array -> ", unsortedArray4);
bubbleSort(unsortedArray4);
console.log("sorted array -> ", unsortedArray4);
