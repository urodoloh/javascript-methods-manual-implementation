//O(n+m) time, O(1);

function unshiftCustom(...element){
    this.length = this.length + element.length;

    for(let i = this.length - 1; i >= element.length; i--){
        [this[i], this[i- element.length]] = [this[i - element.length], this[i]];
    }

    for(let i = 0; i < element.length; i++){
        this[i] = element[i];
    }

    
    return this.length;
}

Array.prototype.unshiftCustom = unshiftCustom;

let arr1 = [1,23,4,4,5,5,6,7,7,8,];
let arr2 = [1,23,4,4,5,5,6,7,7,8,];


console.log(arr1.unshiftCustom(0,0,0));
console.log(arr1)

console.log(arr2.unshift(0,0,0));
console.log(arr2);

