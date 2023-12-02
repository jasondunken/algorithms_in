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

const unsortedArray4 = [4, 7, 2, 8, 3, 5, 1, 9, 6];
console.log("testing recursive selection sort in javascript...");
console.log("unsorted array -> ", unsortedArray4);
recursiveSelectionSort(unsortedArray4, 0, unsortedArray.length);
console.log("sorted array -> ", unsortedArray4);
