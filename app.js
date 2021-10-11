// player factory function
const playerFactory = (userSign) => {
  return userSign;
};

// gameboard object
const gameBoard = {
  board      : [ '', '', '', '', '', '', '', '', '' ],
  render     : function() {},
  getDomEls  : function() {
    const squares = document.querySelectorAll('td');
  },
  bindEvents : function() {}
};

// gameplay object
const gameplay = (() => {
  const player1 = playerFactory('X');
  const player2 = playerFactory('O');

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
