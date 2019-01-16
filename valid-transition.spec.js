const { isValidTransition } = require('./valid-transition');

test('Transition is valid', () => {
  const from = [
    [null, 'o', 'x'],
    [null, null, 'x'],
    ['x', 'o', 'o']
  ];
  const to = [
    [null, 'o', 'x'],
    [null, 'x', 'x'],
    ['x', 'o', 'o']
  ]
  expect(isValidTransition('x', from, to)).toBe(true);
});

test('Transition is invalid, wrong player', () => {
  const from = [
    [null, 'o', 'x'],
    [null, null, 'x'],
    ['x', 'o', 'o']
  ];
  const to = [
    [null, 'o', 'x'],
    [null, 'x', 'x'],
    ['x', 'o', 'o']
  ]
  expect(isValidTransition('o', from, to)).toBe(false);
});

test('Overwriting by null is not allowed', () => {
  const from = [
    [null, 'o', 'x'],
    [null, 'x', 'x'],
    ['x', 'o', 'o']
  ];
  const to = [
    [null, 'o', 'x'],
    [null, null, 'x'],
    ['x', 'o', 'o']
  ]
  expect(isValidTransition('x', from, to)).toBe(false);
});

test('Multiple moves are not allowed', () => {
  const from = [
    [null, 'o', 'x'],
    [null, 'x', 'x'],
    ['x', 'o', 'o']
  ];
  const to = [
    [null, 'o', 'x'],
    [null, 'x', 'x'],
    ['x', 'x', 'x']
  ]
  expect(isValidTransition('x', from, to)).toBe(false);
});