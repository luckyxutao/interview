## 二叉树
* 树的遍历
DFS是利用stack，BFS利用的是queue
### 145. 二叉树的后序遍历
* [题解](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/solution/145-er-cha-shu-de-hou-xu-bian-li-by-luckyxutao/)
* 思路
    1. 目标: 左-右-中
    2. reverse(前序遍历(先右)) = 左-右-中
* 实现
```javascript
    //         10
    //     9        20
    //  5    35   15    24
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 1. 左->右->后
 * 2. 前序遍历-先右
 *  10 20 24 15 9 35 5 //
 * 5 35 9 15 24 20 10 //后序遍历
 */
var postorderTraversal = function(root) {
    let res = [];
    if(!root){
        return res;
    }
    /*
        1. 目标: 左-右-中
        2. reverse(前序遍历(先右)) = 左-右-中
    */
   let cur;
   // dfs都是栈，bfs是队列
   let stack = [root];
    while(stack.length){
        cur = stack.pop();
        //倒序
        res.unshift(cur.val);
        //先放左后放右，出栈是先右，跟前序相返
        cur.left && stack.push(cur.left);
        cur.right && stack.push(cur.right);
    }
    return res;
};
```
### 144. 二叉树的前序遍历
* [解析](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/solution/144-er-cha-shu-de-qian-xu-bian-li-by-luckyxutao/)
* 思路
    1. 利用了栈的特性，将左、右节点一直入栈，先push右后push左
* 实现
```javascript
var preorderTraversal = function(root) {
    let res = [];
    if(!root){
        return res;
    }
    let stack = [root];
    let cur;
    while(stack.length){
        cur = stack.pop();
        res.push(cur.val);
        cur.right && stack.push(cur.right);
        cur.left && stack.push(cur.left);
    }
    return res;
};
```
### 94. 二叉树的中序遍历
* [解析](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/zhong-xu-bian-li-di-gui-die-dai-by-luckyxutao/)
* 思路
    1. 利用栈，每个节点先将该左孩子都推入栈
    2. 从左叶子节点开始出栈
* 实现
```javascript
var inorderTraversal = function(root) {
    //         10
    //     9        20
    //  5    35   15    24
    let res = [];
    if(!root){
        return res;
    }
    let stack = [];
    let cur = root;
    while(stack.length || cur){
        //一直将left推入stack,DFS
        while(cur){
            stack.push(cur);
            cur = cur.left;
        }
        //queue = [10,9,5]
        //cur为null,将叶子节点推出
        cur = stack.pop();
        res.push(cur.val);
        cur = cur.right;
    }
    return res;
};
```