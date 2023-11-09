import { toggleSelectedRotation } from '../modules/dom';

const emitRotateModalEvents = () => {
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('horizontal')
    ) {
      toggleSelectedRotation();
      // Close modal
      // Display horizontal ships when hovering over gameboard
    }

    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('vertical')
    ) {
      toggleSelectedRotation();
      // Close modal
      // Display vertical ships when hovering over gameboard
    }
  });
};

export default emitRotateModalEvents;
