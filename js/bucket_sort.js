// only works with non-negative numbers
function bucketSort(array) {
    let n = Number.MIN_VALUE;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > n) {
            n = array[i];
        }
    }

    const buckets = new Array(n + 1).fill(null);

    for (let i = 0; i < array.length; i++) {
        let index = array[i];
        if (buckets[index] == null) {
            buckets[index] = [];
        }

        buckets[index].push(array[i]);
    }

    let k = 0;
    for (let i = 0; i < buckets.length; i++) {
        const bucket = buckets[i];
        if (bucket) {
            for (let j = 0; j < bucket.length; j++) {
                array[k++] = bucket[j];
            }
        }
    }
}

// works with negative numbers
function bucketSort2(array) {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }

        if (array[i] > max) {
            max = array[i];
        }
    }

    const range = max - min + 1;
    const offset = 0 - min;

    const buckets = new Array(range).fill(null);

    for (let i = 0; i < array.length; i++) {
        const key = array[i] + offset;
        if (buckets[key] == null) {
            buckets[key] = [];
        }
        buckets[key].push(array[i]);
    }

    let k = 0;
    for (let i = 0; i < buckets.length; i++) {
        if (buckets[i] != null) {
            const bucket = buckets[i];
            for (let j = 0; j < bucket.length; j++) {
                array[k++] = bucket[j];
            }
        }
    }
}

// without array
function bucketSort3(list) {
    let min = (max = list[0]);
    for (let i = 1; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i];
        }
        if (list[i] > max) {
            max = list[i];
        }
    }

    const range = max - min + 1;
    const offset = 0 - min;

    const buckets = new Array(range).fill(0);

    for (let i = 0; i < list.length; i++) {
        const key = list[i] + offset;
        buckets[key] = buckets[key] + 1;
    }

    let k = 0;
    for (let i = 0; i < buckets.length; i++) {
        if (buckets[i] > 0) {
            for (let j = 0; j < buckets[i]; j++) {
                list[k++] = i - offset;
            }
        }
    }
}

function testBucketSort() {
    output.innerHTML += "<h3>testing bucket sort in javascript...</h3>";
    const unsortedArray = getRandArray(10, 1);
    output.innerHTML += `<p>unsorted array -> [${unsortedArray}]</p>`;
    bucketSort(unsortedArray);
    output.innerHTML += `<p>sorted array -> [${unsortedArray}]</p>`;
}

function testBucketSort2() {
    output.innerHTML += "<h3>testing bucket sort 2 in javascript...</h3>";
    const unsortedArray = getRandArray(9, -2);
    output.innerHTML += `<p>unsorted array -> [${unsortedArray}]</p>`;
    bucketSort2(unsortedArray);
    output.innerHTML += `<p>sorted array -> [${unsortedArray}]</p>`;
}

function testBucketSort3() {
    output.innerHTML += "<h3>testing bucket sort 3 in javascript...</h3>";
    const unsortedArray = getRandArray(9, -2);
    output.innerHTML += `<p>unsorted array -> [${unsortedArray}]</p>`;
    bucketSort3(unsortedArray);
    output.innerHTML += `<p>sorted array -> [${unsortedArray}]</p>`;
}

testBucketSort();
testBucketSort2();
testBucketSort3();
