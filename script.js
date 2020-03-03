
// addTensMin.addEventListener('click', () => {
//     tensMin.innerHTML = parseInt(tensMin.innerHTML) + 1;
// })

// subTensMin.addEventListener('click', () => {
//     tensMin.innerHTML = parseInt(tensMin.innerHTML) - 1;
// })


const title = document.getElementById('web-title');

const displayedTime = document.getElementById('displayed-time');

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');

let clockActive = false;

const defaultSession = 1500;
const defaultBreak = 300;

// 25 minutes in seconds
let currentSession = defaultSession;
let timeLeftInSession = defaultSession;

// 5 minutes in seconds
let currentBreak = defaultBreak;

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
            clockActive = true;
            clockTimer = setInterval(() => {
                timeLeftInSession--;
                updateDisplay();
            }, 1000)
        } 
    }
}

const stopClock = () => {
    // Reset the timer
    clearInterval(clockTimer);
    // Set the clock's status to false
    clockActive = false;
    // Reset the session time
    timeLeftInSession = currentSession;
    // Update the display
    updateDisplay();
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




