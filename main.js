//=============================================================//

const body = document.querySelector("body");
const start_button = document.querySelector("#start");
const overRelay = document.querySelector("#overlay");
const gameBox = document.querySelector("#gameBox");
const winDiv = document.querySelector("#winDivOverlay");
const timer = document.querySelector("#timer");
const drawDiv = document.querySelector("#draw");

const player_1 = { logo: "X" };
const player_2 = { logo: "O" };
let turn = true;

let blocks = [[], [], []];
const divs = [[], [], [], []];
let order = "start";
let newTime;
const players = [];
let sec = 0;
let vertical_1 = [];
let vertical_2 = [];
let vertical_3 = [];

const divTheme = (e, elem) => {
  elem.style.color = "#C197D2";
  elem.style.background = "rgb(0,0,0,0.8)";
};
const winTheme = (e, array) => {
  array[1].style.color = "yellow";
  array[3].style.color = "yellow";
  array[5].style.color = "yellow";
  array[1].style.transition = "all 1s";
  array[1].style.transform = "rotate(360deg)";
  array[3].style.transition = "all 1s";
  array[3].style.transform = "rotate(360deg)";
  array[5].style.transition = "all 1s";
  array[5].style.transform = "rotate(360deg)";
};

const drawsScrn = (message) => {

  playerTimer("no", "stop");
  overRelay.style.display = "none";
  gameBox.style.display = "none";
  drawDiv.style.display = "block";
  const tie = document.createElement("div");
  tie.id = "tiePop";

  const text = document.createElement("span");
  text.innerText = message;

  const playAgain = document.createElement("button");
  playAgain.id = "playAgainButton";
  playAgain.innerText = "Play Again";

  drawDiv.append(tie);
  tie.append(playAgain);
  tie.append(text);
  playAgain.addEventListener("click", () => {
    game();
  });
};

const WinnerScrn = (message, e) => {
  overRelay.style.display = "none";
  gameBox.style.display = "none";
  winDiv.style.display = "block";
  const win = document.createElement("div");
  win.id = "winPop";

  const text = document.createElement("span");
  text.innerText = message;
  const playAgain = document.createElement("button");
  playAgain.id = "playAgainButton";
  playAgain.innerText = "Play Again";

  winDiv.append(win);
  win.append(playAgain);
  win.append(text);

  playAgain.addEventListener("click", () => {
    game(e);
  });
};

const check = (e, elem, arr) => {
  arr.push(elem.innerHTML);
  arr.push(elem);

  if (arr[0] === arr[2] && arr[0] === arr[4]) {
    console.log(arr);
    if (elem.innerHTML === "X") {
      playerTimer(e, "stop");
      winTheme(e, arr);
      setTimeout(() => {
        WinnerScrn("Player 1", e);

      }, 2000)
      return
    } else {
      playerTimer(e, "stop");
      winTheme(e, arr);
      setTimeout(() => {
        WinnerScrn("Player 2", e);

      }, 2000)
      return
    }
  }
  else if (winDiv.style.display !== "block" && vertical_1.length == 6 && vertical_2.length == 6 && vertical_3.length == 6) {
    setTimeout(drawsScrn, 1000, "Its a draw ");
  }
};

const playerTimer = (e, order) => {
  timer.innerHTML = `00:${sec++}`;
  if (order === "stop") {
    clearInterval(newTime);
    sec = 0;
    timer.innerHTML = `00:00`;
  }
  if (order === "reset") {
    order = "start";
    sec = 0;
  }

  if (sec > 30) {
    if ((players[0] = "button_1")) {
      players[0] = "button_2";
      sec = 0;
    } else {
      players[0] = "button_1";
      sec = 0;
    }
  }
  if (sec) {
    if (sec > 25) {
      timer.style.color = "red";
    } else {
      timer.style.color = "#EFEBE0";
    }
  }
};

const render = (e) => {

  const horizontal_1 = [];
  const horizontal_2 = [];
  const horizontal_3 = [];
  const diagonal_1 = [];
  const diagonal_1_1 = [];
  players.unshift(e.target.className);
  e.target.disabled = true;
  newTime = setInterval(playerTimer, 1000);
  playerTimer(e, order);

  blocks.forEach((element, index) => {
    element.forEach((elem, i) => {
      elem.addEventListener("click", () => {
        divTheme(e, elem);
        if (!elem.innerHTML) {
          playerTimer(e, "reset");
          if (players[0] === "button_2") {
            players[0] = "button_1";
            elem.innerHTML = "O";
          } else {
            players[0] = "button_2";
            elem.innerHTML = "X";
          }

          if (i === 0) {
            check(e, elem, vertical_1);
          }
          if (i === 1) {
            check(e, elem, vertical_2);
          }
          if (i === 2) {
            check(e, elem, vertical_3);
          }
          if (index === 0) {
            check(e, elem, horizontal_1);
          }
          if (index === 1) {
            check(e, elem, horizontal_2);
          }
          if (index === 2) {
            check(e, elem, horizontal_3);
          }
          if (
            (index === 0 && i === 0) ||
            (index === 1 && i === 1) ||
            (index === 2 && i === 2)
          ) {
            check(e, elem, diagonal_1);
          }

          if (
            (index === 0 && i === 2) ||
            (index === 1 && i === 1) ||
            (index === 2 && i === 0)
          ) {
            check(e, elem, diagonal_1_1);
          }

        }
      });
    });

  });

};
const game = () => {
  overRelay.style.display = "none";
  gameBox.style.display = "block";
  winDiv.style.display = "none";
  drawDiv.style.display = "none";
  if (gameBox.childNodes[0]) {
    gameBox.childNodes[0].remove();
    blocks = [[], [], []];
    vertical_1 = []
    vertical_2 = []
    vertical_3 = []
  }
  const XODiv = document.createElement("div");
  XODiv.id = "XODiv";
  gameBox.append(XODiv);
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const newDIv = document.createElement("div");
      newDIv.id = `row${i}_col${j}`;
      divs[j] = newDIv;
      XODiv.append(divs[j]);
      if (i < 3 && j > 0) {
        blocks[i].push(divs[j]);
      }
    }
  }

  const row0_col0 = document.querySelector("#row0_col0");
  row0_col0.append(timer);

  const button_1 = document.querySelector("#row3_col0");
  const button_2 = document.querySelector("#row3_col3");

  const playerOneButton = document.createElement("button");
  playerOneButton.innerText = `Player 1 X`;
  playerOneButton.id = "button";
  playerOneButton.classList.add("button_1");
  playerOneButton.addEventListener("click", render);

  const playerTwoButton = document.createElement("button");
  playerTwoButton.innerText = "Player 2 O";
  playerTwoButton.id = "button";
  playerTwoButton.classList.add("button_2");
  playerTwoButton.addEventListener("click", render);

  button_1.append(playerOneButton);
  button_2.append(playerTwoButton);
};
start_button.addEventListener("click", game);
