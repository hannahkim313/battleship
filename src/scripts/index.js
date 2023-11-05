import '../css/reset.css';
import '../css/style.css';
import emitEvents from './events/emit-events';
import { initializeGame } from './modules/game';

initializeGame();
emitEvents();
