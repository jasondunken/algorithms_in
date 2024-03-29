#include <iostream>

using namespace std;

void insertion_sort(int array[], int size);
void insertion_sort_2(int array[], int size);

int main() {
    int array[] = { 9, 5, 7, 1, 6, 2, 3, 8, 4 };
    int size = sizeof(array) / sizeof(int);

    std::cout << "testing insertion sort in c...\n";

    insertion_sort(array, size);

    std::cout << "sorted array -> [ " << array[0];
    for (int i = 1; i < size; i++) {
        std::cout << ", " << array[i];
    }
    std::cout << " ]\n";

    return 0;
}

void insertion_sort(int array[], int size) {
    for (int i = 1; i < size; i++) {
        int currentElement = array[i];
        int k;
        for (k = i - 1; k >= 0 && array[k] > currentElement; k--) {
            array[k + 1] = array[k];
        }
        array[k + 1] = currentElement;
    }
}

void insertion_sort_2(int array[], int size) {
    for (int i = 1; i < size; i++) {
        for (int k = i; k > 0 && array[k - 1] > array[k]; k--) {
            int temp = array[k - 1];
            array[k - 1] = array[k];
            array[k] = temp;
        }
    }
}