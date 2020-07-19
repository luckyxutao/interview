class MinHeap{
    constructor(){
        // 存储元素的数组
        this.pq = []
    }
    swim(){
        let childIndex = this.pq.length-1;
        let parentIndex = this.parent(childIndex);
        let lastEle = this.pq[childIndex];
        while(childIndex>0 && lastEle < this.pq[parentIndex] ){
            this.pq[childIndex] = this.pq[parentIndex];
            childIndex = parentIndex;
            parentIndex = this.parent(childIndex);
        }
        this.pq[childIndex] = lastEle;
    }
    top(){
        return this.pq[0]
    }
    sink(){
        let parentIndex = 0;
        let temp = this.pq[parentIndex];
        let childIndex = 1;
        let size = this.pq.length;
        while (childIndex < size) {
            // 如果有右孩子，且右孩子大于左孩子的值，则定位到右孩子
            if (childIndex + 1 < size && this.pq[childIndex + 1] <=this.pq[childIndex]) {
                childIndex++;
            }
            // 如果父节点大于任何一个孩子的值，直接跳出
            if (temp <= this.pq[childIndex]){
                break;
            }
            //无须真正交换，单向赋值即可
            this.pq[parentIndex] = this.pq[childIndex];
            parentIndex = childIndex;
            childIndex = 2 * childIndex + 1;
        }
        this.pq[parentIndex] = temp;
    }
    pop(){
        let head = this.pq[0];
        this.pq[0] = this.pq[this.pq.length-1];
        this.sink();
        this.pq.pop()
        return head;
    }
    push(e){
        this.pq.push(e);
        this.swim();
    }
    parent(childIndex) {
        return Math.floor((childIndex-1) / 2)
    }
    left(parent) {
        return parent * 2 + 1
    }
    right(parent) {
        return parent * 2 + 2
    }
}

let arr = [5,7,2,6,1,10,4,100,3];
// let iMap = new MinHeap();
// for(let i = 0;i<arr.length;i++){
//     iMap.push(arr[i]);
// }

function getLeastNumbers(arr,k){
    let minHeap = new MinHeap();
    for(let i = 0;i<k;i++){
        minHeap.push(-arr[i]);
    }
    let res = [];
    for(let i=k;i<arr.length;i++){
        let n = arr[i];
        let max = minHeap.top()*-1;
        if(n<max){
            minHeap.pop();
            minHeap.push(-n);
        }
    }
    for(let i=0;i<k;i++){
        res[i] = -minHeap.pop();
    }
    console.log(res)
}
getLeastNumbers(arr,3);
// console.log(iMap.top());
// iMap.pop();
// console.log(iMap);
// iMap.pop();
// console.log(iMap.top());
// iMap.pop();
// console.log(iMap.top());
// iMap.pop();
// console.log(iMap.top());