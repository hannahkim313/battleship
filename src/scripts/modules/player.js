const Player = () => {
  const movesMade = [];

  const getLastMove = () => movesMade[movesMade.length - 1];

  const generateCoords = () => {
    const getRandomNum = () => {
      const min = Math.ceil(1);
      const max = Math.floor(10);

      return Math.floor(Math.random() * (max - min) + min);
    };

    const letters = 'abcdefghij';
    const coords = [`${getRandomNum()}`, letters[getRandomNum()]];

    if (movesMade.length === 0) {
      movesMade.push(coords);

      return coords;
    }

    if (
      movesMade.some((move) => JSON.stringify(move) === JSON.stringify(coords))
    ) {
      return generateCoords();
    } else {
      movesMade.push(coords);

      return coords;
    }
  };

  const attack = (OppBoard, coords = null) => {
    if (coords === null) {
      return OppBoard.receiveAttack(generateCoords());
    }

    return OppBoard.receiveAttack(coords);
  };

  return {
    getLastMove,
    attack,
  };
};

export default Player;
