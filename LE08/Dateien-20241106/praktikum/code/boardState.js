let isbluesTurn = true;

function updateState(){
    const i = Math.floor(Math.random() * ROWS);
    const j = Math.floor(Math.random() * COLS);
    
    if(state[i][j] === ''){
      if (isbluesTurn) {
        state[i][j] = 'r';
        switchPlayerTurn();
      } else {
        state[i][j] = 'b';
        switchPlayerTurn();
      }
    } else {
      //TODO:UPSI create infinite loop
      updateState();
    }
  }

  function switchPlayerTurn(){
    isbluesTurn = !isbluesTurn;
  }