function squareSum(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const squared = Math.pow(numbers[i], 2);
    numbers.splice(i, 1, squared);
  }
  let summed = 0;
  for (let i = 0; i < numbers.length; i++) {
    summed += numbers[i];
  }
  return summed;
}
