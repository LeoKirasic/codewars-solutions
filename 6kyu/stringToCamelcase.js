function toCamelCase(str) {
  if (str === '') {
    return '';
  } else {
    const arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '-' || arr[i] === '_') {
        let letterAfter = arr[i + 1];
        arr.splice(i, 1);
        arr.splice(i, 1, letterAfter.toUpperCase());
      }
    }
    const result = arr.join('')
    return result;
  }
}
