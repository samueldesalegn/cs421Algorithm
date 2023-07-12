/*eslint-disable*/

// Javascript implementation of ShellSort

/* An utility function to print array of size n*/
function printArray(arr) {
    console.log(arr)
}

/* function to sort arr using shellSort */
let shellSort = function (arr) {

    for (let gap = Math.floor((arr.length - 1) / 2); gap > 0; gap = Math.floor((gap - 1) / 2)) {
        console.log("gap passed", gap)
        segmentInsertionSort1(arr, gap)
    }

}

let segmentInsertionSort1 = function (arr, gap) {
    console.log("jumped to", arr, gap)


    // Start with a big gap, then reduce the gap


    // Do a gapped insertion sort for this gap size.
    // The first gap elements a[0..gap-1] are already
    // in gapped order keep adding one more element
    // until the entire array is gap sorted
    for (let i = gap; i < arr.length; i += 1) {

        // add a[i] to the elements that have been gap
        // sorted save a[i] in temp and make a hole at
        // position i
        let temp = arr[i];

        // shift earlier gap-sorted elements up until
        // the correct location for a[i] is found
        let j;
        for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
            arr[j] = arr[j - gap];

        // put temp (the original a[i]) in its correct
        // location
        arr[j] = temp;
    }
    return arr;
}

// Driver method
let arr = [12, 34, 54, 2, 3];
console.log("Array before sorting<br>");
printArray(arr);

arr = shellSort(arr);
console.log("Array after sorting<br>");
printArray(arr);

// This code is contributed by unknown2108
