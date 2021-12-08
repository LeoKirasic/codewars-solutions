function squareDigits(num) {

  const str = num.toString()
  const arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.pow(arr[i], 2)
  }
  const result = arr.join('');

  return parseInt(result);
}
