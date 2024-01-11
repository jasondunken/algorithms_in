pub fn bucket_sort(array: &mut [i32]) {
    let mut min: i32 = array[0];
    let mut max: i32 = array[0];

    for i in 1..array.len() {
        if array[i] < min {
            min = array[i];
        }
        if array[i] > max {
            max = array[i];
        }
    }

    let range: usize = (max - min + 1) as usize;
    let offset: i32 = 0 - min;

    let mut buckets: Vec<usize> = vec![0; range];

    for i in 0..array.len() {
        let key: usize = (array[i] + offset) as usize;
        buckets[key] = buckets[key] + 1;
    }

    let mut k: usize = 0;
    for i in 0..buckets.len() {
        if buckets[i] > 0 {
            for _ in 0..buckets[i] {
                array[k] = i as i32 - offset;
                k += 1;
            }
        }
    }
}