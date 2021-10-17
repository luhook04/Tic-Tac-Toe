// player factory function
const playerFactory = (userSign) => {
  return userSign;
};

// gameboard object
const gameBoard = (() => {
  let board = [ '', '', '', '', '', '', '', '', '' ];

  // cache dom
  const squares = document.querySelectorAll('td');

  // bind events
  squares.forEach((square) => {
    square.addEventListener('click', updateBoard);
  });

  render();
  // add functions
  function render() {
    squares.forEach((square) => {
      square.textContent = board[square.id];
    });
  }

  function updateBoard(e) {
    console.log(this);
    if (board[e.target.id] === '') {
      board[e.target.id] = gameplay.activePlayer;
    }
    else {
      return;
    }
    render();
    gameplay.changePlayerTurn();
  }

  return { board, squares };
})();

// gameplay object
const gameplay = (() => {
  const player1 = playerFactory('X');
  const player2 = playerFactory('O');

  let activePlayer = player1;
  let isWinner = false;
  let remainingMoves = 9;

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

  function changePlayerTurn() {
    if (this.activePlayer == player1) {
      this.activePlayer = player2;
      console.log(this.activePlayer);
    }
    else if (this.activePlayer == player2) {
      this.activePlayer = player1;
      console.log(this.activePlayer);
    }
  }

  return { activePlayer, changePlayerTurn };
})();
