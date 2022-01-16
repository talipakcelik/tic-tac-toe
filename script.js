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

// const playerCreator = function (mark, active = false) {
//   const players = {};
//   players.mark = mark;
//   players.active = active;
//   players.toggle = function () {
//     if (this.active === true) {
//       this.active = false;
//     } else {
//       this.active === true;
//     }
//   };
//   return players;
// };

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
  const gameBoard = ["X", "0", "X", "0", "X", "0", "X", "0", "X"];

  let players = [
    playerCreator("Gandalf", "X", true),
    playerCreator("Sauron", "O", false),
  ];

  let activePlayer = players[0].name;

  const switchPlayer = function () {
    if (activePlayer === players[0].name) activePlayer = players[1].name;
    else activePlayer = players[0].name;
    console.log(activePlayer);
  };

  const displayController = function {
    board.addEventListener("click", function() {
      e.target.textContent = activePlayer.mark // burayı activePlayer.mark player yapabilmek için players[0]'dan sonra name kalktı. 
    })
  }

  const draw = function () {
    let n = 0;
    Gameboard.gameBoard.forEach(() => {
      document.getElementById(`${n}`).textContent = Gameboard.gameBoard[n];
      n++;
    });
  };
  // console.log(players[1]);
  // const player1 = playerCreator("X", true);
  // const player2 = playerCreator("O", false);

  // function resetBoard() {
  //   gameBoard.gameboard = ["", "", "", "", "", "", "", "", ""];
  // }

  return { players, switchPlayer, activePlayer };
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
const items2 = [];

// board.addEventListener("click", function (e) {
//   if (e.target.textContent !== "X" && e.target.textContent !== "O") {
//     e.target.textContent = Gameboard.gameBoard[0];
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
