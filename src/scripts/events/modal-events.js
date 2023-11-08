const emitModalEvents = () => {
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('submit')
    ) {
      location.reload();
    }
  });
};

export default emitModalEvents;
