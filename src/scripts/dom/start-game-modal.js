const showStartGame = () => {
  if (document.querySelector('dialog.start-game') !== null) {
    const modal = document.querySelector('dialog.start-game');
    modal.showModal();

    return;
  }

  const start = document.createElement('button');
  start.type = 'submit';
  start.classList.add('start');
  start.textContent = 'Start';
  const cancel = document.createElement('button');
  cancel.type = 'button';
  cancel.classList.add('cancel');
  cancel.textContent = 'Cancel';
  const form = document.createElement('form');
  form.action = '';
  form.method = 'dialog';
  form.appendChild(start);
  form.appendChild(cancel);
  const message = document.createElement('p');
  message.textContent = 'Are you ready to start the game?';
  const dialog = document.createElement('dialog');
  dialog.classList.add('start-game');
  dialog.appendChild(message);
  dialog.appendChild(form);
  const footer = document.querySelector('footer');
  footer.insertAdjacentElement('beforebegin', dialog);
  dialog.showModal();
};

const isReady = () => {
  const pieces = document.querySelectorAll('.piece');
  return Array.from(pieces).every((piece) => piece.childElementCount > 1);
};

const showInvalid = () => {
  const message = document.querySelector('dialog.start-game p');
  message.textContent = 'Please place all of yours ships.';
  const buttons = document.querySelectorAll('dialog.start-game button');
  buttons.forEach((button) => button.remove());
  const back = document.createElement('button');
  back.type = 'button';
  back.classList.add('back');
  back.textContent = 'Back';
  const form = document.querySelector('dialog.start-game form');
  form.appendChild(back);
};

const resetStartGameModal = () => {
  const message = document.querySelector('dialog.start-game p');
  message.textContent = 'Are you ready to start the game?';
  const back = document.querySelector('dialog.start-game .back');
  back.remove();
  const start = document.createElement('button');
  start.type = 'submit';
  start.classList.add('start');
  start.textContent = 'Start';
  const cancel = document.createElement('button');
  cancel.type = 'button';
  cancel.classList.add('cancel');
  cancel.textContent = 'Cancel';
  const form = document.querySelector('dialog.start-game form');
  form.appendChild(start);
  form.appendChild(cancel);
};

export { showStartGame, isReady, showInvalid, resetStartGameModal };
