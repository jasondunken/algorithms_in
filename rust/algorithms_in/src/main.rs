fn main() {
    println!("testing binary search in rust...");

    let array: [usize; 9] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let mut result: i32 = binary_search(&array, 5);
    println!("result 1: {} -> expected 4", result);

    result = binary_search(&array, 10);
    println!("result 2: {} -> expected -1", result);
}

fn binary_search(slice: &[usize], query: usize) -> i32 {
    let mut l: usize = 0;
    let mut r: usize = slice.len() - 1;

    let mut i: usize = l + (r - l) / 2;

    while l <= r {
        if slice[i] == query { return i.try_into().unwrap(); }
        if slice[i] < query { l = i + 1; }
        if slice[i] > query { r = i - 1; }
        if l == r { break; }
        i = l + (r - l) / 2;
    }
    return -1;
}
