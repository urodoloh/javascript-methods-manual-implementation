//O(n) time, O(1);

function everyCustom(callback){

    for(let i = 0; i < this.length; i++){
        if(callback(this[i])) continue;
        return false;
    };

    return true;
}

Array.prototype.everyCustom = everyCustom;

let arr = [1, 2, 3, 4, 5];

console.log(arr.everyCustom(element => element > 0) )
console.log(arr.everyCustom(element => element === 3) )
console.log(arr.everyCustom(element => element > 40) )


