namespace algorithms_in;

public class BucketSort
{
    public static void bucketSort(int[] list) {
        int n = int.MinValue;
        for (int i = 0; i < list.Length; i++) {
            if (list[i] > n) {
                n = list[i];
            }
        }

        List<int>[] buckets = new List<int>[n + 1];

        for (int i = 0; i < list.Length; i++) {
            int key = list[i];
            if (buckets[key] == null) {
                buckets[key] = new List<int>();
            }

            buckets[key].Add(list[i]);
        }

        int k = 0;
        for (int i = 0; i < buckets.Count(); i++) {
            if (buckets[i] != null) {
                List<int> bucket = buckets[i];
                for (int j = 0; j < bucket.Count(); j++) {
                    list[k++] = bucket[j];
                }
            }
        }
    }

    public static void bucketSort2(int[] list) {
        int min = list[0];
        int max = list[0];
        for (int i = 1; i < list.Length; i++) {
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

        for (int i = 0; i < list.Length; i++) {
            int key = list[i] + offset;
            buckets[key] = buckets[key] + 1;
        }

        int k = 0;
        for (int i = 0; i < buckets.Length; i++) {
            if (buckets[i] > 0) {
                for (int j = 0; j < buckets[i]; j++) {
                    list[k++] = i - offset;
                }
            }
        }
    }
}
