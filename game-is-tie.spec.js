const { gameIsTie } = require('./game-is-tie');

test('Game is tie', () => {
  const board = [
    ['o', 'x', 'x'],
    ['x', 'o', 'o'],
    ['o', 'x', 'x']
  ];
  expect(gameIsTie(board)).toBe(true)
});

test('Game is not finished', () => {
  const board = [
    ['o', 'x', 'x'],
    ['x', null, 'o'],
    ['o', 'x', 'x']
  ];
  expect(gameIsTie(board)).toBe(false)
});

test('Game is not a tie', () => {
  const board = [
    ['o', 'x', 'x'],
    ['x', 'x', 'o'],
    ['x', 'x', 'x']
  ];
  expect(gameIsTie(board)).toBe(false)
});

test('Game is not finished, but is a tie', () => {
  const board = [
    ['x', 'o', 'x'],
    ['x', 'o', null],
    ['o', 'x', 'o']
  ];
  expect(gameIsTie(board)).toBe(true)
});

test('Game is not finished, but is a tie', () => {
  const board = [
    ['o', 'o', 'x'],
    ['x', 'x', 'o'],
    ['o', null, 'x']
  ];
  expect(gameIsTie(board)).toBe(true)
});

test('Game is not finished, and is not a tie', () => {
  const board = [
    ['o', 'o', 'x'],
    ['x', 'x', null],
    ['o', 'o', 'x']
  ];
  expect(gameIsTie(board)).toBe(false)
});