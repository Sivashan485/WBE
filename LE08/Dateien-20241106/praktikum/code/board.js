function updateBoard() {
  const board = document.querySelector('.board');
  const fields = board.querySelectorAll('.field');
  let index = 0;

  for(let i = 0; i < ROWS; i++){
    for(let j = 0; j < COLS; j++){
      const piece = fields[index].querySelector('.piece');
      if(state[i][j] === 'r'){
        piece.className = RED_PIECE;
      } else if(state[i][j] === 'b'){
        piece.className = BLUE_PIECE;
      } else {
        piece.className = PIECE;
      }
      index++;
    }
  }
}

function updateRandomField() {
  updateState();
  updateBoard();
}

function startTimer() {
  setInterval(updateRandomField, 1000);
}

function showBoard() {
  createBoard();
  startTimer();
}


