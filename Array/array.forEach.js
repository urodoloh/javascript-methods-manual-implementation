//O(n) time, O(n) space;

function forEachCustom(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i]);
    };
    //forEach all return undefiend, this is life :^()
};

Array.prototype.forEachCustom = forEachCustom;

let arr = [1, 2, 3, 4, 5];

console.log(arr.forEachCustom(element => console.log(element) ))

//output (log)
// 1
// 2
// 3
// 4
// 5
// undefined
// ^^^^^^^^^ this is normal