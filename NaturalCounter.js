function from(start){
    let i=start-1

    function inc(){
        i=i+1
        return i
    }
    return inc
}

function to(counter,limit){
    return function(){
        let j=counter();
        if(j>limit){
            return undefined
        }
        return j
    }
}


(function (){
    let count=to(from(1),20);
    
    for(let i=0; i<10;i++){
        console.log(count())
    }
}())