//O(n^2) time, O(1) space;

import { swap } from "./helpers";

function bubbleSort(arr) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) { 
            if (arr[j] > arr[j + 1]) swap(arr, j, j + 1); 
        }
    }


    return arr;
}
