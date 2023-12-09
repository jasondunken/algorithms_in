package javalang.mergesort;

import java.util.Arrays;

public class MergeSort {
    public static void mergeSort(int[] array) {
        if (array.length > 1) {
            int[] firstHalf = new int[array.length / 2];
            System.arraycopy(array, 0, firstHalf, 0, array.length / 2);
            mergeSort(firstHalf);

            int secondHalfLength = array.length - array.length / 2;
            int[] secondHalf = new int[secondHalfLength];
            System.arraycopy(array, array.length / 2, secondHalf, 0, secondHalfLength);
            mergeSort(secondHalf);

            int[] temp = merge(firstHalf, secondHalf);
            System.arraycopy(temp, 0, array, 0, temp.length);
        }
    }

    private static int[] merge(int[] firstHalf, int[] secondHalf) {
        int[] temp = new int[firstHalf.length + secondHalf.length];

        int current1 = 0;
        int current2 = 0;
        int current3 = 0;

        while (current1 < firstHalf.length && current2 < secondHalf.length) {
            if (firstHalf[current1] < secondHalf[current2]) {
                temp[current3++] = firstHalf[current1++];
            } else {
                temp[current3++] = secondHalf[current2++];
            }
        }

        while (current1 < firstHalf.length) {
            temp[current3++] = firstHalf[current1++];
        }

        while (current2 < secondHalf.length) {
            temp[current3++] = secondHalf[current2++];
        }

        return temp;
    }

    public static void main(String[] args) {
        System.out.println("testing merge sort in java...");
        int[] unsortedArray = { 9, 5, 7, 1, 6, 2, 3, 8, 4 };

        System.out.println("unsorted array: " + Arrays.toString(unsortedArray));
        MergeSort.mergeSort(unsortedArray);
        System.out.println("sorted array: " + Arrays.toString(unsortedArray));
    }
}
