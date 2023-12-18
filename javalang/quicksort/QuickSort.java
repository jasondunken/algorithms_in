package javalang.quicksort;

import java.util.Arrays;

public class QuickSort {
    public static void quickSort(int[] array) {
        quickSort(array, 0, array.length - 1);
    }

    private static void quickSort(int[] array, int first, int last) {
        if (last > first) {
            int pivotIndex = partition(array, first, last);
            quickSort(array, first, pivotIndex - 1);
            quickSort(array, pivotIndex + 1, last);
        }
    }

    private static int partition(int[] array, int first, int last) {
        int pivot = array[first];
        int low = first + 1;
        int high = last;

        while (high > low) {
            while (low <= high && array[low] <= pivot) {
                low++;
            }

            while (low <= high && array[high] > pivot) {
                high--;
            }

            if (high > low) {
                int temp = array[high];
                array[high] = array[low];
                array[low] = temp;
            }
        }

        while (high > first && array[high] >= pivot) {
            high--;
        }

        if (pivot > array[high]) {
            array[first] = array[high];
            array[high] = pivot;
            return high;
        } else {
            return first;
        }
    }

    public static void main(String[] args) {
        System.out.println("testing quick sort in java...");
        int[] unsortedArray = { 9, 5, 7, 1, 6, 2, 3, 8, 4 };

        System.out.println("unsorted array: " + Arrays.toString(unsortedArray));
        QuickSort.quickSort(unsortedArray);
        System.out.println("sorted array: " + Arrays.toString(unsortedArray));
    }
}