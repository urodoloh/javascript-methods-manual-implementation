// O(n) time, O(n) space; 

function mapCustom(callback){

    const newArray = [];

    for(let i = 0;  i < this.length; i++){
        newArray[i] = callback(this[i], i);
    };


    return newArray;
};
Array.prototype.mapCustom = mapCustom;


let arr = [1, 2, 3];

console.log(arr.mapCustom((element) => element ** 2));
