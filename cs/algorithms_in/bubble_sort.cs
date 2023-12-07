namespace algorithms_in;

public class BubbleSort
{
    public static void bubbleSort(int[] array) {
        bool needsNextPass = true;
        for (int i = 1; i < array.Length && needsNextPass; i++) {
            needsNextPass = false;
            for (int k = 0; k < array.Length - i; k++) {
                if (array[k] > array[k + 1]) {
                    int temp = array[k];
                    array[k] = array[k + 1];
                    array[k + 1] = temp;
                    needsNextPass = true;
                }
            }
        }
    }
}
