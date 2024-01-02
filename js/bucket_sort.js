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

function testBucketSort() {
    output.innerHTML += "<h3>testing bucket sort in javascript...</h3>";
    const unsortedArray = getRandArray(10, 1);
    output.innerHTML += `<p>unsorted array -> [${unsortedArray}]</p>`;
    bucketSort(unsortedArray);
    output.innerHTML += `<p>sorted array -> [${unsortedArray}]</p>`;
}

testBucketSort();
