//=============================//
// console.log('hi');
const body = document.querySelector("body");
const start_button = document.querySelector("#start");
const overRelay = document.querySelector("#overlay")
const gameBox = document.querySelector("#gameBox")  
const winDiv = document.querySelector("#winDivOverlay");



const player_1 = { logo: "X" };
const player_2 = { logo: "O" };
let turn = true;

// const diagonal_2 = [];


const blocks = [[], [], []];
const divs = [[], [], [], []];


const WinnerScrn = (message) => {
  console.log("winner" ,message);
  overRelay.style.display = "none";
  gameBox.style.display = "none";
  winDiv.style.display = "block"; 
  const win = document.createElement("div");
  win.id = "winPop";

  const text = document.createElement("span");
  text.innerText = message ;
  const playAgain = document.createElement("button");
  playAgain.id = "playAgainButton";
  playAgain.innerText = "Play Again";
 
  winDiv.append(win);
  win.append(playAgain);
  win.append(text);

  playAgain.addEventListener("click", () => {
    
    // location.reload();
    // document.querySelector("#overlay").style.display = "none";
    // document.querySelector('#gameBox').style.display ="block";
    game()
  });
};
const check =(elem,arr,i)=>{
  arr.push(elem.innerHTML);
  console.log(arr);
  if (
    arr[0] === arr[1] &&
    arr[0] === arr[2]
  ) {
    if (elem.innerHTML === "X"){
      return WinnerScrn("player 1 win")
    }else{
      return WinnerScrn("player 2 win")

    }
}
}
const render = (e) => {

  const players = [];
  const vertical_1 = [];
  const vertical_2 = [];
  const vertical_3 = [];
  const horizontal_1 = [];
  const horizontal_2 = [];
  const horizontal_3 = [];
  const diagonal_1 = [];
  const diagonal_1_1 = [];

  console.log(vertical_1);
  // players.push(e.target.innerText)
  players.push(e.target.className);
  blocks.forEach((element, index) => {
    element.forEach((elem, i) => {
      elem.addEventListener("click", () => {
        if(!elem.innerHTML){

          if(players[0]==="button_2"){
            players[0] = "button_1";
            elem.innerHTML =  "O";
          }else{
            players[0] = "button_2";
            elem.innerHTML =  "X";
          }
          
          if (i === 0 ) {
            check(elem,vertical_1)
          }
          if (i === 1) {
            check(elem,vertical_2)
          }
          if (i === 2) {
            check(elem,vertical_3)
          }
          if (index === 0) {
            check(elem,horizontal_1)
          }
          if (index === 1) {
            check(elem,horizontal_2)
          }
          if (index === 2) {
            check(elem,horizontal_3)

          }
          if ((index === 0 && i === 0) ||(index === 1 && i === 1) || (index === 2 && i === 2) ) {
            check(elem,diagonal_1)

          }

          if ((index === 0 && i === 2)||(index === 1 && i === 1)||(index === 2 && i === 0)) {
            check(elem,diagonal_1_1)

          }

        }


        
      });



    });

  });
  // tie // return
};
const game= () =>{

  overRelay.style.display = "none";
  gameBox.style.display = "block";
  winDiv.style.display = "none";
  // console.log("nodes",gameBox.childNodes);
  if(gameBox.childNodes[1]){
    gameBox.childNodes[1].remove();
  }
  const XODiv = document.createElement('div');
  XODiv.id ="XODiv"
  gameBox.append(XODiv)
  for (let i = 0; i < 4; i++) {
    console.log("i",i);
    for (let j = 0; j < 4; j++) {
      const newDIv = document.createElement("div");
      newDIv.id = `row${i}_col${j}`;
      divs[j] = newDIv;
      XODiv.append(divs[j]);
      if (i < 3 && j > 0) {
        blocks[i].push(newDIv);
      }
    }
  }
 console.log(blocks);

  const button_1 = document.querySelector("#row3_col0");
  const button_2 = document.querySelector("#row3_col3");

  const playerOneButton = document.createElement("button");
  playerOneButton.innerText = "Player 1 X";
  playerOneButton.id = "button";
  playerOneButton.classList.add("button_1");
  playerOneButton.addEventListener("click", (e) => render(e));

  const playerTwoButton = document.createElement("button");
  playerTwoButton.innerText = "Player 2 O";
  playerTwoButton.id = "button";
  playerTwoButton.classList.add("button_2");
  playerTwoButton.addEventListener("click", (e) => render(e));

  button_1.append(playerOneButton);
  button_2.append(playerTwoButton);
}




start_button.addEventListener("click",game);
/* 
turn &&
&& !turn
*/
// render();
//creating buttons

