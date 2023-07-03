//O(n) time, O(n);
//code "separator = ','" i found on core-js page in github 

function joinCustom(separator = ','){
    let string = this[0];
    
    for(let i = 1;  i < this.length; i++){
        string += separator + this[i];
    }

    return string;
};

Array.prototype.joinCustom = joinCustom;

let arr = [1,1,1,1,1,1,1,1,1,1,1];

console.log(arr.join(''));s