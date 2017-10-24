var turn = "X";
var player;
var num;
var mode;
var spaces = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0
};

// event handler variables
var winner = document.getElementById('winner');
var whoWins = document.getElementById('who-wins');
var box = document.getElementsByClassName('square');
var restart = document.getElementsByClassName('restart');
var startmodal = document.getElementById('start');
var bgmodal = document.getElementById('modal-bg');
var closemodal = document.getElementsByClassName('close');
var X = document.getElementById('X');
var O = document.getElementById('O');
var players = document.getElementById('player');
var symbol = document.getElementById('symbol');

function twoPlayer() {
    mode = 'two player'
    players.className = "hidden";
    symbol.className = "row";
}

function onePlayer() {
    mode = 'one player'
    players.className = "hidden";
    symbol.className = "row";
}

function twoPlayerStart() {

    // box event handlers
    for (var i = 0; i < box.length; i++) {
        box[i].addEventListener('click', function() {

            if (turn === "X") {
                if (spaces[this.id] === 0) {
                    this.innerHTML = "O";
                    spaces[this.id] = "O";
                    turn = "O";
                    checkWin();
                    console.log(turn);
                    console.log(spaces);

                } else {
                    console.log('space taken');
                }
            } else {
                if (spaces[this.id] === 0) {
                    this.innerHTML = "X";
                    spaces[this.id] = "X";
                    turn = "X";
                    checkWin();
                    console.log(turn);
                    console.log(spaces);
                } else {
                    console.log('space taken');
                }
            }
        });
    }
}

function onePlayerStart() {
    // box event handlers
    for (var j = 0; j < box.length; j++) {
        box[j].addEventListener('click', function() {

            if (turn === 'X') {
                if (spaces[this.id] === 0) {

                    this.innerHTML = "O";
                    spaces[this.id] = "O";


                    // this was my thought about solution but still has the large pause at a draw, or when you win on the last move.

                    checkWin();

                    // random number for object position
                    function random() {
                        num = Math.floor(Math.random() * 9) + 1;
                        console.log('num');
                        return num.toString();
                    }

                    computer(random());

                    function computer(num) {
                        if (spaces[num] === 0) {
                            console.log(spaces);
                            box[parseInt(num - 1)].innerHTML = "X";
                            spaces[parseInt(num)] = "X";
                            checkWin();
                            console.log(num);
                            console.log('square free');
                        } else {
                            computer(random());
                        }
                    }

                }
            } else {
                if (spaces[this.id] === 0) {

                    this.innerHTML = "X";
                    spaces[this.id] = "X";

                    checkWin()

                    // random number for object position
                    function random() {
                        console.log('getting called')
                        num = Math.floor(Math.random() * 9) + 1;

                        return num.toString();
                    }

                    computer(random());

                    function computer(num) {

                        if ((spaces["1"] !== 0) && (spaces["2"] !== 0) && (spaces["3"] !== 0) && (spaces["4"] !== !0) && (spaces["5"] !== 0) && (spaces["6"] !== 0) && (spaces["7"] !== 0) && (spaces["8"] !== 0) && (spaces["9"] !== 0)) {
                            checkWin()
                        }


                        while (spaces[num] !== 0) {
                            num = random()
                        }

                        box[parseInt(num - 1)].innerHTML = "0";
                        spaces[parseInt(num)] = "0";
                        checkWin();
                    }
                }

            }
        });
    }
}

// restart button event listener
for (var i = 0; i < restart.length; i++) {
    restart[i].addEventListener('click', function() {

        for (var i = 0; i < box.length; i++) {
            box[i].innerHTML = "";
            spaces[i + 1] = 0;
        }
        players.className = "row";
        symbol.className = "hidden";
        winner.className = "hidden";
        startmodal.classList.remove("hidden");
        bgmodal.classList.remove("hidden");
    });
}

// select "X"
X.addEventListener('click', function() {
    //set turn to the opposite so when you click it is your turn
    player = 'X';
    turn = 'O';
    startmodal.className = "hidden";
    bgmodal.className = "hidden";

    if (mode === 'one player') {
        onePlayerStart()
    } else if (mode === 'two player') {
        twoPlayerStart()
    }
});

// select "O"
O.addEventListener('click', function() {
    //set turn to the opposite so when you click it is your turn
    player = 'O';
    turn = 'X';
    startmodal.className = "hidden";
    bgmodal.className = "hidden";
});

// close modal
for (var i = 0; i < closemodal.length; i++) {
    closemodal[i].addEventListener('click', function() {

        startmodal.className = "hidden";
        winner.className = "hidden";
        bgmodal.className = "hidden";
    });
}

function checkWin() {

    // check if three in a row for 'O'
    if ((spaces["1"] === "O" && spaces["2"] === "O" && spaces["3"] === "O") || (spaces["4"] === "O" && spaces["5"] === "O" && spaces["6"] === "O") || (spaces["7"] === "O" && spaces["8"] === "O" && spaces["9"] === "O") || (spaces["1"] === "O" && spaces["4"] === "O" && spaces["7"] === "O") || (spaces["2"] === "O" && spaces["5"] === "O" && spaces["8"] === "O") || (spaces["4"] === "O" && spaces["6"] === "O" && spaces["9"] === "O") || (spaces["1"] === "O" && spaces["5"] === "O" && spaces["9"] === "O") || (spaces["3"] === "O" && spaces["5"] === "O" && spaces["7"] === "O")) {

        winner.classList.remove("hidden");
        whoWins.innerHTML = "'O' Wins!!";
        bgmodal.classList.remove("hidden");
        console.log("O WINS!!");
        return true;
    }

    // check if three in a row for 'X'
    else if ((spaces["1"] === "X" && spaces["2"] === "X" && spaces["3"] === "X") || (spaces["4"] === "X" && spaces["5"] === "X" && spaces["6"] === "X") || (spaces["7"] === "X" && spaces["8"] === "X" && spaces["9"] === "X") || (spaces["1"] === "X" && spaces["4"] === "X" && spaces["7"] === "X") || (spaces["2"] === "X" && spaces["5"] === "X" && spaces["8"] === "X") || (spaces["4"] === "X" && spaces["6"] === "X" && spaces["9"] === "X") || (spaces["1"] === "X" && spaces["5"] === "X" && spaces["9"] === "X") || (spaces["3"] === "X" && spaces["5"] === "X" && spaces["7"] === "X")) {

        winner.classList.remove("hidden");
        whoWins.innerHTML = "'X' Wins!!";
        bgmodal.classList.remove("hidden");
        console.log("X WINS!!");
        return true;
    }

    // check for draw
    else if ((spaces["1"] === "X" || spaces["1"] === "O") && (spaces["2"] === "X" || spaces["2"] === "O") && (spaces["3"] === "X" || spaces["3"] === "O") && (spaces["4"] === "X" || spaces["4"] === "O") && (spaces["5"] === "X" || spaces["5"] === "O") && (spaces["6"] === "X" || spaces["6"] === "O") && (spaces["7"] === "X" || spaces["7"] === "O") && (spaces["8"] === "X" || spaces["8"] === "O") && (spaces["9"] === "X" || spaces["9"] === "O")) {

        winner.classList.remove("hidden");
        whoWins.innerHTML = "Draw!!";
        bgmodal.classList.remove("hidden");
        console.log("Draw");
        return true;
    }
}