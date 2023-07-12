function capitalizeFirst (arr) {
	// let res = [];
  // add whatever parameters you deem necessary - good luck!
	if (arr.length === 0) return null;
	if (arr.length === 1) return [arr[0].charAt(0).toUpperCase() + arr[0].slice(1)];
	
	let res = [arr[0].charAt(0).toUpperCase() + arr[0].slice(1)];
	res.push(...capitalizeFirst(arr.slice(1)));



	
	
return res;
	
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])) // ['Car','Taco','Banana']