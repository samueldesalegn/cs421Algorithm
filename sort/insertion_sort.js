function insertionSort(arr){
	let currentVal;
    for(let i = 1; i < arr.length; i++){
        currentVal = arr[i];
        let j = i;
        while (0 < j  && (arr[j-1] > currentVal)) {
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4]));

for (let j = i; j >0; j--) {
    const element = array[j];
    
}