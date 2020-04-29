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
var reversePrint = function(head) {
    let queue = [];
    let cur = head;
    while(cur){
        queue.unshift(cur.val);
        cur = cur.next;
    }

    return queue;
};