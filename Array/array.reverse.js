//O(n) time, O(1) space;
//generally, its just a leetcode typical problem

function reverseCustom(){
    let left = 0;
    let right = this.length - 1;

    while(left < right){
        [this[left], this[right]] = [this[right], this[left]];
        left++; right--;
    }


    return this;
}

Array.prototype.reverseCustom = reverseCustom;

let arr = [12, 31, 13];
let arr2 = [12, 31, 123, 13];

console.log(arr.reverseCustom());
console.log(arr2.reverseCustom());

