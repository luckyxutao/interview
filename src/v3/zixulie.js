var hasCycle = function(head) {
    if(!head){
        return false;
    }
    let slow = head;
    let fast = head;
    while(slow && fast && fast.next){
        if(slow === fast){
            return true;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return false;
};

function ListNode(val) {
        this.val = val;
        this.next = null;
    }
let head = new ListNode(1);
head.next = new ListNode(2);
hasCycle(head)