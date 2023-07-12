class Node {
	constructor(value){
			this.value = value;
			this.left = null;
			this.right = null;
	}
}

class BinarySearchTree {
	constructor(){
			this.root = null;
	}
	insert(value){
			var newNode = new Node(value);
			if(this.root === null){
					this.root = newNode;
					return this;
			}
			var current = this.root;
			while(true){
					if(value === current.value) return undefined;
					if(value < current.value){
							if(current.left === null){
									current.left = newNode;
									return this;
							}
							current = current.left;
					} else {
							if(current.right === null){
									current.right = newNode;
									return this;
							} 
							current = current.right;
					}
			}
	}
	find(value){
			if(this.root === null) return false;
			var current = this.root,
					found = false;
			while(current && !found){
					if(value < current.value){
							current = current.left;
					} else if(value > current.value){
							current = current.right;
					} else {
							found = true;
					}
			}
			if(!found) return undefined;
			return current;
	}
	contains(value){
			if(this.root === null) return false;
			var current = this.root,
					found = false;
			while(current && !found){
					if(value < current.value){
							current = current.left;
					} else if(value > current.value){
							current = current.right;
					} else {
							return true;
					}
			}
			return false;
	}
	BFS(){
			var node = this.root,
					data = [],
					queue = [];
			queue.push(node);

			while(queue.length){
				 node = queue.shift();
				 data.push(node.value);
				 if(node.left) queue.push(node.left);
				 if(node.right) queue.push(node.right);
			}
			return data;
	}
	DFSPreOrder(){
			var data = [];
			function traverse(node){
					data.push(node.value);
					if(node.left) traverse(node.left);
					if(node.right) traverse(node.right);
			}
			traverse(this.root);
			return data;
	}
	DFSPostOrder(){
			var data = [];
			function traverse(node){
					if(node.left) traverse(node.left);
					if(node.right) traverse(node.right);
					data.push(node.value);
			}
			traverse(this.root);
			return data;
	}
	DFSInOrder(){
			var data = [];
			function traverse(node){
					if(node.left) traverse(node.left);
					data.push(node.value);
					if(node.right) traverse(node.right);
			}
			traverse(this.root);
			return data;
	}

	DFSheight(){
		let count = 0;
		let hl =0, hr = 0;
		function traverse(node){
				if(node.left) {
					traverse(node.left);
					hl++;
				}
				if(node.right) {
					traverse(node.right);
					hr++;
				}
				count = (hl>=hr)? hl : hr;
					
				
		}
		traverse(this.root);
		return count - 1;
}

DFSPostOrderSum(){
	let sum = this.root.value;
	function traverse(node){
		if(node.left) traverse(node.left);
		if(node.right) traverse(node.right);
		sum += node.value;
	}
	traverse(this.root);
	return sum;
}

DFSPostOrderSumL(){
	let sum = 0;
	function traverse(node){
		if(node.left) traverse(node.left);
		if(node.right) traverse(node.right.left);
		sum += node.value;
	}
	traverse(this.root);
	return sum - this.root.value;
}

}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.insert(7);
tree.DFSPreOrder();
console.log(tree.DFSPostOrder());
tree.DFSInOrder();
// console.log(tree.DFSheight());

console.log(tree.DFSPostOrderSumL());
console.log(tree);

let sum = 0;
for (const elem of tree.DFSPostOrder()) {
	sum += elem;
}
console.log(sum);
