class Heap:
    def __init__(self):
        self.list = ArrayList()


    def add(self, value):
        self.list.add(value)

        currentIndex = self.list.size() - 1

        while currentIndex > 0:
            parentIndex = (currentIndex - 1) // 2

            if self.compare(currentIndex, parentIndex) > 0:
                temp = self.list.get(currentIndex)
                self.list.set(currentIndex, self.list.get(parentIndex))
                self.list.set(parentIndex, temp)
            else:
                break

            currentIndex = parentIndex


    def remove(self):
        if self.list.size() == 0:
            return None
        
        removedValue = self.list.get(0)

        self.list.set(0, self.list.get(self.list.size() - 1))
        self.list.remove()

        currentIndex = 0
        while currentIndex < self.list.size():
            leftChildIndex = 2 * currentIndex + 1
            rightChildIndex = 2 * currentIndex + 2

            if leftChildIndex >= self.list.size():
                break
        
            maxIndex = leftChildIndex
            if rightChildIndex < self.list.size():
                if self.compare(maxIndex, rightChildIndex) < 0:
                    maxIndex = rightChildIndex

            if self.compare(currentIndex, maxIndex) < 0:
                temp = self.list.get(maxIndex)
                self.list.set(maxIndex, self.list.get(currentIndex))
                self.list.set(currentIndex, temp)
                currentIndex = maxIndex
            else:
                break

        return removedValue


    def compare(self, v1, v2):
        return self.list.get(v1) - self.list.get(v2)
    

class ArrayList(list):
    def add(self, value):
        self.append(value)


    def remove(self):
        self.pop()


    def get(self, index):
        return self[index]
    

    def set(self, index, value):
        self[index] = value
    

    def size(self):
        return len(self)
    

def heap_sort(array):
    heap = Heap()

    for i in range(len(array)):
        heap.add(array[i])

    for i in range(len(array) - 1, -1, -1):
        array[i] = heap.remove()


print("testing heap sort in python...")

unsortedArray = [4, 1, 5, 2, 8, 3, 9, 7, 6]
print("unsorted array -> " + str(unsortedArray))
heap_sort(unsortedArray)
print("sorted array -> " + str(unsortedArray))
