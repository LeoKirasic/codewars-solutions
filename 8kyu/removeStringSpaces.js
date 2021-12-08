function noSpace(x) {
  const arr = x.split(' ')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      arr.splice(i, 1);
    }
  }
  const joined = arr.join('');
  return joined;
}
