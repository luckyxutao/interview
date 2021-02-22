/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */


//最小堆，最大的在上边
class PriorityQueue {
    constructor(type){
        this.pq = [];
    }
    top(){
        return this.pq[0];
    }
    left(index){
        return index*2+1;
    }
    right(index){
        return index*2+2;
    }
    parent(index){
        return Math.floor((index-1)/2);
    }
    swim(){
        //最后一个元素 开始上浮
        let childIndex = this.pq.length-1;
        let lastEle = this.pq[childIndex];
        let parentIndex = this.parent(childIndex);
        //一直和新元素比较
        while(childIndex>0 && lastEle>this.pq[parentIndex]){
            this.pq[childIndex] = this.pq[parentIndex];
            childIndex = parentIndex;
            parentIndex = this.parent(childIndex);
        }
        this.pq[childIndex]= lastEle;
    }
    sink(){
        let parentIndex = 0;
        let childIndex = this.left(parentIndex);
        let topEle = this.pq[0];
        let size = this.pq.length;
        while(childIndex<size){
            //如果 有右孩子，且
            if(childIndex+1<size && this.pq[childIndex+1]> this.pq[childIndex]){
                childIndex++;
            }
            if(topEle >this.pq[childIndex]){
                break;
            }
            this.pq[parentIndex] = this.pq[childIndex];
            parentIndex = childIndex;
            childIndex = this.left(parentIndex);
        }
        this.pq[parentIndex] = topEle;
    }
    pop(x){
        let head = this.pq[0];
        this.pq[0] = this.pq[this.pq.length-1];
        this.sink();
        this.pq.pop();
        return head;
    }
    push(x){
        this.pq.push(x);
        this.swim();
    }
}

var getLeastNumbers = function(arr, k) {
    if(!arr||!arr.length){
      return [];
    }
    let maxQueue = new PriorityQueue();
    for(let i = 0;i<k;i++){
      maxQueue.push(arr[i]);
    }
    let res = [];
    for(let i=k;i<arr.length;i++){
        let top = maxQueue.top();
        if(arr[i]<top){
            maxQueue.pop();
            maxQueue.push(arr[i])
        }
    }
    for(let i = 0;i<k;i++){
        res.push(maxQueue.pop())
    }
    console.log(res);
    return res;
  
  };
  getLeastNumbers([0,1,1,2,4,4,1,3,3,2],6)