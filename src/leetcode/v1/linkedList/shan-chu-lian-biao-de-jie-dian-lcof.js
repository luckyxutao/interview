/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    var current = head,prev;
    while(current){
        if(current.val === val){
            if(prev){
                prev.next = current.next;
                break;
            } else if(!prev){
                return current.next;
            }
        }
        prev = current;
        current = current.next;
    }
    return head;
};

var constructLinkedList = require('../lib/constructLinkListFromArray');
// 1->2->3->4->5->6
var gg = constructLinkedList([1,2,3,4,5,6]);
deleteNode(gg,1);