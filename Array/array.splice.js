//O(n) time, O(n) space;

function spliceCustom(start, deleteCount, ...items){
    let stop = this.length;

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
    }

    for(let i = start; i < stop; i++){
        return
    }



}