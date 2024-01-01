package javalang.bucketsort;

import java.util.Arrays;
import java.util.ArrayList;

public class BucketSort {
    public static void bucketSort(int[] list) {
        int N = Integer.MIN_VALUE;
        for (int i = 0; i < list.length; i++ ) {
            if (list[i] > N) {
                N = list[i];
            }
        }

        ArrayList<Integer>[] buckets = new ArrayList[N + 1];

        for (int i = 0; i < list.length; i++) {
            int key = list[i];
            if (buckets[key] == null) {
                buckets[key] = new ArrayList<Integer>();
            }
            ArrayList<Integer> bucket = (ArrayList<Integer>) buckets[key];
            bucket.add(list[i]);
        }

        int k = 0;
        for (int i = 0; i < buckets.length; i++) {
            if (buckets[i] != null) {
                ArrayList<Integer> bucket = (ArrayList<Integer>) buckets[i];
                for (int j = 0; j < bucket.size(); j++) {
                    list[k++] = (int) bucket.get(j);
                }
            }
        }
    }

    public static void main(String[] args) {
        System.out.println("testing bucket sort in java...");
        int[] unsortedArray = { 9, 5, 7, 1, 6, 2, 5, 7, 1, 6, 2, 3, 8, 4 };

        System.out.println("unsorted array: " + Arrays.toString(unsortedArray));
        bucketSort(unsortedArray);
        System.out.println("sorted array: " + Arrays.toString(unsortedArray));
    }
}
