function areYouPlayingBanjo(name) {
  const arr = name.split('');
  if (arr[0] === 'r' || arr[0] === 'R') {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}
