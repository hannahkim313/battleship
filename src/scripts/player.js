const Player = () => {
  const attack = (board, coords) => board.receiveAttack(coords);

  return {
    attack,
  };
};

export default Player;
