import emitSetupEvents from './setup-events';
import emitRotateModalEvents from './rotate-modal-events';
import emitResetModalEvents from './reset-modal-events';
import emitStartGameModalEvents from './start-game-modal-events';
import emitGameEvents from './game-events';
import emitGameOverModalEvents from './game-over-modal-events';

const emitEvents = () => {
  emitSetupEvents();
  emitRotateModalEvents();
  emitResetModalEvents();
  emitStartGameModalEvents();
  emitGameEvents();
  emitGameOverModalEvents();
};

export default emitEvents;
