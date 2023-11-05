const getColNum = (letter) => {
  const letters = 'abcdefghij';

  return letters.indexOf(letter) + 1;
};

const getColLetter = (colNum) => {
  const letters = 'abcdefghij';

  return letters[colNum - 1];
};

export { getColNum, getColLetter };
