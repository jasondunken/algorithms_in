mod binary_search;

fn main() {
    println!("testing binary search in rust...");

    let array: [usize; 9] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let mut result: i32 = binary_search::binary_search(&array, 5);
    println!("result 1: {} -> expected 4", result);

    result = binary_search::binary_search(&array, 10);
    println!("result 2: {} -> expected -1", result);
}

