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
}
