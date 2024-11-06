 function createPiece() {
    const piece = document.createElement('div');
    piece.className = 'piece';
    return piece;
  }
  
   function createField() {
    const field = document.createElement('div');
    field.className = 'field';
    field.appendChild(createPiece());
    
    return field;
  }
  
   function createBoard(){
    const board = document.querySelector('.board');
  
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        board.appendChild(createField());
      }
    }
  }


