function countSheeps(arrayOfSheep) {
  let numberOfSheep = 0;

  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      numberOfSheep++;
    }
  }
  return numberOfSheep;
}
