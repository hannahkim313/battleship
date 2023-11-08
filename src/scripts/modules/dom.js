import { getColNum } from './helper-functions';

const toggleActivePiece = (selectedPiece) => {
  const activePiece = document.querySelector('.pieces .active');
  activePiece.classList.toggle('active');
  selectedPiece.classList.toggle('active');
};

const getSelectedBoxes = (box) => {
  const col = box.dataset.col;
  const length = document.querySelector('.piece.active').dataset.length;
  const colMax = Number(col) + Number(length);
  const boxes = [];
  let currBox = box;
  let count = Number(col);

  while (count < colMax) {
    boxes.push(currBox);

    if (
      currBox.nextElementSibling === null ||
      !currBox.nextElementSibling.classList.contains('box')
    ) {
      break;
    }

    currBox = currBox.nextElementSibling;
    count += 1;
  }

  return boxes;
};

const showValid = (box) => (box.style.backgroundColor = 'var(--color-brand-2a');

const showInvalid = (box) =>
  (box.style.backgroundColor = 'var(--color-brand-5b');

const resetBoxes = () => {
  const boxes = document.querySelectorAll('.box:not(.filler, .placed)');
  boxes.forEach((box) => (box.style.backgroundColor = 'var(--color-brand-1b'));
};

const revertPlacedBoxes = () => {
  const placedBoxes = document.querySelectorAll('.placed');
  placedBoxes.forEach((box) => showValid(box));
};

const changeOnHover = (box) => {
  revertPlacedBoxes();
  const col = box.dataset.col;
  const length = document.querySelector('.piece.active').dataset.length;
  const colMax = Number(col) + Number(length);
  const boxes = getSelectedBoxes(box);

  if (boxes.length < colMax - col) {
    boxes.forEach((box) => showInvalid(box));
  } else {
    boxes.forEach((box) => {
      if (box.classList.contains('placed')) {
        showInvalid(box);
      } else {
        showValid(box);
      }
    });
  }
};

const displaySelectedBoxes = (box) => {
  const boxes = getSelectedBoxes(box);
  boxes.forEach((box) => box.classList.toggle('placed'));
};

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
  toggleActivePiece,
  resetBoxes,
  changeOnHover,
  displaySelectedBoxes,
  renderGameboard,
  changeActivePlayer,
  updateOppGameboard,
  updateUserGameboard,
  disableOppGameboard,
  enableOppGameboard,
  showGameOver,
};
