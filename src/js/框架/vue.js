let obj = {
    name : 'zf',
    age : '20'
}

function walk(data){
    let keys = Object.keys(data);
    for(let key of keys){
        defineReactive(data,key,data[key])
    }
}
function defineReactive(data,key,value){
    
    Object.defineProperty(data,key,{
        get(){
            return value;
        },
        set(newValue){
            if(newValue === value){
                return ;
            }
            console.log('changed',value,newValue);
            objserve
            value = newValue;
        }
    });
}

walk(obj);
obj.name = 'wu'