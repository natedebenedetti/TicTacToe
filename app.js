//declaration of all variable used
let squares = document.querySelectorAll(".row > div");
let players = ["Player A", "Player B"];
let markers = ["X", "O"];
let whoseTurn = 0;
let clickCount = 0;
let gameOver = false;
let element1 = document.getElementById("game-message");


//banner message at beginning of the game explaining the rules
alert("Player A place's an X first square to begin.");

//click event 
squares.forEach(function (row) {
    row.addEventListener('click', rowClicked);
});

function rowClicked(e) {
    if (gameOver === true) {
        return;
    } else if (e.target.textContent == "") {
        e.target.textContent = markers[whoseTurn];
        turn();
        clickCount++;
        checkWin();

    }
}
//alternates back and forth between player A and player B (X and O)
function turn() {
    if (whoseTurn == 0) whoseTurn = 1;
    else whoseTurn = 0;

    //message displayed in place of "tic tac toe" title that states who's turn it is
    document.getElementById('game-message').textContent = players[whoseTurn] + "'s" + " turn";

}

//Every Possible outcome and the appropriate response.
function checkWin() {
    if (squares[0].textContent + squares[1].textContent + squares[2].textContent === "XXX" || squares[3].textContent + squares[4].textContent + squares[5].textContent === "XXX" || squares[6].textContent + squares[7].textContent + squares[8].textContent === "XXX" || squares[0].textContent + squares[4].textContent + squares[8].textContent === "XXX" || squares[2].textContent + squares[4].textContent + squares[6].textContent === "XXX" || squares[0].textContent + squares[3].textContent + squares[6].textContent === "XXX" || squares[2].textContent + squares[5].textContent + squares[8].textContent === "XXX" || squares[1].textContent + squares[4].textContent + squares[7].textContent === "XXX") {
        document.getElementById('game-message').textContent = "Player A Wins!";
        gameOver = true;

    } else if (squares[0].textContent + squares[1].textContent + squares[2].textContent === "OOO" || squares[3].textContent + squares[4].textContent + squares[5].textContent === "OOO" || squares[6].textContent + squares[7].textContent + squares[8].textContent === "OOO" || squares[0].textContent + squares[4].textContent + squares[8].textContent === "OOO" || squares[2].textContent + squares[4].textContent + squares[6].textContent === "OOO" || squares[0].textContent + squares[3].textContent + squares[6].textContent === "OOO" || squares[2].textContent + squares[5].textContent + squares[8].textContent === "OOO" || squares[1].textContent + squares[4].textContent + squares[7].textContent === "OOO") {
        document.getElementById('game-message').textContent = "Player B Wins!";
        gameOver = true;

    } else if (clickCount === 9) {
        document.getElementById('game-message').textContent = "IT'S A DRAW!";
        gameOver = true;
    }
}

function startOver() {
    gameOver = true;
    whoseTurn = 0;
    document.getElementById('game-message').textContent = "Tic Tac Toe";
    alert("Player A Start With 'X'");
    squares.forEach(function (row) {
        row.addEventListener('click', rowClicked);
        row.textContent = "";
    });
    gameOver = false;
}






//reset











