import {
  getColNum,
  getColLetter,
  getRandomNum,
  generateCoords,
} from '../logic/helper-functions';

test('get column number of letters', () => {
  expect(getColNum('a')).toBe('1');
  expect(getColNum('A')).toBe('1');
  expect(getColNum('h')).toBe('8');
});

test('get column letter of numbers', () => {
  expect(getColLetter(1)).toBe('a');
  expect(getColLetter(2)).toBe('b');
  expect(getColLetter(3)).toBe('c');
});

test('get random number between min (inclusive) and max (exclusive)', () => {
  expect(getRandomNum(1, 3)).toBeGreaterThanOrEqual(1);
  expect(getRandomNum(1, 3)).toBeLessThan(3);
  expect(getRandomNum(1, 10)).toBeGreaterThanOrEqual(1);
  expect(getRandomNum(1, 10)).toBeLessThan(10);
});

test('check if randomly generated coordinate is a valid coordinate', () => {
  const coords = generateCoords();
  const [row, letter] = coords;
  const col = getColNum(letter);
  expect(Number(row)).toBeGreaterThanOrEqual(1);
  expect(Number(row)).toBeLessThanOrEqual(10);
  expect(Number(col)).toBeGreaterThanOrEqual(1);
  expect(Number(col)).toBeLessThanOrEqual(10);
});

test('check if randomly generated coordinate is not a duplicate', () => {
  const movesMade = [['1', 'a']];
  movesMade.push(generateCoords(movesMade));
  const stringified = movesMade.map((coords) => JSON.stringify(coords));
  const set = new Set(stringified);
  expect(set.size).toBe(movesMade.length);
});
