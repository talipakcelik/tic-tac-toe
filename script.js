"use strict";

/// DOM

// const grid1 = document.getElementById("1").getAttribute("id");
// const grid2 = document.getElementById("2").getAttribute("id");
// const grid3 = document.getElementById("3").getAttribute("id");
// const grid4 = document.getElementById("4").getAttribute("id");
// const grid5 = document.getElementById("5").getAttribute("id");
// const grid6 = document.getElementById("6").getAttribute("id");
// const grid7 = document.getElementById("7").getAttribute("id");
// const grid8 = document.getElementById("8").getAttribute("id");
// const grid9 = document.getElementById("9").getAttribute("id");

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

// const gameBoard = {
//   gameBoard: ["x", "o", "x", "o", "x", "o"],
// };

// game state data //

const player1 = {};
const player2 = {};

const gameFlow = {};

const playerCreator = function (name, mark) {
  const player = {};
  player.name = name;
  player.mark = mark;

  return player;
};

const Gameboard = (function () {
  const gameBoard = ["", "", "", "", "", "", "", "", ""];

  const player1 = playerCreator("Gandalf", "X");
  const player2 = playerCreator("Sauron", "O");

  return { gameBoard, player1, player2 };
})();

let activePlayer = "X";

// const items = [
//   [`${grid1}`, `${grid2}`, `${grid3}`],
//   [`${grid4}`, `${grid5}`, `${grid6}`],
//   [`${grid7}`, `${grid8}`, `${grid9}`],
// ];
const items = [
  [``, ``, ``],
  [``, ``, ``],
  [``, ``, ``],
];

const items2 = [];

// document.querySelector("div").textContent = `${gameBoard.board}`;

const board = document.querySelector(".board");

const loopGameBoard = function (e) {
  for (const x of Gameboard.gameBoard) {
    e.target.textContent = x;
  }
};

const draw = function () {
  let n = 0;
  Gameboard.gameBoard.forEach(() => {
    document.getElementById(`${n}`).textContent = Gameboard.gameBoard[n];
    n++;
  });
};

// function draw() {
//   let n = 0;
//   boardState.forEach(() => {
//     document.getElementById(`game-cell-${n + 1}`).textContent = boardState[n];
//     n++;
//   });
// }

// board.addEventListener("click", function (e) {
//   for (const mark of Gameboard.gameBoard) {
//     console.log(mark);
//     e.target.textContent = mark
//   }
//   items2[`${e.target.getAttribute("id")}`] = e.target.textContent;
// });

// board.addEventListener("click", function (e) {
//   e.target.textContent = `${gameBoard.board[0]}`;
// });

// factory function

function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };
  return newUser;
}

const user1 = userCreator("Will", 2);
const user2 = userCreator("Tim", 5);
user1.increment();

// The Module Pattern
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart("apple", 4);
ShoppingCart2.addToCart("pizza", 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
