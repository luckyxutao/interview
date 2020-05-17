/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
function Node(val,next,random) {
       this.val = val;
       this.next = next;
       this.random = random;
    };
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head){
        return null;
    }
    var p = head;
    var newNode;
    // map可以将对象作为key
    var visited = new Map();
    while(p){
        newNode = getCloneNode(p,visited);
        if(p.random){
            newNode.random = getCloneNode(p.random,visited);
        }
        if(p.next){
            newNode.next = getCloneNode(p.next,visited);
        }
        p = p.next;//迭代旧列表
    }
    return visited.get(head);//返回头部元素
};

function getCloneNode(node,visited){
    if(!node){
        return null;
    }
    if(visited.has(node)){
        return visited.get(node);
    }

    visited.set(node,new Node(node.val,null,null));
    return visited.get(node);
}



var A7 = new Node(7,null,null);
var A13 = new Node(13,null,null);
var A11 = new Node(11,null,null);
var A10 = new Node(10,null,null);
var A1 = new Node(1,null,null);
A7.next = A13;
A7.random = null;

A13.next = A11;
A13.random = A7;

A11.next = A10;
A11.random = A1;
A10.next = A1;
A10.random = A11;
A1.next = null;
A1.random = A7;


const res = copyRandomList(A7);
debugger