const players = ['x', 'o'];

function calculateWinner(board) {

  const rowWinner = (board, player) => board.some(row => row.every(item => item === player));

  const onTheSide = [0, 1, 2].map(n => board.map(row => row[n]));

  const columnWinner = player =>
    onTheSide.some(row => row.every(item => item === player));

  const diagonal1 = [0, 1, 2].map(() => [0, 1, 2].map(n => board[n][n]));
  const diagonal2 = [0, 1, 2].map(() => [0, 1, 2].map(n => board[2 - n][n]));

  const diagonalWinner = player =>
    diagonal1.some(row => row.every(item => item === player)) ||
    diagonal2.some(row => row.every(item => item === player));

  const boardWinner = (board, player) => {
    if (rowWinner(board, player) || (columnWinner(player)) || diagonalWinner(player)) {
      return player
    };
  };

  players.map(player => {
    boardWinner(board, player) ? result = player : null
  });

  const findPlayer = players.find(player => boardWinner(board, player));

  if (typeof findPlayer === 'undefined') {
    return null;
  } else {
    return findPlayer
  }
};

module.exports = { calculateWinner }
