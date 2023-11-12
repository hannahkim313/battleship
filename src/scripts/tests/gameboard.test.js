import Gameboard from '../logic/gameboard';
import Ship from '../logic/ship';

test('place a ship of length 2 (horizontally) in the top left corner', () => {
  const gameboard = Gameboard();
  const ship1 = Ship(2);
  gameboard.placeShip(ship1, ['1', 'a']);
  expect(gameboard.getState()).toEqual([
    [ship1, ship1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('place a ship of length 2 (horizontally) in the top right corner', () => {
  const gameboard = Gameboard();
  const ship1 = Ship(2);
  expect(gameboard.placeShip(ship1, ['1', 'j'])).toEqual(null);
  expect(gameboard.getState()).toEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('place a ship on top of another ship', () => {
  const gameboard = Gameboard();
  const ship1 = Ship(2);
  gameboard.placeShip(ship1, ['5', 'e']);
  const ship2 = Ship(4);
  gameboard.placeShip(ship2, ['5', 'f']);
  expect(gameboard.placeShip(ship1, ['5', 'f'])).toEqual(null);
  expect(gameboard.getState()).toEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, ship1, ship1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('place a vertical ship on top of a horizontal ship', () => {
  const gameboard = Gameboard();
  const ship1 = Ship(2);
  gameboard.placeShip(ship1, ['5', 'e']);
  const ship2 = Ship(4);
  gameboard.placeShip(ship2, ['5', 'f'], true);
  expect(gameboard.placeShip(ship1, ['5', 'f'], true)).toEqual(null);
  expect(gameboard.getState()).toEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, ship1, ship1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('place a ship of length 2 (vertically) in the top left corner', () => {
  const gameboard = Gameboard();
  const ship1 = Ship(2);
  gameboard.placeShip(ship1, ['1', 'a'], true);
  expect(gameboard.getState()).toEqual([
    [ship1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('place a ship of length 2 (vertically) in the bottom right corner', () => {
  const gameboard = Gameboard();
  const ship1 = Ship(2);
  gameboard.placeShip(ship1, ['10', 'j'], true);
  expect(gameboard.getState()).toEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('randomly place ships', () => {
  const gameboard = Gameboard();
  gameboard.placeRandom();
  const state = gameboard.getState();
  const occupied = [];

  state.forEach((row) => {
    const values = row.filter((value) => value !== 0);
    values.forEach((value) => occupied.push(value));
  });

  expect(occupied.length).toBe(17);
});

test('place an attack that hits a ship', () => {
  const gameboard = Gameboard();
  const ship1 = Ship(2);
  gameboard.placeShip(ship1, ['1', 'a']);
  gameboard.receiveAttack(['1', 'b']);
  expect(gameboard.getState()).toEqual([
    [ship1, 'hit', 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('place an attack that misses a ship', () => {
  const gameboard = Gameboard();
  const ship1 = Ship(2);
  gameboard.placeShip(ship1, ['1', 'a']);
  gameboard.receiveAttack(['4', 'b']);
  expect(gameboard.getState()).toEqual([
    [ship1, ship1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 'miss', 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('check if all ships are sunk', () => {
  const gameboard = Gameboard();
  const ship1 = Ship(2);
  gameboard.placeShip(ship1, ['1', 'a']);
  gameboard.receiveAttack(['1', 'a']);
  gameboard.receiveAttack(['1', 'b']);
  expect(gameboard.isAllSunk()).toEqual(true);
});

test('check if all ships are sunk', () => {
  const gameboard = Gameboard();
  const ship1 = Ship(2);
  gameboard.placeShip(ship1, ['1', 'a']);
  gameboard.receiveAttack(['1', 'a']);
  expect(gameboard.isAllSunk()).toEqual(false);
});
