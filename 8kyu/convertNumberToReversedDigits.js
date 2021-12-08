function digitize(n) {
  const string = n.toString();
  const arr = string.split('')
  arr.reverse()

  const result = arr.map(function(x) {
    return parseInt(x);
  });

  return result;
}
