class MinHeap{
    constructor(){
        this.arr = [];
    }
    swim(){
        let childIndex = this.arr.length-1;
        let lastEle = this.arr[childIndex];
        let parentIndex = this.parent(childIndex);
        while(childIndex>0 && lastEle < this.arr[parentIndex]){
            this.arr[childIndex] = this.arr[parentIndex];
            childIndex = parentIndex;
            parentIndex = this.parent(childIndex);
        }
        this.arr[childIndex] = lastEle;
    }
    parent(index){
        return Math.floor((index-1)/2);
    }
    sink(){

    }
    pop(){

    }
    push(x){
        this.arr.push(x);
        this.swim();
    }
    top(){

    }
}

let arr = [5,7,2,6,1,10,4,100,3];
let iMap = new MinHeap();
for(let i = 0;i<arr.length;i++){
    iMap.push(arr[i]);
}
