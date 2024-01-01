using algorithms_in;

testBinarySearch();
testRecursiveBinarySearch();
testSelectionSort();
testRecursiveSelectionSort();
testInsertionSort();
testBubbleSort();
testMergeSort();
testQuickSort();
testHeapSort();

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

static void testBubbleSort() {
    Console.WriteLine("testing bubble sort in C#...");
    int[] unsortedArray = { 9, 5, 7, 1, 6, 2, 3, 8, 4 };

    Console.WriteLine("unsorted array -> [ {0} ]", string.Join(", ", unsortedArray));
    BubbleSort.bubbleSort(unsortedArray);
    Console.WriteLine("sorted array -> [ {0} ]", string.Join(", ", unsortedArray));
}

static void testMergeSort() {
    Console.WriteLine("testing merge sort in C#...");
    int[] unsortedArray = { 9, 5, 7, 1, 6, 2, 3, 8, 4 };

    Console.WriteLine("unsorted array -> [ {0} ]", string.Join(", ", unsortedArray));
    MergeSort.mergeSort(unsortedArray);
    Console.WriteLine("sorted array -> [ {0} ]", string.Join(", ", unsortedArray));
}

static void testQuickSort() {
    Console.WriteLine("testing quick sort in C#...");
    int[] unsortedArray = { 9, 5, 7, 1, 6, 2, 3, 8, 4 };

    Console.WriteLine("unsorted array -> [ {0} ]", string.Join(", ", unsortedArray));
    QuickSort.quickSort(unsortedArray, 0, unsortedArray.Length - 1);
    Console.WriteLine("sorted array -> [ {0} ]", string.Join(", ", unsortedArray));
}

static void testHeapSort() {
    Console.WriteLine("testing heap sort in C#...");
    int[] unsortedArray = { 9, 5, 7, 1, 6, 2, 3, 8, 4 };

    Console.WriteLine("unsorted array -> [ {0} ]", string.Join(", ", unsortedArray));
    HeapSort.heapSort(unsortedArray);
    Console.WriteLine("sorted array -> [ {0} ]", string.Join(", ", unsortedArray));
}