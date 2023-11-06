using algorithms_in;

Console.WriteLine("testing binary search in C#...");
int[] array = {1, 2, 3, 4, 5, 6, 7, 8, 9};

bool result = BinarySearch.binarySearch(array, 5);
Console.WriteLine("result 1: " + result);

result = BinarySearch.binarySearch(array, 10);
Console.WriteLine("result 2: " + result);