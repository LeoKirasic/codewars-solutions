function sumStrings(a, b) {
  if (a === '') {
    return b;
  } else if (b === '') {
    return a;
  }
  const sum = BigInt(a) + BigInt(b);

  return sum.toString();
}
