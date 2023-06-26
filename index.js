// function charCount(str){
// 	let str1 = str.toLowerCase().replace(/[^0-9A-Z]+/gi,"");

// 	let res = {};
// 	for (let i = 0; i < str1.length; i++) {
// 		let char = str1[i];
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

console.log(charCount("Hello 2022!! ^"));