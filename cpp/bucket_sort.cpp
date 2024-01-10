#include <iostream>

using namespace std;

void bucket_sort(int array[], int size);

int main() {
    std::cout << "testing bucket sort in c++\n";

    int array[] = { 3, 6, 1, 9, 8, 7, 2, 4, 5 };
    int size = sizeof(array) / sizeof(int);

    std::cout << "unsorted array -> [ " << array[0];
    for (int i = 1; i < size; i++) {
        std::cout << ", " << array[i];
    }
    std::cout << " ]\n";

    bucket_sort(array, size);

    std::cout << "sorted array -> [ " << array[0];
    for (int i = 1; i < size; i++) {
        std::cout << ", " << array[i];
    }
    std::cout << " ]\n";

    return 0;
}

void bucket_sort(int array[], int size) {
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

    int buckets[range] = {0};
    int buckets_size = sizeof(buckets) / sizeof(int);

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