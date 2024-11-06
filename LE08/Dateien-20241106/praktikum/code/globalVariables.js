//Game board rows
const ROWS = 6;
const COLS = 7;
const EMPTY = '';
const BLUE = 'b';
const RED = 'r';
//Game board pieces
const RED_PIECE = 'piece red';
const BLUE_PIECE = 'piece blue';
const PIECE = 'piece';
const FIELD = 'field';

//Game board state
let state = Array(6).fill('').map(el => Array(7).fill(''));

let isbluesTurn = true;
