import checkInvertedIcon from '../../img/check-inverted.svg';

const rotateModal = () => {
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

  const show = () => {
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

  return {
    setRotation,
    show,
  };
};

export default rotateModal;
