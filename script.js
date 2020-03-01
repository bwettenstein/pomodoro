// const tensMin = document.getElementById('tens-minute');
// const addTensMin = document.getElementById('tens-min-add');
// const subTensMin = document.getElementById('tens-min-sub');

// addTensMin.addEventListener('click', () => {
//     tensMin.innerHTML = parseInt(tensMin.innerHTML) + 1;
// })

// subTensMin.addEventListener('click', () => {
//     tensMin.innerHTML = parseInt(tensMin.innerHTML) - 1;
// })

const tensPlaceMin = document.getElementById('tens-minute');
const onesPlaceMin = document.getElementById('ones-minute');
const colon = document.getElementById('colon');
const tensPlaceSec = document.getElementById('tens-second');
const onesPlaceSec = document.getElementById('ones-second');

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

let defaultTime = tensPlaceMin.innerHTML + onesPlaceMin.innerHTML +  
    colon.innerHTML + tensPlaceSec.innerHTML + onesPlaceSec.innerHTML;

const reset = () => {
    tensPlaceMin.innerHTML = "2";
    onesPlaceMin.innerHTML = "5";
    tensPlaceSec.innerHTML = "0";
    onesPlaceSec.innerHTML = "0";
}

resetButton.addEventListener('click', () => {
    tensPlaceMin.innerHTML = "2";
    onesPlaceMin.innerHTML = "5";
    tensPlaceSec.innerHTML = "0";
    onesPlaceSec.innerHTML = "0";
});

