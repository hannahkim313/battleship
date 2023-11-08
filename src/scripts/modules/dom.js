import { getColNum } from './helper-functions';
import checkIcon from '../../img/check.svg';

const toggleActivePiece = (selectedPiece) => {
  const activePiece = document.querySelector('.piece.active');
  activePiece.classList.toggle('active');
  selectedPiece.classList.toggle('active');
};

const updatePieces = () => {
  const checkImg = document.createElement('img');
  checkImg.src = checkIcon;
  checkImg.alt = 'Check mark to denote this ship was placed';
  checkImg.classList.add('check');
  const activePiece = document.querySelector('.piece.active');
  activePiece.appendChild(checkImg);
  activePiece.setAttribute('disabled', '');
  activePiece.classList.toggle('active');
  activePiece.firstElementChild.classList.toggle('placed');
  const piecesLeft = document.querySelectorAll('.piece:not(:disabled)');

  if (piecesLeft.length > 0) {
    piecesLeft[0].classList.toggle('active');
  }
};

const resetPieces = () => {
  const pieces = document.querySelectorAll('.piece');
  pieces.forEach((piece) => {
    piece.removeAttribute('disabled');

    if (piece.firstElementChild.classList.contains('placed')) {
      piece.firstElementChild.classList.toggle('placed');
    }

    if (piece.childElementCount > 1) {
      piece.lastElementChild.remove();
    }
  });
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

const validColor = 'var(--color-brand-2a)';

const showValid = (box) => (box.style.backgroundColor = validColor);

const invalidColor = 'var(--color-brand-5b)';

const showInvalid = (box) => (box.style.backgroundColor = invalidColor);

const defaultColor = 'var(--color-brand-1b)';

const resetAllBoxes = () => {
  const boxes = document.querySelectorAll('.box:not(.filler)');
  boxes.forEach((box) => {
    box.style.backgroundColor = defaultColor;

    if (box.classList.contains('placed')) {
      box.classList.toggle('placed');
    }
  });
};

const revertPlacedBoxes = () => {
  const placedBoxes = document.querySelectorAll('.box.placed');
  placedBoxes.forEach((box) => showValid(box));
};

const removeHoverEffect = () => {
  revertPlacedBoxes();
  const boxes = document.querySelectorAll('.box:not(.filler, .placed)');
  boxes.forEach((box) => (box.style.backgroundColor = defaultColor));
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

const disableInitialGameboard = () => {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => box.setAttribute('disabled', ''));
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
  const footer = document.querySelector('footer');
  footer.insertAdjacentElement('beforebegin', dialog);
  dialog.showModal();
};

export {
  toggleActivePiece,
  updatePieces,
  resetPieces,
  resetAllBoxes,
  removeHoverEffect,
  changeOnHover,
  displaySelectedBoxes,
  renderGameboard,
  changeActivePlayer,
  updateOppGameboard,
  updateUserGameboard,
  disableInitialGameboard,
  disableOppGameboard,
  enableOppGameboard,
  showGameOver,
};
