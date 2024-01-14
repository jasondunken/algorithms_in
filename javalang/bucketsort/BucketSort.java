package javalang.bucketsort;

import java.util.Arrays;
import java.util.ArrayList;

public class BucketSort {
    public static void bucketSort(int[] list) {
        int n = Integer.MIN_VALUE;
        for (int i = 0; i < list.length; i++ ) {
            if (list[i] > n) {
                n = list[i];
            }
        }

        ArrayList<Integer>[] buckets = new ArrayList[n + 1];

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

    public static void bucketSort2(int[] list) {
        int min = list[0];
        int max = list[0];
        for (int i = 1; i < list.length; i++) {
            if (list[i] < min) {
                min = list[i];
            }
            if (list[i] > max) {
                max = list[i];
            }
        }

        int range = max - min + 1;
        int offset = 0 - min;

        ArrayList<Integer>[] buckets = new ArrayList[range];

        for (int i = 0; i < list.length; i++) {
            int key = list[i] + offset;
            if (buckets[key] == null) {
                buckets[key] = new ArrayList<Integer>();
            }
            buckets[key].add(list[i]);
        }

        int k = 0;
        for (int i = 0; i < buckets.length; i++) {
            if (buckets[i] != null) {
                ArrayList<Integer> bucket = buckets[i];
                for (int j = 0; j < bucket.size(); j++) {
                    list[k++] = (int) bucket.get(j);
                }
            }
        }
    }

    public static void bucketSort3(int[] list) {
        int min = list[0];
        int max = list[0];
        for (int i = 1; i < list.length; i++) {
            if (list[i] < min) {
                min = list[i];
            }
            if (list[i] > max) {
                max = list[i];
            }
        }
        int range = max - min + 1;
        int offset = 0 - min;

        int[] buckets = new int[range];

        for (int i = 0; i < list.length; i++) {
            int key = list[i] + offset;
            buckets[key] = buckets[key] + 1;
        }

        int k = 0;
        for (int i = 0; i < buckets.length; i++) {
            if (buckets[i] > 0) {
                for (int j = 0; j < buckets[i]; j++) {
                    list[k++] = i - offset;
                }
            }
        }
    }

    public static void main(String[] args) {
        System.out.println("testing bucket sort in java...");
        int[] unsortedArray = { 9, 5, 7, 1, -6, 2, 5, 7, -1, 6, 2, 3, 8, 4 };

        System.out.println("unsorted array: " + Arrays.toString(unsortedArray));
        bucketSort3(unsortedArray);
        System.out.println("sorted array: " + Arrays.toString(unsortedArray));
    }
}
