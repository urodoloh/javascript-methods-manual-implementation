// O(n) time, O(n) space; 

function filterCustom(callback){
    let newArray = [];

    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            newArray.push(this[i]);
        };
    };

    
    return newArray;
};

Array.prototype.filterCustom = filterCustom;

arr = [1, 10, 100, 'a'];

console.log(arr.filterCustom((element) => element % 10 === 0) );