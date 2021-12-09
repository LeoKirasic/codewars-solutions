function findOutlier(integers) {
  let odds = 0;
  let evens = 0;
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evens++
    } else {
      odds++
    }
  }
  if (odds > evens) {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) {
        return integers[i];
      }
    }
  } else {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 !== 0) {
        return integers[i];
      }
    }
  }
}
