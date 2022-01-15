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

const grid1 = document.

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
  const gameBoard = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];

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

// document.querySelector("div").textContent = `${gameBoard.board}`;

const board = document.querySelector(".board");

board.addEventListener("click", function (e) {});

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
