import Ship from '../logic/ship';
import { storeInput } from '../logic/game';
import { getColLetter } from '../logic/helper-functions';
import { toggleActivePiece, updatePieces } from '../dom/pieces';
import {
  getDirection,
  changeOnHover,
  removeHoverEffect,
  showSelectedBoxes,
  disableInitialGameboard,
} from '../dom/initial-gameboard';
import { showRotateModal } from '../dom/rotate-modal';
import { showResetModal } from '../dom/reset-modal';
import { showStartGame } from '../dom/start-game-modal';

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
      showRotateModal();
    }

    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('reset')
    ) {
      showResetModal();
    }

    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('start-game')
    ) {
      showStartGame();
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
      const isVertical = getDirection() === 'vertical';

      if (storeInput(Ship(length), coords, isVertical) === null) {
        return;
      }

      showSelectedBoxes(box, isVertical);
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
