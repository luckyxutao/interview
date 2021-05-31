const PriorityQueue = require('../lib/PriorityQueueCmp');//最大堆
function topKFrequent(words, k) {

    let maxQueue = new PriorityQueue((a,b)=>{
      return a>b;
    });
    for(let i =0;i<words.length;i++){
      const w = words[i];
      if(maxQueue.size()<k){
        maxQueue.push(w);
      } else {
        if(maxQueue.top() < w){
          maxQueue.push(w)
          maxQueue.pop();
       }
      }
    }
    const results = [];
    while(maxQueue.size()>0){
      results.unshift(maxQueue.pop())
    }
    return results;
};

    // let maxQueue = new PriorityQueue((a,b)=>{
    //   return a<b;
    // });
    // [4,2,115,1,3,15].forEach(v=>{
    //   maxQueue.push(v);
    // });
    // // maxQueue.pop()
    // maxQueue.pop()
    // // maxQueue.pop()
    // console.log(maxQueue)
  const   words =[1,10,2,19,180,32,8], k = 3;

console.log(topKFrequent(words,k));