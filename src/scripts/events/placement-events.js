import Ship from '../modules/ship';
import { storeInput } from '../modules/game';
import { getColLetter } from '../modules/helper-functions';
import {
  changeOnHover,
  displaySelectedBoxes,
  resetBoxes,
  toggleActivePiece,
  updatePieces,
} from '../modules/dom';

const emitClickEvents = (e) => {
  if (
    e.target.closest('button') &&
    e.target.closest('button').classList.contains('piece')
  ) {
    const selectedPiece = e.target.closest('button');
    toggleActivePiece(selectedPiece);
  }

  if (
    e.target.closest('button') &&
    e.target.closest('button').classList.contains('box') &&
    !e.target.closest('button').classList.contains('filler')
  ) {
    const selectedPiece = document.querySelector('.piece.active');
    const length = Number(selectedPiece.dataset.length);
    const box = e.target.closest('button');
    const coords = [box.dataset.row, getColLetter(box.dataset.col)];

    if (storeInput(Ship(length), coords) === null) {
      return;
    }

    displaySelectedBoxes(box);
    updatePieces();
  }
};

const emitMouseoverEvents = (e) => {
  resetBoxes();
  const box = e.target.closest('button');
  changeOnHover(box);
};

const emitMouseoutEvents = (e) => {
  resetBoxes();
};

const events = {
  click: emitClickEvents,
  mouseover: emitMouseoverEvents,
  mouseout: emitMouseoutEvents,
};

const emitPlacementEvents = (e) => events[e.type](e);

export default emitPlacementEvents;
