const Player = (board) => {
  const gameboard = board;

  const generateCoords = () => {
    const getRandomNum = () => Math.floor(Math.random() * 9);
    const letters = 'abcdefghij';

    return [`${getRandomNum()}`, letters[getRandomNum()]];
  };

  const attack = (OppBoard, coords = null) => {
    if (coords === null) {
      return OppBoard.receiveAttack(generateCoords());
    }

    return OppBoard.receiveAttack(coords);
  };

  return {
    gameboard,
    attack,
  };
};

export default Player;
