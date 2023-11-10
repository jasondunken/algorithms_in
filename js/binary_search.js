function binary_search(array, query) {
    let l = 0;
    let r = array.length - 1;

    let i = Math.floor(l + (r - l) / 2);
    while (l <= r) {
        if (array[i] === query) return true;
        if (array[i] < query) l = i + 1;
        if (array[i] > query) r = i - 1;
        i = Math.floor(l + (r - l) / 2);
    }
    return false;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("testing binary search in javascript...");
let result = binary_search(arr, 5);
console.log("result 1: ", result);
console.assert(result === true, "%o", { result, error: "array does contain 5" });

result = binary_search(arr, 10);
console.log("result 2: ", result);
console.assert(result === false, "%o", { result, error: "array does not contain 10" });
