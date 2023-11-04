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
    const col = letters.indexOf(letter);
    const positions = state[row - 1].slice(col, col + shipLength);

    return positions.every((position) => position === 0);
  };

  const placeShip = (ship, coords) => {
    const [row, letter] = coords;
    const col = letters.indexOf(letter);

    if (col + ship.size() < 11 && isEmpty(coords, ship.size())) {
      ships.push(ship);
      state[row - 1].fill(ship, col, col + ship.size());
    } else {
      return null;
    }
  };

  const receiveAttack = (coords) => {
    const [row, letter] = coords;
    const col = letters.indexOf(letter);
    const position = state[row - 1][col];

    if (position === 'hit' || position === 'miss') {
      return null;
    } else if (position === 0) {
      state[row - 1][col] = 'miss';
    } else {
      const ship = state[row - 1][col];
      ship.hit();
      state[row - 1][col] = 'hit';
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
