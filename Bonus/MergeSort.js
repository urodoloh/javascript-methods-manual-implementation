//O(n*logn) time, O(1) space

function mergeSort(arr) {
    if (arr.length > 1) {
        const length = arr.length;
        const middle = Math.floor(length / 2);
        
        const left = mergeSort(arr.slice(0, middle));
        const right = mergeSort(arr.slice(middle, length));

        arr = merge(left, right);
    }


    return arr;
}

function merge(left, right) {
    let i = j = 0;
    const result = [];

    while (i < left.length && j < right.length) {
        if(left[i] < right[j]) result[i++];
        else result.push([j++]);
    }

    
    if(i < left.length) return result.concat(left.slice(i));
    return result.concat(right.slice(j));
}
