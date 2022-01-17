"use strict";

// DOM
const grid1 = document.querySelector(".item-1");
const grid2 = document.querySelector(".item-2");
const grid3 = document.querySelector(".item-3");
const grid4 = document.querySelector(".item-4");
const grid5 = document.querySelector(".item-5");
const grid6 = document.querySelector(".item-6");
const grid7 = document.querySelector(".item-7");
const grid8 = document.querySelector(".item-8");
const grid9 = document.querySelector(".item-9");
const grid = document.querySelectorAll(".grid");

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
    console.log(activePlayer);
  };

  const gameFlow = function () {};
  const refresh = function () {
    let n = 0;
    gameBoard.forEach(() => {
      document.getElementById(`${n}`).textContent = gameBoard[n];
      n++;
    });
  };

  let storeBoard = [];

  const displayController = function () {
    const board = document.querySelector(".board");
    board.addEventListener("click", function (e) {
      const index = e.target.getAttribute("id");
      if (e.target.textContent !== "X" && e.target.textContent !== "O") {
        storeBoard[index] = activePlayer.mark;
        e.target.textContent = activePlayer.mark;
        console.log(storeBoard.length);
        checkWin3();
        switchPlayer();
      }
    });
  };

  // let storeBoard2 = ["X", "O", "X"];

  const checkWin2 = function (indexes, mark) {
    // let i = 0;
    storeBoard.forEach(() => {
      if (
        storeBoard[indexes[0]] === mark &&
        storeBoard[indexes[1]] === mark &&
        storeBoard[indexes[2]] === mark
      )
        console.log(`${activePlayer.name} won`);
      // i++;
    });
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

  // const checkWin = function () {
  //   let isThereWin;
  //   if (
  //     activePlayer.mark === storeBoard[0] &&
  //     activePlayer.mark === storeBoard[1] &&
  //     activePlayer.mark === storeBoard[2]
  //   )
  //     console.log(`${activePlayer.name} is won`);
  //   else if (
  //     activePlayer.mark === storeBoard[3] &&
  //     activePlayer.mark === storeBoard[4] &&
  //     activePlayer.mark === storeBoard[5]
  //   )
  //     console.log(`${activePlayer.name} is won`);
  //   else if (
  //     activePlayer.mark === storeBoard[6] &&
  //     activePlayer.mark === storeBoard[7] &&
  //     activePlayer.mark === storeBoard[8]
  //   )
  //     console.log(`${activePlayer.name} is won`);
  //   else if (
  //     activePlayer.mark === storeBoard[2] &&
  //     activePlayer.mark === storeBoard[4] &&
  //     activePlayer.mark === storeBoard[6]
  //   )
  //     console.log(`${activePlayer.name} is won`);
  //   else if (
  //     activePlayer.mark === storeBoard[0] &&
  //     activePlayer.mark === storeBoard[4] &&
  //     activePlayer.mark === storeBoard[8]
  //   )
  //     console.log(`${activePlayer.name} is won`);
  //   else if (
  //     activePlayer.mark === storeBoard[0] &&
  //     activePlayer.mark === storeBoard[3] &&
  //     activePlayer.mark === storeBoard[6]
  //   )
  //     console.log(`${activePlayer.name} is won`);
  //   else if (
  //     activePlayer.mark === storeBoard[1] &&
  //     activePlayer.mark === storeBoard[4] &&
  //     activePlayer.mark === storeBoard[7]
  //   )
  //     console.log(`${activePlayer.name} is won`);
  //   else if (
  //     activePlayer.mark === storeBoard[2] &&
  //     activePlayer.mark === storeBoard[5] &&
  //     activePlayer.mark === storeBoard[8]
  //   )
  //     console.log(`${activePlayer.name} is won`);
  //   else if (
  //     (storeBoard[0] === "X" || storeBoard === "O") &&
  //     (storeBoard[1] === "X" || storeBoard === "O") &&
  //     (storeBoard[2] === "X" || storeBoard === "O") &&
  //     (storeBoard[3] === "X" || storeBoard === "O") &&
  //     (storeBoard[4] === "X" || storeBoard === "O") &&
  //     (storeBoard[5] === "X" || storeBoard === "O") &&
  //     (storeBoard[6] === "X" || storeBoard === "O") &&
  //     (storeBoard[7] === "X" || storeBoard === "O") &&
  //     (storeBoard[8] === "X" || storeBoard === "O")
  //   )
  //     console.log(`draw!`);
  // };

  return {
    displayController,
    refresh,
    storeBoard,
    checkWin2,
  };
})();

function init() {
  Tttgame.displayController();
}
