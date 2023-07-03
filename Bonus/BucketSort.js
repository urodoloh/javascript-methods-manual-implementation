//O(n^2) time, O(n)

import { insertionSort } from "./InsertionSort";

function bucketSort(arr, bucketSize) {
    if (arr.length < 2) return arr;
    
    const buckets = createBuckets(arr, bucketSize);

    return sortBuckets(buckets);
}

function createBuckets(arr, bucketSize) {
    let min = arr[0];
    let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        else if (arr[i] > max) max = arr[i];
    }
    const bucketCount = Math.floor((max - min) / bucketSize) + 1;


    const buckets = new Array(bucketCount).fill([]);
    

    for (let i = 0; i < arr.length; i++) {
        const bucketIndex = Math.floor((arr[i] - min) / bucketSize);
        buckets[bucketIndex].push(arr[i]);
    }


    return buckets;
}

function sortBuckets(buckets) {
    const sortedArr = [];

    for (let i = 0; i < buckets.length; i++) {
        if (buckets[i] !== null) {
            insertionSort(buckets[i]); 
            sortedArr.push(...buckets[i]);
        }
    }


    return sortedArr;
}
