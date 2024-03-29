package algorithms_in

import "math"

func BucketSort(list []int) {
	var max int = math.MinInt
	for _, val := range list {
		if val > max {
			max = val
		}
	}

	var buckets [][]int = make([][]int, max + 1)

	for _, key := range list {
		if buckets[key] == nil {
			buckets[key] = make([]int, 0)
		}
		buckets[key] = append(buckets[key], key)
	}

	var k int = 0
	for _, bucket := range buckets {
		if bucket != nil {
			for _, j := range bucket {
				list[k] = j
				k++
			}
		}
	}
}

func BucketSort2(list []int) {
	var min int = list[0];
	var max int = list[0];
	for _, val := range list {
		if val < min {
			min = val;
		}
		if val > max {
			max = val;
		}
	}

	var r int = max - min + 1;
	var offset int = 0 - min;

	var buckets []int = make([]int, r);

	for _, val := range list {
		var key int = val + offset;
		buckets[key] = buckets[key] + 1;
	}

	var k int = 0;
	for i, bucket := range buckets {
		if bucket > 0 {
			var j int = 0;
			for j < bucket {
				list[k] = i - offset;
				k++;
				j++;
			}
		}
	}
}