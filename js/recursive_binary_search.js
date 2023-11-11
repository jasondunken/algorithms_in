// returns true if query found, false if not
function recursive_binary_search(array, query) {
    if (array.length == 0) return false;

    let i = Math.floor(array.length / 2);

    if (array[i] === query) return true;
    if (array[i] < query) {
        return recursive_binary_search(array.slice(i + 1), query);
    }
    if (array[i] > query) {
        return recursive_binary_search(array.slice(0, i), query);
    }
}

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("testing recursive binary search in javascript...");
//let result = recursive_binary_search(arr, 5);
result = recursive_binary_search(arr, 5);
console.log("result 1: ", result, " -> expected true");

result = recursive_binary_search(arr, 10);
console.log("result 2: ", result, " -> expected false");
