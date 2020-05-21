/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    if(!head){
        return null;
    }
    let slow = head;
    let fast = head;
    let i = 1;
    //较正fast顺序
    while(i<k){
        fast = fast.next;
        i++;
    }
    while(fast){
        if(!fast.next){
            break;
        }
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};

const constructLinkListFromArray = require('../lib/constructLinkListFromArray');
const root = constructLinkListFromArray([1, 2, 3, 4, 5, 6]);
console.log(getKthFromEnd(root,2));