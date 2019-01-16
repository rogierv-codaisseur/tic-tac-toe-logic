const { calculateWinner } = require('./calculate-winner');

function gameIsTie(board) {
  // DEPRECIATED
  // const gameNotFinished = board.some(row => row.some(item => item === null));

  const gameNotFinishedIsTieForX = board.map(row => row.map(item => {
    if (item === null) {
      return item = 'x'
    } else {
      return item;
    }
  }));

  const gameNotFinishedIsTieForO = board.map(row => row.map(item => {
    if (item === null) {
      return item = 'o'
    } else {
      return item;
    }
  }));

  return (
    !calculateWinner(board) &&
    !calculateWinner(gameNotFinishedIsTieForX) &&
    !calculateWinner(gameNotFinishedIsTieForO)
  );

};


module.exports = { gameIsTie };