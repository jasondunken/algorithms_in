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

const unsortedArray = [4, 7, 2, 8, 3, 5, 1, 9, 6];
console.log("testing selection sort in javascript...");
console.log("unsorted array -> ", unsortedArray);
selectionSort(unsortedArray);
console.log("sorted array -> ", unsortedArray);
