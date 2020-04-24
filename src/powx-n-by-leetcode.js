// function getUnique(arr){
//     var st = new Map();
//     for(let i = 0;i<arr.length;i++){
//         if(st.has(arr[i])){
//             st.set(arr[i],false);
//         } else {
//             st.set(arr[i],true);
//         }
//     }
//     for([key,value] of st){
//         if(value){
//             return key;
//         }
//     }
// }

// import { url } from "koa-router";

// var g = getUnique([4,1,2,1,2]);
// console.log(g);

// var ss = 'https://www.aliyun.com/';

function request(url){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.onload = ()=>{
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                  resolve(xhr.responseText)
                } else {
                  reject(xhr.statusText)
                }
            }
        }
        xhr.responseType = 'json';
        xhr.open('GET',url);
        xhr.send(null);
    });
}

async function fetchName(originUidArr){
    let firstUid,secondUid;
    let results = [];
    let tempResult;
    let uidArr = [...originUidArr];
    while(uidArr.length){
        firstUid = uidArr.pop();
        secondUid = uidArr.pop();
        tempResult = await Promise.all([request(`https://example.com/api/getNickname.json?uid=${firstUid}`),request(`https://example.com/api/getNickname.json?uid=${secondUid}`)]);
        results = results.concat(tempResult);
    }
    return results;
}
let uidArr = [1,3,5,7,4,20,30,8,32,19];
fetchName(uidArr)

// 