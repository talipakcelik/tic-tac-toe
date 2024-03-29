"use strict";

const playerCreator = function (name, mark, score, active) {
  const players = {};
  players.name = name;
  players.mark = mark;
  players.score = score;
  players.isActive = active;
  players.toggle = function () {
    players.isActive = !players.isActive;
  };

  return players;
};

const Tttgame = (function () {
  /// DOM Selector
  const board = document.querySelector(".board");
  const restartButton = document.querySelector(".restart");
  const startButton = document.querySelector(".start");
  const playerInput1 = document.querySelector("#player-1");
  const playerInput2 = document.querySelector("#player-2");
  const overlay = document.getElementById("overlay");
  const modal = document.querySelector(".modal");
  const modalHeader = document.querySelector(".modal-header");
  const score1 = document.querySelector(".score-1");
  const score2 = document.querySelector(".score-2");

  ///

  const gameBoard = ["", "", "", "", "", "", "", "", ""];

  let players = [
    playerCreator(
      "Player 1",
      '<ion-icon name="close-outline" class="icon-1"></ion-icon>',
      0,
      true
    ),
    playerCreator(
      "Player 2",
      '<ion-icon name="ellipse-outline" class="icon-2"></ion-icon>',
      0,
      false
    ),
  ];

  let activePlayer = players[0];

  const switchPlayer = function () {
    if (activePlayer === players[0]) activePlayer = players[1];
    else activePlayer = players[0];
  };

  /// restart
  const restart = function () {
    let n = 0;
    gameBoard.forEach(() => {
      document.getElementById(`${n}`).textContent = gameBoard[n];
      n++;
    });
    storeBoard.fill(null);
    activePlayer = players[0];
    startGame();
  };

  restartButton.addEventListener("click", restart);
  ///
  let score = [0, 0];

  let storeBoard = [null, null, null, null, null, null, null, null, null];

  const displayController = function (e) {
    const index = e.target.getAttribute("id");
    if (
      e.target.textContent !==
        '<ion-icon name="close-outline" class="icon-1"></ion-icon>' &&
      e.target.textContent !==
        '<ion-icon name="ellipse-outline" class="icon-2"></ion-icon>'
    ) {
      storeBoard[index] = activePlayer.mark;
      e.target.innerHTML = activePlayer.mark;
      if (checkWin(activePlayer.mark) !== false) {
        openModal(modal);
        modalHeader.textContent = `${activePlayer.name} has won this round!`;
        activePlayer.score++;
        score1.textContent = players[0].score;
        score2.textContent = players[1].score;
        board.removeEventListener("click", displayController);
      }
      if (e.target.textContent === "X") {
        e.target.style.color = "blue";
      } else if (e.target.textContent === "O") e.target.style.color = "red";

      checkDraw();
      switchPlayer();
    }
  };

  function openModal(modal) {
    modal.classList.add("active");
    overlay.classList.add("active");
  }
  function closaModal(modal) {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }

  overlay.addEventListener("click", function () {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
      closaModal(modal);
    });
  });

  /// start game
  const startGame = function () {
    board.addEventListener("click", displayController);
    players[0].name = playerInput1.value;
    players[1].name = playerInput2.value;
    if (players[0].name === "" && players[1].name === "") {
      players[0].name = "Player 1";
      players[1].name = "Player 2";
    }
  };

  startButton.addEventListener("click", startGame);
  ///

  const checkDraw = function () {
    let draw = storeBoard.every(
      (index) =>
        index === '<ion-icon name="close-outline" class="icon-1"></ion-icon>' ||
        index === '<ion-icon name="ellipse-outline" class="icon-2"></ion-icon>'
    );
    if (draw === true && checkWin(activePlayer.mark) === false) {
      openModal(modal);
      document.querySelector(".modal-header").textContent = `It's a draw!`;
    }
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

  return { storeBoard };
})();
