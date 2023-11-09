import { getColNum } from './helper-functions';
import checkIcon from '../../img/check.svg';
import checkInvertedIcon from '../../img/check-inverted.svg';

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

const getSelectedHorizontalBoxes = (box) => {
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

const getSelectedVerticalBoxes = (box) => {
  const row = box.dataset.row;
  const length = document.querySelector('.piece.active').dataset.length;
  const rowMax = Number(row) + Number(length);
  const boxes = [];
  let currBox = box;
  let count = Number(row);

  while (count < rowMax) {
    boxes.push(currBox);

    const col = box.dataset.col;
    const nextBox = document.querySelector(
      `.box[data-row='${count + 1}'][data-col='${col}']`
    );

    if (nextBox === null || !nextBox.classList.contains('box')) {
      break;
    }

    currBox = nextBox;
    count += 1;
  }

  return boxes;
};

const validColor = 'var(--color-brand-2a)';

const showValid = (box) => (box.style.backgroundColor = validColor);

const invalidColor = 'var(--color-brand-5b)';

const showInvalid = (box) => (box.style.backgroundColor = invalidColor);

const defaultColor = 'var(--color-brand-1b)';

const revertPlacedBoxes = () => {
  const placedBoxes = document.querySelectorAll('.box.placed');
  placedBoxes.forEach((box) => showValid(box));
};

const removeHoverEffect = () => {
  revertPlacedBoxes();
  const boxes = document.querySelectorAll('.box:not(.filler, .placed)');
  boxes.forEach((box) => (box.style.backgroundColor = defaultColor));
};

const getDirection = () => {
  if (document.querySelector('dialog.rotate .selected') === null) {
    return 'horizontal';
  }

  const classes = document.querySelector('dialog.rotate .selected').classList;

  if (classes.contains('horizontal')) {
    return 'horizontal';
  } else {
    return 'vertical';
  }
};

const showHorizontalBoxes = (box) => {
  const col = box.dataset.col;
  const length = document.querySelector('.piece.active').dataset.length;
  const colMax = Number(col) + Number(length);
  const boxes = getSelectedHorizontalBoxes(box);

  if (boxes.length < colMax - Number(col)) {
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

const showVerticalBoxes = (box) => {
  const row = box.dataset.row;
  const length = document.querySelector('.piece.active').dataset.length;
  const rowMax = Number(row) + Number(length);
  const boxes = getSelectedVerticalBoxes(box);

  if (boxes.length < rowMax - Number(row)) {
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

const changeOnHover = (box) => {
  revertPlacedBoxes();
  const direction = getDirection();

  if (direction === 'horizontal') {
    showHorizontalBoxes(box);
  } else {
    showVerticalBoxes(box);
  }
};

const displaySelectedBoxes = (box) => {
  const boxes = getSelectedHorizontalBoxes(box);
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

const setRotation = (direction) => {
  const selected = document.querySelector('.rotate .selected');

  if (selected.classList.contains(direction)) {
    return;
  }

  const notSelected = document.querySelector(
    'dialog.rotate button:not(.selected)'
  );
  selected.lastElementChild.remove();
  selected.classList.toggle('selected');
  notSelected.classList.toggle('selected');
  const checkImg = document.createElement('img');
  checkImg.src = checkInvertedIcon;
  checkImg.alt = 'This option is selected';
  notSelected.appendChild(checkImg);
};

const showRotationOptions = () => {
  if (document.querySelector('dialog.rotate') !== null) {
    const modal = document.querySelector('dialog.rotate');
    modal.showModal();

    return;
  }

  const checkImg = document.createElement('img');
  checkImg.src = checkInvertedIcon;
  checkImg.alt = 'This option is selected';
  const horizontal = document.createElement('button');
  horizontal.type = 'button';
  horizontal.classList.add('horizontal', 'selected');
  horizontal.textContent = 'Horizontal';
  horizontal.appendChild(checkImg);
  const vertical = document.createElement('button');
  vertical.type = 'button';
  vertical.classList.add('vertical');
  vertical.textContent = 'Vertical';
  const form = document.createElement('form');
  form.action = '';
  form.method = 'dialog';
  form.appendChild(horizontal);
  form.appendChild(vertical);
  const message = document.createElement('p');
  message.textContent = 'Select an option to rotate your ship';
  const dialog = document.createElement('dialog');
  dialog.classList.add('rotate');
  dialog.appendChild(message);
  dialog.appendChild(form);
  const footer = document.querySelector('footer');
  footer.insertAdjacentElement('beforebegin', dialog);
  dialog.showModal();
};

const showConfirmReset = () => {
  const yes = document.createElement('button');
  yes.type = 'submit';
  yes.classList.add('yes');
  yes.textContent = 'Yes';
  const no = document.createElement('button');
  no.type = 'button';
  no.classList.add('no');
  no.textContent = 'No';
  const form = document.createElement('form');
  form.action = '';
  form.method = 'dialog';
  form.appendChild(yes);
  form.appendChild(no);
  const message = document.createElement('p');
  message.textContent = 'Are you sure you want to reset the board?';
  const dialog = document.createElement('dialog');
  dialog.classList.add('reset');
  dialog.appendChild(message);
  dialog.appendChild(form);
  const footer = document.querySelector('footer');
  footer.insertAdjacentElement('beforebegin', dialog);
  dialog.showModal();
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
  setRotation,
  showRotationOptions,
  showConfirmReset,
  showGameOver,
};
