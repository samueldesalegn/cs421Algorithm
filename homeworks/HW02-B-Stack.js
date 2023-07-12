const List = require('./DLinkedList.js');

class Stack {
    constructor() {
        this._stack = new List.DLinkedList();
    }
    push(elem) {
 
    }
    pop() {

    }
    isEmpty() {

    }
    size() {

    }
    elements() {
        return this._stack.elements();
    }
    toString() {
        return this._stack.toString();
    }
}

let St = new Stack();
St.push("a");
St.push("b");
St.push("c");
St.push("d");
console.log(St.toString());
console.log("pop=" + St.pop());
St.push("e");
St.push("f");
St.push("g");
console.log("push e, f, and g");
console.log("pop=" + St.pop());
console.log("pop=" + St.pop());
console.log("pop=" + St.pop());
console.log("pop=" + St.pop());
St.push("h");
St.push("i");
St.push("j");
console.log("push h, i, and j");
console.log("pop=" + St.pop());
console.log("pop=" + St.pop());
console.log("pop=" + St.pop());
console.log(St.toString());
