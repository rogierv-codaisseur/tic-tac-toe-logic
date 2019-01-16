const symbols = ['x', 'o', null];

function isValidBoard(board) {
  return board.length === 3 &&
    board.every(row => row.length === 3 &&
      row.every(item => symbols.includes(item)))
};

module.exports = { isValidBoard }
