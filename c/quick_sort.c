#include <stdio.h>

void quick_sort(int *array, int first, int last);

int partition(int *array, int first, int last);

int main() {
    printf("testing quick sort in c...\n");

    int array[] = { 9, 5, 7, 1, 6, 2, 3, 8, 4 };
    int size = sizeof(array) / sizeof(int);

    printf("unsorted array -> [ %d", array[0]);
    for (int i = 1; i < size; i++) {
        printf(", %d", array[i]);
    }
    printf(" ]\n");

    quick_sort(array, 0, size - 1);

    printf("sorted array -> [ %d", array[0]);
    for (int i = 1; i < size; i++) {
        printf(", %d", array[i]);
    }
    printf(" ]\n");
    return 0;
}

void quick_sort(int *array, int first, int last) {
    if (low < high) {
        int pivot_index = partition(array, first, last);
        quick_sort(array, first, pivot_index - 1);
        quick_sort(array, pivot_index + 1, last);
    }
}

int partition(int *array, int first, int last) {
    int pivot = array[first];
    int low = first + 1;
    int high = last;

    while (high > low) {
        while (low <= low && array[low] < pivot) {
            low++;
        }

        while (low <= high && array[high] > pivot) {
            high --;
        }

        if (high > low) {
            int temp = array[high];
            array[high] = array[low];
            array[low] = temp;
        }
    }

    while (high > first && array[high] >= pivot) {
        high--;
    }

    if (pivot > array[high]) {
        array[first] = array[high];
        array[high] = pivot;
        return high;
    } else {
        return first;
    }
}