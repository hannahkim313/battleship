const Player = () => {
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
    attack,
  };
};

export default Player;
