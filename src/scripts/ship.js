const Ship = (length) => {
  let hits = 0;

  const hit = () => (hits += 1);

  const isSunk = () => hits === length;

  const size = () => length;

  return {
    hit,
    isSunk,
    size,
  };
};

export default Ship;
