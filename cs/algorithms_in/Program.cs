using algorithms_in;

testBinarySearch();
testRecursiveBinarySearch();
testSelectionSort();
testRecursiveSelectionSort();
testInsertionSort();

static void testBinarySearch() {
    Console.WriteLine("testing binary search in C#...");
    int[] array = {1, 2, 3, 4, 5, 6, 7, 8, 9};

    int result = BinarySearch.binarySearch(array, 5);
    Console.WriteLine("result 1: " + result + " -> expected 4");

    result = BinarySearch.binarySearch(array, 10);
    Console.WriteLine("result 2: " + result + " -> expected -1");
}

static void testRecursiveBinarySearch() {
    Console.WriteLine("testing recursive binary search in C#...");
    int[] array = {1, 2, 3, 4, 5, 6, 7, 8, 9};

    bool result = RecursiveBinarySearch.recursiveBinarySearch(array, 0, array.Length - 1, 5);
    Console.WriteLine("result 1: " + result + " -> expected True");

    result = RecursiveBinarySearch.recursiveBinarySearch(array, 0, array.Length - 1, 10);
    Console.WriteLine("result 2: " + result + " -> expected False");
}

static void testSelectionSort() {
    Console.WriteLine("testing selection sort in C#...");
    int[] unsortedArray = { 9, 5, 7, 1, 6, 2, 3, 8, 4 };

    Console.WriteLine("unsorted array -> [ {0} ]", string.Join(", ", unsortedArray));
    SelectionSort.selectionSort(unsortedArray);
    Console.WriteLine("sorted array -> [ {0} ]", string.Join(", ", unsortedArray));
}

static void testRecursiveSelectionSort() {
    Console.WriteLine("testing recursive selection sort in C#...");
    int[] unsortedArray = { 9, 5, 7, 1, 6, 2, 3, 8, 4 };

    Console.WriteLine("unsorted array -> [ {0} ]", string.Join(", ", unsortedArray));
    RecursiveSelectionSort.recursiveSelectionSort(unsortedArray, 0, unsortedArray.Length - 1);
    Console.WriteLine("sorted array -> [ {0} ]", string.Join(", ", unsortedArray));
}

static void testInsertionSort() {
    Console.WriteLine("testing insertion sort in C#...");
    int[] unsortedArray = { 9, 5, 7, 1, 6, 2, 3, 8, 4 };

    Console.WriteLine("unsorted array -> [ {0} ]", string.Join(", ", unsortedArray));
    InsertionSort.insertionSort(unsortedArray);
    Console.WriteLine("sorted array -> [ {0} ]", string.Join(", ", unsortedArray));
}