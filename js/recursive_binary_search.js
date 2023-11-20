// returns true if query found, false if not
function recursive_binary_search(array, l, r, query) {
    if (l >= r) return false;

    let i = Math.floor(l + (r - l) / 2);

    if (array[i] === query) return true;
    if (array[i] < query) {
        return recursive_binary_search(array, i + 1, r, query);
    }
    if (array[i] > query) {
        return recursive_binary_search(array, l, i - 1, query);
    }
}

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("testing recursive binary search in javascript...");
//let result = recursive_binary_search(arr, 5);
result = recursive_binary_search(arr, 0, arr.length - 1, 5);
console.log("result 1: ", result, " -> expected true");

result = recursive_binary_search(arr, 0, arr.length - 1, 10);
console.log("result 2: ", result, " -> expected false");
