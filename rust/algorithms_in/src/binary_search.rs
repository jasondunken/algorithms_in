pub fn binary_search(slice: &[usize], query: usize) -> i32 {
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