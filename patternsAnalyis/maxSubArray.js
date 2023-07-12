if (arr.length === 0) return 0;
	let max = 0;
	let sum = 0;
	
	let count = 0;
	let indx = 0;

	
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]> max) {
			max = arr[i]
			indx = i;
		}
		sum += arr[i];

	}
	if (sum<n) return 0;
		
	
	if (max >= n) {
		count = 1;
	} else {
		let sum1 = arr[indx] +arr[indx+1]  
		let sum2 = max + arr[indx-1];
		if (sum1 >= n || sum2>=n) {
			count = 2;
			
		} else {
			for (let j = indx; j>0; j--) {
				sum += arr[j];
			count++;
		}
	}
	// if (arr.length === 0) return 0;
	// let sum = 0;
	// let max = 0;
	// let temp = 0;
	// let i = 0;
	// let min = 0;
	// let count = 0;
	// for (let i = 0; i < arr.length; i++) {
	// 	sum += arr[i]	
	// 	if (max<arr[i]) {
	// 		max = arr[i]
	// 	}
	// }
	// if (sum < n) return 0;
	// if (max >= n) return 1;

	// while (min < n) {
	// 	min += arr[i];
	// 	i++;
	// }
		
	
	// temp = min;
	// for (let j = i; j<arr.length; j++) {
	// 	temp = temp - arr[j - i] + arr[j];
	// 	min = Math.min(min, temp);
	// 	count++
		
	// }
	// return (count>i)? i : count;
	}
	