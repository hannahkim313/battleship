import emitGameEvents from './game-events';
import emitModalEvents from './modal-events';
import emitSetupEvents from './setup-events';

const emitEvents = () => {
  emitSetupEvents();
  emitGameEvents();
  emitModalEvents();
};

export default emitEvents;
