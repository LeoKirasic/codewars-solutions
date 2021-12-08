function getCount(str) {
  let vowelsCount = 0;

  let arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'a') {
      vowelsCount++;
    } else if (arr[i] === 'e') {
      vowelsCount++;
    } else if (arr[i] === 'i') {
      vowelsCount++;
    } else if (arr[i] === 'o') {
      vowelsCount++;
    } else if (arr[i] === 'u') {
      vowelsCount++;
    } else {
      console.log(i);
    }
  }
  return vowelsCount;
}
