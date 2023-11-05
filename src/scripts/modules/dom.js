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
    marker.classList.add('ship', 'marker');
    box.appendChild(marker);
  }
};

export { renderGameboard, changeActivePlayer, updateOpponentGameboard };
