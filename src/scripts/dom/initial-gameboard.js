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

const showPlacedBoxes = () => {
  const placedBoxes = document.querySelectorAll('.box.placed');
  placedBoxes.forEach((box) => showValid(box));
};

const changeOnHover = (box) => {
  showPlacedBoxes();
  const direction = getDirection();

  if (direction === 'horizontal') {
    showHorizontalBoxes(box);
  } else {
    showVerticalBoxes(box);
  }
};

const defaultColor = 'var(--color-brand-1b)';

const removeHoverEffect = () => {
  showPlacedBoxes();
  const boxes = document.querySelectorAll('.box:not(.filler, .placed)');
  boxes.forEach((box) => (box.style.backgroundColor = defaultColor));
};

const showSelectedBoxes = (box, isVertical) => {
  if (isVertical) {
    const boxes = getSelectedVerticalBoxes(box);
    boxes.forEach((box) => box.classList.toggle('placed'));
  } else {
    const boxes = getSelectedHorizontalBoxes(box);
    boxes.forEach((box) => box.classList.toggle('placed'));
  }
};

const disable = () => {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => box.setAttribute('disabled', ''));
};

export {
  getDirection,
  changeOnHover,
  removeHoverEffect,
  showSelectedBoxes,
  disable,
};
