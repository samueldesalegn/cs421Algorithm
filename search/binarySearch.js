function binarySearch(arr, n){
  // add whatever parameters you deem necessary - good luck!
  let l = 0;
  let r = arr.length -1;
  while(l<=r){
      let m = Math.floor((l+r)/2);
      if(n == arr[m]) {
          return m;
      }else if(arr[m]>n){
          r= m-1;
      }else if(arr[m]<n){
          l = m+1;
      }
  }
  return -1;
  
  
  
}

// console.log(binarySearch([1,2,3,4,5],2));

function binarySearchRecursive(arr, n, l, r){
    // add whatever parameters you deem necessary - good luck!
    if (l>r) return;
    
    else { 
        let m = Math.floor((l+r)/2);
        if(n === arr[m]) {
            return m;
        }else if(arr[m]>n){
            return binarySearchRecursive(arr, n, l, m-1);
        }else if(arr[m]<n){
            return binarySearchRecursive(arr, n, m+1, r);
        }
    }
    return -1;
    
    
    
  }

  let arr = [1, 3, 4, 6, 7, 8, 9]

  console.log(binarySearchRecursive(arr, 5, 0, 6))