/**
 * BubbleSort
 * 
 * A sorting algorithm where the largest values bubble up to the top!
 * 
 * BubbleSort Pseudocode
 * 
 * 1. define an array
 * 2. Start looping from the variable called i from the end of
 * array towards the beginning
 * 3. Start an inner loop with a variable called j from the beginning until i -1
 * 
 * 4. If arr[j] is greater than arr[j+1], swap those two values
 * 5. Return the sorted array
 * 
 */

function BubbleSort(arr) {
	for (let i = arr.length; i>0; i--) {
		let noswap = true;
		for (let j = 0; j < i-1; j++) {
			if (arr[j] > arr[j+1]) {
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]];
				noswap = false;
			}
			
		}
		if (noswap) {
			break;
		}
		
	}
	return arr;
}

console.log(BubbleSort([37, 45, 29, 8]))