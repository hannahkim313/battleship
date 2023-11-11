import Player from './player';
import Gameboard from './gameboard';
import gamePage from '../dom/game-page';
import opponentGameboard from '../dom/opponent-gameboard';
import userGameboard from '../dom/user-gameboard';

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
gamePage.renderUserGameboard(userGameboard.getState());
const user = Player();
const computer = Player();

const storeInput = (ship, coords) => userGameboard.placeShip(ship, coords);

const playRound = (coords) => {
  const userAttack = user.attack(computerGameboard, coords);

  if (userAttack !== null) {
    opponentGameboard.update(computerGameboard.getState(), coords);
    gamePage.changeActivePlayer();

    if (computerGameboard.isAllSunk()) {
      gamePage.showGameOver('user');

      return;
    }

    opponentGameboard.disable();

    setTimeout(() => {
      computer.attack(userGameboard);
      userGameboard.update(userGameboard.getState(), computer.getLastMove());
      changeActivePlayer();
    }, 2000);

    setTimeout(() => {
      if (userGameboard.isAllSunk()) {
        gamePage.showGameOver('opponent');

        return;
      }

      opponentGameboard.enable();
    }, 2000);
  }
};

export { storeInput, playRound };
