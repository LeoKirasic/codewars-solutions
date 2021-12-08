function hero(bullets, dragons) {
  let bulletsToKillAll = dragons * 2;

  if (bullets >= bulletsToKillAll) {
    return true;
  } else {
    return false;
  }
}
