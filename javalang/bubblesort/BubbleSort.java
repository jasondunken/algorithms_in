package javalang.bubblesort;

import java.util.Arrays;

public class BubbleSort {
    public static void bubbleSort(int[] list) {
        boolean needsNextPass = true;
        for (int k = 1; k < list.length && needsNextPass; k++) {
            needsNextPass = false;
            for (int i = 0; i < list.length - k; i++) {
                if (list[i] > list[i + 1]) {
                    int temp = list[i];
                    list[i] = list[i + 1];
                    list[i + 1] = temp;
                    needsNextPass = true;
                }
            }
        }
    }

    public static void main(String args[]) {
        System.out.println("testing bubble sort in java...");
        int[] unsortedArray = { 9, 5, 7, 1, 6, 2, 3, 8, 4 };

        System.out.println("unsorted array: " + Arrays.toString(unsortedArray));
        BubbleSort.bubbleSort(unsortedArray);
        System.out.println("sorted array: " + Arrays.toString(unsortedArray));
    }
}
