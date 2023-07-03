//O(m) time, O(1) space

function pushCustom(...element){
    let length = this.length || 0;

    if(!element.length) return length;

    for(let i = 0; i < element.length; i++){
        this[length + i] =  element[i];
    }

    return this.length;
};

Array.prototype.pushCustom = pushCustom;

let arr = [1,1,1,1,1,1];

let object = {
    length: 3,
    random: "boo",
    2: 5,
  };
console.log(Array.prototype.pushCustom.call(object ,1 ,2)); 
console.log(object)
// console.log(arr.pushCustom(2, 3, 4))
// console.log(arr);
