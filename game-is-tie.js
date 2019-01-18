const { calculateWinner } = require('./calculate-winner');

function gameIsTie(board) {
  const gameNotFinishedIsTieForX = board.map(row => row.map(item => { return item === null ? item = 'x' : item }));
  const gameNotFinishedIsTieForO = board.map(row => row.map(item => { return item === null ? item = 'o' : item }));
  return !calculateWinner(board) && !calculateWinner(gameNotFinishedIsTieForX) && !calculateWinner(gameNotFinishedIsTieForO);
};

module.exports = { gameIsTie };