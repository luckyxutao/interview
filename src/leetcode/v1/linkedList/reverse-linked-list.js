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
    var cur = head;
    var temp;
    var prev = null;
    while (cur) {
        temp = cur.next;//3
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    return prev;
};

var constructLinkedList = require('../lib/constructLinkListFromArray');
// 1->2->3->4->5->6
var gg = constructLinkedList([1, 2, 3, 4, 5, 6]);
reverseList(gg);