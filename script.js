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
  const draw = function () {
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
      console.log(index);
      if (e.target.textContent !== "X" && e.target.textContent !== "O") {
        console.log("dede");
        storeBoard[index] = activePlayer.mark;
        e.target.textContent = activePlayer.mark;
        checkWin();
        switchPlayer();
      }
    });
  };

  const checkWin = function () {
    if (
      activePlayer.mark === storeBoard[0] &&
      activePlayer.mark === storeBoard[1] &&
      activePlayer.mark === storeBoard[2]
    ) {
      console.log(`${activePlayer.name} is won`);
    }
  };

  return {
    storeBoard,
    players,
    switchPlayer,
    activePlayer,
    displayController,
    draw,
    checkWin,
  };
})();
