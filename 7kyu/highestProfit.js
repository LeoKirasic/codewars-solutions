function minMax(arr) {
  arr.sort((a, b) => a - b);
  const highest = arr[arr.length - 1];
  const lowest = arr[0];

  return [lowest, highest];
}
