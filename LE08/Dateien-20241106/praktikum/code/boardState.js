
function updateState(){
    const i = Math.floor(Math.random() * ROWS);
    const j = Math.floor(Math.random() * COLS);
    
    if(state[i][j] === EMPTY){
      if (isbluesTurn) {
        state[i][j] = RED;
        switchPlayerTurn();
      } else {
        state[i][j] = BLUE;
        switchPlayerTurn();
      }
    } else if(checkBoardState()){
      //TODO:UPSI create infinite loop
      updateState();
    }
  }

  function checkBoardState(){
    let boardIsFull = true;
    for(let i = 0 ; i<ROWS; i++){
        for(let j = 0; j<COLS; j++){
            if(state[i][j] === EMPTY){
                boardIsFull = false;
            }else{
                boardIsFull = true;
            }
        }
    }
    return boardIsFull;
  }

  function switchPlayerTurn(){
    isbluesTurn = !isbluesTurn;
  }