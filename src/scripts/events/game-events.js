import { playRound } from '../modules/game';
import { getColLetter } from '../modules/helper-functions';

const emitClickEvents = (e) => {
  if (
    e.target.closest('article') &&
    e.target.closest('article').classList.contains('opponent')
  ) {
    const row = e.target.closest('button').dataset.row;
    const colNum = e.target.closest('button').dataset.col;
    const col = getColLetter(colNum);
    playRound([row, col]);
  }
};

const events = {
  click: emitClickEvents,
};

const emitGameEvents = (e) => events[e.type](e);

export default emitGameEvents;
