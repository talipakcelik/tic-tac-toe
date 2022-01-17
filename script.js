"use strict";

// DOM
// const grid1 = document.querySelector(".item-1");
// const grid2 = document.querySelector(".item-2");
// const grid3 = document.querySelector(".item-3");
// const grid4 = document.querySelector(".item-4");
// const grid5 = document.querySelector(".item-5");
// const grid6 = document.querySelector(".item-6");
// const grid7 = document.querySelector(".item-7");
// const grid8 = document.querySelector(".item-8");
// const grid9 = document.querySelector(".item-9");
// const grid = document.querySelectorAll(".grid");

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
    startGame();
  };

  let storeBoard = [null, null, null, null, null, null, null, null, null];

  const board = document.querySelector(".board");

  const displayController = function (e) {
    const index = e.target.getAttribute("id");
    if (e.target.textContent !== "X" && e.target.textContent !== "O") {
      storeBoard[index] = activePlayer.mark;
      e.target.textContent = activePlayer.mark;
      checkWin3();
      switchPlayer();
    }
  };
  const startGame = function () {
    board.addEventListener("click", displayController);
  };

  const checkWin2 = function (indexes, mark, e) {
    let checkStoreBoard = [
      storeBoard[indexes[0]],
      storeBoard[indexes[1]],
      storeBoard[indexes[2]],
    ];
    let result = checkStoreBoard.every((index) => index === mark);
    if (result === true) {
      console.log(`${activePlayer.name} is won`);
      board.removeEventListener("click", displayController);
    }
  };

  const checkWin3 = function () {
    checkWin2([0, 1, 2], activePlayer.mark);
    checkWin2([3, 4, 5], activePlayer.mark);
    checkWin2([6, 7, 8], activePlayer.mark);
    checkWin2([2, 4, 6], activePlayer.mark);
    checkWin2([0, 4, 8], activePlayer.mark);
    checkWin2([0, 3, 6], activePlayer.mark);
    checkWin2([1, 4, 7], activePlayer.mark);
    checkWin2([2, 5, 8], activePlayer.mark);
  };

  return {
    displayController,
    refresh,
    storeBoard,
    checkWin2,
    checkWin3,
    startGame,
  };
})();

function init() {
  Tttgame.displayController();
}
