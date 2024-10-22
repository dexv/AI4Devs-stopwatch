let stopwatchInterval;
let stopwatchTime = 0;
let stopwatchRunning = false;

const stopwatchDisplay = document.getElementById("stopwatch-display");
const stopwatchStartBtn = document.getElementById("stopwatch-start");
const stopwatchClearBtn = document.getElementById("stopwatch-clear");

stopwatchStartBtn.addEventListener("click", () => {
    if (!stopwatchRunning) {
        stopwatchRunning = true;
        stopwatchStartBtn.innerText = "Pause";
        stopwatchStartBtn.classList.replace("bg-green-500", "bg-blue-500");

        stopwatchInterval = setInterval(() => {
            stopwatchTime += 10;
            updateStopwatchDisplay();
        }, 10);
    } else {
        clearInterval(stopwatchInterval);
        stopwatchRunning = false;
        stopwatchStartBtn.innerText = "Continue";
        stopwatchStartBtn.classList.replace("bg-blue-500", "bg-green-500");
    }
});

stopwatchClearBtn.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    updateStopwatchDisplay();
    stopwatchRunning = false;
    stopwatchStartBtn.innerText = "Start";
    stopwatchStartBtn.classList.replace("bg-blue-500", "bg-green-500");
});

function updateStopwatchDisplay() {
    const hours = Math.floor(stopwatchTime / (1000 * 60 * 60));
    const minutes = Math.floor((stopwatchTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((stopwatchTime % (1000 * 60)) / 1000);
    const milliseconds = stopwatchTime % 1000;
    stopwatchDisplay.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${padMilliseconds(milliseconds)}`;
}

function pad(num) {
    return num.toString().padStart(2, '0');
}

function padMilliseconds(num) {
    return num.toString().padStart(3, '0');
}

// Countdown
let countdownTime = 0;
let countdownInterval;
let countdownRunning = false;

const countdownDisplay = document.getElementById("countdown-display");
const countdownSetBtn = document.getElementById("countdown-set");
const countdownClearBtn = document.getElementById("countdown-clear");
const countdownStartBtn = document.getElementById("countdown-start");
const countdownClearControlBtn = document.getElementById("countdown-clear-control");
const countdownResetBtn = document.getElementById("countdown-reset");

countdownSetBtn.addEventListener("click", () => {
    countdownTime = 10000; // Default to 10 seconds if nothing is set
    updateCountdownDisplay();
    document.getElementById("countdown-setup").classList.add("hidden");
    document.getElementById("countdown-controls").classList.remove("hidden");
});

countdownClearBtn.addEventListener("click", () => {
    countdownTime = 0;
    updateCountdownDisplay();
});

countdownStartBtn.addEventListener("click", () => {
    if (!countdownRunning) {
        countdownRunning = true;
        countdownStartBtn.innerText = "Pause";
        countdownStartBtn.classList.replace("bg-green-500", "bg-blue-500");

        countdownInterval = setInterval(() => {
            countdownTime -= 10;
            if (countdownTime <= 0) {
                clearInterval(countdownInterval);
                countdownDisplay.classList.add("bg-red-500");
                // Trigger alarm sound
            } else {
                updateCountdownDisplay();
            }
        }, 10);
    } else {
        clearInterval(countdownInterval);
        countdownRunning = false;
        countdownStartBtn.innerText = "Continue";
        countdownStartBtn.classList.replace("bg-blue-500", "bg-green-500");
    }
});

countdownClearControlBtn.addEventListener("click", () => {
    clearInterval(countdownInterval);
    countdownRunning = false;
    countdownTime = 10000; // Reset to initial value
    updateCountdownDisplay();
    countdownStartBtn.innerText = "Start";
    countdownStartBtn.classList.replace("bg-blue-500", "bg-green-500");
});

countdownResetBtn.addEventListener("click", () => {
    clearInterval(countdownInterval);
    countdownRunning = false;
    countdownTime = 0;
    updateCountdownDisplay();
    document.getElementById("countdown-controls").classList.add("hidden");
    document.getElementById("countdown-setup").classList.remove("hidden");
});

function updateCountdownDisplay() {
    const hours = Math.floor(countdownTime / (1000 * 60 * 60));
    const minutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countdownTime % (1000 * 60)) / 1000);
    const milliseconds = countdownTime % 1000;
    countdownDisplay.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${padMilliseconds(milliseconds)}`;
}
