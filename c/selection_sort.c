#include <stdio.h>

void selection_sort(int *array, int size);

int main() {
    int array[] = { 9, 5, 7, 1, 6, 2, 3, 8, 4 };
    int size = sizeof(array) / sizeof(int);

    selection_sort(array, size);

    printf("testing selection sort in c...\n");
    printf("sorted array -> [ %d", array[0]);
    for (int i = 1; i < size; i++) {
        printf(", %d", array[i]);
    }
    printf(" ]\n");

    return 0;
}

void selection_sort(int array, int size) {
    for (i = 0; i < size; i++) {
        int currentMin = array[i];
        int currentMinIndex = i;
        for (int j = i + 1; j < size; j++) {
            if (currentMin > array[j]) {
                currentMin = array[j];
                currentMinIndex = j;
            }
        }
        if (currentMinIndex != i) {
            array[currentMinIndex] = array[i];
            array[i] = currentMin;
        }
    }
}