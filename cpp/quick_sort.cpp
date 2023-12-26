#include <iostream>

using namespace std;

void quick_sort(int array[], int first, int last);

int partition(int array[] , int first, int last);

int main() {
    std::cout << "Testing quick sort in c++...\n";

    int array[] = { 4, 1, 7, 2, 5, 8, 3, 9, 6 };
    int size = sizeof(array) / sizeof(int);

    std::cout << "unsorted array -> [ " << array[0];
    for (int i = 1; i < size; i++) {
        sdt::cout << ", " << array[i];
    }
    std::cout << " ]\n";

    quick_sort(array, 0, size - 1);

    std::cout << "sorted array -> [ " << array[0];
    for (int i = 1; i < size; i ++) {
        std::cout << ", " << array[i];
    }
    std::cout << " ]\n";

    return 0;
}

void quick_sort(int array[], int first, int last) {
    int pivot_index = partition(array, first, last);
    quick_sort(array, first, pivot_index - 1);
    quick_sort(array, pivot_index + 1, last);
}

int partition(int array[], int first, int last) {
    int pivot = array[first];
    int low = first + 1;
    int high = last;

    while (high > low) {
        while (low <= high && array[low] <= pivot) {
            low++;
        }

        while (low <= high && array[high] > pivot) {
            high--;
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