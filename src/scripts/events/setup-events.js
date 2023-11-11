import Ship from '../logic/ship';
import { storeInput } from '../logic/game';
import { getColLetter } from '../logic/helper-functions';
import pieces from '../dom/pieces';
import initialGameboard from '../dom/initial-gameboard';
import rotateModal from '../dom/rotate-modal';
import resetModal from '../dom/reset-modal';

const emitSetupEvents = () => {
  const shipPieces = document.querySelector('.pieces');

  shipPieces.addEventListener('click', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('piece')
    ) {
      const selectedPiece = e.target.closest('button');
      pieces.toggleActive(selectedPiece);
    }
  });

  const controls = document.querySelector('.controls');

  controls.addEventListener('click', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('rotate')
    ) {
      rotateModal.show();
    }

    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('reset')
    ) {
      resetModal.show();
    }

    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('start')
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

      // BUG: If rotation is set to 'vertical,' clicking on the gameboard
      // to place a ship places it horizontally, thus storing the incorrect
      // ship data to the game module.

      if (storeInput(Ship(length), coords) === null) {
        return;
      }

      initialGameboard.showSelectedBoxes(box);
      pieces.update();
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
        initialGameboard.removeHoverEffect();
        const box = e.target.closest('button');
        initialGameboard.changeOnHover(box);
      } else {
        initialGameboard.disable();
      }
    }
  });

  gameboard.addEventListener('mouseout', () => removeHoverEffect());
};

export default emitSetupEvents;
