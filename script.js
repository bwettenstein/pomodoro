const title = document.getElementById('web-title');

const displayedTime = document.getElementById('displayed-time');

// Declaration for settings 
const hamburgerIcon = document.querySelector('.change-settings');
const timerContainer = document.querySelector('.timer-container');
const settings = document.querySelector('.settings');

const addSessionTimeButton = document.querySelector('.add-session-time');
const decSessionTimeButton = document.querySelector('.decrease-session-time');
const sessionTimeInSettings = document.querySelector('.session-time');
const addBreakTimeButton = document.querySelector('.add-break-time');
const decBreakTimeButton = document.querySelector('.decrease-break-time');
const breakTimeInSettings = document.querySelector('.break-time');

//

const sessionStatement = document.querySelector('.session-statement');

const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const stopButton = document.querySelector('#stop');

// The text on the tab will change based on the time that is left
const tabText = document.getElementById('web-title');

let clockActive = false;
let sessionType = "work"

// 25 minutes in seconds
const defaultSession = 1500;
// 5 minutes in seconds
const defaultBreak = 300;

let newWorkDuration;
let newBreakDuration;

let currentWorkDuration = defaultSession;
let timeLeftInSession = defaultSession;

let currentBreakDuration = defaultBreak;

// Button declarations for settings
hamburgerIcon.addEventListener('click', () => {
    if (timerContainer.className === "timer-container") {
        timerContainer.classList.add("inactive");
        settings.classList.add("active");
    } else {
        timerContainer.classList.remove("inactive");
        settings.classList.remove("active");
    }
})

addSessionTimeButton.addEventListener('click', () => {
    modifySessionTime("add");
    sessionTimeInSettings.innerText = parseInt(sessionTimeInSettings.innerHTML) + 1;
    updateDisplay();
})

// BUGGED if you set the session to 1 minute and the break to 1 minute 
decSessionTimeButton.addEventListener('click', () => {
    if (sessionTimeInSettings.innerText - 1 === 0) {
        alert("You cannot have a session that lasts less than 1 minute");
    } else {
        modifySessionTime("dec");
        sessionTimeInSettings.innerText = parseInt(sessionTimeInSettings.innerText) - 1;
    }
    updateDisplay();
})

addBreakTimeButton.addEventListener('click', () => {
    modifyBreakTime("add");
    breakTimeInSettings.innerText = parseInt(breakTimeInSettings.innerHTML) + 1; 
})

decBreakTimeButton.addEventListener('click', () => {
    if (breakTimeInSettings.innerText - 1 === 0) {
        alert("You cannot have a break that lasts less than 1 minute");
    } else {
        modifySessionTime("dec");
        breakTimeInSettings.innerText = parseInt(breakTimeInSettings.innerText) - 1;
    }
})


startButton.addEventListener('click', () => {
    toggleClock();
})

pauseButton.addEventListener('click', () => {
    toggleClock();
})

stopButton.addEventListener('click', () => {
    toggleClock(true);
})

const toggleClock = (resetClock) => {
    if (resetClock) {
        stopClock();
        // Stop the clock   
    } else {
        if (clockActive === true) {
            // Pause the clock
            clearInterval(clockTimer);
            clockActive = false;
        } else {
            // Start the clock
            clockTimer = setInterval(() => {
                decreaseTime();
                updateDisplay();
            }, 1000);
            clockActive = true;

        } 
    }
}

const decreaseTime = () => {
    if (timeLeftInSession > 0) {
        timeLeftInSession--;
    } else if (timeLeftInSession == 0) {
        if (sessionType == "work") {
            timeLeftInSession = currentBreakDuration;
            sessionType = "break";
        } else {
            timeLeftInSession = currentWorkDuration;
            sessionType = "work";
        }
    }
    updateSessionStatement(sessionType);
    updateDisplay();
}

const stopClock = () => {
    // Reset the timer
    clearInterval(clockTimer);
    // Set the clock's status to false
    clockActive = false;
    // Reset the session time
    timeLeftInSession = currentWorkDuration;
    // Update the display
    updateDisplay();
    sessionType = "work";
}

const updateDisplay = () => {
    const secLeft = timeLeftInSession;
    let result = '';
    const seconds = secLeft % 60;
    const minutes = parseInt(secLeft/60) % 60;
    let hours = parseInt(secLeft/3600);

    if (hours > 0) {
        result += `${hours}:`;
    } 
    result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`;   
    displayedTime.innerText = result;
    tabText.innerText = result;
}

const updateSessionStatement = (sessionType) => {
    if (sessionType === "work") {
        sessionStatement.innerText = "Time to work";
    } else {
        sessionStatement.innerText = "Time to take a break!";
    }
}

    // If the number is less than 10, there should be a 0 next to it 
    // EX - If there are 8 seconds left, it should be displayed as 08
let addLeadingZeroes = (time) => {
    if (time < 10) {
        return `0${time}`;
    } else {
        return time;
    }
}

const modifySessionTime = (action) => {
    let newTimeInSec;
    if (action === "add") {
        newTimeInSec = [parseInt(sessionTimeInSettings.innerText) + 1] * 60;
    } else {
        newTimeInSec = [parseInt(sessionTimeInSettings.innerText) - 1] * 60;
    }
    currentWorkDuration = newTimeInSec;
    timeLeftInSession = currentWorkDuration;
}

const modifyBreakTime = (action) => {
    let newTimeInSec;
    if (action === "add") {
        newTimeInSec = [parseInt(breakTimeInSettings.innerText) + 1] * 60;
    } else {
        newTimeInSec = [parseInt(breakTimeInSettings.innerText) - 1] * 60;
    }
    currentBreakDuration = newTimeInSec;
}
