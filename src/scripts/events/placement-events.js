import { highlightBoxes, resetBoxes, toggleActivePiece } from '../modules/dom';

const emitClickEvents = (e) => {
  const selectedPiece = e.target.closest('button');
  toggleActivePiece(selectedPiece);
};

const emitMouseoverEvents = (e) => {
  resetBoxes();
  const box = e.target.closest('button');
  highlightBoxes(box);
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
