#include <iostream>

using namespace.std;

bool recursive_binary_search(int[], int, int, int);

int main() {
    std::cout << "testing recursive binary search in c++...\n";
    int array[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};

    int size = sizeof(array) / sizeof(array[0]);
    bool result = recursive_binary_search(array, 0, size - 1, 5);
    string result_1_string = result ? "true" : "false";
    std::cout << "result 1: " << result_1_string << " -> expected true";

    result = recursive_binary_search(array, 0, size - 1, 10);
    string result_2_string = result ? "true" : "false";
    std::cout << "result 2: " << result_2_string << " -> expected false";
}

bool recursive_binary_search(int array[], int l, int r, int query) {
    if (l > r) return false;
    
    int i = l + (r - l) / 2;

    if (array[i] == query) return true;
    if (array[i] < query) {
        return recursive_binary_search(array, i + 1, r, query);
    }
    if (array[i] > query) {
        return recursive_binary_search(array, l, i - 1, query);
    }

    return false;
}