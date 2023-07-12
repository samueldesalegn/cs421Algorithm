class Node{
	constructor(val){
			this.val = val;
			this.next = null;
	}
}

class SinglyLinkedList{
	constructor(){
			this.head = null;
			this.tail = null;
			this.length = 0;
	}
	push(val){
			let newNode = new Node(val);
			if(!this.head){
					this.head = newNode;
					this.tail = this.head;
			} else {
					this.tail.next = newNode;
					this.tail = newNode;
			}
			this.length++;
			return this;
	}
	pop(){
			if(!this.head) return undefined;
			let current = this.head;
			let newTail = current;
			while(current.next){
					newTail = current;
					current = current.next;
			}
			this.tail = newTail;
			this.tail.next = null;
			this.length--;
			if(this.length === 0){
					this.head = null;
					this.tail = null;
			}
			return current;
	}
	shift(){
			if(!this.head) return undefined;
			let currentHead = this.head;
			this.head = currentHead.next;
			this.length--;
			if(this.length === 0){
					this.tail = null;
			}
			return this;
	}
	unshift(val){
		if(!this.head) {
				let newNode = new Node(val);
					this.head = newNode;
					this.tail = this.head;
			}
			newNode.next = this.head;
			this.head = newNode;
			this.length++;
			return this;
	}
	get(index){
			if(index < 0 || index >= this.length) return null;
			let counter = 0;
			let current = this.head;
			while(counter !== index){
					current = current.next;
					counter++;
			}
			return current;
	}
	set(index, val){
			let foundNode = this.get(index);
			if(foundNode){
					foundNode.val = val;
					return true;
			}
			return false;
	}
	insert(index, val){
			if(index < 0 || index > this.length) return false;
			if(index === this.length) return !!this.push(val);
			if(index === 0) return !!this.unshift(val);
			
			let newNode = new Node(val);
			let prev = this.get(index - 1);
			let temp = prev.next;
			prev.next = newNode;
			newNode.next = temp;
			this.length++;
			return true;
	}
	remove(index){
			if(index < 0 || index >= this.length) return undefined;
			if(index === 0) return this.shift();
			if(index === this.length - 1) return this.pop();
			let previousNode = this.get(index - 1);
			let removed = previousNode.next;
			previousNode.next = removed.next;
			this.length--;
			return removed;
	}
	reverse(){
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let next;
		let prev = null;
		for(let i = 0; i < this.length; i++){
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}
	print(){
			let arr = [];
			let current = this.head
			while(current){
					arr.push(current.val)
					current = current.next
			}
			console.log(arr);
	}
}

let list = new SinglyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999)

function findMax(list){

}

function sum(list){
	let value = 0;
	if (list.length === 0) return 0;
	else if (list.head === 1) {
	value = list.head.val;
	return value;

	} 
	list.shift()
	return value + sum(list);
}

function sumOfNodes(list) {
	// if head = null
	if (list.length == null)
			return;
	let sum = list.head.val;

	// recursively traverse the remaining nodes
	

	// accumulate sum
	return sum += sumOfNodes(list.head.next);
}

console.log(sumOfNodes(list))
// console.log(list.head.val);









