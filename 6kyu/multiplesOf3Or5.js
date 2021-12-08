function solution(number) {
  let num = number;
  let sum = 0;
  if (num < 0) {
    return 0;
  } else {
    for (let i = num - 1; i > 0; i--) {
      if (i % 3 !== 0 && i % 5 !== 0) {
        continue;
      } else if (i % 3 === 0) {
        sum += i;
      } else if (i % 5 === 0) {
        sum += i;
      }
    }
    return sum
  }
}
