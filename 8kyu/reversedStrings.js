function solution(str) {
  const arr = str.split('');

  const reverse = arr.reverse();

  const joined = reverse.join('');

  return joined;
}
