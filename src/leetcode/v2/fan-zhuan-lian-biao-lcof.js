/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head) {
        return null;
    }
    let prev = null;
    let cur = head;
    let oldNext;
    while (cur) {
        oldNext = cur.next;
        cur.next = prev;
        prev = cur;//前一个
        cur = oldNext;
    }
    return prev
};

const constructLinkListFromArray = require('../lib/constructLinkListFromArray');
const root = constructLinkListFromArray([1, 2, 3, 4, 5, 6]);
console.log(reverseList(root));