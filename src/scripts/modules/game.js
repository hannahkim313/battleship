import Player from './player';
import Gameboard from './gameboard';
import Ship from './ship';
import { renderGameboard } from './dom';

const startGame = () => {
  const user = Player();
  const userCarrier = Ship(5);
  const userBattleship = Ship(4);
  const userCruiser = Ship(3);
  const userSubmarine = Ship(3);
  const userDestroyer = Ship(2);
  const userGameboard = Gameboard();
  userGameboard.placeShip(userCarrier, ['1', 'a']);
  userGameboard.placeShip(userBattleship, ['2', 'd']);
  userGameboard.placeShip(userCruiser, ['7', 'h']);
  userGameboard.placeShip(userSubmarine, ['1', 'h']);
  userGameboard.placeShip(userDestroyer, ['9', 'c']);

  const computer = Player();
  const computerCarrier = Ship(5);
  const computerBattleship = Ship(4);
  const computerCruiser = Ship(3);
  const computerSubmarine = Ship(3);
  const computerDestroyer = Ship(2);
  const computerGameboard = Gameboard();
  computerGameboard.placeShip(computerCarrier, ['6', 'a']);
  computerGameboard.placeShip(computerBattleship, ['3', 'c']);
  computerGameboard.placeShip(computerCruiser, ['8', 'h']);
  computerGameboard.placeShip(computerSubmarine, ['1', 'e']);
  computerGameboard.placeShip(computerDestroyer, ['4', 'j']);

  renderGameboard(userGameboard.getState());
};

export default startGame;
