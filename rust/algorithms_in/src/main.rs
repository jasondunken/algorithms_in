fn main() {
    println!("testing binary search in rust...");

    let array: [usize; 9] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let mut result: bool = binary_search(&array, 5);
    println!("result 1: {} -> expected true", result);

    result = binary_search(&array, 10);
    println!("result 2: {} -> expected false", result);
}

fn binary_search(slice: &[usize], query: usize) -> bool {
    let mut l: usize = 0;
    let mut r: usize = slice.len() - 1;

    let mut i: usize = l + (r - l) / 2;

    while l <= r {
        if slice[i] == query { return true; }
        if slice[i] < query { l = i + 1; }
        if slice[i] > query { r = i - 1; }
        if l == r { break; }
        i = l + (r - l) / 2;
    }
    return false;
}
