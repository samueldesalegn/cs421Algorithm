function countDown(n) {
	if (n<= 0) return;
	console.log(n);
	countDown(n-1);
}

// countDown(5);

// function collectOddValues(arr){
// 	let res =[];
// 	function helper(input){
// 		if (input.length === 0) {
// 			return;
// 		}
// 		if (input[0]%2 !== 0) {
// 			res.push(input[0]);
// 		}
// 		helper(input.slice(1));
// 	}
// 	helper(arr);
// 	return res;
// }


function collectOddValues(arr){
	let res =[];
	if (arr.length === 0) {
		return res;
	}
	if (arr[0]%2 !== 0) {
		res.push(arr[0]);
	}
	res = res.concat(collectOddValues(arr.slice(1)));
	return res;
}

// let res = collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(res);


function pow(n, i) {
	if (i === 0) return 1;

	return n*pow(n, (i-1))
}

console.log(pow(4, 2));