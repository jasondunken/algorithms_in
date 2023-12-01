package javalang.selectionsort;

import java.util.Arrays;

public class RecursiveSelectionSort {
    public static void sort(int[] array) {
        sort(array, 0, array.length - 1);
    }

    public static void sort(int[] array, int l, int r) {
        if (l < r) {
            int currentMin = array[l];
            int currentMinIndex = l;
            for (int i = l + 1; i <= r; i++) {
                if (array[i] < currentMin) {
                    currentMin = array[i];
                    currentMinIndex = i;
                }
            }
            array[currentMinIndex] = array[l];
            array[l] = currentMin;

            sort(array, l + 1, r);
        }
    }

    public static void main(String[] args) {
        System.out.println("testing recursive selection sort in java...");
        int[] unsortedArray = { 9, 5, 7, 1, 6, 2, 3, 8, 4 };

        System.out.println("unsorted array: " + Arrays.toString(unsortedArray));
        RecursiveSelectionSort.sort(unsortedArray);
        System.out.println("sorted array: " + Arrays.toString(unsortedArray));
    }
}
