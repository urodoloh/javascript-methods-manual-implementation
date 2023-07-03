//O(n) time, O(n) space;

function reduceCustom(callback, accumulator){

    for(let i = 0; i < this.length; i++){
        accumulator = callback(accumulator, this[i]);
    };


    return accumulator;
};

Array.prototype.reduceCustom = reduceCustom;

let arr = [1, 2, 3, 10, 20, 30, 40, 50];

console.log(arr.reduceCustom((accumulator, element) => accumulator + element, 0));
