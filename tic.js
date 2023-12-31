let boxes = document.querySelectorAll(".box");
let turn = document.querySelector("#turn");
let msg = document.querySelector("#msg");
let pos1val;
let pos2val;
let pos3val
let turn0 = true;

let newBtn = document.querySelector("#new-btn"); // Use querySelector for a single element
newBtn.addEventListener("click", newGame); // Add event listener

// arrow function
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if (turn0) {
            //Player O
            box.innerText = "O";
            turn.innerHTML = "X turn"
            turn0 = false;
        }
        else {
            //Player X
            box.innerText = "X";
            turn.innerHTML = "0 turn"
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();

        box.disabled = true;

    });
});



const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

//check the condition for winner 
function checkWinner() {

    for (const pattern of winPattern) {

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;


        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner chicken Dinner", pos1val);
                msg.innerHTML = (`${pos1val} WON !!!`)

                endGame();
                let elements = document.querySelectorAll('.msg p:nth-child(1)');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.display = "block";
                }
            }
        }
    }
}

//disable all box after get winner
function endGame() {
    for (const box of boxes) {
        box.disabled = true;
    }
}

function newGame() {


    for (const box of boxes) {
        box.innerText = "";
        box.disabled = false;

        let elements = document.querySelectorAll('.msg p:nth-child(1)');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }

    }
}
