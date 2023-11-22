pub fn recursive_binary_search(slice: &[usize], l: usize, r: usize, query: usize) -> bool {
    if l > r { return false };

    let i: usize = l + (r - l) / 2;

    if slice[i] == query { return true };
    if slice[i] < query {
        return recursive_binary_search(slice, i + 1, r, query);
    }
    if slice[i] > query {
        return recursive_binary_search(slice, l, i - 1, query);
    }

    return false;
}