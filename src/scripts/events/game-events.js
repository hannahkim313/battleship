import { playRound } from '../modules/game';
import { getColLetter } from '../modules/helper-functions';

const emitGameEvents = () => {
  const main = document.querySelector('main');

  main.addEventListener('click', (e) => {
    if (
      e.target.closest('article') &&
      e.target.closest('article').classList.contains('opponent')
    ) {
      const row = e.target.closest('button').dataset.row;
      const colNum = e.target.closest('button').dataset.col;
      const col = getColLetter(colNum);
      playRound([row, col]);
    }
  });
};

export default emitGameEvents;
