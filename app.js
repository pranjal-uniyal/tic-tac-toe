const GameBoard = (function () {
  let gameboard = ["", "", "", "", "", "", "", "", ""];

  const updateGameboard = (place, mark, name1, name2) => {
    gameboard[place - 1] = mark;
    return displayController.winDisplay(name1, name2);
  };

  const resetGameboard = () => {
    gameboard = ["", "", "", "", "", "", "", "", ""];
  };

  const checkForWin = () => {
    const arrX = [];
    const arrO = [];

    for (let i = 0; i < gameboard.length; i++) {
      mark = gameboard[i];
      if (mark === "X") {
        arrX.push(i + 1);
      } else if (mark === "O") {
        arrO.push(i + 1);
      }
    }
    if (arrX.length >= 3 && arrayCheck(arrX)) {
      return "X";
    } else if (arrO.length >= 3 && arrayCheck(arrO)) {
      return "O";
    } else if (
      (arrX.length === 4 && arrO.length === 5 && arrayCheck(arrO) === false) ||
      (arrO.length === 4 && arrX.length === 5 && arrayCheck(arrX) === false)
    ) {
      return "tie";
    } else {
      return "in progress";
    }
  };

  return { resetGameboard, updateGameboard, checkForWin };
})();

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
function playerCombination(arr) {
  let allPlayerCombination = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = [];
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        temp.push(arr[i], arr[j], arr[k]);

        allPlayerCombination.push(temp);
        temp = [];
      }
    }
  }

  return allPlayerCombination;
}

function arrayCheck(arr) {
  const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  const playerCombinations = playerCombination(arr);
  for (let i = 0; i < playerCombinations.length; i++) {
    let combo = playerCombinations[i];
    for (let j = 0; j < winningCombinations.length; j++) {
      let win = winningCombinations[j];
      if (arraysEqual(win, combo)) {
        return true;
      }
    }
  }

  return false;
}

function Player(name, mark) {
  return { name, mark };
}
const displayController = (function () {
  const gameDisplay = (Player1, Player2) => {
    Game.flow = "continue";
    let turnCount = 0;
    const squareList = document.querySelectorAll(".square");
    squareList.forEach((square) => {
      square.addEventListener("click", () => {
        if (!square.firstChild) {
          const name = square.id;
          const marker = document.createElement("h1");
          marker.classList.add("mark");
          if (turnCount % 2 === 0) {
            turnCount++;
            marker.textContent = "×";
            square.appendChild(marker);
            switch (name) {
              case "One":
                if (Game.flow === "continue") {
                  Game.flow = GameBoard.updateGameboard(
                    1,
                    "X",
                    Player1.name,
                    Player2.name
                  );
                }
                break;
              case "Two":
                if (Game.flow === "continue")
                  Game.flow = GameBoard.updateGameboard(
                    2,
                    "X",
                    Player1.name,
                    Player2.name
                  );

                break;
              case "Three":
                if (Game.flow === "continue")
                  Game.flow = GameBoard.updateGameboard(
                    3,
                    "X",
                    Player1.name,
                    Player2.name
                  );

                break;
              case "Four":
                if (Game.flow === "continue")
                  Game.flow = GameBoard.updateGameboard(
                    4,
                    "X",
                    Player1.name,
                    Player2.name
                  );

                break;
              case "Five":
                if (Game.flow === "continue")
                  Game.flow = GameBoard.updateGameboard(
                    5,
                    "X",
                    Player1.name,
                    Player2.name
                  );

                break;
              case "Six":
                if (Game.flow === "continue")
                  Game.flow = GameBoard.updateGameboard(
                    6,
                    "X",
                    Player1.name,
                    Player2.name
                  );

                break;
              case "Seven":
                if (Game.flow === "continue")
                  Game.flow = GameBoard.updateGameboard(
                    7,
                    "X",
                    Player1.name,
                    Player2.name
                  );

                break;
              case "Eight":
                if (Game.flow === "continue")
                  Game.flow = GameBoard.updateGameboard(
                    8,
                    "X",
                    Player1.name,
                    Player2.name
                  );

                break;
              case "Nine":
                if (Game.flow === "continue")
                  Game.flow = GameBoard.updateGameboard(
                    9,
                    "X",
                    Player1.name,
                    Player2.name
                  );

                break;
              default:
            }
          } else {
            turnCount++;
            marker.textContent = "○";
            square.appendChild(marker);
            switch (name) {
              case "One":
                if (Game.flow === "continue")
                  Game.flow = GameBoard.updateGameboard(
                    1,
                    "O",
                    Player1.name,
                    Player2.name
                  );
                break;
              case "Two":
                if (Game.flow === "continue")
                  Game.flow = GameBoard.updateGameboard(
                    2,
                    "O",
                    Player1.name,
                    Player2.name
                  );

                break;
              case "Three":
                if (Game.flow === "continue")
                  Game.flow = GameBoard.updateGameboard(
                    3,
                    "O",
                    Player1.name,
                    Player2.name
                  );

                break;
              case "Four":
                if (Game.flow === "continue")
                  Game.flow = GameBoard.updateGameboard(
                    4,
                    "O",
                    Player1.name,
                    Player2.name
                  );

                break;
              case "Five":
                if (Game.flow === "continue")
                  Game.flow = GameBoard.updateGameboard(
                    5,
                    "O",
                    Player1.name,
                    Player2.name
                  );

                break;
              case "Six":
                if (Game.flow === "continue")
                  Game.flow = GameBoard.updateGameboard(
                    6,
                    "O",
                    Player1.name,
                    Player2.name
                  );

                break;
              case "Seven":
                if (Game.flow === "continue")
                  Game.flow = GameBoard.updateGameboard(
                    7,
                    "O",
                    Player1.name,
                    Player2.name
                  );

                break;
              case "Eight":
                if (Game.flow === "continue")
                  Game.flow = GameBoard.updateGameboard(
                    8,
                    "O",
                    Player1.name,
                    Player2.name
                  );

                break;
              case "Nine":
                if (Game.flow === "continue")
                  Game.flow = GameBoard.updateGameboard(
                    9,
                    "O",
                    Player1.name,
                    Player2.name
                  );

                break;
              default:
            }
          }
        }
      });
    });
  };

  const resetDisplay = () => {
    const statusReset = document.querySelector(".result");
    statusReset.textContent = ``;

    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
      if (square.firstChild) square.removeChild(square.firstChild);
    });
  };
  const winDisplay = (name1, name2) => {
    const result = document.querySelector(".result");
    if (GameBoard.checkForWin() === "X") {
      result.textContent = `${name1} wins!`;
      return "over";
    } else if (GameBoard.checkForWin() === "O") {
      result.textContent = `${name2} wins!`;
      return "over";
    } else if (GameBoard.checkForWin() === "tie") {
      result.textContent = "Tie";
      return "over";
    } else {
      result.textContent = "In Progress";
      return "continue";
    }
  };

  return { gameDisplay, resetDisplay, winDisplay };
})();

function Player(name, mark) {
  return { name, mark };
}

const Game = (function () {
  let flow = "continue";
  const gameStart = () => {
    let player1, player2;
    const formBtn = document.querySelector("#player-form");
    formBtn.addEventListener("submit", (event) => {
      event.preventDefault();
      player1 = document.querySelector("#player-1").value;
      player2 = document.querySelector("#player-2").value;
      const showList = document.querySelectorAll(".hidden");
      showList.forEach((item) => {
        item.classList.remove("hidden");
      });

      playerOne = Player(player1, "X");
      playerTwo = Player(player2, "O");
      displayController.gameDisplay(playerOne, playerTwo);
    });

    const resetBtn = document.querySelector("#reset");
    resetBtn.addEventListener("click", () => {
      displayController.resetDisplay();
      GameBoard.resetGameboard();
      flow = "continue";
      displayController.gameDisplay(playerOne, playerTwo);
    });
  };

  return { gameStart, flow };
})();

Game.gameStart();
