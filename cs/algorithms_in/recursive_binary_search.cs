using System;

namespace algorithms_in;

public class RecursiveBinarySearch
{
        public static bool recursiveBinarySearch(int[] array, int l, int r, int query) {
            if (l > r) return false;

            int i = l + (r - l) / 2;
            if (array[i] == query) return true;
            if (array[i] < query) {
                return recursiveBinarySearch(array, i + 1, r, query);
            }
            if (array[i] > query) {
                return recursiveBinarySearch(array, l, i - 1, query);
            }

            return false;
        }
}
