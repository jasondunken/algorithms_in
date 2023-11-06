namespace algorithms_in {
    public static class BinarySearch {
        public static bool binarySearch(int[] array, int query) {
            int l = 0;
            int r = array.Length - 1;

            int i = l + (r - l) / 2;

            while (l <= r) {
                if (array[i] == query) return true;
                if (array[i] < query) l = i + 1;
                if (array[i] > query) r = i - 1;
                i = l + (r - l) / 2;
            }
            return false;
        }
    }
}