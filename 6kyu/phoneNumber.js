function createPhoneNumber(numbers) {
  let number = '';
  for (let i = 0; i < numbers.length; i++) {
    number += numbers[i];
  }
  let arr = number.split('');
  arr.unshift('(');

  arr.splice(4, 0, ') ');
  arr.splice(8, 0, '-');

  number = arr.join('');

  return number;
}
