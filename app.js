// player factory function
const playerFactory = (userSign) => {
  return userSign;
};

// gameboard object
const gameBoard = (() => {
  let board = [ '', '', '', '', '', '', '', '', '' ];

  // cache dom
  const resetBtn = document.querySelector('#reset');
  const squares = document.querySelectorAll('td');
  // bind events
  squares.forEach((square) => {
    square.addEventListener('click', updateBoard);
  });

  function render() {
    squares.forEach((square) => {
      square.textContent = gameBoard.board[square.id];
      console.log(board);
      console.log(gameBoard.board);
    });
  }

  function updateBoard(e) {
    if (
      gameBoard.board[e.target.id] === '' &&
      gameplay.isWinner === false
    ) {
      gameBoard.board[e.target.id] = gameplay.activePlayer;
    }
    else {
      return;
    }
    render();
    gameplay.checkWinner();
    gameplay.changePlayerTurn();
    gameplay.checkTie();
  }

  return { board, render, resetBtn };
})();

// gameplay object
const gameplay = (() => {
  const player1 = playerFactory('X');
  const player2 = playerFactory('O');

  const winDisplay = document.querySelector('#winDisplay');
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

  function checkWinner() {
    possibleWinArrays.forEach((array) => {
      if (
        gameBoard.board[array[0]] == this.activePlayer &&
        gameBoard.board[array[1]] == this.activePlayer &&
        gameBoard.board[array[2]] == this.activePlayer
      ) {
        this.isWinner = true;
        this.winDisplay.textContent = this.activePlayer + ' wins!';
      }
      else return;
    });
  }

  function checkTie() {
    if (this.remainingMoves == 0 && this.isWinner == false) {
      winDisplay.textContent = 'Tie Game!';
    }
    else return;
  }

  function changePlayerTurn() {
    if (this.activePlayer == player1) {
      this.activePlayer = player2;
      this.remainingMoves--;
    }
    else if (this.activePlayer == player2) {
      this.activePlayer = player1;
      this.remainingMoves--;
    }
  }

  function newGame() {
    gameplay.winDisplay.textContent = '';
    gameplay.isWinner = false;
    gameplay.activePlayer = 'X';
    gameplay.remainingMoves = 9;
    gameBoard.board = [ '', '', '', '', '', '', '', '', '' ];
    gameBoard.render();
  }

  gameBoard.resetBtn.addEventListener('click', newGame);

  return {
    activePlayer,
    changePlayerTurn,
    checkWinner,
    isWinner,
    remainingMoves,
    checkTie,
    newGame,
    winDisplay
  };
})();
