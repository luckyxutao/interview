
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else if (l1.val > l2.val) {
        l2.next = mergeTwoLists(l2.next, l1);
        return l2;
    }
};

var constructLinkedList = require('../lib/constructLinkListFromArray');
// 1->2->3->4->5->6
var gg1 = constructLinkedList([1, 2, 4]);
var gg2 = constructLinkedList([1, 3, 4]);
console.log(mergeTwoLists(gg1, gg2));
