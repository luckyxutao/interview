/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    var lenA = 0;
    var lenB = 0;
    var p = headA;
    var q = headB;
    while (p) {
        lenA++;
        p = p.next;
    }
    while (q) {
        lenB++;
        q = q.next;
    }

    var hdBig, hdSmall;

    if (lenA > lenB) {
        hdBig = headA;
        hdSmall = headB;
    } else if (lenA < lenB) {
        hdBig = headB;
        hdSmall = headA;
    } else {
        hdBig = headA;
        hdSmall = headB;
    }

    var diffStart = Math.abs(lenA - lenB);
    var k = 0;
    while (k < diffStart) {
        hdBig = hdBig.next;
        k++;
    }


    while (hdBig) {
        if (hdBig.val === hdSmall.val) {
            return hdBig;
        }
        hdBig = hdBig.next;
        hdSmall = hdSmall.next
    }
    return null;




};

var constructLinkedList = require('../lib/constructLinkListFromArray');
// 1->2->3->4->5->6
var gg1 = constructLinkedList([4, 1, 8, 4, 5]);
var gg2 = constructLinkedList([5, 0, 1, 8, 4, 5]);
console.log(getIntersectionNode(gg1, gg2));
