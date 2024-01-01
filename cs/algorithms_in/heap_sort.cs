namespace algorithms_in;

public class HeapSort
{
    static Heap heap = new Heap();

    public static void heapSort(int[] array) {
        for (int i = 0; i < array.Length; i++) {
            heap.add(array[i]);
        }

        for (int i = array.Length - 1; i >= 0; i--) {
            array[i] = heap.remove();
        }
    }
}

public class Heap
{
    ArrayList list;
    public Heap() {
        list = new ArrayList();
    }

    public void add(int value) {
        list.add(value);

        int currentIndex = list.size() - 1;

        while (currentIndex > 0) {
            int parentIndex = (currentIndex - 1) / 2;

            if (compare(currentIndex, parentIndex) > 0) {
                int temp = list.get(currentIndex);
                list.set(currentIndex, list.get(parentIndex));
                list.set(parentIndex, temp);
            } else {
                break;
            }

            currentIndex = parentIndex;
        }
    }

    public int remove() {
        int removedValue = list.get(0);

        list.set(0, list.get(list.size() - 1));
        list.remove();

        int currentIndex = 0;
        while (currentIndex < list.size()) {
            int leftChildIndex = 2 * currentIndex + 1;
            int rightChildIndex = 2 * currentIndex + 2;

            if (leftChildIndex >= list.size()) {
                break;
            }

            int maxIndex = leftChildIndex;
            if (rightChildIndex < list.size()) {
                if (compare(maxIndex, rightChildIndex) < 0) {
                    maxIndex = rightChildIndex;
                }
            }

            if (compare(currentIndex, maxIndex) < 0) {
                int temp = list.get(maxIndex);
                list.set(maxIndex, list.get(currentIndex));
                list.set(currentIndex, temp);
                currentIndex = maxIndex;
            } else {
                break;
            }
        }

        return removedValue;
    }

    private int compare(int v1, int v2) {
        return list.get(v1) - list.get(v2);
    }
}

public class ArrayList
{
    List<int> list;
    public ArrayList() {
        list = new List<int>();
    }

    public void add(int value) {
        list.Add(value);
    }

    public void remove() {
        list.RemoveAt(list.Count - 1);
    }

    public int get(int index) {
        return list[index];
    }

    public void set(int index, int value) {
        list[index] = value;
    }

    public int size() {
        return list.Count();
    }
}
