//O(n+m) time, O(n);

function concatCustom(array){
    let result = [];
    result.length = this.length + array.length;
    
    for(let i = 0; i < this.length; i++){
        result[i] = this[i];
    };

    let j = 0;
    for(let i = this.length; i < this.length + array.length; i++){
        result[i] = array[j];
        j++
    }


    return result;
}


Array.prototype.concatCustom = concatCustom;

let arr = [1,1,1,1,1,1,1];
let arr2 = [2,3,4,5,5,6,6,7,8];

console.log(arr.concatCustom(arr2))