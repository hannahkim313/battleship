import emitSetupEvents from './setup-events';
import emitResetModalEvents from './reset-modal-events';
import emitGameEvents from './game-events';
import emitGameOverModalEvents from './game-over-modal-events';

const emitEvents = () => {
  emitSetupEvents();
  emitResetModalEvents();
  emitGameEvents();
  emitGameOverModalEvents();
};

export default emitEvents;
