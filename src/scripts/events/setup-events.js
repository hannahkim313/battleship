import Ship from '../modules/ship';
import { storeInput } from '../modules/game';
import { getColLetter } from '../modules/helper-functions';
import {
  changeOnHover,
  disableInitialGameboard,
  displaySelectedBoxes,
  resetBoxes,
  updatePieces,
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
        resetBoxes();
        const box = e.target.closest('button');
        changeOnHover(box);
      } else {
        disableInitialGameboard();
      }
    }
  });

  gameboard.addEventListener('mouseout', () => resetBoxes());
};

export default emitSetupEvents;
