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

const unsortedArray2 = [4, 7, 2, 8, 3, 5, 1, 9, 6];
console.log("testing insertion sort in javascript...");
console.log("unsorted array -> ", unsortedArray2);
insertionSort(unsortedArray2);
console.log("sorted array -> ", unsortedArray2);

const unsortedArray3 = [4, 7, 2, 8, 3, 5, 1, 9, 6];
console.log("testing insertion sort 2 in javascript...");
console.log("unsorted array -> ", unsortedArray3);
insertionSort2(unsortedArray3);
console.log("sorted array -> ", unsortedArray3);
