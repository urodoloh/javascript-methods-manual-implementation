//O(1) time, O(n) space

function popCustom(){
    let result = this[this.length -1];
    this.length = this.length - 1 || 0;


    return result;
};

Array.prototype.popCustom = popCustom;

let arr = [1,2,3,4,5];

const arrayLike = {
    length: 3,
    unrelated: "foo",
    2: 4,
  };

const plainObj = {1: 1};

// console.log(arr.popCustom())
// console.log(arr)

console.log(Array.prototype.popCustom.call(arrayLike));
console.log(arrayLike);

console.log(Array.prototype.popCustom.call(plainObj))
console.log(plainObj);

