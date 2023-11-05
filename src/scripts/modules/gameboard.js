import { getColNum } from './helper-functions';

const Gameboard = () => {
  const ships = [];
  const state = [
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
  ];

  const isEmpty = (coords, shipLength) => {
    const [row, letter] = coords;
    const col = getColNum(letter);
    const positions = state[row - 1].slice(col - 1, col - 1 + shipLength);

    return positions.every((position) => position === 0);
  };

  const placeShip = (ship, coords) => {
    const [row, letter] = coords;
    const col = getColNum(letter);

    if (col - 1 + ship.size() < 11 && isEmpty(coords, ship.size())) {
      ships.push(ship);
      state[row - 1].fill(ship, col - 1, col - 1 + ship.size());
    } else {
      return null;
    }
  };

  const receiveAttack = (coords) => {
    const [row, letter] = coords;
    const col = getColNum(letter);
    const position = state[row - 1][col - 1];

    if (position === 'hit' || position === 'miss') {
      return null;
    } else if (position === 0) {
      state[row - 1][col - 1] = 'miss';
    } else {
      const ship = state[row - 1][col - 1];
      ship.hit();
      state[row - 1][col - 1] = 'hit';
    }
  };

  const isAllSunk = () => ships.every((ship) => ship.isSunk());

  const getState = () => state.map((row) => row.slice());

  return {
    placeShip,
    receiveAttack,
    isAllSunk,
    getState,
  };
};

export default Gameboard;
