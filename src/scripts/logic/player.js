import { generateCoords } from './helper-functions';

const Player = () => {
  const movesMade = [];

  const getLastMove = () => movesMade[movesMade.length - 1];

  const attack = (OppBoard, coords = null) => {
    if (coords === null) {
      return OppBoard.receiveAttack(generateCoords(movesMade));
    }

    return OppBoard.receiveAttack(coords);
  };

  return {
    getLastMove,
    attack,
  };
};

export default Player;
