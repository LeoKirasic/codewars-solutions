function generateHashtag(str) {
  if (str.length === 0 || str[0] === ' ') {
    return false;
  } else {
    const arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === ' ') {
        arr.splice(i, 1);
      }
    }
    arr.unshift('#');
    const newArr = arr.map(item => item.charAt(0).toUpperCase() + item.substr(1).toLowerCase())
    const result = newArr.join('')
    if (result.length > 140) {
      return false;
    } else {
      console.log(result);
      return result;
    }
  }
}
