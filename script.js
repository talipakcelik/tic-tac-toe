"use strict";

const playerCreator = function (name, mark, active) {
  let state = {};
  (state.name = name), (state.mark = mark), (state.active = active);

  return {
    get name() {
      return state.name;
    },
    get mark() {
      return state.mark;
    },
    get isActive() {
      return state.active;
    },
    toggle() {
      state.active = !state.active;
    },
  };
};

const Tttgame = (function () {
  const gameBoard = ["", "", "", "", "", "", "", "", ""];

  let players = [
    playerCreator("Gandalf", "X", true),
    playerCreator("Sauron", "O", false),
  ];

  let activePlayer = players[0];

  const switchPlayer = function () {
    if (activePlayer === players[0]) activePlayer = players[1];
    else activePlayer = players[0];
  };

  const refresh = function () {
    let n = 0;
    gameBoard.forEach(() => {
      document.getElementById(`${n}`).textContent = gameBoard[n];
      storeBoard[n] = gameBoard[n];
      n++;
    });
    activePlayer = players[0];
    startGame();
  };

  let storeBoard = [null, null, null, null, null, null, null, null, null];

  const board = document.querySelector(".board");

  const displayController = function (e) {
    const index = e.target.getAttribute("id");
    if (e.target.textContent !== "X" && e.target.textContent !== "O") {
      storeBoard[index] = activePlayer.mark;
      e.target.textContent = activePlayer.mark;
      checkDraw();
      if (checkWin(activePlayer.mark) !== false) {
        console.log(`${activePlayer.name} is won`);
        board.removeEventListener("click", displayController);
      }
      switchPlayer();
    }
  };

  const startGame = function () {
    board.addEventListener("click", displayController);
  };

  const checkDraw = function () {
    let draw = storeBoard.every((index) => index === "X" || index === "O");
    if (draw === true && checkWin(activePlayer.mark) === false)
      console.log("draw");
  };

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  const checkWin = function (mark) {
    return (
      winConditions.find((winCondition) =>
        winCondition.every((element) => storeBoard[element] === mark)
      ) || false
    );
  };

  return {
    refresh,
    startGame,
  };
})();

function init() {
  Tttgame.startGame();
}
