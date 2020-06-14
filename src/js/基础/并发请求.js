
printOrder(['/1.json?ts=' + Date.now(), '/2.json?ts=' + Date.now()], (err, result) => {
    console.log(err);
});

function printOrder(urls,callback){
    Promise.all(urls.map(url=>{
        return sendRequest(url);
    })).then(res=>{
        callback(null,res);
    },err=>{
        debugger
        callback(err)
    })
}

function sendRequest(url){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open('GET',url,true);
        xhr.onreadystatechange = function(){
            if(xhr.status === 200 && xhr.readyState === 4){
                resolve(xhr.responseText);
            }
        }
        xhr.onerror = function(err){
            alert('err')
            reject(err);
        }
        xhr.send(null);
    })
}