namespace algorithms_in;

public class InsertionSort
{
    public static void insertionSOrt(int[] array) {
        for (int i = 1; i < array.Length; i++) {
            int currentElement = array[i];
            int k;
            for (k = i - 1; k >= 0 && array[k] > currentElement; k--) {
                array[k + 1] = array[k];
            }
            array[k + 1] = currentElement;
        }
    }
}
