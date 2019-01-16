let squares = document.querySelectorAll(".row > div");
let players = ["Player A", "Player B"];
let markers = ["X", "O"];
let whoseTurn = 0;
let clickCount = 0;





alert("LET'S PLAY! Player A Goes First.");


squares.forEach(function (row) {
    row.addEventListener('click', rowClicked);
});

function rowClicked(e) {
    if (e.target.textContent == "") {
        e.target.textContent = markers[whoseTurn];
        turn();
        clickCount++;
        checkWin();
    }
}

function turn() {
    if (whoseTurn == 0) whoseTurn = 1;
    else whoseTurn = 0;

    document.getElementById('game-message').textContent = players[whoseTurn] + "'s" + " turn";
}

//Every Possible Combonation for Player or A or B to win
function checkWin() {
    if (squares[0].textContent + squares[1].textContent + squares[2].textContent === "XXX" || squares[3].textContent + squares[4].textContent + squares[5].textContent === "XXX" || squares[6].textContent + squares[7].textContent + squares[8].textContent === "XXX" || squares[0].textContent + squares[4].textContent + squares[8].textContent === "XXX" || squares[2].textContent + squares[4].textContent + squares[6].textContent === "XXX" || squares[0].textContent + squares[3].textContent + squares[6].textContent === "XXX" || squares[2].textContent + squares[5].textContent + squares[8].textContent === "XXX") {
        alert("Player A Wins!");
    } else if (squares[0].textContent + squares[1].textContent + squares[2].textContent === "OOO" || squares[3].textContent + squares[4].textContent + squares[5].textContent === "OOO" || squares[6].textContent + squares[7].textContent + squares[8].textContent === "OOO" || squares[0].textContent + squares[4].textContent + squares[8].textContent === "OOO" || squares[2].textContent + squares[4].textContent + squares[6].textContent === "OOO" || squares[0].textContent + squares[3].textContent + squares[6].textContent === "OOO" || squares[2].textContent + squares[5].textContent + squares[8].textContent === "OOO") {
        alert("Player B Wins!");
    } else if (clickCount === 9) {
        alert("IT'S A DRAW!!!");
    } 
}



//reset











