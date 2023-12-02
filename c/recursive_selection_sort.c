#include <stdio.h>

void recursive_selection_sort(int *array, int size, int l, int r);

int main() {
    printf("testing recursive selection sort in c...\n");

    int array[] = { 9, 5, 7, 1, 6, 2, 3, 8, 4 };
    int size = sizeof(array) / sizeof(int);

    printf("unsorted array -> [ %d", array[0]);
    for (int i = 1; i < size; i++) {
        printf(", %d", array[i]);
    }
    printf(" ]\n");

    recursive_selection_sort(array, size, 0, size - 1);

    printf("sorted array -> [ %d", array[0]);
    for (int i = 1; i < size; i++) {
        printf(", %d", array[i]);
    }
    printf(" ]\n");

    return 0;
}

void recursive_selection_sort(int *array, int size, int l, int r) {
    if (l < r) {
        int currentMin = array[l];
        int currentMinIndex = l;
        for (int i = l + 1; i < size; i++) {
            if (currentMin > array[i]) {
                currentMin = array[i];
                currentMinIndex = i;
            }
        }
        array[currentMinIndex] = array[l];
        array[l] = currentMin;
        recursive_selection_sort(array, size, l + 1, r);
    }
}