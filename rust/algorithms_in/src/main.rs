mod binary_search;
mod recursive_binary_search;
mod selection_sort;
mod recursive_selection_sort;
mod insertion_sort;
mod bubble_sort;
mod merge_sort;

fn main() {
    test_binary_search();
    test_recursive_binary_search();
    test_selection_sort();
    test_recursive_selection_sort();
    test_insertion_sort();
    test_bubble_sort();
    test_merge_sort();
}

fn test_binary_search() {
    println!("\ntesting binary search in rust...");

    let array: [usize; 9] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    println!("array -> {:?}", array);

    println!("searching for 5...");
    let mut index: i32 = binary_search::binary_search(&array, 5);
    println!("result: {} -> expected 4", index);

    println!("searching for 10...");
    index = binary_search::binary_search(&array, 10);
    println!("result: {} -> expected -1", index);
}

fn test_recursive_binary_search() {
    println!("\ntesting recursive binary search in rust...");

    let array: [usize; 9] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    println!("array -> {:?}", array);

    println!("searching for 5...");
    let mut result: bool = recursive_binary_search::recursive_binary_search(&array, 0, 8, 5);
    println!("result: {} -> expected true", result);

    println!("searching for 10...");
    result = recursive_binary_search::recursive_binary_search(&array, 0, 8, 10);
    println!("result: {} -> expected false", result);
}

fn test_selection_sort() {
    println!("\ntesting selection sort in rust...");
    
    let mut unsorted_array: [usize; 9] = [9, 5, 7, 1, 6, 2, 3, 8, 4];
    println!("unsorted array -> {:?}", unsorted_array);
    selection_sort::selection_sort(&mut unsorted_array);
    println!("sorted array -> {:?}", unsorted_array);
}

fn test_recursive_selection_sort() {
    println!("\ntesting recursive selection sort in rust...");
    
    let mut unsorted_array: [usize; 9] = [9, 5, 7, 1, 6, 2, 3, 8, 4];
    println!("unsorted array -> {:?}", unsorted_array);
    let r: usize = unsorted_array.len() - 1;
    recursive_selection_sort::recursive_selection_sort(&mut unsorted_array, 0, r);
    println!("sorted array -> {:?}", unsorted_array);
}

fn test_insertion_sort() {
    println!("\ntesting insertion sort in rust...");
    
    let mut unsorted_array: [usize; 9] = [9, 5, 7, 1, 6, 2, 3, 8, 4];
    println!("unsorted array -> {:?}", unsorted_array);
    insertion_sort::insertion_sort(&mut unsorted_array);
    println!("sorted array -> {:?}", unsorted_array);

    println!("\ntesting insertion sort 2 in rust...");
    
    let mut unsorted_array2: [usize; 9] = [9, 5, 7, 1, 6, 2, 3, 8, 4];
    println!("unsorted array -> {:?}", unsorted_array2);
    insertion_sort::insertion_sort_2(&mut unsorted_array2);
    println!("sorted array -> {:?}", unsorted_array2);
}

fn test_bubble_sort() {
    println!("\ntesting bubble sort in rust...");
    
    let mut unsorted_array: [usize; 9] = [9, 5, 7, 1, 6, 2, 3, 8, 4];
    println!("unsorted array -> {:?}", unsorted_array);
    bubble_sort::bubble_sort(&mut unsorted_array);
    println!("sorted array -> {:?}", unsorted_array);
}

fn test_merge_sort() {
    println!("\ntesting merge sort in rust...");
    
    let mut unsorted_array: [usize; 9] = [9, 5, 7, 1, 6, 2, 3, 8, 4];
    println!("unsorted array -> {:?}", unsorted_array);
    merge_sort::merge_sort(&mut unsorted_array);
    println!("sorted array -> {:?}", unsorted_array);
}