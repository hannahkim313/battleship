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

export { showStartGame };
