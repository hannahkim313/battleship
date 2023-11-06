import emitGameboardEvents from './gameboard-events';
import emitModalEvents from './modal-events';

const emitEvents = () => {
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('box')
    ) {
      emitGameboardEvents(e);
    }

    if (
      e.target.closest('dialog') &&
      e.target.closest('dialog').classList.contains('game-over')
    ) {
      emitModalEvents(e);
    }
  });
};

export default emitEvents;
