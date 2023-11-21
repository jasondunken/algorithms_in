#include <stdio.h>

typedef enum { false, true } bool;

int main() {
    printf("testing recursive binary search in c...\n");

    int array[9] = {1, 2, 3, 4, 5, 6, 7, 8, 9};

    bool result = recursiveBinarySearch(array, 0, 8, 5);
    printf("result 1: %s\n", result ? "true" : "false");

    result = recursiveBinarySearch(array, 0, 8, 10);
    printf("result 2: %s\n", result ? "true" : "false");
}

bool recursiveBinarySearch(int *array, int l, int r, int query) {
    if (l > r) return false;

    int i = l + (r - l) / 2;

    if (array[i] == query) return true;
    if (array[i] < query) {
        return recursiveBinarySearch(array, i + 1, r, query);
    }
    if (array[i] > query) {
        return recursiveBinarySearch(array, l, i - 1, query);
    }

    return false;
}