class PriorityQueue {
    constructor(){
        this.pq = [];
    }
    top(){
        return this.pq[0];
    }
    left(index){
        return 2*index+1;
    }
    right(index){
        return 2*index+2;
    }
    parent(index){
        return Math.floor((index-1)/2);
    }
    swim(){
        let childIndex = this.pq.length-1;
        let parentIndex = this.parent(childIndex);
        let lastEle = this.pq[childIndex];
        while(childIndex>0 && lastEle < this.pq[parentIndex]){
            this.pq[childIndex]  = this.pq[parentIndex];
            childIndex = parentIndex;
            parentIndex = this.parent(childIndex);
        }
        this.pq[childIndex] = lastEle;
    }
    sink(){
        let parentIndex = 0;
        let childIndex = this.left(parentIndex);
        let size = this.pq.length;
        let topEle = this.pq[parentIndex];
        while(childIndex<size){
            //如果有右孩子,并且右孩子小于左孩子
            if(childIndex+1<size && this.pq[childIndex+1]<=this.pq[childIndex] ){
                childIndex++;
            }
            //如果当前元素比最小的孩子 还小，则不需要再下沉
            if(topEle<=this.pq[childIndex]){
                break;
            }
            this.pq[parentIndex] = this.pq[childIndex];
            parentIndex = childIndex;
            childIndex = this.left(parentIndex);
        }
        this.pq[parentIndex] = topEle;
    }
    pop(){
        let head = this.pq[0];
        this.pq[0]=this.pq[this.pq.length-1];
        this.sink();
        this.pq.pop();
        return head;
    }
    push(x){
        this.pq.push(x);
        return this.swim();
    }
}
let arr = [5,7,2,6,1,10,4,100,3];
let iMap = new PriorityQueue();
for(let i = 0;i<arr.length;i++){
    iMap.push(arr[i]);
}
console.log(iMap);
// class MinHeap{
//     constructor(){
//         // 存储元素的数组
//         this.pq = []
//     }
//     swim(){
//         let childIndex = this.pq.length-1;
//         let parentIndex = this.parent(childIndex);
//         let lastEle = this.pq[childIndex];
//         while(childIndex>0 && lastEle < this.pq[parentIndex] ){
//             this.pq[childIndex] = this.pq[parentIndex];
//             childIndex = parentIndex;
//             parentIndex = this.parent(childIndex);
//         }
//         this.pq[childIndex] = lastEle;
//     }
//     top(){
//         return this.pq[0]
//     }
//     sink(){
//         let parentIndex = 0;
//         let temp = this.pq[parentIndex];
//         let childIndex = 1;
//         let size = this.pq.length;
//         while (childIndex < size) {
//             // 如果有右孩子，且右孩子大于左孩子的值，则定位到右孩子
//             if (childIndex + 1 < size && this.pq[childIndex + 1] <=this.pq[childIndex]) {
//                 childIndex++;
//             }
//             // 如果父节点大于任何一个孩子的值，直接跳出
//             if (temp <= this.pq[childIndex]){
//                 break;
//             }
//             //无须真正交换，单向赋值即可
//             this.pq[parentIndex] = this.pq[childIndex];
//             parentIndex = childIndex;
//             childIndex = 2 * childIndex + 1;
//         }
//         this.pq[parentIndex] = temp;
//     }
//     pop(){
//         let head = this.pq[0];
//         this.pq[0] = this.pq[this.pq.length-1];
//         this.sink();
//         this.pq.pop()
//         return head;
//     }
// }