
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
var getKthFromEnd1 = function (head, k) {
    var len = 0;
    var temp = head;
    while (temp) {
        len++;
        temp = temp.next;
    }
    var i = 0;
    var kThNode = head;
    while (i !== len - k) {
        kThNode = kThNode.next;
        i++;
    }
    return kThNode
};

var getKthFromEnd = function (head, k) {
    var p = null;
    var count = 0;
    var temp = head;
    while(count<k){
        p = temp;
        temp = temp.next;
        count++;
    }
    var q = head;
    while(p.next){
        q = q.next;
        p = p.next;
    }
    return q;
};
var constructLinkedList = require('../lib/constructLinkListFromArray');
// 1->2->3->4->5->6
var gg = constructLinkedList([1, 2, 3, 4, 5, 6]);
getKthFromEnd(gg, 3);