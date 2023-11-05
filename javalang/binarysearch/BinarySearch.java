package javalang.binarysearch;

public class BinarySearch {
    public static boolean binarySearch(int[] array, int query) {
        int l = 0;
        int r = array.length - 1;

        int i = l + (r - l) / 2;

        while (l <= r) {
            if (array[i] == query) return true;
            if (array[i] < query) l = i + 1;
            if (array[i] > query) r = i - 1;
            i = l + (r - l) / 2;
        }
        return false;
    }

    public static void main(String[] args) {
        System.out.println("testing binary search in java...");
        int[] array = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };

        boolean result = BinarySearch.binarySearch(array, 5);
        System.out.println("result 1: " + result);
        assert result == true;

        result = BinarySearch.binarySearch(array, 10);
        System.out.println("result 2: " + result);
        assert result == false;
    }
}