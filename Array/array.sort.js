function sortCustom_On2(callback){
    let newArray = [...this];
    let count = 0;

    
    for(let i = 0; i < newArray.length; i++){
        for(let j = 0; j < newArray.length - 1; j++){
            count++;
            if(callback(newArray[j], newArray[j + 1]) > 0){
                const temp = newArray[j + 1];
                newArray[j + 1] = newArray[j];
                newArray[j] = temp;
            };
        };
    };

    console.log(count);
    return newArray;
}

Array.prototype.sortCustom_On2 = sortCustom_On2;

arr = [1, 3, -2, 4, 6, -10, 10];

console.log(arr.sortCustom_On2((a, b) => a - b));