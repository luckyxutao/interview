const ListNode = require('./ListNode');

module.exports = function (arr) {
    var head = null, pre;
    for (let i = 0; i < arr.length; i++) {
        var newNode = new ListNode(arr[i]);
        if (head === null) {
            head = newNode;
        } else {
            pre.next = newNode
        }
        pre = newNode;
    }
    return head;
}