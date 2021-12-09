var countBits = function(n) {
  const binary = n.toString(2);
  const arr = binary.split('');
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '1') {
      result++
    }
  }
  return result;
};
