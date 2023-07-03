//O(n) time, O(1) space

function fillCustom(value, start, end){
    if(start < 0) start = start + this.length;
    if(start <  -this.length || !start) start = 0;

    if(end < 0) end = end + this.length;
    if(end < -this.length) end = 0;
    if(!end || this.length) end = this.length;


    for(let i = 0; i < this.length; i++){
        this[i] = value;
    };

    return this;
}

Array.prototype.fillCustom = fillCustom;

let arr = new Array(10).fillCustom(1);

console.log(arr);