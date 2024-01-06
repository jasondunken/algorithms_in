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

    const range = max - min;
    console.log("range: ", range);
    const offset = 0 - min;
    console.log("offset: ", offset);

    const buckets = new Array(range).fill(null);
    console.log("buckets: ", buckets);
    for (let i = 0; i < array.length; i++) {
        const key = array[i] + offset;
        console.log("key: ", key);
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

function testBucketSort() {
    output.innerHTML += "<h3>testing bucket sort in javascript...</h3>";
    const unsortedArray = getRandArray(10, 1);
    output.innerHTML += `<p>unsorted array -> [${unsortedArray}]</p>`;
    bucketSort(unsortedArray);
    output.innerHTML += `<p>sorted array -> [${unsortedArray}]</p>`;
}

function testBucketSort2() {
    output.innerHTML += "<h3>testing bucket sort 2 in javascript...</h3>";
    const unsortedArray = getRandArray(10, -2);
    output.innerHTML += `<p>unsorted array -> [${unsortedArray}]</p>`;
    bucketSort2(unsortedArray);
    output.innerHTML += `<p>sorted array -> [${unsortedArray}]</p>`;
}

testBucketSort();
testBucketSort2();
