import rotateModal from '../dom/rotate-modal';

const emitRotateModalEvents = () => {
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('horizontal')
    ) {
      rotateModal.setRotation('horizontal');
      const modal = document.querySelector('dialog.rotate');
      modal.close();
    }

    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('vertical')
    ) {
      rotateModal.setRotation('vertical');
      const modal = document.querySelector('dialog.rotate');
      modal.close();
    }
  });
};

export default emitRotateModalEvents;
