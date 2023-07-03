//O(n) time, O(1) space;

function findCustom(callback){
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            return this[i]
        };
    };
    return null;
    //in original find return undefiend (when false)
}

Array.prototype.findCustom = findCustom;

let arr = [1, 2, 3, 4]
let arrFalse = [1, 2, 1, 1]


console.log(arr.findCustom(element => element > 2));
console.log(arrFalse.findCustom(element => element > 2));
