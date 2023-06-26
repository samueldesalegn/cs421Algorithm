/**
 * DIVIDE AND CONQUER
 * This pattern involves dividing a data set into smaller chunks and then
 * repeating a process with a subset of data.
 * 
 * This pattern can tremendously decrease time complexity
 * 
 * 
 * Example:
 * Given a sorted array of integers, write a function called search, that accepts
 * a value and an array, and returns the index where the value passed to the function
 * is located. If the value is not found, return -1. 
 */

function search(arr, n) {
	let min = 0;
	let max = arr.length - 1;
	while (min <= max) {
		let m = Math.floor((min + max)/2);
		let current = arr[m];
		if (arr[m] < n) {
			min = m + 1;
		} else if (arr[m] > n) {
			max = m - 1;	
		}else {
			return m;
		}
	}
	return -1;
}

console.log(search([1, 2, 4, 6, 7], 4));