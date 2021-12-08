function fakeBin(x) {
  const string = x.toString('');
  const arr = string.split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      arr.splice(i, 1, 0)
    } else {
      arr.splice(i, 1, 1);
    }
  }

  return arr.join('');
}
