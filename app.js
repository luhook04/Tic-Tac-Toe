// player factory function
const playerFactory = (userSign) => {
  return userSign;
};

// gameboard object
const gameBoard = {
  board       : [ '', '', '', '', '', '', '', '', '' ],
  init        : function() {
    this.getDomEls();
    this.bindEvents();
    this.render();
  },
  render      : function() {},
  getDomEls   : function() {
    this.squares = document.querySelectorAll('td');
  },
  bindEvents  : function() {
    this.squares.forEach((square) => {
      square.addEventListener('click', this.render.bind(this));
    });
  },
  updateBoard : function() {
    board[e.target.id] = game.activePlayer;
  }
  // Add a new method below
  // This method should be added to every square element
  // Takes board[e.target.id] and equals it to the active player mark
};

// gameplay object
const gameplay = (() => {
  const player1 = playerFactory('X');
  const player2 = playerFactory('O');

  let activePlayer = player1;

  const possibleWinArrays = [
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ],
    [ 0, 3, 6 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 0, 4, 8 ],
    [ 2, 4, 6 ]
  ];
})();
