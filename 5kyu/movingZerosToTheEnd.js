var moveZeros = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === 0) {
        arr.splice(i, 1);
        arr.push(0);
      }
    }
  }
  return arr;
}
