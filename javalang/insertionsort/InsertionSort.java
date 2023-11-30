package javalang.insertionsort;

import java.util.Arrays;

public class InsertionSort {
    public static void insertionSort(int[] array) {
        for (int i = 1; i < array.length; i++) {
            int currentElement = array[i];
            int k;
            for (k = i - 1; k >= 0 && array[k] > currentElement; k--) {
                array[k + 1] = array[k];
            }
            array[k + 1] = currentElement;
        }
    }

    public static void insertionSort2(int[] array) {
        for (int i = 1; i < array.length; i++) {
            for (int k = i; k > 0 && array[k - 1] > array[k]; k--) {
                int temp = array[k - 1];
                array[k - 1] = array[k];
                array[k] = temp;
            }
        }
    }

    public static void main(String args[]) {
        System.out.println("testing insertion sort in java...");
        int[] unsortedArray = { 9, 5, 7, 1, 6, 2, 3, 8, 4 };

        System.out.println("unsorted array: " + Arrays.toString(unsortedArray));
        InsertionSort.insertionSort(unsortedArray);
        System.out.println("sorted array: " + Arrays.toString(unsortedArray));
    
        System.out.println("testing insertion sort 2 in java...");
        int[] unsortedArray2 = { 9, 5, 7, 1, 6, 2, 3, 8, 4 };

        System.out.println("unsorted array: " + Arrays.toString(unsortedArray2));
        InsertionSort.insertionSort2(unsortedArray2);
        System.out.println("sorted array: " + Arrays.toString(unsortedArray2));
    }
}
