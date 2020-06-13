class MaxPQ {
    constructor() {
        //当前 Priority Queue 中的元素个数
        this.N = 0;
        // 存储元素的数组
        this.pq = []

    }
    top() {
        return this.pq[1];
    }
    /* 插入元素 e */
    push(num) {
        this.N++;
        this.pq[this.N] = num;
        this.swim(this.N);
    }
    /* 删除并返回当前队列中最大元素 */
    pop() {
        // 最大堆的堆顶就是最大元素
        let max = this.pq[1];
        // 把这个最大元素换到最后，删除之
        this.exch(1, this.N);
        this.pq[this.N] = null;
        this.N--;
        // 让 pq[1] 下沉到正确位置
        this.sink(1);
        return max;
    }
    /* 上浮第 k 个元素，以维护最大堆性质 */
    swim(k) {
        // 如果浮到堆顶，就不能再上浮了
        // while (k > 1 && this.less(this.parent(k), k)) {
        while (k > 1 && this.less(this.parent(k), k)) {
            // 如果第 k 个元素比上层大
            // 将 k 换上去
            this.exch(this.parent(k), k);
            k = this.parent(k);
        }
    }
    parent(k) {
        return Math.floor(k / 2)
    }
    left(k) {
        return k * 2
    }
    right(k) {
        return k * 2 + 1
    }
    less(i, j) {
        return this.pq[i] < this.pq[j];
    }
    /* 交换数组的两个元素 */
    exch(i, j) {
        let temp = this.pq[i];
        this.pq[i] = this.pq[j];
        this.pq[j] = temp;
    }
    /* 下沉第 k 个元素，以维护最大堆性质 */
    sink(k) {
        const { N } = this;
        // 如果沉到堆底，就沉不下去了
        while (this.left(k) <= N) {
            // 先假设左边节点较大
            let older = this.left(k);
            // 如果右边节点存在，比一下大小
            if (this.right(k) <= N && this.less(older, this.right(k))) {
                older = this.right(k);
            }
            // 结点 k 比俩孩子都大，就不必下沉了
            if (this.less(older, k)) {
                break;
            }
            // 否则，不符合最大堆的结构，下沉 k 结点
            this.exch(k, older);
            k = older;
        }
    }

}

function getLeastNumbers(arr, k) {
    let res = [];
    let q = new MaxPQ();
    for (let i = 0; i < k; i++) {
        q.push(arr[i])
    }
    for (let i = k; i < arr.length;i++) {
        // -3    -2
        if (arr[i] < q.top()) {
            q.pop();
            q.push(arr[i])
        }
    }
    for (let i = 0; i < k; i++) {
        res[i] = q.top();
        q.pop();
    }
    return res;
}


// console.log(getLeastNumbers([1, 15, 8, 19, 12, 7, 11, 0], 4));
// console.log([1, 15, 8, 19, 12, 7, 11, 0].sort((a, b) => a - b));

/*
    * 1

*/