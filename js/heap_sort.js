class Heap {
    constructor() {
        this.list = new ArrayList();
    }

    add(value) {
        this.list.push(value);

        let currentIndex = this.length - 1;

        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);

            if (this.compare(currentIndex, parentIndex) > 0) {
                let temp = this.list.get(currentIndex);
                this.list.set(currentIndex, this.list.get(parentIndex));
                this.list.set(parentIndex, temp);
            } else {
                break;
            }

            currentIndex = parentIndex;
        }
    }

    remove() {
        if (this.list.size() == 0) return null;

        let removedValue = this.list.get(0);

        this.list.set(0, this.list.get(this.list.size() - 1));
        this.list.remove();

        let currentIndex = 0;
        while (currentIndex < this.list.size()) {
            let leftChildIndex = 2 * currentIndex + 1;
            let rightChildIndex = 2 * currentIndex + 2;

            if (leftChildIndex >= this.list.size()) break;

            let maxIndex = leftChildIndex;
            if (rightChildIndex < this.list.size()) {
                if (this.compare(maxIndex, rightChildIndex) < 0) {
                    maxIndex = rightChildIndex;
                }
            }

            if (this.compare(currentIndex, maxIndex) < 0) {
                let temp = this.list.get(maxIndex);
                this.list.set(maxIndex, this.list.get(currentIndex));
                this.list.set(currentIndex, temp);
                currentIndex = maxIndex;
            } else {
                break;
            }
        }

        return removedValue;
    }
    compare(v1, v2) {
        return this.list.get(v1) - this.list.get(v2);
    }

    size() {
        return this.list.size();
    }
}

class ArrayList extends Array {
    get(index) {
        return this[index];
    }

    add(value) {
        this.push(value);
    }

    remove() {
        this.pop();
    }

    set(index, value) {
        this[index] = value;
    }

    size() {
        return this.length;
    }
}

function heapSort(list) {
    const heap = new Heap();

    for (let i = 0; i < list.length; i++) {
        heap.add(list[i]);
    }

    for (let i = list.length - 1; i >= 0; i--) {
        list[i] = heap.remove();
    }
}

function testHeapSort() {
    output.innerHTML += "<h3>testing heap sort in javascript...</h3>";
    const unsortedArray = getRandArray(10, 1);
    output.innerHTML += `<p>unsorted array -> [${unsortedArray}]</p>`;
    heapSort(unsortedArray);
    output.innerHTML += `<p>sorted array -> [${unsortedArray}]</p>`;
}

testHeapSort();
