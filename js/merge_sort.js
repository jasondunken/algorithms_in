// returns new array, does not mutate original array
function mergeSort(array) {
    if (array.length <= 1) return array;

    let midpoint = Math.floor(array.length / 2);

    let left = mergeSort(array.slice(0, midpoint));
    let right = mergeSort(array.slice(midpoint));

    return merge(left, right);
}

// mutates original array
function mergeSort2(array) {
    if (array.length <= 1) return array;

    let midpoint = Math.floor(array.length / 2);

    let left = mergeSort(array.slice(0, midpoint));
    let right = mergeSort(array.slice(midpoint));

    const temp = merge(left, right);
    for (let i = 0; i < temp.length; i++) {
        array[i] = temp[i];
    }
}

function merge(firstHalf, secondHalf) {
    let sortedArray = [];

    while (firstHalf.length && secondHalf.length) {
        if (firstHalf[0] < secondHalf[0]) {
            sortedArray.push(firstHalf.shift());
        } else {
            sortedArray.push(secondHalf.shift());
        }
    }
    return [...sortedArray, ...firstHalf, ...secondHalf];
}

output.innerHTML += "<h3>testing merge sort in javascript...</h3>";
let unsortedArray = getRandArray(10, 1);
output.innerHTML += `<p>unsorted array -> ${unsortedArray}`;
let sortedArray = mergeSort(unsortedArray);
output.innerHTML += `<p>sorted array -> ${sortedArray}`;

output.innerHTML += "<h3>testing merge sort 2 in javascript...</h3>";
let testArray = getRandArray(10, 1);
output.innerHTML += `<p>unsorted array -> ${testArray}`;
mergeSort2(testArray);
output.innerHTML += `<p>sorted array -> ${testArray}`;
