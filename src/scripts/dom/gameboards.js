import { getColNum } from '../logic/helper-functions';

const updateUserGameboard = (state, coords) => {
  const [row, letter] = coords;
  const col = getColNum(letter);
  const box = document.querySelector(
    `.user .box[data-row='${row}'][data-col='${col}']`
  );

  if (state[row - 1][col - 1] === 'miss' && box.childElementCount === 0) {
    const marker = document.createElement('div');
    marker.classList.add('miss', 'marker');
    box.appendChild(marker);
  } else {
    const marker = box.querySelector('.marker');
    marker.classList.toggle('ship');
    marker.classList.toggle('hit');
  }
};

const updateOpponentGameboard = (state, coords) => {
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

const disableOpponentGameboard = () => {
  const gameboardLabel = document.querySelector('.turn');
  const boxes = gameboardLabel.closest('article').querySelectorAll('.box');
  boxes.forEach((box) => box.setAttribute('disabled', ''));
};

const enableOpponentGameboard = () => {
  const gameboardLabel = document.querySelector('h2:not(.turn)');
  const boxes = gameboardLabel.closest('article').querySelectorAll('.box');
  boxes.forEach((box) => box.removeAttribute('disabled'));
};

export {
  updateUserGameboard,
  updateOpponentGameboard,
  disableOpponentGameboard,
  enableOpponentGameboard,
};
