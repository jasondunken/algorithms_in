using System;

namespace algorithms_in;

public class RecursiveBinarySearch
{
        public static bool recursive_binary_search(int[] array, int l, int r, int query) {
            if (l >= r) return false;

            int i = l + (r - l) / 2;
            if (array[i] == query) return true;
            if (array[i] < query) {
                return recursive_binary_search(array, l + 1, r, query);
            }
            if (array[i] > query) {
                return recursive_binary_search(array, l, r - 1, query);
            }

            return false;
        }
}
