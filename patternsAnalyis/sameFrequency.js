/**
 * Write a function called sameFrequency. Given two positive integers, 
 * find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
 */

function sameFrequency(m,n) {
	let counter1 = {};
	let counter2 = {};
	let i = m.toString().length;
	
	let j = n.toString().length;
	
	while (i>0) {
		counter1[m%10] = (counter1[m%10] || 0) + 1;
		m = Math.floor(m/10);
		i--;
	}
	while (j>0) {
		counter2[n%10] = (counter2[n%10] || 0) + 1;
		n = Math.floor(n/10);
		j--;
	}

	for (const key in counter1) {
			if (!(key in counter2)) return false;
			if (counter1[key] !== counter2[key]) return false;

		}
		return true;
}

// sameFrequency(3589578, 5879385);
console.log(sameFrequency(3589578, 5879385));




