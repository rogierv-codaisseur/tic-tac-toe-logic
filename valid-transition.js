function isValidTransition(playerSymbol, from, to) {

  const fromItem =
    from.map((row, i) =>
      row.filter((item, j) =>
        item !== to[i][j])).flat()

  const toItem =
    to.map((row, i) =>
      row.filter((item, j) =>
        item !== from[i][j])).flat()

  return (
    !((toItem.length > 1) ||
      (playerSymbol !== toItem[0]) ||
      (fromItem[0] !== null) ||
      (toItem[0] === null))
  );

  return true;
}

module.exports = { isValidTransition };
