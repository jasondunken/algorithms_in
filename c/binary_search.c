#include <stdio.h>

typedef enum { false, true } int;

bool binary_search(int *, int);

int main() {
    printf("testing binary search in c...\n");
    int array[9] = {1, 2, 3, 4, 5, 6, 7, 8, 9};

    int result = binary_search(array, 5);
    printf("result 1: %s -> expected true\n", result ? "true" : "false");

    result = binary_search(array, 10);
    printf("result 2: %s -> expected false\n", result ? "true" : "false");

    return 0;
}

int binary_search(int *array, int query) {
    int l = 0;
    int r = sizeof(array) - 1;

    int i = l + (r - l) / 2;

    while (l <= r) {
        if (array[i] == query) return i;
        if (array[i] < query) l = i + 1;
        if (array[i] > query) r = i - 1;
        i = l + (r - l) / 2;
    }
    return -1;
}