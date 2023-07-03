//O(n) time, O(n) space

function sliceCustom(start, end){
    let array = this;

    let stop = array.length - 1;

    let newArr = [];

    if(start === undefined) return newArr;

    if(start < 0) start = start + array.length;
    if(end < 0) end = end + array.length;

    if(end !== undefined && end > 0) stop = end - 1;
    
    let n = 0;

    for(let i = start; i <= stop; i++){
        newArr[n] = array[i];
        n++;
    }


    return newArr;
}


Array.prototype.sliceCustom = sliceCustom;

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log(arr.sliceCustom(0, 9))
console.log(arr.sliceCustom(0, -5))
console.log(arr.sliceCustom(5))

