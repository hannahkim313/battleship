const Ship = (length) => {
  let hits = 0;

  const hit = () => (hits += 1);

  const isSunk = () => hits === length;

  return {
    hit,
    isSunk,
  };
};

export default Ship;
