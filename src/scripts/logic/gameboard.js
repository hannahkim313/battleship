import { getColNum, getRandomNum, generateCoords } from './helper-functions';
import Ship from './ship';

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

  const getRandomDirection = () => {
    const num = getRandomNum(1, 3);

    if (num === 1) {
      return 'horizontal';
    } else {
      return 'vertical';
    }
  };

  const placeRandom = () => {
    const movesMade = [];
    const ships = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)];
    let coords = generateCoords(movesMade);

    ships.forEach((ship) => {
      const isVertical = getRandomDirection() === 'vertical';

      while (placeShip(ship, coords, isVertical) === null) {
        coords = generateCoords(movesMade);
      }

      movesMade.push(coords);
    });
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
    placeRandom,
    receiveAttack,
    isAllSunk,
    getState,
  };
};

export default Gameboard;
