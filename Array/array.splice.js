//O(n^2) time, O(nm) space;

//This is shit, but i dont realize how write this function by myself
//in another day i'm rewrite this... 

function spliceCustom(start, deleteCount, ...items){
    let stop = this.length;

    let newArray = [];

    function copy(source, self){
        for(let i = 0; i < source.length; i++){
            self[i] = source[i];
        }
        self.length = source.length;
    }

    if(start < 0) start += this.length;
    
    if(deleteCount){
        stop = start + deleteCount;

        if(deleteCount < 0) stop = 0;
    };

    for(let i = start; i < stop; i++){
        newArray.push(this[i]);
    };


    if(deleteCount && items.length <= 0){
        let deleteArr = [];

        for(let i = 0; i < this.length; i++){
            if(i === start) i = stop + 1;
            else deleteArr.push(this[i]);
        }

        copy(deleteArr, this);
    }


    if(items.length > 0){
        let gatherArr = [];

        for(let i = 0; i < this.length; i++){
            if(i === start) {
                i = stop + 1;
                gatherArr = [...gatherArr, ...items];
            } else {
                gatherArr.push(this[i]);
            }
        }

        copy(gatherArr, this);
    }


    return newArray;
}

Array.prototype.spliceCustom = spliceCustom;

let arr = [1,1,2,3,4,5,6,7,7,8,76,54,3,2];

let newArr = arr.spliceCustom(2, 4, 'se', '23', 'AD', 1000, 100)

console.log(arr);
console.log(newArr);

let arr2 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,];

let newArr2 = arr2.spliceCustom(0, 5)

console.log(arr2);
console.log(newArr2);