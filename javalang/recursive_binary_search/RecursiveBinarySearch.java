package javalang.recursive_binary_search;

import java.util.Arrays;

public class RecursiveBinarySearch {
    
    public static boolean recursive_binary_search(int[] array, int query) {
        if (array.length == 0) return false;

        int i = array.length / 2;
        if (array[i] == query) return true;
        if (array[i] < query) {
            return recursive_binary_search(Arrays.copyOfRange(array, i + 1, array.length - 1), query);
        }
        if (array[i] > query) {
            return recursive_binary_search(Arrays.copyOfRange(array, 0, i - 1), query);
        }

        return false;
    }

    public static void main(String[] args) {
        System.out.println("testing binary search in java...");
        int[] array = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };

        boolean result = RecursiveBinarySearch.recursive_binary_search(array, 5);
        System.out.println("result 1: " + result + " -> expected true");
        assert result == true;

        result = RecursiveBinarySearch.recursive_binary_search(array, 10);
        System.out.println("result 2: " + result + " -> expected false");
        assert result == false;
    }
}
