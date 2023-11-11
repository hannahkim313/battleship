import Ship from '../logic/ship';

test('check if ship is sunk after hitting less than total length', () => {
  const ship = Ship(3);
  ship.hit();
  expect(ship.isSunk()).toEqual(false);
});

test('check if ship is sunk after hitting total length', () => {
  const ship = Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toEqual(true);
});
