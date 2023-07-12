/*eslint-disable*/

let test = [1, 2, 3, 4]

//console.log(subset.filter(ele => ele != null))



let setOfSubsets = function (arr) {
    const N = arr.length;
    let subset = [];
    for (i = 0; i < N; i++) {
        subset.push(null);
    }
    subsetHelper(arr, subset, 0);
}

let subsetHelper = function (arr, subset, i) {
    if (i === arr.length) {
        console.log(subset.filter(ele => ele != null));
    }
    else {
        subset[i] = null; // this is the no path of the decision
        subsetHelper (arr, subset, i+1);
        subset[i] = arr[i]; //now follow the yes path to include element'
        subsetHelper (arr, subset, i+1);
    }
}

setOfSubsets (test);
