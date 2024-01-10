#include <iostream>

using namespace std;

void bubble_sort(int array[], int size);

int main() {
    std::cout << "testing bubble sort in c++...\n"

    int array[] == { 7, 3, 6, 1, 9, 4, 5, 2, 8 };
    int size = sizeof(array) / sizeof(int);

    std::cout << "unsorted array -> [ " << array[0];
    for (int i = 1; i < size; i++) {
        std::cout << ", " << array[i];
    }
    std::cout << " ]\n";

    bubble_sort(array, size);

    std::cout << "unsorted array -> [ " << array[0];
    for (int i = 1; i < size; i++) {
        std::cout << ", " << array[i];
    }
    std::cout << " ]\n";
}

void bubble_sort(int array{}, int size) {
    bool needsNextPass = true;
    for (int i = 1; i < size && needsNextPass; i++) {
        needsNextPass = false;
        for (int k = 0; k < size - i; k++) {
            if (array[k] > array[k + 1]) {
                int temp = array[k];
                array[k] = array[k + 1];
                array[k + 1] = temp;
                needsNextPass = true;
            }
        } 
    }
}