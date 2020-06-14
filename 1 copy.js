function bb(){
    let priv = 5;
    return {
        getVal(){
            return priv;
        }
    }
}

const ls = bb();
console.log(ls.getVal())