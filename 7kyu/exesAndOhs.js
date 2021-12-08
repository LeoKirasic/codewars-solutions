function XO(str) {
  const lowercase = str.toLowerCase()
  const newArray = lowercase.split('')
  let x = 0;
  let o = 0;
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === 'x') {
      x++;
    } else if (newArray[i] === 'o') {
      o++;
    } else {
      continue;
    }
  }
  if (x === o) {
    return true;
  } else {
    return false;
  }
}
