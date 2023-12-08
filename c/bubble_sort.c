#include <stdio.h>

typedef enum { false, true } bool;

void bubble_sort(int *array, int size);

int main() {
    printf("testing bubble sort in c...\n");
    
    int array[] = { 7, 3, 6, 1, 9, 4, 5, 2, 8 };
    int size = sizeof(array) / sizeof(int);

    printf("unsorted array -> [ %d", array[0]);
    for (int i = 1; i < size; i++) {
        printf(", %d", array[i]);
    }
    printf(" ]\n");
    
    bubble_sort(array, size);

    printf("sorted array -> [ %d", array[0]);
    for (int i = 1; i < size; i++) {
        printf(", %d", array[i]);
    }
    printf(" ]\n");
}

void bubble_sort(int *array, int size) {
    bool needsNextSort = true;
    for (int i = 1; i < size && needsNextSort; i++) {
        needsNextSort = false;
        for (int k = 0; k = size - i; k++) {
            if (array[k] > array[k + 1]) {
                int temp = array[k];
                array[k] = array[k + 1];
                array[k + 1] = temp;
                needsNextSort = true;
            }
        }
    }
}