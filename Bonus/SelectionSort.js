//O(n^2) time, O(1) space;  

import { swap } from "./helpers";

function selectionSort(arr) {
    const len = arr.length;
    let minIndex;

    for (let i = 0; i < len - 1; i++) {
        minIndex = i;

        for (let j = i; j < len; j++) {
            if (arr[minIndex] > arr[j]) minIndex = j; 
        }

        if (i !== minIndex) swap(arr, i, minIndex);
    }


    return arr;
}
