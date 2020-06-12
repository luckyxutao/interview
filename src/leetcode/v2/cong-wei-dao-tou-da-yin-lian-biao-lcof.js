/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(node) {
    let res = [];
    printHelper(node,res);
    return res;
};

function printHelper(node,res){
    if(!node){
        return
    }
    printHelper(node.next,res);
    res.push(node.val)
}


function ListNode(val) {
    this.val = val;
    this.next = null;
}
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
console.log(reversePrint(head))