mod binary_search;
mod recursive_binary_search;
mod selection_sort;

fn main() {
    println!("testing binary search in rust...");

    let array: [usize; 9] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let mut index: i32 = binary_search::binary_search(&array, 5);
    println!("result 1: {} -> expected 4", index);

    index = binary_search::binary_search(&array, 10);
    println!("result 2: {} -> expected -1", index);

    println!("testing recursive binary search in rust...");

    let mut result: bool = recursive_binary_search::recursive_binary_search(&array, 0, 8, 5);
    println!("result 3: {} -> expected true", result);

    result = recursive_binary_search::recursive_binary_search(&array, 0, 8, 10);
    println!("result 4: {} -> expected false", result);

    println!("testing selection sort in rust...");
    
    let mut unsorted_array: [usize; 9] = [9, 5, 7, 1, 6, 2, 3, 8, 4];
    selection_sort::selection_sort(&mut unsorted_array);
    println!("sorted array -> {:?}", unsorted_array);
}

