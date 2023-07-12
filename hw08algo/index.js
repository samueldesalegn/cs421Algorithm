// function sum(arr) {
// 	if (arr.length === 0) return 0;
// 	return arr[0] + sum(arr.slice(1))
// }

// let arr = [2, 4, 6, 8];

//or 

function sum(arr) {
	if (arr.length === 0) return 0;
	return arr[arr.length -1] + sum(arr.slice(0,-1))
}

let arr = [2, 4, 6, 8];

console.log(sum(arr))