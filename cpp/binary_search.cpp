#include <iostream>

using namespace std;

bool binary_search(int[], int, int);

void main() {
    std::cout << "testing binary search in c++...";

    int array[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
    int size = sizeof(array) / sizeof(array[0]);

    int result = binary_search(array, size, 5);
    string result_1_string = result ? "true" : "false";
    std::cout << "result 1: " << string_1_result << " -> expected true";

    result = binary_search(array, size, 10);
    string result_2_string = result ? "true" : "false";
    std::cout << "result 2: " << result_2_string << " -> expected false";

    return 0;
}

int binary_search(int array[], int size, int query) {
    int l = 0;
    int r = size - 1;

    int i = l + (r - l) / 2;

    while (l <= r) {
        if (array[i] == query) return i;
        if (array[i] < query) l = i + 1;
        if (array[i] > query) r = i - 1;
        i = l + (r - l) / 2;
    }
    return -1;
}