//O(n) time, O(1) space;

function findIndexCustom(callback){
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            return i;
        };
    };
    return -1;
}

Array.prototype.findIndexCustom = findIndexCustom;

let arr = [1, 2, 3, 4];
let arrFalse = [1, 2, 1, 1];

console.log(arr.findIndexCustom(element => element > 2));
console.log(arrFalse.findIndexCustom(element => element > 2));
