package javalang.recursive_binary_search;

public class RecursiveBinarySearch {
    
    public static boolean recursive_binary_search(int[] array, int l, int r, int query) {
        if (l > r) return false;

        int i = array.length / 2;
        if (array[i] == query) return true;
        if (array[i] < query) {
            return recursive_binary_search(array, i + 1, r, query);
        }
        if (array[i] > query) {
            return recursive_binary_search(array, l, i - 1, query);
        }

        return false;
    }

    public static void main(String[] args) {
        System.out.println("testing binary search in java...");
        int[] array = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };

        boolean result = RecursiveBinarySearch.recursive_binary_search(array, 0, array.length - 1, 5);
        System.out.println("result 1: " + result + " -> expected true");
        assert result == true;

        result = RecursiveBinarySearch.recursive_binary_search(array, 0, array.length - 1, 10);
        System.out.println("result 2: " + result + " -> expected false");
        assert result == false;
    }
}
