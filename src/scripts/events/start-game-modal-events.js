import { startGame } from '../logic/game';
import {
  isReady,
  showInvalid,
  resetStartGameModal,
} from '../dom/start-game-modal';

const emitStartGameModalEvents = () => {
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {
    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('start')
    ) {
      if (isReady()) {
        startGame();
      } else {
        showInvalid();
      }
    }

    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('back')
    ) {
      const modal = e.target.closest('dialog');
      modal.close();
      resetStartGameModal();
    }

    if (
      e.target.closest('button') &&
      e.target.closest('button').classList.contains('cancel')
    ) {
      const modal = e.target.closest('dialog');
      modal.close();
    }
  });
};

export default emitStartGameModalEvents;
