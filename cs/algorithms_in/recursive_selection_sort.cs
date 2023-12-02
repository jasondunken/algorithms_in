namespace algorithms_in;

public class RecursiveSelectionSort
{
    public static void recursiveSelectionSort(int[] array, int l, int r) {
        if (l < r) {
            int currentMin = array[l];
            int currentMinIndex = l;

            for (int i = l + 1; i < array.Length; i++) {
                if (currentMin > array[i]) {
                    currentMin = array[i];
                    currentMinIndex = i;
                }
            }
            array[currentMinIndex] = array[l];
            array[l] = currentMin;
            recursiveSelectionSort(array, l + 1, r);
        }
    }

}
