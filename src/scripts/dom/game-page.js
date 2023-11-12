const renderUserGameboard = (state) => {
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

export { renderUserGameboard, changeActivePlayer, showGameOver };
