namespace algorithms_in;

public class MergeSort
{
    public static void mergeSort(int[] array) {
        if (array.Length > 1) {
            int midpoint = array.Length / 2;
            int[] firstHalf = array[0..midpoint];
            mergeSort(firstHalf);
            
            int[] secondHalf = array[midpoint..array.Length];
            mergeSort(secondHalf);

            int[] temp = merge(firstHalf, secondHalf);
            
            for (int i = 0; i < temp.Length; i++) {
                array[i] = temp[i];
            }
        }
    }

    private static int[] merge(int[] firstHalf, int[] secondHalf) {
        int[] temp = new int[firstHalf.Length + secondHalf.Length];

        int current1 = 0;
        int current2 = 0;
        int current3 = 0;

        while (current1 < firstHalf.Length && current2 < secondHalf.Length) {
            if (firstHalf[current1] < secondHalf[current2]) {
                temp[current3++] = firstHalf[current1++];
            } else {
                temp[current3++] = secondHalf[current2++];
            }
        }

        while (current1 < firstHalf.Length) {
            temp[current3++] = firstHalf[current1++];
        }

        while (current2 < secondHalf.Length) {
            temp[current3++] = secondHalf[current2++];
        }

        return temp;
    }
}
