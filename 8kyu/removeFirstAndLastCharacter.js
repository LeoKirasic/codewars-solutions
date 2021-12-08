function removeChar(str) {
  arr = str.split('');
  arr.pop();
  arr.shift()
  const result = arr.join('');

  return result;
};
