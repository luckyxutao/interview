function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

//根节点-->10
let treeNode1 = new TreeNode(10);

//左孩子-->9
let treeNode2 = new TreeNode(9);

//右孩子-->20
let treeNode3 = new TreeNode(20);

//20的左孩子-->15
let treeNode4 = new TreeNode(15);

//20的右孩子-->35
let treeNode5 = new TreeNode(24)


//根节点的左右孩子
treeNode1.left = treeNode2;
treeNode1.right = treeNode3;
treeNode2.right = new TreeNode(35)
//20节点的左右孩子
treeNode3.left = treeNode4
treeNode3.right = treeNode5;


var ro = new TreeNode(1);
var leftNode2 = new TreeNode(2);
leftNode2.left = new TreeNode(3);
leftNode2.right = new TreeNode(4);
var rightNode2 = new TreeNode(2);
rightNode2.left = new TreeNode(4);
rightNode2.right = new TreeNode(3);
ro.left = leftNode2;
ro.right = rightNode2;

module.exports = {
    TreeNode,
    root: treeNode1,
    duiChenTree : ro
};

//       10
//    9        20
//      35   15    24