const getColNum = (letter) => {
  const letters = 'abcdefghij';

  return `${letters.indexOf(letter.toLowerCase()) + 1}`;
};

const getColLetter = (colNum) => {
  const letters = 'abcdefghij';

  return letters[colNum - 1];
};

const getRandomNum = (minInclusive, maxExclusive) => {
  const min = Math.ceil(minInclusive);
  const max = Math.floor(maxExclusive);

  return Math.floor(Math.random() * (max - min) + min);
};

const generateCoords = (movesMade = []) => {
  const letters = 'abcdefghij';
  const coords = [`${getRandomNum(1, 10)}`, letters[getRandomNum(1, 10)]];

  if (movesMade.length === 0) {
    movesMade.push(coords);

    return coords;
  }

  if (
    movesMade.some((move) => JSON.stringify(move) === JSON.stringify(coords))
  ) {
    return generateCoords(movesMade);
  }

  movesMade.push(coords);

  return coords;
};

export { getColNum, getColLetter, getRandomNum, generateCoords };
