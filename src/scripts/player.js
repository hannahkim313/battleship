const Player = () => {
  const generateCoords = () => {
    const getRandomNum = () => Math.floor(Math.random() * 9);
    const letters = 'abcdefghij';

    return [`${getRandomNum()}`, letters[getRandomNum()]];
  };

  const attack = (board, coords = null) => {
    if (coords === null) {
      return board.receiveAttack(generateCoords());
    }

    return board.receiveAttack(coords);
  };

  return {
    attack,
  };
};

export default Player;
