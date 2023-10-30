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
  const letters = 'abcdefghij'.split('');

  const isEmpty = (coords, shipLength) => {
    const [row, letter] = coords;
    const column = letters.indexOf(letter);
    const positions = state[row - 1].slice(column, column + shipLength);

    return positions.every((position) => position === 0);
  };

  const placeShip = (ship, coords) => {
    const [row, letter] = coords;
    const column = letters.indexOf(letter);

    if (column + ship.size() < 11 && isEmpty(coords, ship.size())) {
      ships.push(ship);
      state[row - 1].fill(ship, column, column + ship.size());
    } else {
      return null;
    }
  };

  const receiveAttack = (coords) => {
    const [row, letter] = coords;
    const column = letters.indexOf(letter);
    const position = state[row - 1][column];

    if (position === 0) {
      state[row - 1][column] = 'miss';
    } else if (position !== 'hit') {
      const ship = state[row - 1][column];
      ship.hit();
      state[row - 1][column] = 'hit';
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
