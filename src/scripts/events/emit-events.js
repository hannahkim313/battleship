import emitGameboardEvents from './gameboard-events';

const emitEvents = () => {
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('box')
    ) {
      emitGameboardEvents(e);
    }
  });
};

export default emitEvents;
