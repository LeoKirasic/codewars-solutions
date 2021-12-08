var Calculator = {
  average: function(...args) {
    let sum = 0;
    const arr = args;
    if (arr.length === 0) {
      return 0;
    } else {
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
    }
    return sum / arr.length;
  }
};
