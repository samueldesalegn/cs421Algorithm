// function charCount(str){
// 	let str1 = str.toLowerCase().replace(/[^0-9A-Z]+/gi,"");

// 	let res = {};
// 	for (let val = 0; val < str1.length; val++) {
// 		let char = str1[val];
// 		if (res[char]) {
// 			res[char]++;
// 		}else {
// 			res[char] =1
// 	  }
// 	}

// 	return res;
	
// }

// console.log(charCount("Hello 2022!! ^"));



// function charCount(str){
// 	let str1 = str.toLowerCase().replace(/[^0-9A-Z]+/gi,"");

// 	let res = {};
// 	for (let char of str1) {
// 		(res[char])? res[char]++:res[char]=1  
// 	}

// 	return res;
	
// }

// console.log(charCount("Hello 2022!! ^"));



function charCount(str){
	let str1 = str.toLowerCase().replace(/[^0-9A-Z]+/gi,"");

	let res = {};
	for (let char of str1) {
		res[char] = ++res[char] || 1;
	}

	return res;
	
}

// console.log(charCount("Hello 2022!! ^"));


function findMax(arr){
	let max = arr[0];
	if (arr.length === 1) return arr[0];
	if (max < findMax(arr.slice(1)) ) {
		max = findMax(arr.slice(1))
	}
	return max;
		
	
}

// console.log(findMax([20, 3, 40, 8]));


// function sum(n) {
// 	if(n<0) throw InvalidInputException;
// 	return helper(n, 0)
// }

// function helper(n, s) {
// 	if (n === 0) return s;
// 	return helper(n-1, n+s)
		
// }

// console.log(sum(5));


function prefixAverages(arr) {
	let arr1 = [];
	for (let val = 0; val < arr.length; val++) {
		let s = arr[0];
		for (let j = 1; j <= val; j++) {
			s += arr[j];
			
		}
		arr1.push(s/(val+1))
		// console.log(arr1);
		
	}

	return arr1;
}

function prefixAverages2(arr) {
	let arr1 = [];
	let s = 0;
	for (let val = 0; val < arr.length; val++) {
		
		s += arr[val];
			
		
	  arr1.push(s/(val+1))
		// console.log(arr1);
		
	}

	return arr1;
}



// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log("average: ", prefixAverages(arr));
// console.log(prefixAverages2(arr));


// function isEven(n) {
// return (n%2 === 0);
	

// }

// console.log(isEven(5));


// function isEven(n) {
// 	if (n === 0) return true
// 	else
// 	return isOdd(n-1)

// }
// function isOdd(n){
// 	if (n === 0) return false
// 	else
// 	return isEven(n-1)

// }



function sum(n){
	if (n === 0) return 0;
	let sum1 = 0;
	let sum2 = 0;
 if (n>= n/2) {
	 sum2 = helper(n, 0);
 }else {

	sum1 = helper((Math.floor(n/2)), 0);
 }

 return sum1 +sum2;
	
}

function helper(n, s) {
 if (n === 0) return s;
 return helper(n-1, n+s);
}

// console.log(sum(5))

// console.log(helper(5, 2))


function sumFirst(n){
	if (n === 0) return 0;
	let sum1 = 0;
	let sum2 = 0;
 if (n>= n/2) {
	 sum2 = n + sumFirst(n-1);
 }else {

	sum1 = Math.floor(n/2) + sumFirst((Math.floor(n/2))-1);
 }

 return sum1 +sum2;
	
}

// unction helper(n, s) {
//  if (n === 0) return s;
//  return helper(n-1, n+s);
// }


// console.log(sumFirst(4))


// function pow(a, k){
// 	if (k === 0 ) return 1;
// 	return a*pow(a, k-1)
// }

// console.log(pow(2, 3));

function pow(a, k){
	if (k === 0 ) return 1;
	let h = pow(a, Math.floor(k/2));
	if (k%2 === 0) {
		return h*h;
	}else {
		return a*h*h;
	}
}

// // console.log("power: ", pow(2, 3));

// let arr1 = [1, 4, 5, 6, 8, 10, 12];
// let arr2 = [1, 2, 3, 5, 7, 8, 9, 12];

// let arr3 = [...new Set([...arr1 ,...arr2])]
// console.log(arr3)



function intersectM(arr, arr1) {
	let arrN = [];

	for (const val of arr) {
		if (arr1.includes(val)) {
			arrN.push(val)
		}
	}
	return arrN;
}

// console.log(intersectM(arr, arr1));

/**
 * 
 * Algorithm intersectSets(set1, set2)
 * 	Input two sets
 * 	Output elements that exist in both sets
 * 
 * 	newSet 
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */

function intersectSets(set1, set2) {
	const newSet = new Set();
	for (let val of set2) {
			if (set1.has(val)) {
					newSet.add(val);
			}
	}
	return newSet;
}

// find the algorithm of this function using list sequence


const set1 = new Set([1, 2, 3, 8, 11]);
const set2 = new Set([1, 2, 5, 8]);



const res = intersectSets(set1, set2);
// console.log(res);

// function merge(arr1, arr2){
// 	let results = [];
// 	// let i = 0;
// 	// let j = 0;
// 	while(arr1.length >0 && arr2.length > 0){
// 			if(arr2[0] > arr1[0]){
// 					results.push(arr2.pop());
					
// 			} else {
// 					results.push(arr1.pop())
// 				}
// 	}
	// while(arr1.length>0) {
	// 		results.push(arr1.pop())
	// }
	// while(arr2.length>0) {
	// 		results.push(arr2.pop())
			
	// }
	// return results;
// }

// console.log(merge(arr, arr1));




function findMissingNumbers(arr1, arr2) {
  // let set3 = new Set();
	let set = new Set([...arr1, ...arr2])
	let missingElems = []
 

  // for (let i = 0; i < arr3.length; i++) {
  //   set.add(arr3[i]);
  // }
 
  for (let i = 1; i <= set.size; i++) {
   
    if (!set.has(i)) {
      missingElems.push(i);
    }
  }
 
  //return the missing elements array 
  return missingElems;
	// return set3;
	// return arr3[0];
}
 
// let arr5 = [1, 2, 4, 6, 10, 12];
// let arr6 = [1, 7, 8, 12, 15, 13];
let A = [1, 2, 4, 6, 7, 10];
let B = [1, 7, 8, 11, 12, 15];

console.log(findMissingNumbers(A, B))
 
// let missingNumber = findMissingNumber(arr, n);
// console.log("Missing number is: " + missingNumber);