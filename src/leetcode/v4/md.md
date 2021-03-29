* 核心思路：以任意一节点为根求取过程中的最大值  
* leftVal/rightVal最小为0， sum = leftVal + node.val + right.val,和全局变量比较
* 将当前节点的最大路径返到上层 root.val + Math.max(leftVal,rightVal)