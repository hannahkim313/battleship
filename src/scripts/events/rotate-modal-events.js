import { setRotation } from '../modules/dom';

const emitRotateModalEvents = () => {
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('horizontal')
    ) {
      setRotation('horizontal');
      const modal = document.querySelector('dialog.rotate');
      modal.close();
    }

    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('vertical')
    ) {
      setRotation('vertical');
      const modal = document.querySelector('dialog.rotate');
      modal.close();
    }
  });
};

export default emitRotateModalEvents;
