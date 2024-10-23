let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');
let minutesEl = document.getElementById('minutes');
let secondsEl = document.getElementById('seconds');
let millisecondsEl = document.getElementById('milliseconds');

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let isRunning = false;

// Function to start the stopwatch
function startStopwatch() {
    interval = setInterval(() => {
        milliseconds += 10;

        if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds += 1;
        }

        if (seconds >= 60) {
            seconds = 0;
            minutes += 1;
        }

        updateDisplay();
    }, 10);
}

// Function to stop the stopwatch
function stopStopwatch() {
    clearInterval(interval);
}

// Function to reset the stopwatch
function resetStopwatch() {
    stopStopwatch();
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
}

// Function to update the display
function updateDisplay() {
    minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
    millisecondsEl.textContent = milliseconds < 100 ? (milliseconds < 10 ? '00' + milliseconds : '0' + milliseconds) : milliseconds;
}

// Start button event listener
startBtn.addEventListener('click', () => {
    if (!isRunning) {
        startStopwatch();
        isRunning = true;
    }
});

// Stop button event listener
stopBtn.addEventListener('click', () => {
    if (isRunning) {
        stopStopwatch();
        isRunning = false;
    }
});

// Reset button event listener
resetBtn.addEventListener('click', resetStopwatch);
