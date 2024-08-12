//=============================//
// console.log('hi');


const blocks = [[], [], []];
const divs = [[], [], [], []];

const gameBox = document.querySelector("#gameBox");
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    const newDIv = document.createElement("div");
    newDIv.id = `row${i}_col${j}`;
    divs[j] = newDIv;
    gameBox.append(divs[j]);
    if (i < 3 && j > 0) {
      blocks[i].push(newDIv);
    }
  }
}

const player_1 = { logo: "X" };
const player_2 = { logo: "O" };
let turn = true;
const players = [];
const vertical_1 = [];
const vertical_2 = [];
const vertical_3 = [];
const horizontal_1 = [];
const horizontal_2 = [];
const horizontal_3 = [];
const diagonal_1 = [];
const diagonal_2 = [];
const render = (e) => {
  players.unshift(e.target.className);
  blocks.forEach((element, index) => {
    element.forEach((elem, i) => {
      elem.addEventListener("click", () => {
        if (players[0] === "button_1" && elem.innerText === "") {
          players[0] = "button_2";
          elem.innerHTML = player_1.logo;
          //   turn = !turn;
          if (i === 0) {
            if (elem.innerHTML === "X") {
              vertical_1.push(elem.innerHTML);
              //   console.log(vertical_1, i);
              if (
                vertical_1[0] === vertical_1[1] &&
                vertical_1[0] === vertical_1[2]
              ) {
                return prompt(`player 1 won`);
              }
            }
          }
          if (i === 1) {
            if (elem.innerHTML === "X") {
              vertical_2.push(elem.innerHTML);
              //   console.log(vertical_2, i);
              if (
                vertical_2[0] === vertical_2[1] &&
                vertical_2[0] === vertical_2[2]
              ) {
                return prompt(`player 1 won`);
              }
            }
          }
          if (i === 2) {
            if (elem.innerHTML === "X") {
              vertical_3.push(elem.innerHTML);
              //   console.log(vertical_3, i);
              if (
                vertical_3[0] === vertical_3[1] &&
                vertical_3[0] === vertical_3[2]
              ) {
                return prompt(`player 1 won`);
              }
            }
          }
          if (index === 0) {
            if (elem.innerHTML === "X") {
              horizontal_1.push(elem.innerHTML);
              //   console.log(horizontal_1, index);
              if (
                horizontal_1[0] === horizontal_1[1] &&
                horizontal_1[0] === horizontal_1[2]
              ) {
                return prompt(`player 1 won`);
              }
            }
          }
          if (index === 1) {
            if (elem.innerHTML === "X") {
              horizontal_2.push(elem.innerHTML);
              //   console.log(horizontal_2, index);
              if (
                horizontal_2[0] === horizontal_2[1] &&
                horizontal_2[0] === horizontal_2[2]
              ) {
                return prompt(`player 1 won`);
              }
            }
          }
          if (index === 2) {
            if (elem.innerHTML === "X") {
              horizontal_3.push(elem.innerHTML);
              //   console.log(horizontal_3, index);
              if (
                horizontal_3[0] === horizontal_3[1] &&
                horizontal_3[0] === horizontal_3[2]
              ) {
                return prompt(`player 1 won`);
              }
            }
          }
          if (index === 0 && i === 0) {
            diagonal_1.push(elem.innerHTML);
            if (
              diagonal_1[0] === diagonal_1[1] &&
              diagonal_1[0] === diagonal_1[2]
            ) {
              return prompt(`player 1 won`);
            }
            // console.log(diagonal);
          }

          if (index === 1 && i === 1) {
            diagonal_1.push(elem.innerHTML);
            console.log(diagonal_1);
            if (
              diagonal_1[0] === diagonal_1[1] &&
              diagonal_1[0] === diagonal_1[2]
            ) {
              return prompt(`player 1 won`);
            }
          }
          if (index === 2 && i === 2) {
            diagonal_1.push(elem.innerHTML);
            console.log(diagonal_1);
            if (
              diagonal_1[0] === diagonal_1[1] &&
              diagonal_1[0] === diagonal_1[2]
            ) {
              return prompt(`player 1 won`);
            }
          }

          if (index === 0 && i === 2) {
            diagonal_1.push(elem.innerHTML);
            console.log(diagonal_1);
            if (
              diagonal_1[0] === diagonal_1[1] &&
              diagonal_1[0] === diagonal_1[2]
            ) {
              return prompt(`player 1 won`);
            }
          }
          if (index === 2 && i === 0) {
            diagonal_1.push(elem.innerHTML);
            console.log(diagonal_1);
            if (
              diagonal_1[0] === diagonal_1[1] &&
              diagonal_1[0] === diagonal_1[2]
            ) {
              return prompt(`player 1 won`);
            }
          }
        } else if (players[0] === "button_2" && elem.innerText === "") {
          //   console.log(players[0]);
          players[0] = "button_1";
          elem.innerHTML = player_2.logo;
          //   turn = !turn;
          if (i === 0) {
            if (elem.innerHTML === "O") {
              vertical_1.push(elem.innerHTML);
              console.log(vertical_1, i);
              if (
                vertical_1[0] === vertical_1[1] &&
                vertical_1[0] === vertical_1[2]
              ) {
                setTimeout(() => {
                  prompt(`Player 2 won`);
                }, 700);
              }
            }
          }
          if (i === 1) {
            if (elem.innerHTML === "O") {
              vertical_2.push(elem.innerHTML);
              //   console.log(vertical_2, i);
              if (
                vertical_2[0] === vertical_2[1] &&
                vertical_2[0] === vertical_2[2]
              ) {
                return prompt(`player 2 won`);
              }
            }
          }
          if (i === 2) {
            if (elem.innerHTML === "O") {
              vertical_3.push(elem.innerHTML);
              //   console.log(vertical_3, i);
              if (
                vertical_3[0] === vertical_3[1] &&
                vertical_3[0] === vertical_3[2]
              ) {
                return prompt(`player 2 won`);
              }
            }
          }
          if (index === 0) {
            if (elem.innerHTML === "O") {
              horizontal_1.push(elem.innerHTML);
              //   console.log(horizontal_1, index);
              if (
                horizontal_1[0] === horizontal_1[1] &&
                horizontal_1[0] === horizontal_1[2]
              ) {
                return prompt(`player 2 won`);
              }
            }
          }
          if (index === 1) {
            if (elem.innerHTML === "O") {
              horizontal_2.push(elem.innerHTML);
              console.log(horizontal_2, index);
              if (
                horizontal_2[0] === horizontal_2[1] &&
                horizontal_2[0] === horizontal_2[2]
              ) {
                return prompt(`player 2 won`);
              }
            }
          }
          if (index === 2) {
            if (elem.innerHTML === "O") {
              horizontal_3.push(elem.innerHTML);
              console.log(horizontal_3, index);
              if (
                horizontal_3[0] === horizontal_3[1] &&
                horizontal_3[0] === horizontal_3[2]
              ) {
                return prompt(`player 2 won`);
              }
            }
          }
          if (index === 0 && i === 0) {
            diagonal_2.push(elem.innerHTML);
            if (
              diagonal_2[0] === diagonal_2[1] &&
              diagonal_2[0] === diagonal_2[2]
            ) {
              return prompt(`player 2 won`);
            }
          }
          if (index === 1 && i === 1) {
            diagonal_2.push(elem.innerHTML);
            if (
              diagonal_2[0] === diagonal_2[1] &&
              diagonal_2[0] === diagonal_2[2]
            ) {
              return prompt(`player 2 won`);
            }
          }
          if (index === 2 && i === 2) {
            diagonal_2.push(elem.innerHTML);
            if (
              diagonal_2[0] === diagonal_2[1] &&
              diagonal_2[0] === diagonal_2[2]
            ) {
              return prompt(`player 2 won`);
            }
          }
          if (index === 0 && i === 2) {
            diagonal_2.push(elem.innerHTML);
            if (
              diagonal_2[0] === diagonal_2[1] &&
              diagonal_2[0] === diagonal_2[2]
            ) {
              return prompt(`player 2 won`);
            }
          }
          if (index === 2 && i === 0) {
            diagonal_2.push(elem.innerHTML);
            if (
              diagonal_2[0] === diagonal_2[1] &&
              diagonal_2[0] === diagonal_2[2]
            ) {
              return prompt(`player 2 won`);
            }
          }
        }
      });
    });
  });
};
/* 
turn &&
&& !turn
*/
// render();
//creating buttons
const button_1 = document.querySelector("#row3_col0");
const button_2 = document.querySelector("#row3_col3");

const playerOneButton = document.createElement("button");
playerOneButton.innerText = "Player 1 X";
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
