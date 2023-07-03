//O(n^2) time, O(1) space;

export function insertionSort(arr) {
    let len = arr.length;
    let temp;

    for (let i = 1; i < len; i++) {
        let j = i;
        temp = arr[i];

        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
    }


    return arr;
}
