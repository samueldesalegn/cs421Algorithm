
class ArraySorter {
    constructor() {
        this._compCount = 0;
        this._swapCount = 0;
        this._shiftCount = 0;
    }
    keyComparisons() {
        return this._compCount;
    }
    numSwaps() {
        return this._swapCount;
    }
    numShifts() {
        return this._shiftCount;
    }
    print(arr) {
        let last = arr.length - 1;
        let res = "[";
        for (let i=0; i<=last; i++) {
            res = res + arr[i];
            if (i<last) {
                res = res + ", ";
            }
        }
        console.log(res + "]");
    }

    _buildHeap(arr) {
        // your code goes here
        let last = arr.length -1;
        let next = last;

        while (next>0) {
            this._downheap(arr, this._parent(next), last);
            next = next -2;
        }
    }
    _parent(index) {
        return Math.floor((index-1)/2);
    }
    _downheap(arr, index, last) {
        // your code goes here
        let bool = false;
        while (!bool) {
            let maxIndex = this._indexOfMax(arr, index, last);
            if (maxIndex !== index) {
                this._swapElements(arr, maxIndex, index);
                index = maxIndex;
            } else {
                bool = true;
            }
        }

    }
    _swapElements(arr, j, k) {
        let temp = arr[j];
        arr[j] = arr[k];
        arr[k] = temp;
        this._swapCount++;
    }
    _indexOfMax(arr, index, last) {
        // your code goes here
        let largest = index;
        let left = 2*index +1;
        let right = left + 1;

        if (left <= last && arr[left] > arr[largest]) {
            largest = left;
        }
        if (right <= last && arr[right] > arr[largest]) {
            largest = right;
        }
    }
    heapSort(arr) {
        this._compCount = 0;
        this._swapCount = 0;
        this._buildHeap(arr);
        console.log("key comparisons to build the Heap " + this._compCount);
        // your code goes here
        let end = arr.length -1;

        while (end > 0) {
            this._swapElements(arr, 0, end);
            end--;
            this._downheap(arr, 0, end);
        }
    }

    insertionSort(arr) {
        this._compCount = 0;
        this._shiftCount = 0;
        this._insertionSort(arr);
    }
    _insertionSort(arr) {
        // your code goes here
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

    ShellSort(arr) {
        this._compCount = 0;
        this._shiftCount = 0;
        let maxGap = Math.floor(arr.length/3);
        let gap = 1;
        while (gap <= maxGap) {
            gap = gap*3 + 1;
        }
        while (gap > 0) {
            this._segmentInsertionSort(arr, gap);
            gap = (gap - 1) / 3;
        }
    }
    _segmentInsertionSort(arr, gap) {
        // your code goes here
        for (let i = gap; i < arr.length; i++) {
            let j = i;
            let insertElem = arr[i];
            while (j>(gap - 1) && (insertElem < arr[j-gap])) {
                arr[j] = arr[j - gap];
                j = j-gap;
            
            }
            arr[j] = insertElem;
            
        }
        
    }

    quickSort(arr) {
        this._compCount = 0;
        this._swapCount = 0;
        this._shiftCount = 0;
        this._quickSort(arr, 0, arr.length-1);
    }
    _quickSort(arr, lo, hi) {
        if (lo < hi) {
            let pivots = this._inPlacePartition(arr, lo, hi);
            //  console.log(pivots);  
            // pivots is an array containing two elements, an index range where all elements are equal to the random pivot
            this._quickSort(arr, lo, pivots[0]-1);
            this._quickSort(arr, pivots[1]+1, hi);
        }
    }
    _inPlacePartition(arr, lo, hi) {
        let size = hi - lo + 1;
        let rand = Math.floor(Math.random()*100)%size;
        let pivot = arr[lo + rand];  // bug needed to add lo to rand so pivot is between lo and hi
        let pivots = [];
        let j = lo;
        let k = hi;
        while (j <= k) {
            this._compCount++;
            while (j <= k && arr[j] < pivot) {
                this._compCount++;
                j++;
            }
            this._compCount++;
            while (j <= k && pivot <= arr[k]) {
                this._compCount++;
                k--;
            }
            if (j <= k) {
                this._swapElements(arr, j, k);
                j++;
                k--;
             }
        }
        pivots.push(j);
        
        k = hi;
        while (j <= k) {
            this._compCount++;
            while (j <= k && arr[j] == pivot) {
                this._compCount++;
                j++;
            }
            this._compCount++;
            while (j <= k && pivot < arr[k]) {
                this._compCount++;
                k--;
            }
            if (j <= k) {
                this._swapElements(arr, j, k);
                j++;
                k--;
             }
        }
        
        pivots.push(k);
        return pivots;
    }

}

exports.ArraySorter = ArraySorter;
