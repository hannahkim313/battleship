import { setRotation } from '../modules/dom';

const emitRotateModalEvents = () => {
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('horizontal')
    ) {
      setRotation('horizontal');
      // Close modal
      const modal = document.querySelector('dialog.rotate');
      modal.close();
      // Display horizontal ships when hovering over gameboard
    }

    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('vertical')
    ) {
      setRotation('vertical');
      // Close modal
      const modal = document.querySelector('dialog.rotate');
      modal.close();
      // Display vertical ships when hovering over gameboard
    }
  });
};

export default emitRotateModalEvents;
