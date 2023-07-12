/**
 * Sliding window
 * This pattern involves creating a window which can either be
 * an array or number from one position to another.
 * 
 * Depending on a certain condition, the window either increases or closes
 * (and a new window is created)
 * 
 * Very useful for keeping track of a subset of data in an array/string etc.
 * 
 * 
 * Example:
 * Write a function called maxSubarraySum which accepts an array
 * of integers and number n. The function should calculate the maximum sum
 * of n consecutive elements in the array.
 */

function maxSubarraySum(arr, n) {
	if (arr.length < n) return null;
	let max = 0;
	let temp = 0;
	for (let i = 0; i < n; i++) {
		max += arr[i]
		
	}
	temp = max;
	for (let i = n; i < arr.length; i++) {
		temp = temp - arr[i - n] + arr[i];
		max = Math.max(max, temp);
		
	}
	return max;
}

console.log(maxSubarraySum([2, 5, 8, 3, 4, 6], 3));