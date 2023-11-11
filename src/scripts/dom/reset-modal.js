const resetModal = () => {
  const show = () => {
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

  return {
    show,
  };
};

export default resetModal;
