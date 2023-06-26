/**
 * Frequency counters
 * 
 * Example:
 * Write a function called same, which accepts two arrays. 
 * The function should return true if every value in the array has 
 * its corresponding value squared in the second array. The frequency value must be the same.
 */

function same(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	for (const val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1;
	}

	for (const val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1;
	}

	// console.log(frequencyCounter1, frequencyCounter2)
	for (const key in frequencyCounter1) {
		if (!(key**2 in frequencyCounter2)) return false;
		if (frequencyCounter2[key**2] !== frequencyCounter1[key]) return false;
			
		
	}
	return true;

		
	
}

let arr1 = [1, 2, 3];
let arr2 = [1, 4, 9];
console.log(same(arr1, arr2));
