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

  const isEmpty = (coords, shipLength, isVertical) => {
    const [row, letter] = coords;
    const col = getColNum(letter);

    if (isVertical) {
      const positions = [];
      let count = Number(row);

      while (count < Number(row) + shipLength) {
        positions.push(state[count - 1][col - 1]);
        count += 1;
      }

      return positions.every((position) => position === 0);
    }

    const positions = state[row - 1].slice(col - 1, col - 1 + shipLength);

    return positions.every((position) => position === 0);
  };

  const placeShip = (ship, coords, isVertical = false) => {
    const [row, letter] = coords;
    const col = getColNum(letter);

    if (isVertical) {
      if (row - 1 + ship.size() > 10 || !isEmpty(coords, ship.size(), true)) {
        return null;
      }

      ships.push(ship);
      let count = Number(row);

      while (count < Number(row) + ship.size()) {
        state[count - 1][col - 1] = ship;
        count += 1;
      }
    } else {
      if (col - 1 + ship.size() > 10 || !isEmpty(coords, ship.size(), false)) {
        return null;
      }

      ships.push(ship);
      state[row - 1].fill(ship, col - 1, col - 1 + ship.size());
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

  const clear = () => {
    let row = 0;

    while (row < 10) {
      state[row].fill(0);
      row += 1;
    }

    ships.length = 0;
  };

  const isAllSunk = () => ships.every((ship) => ship.isSunk());

  const getState = () => state.map((row) => row.slice());

  return {
    placeShip,
    receiveAttack,
    clear,
    isAllSunk,
    getState,
  };
};

export default Gameboard;
