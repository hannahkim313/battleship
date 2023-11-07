import { getColNum } from './helper-functions';

const renderGameboard = (state) => {
  state.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (col !== 0) {
        const box = document.querySelector(
          `.user .box[data-row='${rowIndex + 1}'][data-col='${colIndex + 1}']`
        );
        box.classList.toggle('occupied');
        const marker = document.createElement('div');
        marker.classList.add('ship', 'marker');
        box.appendChild(marker);
      }
    });
  });
};

const changeActivePlayer = () => {
  const currentTurn = document.querySelector('.turn');
  const nextTurn = document.querySelector('h2:not(.turn)');
  currentTurn.classList.toggle('turn');
  nextTurn.classList.toggle('turn');
};

const updateOppGameboard = (state, coords) => {
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

const disableOppGameboard = () => {
  const gameboardLabel = document.querySelector('.turn');
  const boxes = gameboardLabel.closest('article').querySelectorAll('.box');
  boxes.forEach((box) => box.setAttribute('disabled', ''));
};

const enableOppGameboard = () => {
  const gameboardLabel = document.querySelector('h2:not(.turn)');
  const boxes = gameboardLabel.closest('article').querySelectorAll('.box');
  boxes.forEach((box) => box.removeAttribute('disabled'));
};

const showGameOver = (winner) => {
  const restart = document.createElement('button');
  restart.type = 'submit';
  restart.classList.add('submit');
  restart.textContent = 'Restart';
  const form = document.createElement('form');
  form.action = '';
  form.method = 'dialog';
  form.appendChild(restart);
  const message = document.createElement('p');

  if (winner === 'user') {
    message.textContent = 'You won!';
  } else {
    message.textContent = 'You lost!';
  }

  const dialog = document.createElement('dialog');
  dialog.classList.add('game-over');
  dialog.appendChild(message);
  dialog.appendChild(form);
  const body = document.querySelector('body');
  body.appendChild(dialog);
  dialog.showModal();
};

export {
  renderGameboard,
  changeActivePlayer,
  updateOppGameboard,
  updateUserGameboard,
  disableOppGameboard,
  enableOppGameboard,
  showGameOver,
};
