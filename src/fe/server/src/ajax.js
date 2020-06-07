function ajax(url,method,headers={}){
    let objHEaders = {...headers};
    let GET_REQUEST = method === 'get';
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                resolve(xhr.responseText);
            } else {
                reject(xhr.responseText);
            }
        }
        Object.keys(objHEaders).forEach(key => {
            xhr.setRequestHeader(key, objHEaders[key]);
        });
        xhr.send(GET_REQUEST ?null : 'a=1&b=2');
    });
}
