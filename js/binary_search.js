// returns array index if query, found -1 if not
function binarySearch(array, query) {
    let l = 0;
    let r = array.length - 1;

    let i = Math.floor(l + (r - l) / 2);
    while (l <= r) {
        if (array[i] === query) return i;
        if (array[i] < query) l = i + 1;
        if (array[i] > query) r = i - 1;
        i = Math.floor(l + (r - l) / 2);
    }
    return -1;
}

function testBinarySearch() {
    output.innerHTML += "<h3>testing binary search in javascript...</h3>";
    let array = getOrderedArray(10, 1);
    output.innerHTML += `<p>array -> ${array}</p>`;

    let query = 5;
    output.innerHTML += `searching for ${query}`;
    let result = binarySearch(array, query);
    output.innerHTML += `<p>result: ${result} -> expected 4</p>`;

    query = 20;
    output.innerHTML += `searching for ${query}`;
    result = binarySearch(array, query);
    output.innerHTML += `<p>result: ${result} -> expected -1</p>`;
}

testBinarySearch();
