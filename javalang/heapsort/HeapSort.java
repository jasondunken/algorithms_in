package javalang.heapsort;

public class HeapSort {
    public static <E extends Comparable<E>> void heapSort(E[] list) {
        Heap<E> heap = new Heap<E>();

        for (int i = 0; i < list.length; i++) {
            heap.add(list[i]);
        }

        for (int i = list.length - 1; i >= 0; i--) {
            list[i] = heap.remove();
        }
    }

    public static void main(String[] args) {
        Integer[] list = { 2, 3, 2, 5, 6, 1, -2, 3, 14, 12 };
        heapSort(list);
        for (int i = 0; i < list.length; i++ ) {
            System.out.print(list[i] + " ");
        }
    }
}
