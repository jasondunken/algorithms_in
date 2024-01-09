#include <stdio.h>

void bucket_sort(int *array, int size) {
    int min = array[0];
    int max = array[0];
    for (int i = 1; i < size; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }
    int range = max - min + 1;
    int offset = 0 - min;

    int buckets[range];
    int buckets_size = sizeof(buckets) / sizeof(int);
    for (int i = 0; i < buckets_size; i++) {
        buckets[i] = 0;
    }

    for (int i = 0; i < size; i++) {
        int key = array[i] + offset;
        buckets[key] = buckets[key] + 1;
    }

    int k = 0;
    for (int i = 0; i < buckets_size; i++) {
        if (buckets[i] > 0) {
            for (int j = 0; j < buckets[i]; j++) {
                array[k++] = i - offset;
            }
        }
    }
}

int main() {
    printf("testing bucket sort in c...\n");

    int array[] = { 9, 5, 1, 7, 1, 6, 2, 9, 3, 8, 4 };
    int size = sizeof(array) / sizeof(int);

    printf("unsorted array -> [ %d", array[0]);
    for (int i = 1; i < size; i++) {
        printf(", %d", array[i]);
    }
    printf(" ]\n");

    bucket_sort(array, size);

    printf("sorted array -> [ %d", array[0]);
    for (int i = 1; i < size; i++) {
        printf(", %d", array[i]);
    }
    printf(" ]\n");

    return 0;
}