function bucketSort(L, N) {
  var B = new Array(N);

  // Initialize empty lists in B
  for (var i = 0; i < N; i++) {
    B[i] = [];
  }

  // Distribute elements from L into buckets in B
  while (L.length > 0) {
    var item = L.shift();
    var k = item[0];
    var o = item[1];
    B[k].push([k, o]);
  }

  // Sort each bucket and merge into L
  for (var i = 0; i < N; i++) {
    while (B[i].length > 0) {
      var f = B[i][0];
      var k = f[0];
      var o = f[1];
      B[i].shift();
      L.push([k, o]);
    }
  }

  return L;
}

let arr = [[3, 'apple'], [1, 'orange'], [2, 'banana'], [0, 'grape']]
console.log(bucketSort(arr, 4));