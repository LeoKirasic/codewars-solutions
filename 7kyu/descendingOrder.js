function descendingOrder(n) {
  const arr = Array.from(String(n), Number);
  const sorted = arr.sort((a, b) => b - a);
  const string = sorted.join();
  const removedComma = string.replace(/,/g, '')
  const int = parseInt(removedComma);
  return int;
}
