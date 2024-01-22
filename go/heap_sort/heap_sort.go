package algorithms_in

type Heap struct {
	list ArrayList
}

func (h *Heap) add(value int) {
	h.list.add(value)

	currentIndex := h.list.size() - 1

	for currentIndex > 0 {
		parentIndex := (currentIndex - 1) / 2
		
		if h.compare(currentIndex, parentIndex) > 0 {
			temp := h.list.get(currentIndex)
			h.list.set(currentIndex, h.list.get(parentIndex))
			h.list.set(parentIndex, temp)
		} else {
			break
		}
		currentIndex = parentIndex
	}
}

func (h *Heap) remove() int {
	removedValue := h.list.get(0)

	h.list.set(0, h.list.get(h.list.size() - 1))
	h.list.remove()

	currentIndex := 0
	for currentIndex < h.list.size() {
		leftChildIndex := 2 * currentIndex + 1
		rightChildIndex := 2 * currentIndex + 2

		if leftChildIndex >= h.list.size() {
			break
		}

		maxIndex := leftChildIndex
		if rightChildIndex < h.list.size() {
			if h.compare(maxIndex, rightChildIndex) < 0 {
				maxIndex = rightChildIndex
			}
		}

		if h.compare(currentIndex, maxIndex) < 0 {
			temp := h.list.get(maxIndex)
			h.list.set(maxIndex, h.list.get(currentIndex))
			h.list.set(currentIndex, temp)
			currentIndex = maxIndex
		} else {
			break
		}
	}

	return removedValue
}

func (h *Heap) compare(v1, v2 int) int {
	return h.list.get(v1) - h.list.get(v2)
}

type ArrayList struct {
	list []int
}

func (a *ArrayList) add(value int) {
	a.list = append(a.list, value)
}

func (a *ArrayList) remove() {
	a.list = a.list[:len(a.list) - 1]
}

func (a *ArrayList) get(index int) int {
	return a.list[index]
}

func (a *ArrayList) set(index, value int) {
	a.list[index] = value
}

func (a *ArrayList) size() int {
	return len(a.list)
}

func HeapSort(list []int) {
	heap := Heap{}

	for i := range list {
		heap.add(list[i])
	}

	for i := len(list) - 1; i >= 0; i-- {
		list[i] = heap.remove()
	}
}