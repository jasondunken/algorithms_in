// returns true if query found, false if not
function recursiveBinarySearch(array, l, r, query) {
    if (l > r) return false;

    let i = Math.floor(l + (r - l) / 2);

    if (array[i] === query) return true;
    if (array[i] < query) {
        return recursiveBinarySearch(array, i + 1, r, query);
    }
    if (array[i] > query) {
        return recursiveBinarySearch(array, l, i - 1, query);
    }
}

function testRecursiveBinarySearch() {
    output.innerHTML += "<h3>testing recursive binary search in javascript...</h3>";
    let array = getOrderedArray(10, 1);
    output.innerHTML += `<p>array -> ${array}</p>`;

    let query = 5;
    output.innerHTML += `searching for ${query}`;
    let result = recursiveBinarySearch(array, 0, array.length - 1, query);
    output.innerHTML += `<p>result 1: ${result} -> expected true</p>`;

    query = 20;
    output.innerHTML += `searching for ${query}`;
    result = recursiveBinarySearch(array, 0, array.length - 1, query);
    output.innerHTML += `<p>result 2: ${result} -> expected false</p>`;
}

testRecursiveBinarySearch();
