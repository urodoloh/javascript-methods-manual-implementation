function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    
}

const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};

function defaultCompare(a, b) {
    if (a === b) {
        return 0;
    }

    if(a < b) return Compare.LESS_THAN;
    return Compare.BIGGER_THAN;
}

export {defaultCompare, Compare, swap}; 