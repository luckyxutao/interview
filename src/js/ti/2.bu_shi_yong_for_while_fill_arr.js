const arrWithoutLoop = (n,res=[]) =>{
	// f(n) = f(n-1).concat(n-1);
    if(n===0){
        return [];
    }
    return arrWithoutLoop(n-1,res).concat([n-1])
}

console.log(arrWithoutLoop(100))