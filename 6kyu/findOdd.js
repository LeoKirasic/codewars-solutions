function findOdd(A) {
  const counts = {};

  A.forEach(function(x) { counts[x] = (counts[x] || 0) + 1; });

  for (let key in counts) {
    if (counts.hasOwnProperty(key)) {
      if (counts[key] % 2 !== 0) {
        return parseInt(key);
      }
    }
  }
}
