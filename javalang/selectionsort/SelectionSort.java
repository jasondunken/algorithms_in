package javalang.selectionsort;

import java.util.Arrays;

public class SelectionSort {
    public static void selectionSort(int[] array) {
        for (int i = 0; i < array.length; i++) {
            int currentMin = array[i];
            int currentMinIndex = i;

            for (int j = i + 1; j < array.length; j++) {
                if (currentMin > array[j]) {
                    currentMin = array[j];
                    currentMinIndex = j;
                }
            }

            if (currentMinIndex != i) {
                array[currentMinIndex] = array[i];
                array[i] = currentMin;
            }
        }
    }

    public static void main(String[] args) {
        System.out.println("testing selection sort in java...");
        int[] array = { 9, 5, 7, 1, 6, 2, 3, 8, 4 };

        SelectionSort.selectionSort(array);
        System.out.println("sorted array: " + Arrays.toString(array));

    }
}