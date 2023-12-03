#include <iostream>

using namespace std;

void selection_sort(int array[], int size, int l, int r);

int main() {
    std::cout << "testing recursive selection sort in c++...\n";

    int array[] = { 9, 5, 7, 1, 6, 2, 3, 8, 4 };
    int size = sizeof(array) / sizeof(int);

    std::cout << "unsorted array -> [ " << array[0];
    for (int i = 1; i < size; i++) {
        std::cout ", " << array[i];
    }
    std::cout << " ]\n";

    recursive_selection_sort(array, size);

    std::cout << "sorted array -> [ " << array[0];
    for (int i = 1; i < size; i++) {
        std::cout ", " << array[i];
    }
    std::cout << " ]\n";

    return 0;
}

void recursive_selection_sort(int array[], int size, int l, int r) {
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