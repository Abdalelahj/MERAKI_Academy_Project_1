//=============================//
// console.log('hi');

const row1_col_2 = document.querySelector("#row_1_col2");
const row1_col_3 = document.querySelector("#row_1_col3");
const row1_col_4 = document.querySelector("#row_1_col4");
const row2_col_2 = document.querySelector("#row_2_col2");
const row2_col_3 = document.querySelector("#row_2_col3");
const row2_col_4 = document.querySelector("#row_2_col4");
const row3_col_2 = document.querySelector("#row_3_col2");
const row3_col_3 = document.querySelector("#row_3_col3");
const row3_col_4 = document.querySelector("#row_3_col4");

const blocks = [
  [row1_col_2, row1_col_3, row1_col_4],
  [row2_col_2, row2_col_3, row2_col_4],
  [row3_col_2, row3_col_3, row3_col_4],
];

const LOGO_1 = "X";
const LOGO_2 = "O";
let counter_1 = 0;
let counter_2 = 0;

const render = (e) => {
  blocks.forEach((element, index) => {
    element.forEach((elem, i) => {
      elem.addEventListener("click", () => {
        if (e.target.className == "button_1") {
            if(!counter_1){
                counter_1=1;
                e.target.disabled=true
                //playerOneButton.removeEventListener('click',render)
                return (elem.innerHTML = LOGO_1);
            }
            // return counter_1=0;
        }
         else if (e.target.className == "button_2") {
            if(!counter_2){
                counter_2=1;
                e.target.disabled=true
                return (elem.innerHTML = LOGO_2);
            }
        //   return  counter_1=0;
        }
      });
    });
  });
};

const playerOneButton = document.querySelector(".button_1");
// playerOneButton.classList.add(1)
playerOneButton.addEventListener("click", render);
const playerTwoButton = document.querySelector(".button_2");
// playerOneButton.classList.add(2)
playerTwoButton.addEventListener("click", render);
// console.log(e);
