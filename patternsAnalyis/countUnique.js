/**
 * countUniqueValues
 * Implement a function called countUniqueValues, which accpets a sorted array,
 * and counts the unique values in the array. There can be negative numbers in the array,
 * but it will always be sorted.
 * countUniqueValues([1,1,1,1,1,1,2]) //2
 * 
 */

function countUniqueValues(arr){
	if (arr.length === 0) return 0;
	let count = 0;
	
	for (let i = 0; i < arr.length; i++) {
		let j;
	  j = i +1;
		if (arr[i] !== arr[j]) {
			count++
		}
		
	}
	return count;
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));