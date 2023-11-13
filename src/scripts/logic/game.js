import Player from './player';
import Gameboard from './gameboard';
import {
  renderUserGameboard,
  changeActivePlayer,
  showGameOver,
  showGamePage,
} from '../dom/game-page';
import {
  updateUserGameboard,
  updateOpponentGameboard,
  disableOpponentGameboard,
  enableOpponentGameboard,
} from '../dom/gameboards';
import { hideInitialGameboard } from '../dom/initial-gameboard';

const user = Player();
const computer = Player();
const userGameboard = Gameboard();
const computerGameboard = Gameboard();

const startGame = () => {
  hideInitialGameboard();
  showGamePage();
  renderUserGameboard(userGameboard.getState());
  computerGameboard.placeRandom();
};

const storeInput = (ship, coords, isVertical) => {
  return userGameboard.placeShip(ship, coords, isVertical);
};

const playRound = (coords) => {
  const userAttack = user.attack(computerGameboard, coords);

  if (userAttack !== null) {
    updateOpponentGameboard(computerGameboard.getState(), coords);
    changeActivePlayer();

    if (computerGameboard.isAllSunk()) {
      showGameOver('user');

      return;
    }

    disableOpponentGameboard();

    setTimeout(() => {
      computer.attack(userGameboard);
      updateUserGameboard(userGameboard.getState(), computer.getLastMove());
      changeActivePlayer();
    }, 2000);

    setTimeout(() => {
      if (userGameboard.isAllSunk()) {
        showGameOver('opponent');

        return;
      }

      enableOpponentGameboard();
    }, 2000);
  }
};

export { startGame, storeInput, playRound };
