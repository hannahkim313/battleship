import Ship from '../modules/ship';
import { clearInputs, storeInput } from '../modules/game';
import { getColLetter } from '../modules/helper-functions';
import {
  changeOnHover,
  disableInitialGameboard,
  displaySelectedBoxes,
  resetAllBoxes,
  removeHoverEffect,
  updatePieces,
  toggleActivePiece,
  resetPieces,
} from '../modules/dom';

const emitSetupEvents = () => {
  const shipPieces = document.querySelector('.pieces');

  shipPieces.addEventListener('click', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('piece')
    ) {
      const selectedPiece = e.target.closest('button');
      toggleActivePiece(selectedPiece);
    }
  });

  const controls = document.querySelector('.controls');

  controls.addEventListener('click', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('rotate')
    ) {
      // do something
    }

    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('reset')
    ) {
      resetAllBoxes();
      resetPieces();
      clearInputs();
    }

    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('submit')
    ) {
      // do something
    }
  });

  const gameboard = document.querySelector('.board');

  gameboard.addEventListener('click', (e) => {
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
  });

  gameboard.addEventListener('mouseover', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('box') &&
      !e.target.closest('button').classList.contains('filler')
    ) {
      const piecesLeft = document.querySelectorAll('.piece:not(:disabled)');

      if (piecesLeft.length > 0) {
        removeHoverEffect();
        const box = e.target.closest('button');
        changeOnHover(box);
      } else {
        disableInitialGameboard();
      }
    }
  });

  gameboard.addEventListener('mouseout', () => removeHoverEffect());
};

export default emitSetupEvents;
