import Player from './player';
import Gameboard from './gameboard';
import {
  renderUserGameboard,
  changeActivePlayer,
  showGameOver,
} from '../dom/game-page';
import {
  updateUserGameboard,
  updateOpponentGameboard,
  disableOpponentGameboard,
  enableOpponentGameboard,
} from '../dom/gameboards';

const userGameboard = Gameboard();
// To-do: Implement a function that generates random coordinates for the
// computer to place their ships.
// const computerCarrier = Ship(5);
// const computerBattleship = Ship(4);
// const computerCruiser = Ship(3);
// const computerSubmarine = Ship(3);
// const computerDestroyer = Ship(2);
// const computerGameboard = Gameboard();
// computerGameboard.placeShip(computerCarrier, ['6', 'a']);
// computerGameboard.placeShip(computerBattleship, ['3', 'c']);
// computerGameboard.placeShip(computerCruiser, ['8', 'h']);
// computerGameboard.placeShip(computerSubmarine, ['1', 'e']);
// computerGameboard.placeShip(computerDestroyer, ['4', 'i']);
renderUserGameboard(userGameboard.getState());
const user = Player();
const computer = Player();

const storeInput = (ship, coords) => userGameboard.placeShip(ship, coords);

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

export { storeInput, playRound };
