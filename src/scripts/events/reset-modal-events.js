const emitResetModalEvents = () => {
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('yes')
    ) {
      location.reload();
    }

    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('no')
    ) {
      const modal = e.target.closest('dialog');
      modal.close();
    }
  });
};

export default emitResetModalEvents;
