// =========== Canvas ========= //

var mainCanvas = document.getElementById("myCanvas");
var mainContext = mainCanvas.getContext("2d");

function draw() {

    var arcStart = 0 * Math.PI;
    var arcEnd = 2 * Math.PI;

    mainContext.beginPath();
    mainContext.arc(150, 150, 100, arcStart, arcEnd, false);

    // draw the full circle in grey
    mainContext.lineWidth = 10;
    mainContext.strokeStyle = "rgba(53, 50, 56, 1.0)";
    mainContext.stroke();

    mainContext.beginPath();
    mainContext.arc(150, 150, 100, arcStart, arcEnd, false);

    // draw the pink progress
    mainContext.lineWidth = 10;
    mainContext.strokeStyle = "rgba(216, 0, 96, 1.0)";
    mainContext.stroke();
}

// draw canvas
draw();


// ============ Timer ============= //

var counter = 0;
var timeLeft = 1500;
var timeLeftRest = 300;
var intervalId;
var audio = new Audio('alarm.mp3');

// DOM variables
var counterDom = document.getElementById('time');
var counterContent = document.getElementById('counter-content');
var myP = document.getElementById("myP");

// Colors
var pink = "rgba(216, 0, 96, 1.0)";
var white = "rgba(208, 208, 208, 1.0)";

// conversion for minutes
function convertMins(secs) {

    var minutes = Math.floor(secs / 60);
    var seconds = secs % 60;

    // add zeros to front of single digits
    if (seconds < 10) {
        return minutes + ':' + '0' + seconds;
    }
    else {
        return minutes + ':' + seconds;
    }
}

// Reset
function reset() {
    counter = 0;
    counterContent.style.background = "none";
    counterDom.innerHTML = (convertMins(timeLeft - counter));myP.style.color = pink;
    minus.style.color = white;
    plus.style.color = white;
    myP.innerHTML = "Rest 5:00";
}

// Main function
function countDown() {
    // take input and make seconds from it
    // timeLeft = seconds;
    counter = 0;
    counterContent.style.background = "none";
    counterDom.innerHTML = (convertMins(timeLeft - counter));
    myP.style.color = pink;
    minus.style.color = white;
    plus.style.color = white;
    myP.innerHTML = "Rest 5:00";

    count();

    function count() {
        // if time hasn't run out update DOM
        if (timeLeft - counter > 0) {
            counterDom.innerHTML = (convertMins(timeLeft - counter));
            counter++;
        }
        // if time has run out, run 5minute rest timer and play sound
        else {
            clearInterval(intervalId);
            rest();
            audio.play();
        }
    }

    // interval timer 1 second
    intervalId = setInterval(count, 1000);
}

// rest timer
function rest() {
    // timeLeft set to 5mins with 300
    counter = 0;
    counterDom.innerHTML = (convertMins(timeLeftRest - counter));
    counterContent.style.background = pink;
    myP.style.color = white;
    minus.style.color = pink;
    plus.style.color = pink;
    myP.innerHTML = "REST";

    restCount();
    function restCount() {
        // if time hasn't run out update dom
        if (timeLeftRest - counter > 0) {
            counterDom.innerHTML = (convertMins(timeLeftRest - counter));
            counter++;
        }
        // if time has run out, run stop Pomodoro
        else {
            clearInterval(intervalId);
            stopPomodoro();
            audio.play();
            return;
        }
    }

    // interval timer 1 second
    intervalId = setInterval(restCount, 1000);
}


//  --------- event listeners --------- //

var button = document.getElementById("start-button");

// initially add event istener to run start
button.addEventListener('click', startPomodoro);

// start Pomodoro
function startPomodoro() {
    button.removeEventListener('click', startPomodoro);
    button.addEventListener('click', stopPomodoro);
    clearInterval(intervalId);
    audio.pause();
    counterContent.style.background = "none";
    countDown();
    button.innerHTML = 'RESTART';
}

// reset Pomodoro
function stopPomodoro() {
    button.removeEventListener('click', stopPomodoro);
    button.addEventListener('click', startPomodoro);
    clearInterval(intervalId);
    audio.pause();
    counterContent.style.background = "none";
    reset();
    button.innerHTML = 'START';
}


// DOM variables for plus and minus
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');

plus.addEventListener('click', function (e) {
    e.preventDefault();
    timeLeft = timeLeft + 60;
    counterDom.innerHTML = (convertMins(timeLeft - counter));

});

minus.addEventListener('click', function (e) {
    e.preventDefault();
    if (timeLeft > 60) {
        timeLeft = timeLeft - 60;
        counterDom.innerHTML = (convertMins(timeLeft - counter));
    }
});