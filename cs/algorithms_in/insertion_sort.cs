namespace algorithms_in;

public class InsertionSort
{
    public static void insertionSort(int[] array) {
        for (int i = 1; i < array.Length; i++) {
            int currentElement = array[i];
            int k;
            for (k = i - 1; k >= 0 && array[k] > currentElement; k--) {
                array[k + 1] = array[k];
            }
            array[k + 1] = currentElement;
        }
    }

    public static void insertionSort2(int[] array) {
        for (int i = 1; i < array.Length; i++) {
            for (int k = i; k > 0 && array[k - 1] > array[k]; k--) {
                int temp = array[k - 1];
                array[k - 1] = array[k];
                array[k] = temp;
            }
        }
    }
}
