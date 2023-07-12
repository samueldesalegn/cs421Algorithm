const List = require('./DLinkedList.js');

class Queue {
    constructor() {
 
    }
    enqueue(elem) {
 
    }
    dequeue() {
 
    }
    isEmpty() {
 
    }
    size() {
 
    }
    elements() {

    }
    toString() {

    }
}

let Q = new Queue();
Q.enqueue("a");
Q.enqueue("b");
Q.enqueue("c");
Q.enqueue("d");
console.log(Q.toString());
console.log("Dequeue=" + Q.dequeue());
Q.enqueue("e");
Q.enqueue("f");
Q.enqueue("g");
console.log("Enqueue e, f, and g");
console.log("Dequeue=" + Q.dequeue());
console.log("Dequeue=" + Q.dequeue());
console.log("Dequeue=" + Q.dequeue());
console.log("Dequeue=" + Q.dequeue());
Q.enqueue("h");
Q.enqueue("i");
Q.enqueue("j");
console.log("Enqueue h, i, and j");
console.log("Dequeue=" + Q.dequeue());
console.log("Dequeue=" + Q.dequeue());
console.log("Dequeue=" + Q.dequeue());
console.log(Q.toString());
