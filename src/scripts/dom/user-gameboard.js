import { getColNum } from '../logic/helper-functions';

const userGameboard = () => {
  const update = (state, coords) => {
    const [row, letter] = coords;
    const col = getColNum(letter);
    const box = document.querySelector(
      `.user .box[data-row='${row}'][data-col='${col}']`
    );

    if (state[row - 1][col - 1] === 'miss' && box.childElementCount === 0) {
      const marker = document.createElement('div');
      marker.classList.add('miss', 'marker');
      box.appendChild(marker);
    } else {
      const marker = box.querySelector('.marker');
      marker.classList.toggle('ship');
      marker.classList.toggle('hit');
    }
  };

  return {
    update,
  };
};

export default userGameboard;
