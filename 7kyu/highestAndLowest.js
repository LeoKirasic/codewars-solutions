function highAndLow(numbers) {
  const arr = numbers.split(' ');
  arr.sort((a, b) => a - b);
  return `${arr[arr.length - 1]} ${arr[0]}`;
}
