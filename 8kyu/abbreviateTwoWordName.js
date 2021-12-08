function abbrevName(name) {
  const arr = name.split('');

  let firstLetter = arr[0];
  let lastLetter;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      lastLetter = arr[i + 1];
    }
  }
  const firstResult = firstLetter.toUpperCase();
  const secondResult = lastLetter.toUpperCase();
  return `${firstResult}.${secondResult}`;
}
