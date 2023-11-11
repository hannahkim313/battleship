import { getColNum } from '../logic/helper-functions';

const opponentGameboard = () => {
  const update = (state, coords) => {
    const [row, letter] = coords;
    const col = getColNum(letter);
    const box = document.querySelector(
      `.opponent .box[data-row='${row}'][data-col='${col}']`
    );

    if (state[row - 1][col - 1] === 'miss' && box.childElementCount === 0) {
      const marker = document.createElement('div');
      marker.classList.add('miss', 'marker');
      box.appendChild(marker);
    } else {
      box.classList.toggle('occupied');
      const marker = document.createElement('div');
      marker.classList.add('hit', 'marker');
      box.appendChild(marker);
    }
  };

  const disable = () => {
    const gameboardLabel = document.querySelector('.turn');
    const boxes = gameboardLabel.closest('article').querySelectorAll('.box');
    boxes.forEach((box) => box.setAttribute('disabled', ''));
  };

  const enable = () => {
    const gameboardLabel = document.querySelector('h2:not(.turn)');
    const boxes = gameboardLabel.closest('article').querySelectorAll('.box');
    boxes.forEach((box) => box.removeAttribute('disabled'));
  };

  return {
    update,
    disable,
    enable,
  };
};

export default opponentGameboard;
