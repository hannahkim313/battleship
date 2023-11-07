import { toggleActivePiece } from '../modules/dom';

const emitClickEvents = (e) => {
  const selectedPiece = e.target.closest('button');
  toggleActivePiece(selectedPiece);
};

const events = {
  click: emitClickEvents,
};

const emitPlacementEvents = (e) => events[e.type](e);

export default emitPlacementEvents;
