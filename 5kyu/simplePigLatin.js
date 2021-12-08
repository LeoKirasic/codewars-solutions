function pigIt(str) {
  const arr = str.split(" ");
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const currentLetter = arr[i].charAt(0);
    const removedFirstChar = arr.map((s) => s.slice(1));

    if (currentLetter === "!") {
      newArr += [...(removedFirstChar[i] + currentLetter + "!")];
    } else if (currentLetter === "?") {
      newArr += [...(removedFirstChar[i] + currentLetter + "?")];
    } else {
      newArr += [...(removedFirstChar[i] + currentLetter + "ay ")];
    }
  }

  const stringWithRemovedCommas = newArr.replace(/,/g, "");
  const result = stringWithRemovedCommas.slice(0, -1);

  return result;
}
