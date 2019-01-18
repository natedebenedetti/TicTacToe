//declaration of all variable used
let squares = document.querySelectorAll(".row > div");
let players = ["Player A", "Player B"];
let markers = ["X", "O"];
let whoseTurn = 0;
let clickCount = 0;
let gameOver = false;



//banner message at beginning of the game explaining the rules
alert("WANT TO PLAY A GAME?   Player A Start by placing an X anywhere on the board.");

//click event 
squares.forEach(function (row) {
    row.addEventListener('click', rowClicked);
});

function rowClicked(e) {
    clickCount++;
    if (gameOver === true) {
        return;
    } else if (e.target.textContent == "") {
        e.target.textContent = markers[whoseTurn];
        markerColor(e);
        turn();
        checkWin();
    }
}
//alternates back and forth between player A and player B (X and O)
function turn() {
    if (whoseTurn == 0) whoseTurn = 1;
    else whoseTurn = 0;
    

    //message displayed in place of "tic tac toe" title that states who's turn it is
    document.getElementById('game-message').textContent = players[whoseTurn] + " goes next";
 
 }

//Every Possible outcome and the appropriate response.
function checkWin() {
    if (squares[0].textContent + squares[1].textContent + squares[2].textContent === "XXX" || squares[3].textContent + squares[4].textContent + squares[5].textContent === "XXX" || squares[6].textContent + squares[7].textContent + squares[8].textContent === "XXX" || squares[0].textContent + squares[4].textContent + squares[8].textContent === "XXX" || squares[2].textContent + squares[4].textContent + squares[6].textContent === "XXX" || squares[0].textContent + squares[3].textContent + squares[6].textContent === "XXX" || squares[2].textContent + squares[5].textContent + squares[8].textContent === "XXX" || squares[1].textContent + squares[4].textContent + squares[7].textContent === "XXX") {
        document.getElementById('game-message').style.color = "blue";
        document.getElementById('game-message').textContent = "Player A Wins!!";
        document.getElementById('button1').style.color = "blue";
        gameOver = true;

    } else if (squares[0].textContent + squares[1].textContent + squares[2].textContent === "OOO" || squares[3].textContent + squares[4].textContent + squares[5].textContent === "OOO" || squares[6].textContent + squares[7].textContent + squares[8].textContent === "OOO" || squares[0].textContent + squares[4].textContent + squares[8].textContent === "OOO" || squares[2].textContent + squares[4].textContent + squares[6].textContent === "OOO" || squares[0].textContent + squares[3].textContent + squares[6].textContent === "OOO" || squares[2].textContent + squares[5].textContent + squares[8].textContent === "OOO" || squares[1].textContent + squares[4].textContent + squares[7].textContent === "OOO") {
        document.getElementById('game-message').style.color = "red";
        document.getElementById('game-message').textContent = "Player B Wins!!";
        document.getElementById('button1').style.color = "red";
        gameOver = true;

    } else if (clickCount === 9) {
        document.getElementById('game-message').style.color = "white";
        document.getElementById('game-message').textContent = "It's A Draw";
        gameOver = true;
    }
}

function markerColor (e) {
    if (whoseTurn === 0) {
        e.target.style.color = "blue";
    } else {
        e.target.style.color = "red";
    }
}

function startOver() {
    document.getElementById('game-message').style.color = "white";
    document.getElementById('button1').style.color = "black";
    clickCount = 0;
    gameOver = true;
    whoseTurn = 0;
    document.getElementById('game-message').textContent = "Tic Tac Toe";
    alert("WANT TO PLAY AGAIN?   Player A starts the game again.");
    squares.forEach(function (row) {
        row.addEventListener('click', rowClicked);
        row.textContent = "";
    });
    gameOver = false;
}






















