/**
 * Anagrams
 * 
 * Given two strings, write a function to determine if the second string
 * is an anagram of the first. An anagram is a word, phrase, or name formed
 * by rearranging the letters of another, such as cinema, formed from iceman
 */

// function validAnagram(str, str2){
// 	if (str.length !== str2.length) return false;

// 	let frequencyCounter1 = {};
// 	let frequencyCounter2 = {};

// 	for (const val of str) {
// 		frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1;
// 	}

// 	for (const val of str2) {
// 		frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1;
// 	}

// 	// console.log(frequencyCounter1, frequencyCounter2)
// 	for (const key in frequencyCounter1) {
// 		if (!(key in frequencyCounter2)) return false;
// 		if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
			
		
// 	}
// 	return true;
// }


function validAnagram(str, str2){
	if (str.length !== str2.length) return false;

	let lookup = {};

	for (const val of str) {
		lookup[val] = (lookup[val] || 0) +1;
	}

	
	for (const val of str2) {
		if (!lookup[val]) {
			return false;
		}else {
			lookup[val] -= 1;
		}
		
	}
	return true;
}

console.log(validAnagram('anagram', 'nagaram'));