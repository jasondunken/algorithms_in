function sleepSort(array) {
    const sortPromises = [];
    while (array.length > 0) {
        const num = array.pop();
        sortPromises.push(
            new Promise((resolve) => {
                setTimeout(() => {
                    array.push(num);
                    resolve();
                }, num);
            })
        );
    }
    return Promise.allSettled(sortPromises);
}

function testSleepSort() {
    output.innerHTML += "<h3>testing sleep sort in javascript...</h3>";
    const unsortedArray = getRandArray(10, 1);
    output.innerHTML += `<p>unsorted array -> [${unsortedArray}]</p>`;
    sleepSort(unsortedArray).then(() => {
        output.innerHTML += `<p>sorted array -> [${unsortedArray}]</p>`;
    });
}

testSleepSort();
