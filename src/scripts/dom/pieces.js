import checkIcon from '../../../img/check.svg';

const pieces = () => {
  const toggleActive = (selectedPiece) => {
    const activePiece = document.querySelector('.piece.active');
    activePiece.classList.toggle('active');
    selectedPiece.classList.toggle('active');
  };

  const update = () => {
    const checkImg = document.createElement('img');
    checkImg.src = checkIcon;
    checkImg.alt = 'Check mark to denote this ship was placed';
    checkImg.classList.add('check');
    const activePiece = document.querySelector('.piece.active');
    activePiece.appendChild(checkImg);
    activePiece.setAttribute('disabled', '');
    activePiece.classList.toggle('active');
    activePiece.firstElementChild.classList.toggle('placed');
    const piecesLeft = document.querySelectorAll('.piece:not(:disabled)');

    if (piecesLeft.length > 0) {
      piecesLeft[0].classList.toggle('active');
    }
  };

  return {
    toggleActive,
    update,
  };
};

export default pieces;
