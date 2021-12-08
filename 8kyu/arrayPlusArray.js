function arrayPlusArray(arr1, arr2) {
  let sumOfFirstArray = 0;
  let sumOfSecondArray = 0;

  for (let i = 0; i < arr1.length; i++) {
    sumOfFirstArray += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sumOfSecondArray += arr2[i];
  }

  return sumOfFirstArray + sumOfSecondArray;
}
