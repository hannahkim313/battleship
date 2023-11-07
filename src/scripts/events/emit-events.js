import emitGameEvents from './game-events';
import emitModalEvents from './modal-events';
import emitPlacementEvents from './placement-events';

const emitEvents = () => {
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('piece')
    ) {
      emitPlacementEvents(e);
    }

    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('box')
    ) {
      emitGameEvents(e);
    }

    if (
      e.target.closest('dialog') &&
      e.target.closest('dialog').classList.contains('game-over')
    ) {
      emitModalEvents(e);
    }
  });

  const board = document.querySelector('.board');

  board.addEventListener('mouseover', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('box') &&
      !e.target.closest('button').classList.contains('filler')
    ) {
      emitPlacementEvents(e);
    }
  });
};

export default emitEvents;
