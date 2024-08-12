//=============================//
// console.log('hi');

// const row1_col_2 = document.querySelector("#row_1_col2");
// const row1_col_3 = document.querySelector("#row_1_col3");
// const row1_col_4 = document.querySelector("#row_1_col4");
// const row2_col_2 = document.querySelector("#row_2_col2");
// const row2_col_3 = document.querySelector("#row_2_col3");
// const row2_col_4 = document.querySelector("#row_2_col4");
// const row3_col_2 = document.querySelector("#row_3_col2");
// const row3_col_3 = document.querySelector("#row_3_col3");
// const row3_col_4 = document.querySelector("#row_3_col4");

// const blocks = [
//   [row1_col_2, row1_col_3, row1_col_4],
//   [row2_col_2, row2_col_3, row2_col_4],
//   [row3_col_2, row3_col_3, row3_col_4],
// ];

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
const vertical = []
const render = (e) => {
    players.unshift(e.target.className);
    blocks.forEach((element, index) => {
        element.forEach((elem, i) => {
            elem.addEventListener("click", () => {
                if (turn && players[0] === "button_1") {
                    elem.innerHTML = player_1.logo;
                    turn = !turn;
                    if (i === 0) {
                        if (elem.innerHTML === "X") {
                            vertical.push(elem.innerHTML)
                            console.log(vertical, i);
                            if (vertical[0] === vertical[1] && vertical[0] === vertical[2]) {
                                return prompt(`player X win`)
                            }
                        }
                        if (elem.innerHTML === "O") {
                            return prompt(`player O win`)
                        }
                    }
                } else if (players[0] === "button_2" && !turn) {
                    // console.log(players[0]);
                    elem.innerHTML = player_2.logo;
                    turn = !turn;
                }
             



            });
        });
    });
};

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
// console.log(e);
/*   if (players[0] == "button_1") {
                    console.log("x first");
                    // firstPlayer = player_1
                    player_1.turn = true
                    player_2.turn = false

                    elem.innerHTML = player_1.logo

                }
                if (players[0] == "button_2") {
                    console.log("o first");
                    // firstPlayer = player_2
                    player_2.turn = true
                    player_1.turn = false
                    elem.innerHTML = player_2.logo

                }

                if (player_1.turn) {
                    elem.innerHTML = player_1.logo
                    player_1.turn = !player_1.turn
                    player_2.turn = !player_2.turn

                }
                if(player_2.turn) {
                    elem.innerHTML = player_2.logo
                    player_2.turn = !player_2.turn
                    player_1.turn = !player_1.turn


                } */
