let rows = document.querySelectorAll(".row");

// create players

let players = ["Player A", "Player B"];
let markers = ["X", "O"];
let whoseTurn = 0;

// play the game
alert("LET'S PLAY! Player A Goes First.");


rows.forEach(function (row) {
    row.addEventListener('click', rowClicked);
});

function rowClicked(e) {
    if (e.target.textContent == "") {
        e.target.textContent = markers[whoseTurn];
        turn();
    } else {
    }
}

// Keep track of whose turn

function turn() {
    if (whoseTurn == 0) whoseTurn = 1;
    else whoseTurn = 0;

    document.getElementById('game-message').textContent = players[whoseTurn] + "'s" + " turn";
}

//win algorithm

//reset











