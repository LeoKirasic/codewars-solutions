function disemvowel(str) {

  const arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === 'a') {
      arr.splice(i, 1, '');
    } else if (arr[i].toLowerCase() === 'e') {
      arr.splice(i, 1, '');
    } else if (arr[i].toLowerCase() === 'i') {
      arr.splice(i, 1, '')
    } else if (arr[i].toLowerCase() === 'o') {
      arr.splice(i, 1, '')
    } else if (arr[i].toLowerCase() === 'u') {
      arr.splice(i, 1, '');
    }
  }

  const joined = arr.join('');
  return joined;
}
